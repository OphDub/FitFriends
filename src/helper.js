import { clientID, clientSecret } from './apiKey';

export const apiGet = () => {

}

// export const fetchAndParse = async (url) => {
//   const data = {
//     Authorization: `Bearer ${clientID}`,
//     client_secret: clientSecret,
//     client_id: clientID,
//   }

//   const intialFetch = await fetch(url, {
//       method: 'POST',
//       body: JSON.stringify(data),
//       headers: new Headers({
//         'Content-Type': 'application/json'
//       })
//   })

//   console.log(initialFetch);

//   return await initialFetch.json();
// }