(async () => {
    const axios = require('axios');
    const gitHubApi = user => `https://api.github.com/users/${user}`
    
    console.log('sequencial - p2 espera p1 e p3 espera p2')
    console.time()
    const p1 = await axios.get(gitHubApi('herberthcaldeira'))
    const p2 = await axios.get(gitHubApi('react'))
    const p3 = await axios.get(gitHubApi('laravel'))
    console.timeEnd()

   
})()