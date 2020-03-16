const express = require('express');
//const grpc = require('grpc');

const app = express();
const tokens = ["91542a37db764d1c8e499404862c7ccd","a0d480b076774357baab2329be7b308d","1f04a3d4f6434c87ad5ef58daa34c4bd","f1a46886248e4d629cb68fe0ba681329"];
let tokenIterator = 0;
app.use(express.static("public"));
app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})

// For getting token after round robin algorithm from a list
app.get('/getToken',function (request,response) {
    tokenIterator = tokenIterator +1;
    let index = tokenIterator%4;
    if (index>3){
        response.send((tokens[3]).toString());
    }else{
        response.send((tokens[index]).toString());
        console.log(tokens[index])
    }
});

app.get('/getPebblePublicKey',function (request,response) {
    console.log(request);
    response.send("021a46d92df358af9acce575810581b4cc24fc9387c5ef073efefb83a6421beae4");
});

app.get('/registerJointAccount',function (request,response) {
    console.log(request);
    response.send("request.body");
});
app.get('/updateBalance',function (request,response) {
    console.log(request);
    response.send(request.body);
});
app.get('/createTransaction',function (request,response) {
    console.log(request);
    response.send(request.body);
});
app.get('/withdrawBitcoins',function (request,response) {
    console.log(request);
    response.send(request.body);
});

const server = app.listen(5030,function () {
console.log("API Gateway listening on port %d", server.address().port);
});