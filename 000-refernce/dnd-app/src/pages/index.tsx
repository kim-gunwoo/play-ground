import { useState } from 'react';
import type { NextPage } from 'next';
import DragComponent from '@/components/Drag.component';

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

const Home: NextPage = () => {
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
    <div
      style={{
        height: '500px',
        overflow: 'auto',
      }}
    >
      <DragComponent items={items} setItems={setItems} />
    </div>
  );
};

export default Home;
