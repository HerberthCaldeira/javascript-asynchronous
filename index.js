setTimeout(()=>{
    console.log('setTimeout | executa no próximo event loop ')
}, 1)

const promise = new Promise((resolve, reject) => {
    resolve('promise | executa no final desse evento loop | primeiro que setTimeout')
})
.then(data => console.log('Primeiro then ->', data))
.then(data => console.log('lorem ipsum'))
.then(data => console.log('lorem ipsum'))
.then(data => console.log('ainda antes do setTimeout'))


for (let i = 1; i<= 100; i++ ){
    console.log(i)
}







