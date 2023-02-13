import { Dispatch, SetStateAction } from 'react';
import css from 'styled-jsx/css';
import { TItems, TItemStatus } from '@/pages';
import DragDropContext from '@/dnd/DragDropContext';
import Droppable from '@/dnd/Droppable';
import Draggable from '@/dnd/Draggable';

export default function DragComponent({
  items,
  setItems,
}: {
  items: TItems;
  setItems: Dispatch<SetStateAction<TItems>>;
}) {
  const onDragEnd = (event) => {
    console.log(event);
    console.log('onDragEnd');
    setItems((prev) => {
      console.log(prev);
      // const [removed] = prev.todo.splice(event.source.index, 1);
      // prev.todo.splice(event.change.index, 0, removed);
      return prev;
    });
  };

  const snapshot = () => {
    console.log('snapshot');
  };

  return (
    <>
      <div>
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="container">
            {Object.keys(items).map((key) => (
              <Droppable key={key} droppableId={key} snapshot={snapshot}>
                {(provided) => (
                  <div key={key} className="wrapper" {...provided}>
                    {items[key as TItemStatus].map((item, index) => (
                      <Draggable key={item.id} draggableId={item.id} index={index}>
                        {(provided) => {
                          return (
                            <div className="item" {...provided} ref={provided.innerref}>
                              <div>{item.title}</div>
                              <div>Make the world beatiful</div>
                            </div>
                          );
                        }}
                      </Draggable>
                    ))}
                  </div>
                )}
              </Droppable>
            ))}
          </div>
        </DragDropContext>
      </div>
      <style jsx>{style}</style>
    </>
  );
}

const style = css`
  .container {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
  .wrapper {
    display: flex;
    flex-direction: column;
    width: 250px;
    gap: 5px;
    border: 1px solid gray;
    padding: 5px;
  }
  .item {
    border: 1px solid black;
  }
`;
