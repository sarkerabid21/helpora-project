export const myNeedsPromise = email => {
    return fetch(`https://volunteer-server-blush.vercel.app/volunteer?email=${email}`).then(res =>res.json())
}