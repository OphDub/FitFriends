import { clientID, clientSecret } from './apiKey';

export const connectToFitBit = () => {
  const root = 'https://www.fitbit.com/oauth2/authorize?';
  const redirect = 'http://localhost:3000/home';
  const scope = 'activity%20heartrate%20location%20nutrition%20profile%20settings%20sleep%20social%20weight';
  const exp = 604800;

  const tokenInfo = window.location.href;
  window.location = `${root}response_type=code&client_id=${clientID}&redirect_uri=${redirect}&scope=${scope}&expires_in=${exp}`;

  console.log(tokenInfo);
}
