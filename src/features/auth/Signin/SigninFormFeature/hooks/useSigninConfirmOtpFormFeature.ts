import { useState } from 'react';

import { CognitoUser } from 'amazon-cognito-identity-js';
import { useNavigate } from 'react-router-dom';

import type { SignInConfirmFormVale } from '@/types/form/authForm';

import { authService } from '@/services';

interface SignInConfirmOtpError {
  code: string;
  message: string;
}

export const useSignInConfirmOtpFormFeature = (user: CognitoUser) => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);

  const errorMessages = (error: SignInConfirmOtpError): string =>  {
    if (error.code === 'NotAuthorizedException') {
      return 'Invalid session for the user.';
    }
    return error.message;
  }

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
      setError(errorMessages(e as SignInConfirmOtpError));
    }
    setIsSubmitting(false);
  };

  return {
    isSubmitting,
    error,
    onSubmit,
  };
};
