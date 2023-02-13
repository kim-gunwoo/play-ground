import { useState } from 'react';

export type TItemStatus = 'todo' | 'doing';

type TItem = {
  id: string;
  status: TItemStatus;
  title: string;
  index: number;
};

export type TItems = {
  [key in TItemStatus]: TItem[];
};

export default function Page() {
  const [items, setItems] = useState<TItems>({
    todo: [...Array(5)].map((_, i) => ({
      id: `${i}${i}${i}`,
      title: `Title ${i + 1}`,
      status: 'todo',
      index: i,
    })),
    doing: [...Array(5)].map((_, i) => ({
      id: `${i}${i}${i}`,
      title: `Title ${i + 1}`,
      status: 'todo',
      index: i,
    })),
  });

  return (
    <div>
      {Object.keys(items).map((key) => (
        <div key={key} className="wrapper">
          {items[key as TItemStatus].map((item, index) => (
            <div
              key={index}
              className="item"
              draggable
              onDragOver={(e) => {
                e.preventDefault();
              }}
              onDrop={(e) => {
                console.log(e);
              }}
            >
              <div>{item.title}</div>
              <div>Make the world beatiful</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
