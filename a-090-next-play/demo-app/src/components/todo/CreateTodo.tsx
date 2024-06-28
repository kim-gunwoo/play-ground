'use client';
import { todosState } from '@/domain/Todo';
import styles from './CreateTodo.module.scss';

interface FormInterface {
  todo: { value: string };
}

export default function CreateTodo() {
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & FormInterface;
    target.todo.value;
    todosState.addTodo({
      content: target.todo.value,
    });
    target.todo.value = '';
  };

  return (
    <form className={styles.container} onSubmit={onSubmit}>
      <label htmlFor="todo">Todo</label>
      <input id="todo" type="text" name="todo" />
      <button type="submit">add</button>
    </form>
  );
}
