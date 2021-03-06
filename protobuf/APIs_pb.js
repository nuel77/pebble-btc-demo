// source: APIs.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.PebbleBTC.Account', null, global);
goog.exportSymbol('proto.PebbleBTC.Result', null, global);
goog.exportSymbol('proto.PebbleBTC.Transaction', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PebbleBTC.Account = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.PebbleBTC.Account.repeatedFields_, null);
};
goog.inherits(proto.PebbleBTC.Account, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PebbleBTC.Account.displayName = 'proto.PebbleBTC.Account';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PebbleBTC.Transaction = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.PebbleBTC.Transaction.repeatedFields_, null);
};
goog.inherits(proto.PebbleBTC.Transaction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PebbleBTC.Transaction.displayName = 'proto.PebbleBTC.Transaction';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PebbleBTC.Result = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PebbleBTC.Result, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PebbleBTC.Result.displayName = 'proto.PebbleBTC.Result';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.PebbleBTC.Account.repeatedFields_ = [5, 6];


if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.PebbleBTC.Account.prototype.toObject = function (opt_includeInstance) {
    return proto.PebbleBTC.Account.toObject(opt_includeInstance, this);
  };


  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.PebbleBTC.Account} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.PebbleBTC.Account.toObject = function (includeInstance, msg) {
    var f, obj = {
      jointaccountaddress: jspb.Message.getFieldWithDefault(msg, 1, ""),
      withdrawingaddress: jspb.Message.getFieldWithDefault(msg, 9, ""),
      confirmedbalance: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
      unconfirmedbalance: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
      pebblebalance: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
      intratxsList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
      intertxsList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f,
      publickey: jspb.Message.getFieldWithDefault(msg, 7, ""),
      networktype: jspb.Message.getFieldWithDefault(msg, 8, "")
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PebbleBTC.Account}
 */
proto.PebbleBTC.Account.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PebbleBTC.Account;
  return proto.PebbleBTC.Account.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PebbleBTC.Account} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PebbleBTC.Account}
 */
proto.PebbleBTC.Account.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setJointaccountaddress(value);
        break;
      case 9:
        var value = /** @type {string} */ (reader.readString());
        msg.setWithdrawingaddress(value);
        break;
      case 2:
        var value = /** @type {number} */ (reader.readFloat());
        msg.setConfirmedbalance(value);
        break;
      case 3:
        var value = /** @type {number} */ (reader.readFloat());
        msg.setUnconfirmedbalance(value);
        break;
      case 4:
        var value = /** @type {number} */ (reader.readFloat());
        msg.setPebblebalance(value);
        break;
      case 5:
        var value = /** @type {string} */ (reader.readString());
        msg.addIntratxs(value);
        break;
      case 6:
        var value = /** @type {string} */ (reader.readString());
        msg.addIntertxs(value);
        break;
      case 7:
        var value = /** @type {string} */ (reader.readString());
        msg.setPublickey(value);
        break;
      case 8:
        var value = /** @type {string} */ (reader.readString());
        msg.setNetworktype(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PebbleBTC.Account.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.PebbleBTC.Account.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PebbleBTC.Account} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PebbleBTC.Account.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getJointaccountaddress();
  if (f.length > 0) {
    writer.writeString(
        1,
        f
    );
  }
  f = message.getWithdrawingaddress();
  if (f.length > 0) {
    writer.writeString(
        9,
        f
    );
  }
  f = message.getConfirmedbalance();
  if (f !== 0.0) {
    writer.writeFloat(
        2,
        f
    );
  }
  f = message.getUnconfirmedbalance();
  if (f !== 0.0) {
    writer.writeFloat(
        3,
        f
    );
  }
  f = message.getPebblebalance();
  if (f !== 0.0) {
    writer.writeFloat(
        4,
        f
    );
  }
  f = message.getIntratxsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
        5,
        f
    );
  }
  f = message.getIntertxsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
        6,
        f
    );
  }
  f = message.getPublickey();
  if (f.length > 0) {
    writer.writeString(
        7,
        f
    );
  }
  f = message.getNetworktype();
  if (f.length > 0) {
    writer.writeString(
        8,
        f
    );
  }
};


/**
 * optional string jointAccountAddress = 1;
 * @return {string}
 */
proto.PebbleBTC.Account.prototype.getJointaccountaddress = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.PebbleBTC.Account} returns this
 */
