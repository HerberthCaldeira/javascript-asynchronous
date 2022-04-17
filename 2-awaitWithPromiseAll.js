(async () => {
    const axios = require('axios');
    const gitHubApi = user => `https://api.github.com/users/${user}`

    console.log('paralelo')
    console.time()
    const p1 =  axios.get(gitHubApi('herberthcaldeira'))
    const p2 =  axios.get(gitHubApi('react'))
    const p3 =  axios.get(gitHubApi('laravel'))
    await Promise.all([p1, p2, p3]);
    console.timeEnd()

   
})()


