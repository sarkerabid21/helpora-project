export const myNeedsPromise = email => {
    return fetch(`https://volunteer-servers.vercel.app/volunteer?email=${email}`).then(res =>res.json())
}