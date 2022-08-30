import { useQuery } from '@tanstack/react-query';

import type { UseQueryOptions } from '@tanstack/react-query';

import { useAuthGuardContext } from '@/providers/AuthGuardProvider';

/**
 * useQueryApi
 * @param queryKey
 * @param fetcher
 * @param options
 */
export const useQueryApi = <
  TQueryKey extends [string, Record<string, unknown>?],
  TQueryFnData,
  TError,
  TData = TQueryFnData
>(
  queryKey: TQueryKey,
  fetcher: (params: TQueryKey[1], token: string) => Promise<TQueryFnData>,
  options?: Omit<UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>, 'queryKey' | 'queryFn'>
) => {
  const { accessToken } = useAuthGuardContext();

  return useQuery({
    queryKey,
    queryFn: async () => fetcher(queryKey[1], accessToken || ''),
    ...options,
  });
};
