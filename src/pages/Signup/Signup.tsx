import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, FormProvider } from 'react-hook-form';
import { Outlet } from 'react-router-dom';
import * as yup from 'yup';

import type { SignupFormVale } from '@/types/form/authForm';

export const signupSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
});

const initialValues: SignupFormVale = {
  email: '',
  password: '',
  confirmPassword: '',
};

const Signup = () => {
  const methods = useForm<SignupFormVale>({
    defaultValues: initialValues,
    resolver: yupResolver(signupSchema),
    mode: 'onBlur',
  });

  return (
    <FormProvider {...methods}>
      <Outlet />
    </FormProvider>
  );
};

export default Signup;
