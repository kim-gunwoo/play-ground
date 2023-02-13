import { RefObject, useContext, useMemo, useRef } from 'react';
import { DndContext } from './DragDropContext';

// type TElement = HTMLElement;
type TElement = HTMLDivElement;

interface IProvided {
  innerref: RefObject<TElement>;
  'data-droppable-id': string;
}

interface IProps {
  droppableId: string;
  snapshot: () => void;
  children: (provided: IProvided, snapshot?: any) => React.ReactElement;
}

export default function Droppable(props: IProps) {
  const dndContext = useContext(DndContext);
  const dropRef = useRef<TElement>(null);

  const provided: IProvided = useMemo(() => {
    return {
      innerref: dropRef,
      'data-droppable-id': props.droppableId,
    };
  }, [props.droppableId]);

  // if (!!dropRef.current) {
  //   dndContext?.setCloneElements && dndContext.setCloneElements(dropRef.current);
  // }

  return props.children(provided);
}
