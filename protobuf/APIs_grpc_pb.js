// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var APIs_pb = require('./APIs_pb.js');

function serialize_PebbleBTC_Account(arg) {
  if (!(arg instanceof APIs_pb.Account)) {
    throw new Error('Expected argument of type PebbleBTC.Account');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_PebbleBTC_Account(buffer_arg) {
  return APIs_pb.Account.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_PebbleBTC_Result(arg) {
  if (!(arg instanceof APIs_pb.Result)) {
    throw new Error('Expected argument of type PebbleBTC.Result');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_PebbleBTC_Result(buffer_arg) {
  return APIs_pb.Result.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_PebbleBTC_Transaction(arg) {
  if (!(arg instanceof APIs_pb.Transaction)) {
    throw new Error('Expected argument of type PebbleBTC.Transaction');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_PebbleBTC_Transaction(buffer_arg) {
  return APIs_pb.Transaction.deserializeBinary(new Uint8Array(buffer_arg));
}


var PebbleBTCService = exports.PebbleBTCService = {
  registerJointAccount: {
    path: '/PebbleBTC.PebbleBTC/RegisterJointAccount',
    requestStream: false,
    responseStream: true,
    requestType: APIs_pb.Account,
    responseType: APIs_pb.Transaction,
    requestSerialize: serialize_PebbleBTC_Account,
    requestDeserialize: deserialize_PebbleBTC_Account,
    responseSerialize: serialize_PebbleBTC_Transaction,
    responseDeserialize: deserialize_PebbleBTC_Transaction,
  },
  createJointAccount: {
    path: '/PebbleBTC.PebbleBTC/CreateJointAccount',
    requestStream: false,
    responseStream: false,
    requestType: APIs_pb.Account,
    responseType: APIs_pb.Result,
    requestSerialize: serialize_PebbleBTC_Account,
    requestDeserialize: deserialize_PebbleBTC_Account,
    responseSerialize: serialize_PebbleBTC_Result,
    responseDeserialize: deserialize_PebbleBTC_Result,
  },
  updateBalance: {
    path: '/PebbleBTC.PebbleBTC/UpdateBalance',
    requestStream: false,
    responseStream: false,
    requestType: APIs_pb.Account,
    responseType: APIs_pb.Account,
    requestSerialize: serialize_PebbleBTC_Account,
    requestDeserialize: deserialize_PebbleBTC_Account,
    responseSerialize: serialize_PebbleBTC_Account,
    responseDeserialize: deserialize_PebbleBTC_Account,
  },
  getPebbleBalance: {
    path: '/PebbleBTC.PebbleBTC/GetPebbleBalance',
    requestStream: false,
    responseStream: false,
    requestType: APIs_pb.Account,
    responseType: APIs_pb.Account,
    requestSerialize: serialize_PebbleBTC_Account,
    requestDeserialize: deserialize_PebbleBTC_Account,
    responseSerialize: serialize_PebbleBTC_Account,
    responseDeserialize: deserialize_PebbleBTC_Account,
  },
  createTx: {
    path: '/PebbleBTC.PebbleBTC/CreateTx',
    requestStream: false,
    responseStream: false,
    requestType: APIs_pb.Transaction,
    responseType: APIs_pb.Transaction,
    requestSerialize: serialize_PebbleBTC_Transaction,
    requestDeserialize: deserialize_PebbleBTC_Transaction,
    responseSerialize: serialize_PebbleBTC_Transaction,
    responseDeserialize: deserialize_PebbleBTC_Transaction,
  },
  validateTx: {
    path: '/PebbleBTC.PebbleBTC/ValidateTx',
    requestStream: false,
    responseStream: false,
    requestType: APIs_pb.Transaction,
    responseType: APIs_pb.Transaction,
    requestSerialize: serialize_PebbleBTC_Transaction,
    requestDeserialize: deserialize_PebbleBTC_Transaction,
    responseSerialize: serialize_PebbleBTC_Transaction,
    responseDeserialize: deserialize_PebbleBTC_Transaction,
  },
  commitTx: {
    path: '/PebbleBTC.PebbleBTC/CommitTx',
    requestStream: false,
    responseStream: false,
    requestType: APIs_pb.Transaction,
    responseType: APIs_pb.Result,
    requestSerialize: serialize_PebbleBTC_Transaction,
    requestDeserialize: deserialize_PebbleBTC_Transaction,
    responseSerialize: serialize_PebbleBTC_Result,
    responseDeserialize: deserialize_PebbleBTC_Result,
  },
  // rpc CreateCommitment(Transaction) returns (Transaction){};
  validateCommitment: {
    path: '/PebbleBTC.PebbleBTC/ValidateCommitment',
    requestStream: false,
    responseStream: false,
    requestType: APIs_pb.Transaction,
    responseType: APIs_pb.Transaction,
    requestSerialize: serialize_PebbleBTC_Transaction,
    requestDeserialize: deserialize_PebbleBTC_Transaction,
    responseSerialize: serialize_PebbleBTC_Transaction,
    responseDeserialize: deserialize_PebbleBTC_Transaction,
  },
  commitCommitment: {
    path: '/PebbleBTC.PebbleBTC/CommitCommitment',
    requestStream: false,
    responseStream: false,
    requestType: APIs_pb.Transaction,
    responseType: APIs_pb.Result,
    requestSerialize: serialize_PebbleBTC_Transaction,
    requestDeserialize: deserialize_PebbleBTC_Transaction,
    responseSerialize: serialize_PebbleBTC_Result,
    responseDeserialize: deserialize_PebbleBTC_Result,
  },
  withdrawBTC: {
    path: '/PebbleBTC.PebbleBTC/WithdrawBTC',
    requestStream: false,
    responseStream: false,
    requestType: APIs_pb.Transaction,
    responseType: APIs_pb.Transaction,
    requestSerialize: serialize_PebbleBTC_Transaction,
    requestDeserialize: deserialize_PebbleBTC_Transaction,
    responseSerialize: serialize_PebbleBTC_Transaction,
    responseDeserialize: deserialize_PebbleBTC_Transaction,
  },
  getAllAccounts: {
    path: '/PebbleBTC.PebbleBTC/GetAllAccounts',
    requestStream: false,
    responseStream: true,
    requestType: APIs_pb.Result,
    responseType: APIs_pb.Account,
    requestSerialize: serialize_PebbleBTC_Result,
    requestDeserialize: deserialize_PebbleBTC_Result,
    responseSerialize: serialize_PebbleBTC_Account,
    responseDeserialize: deserialize_PebbleBTC_Account,
  },
  getAllTx: {
    path: '/PebbleBTC.PebbleBTC/GetAllTx',
    requestStream: false,
    responseStream: true,
    requestType: APIs_pb.Account,
    responseType: APIs_pb.Transaction,
    requestSerialize: serialize_PebbleBTC_Account,
    requestDeserialize: deserialize_PebbleBTC_Account,
    responseSerialize: serialize_PebbleBTC_Transaction,
    responseDeserialize: deserialize_PebbleBTC_Transaction,
  },
  connectPeers: {
    path: '/PebbleBTC.PebbleBTC/ConnectPeers',
    requestStream: false,
    responseStream: false,
    requestType: APIs_pb.Result,
    responseType: APIs_pb.Result,
    requestSerialize: serialize_PebbleBTC_Result,
    requestDeserialize: deserialize_PebbleBTC_Result,
    responseSerialize: serialize_PebbleBTC_Result,
    responseDeserialize: deserialize_PebbleBTC_Result,
  },
  printNodeStatus: {
    path: '/PebbleBTC.PebbleBTC/PrintNodeStatus',
    requestStream: false,
    responseStream: false,
    requestType: APIs_pb.Result,
    responseType: APIs_pb.Result,
    requestSerialize: serialize_PebbleBTC_Result,
    requestDeserialize: deserialize_PebbleBTC_Result,
    responseSerialize: serialize_PebbleBTC_Result,
    responseDeserialize: deserialize_PebbleBTC_Result,
  },
  printNodeAddresses: {
    path: '/PebbleBTC.PebbleBTC/PrintNodeAddresses',
    requestStream: false,
    responseStream: false,
    requestType: APIs_pb.Result,
    responseType: APIs_pb.Result,
    requestSerialize: serialize_PebbleBTC_Result,
    requestDeserialize: deserialize_PebbleBTC_Result,
    responseSerialize: serialize_PebbleBTC_Result,
    responseDeserialize: deserialize_PebbleBTC_Result,
  },
  getPeerPublickey: {
    path: '/PebbleBTC.PebbleBTC/getPeerPublickey',
    requestStream: false,
    responseStream: false,
    requestType: APIs_pb.Result,
    responseType: APIs_pb.Result,
    requestSerialize: serialize_PebbleBTC_Result,
    requestDeserialize: deserialize_PebbleBTC_Result,
    responseSerialize: serialize_PebbleBTC_Result,
    responseDeserialize: deserialize_PebbleBTC_Result,
  },
};

exports.PebbleBTCClient = grpc.makeGenericClientConstructor(PebbleBTCService);
