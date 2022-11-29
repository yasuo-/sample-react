import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import type { SignInFormVale } from '@/types/form/authForm';

import { authService } from '@/services';

export const useSignInFormFeature = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);

  const onSubmit = async (data: SignInFormVale) => {
    setIsSubmitting(true);
    const body = {
      username: data.email,
    };
    try {
      const res = await authService.signIn(body);
      navigate('/signin/confirm-otp', {
        state: { user: res },
      });
    } catch (e: any) {
      console.error(e);
      let message = e.message;
      if (e.code === 'InvalidParameterException') {
        message = 'Custom auth lambda trigger is not configured for the user pool';
      }
      if (e.code === 'UserNotFoundException') {
        message = 'User does not exist.';
      }
      if (e.code === 'PasswordResetRequiredException') {
        message = 'Password reset required for the user.';
      }
      if (e.code === 'UserLambdaValidationException') {
        message = 'failed with error Email address is not verified.';
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
