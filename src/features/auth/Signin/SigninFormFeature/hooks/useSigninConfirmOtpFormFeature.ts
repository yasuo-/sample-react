import { useState } from 'react';

import { CognitoUser } from 'amazon-cognito-identity-js';
import { useNavigate } from 'react-router-dom';

import type { SignInConfirmFormVale } from '@/types/form/authForm';

import { authService } from '@/services';

export const useSignInConfirmOtpFormFeature = (user: CognitoUser) => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);

  const onSubmit = async (data: SignInConfirmFormVale) => {
    setIsSubmitting(true);
    const body = {
      user,
      code: data.code,
    };
    try {
      await authService.signInConfirmOtp(body);
      navigate('/dashboard');
    } catch (e: any) {
      console.error(e);
      let message = e.message;
      if (e.code === 'NotAuthorizedException') {
        message = 'Invalid session for the user.';
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
