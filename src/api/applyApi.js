export const myRequestPromise = email => {
    return fetch(`http://localhost:5000/myRequests?email=${email}`).then(res =>res.json())
}