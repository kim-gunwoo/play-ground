import { proxy } from 'valtio';

export interface TodoInterface {
  id: string;
  content: string;
}

export class Todo {
  id: string;
  content: string;

  constructor(todo: TodoInterface) {
    this.id = todo.id;
    this.content = todo.content;
  }
}

interface CreateTodoInterface {
  content: string;
}

class TodoList {
  private todos: Todo[] = [];

  get getNextId() {
    return (this.getTodos().length + 1).toString();
  }

  addTodo(todoEntity: CreateTodoInterface) {
    const todo = new Todo({
      id: this.getNextId,
      ...todoEntity,
    });
    this.todos.push(todo);
  }

  getTodos() {
    return this.todos;
  }
}

export const todosState = proxy<TodoList>(new TodoList());

interface PostInterface {
  status: 'A' | 'B' | 'C';
  id: string;
  title: string;
  content: string;
}

class Post {
  id: string;
  title: string;
  content: string;

  constructor(entity: PostInterface) {
    this.id = entity.id;
    this.title = entity.title;
    this.content = entity.content;
  }
}

interface PostAInterface extends PostInterface {
  status: 'A';
  reason: string;
}

class PostA extends Post {
  status: 'A';
  reason: string;

  constructor(entity: PostAInterface) {
    super(entity);
    this.status = entity.status;
    this.reason = entity.reason;
  }
}

interface PostBInterface extends PostInterface {
  status: 'B';
}

class PostB extends Post {
  status: 'B';

  constructor(entity: PostBInterface) {
    super(entity);
    this.status = entity.status;
  }
}

class Posts {
  posts: (PostA | PostB)[] = [];

  addPosts(post: PostA | PostB) {
    this.posts.push(post);
  }

  getAPosts() {
    return this.posts.filter((post) => post instanceof PostA);
  }

  getBPosts() {
    return this.posts.filter((post) => post instanceof PostB);
  }
}

const posts = new Posts();

posts.addPosts(
  new PostA({
    id: '1',
    status: 'A',
    title: 'title a 1',
    content: 'content',
    reason: '',
  }),
);

posts.addPosts(
  new PostB({
    id: '1',
    status: 'B',
    title: 'title a 1',
    content: 'content',
  }),
);

posts.getAPosts();
posts.getBPosts();
