import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import type { PasswordSignInFormVale } from '@/types/form/authForm';

import { authService } from '@/services';

interface SignInError {
  code: string;
  message: string;
}

export const usePasswordSignInFormFeature = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);

  const errorMessages = (error: SignInError): string => {
    switch (error.code) {
      case 'InvalidParameterException':
        return 'Custom auth lambda trigger is not configured for the user pool.';
      case 'UserNotFoundException':
        return 'ユーザーが存在しません';
      case 'UserLambdaValidationException':
        return 'システムエラーが発生しました';
      case 'NotAuthorizedException':
        return 'ユーザー名またはパスワードが違います';
      default:
        return error.message;
    }
  };

  const onSubmit = async (data: PasswordSignInFormVale) => {
    setIsSubmitting(true);
    const body = {
      username: data.email,
      password: data.password,
    };
    try {
      await authService.signInWithPassword(body);
      navigate('/dashboard');
    } catch (e: never) {
      console.error(e);
      setError(errorMessages(e as SignInError));
    }
    setIsSubmitting(false);
  };

  return {
    isSubmitting,
    error,
    onSubmit,
  };
};
