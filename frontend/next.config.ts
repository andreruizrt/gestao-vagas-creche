module.exports = {
    serverRuntimeConfig: {
        secret: 'THIS IS USED TO SIGN AND VERIFY JWT TOKENS, REPLACE IT WITH YOUR OWN SECRET, IT CAN BE ANY STRING'
    },
    publicRuntimeConfig: {
        apiUrl: process.env.SPRING_ENV === 'development'
            ? 'http://localhost:8080/api' // development api
            : 'http://localhost:8080/api' // production api
    }
}