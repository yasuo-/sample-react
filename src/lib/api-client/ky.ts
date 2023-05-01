import { Auth } from 'aws-amplify';
// todo: 'ky' is declared here.
// // @ts-expect-error
// error TS2578: Unused '@ts-expect-error' directive.
import ky from 'ky';

import type { AfterResponseHook, BeforeRequestHook } from 'ky';

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
