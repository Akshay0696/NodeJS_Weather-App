var asyncAdd = (a,b) =>{
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            if(typeof a === 'number' && typeof b === 'number'){
                resolve(a+b);
            }
            reject('Mismatched type');
        },1500);
    })
}

// var somePromise = new Promise((resolve, reject) =>{
//     setTimeout(() =>{
//         resolve('hey. it worked');
//         // reject('unable to fufill promise');
//     }, 2000);

// });

// somePromise.then((message) =>{
//     console.log("sucess:", message);
// },(errorMessage) =>{
//     console.log('Error:', errorMessage);
// })


asyncAdd(5,7).then((res) =>{
    console.log('Result:' + res);
    return asyncAdd(res, 33);
}).then((res) =>{
    console.log('Should be 45', res);
}).catch((errorMessage) =>{
    console.log('Error: '+ errorMessage);
})