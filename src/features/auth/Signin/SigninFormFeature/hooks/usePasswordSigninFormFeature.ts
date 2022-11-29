import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import type { PasswordSignInFormVale } from '@/types/form/authForm';

import { authService } from '@/services';

export const usePasswordSignInFormFeature = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);

  const onSubmit = async (data: PasswordSignInFormVale) => {
    setIsSubmitting(true);
    const body = {
      username: data.email,
      password: data.password,
    };
    try {
      await authService.signInWithPassword(body);
      navigate('/dashboard');
    } catch (e: any) {
      console.error(e);
      let message = e.message;
      if (e.code === 'InvalidParameterException') {
        message = 'Custom auth lambda trigger is not configured for the user pool.';
      }
      if (e.code === 'UserNotFoundException') {
        message = 'ユーザーが存在しません';
      }
      if (e.code === 'UserLambdaValidationException') {
        message = 'システムエラーが発生しました';
      }
      if (e.code === 'NotAuthorizedException') {
        message = 'ユーザー名またはパスワードが違います';
      }
      setError(message);
    }
    setIsSubmitting(false);
  };

  return {
    isSubmitting,
    error,
    onSubmit,
  };
};
