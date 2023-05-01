import { useState } from 'react';

import type { SignupFormVale } from '@/types/form/authForm';

import { authService } from '@/services';

interface SignupError {
  code: string;
  message: string;
}

export const useSignupFormFeature = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);

  const onSubmit = async (data: SignupFormVale) => {
    setIsSubmitting(true);
    const body = {
      username: data.email,
      password: data.password,
    };
    try {
      await authService.signUp(body);
    } catch (e) {
      console.error(e);
      setError(e.message as SignupError['message']);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    isSubmitting,
    error,
    onSubmit,
  };
};
