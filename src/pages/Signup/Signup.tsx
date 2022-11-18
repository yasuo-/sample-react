const api =
  'https://api.open-meteo.com/v1/forecast?latitude=35.6785&longitude=139.6823&hourly=temperature_2m&timezone=Asia%2FTokyo';

export const loading = async () => {
  const res = await fetch(api);
  const data = await res.json();
  console.log(data);
  return { data };
};

const Signup = () => {
  return <div>Signup</div>;
};

export default Signup;