proto.PebbleBTC.Account.prototype.setJointaccountaddress = function (value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string withdrawingAddress = 9;
 * @return {string}
 */
proto.PebbleBTC.Account.prototype.getWithdrawingaddress = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.PebbleBTC.Account} returns this
 */
proto.PebbleBTC.Account.prototype.setWithdrawingaddress = function (value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional float confirmedBalance = 2;
 * @return {number}
 */
proto.PebbleBTC.Account.prototype.getConfirmedbalance = function () {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.PebbleBTC.Account} returns this
 */
proto.PebbleBTC.Account.prototype.setConfirmedbalance = function (value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float unconfirmedBalance = 3;
 * @return {number}
 */
proto.PebbleBTC.Account.prototype.getUnconfirmedbalance = function () {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.PebbleBTC.Account} returns this
 */
proto.PebbleBTC.Account.prototype.setUnconfirmedbalance = function (value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional float pebbleBalance = 4;
 * @return {number}
 */
proto.PebbleBTC.Account.prototype.getPebblebalance = function () {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.PebbleBTC.Account} returns this
 */
proto.PebbleBTC.Account.prototype.setPebblebalance = function (value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * repeated string intraTxs = 5;
 * @return {!Array<string>}
 */
proto.PebbleBTC.Account.prototype.getIntratxsList = function () {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.PebbleBTC.Account} returns this
 */
proto.PebbleBTC.Account.prototype.setIntratxsList = function (value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.PebbleBTC.Account} returns this
 */
proto.PebbleBTC.Account.prototype.addIntratxs = function (value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.PebbleBTC.Account} returns this
 */
proto.PebbleBTC.Account.prototype.clearIntratxsList = function () {
  return this.setIntratxsList([]);
};


/**
 * repeated string interTxs = 6;
 * @return {!Array<string>}
 */
proto.PebbleBTC.Account.prototype.getIntertxsList = function () {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.PebbleBTC.Account} returns this
 */
proto.PebbleBTC.Account.prototype.setIntertxsList = function (value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.PebbleBTC.Account} returns this
 */
proto.PebbleBTC.Account.prototype.addIntertxs = function (value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.PebbleBTC.Account} returns this
 */
proto.PebbleBTC.Account.prototype.clearIntertxsList = function () {
  return this.setIntertxsList([]);
};


/**
 * optional string publicKey = 7;
 * @return {string}
 */
proto.PebbleBTC.Account.prototype.getPublickey = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.PebbleBTC.Account} returns this
 */
proto.PebbleBTC.Account.prototype.setPublickey = function (value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string networkType = 8;
 * @return {string}
 */
proto.PebbleBTC.Account.prototype.getNetworktype = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.PebbleBTC.Account} returns this
 */
proto.PebbleBTC.Account.prototype.setNetworktype = function (value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.PebbleBTC.Transaction.repeatedFields_ = [11, 12, 13];


if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.PebbleBTC.Transaction.prototype.toObject = function (opt_includeInstance) {
    return proto.PebbleBTC.Transaction.toObject(opt_includeInstance, this);
  };


  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.PebbleBTC.Transaction} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.PebbleBTC.Transaction.toObject = function (includeInstance, msg) {
    var f, obj = {
      internaltransaction: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
      commitmenttransaction: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
      status: jspb.Message.getBooleanFieldWithDefault(msg, 14, false),
      withdrawn: jspb.Message.getBooleanFieldWithDefault(msg, 15, false),
      fromaddress: jspb.Message.getFieldWithDefault(msg, 3, ""),
      toaddress: jspb.Message.getFieldWithDefault(msg, 4, ""),
      amount: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
      encodeddatatosign: msg.getEncodeddatatosign_asB64(),
      userpublickeysignature: jspb.Message.getFieldWithDefault(msg, 7, ""),
      transactionid: jspb.Message.getFieldWithDefault(msg, 8, ""),
      networktype: jspb.Message.getFieldWithDefault(msg, 9, ""),
      unixtimestamp: jspb.Message.getFieldWithDefault(msg, 10, 0),
      commitmentpayloadList: (f = jspb.Message.getRepeatedField(msg, 11)) == null ? undefined : f,
      vectorclockList: (f = jspb.Message.getRepeatedField(msg, 12)) == null ? undefined : f,
      pebblenodesignaturesList: msg.getPebblenodesignaturesList_asB64()
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PebbleBTC.Transaction}
 */
proto.PebbleBTC.Transaction.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PebbleBTC.Transaction;
  return proto.PebbleBTC.Transaction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PebbleBTC.Transaction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PebbleBTC.Transaction}
 */
proto.PebbleBTC.Transaction.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {boolean} */ (reader.readBool());
        msg.setInternaltransaction(value);
        break;
      case 2:
        var value = /** @type {boolean} */ (reader.readBool());
        msg.setCommitmenttransaction(value);
        break;
      case 14:
        var value = /** @type {boolean} */ (reader.readBool());
        msg.setStatus(value);
        break;
      case 15:
        var value = /** @type {boolean} */ (reader.readBool());
        msg.setWithdrawn(value);
        break;
      case 3:
        var value = /** @type {string} */ (reader.readString());
        msg.setFromaddress(value);
        break;
      case 4:
        var value = /** @type {string} */ (reader.readString());
        msg.setToaddress(value);
        break;
      case 5:
        var value = /** @type {number} */ (reader.readFloat());
        msg.setAmount(value);
        break;
      case 6:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setEncodeddatatosign(value);
        break;
      case 7:
        var value = /** @type {string} */ (reader.readString());
        msg.setUserpublickeysignature(value);
        break;
      case 8:
        var value = /** @type {string} */ (reader.readString());
        msg.setTransactionid(value);
        break;
      case 9:
        var value = /** @type {string} */ (reader.readString());
        msg.setNetworktype(value);
        break;
      case 10:
        var value = /** @type {number} */ (reader.readInt64());
        msg.setUnixtimestamp(value);
        break;
      case 11:
        var value = /** @type {string} */ (reader.readString());
        msg.addCommitmentpayload(value);
        break;
      case 12:
        var value = /** @type {!Array<number>} */ (reader.readPackedInt64());
        msg.setVectorclockList(value);
        break;
      case 13:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.addPebblenodesignatures(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PebbleBTC.Transaction.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.PebbleBTC.Transaction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PebbleBTC.Transaction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PebbleBTC.Transaction.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getInternaltransaction();
  if (f) {
    writer.writeBool(
        1,
        f
    );
  }
  f = message.getCommitmenttransaction();
  if (f) {
    writer.writeBool(
        2,
        f
    );
  }
  f = message.getStatus();
  if (f) {
    writer.writeBool(
        14,
        f
    );
  }
  f = message.getWithdrawn();
  if (f) {
    writer.writeBool(
        15,
        f
    );
  }
  f = message.getFromaddress();
  if (f.length > 0) {
    writer.writeString(
        3,
        f
    );
  }
  f = message.getToaddress();
  if (f.length > 0) {
    writer.writeString(
        4,
        f
    );
  }
  f = message.getAmount();
  if (f !== 0.0) {
    writer.writeFloat(
        5,
        f
    );
  }
  f = message.getEncodeddatatosign_asU8();
  if (f.length > 0) {
    writer.writeBytes(
        6,
        f
    );
  }
  f = message.getUserpublickeysignature();
  if (f.length > 0) {
    writer.writeString(
        7,
        f
    );
  }
  f = message.getTransactionid();
  if (f.length > 0) {
    writer.writeString(
        8,
        f
    );
  }
  f = message.getNetworktype();
  if (f.length > 0) {
    writer.writeString(
        9,
        f
    );
  }
  f = message.getUnixtimestamp();
  if (f !== 0) {
    writer.writeInt64(
        10,
        f
    );
  }
  f = message.getCommitmentpayloadList();
  if (f.length > 0) {
    writer.writeRepeatedString(
        11,
        f
    );
  }
  f = message.getVectorclockList();
  if (f.length > 0) {
    writer.writePackedInt64(
        12,
        f
    );
  }
  f = message.getPebblenodesignaturesList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
        13,
        f
    );
  }
};


/**
 * optional bool internalTransaction = 1;
 * @return {boolean}
 */
proto.PebbleBTC.Transaction.prototype.getInternaltransaction = function () {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.PebbleBTC.Transaction} returns this
 */
proto.PebbleBTC.Transaction.prototype.setInternaltransaction = function (value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional bool commitmentTransaction = 2;
 * @return {boolean}
 */
proto.PebbleBTC.Transaction.prototype.getCommitmenttransaction = function () {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.PebbleBTC.Transaction} returns this
 */
proto.PebbleBTC.Transaction.prototype.setCommitmenttransaction = function (value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool status = 14;
 * @return {boolean}
 */
proto.PebbleBTC.Transaction.prototype.getStatus = function () {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 14, false));
};


/**
 * @param {boolean} value
 * @return {!proto.PebbleBTC.Transaction} returns this
 */
proto.PebbleBTC.Transaction.prototype.setStatus = function (value) {
  return jspb.Message.setProto3BooleanField(this, 14, value);
};


/**
 * optional bool Withdrawn = 15;
 * @return {boolean}
 */
proto.PebbleBTC.Transaction.prototype.getWithdrawn = function () {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 15, false));
};


