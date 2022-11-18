import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider } from 'react-router-dom';

import { AppProvider } from './providers';

import { router } from '@/routes';

const App = () => {
  return (
    <AppProvider>
      <RouterProvider router={router} />
      <ReactQueryDevtools position="bottom-right" />
    </AppProvider>
  );
};

export default App;
