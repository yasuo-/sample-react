import { Auth } from 'aws-amplify';

import type { SignUpParams } from '@aws-amplify/auth/src/types';

class AwsAuthService {
  constructor() {
    this.init();
  }

  async init() {
    await Auth.currentAuthenticatedUser();
  }

  private async session() {
    return await Auth.currentSession();
    // const jwtIdToken = currentSession.getIdToken().getJwtToken();
    // const cognitoId = currentSession.getIdToken().payload.sub;
    // return { jwtIdToken, cognitoId };
  }

  async getIdToken() {
    try {
      const session = await this.session();
      return session.getIdToken().getJwtToken();
    } catch (e) {
      console.log(e);
      return '';
    }
  }

  async signUp(params: SignUpParams) {
    await Auth.signUp(params);
  }

  async login(username: string, password: string) {
    await Auth.signIn(username, password);
  }

  async logout() {
    await Auth.signOut();
  }
}

export const awsAuthService = new AwsAuthService();