/**
 * @param {boolean} value
 * @return {!proto.PebbleBTC.Transaction} returns this
 */
proto.PebbleBTC.Transaction.prototype.setWithdrawn = function (value) {
  return jspb.Message.setProto3BooleanField(this, 15, value);
};


/**
 * optional string fromAddress = 3;
 * @return {string}
 */
proto.PebbleBTC.Transaction.prototype.getFromaddress = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.PebbleBTC.Transaction} returns this
 */
proto.PebbleBTC.Transaction.prototype.setFromaddress = function (value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string toAddress = 4;
 * @return {string}
 */
proto.PebbleBTC.Transaction.prototype.getToaddress = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.PebbleBTC.Transaction} returns this
 */
proto.PebbleBTC.Transaction.prototype.setToaddress = function (value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional float amount = 5;
 * @return {number}
 */
proto.PebbleBTC.Transaction.prototype.getAmount = function () {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.PebbleBTC.Transaction} returns this
 */
proto.PebbleBTC.Transaction.prototype.setAmount = function (value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional bytes encodedDatatoSign = 6;
 * @return {!(string|Uint8Array)}
 */
proto.PebbleBTC.Transaction.prototype.getEncodeddatatosign = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * optional bytes encodedDatatoSign = 6;
 * This is a type-conversion wrapper around `getEncodeddatatosign()`
 * @return {string}
 */
proto.PebbleBTC.Transaction.prototype.getEncodeddatatosign_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getEncodeddatatosign()));
};


