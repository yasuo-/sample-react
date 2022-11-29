import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, FormProvider } from 'react-hook-form';
import { Outlet } from 'react-router-dom';
import * as yup from 'yup';

import type { SignInFormVale } from '@/types/form/authForm';

export const SignInSchema = yup.object().shape({
  email: yup.string().email().required(),
});

const initialValues: SignInFormVale = {
  email: '',
};

const SignIn = () => {
  const methods = useForm<SignInFormVale>({
    defaultValues: initialValues,
    resolver: yupResolver(SignInSchema),
    mode: 'onBlur',
  });

  return (
    <FormProvider {...methods}>
      <Outlet />
    </FormProvider>
  );
};

export default SignIn;
