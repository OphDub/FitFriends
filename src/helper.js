export const connectToFitBit = async () => {
  const response = await fetch('/api/authorize', {
    credentials: 'same-origin',
    headers: new Headers ({
      'Content-type': 'application/json'
    }),
    method: 'GET',
    mode: 'cors',
    redirect: 'follow',
  }).then(res => res.json());

  console.log(response);
}