/**
 * optional bytes encodedDatatoSign = 6;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getEncodeddatatosign()`
 * @return {!Uint8Array}
 */
proto.PebbleBTC.Transaction.prototype.getEncodeddatatosign_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getEncodeddatatosign()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.PebbleBTC.Transaction} returns this
 */
proto.PebbleBTC.Transaction.prototype.setEncodeddatatosign = function (value) {
  return jspb.Message.setProto3BytesField(this, 6, value);
};


/**
 * optional string userPublickeySignature = 7;
 * @return {string}
 */
proto.PebbleBTC.Transaction.prototype.getUserpublickeysignature = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.PebbleBTC.Transaction} returns this
 */
proto.PebbleBTC.Transaction.prototype.setUserpublickeysignature = function (value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string transactionID = 8;
 * @return {string}
 */
proto.PebbleBTC.Transaction.prototype.getTransactionid = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.PebbleBTC.Transaction} returns this
 */
proto.PebbleBTC.Transaction.prototype.setTransactionid = function (value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string networkType = 9;
 * @return {string}
 */
proto.PebbleBTC.Transaction.prototype.getNetworktype = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.PebbleBTC.Transaction} returns this
 */
proto.PebbleBTC.Transaction.prototype.setNetworktype = function (value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional int64 unixTimestamp = 10;
 * @return {number}
 */
proto.PebbleBTC.Transaction.prototype.getUnixtimestamp = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.PebbleBTC.Transaction} returns this
 */
proto.PebbleBTC.Transaction.prototype.setUnixtimestamp = function (value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * repeated string commitmentPayload = 11;
 * @return {!Array<string>}
 */
proto.PebbleBTC.Transaction.prototype.getCommitmentpayloadList = function () {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 11));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.PebbleBTC.Transaction} returns this
 */
