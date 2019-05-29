function loadData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('return data')
        },1000)
    })
}
async function loadAsyncData(){
    console.log(await loadData());
}
loadAsyncData();