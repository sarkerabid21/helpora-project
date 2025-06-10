export const myRequestPromise = email =>
  fetch(`https://volunteer-servers.vercel.app/myRequests?email=${email}`, {
    credentials: 'include'
  })
  .then(res => {
    if (!res.ok) throw new Error('Not authorized');
    return res.json();
  });
