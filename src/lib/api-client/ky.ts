import { Auth } from 'aws-amplify';
import ky, { AfterResponseHook, BeforeRequestHook } from 'ky';

import { API_ENDPOINT } from '@/config';

const afterResponse: AfterResponseHook = (request, options, response) => {
  console.log('[afterResponse]');
  console.log(response);
};

const beforeRequest: BeforeRequestHook = (request) => {
  return Auth.currentSession().then((session) => {
    const header = request.headers.get('Authorization');
    if (header) {
      request.headers.set(
        'Authorization',
        header.replace('Bearer', session.getAccessToken().getJwtToken())
      );
    }
  });
};

export const apiClient = ky.create({
  prefixUrl: API_ENDPOINT + '/api',
  headers: { 'Content-Type': 'application/json' },
  timeout: 60000,
  hooks: { beforeRequest: [beforeRequest], afterResponse: [afterResponse] },
});

export const apiClientWithoutAuth = ky.create({
  prefixUrl: API_ENDPOINT + '/api',
  headers: { 'Content-Type': 'application/json' },
  timeout: 60000,
  hooks: { afterResponse: [afterResponse] },
});
