const express = require('express');
const grpc = require('grpc');
var bodyParser = require('body-parser');
 // const services = require('../bitcoin-web/protobuf/APIs_grpc_pb');
 // const dataStr = require('../bitcoin-web/protobuf/APIs_pb');
const services = require('../pebble-btc-demo/protobuf/APIs_grpc_pb');
const dataStr = require('../pebble-btc-demo/protobuf/APIs_pb');
const app = express();
const tokens = ["91542a37db764d1c8e499404862c7ccd","a0d480b076774357baab2329be7b308d","1f04a3d4f6434c87ad5ef58daa34c4bd","f1a46886248e4d629cb68fe0ba681329"];
const bs58 = require('bs58');


let tokenIterator = 0;
app.use(express.static("public"));
app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/index.html")
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

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
app.post('/start',function (req,response) {
    //console.log(msg);

   //  let respArray = [{
   //      toAddress: "toAddressfromapp.js",
   //      amount: "$36,738",
   //      transactionID: "021a46d92df358af9acce575810581b4cc24fc9387c5ef073efefb83a6421beae4",
   //      status: 'success',
   //      fromAddress: "fromAddressfromapp.js"
   //  }
   //  ];
    let msg=req.body;
    let client = new services.PebbleBTCClient(
        'localhost:5031',
        grpc.credentials.createInsecure()
    );
    let request=new dataStr.Account();
    request.setJointaccountaddress(msg.multiAdrr);
    request.setWithdrawingaddress(msg.withdrawAddress);
    request.setNetworktype(msg.networkType);
    let call=client.registerJointAccount(request,()=>{});
    let respArray=[];
    call.on("data",res=>{
        let temp=res.getPebblenodesignaturesList();
        let pebbleNodeSignaturesArray=[];
        for(let i=0;i<3;i++){
            pebbleNodeSignaturesArray.push(bs58.encode(temp[i]))
        }
        respArray.push({
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
            userPublickeySignature:res.getUserpublickeysignature(),
            pebbleNodeSignaturesArray:pebbleNodeSignaturesArray
        });
    });
    call.on("error",error=>{console.log(error)});

    call.on('end', function() {
        let res = {arr: respArray};
        response.send(JSON.stringify(res));

    });

});

//function to update balance
app.post('/updateBalance',function (req,response) {
    let msg=req.body;
    console.log("this is from UpdateBalance :" + msg.netType);

    // let res={
    //     confirmedBalance:"524",
    //     pebbleBalance:"682"
    // };
    let client = new services.PebbleBTCClient(
        "localhost:5031",
        grpc.credentials.createInsecure()
    );
    let request=new dataStr.Account();
    request.setJointaccountaddress(msg.multiaddr);
    request.setNetworktype(msg.netType);
    client.updateBalance(request,(err,res)=>{
        let responseData={};
        if(err){
            console.log("callGauthamGrpcError :"+err)
        }
        else {
            responseData.confirmedBalance = res.getConfirmedbalance();
            responseData.pebbleBalance = res.getPebblebalance();
            console.log(responseData);
            response.send(JSON.stringify(responseData));
        }
    });

});


app.post('/updateTable',function (req,response) {
    let msg=req.body;
    let client = new services.PebbleBTCClient(
        'localhost:5031',
        grpc.credentials.createInsecure()
    );
    let request=new dataStr.Account();
    request.setJointaccountaddress(msg.multiAddr);
    request.setNetworktype(msg.networkType);
    let call=client.getAllTx(request,()=>{});
    let respArray=[];
    call.on("data",res=>{
        let temp=res.getPebblenodesignaturesList();
        let pebbleNodeSignaturesArray=[];
        for(let i=0;i<3;i++){
            pebbleNodeSignaturesArray.push(bs58.encode(temp[i]))
        }
        respArray.push({
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
            userPublickeySignature:res.getUserpublickeysignature(),
            pebbleNodeSignaturesArray:pebbleNodeSignaturesArray
        });
    });
    call.on("error",error=>{console.log(error)});
    call.on('end',()=>{
        let res = {arr: respArray};
        response.send(JSON.stringify(res));

    });

    app.post('/newTransaction',function (req,response) {
        console.log(req.body);
        console.log(req.body.inputFromAddr)
    })

});










const server = app.listen(5030,function () {
console.log("API Gateway listening on port %d", server.address().port);
});