(async () => {
    const axios = require('axios');
    const gitHubApi = user => `https://api.github.com/users/${user}`
    const users = ['herberthcaldeira', 'react', 'laravel']
    console.log('forEach se comporta de forma parecida com Promise.All')
    
    console.time()
    users.forEach(async (user) =>{
        const p1 = await axios.get(gitHubApi(user))
        console.log(p1.status)
    })
    console.timeEnd()

   
})()


