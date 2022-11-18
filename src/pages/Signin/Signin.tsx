import { useRouteLoaderData, useLoaderData } from 'react-router-dom';

const api =
  'https://api.open-meteo.com/v1/forecast?latitude=35.6785&longitude=139.6823&hourly=temperature_2m&timezone=Asia%2FTokyo';

export const loading = async () => {
  const res = await fetch(api);
  const data = await res.json();
  return data;
};

const Signin = () => {
  const user = useRouteLoaderData('root');
  const loading = useLoaderData();
  console.log('useRouteLoaderData', user);
  console.log('useLoaderData', loading);
  return <div>Signin</div>;
};

export default Signin;
