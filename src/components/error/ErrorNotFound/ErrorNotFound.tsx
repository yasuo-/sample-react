import { useRouteError } from 'react-router-dom';

export const ErrorNotFound = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>error</p>
    </div>
  );
};

ErrorNotFound.displayName = 'ErrorNotFound';
