import { useQueryClient } from '@tanstack/react-query';

import type { UseQueryOptions } from '@tanstack/react-query';

import { useAuthGuardContext } from '@/providers/AuthGuardProvider';

/**
 * usePrefetch
 * @param queryKey
 * @param fetcher
 * @param options
 */
export const usePrefetchApi = <
  TQueryKey extends [string, Record<string, unknown>?],
  TQueryFnData,
  TError = unknown,
  TData = TQueryFnData
>(
  queryKey: TQueryKey,
  fetcher: (params: TQueryKey[1], token: string) => Promise<TQueryFnData>,
  options?: Omit<UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>, 'queryKey' | 'queryFn'>
) => {
  const { accessToken } = useAuthGuardContext();

  const queryClient = useQueryClient();

  return () => {
    if (!queryKey[0]) {
      return;
    }

    void queryClient.prefetchQuery({
      queryKey,
      queryFn: async () => fetcher(queryKey[1], accessToken ?? ''),
      ...options,
    });
  };
};
