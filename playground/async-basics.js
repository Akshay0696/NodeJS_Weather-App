console.log('Starting App');

setTimeout(() => {
    console.log('Inside of cb');
}, 2000);

setTimeout(() =>{
    console.log('2nd Callback works');
},0);

console.log('Finishing up');