const express = require('express');
const grpc = require('grpc');
var bodyParser = require('body-parser');
 // const services = require('../bitcoin-web/protobuf/APIs_grpc_pb');
 // const dataStr = require('../bitcoin-web/protobuf/APIs_pb');
const services = require('../pebble-btc-demo/protobuf/APIs_grpc_pb');
const dataStr = require('../pebble-btc-demo/protobuf/APIs_pb');
const app = express();
const tokens = ["91542a37db764d1c8e499404862c7ccd","a0d480b076774357baab2329be7b308d","1f04a3d4f6434c87ad5ef58daa34c4bd","f1a46886248e4d629cb68fe0ba681329"];

let tokenIterator = 0;
app.use(express.static("public"));
app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/index.html")
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// For getting token after round robin algorithm from a list
app.get('/getToken',function (request,response) {
    tokenIterator = tokenIterator +1;
    let index = tokenIterator%4;
    if (index>3){
        response.send((tokens[3]).toString());
    }else{
        response.send((tokens[index]).toString());
       // console.log(tokens[index])
    }
});
app.get('/getPebblePublicKey',function (request,response) {

    response.send("021a46d92df358af9acce575810581b4cc24fc9387c5ef073efefb83a6421beae4");
});







//the function called on to initialize the account
app.post('/start',function (request,response) {

    let msg=request.body;
    //console.log(msg);
   let respArray=callGauthamforTransactions(msg.multiAdrr,msg.withdrawAddress,msg.networkType);
   //  let respArray = [{
   //      toAddress: "toAddressfromapp.js",
   //      amount: "$36,738",
   //      transactionID: "021a46d92df358af9acce575810581b4cc24fc9387c5ef073efefb83a6421beae4",
   //      status: 'success',
   //      fromAddress: "fromAddressfromapp.js"
   //  }
   //  ];
    let res = {arr: respArray};
    response.send(JSON.stringify(res));
});

//function to update balance
app.post('/updateBalance',function (request,response) {
    let msg=request.body;
    console.log("this is from UpdateBalance :" + msg.netType);
    let res=callGauthamforBalance(msg.multiaddr,msg.netType);
    // let res={
    //     confirmedBalance:"524",
    //     pebbleBalance:"682"
    // };
    response.send(JSON.stringify(res));
});
app.get('/createTransaction',function (request,response) {
    //console.log(request);
    response.send(request.body);
});
app.get('/withdrawBitcoins',function (request,response) {
   // console.log(request);
    response.send(request.body);
});

//calling grpc api
function  callGauthamforTransactions(multiAddr,withdrawAddress,networkType) {
    let client = new services.PebbleBTCClient(
        'localhost:5031',
        grpc.credentials.createInsecure()
    );
    let request=new dataStr.Account();
    request.setJointaccountaddress(multiAddr);
    request.setWithdrawingaddress(withdrawAddress);
    request.setNetworktype(networkType);
    let call=client.registerJointAccount(request,()=>{});
    let arr=[];
    call.on("data",res=>{
        arr.push({
            toAddress:res.getToaddress(),
            amount:res.getAmount(),
            unixTimestamp:res.getUnixtimestamp(),
            transactionID:res.getTransactionid(),
            pebbleNodeSignatures:res.getPebblenodesignaturesList(),
            status:res.getStatus(),
            fromAddress:res.getFromaddress(),
            vectorClock:res.getVectorclockList(),
            commitmentPayload:res.getCommitmentpayloadList(),
            networkType:res.getNetworktype(),
            commitmentTransaction:res.getCommitmenttransaction(),
            internalTransaction:res.getInternaltransaction(),
            encodedDatatoSign:res.getEncodeddatatosign(),
            Withdrawn:res.getWithdrawn(),
            userPublickeySignature:res.getUserpublickeysignature()
        });
    });
    call.on("error",error=>{console.log(error)});
    return arr;
}

function  callGauthamforBalance(multiAddr,netType){
    let client = new services.PebbleBTCClient(
        "localhost:5031",
        grpc.credentials.createInsecure()
    );
    let request=new dataStr.Account();
    request.setJointaccountaddress(multiAddr);
    request.setNetworktype(netType);

    let responseData={};
    client.updateBalance(request,(err,res)=>{
        if(err){
            console.log("callGauthamGrpcError :"+err)
        }
        else {
            responseData.confirmedBalance = res.getConfirmedbalance();
            responseData.pebbleBalance = res.getPebblebalance();
        }
    });
    console.log(responseData);
    return responseData;
}


const server = app.listen(5030,function () {
console.log("API Gateway listening on port %d", server.address().port);
});