import React from 'react';

import { QueryClient } from '@tanstack/react-query';

import { Outlet } from 'react-router-dom';

import { API_ENDPOINT } from '@/config';
import { apiClient } from '@/lib/api-client/ky';

interface GetError {
  error: Error;
  data: null;
}

const getAccount = () =>
  apiClient
    .get(API_ENDPOINT)
    .then((res) => res.json())
    .then((res) => [res, null])
    .catch((err) => [null, err as GetError]);

const accountQuery = () => ({
  queryKey: ['account'],
  queryFn: () => getAccount(),
});

export const fetchAccount = (queryClient: QueryClient) => async () => {
  const res = await queryClient.fetchQuery(accountQuery());
  return { data: res[0], error: res[1] };
};

export const Account = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

Account.displayName = 'AccountLayout';
export default Account;
