var getUser = (id, cb) =>{
    var user ={
        id: id,
        name: 'hello'
    };

    setTimeout(() => {
        cb(user);
    }, 3000);
};

getUser(1,(userObj) =>{
    console.log(userObj);
});

