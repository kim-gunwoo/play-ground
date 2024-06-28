import { Todo, todosState } from '@/domain/Todo';
import { useSnapshot } from 'valtio';

interface TodoListProps {
  todos?: Todo[];
}

// export default function MemoList({ todos }: TodoListProps) {
export default function MemoList() {
  const todosStore = useSnapshot(todosState);
  const todos = todosStore.getTodos();

  return (
    <div>
      <div></div>
      {todos?.map((todo) => (
        <div key={todo.id}>
          <div>
            {todo.id} : {todo.content}
          </div>
        </div>
      ))}
    </div>
  );
}
