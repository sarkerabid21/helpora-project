export const myNeedsPromise = email => {
    return fetch(`http://localhost:5000/volunteer?email=${email}`).then(res =>res.json())
}