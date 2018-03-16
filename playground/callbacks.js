var getUser = (id, callback) => {
    var user = {
        id: id,
        name: 'Amen'
    };
    callback(user);
};

var getUserTimeOut = (id, callback) => {
    var user = {
        id: id,
        name: 'Moja'
    };
    setTimeout(() => {
        callback(user);
    }, 3000);
};

getUserTimeOut(42, (user) => {
    console.log(user);
});

getUser(42, (user) => {
    console.log(user);
});