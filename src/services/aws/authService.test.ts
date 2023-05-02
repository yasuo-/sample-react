import { Auth } from 'aws-amplify';

import { awsAuthService } from './authService';

describe.skip('awsAuthService', () => {
  describe.skip('getIdToken', () => {
    it('should return id token', async () => {
      // @ts-ignore
      const spy = jest.spyOn(Auth, 'currentSession').mockImplementation(() => ({
        getIdToken: () => ({
          getJwtToken: () => '123',
        }),
      }));

      const result = await awsAuthService.getIdToken();
      expect(result).toBe('123');
      spy.mockRestore();
    });
  });

  describe('signUp', () => {
    it.skip('should sign up', async () => {
      jest.spyOn(Auth, 'signUp');
    });
  });

  describe('signIn', () => {
    it.skip('should sign in', async () => {
      // todo: mock signIn
      jest.spyOn(Auth, 'signIn');
    });
  });

  describe('signInConfirmOtp', () => {
    it.skip('should sign in confirm otp', async () => {
      // todo: mock sendCustomChallengeAnswer
      jest.spyOn(Auth, 'sendCustomChallengeAnswer');
    });
  });

  describe('signInWithPassword', () => {
    it.skip('should sign in with password', async () => {
      // todo: mock signIn
      jest.spyOn(Auth, 'signIn');
    });
  });

  describe('logout', () => {
    it.skip('should logout', async () => {
      // todo: mock signOut
      jest.spyOn(Auth, 'signOut');
    });
  });
});
