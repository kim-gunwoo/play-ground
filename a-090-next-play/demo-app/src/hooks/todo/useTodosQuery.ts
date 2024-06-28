import { TodoApi } from '@/api';
import { QueryKeys } from '@/constant/QueryKeys';
import { TodoInterface } from '@/domain/Todo';
import {
  DefinedInitialDataInfiniteOptions,
  InfiniteData,
  UndefinedInitialDataInfiniteOptions,
  UseInfiniteQueryOptions,
  UseInfiniteQueryResult,
  UseQueryOptions,
  useInfiniteQuery,
  useQuery,
} from '@tanstack/react-query';
import { AxiosError } from 'axios';

export default function useTodosQuery(
  options?: Omit<UndefinedInitialDataInfiniteOptions<TodoInterface[]>, 'queryKey' | 'queryFn' | 'initialPageParam' | 'getNextPageParam'>,
) {
  return useInfiniteQuery({
    queryKey: QueryKeys.Todos(),
    queryFn: ({ pageParam }) => TodoApi.getAll(pageParam),
    initialPageParam: 1,
    ...options,
    getNextPageParam: () => {
      return undefined;
    },
    getPreviousPageParam: () => {
      return undefined;
    },
  });
}

function useTodoQuery(options?: Omit<UseQueryOptions<TodoInterface[], AxiosError>, 'queryKey'>) {
  return useQuery({
    queryKey: QueryKeys.Todos(),
    queryFn: () => TodoApi.getAll(),
    ...options,
  });
}
