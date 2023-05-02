import { QueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useRouteLoaderData, useLoaderData } from 'react-router-dom';

const api =
  'https://api.open-meteo.com/v1/forecast?latitude=35.6785&longitude=139.6823&hourly=temperature_2m&timezone=Asia%2FTokyo';

interface GetError {
  error: Error;
  data: null;
}

const getContacts = () => {
  return (
    axios
      .get(api)
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      .then((res) => [res.data, null])
      .catch((err) => [null, err as GetError])
  );
};

const contactListQuery = (q: string) => ({
  queryKey: ['contacts', 'list', q ?? 'all'],
  queryFn: () => getContacts(),
});

export const loading =
  (queryClient: QueryClient) =>
  async ({ request }: { request: { url: string } }) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument,@typescript-eslint/no-unsafe-member-access
    const url = new URL(request.url);
    const q = url as unknown as string;
    const res = await queryClient.fetchQuery(contactListQuery(q));
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    return { data: res[0], error: res[1] };
  };

const Signin = () => {
  const user = useRouteLoaderData('root');
  const loading = useLoaderData();
  console.log('useRouteLoaderData', user);
  console.log('useLoaderData', loading);
  return <div>Signin</div>;
};

export default Signin;
