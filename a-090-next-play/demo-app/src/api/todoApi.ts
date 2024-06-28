import { TodoInterface } from '@/domain/Todo';
import { defaultInstance } from './config';

export class TodoApi {
  static async getAll(params?: any): Promise<TodoInterface[]> {
    try {
      const response = await defaultInstance.get('/todos');
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
