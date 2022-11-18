import { Auth } from 'aws-amplify';
import axios, { AxiosRequestConfig } from 'axios';

import { API_ENDPOINT } from '@/config';

export const axiosInstance = axios.create({
  baseURL: API_ENDPOINT + '/api',
  timeout: 60000,
});

axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
  return new Promise((resolve) => {
    const headers = config.headers || {};
    Auth.currentSession()
      .then((session) => {
        const idTokenExpire = session.getIdToken().getExpiration();
        const refreshToken = session.getRefreshToken();
        const currentTimeSeconds = Math.round(+new Date() / 1000);

        if (idTokenExpire < currentTimeSeconds) {
          return Auth.currentAuthenticatedUser().then((res) => {
            res.refreshSession(refreshToken, (error: Error, data: unknown) => {
              if (error) {
                Auth.signOut().finally();
                return resolve(config);
              }

              headers.Authorization = 'Bearer ' + data.getAccessToken().getJwtToken();
              resolve(config);
            });
          });
        }
        headers.Authorization = 'Bearer ' + session.getAccessToken().getJwtToken();
        resolve(config);
      })
      .catch(() => {
        // No logged-in user: don't set auth header
        resolve(config);
      });
  });
});
