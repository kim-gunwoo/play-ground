import {
  createContext,
  Dispatch,
  MutableRefObject,
  ReactElement,
  RefObject,
  SetStateAction,
  useCallback,
  useRef,
  useState,
} from 'react';

interface IProps {
  onDragEnd: (event: React.DragEvent<HTMLElement>) => void;
  children: ReactElement | null;
  // children: (element: RefObject<TElement | undefined>) => React.ReactElement;
}

// type TElement = HTMLDivElement;
type TElement = HTMLElement | HTMLDivElement;

interface DndCcontextInterface {
  // startRef?: RefObject<TElement>;
  // overRef?: RefObject<TElement>;
  // cloneElements?: RefObject<TElement>;
  // cloneElements?: MutableRefObject<TElement>;
  cloneElements?: TElement | null;
  setCloneElements?: (element: TElement) => void;
  startElement?: TElement;
  overRef?: RefObject<TElement>;
  startIndex: number;
  overIndex: number;
  onDragEnd: (
    event: any,
    // {
    // source: {
    //   'data-draggable-id': string;
    //   'data-draggable-index': number;
    // };
    // change: {
    //   'data-draggable-id': string;
    //   'data-draggable-index': number;
    // };
    // }
  ) => void;
}

export const DndContext = createContext<DndCcontextInterface | null>(null);

export default function DragDropContext(props: IProps) {
  const dndRef = useRef<TElement>(null);
  const startRef = useRef<TElement | undefined>(undefined);
  const overRef = useRef<TElement>(null);
  const startIndex = useRef<number>(-1);
  const overIndex = useRef<number>(-1);

  const onDragEndHandle = useCallback(
    (event: React.DragEvent<HTMLElement>) => {
      props.onDragEnd(event);
    },
    [props],
  );

  return (
    <DndContext.Provider
      value={{
        startElement: startRef.current,
        overRef,
        startIndex: startIndex.current,
        cloneElements: dndRef.current,
        overIndex: overIndex.current,
        onDragEnd: onDragEndHandle,
      }}
    >
      {props.children}
    </DndContext.Provider>
  );
}
