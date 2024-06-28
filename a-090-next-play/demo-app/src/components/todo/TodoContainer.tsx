'use client';

import CreateMemo from '@/components/todo/CreateTodo';
import TodoList from '@/components/todo/TodoList';
import { todosState } from '@/domain/Todo';
import useTodosQuery from '@/hooks/todo/useTodosQuery';
import { useSnapshot } from 'valtio';

export default function TodoContainer() {
  // const { data: todos } = useTodosQuery();
  // const { data } = useTodosQuery();
  // const todos = data?.pages.flatMap((page) => page);
  // console.log(data?.pages);

  // const todosStore = useSnapshot(todosState);

  return (
    <div>
      <CreateMemo />
      {/* <TodoList todos={todosStore.getTodos()} /> */}
      <TodoList />
    </div>
  );
}
