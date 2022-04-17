(async () => {
    const axios = require('axios');
    const gitHubApi = user => `https://api.github.com/users/${user}`
    const users = ['herberthcaldeira', 'react', 'laravel']
    console.log('for(i;;i++) ou for of se comporta de forma parecida com a sequencial')
    
    console.time()
    for (const user of users){
        const p1 = await axios.get(gitHubApi(user))
        console.log(p1.status)
    }
    console.timeEnd()   
})()

