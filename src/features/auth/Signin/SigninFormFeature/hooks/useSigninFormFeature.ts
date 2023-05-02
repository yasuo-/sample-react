import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import type { SignInFormVale } from '@/types/form/authForm';

import { authService } from '@/services';

interface SignInError {
  code: string;
  message: string;
}

export const useSignInFormFeature = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);

  const errorMessages = (error: SignInError): string => {
    switch (error.code) {
      case 'InvalidParameterException':
        return 'Custom auth lambda trigger is not configured for the user pool.';
      case 'UserNotFoundException':
        return 'User does not exist.';
      case 'UserLambdaValidationException':
        return 'Password reset required for the user.';
      case 'NotAuthorizedException':
        return 'failed with error Email address is not verified.';
      default:
        return error.message;
    }
  };

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
    } catch (e: unknown) {
      console.error(e);
      setError(errorMessages(e as SignInError));
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
