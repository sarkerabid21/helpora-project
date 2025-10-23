export const myRequestPromise = email =>
  fetch(`http://localhost:5000/myRequests?email=${email}`, {
    method: 'GET',
    credentials: 'include', // Send cookies!
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => {
    if (!res.ok) throw new Error('Not authorized');
    return res.json();
  });
