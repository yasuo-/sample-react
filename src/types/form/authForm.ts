export interface SignInFormVale {
  email: string;
}

export interface SignInConfirmFormVale {
  code: string;
}

export type PasswordSignInFormVale = SignInFormVale & {
  password: string;
};

export interface SignupFormVale {
  email: string;
  password: string;
  confirmPassword: string;
}