proto.PebbleBTC.Transaction.prototype.setCommitmentpayloadList = function (value) {
  return jspb.Message.setField(this, 11, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.PebbleBTC.Transaction} returns this
 */
proto.PebbleBTC.Transaction.prototype.addCommitmentpayload = function (value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 11, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.PebbleBTC.Transaction} returns this
 */
proto.PebbleBTC.Transaction.prototype.clearCommitmentpayloadList = function () {
  return this.setCommitmentpayloadList([]);
};


/**
 * repeated int64 vectorClock = 12;
 * @return {!Array<number>}
 */
proto.PebbleBTC.Transaction.prototype.getVectorclockList = function () {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 12));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.PebbleBTC.Transaction} returns this
 */
proto.PebbleBTC.Transaction.prototype.setVectorclockList = function (value) {
  return jspb.Message.setField(this, 12, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.PebbleBTC.Transaction} returns this
 */
proto.PebbleBTC.Transaction.prototype.addVectorclock = function (value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 12, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.PebbleBTC.Transaction} returns this
 */
proto.PebbleBTC.Transaction.prototype.clearVectorclockList = function () {
  return this.setVectorclockList([]);
};


/**
 * repeated bytes pebbleNodeSignatures = 13;
 * @return {!(Array<!Uint8Array>|Array<string>)}
 */
proto.PebbleBTC.Transaction.prototype.getPebblenodesignaturesList = function () {
  return /** @type {!(Array<!Uint8Array>|Array<string>)} */ (jspb.Message.getRepeatedField(this, 13));
};


/**
 * repeated bytes pebbleNodeSignatures = 13;
 * This is a type-conversion wrapper around `getPebblenodesignaturesList()`
 * @return {!Array<string>}
 */
proto.PebbleBTC.Transaction.prototype.getPebblenodesignaturesList_asB64 = function () {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(
      this.getPebblenodesignaturesList()));
};


/**
 * repeated bytes pebbleNodeSignatures = 13;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPebblenodesignaturesList()`
 * @return {!Array<!Uint8Array>}
 */
proto.PebbleBTC.Transaction.prototype.getPebblenodesignaturesList_asU8 = function () {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getPebblenodesignaturesList()));
};


/**
 * @param {!(Array<!Uint8Array>|Array<string>)} value
 * @return {!proto.PebbleBTC.Transaction} returns this
 */
proto.PebbleBTC.Transaction.prototype.setPebblenodesignaturesList = function (value) {
  return jspb.Message.setField(this, 13, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 * @return {!proto.PebbleBTC.Transaction} returns this
 */
proto.PebbleBTC.Transaction.prototype.addPebblenodesignatures = function (value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 13, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.PebbleBTC.Transaction} returns this
 */
proto.PebbleBTC.Transaction.prototype.clearPebblenodesignaturesList = function () {
  return this.setPebblenodesignaturesList([]);
};


if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.PebbleBTC.Result.prototype.toObject = function (opt_includeInstance) {
    return proto.PebbleBTC.Result.toObject(opt_includeInstance, this);
  };


  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.PebbleBTC.Result} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.PebbleBTC.Result.toObject = function (includeInstance, msg) {
    var f, obj = {
      statuscode: jspb.Message.getFieldWithDefault(msg, 1, ""),
      result: jspb.Message.getFieldWithDefault(msg, 2, "")
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PebbleBTC.Result}
 */
proto.PebbleBTC.Result.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PebbleBTC.Result;
  return proto.PebbleBTC.Result.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PebbleBTC.Result} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PebbleBTC.Result}
 */
proto.PebbleBTC.Result.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setStatuscode(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readString());
        msg.setResult(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PebbleBTC.Result.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.PebbleBTC.Result.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PebbleBTC.Result} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PebbleBTC.Result.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getStatuscode();
  if (f.length > 0) {
    writer.writeString(
        1,
        f
    );
  }
  f = message.getResult();
  if (f.length > 0) {
    writer.writeString(
        2,
        f
    );
  }
};


/**
 * optional string statusCode = 1;
 * @return {string}
 */
proto.PebbleBTC.Result.prototype.getStatuscode = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.PebbleBTC.Result} returns this
 */
proto.PebbleBTC.Result.prototype.setStatuscode = function (value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string result = 2;
 * @return {string}
 */
proto.PebbleBTC.Result.prototype.getResult = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.PebbleBTC.Result} returns this
 */
proto.PebbleBTC.Result.prototype.setResult = function (value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


goog.object.extend(exports, proto.PebbleBTC);
