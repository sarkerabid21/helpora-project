// export const myRequestPromise = email => {
//   return fetch(`http://localhost:5000/myRequests?email=${email}`, {
//     credentials: 'include'
//   }).then(res => res.json());
// };
export const myRequestPromise = email =>
  fetch(`http://localhost:5000/myRequests?email=${email}`, {
    credentials: 'include'
  })
  .then(res => {
    if (!res.ok) throw new Error('Not authorized');
    return res.json();
  });
