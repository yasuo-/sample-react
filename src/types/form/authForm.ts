export type SignInFormVale = {
  email: string;
};

export type SignInConfirmFormVale = {
  code: string;
};

export type PasswordSignInFormVale = SignInFormVale & {
  password: string;
};

export type SignupFormVale = {
  email: string;
  password: string;
  confirmPassword: string;
};
