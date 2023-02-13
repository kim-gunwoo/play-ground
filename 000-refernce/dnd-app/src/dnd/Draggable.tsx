import { RefObject, useCallback, useContext, useMemo, useRef, useState } from 'react';
import { DndContext } from './DragDropContext';

// 어떤 Html 요소가 오는지 알 수 없음
// type TElement = unknown;
type TElement = HTMLElement;
// type TElement = HTMLDivElement;

interface IProvided {
  draggable: boolean;
  // innerref: RefObject<TElement>;
  'data-draggable-id': string | number;
  'data-draggable-index': number;
}

interface IProps {
  draggableId: string | number;
  index: number;
  children: (provided: IProvided, snapshot?: any) => React.ReactElement;
}

export default function Droppable(props: IProps) {
  const currentRef = useRef<TElement | null>(null);
  const dndContext = useContext(DndContext);
  const targetRef = useRef<TElement | null>(null);

  const provided: IProvided = useMemo(() => {
    return {
      draggable: true,
      innerref: currentRef,
      'data-draggable-id': props.draggableId,
      'data-draggable-index': props.index,
      onDragStart: (event: React.DragEvent<HTMLElement>): void => {
        const startPosition = event.currentTarget.dataset['draggableIndex'];
        const startId = event.currentTarget.dataset['draggableId'];
        const currentItem = event.currentTarget;
        currentRef.current = currentItem as TElement;
        dndContext!.startIndex = Number(startPosition);
        dndContext!.startElement = currentItem;
        dndContext!.cloneElements = currentItem.parentElement?.parentElement;
        dndContext!.cloneElements!.cloneNode(true);
        currentItem.style.opacity = '0.5';
      },
      onDragOver: (event: React.DragEvent<HTMLElement>): void => {
        event.preventDefault();
        const overPosition = event.currentTarget.dataset['draggableIndex'];
        const overItem = event.currentTarget;

        const startIndex = dndContext!.startIndex;
        const startElement = dndContext!.startElement;

        const overIndex = Number(overPosition);
        const originItem = dndContext!.cloneElements;

        const prevElement = originItem!.childNodes[overIndex] as HTMLElement;
        const nextElement = overItem.nextElementSibling as HTMLElement;

        const isForward = startIndex > overIndex;

        // targetRef.current = (isForward ? prevElement : nextElement) as TElement;
        // console.log(startElement);
        // console.log(prevElement);

        isForward
          ? overItem.parentElement!.insertBefore(startElement as HTMLElement, prevElement)
          : overItem.parentElement!.insertBefore(startElement as HTMLElement, nextElement);
      },
      // onDrop: (event: React.DragEvent<HTMLElement>): void => {
      //   console.log('drop');
      //   const target = event.currentTarget;
      //   console.log(target);
      //   // targetRef.current = target as TElement;
      // },
      onDragEnd: (event: React.DragEvent<HTMLElement>): void => {
        currentRef.current!.style.opacity = '1';
        const element = event.currentTarget;
        const dragWrapperElement = element.parentElement;
        dndContext?.onDragEnd({
          source: {
            id: element.dataset['draggableId'],
            index: props.index,
          },
          change: {
            id: targetRef.current?.dataset['draggableId'],
            index: Number(targetRef.current?.dataset['draggableIndex']),
          },
        });
        // dragWrapperElement!.parentElement?.parentElement?.replaceChildren(
        //   dndContext!.cloneElements as Element,
        // );
        dndContext!.startIndex = -1;
        dndContext!.startElement = undefined;
      },
    };
  }, [dndContext, props.draggableId, props.index]);

  return props.children(provided);
}
