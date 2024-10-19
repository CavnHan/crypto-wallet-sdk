// @ts-ignore
const $protobuf = require("protobufjs/minimal");
// @ts-ignore
const { google } = require("./google");
var $Reader = $protobuf.Reader,
    $Writer = $protobuf.Writer,
    $util = $protobuf.util;

/**
 * Namespace cosmos.
 * @exports cosmos
 * @namespace
 */
var cosmos = {};

cosmos.base = (function () {
    /**
     * Namespace base.
     * @memberof cosmos
     * @namespace
     */
    var base = {};

    base.v1beta1 = (function () {
        /**
         * Namespace v1beta1.
         * @memberof cosmos.base
         * @namespace
         */
        var v1beta1 = {};

        v1beta1.Coin = (function () {
            /**
             * Properties of a Coin.
             * @memberof cosmos.base.v1beta1
             * @interface ICoin
             * @property {string|null} [denom] Coin denom
             * @property {string|null} [amount] Coin amount
             */

            /**
             * Constructs a new Coin.
             * @memberof cosmos.base.v1beta1
             * @classdesc Represents a Coin.
             * @implements ICoin
             * @constructor
             * @param {cosmos.base.v1beta1.ICoin=} [properties] Properties to set
             */
            function Coin(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Coin denom.
             * @member {string} denom
             * @memberof cosmos.base.v1beta1.Coin
             * @instance
             */
            Coin.prototype.denom = "";

            /**
             * Coin amount.
             * @member {string} amount
             * @memberof cosmos.base.v1beta1.Coin
             * @instance
             */
            Coin.prototype.amount = "";

            /**
             * Encodes the specified Coin message. Does not implicitly {@link cosmos.base.v1beta1.Coin.verify|verify} messages.
             * @function encode
             * @memberof cosmos.base.v1beta1.Coin
             * @static
             * @param {cosmos.base.v1beta1.ICoin} message Coin message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Coin.encode = function encode(message, writer) {
                if (!writer) writer = $Writer.create();
                if (
                    message.denom != null &&
                    Object.hasOwnProperty.call(message, "denom")
                )
                    writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.denom);
                if (
                    message.amount != null &&
                    Object.hasOwnProperty.call(message, "amount")
                )
                    writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.amount);
                return writer;
            };

            /**
             * Encodes the specified Coin message, length delimited. Does not implicitly {@link cosmos.base.v1beta1.Coin.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cosmos.base.v1beta1.Coin
             * @static
             * @param {cosmos.base.v1beta1.ICoin} message Coin message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Coin.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Coin message from the specified reader or buffer.
             * @function decode
             * @memberof cosmos.base.v1beta1.Coin
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cosmos.base.v1beta1.Coin} Coin
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Coin.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new cosmos.base.v1beta1.Coin();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.denom = reader.string();
                            break;
                        case 2:
                            message.amount = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Coin message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cosmos.base.v1beta1.Coin
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cosmos.base.v1beta1.Coin} Coin
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Coin.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader)) reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Coin message.
             * @function verify
             * @memberof cosmos.base.v1beta1.Coin
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Coin.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.denom != null && message.hasOwnProperty("denom"))
                    if (!$util.isString(message.denom)) return "denom: string expected";
                if (message.amount != null && message.hasOwnProperty("amount"))
                    if (!$util.isString(message.amount)) return "amount: string expected";
                return null;
            };

            /**
             * Creates a Coin message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cosmos.base.v1beta1.Coin
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cosmos.base.v1beta1.Coin} Coin
             */
            Coin.fromObject = function fromObject(object) {
                if (object instanceof cosmos.base.v1beta1.Coin) return object;
                var message = new cosmos.base.v1beta1.Coin();
                if (object.denom != null) message.denom = String(object.denom);
                if (object.amount != null) message.amount = String(object.amount);
                return message;
            };

            /**
             * Creates a plain object from a Coin message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cosmos.base.v1beta1.Coin
             * @static
             * @param {cosmos.base.v1beta1.Coin} message Coin
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Coin.toObject = function toObject(message, options) {
                if (!options) options = {};
                var object = {};
                if (options.defaults) {
                    object.denom = "";
                    object.amount = "";
                }
                if (message.denom != null && message.hasOwnProperty("denom"))
                    object.denom = message.denom;
                if (message.amount != null && message.hasOwnProperty("amount"))
                    object.amount = message.amount;
                return object;
            };

            /**
             * Converts this Coin to JSON.
             * @function toJSON
             * @memberof cosmos.base.v1beta1.Coin
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Coin.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Coin;
        })();

        v1beta1.DecCoin = (function () {
            /**
             * Properties of a DecCoin.
             * @memberof cosmos.base.v1beta1
             * @interface IDecCoin
             * @property {string|null} [denom] DecCoin denom
             * @property {string|null} [amount] DecCoin amount
             */

            /**
             * Constructs a new DecCoin.
             * @memberof cosmos.base.v1beta1
             * @classdesc Represents a DecCoin.
             * @implements IDecCoin
             * @constructor
             * @param {cosmos.base.v1beta1.IDecCoin=} [properties] Properties to set
             */
            function DecCoin(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DecCoin denom.
             * @member {string} denom
             * @memberof cosmos.base.v1beta1.DecCoin
             * @instance
             */
            DecCoin.prototype.denom = "";

            /**
             * DecCoin amount.
             * @member {string} amount
             * @memberof cosmos.base.v1beta1.DecCoin
             * @instance
             */
            DecCoin.prototype.amount = "";

            /**
             * Encodes the specified DecCoin message. Does not implicitly {@link cosmos.base.v1beta1.DecCoin.verify|verify} messages.
             * @function encode
             * @memberof cosmos.base.v1beta1.DecCoin
             * @static
             * @param {cosmos.base.v1beta1.IDecCoin} message DecCoin message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DecCoin.encode = function encode(message, writer) {
                if (!writer) writer = $Writer.create();
                if (
                    message.denom != null &&
                    Object.hasOwnProperty.call(message, "denom")
                )
                    writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.denom);
                if (
                    message.amount != null &&
                    Object.hasOwnProperty.call(message, "amount")
                )
                    writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.amount);
                return writer;
            };

            /**
             * Encodes the specified DecCoin message, length delimited. Does not implicitly {@link cosmos.base.v1beta1.DecCoin.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cosmos.base.v1beta1.DecCoin
             * @static
             * @param {cosmos.base.v1beta1.IDecCoin} message DecCoin message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DecCoin.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DecCoin message from the specified reader or buffer.
             * @function decode
             * @memberof cosmos.base.v1beta1.DecCoin
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cosmos.base.v1beta1.DecCoin} DecCoin
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DecCoin.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new cosmos.base.v1beta1.DecCoin();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.denom = reader.string();
                            break;
                        case 2:
                            message.amount = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };

            /**
             * Decodes a DecCoin message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cosmos.base.v1beta1.DecCoin
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cosmos.base.v1beta1.DecCoin} DecCoin
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DecCoin.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader)) reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DecCoin message.
             * @function verify
             * @memberof cosmos.base.v1beta1.DecCoin
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DecCoin.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.denom != null && message.hasOwnProperty("denom"))
                    if (!$util.isString(message.denom)) return "denom: string expected";
                if (message.amount != null && message.hasOwnProperty("amount"))
                    if (!$util.isString(message.amount)) return "amount: string expected";
                return null;
            };

            /**
             * Creates a DecCoin message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cosmos.base.v1beta1.DecCoin
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cosmos.base.v1beta1.DecCoin} DecCoin
             */
            DecCoin.fromObject = function fromObject(object) {
                if (object instanceof cosmos.base.v1beta1.DecCoin) return object;
                var message = new cosmos.base.v1beta1.DecCoin();
                if (object.denom != null) message.denom = String(object.denom);
                if (object.amount != null) message.amount = String(object.amount);
                return message;
            };

            /**
             * Creates a plain object from a DecCoin message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cosmos.base.v1beta1.DecCoin
             * @static
             * @param {cosmos.base.v1beta1.DecCoin} message DecCoin
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DecCoin.toObject = function toObject(message, options) {
                if (!options) options = {};
                var object = {};
                if (options.defaults) {
                    object.denom = "";
                    object.amount = "";
                }
                if (message.denom != null && message.hasOwnProperty("denom"))
                    object.denom = message.denom;
                if (message.amount != null && message.hasOwnProperty("amount"))
                    object.amount = message.amount;
                return object;
            };

            /**
             * Converts this DecCoin to JSON.
             * @function toJSON
             * @memberof cosmos.base.v1beta1.DecCoin
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DecCoin.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return DecCoin;
        })();

        v1beta1.IntProto = (function () {
            /**
             * Properties of an IntProto.
             * @memberof cosmos.base.v1beta1
             * @interface IIntProto
             * @property {string|null} [int] IntProto int
             */

            /**
             * Constructs a new IntProto.
             * @memberof cosmos.base.v1beta1
             * @classdesc Represents an IntProto.
             * @implements IIntProto
             * @constructor
             * @param {cosmos.base.v1beta1.IIntProto=} [properties] Properties to set
             */
            function IntProto(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * IntProto int.
             * @member {string} int
             * @memberof cosmos.base.v1beta1.IntProto
             * @instance
             */
            IntProto.prototype.int = "";

            /**
             * Encodes the specified IntProto message. Does not implicitly {@link cosmos.base.v1beta1.IntProto.verify|verify} messages.
             * @function encode
             * @memberof cosmos.base.v1beta1.IntProto
             * @static
             * @param {cosmos.base.v1beta1.IIntProto} message IntProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            IntProto.encode = function encode(message, writer) {
                if (!writer) writer = $Writer.create();
                if (message.int != null && Object.hasOwnProperty.call(message, "int"))
                    writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.int);
                return writer;
            };

            /**
             * Encodes the specified IntProto message, length delimited. Does not implicitly {@link cosmos.base.v1beta1.IntProto.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cosmos.base.v1beta1.IntProto
             * @static
             * @param {cosmos.base.v1beta1.IIntProto} message IntProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            IntProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an IntProto message from the specified reader or buffer.
             * @function decode
             * @memberof cosmos.base.v1beta1.IntProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cosmos.base.v1beta1.IntProto} IntProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            IntProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new cosmos.base.v1beta1.IntProto();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.int = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };

            /**
             * Decodes an IntProto message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cosmos.base.v1beta1.IntProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cosmos.base.v1beta1.IntProto} IntProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            IntProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader)) reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an IntProto message.
             * @function verify
             * @memberof cosmos.base.v1beta1.IntProto
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            IntProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.int != null && message.hasOwnProperty("int"))
                    if (!$util.isString(message.int)) return "int: string expected";
                return null;
            };

            /**
             * Creates an IntProto message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cosmos.base.v1beta1.IntProto
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cosmos.base.v1beta1.IntProto} IntProto
             */
            IntProto.fromObject = function fromObject(object) {
                if (object instanceof cosmos.base.v1beta1.IntProto) return object;
                var message = new cosmos.base.v1beta1.IntProto();
                if (object.int != null) message.int = String(object.int);
                return message;
            };

            /**
             * Creates a plain object from an IntProto message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cosmos.base.v1beta1.IntProto
             * @static
             * @param {cosmos.base.v1beta1.IntProto} message IntProto
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            IntProto.toObject = function toObject(message, options) {
                if (!options) options = {};
                var object = {};
                if (options.defaults) object.int = "";
                if (message.int != null && message.hasOwnProperty("int"))
                    object.int = message.int;
                return object;
            };

            /**
             * Converts this IntProto to JSON.
             * @function toJSON
             * @memberof cosmos.base.v1beta1.IntProto
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            IntProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return IntProto;
        })();

        v1beta1.DecProto = (function () {
            /**
             * Properties of a DecProto.
             * @memberof cosmos.base.v1beta1
             * @interface IDecProto
             * @property {string|null} [dec] DecProto dec
             */

            /**
             * Constructs a new DecProto.
             * @memberof cosmos.base.v1beta1
             * @classdesc Represents a DecProto.
             * @implements IDecProto
             * @constructor
             * @param {cosmos.base.v1beta1.IDecProto=} [properties] Properties to set
             */
            function DecProto(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DecProto dec.
             * @member {string} dec
             * @memberof cosmos.base.v1beta1.DecProto
             * @instance
             */
            DecProto.prototype.dec = "";

            /**
             * Encodes the specified DecProto message. Does not implicitly {@link cosmos.base.v1beta1.DecProto.verify|verify} messages.
             * @function encode
             * @memberof cosmos.base.v1beta1.DecProto
             * @static
             * @param {cosmos.base.v1beta1.IDecProto} message DecProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DecProto.encode = function encode(message, writer) {
                if (!writer) writer = $Writer.create();
                if (message.dec != null && Object.hasOwnProperty.call(message, "dec"))
                    writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.dec);
                return writer;
            };

            /**
             * Encodes the specified DecProto message, length delimited. Does not implicitly {@link cosmos.base.v1beta1.DecProto.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cosmos.base.v1beta1.DecProto
             * @static
             * @param {cosmos.base.v1beta1.IDecProto} message DecProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DecProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DecProto message from the specified reader or buffer.
             * @function decode
             * @memberof cosmos.base.v1beta1.DecProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cosmos.base.v1beta1.DecProto} DecProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DecProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new cosmos.base.v1beta1.DecProto();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.dec = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };

            /**
             * Decodes a DecProto message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cosmos.base.v1beta1.DecProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cosmos.base.v1beta1.DecProto} DecProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DecProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader)) reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DecProto message.
             * @function verify
             * @memberof cosmos.base.v1beta1.DecProto
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DecProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.dec != null && message.hasOwnProperty("dec"))
                    if (!$util.isString(message.dec)) return "dec: string expected";
                return null;
            };

            /**
             * Creates a DecProto message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cosmos.base.v1beta1.DecProto
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cosmos.base.v1beta1.DecProto} DecProto
             */
            DecProto.fromObject = function fromObject(object) {
                if (object instanceof cosmos.base.v1beta1.DecProto) return object;
                var message = new cosmos.base.v1beta1.DecProto();
                if (object.dec != null) message.dec = String(object.dec);
                return message;
            };

            /**
             * Creates a plain object from a DecProto message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cosmos.base.v1beta1.DecProto
             * @static
             * @param {cosmos.base.v1beta1.DecProto} message DecProto
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DecProto.toObject = function toObject(message, options) {
                if (!options) options = {};
                var object = {};
                if (options.defaults) object.dec = "";
                if (message.dec != null && message.hasOwnProperty("dec"))
                    object.dec = message.dec;
                return object;
            };

            /**
             * Converts this DecProto to JSON.
             * @function toJSON
             * @memberof cosmos.base.v1beta1.DecProto
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DecProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return DecProto;
        })();

        return v1beta1;
    })();

    return base;
})();

cosmos.bank = (function () {
    /**
     * Namespace bank.
     * @memberof cosmos
     * @namespace
     */
    var bank = {};

    bank.v1beta1 = (function () {
        /**
         * Namespace v1beta1.
         * @memberof cosmos.bank
         * @namespace
         */
        var v1beta1 = {};

        v1beta1.Msg = (function () {
            /**
             * Constructs a new Msg service.
             * @memberof cosmos.bank.v1beta1
             * @classdesc Represents a Msg
             * @extends $protobuf.rpc.Service
             * @constructor
             * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
             * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
             * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
             */
            function Msg(rpcImpl, requestDelimited, responseDelimited) {
                $protobuf.rpc.Service.call(
                    this,
                    rpcImpl,
                    requestDelimited,
                    responseDelimited
                );
            }

            (Msg.prototype = Object.create(
                $protobuf.rpc.Service.prototype
            )).constructor = Msg;

            /**
             * Callback as used by {@link cosmos.bank.v1beta1.Msg#send}.
             * @memberof cosmos.bank.v1beta1.Msg
             * @typedef SendCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {cosmos.bank.v1beta1.MsgSendResponse} [response] MsgSendResponse
             */

            /**
             * Calls Send.
             * @function send
             * @memberof cosmos.bank.v1beta1.Msg
             * @instance
             * @param {cosmos.bank.v1beta1.IMsgSend} request MsgSend message or plain object
             * @param {cosmos.bank.v1beta1.Msg.SendCallback} callback Node-style callback called with the error, if any, and MsgSendResponse
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(
                (Msg.prototype.send = function send(request, callback) {
                    return this.rpcCall(
                        send,
                        cosmos.bank.v1beta1.MsgSend,
                        cosmos.bank.v1beta1.MsgSendResponse,
                        request,
                        callback
                    );
                }),
                "name",
                { value: "Send" }
            );

            /**
             * Calls Send.
             * @function send
             * @memberof cosmos.bank.v1beta1.Msg
             * @instance
             * @param {cosmos.bank.v1beta1.IMsgSend} request MsgSend message or plain object
             * @returns {Promise<cosmos.bank.v1beta1.MsgSendResponse>} Promise
             * @variation 2
             */

            /**
             * Callback as used by {@link cosmos.bank.v1beta1.Msg#multiSend}.
             * @memberof cosmos.bank.v1beta1.Msg
             * @typedef MultiSendCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {cosmos.bank.v1beta1.MsgMultiSendResponse} [response] MsgMultiSendResponse
             */

            /**
             * Calls MultiSend.
             * @function multiSend
             * @memberof cosmos.bank.v1beta1.Msg
             * @instance
             * @param {cosmos.bank.v1beta1.IMsgMultiSend} request MsgMultiSend message or plain object
             * @param {cosmos.bank.v1beta1.Msg.MultiSendCallback} callback Node-style callback called with the error, if any, and MsgMultiSendResponse
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(
                (Msg.prototype.multiSend = function multiSend(request, callback) {
                    return this.rpcCall(
                        multiSend,
                        cosmos.bank.v1beta1.MsgMultiSend,
                        cosmos.bank.v1beta1.MsgMultiSendResponse,
                        request,
                        callback
                    );
                }),
                "name",
                { value: "MultiSend" }
            );

            /**
             * Calls MultiSend.
             * @function multiSend
             * @memberof cosmos.bank.v1beta1.Msg
             * @instance
             * @param {cosmos.bank.v1beta1.IMsgMultiSend} request MsgMultiSend message or plain object
             * @returns {Promise<cosmos.bank.v1beta1.MsgMultiSendResponse>} Promise
             * @variation 2
             */

            return Msg;
        })();

        v1beta1.MsgSend = (function () {
            /**
             * Properties of a MsgSend.
             * @memberof cosmos.bank.v1beta1
             * @interface IMsgSend
             * @property {string|null} [from_address] MsgSend from_address
             * @property {string|null} [to_address] MsgSend to_address
             * @property {Array.<cosmos.base.v1beta1.ICoin>|null} [amount] MsgSend amount
             */

            /**
             * Constructs a new MsgSend.
             * @memberof cosmos.bank.v1beta1
             * @classdesc Represents a MsgSend.
             * @implements IMsgSend
             * @constructor
             * @param {cosmos.bank.v1beta1.IMsgSend=} [properties] Properties to set
             */
            function MsgSend(properties) {
                this.amount = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MsgSend from_address.
             * @member {string} from_address
             * @memberof cosmos.bank.v1beta1.MsgSend
             * @instance
             */
            MsgSend.prototype.from_address = "";

            /**
             * MsgSend to_address.
             * @member {string} to_address
             * @memberof cosmos.bank.v1beta1.MsgSend
             * @instance
             */
            MsgSend.prototype.to_address = "";

            /**
             * MsgSend amount.
             * @member {Array.<cosmos.base.v1beta1.ICoin>} amount
             * @memberof cosmos.bank.v1beta1.MsgSend
             * @instance
             */
            MsgSend.prototype.amount = $util.emptyArray;

            /**
             * Encodes the specified MsgSend message. Does not implicitly {@link cosmos.bank.v1beta1.MsgSend.verify|verify} messages.
             * @function encode
             * @memberof cosmos.bank.v1beta1.MsgSend
             * @static
             * @param {cosmos.bank.v1beta1.IMsgSend} message MsgSend message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MsgSend.encode = function encode(message, writer) {
                if (!writer) writer = $Writer.create();
                if (
                    message.from_address != null &&
                    Object.hasOwnProperty.call(message, "from_address")
                )
                    writer
                        .uint32(/* id 1, wireType 2 =*/ 10)
                        .string(message.from_address);
                if (
                    message.to_address != null &&
                    Object.hasOwnProperty.call(message, "to_address")
                )
                    writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.to_address);
                if (message.amount != null && message.amount.length)
                    for (var i = 0; i < message.amount.length; ++i)
                        cosmos.base.v1beta1.Coin.encode(
                            message.amount[i],
                            writer.uint32(/* id 3, wireType 2 =*/ 26).fork()
                        ).ldelim();
                return writer;
            };

            /**
             * Encodes the specified MsgSend message, length delimited. Does not implicitly {@link cosmos.bank.v1beta1.MsgSend.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cosmos.bank.v1beta1.MsgSend
             * @static
             * @param {cosmos.bank.v1beta1.IMsgSend} message MsgSend message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MsgSend.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MsgSend message from the specified reader or buffer.
             * @function decode
             * @memberof cosmos.bank.v1beta1.MsgSend
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cosmos.bank.v1beta1.MsgSend} MsgSend
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MsgSend.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new cosmos.bank.v1beta1.MsgSend();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.from_address = reader.string();
                            break;
                        case 2:
                            message.to_address = reader.string();
                            break;
                        case 3:
                            if (!(message.amount && message.amount.length))
                                message.amount = [];
                            message.amount.push(
                                cosmos.base.v1beta1.Coin.decode(reader, reader.uint32())
                            );
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };

            /**
             * Decodes a MsgSend message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cosmos.bank.v1beta1.MsgSend
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cosmos.bank.v1beta1.MsgSend} MsgSend
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MsgSend.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader)) reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MsgSend message.
             * @function verify
             * @memberof cosmos.bank.v1beta1.MsgSend
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MsgSend.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (
                    message.from_address != null &&
                    message.hasOwnProperty("from_address")
                )
                    if (!$util.isString(message.from_address))
                        return "from_address: string expected";
                if (message.to_address != null && message.hasOwnProperty("to_address"))
                    if (!$util.isString(message.to_address))
                        return "to_address: string expected";
                if (message.amount != null && message.hasOwnProperty("amount")) {
                    if (!Array.isArray(message.amount)) return "amount: array expected";
                    for (var i = 0; i < message.amount.length; ++i) {
                        var error = cosmos.base.v1beta1.Coin.verify(
                            message.amount[i]
                        );
                        if (error) return "amount." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a MsgSend message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cosmos.bank.v1beta1.MsgSend
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cosmos.bank.v1beta1.MsgSend} MsgSend
             */
            MsgSend.fromObject = function fromObject(object) {
                if (object instanceof cosmos.bank.v1beta1.MsgSend) return object;
                var message = new cosmos.bank.v1beta1.MsgSend();
                if (object.from_address != null)
                    message.from_address = String(object.from_address);
                if (object.to_address != null)
                    message.to_address = String(object.to_address);
                if (object.amount) {
                    if (!Array.isArray(object.amount))
                        throw TypeError(
                            ".cosmos.bank.v1beta1.MsgSend.amount: array expected"
                        );
                    message.amount = [];
                    for (var i = 0; i < object.amount.length; ++i) {
                        if (typeof object.amount[i] !== "object")
                            throw TypeError(
                                ".cosmos.bank.v1beta1.MsgSend.amount: object expected"
                            );
                        message.amount[i] = cosmos.base.v1beta1.Coin.fromObject(
                            object.amount[i]
                        );
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a MsgSend message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cosmos.bank.v1beta1.MsgSend
             * @static
             * @param {cosmos.bank.v1beta1.MsgSend} message MsgSend
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MsgSend.toObject = function toObject(message, options) {
                if (!options) options = {};
                var object = {};
                if (options.arrays || options.defaults) object.amount = [];
                if (options.defaults) {
                    object.from_address = "";
                    object.to_address = "";
                }
                if (
                    message.from_address != null &&
                    message.hasOwnProperty("from_address")
                )
                    object.from_address = message.from_address;
                if (message.to_address != null && message.hasOwnProperty("to_address"))
                    object.to_address = message.to_address;
                if (message.amount && message.amount.length) {
                    object.amount = [];
                    for (var j = 0; j < message.amount.length; ++j)
                        object.amount[j] = cosmos.base.v1beta1.Coin.toObject(
                            message.amount[j],
                            options
                        );
                }
                return object;
            };

            /**
             * Converts this MsgSend to JSON.
             * @function toJSON
             * @memberof cosmos.bank.v1beta1.MsgSend
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MsgSend.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MsgSend;
        })();

        v1beta1.MsgSendResponse = (function () {
            /**
             * Properties of a MsgSendResponse.
             * @memberof cosmos.bank.v1beta1
             * @interface IMsgSendResponse
             */

            /**
             * Constructs a new MsgSendResponse.
             * @memberof cosmos.bank.v1beta1
             * @classdesc Represents a MsgSendResponse.
             * @implements IMsgSendResponse
             * @constructor
             * @param {cosmos.bank.v1beta1.IMsgSendResponse=} [properties] Properties to set
             */
            function MsgSendResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Encodes the specified MsgSendResponse message. Does not implicitly {@link cosmos.bank.v1beta1.MsgSendResponse.verify|verify} messages.
             * @function encode
             * @memberof cosmos.bank.v1beta1.MsgSendResponse
             * @static
             * @param {cosmos.bank.v1beta1.IMsgSendResponse} message MsgSendResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MsgSendResponse.encode = function encode(message, writer) {
                if (!writer) writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified MsgSendResponse message, length delimited. Does not implicitly {@link cosmos.bank.v1beta1.MsgSendResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cosmos.bank.v1beta1.MsgSendResponse
             * @static
             * @param {cosmos.bank.v1beta1.IMsgSendResponse} message MsgSendResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MsgSendResponse.encodeDelimited = function encodeDelimited(
                message,
                writer
            ) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MsgSendResponse message from the specified reader or buffer.
             * @function decode
             * @memberof cosmos.bank.v1beta1.MsgSendResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cosmos.bank.v1beta1.MsgSendResponse} MsgSendResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MsgSendResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new cosmos.bank.v1beta1.MsgSendResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };

            /**
             * Decodes a MsgSendResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cosmos.bank.v1beta1.MsgSendResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cosmos.bank.v1beta1.MsgSendResponse} MsgSendResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MsgSendResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader)) reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MsgSendResponse message.
             * @function verify
             * @memberof cosmos.bank.v1beta1.MsgSendResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MsgSendResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a MsgSendResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cosmos.bank.v1beta1.MsgSendResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cosmos.bank.v1beta1.MsgSendResponse} MsgSendResponse
             */
            MsgSendResponse.fromObject = function fromObject(object) {
                if (object instanceof cosmos.bank.v1beta1.MsgSendResponse)
                    return object;
                return new cosmos.bank.v1beta1.MsgSendResponse();
            };

            /**
             * Creates a plain object from a MsgSendResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cosmos.bank.v1beta1.MsgSendResponse
             * @static
             * @param {cosmos.bank.v1beta1.MsgSendResponse} message MsgSendResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MsgSendResponse.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this MsgSendResponse to JSON.
             * @function toJSON
             * @memberof cosmos.bank.v1beta1.MsgSendResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MsgSendResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MsgSendResponse;
        })();

        v1beta1.MsgMultiSend = (function () {
            /**
             * Properties of a MsgMultiSend.
             * @memberof cosmos.bank.v1beta1
             * @interface IMsgMultiSend
             * @property {Array.<cosmos.bank.v1beta1.IInput>|null} [inputs] MsgMultiSend inputs
             * @property {Array.<cosmos.bank.v1beta1.IOutput>|null} [outputs] MsgMultiSend outputs
             */

            /**
             * Constructs a new MsgMultiSend.
             * @memberof cosmos.bank.v1beta1
             * @classdesc Represents a MsgMultiSend.
             * @implements IMsgMultiSend
             * @constructor
             * @param {cosmos.bank.v1beta1.IMsgMultiSend=} [properties] Properties to set
             */
            function MsgMultiSend(properties) {
                this.inputs = [];
                this.outputs = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MsgMultiSend inputs.
             * @member {Array.<cosmos.bank.v1beta1.IInput>} inputs
             * @memberof cosmos.bank.v1beta1.MsgMultiSend
             * @instance
             */
            MsgMultiSend.prototype.inputs = $util.emptyArray;

            /**
             * MsgMultiSend outputs.
             * @member {Array.<cosmos.bank.v1beta1.IOutput>} outputs
             * @memberof cosmos.bank.v1beta1.MsgMultiSend
             * @instance
             */
            MsgMultiSend.prototype.outputs = $util.emptyArray;

            /**
             * Encodes the specified MsgMultiSend message. Does not implicitly {@link cosmos.bank.v1beta1.MsgMultiSend.verify|verify} messages.
             * @function encode
             * @memberof cosmos.bank.v1beta1.MsgMultiSend
             * @static
             * @param {cosmos.bank.v1beta1.IMsgMultiSend} message MsgMultiSend message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MsgMultiSend.encode = function encode(message, writer) {
                if (!writer) writer = $Writer.create();
                if (message.inputs != null && message.inputs.length)
                    for (var i = 0; i < message.inputs.length; ++i)
                        cosmos.bank.v1beta1.Input.encode(
                            message.inputs[i],
                            writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
                        ).ldelim();
                if (message.outputs != null && message.outputs.length)
                    for (var i = 0; i < message.outputs.length; ++i)
                        cosmos.bank.v1beta1.Output.encode(
                            message.outputs[i],
                            writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
                        ).ldelim();
                return writer;
            };

            /**
             * Encodes the specified MsgMultiSend message, length delimited. Does not implicitly {@link cosmos.bank.v1beta1.MsgMultiSend.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cosmos.bank.v1beta1.MsgMultiSend
             * @static
             * @param {cosmos.bank.v1beta1.IMsgMultiSend} message MsgMultiSend message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MsgMultiSend.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MsgMultiSend message from the specified reader or buffer.
             * @function decode
             * @memberof cosmos.bank.v1beta1.MsgMultiSend
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cosmos.bank.v1beta1.MsgMultiSend} MsgMultiSend
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MsgMultiSend.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new cosmos.bank.v1beta1.MsgMultiSend();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            if (!(message.inputs && message.inputs.length))
                                message.inputs = [];
                            message.inputs.push(
                                cosmos.bank.v1beta1.Input.decode(reader, reader.uint32())
                            );
                            break;
                        case 2:
                            if (!(message.outputs && message.outputs.length))
                                message.outputs = [];
                            message.outputs.push(
                                cosmos.bank.v1beta1.Output.decode(reader, reader.uint32())
                            );
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };

            /**
             * Decodes a MsgMultiSend message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cosmos.bank.v1beta1.MsgMultiSend
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cosmos.bank.v1beta1.MsgMultiSend} MsgMultiSend
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MsgMultiSend.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader)) reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MsgMultiSend message.
             * @function verify
             * @memberof cosmos.bank.v1beta1.MsgMultiSend
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MsgMultiSend.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.inputs != null && message.hasOwnProperty("inputs")) {
                    if (!Array.isArray(message.inputs)) return "inputs: array expected";
                    for (var i = 0; i < message.inputs.length; ++i) {
                        var error = cosmos.bank.v1beta1.Input.verify(
                            message.inputs[i]
                        );
                        if (error) return "inputs." + error;
                    }
                }
                if (message.outputs != null && message.hasOwnProperty("outputs")) {
                    if (!Array.isArray(message.outputs)) return "outputs: array expected";
                    for (var i = 0; i < message.outputs.length; ++i) {
                        var error = cosmos.bank.v1beta1.Output.verify(
                            message.outputs[i]
                        );
                        if (error) return "outputs." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a MsgMultiSend message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cosmos.bank.v1beta1.MsgMultiSend
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cosmos.bank.v1beta1.MsgMultiSend} MsgMultiSend
             */
            MsgMultiSend.fromObject = function fromObject(object) {
                if (object instanceof cosmos.bank.v1beta1.MsgMultiSend)
                    return object;
                var message = new cosmos.bank.v1beta1.MsgMultiSend();
                if (object.inputs) {
                    if (!Array.isArray(object.inputs))
                        throw TypeError(
                            ".cosmos.bank.v1beta1.MsgMultiSend.inputs: array expected"
                        );
                    message.inputs = [];
                    for (var i = 0; i < object.inputs.length; ++i) {
                        if (typeof object.inputs[i] !== "object")
                            throw TypeError(
                                ".cosmos.bank.v1beta1.MsgMultiSend.inputs: object expected"
                            );
                        message.inputs[i] = cosmos.bank.v1beta1.Input.fromObject(
                            object.inputs[i]
                        );
                    }
                }
                if (object.outputs) {
                    if (!Array.isArray(object.outputs))
                        throw TypeError(
                            ".cosmos.bank.v1beta1.MsgMultiSend.outputs: array expected"
                        );
                    message.outputs = [];
                    for (var i = 0; i < object.outputs.length; ++i) {
                        if (typeof object.outputs[i] !== "object")
                            throw TypeError(
                                ".cosmos.bank.v1beta1.MsgMultiSend.outputs: object expected"
                            );
                        message.outputs[i] = cosmos.bank.v1beta1.Output.fromObject(
                            object.outputs[i]
                        );
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a MsgMultiSend message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cosmos.bank.v1beta1.MsgMultiSend
             * @static
             * @param {cosmos.bank.v1beta1.MsgMultiSend} message MsgMultiSend
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MsgMultiSend.toObject = function toObject(message, options) {
                if (!options) options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.inputs = [];
                    object.outputs = [];
                }
                if (message.inputs && message.inputs.length) {
                    object.inputs = [];
                    for (var j = 0; j < message.inputs.length; ++j)
                        object.inputs[j] = cosmos.bank.v1beta1.Input.toObject(
                            message.inputs[j],
                            options
                        );
                }
                if (message.outputs && message.outputs.length) {
                    object.outputs = [];
                    for (var j = 0; j < message.outputs.length; ++j)
                        object.outputs[j] = cosmos.bank.v1beta1.Output.toObject(
                            message.outputs[j],
                            options
                        );
                }
                return object;
            };

            /**
             * Converts this MsgMultiSend to JSON.
             * @function toJSON
             * @memberof cosmos.bank.v1beta1.MsgMultiSend
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MsgMultiSend.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MsgMultiSend;
        })();

        v1beta1.MsgMultiSendResponse = (function () {
            /**
             * Properties of a MsgMultiSendResponse.
             * @memberof cosmos.bank.v1beta1
             * @interface IMsgMultiSendResponse
             */

            /**
             * Constructs a new MsgMultiSendResponse.
             * @memberof cosmos.bank.v1beta1
             * @classdesc Represents a MsgMultiSendResponse.
             * @implements IMsgMultiSendResponse
             * @constructor
             * @param {cosmos.bank.v1beta1.IMsgMultiSendResponse=} [properties] Properties to set
             */
            function MsgMultiSendResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Encodes the specified MsgMultiSendResponse message. Does not implicitly {@link cosmos.bank.v1beta1.MsgMultiSendResponse.verify|verify} messages.
             * @function encode
             * @memberof cosmos.bank.v1beta1.MsgMultiSendResponse
             * @static
             * @param {cosmos.bank.v1beta1.IMsgMultiSendResponse} message MsgMultiSendResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MsgMultiSendResponse.encode = function encode(message, writer) {
                if (!writer) writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified MsgMultiSendResponse message, length delimited. Does not implicitly {@link cosmos.bank.v1beta1.MsgMultiSendResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cosmos.bank.v1beta1.MsgMultiSendResponse
             * @static
             * @param {cosmos.bank.v1beta1.IMsgMultiSendResponse} message MsgMultiSendResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MsgMultiSendResponse.encodeDelimited = function encodeDelimited(
                message,
                writer
            ) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MsgMultiSendResponse message from the specified reader or buffer.
             * @function decode
             * @memberof cosmos.bank.v1beta1.MsgMultiSendResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cosmos.bank.v1beta1.MsgMultiSendResponse} MsgMultiSendResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MsgMultiSendResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new cosmos.bank.v1beta1.MsgMultiSendResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };

            /**
             * Decodes a MsgMultiSendResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cosmos.bank.v1beta1.MsgMultiSendResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cosmos.bank.v1beta1.MsgMultiSendResponse} MsgMultiSendResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MsgMultiSendResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader)) reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MsgMultiSendResponse message.
             * @function verify
             * @memberof cosmos.bank.v1beta1.MsgMultiSendResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MsgMultiSendResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a MsgMultiSendResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cosmos.bank.v1beta1.MsgMultiSendResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cosmos.bank.v1beta1.MsgMultiSendResponse} MsgMultiSendResponse
             */
            MsgMultiSendResponse.fromObject = function fromObject(object) {
                if (object instanceof cosmos.bank.v1beta1.MsgMultiSendResponse)
                    return object;
                return new cosmos.bank.v1beta1.MsgMultiSendResponse();
            };

            /**
             * Creates a plain object from a MsgMultiSendResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cosmos.bank.v1beta1.MsgMultiSendResponse
             * @static
             * @param {cosmos.bank.v1beta1.MsgMultiSendResponse} message MsgMultiSendResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MsgMultiSendResponse.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this MsgMultiSendResponse to JSON.
             * @function toJSON
             * @memberof cosmos.bank.v1beta1.MsgMultiSendResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MsgMultiSendResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MsgMultiSendResponse;
        })();

        v1beta1.Params = (function () {
            /**
             * Properties of a Params.
             * @memberof cosmos.bank.v1beta1
             * @interface IParams
             * @property {Array.<cosmos.bank.v1beta1.ISendEnabled>|null} [send_enabled] Params send_enabled
             * @property {boolean|null} [default_send_enabled] Params default_send_enabled
             */

            /**
             * Constructs a new Params.
             * @memberof cosmos.bank.v1beta1
             * @classdesc Represents a Params.
             * @implements IParams
             * @constructor
             * @param {cosmos.bank.v1beta1.IParams=} [properties] Properties to set
             */
            function Params(properties) {
                this.send_enabled = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Params send_enabled.
             * @member {Array.<cosmos.bank.v1beta1.ISendEnabled>} send_enabled
             * @memberof cosmos.bank.v1beta1.Params
             * @instance
             */
            Params.prototype.send_enabled = $util.emptyArray;

            /**
             * Params default_send_enabled.
             * @member {boolean} default_send_enabled
             * @memberof cosmos.bank.v1beta1.Params
             * @instance
             */
            Params.prototype.default_send_enabled = false;

            /**
             * Encodes the specified Params message. Does not implicitly {@link cosmos.bank.v1beta1.Params.verify|verify} messages.
             * @function encode
             * @memberof cosmos.bank.v1beta1.Params
             * @static
             * @param {cosmos.bank.v1beta1.IParams} message Params message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Params.encode = function encode(message, writer) {
                if (!writer) writer = $Writer.create();
                if (message.send_enabled != null && message.send_enabled.length)
                    for (var i = 0; i < message.send_enabled.length; ++i)
                        cosmos.bank.v1beta1.SendEnabled.encode(
                            message.send_enabled[i],
                            writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
                        ).ldelim();
                if (
                    message.default_send_enabled != null &&
                    Object.hasOwnProperty.call(message, "default_send_enabled")
                )
                    writer
                        .uint32(/* id 2, wireType 0 =*/ 16)
                        .bool(message.default_send_enabled);
                return writer;
            };

            /**
             * Encodes the specified Params message, length delimited. Does not implicitly {@link cosmos.bank.v1beta1.Params.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cosmos.bank.v1beta1.Params
             * @static
             * @param {cosmos.bank.v1beta1.IParams} message Params message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Params.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Params message from the specified reader or buffer.
             * @function decode
             * @memberof cosmos.bank.v1beta1.Params
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cosmos.bank.v1beta1.Params} Params
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Params.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new cosmos.bank.v1beta1.Params();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            if (!(message.send_enabled && message.send_enabled.length))
                                message.send_enabled = [];
                            message.send_enabled.push(
                                cosmos.bank.v1beta1.SendEnabled.decode(
                                    reader,
                                    reader.uint32()
                                )
                            );
                            break;
                        case 2:
                            message.default_send_enabled = reader.bool();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Params message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cosmos.bank.v1beta1.Params
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cosmos.bank.v1beta1.Params} Params
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Params.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader)) reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Params message.
             * @function verify
             * @memberof cosmos.bank.v1beta1.Params
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Params.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (
                    message.send_enabled != null &&
                    message.hasOwnProperty("send_enabled")
                ) {
                    if (!Array.isArray(message.send_enabled))
                        return "send_enabled: array expected";
                    for (var i = 0; i < message.send_enabled.length; ++i) {
                        var error = cosmos.bank.v1beta1.SendEnabled.verify(
                            message.send_enabled[i]
                        );
                        if (error) return "send_enabled." + error;
                    }
                }
                if (
                    message.default_send_enabled != null &&
                    message.hasOwnProperty("default_send_enabled")
                )
                    if (typeof message.default_send_enabled !== "boolean")
                        return "default_send_enabled: boolean expected";
                return null;
            };

            /**
             * Creates a Params message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cosmos.bank.v1beta1.Params
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cosmos.bank.v1beta1.Params} Params
             */
            Params.fromObject = function fromObject(object) {
                if (object instanceof cosmos.bank.v1beta1.Params) return object;
                var message = new cosmos.bank.v1beta1.Params();
                if (object.send_enabled) {
                    if (!Array.isArray(object.send_enabled))
                        throw TypeError(
                            ".cosmos.bank.v1beta1.Params.send_enabled: array expected"
                        );
                    message.send_enabled = [];
                    for (var i = 0; i < object.send_enabled.length; ++i) {
                        if (typeof object.send_enabled[i] !== "object")
                            throw TypeError(
                                ".cosmos.bank.v1beta1.Params.send_enabled: object expected"
                            );
                        message.send_enabled[i] =
                            cosmos.bank.v1beta1.SendEnabled.fromObject(
                                object.send_enabled[i]
                            );
                    }
                }
                if (object.default_send_enabled != null)
                    message.default_send_enabled = Boolean(object.default_send_enabled);
                return message;
            };

            /**
             * Creates a plain object from a Params message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cosmos.bank.v1beta1.Params
             * @static
             * @param {cosmos.bank.v1beta1.Params} message Params
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Params.toObject = function toObject(message, options) {
                if (!options) options = {};
                var object = {};
                if (options.arrays || options.defaults) object.send_enabled = [];
                if (options.defaults) object.default_send_enabled = false;
                if (message.send_enabled && message.send_enabled.length) {
                    object.send_enabled = [];
                    for (var j = 0; j < message.send_enabled.length; ++j)
                        object.send_enabled[j] =
                            cosmos.bank.v1beta1.SendEnabled.toObject(
                                message.send_enabled[j],
                                options
                            );
                }
                if (
                    message.default_send_enabled != null &&
                    message.hasOwnProperty("default_send_enabled")
                )
                    object.default_send_enabled = message.default_send_enabled;
                return object;
            };

            /**
             * Converts this Params to JSON.
             * @function toJSON
             * @memberof cosmos.bank.v1beta1.Params
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Params.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Params;
        })();

        v1beta1.SendEnabled = (function () {
            /**
             * Properties of a SendEnabled.
             * @memberof cosmos.bank.v1beta1
             * @interface ISendEnabled
             * @property {string|null} [denom] SendEnabled denom
             * @property {boolean|null} [enabled] SendEnabled enabled
             */

            /**
             * Constructs a new SendEnabled.
             * @memberof cosmos.bank.v1beta1
             * @classdesc Represents a SendEnabled.
             * @implements ISendEnabled
             * @constructor
             * @param {cosmos.bank.v1beta1.ISendEnabled=} [properties] Properties to set
             */
            function SendEnabled(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SendEnabled denom.
             * @member {string} denom
             * @memberof cosmos.bank.v1beta1.SendEnabled
             * @instance
             */
            SendEnabled.prototype.denom = "";

            /**
             * SendEnabled enabled.
             * @member {boolean} enabled
             * @memberof cosmos.bank.v1beta1.SendEnabled
             * @instance
             */
            SendEnabled.prototype.enabled = false;

            /**
             * Encodes the specified SendEnabled message. Does not implicitly {@link cosmos.bank.v1beta1.SendEnabled.verify|verify} messages.
             * @function encode
             * @memberof cosmos.bank.v1beta1.SendEnabled
             * @static
             * @param {cosmos.bank.v1beta1.ISendEnabled} message SendEnabled message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SendEnabled.encode = function encode(message, writer) {
                if (!writer) writer = $Writer.create();
                if (
                    message.denom != null &&
                    Object.hasOwnProperty.call(message, "denom")
                )
                    writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.denom);
                if (
                    message.enabled != null &&
                    Object.hasOwnProperty.call(message, "enabled")
                )
                    writer.uint32(/* id 2, wireType 0 =*/ 16).bool(message.enabled);
                return writer;
            };

            /**
             * Encodes the specified SendEnabled message, length delimited. Does not implicitly {@link cosmos.bank.v1beta1.SendEnabled.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cosmos.bank.v1beta1.SendEnabled
             * @static
             * @param {cosmos.bank.v1beta1.ISendEnabled} message SendEnabled message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SendEnabled.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SendEnabled message from the specified reader or buffer.
             * @function decode
             * @memberof cosmos.bank.v1beta1.SendEnabled
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cosmos.bank.v1beta1.SendEnabled} SendEnabled
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SendEnabled.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new cosmos.bank.v1beta1.SendEnabled();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.denom = reader.string();
                            break;
                        case 2:
                            message.enabled = reader.bool();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };

            /**
             * Decodes a SendEnabled message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cosmos.bank.v1beta1.SendEnabled
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cosmos.bank.v1beta1.SendEnabled} SendEnabled
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SendEnabled.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader)) reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SendEnabled message.
             * @function verify
             * @memberof cosmos.bank.v1beta1.SendEnabled
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SendEnabled.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.denom != null && message.hasOwnProperty("denom"))
                    if (!$util.isString(message.denom)) return "denom: string expected";
                if (message.enabled != null && message.hasOwnProperty("enabled"))
                    if (typeof message.enabled !== "boolean")
                        return "enabled: boolean expected";
                return null;
            };

            /**
             * Creates a SendEnabled message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cosmos.bank.v1beta1.SendEnabled
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cosmos.bank.v1beta1.SendEnabled} SendEnabled
             */
            SendEnabled.fromObject = function fromObject(object) {
                if (object instanceof cosmos.bank.v1beta1.SendEnabled)
                    return object;
                var message = new cosmos.bank.v1beta1.SendEnabled();
                if (object.denom != null) message.denom = String(object.denom);
                if (object.enabled != null) message.enabled = Boolean(object.enabled);
                return message;
            };

            /**
             * Creates a plain object from a SendEnabled message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cosmos.bank.v1beta1.SendEnabled
             * @static
             * @param {cosmos.bank.v1beta1.SendEnabled} message SendEnabled
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SendEnabled.toObject = function toObject(message, options) {
                if (!options) options = {};
                var object = {};
                if (options.defaults) {
                    object.denom = "";
                    object.enabled = false;
                }
                if (message.denom != null && message.hasOwnProperty("denom"))
                    object.denom = message.denom;
                if (message.enabled != null && message.hasOwnProperty("enabled"))
                    object.enabled = message.enabled;
                return object;
            };

            /**
             * Converts this SendEnabled to JSON.
             * @function toJSON
             * @memberof cosmos.bank.v1beta1.SendEnabled
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SendEnabled.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return SendEnabled;
        })();

        v1beta1.Input = (function () {
            /**
             * Properties of an Input.
             * @memberof cosmos.bank.v1beta1
             * @interface IInput
             * @property {string|null} [address] Input address
             * @property {Array.<cosmos.base.v1beta1.ICoin>|null} [coins] Input coins
             */

            /**
             * Constructs a new Input.
             * @memberof cosmos.bank.v1beta1
             * @classdesc Represents an Input.
             * @implements IInput
             * @constructor
             * @param {cosmos.bank.v1beta1.IInput=} [properties] Properties to set
             */
            function Input(properties) {
                this.coins = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Input address.
             * @member {string} address
             * @memberof cosmos.bank.v1beta1.Input
             * @instance
             */
            Input.prototype.address = "";

            /**
             * Input coins.
             * @member {Array.<cosmos.base.v1beta1.ICoin>} coins
             * @memberof cosmos.bank.v1beta1.Input
             * @instance
             */
            Input.prototype.coins = $util.emptyArray;

            /**
             * Encodes the specified Input message. Does not implicitly {@link cosmos.bank.v1beta1.Input.verify|verify} messages.
             * @function encode
             * @memberof cosmos.bank.v1beta1.Input
             * @static
             * @param {cosmos.bank.v1beta1.IInput} message Input message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Input.encode = function encode(message, writer) {
                if (!writer) writer = $Writer.create();
                if (
                    message.address != null &&
                    Object.hasOwnProperty.call(message, "address")
                )
                    writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.address);
                if (message.coins != null && message.coins.length)
                    for (var i = 0; i < message.coins.length; ++i)
                        cosmos.base.v1beta1.Coin.encode(
                            message.coins[i],
                            writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
                        ).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Input message, length delimited. Does not implicitly {@link cosmos.bank.v1beta1.Input.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cosmos.bank.v1beta1.Input
             * @static
             * @param {cosmos.bank.v1beta1.IInput} message Input message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Input.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Input message from the specified reader or buffer.
             * @function decode
             * @memberof cosmos.bank.v1beta1.Input
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cosmos.bank.v1beta1.Input} Input
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Input.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new cosmos.bank.v1beta1.Input();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.address = reader.string();
                            break;
                        case 2:
                            if (!(message.coins && message.coins.length)) message.coins = [];
                            message.coins.push(
                                cosmos.base.v1beta1.Coin.decode(reader, reader.uint32())
                            );
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Input message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cosmos.bank.v1beta1.Input
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cosmos.bank.v1beta1.Input} Input
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Input.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader)) reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Input message.
             * @function verify
             * @memberof cosmos.bank.v1beta1.Input
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Input.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.address != null && message.hasOwnProperty("address"))
                    if (!$util.isString(message.address))
                        return "address: string expected";
                if (message.coins != null && message.hasOwnProperty("coins")) {
                    if (!Array.isArray(message.coins)) return "coins: array expected";
                    for (var i = 0; i < message.coins.length; ++i) {
                        var error = cosmos.base.v1beta1.Coin.verify(message.coins[i]);
                        if (error) return "coins." + error;
                    }
                }
                return null;
            };

            /**
             * Creates an Input message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cosmos.bank.v1beta1.Input
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cosmos.bank.v1beta1.Input} Input
             */
            Input.fromObject = function fromObject(object) {
                if (object instanceof cosmos.bank.v1beta1.Input) return object;
                var message = new cosmos.bank.v1beta1.Input();
                if (object.address != null) message.address = String(object.address);
                if (object.coins) {
                    if (!Array.isArray(object.coins))
                        throw TypeError(".cosmos.bank.v1beta1.Input.coins: array expected");
                    message.coins = [];
                    for (var i = 0; i < object.coins.length; ++i) {
                        if (typeof object.coins[i] !== "object")
                            throw TypeError(
                                ".cosmos.bank.v1beta1.Input.coins: object expected"
                            );
                        message.coins[i] = cosmos.base.v1beta1.Coin.fromObject(
                            object.coins[i]
                        );
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from an Input message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cosmos.bank.v1beta1.Input
             * @static
             * @param {cosmos.bank.v1beta1.Input} message Input
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Input.toObject = function toObject(message, options) {
                if (!options) options = {};
                var object = {};
                if (options.arrays || options.defaults) object.coins = [];
                if (options.defaults) object.address = "";
                if (message.address != null && message.hasOwnProperty("address"))
                    object.address = message.address;
                if (message.coins && message.coins.length) {
                    object.coins = [];
                    for (var j = 0; j < message.coins.length; ++j)
                        object.coins[j] = cosmos.base.v1beta1.Coin.toObject(
                            message.coins[j],
                            options
                        );
                }
                return object;
            };

            /**
             * Converts this Input to JSON.
             * @function toJSON
             * @memberof cosmos.bank.v1beta1.Input
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Input.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Input;
        })();

        v1beta1.Output = (function () {
            /**
             * Properties of an Output.
             * @memberof cosmos.bank.v1beta1
             * @interface IOutput
             * @property {string|null} [address] Output address
             * @property {Array.<cosmos.base.v1beta1.ICoin>|null} [coins] Output coins
             */

            /**
             * Constructs a new Output.
             * @memberof cosmos.bank.v1beta1
             * @classdesc Represents an Output.
             * @implements IOutput
             * @constructor
             * @param {cosmos.bank.v1beta1.IOutput=} [properties] Properties to set
             */
            function Output(properties) {
                this.coins = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Output address.
             * @member {string} address
             * @memberof cosmos.bank.v1beta1.Output
             * @instance
             */
            Output.prototype.address = "";

            /**
             * Output coins.
             * @member {Array.<cosmos.base.v1beta1.ICoin>} coins
             * @memberof cosmos.bank.v1beta1.Output
             * @instance
             */
            Output.prototype.coins = $util.emptyArray;

            /**
             * Encodes the specified Output message. Does not implicitly {@link cosmos.bank.v1beta1.Output.verify|verify} messages.
             * @function encode
             * @memberof cosmos.bank.v1beta1.Output
             * @static
             * @param {cosmos.bank.v1beta1.IOutput} message Output message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Output.encode = function encode(message, writer) {
                if (!writer) writer = $Writer.create();
                if (
                    message.address != null &&
                    Object.hasOwnProperty.call(message, "address")
                )
                    writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.address);
                if (message.coins != null && message.coins.length)
                    for (var i = 0; i < message.coins.length; ++i)
                        cosmos.base.v1beta1.Coin.encode(
                            message.coins[i],
                            writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
                        ).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Output message, length delimited. Does not implicitly {@link cosmos.bank.v1beta1.Output.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cosmos.bank.v1beta1.Output
             * @static
             * @param {cosmos.bank.v1beta1.IOutput} message Output message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Output.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Output message from the specified reader or buffer.
             * @function decode
             * @memberof cosmos.bank.v1beta1.Output
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cosmos.bank.v1beta1.Output} Output
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Output.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new cosmos.bank.v1beta1.Output();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.address = reader.string();
                            break;
                        case 2:
                            if (!(message.coins && message.coins.length)) message.coins = [];
                            message.coins.push(
                                cosmos.base.v1beta1.Coin.decode(reader, reader.uint32())
                            );
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Output message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cosmos.bank.v1beta1.Output
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cosmos.bank.v1beta1.Output} Output
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Output.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader)) reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Output message.
             * @function verify
             * @memberof cosmos.bank.v1beta1.Output
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Output.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.address != null && message.hasOwnProperty("address"))
                    if (!$util.isString(message.address))
                        return "address: string expected";
                if (message.coins != null && message.hasOwnProperty("coins")) {
                    if (!Array.isArray(message.coins)) return "coins: array expected";
                    for (var i = 0; i < message.coins.length; ++i) {
                        var error = cosmos.base.v1beta1.Coin.verify(message.coins[i]);
                        if (error) return "coins." + error;
                    }
                }
                return null;
            };

            /**
             * Creates an Output message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cosmos.bank.v1beta1.Output
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cosmos.bank.v1beta1.Output} Output
             */
            Output.fromObject = function fromObject(object) {
                if (object instanceof cosmos.bank.v1beta1.Output) return object;
                var message = new cosmos.bank.v1beta1.Output();
                if (object.address != null) message.address = String(object.address);
                if (object.coins) {
                    if (!Array.isArray(object.coins))
                        throw TypeError(
                            ".cosmos.bank.v1beta1.Output.coins: array expected"
                        );
                    message.coins = [];
                    for (var i = 0; i < object.coins.length; ++i) {
                        if (typeof object.coins[i] !== "object")
                            throw TypeError(
                                ".cosmos.bank.v1beta1.Output.coins: object expected"
                            );
                        message.coins[i] = cosmos.base.v1beta1.Coin.fromObject(
                            object.coins[i]
                        );
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from an Output message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cosmos.bank.v1beta1.Output
             * @static
             * @param {cosmos.bank.v1beta1.Output} message Output
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Output.toObject = function toObject(message, options) {
                if (!options) options = {};
                var object = {};
                if (options.arrays || options.defaults) object.coins = [];
                if (options.defaults) object.address = "";
                if (message.address != null && message.hasOwnProperty("address"))
                    object.address = message.address;
                if (message.coins && message.coins.length) {
                    object.coins = [];
                    for (var j = 0; j < message.coins.length; ++j)
                        object.coins[j] = cosmos.base.v1beta1.Coin.toObject(
                            message.coins[j],
                            options
                        );
                }
                return object;
            };

            /**
             * Converts this Output to JSON.
             * @function toJSON
             * @memberof cosmos.bank.v1beta1.Output
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Output.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Output;
        })();

        v1beta1.Supply = (function () {
            /**
             * Properties of a Supply.
             * @memberof cosmos.bank.v1beta1
             * @interface ISupply
             * @property {Array.<cosmos.base.v1beta1.ICoin>|null} [total] Supply total
             */

            /**
             * Constructs a new Supply.
             * @memberof cosmos.bank.v1beta1
             * @classdesc Represents a Supply.
             * @implements ISupply
             * @constructor
             * @param {cosmos.bank.v1beta1.ISupply=} [properties] Properties to set
             */
            function Supply(properties) {
                this.total = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Supply total.
             * @member {Array.<cosmos.base.v1beta1.ICoin>} total
             * @memberof cosmos.bank.v1beta1.Supply
             * @instance
             */
            Supply.prototype.total = $util.emptyArray;

            /**
             * Encodes the specified Supply message. Does not implicitly {@link cosmos.bank.v1beta1.Supply.verify|verify} messages.
             * @function encode
             * @memberof cosmos.bank.v1beta1.Supply
             * @static
             * @param {cosmos.bank.v1beta1.ISupply} message Supply message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Supply.encode = function encode(message, writer) {
                if (!writer) writer = $Writer.create();
                if (message.total != null && message.total.length)
                    for (var i = 0; i < message.total.length; ++i)
                        cosmos.base.v1beta1.Coin.encode(
                            message.total[i],
                            writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
                        ).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Supply message, length delimited. Does not implicitly {@link cosmos.bank.v1beta1.Supply.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cosmos.bank.v1beta1.Supply
             * @static
             * @param {cosmos.bank.v1beta1.ISupply} message Supply message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Supply.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Supply message from the specified reader or buffer.
             * @function decode
             * @memberof cosmos.bank.v1beta1.Supply
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cosmos.bank.v1beta1.Supply} Supply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Supply.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new cosmos.bank.v1beta1.Supply();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            if (!(message.total && message.total.length)) message.total = [];
                            message.total.push(
                                cosmos.base.v1beta1.Coin.decode(reader, reader.uint32())
                            );
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Supply message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cosmos.bank.v1beta1.Supply
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cosmos.bank.v1beta1.Supply} Supply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Supply.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader)) reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Supply message.
             * @function verify
             * @memberof cosmos.bank.v1beta1.Supply
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Supply.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.total != null && message.hasOwnProperty("total")) {
                    if (!Array.isArray(message.total)) return "total: array expected";
                    for (var i = 0; i < message.total.length; ++i) {
                        var error = cosmos.base.v1beta1.Coin.verify(message.total[i]);
                        if (error) return "total." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a Supply message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cosmos.bank.v1beta1.Supply
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cosmos.bank.v1beta1.Supply} Supply
             */
            Supply.fromObject = function fromObject(object) {
                if (object instanceof cosmos.bank.v1beta1.Supply) return object;
                var message = new cosmos.bank.v1beta1.Supply();
                if (object.total) {
                    if (!Array.isArray(object.total))
                        throw TypeError(
                            ".cosmos.bank.v1beta1.Supply.total: array expected"
                        );
                    message.total = [];
                    for (var i = 0; i < object.total.length; ++i) {
                        if (typeof object.total[i] !== "object")
                            throw TypeError(
                                ".cosmos.bank.v1beta1.Supply.total: object expected"
                            );
                        message.total[i] = cosmos.base.v1beta1.Coin.fromObject(
                            object.total[i]
                        );
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a Supply message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cosmos.bank.v1beta1.Supply
             * @static
             * @param {cosmos.bank.v1beta1.Supply} message Supply
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Supply.toObject = function toObject(message, options) {
                if (!options) options = {};
                var object = {};
                if (options.arrays || options.defaults) object.total = [];
                if (message.total && message.total.length) {
                    object.total = [];
                    for (var j = 0; j < message.total.length; ++j)
                        object.total[j] = cosmos.base.v1beta1.Coin.toObject(
                            message.total[j],
                            options
                        );
                }
                return object;
            };

            /**
             * Converts this Supply to JSON.
             * @function toJSON
             * @memberof cosmos.bank.v1beta1.Supply
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Supply.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Supply;
        })();

        v1beta1.DenomUnit = (function () {
            /**
             * Properties of a DenomUnit.
             * @memberof cosmos.bank.v1beta1
             * @interface IDenomUnit
             * @property {string|null} [denom] DenomUnit denom
             * @property {number|null} [exponent] DenomUnit exponent
             * @property {Array.<string>|null} [aliases] DenomUnit aliases
             */

            /**
             * Constructs a new DenomUnit.
             * @memberof cosmos.bank.v1beta1
             * @classdesc Represents a DenomUnit.
             * @implements IDenomUnit
             * @constructor
             * @param {cosmos.bank.v1beta1.IDenomUnit=} [properties] Properties to set
             */
            function DenomUnit(properties) {
                this.aliases = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DenomUnit denom.
             * @member {string} denom
             * @memberof cosmos.bank.v1beta1.DenomUnit
             * @instance
             */
            DenomUnit.prototype.denom = "";

            /**
             * DenomUnit exponent.
             * @member {number} exponent
             * @memberof cosmos.bank.v1beta1.DenomUnit
             * @instance
             */
            DenomUnit.prototype.exponent = 0;

            /**
             * DenomUnit aliases.
             * @member {Array.<string>} aliases
             * @memberof cosmos.bank.v1beta1.DenomUnit
             * @instance
             */
            DenomUnit.prototype.aliases = $util.emptyArray;

            /**
             * Encodes the specified DenomUnit message. Does not implicitly {@link cosmos.bank.v1beta1.DenomUnit.verify|verify} messages.
             * @function encode
             * @memberof cosmos.bank.v1beta1.DenomUnit
             * @static
             * @param {cosmos.bank.v1beta1.IDenomUnit} message DenomUnit message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DenomUnit.encode = function encode(message, writer) {
                if (!writer) writer = $Writer.create();
                if (
                    message.denom != null &&
                    Object.hasOwnProperty.call(message, "denom")
                )
                    writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.denom);
                if (
                    message.exponent != null &&
                    Object.hasOwnProperty.call(message, "exponent")
                )
                    writer.uint32(/* id 2, wireType 0 =*/ 16).uint32(message.exponent);
                if (message.aliases != null && message.aliases.length)
                    for (var i = 0; i < message.aliases.length; ++i)
                        writer
                            .uint32(/* id 3, wireType 2 =*/ 26)
                            .string(message.aliases[i]);
                return writer;
            };

            /**
             * Encodes the specified DenomUnit message, length delimited. Does not implicitly {@link cosmos.bank.v1beta1.DenomUnit.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cosmos.bank.v1beta1.DenomUnit
             * @static
             * @param {cosmos.bank.v1beta1.IDenomUnit} message DenomUnit message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DenomUnit.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DenomUnit message from the specified reader or buffer.
             * @function decode
             * @memberof cosmos.bank.v1beta1.DenomUnit
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cosmos.bank.v1beta1.DenomUnit} DenomUnit
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DenomUnit.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new cosmos.bank.v1beta1.DenomUnit();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.denom = reader.string();
                            break;
                        case 2:
                            message.exponent = reader.uint32();
                            break;
                        case 3:
                            if (!(message.aliases && message.aliases.length))
                                message.aliases = [];
                            message.aliases.push(reader.string());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };

            /**
             * Decodes a DenomUnit message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cosmos.bank.v1beta1.DenomUnit
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cosmos.bank.v1beta1.DenomUnit} DenomUnit
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DenomUnit.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader)) reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DenomUnit message.
             * @function verify
             * @memberof cosmos.bank.v1beta1.DenomUnit
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DenomUnit.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.denom != null && message.hasOwnProperty("denom"))
                    if (!$util.isString(message.denom)) return "denom: string expected";
                if (message.exponent != null && message.hasOwnProperty("exponent"))
                    if (!$util.isInteger(message.exponent))
                        return "exponent: integer expected";
                if (message.aliases != null && message.hasOwnProperty("aliases")) {
                    if (!Array.isArray(message.aliases)) return "aliases: array expected";
                    for (var i = 0; i < message.aliases.length; ++i)
                        if (!$util.isString(message.aliases[i]))
                            return "aliases: string[] expected";
                }
                return null;
            };

            /**
             * Creates a DenomUnit message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cosmos.bank.v1beta1.DenomUnit
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cosmos.bank.v1beta1.DenomUnit} DenomUnit
             */
            DenomUnit.fromObject = function fromObject(object) {
                if (object instanceof cosmos.bank.v1beta1.DenomUnit)
                    return object;
                var message = new cosmos.bank.v1beta1.DenomUnit();
                if (object.denom != null) message.denom = String(object.denom);
                if (object.exponent != null) message.exponent = object.exponent >>> 0;
                if (object.aliases) {
                    if (!Array.isArray(object.aliases))
                        throw TypeError(
                            ".cosmos.bank.v1beta1.DenomUnit.aliases: array expected"
                        );
                    message.aliases = [];
                    for (var i = 0; i < object.aliases.length; ++i)
                        message.aliases[i] = String(object.aliases[i]);
                }
                return message;
            };

            /**
             * Creates a plain object from a DenomUnit message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cosmos.bank.v1beta1.DenomUnit
             * @static
             * @param {cosmos.bank.v1beta1.DenomUnit} message DenomUnit
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DenomUnit.toObject = function toObject(message, options) {
                if (!options) options = {};
                var object = {};
                if (options.arrays || options.defaults) object.aliases = [];
                if (options.defaults) {
                    object.denom = "";
                    object.exponent = 0;
                }
                if (message.denom != null && message.hasOwnProperty("denom"))
                    object.denom = message.denom;
                if (message.exponent != null && message.hasOwnProperty("exponent"))
                    object.exponent = message.exponent;
                if (message.aliases && message.aliases.length) {
                    object.aliases = [];
                    for (var j = 0; j < message.aliases.length; ++j)
                        object.aliases[j] = message.aliases[j];
                }
                return object;
            };

            /**
             * Converts this DenomUnit to JSON.
             * @function toJSON
             * @memberof cosmos.bank.v1beta1.DenomUnit
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DenomUnit.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return DenomUnit;
        })();

        v1beta1.Metadata = (function () {
            /**
             * Properties of a Metadata.
             * @memberof cosmos.bank.v1beta1
             * @interface IMetadata
             * @property {string|null} [description] Metadata description
             * @property {Array.<cosmos.bank.v1beta1.IDenomUnit>|null} [denom_units] Metadata denom_units
             * @property {string|null} [base] Metadata base
             * @property {string|null} [display] Metadata display
             * @property {string|null} [name] Metadata name
             * @property {string|null} [symbol] Metadata symbol
             */

            /**
             * Constructs a new Metadata.
             * @memberof cosmos.bank.v1beta1
             * @classdesc Represents a Metadata.
             * @implements IMetadata
             * @constructor
             * @param {cosmos.bank.v1beta1.IMetadata=} [properties] Properties to set
             */
            function Metadata(properties) {
                this.denom_units = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Metadata description.
             * @member {string} description
             * @memberof cosmos.bank.v1beta1.Metadata
             * @instance
             */
            Metadata.prototype.description = "";

            /**
             * Metadata denom_units.
             * @member {Array.<cosmos.bank.v1beta1.IDenomUnit>} denom_units
             * @memberof cosmos.bank.v1beta1.Metadata
             * @instance
             */
            Metadata.prototype.denom_units = $util.emptyArray;

            /**
             * Metadata base.
             * @member {string} base
             * @memberof cosmos.bank.v1beta1.Metadata
             * @instance
             */
            Metadata.prototype.base = "";

            /**
             * Metadata display.
             * @member {string} display
             * @memberof cosmos.bank.v1beta1.Metadata
             * @instance
             */
            Metadata.prototype.display = "";

            /**
             * Metadata name.
             * @member {string} name
             * @memberof cosmos.bank.v1beta1.Metadata
             * @instance
             */
            Metadata.prototype.name = "";

            /**
             * Metadata symbol.
             * @member {string} symbol
             * @memberof cosmos.bank.v1beta1.Metadata
             * @instance
             */
            Metadata.prototype.symbol = "";

            /**
             * Encodes the specified Metadata message. Does not implicitly {@link cosmos.bank.v1beta1.Metadata.verify|verify} messages.
             * @function encode
             * @memberof cosmos.bank.v1beta1.Metadata
             * @static
             * @param {cosmos.bank.v1beta1.IMetadata} message Metadata message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Metadata.encode = function encode(message, writer) {
                if (!writer) writer = $Writer.create();
                if (
                    message.description != null &&
                    Object.hasOwnProperty.call(message, "description")
                )
                    writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.description);
                if (message.denom_units != null && message.denom_units.length)
                    for (var i = 0; i < message.denom_units.length; ++i)
                        cosmos.bank.v1beta1.DenomUnit.encode(
                            message.denom_units[i],
                            writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
                        ).ldelim();
                if (message.base != null && Object.hasOwnProperty.call(message, "base"))
                    writer.uint32(/* id 3, wireType 2 =*/ 26).string(message.base);
                if (
                    message.display != null &&
                    Object.hasOwnProperty.call(message, "display")
                )
                    writer.uint32(/* id 4, wireType 2 =*/ 34).string(message.display);
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 5, wireType 2 =*/ 42).string(message.name);
                if (
                    message.symbol != null &&
                    Object.hasOwnProperty.call(message, "symbol")
                )
                    writer.uint32(/* id 6, wireType 2 =*/ 50).string(message.symbol);
                return writer;
            };

            /**
             * Encodes the specified Metadata message, length delimited. Does not implicitly {@link cosmos.bank.v1beta1.Metadata.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cosmos.bank.v1beta1.Metadata
             * @static
             * @param {cosmos.bank.v1beta1.IMetadata} message Metadata message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Metadata.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Metadata message from the specified reader or buffer.
             * @function decode
             * @memberof cosmos.bank.v1beta1.Metadata
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cosmos.bank.v1beta1.Metadata} Metadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Metadata.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new cosmos.bank.v1beta1.Metadata();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.description = reader.string();
                            break;
                        case 2:
                            if (!(message.denom_units && message.denom_units.length))
                                message.denom_units = [];
                            message.denom_units.push(
                                cosmos.bank.v1beta1.DenomUnit.decode(
                                    reader,
                                    reader.uint32()
                                )
                            );
                            break;
                        case 3:
                            message.base = reader.string();
                            break;
                        case 4:
                            message.display = reader.string();
                            break;
                        case 5:
                            message.name = reader.string();
                            break;
                        case 6:
                            message.symbol = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Metadata message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cosmos.bank.v1beta1.Metadata
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cosmos.bank.v1beta1.Metadata} Metadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Metadata.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader)) reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Metadata message.
             * @function verify
             * @memberof cosmos.bank.v1beta1.Metadata
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Metadata.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (
                    message.description != null &&
                    message.hasOwnProperty("description")
                )
                    if (!$util.isString(message.description))
                        return "description: string expected";
                if (
                    message.denom_units != null &&
                    message.hasOwnProperty("denom_units")
                ) {
                    if (!Array.isArray(message.denom_units))
                        return "denom_units: array expected";
                    for (var i = 0; i < message.denom_units.length; ++i) {
                        var error = cosmos.bank.v1beta1.DenomUnit.verify(
                            message.denom_units[i]
                        );
                        if (error) return "denom_units." + error;
                    }
                }
                if (message.base != null && message.hasOwnProperty("base"))
                    if (!$util.isString(message.base)) return "base: string expected";
                if (message.display != null && message.hasOwnProperty("display"))
                    if (!$util.isString(message.display))
                        return "display: string expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name)) return "name: string expected";
                if (message.symbol != null && message.hasOwnProperty("symbol"))
                    if (!$util.isString(message.symbol)) return "symbol: string expected";
                return null;
            };

            /**
             * Creates a Metadata message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cosmos.bank.v1beta1.Metadata
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cosmos.bank.v1beta1.Metadata} Metadata
             */
            Metadata.fromObject = function fromObject(object) {
                if (object instanceof cosmos.bank.v1beta1.Metadata) return object;
                var message = new cosmos.bank.v1beta1.Metadata();
                if (object.description != null)
                    message.description = String(object.description);
                if (object.denom_units) {
                    if (!Array.isArray(object.denom_units))
                        throw TypeError(
                            ".cosmos.bank.v1beta1.Metadata.denom_units: array expected"
                        );
                    message.denom_units = [];
                    for (var i = 0; i < object.denom_units.length; ++i) {
                        if (typeof object.denom_units[i] !== "object")
                            throw TypeError(
                                ".cosmos.bank.v1beta1.Metadata.denom_units: object expected"
                            );
                        message.denom_units[i] =
                            cosmos.bank.v1beta1.DenomUnit.fromObject(
                                object.denom_units[i]
                            );
                    }
                }
                if (object.base != null) message.base = String(object.base);
                if (object.display != null) message.display = String(object.display);
                if (object.name != null) message.name = String(object.name);
                if (object.symbol != null) message.symbol = String(object.symbol);
                return message;
            };

            /**
             * Creates a plain object from a Metadata message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cosmos.bank.v1beta1.Metadata
             * @static
             * @param {cosmos.bank.v1beta1.Metadata} message Metadata
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Metadata.toObject = function toObject(message, options) {
                if (!options) options = {};
                var object = {};
                if (options.arrays || options.defaults) object.denom_units = [];
                if (options.defaults) {
                    object.description = "";
                    object.base = "";
                    object.display = "";
                    object.name = "";
                    object.symbol = "";
                }
                if (
                    message.description != null &&
                    message.hasOwnProperty("description")
                )
                    object.description = message.description;
                if (message.denom_units && message.denom_units.length) {
                    object.denom_units = [];
                    for (var j = 0; j < message.denom_units.length; ++j)
                        object.denom_units[j] =
                            cosmos.bank.v1beta1.DenomUnit.toObject(
                                message.denom_units[j],
                                options
                            );
                }
                if (message.base != null && message.hasOwnProperty("base"))
                    object.base = message.base;
                if (message.display != null && message.hasOwnProperty("display"))
                    object.display = message.display;
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.symbol != null && message.hasOwnProperty("symbol"))
                    object.symbol = message.symbol;
                return object;
            };

            /**
             * Converts this Metadata to JSON.
             * @function toJSON
             * @memberof cosmos.bank.v1beta1.Metadata
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Metadata.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Metadata;
        })();

        v1beta1.Query = (function () {
            /**
             * Constructs a new Query service.
             * @memberof cosmos.bank.v1beta1
             * @classdesc Represents a Query
             * @extends $protobuf.rpc.Service
             * @constructor
             * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
             * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
             * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
             */
            function Query(rpcImpl, requestDelimited, responseDelimited) {
                $protobuf.rpc.Service.call(
                    this,
                    rpcImpl,
                    requestDelimited,
                    responseDelimited
                );
            }

            (Query.prototype = Object.create(
                $protobuf.rpc.Service.prototype
            )).constructor = Query;

            /**
             * Callback as used by {@link cosmos.bank.v1beta1.Query#balance}.
             * @memberof cosmos.bank.v1beta1.Query
             * @typedef BalanceCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {cosmos.bank.v1beta1.QueryBalanceResponse} [response] QueryBalanceResponse
             */

            /**
             * Calls Balance.
             * @function balance
             * @memberof cosmos.bank.v1beta1.Query
             * @instance
             * @param {cosmos.bank.v1beta1.IQueryBalanceRequest} request QueryBalanceRequest message or plain object
             * @param {cosmos.bank.v1beta1.Query.BalanceCallback} callback Node-style callback called with the error, if any, and QueryBalanceResponse
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(
                (Query.prototype.balance = function balance(request, callback) {
                    return this.rpcCall(
                        balance,
                        cosmos.bank.v1beta1.QueryBalanceRequest,
                        cosmos.bank.v1beta1.QueryBalanceResponse,
                        request,
                        callback
                    );
                }),
                "name",
                { value: "Balance" }
            );

            /**
             * Calls Balance.
             * @function balance
             * @memberof cosmos.bank.v1beta1.Query
             * @instance
             * @param {cosmos.bank.v1beta1.IQueryBalanceRequest} request QueryBalanceRequest message or plain object
             * @returns {Promise<cosmos.bank.v1beta1.QueryBalanceResponse>} Promise
             * @variation 2
             */

            /**
             * Callback as used by {@link cosmos.bank.v1beta1.Query#allBalances}.
             * @memberof cosmos.bank.v1beta1.Query
             * @typedef AllBalancesCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {cosmos.bank.v1beta1.QueryAllBalancesResponse} [response] QueryAllBalancesResponse
             */

            /**
             * Calls AllBalances.
             * @function allBalances
             * @memberof cosmos.bank.v1beta1.Query
             * @instance
             * @param {cosmos.bank.v1beta1.IQueryAllBalancesRequest} request QueryAllBalancesRequest message or plain object
             * @param {cosmos.bank.v1beta1.Query.AllBalancesCallback} callback Node-style callback called with the error, if any, and QueryAllBalancesResponse
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(
                (Query.prototype.allBalances = function allBalances(request, callback) {
                    return this.rpcCall(
                        allBalances,
                        cosmos.bank.v1beta1.QueryAllBalancesRequest,
                        cosmos.bank.v1beta1.QueryAllBalancesResponse,
                        request,
                        callback
                    );
                }),
                "name",
                { value: "AllBalances" }
            );

            /**
             * Calls AllBalances.
             * @function allBalances
             * @memberof cosmos.bank.v1beta1.Query
             * @instance
             * @param {cosmos.bank.v1beta1.IQueryAllBalancesRequest} request QueryAllBalancesRequest message or plain object
             * @returns {Promise<cosmos.bank.v1beta1.QueryAllBalancesResponse>} Promise
             * @variation 2
             */

            /**
             * Callback as used by {@link cosmos.bank.v1beta1.Query#totalSupply}.
             * @memberof cosmos.bank.v1beta1.Query
             * @typedef TotalSupplyCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {cosmos.bank.v1beta1.QueryTotalSupplyResponse} [response] QueryTotalSupplyResponse
             */

            /**
             * Calls TotalSupply.
             * @function totalSupply
             * @memberof cosmos.bank.v1beta1.Query
             * @instance
             * @param {cosmos.bank.v1beta1.IQueryTotalSupplyRequest} request QueryTotalSupplyRequest message or plain object
             * @param {cosmos.bank.v1beta1.Query.TotalSupplyCallback} callback Node-style callback called with the error, if any, and QueryTotalSupplyResponse
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(
                (Query.prototype.totalSupply = function totalSupply(request, callback) {
                    return this.rpcCall(
                        totalSupply,
                        cosmos.bank.v1beta1.QueryTotalSupplyRequest,
                        cosmos.bank.v1beta1.QueryTotalSupplyResponse,
                        request,
                        callback
                    );
                }),
                "name",
                { value: "TotalSupply" }
            );

            /**
             * Calls TotalSupply.
             * @function totalSupply
             * @memberof cosmos.bank.v1beta1.Query
             * @instance
             * @param {cosmos.bank.v1beta1.IQueryTotalSupplyRequest} request QueryTotalSupplyRequest message or plain object
             * @returns {Promise<cosmos.bank.v1beta1.QueryTotalSupplyResponse>} Promise
             * @variation 2
             */

            /**
             * Callback as used by {@link cosmos.bank.v1beta1.Query#supplyOf}.
             * @memberof cosmos.bank.v1beta1.Query
             * @typedef SupplyOfCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {cosmos.bank.v1beta1.QuerySupplyOfResponse} [response] QuerySupplyOfResponse
             */

            /**
             * Calls SupplyOf.
             * @function supplyOf
             * @memberof cosmos.bank.v1beta1.Query
             * @instance
             * @param {cosmos.bank.v1beta1.IQuerySupplyOfRequest} request QuerySupplyOfRequest message or plain object
             * @param {cosmos.bank.v1beta1.Query.SupplyOfCallback} callback Node-style callback called with the error, if any, and QuerySupplyOfResponse
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(
                (Query.prototype.supplyOf = function supplyOf(request, callback) {
                    return this.rpcCall(
                        supplyOf,
                        cosmos.bank.v1beta1.QuerySupplyOfRequest,
                        cosmos.bank.v1beta1.QuerySupplyOfResponse,
                        request,
                        callback
                    );
                }),
                "name",
                { value: "SupplyOf" }
            );

            /**
             * Calls SupplyOf.
             * @function supplyOf
             * @memberof cosmos.bank.v1beta1.Query
             * @instance
             * @param {cosmos.bank.v1beta1.IQuerySupplyOfRequest} request QuerySupplyOfRequest message or plain object
             * @returns {Promise<cosmos.bank.v1beta1.QuerySupplyOfResponse>} Promise
             * @variation 2
             */

            /**
             * Callback as used by {@link cosmos.bank.v1beta1.Query#params}.
             * @memberof cosmos.bank.v1beta1.Query
             * @typedef ParamsCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {cosmos.bank.v1beta1.QueryParamsResponse} [response] QueryParamsResponse
             */

            /**
             * Calls Params.
             * @function params
             * @memberof cosmos.bank.v1beta1.Query
             * @instance
             * @param {cosmos.bank.v1beta1.IQueryParamsRequest} request QueryParamsRequest message or plain object
             * @param {cosmos.bank.v1beta1.Query.ParamsCallback} callback Node-style callback called with the error, if any, and QueryParamsResponse
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(
                (Query.prototype.params = function params(request, callback) {
                    return this.rpcCall(
                        params,
                        cosmos.bank.v1beta1.QueryParamsRequest,
                        cosmos.bank.v1beta1.QueryParamsResponse,
                        request,
                        callback
                    );
                }),
                "name",
                { value: "Params" }
            );

            /**
             * Calls Params.
             * @function params
             * @memberof cosmos.bank.v1beta1.Query
             * @instance
             * @param {cosmos.bank.v1beta1.IQueryParamsRequest} request QueryParamsRequest message or plain object
             * @returns {Promise<cosmos.bank.v1beta1.QueryParamsResponse>} Promise
             * @variation 2
             */

            /**
             * Callback as used by {@link cosmos.bank.v1beta1.Query#denomMetadata}.
             * @memberof cosmos.bank.v1beta1.Query
             * @typedef DenomMetadataCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {cosmos.bank.v1beta1.QueryDenomMetadataResponse} [response] QueryDenomMetadataResponse
             */

            /**
             * Calls DenomMetadata.
             * @function denomMetadata
             * @memberof cosmos.bank.v1beta1.Query
             * @instance
             * @param {cosmos.bank.v1beta1.IQueryDenomMetadataRequest} request QueryDenomMetadataRequest message or plain object
             * @param {cosmos.bank.v1beta1.Query.DenomMetadataCallback} callback Node-style callback called with the error, if any, and QueryDenomMetadataResponse
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(
                (Query.prototype.denomMetadata = function denomMetadata(
                    request,
                    callback
                ) {
                    return this.rpcCall(
                        denomMetadata,
                        cosmos.bank.v1beta1.QueryDenomMetadataRequest,
                        cosmos.bank.v1beta1.QueryDenomMetadataResponse,
                        request,
                        callback
                    );
                }),
                "name",
                { value: "DenomMetadata" }
            );

            /**
             * Calls DenomMetadata.
             * @function denomMetadata
             * @memberof cosmos.bank.v1beta1.Query
             * @instance
             * @param {cosmos.bank.v1beta1.IQueryDenomMetadataRequest} request QueryDenomMetadataRequest message or plain object
             * @returns {Promise<cosmos.bank.v1beta1.QueryDenomMetadataResponse>} Promise
             * @variation 2
             */

            /**
             * Callback as used by {@link cosmos.bank.v1beta1.Query#denomsMetadata}.
             * @memberof cosmos.bank.v1beta1.Query
             * @typedef DenomsMetadataCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {cosmos.bank.v1beta1.QueryDenomsMetadataResponse} [response] QueryDenomsMetadataResponse
             */

            /**
             * Calls DenomsMetadata.
             * @function denomsMetadata
             * @memberof cosmos.bank.v1beta1.Query
             * @instance
             * @param {cosmos.bank.v1beta1.IQueryDenomsMetadataRequest} request QueryDenomsMetadataRequest message or plain object
             * @param {cosmos.bank.v1beta1.Query.DenomsMetadataCallback} callback Node-style callback called with the error, if any, and QueryDenomsMetadataResponse
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(
                (Query.prototype.denomsMetadata = function denomsMetadata(
                    request,
                    callback
                ) {
                    return this.rpcCall(
                        denomsMetadata,
                        cosmos.bank.v1beta1.QueryDenomsMetadataRequest,
                        cosmos.bank.v1beta1.QueryDenomsMetadataResponse,
                        request,
                        callback
                    );
                }),
                "name",
                { value: "DenomsMetadata" }
            );

            /**
             * Calls DenomsMetadata.
             * @function denomsMetadata
             * @memberof cosmos.bank.v1beta1.Query
             * @instance
             * @param {cosmos.bank.v1beta1.IQueryDenomsMetadataRequest} request QueryDenomsMetadataRequest message or plain object
             * @returns {Promise<cosmos.bank.v1beta1.QueryDenomsMetadataResponse>} Promise
             * @variation 2
             */

            return Query;
        })();

        v1beta1.QueryBalanceRequest = (function () {
            /**
             * Properties of a QueryBalanceRequest.
             * @memberof cosmos.bank.v1beta1
             * @interface IQueryBalanceRequest
             * @property {string|null} [address] QueryBalanceRequest address
             * @property {string|null} [denom] QueryBalanceRequest denom
             */

            /**
             * Constructs a new QueryBalanceRequest.
             * @memberof cosmos.bank.v1beta1
             * @classdesc Represents a QueryBalanceRequest.
             * @implements IQueryBalanceRequest
             * @constructor
             * @param {cosmos.bank.v1beta1.IQueryBalanceRequest=} [properties] Properties to set
             */
            function QueryBalanceRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * QueryBalanceRequest address.
             * @member {string} address
             * @memberof cosmos.bank.v1beta1.QueryBalanceRequest
             * @instance
             */
            QueryBalanceRequest.prototype.address = "";

            /**
             * QueryBalanceRequest denom.
             * @member {string} denom
             * @memberof cosmos.bank.v1beta1.QueryBalanceRequest
             * @instance
             */
            QueryBalanceRequest.prototype.denom = "";

            /**
             * Encodes the specified QueryBalanceRequest message. Does not implicitly {@link cosmos.bank.v1beta1.QueryBalanceRequest.verify|verify} messages.
             * @function encode
             * @memberof cosmos.bank.v1beta1.QueryBalanceRequest
             * @static
             * @param {cosmos.bank.v1beta1.IQueryBalanceRequest} message QueryBalanceRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            QueryBalanceRequest.encode = function encode(message, writer) {
                if (!writer) writer = $Writer.create();
                if (
                    message.address != null &&
                    Object.hasOwnProperty.call(message, "address")
                )
                    writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.address);
                if (
                    message.denom != null &&
                    Object.hasOwnProperty.call(message, "denom")
                )
                    writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.denom);
                return writer;
            };

            /**
             * Encodes the specified QueryBalanceRequest message, length delimited. Does not implicitly {@link cosmos.bank.v1beta1.QueryBalanceRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cosmos.bank.v1beta1.QueryBalanceRequest
             * @static
             * @param {cosmos.bank.v1beta1.IQueryBalanceRequest} message QueryBalanceRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            QueryBalanceRequest.encodeDelimited = function encodeDelimited(
                message,
                writer
            ) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a QueryBalanceRequest message from the specified reader or buffer.
             * @function decode
             * @memberof cosmos.bank.v1beta1.QueryBalanceRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cosmos.bank.v1beta1.QueryBalanceRequest} QueryBalanceRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            QueryBalanceRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new cosmos.bank.v1beta1.QueryBalanceRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.address = reader.string();
                            break;
                        case 2:
                            message.denom = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };

            /**
             * Decodes a QueryBalanceRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cosmos.bank.v1beta1.QueryBalanceRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cosmos.bank.v1beta1.QueryBalanceRequest} QueryBalanceRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            QueryBalanceRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader)) reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a QueryBalanceRequest message.
             * @function verify
             * @memberof cosmos.bank.v1beta1.QueryBalanceRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            QueryBalanceRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.address != null && message.hasOwnProperty("address"))
                    if (!$util.isString(message.address))
                        return "address: string expected";
                if (message.denom != null && message.hasOwnProperty("denom"))
                    if (!$util.isString(message.denom)) return "denom: string expected";
                return null;
            };

            /**
             * Creates a QueryBalanceRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cosmos.bank.v1beta1.QueryBalanceRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cosmos.bank.v1beta1.QueryBalanceRequest} QueryBalanceRequest
             */
            QueryBalanceRequest.fromObject = function fromObject(object) {
                if (object instanceof cosmos.bank.v1beta1.QueryBalanceRequest)
                    return object;
                var message = new cosmos.bank.v1beta1.QueryBalanceRequest();
                if (object.address != null) message.address = String(object.address);
                if (object.denom != null) message.denom = String(object.denom);
                return message;
            };

            /**
             * Creates a plain object from a QueryBalanceRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cosmos.bank.v1beta1.QueryBalanceRequest
             * @static
             * @param {cosmos.bank.v1beta1.QueryBalanceRequest} message QueryBalanceRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            QueryBalanceRequest.toObject = function toObject(message, options) {
                if (!options) options = {};
                var object = {};
                if (options.defaults) {
                    object.address = "";
                    object.denom = "";
                }
                if (message.address != null && message.hasOwnProperty("address"))
                    object.address = message.address;
                if (message.denom != null && message.hasOwnProperty("denom"))
                    object.denom = message.denom;
                return object;
            };

            /**
             * Converts this QueryBalanceRequest to JSON.
             * @function toJSON
             * @memberof cosmos.bank.v1beta1.QueryBalanceRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            QueryBalanceRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return QueryBalanceRequest;
        })();

        v1beta1.QueryBalanceResponse = (function () {
            /**
             * Properties of a QueryBalanceResponse.
             * @memberof cosmos.bank.v1beta1
             * @interface IQueryBalanceResponse
             * @property {cosmos.base.v1beta1.ICoin|null} [balance] QueryBalanceResponse balance
             */

            /**
             * Constructs a new QueryBalanceResponse.
             * @memberof cosmos.bank.v1beta1
             * @classdesc Represents a QueryBalanceResponse.
             * @implements IQueryBalanceResponse
             * @constructor
             * @param {cosmos.bank.v1beta1.IQueryBalanceResponse=} [properties] Properties to set
             */
            function QueryBalanceResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * QueryBalanceResponse balance.
             * @member {cosmos.base.v1beta1.ICoin|null|undefined} balance
             * @memberof cosmos.bank.v1beta1.QueryBalanceResponse
             * @instance
             */
            QueryBalanceResponse.prototype.balance = null;

            /**
             * Encodes the specified QueryBalanceResponse message. Does not implicitly {@link cosmos.bank.v1beta1.QueryBalanceResponse.verify|verify} messages.
             * @function encode
             * @memberof cosmos.bank.v1beta1.QueryBalanceResponse
             * @static
             * @param {cosmos.bank.v1beta1.IQueryBalanceResponse} message QueryBalanceResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            QueryBalanceResponse.encode = function encode(message, writer) {
                if (!writer) writer = $Writer.create();
                if (
                    message.balance != null &&
                    Object.hasOwnProperty.call(message, "balance")
                )
                    cosmos.base.v1beta1.Coin.encode(
                        message.balance,
                        writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
                    ).ldelim();
                return writer;
            };

            /**
             * Encodes the specified QueryBalanceResponse message, length delimited. Does not implicitly {@link cosmos.bank.v1beta1.QueryBalanceResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cosmos.bank.v1beta1.QueryBalanceResponse
             * @static
             * @param {cosmos.bank.v1beta1.IQueryBalanceResponse} message QueryBalanceResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            QueryBalanceResponse.encodeDelimited = function encodeDelimited(
                message,
                writer
            ) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a QueryBalanceResponse message from the specified reader or buffer.
             * @function decode
             * @memberof cosmos.bank.v1beta1.QueryBalanceResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cosmos.bank.v1beta1.QueryBalanceResponse} QueryBalanceResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            QueryBalanceResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new cosmos.bank.v1beta1.QueryBalanceResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.balance = cosmos.base.v1beta1.Coin.decode(
                                reader,
                                reader.uint32()
                            );
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };

            /**
             * Decodes a QueryBalanceResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cosmos.bank.v1beta1.QueryBalanceResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cosmos.bank.v1beta1.QueryBalanceResponse} QueryBalanceResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            QueryBalanceResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader)) reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a QueryBalanceResponse message.
             * @function verify
             * @memberof cosmos.bank.v1beta1.QueryBalanceResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            QueryBalanceResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.balance != null && message.hasOwnProperty("balance")) {
                    var error = cosmos.base.v1beta1.Coin.verify(message.balance);
                    if (error) return "balance." + error;
                }
                return null;
            };

            /**
             * Creates a QueryBalanceResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cosmos.bank.v1beta1.QueryBalanceResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cosmos.bank.v1beta1.QueryBalanceResponse} QueryBalanceResponse
             */
            QueryBalanceResponse.fromObject = function fromObject(object) {
                if (object instanceof cosmos.bank.v1beta1.QueryBalanceResponse)
                    return object;
                var message = new cosmos.bank.v1beta1.QueryBalanceResponse();
                if (object.balance != null) {
                    if (typeof object.balance !== "object")
                        throw TypeError(
                            ".cosmos.bank.v1beta1.QueryBalanceResponse.balance: object expected"
                        );
                    message.balance = cosmos.base.v1beta1.Coin.fromObject(
                        object.balance
                    );
                }
                return message;
            };

            /**
             * Creates a plain object from a QueryBalanceResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cosmos.bank.v1beta1.QueryBalanceResponse
             * @static
             * @param {cosmos.bank.v1beta1.QueryBalanceResponse} message QueryBalanceResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            QueryBalanceResponse.toObject = function toObject(message, options) {
                if (!options) options = {};
                var object = {};
                if (options.defaults) object.balance = null;
                if (message.balance != null && message.hasOwnProperty("balance"))
                    object.balance = cosmos.base.v1beta1.Coin.toObject(
                        message.balance,
                        options
                    );
                return object;
            };

            /**
             * Converts this QueryBalanceResponse to JSON.
             * @function toJSON
             * @memberof cosmos.bank.v1beta1.QueryBalanceResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            QueryBalanceResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return QueryBalanceResponse;
        })();

        v1beta1.QueryAllBalancesRequest = (function () {
            /**
             * Properties of a QueryAllBalancesRequest.
             * @memberof cosmos.bank.v1beta1
             * @interface IQueryAllBalancesRequest
             * @property {string|null} [address] QueryAllBalancesRequest address
             * @property {cosmos.base.query.v1beta1.IPageRequest|null} [pagination] QueryAllBalancesRequest pagination
             */

            /**
             * Constructs a new QueryAllBalancesRequest.
             * @memberof cosmos.bank.v1beta1
             * @classdesc Represents a QueryAllBalancesRequest.
             * @implements IQueryAllBalancesRequest
             * @constructor
             * @param {cosmos.bank.v1beta1.IQueryAllBalancesRequest=} [properties] Properties to set
             */
            function QueryAllBalancesRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * QueryAllBalancesRequest address.
             * @member {string} address
             * @memberof cosmos.bank.v1beta1.QueryAllBalancesRequest
             * @instance
             */
            QueryAllBalancesRequest.prototype.address = "";

            /**
             * QueryAllBalancesRequest pagination.
             * @member {cosmos.base.query.v1beta1.IPageRequest|null|undefined} pagination
             * @memberof cosmos.bank.v1beta1.QueryAllBalancesRequest
             * @instance
             */
            QueryAllBalancesRequest.prototype.pagination = null;

            /**
             * Encodes the specified QueryAllBalancesRequest message. Does not implicitly {@link cosmos.bank.v1beta1.QueryAllBalancesRequest.verify|verify} messages.
             * @function encode
             * @memberof cosmos.bank.v1beta1.QueryAllBalancesRequest
             * @static
             * @param {cosmos.bank.v1beta1.IQueryAllBalancesRequest} message QueryAllBalancesRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            QueryAllBalancesRequest.encode = function encode(message, writer) {
                if (!writer) writer = $Writer.create();
                if (
                    message.address != null &&
                    Object.hasOwnProperty.call(message, "address")
                )
                    writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.address);
                if (
                    message.pagination != null &&
                    Object.hasOwnProperty.call(message, "pagination")
                )
                    cosmos.base.query.v1beta1.PageRequest.encode(
                        message.pagination,
                        writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
                    ).ldelim();
                return writer;
            };

            /**
             * Encodes the specified QueryAllBalancesRequest message, length delimited. Does not implicitly {@link cosmos.bank.v1beta1.QueryAllBalancesRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cosmos.bank.v1beta1.QueryAllBalancesRequest
             * @static
             * @param {cosmos.bank.v1beta1.IQueryAllBalancesRequest} message QueryAllBalancesRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            QueryAllBalancesRequest.encodeDelimited = function encodeDelimited(
                message,
                writer
            ) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a QueryAllBalancesRequest message from the specified reader or buffer.
             * @function decode
             * @memberof cosmos.bank.v1beta1.QueryAllBalancesRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cosmos.bank.v1beta1.QueryAllBalancesRequest} QueryAllBalancesRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            QueryAllBalancesRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new cosmos.bank.v1beta1.QueryAllBalancesRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.address = reader.string();
                            break;
                        case 2:
                            message.pagination =
                                cosmos.base.query.v1beta1.PageRequest.decode(
                                    reader,
                                    reader.uint32()
                                );
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };

            /**
             * Decodes a QueryAllBalancesRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cosmos.bank.v1beta1.QueryAllBalancesRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cosmos.bank.v1beta1.QueryAllBalancesRequest} QueryAllBalancesRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            QueryAllBalancesRequest.decodeDelimited = function decodeDelimited(
                reader
            ) {
                if (!(reader instanceof $Reader)) reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a QueryAllBalancesRequest message.
             * @function verify
             * @memberof cosmos.bank.v1beta1.QueryAllBalancesRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            QueryAllBalancesRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.address != null && message.hasOwnProperty("address"))
                    if (!$util.isString(message.address))
                        return "address: string expected";
                if (
                    message.pagination != null &&
                    message.hasOwnProperty("pagination")
                ) {
                    var error = cosmos.base.query.v1beta1.PageRequest.verify(
                        message.pagination
                    );
                    if (error) return "pagination." + error;
                }
                return null;
            };

            /**
             * Creates a QueryAllBalancesRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cosmos.bank.v1beta1.QueryAllBalancesRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cosmos.bank.v1beta1.QueryAllBalancesRequest} QueryAllBalancesRequest
             */
            QueryAllBalancesRequest.fromObject = function fromObject(object) {
                if (object instanceof cosmos.bank.v1beta1.QueryAllBalancesRequest)
                    return object;
                var message = new cosmos.bank.v1beta1.QueryAllBalancesRequest();
                if (object.address != null) message.address = String(object.address);
                if (object.pagination != null) {
                    if (typeof object.pagination !== "object")
                        throw TypeError(
                            ".cosmos.bank.v1beta1.QueryAllBalancesRequest.pagination: object expected"
                        );
                    message.pagination =
                        cosmos.base.query.v1beta1.PageRequest.fromObject(
                            object.pagination
                        );
                }
                return message;
            };

            /**
             * Creates a plain object from a QueryAllBalancesRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cosmos.bank.v1beta1.QueryAllBalancesRequest
             * @static
             * @param {cosmos.bank.v1beta1.QueryAllBalancesRequest} message QueryAllBalancesRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            QueryAllBalancesRequest.toObject = function toObject(message, options) {
                if (!options) options = {};
                var object = {};
                if (options.defaults) {
                    object.address = "";
                    object.pagination = null;
                }
                if (message.address != null && message.hasOwnProperty("address"))
                    object.address = message.address;
                if (message.pagination != null && message.hasOwnProperty("pagination"))
                    object.pagination =
                        cosmos.base.query.v1beta1.PageRequest.toObject(
                            message.pagination,
                            options
                        );
                return object;
            };

            /**
             * Converts this QueryAllBalancesRequest to JSON.
             * @function toJSON
             * @memberof cosmos.bank.v1beta1.QueryAllBalancesRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            QueryAllBalancesRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return QueryAllBalancesRequest;
        })();

        v1beta1.QueryAllBalancesResponse = (function () {
            /**
             * Properties of a QueryAllBalancesResponse.
             * @memberof cosmos.bank.v1beta1
             * @interface IQueryAllBalancesResponse
             * @property {Array.<cosmos.base.v1beta1.ICoin>|null} [balances] QueryAllBalancesResponse balances
             * @property {cosmos.base.query.v1beta1.IPageResponse|null} [pagination] QueryAllBalancesResponse pagination
             */

            /**
             * Constructs a new QueryAllBalancesResponse.
             * @memberof cosmos.bank.v1beta1
             * @classdesc Represents a QueryAllBalancesResponse.
             * @implements IQueryAllBalancesResponse
             * @constructor
             * @param {cosmos.bank.v1beta1.IQueryAllBalancesResponse=} [properties] Properties to set
             */
            function QueryAllBalancesResponse(properties) {
                this.balances = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * QueryAllBalancesResponse balances.
             * @member {Array.<cosmos.base.v1beta1.ICoin>} balances
             * @memberof cosmos.bank.v1beta1.QueryAllBalancesResponse
             * @instance
             */
            QueryAllBalancesResponse.prototype.balances = $util.emptyArray;

            /**
             * QueryAllBalancesResponse pagination.
             * @member {cosmos.base.query.v1beta1.IPageResponse|null|undefined} pagination
             * @memberof cosmos.bank.v1beta1.QueryAllBalancesResponse
             * @instance
             */
            QueryAllBalancesResponse.prototype.pagination = null;

            /**
             * Encodes the specified QueryAllBalancesResponse message. Does not implicitly {@link cosmos.bank.v1beta1.QueryAllBalancesResponse.verify|verify} messages.
             * @function encode
             * @memberof cosmos.bank.v1beta1.QueryAllBalancesResponse
             * @static
             * @param {cosmos.bank.v1beta1.IQueryAllBalancesResponse} message QueryAllBalancesResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            QueryAllBalancesResponse.encode = function encode(message, writer) {
                if (!writer) writer = $Writer.create();
                if (message.balances != null && message.balances.length)
                    for (var i = 0; i < message.balances.length; ++i)
                        cosmos.base.v1beta1.Coin.encode(
                            message.balances[i],
                            writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
                        ).ldelim();
                if (
                    message.pagination != null &&
                    Object.hasOwnProperty.call(message, "pagination")
                )
                    cosmos.base.query.v1beta1.PageResponse.encode(
                        message.pagination,
                        writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
                    ).ldelim();
                return writer;
            };

            /**
             * Encodes the specified QueryAllBalancesResponse message, length delimited. Does not implicitly {@link cosmos.bank.v1beta1.QueryAllBalancesResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cosmos.bank.v1beta1.QueryAllBalancesResponse
             * @static
             * @param {cosmos.bank.v1beta1.IQueryAllBalancesResponse} message QueryAllBalancesResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            QueryAllBalancesResponse.encodeDelimited = function encodeDelimited(
                message,
                writer
            ) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a QueryAllBalancesResponse message from the specified reader or buffer.
             * @function decode
             * @memberof cosmos.bank.v1beta1.QueryAllBalancesResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cosmos.bank.v1beta1.QueryAllBalancesResponse} QueryAllBalancesResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            QueryAllBalancesResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new cosmos.bank.v1beta1.QueryAllBalancesResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            if (!(message.balances && message.balances.length))
                                message.balances = [];
                            message.balances.push(
                                cosmos.base.v1beta1.Coin.decode(reader, reader.uint32())
                            );
                            break;
                        case 2:
                            message.pagination =
                                cosmos.base.query.v1beta1.PageResponse.decode(
                                    reader,
                                    reader.uint32()
                                );
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };

            /**
             * Decodes a QueryAllBalancesResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cosmos.bank.v1beta1.QueryAllBalancesResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cosmos.bank.v1beta1.QueryAllBalancesResponse} QueryAllBalancesResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            QueryAllBalancesResponse.decodeDelimited = function decodeDelimited(
                reader
            ) {
                if (!(reader instanceof $Reader)) reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a QueryAllBalancesResponse message.
             * @function verify
             * @memberof cosmos.bank.v1beta1.QueryAllBalancesResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            QueryAllBalancesResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.balances != null && message.hasOwnProperty("balances")) {
                    if (!Array.isArray(message.balances))
                        return "balances: array expected";
                    for (var i = 0; i < message.balances.length; ++i) {
                        var error = cosmos.base.v1beta1.Coin.verify(
                            message.balances[i]
                        );
                        if (error) return "balances." + error;
                    }
                }
                if (
                    message.pagination != null &&
                    message.hasOwnProperty("pagination")
                ) {
                    var error = cosmos.base.query.v1beta1.PageResponse.verify(
                        message.pagination
                    );
                    if (error) return "pagination." + error;
                }
                return null;
            };

            /**
             * Creates a QueryAllBalancesResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cosmos.bank.v1beta1.QueryAllBalancesResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cosmos.bank.v1beta1.QueryAllBalancesResponse} QueryAllBalancesResponse
             */
            QueryAllBalancesResponse.fromObject = function fromObject(object) {
                if (
                    object instanceof cosmos.bank.v1beta1.QueryAllBalancesResponse
                )
                    return object;
                var message = new cosmos.bank.v1beta1.QueryAllBalancesResponse();
                if (object.balances) {
                    if (!Array.isArray(object.balances))
                        throw TypeError(
                            ".cosmos.bank.v1beta1.QueryAllBalancesResponse.balances: array expected"
                        );
                    message.balances = [];
                    for (var i = 0; i < object.balances.length; ++i) {
                        if (typeof object.balances[i] !== "object")
                            throw TypeError(
                                ".cosmos.bank.v1beta1.QueryAllBalancesResponse.balances: object expected"
                            );
                        message.balances[i] = cosmos.base.v1beta1.Coin.fromObject(
                            object.balances[i]
                        );
                    }
                }
                if (object.pagination != null) {
                    if (typeof object.pagination !== "object")
                        throw TypeError(
                            ".cosmos.bank.v1beta1.QueryAllBalancesResponse.pagination: object expected"
                        );
                    message.pagination =
                        cosmos.base.query.v1beta1.PageResponse.fromObject(
                            object.pagination
                        );
                }
                return message;
            };

            /**
             * Creates a plain object from a QueryAllBalancesResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cosmos.bank.v1beta1.QueryAllBalancesResponse
             * @static
             * @param {cosmos.bank.v1beta1.QueryAllBalancesResponse} message QueryAllBalancesResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            QueryAllBalancesResponse.toObject = function toObject(message, options) {
                if (!options) options = {};
                var object = {};
                if (options.arrays || options.defaults) object.balances = [];
                if (options.defaults) object.pagination = null;
                if (message.balances && message.balances.length) {
                    object.balances = [];
                    for (var j = 0; j < message.balances.length; ++j)
                        object.balances[j] = cosmos.base.v1beta1.Coin.toObject(
                            message.balances[j],
                            options
                        );
                }
                if (message.pagination != null && message.hasOwnProperty("pagination"))
                    object.pagination =
                        cosmos.base.query.v1beta1.PageResponse.toObject(
                            message.pagination,
                            options
                        );
                return object;
            };

            /**
             * Converts this QueryAllBalancesResponse to JSON.
             * @function toJSON
             * @memberof cosmos.bank.v1beta1.QueryAllBalancesResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            QueryAllBalancesResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return QueryAllBalancesResponse;
        })();

        v1beta1.QueryTotalSupplyRequest = (function () {
            /**
             * Properties of a QueryTotalSupplyRequest.
             * @memberof cosmos.bank.v1beta1
             * @interface IQueryTotalSupplyRequest
             * @property {cosmos.base.query.v1beta1.IPageRequest|null} [pagination] QueryTotalSupplyRequest pagination
             */

            /**
             * Constructs a new QueryTotalSupplyRequest.
             * @memberof cosmos.bank.v1beta1
             * @classdesc Represents a QueryTotalSupplyRequest.
             * @implements IQueryTotalSupplyRequest
             * @constructor
             * @param {cosmos.bank.v1beta1.IQueryTotalSupplyRequest=} [properties] Properties to set
             */
            function QueryTotalSupplyRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * QueryTotalSupplyRequest pagination.
             * @member {cosmos.base.query.v1beta1.IPageRequest|null|undefined} pagination
             * @memberof cosmos.bank.v1beta1.QueryTotalSupplyRequest
             * @instance
             */
            QueryTotalSupplyRequest.prototype.pagination = null;

            /**
             * Encodes the specified QueryTotalSupplyRequest message. Does not implicitly {@link cosmos.bank.v1beta1.QueryTotalSupplyRequest.verify|verify} messages.
             * @function encode
             * @memberof cosmos.bank.v1beta1.QueryTotalSupplyRequest
             * @static
             * @param {cosmos.bank.v1beta1.IQueryTotalSupplyRequest} message QueryTotalSupplyRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            QueryTotalSupplyRequest.encode = function encode(message, writer) {
                if (!writer) writer = $Writer.create();
                if (
                    message.pagination != null &&
                    Object.hasOwnProperty.call(message, "pagination")
                )
                    cosmos.base.query.v1beta1.PageRequest.encode(
                        message.pagination,
                        writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
                    ).ldelim();
                return writer;
            };

            /**
             * Encodes the specified QueryTotalSupplyRequest message, length delimited. Does not implicitly {@link cosmos.bank.v1beta1.QueryTotalSupplyRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cosmos.bank.v1beta1.QueryTotalSupplyRequest
             * @static
             * @param {cosmos.bank.v1beta1.IQueryTotalSupplyRequest} message QueryTotalSupplyRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            QueryTotalSupplyRequest.encodeDelimited = function encodeDelimited(
                message,
                writer
            ) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a QueryTotalSupplyRequest message from the specified reader or buffer.
             * @function decode
             * @memberof cosmos.bank.v1beta1.QueryTotalSupplyRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cosmos.bank.v1beta1.QueryTotalSupplyRequest} QueryTotalSupplyRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            QueryTotalSupplyRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new cosmos.bank.v1beta1.QueryTotalSupplyRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.pagination =
                                cosmos.base.query.v1beta1.PageRequest.decode(
                                    reader,
                                    reader.uint32()
                                );
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };

            /**
             * Decodes a QueryTotalSupplyRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cosmos.bank.v1beta1.QueryTotalSupplyRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cosmos.bank.v1beta1.QueryTotalSupplyRequest} QueryTotalSupplyRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            QueryTotalSupplyRequest.decodeDelimited = function decodeDelimited(
                reader
            ) {
                if (!(reader instanceof $Reader)) reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a QueryTotalSupplyRequest message.
             * @function verify
             * @memberof cosmos.bank.v1beta1.QueryTotalSupplyRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            QueryTotalSupplyRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (
                    message.pagination != null &&
                    message.hasOwnProperty("pagination")
                ) {
                    var error = cosmos.base.query.v1beta1.PageRequest.verify(
                        message.pagination
                    );
                    if (error) return "pagination." + error;
                }
                return null;
            };

            /**
             * Creates a QueryTotalSupplyRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cosmos.bank.v1beta1.QueryTotalSupplyRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cosmos.bank.v1beta1.QueryTotalSupplyRequest} QueryTotalSupplyRequest
             */
            QueryTotalSupplyRequest.fromObject = function fromObject(object) {
                if (object instanceof cosmos.bank.v1beta1.QueryTotalSupplyRequest)
                    return object;
                var message = new cosmos.bank.v1beta1.QueryTotalSupplyRequest();
                if (object.pagination != null) {
                    if (typeof object.pagination !== "object")
                        throw TypeError(
                            ".cosmos.bank.v1beta1.QueryTotalSupplyRequest.pagination: object expected"
                        );
                    message.pagination =
                        cosmos.base.query.v1beta1.PageRequest.fromObject(
                            object.pagination
                        );
                }
                return message;
            };

            /**
             * Creates a plain object from a QueryTotalSupplyRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cosmos.bank.v1beta1.QueryTotalSupplyRequest
             * @static
             * @param {cosmos.bank.v1beta1.QueryTotalSupplyRequest} message QueryTotalSupplyRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            QueryTotalSupplyRequest.toObject = function toObject(message, options) {
                if (!options) options = {};
                var object = {};
                if (options.defaults) object.pagination = null;
                if (message.pagination != null && message.hasOwnProperty("pagination"))
                    object.pagination =
                        cosmos.base.query.v1beta1.PageRequest.toObject(
                            message.pagination,
                            options
                        );
                return object;
            };

            /**
             * Converts this QueryTotalSupplyRequest to JSON.
             * @function toJSON
             * @memberof cosmos.bank.v1beta1.QueryTotalSupplyRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            QueryTotalSupplyRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return QueryTotalSupplyRequest;
        })();

        v1beta1.QueryTotalSupplyResponse = (function () {
            /**
             * Properties of a QueryTotalSupplyResponse.
             * @memberof cosmos.bank.v1beta1
             * @interface IQueryTotalSupplyResponse
             * @property {Array.<cosmos.base.v1beta1.ICoin>|null} [supply] QueryTotalSupplyResponse supply
             * @property {cosmos.base.query.v1beta1.IPageResponse|null} [pagination] QueryTotalSupplyResponse pagination
             */

            /**
             * Constructs a new QueryTotalSupplyResponse.
             * @memberof cosmos.bank.v1beta1
             * @classdesc Represents a QueryTotalSupplyResponse.
             * @implements IQueryTotalSupplyResponse
             * @constructor
             * @param {cosmos.bank.v1beta1.IQueryTotalSupplyResponse=} [properties] Properties to set
             */
            function QueryTotalSupplyResponse(properties) {
                this.supply = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * QueryTotalSupplyResponse supply.
             * @member {Array.<cosmos.base.v1beta1.ICoin>} supply
             * @memberof cosmos.bank.v1beta1.QueryTotalSupplyResponse
             * @instance
             */
            QueryTotalSupplyResponse.prototype.supply = $util.emptyArray;

            /**
             * QueryTotalSupplyResponse pagination.
             * @member {cosmos.base.query.v1beta1.IPageResponse|null|undefined} pagination
             * @memberof cosmos.bank.v1beta1.QueryTotalSupplyResponse
             * @instance
             */
            QueryTotalSupplyResponse.prototype.pagination = null;

            /**
             * Encodes the specified QueryTotalSupplyResponse message. Does not implicitly {@link cosmos.bank.v1beta1.QueryTotalSupplyResponse.verify|verify} messages.
             * @function encode
             * @memberof cosmos.bank.v1beta1.QueryTotalSupplyResponse
             * @static
             * @param {cosmos.bank.v1beta1.IQueryTotalSupplyResponse} message QueryTotalSupplyResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            QueryTotalSupplyResponse.encode = function encode(message, writer) {
                if (!writer) writer = $Writer.create();
                if (message.supply != null && message.supply.length)
                    for (var i = 0; i < message.supply.length; ++i)
                        cosmos.base.v1beta1.Coin.encode(
                            message.supply[i],
                            writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
                        ).ldelim();
                if (
                    message.pagination != null &&
                    Object.hasOwnProperty.call(message, "pagination")
                )
                    cosmos.base.query.v1beta1.PageResponse.encode(
                        message.pagination,
                        writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
                    ).ldelim();
                return writer;
            };

            /**
             * Encodes the specified QueryTotalSupplyResponse message, length delimited. Does not implicitly {@link cosmos.bank.v1beta1.QueryTotalSupplyResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cosmos.bank.v1beta1.QueryTotalSupplyResponse
             * @static
             * @param {cosmos.bank.v1beta1.IQueryTotalSupplyResponse} message QueryTotalSupplyResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            QueryTotalSupplyResponse.encodeDelimited = function encodeDelimited(
                message,
                writer
            ) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a QueryTotalSupplyResponse message from the specified reader or buffer.
             * @function decode
             * @memberof cosmos.bank.v1beta1.QueryTotalSupplyResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cosmos.bank.v1beta1.QueryTotalSupplyResponse} QueryTotalSupplyResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            QueryTotalSupplyResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new cosmos.bank.v1beta1.QueryTotalSupplyResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            if (!(message.supply && message.supply.length))
                                message.supply = [];
                            message.supply.push(
                                cosmos.base.v1beta1.Coin.decode(reader, reader.uint32())
                            );
                            break;
                        case 2:
                            message.pagination =
                                cosmos.base.query.v1beta1.PageResponse.decode(
                                    reader,
                                    reader.uint32()
                                );
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };

            /**
             * Decodes a QueryTotalSupplyResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cosmos.bank.v1beta1.QueryTotalSupplyResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cosmos.bank.v1beta1.QueryTotalSupplyResponse} QueryTotalSupplyResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            QueryTotalSupplyResponse.decodeDelimited = function decodeDelimited(
                reader
            ) {
                if (!(reader instanceof $Reader)) reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a QueryTotalSupplyResponse message.
             * @function verify
             * @memberof cosmos.bank.v1beta1.QueryTotalSupplyResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            QueryTotalSupplyResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.supply != null && message.hasOwnProperty("supply")) {
                    if (!Array.isArray(message.supply)) return "supply: array expected";
                    for (var i = 0; i < message.supply.length; ++i) {
                        var error = cosmos.base.v1beta1.Coin.verify(
                            message.supply[i]
                        );
                        if (error) return "supply." + error;
                    }
                }
                if (
                    message.pagination != null &&
                    message.hasOwnProperty("pagination")
                ) {
                    var error = cosmos.base.query.v1beta1.PageResponse.verify(
                        message.pagination
                    );
                    if (error) return "pagination." + error;
                }
                return null;
            };

            /**
             * Creates a QueryTotalSupplyResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cosmos.bank.v1beta1.QueryTotalSupplyResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cosmos.bank.v1beta1.QueryTotalSupplyResponse} QueryTotalSupplyResponse
             */
            QueryTotalSupplyResponse.fromObject = function fromObject(object) {
                if (
                    object instanceof cosmos.bank.v1beta1.QueryTotalSupplyResponse
                )
                    return object;
                var message = new cosmos.bank.v1beta1.QueryTotalSupplyResponse();
                if (object.supply) {
                    if (!Array.isArray(object.supply))
                        throw TypeError(
                            ".cosmos.bank.v1beta1.QueryTotalSupplyResponse.supply: array expected"
                        );
                    message.supply = [];
                    for (var i = 0; i < object.supply.length; ++i) {
                        if (typeof object.supply[i] !== "object")
                            throw TypeError(
                                ".cosmos.bank.v1beta1.QueryTotalSupplyResponse.supply: object expected"
                            );
                        message.supply[i] = cosmos.base.v1beta1.Coin.fromObject(
                            object.supply[i]
                        );
                    }
                }
                if (object.pagination != null) {
                    if (typeof object.pagination !== "object")
                        throw TypeError(
                            ".cosmos.bank.v1beta1.QueryTotalSupplyResponse.pagination: object expected"
                        );
                    message.pagination =
                        cosmos.base.query.v1beta1.PageResponse.fromObject(
                            object.pagination
                        );
                }
                return message;
            };

            /**
             * Creates a plain object from a QueryTotalSupplyResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cosmos.bank.v1beta1.QueryTotalSupplyResponse
             * @static
             * @param {cosmos.bank.v1beta1.QueryTotalSupplyResponse} message QueryTotalSupplyResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            QueryTotalSupplyResponse.toObject = function toObject(message, options) {
                if (!options) options = {};
                var object = {};
                if (options.arrays || options.defaults) object.supply = [];
                if (options.defaults) object.pagination = null;
                if (message.supply && message.supply.length) {
                    object.supply = [];
                    for (var j = 0; j < message.supply.length; ++j)
                        object.supply[j] = cosmos.base.v1beta1.Coin.toObject(
                            message.supply[j],
                            options
                        );
                }
                if (message.pagination != null && message.hasOwnProperty("pagination"))
                    object.pagination =
                        cosmos.base.query.v1beta1.PageResponse.toObject(
                            message.pagination,
                            options
                        );
                return object;
            };

            /**
             * Converts this QueryTotalSupplyResponse to JSON.
             * @function toJSON
             * @memberof cosmos.bank.v1beta1.QueryTotalSupplyResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            QueryTotalSupplyResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return QueryTotalSupplyResponse;
        })();

        v1beta1.QuerySupplyOfRequest = (function () {
            /**
             * Properties of a QuerySupplyOfRequest.
             * @memberof cosmos.bank.v1beta1
             * @interface IQuerySupplyOfRequest
             * @property {string|null} [denom] QuerySupplyOfRequest denom
             */

            /**
             * Constructs a new QuerySupplyOfRequest.
             * @memberof cosmos.bank.v1beta1
             * @classdesc Represents a QuerySupplyOfRequest.
             * @implements IQuerySupplyOfRequest
             * @constructor
             * @param {cosmos.bank.v1beta1.IQuerySupplyOfRequest=} [properties] Properties to set
             */
            function QuerySupplyOfRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * QuerySupplyOfRequest denom.
             * @member {string} denom
             * @memberof cosmos.bank.v1beta1.QuerySupplyOfRequest
             * @instance
             */
            QuerySupplyOfRequest.prototype.denom = "";

            /**
             * Encodes the specified QuerySupplyOfRequest message. Does not implicitly {@link cosmos.bank.v1beta1.QuerySupplyOfRequest.verify|verify} messages.
             * @function encode
             * @memberof cosmos.bank.v1beta1.QuerySupplyOfRequest
             * @static
             * @param {cosmos.bank.v1beta1.IQuerySupplyOfRequest} message QuerySupplyOfRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            QuerySupplyOfRequest.encode = function encode(message, writer) {
                if (!writer) writer = $Writer.create();
                if (
                    message.denom != null &&
                    Object.hasOwnProperty.call(message, "denom")
                )
                    writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.denom);
                return writer;
            };

            /**
             * Encodes the specified QuerySupplyOfRequest message, length delimited. Does not implicitly {@link cosmos.bank.v1beta1.QuerySupplyOfRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cosmos.bank.v1beta1.QuerySupplyOfRequest
             * @static
             * @param {cosmos.bank.v1beta1.IQuerySupplyOfRequest} message QuerySupplyOfRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            QuerySupplyOfRequest.encodeDelimited = function encodeDelimited(
                message,
                writer
            ) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a QuerySupplyOfRequest message from the specified reader or buffer.
             * @function decode
             * @memberof cosmos.bank.v1beta1.QuerySupplyOfRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cosmos.bank.v1beta1.QuerySupplyOfRequest} QuerySupplyOfRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            QuerySupplyOfRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new cosmos.bank.v1beta1.QuerySupplyOfRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.denom = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };

            /**
             * Decodes a QuerySupplyOfRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cosmos.bank.v1beta1.QuerySupplyOfRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cosmos.bank.v1beta1.QuerySupplyOfRequest} QuerySupplyOfRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            QuerySupplyOfRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader)) reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a QuerySupplyOfRequest message.
             * @function verify
             * @memberof cosmos.bank.v1beta1.QuerySupplyOfRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            QuerySupplyOfRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.denom != null && message.hasOwnProperty("denom"))
                    if (!$util.isString(message.denom)) return "denom: string expected";
                return null;
            };

            /**
             * Creates a QuerySupplyOfRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cosmos.bank.v1beta1.QuerySupplyOfRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cosmos.bank.v1beta1.QuerySupplyOfRequest} QuerySupplyOfRequest
             */
            QuerySupplyOfRequest.fromObject = function fromObject(object) {
                if (object instanceof cosmos.bank.v1beta1.QuerySupplyOfRequest)
                    return object;
                var message = new cosmos.bank.v1beta1.QuerySupplyOfRequest();
                if (object.denom != null) message.denom = String(object.denom);
                return message;
            };

            /**
             * Creates a plain object from a QuerySupplyOfRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cosmos.bank.v1beta1.QuerySupplyOfRequest
             * @static
             * @param {cosmos.bank.v1beta1.QuerySupplyOfRequest} message QuerySupplyOfRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            QuerySupplyOfRequest.toObject = function toObject(message, options) {
                if (!options) options = {};
                var object = {};
                if (options.defaults) object.denom = "";
                if (message.denom != null && message.hasOwnProperty("denom"))
                    object.denom = message.denom;
                return object;
            };

            /**
             * Converts this QuerySupplyOfRequest to JSON.
             * @function toJSON
             * @memberof cosmos.bank.v1beta1.QuerySupplyOfRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            QuerySupplyOfRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return QuerySupplyOfRequest;
        })();

        v1beta1.QuerySupplyOfResponse = (function () {
            /**
             * Properties of a QuerySupplyOfResponse.
             * @memberof cosmos.bank.v1beta1
             * @interface IQuerySupplyOfResponse
             * @property {cosmos.base.v1beta1.ICoin|null} [amount] QuerySupplyOfResponse amount
             */

            /**
             * Constructs a new QuerySupplyOfResponse.
             * @memberof cosmos.bank.v1beta1
             * @classdesc Represents a QuerySupplyOfResponse.
             * @implements IQuerySupplyOfResponse
             * @constructor
             * @param {cosmos.bank.v1beta1.IQuerySupplyOfResponse=} [properties] Properties to set
             */
            function QuerySupplyOfResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * QuerySupplyOfResponse amount.
             * @member {cosmos.base.v1beta1.ICoin|null|undefined} amount
             * @memberof cosmos.bank.v1beta1.QuerySupplyOfResponse
             * @instance
             */
            QuerySupplyOfResponse.prototype.amount = null;

            /**
             * Encodes the specified QuerySupplyOfResponse message. Does not implicitly {@link cosmos.bank.v1beta1.QuerySupplyOfResponse.verify|verify} messages.
             * @function encode
             * @memberof cosmos.bank.v1beta1.QuerySupplyOfResponse
             * @static
             * @param {cosmos.bank.v1beta1.IQuerySupplyOfResponse} message QuerySupplyOfResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            QuerySupplyOfResponse.encode = function encode(message, writer) {
                if (!writer) writer = $Writer.create();
                if (
                    message.amount != null &&
                    Object.hasOwnProperty.call(message, "amount")
                )
                    cosmos.base.v1beta1.Coin.encode(
                        message.amount,
                        writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
                    ).ldelim();
                return writer;
            };

            /**
             * Encodes the specified QuerySupplyOfResponse message, length delimited. Does not implicitly {@link cosmos.bank.v1beta1.QuerySupplyOfResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cosmos.bank.v1beta1.QuerySupplyOfResponse
             * @static
             * @param {cosmos.bank.v1beta1.IQuerySupplyOfResponse} message QuerySupplyOfResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            QuerySupplyOfResponse.encodeDelimited = function encodeDelimited(
                message,
                writer
            ) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a QuerySupplyOfResponse message from the specified reader or buffer.
             * @function decode
             * @memberof cosmos.bank.v1beta1.QuerySupplyOfResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cosmos.bank.v1beta1.QuerySupplyOfResponse} QuerySupplyOfResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            QuerySupplyOfResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new cosmos.bank.v1beta1.QuerySupplyOfResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.amount = cosmos.base.v1beta1.Coin.decode(
                                reader,
                                reader.uint32()
                            );
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };

            /**
             * Decodes a QuerySupplyOfResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cosmos.bank.v1beta1.QuerySupplyOfResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cosmos.bank.v1beta1.QuerySupplyOfResponse} QuerySupplyOfResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            QuerySupplyOfResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader)) reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a QuerySupplyOfResponse message.
             * @function verify
             * @memberof cosmos.bank.v1beta1.QuerySupplyOfResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            QuerySupplyOfResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.amount != null && message.hasOwnProperty("amount")) {
                    var error = cosmos.base.v1beta1.Coin.verify(message.amount);
                    if (error) return "amount." + error;
                }
                return null;
            };

            /**
             * Creates a QuerySupplyOfResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cosmos.bank.v1beta1.QuerySupplyOfResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cosmos.bank.v1beta1.QuerySupplyOfResponse} QuerySupplyOfResponse
             */
            QuerySupplyOfResponse.fromObject = function fromObject(object) {
                if (object instanceof cosmos.bank.v1beta1.QuerySupplyOfResponse)
                    return object;
                var message = new cosmos.bank.v1beta1.QuerySupplyOfResponse();
                if (object.amount != null) {
                    if (typeof object.amount !== "object")
                        throw TypeError(
                            ".cosmos.bank.v1beta1.QuerySupplyOfResponse.amount: object expected"
                        );
                    message.amount = cosmos.base.v1beta1.Coin.fromObject(
                        object.amount
                    );
                }
                return message;
            };

            /**
             * Creates a plain object from a QuerySupplyOfResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cosmos.bank.v1beta1.QuerySupplyOfResponse
             * @static
             * @param {cosmos.bank.v1beta1.QuerySupplyOfResponse} message QuerySupplyOfResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            QuerySupplyOfResponse.toObject = function toObject(message, options) {
                if (!options) options = {};
                var object = {};
                if (options.defaults) object.amount = null;
                if (message.amount != null && message.hasOwnProperty("amount"))
                    object.amount = cosmos.base.v1beta1.Coin.toObject(
                        message.amount,
                        options
                    );
                return object;
            };

            /**
             * Converts this QuerySupplyOfResponse to JSON.
             * @function toJSON
             * @memberof cosmos.bank.v1beta1.QuerySupplyOfResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            QuerySupplyOfResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return QuerySupplyOfResponse;
        })();

        v1beta1.QueryParamsRequest = (function () {
            /**
             * Properties of a QueryParamsRequest.
             * @memberof cosmos.bank.v1beta1
             * @interface IQueryParamsRequest
             */

            /**
             * Constructs a new QueryParamsRequest.
             * @memberof cosmos.bank.v1beta1
             * @classdesc Represents a QueryParamsRequest.
             * @implements IQueryParamsRequest
             * @constructor
             * @param {cosmos.bank.v1beta1.IQueryParamsRequest=} [properties] Properties to set
             */
            function QueryParamsRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Encodes the specified QueryParamsRequest message. Does not implicitly {@link cosmos.bank.v1beta1.QueryParamsRequest.verify|verify} messages.
             * @function encode
             * @memberof cosmos.bank.v1beta1.QueryParamsRequest
             * @static
             * @param {cosmos.bank.v1beta1.IQueryParamsRequest} message QueryParamsRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            QueryParamsRequest.encode = function encode(message, writer) {
                if (!writer) writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified QueryParamsRequest message, length delimited. Does not implicitly {@link cosmos.bank.v1beta1.QueryParamsRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cosmos.bank.v1beta1.QueryParamsRequest
             * @static
             * @param {cosmos.bank.v1beta1.IQueryParamsRequest} message QueryParamsRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            QueryParamsRequest.encodeDelimited = function encodeDelimited(
                message,
                writer
            ) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a QueryParamsRequest message from the specified reader or buffer.
             * @function decode
             * @memberof cosmos.bank.v1beta1.QueryParamsRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cosmos.bank.v1beta1.QueryParamsRequest} QueryParamsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            QueryParamsRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new cosmos.bank.v1beta1.QueryParamsRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };

            /**
             * Decodes a QueryParamsRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cosmos.bank.v1beta1.QueryParamsRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cosmos.bank.v1beta1.QueryParamsRequest} QueryParamsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            QueryParamsRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader)) reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a QueryParamsRequest message.
             * @function verify
             * @memberof cosmos.bank.v1beta1.QueryParamsRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            QueryParamsRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a QueryParamsRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cosmos.bank.v1beta1.QueryParamsRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cosmos.bank.v1beta1.QueryParamsRequest} QueryParamsRequest
             */
            QueryParamsRequest.fromObject = function fromObject(object) {
                if (object instanceof cosmos.bank.v1beta1.QueryParamsRequest)
                    return object;
                return new cosmos.bank.v1beta1.QueryParamsRequest();
            };

            /**
             * Creates a plain object from a QueryParamsRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cosmos.bank.v1beta1.QueryParamsRequest
             * @static
             * @param {cosmos.bank.v1beta1.QueryParamsRequest} message QueryParamsRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            QueryParamsRequest.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this QueryParamsRequest to JSON.
             * @function toJSON
             * @memberof cosmos.bank.v1beta1.QueryParamsRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            QueryParamsRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return QueryParamsRequest;
        })();

        v1beta1.QueryParamsResponse = (function () {
            /**
             * Properties of a QueryParamsResponse.
             * @memberof cosmos.bank.v1beta1
             * @interface IQueryParamsResponse
             * @property {cosmos.bank.v1beta1.IParams|null} [params] QueryParamsResponse params
             */

            /**
             * Constructs a new QueryParamsResponse.
             * @memberof cosmos.bank.v1beta1
             * @classdesc Represents a QueryParamsResponse.
             * @implements IQueryParamsResponse
             * @constructor
             * @param {cosmos.bank.v1beta1.IQueryParamsResponse=} [properties] Properties to set
             */
            function QueryParamsResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * QueryParamsResponse params.
             * @member {cosmos.bank.v1beta1.IParams|null|undefined} params
             * @memberof cosmos.bank.v1beta1.QueryParamsResponse
             * @instance
             */
            QueryParamsResponse.prototype.params = null;

            /**
             * Encodes the specified QueryParamsResponse message. Does not implicitly {@link cosmos.bank.v1beta1.QueryParamsResponse.verify|verify} messages.
             * @function encode
             * @memberof cosmos.bank.v1beta1.QueryParamsResponse
             * @static
             * @param {cosmos.bank.v1beta1.IQueryParamsResponse} message QueryParamsResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            QueryParamsResponse.encode = function encode(message, writer) {
                if (!writer) writer = $Writer.create();
                if (
                    message.params != null &&
                    Object.hasOwnProperty.call(message, "params")
                )
                    cosmos.bank.v1beta1.Params.encode(
                        message.params,
                        writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
                    ).ldelim();
                return writer;
            };

            /**
             * Encodes the specified QueryParamsResponse message, length delimited. Does not implicitly {@link cosmos.bank.v1beta1.QueryParamsResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cosmos.bank.v1beta1.QueryParamsResponse
             * @static
             * @param {cosmos.bank.v1beta1.IQueryParamsResponse} message QueryParamsResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            QueryParamsResponse.encodeDelimited = function encodeDelimited(
                message,
                writer
            ) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a QueryParamsResponse message from the specified reader or buffer.
             * @function decode
             * @memberof cosmos.bank.v1beta1.QueryParamsResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cosmos.bank.v1beta1.QueryParamsResponse} QueryParamsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            QueryParamsResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new cosmos.bank.v1beta1.QueryParamsResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.params = cosmos.bank.v1beta1.Params.decode(
                                reader,
                                reader.uint32()
                            );
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };

            /**
             * Decodes a QueryParamsResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cosmos.bank.v1beta1.QueryParamsResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cosmos.bank.v1beta1.QueryParamsResponse} QueryParamsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            QueryParamsResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader)) reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a QueryParamsResponse message.
             * @function verify
             * @memberof cosmos.bank.v1beta1.QueryParamsResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            QueryParamsResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.params != null && message.hasOwnProperty("params")) {
                    var error = cosmos.bank.v1beta1.Params.verify(message.params);
                    if (error) return "params." + error;
                }
                return null;
            };

            /**
             * Creates a QueryParamsResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cosmos.bank.v1beta1.QueryParamsResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cosmos.bank.v1beta1.QueryParamsResponse} QueryParamsResponse
             */
            QueryParamsResponse.fromObject = function fromObject(object) {
                if (object instanceof cosmos.bank.v1beta1.QueryParamsResponse)
                    return object;
                var message = new cosmos.bank.v1beta1.QueryParamsResponse();
                if (object.params != null) {
                    if (typeof object.params !== "object")
                        throw TypeError(
                            ".cosmos.bank.v1beta1.QueryParamsResponse.params: object expected"
                        );
                    message.params = cosmos.bank.v1beta1.Params.fromObject(
                        object.params
                    );
                }
                return message;
            };

            /**
             * Creates a plain object from a QueryParamsResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cosmos.bank.v1beta1.QueryParamsResponse
             * @static
             * @param {cosmos.bank.v1beta1.QueryParamsResponse} message QueryParamsResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            QueryParamsResponse.toObject = function toObject(message, options) {
                if (!options) options = {};
                var object = {};
                if (options.defaults) object.params = null;
                if (message.params != null && message.hasOwnProperty("params"))
                    object.params = cosmos.bank.v1beta1.Params.toObject(
                        message.params,
                        options
                    );
                return object;
            };

            /**
             * Converts this QueryParamsResponse to JSON.
             * @function toJSON
             * @memberof cosmos.bank.v1beta1.QueryParamsResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            QueryParamsResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return QueryParamsResponse;
        })();

        v1beta1.QueryDenomsMetadataRequest = (function () {
            /**
             * Properties of a QueryDenomsMetadataRequest.
             * @memberof cosmos.bank.v1beta1
             * @interface IQueryDenomsMetadataRequest
             * @property {cosmos.base.query.v1beta1.IPageRequest|null} [pagination] QueryDenomsMetadataRequest pagination
             */

            /**
             * Constructs a new QueryDenomsMetadataRequest.
             * @memberof cosmos.bank.v1beta1
             * @classdesc Represents a QueryDenomsMetadataRequest.
             * @implements IQueryDenomsMetadataRequest
             * @constructor
             * @param {cosmos.bank.v1beta1.IQueryDenomsMetadataRequest=} [properties] Properties to set
             */
            function QueryDenomsMetadataRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * QueryDenomsMetadataRequest pagination.
             * @member {cosmos.base.query.v1beta1.IPageRequest|null|undefined} pagination
             * @memberof cosmos.bank.v1beta1.QueryDenomsMetadataRequest
             * @instance
             */
            QueryDenomsMetadataRequest.prototype.pagination = null;

            /**
             * Encodes the specified QueryDenomsMetadataRequest message. Does not implicitly {@link cosmos.bank.v1beta1.QueryDenomsMetadataRequest.verify|verify} messages.
             * @function encode
             * @memberof cosmos.bank.v1beta1.QueryDenomsMetadataRequest
             * @static
             * @param {cosmos.bank.v1beta1.IQueryDenomsMetadataRequest} message QueryDenomsMetadataRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            QueryDenomsMetadataRequest.encode = function encode(message, writer) {
                if (!writer) writer = $Writer.create();
                if (
                    message.pagination != null &&
                    Object.hasOwnProperty.call(message, "pagination")
                )
                    cosmos.base.query.v1beta1.PageRequest.encode(
                        message.pagination,
                        writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
                    ).ldelim();
                return writer;
            };

            /**
             * Encodes the specified QueryDenomsMetadataRequest message, length delimited. Does not implicitly {@link cosmos.bank.v1beta1.QueryDenomsMetadataRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cosmos.bank.v1beta1.QueryDenomsMetadataRequest
             * @static
             * @param {cosmos.bank.v1beta1.IQueryDenomsMetadataRequest} message QueryDenomsMetadataRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            QueryDenomsMetadataRequest.encodeDelimited = function encodeDelimited(
                message,
                writer
            ) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a QueryDenomsMetadataRequest message from the specified reader or buffer.
             * @function decode
             * @memberof cosmos.bank.v1beta1.QueryDenomsMetadataRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cosmos.bank.v1beta1.QueryDenomsMetadataRequest} QueryDenomsMetadataRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            QueryDenomsMetadataRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new cosmos.bank.v1beta1.QueryDenomsMetadataRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.pagination =
                                cosmos.base.query.v1beta1.PageRequest.decode(
                                    reader,
                                    reader.uint32()
                                );
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };

            /**
             * Decodes a QueryDenomsMetadataRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cosmos.bank.v1beta1.QueryDenomsMetadataRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cosmos.bank.v1beta1.QueryDenomsMetadataRequest} QueryDenomsMetadataRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            QueryDenomsMetadataRequest.decodeDelimited = function decodeDelimited(
                reader
            ) {
                if (!(reader instanceof $Reader)) reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a QueryDenomsMetadataRequest message.
             * @function verify
             * @memberof cosmos.bank.v1beta1.QueryDenomsMetadataRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            QueryDenomsMetadataRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (
                    message.pagination != null &&
                    message.hasOwnProperty("pagination")
                ) {
                    var error = cosmos.base.query.v1beta1.PageRequest.verify(
                        message.pagination
                    );
                    if (error) return "pagination." + error;
                }
                return null;
            };

            /**
             * Creates a QueryDenomsMetadataRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cosmos.bank.v1beta1.QueryDenomsMetadataRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cosmos.bank.v1beta1.QueryDenomsMetadataRequest} QueryDenomsMetadataRequest
             */
            QueryDenomsMetadataRequest.fromObject = function fromObject(object) {
                if (
                    object instanceof cosmos.bank.v1beta1.QueryDenomsMetadataRequest
                )
                    return object;
                var message =
                    new cosmos.bank.v1beta1.QueryDenomsMetadataRequest();
                if (object.pagination != null) {
                    if (typeof object.pagination !== "object")
                        throw TypeError(
                            ".cosmos.bank.v1beta1.QueryDenomsMetadataRequest.pagination: object expected"
                        );
                    message.pagination =
                        cosmos.base.query.v1beta1.PageRequest.fromObject(
                            object.pagination
                        );
                }
                return message;
            };

            /**
             * Creates a plain object from a QueryDenomsMetadataRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cosmos.bank.v1beta1.QueryDenomsMetadataRequest
             * @static
             * @param {cosmos.bank.v1beta1.QueryDenomsMetadataRequest} message QueryDenomsMetadataRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            QueryDenomsMetadataRequest.toObject = function toObject(
                message,
                options
            ) {
                if (!options) options = {};
                var object = {};
                if (options.defaults) object.pagination = null;
                if (message.pagination != null && message.hasOwnProperty("pagination"))
                    object.pagination =
                        cosmos.base.query.v1beta1.PageRequest.toObject(
                            message.pagination,
                            options
                        );
                return object;
            };

            /**
             * Converts this QueryDenomsMetadataRequest to JSON.
             * @function toJSON
             * @memberof cosmos.bank.v1beta1.QueryDenomsMetadataRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            QueryDenomsMetadataRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return QueryDenomsMetadataRequest;
        })();

        v1beta1.QueryDenomsMetadataResponse = (function () {
            /**
             * Properties of a QueryDenomsMetadataResponse.
             * @memberof cosmos.bank.v1beta1
             * @interface IQueryDenomsMetadataResponse
             * @property {Array.<cosmos.bank.v1beta1.IMetadata>|null} [metadatas] QueryDenomsMetadataResponse metadatas
             * @property {cosmos.base.query.v1beta1.IPageResponse|null} [pagination] QueryDenomsMetadataResponse pagination
             */

            /**
             * Constructs a new QueryDenomsMetadataResponse.
             * @memberof cosmos.bank.v1beta1
             * @classdesc Represents a QueryDenomsMetadataResponse.
             * @implements IQueryDenomsMetadataResponse
             * @constructor
             * @param {cosmos.bank.v1beta1.IQueryDenomsMetadataResponse=} [properties] Properties to set
             */
            function QueryDenomsMetadataResponse(properties) {
                this.metadatas = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * QueryDenomsMetadataResponse metadatas.
             * @member {Array.<cosmos.bank.v1beta1.IMetadata>} metadatas
             * @memberof cosmos.bank.v1beta1.QueryDenomsMetadataResponse
             * @instance
             */
            QueryDenomsMetadataResponse.prototype.metadatas = $util.emptyArray;

            /**
             * QueryDenomsMetadataResponse pagination.
             * @member {cosmos.base.query.v1beta1.IPageResponse|null|undefined} pagination
             * @memberof cosmos.bank.v1beta1.QueryDenomsMetadataResponse
             * @instance
             */
            QueryDenomsMetadataResponse.prototype.pagination = null;

            /**
             * Encodes the specified QueryDenomsMetadataResponse message. Does not implicitly {@link cosmos.bank.v1beta1.QueryDenomsMetadataResponse.verify|verify} messages.
             * @function encode
             * @memberof cosmos.bank.v1beta1.QueryDenomsMetadataResponse
             * @static
             * @param {cosmos.bank.v1beta1.IQueryDenomsMetadataResponse} message QueryDenomsMetadataResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            QueryDenomsMetadataResponse.encode = function encode(message, writer) {
                if (!writer) writer = $Writer.create();
                if (message.metadatas != null && message.metadatas.length)
                    for (var i = 0; i < message.metadatas.length; ++i)
                        cosmos.bank.v1beta1.Metadata.encode(
                            message.metadatas[i],
                            writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
                        ).ldelim();
                if (
                    message.pagination != null &&
                    Object.hasOwnProperty.call(message, "pagination")
                )
                    cosmos.base.query.v1beta1.PageResponse.encode(
                        message.pagination,
                        writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
                    ).ldelim();
                return writer;
            };

            /**
             * Encodes the specified QueryDenomsMetadataResponse message, length delimited. Does not implicitly {@link cosmos.bank.v1beta1.QueryDenomsMetadataResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cosmos.bank.v1beta1.QueryDenomsMetadataResponse
             * @static
             * @param {cosmos.bank.v1beta1.IQueryDenomsMetadataResponse} message QueryDenomsMetadataResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            QueryDenomsMetadataResponse.encodeDelimited = function encodeDelimited(
                message,
                writer
            ) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a QueryDenomsMetadataResponse message from the specified reader or buffer.
             * @function decode
             * @memberof cosmos.bank.v1beta1.QueryDenomsMetadataResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cosmos.bank.v1beta1.QueryDenomsMetadataResponse} QueryDenomsMetadataResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            QueryDenomsMetadataResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new cosmos.bank.v1beta1.QueryDenomsMetadataResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            if (!(message.metadatas && message.metadatas.length))
                                message.metadatas = [];
                            message.metadatas.push(
                                cosmos.bank.v1beta1.Metadata.decode(
                                    reader,
                                    reader.uint32()
                                )
                            );
                            break;
                        case 2:
                            message.pagination =
                                cosmos.base.query.v1beta1.PageResponse.decode(
                                    reader,
                                    reader.uint32()
                                );
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };

            /**
             * Decodes a QueryDenomsMetadataResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cosmos.bank.v1beta1.QueryDenomsMetadataResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cosmos.bank.v1beta1.QueryDenomsMetadataResponse} QueryDenomsMetadataResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            QueryDenomsMetadataResponse.decodeDelimited = function decodeDelimited(
                reader
            ) {
                if (!(reader instanceof $Reader)) reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a QueryDenomsMetadataResponse message.
             * @function verify
             * @memberof cosmos.bank.v1beta1.QueryDenomsMetadataResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            QueryDenomsMetadataResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.metadatas != null && message.hasOwnProperty("metadatas")) {
                    if (!Array.isArray(message.metadatas))
                        return "metadatas: array expected";
                    for (var i = 0; i < message.metadatas.length; ++i) {
                        var error = cosmos.bank.v1beta1.Metadata.verify(
                            message.metadatas[i]
                        );
                        if (error) return "metadatas." + error;
                    }
                }
                if (
                    message.pagination != null &&
                    message.hasOwnProperty("pagination")
                ) {
                    var error = cosmos.base.query.v1beta1.PageResponse.verify(
                        message.pagination
                    );
                    if (error) return "pagination." + error;
                }
                return null;
            };

            /**
             * Creates a QueryDenomsMetadataResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cosmos.bank.v1beta1.QueryDenomsMetadataResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cosmos.bank.v1beta1.QueryDenomsMetadataResponse} QueryDenomsMetadataResponse
             */
            QueryDenomsMetadataResponse.fromObject = function fromObject(object) {
                if (
                    object instanceof
                    cosmos.bank.v1beta1.QueryDenomsMetadataResponse
                )
                    return object;
                var message =
                    new cosmos.bank.v1beta1.QueryDenomsMetadataResponse();
                if (object.metadatas) {
                    if (!Array.isArray(object.metadatas))
                        throw TypeError(
                            ".cosmos.bank.v1beta1.QueryDenomsMetadataResponse.metadatas: array expected"
                        );
                    message.metadatas = [];
                    for (var i = 0; i < object.metadatas.length; ++i) {
                        if (typeof object.metadatas[i] !== "object")
                            throw TypeError(
                                ".cosmos.bank.v1beta1.QueryDenomsMetadataResponse.metadatas: object expected"
                            );
                        message.metadatas[i] =
                            cosmos.bank.v1beta1.Metadata.fromObject(
                                object.metadatas[i]
                            );
                    }
                }
                if (object.pagination != null) {
                    if (typeof object.pagination !== "object")
                        throw TypeError(
                            ".cosmos.bank.v1beta1.QueryDenomsMetadataResponse.pagination: object expected"
                        );
                    message.pagination =
                        cosmos.base.query.v1beta1.PageResponse.fromObject(
                            object.pagination
                        );
                }
                return message;
            };

            /**
             * Creates a plain object from a QueryDenomsMetadataResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cosmos.bank.v1beta1.QueryDenomsMetadataResponse
             * @static
             * @param {cosmos.bank.v1beta1.QueryDenomsMetadataResponse} message QueryDenomsMetadataResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            QueryDenomsMetadataResponse.toObject = function toObject(
                message,
                options
            ) {
                if (!options) options = {};
                var object = {};
                if (options.arrays || options.defaults) object.metadatas = [];
                if (options.defaults) object.pagination = null;
                if (message.metadatas && message.metadatas.length) {
                    object.metadatas = [];
                    for (var j = 0; j < message.metadatas.length; ++j)
                        object.metadatas[j] = cosmos.bank.v1beta1.Metadata.toObject(
                            message.metadatas[j],
                            options
                        );
                }
                if (message.pagination != null && message.hasOwnProperty("pagination"))
                    object.pagination =
                        cosmos.base.query.v1beta1.PageResponse.toObject(
                            message.pagination,
                            options
                        );
                return object;
            };

            /**
             * Converts this QueryDenomsMetadataResponse to JSON.
             * @function toJSON
             * @memberof cosmos.bank.v1beta1.QueryDenomsMetadataResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            QueryDenomsMetadataResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return QueryDenomsMetadataResponse;
        })();

        v1beta1.QueryDenomMetadataRequest = (function () {
            /**
             * Properties of a QueryDenomMetadataRequest.
             * @memberof cosmos.bank.v1beta1
             * @interface IQueryDenomMetadataRequest
             * @property {string|null} [denom] QueryDenomMetadataRequest denom
             */

            /**
             * Constructs a new QueryDenomMetadataRequest.
             * @memberof cosmos.bank.v1beta1
             * @classdesc Represents a QueryDenomMetadataRequest.
             * @implements IQueryDenomMetadataRequest
             * @constructor
             * @param {cosmos.bank.v1beta1.IQueryDenomMetadataRequest=} [properties] Properties to set
             */
            function QueryDenomMetadataRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * QueryDenomMetadataRequest denom.
             * @member {string} denom
             * @memberof cosmos.bank.v1beta1.QueryDenomMetadataRequest
             * @instance
             */
            QueryDenomMetadataRequest.prototype.denom = "";

            /**
             * Encodes the specified QueryDenomMetadataRequest message. Does not implicitly {@link cosmos.bank.v1beta1.QueryDenomMetadataRequest.verify|verify} messages.
             * @function encode
             * @memberof cosmos.bank.v1beta1.QueryDenomMetadataRequest
             * @static
             * @param {cosmos.bank.v1beta1.IQueryDenomMetadataRequest} message QueryDenomMetadataRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            QueryDenomMetadataRequest.encode = function encode(message, writer) {
                if (!writer) writer = $Writer.create();
                if (
                    message.denom != null &&
                    Object.hasOwnProperty.call(message, "denom")
                )
                    writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.denom);
                return writer;
            };

            /**
             * Encodes the specified QueryDenomMetadataRequest message, length delimited. Does not implicitly {@link cosmos.bank.v1beta1.QueryDenomMetadataRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cosmos.bank.v1beta1.QueryDenomMetadataRequest
             * @static
             * @param {cosmos.bank.v1beta1.IQueryDenomMetadataRequest} message QueryDenomMetadataRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            QueryDenomMetadataRequest.encodeDelimited = function encodeDelimited(
                message,
                writer
            ) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a QueryDenomMetadataRequest message from the specified reader or buffer.
             * @function decode
             * @memberof cosmos.bank.v1beta1.QueryDenomMetadataRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cosmos.bank.v1beta1.QueryDenomMetadataRequest} QueryDenomMetadataRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            QueryDenomMetadataRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new cosmos.bank.v1beta1.QueryDenomMetadataRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.denom = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };

            /**
             * Decodes a QueryDenomMetadataRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cosmos.bank.v1beta1.QueryDenomMetadataRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cosmos.bank.v1beta1.QueryDenomMetadataRequest} QueryDenomMetadataRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            QueryDenomMetadataRequest.decodeDelimited = function decodeDelimited(
                reader
            ) {
                if (!(reader instanceof $Reader)) reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a QueryDenomMetadataRequest message.
             * @function verify
             * @memberof cosmos.bank.v1beta1.QueryDenomMetadataRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            QueryDenomMetadataRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.denom != null && message.hasOwnProperty("denom"))
                    if (!$util.isString(message.denom)) return "denom: string expected";
                return null;
            };

            /**
             * Creates a QueryDenomMetadataRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cosmos.bank.v1beta1.QueryDenomMetadataRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cosmos.bank.v1beta1.QueryDenomMetadataRequest} QueryDenomMetadataRequest
             */
            QueryDenomMetadataRequest.fromObject = function fromObject(object) {
                if (
                    object instanceof cosmos.bank.v1beta1.QueryDenomMetadataRequest
                )
                    return object;
                var message = new cosmos.bank.v1beta1.QueryDenomMetadataRequest();
                if (object.denom != null) message.denom = String(object.denom);
                return message;
            };

            /**
             * Creates a plain object from a QueryDenomMetadataRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cosmos.bank.v1beta1.QueryDenomMetadataRequest
             * @static
             * @param {cosmos.bank.v1beta1.QueryDenomMetadataRequest} message QueryDenomMetadataRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            QueryDenomMetadataRequest.toObject = function toObject(message, options) {
                if (!options) options = {};
                var object = {};
                if (options.defaults) object.denom = "";
                if (message.denom != null && message.hasOwnProperty("denom"))
                    object.denom = message.denom;
                return object;
            };

            /**
             * Converts this QueryDenomMetadataRequest to JSON.
             * @function toJSON
             * @memberof cosmos.bank.v1beta1.QueryDenomMetadataRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            QueryDenomMetadataRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return QueryDenomMetadataRequest;
        })();

        v1beta1.QueryDenomMetadataResponse = (function () {
            /**
             * Properties of a QueryDenomMetadataResponse.
             * @memberof cosmos.bank.v1beta1
             * @interface IQueryDenomMetadataResponse
             * @property {cosmos.bank.v1beta1.IMetadata|null} [metadata] QueryDenomMetadataResponse metadata
             */

            /**
             * Constructs a new QueryDenomMetadataResponse.
             * @memberof cosmos.bank.v1beta1
             * @classdesc Represents a QueryDenomMetadataResponse.
             * @implements IQueryDenomMetadataResponse
             * @constructor
             * @param {cosmos.bank.v1beta1.IQueryDenomMetadataResponse=} [properties] Properties to set
             */
            function QueryDenomMetadataResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * QueryDenomMetadataResponse metadata.
             * @member {cosmos.bank.v1beta1.IMetadata|null|undefined} metadata
             * @memberof cosmos.bank.v1beta1.QueryDenomMetadataResponse
             * @instance
             */
            QueryDenomMetadataResponse.prototype.metadata = null;

            /**
             * Encodes the specified QueryDenomMetadataResponse message. Does not implicitly {@link cosmos.bank.v1beta1.QueryDenomMetadataResponse.verify|verify} messages.
             * @function encode
             * @memberof cosmos.bank.v1beta1.QueryDenomMetadataResponse
             * @static
             * @param {cosmos.bank.v1beta1.IQueryDenomMetadataResponse} message QueryDenomMetadataResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            QueryDenomMetadataResponse.encode = function encode(message, writer) {
                if (!writer) writer = $Writer.create();
                if (
                    message.metadata != null &&
                    Object.hasOwnProperty.call(message, "metadata")
                )
                    cosmos.bank.v1beta1.Metadata.encode(
                        message.metadata,
                        writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
                    ).ldelim();
                return writer;
            };

            /**
             * Encodes the specified QueryDenomMetadataResponse message, length delimited. Does not implicitly {@link cosmos.bank.v1beta1.QueryDenomMetadataResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cosmos.bank.v1beta1.QueryDenomMetadataResponse
             * @static
             * @param {cosmos.bank.v1beta1.IQueryDenomMetadataResponse} message QueryDenomMetadataResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            QueryDenomMetadataResponse.encodeDelimited = function encodeDelimited(
                message,
                writer
            ) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a QueryDenomMetadataResponse message from the specified reader or buffer.
             * @function decode
             * @memberof cosmos.bank.v1beta1.QueryDenomMetadataResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cosmos.bank.v1beta1.QueryDenomMetadataResponse} QueryDenomMetadataResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            QueryDenomMetadataResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new cosmos.bank.v1beta1.QueryDenomMetadataResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.metadata = cosmos.bank.v1beta1.Metadata.decode(
                                reader,
                                reader.uint32()
                            );
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };

            /**
             * Decodes a QueryDenomMetadataResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cosmos.bank.v1beta1.QueryDenomMetadataResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cosmos.bank.v1beta1.QueryDenomMetadataResponse} QueryDenomMetadataResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            QueryDenomMetadataResponse.decodeDelimited = function decodeDelimited(
                reader
            ) {
                if (!(reader instanceof $Reader)) reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a QueryDenomMetadataResponse message.
             * @function verify
             * @memberof cosmos.bank.v1beta1.QueryDenomMetadataResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            QueryDenomMetadataResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.metadata != null && message.hasOwnProperty("metadata")) {
                    var error = cosmos.bank.v1beta1.Metadata.verify(
                        message.metadata
                    );
                    if (error) return "metadata." + error;
                }
                return null;
            };

            /**
             * Creates a QueryDenomMetadataResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cosmos.bank.v1beta1.QueryDenomMetadataResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cosmos.bank.v1beta1.QueryDenomMetadataResponse} QueryDenomMetadataResponse
             */
            QueryDenomMetadataResponse.fromObject = function fromObject(object) {
                if (
                    object instanceof cosmos.bank.v1beta1.QueryDenomMetadataResponse
                )
                    return object;
                var message =
                    new cosmos.bank.v1beta1.QueryDenomMetadataResponse();
                if (object.metadata != null) {
                    if (typeof object.metadata !== "object")
                        throw TypeError(
                            ".cosmos.bank.v1beta1.QueryDenomMetadataResponse.metadata: object expected"
                        );
                    message.metadata = cosmos.bank.v1beta1.Metadata.fromObject(
                        object.metadata
                    );
                }
                return message;
            };

            /**
             * Creates a plain object from a QueryDenomMetadataResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cosmos.bank.v1beta1.QueryDenomMetadataResponse
             * @static
             * @param {cosmos.bank.v1beta1.QueryDenomMetadataResponse} message QueryDenomMetadataResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            QueryDenomMetadataResponse.toObject = function toObject(
                message,
                options
            ) {
                if (!options) options = {};
                var object = {};
                if (options.defaults) object.metadata = null;
                if (message.metadata != null && message.hasOwnProperty("metadata"))
                    object.metadata = cosmos.bank.v1beta1.Metadata.toObject(
                        message.metadata,
                        options
                    );
                return object;
            };

            /**
             * Converts this QueryDenomMetadataResponse to JSON.
             * @function toJSON
             * @memberof cosmos.bank.v1beta1.QueryDenomMetadataResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            QueryDenomMetadataResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return QueryDenomMetadataResponse;
        })();

        v1beta1.SendAuthorization = (function () {
            /**
             * Properties of a SendAuthorization.
             * @memberof cosmos.bank.v1beta1
             * @interface ISendAuthorization
             * @property {Array.<cosmos.base.v1beta1.ICoin>|null} [spend_limit] SendAuthorization spend_limit
             */

            /**
             * Constructs a new SendAuthorization.
             * @memberof cosmos.bank.v1beta1
             * @classdesc Represents a SendAuthorization.
             * @implements ISendAuthorization
             * @constructor
             * @param {cosmos.bank.v1beta1.ISendAuthorization=} [properties] Properties to set
             */
            function SendAuthorization(properties) {
                this.spend_limit = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SendAuthorization spend_limit.
             * @member {Array.<cosmos.base.v1beta1.ICoin>} spend_limit
             * @memberof cosmos.bank.v1beta1.SendAuthorization
             * @instance
             */
            SendAuthorization.prototype.spend_limit = $util.emptyArray;

            /**
             * Encodes the specified SendAuthorization message. Does not implicitly {@link cosmos.bank.v1beta1.SendAuthorization.verify|verify} messages.
             * @function encode
             * @memberof cosmos.bank.v1beta1.SendAuthorization
             * @static
             * @param {cosmos.bank.v1beta1.ISendAuthorization} message SendAuthorization message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SendAuthorization.encode = function encode(message, writer) {
                if (!writer) writer = $Writer.create();
                if (message.spend_limit != null && message.spend_limit.length)
                    for (var i = 0; i < message.spend_limit.length; ++i)
                        cosmos.base.v1beta1.Coin.encode(
                            message.spend_limit[i],
                            writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
                        ).ldelim();
                return writer;
            };

            /**
             * Encodes the specified SendAuthorization message, length delimited. Does not implicitly {@link cosmos.bank.v1beta1.SendAuthorization.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cosmos.bank.v1beta1.SendAuthorization
             * @static
             * @param {cosmos.bank.v1beta1.ISendAuthorization} message SendAuthorization message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SendAuthorization.encodeDelimited = function encodeDelimited(
                message,
                writer
            ) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SendAuthorization message from the specified reader or buffer.
             * @function decode
             * @memberof cosmos.bank.v1beta1.SendAuthorization
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cosmos.bank.v1beta1.SendAuthorization} SendAuthorization
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SendAuthorization.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new cosmos.bank.v1beta1.SendAuthorization();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            if (!(message.spend_limit && message.spend_limit.length))
                                message.spend_limit = [];
                            message.spend_limit.push(
                                cosmos.base.v1beta1.Coin.decode(reader, reader.uint32())
                            );
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };

            /**
             * Decodes a SendAuthorization message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cosmos.bank.v1beta1.SendAuthorization
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cosmos.bank.v1beta1.SendAuthorization} SendAuthorization
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SendAuthorization.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader)) reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SendAuthorization message.
             * @function verify
             * @memberof cosmos.bank.v1beta1.SendAuthorization
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SendAuthorization.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (
                    message.spend_limit != null &&
                    message.hasOwnProperty("spend_limit")
                ) {
                    if (!Array.isArray(message.spend_limit))
                        return "spend_limit: array expected";
                    for (var i = 0; i < message.spend_limit.length; ++i) {
                        var error = cosmos.base.v1beta1.Coin.verify(
                            message.spend_limit[i]
                        );
                        if (error) return "spend_limit." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a SendAuthorization message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cosmos.bank.v1beta1.SendAuthorization
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cosmos.bank.v1beta1.SendAuthorization} SendAuthorization
             */
            SendAuthorization.fromObject = function fromObject(object) {
                if (object instanceof cosmos.bank.v1beta1.SendAuthorization)
                    return object;
                var message = new cosmos.bank.v1beta1.SendAuthorization();
                if (object.spend_limit) {
                    if (!Array.isArray(object.spend_limit))
                        throw TypeError(
                            ".cosmos.bank.v1beta1.SendAuthorization.spend_limit: array expected"
                        );
                    message.spend_limit = [];
                    for (var i = 0; i < object.spend_limit.length; ++i) {
                        if (typeof object.spend_limit[i] !== "object")
                            throw TypeError(
                                ".cosmos.bank.v1beta1.SendAuthorization.spend_limit: object expected"
                            );
                        message.spend_limit[i] = cosmos.base.v1beta1.Coin.fromObject(
                            object.spend_limit[i]
                        );
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a SendAuthorization message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cosmos.bank.v1beta1.SendAuthorization
             * @static
             * @param {cosmos.bank.v1beta1.SendAuthorization} message SendAuthorization
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SendAuthorization.toObject = function toObject(message, options) {
                if (!options) options = {};
                var object = {};
                if (options.arrays || options.defaults) object.spend_limit = [];
                if (message.spend_limit && message.spend_limit.length) {
                    object.spend_limit = [];
                    for (var j = 0; j < message.spend_limit.length; ++j)
                        object.spend_limit[j] = cosmos.base.v1beta1.Coin.toObject(
                            message.spend_limit[j],
                            options
                        );
                }
                return object;
            };

            /**
             * Converts this SendAuthorization to JSON.
             * @function toJSON
             * @memberof cosmos.bank.v1beta1.SendAuthorization
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SendAuthorization.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return SendAuthorization;
        })();

        v1beta1.GenesisState = (function () {
            /**
             * Properties of a GenesisState.
             * @memberof cosmos.bank.v1beta1
             * @interface IGenesisState
             * @property {cosmos.bank.v1beta1.IParams|null} [params] GenesisState params
             * @property {Array.<cosmos.bank.v1beta1.IBalance>|null} [balances] GenesisState balances
             * @property {Array.<cosmos.base.v1beta1.ICoin>|null} [supply] GenesisState supply
             * @property {Array.<cosmos.bank.v1beta1.IMetadata>|null} [denom_metadata] GenesisState denom_metadata
             */

            /**
             * Constructs a new GenesisState.
             * @memberof cosmos.bank.v1beta1
             * @classdesc Represents a GenesisState.
             * @implements IGenesisState
             * @constructor
             * @param {cosmos.bank.v1beta1.IGenesisState=} [properties] Properties to set
             */
            function GenesisState(properties) {
                this.balances = [];
                this.supply = [];
                this.denom_metadata = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GenesisState params.
             * @member {cosmos.bank.v1beta1.IParams|null|undefined} params
             * @memberof cosmos.bank.v1beta1.GenesisState
             * @instance
             */
            GenesisState.prototype.params = null;

            /**
             * GenesisState balances.
             * @member {Array.<cosmos.bank.v1beta1.IBalance>} balances
             * @memberof cosmos.bank.v1beta1.GenesisState
             * @instance
             */
            GenesisState.prototype.balances = $util.emptyArray;

            /**
             * GenesisState supply.
             * @member {Array.<cosmos.base.v1beta1.ICoin>} supply
             * @memberof cosmos.bank.v1beta1.GenesisState
             * @instance
             */
            GenesisState.prototype.supply = $util.emptyArray;

            /**
             * GenesisState denom_metadata.
             * @member {Array.<cosmos.bank.v1beta1.IMetadata>} denom_metadata
             * @memberof cosmos.bank.v1beta1.GenesisState
             * @instance
             */
            GenesisState.prototype.denom_metadata = $util.emptyArray;

            /**
             * Encodes the specified GenesisState message. Does not implicitly {@link cosmos.bank.v1beta1.GenesisState.verify|verify} messages.
             * @function encode
             * @memberof cosmos.bank.v1beta1.GenesisState
             * @static
             * @param {cosmos.bank.v1beta1.IGenesisState} message GenesisState message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GenesisState.encode = function encode(message, writer) {
                if (!writer) writer = $Writer.create();
                if (
                    message.params != null &&
                    Object.hasOwnProperty.call(message, "params")
                )
                    cosmos.bank.v1beta1.Params.encode(
                        message.params,
                        writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
                    ).ldelim();
                if (message.balances != null && message.balances.length)
                    for (var i = 0; i < message.balances.length; ++i)
                        cosmos.bank.v1beta1.Balance.encode(
                            message.balances[i],
                            writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
                        ).ldelim();
                if (message.supply != null && message.supply.length)
                    for (var i = 0; i < message.supply.length; ++i)
                        cosmos.base.v1beta1.Coin.encode(
                            message.supply[i],
                            writer.uint32(/* id 3, wireType 2 =*/ 26).fork()
                        ).ldelim();
                if (message.denom_metadata != null && message.denom_metadata.length)
                    for (var i = 0; i < message.denom_metadata.length; ++i)
                        cosmos.bank.v1beta1.Metadata.encode(
                            message.denom_metadata[i],
                            writer.uint32(/* id 4, wireType 2 =*/ 34).fork()
                        ).ldelim();
                return writer;
            };

            /**
             * Encodes the specified GenesisState message, length delimited. Does not implicitly {@link cosmos.bank.v1beta1.GenesisState.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cosmos.bank.v1beta1.GenesisState
             * @static
             * @param {cosmos.bank.v1beta1.IGenesisState} message GenesisState message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GenesisState.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GenesisState message from the specified reader or buffer.
             * @function decode
             * @memberof cosmos.bank.v1beta1.GenesisState
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cosmos.bank.v1beta1.GenesisState} GenesisState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GenesisState.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new cosmos.bank.v1beta1.GenesisState();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.params = cosmos.bank.v1beta1.Params.decode(
                                reader,
                                reader.uint32()
                            );
                            break;
                        case 2:
                            if (!(message.balances && message.balances.length))
                                message.balances = [];
                            message.balances.push(
                                cosmos.bank.v1beta1.Balance.decode(
                                    reader,
                                    reader.uint32()
                                )
                            );
                            break;
                        case 3:
                            if (!(message.supply && message.supply.length))
                                message.supply = [];
                            message.supply.push(
                                cosmos.base.v1beta1.Coin.decode(reader, reader.uint32())
                            );
                            break;
                        case 4:
                            if (!(message.denom_metadata && message.denom_metadata.length))
                                message.denom_metadata = [];
                            message.denom_metadata.push(
                                cosmos.bank.v1beta1.Metadata.decode(
                                    reader,
                                    reader.uint32()
                                )
                            );
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };

            /**
             * Decodes a GenesisState message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cosmos.bank.v1beta1.GenesisState
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cosmos.bank.v1beta1.GenesisState} GenesisState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GenesisState.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader)) reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GenesisState message.
             * @function verify
             * @memberof cosmos.bank.v1beta1.GenesisState
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GenesisState.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.params != null && message.hasOwnProperty("params")) {
                    var error = cosmos.bank.v1beta1.Params.verify(message.params);
                    if (error) return "params." + error;
                }
                if (message.balances != null && message.hasOwnProperty("balances")) {
                    if (!Array.isArray(message.balances))
                        return "balances: array expected";
                    for (var i = 0; i < message.balances.length; ++i) {
                        var error = cosmos.bank.v1beta1.Balance.verify(
                            message.balances[i]
                        );
                        if (error) return "balances." + error;
                    }
                }
                if (message.supply != null && message.hasOwnProperty("supply")) {
                    if (!Array.isArray(message.supply)) return "supply: array expected";
                    for (var i = 0; i < message.supply.length; ++i) {
                        var error = cosmos.base.v1beta1.Coin.verify(
                            message.supply[i]
                        );
                        if (error) return "supply." + error;
                    }
                }
                if (
                    message.denom_metadata != null &&
                    message.hasOwnProperty("denom_metadata")
                ) {
                    if (!Array.isArray(message.denom_metadata))
                        return "denom_metadata: array expected";
                    for (var i = 0; i < message.denom_metadata.length; ++i) {
                        var error = cosmos.bank.v1beta1.Metadata.verify(
                            message.denom_metadata[i]
                        );
                        if (error) return "denom_metadata." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a GenesisState message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cosmos.bank.v1beta1.GenesisState
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cosmos.bank.v1beta1.GenesisState} GenesisState
             */
            GenesisState.fromObject = function fromObject(object) {
                if (object instanceof cosmos.bank.v1beta1.GenesisState)
                    return object;
                var message = new cosmos.bank.v1beta1.GenesisState();
                if (object.params != null) {
                    if (typeof object.params !== "object")
                        throw TypeError(
                            ".cosmos.bank.v1beta1.GenesisState.params: object expected"
                        );
                    message.params = cosmos.bank.v1beta1.Params.fromObject(
                        object.params
                    );
                }
                if (object.balances) {
                    if (!Array.isArray(object.balances))
                        throw TypeError(
                            ".cosmos.bank.v1beta1.GenesisState.balances: array expected"
                        );
                    message.balances = [];
                    for (var i = 0; i < object.balances.length; ++i) {
                        if (typeof object.balances[i] !== "object")
                            throw TypeError(
                                ".cosmos.bank.v1beta1.GenesisState.balances: object expected"
                            );
                        message.balances[i] = cosmos.bank.v1beta1.Balance.fromObject(
                            object.balances[i]
                        );
                    }
                }
                if (object.supply) {
                    if (!Array.isArray(object.supply))
                        throw TypeError(
                            ".cosmos.bank.v1beta1.GenesisState.supply: array expected"
                        );
                    message.supply = [];
                    for (var i = 0; i < object.supply.length; ++i) {
                        if (typeof object.supply[i] !== "object")
                            throw TypeError(
                                ".cosmos.bank.v1beta1.GenesisState.supply: object expected"
                            );
                        message.supply[i] = cosmos.base.v1beta1.Coin.fromObject(
                            object.supply[i]
                        );
                    }
                }
                if (object.denom_metadata) {
                    if (!Array.isArray(object.denom_metadata))
                        throw TypeError(
                            ".cosmos.bank.v1beta1.GenesisState.denom_metadata: array expected"
                        );
                    message.denom_metadata = [];
                    for (var i = 0; i < object.denom_metadata.length; ++i) {
                        if (typeof object.denom_metadata[i] !== "object")
                            throw TypeError(
                                ".cosmos.bank.v1beta1.GenesisState.denom_metadata: object expected"
                            );
                        message.denom_metadata[i] =
                            cosmos.bank.v1beta1.Metadata.fromObject(
                                object.denom_metadata[i]
                            );
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a GenesisState message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cosmos.bank.v1beta1.GenesisState
             * @static
             * @param {cosmos.bank.v1beta1.GenesisState} message GenesisState
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GenesisState.toObject = function toObject(message, options) {
                if (!options) options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.balances = [];
                    object.supply = [];
                    object.denom_metadata = [];
                }
                if (options.defaults) object.params = null;
                if (message.params != null && message.hasOwnProperty("params"))
                    object.params = cosmos.bank.v1beta1.Params.toObject(
                        message.params,
                        options
                    );
                if (message.balances && message.balances.length) {
                    object.balances = [];
                    for (var j = 0; j < message.balances.length; ++j)
                        object.balances[j] = cosmos.bank.v1beta1.Balance.toObject(
                            message.balances[j],
                            options
                        );
                }
                if (message.supply && message.supply.length) {
                    object.supply = [];
                    for (var j = 0; j < message.supply.length; ++j)
                        object.supply[j] = cosmos.base.v1beta1.Coin.toObject(
                            message.supply[j],
                            options
                        );
                }
                if (message.denom_metadata && message.denom_metadata.length) {
                    object.denom_metadata = [];
                    for (var j = 0; j < message.denom_metadata.length; ++j)
                        object.denom_metadata[j] =
                            cosmos.bank.v1beta1.Metadata.toObject(
                                message.denom_metadata[j],
                                options
                            );
                }
                return object;
            };

            /**
             * Converts this GenesisState to JSON.
             * @function toJSON
             * @memberof cosmos.bank.v1beta1.GenesisState
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GenesisState.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return GenesisState;
        })();

        v1beta1.Balance = (function () {
            /**
             * Properties of a Balance.
             * @memberof cosmos.bank.v1beta1
             * @interface IBalance
             * @property {string|null} [address] Balance address
             * @property {Array.<cosmos.base.v1beta1.ICoin>|null} [coins] Balance coins
             */

            /**
             * Constructs a new Balance.
             * @memberof cosmos.bank.v1beta1
             * @classdesc Represents a Balance.
             * @implements IBalance
             * @constructor
             * @param {cosmos.bank.v1beta1.IBalance=} [properties] Properties to set
             */
            function Balance(properties) {
                this.coins = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Balance address.
             * @member {string} address
             * @memberof cosmos.bank.v1beta1.Balance
             * @instance
             */
            Balance.prototype.address = "";

            /**
             * Balance coins.
             * @member {Array.<cosmos.base.v1beta1.ICoin>} coins
             * @memberof cosmos.bank.v1beta1.Balance
             * @instance
             */
            Balance.prototype.coins = $util.emptyArray;

            /**
             * Encodes the specified Balance message. Does not implicitly {@link cosmos.bank.v1beta1.Balance.verify|verify} messages.
             * @function encode
             * @memberof cosmos.bank.v1beta1.Balance
             * @static
             * @param {cosmos.bank.v1beta1.IBalance} message Balance message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Balance.encode = function encode(message, writer) {
                if (!writer) writer = $Writer.create();
                if (
                    message.address != null &&
                    Object.hasOwnProperty.call(message, "address")
                )
                    writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.address);
                if (message.coins != null && message.coins.length)
                    for (var i = 0; i < message.coins.length; ++i)
                        cosmos.base.v1beta1.Coin.encode(
                            message.coins[i],
                            writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
                        ).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Balance message, length delimited. Does not implicitly {@link cosmos.bank.v1beta1.Balance.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cosmos.bank.v1beta1.Balance
             * @static
             * @param {cosmos.bank.v1beta1.IBalance} message Balance message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Balance.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Balance message from the specified reader or buffer.
             * @function decode
             * @memberof cosmos.bank.v1beta1.Balance
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cosmos.bank.v1beta1.Balance} Balance
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Balance.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new cosmos.bank.v1beta1.Balance();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.address = reader.string();
                            break;
                        case 2:
                            if (!(message.coins && message.coins.length)) message.coins = [];
                            message.coins.push(
                                cosmos.base.v1beta1.Coin.decode(reader, reader.uint32())
                            );
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Balance message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cosmos.bank.v1beta1.Balance
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cosmos.bank.v1beta1.Balance} Balance
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Balance.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader)) reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Balance message.
             * @function verify
             * @memberof cosmos.bank.v1beta1.Balance
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Balance.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.address != null && message.hasOwnProperty("address"))
                    if (!$util.isString(message.address))
                        return "address: string expected";
                if (message.coins != null && message.hasOwnProperty("coins")) {
                    if (!Array.isArray(message.coins)) return "coins: array expected";
                    for (var i = 0; i < message.coins.length; ++i) {
                        var error = cosmos.base.v1beta1.Coin.verify(message.coins[i]);
                        if (error) return "coins." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a Balance message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cosmos.bank.v1beta1.Balance
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cosmos.bank.v1beta1.Balance} Balance
             */
            Balance.fromObject = function fromObject(object) {
                if (object instanceof cosmos.bank.v1beta1.Balance) return object;
                var message = new cosmos.bank.v1beta1.Balance();
                if (object.address != null) message.address = String(object.address);
                if (object.coins) {
                    if (!Array.isArray(object.coins))
                        throw TypeError(
                            ".cosmos.bank.v1beta1.Balance.coins: array expected"
                        );
                    message.coins = [];
                    for (var i = 0; i < object.coins.length; ++i) {
                        if (typeof object.coins[i] !== "object")
                            throw TypeError(
                                ".cosmos.bank.v1beta1.Balance.coins: object expected"
                            );
                        message.coins[i] = cosmos.base.v1beta1.Coin.fromObject(
                            object.coins[i]
                        );
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a Balance message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cosmos.bank.v1beta1.Balance
             * @static
             * @param {cosmos.bank.v1beta1.Balance} message Balance
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Balance.toObject = function toObject(message, options) {
                if (!options) options = {};
                var object = {};
                if (options.arrays || options.defaults) object.coins = [];
                if (options.defaults) object.address = "";
                if (message.address != null && message.hasOwnProperty("address"))
                    object.address = message.address;
                if (message.coins && message.coins.length) {
                    object.coins = [];
                    for (var j = 0; j < message.coins.length; ++j)
                        object.coins[j] = cosmos.base.v1beta1.Coin.toObject(
                            message.coins[j],
                            options
                        );
                }
                return object;
            };

            /**
             * Converts this Balance to JSON.
             * @function toJSON
             * @memberof cosmos.bank.v1beta1.Balance
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Balance.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Balance;
        })();

        return v1beta1;
    })();

    return bank;
})();

cosmos.crypto = (function () {
    /**
     * Namespace crypto.
     * @memberof cosmos
     * @namespace
     */
    var crypto = {};

    crypto.ed25519 = (function () {
        /**
         * Namespace ed25519.
         * @memberof cosmos.crypto
         * @namespace
         */
        var ed25519 = {};

        ed25519.PubKey = (function () {
            /**
             * Properties of a PubKey.
             * @memberof cosmos.crypto.ed25519
             * @interface IPubKey
             * @property {Uint8Array|null} [key] PubKey key
             */

            /**
             * Constructs a new PubKey.
             * @memberof cosmos.crypto.ed25519
             * @classdesc Represents a PubKey.
             * @implements IPubKey
             * @constructor
             * @param {cosmos.crypto.ed25519.IPubKey=} [properties] Properties to set
             */
            function PubKey(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * PubKey key.
             * @member {Uint8Array} key
             * @memberof cosmos.crypto.ed25519.PubKey
             * @instance
             */
            PubKey.prototype.key = $util.newBuffer([]);

            /**
             * Encodes the specified PubKey message. Does not implicitly {@link cosmos.crypto.ed25519.PubKey.verify|verify} messages.
             * @function encode
             * @memberof cosmos.crypto.ed25519.PubKey
             * @static
             * @param {cosmos.crypto.ed25519.IPubKey} message PubKey message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PubKey.encode = function encode(message, writer) {
                if (!writer) writer = $Writer.create();
                if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                    writer.uint32(/* id 1, wireType 2 =*/ 10).bytes(message.key);
                return writer;
            };

            /**
             * Encodes the specified PubKey message, length delimited. Does not implicitly {@link cosmos.crypto.ed25519.PubKey.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cosmos.crypto.ed25519.PubKey
             * @static
             * @param {cosmos.crypto.ed25519.IPubKey} message PubKey message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PubKey.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a PubKey message from the specified reader or buffer.
             * @function decode
             * @memberof cosmos.crypto.ed25519.PubKey
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cosmos.crypto.ed25519.PubKey} PubKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PubKey.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new cosmos.crypto.ed25519.PubKey();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.key = reader.bytes();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };

            /**
             * Decodes a PubKey message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cosmos.crypto.ed25519.PubKey
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cosmos.crypto.ed25519.PubKey} PubKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PubKey.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader)) reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PubKey message.
             * @function verify
             * @memberof cosmos.crypto.ed25519.PubKey
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PubKey.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.key != null && message.hasOwnProperty("key"))
                    if (
                        !(
                            (message.key && typeof message.key.length === "number") ||
                            $util.isString(message.key)
                        )
                    )
                        return "key: buffer expected";
                return null;
            };

            /**
             * Creates a PubKey message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cosmos.crypto.ed25519.PubKey
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cosmos.crypto.ed25519.PubKey} PubKey
             */
            PubKey.fromObject = function fromObject(object) {
                if (object instanceof cosmos.crypto.ed25519.PubKey) return object;
                var message = new cosmos.crypto.ed25519.PubKey();
                if (object.key != null)
                    if (typeof object.key === "string")
                        $util.base64.decode(
                            object.key,
                            (message.key = $util.newBuffer($util.base64.length(object.key))),
                            0
                        );
                    else if (object.key.length) message.key = object.key;
                return message;
            };

            /**
             * Creates a plain object from a PubKey message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cosmos.crypto.ed25519.PubKey
             * @static
             * @param {cosmos.crypto.ed25519.PubKey} message PubKey
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PubKey.toObject = function toObject(message, options) {
                if (!options) options = {};
                var object = {};
                if (options.defaults)
                    if (options.bytes === String) object.key = "";
                    else {
                        object.key = [];
                        if (options.bytes !== Array)
                            object.key = $util.newBuffer(object.key);
                    }
                if (message.key != null && message.hasOwnProperty("key"))
                    object.key =
                        options.bytes === String
                            ? $util.base64.encode(message.key, 0, message.key.length)
                            : options.bytes === Array
                                ? Array.prototype.slice.call(message.key)
                                : message.key;
                return object;
            };

            /**
             * Converts this PubKey to JSON.
             * @function toJSON
             * @memberof cosmos.crypto.ed25519.PubKey
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PubKey.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return PubKey;
        })();

        ed25519.PrivKey = (function () {
            /**
             * Properties of a PrivKey.
             * @memberof cosmos.crypto.ed25519
             * @interface IPrivKey
             * @property {Uint8Array|null} [key] PrivKey key
             */

            /**
             * Constructs a new PrivKey.
             * @memberof cosmos.crypto.ed25519
             * @classdesc Represents a PrivKey.
             * @implements IPrivKey
             * @constructor
             * @param {cosmos.crypto.ed25519.IPrivKey=} [properties] Properties to set
             */
            function PrivKey(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * PrivKey key.
             * @member {Uint8Array} key
             * @memberof cosmos.crypto.ed25519.PrivKey
             * @instance
             */
            PrivKey.prototype.key = $util.newBuffer([]);

            /**
             * Encodes the specified PrivKey message. Does not implicitly {@link cosmos.crypto.ed25519.PrivKey.verify|verify} messages.
             * @function encode
             * @memberof cosmos.crypto.ed25519.PrivKey
             * @static
             * @param {cosmos.crypto.ed25519.IPrivKey} message PrivKey message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PrivKey.encode = function encode(message, writer) {
                if (!writer) writer = $Writer.create();
                if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                    writer.uint32(/* id 1, wireType 2 =*/ 10).bytes(message.key);
                return writer;
            };

            /**
             * Encodes the specified PrivKey message, length delimited. Does not implicitly {@link cosmos.crypto.ed25519.PrivKey.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cosmos.crypto.ed25519.PrivKey
             * @static
             * @param {cosmos.crypto.ed25519.IPrivKey} message PrivKey message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PrivKey.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a PrivKey message from the specified reader or buffer.
             * @function decode
             * @memberof cosmos.crypto.ed25519.PrivKey
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cosmos.crypto.ed25519.PrivKey} PrivKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PrivKey.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new cosmos.crypto.ed25519.PrivKey();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.key = reader.bytes();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };

            /**
             * Decodes a PrivKey message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cosmos.crypto.ed25519.PrivKey
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cosmos.crypto.ed25519.PrivKey} PrivKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PrivKey.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader)) reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PrivKey message.
             * @function verify
             * @memberof cosmos.crypto.ed25519.PrivKey
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PrivKey.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.key != null && message.hasOwnProperty("key"))
                    if (
                        !(
                            (message.key && typeof message.key.length === "number") ||
                            $util.isString(message.key)
                        )
                    )
                        return "key: buffer expected";
                return null;
            };

            /**
             * Creates a PrivKey message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cosmos.crypto.ed25519.PrivKey
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cosmos.crypto.ed25519.PrivKey} PrivKey
             */
            PrivKey.fromObject = function fromObject(object) {
                if (object instanceof cosmos.crypto.ed25519.PrivKey)
                    return object;
                var message = new cosmos.crypto.ed25519.PrivKey();
                if (object.key != null)
                    if (typeof object.key === "string")
                        $util.base64.decode(
                            object.key,
                            (message.key = $util.newBuffer($util.base64.length(object.key))),
                            0
                        );
                    else if (object.key.length) message.key = object.key;
                return message;
            };

            /**
             * Creates a plain object from a PrivKey message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cosmos.crypto.ed25519.PrivKey
             * @static
             * @param {cosmos.crypto.ed25519.PrivKey} message PrivKey
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PrivKey.toObject = function toObject(message, options) {
                if (!options) options = {};
                var object = {};
                if (options.defaults)
                    if (options.bytes === String) object.key = "";
                    else {
                        object.key = [];
                        if (options.bytes !== Array)
                            object.key = $util.newBuffer(object.key);
                    }
                if (message.key != null && message.hasOwnProperty("key"))
                    object.key =
                        options.bytes === String
                            ? $util.base64.encode(message.key, 0, message.key.length)
                            : options.bytes === Array
                                ? Array.prototype.slice.call(message.key)
                                : message.key;
                return object;
            };

            /**
             * Converts this PrivKey to JSON.
             * @function toJSON
             * @memberof cosmos.crypto.ed25519.PrivKey
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PrivKey.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return PrivKey;
        })();

        return ed25519;
    })();

    crypto.multisig = (function () {
        /**
         * Namespace multisig.
         * @memberof cosmos.crypto
         * @namespace
         */
        var multisig = {};

        multisig.LegacyAminoPubKey = (function () {
            /**
             * Properties of a LegacyAminoPubKey.
             * @memberof cosmos.crypto.multisig
             * @interface ILegacyAminoPubKey
             * @property {number|null} [threshold] LegacyAminoPubKey threshold
             * @property {Array.<google.protobuf.IAny>|null} [public_keys] LegacyAminoPubKey public_keys
             */

            /**
             * Constructs a new LegacyAminoPubKey.
             * @memberof cosmos.crypto.multisig
             * @classdesc Represents a LegacyAminoPubKey.
             * @implements ILegacyAminoPubKey
             * @constructor
             * @param {cosmos.crypto.multisig.ILegacyAminoPubKey=} [properties] Properties to set
             */
            function LegacyAminoPubKey(properties) {
                this.public_keys = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * LegacyAminoPubKey threshold.
             * @member {number} threshold
             * @memberof cosmos.crypto.multisig.LegacyAminoPubKey
             * @instance
             */
            LegacyAminoPubKey.prototype.threshold = 0;

            /**
             * LegacyAminoPubKey public_keys.
             * @member {Array.<google.protobuf.IAny>} public_keys
             * @memberof cosmos.crypto.multisig.LegacyAminoPubKey
             * @instance
             */
            LegacyAminoPubKey.prototype.public_keys = $util.emptyArray;

            /**
             * Encodes the specified LegacyAminoPubKey message. Does not implicitly {@link cosmos.crypto.multisig.LegacyAminoPubKey.verify|verify} messages.
             * @function encode
             * @memberof cosmos.crypto.multisig.LegacyAminoPubKey
             * @static
             * @param {cosmos.crypto.multisig.ILegacyAminoPubKey} message LegacyAminoPubKey message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LegacyAminoPubKey.encode = function encode(message, writer) {
                if (!writer) writer = $Writer.create();
                if (
                    message.threshold != null &&
                    Object.hasOwnProperty.call(message, "threshold")
                )
                    writer.uint32(/* id 1, wireType 0 =*/ 8).uint32(message.threshold);
                if (message.public_keys != null && message.public_keys.length)
                    for (var i = 0; i < message.public_keys.length; ++i)
                        google.protobuf.Any.encode(
                            message.public_keys[i],
                            writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
                        ).ldelim();
                return writer;
            };

            /**
             * Encodes the specified LegacyAminoPubKey message, length delimited. Does not implicitly {@link cosmos.crypto.multisig.LegacyAminoPubKey.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cosmos.crypto.multisig.LegacyAminoPubKey
             * @static
             * @param {cosmos.crypto.multisig.ILegacyAminoPubKey} message LegacyAminoPubKey message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LegacyAminoPubKey.encodeDelimited = function encodeDelimited(
                message,
                writer
            ) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a LegacyAminoPubKey message from the specified reader or buffer.
             * @function decode
             * @memberof cosmos.crypto.multisig.LegacyAminoPubKey
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cosmos.crypto.multisig.LegacyAminoPubKey} LegacyAminoPubKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LegacyAminoPubKey.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new cosmos.crypto.multisig.LegacyAminoPubKey();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.threshold = reader.uint32();
                            break;
                        case 2:
                            if (!(message.public_keys && message.public_keys.length))
                                message.public_keys = [];
                            message.public_keys.push(
                                google.protobuf.Any.decode(reader, reader.uint32())
                            );
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };

            /**
             * Decodes a LegacyAminoPubKey message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cosmos.crypto.multisig.LegacyAminoPubKey
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cosmos.crypto.multisig.LegacyAminoPubKey} LegacyAminoPubKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LegacyAminoPubKey.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader)) reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a LegacyAminoPubKey message.
             * @function verify
             * @memberof cosmos.crypto.multisig.LegacyAminoPubKey
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            LegacyAminoPubKey.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.threshold != null && message.hasOwnProperty("threshold"))
                    if (!$util.isInteger(message.threshold))
                        return "threshold: integer expected";
                if (
                    message.public_keys != null &&
                    message.hasOwnProperty("public_keys")
                ) {
                    if (!Array.isArray(message.public_keys))
                        return "public_keys: array expected";
                    for (var i = 0; i < message.public_keys.length; ++i) {
                        var error = google.protobuf.Any.verify(
                            message.public_keys[i]
                        );
                        if (error) return "public_keys." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a LegacyAminoPubKey message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cosmos.crypto.multisig.LegacyAminoPubKey
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cosmos.crypto.multisig.LegacyAminoPubKey} LegacyAminoPubKey
             */
            LegacyAminoPubKey.fromObject = function fromObject(object) {
                if (object instanceof cosmos.crypto.multisig.LegacyAminoPubKey)
                    return object;
                var message = new cosmos.crypto.multisig.LegacyAminoPubKey();
                if (object.threshold != null)
                    message.threshold = object.threshold >>> 0;
                if (object.public_keys) {
                    if (!Array.isArray(object.public_keys))
                        throw TypeError(
                            ".cosmos.crypto.multisig.LegacyAminoPubKey.public_keys: array expected"
                        );
                    message.public_keys = [];
                    for (var i = 0; i < object.public_keys.length; ++i) {
                        if (typeof object.public_keys[i] !== "object")
                            throw TypeError(
                                ".cosmos.crypto.multisig.LegacyAminoPubKey.public_keys: object expected"
                            );
                        message.public_keys[i] = google.protobuf.Any.fromObject(
                            object.public_keys[i]
                        );
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a LegacyAminoPubKey message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cosmos.crypto.multisig.LegacyAminoPubKey
             * @static
             * @param {cosmos.crypto.multisig.LegacyAminoPubKey} message LegacyAminoPubKey
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            LegacyAminoPubKey.toObject = function toObject(message, options) {
                if (!options) options = {};
                var object = {};
                if (options.arrays || options.defaults) object.public_keys = [];
                if (options.defaults) object.threshold = 0;
                if (message.threshold != null && message.hasOwnProperty("threshold"))
                    object.threshold = message.threshold;
                if (message.public_keys && message.public_keys.length) {
                    object.public_keys = [];
                    for (var j = 0; j < message.public_keys.length; ++j)
                        object.public_keys[j] = google.protobuf.Any.toObject(
                            message.public_keys[j],
                            options
                        );
                }
                return object;
            };

            /**
             * Converts this LegacyAminoPubKey to JSON.
             * @function toJSON
             * @memberof cosmos.crypto.multisig.LegacyAminoPubKey
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            LegacyAminoPubKey.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return LegacyAminoPubKey;
        })();

        multisig.v1beta1 = (function () {
            /**
             * Namespace v1beta1.
             * @memberof cosmos.crypto.multisig
             * @namespace
             */
            var v1beta1 = {};

            v1beta1.MultiSignature = (function () {
                /**
                 * Properties of a MultiSignature.
                 * @memberof cosmos.crypto.multisig.v1beta1
                 * @interface IMultiSignature
                 * @property {Array.<Uint8Array>|null} [signatures] MultiSignature signatures
                 */

                /**
                 * Constructs a new MultiSignature.
                 * @memberof cosmos.crypto.multisig.v1beta1
                 * @classdesc Represents a MultiSignature.
                 * @implements IMultiSignature
                 * @constructor
                 * @param {cosmos.crypto.multisig.v1beta1.IMultiSignature=} [properties] Properties to set
                 */
                function MultiSignature(properties) {
                    this.signatures = [];
                    if (properties)
                        for (
                            var keys = Object.keys(properties), i = 0;
                            i < keys.length;
                            ++i
                        )
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * MultiSignature signatures.
                 * @member {Array.<Uint8Array>} signatures
                 * @memberof cosmos.crypto.multisig.v1beta1.MultiSignature
                 * @instance
                 */
                MultiSignature.prototype.signatures = $util.emptyArray;

                /**
                 * Encodes the specified MultiSignature message. Does not implicitly {@link cosmos.crypto.multisig.v1beta1.MultiSignature.verify|verify} messages.
                 * @function encode
                 * @memberof cosmos.crypto.multisig.v1beta1.MultiSignature
                 * @static
                 * @param {cosmos.crypto.multisig.v1beta1.IMultiSignature} message MultiSignature message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MultiSignature.encode = function encode(message, writer) {
                    if (!writer) writer = $Writer.create();
                    if (message.signatures != null && message.signatures.length)
                        for (var i = 0; i < message.signatures.length; ++i)
                            writer
                                .uint32(/* id 1, wireType 2 =*/ 10)
                                .bytes(message.signatures[i]);
                    return writer;
                };

                /**
                 * Encodes the specified MultiSignature message, length delimited. Does not implicitly {@link cosmos.crypto.multisig.v1beta1.MultiSignature.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof cosmos.crypto.multisig.v1beta1.MultiSignature
                 * @static
                 * @param {cosmos.crypto.multisig.v1beta1.IMultiSignature} message MultiSignature message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MultiSignature.encodeDelimited = function encodeDelimited(
                    message,
                    writer
                ) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a MultiSignature message from the specified reader or buffer.
                 * @function decode
                 * @memberof cosmos.crypto.multisig.v1beta1.MultiSignature
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {cosmos.crypto.multisig.v1beta1.MultiSignature} MultiSignature
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MultiSignature.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length,
                        message = new cosmos.crypto.multisig.v1beta1.MultiSignature();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                            case 1:
                                if (!(message.signatures && message.signatures.length))
                                    message.signatures = [];
                                message.signatures.push(reader.bytes());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a MultiSignature message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof cosmos.crypto.multisig.v1beta1.MultiSignature
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {cosmos.crypto.multisig.v1beta1.MultiSignature} MultiSignature
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MultiSignature.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader)) reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a MultiSignature message.
                 * @function verify
                 * @memberof cosmos.crypto.multisig.v1beta1.MultiSignature
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                MultiSignature.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (
                        message.signatures != null &&
                        message.hasOwnProperty("signatures")
                    ) {
                        if (!Array.isArray(message.signatures))
                            return "signatures: array expected";
                        for (var i = 0; i < message.signatures.length; ++i)
                            if (
                                !(
                                    (message.signatures[i] &&
                                        typeof message.signatures[i].length === "number") ||
                                    $util.isString(message.signatures[i])
                                )
                            )
                                return "signatures: buffer[] expected";
                    }
                    return null;
                };

                /**
                 * Creates a MultiSignature message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof cosmos.crypto.multisig.v1beta1.MultiSignature
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {cosmos.crypto.multisig.v1beta1.MultiSignature} MultiSignature
                 */
                MultiSignature.fromObject = function fromObject(object) {
                    if (
                        object instanceof
                        cosmos.crypto.multisig.v1beta1.MultiSignature
                    )
                        return object;
                    var message =
                        new cosmos.crypto.multisig.v1beta1.MultiSignature();
                    if (object.signatures) {
                        if (!Array.isArray(object.signatures))
                            throw TypeError(
                                ".cosmos.crypto.multisig.v1beta1.MultiSignature.signatures: array expected"
                            );
                        message.signatures = [];
                        for (var i = 0; i < object.signatures.length; ++i)
                            if (typeof object.signatures[i] === "string")
                                $util.base64.decode(
                                    object.signatures[i],
                                    (message.signatures[i] = $util.newBuffer(
                                        $util.base64.length(object.signatures[i])
                                    )),
                                    0
                                );
                            else if (object.signatures[i].length)
                                message.signatures[i] = object.signatures[i];
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a MultiSignature message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof cosmos.crypto.multisig.v1beta1.MultiSignature
                 * @static
                 * @param {cosmos.crypto.multisig.v1beta1.MultiSignature} message MultiSignature
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                MultiSignature.toObject = function toObject(message, options) {
                    if (!options) options = {};
                    var object = {};
                    if (options.arrays || options.defaults) object.signatures = [];
                    if (message.signatures && message.signatures.length) {
                        object.signatures = [];
                        for (var j = 0; j < message.signatures.length; ++j)
                            object.signatures[j] =
                                options.bytes === String
                                    ? $util.base64.encode(
                                        message.signatures[j],
                                        0,
                                        message.signatures[j].length
                                    )
                                    : options.bytes === Array
                                        ? Array.prototype.slice.call(message.signatures[j])
                                        : message.signatures[j];
                    }
                    return object;
                };

                /**
                 * Converts this MultiSignature to JSON.
                 * @function toJSON
                 * @memberof cosmos.crypto.multisig.v1beta1.MultiSignature
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                MultiSignature.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return MultiSignature;
            })();

            v1beta1.CompactBitArray = (function () {
                /**
                 * Properties of a CompactBitArray.
                 * @memberof cosmos.crypto.multisig.v1beta1
                 * @interface ICompactBitArray
                 * @property {number|null} [extra_bits_stored] CompactBitArray extra_bits_stored
                 * @property {Uint8Array|null} [elems] CompactBitArray elems
                 */

                /**
                 * Constructs a new CompactBitArray.
                 * @memberof cosmos.crypto.multisig.v1beta1
                 * @classdesc Represents a CompactBitArray.
                 * @implements ICompactBitArray
                 * @constructor
                 * @param {cosmos.crypto.multisig.v1beta1.ICompactBitArray=} [properties] Properties to set
                 */
                function CompactBitArray(properties) {
                    if (properties)
                        for (
                            var keys = Object.keys(properties), i = 0;
                            i < keys.length;
                            ++i
                        )
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * CompactBitArray extra_bits_stored.
                 * @member {number} extra_bits_stored
                 * @memberof cosmos.crypto.multisig.v1beta1.CompactBitArray
                 * @instance
                 */
                CompactBitArray.prototype.extra_bits_stored = 0;

                /**
                 * CompactBitArray elems.
                 * @member {Uint8Array} elems
                 * @memberof cosmos.crypto.multisig.v1beta1.CompactBitArray
                 * @instance
                 */
                CompactBitArray.prototype.elems = $util.newBuffer([]);

                /**
                 * Encodes the specified CompactBitArray message. Does not implicitly {@link cosmos.crypto.multisig.v1beta1.CompactBitArray.verify|verify} messages.
                 * @function encode
                 * @memberof cosmos.crypto.multisig.v1beta1.CompactBitArray
                 * @static
                 * @param {cosmos.crypto.multisig.v1beta1.ICompactBitArray} message CompactBitArray message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CompactBitArray.encode = function encode(message, writer) {
                    if (!writer) writer = $Writer.create();
                    if (
                        message.extra_bits_stored != null &&
                        Object.hasOwnProperty.call(message, "extra_bits_stored")
                    )
                        writer
                            .uint32(/* id 1, wireType 0 =*/ 8)
                            .uint32(message.extra_bits_stored);
                    if (
                        message.elems != null &&
                        Object.hasOwnProperty.call(message, "elems")
                    )
                        writer.uint32(/* id 2, wireType 2 =*/ 18).bytes(message.elems);
                    return writer;
                };

                /**
                 * Encodes the specified CompactBitArray message, length delimited. Does not implicitly {@link cosmos.crypto.multisig.v1beta1.CompactBitArray.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof cosmos.crypto.multisig.v1beta1.CompactBitArray
                 * @static
                 * @param {cosmos.crypto.multisig.v1beta1.ICompactBitArray} message CompactBitArray message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CompactBitArray.encodeDelimited = function encodeDelimited(
                    message,
                    writer
                ) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a CompactBitArray message from the specified reader or buffer.
                 * @function decode
                 * @memberof cosmos.crypto.multisig.v1beta1.CompactBitArray
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {cosmos.crypto.multisig.v1beta1.CompactBitArray} CompactBitArray
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CompactBitArray.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length,
                        message =
                            new cosmos.crypto.multisig.v1beta1.CompactBitArray();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                            case 1:
                                message.extra_bits_stored = reader.uint32();
                                break;
                            case 2:
                                message.elems = reader.bytes();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a CompactBitArray message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof cosmos.crypto.multisig.v1beta1.CompactBitArray
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {cosmos.crypto.multisig.v1beta1.CompactBitArray} CompactBitArray
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CompactBitArray.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader)) reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a CompactBitArray message.
                 * @function verify
                 * @memberof cosmos.crypto.multisig.v1beta1.CompactBitArray
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                CompactBitArray.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (
                        message.extra_bits_stored != null &&
                        message.hasOwnProperty("extra_bits_stored")
                    )
                        if (!$util.isInteger(message.extra_bits_stored))
                            return "extra_bits_stored: integer expected";
                    if (message.elems != null && message.hasOwnProperty("elems"))
                        if (
                            !(
                                (message.elems && typeof message.elems.length === "number") ||
                                $util.isString(message.elems)
                            )
                        )
                            return "elems: buffer expected";
                    return null;
                };

                /**
                 * Creates a CompactBitArray message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof cosmos.crypto.multisig.v1beta1.CompactBitArray
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {cosmos.crypto.multisig.v1beta1.CompactBitArray} CompactBitArray
                 */
                CompactBitArray.fromObject = function fromObject(object) {
                    if (
                        object instanceof
                        cosmos.crypto.multisig.v1beta1.CompactBitArray
                    )
                        return object;
                    var message =
                        new cosmos.crypto.multisig.v1beta1.CompactBitArray();
                    if (object.extra_bits_stored != null)
                        message.extra_bits_stored = object.extra_bits_stored >>> 0;
                    if (object.elems != null)
                        if (typeof object.elems === "string")
                            $util.base64.decode(
                                object.elems,
                                (message.elems = $util.newBuffer(
                                    $util.base64.length(object.elems)
                                )),
                                0
                            );
                        else if (object.elems.length) message.elems = object.elems;
                    return message;
                };

                /**
                 * Creates a plain object from a CompactBitArray message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof cosmos.crypto.multisig.v1beta1.CompactBitArray
                 * @static
                 * @param {cosmos.crypto.multisig.v1beta1.CompactBitArray} message CompactBitArray
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                CompactBitArray.toObject = function toObject(message, options) {
                    if (!options) options = {};
                    var object = {};
                    if (options.defaults) {
                        object.extra_bits_stored = 0;
                        if (options.bytes === String) object.elems = "";
                        else {
                            object.elems = [];
                            if (options.bytes !== Array)
                                object.elems = $util.newBuffer(object.elems);
                        }
                    }
                    if (
                        message.extra_bits_stored != null &&
                        message.hasOwnProperty("extra_bits_stored")
                    )
                        object.extra_bits_stored = message.extra_bits_stored;
                    if (message.elems != null && message.hasOwnProperty("elems"))
                        object.elems =
                            options.bytes === String
                                ? $util.base64.encode(message.elems, 0, message.elems.length)
                                : options.bytes === Array
                                    ? Array.prototype.slice.call(message.elems)
                                    : message.elems;
                    return object;
                };

                /**
                 * Converts this CompactBitArray to JSON.
                 * @function toJSON
                 * @memberof cosmos.crypto.multisig.v1beta1.CompactBitArray
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                CompactBitArray.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return CompactBitArray;
            })();

            return v1beta1;
        })();

        return multisig;
    })();

    crypto.secp256k1 = (function () {
        /**
         * Namespace secp256k1.
         * @memberof cosmos.crypto
         * @namespace
         */
        var secp256k1 = {};

        secp256k1.PubKey = (function () {
            /**
             * Properties of a PubKey.
             * @memberof cosmos.crypto.secp256k1
             * @interface IPubKey
             * @property {Uint8Array|null} [key] PubKey key
             */

            /**
             * Constructs a new PubKey.
             * @memberof cosmos.crypto.secp256k1
             * @classdesc Represents a PubKey.
             * @implements IPubKey
             * @constructor
             * @param {cosmos.crypto.secp256k1.IPubKey=} [properties] Properties to set
             */
            function PubKey(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * PubKey key.
             * @member {Uint8Array} key
             * @memberof cosmos.crypto.secp256k1.PubKey
             * @instance
             */
            PubKey.prototype.key = $util.newBuffer([]);

            /**
             * Encodes the specified PubKey message. Does not implicitly {@link cosmos.crypto.secp256k1.PubKey.verify|verify} messages.
             * @function encode
             * @memberof cosmos.crypto.secp256k1.PubKey
             * @static
             * @param {cosmos.crypto.secp256k1.IPubKey} message PubKey message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PubKey.encode = function encode(message, writer) {
                if (!writer) writer = $Writer.create();
                if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                    writer.uint32(/* id 1, wireType 2 =*/ 10).bytes(message.key);
                return writer;
            };

            /**
             * Encodes the specified PubKey message, length delimited. Does not implicitly {@link cosmos.crypto.secp256k1.PubKey.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cosmos.crypto.secp256k1.PubKey
             * @static
             * @param {cosmos.crypto.secp256k1.IPubKey} message PubKey message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PubKey.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a PubKey message from the specified reader or buffer.
             * @function decode
             * @memberof cosmos.crypto.secp256k1.PubKey
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cosmos.crypto.secp256k1.PubKey} PubKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PubKey.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new cosmos.crypto.secp256k1.PubKey();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.key = reader.bytes();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };

            /**
             * Decodes a PubKey message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cosmos.crypto.secp256k1.PubKey
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cosmos.crypto.secp256k1.PubKey} PubKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PubKey.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader)) reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PubKey message.
             * @function verify
             * @memberof cosmos.crypto.secp256k1.PubKey
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PubKey.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.key != null && message.hasOwnProperty("key"))
                    if (
                        !(
                            (message.key && typeof message.key.length === "number") ||
                            $util.isString(message.key)
                        )
                    )
                        return "key: buffer expected";
                return null;
            };

            /**
             * Creates a PubKey message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cosmos.crypto.secp256k1.PubKey
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cosmos.crypto.secp256k1.PubKey} PubKey
             */
            PubKey.fromObject = function fromObject(object) {
                if (object instanceof cosmos.crypto.secp256k1.PubKey)
                    return object;
                var message = new cosmos.crypto.secp256k1.PubKey();
                if (object.key != null)
                    if (typeof object.key === "string")
                        $util.base64.decode(
                            object.key,
                            (message.key = $util.newBuffer($util.base64.length(object.key))),
                            0
                        );
                    else if (object.key.length) message.key = object.key;
                return message;
            };

            /**
             * Creates a plain object from a PubKey message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cosmos.crypto.secp256k1.PubKey
             * @static
             * @param {cosmos.crypto.secp256k1.PubKey} message PubKey
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PubKey.toObject = function toObject(message, options) {
                if (!options) options = {};
                var object = {};
                if (options.defaults)
                    if (options.bytes === String) object.key = "";
                    else {
                        object.key = [];
                        if (options.bytes !== Array)
                            object.key = $util.newBuffer(object.key);
                    }
                if (message.key != null && message.hasOwnProperty("key"))
                    object.key =
                        options.bytes === String
                            ? $util.base64.encode(message.key, 0, message.key.length)
                            : options.bytes === Array
                                ? Array.prototype.slice.call(message.key)
                                : message.key;
                return object;
            };

            /**
             * Converts this PubKey to JSON.
             * @function toJSON
             * @memberof cosmos.crypto.secp256k1.PubKey
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PubKey.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return PubKey;
        })();

        secp256k1.PrivKey = (function () {
            /**
             * Properties of a PrivKey.
             * @memberof cosmos.crypto.secp256k1
             * @interface IPrivKey
             * @property {Uint8Array|null} [key] PrivKey key
             */

            /**
             * Constructs a new PrivKey.
             * @memberof cosmos.crypto.secp256k1
             * @classdesc Represents a PrivKey.
             * @implements IPrivKey
             * @constructor
             * @param {cosmos.crypto.secp256k1.IPrivKey=} [properties] Properties to set
             */
            function PrivKey(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * PrivKey key.
             * @member {Uint8Array} key
             * @memberof cosmos.crypto.secp256k1.PrivKey
             * @instance
             */
            PrivKey.prototype.key = $util.newBuffer([]);

            /**
             * Encodes the specified PrivKey message. Does not implicitly {@link cosmos.crypto.secp256k1.PrivKey.verify|verify} messages.
             * @function encode
             * @memberof cosmos.crypto.secp256k1.PrivKey
             * @static
             * @param {cosmos.crypto.secp256k1.IPrivKey} message PrivKey message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PrivKey.encode = function encode(message, writer) {
                if (!writer) writer = $Writer.create();
                if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                    writer.uint32(/* id 1, wireType 2 =*/ 10).bytes(message.key);
                return writer;
            };

            /**
             * Encodes the specified PrivKey message, length delimited. Does not implicitly {@link cosmos.crypto.secp256k1.PrivKey.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cosmos.crypto.secp256k1.PrivKey
             * @static
             * @param {cosmos.crypto.secp256k1.IPrivKey} message PrivKey message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PrivKey.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a PrivKey message from the specified reader or buffer.
             * @function decode
             * @memberof cosmos.crypto.secp256k1.PrivKey
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cosmos.crypto.secp256k1.PrivKey} PrivKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PrivKey.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new cosmos.crypto.secp256k1.PrivKey();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.key = reader.bytes();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };

            /**
             * Decodes a PrivKey message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cosmos.crypto.secp256k1.PrivKey
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cosmos.crypto.secp256k1.PrivKey} PrivKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PrivKey.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader)) reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PrivKey message.
             * @function verify
             * @memberof cosmos.crypto.secp256k1.PrivKey
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PrivKey.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.key != null && message.hasOwnProperty("key"))
                    if (
                        !(
                            (message.key && typeof message.key.length === "number") ||
                            $util.isString(message.key)
                        )
                    )
                        return "key: buffer expected";
                return null;
            };

            /**
             * Creates a PrivKey message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cosmos.crypto.secp256k1.PrivKey
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cosmos.crypto.secp256k1.PrivKey} PrivKey
             */
            PrivKey.fromObject = function fromObject(object) {
                if (object instanceof cosmos.crypto.secp256k1.PrivKey)
                    return object;
                var message = new cosmos.crypto.secp256k1.PrivKey();
                if (object.key != null)
                    if (typeof object.key === "string")
                        $util.base64.decode(
                            object.key,
                            (message.key = $util.newBuffer($util.base64.length(object.key))),
                            0
                        );
                    else if (object.key.length) message.key = object.key;
                return message;
            };

            /**
             * Creates a plain object from a PrivKey message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cosmos.crypto.secp256k1.PrivKey
             * @static
             * @param {cosmos.crypto.secp256k1.PrivKey} message PrivKey
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PrivKey.toObject = function toObject(message, options) {
                if (!options) options = {};
                var object = {};
                if (options.defaults)
                    if (options.bytes === String) object.key = "";
                    else {
                        object.key = [];
                        if (options.bytes !== Array)
                            object.key = $util.newBuffer(object.key);
                    }
                if (message.key != null && message.hasOwnProperty("key"))
                    object.key =
                        options.bytes === String
                            ? $util.base64.encode(message.key, 0, message.key.length)
                            : options.bytes === Array
                                ? Array.prototype.slice.call(message.key)
                                : message.key;
                return object;
            };

            /**
             * Converts this PrivKey to JSON.
             * @function toJSON
             * @memberof cosmos.crypto.secp256k1.PrivKey
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PrivKey.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return PrivKey;
        })();

        return secp256k1;
    })();

    crypto.secp256r1 = (function () {
        /**
         * Namespace secp256r1.
         * @memberof cosmos.crypto
         * @namespace
         */
        var secp256r1 = {};

        secp256r1.PubKey = (function () {
            /**
             * Properties of a PubKey.
             * @memberof cosmos.crypto.secp256r1
             * @interface IPubKey
             * @property {Uint8Array|null} [key] PubKey key
             */

            /**
             * Constructs a new PubKey.
             * @memberof cosmos.crypto.secp256r1
             * @classdesc Represents a PubKey.
             * @implements IPubKey
             * @constructor
             * @param {cosmos.crypto.secp256r1.IPubKey=} [properties] Properties to set
             */
            function PubKey(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * PubKey key.
             * @member {Uint8Array} key
             * @memberof cosmos.crypto.secp256r1.PubKey
             * @instance
             */
            PubKey.prototype.key = $util.newBuffer([]);

            /**
             * Encodes the specified PubKey message. Does not implicitly {@link cosmos.crypto.secp256r1.PubKey.verify|verify} messages.
             * @function encode
             * @memberof cosmos.crypto.secp256r1.PubKey
             * @static
             * @param {cosmos.crypto.secp256r1.IPubKey} message PubKey message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PubKey.encode = function encode(message, writer) {
                if (!writer) writer = $Writer.create();
                if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                    writer.uint32(/* id 1, wireType 2 =*/ 10).bytes(message.key);
                return writer;
            };

            /**
             * Encodes the specified PubKey message, length delimited. Does not implicitly {@link cosmos.crypto.secp256r1.PubKey.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cosmos.crypto.secp256r1.PubKey
             * @static
             * @param {cosmos.crypto.secp256r1.IPubKey} message PubKey message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PubKey.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a PubKey message from the specified reader or buffer.
             * @function decode
             * @memberof cosmos.crypto.secp256r1.PubKey
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cosmos.crypto.secp256r1.PubKey} PubKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PubKey.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new cosmos.crypto.secp256r1.PubKey();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.key = reader.bytes();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };

            /**
             * Decodes a PubKey message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cosmos.crypto.secp256r1.PubKey
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cosmos.crypto.secp256r1.PubKey} PubKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PubKey.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader)) reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PubKey message.
             * @function verify
             * @memberof cosmos.crypto.secp256r1.PubKey
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PubKey.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.key != null && message.hasOwnProperty("key"))
                    if (
                        !(
                            (message.key && typeof message.key.length === "number") ||
                            $util.isString(message.key)
                        )
                    )
                        return "key: buffer expected";
                return null;
            };

            /**
             * Creates a PubKey message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cosmos.crypto.secp256r1.PubKey
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cosmos.crypto.secp256r1.PubKey} PubKey
             */
            PubKey.fromObject = function fromObject(object) {
                if (object instanceof cosmos.crypto.secp256r1.PubKey)
                    return object;
                var message = new cosmos.crypto.secp256r1.PubKey();
                if (object.key != null)
                    if (typeof object.key === "string")
                        $util.base64.decode(
                            object.key,
                            (message.key = $util.newBuffer($util.base64.length(object.key))),
                            0
                        );
                    else if (object.key.length) message.key = object.key;
                return message;
            };

            /**
             * Creates a plain object from a PubKey message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cosmos.crypto.secp256r1.PubKey
             * @static
             * @param {cosmos.crypto.secp256r1.PubKey} message PubKey
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PubKey.toObject = function toObject(message, options) {
                if (!options) options = {};
                var object = {};
                if (options.defaults)
                    if (options.bytes === String) object.key = "";
                    else {
                        object.key = [];
                        if (options.bytes !== Array)
                            object.key = $util.newBuffer(object.key);
                    }
                if (message.key != null && message.hasOwnProperty("key"))
                    object.key =
                        options.bytes === String
                            ? $util.base64.encode(message.key, 0, message.key.length)
                            : options.bytes === Array
                                ? Array.prototype.slice.call(message.key)
                                : message.key;
                return object;
            };

            /**
             * Converts this PubKey to JSON.
             * @function toJSON
             * @memberof cosmos.crypto.secp256r1.PubKey
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PubKey.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return PubKey;
        })();

        secp256r1.PrivKey = (function () {
            /**
             * Properties of a PrivKey.
             * @memberof cosmos.crypto.secp256r1
             * @interface IPrivKey
             * @property {Uint8Array|null} [secret] PrivKey secret
             */

            /**
             * Constructs a new PrivKey.
             * @memberof cosmos.crypto.secp256r1
             * @classdesc Represents a PrivKey.
             * @implements IPrivKey
             * @constructor
             * @param {cosmos.crypto.secp256r1.IPrivKey=} [properties] Properties to set
             */
            function PrivKey(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * PrivKey secret.
             * @member {Uint8Array} secret
             * @memberof cosmos.crypto.secp256r1.PrivKey
             * @instance
             */
            PrivKey.prototype.secret = $util.newBuffer([]);

            /**
             * Encodes the specified PrivKey message. Does not implicitly {@link cosmos.crypto.secp256r1.PrivKey.verify|verify} messages.
             * @function encode
             * @memberof cosmos.crypto.secp256r1.PrivKey
             * @static
             * @param {cosmos.crypto.secp256r1.IPrivKey} message PrivKey message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PrivKey.encode = function encode(message, writer) {
                if (!writer) writer = $Writer.create();
                if (
                    message.secret != null &&
                    Object.hasOwnProperty.call(message, "secret")
                )
                    writer.uint32(/* id 1, wireType 2 =*/ 10).bytes(message.secret);
                return writer;
            };

            /**
             * Encodes the specified PrivKey message, length delimited. Does not implicitly {@link cosmos.crypto.secp256r1.PrivKey.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cosmos.crypto.secp256r1.PrivKey
             * @static
             * @param {cosmos.crypto.secp256r1.IPrivKey} message PrivKey message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PrivKey.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a PrivKey message from the specified reader or buffer.
             * @function decode
             * @memberof cosmos.crypto.secp256r1.PrivKey
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cosmos.crypto.secp256r1.PrivKey} PrivKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PrivKey.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new cosmos.crypto.secp256r1.PrivKey();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.secret = reader.bytes();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };

            /**
             * Decodes a PrivKey message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cosmos.crypto.secp256r1.PrivKey
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cosmos.crypto.secp256r1.PrivKey} PrivKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PrivKey.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader)) reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PrivKey message.
             * @function verify
             * @memberof cosmos.crypto.secp256r1.PrivKey
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PrivKey.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.secret != null && message.hasOwnProperty("secret"))
                    if (
                        !(
                            (message.secret && typeof message.secret.length === "number") ||
                            $util.isString(message.secret)
                        )
                    )
                        return "secret: buffer expected";
                return null;
            };

            /**
             * Creates a PrivKey message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cosmos.crypto.secp256r1.PrivKey
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cosmos.crypto.secp256r1.PrivKey} PrivKey
             */
            PrivKey.fromObject = function fromObject(object) {
                if (object instanceof cosmos.crypto.secp256r1.PrivKey)
                    return object;
                var message = new cosmos.crypto.secp256r1.PrivKey();
                if (object.secret != null)
                    if (typeof object.secret === "string")
                        $util.base64.decode(
                            object.secret,
                            (message.secret = $util.newBuffer(
                                $util.base64.length(object.secret)
                            )),
                            0
                        );
                    else if (object.secret.length) message.secret = object.secret;
                return message;
            };

            /**
             * Creates a plain object from a PrivKey message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cosmos.crypto.secp256r1.PrivKey
             * @static
             * @param {cosmos.crypto.secp256r1.PrivKey} message PrivKey
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PrivKey.toObject = function toObject(message, options) {
                if (!options) options = {};
                var object = {};
                if (options.defaults)
                    if (options.bytes === String) object.secret = "";
                    else {
                        object.secret = [];
                        if (options.bytes !== Array)
                            object.secret = $util.newBuffer(object.secret);
                    }
                if (message.secret != null && message.hasOwnProperty("secret"))
                    object.secret =
                        options.bytes === String
                            ? $util.base64.encode(message.secret, 0, message.secret.length)
                            : options.bytes === Array
                                ? Array.prototype.slice.call(message.secret)
                                : message.secret;
                return object;
            };

            /**
             * Converts this PrivKey to JSON.
             * @function toJSON
             * @memberof cosmos.crypto.secp256r1.PrivKey
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PrivKey.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return PrivKey;
        })();

        return secp256r1;
    })();

    return crypto;
})();

cosmos.tx = (function () {
    /**
     * Namespace tx.
     * @memberof cosmos
     * @namespace
     */
    var tx = {};

    tx.signing = (function () {
        /**
         * Namespace signing.
         * @memberof cosmos.tx
         * @namespace
         */
        var signing = {};

        signing.v1beta1 = (function () {
            /**
             * Namespace v1beta1.
             * @memberof cosmos.tx.signing
             * @namespace
             */
            var v1beta1 = {};

            /**
             * SignMode enum.
             * @name cosmos.tx.signing.v1beta1.SignMode
             * @enum {number}
             * @property {number} SIGN_MODE_UNSPECIFIED=0 SIGN_MODE_UNSPECIFIED value
             * @property {number} SIGN_MODE_DIRECT=1 SIGN_MODE_DIRECT value
             * @property {number} SIGN_MODE_TEXTUAL=2 SIGN_MODE_TEXTUAL value
             * @property {number} SIGN_MODE_LEGACY_AMINO_JSON=127 SIGN_MODE_LEGACY_AMINO_JSON value
             */
            v1beta1.SignMode = (function () {
                var valuesById = {},
                    values = Object.create(valuesById);
                values[(valuesById[0] = "SIGN_MODE_UNSPECIFIED")] = 0;
                values[(valuesById[1] = "SIGN_MODE_DIRECT")] = 1;
                values[(valuesById[2] = "SIGN_MODE_TEXTUAL")] = 2;
                values[(valuesById[127] = "SIGN_MODE_LEGACY_AMINO_JSON")] = 127;
                return values;
            })();

            v1beta1.SignatureDescriptors = (function () {
                /**
                 * Properties of a SignatureDescriptors.
                 * @memberof cosmos.tx.signing.v1beta1
                 * @interface ISignatureDescriptors
                 * @property {Array.<cosmos.tx.signing.v1beta1.ISignatureDescriptor>|null} [signatures] SignatureDescriptors signatures
                 */

                /**
                 * Constructs a new SignatureDescriptors.
                 * @memberof cosmos.tx.signing.v1beta1
                 * @classdesc Represents a SignatureDescriptors.
                 * @implements ISignatureDescriptors
                 * @constructor
                 * @param {cosmos.tx.signing.v1beta1.ISignatureDescriptors=} [properties] Properties to set
                 */
                function SignatureDescriptors(properties) {
                    this.signatures = [];
                    if (properties)
                        for (
                            var keys = Object.keys(properties), i = 0;
                            i < keys.length;
                            ++i
                        )
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * SignatureDescriptors signatures.
                 * @member {Array.<cosmos.tx.signing.v1beta1.ISignatureDescriptor>} signatures
                 * @memberof cosmos.tx.signing.v1beta1.SignatureDescriptors
                 * @instance
                 */
                SignatureDescriptors.prototype.signatures = $util.emptyArray;

                /**
                 * Encodes the specified SignatureDescriptors message. Does not implicitly {@link cosmos.tx.signing.v1beta1.SignatureDescriptors.verify|verify} messages.
                 * @function encode
                 * @memberof cosmos.tx.signing.v1beta1.SignatureDescriptors
                 * @static
                 * @param {cosmos.tx.signing.v1beta1.ISignatureDescriptors} message SignatureDescriptors message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SignatureDescriptors.encode = function encode(message, writer) {
                    if (!writer) writer = $Writer.create();
                    if (message.signatures != null && message.signatures.length)
                        for (var i = 0; i < message.signatures.length; ++i)
                            cosmos.tx.signing.v1beta1.SignatureDescriptor.encode(
                                message.signatures[i],
                                writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
                            ).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified SignatureDescriptors message, length delimited. Does not implicitly {@link cosmos.tx.signing.v1beta1.SignatureDescriptors.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof cosmos.tx.signing.v1beta1.SignatureDescriptors
                 * @static
                 * @param {cosmos.tx.signing.v1beta1.ISignatureDescriptors} message SignatureDescriptors message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SignatureDescriptors.encodeDelimited = function encodeDelimited(
                    message,
                    writer
                ) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a SignatureDescriptors message from the specified reader or buffer.
                 * @function decode
                 * @memberof cosmos.tx.signing.v1beta1.SignatureDescriptors
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {cosmos.tx.signing.v1beta1.SignatureDescriptors} SignatureDescriptors
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SignatureDescriptors.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length,
                        message =
                            new cosmos.tx.signing.v1beta1.SignatureDescriptors();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                            case 1:
                                if (!(message.signatures && message.signatures.length))
                                    message.signatures = [];
                                message.signatures.push(
                                    cosmos.tx.signing.v1beta1.SignatureDescriptor.decode(
                                        reader,
                                        reader.uint32()
                                    )
                                );
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a SignatureDescriptors message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof cosmos.tx.signing.v1beta1.SignatureDescriptors
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {cosmos.tx.signing.v1beta1.SignatureDescriptors} SignatureDescriptors
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SignatureDescriptors.decodeDelimited = function decodeDelimited(
                    reader
                ) {
                    if (!(reader instanceof $Reader)) reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a SignatureDescriptors message.
                 * @function verify
                 * @memberof cosmos.tx.signing.v1beta1.SignatureDescriptors
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                SignatureDescriptors.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (
                        message.signatures != null &&
                        message.hasOwnProperty("signatures")
                    ) {
                        if (!Array.isArray(message.signatures))
                            return "signatures: array expected";
                        for (var i = 0; i < message.signatures.length; ++i) {
                            var error =
                                cosmos.tx.signing.v1beta1.SignatureDescriptor.verify(
                                    message.signatures[i]
                                );
                            if (error) return "signatures." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a SignatureDescriptors message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof cosmos.tx.signing.v1beta1.SignatureDescriptors
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {cosmos.tx.signing.v1beta1.SignatureDescriptors} SignatureDescriptors
                 */
                SignatureDescriptors.fromObject = function fromObject(object) {
                    if (
                        object instanceof
                        cosmos.tx.signing.v1beta1.SignatureDescriptors
                    )
                        return object;
                    var message =
                        new cosmos.tx.signing.v1beta1.SignatureDescriptors();
                    if (object.signatures) {
                        if (!Array.isArray(object.signatures))
                            throw TypeError(
                                ".cosmos.tx.signing.v1beta1.SignatureDescriptors.signatures: array expected"
                            );
                        message.signatures = [];
                        for (var i = 0; i < object.signatures.length; ++i) {
                            if (typeof object.signatures[i] !== "object")
                                throw TypeError(
                                    ".cosmos.tx.signing.v1beta1.SignatureDescriptors.signatures: object expected"
                                );
                            message.signatures[i] =
                                cosmos.tx.signing.v1beta1.SignatureDescriptor.fromObject(
                                    object.signatures[i]
                                );
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a SignatureDescriptors message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof cosmos.tx.signing.v1beta1.SignatureDescriptors
                 * @static
                 * @param {cosmos.tx.signing.v1beta1.SignatureDescriptors} message SignatureDescriptors
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                SignatureDescriptors.toObject = function toObject(message, options) {
                    if (!options) options = {};
                    var object = {};
                    if (options.arrays || options.defaults) object.signatures = [];
                    if (message.signatures && message.signatures.length) {
                        object.signatures = [];
                        for (var j = 0; j < message.signatures.length; ++j)
                            object.signatures[j] =
                                cosmos.tx.signing.v1beta1.SignatureDescriptor.toObject(
                                    message.signatures[j],
                                    options
                                );
                    }
                    return object;
                };

                /**
                 * Converts this SignatureDescriptors to JSON.
                 * @function toJSON
                 * @memberof cosmos.tx.signing.v1beta1.SignatureDescriptors
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                SignatureDescriptors.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return SignatureDescriptors;
            })();

            v1beta1.SignatureDescriptor = (function () {
                /**
                 * Properties of a SignatureDescriptor.
                 * @memberof cosmos.tx.signing.v1beta1
                 * @interface ISignatureDescriptor
                 * @property {google.protobuf.IAny|null} [public_key] SignatureDescriptor public_key
                 * @property {cosmos.tx.signing.v1beta1.SignatureDescriptor.IData|null} [data] SignatureDescriptor data
                 * @property {Long|null} [sequence] SignatureDescriptor sequence
                 */

                /**
                 * Constructs a new SignatureDescriptor.
                 * @memberof cosmos.tx.signing.v1beta1
                 * @classdesc Represents a SignatureDescriptor.
                 * @implements ISignatureDescriptor
                 * @constructor
                 * @param {cosmos.tx.signing.v1beta1.ISignatureDescriptor=} [properties] Properties to set
                 */
                function SignatureDescriptor(properties) {
                    if (properties)
                        for (
                            var keys = Object.keys(properties), i = 0;
                            i < keys.length;
                            ++i
                        )
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * SignatureDescriptor public_key.
                 * @member {google.protobuf.IAny|null|undefined} public_key
                 * @memberof cosmos.tx.signing.v1beta1.SignatureDescriptor
                 * @instance
                 */
                SignatureDescriptor.prototype.public_key = null;

                /**
                 * SignatureDescriptor data.
                 * @member {cosmos.tx.signing.v1beta1.SignatureDescriptor.IData|null|undefined} data
                 * @memberof cosmos.tx.signing.v1beta1.SignatureDescriptor
                 * @instance
                 */
                SignatureDescriptor.prototype.data = null;

                /**
                 * SignatureDescriptor sequence.
                 * @member {Long} sequence
                 * @memberof cosmos.tx.signing.v1beta1.SignatureDescriptor
                 * @instance
                 */
                SignatureDescriptor.prototype.sequence = $util.Long
                    ? $util.Long.fromBits(0, 0, true)
                    : 0;

                /**
                 * Encodes the specified SignatureDescriptor message. Does not implicitly {@link cosmos.tx.signing.v1beta1.SignatureDescriptor.verify|verify} messages.
                 * @function encode
                 * @memberof cosmos.tx.signing.v1beta1.SignatureDescriptor
                 * @static
                 * @param {cosmos.tx.signing.v1beta1.ISignatureDescriptor} message SignatureDescriptor message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SignatureDescriptor.encode = function encode(message, writer) {
                    if (!writer) writer = $Writer.create();
                    if (
                        message.public_key != null &&
                        Object.hasOwnProperty.call(message, "public_key")
                    )
                        google.protobuf.Any.encode(
                            message.public_key,
                            writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
                        ).ldelim();
                    if (
                        message.data != null &&
                        Object.hasOwnProperty.call(message, "data")
                    )
                        cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.encode(
                            message.data,
                            writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
                        ).ldelim();
                    if (
                        message.sequence != null &&
                        Object.hasOwnProperty.call(message, "sequence")
                    )
                        writer.uint32(/* id 3, wireType 0 =*/ 24).uint64(message.sequence);
                    return writer;
                };

                /**
                 * Encodes the specified SignatureDescriptor message, length delimited. Does not implicitly {@link cosmos.tx.signing.v1beta1.SignatureDescriptor.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof cosmos.tx.signing.v1beta1.SignatureDescriptor
                 * @static
                 * @param {cosmos.tx.signing.v1beta1.ISignatureDescriptor} message SignatureDescriptor message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SignatureDescriptor.encodeDelimited = function encodeDelimited(
                    message,
                    writer
                ) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a SignatureDescriptor message from the specified reader or buffer.
                 * @function decode
                 * @memberof cosmos.tx.signing.v1beta1.SignatureDescriptor
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {cosmos.tx.signing.v1beta1.SignatureDescriptor} SignatureDescriptor
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SignatureDescriptor.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length,
                        message = new cosmos.tx.signing.v1beta1.SignatureDescriptor();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                            case 1:
                                message.public_key = google.protobuf.Any.decode(
                                    reader,
                                    reader.uint32()
                                );
                                break;
                            case 2:
                                message.data =
                                    cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.decode(
                                        reader,
                                        reader.uint32()
                                    );
                                break;
                            case 3:
                                message.sequence = reader.uint64();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a SignatureDescriptor message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof cosmos.tx.signing.v1beta1.SignatureDescriptor
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {cosmos.tx.signing.v1beta1.SignatureDescriptor} SignatureDescriptor
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SignatureDescriptor.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader)) reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a SignatureDescriptor message.
                 * @function verify
                 * @memberof cosmos.tx.signing.v1beta1.SignatureDescriptor
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                SignatureDescriptor.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (
                        message.public_key != null &&
                        message.hasOwnProperty("public_key")
                    ) {
                        var error = google.protobuf.Any.verify(message.public_key);
                        if (error) return "public_key." + error;
                    }
                    if (message.data != null && message.hasOwnProperty("data")) {
                        var error =
                            cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.verify(
                                message.data
                            );
                        if (error) return "data." + error;
                    }
                    if (message.sequence != null && message.hasOwnProperty("sequence"))
                        if (
                            !$util.isInteger(message.sequence) &&
                            !(
                                message.sequence &&
                                $util.isInteger(message.sequence.low) &&
                                $util.isInteger(message.sequence.high)
                            )
                        )
                            return "sequence: integer|Long expected";
                    return null;
                };

                /**
                 * Creates a SignatureDescriptor message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof cosmos.tx.signing.v1beta1.SignatureDescriptor
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {cosmos.tx.signing.v1beta1.SignatureDescriptor} SignatureDescriptor
                 */
                SignatureDescriptor.fromObject = function fromObject(object) {
                    if (
                        object instanceof
                        cosmos.tx.signing.v1beta1.SignatureDescriptor
                    )
                        return object;
                    var message =
                        new cosmos.tx.signing.v1beta1.SignatureDescriptor();
                    if (object.public_key != null) {
                        if (typeof object.public_key !== "object")
                            throw TypeError(
                                ".cosmos.tx.signing.v1beta1.SignatureDescriptor.public_key: object expected"
                            );
                        message.public_key = google.protobuf.Any.fromObject(
                            object.public_key
                        );
                    }
                    if (object.data != null) {
                        if (typeof object.data !== "object")
                            throw TypeError(
                                ".cosmos.tx.signing.v1beta1.SignatureDescriptor.data: object expected"
                            );
                        message.data =
                            cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.fromObject(
                                object.data
                            );
                    }
                    if (object.sequence != null)
                        if ($util.Long)
                            (message.sequence = $util.Long.fromValue(
                                object.sequence
                            )).unsigned = true;
                        else if (typeof object.sequence === "string")
                            message.sequence = parseInt(object.sequence, 10);
                        else if (typeof object.sequence === "number")
                            message.sequence = object.sequence;
                        else if (typeof object.sequence === "object")
                            message.sequence = new $util.LongBits(
                                object.sequence.low >>> 0,
                                object.sequence.high >>> 0
                            ).toNumber(true);
                    return message;
                };

                /**
                 * Creates a plain object from a SignatureDescriptor message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof cosmos.tx.signing.v1beta1.SignatureDescriptor
                 * @static
                 * @param {cosmos.tx.signing.v1beta1.SignatureDescriptor} message SignatureDescriptor
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                SignatureDescriptor.toObject = function toObject(message, options) {
                    if (!options) options = {};
                    var object = {};
                    if (options.defaults) {
                        object.public_key = null;
                        object.data = null;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.sequence =
                                options.longs === String
                                    ? long.toString()
                                    : options.longs === Number
                                        ? long.toNumber()
                                        : long;
                        } else object.sequence = options.longs === String ? "0" : 0;
                    }
                    if (
                        message.public_key != null &&
                        message.hasOwnProperty("public_key")
                    )
                        object.public_key = google.protobuf.Any.toObject(
                            message.public_key,
                            options
                        );
                    if (message.data != null && message.hasOwnProperty("data"))
                        object.data =
                            cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.toObject(
                                message.data,
                                options
                            );
                    if (message.sequence != null && message.hasOwnProperty("sequence"))
                        if (typeof message.sequence === "number")
                            object.sequence =
                                options.longs === String
                                    ? String(message.sequence)
                                    : message.sequence;
                        else
                            object.sequence =
                                options.longs === String
                                    ? $util.Long.prototype.toString.call(message.sequence)
                                    : options.longs === Number
                                        ? new $util.LongBits(
                                            message.sequence.low >>> 0,
                                            message.sequence.high >>> 0
                                        ).toNumber(true)
                                        : message.sequence;
                    return object;
                };

                /**
                 * Converts this SignatureDescriptor to JSON.
                 * @function toJSON
                 * @memberof cosmos.tx.signing.v1beta1.SignatureDescriptor
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                SignatureDescriptor.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                SignatureDescriptor.Data = (function () {
                    /**
                     * Properties of a Data.
                     * @memberof cosmos.tx.signing.v1beta1.SignatureDescriptor
                     * @interface IData
                     * @property {cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.ISingle|null} [single] Data single
                     * @property {cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.IMulti|null} [multi] Data multi
                     */

                    /**
                     * Constructs a new Data.
                     * @memberof cosmos.tx.signing.v1beta1.SignatureDescriptor
                     * @classdesc Represents a Data.
                     * @implements IData
                     * @constructor
                     * @param {cosmos.tx.signing.v1beta1.SignatureDescriptor.IData=} [properties] Properties to set
                     */
                    function Data(properties) {
                        if (properties)
                            for (
                                var keys = Object.keys(properties), i = 0;
                                i < keys.length;
                                ++i
                            )
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Data single.
                     * @member {cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.ISingle|null|undefined} single
                     * @memberof cosmos.tx.signing.v1beta1.SignatureDescriptor.Data
                     * @instance
                     */
                    Data.prototype.single = null;

                    /**
                     * Data multi.
                     * @member {cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.IMulti|null|undefined} multi
                     * @memberof cosmos.tx.signing.v1beta1.SignatureDescriptor.Data
                     * @instance
                     */
                    Data.prototype.multi = null;

                    // OneOf field names bound to virtual getters and setters
                    var $oneOfFields;

                    /**
                     * Data sum.
                     * @member {"single"|"multi"|undefined} sum
                     * @memberof cosmos.tx.signing.v1beta1.SignatureDescriptor.Data
                     * @instance
                     */
                    Object.defineProperty(Data.prototype, "sum", {
                        get: $util.oneOfGetter(($oneOfFields = ["single", "multi"])),
                        set: $util.oneOfSetter($oneOfFields),
                    });

                    /**
                     * Encodes the specified Data message. Does not implicitly {@link cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.verify|verify} messages.
                     * @function encode
                     * @memberof cosmos.tx.signing.v1beta1.SignatureDescriptor.Data
                     * @static
                     * @param {cosmos.tx.signing.v1beta1.SignatureDescriptor.IData} message Data message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Data.encode = function encode(message, writer) {
                        if (!writer) writer = $Writer.create();
                        if (
                            message.single != null &&
                            Object.hasOwnProperty.call(message, "single")
                        )
                            cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Single.encode(
                                message.single,
                                writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
                            ).ldelim();
                        if (
                            message.multi != null &&
                            Object.hasOwnProperty.call(message, "multi")
                        )
                            cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Multi.encode(
                                message.multi,
                                writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
                            ).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified Data message, length delimited. Does not implicitly {@link cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof cosmos.tx.signing.v1beta1.SignatureDescriptor.Data
                     * @static
                     * @param {cosmos.tx.signing.v1beta1.SignatureDescriptor.IData} message Data message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Data.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Data message from the specified reader or buffer.
                     * @function decode
                     * @memberof cosmos.tx.signing.v1beta1.SignatureDescriptor.Data
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {cosmos.tx.signing.v1beta1.SignatureDescriptor.Data} Data
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Data.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length,
                            message =
                                new cosmos.tx.signing.v1beta1.SignatureDescriptor.Data();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                                case 1:
                                    message.single =
                                        cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Single.decode(
                                            reader,
                                            reader.uint32()
                                        );
                                    break;
                                case 2:
                                    message.multi =
                                        cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Multi.decode(
                                            reader,
                                            reader.uint32()
                                        );
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Data message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof cosmos.tx.signing.v1beta1.SignatureDescriptor.Data
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {cosmos.tx.signing.v1beta1.SignatureDescriptor.Data} Data
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Data.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Data message.
                     * @function verify
                     * @memberof cosmos.tx.signing.v1beta1.SignatureDescriptor.Data
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Data.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        var properties = {};
                        if (message.single != null && message.hasOwnProperty("single")) {
                            properties.sum = 1;
                            {
                                var error =
                                    cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Single.verify(
                                        message.single
                                    );
                                if (error) return "single." + error;
                            }
                        }
                        if (message.multi != null && message.hasOwnProperty("multi")) {
                            if (properties.sum === 1) return "sum: multiple values";
                            properties.sum = 1;
                            {
                                var error =
                                    cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Multi.verify(
                                        message.multi
                                    );
                                if (error) return "multi." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a Data message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof cosmos.tx.signing.v1beta1.SignatureDescriptor.Data
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {cosmos.tx.signing.v1beta1.SignatureDescriptor.Data} Data
                     */
                    Data.fromObject = function fromObject(object) {
                        if (
                            object instanceof
                            cosmos.tx.signing.v1beta1.SignatureDescriptor.Data
                        )
                            return object;
                        var message =
                            new cosmos.tx.signing.v1beta1.SignatureDescriptor.Data();
                        if (object.single != null) {
                            if (typeof object.single !== "object")
                                throw TypeError(
                                    ".cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.single: object expected"
                                );
                            message.single =
                                cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Single.fromObject(
                                    object.single
                                );
                        }
                        if (object.multi != null) {
                            if (typeof object.multi !== "object")
                                throw TypeError(
                                    ".cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.multi: object expected"
                                );
                            message.multi =
                                cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Multi.fromObject(
                                    object.multi
                                );
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a Data message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof cosmos.tx.signing.v1beta1.SignatureDescriptor.Data
                     * @static
                     * @param {cosmos.tx.signing.v1beta1.SignatureDescriptor.Data} message Data
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Data.toObject = function toObject(message, options) {
                        if (!options) options = {};
                        var object = {};
                        if (message.single != null && message.hasOwnProperty("single")) {
                            object.single =
                                cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Single.toObject(
                                    message.single,
                                    options
                                );
                            if (options.oneofs) object.sum = "single";
                        }
                        if (message.multi != null && message.hasOwnProperty("multi")) {
                            object.multi =
                                cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Multi.toObject(
                                    message.multi,
                                    options
                                );
                            if (options.oneofs) object.sum = "multi";
                        }
                        return object;
                    };

                    /**
                     * Converts this Data to JSON.
                     * @function toJSON
                     * @memberof cosmos.tx.signing.v1beta1.SignatureDescriptor.Data
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Data.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(
                            this,
                            $protobuf.util.toJSONOptions
                        );
                    };

                    Data.Single = (function () {
                        /**
                         * Properties of a Single.
                         * @memberof cosmos.tx.signing.v1beta1.SignatureDescriptor.Data
                         * @interface ISingle
                         * @property {cosmos.tx.signing.v1beta1.SignMode|null} [mode] Single mode
                         * @property {Uint8Array|null} [signature] Single signature
                         */

                        /**
                         * Constructs a new Single.
                         * @memberof cosmos.tx.signing.v1beta1.SignatureDescriptor.Data
                         * @classdesc Represents a Single.
                         * @implements ISingle
                         * @constructor
                         * @param {cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.ISingle=} [properties] Properties to set
                         */
                        function Single(properties) {
                            if (properties)
                                for (
                                    var keys = Object.keys(properties), i = 0;
                                    i < keys.length;
                                    ++i
                                )
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * Single mode.
                         * @member {cosmos.tx.signing.v1beta1.SignMode} mode
                         * @memberof cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Single
                         * @instance
                         */
                        Single.prototype.mode = 0;

                        /**
                         * Single signature.
                         * @member {Uint8Array} signature
                         * @memberof cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Single
                         * @instance
                         */
                        Single.prototype.signature = $util.newBuffer([]);

                        /**
                         * Encodes the specified Single message. Does not implicitly {@link cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Single.verify|verify} messages.
                         * @function encode
                         * @memberof cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Single
                         * @static
                         * @param {cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.ISingle} message Single message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Single.encode = function encode(message, writer) {
                            if (!writer) writer = $Writer.create();
                            if (
                                message.mode != null &&
                                Object.hasOwnProperty.call(message, "mode")
                            )
                                writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.mode);
                            if (
                                message.signature != null &&
                                Object.hasOwnProperty.call(message, "signature")
                            )
                                writer
                                    .uint32(/* id 2, wireType 2 =*/ 18)
                                    .bytes(message.signature);
                            return writer;
                        };

                        /**
                         * Encodes the specified Single message, length delimited. Does not implicitly {@link cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Single.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Single
                         * @static
                         * @param {cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.ISingle} message Single message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Single.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a Single message from the specified reader or buffer.
                         * @function decode
                         * @memberof cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Single
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Single} Single
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Single.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length,
                                message =
                                    new cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Single();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                    case 1:
                                        message.mode = reader.int32();
                                        break;
                                    case 2:
                                        message.signature = reader.bytes();
                                        break;
                                    default:
                                        reader.skipType(tag & 7);
                                        break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a Single message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Single
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Single} Single
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Single.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader)) reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a Single message.
                         * @function verify
                         * @memberof cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Single
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        Single.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.mode != null && message.hasOwnProperty("mode"))
                                switch (message.mode) {
                                    default:
                                        return "mode: enum value expected";
                                    case 0:
                                    case 1:
                                    case 2:
                                    case 127:
                                        break;
                                }
                            if (
                                message.signature != null &&
                                message.hasOwnProperty("signature")
                            )
                                if (
                                    !(
                                        (message.signature &&
                                            typeof message.signature.length === "number") ||
                                        $util.isString(message.signature)
                                    )
                                )
                                    return "signature: buffer expected";
                            return null;
                        };

                        /**
                         * Creates a Single message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Single
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Single} Single
                         */
                        Single.fromObject = function fromObject(object) {
                            if (
                                object instanceof
                                cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Single
                            )
                                return object;
                            var message =
                                new cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Single();
                            switch (object.mode) {
                                case "SIGN_MODE_UNSPECIFIED":
                                case 0:
                                    message.mode = 0;
                                    break;
                                case "SIGN_MODE_DIRECT":
                                case 1:
                                    message.mode = 1;
                                    break;
                                case "SIGN_MODE_TEXTUAL":
                                case 2:
                                    message.mode = 2;
                                    break;
                                case "SIGN_MODE_LEGACY_AMINO_JSON":
                                case 127:
                                    message.mode = 127;
                                    break;
                            }
                            if (object.signature != null)
                                if (typeof object.signature === "string")
                                    $util.base64.decode(
                                        object.signature,
                                        (message.signature = $util.newBuffer(
                                            $util.base64.length(object.signature)
                                        )),
                                        0
                                    );
                                else if (object.signature.length)
                                    message.signature = object.signature;
                            return message;
                        };

                        /**
                         * Creates a plain object from a Single message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Single
                         * @static
                         * @param {cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Single} message Single
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        Single.toObject = function toObject(message, options) {
                            if (!options) options = {};
                            var object = {};
                            if (options.defaults) {
                                object.mode =
                                    options.enums === String ? "SIGN_MODE_UNSPECIFIED" : 0;
                                if (options.bytes === String) object.signature = "";
                                else {
                                    object.signature = [];
                                    if (options.bytes !== Array)
                                        object.signature = $util.newBuffer(object.signature);
                                }
                            }
                            if (message.mode != null && message.hasOwnProperty("mode"))
                                object.mode =
                                    options.enums === String
                                        ? cosmos.tx.signing.v1beta1.SignMode[message.mode]
                                        : message.mode;
                            if (
                                message.signature != null &&
                                message.hasOwnProperty("signature")
                            )
                                object.signature =
                                    options.bytes === String
                                        ? $util.base64.encode(
                                            message.signature,
                                            0,
                                            message.signature.length
                                        )
                                        : options.bytes === Array
                                            ? Array.prototype.slice.call(message.signature)
                                            : message.signature;
                            return object;
                        };

                        /**
                         * Converts this Single to JSON.
                         * @function toJSON
                         * @memberof cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Single
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        Single.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(
                                this,
                                $protobuf.util.toJSONOptions
                            );
                        };

                        return Single;
                    })();

                    Data.Multi = (function () {
                        /**
                         * Properties of a Multi.
                         * @memberof cosmos.tx.signing.v1beta1.SignatureDescriptor.Data
                         * @interface IMulti
                         * @property {cosmos.crypto.multisig.v1beta1.ICompactBitArray|null} [bitarray] Multi bitarray
                         * @property {Array.<cosmos.tx.signing.v1beta1.SignatureDescriptor.IData>|null} [signatures] Multi signatures
                         */

                        /**
                         * Constructs a new Multi.
                         * @memberof cosmos.tx.signing.v1beta1.SignatureDescriptor.Data
                         * @classdesc Represents a Multi.
                         * @implements IMulti
                         * @constructor
                         * @param {cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.IMulti=} [properties] Properties to set
                         */
                        function Multi(properties) {
                            this.signatures = [];
                            if (properties)
                                for (
                                    var keys = Object.keys(properties), i = 0;
                                    i < keys.length;
                                    ++i
                                )
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * Multi bitarray.
                         * @member {cosmos.crypto.multisig.v1beta1.ICompactBitArray|null|undefined} bitarray
                         * @memberof cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Multi
                         * @instance
                         */
                        Multi.prototype.bitarray = null;

                        /**
                         * Multi signatures.
                         * @member {Array.<cosmos.tx.signing.v1beta1.SignatureDescriptor.IData>} signatures
                         * @memberof cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Multi
                         * @instance
                         */
                        Multi.prototype.signatures = $util.emptyArray;

                        /**
                         * Encodes the specified Multi message. Does not implicitly {@link cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Multi.verify|verify} messages.
                         * @function encode
                         * @memberof cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Multi
                         * @static
                         * @param {cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.IMulti} message Multi message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Multi.encode = function encode(message, writer) {
                            if (!writer) writer = $Writer.create();
                            if (
                                message.bitarray != null &&
                                Object.hasOwnProperty.call(message, "bitarray")
                            )
                                cosmos.crypto.multisig.v1beta1.CompactBitArray.encode(
                                    message.bitarray,
                                    writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
                                ).ldelim();
                            if (message.signatures != null && message.signatures.length)
                                for (var i = 0; i < message.signatures.length; ++i)
                                    cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.encode(
                                        message.signatures[i],
                                        writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
                                    ).ldelim();
                            return writer;
                        };

                        /**
                         * Encodes the specified Multi message, length delimited. Does not implicitly {@link cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Multi.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Multi
                         * @static
                         * @param {cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.IMulti} message Multi message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Multi.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a Multi message from the specified reader or buffer.
                         * @function decode
                         * @memberof cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Multi
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Multi} Multi
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Multi.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length,
                                message =
                                    new cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Multi();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                    case 1:
                                        message.bitarray =
                                            cosmos.crypto.multisig.v1beta1.CompactBitArray.decode(
                                                reader,
                                                reader.uint32()
                                            );
                                        break;
                                    case 2:
                                        if (!(message.signatures && message.signatures.length))
                                            message.signatures = [];
                                        message.signatures.push(
                                            cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.decode(
                                                reader,
                                                reader.uint32()
                                            )
                                        );
                                        break;
                                    default:
                                        reader.skipType(tag & 7);
                                        break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a Multi message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Multi
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Multi} Multi
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Multi.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader)) reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a Multi message.
                         * @function verify
                         * @memberof cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Multi
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        Multi.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (
                                message.bitarray != null &&
                                message.hasOwnProperty("bitarray")
                            ) {
                                var error =
                                    cosmos.crypto.multisig.v1beta1.CompactBitArray.verify(
                                        message.bitarray
                                    );
                                if (error) return "bitarray." + error;
                            }
                            if (
                                message.signatures != null &&
                                message.hasOwnProperty("signatures")
                            ) {
                                if (!Array.isArray(message.signatures))
                                    return "signatures: array expected";
                                for (var i = 0; i < message.signatures.length; ++i) {
                                    var error =
                                        cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.verify(
                                            message.signatures[i]
                                        );
                                    if (error) return "signatures." + error;
                                }
                            }
                            return null;
                        };

                        /**
                         * Creates a Multi message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Multi
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Multi} Multi
                         */
                        Multi.fromObject = function fromObject(object) {
                            if (
                                object instanceof
                                cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Multi
                            )
                                return object;
                            var message =
                                new cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Multi();
                            if (object.bitarray != null) {
                                if (typeof object.bitarray !== "object")
                                    throw TypeError(
                                        ".cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Multi.bitarray: object expected"
                                    );
                                message.bitarray =
                                    cosmos.crypto.multisig.v1beta1.CompactBitArray.fromObject(
                                        object.bitarray
                                    );
                            }
                            if (object.signatures) {
                                if (!Array.isArray(object.signatures))
                                    throw TypeError(
                                        ".cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Multi.signatures: array expected"
                                    );
                                message.signatures = [];
                                for (var i = 0; i < object.signatures.length; ++i) {
                                    if (typeof object.signatures[i] !== "object")
                                        throw TypeError(
                                            ".cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Multi.signatures: object expected"
                                        );
                                    message.signatures[i] =
                                        cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.fromObject(
                                            object.signatures[i]
                                        );
                                }
                            }
                            return message;
                        };

                        /**
                         * Creates a plain object from a Multi message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Multi
                         * @static
                         * @param {cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Multi} message Multi
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        Multi.toObject = function toObject(message, options) {
                            if (!options) options = {};
                            var object = {};
                            if (options.arrays || options.defaults) object.signatures = [];
                            if (options.defaults) object.bitarray = null;
                            if (
                                message.bitarray != null &&
                                message.hasOwnProperty("bitarray")
                            )
                                object.bitarray =
                                    cosmos.crypto.multisig.v1beta1.CompactBitArray.toObject(
                                        message.bitarray,
                                        options
                                    );
                            if (message.signatures && message.signatures.length) {
                                object.signatures = [];
                                for (var j = 0; j < message.signatures.length; ++j)
                                    object.signatures[j] =
                                        cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.toObject(
                                            message.signatures[j],
                                            options
                                        );
                            }
                            return object;
                        };

                        /**
                         * Converts this Multi to JSON.
                         * @function toJSON
                         * @memberof cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Multi
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        Multi.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(
                                this,
                                $protobuf.util.toJSONOptions
                            );
                        };

                        return Multi;
                    })();

                    return Data;
                })();

                return SignatureDescriptor;
            })();

            return v1beta1;
        })();

        return signing;
    })();

    tx.v1beta1 = (function () {
        /**
         * Namespace v1beta1.
         * @memberof cosmos.tx
         * @namespace
         */
        var v1beta1 = {};

        v1beta1.Tx = (function () {
            /**
             * Properties of a Tx.
             * @memberof cosmos.tx.v1beta1
             * @interface ITx
             * @property {cosmos.tx.v1beta1.ITxBody|null} [body] Tx body
             * @property {cosmos.tx.v1beta1.IAuthInfo|null} [auth_info] Tx auth_info
             * @property {Array.<Uint8Array>|null} [signatures] Tx signatures
             */

            /**
             * Constructs a new Tx.
             * @memberof cosmos.tx.v1beta1
             * @classdesc Represents a Tx.
             * @implements ITx
             * @constructor
             * @param {cosmos.tx.v1beta1.ITx=} [properties] Properties to set
             */
            function Tx(properties) {
                this.signatures = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Tx body.
             * @member {cosmos.tx.v1beta1.ITxBody|null|undefined} body
             * @memberof cosmos.tx.v1beta1.Tx
             * @instance
             */
            Tx.prototype.body = null;

            /**
             * Tx auth_info.
             * @member {cosmos.tx.v1beta1.IAuthInfo|null|undefined} auth_info
             * @memberof cosmos.tx.v1beta1.Tx
             * @instance
             */
            Tx.prototype.auth_info = null;

            /**
             * Tx signatures.
             * @member {Array.<Uint8Array>} signatures
             * @memberof cosmos.tx.v1beta1.Tx
             * @instance
             */
            Tx.prototype.signatures = $util.emptyArray;

            /**
             * Encodes the specified Tx message. Does not implicitly {@link cosmos.tx.v1beta1.Tx.verify|verify} messages.
             * @function encode
             * @memberof cosmos.tx.v1beta1.Tx
             * @static
             * @param {cosmos.tx.v1beta1.ITx} message Tx message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Tx.encode = function encode(message, writer) {
                if (!writer) writer = $Writer.create();
                if (message.body != null && Object.hasOwnProperty.call(message, "body"))
                    cosmos.tx.v1beta1.TxBody.encode(
                        message.body,
                        writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
                    ).ldelim();
                if (
                    message.auth_info != null &&
                    Object.hasOwnProperty.call(message, "auth_info")
                )
                    cosmos.tx.v1beta1.AuthInfo.encode(
                        message.auth_info,
                        writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
                    ).ldelim();
                if (message.signatures != null && message.signatures.length)
                    for (var i = 0; i < message.signatures.length; ++i)
                        writer
                            .uint32(/* id 3, wireType 2 =*/ 26)
                            .bytes(message.signatures[i]);
                return writer;
            };

            /**
             * Encodes the specified Tx message, length delimited. Does not implicitly {@link cosmos.tx.v1beta1.Tx.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cosmos.tx.v1beta1.Tx
             * @static
             * @param {cosmos.tx.v1beta1.ITx} message Tx message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Tx.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Tx message from the specified reader or buffer.
             * @function decode
             * @memberof cosmos.tx.v1beta1.Tx
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cosmos.tx.v1beta1.Tx} Tx
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Tx.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new cosmos.tx.v1beta1.Tx();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.body = cosmos.tx.v1beta1.TxBody.decode(
                                reader,
                                reader.uint32()
                            );
                            break;
                        case 2:
                            message.auth_info = cosmos.tx.v1beta1.AuthInfo.decode(
                                reader,
                                reader.uint32()
                            );
                            break;
                        case 3:
                            if (!(message.signatures && message.signatures.length))
                                message.signatures = [];
                            message.signatures.push(reader.bytes());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Tx message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cosmos.tx.v1beta1.Tx
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cosmos.tx.v1beta1.Tx} Tx
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Tx.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader)) reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Tx message.
             * @function verify
             * @memberof cosmos.tx.v1beta1.Tx
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Tx.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.body != null && message.hasOwnProperty("body")) {
                    var error = cosmos.tx.v1beta1.TxBody.verify(message.body);
                    if (error) return "body." + error;
                }
                if (message.auth_info != null && message.hasOwnProperty("auth_info")) {
                    var error = cosmos.tx.v1beta1.AuthInfo.verify(
                        message.auth_info
                    );
                    if (error) return "auth_info." + error;
                }
                if (
                    message.signatures != null &&
                    message.hasOwnProperty("signatures")
                ) {
                    if (!Array.isArray(message.signatures))
                        return "signatures: array expected";
                    for (var i = 0; i < message.signatures.length; ++i)
                        if (
                            !(
                                (message.signatures[i] &&
                                    typeof message.signatures[i].length === "number") ||
                                $util.isString(message.signatures[i])
                            )
                        )
                            return "signatures: buffer[] expected";
                }
                return null;
            };

            /**
             * Creates a Tx message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cosmos.tx.v1beta1.Tx
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cosmos.tx.v1beta1.Tx} Tx
             */
            Tx.fromObject = function fromObject(object) {
                if (object instanceof cosmos.tx.v1beta1.Tx) return object;
                var message = new cosmos.tx.v1beta1.Tx();
                if (object.body != null) {
                    if (typeof object.body !== "object")
                        throw TypeError(".cosmos.tx.v1beta1.Tx.body: object expected");
                    message.body = cosmos.tx.v1beta1.TxBody.fromObject(object.body);
                }
                if (object.auth_info != null) {
                    if (typeof object.auth_info !== "object")
                        throw TypeError(".cosmos.tx.v1beta1.Tx.auth_info: object expected");
                    message.auth_info = cosmos.tx.v1beta1.AuthInfo.fromObject(
                        object.auth_info
                    );
                }
                if (object.signatures) {
                    if (!Array.isArray(object.signatures))
                        throw TypeError(".cosmos.tx.v1beta1.Tx.signatures: array expected");
                    message.signatures = [];
                    for (var i = 0; i < object.signatures.length; ++i)
                        if (typeof object.signatures[i] === "string")
                            $util.base64.decode(
                                object.signatures[i],
                                (message.signatures[i] = $util.newBuffer(
                                    $util.base64.length(object.signatures[i])
                                )),
                                0
                            );
                        else if (object.signatures[i].length)
                            message.signatures[i] = object.signatures[i];
                }
                return message;
            };

            /**
             * Creates a plain object from a Tx message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cosmos.tx.v1beta1.Tx
             * @static
             * @param {cosmos.tx.v1beta1.Tx} message Tx
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Tx.toObject = function toObject(message, options) {
                if (!options) options = {};
                var object = {};
                if (options.arrays || options.defaults) object.signatures = [];
                if (options.defaults) {
                    object.body = null;
                    object.auth_info = null;
                }
                if (message.body != null && message.hasOwnProperty("body"))
                    object.body = cosmos.tx.v1beta1.TxBody.toObject(
                        message.body,
                        options
                    );
                if (message.auth_info != null && message.hasOwnProperty("auth_info"))
                    object.auth_info = cosmos.tx.v1beta1.AuthInfo.toObject(
                        message.auth_info,
                        options
                    );
                if (message.signatures && message.signatures.length) {
                    object.signatures = [];
                    for (var j = 0; j < message.signatures.length; ++j)
                        object.signatures[j] =
                            options.bytes === String
                                ? $util.base64.encode(
                                    message.signatures[j],
                                    0,
                                    message.signatures[j].length
                                )
                                : options.bytes === Array
                                    ? Array.prototype.slice.call(message.signatures[j])
                                    : message.signatures[j];
                }
                return object;
            };

            /**
             * Converts this Tx to JSON.
             * @function toJSON
             * @memberof cosmos.tx.v1beta1.Tx
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Tx.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Tx;
        })();

        v1beta1.TxRaw = (function () {
            /**
             * Properties of a TxRaw.
             * @memberof cosmos.tx.v1beta1
             * @interface ITxRaw
             * @property {Uint8Array|null} [body_bytes] TxRaw body_bytes
             * @property {Uint8Array|null} [auth_info_bytes] TxRaw auth_info_bytes
             * @property {Array.<Uint8Array>|null} [signatures] TxRaw signatures
             */

            /**
             * Constructs a new TxRaw.
             * @memberof cosmos.tx.v1beta1
             * @classdesc Represents a TxRaw.
             * @implements ITxRaw
             * @constructor
             * @param {cosmos.tx.v1beta1.ITxRaw=} [properties] Properties to set
             */
            function TxRaw(properties) {
                this.signatures = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TxRaw body_bytes.
             * @member {Uint8Array} body_bytes
             * @memberof cosmos.tx.v1beta1.TxRaw
             * @instance
             */
            TxRaw.prototype.body_bytes = $util.newBuffer([]);

            /**
             * TxRaw auth_info_bytes.
             * @member {Uint8Array} auth_info_bytes
             * @memberof cosmos.tx.v1beta1.TxRaw
             * @instance
             */
            TxRaw.prototype.auth_info_bytes = $util.newBuffer([]);

            /**
             * TxRaw signatures.
             * @member {Array.<Uint8Array>} signatures
             * @memberof cosmos.tx.v1beta1.TxRaw
             * @instance
             */
            TxRaw.prototype.signatures = $util.emptyArray;

            /**
             * Encodes the specified TxRaw message. Does not implicitly {@link cosmos.tx.v1beta1.TxRaw.verify|verify} messages.
             * @function encode
             * @memberof cosmos.tx.v1beta1.TxRaw
             * @static
             * @param {cosmos.tx.v1beta1.ITxRaw} message TxRaw message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TxRaw.encode = function encode(message, writer) {
                if (!writer) writer = $Writer.create();
                if (
                    message.body_bytes != null &&
                    Object.hasOwnProperty.call(message, "body_bytes")
                )
                    writer.uint32(/* id 1, wireType 2 =*/ 10).bytes(message.body_bytes);
                if (
                    message.auth_info_bytes != null &&
                    Object.hasOwnProperty.call(message, "auth_info_bytes")
                )
                    writer
                        .uint32(/* id 2, wireType 2 =*/ 18)
                        .bytes(message.auth_info_bytes);
                if (message.signatures != null && message.signatures.length)
                    for (var i = 0; i < message.signatures.length; ++i)
                        writer
                            .uint32(/* id 3, wireType 2 =*/ 26)
                            .bytes(message.signatures[i]);
                return writer;
            };

            /**
             * Encodes the specified TxRaw message, length delimited. Does not implicitly {@link cosmos.tx.v1beta1.TxRaw.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cosmos.tx.v1beta1.TxRaw
             * @static
             * @param {cosmos.tx.v1beta1.ITxRaw} message TxRaw message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TxRaw.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TxRaw message from the specified reader or buffer.
             * @function decode
             * @memberof cosmos.tx.v1beta1.TxRaw
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cosmos.tx.v1beta1.TxRaw} TxRaw
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TxRaw.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new cosmos.tx.v1beta1.TxRaw();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.body_bytes = reader.bytes();
                            break;
                        case 2:
                            message.auth_info_bytes = reader.bytes();
                            break;
                        case 3:
                            if (!(message.signatures && message.signatures.length))
                                message.signatures = [];
                            message.signatures.push(reader.bytes());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };

            /**
             * Decodes a TxRaw message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cosmos.tx.v1beta1.TxRaw
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cosmos.tx.v1beta1.TxRaw} TxRaw
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TxRaw.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader)) reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TxRaw message.
             * @function verify
             * @memberof cosmos.tx.v1beta1.TxRaw
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TxRaw.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.body_bytes != null && message.hasOwnProperty("body_bytes"))
                    if (
                        !(
                            (message.body_bytes &&
                                typeof message.body_bytes.length === "number") ||
                            $util.isString(message.body_bytes)
                        )
                    )
                        return "body_bytes: buffer expected";
                if (
                    message.auth_info_bytes != null &&
                    message.hasOwnProperty("auth_info_bytes")
                )
                    if (
                        !(
                            (message.auth_info_bytes &&
                                typeof message.auth_info_bytes.length === "number") ||
                            $util.isString(message.auth_info_bytes)
                        )
                    )
                        return "auth_info_bytes: buffer expected";
                if (
                    message.signatures != null &&
                    message.hasOwnProperty("signatures")
                ) {
                    if (!Array.isArray(message.signatures))
                        return "signatures: array expected";
                    for (var i = 0; i < message.signatures.length; ++i)
                        if (
                            !(
                                (message.signatures[i] &&
                                    typeof message.signatures[i].length === "number") ||
                                $util.isString(message.signatures[i])
                            )
                        )
                            return "signatures: buffer[] expected";
                }
                return null;
            };

            /**
             * Creates a TxRaw message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cosmos.tx.v1beta1.TxRaw
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cosmos.tx.v1beta1.TxRaw} TxRaw
             */
            TxRaw.fromObject = function fromObject(object) {
                if (object instanceof cosmos.tx.v1beta1.TxRaw) return object;
                var message = new cosmos.tx.v1beta1.TxRaw();
                if (object.body_bytes != null)
                    if (typeof object.body_bytes === "string")
                        $util.base64.decode(
                            object.body_bytes,
                            (message.body_bytes = $util.newBuffer(
                                $util.base64.length(object.body_bytes)
                            )),
                            0
                        );
                    else if (object.body_bytes.length)
                        message.body_bytes = object.body_bytes;
                if (object.auth_info_bytes != null)
                    if (typeof object.auth_info_bytes === "string")
                        $util.base64.decode(
                            object.auth_info_bytes,
                            (message.auth_info_bytes = $util.newBuffer(
                                $util.base64.length(object.auth_info_bytes)
                            )),
                            0
                        );
                    else if (object.auth_info_bytes.length)
                        message.auth_info_bytes = object.auth_info_bytes;
                if (object.signatures) {
                    if (!Array.isArray(object.signatures))
                        throw TypeError(
                            ".cosmos.tx.v1beta1.TxRaw.signatures: array expected"
                        );
                    message.signatures = [];
                    for (var i = 0; i < object.signatures.length; ++i)
                        if (typeof object.signatures[i] === "string")
                            $util.base64.decode(
                                object.signatures[i],
                                (message.signatures[i] = $util.newBuffer(
                                    $util.base64.length(object.signatures[i])
                                )),
                                0
                            );
                        else if (object.signatures[i].length)
                            message.signatures[i] = object.signatures[i];
                }
                return message;
            };

            /**
             * Creates a plain object from a TxRaw message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cosmos.tx.v1beta1.TxRaw
             * @static
             * @param {cosmos.tx.v1beta1.TxRaw} message TxRaw
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TxRaw.toObject = function toObject(message, options) {
                if (!options) options = {};
                var object = {};
                if (options.arrays || options.defaults) object.signatures = [];
                if (options.defaults) {
                    if (options.bytes === String) object.body_bytes = "";
                    else {
                        object.body_bytes = [];
                        if (options.bytes !== Array)
                            object.body_bytes = $util.newBuffer(object.body_bytes);
                    }
                    if (options.bytes === String) object.auth_info_bytes = "";
                    else {
                        object.auth_info_bytes = [];
                        if (options.bytes !== Array)
                            object.auth_info_bytes = $util.newBuffer(object.auth_info_bytes);
                    }
                }
                if (message.body_bytes != null && message.hasOwnProperty("body_bytes"))
                    object.body_bytes =
                        options.bytes === String
                            ? $util.base64.encode(
                                message.body_bytes,
                                0,
                                message.body_bytes.length
                            )
                            : options.bytes === Array
                                ? Array.prototype.slice.call(message.body_bytes)
                                : message.body_bytes;
                if (
                    message.auth_info_bytes != null &&
                    message.hasOwnProperty("auth_info_bytes")
                )
                    object.auth_info_bytes =
                        options.bytes === String
                            ? $util.base64.encode(
                                message.auth_info_bytes,
                                0,
                                message.auth_info_bytes.length
                            )
                            : options.bytes === Array
                                ? Array.prototype.slice.call(message.auth_info_bytes)
                                : message.auth_info_bytes;
                if (message.signatures && message.signatures.length) {
                    object.signatures = [];
                    for (var j = 0; j < message.signatures.length; ++j)
                        object.signatures[j] =
                            options.bytes === String
                                ? $util.base64.encode(
                                    message.signatures[j],
                                    0,
                                    message.signatures[j].length
                                )
                                : options.bytes === Array
                                    ? Array.prototype.slice.call(message.signatures[j])
                                    : message.signatures[j];
                }
                return object;
            };

            /**
             * Converts this TxRaw to JSON.
             * @function toJSON
             * @memberof cosmos.tx.v1beta1.TxRaw
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TxRaw.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return TxRaw;
        })();

        v1beta1.SignDoc = (function () {
            /**
             * Properties of a SignDoc.
             * @memberof cosmos.tx.v1beta1
             * @interface ISignDoc
             * @property {Uint8Array|null} [body_bytes] SignDoc body_bytes
             * @property {Uint8Array|null} [auth_info_bytes] SignDoc auth_info_bytes
             * @property {string|null} [chain_id] SignDoc chain_id
             * @property {Long|null} [account_number] SignDoc account_number
             */

            /**
             * Constructs a new SignDoc.
             * @memberof cosmos.tx.v1beta1
             * @classdesc Represents a SignDoc.
             * @implements ISignDoc
             * @constructor
             * @param {cosmos.tx.v1beta1.ISignDoc=} [properties] Properties to set
             */
            function SignDoc(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SignDoc body_bytes.
             * @member {Uint8Array} body_bytes
             * @memberof cosmos.tx.v1beta1.SignDoc
             * @instance
             */
            SignDoc.prototype.body_bytes = $util.newBuffer([]);

            /**
             * SignDoc auth_info_bytes.
             * @member {Uint8Array} auth_info_bytes
             * @memberof cosmos.tx.v1beta1.SignDoc
             * @instance
             */
            SignDoc.prototype.auth_info_bytes = $util.newBuffer([]);

            /**
             * SignDoc chain_id.
             * @member {string} chain_id
             * @memberof cosmos.tx.v1beta1.SignDoc
             * @instance
             */
            SignDoc.prototype.chain_id = "";

            /**
             * SignDoc account_number.
             * @member {Long} account_number
             * @memberof cosmos.tx.v1beta1.SignDoc
             * @instance
             */
            SignDoc.prototype.account_number = $util.Long
                ? $util.Long.fromBits(0, 0, true)
                : 0;

            /**
             * Encodes the specified SignDoc message. Does not implicitly {@link cosmos.tx.v1beta1.SignDoc.verify|verify} messages.
             * @function encode
             * @memberof cosmos.tx.v1beta1.SignDoc
             * @static
             * @param {cosmos.tx.v1beta1.ISignDoc} message SignDoc message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SignDoc.encode = function encode(message, writer) {
                if (!writer) writer = $Writer.create();
                if (
                    message.body_bytes != null &&
                    Object.hasOwnProperty.call(message, "body_bytes")
                )
                    writer.uint32(/* id 1, wireType 2 =*/ 10).bytes(message.body_bytes);
                if (
                    message.auth_info_bytes != null &&
                    Object.hasOwnProperty.call(message, "auth_info_bytes")
                )
                    writer
                        .uint32(/* id 2, wireType 2 =*/ 18)
                        .bytes(message.auth_info_bytes);
                if (
                    message.chain_id != null &&
                    Object.hasOwnProperty.call(message, "chain_id")
                )
                    writer.uint32(/* id 3, wireType 2 =*/ 26).string(message.chain_id);
                if (
                    message.account_number != null &&
                    Object.hasOwnProperty.call(message, "account_number")
                )
                    writer
                        .uint32(/* id 4, wireType 0 =*/ 32)
                        .uint64(message.account_number);
                return writer;
            };

            /**
             * Encodes the specified SignDoc message, length delimited. Does not implicitly {@link cosmos.tx.v1beta1.SignDoc.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cosmos.tx.v1beta1.SignDoc
             * @static
             * @param {cosmos.tx.v1beta1.ISignDoc} message SignDoc message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SignDoc.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SignDoc message from the specified reader or buffer.
             * @function decode
             * @memberof cosmos.tx.v1beta1.SignDoc
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cosmos.tx.v1beta1.SignDoc} SignDoc
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SignDoc.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new cosmos.tx.v1beta1.SignDoc();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.body_bytes = reader.bytes();
                            break;
                        case 2:
                            message.auth_info_bytes = reader.bytes();
                            break;
                        case 3:
                            message.chain_id = reader.string();
                            break;
                        case 4:
                            message.account_number = reader.uint64();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };

            /**
             * Decodes a SignDoc message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cosmos.tx.v1beta1.SignDoc
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cosmos.tx.v1beta1.SignDoc} SignDoc
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SignDoc.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader)) reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SignDoc message.
             * @function verify
             * @memberof cosmos.tx.v1beta1.SignDoc
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SignDoc.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.body_bytes != null && message.hasOwnProperty("body_bytes"))
                    if (
                        !(
                            (message.body_bytes &&
                                typeof message.body_bytes.length === "number") ||
                            $util.isString(message.body_bytes)
                        )
                    )
                        return "body_bytes: buffer expected";
                if (
                    message.auth_info_bytes != null &&
                    message.hasOwnProperty("auth_info_bytes")
                )
                    if (
                        !(
                            (message.auth_info_bytes &&
                                typeof message.auth_info_bytes.length === "number") ||
                            $util.isString(message.auth_info_bytes)
                        )
                    )
                        return "auth_info_bytes: buffer expected";
                if (message.chain_id != null && message.hasOwnProperty("chain_id"))
                    if (!$util.isString(message.chain_id))
                        return "chain_id: string expected";
                if (
                    message.account_number != null &&
                    message.hasOwnProperty("account_number")
                )
                    if (
                        !$util.isInteger(message.account_number) &&
                        !(
                            message.account_number &&
                            $util.isInteger(message.account_number.low) &&
                            $util.isInteger(message.account_number.high)
                        )
                    )
                        return "account_number: integer|Long expected";
                return null;
            };

            /**
             * Creates a SignDoc message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cosmos.tx.v1beta1.SignDoc
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cosmos.tx.v1beta1.SignDoc} SignDoc
             */
            SignDoc.fromObject = function fromObject(object) {
                if (object instanceof cosmos.tx.v1beta1.SignDoc) return object;
                var message = new cosmos.tx.v1beta1.SignDoc();
                if (object.body_bytes != null)
                    if (typeof object.body_bytes === "string")
                        $util.base64.decode(
                            object.body_bytes,
                            (message.body_bytes = $util.newBuffer(
                                $util.base64.length(object.body_bytes)
                            )),
                            0
                        );
                    else if (object.body_bytes.length)
                        message.body_bytes = object.body_bytes;
                if (object.auth_info_bytes != null)
                    if (typeof object.auth_info_bytes === "string")
                        $util.base64.decode(
                            object.auth_info_bytes,
                            (message.auth_info_bytes = $util.newBuffer(
                                $util.base64.length(object.auth_info_bytes)
                            )),
                            0
                        );
                    else if (object.auth_info_bytes.length)
                        message.auth_info_bytes = object.auth_info_bytes;
                if (object.chain_id != null) message.chain_id = String(object.chain_id);
                if (object.account_number != null)
                    if ($util.Long)
                        (message.account_number = $util.Long.fromValue(
                            object.account_number
                        )).unsigned = true;
                    else if (typeof object.account_number === "string")
                        message.account_number = parseInt(object.account_number, 10);
                    else if (typeof object.account_number === "number")
                        message.account_number = object.account_number;
                    else if (typeof object.account_number === "object")
                        message.account_number = new $util.LongBits(
                            object.account_number.low >>> 0,
                            object.account_number.high >>> 0
                        ).toNumber(true);
                return message;
            };

            /**
             * Creates a plain object from a SignDoc message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cosmos.tx.v1beta1.SignDoc
             * @static
             * @param {cosmos.tx.v1beta1.SignDoc} message SignDoc
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SignDoc.toObject = function toObject(message, options) {
                if (!options) options = {};
                var object = {};
                if (options.defaults) {
                    if (options.bytes === String) object.body_bytes = "";
                    else {
                        object.body_bytes = [];
                        if (options.bytes !== Array)
                            object.body_bytes = $util.newBuffer(object.body_bytes);
                    }
                    if (options.bytes === String) object.auth_info_bytes = "";
                    else {
                        object.auth_info_bytes = [];
                        if (options.bytes !== Array)
                            object.auth_info_bytes = $util.newBuffer(object.auth_info_bytes);
                    }
                    object.chain_id = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.account_number =
                            options.longs === String
                                ? long.toString()
                                : options.longs === Number
                                    ? long.toNumber()
                                    : long;
                    } else object.account_number = options.longs === String ? "0" : 0;
                }
                if (message.body_bytes != null && message.hasOwnProperty("body_bytes"))
                    object.body_bytes =
                        options.bytes === String
                            ? $util.base64.encode(
                                message.body_bytes,
                                0,
                                message.body_bytes.length
                            )
                            : options.bytes === Array
                                ? Array.prototype.slice.call(message.body_bytes)
                                : message.body_bytes;
                if (
                    message.auth_info_bytes != null &&
                    message.hasOwnProperty("auth_info_bytes")
                )
                    object.auth_info_bytes =
                        options.bytes === String
                            ? $util.base64.encode(
                                message.auth_info_bytes,
                                0,
                                message.auth_info_bytes.length
                            )
                            : options.bytes === Array
                                ? Array.prototype.slice.call(message.auth_info_bytes)
                                : message.auth_info_bytes;
                if (message.chain_id != null && message.hasOwnProperty("chain_id"))
                    object.chain_id = message.chain_id;
                if (
                    message.account_number != null &&
                    message.hasOwnProperty("account_number")
                )
                    if (typeof message.account_number === "number")
                        object.account_number =
                            options.longs === String
                                ? String(message.account_number)
                                : message.account_number;
                    else
                        object.account_number =
                            options.longs === String
                                ? $util.Long.prototype.toString.call(message.account_number)
                                : options.longs === Number
                                    ? new $util.LongBits(
                                        message.account_number.low >>> 0,
                                        message.account_number.high >>> 0
                                    ).toNumber(true)
                                    : message.account_number;
                return object;
            };

            /**
             * Converts this SignDoc to JSON.
             * @function toJSON
             * @memberof cosmos.tx.v1beta1.SignDoc
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SignDoc.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return SignDoc;
        })();

        v1beta1.TxBody = (function () {
            /**
             * Properties of a TxBody.
             * @memberof cosmos.tx.v1beta1
             * @interface ITxBody
             * @property {Array.<google.protobuf.IAny>|null} [messages] TxBody messages
             * @property {string|null} [memo] TxBody memo
             * @property {Long|null} [timeout_height] TxBody timeout_height
             * @property {Array.<google.protobuf.IAny>|null} [extension_options] TxBody extension_options
             * @property {Array.<google.protobuf.IAny>|null} [non_critical_extension_options] TxBody non_critical_extension_options
             */

            /**
             * Constructs a new TxBody.
             * @memberof cosmos.tx.v1beta1
             * @classdesc Represents a TxBody.
             * @implements ITxBody
             * @constructor
             * @param {cosmos.tx.v1beta1.ITxBody=} [properties] Properties to set
             */
            function TxBody(properties) {
                this.messages = [];
                this.extension_options = [];
                this.non_critical_extension_options = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TxBody messages.
             * @member {Array.<google.protobuf.IAny>} messages
             * @memberof cosmos.tx.v1beta1.TxBody
             * @instance
             */
            TxBody.prototype.messages = $util.emptyArray;

            /**
             * TxBody memo.
             * @member {string} memo
             * @memberof cosmos.tx.v1beta1.TxBody
             * @instance
             */
            TxBody.prototype.memo = "";

            /**
             * TxBody timeout_height.
             * @member {Long} timeout_height
             * @memberof cosmos.tx.v1beta1.TxBody
             * @instance
             */
            TxBody.prototype.timeout_height = $util.Long
                ? $util.Long.fromBits(0, 0, true)
                : 0;

            /**
             * TxBody extension_options.
             * @member {Array.<google.protobuf.IAny>} extension_options
             * @memberof cosmos.tx.v1beta1.TxBody
             * @instance
             */
            TxBody.prototype.extension_options = $util.emptyArray;

            /**
             * TxBody non_critical_extension_options.
             * @member {Array.<google.protobuf.IAny>} non_critical_extension_options
             * @memberof cosmos.tx.v1beta1.TxBody
             * @instance
             */
            TxBody.prototype.non_critical_extension_options = $util.emptyArray;

            /**
             * Encodes the specified TxBody message. Does not implicitly {@link cosmos.tx.v1beta1.TxBody.verify|verify} messages.
             * @function encode
             * @memberof cosmos.tx.v1beta1.TxBody
             * @static
             * @param {cosmos.tx.v1beta1.ITxBody} message TxBody message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TxBody.encode = function encode(message, writer) {
                if (!writer) writer = $Writer.create();
                if (message.messages != null && message.messages.length)
                    for (var i = 0; i < message.messages.length; ++i)
                        google.protobuf.Any.encode(
                            message.messages[i],
                            writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
                        ).ldelim();
                if (message.memo != null && Object.hasOwnProperty.call(message, "memo"))
                    writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.memo);
                if (
                    message.timeout_height != null &&
                    Object.hasOwnProperty.call(message, "timeout_height")
                )
                    writer
                        .uint32(/* id 3, wireType 0 =*/ 24)
                        .uint64(message.timeout_height);
                if (
                    message.extension_options != null &&
                    message.extension_options.length
                )
                    for (var i = 0; i < message.extension_options.length; ++i)
                        google.protobuf.Any.encode(
                            message.extension_options[i],
                            writer.uint32(/* id 1023, wireType 2 =*/ 8186).fork()
                        ).ldelim();
                if (
                    message.non_critical_extension_options != null &&
                    message.non_critical_extension_options.length
                )
                    for (
                        var i = 0;
                        i < message.non_critical_extension_options.length;
                        ++i
                    )
                        google.protobuf.Any.encode(
                            message.non_critical_extension_options[i],
                            writer.uint32(/* id 2047, wireType 2 =*/ 16378).fork()
                        ).ldelim();
                return writer;
            };

            /**
             * Encodes the specified TxBody message, length delimited. Does not implicitly {@link cosmos.tx.v1beta1.TxBody.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cosmos.tx.v1beta1.TxBody
             * @static
             * @param {cosmos.tx.v1beta1.ITxBody} message TxBody message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TxBody.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TxBody message from the specified reader or buffer.
             * @function decode
             * @memberof cosmos.tx.v1beta1.TxBody
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cosmos.tx.v1beta1.TxBody} TxBody
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TxBody.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new cosmos.tx.v1beta1.TxBody();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            if (!(message.messages && message.messages.length))
                                message.messages = [];
                            message.messages.push(
                                google.protobuf.Any.decode(reader, reader.uint32())
                            );
                            break;
                        case 2:
                            message.memo = reader.string();
                            break;
                        case 3:
                            message.timeout_height = reader.uint64();
                            break;
                        case 1023:
                            if (
                                !(message.extension_options && message.extension_options.length)
                            )
                                message.extension_options = [];
                            message.extension_options.push(
                                google.protobuf.Any.decode(reader, reader.uint32())
                            );
                            break;
                        case 2047:
                            if (
                                !(
                                    message.non_critical_extension_options &&
                                    message.non_critical_extension_options.length
                                )
                            )
                                message.non_critical_extension_options = [];
                            message.non_critical_extension_options.push(
                                google.protobuf.Any.decode(reader, reader.uint32())
                            );
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };

            /**
             * Decodes a TxBody message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cosmos.tx.v1beta1.TxBody
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cosmos.tx.v1beta1.TxBody} TxBody
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TxBody.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader)) reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TxBody message.
             * @function verify
             * @memberof cosmos.tx.v1beta1.TxBody
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TxBody.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.messages != null && message.hasOwnProperty("messages")) {
                    if (!Array.isArray(message.messages))
                        return "messages: array expected";
                    for (var i = 0; i < message.messages.length; ++i) {
                        var error = google.protobuf.Any.verify(message.messages[i]);
                        if (error) return "messages." + error;
                    }
                }
                if (message.memo != null && message.hasOwnProperty("memo"))
                    if (!$util.isString(message.memo)) return "memo: string expected";
                if (
                    message.timeout_height != null &&
                    message.hasOwnProperty("timeout_height")
                )
                    if (
                        !$util.isInteger(message.timeout_height) &&
                        !(
                            message.timeout_height &&
                            $util.isInteger(message.timeout_height.low) &&
                            $util.isInteger(message.timeout_height.high)
                        )
                    )
                        return "timeout_height: integer|Long expected";
                if (
                    message.extension_options != null &&
                    message.hasOwnProperty("extension_options")
                ) {
                    if (!Array.isArray(message.extension_options))
                        return "extension_options: array expected";
                    for (var i = 0; i < message.extension_options.length; ++i) {
                        var error = google.protobuf.Any.verify(
                            message.extension_options[i]
                        );
                        if (error) return "extension_options." + error;
                    }
                }
                if (
                    message.non_critical_extension_options != null &&
                    message.hasOwnProperty("non_critical_extension_options")
                ) {
                    if (!Array.isArray(message.non_critical_extension_options))
                        return "non_critical_extension_options: array expected";
                    for (
                        var i = 0;
                        i < message.non_critical_extension_options.length;
                        ++i
                    ) {
                        var error = google.protobuf.Any.verify(
                            message.non_critical_extension_options[i]
                        );
                        if (error) return "non_critical_extension_options." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a TxBody message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cosmos.tx.v1beta1.TxBody
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cosmos.tx.v1beta1.TxBody} TxBody
             */
            TxBody.fromObject = function fromObject(object) {
                if (object instanceof cosmos.tx.v1beta1.TxBody) return object;
                var message = new cosmos.tx.v1beta1.TxBody();
                if (object.messages) {
                    if (!Array.isArray(object.messages))
                        throw TypeError(
                            ".cosmos.tx.v1beta1.TxBody.messages: array expected"
                        );
                    message.messages = [];
                    for (var i = 0; i < object.messages.length; ++i) {
                        if (typeof object.messages[i] !== "object")
                            throw TypeError(
                                ".cosmos.tx.v1beta1.TxBody.messages: object expected"
                            );
                        message.messages[i] = google.protobuf.Any.fromObject(
                            object.messages[i]
                        );
                    }
                }
                if (object.memo != null) message.memo = String(object.memo);
                if (object.timeout_height != null)
                    if ($util.Long)
                        (message.timeout_height = $util.Long.fromValue(
                            object.timeout_height
                        )).unsigned = true;
                    else if (typeof object.timeout_height === "string")
                        message.timeout_height = parseInt(object.timeout_height, 10);
                    else if (typeof object.timeout_height === "number")
                        message.timeout_height = object.timeout_height;
                    else if (typeof object.timeout_height === "object")
                        message.timeout_height = new $util.LongBits(
                            object.timeout_height.low >>> 0,
                            object.timeout_height.high >>> 0
                        ).toNumber(true);
                if (object.extension_options) {
                    if (!Array.isArray(object.extension_options))
                        throw TypeError(
                            ".cosmos.tx.v1beta1.TxBody.extension_options: array expected"
                        );
                    message.extension_options = [];
                    for (var i = 0; i < object.extension_options.length; ++i) {
                        if (typeof object.extension_options[i] !== "object")
                            throw TypeError(
                                ".cosmos.tx.v1beta1.TxBody.extension_options: object expected"
                            );
                        message.extension_options[i] = google.protobuf.Any.fromObject(
                            object.extension_options[i]
                        );
                    }
                }
                if (object.non_critical_extension_options) {
                    if (!Array.isArray(object.non_critical_extension_options))
                        throw TypeError(
                            ".cosmos.tx.v1beta1.TxBody.non_critical_extension_options: array expected"
                        );
                    message.non_critical_extension_options = [];
                    for (
                        var i = 0;
                        i < object.non_critical_extension_options.length;
                        ++i
                    ) {
                        if (typeof object.non_critical_extension_options[i] !== "object")
                            throw TypeError(
                                ".cosmos.tx.v1beta1.TxBody.non_critical_extension_options: object expected"
                            );
                        message.non_critical_extension_options[i] =
                            google.protobuf.Any.fromObject(
                                object.non_critical_extension_options[i]
                            );
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a TxBody message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cosmos.tx.v1beta1.TxBody
             * @static
             * @param {cosmos.tx.v1beta1.TxBody} message TxBody
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TxBody.toObject = function toObject(message, options) {
                if (!options) options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.messages = [];
                    object.extension_options = [];
                    object.non_critical_extension_options = [];
                }
                if (options.defaults) {
                    object.memo = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.timeout_height =
                            options.longs === String
                                ? long.toString()
                                : options.longs === Number
                                    ? long.toNumber()
                                    : long;
                    } else object.timeout_height = options.longs === String ? "0" : 0;
                }
                if (message.messages && message.messages.length) {
                    object.messages = [];
                    for (var j = 0; j < message.messages.length; ++j)
                        object.messages[j] = google.protobuf.Any.toObject(
                            message.messages[j],
                            options
                        );
                }
                if (message.memo != null && message.hasOwnProperty("memo"))
                    object.memo = message.memo;
                if (
                    message.timeout_height != null &&
                    message.hasOwnProperty("timeout_height")
                )
                    if (typeof message.timeout_height === "number")
                        object.timeout_height =
                            options.longs === String
                                ? String(message.timeout_height)
                                : message.timeout_height;
                    else
                        object.timeout_height =
                            options.longs === String
                                ? $util.Long.prototype.toString.call(message.timeout_height)
                                : options.longs === Number
                                    ? new $util.LongBits(
                                        message.timeout_height.low >>> 0,
                                        message.timeout_height.high >>> 0
                                    ).toNumber(true)
                                    : message.timeout_height;
                if (message.extension_options && message.extension_options.length) {
                    object.extension_options = [];
                    for (var j = 0; j < message.extension_options.length; ++j)
                        object.extension_options[j] = google.protobuf.Any.toObject(
                            message.extension_options[j],
                            options
                        );
                }
                if (
                    message.non_critical_extension_options &&
                    message.non_critical_extension_options.length
                ) {
                    object.non_critical_extension_options = [];
                    for (
                        var j = 0;
                        j < message.non_critical_extension_options.length;
                        ++j
                    )
                        object.non_critical_extension_options[j] =
                            google.protobuf.Any.toObject(
                                message.non_critical_extension_options[j],
                                options
                            );
                }
                return object;
            };

            /**
             * Converts this TxBody to JSON.
             * @function toJSON
             * @memberof cosmos.tx.v1beta1.TxBody
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TxBody.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return TxBody;
        })();

        v1beta1.AuthInfo = (function () {
            /**
             * Properties of an AuthInfo.
             * @memberof cosmos.tx.v1beta1
             * @interface IAuthInfo
             * @property {Array.<cosmos.tx.v1beta1.ISignerInfo>|null} [signer_infos] AuthInfo signer_infos
             * @property {cosmos.tx.v1beta1.IFee|null} [fee] AuthInfo fee
             */

            /**
             * Constructs a new AuthInfo.
             * @memberof cosmos.tx.v1beta1
             * @classdesc Represents an AuthInfo.
             * @implements IAuthInfo
             * @constructor
             * @param {cosmos.tx.v1beta1.IAuthInfo=} [properties] Properties to set
             */
            function AuthInfo(properties) {
                this.signer_infos = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * AuthInfo signer_infos.
             * @member {Array.<cosmos.tx.v1beta1.ISignerInfo>} signer_infos
             * @memberof cosmos.tx.v1beta1.AuthInfo
             * @instance
             */
            AuthInfo.prototype.signer_infos = $util.emptyArray;

            /**
             * AuthInfo fee.
             * @member {cosmos.tx.v1beta1.IFee|null|undefined} fee
             * @memberof cosmos.tx.v1beta1.AuthInfo
             * @instance
             */
            AuthInfo.prototype.fee = null;

            /**
             * Encodes the specified AuthInfo message. Does not implicitly {@link cosmos.tx.v1beta1.AuthInfo.verify|verify} messages.
             * @function encode
             * @memberof cosmos.tx.v1beta1.AuthInfo
             * @static
             * @param {cosmos.tx.v1beta1.IAuthInfo} message AuthInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AuthInfo.encode = function encode(message, writer) {
                if (!writer) writer = $Writer.create();
                if (message.signer_infos != null && message.signer_infos.length)
                    for (var i = 0; i < message.signer_infos.length; ++i)
                        cosmos.tx.v1beta1.SignerInfo.encode(
                            message.signer_infos[i],
                            writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
                        ).ldelim();
                if (message.fee != null && Object.hasOwnProperty.call(message, "fee"))
                    cosmos.tx.v1beta1.Fee.encode(
                        message.fee,
                        writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
                    ).ldelim();
                return writer;
            };

            /**
             * Encodes the specified AuthInfo message, length delimited. Does not implicitly {@link cosmos.tx.v1beta1.AuthInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cosmos.tx.v1beta1.AuthInfo
             * @static
             * @param {cosmos.tx.v1beta1.IAuthInfo} message AuthInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AuthInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an AuthInfo message from the specified reader or buffer.
             * @function decode
             * @memberof cosmos.tx.v1beta1.AuthInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cosmos.tx.v1beta1.AuthInfo} AuthInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AuthInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new cosmos.tx.v1beta1.AuthInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            if (!(message.signer_infos && message.signer_infos.length))
                                message.signer_infos = [];
                            message.signer_infos.push(
                                cosmos.tx.v1beta1.SignerInfo.decode(
                                    reader,
                                    reader.uint32()
                                )
                            );
                            break;
                        case 2:
                            message.fee = cosmos.tx.v1beta1.Fee.decode(
                                reader,
                                reader.uint32()
                            );
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };

            /**
             * Decodes an AuthInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cosmos.tx.v1beta1.AuthInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cosmos.tx.v1beta1.AuthInfo} AuthInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AuthInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader)) reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an AuthInfo message.
             * @function verify
             * @memberof cosmos.tx.v1beta1.AuthInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AuthInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (
                    message.signer_infos != null &&
                    message.hasOwnProperty("signer_infos")
                ) {
                    if (!Array.isArray(message.signer_infos))
                        return "signer_infos: array expected";
                    for (var i = 0; i < message.signer_infos.length; ++i) {
                        var error = cosmos.tx.v1beta1.SignerInfo.verify(
                            message.signer_infos[i]
                        );
                        if (error) return "signer_infos." + error;
                    }
                }
                if (message.fee != null && message.hasOwnProperty("fee")) {
                    var error = cosmos.tx.v1beta1.Fee.verify(message.fee);
                    if (error) return "fee." + error;
                }
                return null;
            };

            /**
             * Creates an AuthInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cosmos.tx.v1beta1.AuthInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cosmos.tx.v1beta1.AuthInfo} AuthInfo
             */
            AuthInfo.fromObject = function fromObject(object) {
                if (object instanceof cosmos.tx.v1beta1.AuthInfo) return object;
                var message = new cosmos.tx.v1beta1.AuthInfo();
                if (object.signer_infos) {
                    if (!Array.isArray(object.signer_infos))
                        throw TypeError(
                            ".cosmos.tx.v1beta1.AuthInfo.signer_infos: array expected"
                        );
                    message.signer_infos = [];
                    for (var i = 0; i < object.signer_infos.length; ++i) {
                        if (typeof object.signer_infos[i] !== "object")
                            throw TypeError(
                                ".cosmos.tx.v1beta1.AuthInfo.signer_infos: object expected"
                            );
                        message.signer_infos[i] =
                            cosmos.tx.v1beta1.SignerInfo.fromObject(
                                object.signer_infos[i]
                            );
                    }
                }
                if (object.fee != null) {
                    if (typeof object.fee !== "object")
                        throw TypeError(".cosmos.tx.v1beta1.AuthInfo.fee: object expected");
                    message.fee = cosmos.tx.v1beta1.Fee.fromObject(object.fee);
                }
                return message;
            };

            /**
             * Creates a plain object from an AuthInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cosmos.tx.v1beta1.AuthInfo
             * @static
             * @param {cosmos.tx.v1beta1.AuthInfo} message AuthInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            AuthInfo.toObject = function toObject(message, options) {
                if (!options) options = {};
                var object = {};
                if (options.arrays || options.defaults) object.signer_infos = [];
                if (options.defaults) object.fee = null;
                if (message.signer_infos && message.signer_infos.length) {
                    object.signer_infos = [];
                    for (var j = 0; j < message.signer_infos.length; ++j)
                        object.signer_infos[j] =
                            cosmos.tx.v1beta1.SignerInfo.toObject(
                                message.signer_infos[j],
                                options
                            );
                }
                if (message.fee != null && message.hasOwnProperty("fee"))
                    object.fee = cosmos.tx.v1beta1.Fee.toObject(
                        message.fee,
                        options
                    );
                return object;
            };

            /**
             * Converts this AuthInfo to JSON.
             * @function toJSON
             * @memberof cosmos.tx.v1beta1.AuthInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            AuthInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return AuthInfo;
        })();

        v1beta1.SignerInfo = (function () {
            /**
             * Properties of a SignerInfo.
             * @memberof cosmos.tx.v1beta1
             * @interface ISignerInfo
             * @property {google.protobuf.IAny|null} [public_key] SignerInfo public_key
             * @property {cosmos.tx.v1beta1.IModeInfo|null} [mode_info] SignerInfo mode_info
             * @property {Long|null} [sequence] SignerInfo sequence
             */

            /**
             * Constructs a new SignerInfo.
             * @memberof cosmos.tx.v1beta1
             * @classdesc Represents a SignerInfo.
             * @implements ISignerInfo
             * @constructor
             * @param {cosmos.tx.v1beta1.ISignerInfo=} [properties] Properties to set
             */
            function SignerInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SignerInfo public_key.
             * @member {google.protobuf.IAny|null|undefined} public_key
             * @memberof cosmos.tx.v1beta1.SignerInfo
             * @instance
             */
            SignerInfo.prototype.public_key = null;

            /**
             * SignerInfo mode_info.
             * @member {cosmos.tx.v1beta1.IModeInfo|null|undefined} mode_info
             * @memberof cosmos.tx.v1beta1.SignerInfo
             * @instance
             */
            SignerInfo.prototype.mode_info = null;

            /**
             * SignerInfo sequence.
             * @member {Long} sequence
             * @memberof cosmos.tx.v1beta1.SignerInfo
             * @instance
             */
            SignerInfo.prototype.sequence = $util.Long
                ? $util.Long.fromBits(0, 0, true)
                : 0;

            /**
             * Encodes the specified SignerInfo message. Does not implicitly {@link cosmos.tx.v1beta1.SignerInfo.verify|verify} messages.
             * @function encode
             * @memberof cosmos.tx.v1beta1.SignerInfo
             * @static
             * @param {cosmos.tx.v1beta1.ISignerInfo} message SignerInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SignerInfo.encode = function encode(message, writer) {
                if (!writer) writer = $Writer.create();
                if (
                    message.public_key != null &&
                    Object.hasOwnProperty.call(message, "public_key")
                )
                    google.protobuf.Any.encode(
                        message.public_key,
                        writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
                    ).ldelim();
                if (
                    message.mode_info != null &&
                    Object.hasOwnProperty.call(message, "mode_info")
                )
                    cosmos.tx.v1beta1.ModeInfo.encode(
                        message.mode_info,
                        writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
                    ).ldelim();
                if (
                    message.sequence != null &&
                    Object.hasOwnProperty.call(message, "sequence")
                )
                    writer.uint32(/* id 3, wireType 0 =*/ 24).uint64(message.sequence);
                return writer;
            };

            /**
             * Encodes the specified SignerInfo message, length delimited. Does not implicitly {@link cosmos.tx.v1beta1.SignerInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cosmos.tx.v1beta1.SignerInfo
             * @static
             * @param {cosmos.tx.v1beta1.ISignerInfo} message SignerInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SignerInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SignerInfo message from the specified reader or buffer.
             * @function decode
             * @memberof cosmos.tx.v1beta1.SignerInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cosmos.tx.v1beta1.SignerInfo} SignerInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SignerInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new cosmos.tx.v1beta1.SignerInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.public_key = google.protobuf.Any.decode(
                                reader,
                                reader.uint32()
                            );
                            break;
                        case 2:
                            message.mode_info = cosmos.tx.v1beta1.ModeInfo.decode(
                                reader,
                                reader.uint32()
                            );
                            break;
                        case 3:
                            message.sequence = reader.uint64();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };

            /**
             * Decodes a SignerInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cosmos.tx.v1beta1.SignerInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cosmos.tx.v1beta1.SignerInfo} SignerInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SignerInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader)) reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SignerInfo message.
             * @function verify
             * @memberof cosmos.tx.v1beta1.SignerInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SignerInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (
                    message.public_key != null &&
                    message.hasOwnProperty("public_key")
                ) {
                    var error = google.protobuf.Any.verify(message.public_key);
                    if (error) return "public_key." + error;
                }
                if (message.mode_info != null && message.hasOwnProperty("mode_info")) {
                    var error = cosmos.tx.v1beta1.ModeInfo.verify(
                        message.mode_info
                    );
                    if (error) return "mode_info." + error;
                }
                if (message.sequence != null && message.hasOwnProperty("sequence"))
                    if (
                        !$util.isInteger(message.sequence) &&
                        !(
                            message.sequence &&
                            $util.isInteger(message.sequence.low) &&
                            $util.isInteger(message.sequence.high)
                        )
                    )
                        return "sequence: integer|Long expected";
                return null;
            };

            /**
             * Creates a SignerInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cosmos.tx.v1beta1.SignerInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cosmos.tx.v1beta1.SignerInfo} SignerInfo
             */
            SignerInfo.fromObject = function fromObject(object) {
                if (object instanceof cosmos.tx.v1beta1.SignerInfo) return object;
                var message = new cosmos.tx.v1beta1.SignerInfo();
                if (object.public_key != null) {
                    if (typeof object.public_key !== "object")
                        throw TypeError(
                            ".cosmos.tx.v1beta1.SignerInfo.public_key: object expected"
                        );
                    message.public_key = google.protobuf.Any.fromObject(
                        object.public_key
                    );
                }
                if (object.mode_info != null) {
                    if (typeof object.mode_info !== "object")
                        throw TypeError(
                            ".cosmos.tx.v1beta1.SignerInfo.mode_info: object expected"
                        );
                    message.mode_info = cosmos.tx.v1beta1.ModeInfo.fromObject(
                        object.mode_info
                    );
                }
                if (object.sequence != null)
                    if ($util.Long)
                        (message.sequence = $util.Long.fromValue(
                            object.sequence
                        )).unsigned = true;
                    else if (typeof object.sequence === "string")
                        message.sequence = parseInt(object.sequence, 10);
                    else if (typeof object.sequence === "number")
                        message.sequence = object.sequence;
                    else if (typeof object.sequence === "object")
                        message.sequence = new $util.LongBits(
                            object.sequence.low >>> 0,
                            object.sequence.high >>> 0
                        ).toNumber(true);
                return message;
            };

            /**
             * Creates a plain object from a SignerInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cosmos.tx.v1beta1.SignerInfo
             * @static
             * @param {cosmos.tx.v1beta1.SignerInfo} message SignerInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SignerInfo.toObject = function toObject(message, options) {
                if (!options) options = {};
                var object = {};
                if (options.defaults) {
                    object.public_key = null;
                    object.mode_info = null;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.sequence =
                            options.longs === String
                                ? long.toString()
                                : options.longs === Number
                                    ? long.toNumber()
                                    : long;
                    } else object.sequence = options.longs === String ? "0" : 0;
                }
                if (message.public_key != null && message.hasOwnProperty("public_key"))
                    object.public_key = google.protobuf.Any.toObject(
                        message.public_key,
                        options
                    );
                if (message.mode_info != null && message.hasOwnProperty("mode_info"))
                    object.mode_info = cosmos.tx.v1beta1.ModeInfo.toObject(
                        message.mode_info,
                        options
                    );
                if (message.sequence != null && message.hasOwnProperty("sequence"))
                    if (typeof message.sequence === "number")
                        object.sequence =
                            options.longs === String
                                ? String(message.sequence)
                                : message.sequence;
                    else
                        object.sequence =
                            options.longs === String
                                ? $util.Long.prototype.toString.call(message.sequence)
                                : options.longs === Number
                                    ? new $util.LongBits(
                                        message.sequence.low >>> 0,
                                        message.sequence.high >>> 0
                                    ).toNumber(true)
                                    : message.sequence;
                return object;
            };

            /**
             * Converts this SignerInfo to JSON.
             * @function toJSON
             * @memberof cosmos.tx.v1beta1.SignerInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SignerInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return SignerInfo;
        })();

        v1beta1.ModeInfo = (function () {
            /**
             * Properties of a ModeInfo.
             * @memberof cosmos.tx.v1beta1
             * @interface IModeInfo
             * @property {cosmos.tx.v1beta1.ModeInfo.ISingle|null} [single] ModeInfo single
             * @property {cosmos.tx.v1beta1.ModeInfo.IMulti|null} [multi] ModeInfo multi
             */

            /**
             * Constructs a new ModeInfo.
             * @memberof cosmos.tx.v1beta1
             * @classdesc Represents a ModeInfo.
             * @implements IModeInfo
             * @constructor
             * @param {cosmos.tx.v1beta1.IModeInfo=} [properties] Properties to set
             */
            function ModeInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ModeInfo single.
             * @member {cosmos.tx.v1beta1.ModeInfo.ISingle|null|undefined} single
             * @memberof cosmos.tx.v1beta1.ModeInfo
             * @instance
             */
            ModeInfo.prototype.single = null;

            /**
             * ModeInfo multi.
             * @member {cosmos.tx.v1beta1.ModeInfo.IMulti|null|undefined} multi
             * @memberof cosmos.tx.v1beta1.ModeInfo
             * @instance
             */
            ModeInfo.prototype.multi = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            /**
             * ModeInfo sum.
             * @member {"single"|"multi"|undefined} sum
             * @memberof cosmos.tx.v1beta1.ModeInfo
             * @instance
             */
            Object.defineProperty(ModeInfo.prototype, "sum", {
                get: $util.oneOfGetter(($oneOfFields = ["single", "multi"])),
                set: $util.oneOfSetter($oneOfFields),
            });

            /**
             * Encodes the specified ModeInfo message. Does not implicitly {@link cosmos.tx.v1beta1.ModeInfo.verify|verify} messages.
             * @function encode
             * @memberof cosmos.tx.v1beta1.ModeInfo
             * @static
             * @param {cosmos.tx.v1beta1.IModeInfo} message ModeInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ModeInfo.encode = function encode(message, writer) {
                if (!writer) writer = $Writer.create();
                if (
                    message.single != null &&
                    Object.hasOwnProperty.call(message, "single")
                )
                    cosmos.tx.v1beta1.ModeInfo.Single.encode(
                        message.single,
                        writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
                    ).ldelim();
                if (
                    message.multi != null &&
                    Object.hasOwnProperty.call(message, "multi")
                )
                    cosmos.tx.v1beta1.ModeInfo.Multi.encode(
                        message.multi,
                        writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
                    ).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ModeInfo message, length delimited. Does not implicitly {@link cosmos.tx.v1beta1.ModeInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cosmos.tx.v1beta1.ModeInfo
             * @static
             * @param {cosmos.tx.v1beta1.IModeInfo} message ModeInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ModeInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ModeInfo message from the specified reader or buffer.
             * @function decode
             * @memberof cosmos.tx.v1beta1.ModeInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cosmos.tx.v1beta1.ModeInfo} ModeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ModeInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new cosmos.tx.v1beta1.ModeInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.single = cosmos.tx.v1beta1.ModeInfo.Single.decode(
                                reader,
                                reader.uint32()
                            );
                            break;
                        case 2:
                            message.multi = cosmos.tx.v1beta1.ModeInfo.Multi.decode(
                                reader,
                                reader.uint32()
                            );
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ModeInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cosmos.tx.v1beta1.ModeInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cosmos.tx.v1beta1.ModeInfo} ModeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ModeInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader)) reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ModeInfo message.
             * @function verify
             * @memberof cosmos.tx.v1beta1.ModeInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ModeInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.single != null && message.hasOwnProperty("single")) {
                    properties.sum = 1;
                    {
                        var error = cosmos.tx.v1beta1.ModeInfo.Single.verify(
                            message.single
                        );
                        if (error) return "single." + error;
                    }
                }
                if (message.multi != null && message.hasOwnProperty("multi")) {
                    if (properties.sum === 1) return "sum: multiple values";
                    properties.sum = 1;
                    {
                        var error = cosmos.tx.v1beta1.ModeInfo.Multi.verify(
                            message.multi
                        );
                        if (error) return "multi." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a ModeInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cosmos.tx.v1beta1.ModeInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cosmos.tx.v1beta1.ModeInfo} ModeInfo
             */
            ModeInfo.fromObject = function fromObject(object) {
                if (object instanceof cosmos.tx.v1beta1.ModeInfo) return object;
                var message = new cosmos.tx.v1beta1.ModeInfo();
                if (object.single != null) {
                    if (typeof object.single !== "object")
                        throw TypeError(
                            ".cosmos.tx.v1beta1.ModeInfo.single: object expected"
                        );
                    message.single = cosmos.tx.v1beta1.ModeInfo.Single.fromObject(
                        object.single
                    );
                }
                if (object.multi != null) {
                    if (typeof object.multi !== "object")
                        throw TypeError(
                            ".cosmos.tx.v1beta1.ModeInfo.multi: object expected"
                        );
                    message.multi = cosmos.tx.v1beta1.ModeInfo.Multi.fromObject(
                        object.multi
                    );
                }
                return message;
            };

            /**
             * Creates a plain object from a ModeInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cosmos.tx.v1beta1.ModeInfo
             * @static
             * @param {cosmos.tx.v1beta1.ModeInfo} message ModeInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ModeInfo.toObject = function toObject(message, options) {
                if (!options) options = {};
                var object = {};
                if (message.single != null && message.hasOwnProperty("single")) {
                    object.single = cosmos.tx.v1beta1.ModeInfo.Single.toObject(
                        message.single,
                        options
                    );
                    if (options.oneofs) object.sum = "single";
                }
                if (message.multi != null && message.hasOwnProperty("multi")) {
                    object.multi = cosmos.tx.v1beta1.ModeInfo.Multi.toObject(
                        message.multi,
                        options
                    );
                    if (options.oneofs) object.sum = "multi";
                }
                return object;
            };

            /**
             * Converts this ModeInfo to JSON.
             * @function toJSON
             * @memberof cosmos.tx.v1beta1.ModeInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ModeInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            ModeInfo.Single = (function () {
                /**
                 * Properties of a Single.
                 * @memberof cosmos.tx.v1beta1.ModeInfo
                 * @interface ISingle
                 * @property {cosmos.tx.signing.v1beta1.SignMode|null} [mode] Single mode
                 */

                /**
                 * Constructs a new Single.
                 * @memberof cosmos.tx.v1beta1.ModeInfo
                 * @classdesc Represents a Single.
                 * @implements ISingle
                 * @constructor
                 * @param {cosmos.tx.v1beta1.ModeInfo.ISingle=} [properties] Properties to set
                 */
                function Single(properties) {
                    if (properties)
                        for (
                            var keys = Object.keys(properties), i = 0;
                            i < keys.length;
                            ++i
                        )
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Single mode.
                 * @member {cosmos.tx.signing.v1beta1.SignMode} mode
                 * @memberof cosmos.tx.v1beta1.ModeInfo.Single
                 * @instance
                 */
                Single.prototype.mode = 0;

                /**
                 * Encodes the specified Single message. Does not implicitly {@link cosmos.tx.v1beta1.ModeInfo.Single.verify|verify} messages.
                 * @function encode
                 * @memberof cosmos.tx.v1beta1.ModeInfo.Single
                 * @static
                 * @param {cosmos.tx.v1beta1.ModeInfo.ISingle} message Single message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Single.encode = function encode(message, writer) {
                    if (!writer) writer = $Writer.create();
                    if (
                        message.mode != null &&
                        Object.hasOwnProperty.call(message, "mode")
                    )
                        writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.mode);
                    return writer;
                };

                /**
                 * Encodes the specified Single message, length delimited. Does not implicitly {@link cosmos.tx.v1beta1.ModeInfo.Single.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof cosmos.tx.v1beta1.ModeInfo.Single
                 * @static
                 * @param {cosmos.tx.v1beta1.ModeInfo.ISingle} message Single message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Single.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Single message from the specified reader or buffer.
                 * @function decode
                 * @memberof cosmos.tx.v1beta1.ModeInfo.Single
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {cosmos.tx.v1beta1.ModeInfo.Single} Single
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Single.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length,
                        message = new cosmos.tx.v1beta1.ModeInfo.Single();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                            case 1:
                                message.mode = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Single message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof cosmos.tx.v1beta1.ModeInfo.Single
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {cosmos.tx.v1beta1.ModeInfo.Single} Single
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Single.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader)) reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Single message.
                 * @function verify
                 * @memberof cosmos.tx.v1beta1.ModeInfo.Single
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Single.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.mode != null && message.hasOwnProperty("mode"))
                        switch (message.mode) {
                            default:
                                return "mode: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                            case 127:
                                break;
                        }
                    return null;
                };

                /**
                 * Creates a Single message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof cosmos.tx.v1beta1.ModeInfo.Single
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {cosmos.tx.v1beta1.ModeInfo.Single} Single
                 */
                Single.fromObject = function fromObject(object) {
                    if (object instanceof cosmos.tx.v1beta1.ModeInfo.Single)
                        return object;
                    var message = new cosmos.tx.v1beta1.ModeInfo.Single();
                    switch (object.mode) {
                        case "SIGN_MODE_UNSPECIFIED":
                        case 0:
                            message.mode = 0;
                            break;
                        case "SIGN_MODE_DIRECT":
                        case 1:
                            message.mode = 1;
                            break;
                        case "SIGN_MODE_TEXTUAL":
                        case 2:
                            message.mode = 2;
                            break;
                        case "SIGN_MODE_LEGACY_AMINO_JSON":
                        case 127:
                            message.mode = 127;
                            break;
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a Single message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof cosmos.tx.v1beta1.ModeInfo.Single
                 * @static
                 * @param {cosmos.tx.v1beta1.ModeInfo.Single} message Single
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Single.toObject = function toObject(message, options) {
                    if (!options) options = {};
                    var object = {};
                    if (options.defaults)
                        object.mode =
                            options.enums === String ? "SIGN_MODE_UNSPECIFIED" : 0;
                    if (message.mode != null && message.hasOwnProperty("mode"))
                        object.mode =
                            options.enums === String
                                ? cosmos.tx.signing.v1beta1.SignMode[message.mode]
                                : message.mode;
                    return object;
                };

                /**
                 * Converts this Single to JSON.
                 * @function toJSON
                 * @memberof cosmos.tx.v1beta1.ModeInfo.Single
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Single.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Single;
            })();

            ModeInfo.Multi = (function () {
                /**
                 * Properties of a Multi.
                 * @memberof cosmos.tx.v1beta1.ModeInfo
                 * @interface IMulti
                 * @property {cosmos.crypto.multisig.v1beta1.ICompactBitArray|null} [bitarray] Multi bitarray
                 * @property {Array.<cosmos.tx.v1beta1.IModeInfo>|null} [mode_infos] Multi mode_infos
                 */

                /**
                 * Constructs a new Multi.
                 * @memberof cosmos.tx.v1beta1.ModeInfo
                 * @classdesc Represents a Multi.
                 * @implements IMulti
                 * @constructor
                 * @param {cosmos.tx.v1beta1.ModeInfo.IMulti=} [properties] Properties to set
                 */
                function Multi(properties) {
                    this.mode_infos = [];
                    if (properties)
                        for (
                            var keys = Object.keys(properties), i = 0;
                            i < keys.length;
                            ++i
                        )
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Multi bitarray.
                 * @member {cosmos.crypto.multisig.v1beta1.ICompactBitArray|null|undefined} bitarray
                 * @memberof cosmos.tx.v1beta1.ModeInfo.Multi
                 * @instance
                 */
                Multi.prototype.bitarray = null;

                /**
                 * Multi mode_infos.
                 * @member {Array.<cosmos.tx.v1beta1.IModeInfo>} mode_infos
                 * @memberof cosmos.tx.v1beta1.ModeInfo.Multi
                 * @instance
                 */
                Multi.prototype.mode_infos = $util.emptyArray;

                /**
                 * Encodes the specified Multi message. Does not implicitly {@link cosmos.tx.v1beta1.ModeInfo.Multi.verify|verify} messages.
                 * @function encode
                 * @memberof cosmos.tx.v1beta1.ModeInfo.Multi
                 * @static
                 * @param {cosmos.tx.v1beta1.ModeInfo.IMulti} message Multi message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Multi.encode = function encode(message, writer) {
                    if (!writer) writer = $Writer.create();
                    if (
                        message.bitarray != null &&
                        Object.hasOwnProperty.call(message, "bitarray")
                    )
                        cosmos.crypto.multisig.v1beta1.CompactBitArray.encode(
                            message.bitarray,
                            writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
                        ).ldelim();
                    if (message.mode_infos != null && message.mode_infos.length)
                        for (var i = 0; i < message.mode_infos.length; ++i)
                            cosmos.tx.v1beta1.ModeInfo.encode(
                                message.mode_infos[i],
                                writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
                            ).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified Multi message, length delimited. Does not implicitly {@link cosmos.tx.v1beta1.ModeInfo.Multi.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof cosmos.tx.v1beta1.ModeInfo.Multi
                 * @static
                 * @param {cosmos.tx.v1beta1.ModeInfo.IMulti} message Multi message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Multi.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Multi message from the specified reader or buffer.
                 * @function decode
                 * @memberof cosmos.tx.v1beta1.ModeInfo.Multi
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {cosmos.tx.v1beta1.ModeInfo.Multi} Multi
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Multi.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length,
                        message = new cosmos.tx.v1beta1.ModeInfo.Multi();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                            case 1:
                                message.bitarray =
                                    cosmos.crypto.multisig.v1beta1.CompactBitArray.decode(
                                        reader,
                                        reader.uint32()
                                    );
                                break;
                            case 2:
                                if (!(message.mode_infos && message.mode_infos.length))
                                    message.mode_infos = [];
                                message.mode_infos.push(
                                    cosmos.tx.v1beta1.ModeInfo.decode(
                                        reader,
                                        reader.uint32()
                                    )
                                );
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Multi message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof cosmos.tx.v1beta1.ModeInfo.Multi
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {cosmos.tx.v1beta1.ModeInfo.Multi} Multi
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Multi.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader)) reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Multi message.
                 * @function verify
                 * @memberof cosmos.tx.v1beta1.ModeInfo.Multi
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Multi.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.bitarray != null && message.hasOwnProperty("bitarray")) {
                        var error =
                            cosmos.crypto.multisig.v1beta1.CompactBitArray.verify(
                                message.bitarray
                            );
                        if (error) return "bitarray." + error;
                    }
                    if (
                        message.mode_infos != null &&
                        message.hasOwnProperty("mode_infos")
                    ) {
                        if (!Array.isArray(message.mode_infos))
                            return "mode_infos: array expected";
                        for (var i = 0; i < message.mode_infos.length; ++i) {
                            var error = cosmos.tx.v1beta1.ModeInfo.verify(
                                message.mode_infos[i]
                            );
                            if (error) return "mode_infos." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a Multi message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof cosmos.tx.v1beta1.ModeInfo.Multi
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {cosmos.tx.v1beta1.ModeInfo.Multi} Multi
                 */
                Multi.fromObject = function fromObject(object) {
                    if (object instanceof cosmos.tx.v1beta1.ModeInfo.Multi)
                        return object;
                    var message = new cosmos.tx.v1beta1.ModeInfo.Multi();
                    if (object.bitarray != null) {
                        if (typeof object.bitarray !== "object")
                            throw TypeError(
                                ".cosmos.tx.v1beta1.ModeInfo.Multi.bitarray: object expected"
                            );
                        message.bitarray =
                            cosmos.crypto.multisig.v1beta1.CompactBitArray.fromObject(
                                object.bitarray
                            );
                    }
                    if (object.mode_infos) {
                        if (!Array.isArray(object.mode_infos))
                            throw TypeError(
                                ".cosmos.tx.v1beta1.ModeInfo.Multi.mode_infos: array expected"
                            );
                        message.mode_infos = [];
                        for (var i = 0; i < object.mode_infos.length; ++i) {
                            if (typeof object.mode_infos[i] !== "object")
                                throw TypeError(
                                    ".cosmos.tx.v1beta1.ModeInfo.Multi.mode_infos: object expected"
                                );
                            message.mode_infos[i] =
                                cosmos.tx.v1beta1.ModeInfo.fromObject(
                                    object.mode_infos[i]
                                );
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a Multi message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof cosmos.tx.v1beta1.ModeInfo.Multi
                 * @static
                 * @param {cosmos.tx.v1beta1.ModeInfo.Multi} message Multi
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Multi.toObject = function toObject(message, options) {
                    if (!options) options = {};
                    var object = {};
                    if (options.arrays || options.defaults) object.mode_infos = [];
                    if (options.defaults) object.bitarray = null;
                    if (message.bitarray != null && message.hasOwnProperty("bitarray"))
                        object.bitarray =
                            cosmos.crypto.multisig.v1beta1.CompactBitArray.toObject(
                                message.bitarray,
                                options
                            );
                    if (message.mode_infos && message.mode_infos.length) {
                        object.mode_infos = [];
                        for (var j = 0; j < message.mode_infos.length; ++j)
                            object.mode_infos[j] = cosmos.tx.v1beta1.ModeInfo.toObject(
                                message.mode_infos[j],
                                options
                            );
                    }
                    return object;
                };

                /**
                 * Converts this Multi to JSON.
                 * @function toJSON
                 * @memberof cosmos.tx.v1beta1.ModeInfo.Multi
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Multi.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Multi;
            })();

            return ModeInfo;
        })();

        v1beta1.Fee = (function () {
            /**
             * Properties of a Fee.
             * @memberof cosmos.tx.v1beta1
             * @interface IFee
             * @property {Array.<cosmos.base.v1beta1.ICoin>|null} [amount] Fee amount
             * @property {Long|null} [gas_limit] Fee gas_limit
             * @property {string|null} [payer] Fee payer
             * @property {string|null} [granter] Fee granter
             */

            /**
             * Constructs a new Fee.
             * @memberof cosmos.tx.v1beta1
             * @classdesc Represents a Fee.
             * @implements IFee
             * @constructor
             * @param {cosmos.tx.v1beta1.IFee=} [properties] Properties to set
             */
            function Fee(properties) {
                this.amount = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Fee amount.
             * @member {Array.<cosmos.base.v1beta1.ICoin>} amount
             * @memberof cosmos.tx.v1beta1.Fee
             * @instance
             */
            Fee.prototype.amount = $util.emptyArray;

            /**
             * Fee gas_limit.
             * @member {Long} gas_limit
             * @memberof cosmos.tx.v1beta1.Fee
             * @instance
             */
            Fee.prototype.gas_limit = $util.Long
                ? $util.Long.fromBits(0, 0, true)
                : 0;

            /**
             * Fee payer.
             * @member {string} payer
             * @memberof cosmos.tx.v1beta1.Fee
             * @instance
             */
            Fee.prototype.payer = "";

            /**
             * Fee granter.
             * @member {string} granter
             * @memberof cosmos.tx.v1beta1.Fee
             * @instance
             */
            Fee.prototype.granter = "";

            /**
             * Encodes the specified Fee message. Does not implicitly {@link cosmos.tx.v1beta1.Fee.verify|verify} messages.
             * @function encode
             * @memberof cosmos.tx.v1beta1.Fee
             * @static
             * @param {cosmos.tx.v1beta1.IFee} message Fee message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Fee.encode = function encode(message, writer) {
                if (!writer) writer = $Writer.create();
                if (message.amount != null && message.amount.length)
                    for (var i = 0; i < message.amount.length; ++i)
                        cosmos.base.v1beta1.Coin.encode(
                            message.amount[i],
                            writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
                        ).ldelim();
                if (
                    message.gas_limit != null &&
                    Object.hasOwnProperty.call(message, "gas_limit")
                )
                    writer.uint32(/* id 2, wireType 0 =*/ 16).uint64(message.gas_limit);
                if (
                    message.payer != null &&
                    Object.hasOwnProperty.call(message, "payer")
                )
                    writer.uint32(/* id 3, wireType 2 =*/ 26).string(message.payer);
                if (
                    message.granter != null &&
                    Object.hasOwnProperty.call(message, "granter")
                )
                    writer.uint32(/* id 4, wireType 2 =*/ 34).string(message.granter);
                return writer;
            };

            /**
             * Encodes the specified Fee message, length delimited. Does not implicitly {@link cosmos.tx.v1beta1.Fee.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cosmos.tx.v1beta1.Fee
             * @static
             * @param {cosmos.tx.v1beta1.IFee} message Fee message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Fee.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Fee message from the specified reader or buffer.
             * @function decode
             * @memberof cosmos.tx.v1beta1.Fee
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cosmos.tx.v1beta1.Fee} Fee
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Fee.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new cosmos.tx.v1beta1.Fee();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            if (!(message.amount && message.amount.length))
                                message.amount = [];
                            message.amount.push(
                                cosmos.base.v1beta1.Coin.decode(reader, reader.uint32())
                            );
                            break;
                        case 2:
                            message.gas_limit = reader.uint64();
                            break;
                        case 3:
                            message.payer = reader.string();
                            break;
                        case 4:
                            message.granter = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Fee message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cosmos.tx.v1beta1.Fee
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cosmos.tx.v1beta1.Fee} Fee
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Fee.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader)) reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Fee message.
             * @function verify
             * @memberof cosmos.tx.v1beta1.Fee
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Fee.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.amount != null && message.hasOwnProperty("amount")) {
                    if (!Array.isArray(message.amount)) return "amount: array expected";
                    for (var i = 0; i < message.amount.length; ++i) {
                        var error = cosmos.base.v1beta1.Coin.verify(
                            message.amount[i]
                        );
                        if (error) return "amount." + error;
                    }
                }
                if (message.gas_limit != null && message.hasOwnProperty("gas_limit"))
                    if (
                        !$util.isInteger(message.gas_limit) &&
                        !(
                            message.gas_limit &&
                            $util.isInteger(message.gas_limit.low) &&
                            $util.isInteger(message.gas_limit.high)
                        )
                    )
                        return "gas_limit: integer|Long expected";
                if (message.payer != null && message.hasOwnProperty("payer"))
                    if (!$util.isString(message.payer)) return "payer: string expected";
                if (message.granter != null && message.hasOwnProperty("granter"))
                    if (!$util.isString(message.granter))
                        return "granter: string expected";
                return null;
            };

            /**
             * Creates a Fee message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cosmos.tx.v1beta1.Fee
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cosmos.tx.v1beta1.Fee} Fee
             */
            Fee.fromObject = function fromObject(object) {
                if (object instanceof cosmos.tx.v1beta1.Fee) return object;
                var message = new cosmos.tx.v1beta1.Fee();
                if (object.amount) {
                    if (!Array.isArray(object.amount))
                        throw TypeError(".cosmos.tx.v1beta1.Fee.amount: array expected");
                    message.amount = [];
                    for (var i = 0; i < object.amount.length; ++i) {
                        if (typeof object.amount[i] !== "object")
                            throw TypeError(".cosmos.tx.v1beta1.Fee.amount: object expected");
                        message.amount[i] = cosmos.base.v1beta1.Coin.fromObject(
                            object.amount[i]
                        );
                    }
                }
                if (object.gas_limit != null)
                    if ($util.Long)
                        (message.gas_limit = $util.Long.fromValue(
                            object.gas_limit
                        )).unsigned = true;
                    else if (typeof object.gas_limit === "string")
                        message.gas_limit = parseInt(object.gas_limit, 10);
                    else if (typeof object.gas_limit === "number")
                        message.gas_limit = object.gas_limit;
                    else if (typeof object.gas_limit === "object")
                        message.gas_limit = new $util.LongBits(
                            object.gas_limit.low >>> 0,
                            object.gas_limit.high >>> 0
                        ).toNumber(true);
                if (object.payer != null) message.payer = String(object.payer);
                if (object.granter != null) message.granter = String(object.granter);
                return message;
            };

            /**
             * Creates a plain object from a Fee message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cosmos.tx.v1beta1.Fee
             * @static
             * @param {cosmos.tx.v1beta1.Fee} message Fee
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Fee.toObject = function toObject(message, options) {
                if (!options) options = {};
                var object = {};
                if (options.arrays || options.defaults) object.amount = [];
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.gas_limit =
                            options.longs === String
                                ? long.toString()
                                : options.longs === Number
                                    ? long.toNumber()
                                    : long;
                    } else object.gas_limit = options.longs === String ? "0" : 0;
                    object.payer = "";
                    object.granter = "";
                }
                if (message.amount && message.amount.length) {
                    object.amount = [];
                    for (var j = 0; j < message.amount.length; ++j)
                        object.amount[j] = cosmos.base.v1beta1.Coin.toObject(
                            message.amount[j],
                            options
                        );
                }
                if (message.gas_limit != null && message.hasOwnProperty("gas_limit"))
                    if (typeof message.gas_limit === "number")
                        object.gas_limit =
                            options.longs === String
                                ? String(message.gas_limit)
                                : message.gas_limit;
                    else
                        object.gas_limit =
                            options.longs === String
                                ? $util.Long.prototype.toString.call(message.gas_limit)
                                : options.longs === Number
                                    ? new $util.LongBits(
                                        message.gas_limit.low >>> 0,
                                        message.gas_limit.high >>> 0
                                    ).toNumber(true)
                                    : message.gas_limit;
                if (message.payer != null && message.hasOwnProperty("payer"))
                    object.payer = message.payer;
                if (message.granter != null && message.hasOwnProperty("granter"))
                    object.granter = message.granter;
                return object;
            };

            /**
             * Converts this Fee to JSON.
             * @function toJSON
             * @memberof cosmos.tx.v1beta1.Fee
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Fee.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Fee;
        })();

        v1beta1.Service = (function () {
            /**
             * Constructs a new Service service.
             * @memberof cosmos.tx.v1beta1
             * @classdesc Represents a Service
             * @extends $protobuf.rpc.Service
             * @constructor
             * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
             * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
             * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
             */
            function Service(rpcImpl, requestDelimited, responseDelimited) {
                $protobuf.rpc.Service.call(
                    this,
                    rpcImpl,
                    requestDelimited,
                    responseDelimited
                );
            }

            (Service.prototype = Object.create(
                $protobuf.rpc.Service.prototype
            )).constructor = Service;

            /**
             * Callback as used by {@link cosmos.tx.v1beta1.Service#simulate}.
             * @memberof cosmos.tx.v1beta1.Service
             * @typedef SimulateCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {cosmos.tx.v1beta1.SimulateResponse} [response] SimulateResponse
             */

            /**
             * Calls Simulate.
             * @function simulate
             * @memberof cosmos.tx.v1beta1.Service
             * @instance
             * @param {cosmos.tx.v1beta1.ISimulateRequest} request SimulateRequest message or plain object
             * @param {cosmos.tx.v1beta1.Service.SimulateCallback} callback Node-style callback called with the error, if any, and SimulateResponse
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(
                (Service.prototype.simulate = function simulate(request, callback) {
                    return this.rpcCall(
                        simulate,
                        cosmos.tx.v1beta1.SimulateRequest,
                        cosmos.tx.v1beta1.SimulateResponse,
                        request,
                        callback
                    );
                }),
                "name",
                { value: "Simulate" }
            );

            /**
             * Calls Simulate.
             * @function simulate
             * @memberof cosmos.tx.v1beta1.Service
             * @instance
             * @param {cosmos.tx.v1beta1.ISimulateRequest} request SimulateRequest message or plain object
             * @returns {Promise<cosmos.tx.v1beta1.SimulateResponse>} Promise
             * @variation 2
             */

            /**
             * Callback as used by {@link cosmos.tx.v1beta1.Service#getTx}.
             * @memberof cosmos.tx.v1beta1.Service
             * @typedef GetTxCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {cosmos.tx.v1beta1.GetTxResponse} [response] GetTxResponse
             */

            /**
             * Calls GetTx.
             * @function getTx
             * @memberof cosmos.tx.v1beta1.Service
             * @instance
             * @param {cosmos.tx.v1beta1.IGetTxRequest} request GetTxRequest message or plain object
             * @param {cosmos.tx.v1beta1.Service.GetTxCallback} callback Node-style callback called with the error, if any, and GetTxResponse
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(
                (Service.prototype.getTx = function getTx(request, callback) {
                    return this.rpcCall(
                        getTx,
                        cosmos.tx.v1beta1.GetTxRequest,
                        cosmos.tx.v1beta1.GetTxResponse,
                        request,
                        callback
                    );
                }),
                "name",
                { value: "GetTx" }
            );

            /**
             * Calls GetTx.
             * @function getTx
             * @memberof cosmos.tx.v1beta1.Service
             * @instance
             * @param {cosmos.tx.v1beta1.IGetTxRequest} request GetTxRequest message or plain object
             * @returns {Promise<cosmos.tx.v1beta1.GetTxResponse>} Promise
             * @variation 2
             */

            /**
             * Callback as used by {@link cosmos.tx.v1beta1.Service#broadcastTx}.
             * @memberof cosmos.tx.v1beta1.Service
             * @typedef BroadcastTxCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {cosmos.tx.v1beta1.BroadcastTxResponse} [response] BroadcastTxResponse
             */

            /**
             * Calls BroadcastTx.
             * @function broadcastTx
             * @memberof cosmos.tx.v1beta1.Service
             * @instance
             * @param {cosmos.tx.v1beta1.IBroadcastTxRequest} request BroadcastTxRequest message or plain object
             * @param {cosmos.tx.v1beta1.Service.BroadcastTxCallback} callback Node-style callback called with the error, if any, and BroadcastTxResponse
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(
                (Service.prototype.broadcastTx = function broadcastTx(
                    request,
                    callback
                ) {
                    return this.rpcCall(
                        broadcastTx,
                        cosmos.tx.v1beta1.BroadcastTxRequest,
                        cosmos.tx.v1beta1.BroadcastTxResponse,
                        request,
                        callback
                    );
                }),
                "name",
                { value: "BroadcastTx" }
            );

            /**
             * Calls BroadcastTx.
             * @function broadcastTx
             * @memberof cosmos.tx.v1beta1.Service
             * @instance
             * @param {cosmos.tx.v1beta1.IBroadcastTxRequest} request BroadcastTxRequest message or plain object
             * @returns {Promise<cosmos.tx.v1beta1.BroadcastTxResponse>} Promise
             * @variation 2
             */

            /**
             * Callback as used by {@link cosmos.tx.v1beta1.Service#getTxsEvent}.
             * @memberof cosmos.tx.v1beta1.Service
             * @typedef GetTxsEventCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {cosmos.tx.v1beta1.GetTxsEventResponse} [response] GetTxsEventResponse
             */

            /**
             * Calls GetTxsEvent.
             * @function getTxsEvent
             * @memberof cosmos.tx.v1beta1.Service
             * @instance
             * @param {cosmos.tx.v1beta1.IGetTxsEventRequest} request GetTxsEventRequest message or plain object
             * @param {cosmos.tx.v1beta1.Service.GetTxsEventCallback} callback Node-style callback called with the error, if any, and GetTxsEventResponse
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(
                (Service.prototype.getTxsEvent = function getTxsEvent(
                    request,
                    callback
                ) {
                    return this.rpcCall(
                        getTxsEvent,
                        cosmos.tx.v1beta1.GetTxsEventRequest,
                        cosmos.tx.v1beta1.GetTxsEventResponse,
                        request,
                        callback
                    );
                }),
                "name",
                { value: "GetTxsEvent" }
            );

            /**
             * Calls GetTxsEvent.
             * @function getTxsEvent
             * @memberof cosmos.tx.v1beta1.Service
             * @instance
             * @param {cosmos.tx.v1beta1.IGetTxsEventRequest} request GetTxsEventRequest message or plain object
             * @returns {Promise<cosmos.tx.v1beta1.GetTxsEventResponse>} Promise
             * @variation 2
             */

            return Service;
        })();

        v1beta1.GetTxsEventRequest = (function () {
            /**
             * Properties of a GetTxsEventRequest.
             * @memberof cosmos.tx.v1beta1
             * @interface IGetTxsEventRequest
             * @property {Array.<string>|null} [events] GetTxsEventRequest events
             * @property {cosmos.base.query.v1beta1.IPageRequest|null} [pagination] GetTxsEventRequest pagination
             * @property {cosmos.tx.v1beta1.OrderBy|null} [order_by] GetTxsEventRequest order_by
             */

            /**
             * Constructs a new GetTxsEventRequest.
             * @memberof cosmos.tx.v1beta1
             * @classdesc Represents a GetTxsEventRequest.
             * @implements IGetTxsEventRequest
             * @constructor
             * @param {cosmos.tx.v1beta1.IGetTxsEventRequest=} [properties] Properties to set
             */
            function GetTxsEventRequest(properties) {
                this.events = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GetTxsEventRequest events.
             * @member {Array.<string>} events
             * @memberof cosmos.tx.v1beta1.GetTxsEventRequest
             * @instance
             */
            GetTxsEventRequest.prototype.events = $util.emptyArray;

            /**
             * GetTxsEventRequest pagination.
             * @member {cosmos.base.query.v1beta1.IPageRequest|null|undefined} pagination
             * @memberof cosmos.tx.v1beta1.GetTxsEventRequest
             * @instance
             */
            GetTxsEventRequest.prototype.pagination = null;

            /**
             * GetTxsEventRequest order_by.
             * @member {cosmos.tx.v1beta1.OrderBy} order_by
             * @memberof cosmos.tx.v1beta1.GetTxsEventRequest
             * @instance
             */
            GetTxsEventRequest.prototype.order_by = 0;

            /**
             * Encodes the specified GetTxsEventRequest message. Does not implicitly {@link cosmos.tx.v1beta1.GetTxsEventRequest.verify|verify} messages.
             * @function encode
             * @memberof cosmos.tx.v1beta1.GetTxsEventRequest
             * @static
             * @param {cosmos.tx.v1beta1.IGetTxsEventRequest} message GetTxsEventRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetTxsEventRequest.encode = function encode(message, writer) {
                if (!writer) writer = $Writer.create();
                if (message.events != null && message.events.length)
                    for (var i = 0; i < message.events.length; ++i)
                        writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.events[i]);
                if (
                    message.pagination != null &&
                    Object.hasOwnProperty.call(message, "pagination")
                )
                    cosmos.base.query.v1beta1.PageRequest.encode(
                        message.pagination,
                        writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
                    ).ldelim();
                if (
                    message.order_by != null &&
                    Object.hasOwnProperty.call(message, "order_by")
                )
                    writer.uint32(/* id 3, wireType 0 =*/ 24).int32(message.order_by);
                return writer;
            };

            /**
             * Encodes the specified GetTxsEventRequest message, length delimited. Does not implicitly {@link cosmos.tx.v1beta1.GetTxsEventRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cosmos.tx.v1beta1.GetTxsEventRequest
             * @static
             * @param {cosmos.tx.v1beta1.IGetTxsEventRequest} message GetTxsEventRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetTxsEventRequest.encodeDelimited = function encodeDelimited(
                message,
                writer
            ) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GetTxsEventRequest message from the specified reader or buffer.
             * @function decode
             * @memberof cosmos.tx.v1beta1.GetTxsEventRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cosmos.tx.v1beta1.GetTxsEventRequest} GetTxsEventRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetTxsEventRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new cosmos.tx.v1beta1.GetTxsEventRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            if (!(message.events && message.events.length))
                                message.events = [];
                            message.events.push(reader.string());
                            break;
                        case 2:
                            message.pagination =
                                cosmos.base.query.v1beta1.PageRequest.decode(
                                    reader,
                                    reader.uint32()
                                );
                            break;
                        case 3:
                            message.order_by = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };

            /**
             * Decodes a GetTxsEventRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cosmos.tx.v1beta1.GetTxsEventRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cosmos.tx.v1beta1.GetTxsEventRequest} GetTxsEventRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetTxsEventRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader)) reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GetTxsEventRequest message.
             * @function verify
             * @memberof cosmos.tx.v1beta1.GetTxsEventRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GetTxsEventRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.events != null && message.hasOwnProperty("events")) {
                    if (!Array.isArray(message.events)) return "events: array expected";
                    for (var i = 0; i < message.events.length; ++i)
                        if (!$util.isString(message.events[i]))
                            return "events: string[] expected";
                }
                if (
                    message.pagination != null &&
                    message.hasOwnProperty("pagination")
                ) {
                    var error = cosmos.base.query.v1beta1.PageRequest.verify(
                        message.pagination
                    );
                    if (error) return "pagination." + error;
                }
                if (message.order_by != null && message.hasOwnProperty("order_by"))
                    switch (message.order_by) {
                        default:
                            return "order_by: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                            break;
                    }
                return null;
            };

            /**
             * Creates a GetTxsEventRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cosmos.tx.v1beta1.GetTxsEventRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cosmos.tx.v1beta1.GetTxsEventRequest} GetTxsEventRequest
             */
            GetTxsEventRequest.fromObject = function fromObject(object) {
                if (object instanceof cosmos.tx.v1beta1.GetTxsEventRequest)
                    return object;
                var message = new cosmos.tx.v1beta1.GetTxsEventRequest();
                if (object.events) {
                    if (!Array.isArray(object.events))
                        throw TypeError(
                            ".cosmos.tx.v1beta1.GetTxsEventRequest.events: array expected"
                        );
                    message.events = [];
                    for (var i = 0; i < object.events.length; ++i)
                        message.events[i] = String(object.events[i]);
                }
                if (object.pagination != null) {
                    if (typeof object.pagination !== "object")
                        throw TypeError(
                            ".cosmos.tx.v1beta1.GetTxsEventRequest.pagination: object expected"
                        );
                    message.pagination =
                        cosmos.base.query.v1beta1.PageRequest.fromObject(
                            object.pagination
                        );
                }
                switch (object.order_by) {
                    case "ORDER_BY_UNSPECIFIED":
                    case 0:
                        message.order_by = 0;
                        break;
                    case "ORDER_BY_ASC":
                    case 1:
                        message.order_by = 1;
                        break;
                    case "ORDER_BY_DESC":
                    case 2:
                        message.order_by = 2;
                        break;
                }
                return message;
            };

            /**
             * Creates a plain object from a GetTxsEventRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cosmos.tx.v1beta1.GetTxsEventRequest
             * @static
             * @param {cosmos.tx.v1beta1.GetTxsEventRequest} message GetTxsEventRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetTxsEventRequest.toObject = function toObject(message, options) {
                if (!options) options = {};
                var object = {};
                if (options.arrays || options.defaults) object.events = [];
                if (options.defaults) {
                    object.pagination = null;
                    object.order_by =
                        options.enums === String ? "ORDER_BY_UNSPECIFIED" : 0;
                }
                if (message.events && message.events.length) {
                    object.events = [];
                    for (var j = 0; j < message.events.length; ++j)
                        object.events[j] = message.events[j];
                }
                if (message.pagination != null && message.hasOwnProperty("pagination"))
                    object.pagination =
                        cosmos.base.query.v1beta1.PageRequest.toObject(
                            message.pagination,
                            options
                        );
                if (message.order_by != null && message.hasOwnProperty("order_by"))
                    object.order_by =
                        options.enums === String
                            ? cosmos.tx.v1beta1.OrderBy[message.order_by]
                            : message.order_by;
                return object;
            };

            /**
             * Converts this GetTxsEventRequest to JSON.
             * @function toJSON
             * @memberof cosmos.tx.v1beta1.GetTxsEventRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetTxsEventRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return GetTxsEventRequest;
        })();

        /**
         * OrderBy enum.
         * @name cosmos.tx.v1beta1.OrderBy
         * @enum {number}
         * @property {number} ORDER_BY_UNSPECIFIED=0 ORDER_BY_UNSPECIFIED value
         * @property {number} ORDER_BY_ASC=1 ORDER_BY_ASC value
         * @property {number} ORDER_BY_DESC=2 ORDER_BY_DESC value
         */
        v1beta1.OrderBy = (function () {
            var valuesById = {},
                values = Object.create(valuesById);
            values[(valuesById[0] = "ORDER_BY_UNSPECIFIED")] = 0;
            values[(valuesById[1] = "ORDER_BY_ASC")] = 1;
            values[(valuesById[2] = "ORDER_BY_DESC")] = 2;
            return values;
        })();

        v1beta1.GetTxsEventResponse = (function () {
            /**
             * Properties of a GetTxsEventResponse.
             * @memberof cosmos.tx.v1beta1
             * @interface IGetTxsEventResponse
             * @property {Array.<cosmos.tx.v1beta1.ITx>|null} [txs] GetTxsEventResponse txs
             * @property {Array.<cosmos.base.abci.v1beta1.ITxResponse>|null} [tx_responses] GetTxsEventResponse tx_responses
             * @property {cosmos.base.query.v1beta1.IPageResponse|null} [pagination] GetTxsEventResponse pagination
             */

            /**
             * Constructs a new GetTxsEventResponse.
             * @memberof cosmos.tx.v1beta1
             * @classdesc Represents a GetTxsEventResponse.
             * @implements IGetTxsEventResponse
             * @constructor
             * @param {cosmos.tx.v1beta1.IGetTxsEventResponse=} [properties] Properties to set
             */
            function GetTxsEventResponse(properties) {
                this.txs = [];
                this.tx_responses = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GetTxsEventResponse txs.
             * @member {Array.<cosmos.tx.v1beta1.ITx>} txs
             * @memberof cosmos.tx.v1beta1.GetTxsEventResponse
             * @instance
             */
            GetTxsEventResponse.prototype.txs = $util.emptyArray;

            /**
             * GetTxsEventResponse tx_responses.
             * @member {Array.<cosmos.base.abci.v1beta1.ITxResponse>} tx_responses
             * @memberof cosmos.tx.v1beta1.GetTxsEventResponse
             * @instance
             */
            GetTxsEventResponse.prototype.tx_responses = $util.emptyArray;

            /**
             * GetTxsEventResponse pagination.
             * @member {cosmos.base.query.v1beta1.IPageResponse|null|undefined} pagination
             * @memberof cosmos.tx.v1beta1.GetTxsEventResponse
             * @instance
             */
            GetTxsEventResponse.prototype.pagination = null;

            /**
             * Encodes the specified GetTxsEventResponse message. Does not implicitly {@link cosmos.tx.v1beta1.GetTxsEventResponse.verify|verify} messages.
             * @function encode
             * @memberof cosmos.tx.v1beta1.GetTxsEventResponse
             * @static
             * @param {cosmos.tx.v1beta1.IGetTxsEventResponse} message GetTxsEventResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetTxsEventResponse.encode = function encode(message, writer) {
                if (!writer) writer = $Writer.create();
                if (message.txs != null && message.txs.length)
                    for (var i = 0; i < message.txs.length; ++i)
                        cosmos.tx.v1beta1.Tx.encode(
                            message.txs[i],
                            writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
                        ).ldelim();
                if (message.tx_responses != null && message.tx_responses.length)
                    for (var i = 0; i < message.tx_responses.length; ++i)
                        cosmos.base.abci.v1beta1.TxResponse.encode(
                            message.tx_responses[i],
                            writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
                        ).ldelim();
                if (
                    message.pagination != null &&
                    Object.hasOwnProperty.call(message, "pagination")
                )
                    cosmos.base.query.v1beta1.PageResponse.encode(
                        message.pagination,
                        writer.uint32(/* id 3, wireType 2 =*/ 26).fork()
                    ).ldelim();
                return writer;
            };

            /**
             * Encodes the specified GetTxsEventResponse message, length delimited. Does not implicitly {@link cosmos.tx.v1beta1.GetTxsEventResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cosmos.tx.v1beta1.GetTxsEventResponse
             * @static
             * @param {cosmos.tx.v1beta1.IGetTxsEventResponse} message GetTxsEventResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetTxsEventResponse.encodeDelimited = function encodeDelimited(
                message,
                writer
            ) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GetTxsEventResponse message from the specified reader or buffer.
             * @function decode
             * @memberof cosmos.tx.v1beta1.GetTxsEventResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cosmos.tx.v1beta1.GetTxsEventResponse} GetTxsEventResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetTxsEventResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new cosmos.tx.v1beta1.GetTxsEventResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            if (!(message.txs && message.txs.length)) message.txs = [];
                            message.txs.push(
                                cosmos.tx.v1beta1.Tx.decode(reader, reader.uint32())
                            );
                            break;
                        case 2:
                            if (!(message.tx_responses && message.tx_responses.length))
                                message.tx_responses = [];
                            message.tx_responses.push(
                                cosmos.base.abci.v1beta1.TxResponse.decode(
                                    reader,
                                    reader.uint32()
                                )
                            );
                            break;
                        case 3:
                            message.pagination =
                                cosmos.base.query.v1beta1.PageResponse.decode(
                                    reader,
                                    reader.uint32()
                                );
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };

            /**
             * Decodes a GetTxsEventResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cosmos.tx.v1beta1.GetTxsEventResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cosmos.tx.v1beta1.GetTxsEventResponse} GetTxsEventResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetTxsEventResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader)) reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GetTxsEventResponse message.
             * @function verify
             * @memberof cosmos.tx.v1beta1.GetTxsEventResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GetTxsEventResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.txs != null && message.hasOwnProperty("txs")) {
                    if (!Array.isArray(message.txs)) return "txs: array expected";
                    for (var i = 0; i < message.txs.length; ++i) {
                        var error = cosmos.tx.v1beta1.Tx.verify(message.txs[i]);
                        if (error) return "txs." + error;
                    }
                }
                if (
                    message.tx_responses != null &&
                    message.hasOwnProperty("tx_responses")
                ) {
                    if (!Array.isArray(message.tx_responses))
                        return "tx_responses: array expected";
                    for (var i = 0; i < message.tx_responses.length; ++i) {
                        var error = cosmos.base.abci.v1beta1.TxResponse.verify(
                            message.tx_responses[i]
                        );
                        if (error) return "tx_responses." + error;
                    }
                }
                if (
                    message.pagination != null &&
                    message.hasOwnProperty("pagination")
                ) {
                    var error = cosmos.base.query.v1beta1.PageResponse.verify(
                        message.pagination
                    );
                    if (error) return "pagination." + error;
                }
                return null;
            };

            /**
             * Creates a GetTxsEventResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cosmos.tx.v1beta1.GetTxsEventResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cosmos.tx.v1beta1.GetTxsEventResponse} GetTxsEventResponse
             */
            GetTxsEventResponse.fromObject = function fromObject(object) {
                if (object instanceof cosmos.tx.v1beta1.GetTxsEventResponse)
                    return object;
                var message = new cosmos.tx.v1beta1.GetTxsEventResponse();
                if (object.txs) {
                    if (!Array.isArray(object.txs))
                        throw TypeError(
                            ".cosmos.tx.v1beta1.GetTxsEventResponse.txs: array expected"
                        );
                    message.txs = [];
                    for (var i = 0; i < object.txs.length; ++i) {
                        if (typeof object.txs[i] !== "object")
                            throw TypeError(
                                ".cosmos.tx.v1beta1.GetTxsEventResponse.txs: object expected"
                            );
                        message.txs[i] = cosmos.tx.v1beta1.Tx.fromObject(
                            object.txs[i]
                        );
                    }
                }
                if (object.tx_responses) {
                    if (!Array.isArray(object.tx_responses))
                        throw TypeError(
                            ".cosmos.tx.v1beta1.GetTxsEventResponse.tx_responses: array expected"
                        );
                    message.tx_responses = [];
                    for (var i = 0; i < object.tx_responses.length; ++i) {
                        if (typeof object.tx_responses[i] !== "object")
                            throw TypeError(
                                ".cosmos.tx.v1beta1.GetTxsEventResponse.tx_responses: object expected"
                            );
                        message.tx_responses[i] =
                            cosmos.base.abci.v1beta1.TxResponse.fromObject(
                                object.tx_responses[i]
                            );
                    }
                }
                if (object.pagination != null) {
                    if (typeof object.pagination !== "object")
                        throw TypeError(
                            ".cosmos.tx.v1beta1.GetTxsEventResponse.pagination: object expected"
                        );
                    message.pagination =
                        cosmos.base.query.v1beta1.PageResponse.fromObject(
                            object.pagination
                        );
                }
                return message;
            };

            /**
             * Creates a plain object from a GetTxsEventResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cosmos.tx.v1beta1.GetTxsEventResponse
             * @static
             * @param {cosmos.tx.v1beta1.GetTxsEventResponse} message GetTxsEventResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetTxsEventResponse.toObject = function toObject(message, options) {
                if (!options) options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.txs = [];
                    object.tx_responses = [];
                }
                if (options.defaults) object.pagination = null;
                if (message.txs && message.txs.length) {
                    object.txs = [];
                    for (var j = 0; j < message.txs.length; ++j)
                        object.txs[j] = cosmos.tx.v1beta1.Tx.toObject(
                            message.txs[j],
                            options
                        );
                }
                if (message.tx_responses && message.tx_responses.length) {
                    object.tx_responses = [];
                    for (var j = 0; j < message.tx_responses.length; ++j)
                        object.tx_responses[j] =
                            cosmos.base.abci.v1beta1.TxResponse.toObject(
                                message.tx_responses[j],
                                options
                            );
                }
                if (message.pagination != null && message.hasOwnProperty("pagination"))
                    object.pagination =
                        cosmos.base.query.v1beta1.PageResponse.toObject(
                            message.pagination,
                            options
                        );
                return object;
            };

            /**
             * Converts this GetTxsEventResponse to JSON.
             * @function toJSON
             * @memberof cosmos.tx.v1beta1.GetTxsEventResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetTxsEventResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return GetTxsEventResponse;
        })();

        v1beta1.BroadcastTxRequest = (function () {
            /**
             * Properties of a BroadcastTxRequest.
             * @memberof cosmos.tx.v1beta1
             * @interface IBroadcastTxRequest
             * @property {Uint8Array|null} [tx_bytes] BroadcastTxRequest tx_bytes
             * @property {cosmos.tx.v1beta1.BroadcastMode|null} [mode] BroadcastTxRequest mode
             */

            /**
             * Constructs a new BroadcastTxRequest.
             * @memberof cosmos.tx.v1beta1
             * @classdesc Represents a BroadcastTxRequest.
             * @implements IBroadcastTxRequest
             * @constructor
             * @param {cosmos.tx.v1beta1.IBroadcastTxRequest=} [properties] Properties to set
             */
            function BroadcastTxRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * BroadcastTxRequest tx_bytes.
             * @member {Uint8Array} tx_bytes
             * @memberof cosmos.tx.v1beta1.BroadcastTxRequest
             * @instance
             */
            BroadcastTxRequest.prototype.tx_bytes = $util.newBuffer([]);

            /**
             * BroadcastTxRequest mode.
             * @member {cosmos.tx.v1beta1.BroadcastMode} mode
             * @memberof cosmos.tx.v1beta1.BroadcastTxRequest
             * @instance
             */
            BroadcastTxRequest.prototype.mode = 0;

            /**
             * Encodes the specified BroadcastTxRequest message. Does not implicitly {@link cosmos.tx.v1beta1.BroadcastTxRequest.verify|verify} messages.
             * @function encode
             * @memberof cosmos.tx.v1beta1.BroadcastTxRequest
             * @static
             * @param {cosmos.tx.v1beta1.IBroadcastTxRequest} message BroadcastTxRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BroadcastTxRequest.encode = function encode(message, writer) {
                if (!writer) writer = $Writer.create();
                if (
                    message.tx_bytes != null &&
                    Object.hasOwnProperty.call(message, "tx_bytes")
                )
                    writer.uint32(/* id 1, wireType 2 =*/ 10).bytes(message.tx_bytes);
                if (message.mode != null && Object.hasOwnProperty.call(message, "mode"))
                    writer.uint32(/* id 2, wireType 0 =*/ 16).int32(message.mode);
                return writer;
            };

            /**
             * Encodes the specified BroadcastTxRequest message, length delimited. Does not implicitly {@link cosmos.tx.v1beta1.BroadcastTxRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cosmos.tx.v1beta1.BroadcastTxRequest
             * @static
             * @param {cosmos.tx.v1beta1.IBroadcastTxRequest} message BroadcastTxRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BroadcastTxRequest.encodeDelimited = function encodeDelimited(
                message,
                writer
            ) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a BroadcastTxRequest message from the specified reader or buffer.
             * @function decode
             * @memberof cosmos.tx.v1beta1.BroadcastTxRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cosmos.tx.v1beta1.BroadcastTxRequest} BroadcastTxRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BroadcastTxRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new cosmos.tx.v1beta1.BroadcastTxRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.tx_bytes = reader.bytes();
                            break;
                        case 2:
                            message.mode = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };

            /**
             * Decodes a BroadcastTxRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cosmos.tx.v1beta1.BroadcastTxRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cosmos.tx.v1beta1.BroadcastTxRequest} BroadcastTxRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BroadcastTxRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader)) reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a BroadcastTxRequest message.
             * @function verify
             * @memberof cosmos.tx.v1beta1.BroadcastTxRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BroadcastTxRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.tx_bytes != null && message.hasOwnProperty("tx_bytes"))
                    if (
                        !(
                            (message.tx_bytes &&
                                typeof message.tx_bytes.length === "number") ||
                            $util.isString(message.tx_bytes)
                        )
                    )
                        return "tx_bytes: buffer expected";
                if (message.mode != null && message.hasOwnProperty("mode"))
                    switch (message.mode) {
                        default:
                            return "mode: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                            break;
                    }
                return null;
            };

            /**
             * Creates a BroadcastTxRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cosmos.tx.v1beta1.BroadcastTxRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cosmos.tx.v1beta1.BroadcastTxRequest} BroadcastTxRequest
             */
            BroadcastTxRequest.fromObject = function fromObject(object) {
                if (object instanceof cosmos.tx.v1beta1.BroadcastTxRequest)
                    return object;
                var message = new cosmos.tx.v1beta1.BroadcastTxRequest();
                if (object.tx_bytes != null)
                    if (typeof object.tx_bytes === "string")
                        $util.base64.decode(
                            object.tx_bytes,
                            (message.tx_bytes = $util.newBuffer(
                                $util.base64.length(object.tx_bytes)
                            )),
                            0
                        );
                    else if (object.tx_bytes.length) message.tx_bytes = object.tx_bytes;
                switch (object.mode) {
                    case "BROADCAST_MODE_UNSPECIFIED":
                    case 0:
                        message.mode = 0;
                        break;
                    case "BROADCAST_MODE_BLOCK":
                    case 1:
                        message.mode = 1;
                        break;
                    case "BROADCAST_MODE_SYNC":
                    case 2:
                        message.mode = 2;
                        break;
                    case "BROADCAST_MODE_ASYNC":
                    case 3:
                        message.mode = 3;
                        break;
                }
                return message;
            };

            /**
             * Creates a plain object from a BroadcastTxRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cosmos.tx.v1beta1.BroadcastTxRequest
             * @static
             * @param {cosmos.tx.v1beta1.BroadcastTxRequest} message BroadcastTxRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BroadcastTxRequest.toObject = function toObject(message, options) {
                if (!options) options = {};
                var object = {};
                if (options.defaults) {
                    if (options.bytes === String) object.tx_bytes = "";
                    else {
                        object.tx_bytes = [];
                        if (options.bytes !== Array)
                            object.tx_bytes = $util.newBuffer(object.tx_bytes);
                    }
                    object.mode =
                        options.enums === String ? "BROADCAST_MODE_UNSPECIFIED" : 0;
                }
                if (message.tx_bytes != null && message.hasOwnProperty("tx_bytes"))
                    object.tx_bytes =
                        options.bytes === String
                            ? $util.base64.encode(
                                message.tx_bytes,
                                0,
                                message.tx_bytes.length
                            )
                            : options.bytes === Array
                                ? Array.prototype.slice.call(message.tx_bytes)
                                : message.tx_bytes;
                if (message.mode != null && message.hasOwnProperty("mode"))
                    object.mode =
                        options.enums === String
                            ? cosmos.tx.v1beta1.BroadcastMode[message.mode]
                            : message.mode;
                return object;
            };

            /**
             * Converts this BroadcastTxRequest to JSON.
             * @function toJSON
             * @memberof cosmos.tx.v1beta1.BroadcastTxRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BroadcastTxRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return BroadcastTxRequest;
        })();

        /**
         * BroadcastMode enum.
         * @name cosmos.tx.v1beta1.BroadcastMode
         * @enum {number}
         * @property {number} BROADCAST_MODE_UNSPECIFIED=0 BROADCAST_MODE_UNSPECIFIED value
         * @property {number} BROADCAST_MODE_BLOCK=1 BROADCAST_MODE_BLOCK value
         * @property {number} BROADCAST_MODE_SYNC=2 BROADCAST_MODE_SYNC value
         * @property {number} BROADCAST_MODE_ASYNC=3 BROADCAST_MODE_ASYNC value
         */
        v1beta1.BroadcastMode = (function () {
            var valuesById = {},
                values = Object.create(valuesById);
            values[(valuesById[0] = "BROADCAST_MODE_UNSPECIFIED")] = 0;
            values[(valuesById[1] = "BROADCAST_MODE_BLOCK")] = 1;
            values[(valuesById[2] = "BROADCAST_MODE_SYNC")] = 2;
            values[(valuesById[3] = "BROADCAST_MODE_ASYNC")] = 3;
            return values;
        })();

        v1beta1.BroadcastTxResponse = (function () {
            /**
             * Properties of a BroadcastTxResponse.
             * @memberof cosmos.tx.v1beta1
             * @interface IBroadcastTxResponse
             * @property {cosmos.base.abci.v1beta1.ITxResponse|null} [tx_response] BroadcastTxResponse tx_response
             */

            /**
             * Constructs a new BroadcastTxResponse.
             * @memberof cosmos.tx.v1beta1
             * @classdesc Represents a BroadcastTxResponse.
             * @implements IBroadcastTxResponse
             * @constructor
             * @param {cosmos.tx.v1beta1.IBroadcastTxResponse=} [properties] Properties to set
             */
            function BroadcastTxResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * BroadcastTxResponse tx_response.
             * @member {cosmos.base.abci.v1beta1.ITxResponse|null|undefined} tx_response
             * @memberof cosmos.tx.v1beta1.BroadcastTxResponse
             * @instance
             */
            BroadcastTxResponse.prototype.tx_response = null;

            /**
             * Encodes the specified BroadcastTxResponse message. Does not implicitly {@link cosmos.tx.v1beta1.BroadcastTxResponse.verify|verify} messages.
             * @function encode
             * @memberof cosmos.tx.v1beta1.BroadcastTxResponse
             * @static
             * @param {cosmos.tx.v1beta1.IBroadcastTxResponse} message BroadcastTxResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BroadcastTxResponse.encode = function encode(message, writer) {
                if (!writer) writer = $Writer.create();
                if (
                    message.tx_response != null &&
                    Object.hasOwnProperty.call(message, "tx_response")
                )
                    cosmos.base.abci.v1beta1.TxResponse.encode(
                        message.tx_response,
                        writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
                    ).ldelim();
                return writer;
            };

            /**
             * Encodes the specified BroadcastTxResponse message, length delimited. Does not implicitly {@link cosmos.tx.v1beta1.BroadcastTxResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cosmos.tx.v1beta1.BroadcastTxResponse
             * @static
             * @param {cosmos.tx.v1beta1.IBroadcastTxResponse} message BroadcastTxResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BroadcastTxResponse.encodeDelimited = function encodeDelimited(
                message,
                writer
            ) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a BroadcastTxResponse message from the specified reader or buffer.
             * @function decode
             * @memberof cosmos.tx.v1beta1.BroadcastTxResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cosmos.tx.v1beta1.BroadcastTxResponse} BroadcastTxResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BroadcastTxResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new cosmos.tx.v1beta1.BroadcastTxResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.tx_response =
                                cosmos.base.abci.v1beta1.TxResponse.decode(
                                    reader,
                                    reader.uint32()
                                );
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };

            /**
             * Decodes a BroadcastTxResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cosmos.tx.v1beta1.BroadcastTxResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cosmos.tx.v1beta1.BroadcastTxResponse} BroadcastTxResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BroadcastTxResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader)) reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a BroadcastTxResponse message.
             * @function verify
             * @memberof cosmos.tx.v1beta1.BroadcastTxResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BroadcastTxResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (
                    message.tx_response != null &&
                    message.hasOwnProperty("tx_response")
                ) {
                    var error = cosmos.base.abci.v1beta1.TxResponse.verify(
                        message.tx_response
                    );
                    if (error) return "tx_response." + error;
                }
                return null;
            };

            /**
             * Creates a BroadcastTxResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cosmos.tx.v1beta1.BroadcastTxResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cosmos.tx.v1beta1.BroadcastTxResponse} BroadcastTxResponse
             */
            BroadcastTxResponse.fromObject = function fromObject(object) {
                if (object instanceof cosmos.tx.v1beta1.BroadcastTxResponse)
                    return object;
                var message = new cosmos.tx.v1beta1.BroadcastTxResponse();
                if (object.tx_response != null) {
                    if (typeof object.tx_response !== "object")
                        throw TypeError(
                            ".cosmos.tx.v1beta1.BroadcastTxResponse.tx_response: object expected"
                        );
                    message.tx_response =
                        cosmos.base.abci.v1beta1.TxResponse.fromObject(
                            object.tx_response
                        );
                }
                return message;
            };

            /**
             * Creates a plain object from a BroadcastTxResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cosmos.tx.v1beta1.BroadcastTxResponse
             * @static
             * @param {cosmos.tx.v1beta1.BroadcastTxResponse} message BroadcastTxResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BroadcastTxResponse.toObject = function toObject(message, options) {
                if (!options) options = {};
                var object = {};
                if (options.defaults) object.tx_response = null;
                if (
                    message.tx_response != null &&
                    message.hasOwnProperty("tx_response")
                )
                    object.tx_response =
                        cosmos.base.abci.v1beta1.TxResponse.toObject(
                            message.tx_response,
                            options
                        );
                return object;
            };

            /**
             * Converts this BroadcastTxResponse to JSON.
             * @function toJSON
             * @memberof cosmos.tx.v1beta1.BroadcastTxResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BroadcastTxResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return BroadcastTxResponse;
        })();

        v1beta1.SimulateRequest = (function () {
            /**
             * Properties of a SimulateRequest.
             * @memberof cosmos.tx.v1beta1
             * @interface ISimulateRequest
             * @property {cosmos.tx.v1beta1.ITx|null} [tx] SimulateRequest tx
             * @property {Uint8Array|null} [tx_bytes] SimulateRequest tx_bytes
             */

            /**
             * Constructs a new SimulateRequest.
             * @memberof cosmos.tx.v1beta1
             * @classdesc Represents a SimulateRequest.
             * @implements ISimulateRequest
             * @constructor
             * @param {cosmos.tx.v1beta1.ISimulateRequest=} [properties] Properties to set
             */
            function SimulateRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SimulateRequest tx.
             * @member {cosmos.tx.v1beta1.ITx|null|undefined} tx
             * @memberof cosmos.tx.v1beta1.SimulateRequest
             * @instance
             */
            SimulateRequest.prototype.tx = null;

            /**
             * SimulateRequest tx_bytes.
             * @member {Uint8Array} tx_bytes
             * @memberof cosmos.tx.v1beta1.SimulateRequest
             * @instance
             */
            SimulateRequest.prototype.tx_bytes = $util.newBuffer([]);

            /**
             * Encodes the specified SimulateRequest message. Does not implicitly {@link cosmos.tx.v1beta1.SimulateRequest.verify|verify} messages.
             * @function encode
             * @memberof cosmos.tx.v1beta1.SimulateRequest
             * @static
             * @param {cosmos.tx.v1beta1.ISimulateRequest} message SimulateRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SimulateRequest.encode = function encode(message, writer) {
                if (!writer) writer = $Writer.create();
                if (message.tx != null && Object.hasOwnProperty.call(message, "tx"))
                    cosmos.tx.v1beta1.Tx.encode(
                        message.tx,
                        writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
                    ).ldelim();
                if (
                    message.tx_bytes != null &&
                    Object.hasOwnProperty.call(message, "tx_bytes")
                )
                    writer.uint32(/* id 2, wireType 2 =*/ 18).bytes(message.tx_bytes);
                return writer;
            };

            /**
             * Encodes the specified SimulateRequest message, length delimited. Does not implicitly {@link cosmos.tx.v1beta1.SimulateRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cosmos.tx.v1beta1.SimulateRequest
             * @static
             * @param {cosmos.tx.v1beta1.ISimulateRequest} message SimulateRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SimulateRequest.encodeDelimited = function encodeDelimited(
                message,
                writer
            ) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SimulateRequest message from the specified reader or buffer.
             * @function decode
             * @memberof cosmos.tx.v1beta1.SimulateRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cosmos.tx.v1beta1.SimulateRequest} SimulateRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SimulateRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new cosmos.tx.v1beta1.SimulateRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.tx = cosmos.tx.v1beta1.Tx.decode(
                                reader,
                                reader.uint32()
                            );
                            break;
                        case 2:
                            message.tx_bytes = reader.bytes();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };

            /**
             * Decodes a SimulateRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cosmos.tx.v1beta1.SimulateRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cosmos.tx.v1beta1.SimulateRequest} SimulateRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SimulateRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader)) reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SimulateRequest message.
             * @function verify
             * @memberof cosmos.tx.v1beta1.SimulateRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SimulateRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.tx != null && message.hasOwnProperty("tx")) {
                    var error = cosmos.tx.v1beta1.Tx.verify(message.tx);
                    if (error) return "tx." + error;
                }
                if (message.tx_bytes != null && message.hasOwnProperty("tx_bytes"))
                    if (
                        !(
                            (message.tx_bytes &&
                                typeof message.tx_bytes.length === "number") ||
                            $util.isString(message.tx_bytes)
                        )
                    )
                        return "tx_bytes: buffer expected";
                return null;
            };

            /**
             * Creates a SimulateRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cosmos.tx.v1beta1.SimulateRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cosmos.tx.v1beta1.SimulateRequest} SimulateRequest
             */
            SimulateRequest.fromObject = function fromObject(object) {
                if (object instanceof cosmos.tx.v1beta1.SimulateRequest)
                    return object;
                var message = new cosmos.tx.v1beta1.SimulateRequest();
                if (object.tx != null) {
                    if (typeof object.tx !== "object")
                        throw TypeError(
                            ".cosmos.tx.v1beta1.SimulateRequest.tx: object expected"
                        );
                    message.tx = cosmos.tx.v1beta1.Tx.fromObject(object.tx);
                }
                if (object.tx_bytes != null)
                    if (typeof object.tx_bytes === "string")
                        $util.base64.decode(
                            object.tx_bytes,
                            (message.tx_bytes = $util.newBuffer(
                                $util.base64.length(object.tx_bytes)
                            )),
                            0
                        );
                    else if (object.tx_bytes.length) message.tx_bytes = object.tx_bytes;
                return message;
            };

            /**
             * Creates a plain object from a SimulateRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cosmos.tx.v1beta1.SimulateRequest
             * @static
             * @param {cosmos.tx.v1beta1.SimulateRequest} message SimulateRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SimulateRequest.toObject = function toObject(message, options) {
                if (!options) options = {};
                var object = {};
                if (options.defaults) {
                    object.tx = null;
                    if (options.bytes === String) object.tx_bytes = "";
                    else {
                        object.tx_bytes = [];
                        if (options.bytes !== Array)
                            object.tx_bytes = $util.newBuffer(object.tx_bytes);
                    }
                }
                if (message.tx != null && message.hasOwnProperty("tx"))
                    object.tx = cosmos.tx.v1beta1.Tx.toObject(message.tx, options);
                if (message.tx_bytes != null && message.hasOwnProperty("tx_bytes"))
                    object.tx_bytes =
                        options.bytes === String
                            ? $util.base64.encode(
                                message.tx_bytes,
                                0,
                                message.tx_bytes.length
                            )
                            : options.bytes === Array
                                ? Array.prototype.slice.call(message.tx_bytes)
                                : message.tx_bytes;
                return object;
            };

            /**
             * Converts this SimulateRequest to JSON.
             * @function toJSON
             * @memberof cosmos.tx.v1beta1.SimulateRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SimulateRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return SimulateRequest;
        })();

        v1beta1.SimulateResponse = (function () {
            /**
             * Properties of a SimulateResponse.
             * @memberof cosmos.tx.v1beta1
             * @interface ISimulateResponse
             * @property {cosmos.base.abci.v1beta1.IGasInfo|null} [gas_info] SimulateResponse gas_info
             * @property {cosmos.base.abci.v1beta1.IResult|null} [result] SimulateResponse result
             */

            /**
             * Constructs a new SimulateResponse.
             * @memberof cosmos.tx.v1beta1
             * @classdesc Represents a SimulateResponse.
             * @implements ISimulateResponse
             * @constructor
             * @param {cosmos.tx.v1beta1.ISimulateResponse=} [properties] Properties to set
             */
            function SimulateResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SimulateResponse gas_info.
             * @member {cosmos.base.abci.v1beta1.IGasInfo|null|undefined} gas_info
             * @memberof cosmos.tx.v1beta1.SimulateResponse
             * @instance
             */
            SimulateResponse.prototype.gas_info = null;

            /**
             * SimulateResponse result.
             * @member {cosmos.base.abci.v1beta1.IResult|null|undefined} result
             * @memberof cosmos.tx.v1beta1.SimulateResponse
             * @instance
             */
            SimulateResponse.prototype.result = null;

            /**
             * Encodes the specified SimulateResponse message. Does not implicitly {@link cosmos.tx.v1beta1.SimulateResponse.verify|verify} messages.
             * @function encode
             * @memberof cosmos.tx.v1beta1.SimulateResponse
             * @static
             * @param {cosmos.tx.v1beta1.ISimulateResponse} message SimulateResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SimulateResponse.encode = function encode(message, writer) {
                if (!writer) writer = $Writer.create();
                if (
                    message.gas_info != null &&
                    Object.hasOwnProperty.call(message, "gas_info")
                )
                    cosmos.base.abci.v1beta1.GasInfo.encode(
                        message.gas_info,
                        writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
                    ).ldelim();
                if (
                    message.result != null &&
                    Object.hasOwnProperty.call(message, "result")
                )
                    cosmos.base.abci.v1beta1.Result.encode(
                        message.result,
                        writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
                    ).ldelim();
                return writer;
            };

            /**
             * Encodes the specified SimulateResponse message, length delimited. Does not implicitly {@link cosmos.tx.v1beta1.SimulateResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cosmos.tx.v1beta1.SimulateResponse
             * @static
             * @param {cosmos.tx.v1beta1.ISimulateResponse} message SimulateResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SimulateResponse.encodeDelimited = function encodeDelimited(
                message,
                writer
            ) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SimulateResponse message from the specified reader or buffer.
             * @function decode
             * @memberof cosmos.tx.v1beta1.SimulateResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cosmos.tx.v1beta1.SimulateResponse} SimulateResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SimulateResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new cosmos.tx.v1beta1.SimulateResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.gas_info = cosmos.base.abci.v1beta1.GasInfo.decode(
                                reader,
                                reader.uint32()
                            );
                            break;
                        case 2:
                            message.result = cosmos.base.abci.v1beta1.Result.decode(
                                reader,
                                reader.uint32()
                            );
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };

            /**
             * Decodes a SimulateResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cosmos.tx.v1beta1.SimulateResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cosmos.tx.v1beta1.SimulateResponse} SimulateResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SimulateResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader)) reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SimulateResponse message.
             * @function verify
             * @memberof cosmos.tx.v1beta1.SimulateResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SimulateResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.gas_info != null && message.hasOwnProperty("gas_info")) {
                    var error = cosmos.base.abci.v1beta1.GasInfo.verify(
                        message.gas_info
                    );
                    if (error) return "gas_info." + error;
                }
                if (message.result != null && message.hasOwnProperty("result")) {
                    var error = cosmos.base.abci.v1beta1.Result.verify(
                        message.result
                    );
                    if (error) return "result." + error;
                }
                return null;
            };

            /**
             * Creates a SimulateResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cosmos.tx.v1beta1.SimulateResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cosmos.tx.v1beta1.SimulateResponse} SimulateResponse
             */
            SimulateResponse.fromObject = function fromObject(object) {
                if (object instanceof cosmos.tx.v1beta1.SimulateResponse)
                    return object;
                var message = new cosmos.tx.v1beta1.SimulateResponse();
                if (object.gas_info != null) {
                    if (typeof object.gas_info !== "object")
                        throw TypeError(
                            ".cosmos.tx.v1beta1.SimulateResponse.gas_info: object expected"
                        );
                    message.gas_info = cosmos.base.abci.v1beta1.GasInfo.fromObject(
                        object.gas_info
                    );
                }
                if (object.result != null) {
                    if (typeof object.result !== "object")
                        throw TypeError(
                            ".cosmos.tx.v1beta1.SimulateResponse.result: object expected"
                        );
                    message.result = cosmos.base.abci.v1beta1.Result.fromObject(
                        object.result
                    );
                }
                return message;
            };

            /**
             * Creates a plain object from a SimulateResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cosmos.tx.v1beta1.SimulateResponse
             * @static
             * @param {cosmos.tx.v1beta1.SimulateResponse} message SimulateResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SimulateResponse.toObject = function toObject(message, options) {
                if (!options) options = {};
                var object = {};
                if (options.defaults) {
                    object.gas_info = null;
                    object.result = null;
                }
                if (message.gas_info != null && message.hasOwnProperty("gas_info"))
                    object.gas_info = cosmos.base.abci.v1beta1.GasInfo.toObject(
                        message.gas_info,
                        options
                    );
                if (message.result != null && message.hasOwnProperty("result"))
                    object.result = cosmos.base.abci.v1beta1.Result.toObject(
                        message.result,
                        options
                    );
                return object;
            };

            /**
             * Converts this SimulateResponse to JSON.
             * @function toJSON
             * @memberof cosmos.tx.v1beta1.SimulateResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SimulateResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return SimulateResponse;
        })();

        v1beta1.GetTxRequest = (function () {
            /**
             * Properties of a GetTxRequest.
             * @memberof cosmos.tx.v1beta1
             * @interface IGetTxRequest
             * @property {string|null} [hash] GetTxRequest hash
             */

            /**
             * Constructs a new GetTxRequest.
             * @memberof cosmos.tx.v1beta1
             * @classdesc Represents a GetTxRequest.
             * @implements IGetTxRequest
             * @constructor
             * @param {cosmos.tx.v1beta1.IGetTxRequest=} [properties] Properties to set
             */
            function GetTxRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GetTxRequest hash.
             * @member {string} hash
             * @memberof cosmos.tx.v1beta1.GetTxRequest
             * @instance
             */
            GetTxRequest.prototype.hash = "";

            /**
             * Encodes the specified GetTxRequest message. Does not implicitly {@link cosmos.tx.v1beta1.GetTxRequest.verify|verify} messages.
             * @function encode
             * @memberof cosmos.tx.v1beta1.GetTxRequest
             * @static
             * @param {cosmos.tx.v1beta1.IGetTxRequest} message GetTxRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetTxRequest.encode = function encode(message, writer) {
                if (!writer) writer = $Writer.create();
                if (message.hash != null && Object.hasOwnProperty.call(message, "hash"))
                    writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.hash);
                return writer;
            };

            /**
             * Encodes the specified GetTxRequest message, length delimited. Does not implicitly {@link cosmos.tx.v1beta1.GetTxRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cosmos.tx.v1beta1.GetTxRequest
             * @static
             * @param {cosmos.tx.v1beta1.IGetTxRequest} message GetTxRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetTxRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GetTxRequest message from the specified reader or buffer.
             * @function decode
             * @memberof cosmos.tx.v1beta1.GetTxRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cosmos.tx.v1beta1.GetTxRequest} GetTxRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetTxRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new cosmos.tx.v1beta1.GetTxRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.hash = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };

            /**
             * Decodes a GetTxRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cosmos.tx.v1beta1.GetTxRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cosmos.tx.v1beta1.GetTxRequest} GetTxRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetTxRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader)) reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GetTxRequest message.
             * @function verify
             * @memberof cosmos.tx.v1beta1.GetTxRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GetTxRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.hash != null && message.hasOwnProperty("hash"))
                    if (!$util.isString(message.hash)) return "hash: string expected";
                return null;
            };

            /**
             * Creates a GetTxRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cosmos.tx.v1beta1.GetTxRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cosmos.tx.v1beta1.GetTxRequest} GetTxRequest
             */
            GetTxRequest.fromObject = function fromObject(object) {
                if (object instanceof cosmos.tx.v1beta1.GetTxRequest)
                    return object;
                var message = new cosmos.tx.v1beta1.GetTxRequest();
                if (object.hash != null) message.hash = String(object.hash);
                return message;
            };

            /**
             * Creates a plain object from a GetTxRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cosmos.tx.v1beta1.GetTxRequest
             * @static
             * @param {cosmos.tx.v1beta1.GetTxRequest} message GetTxRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetTxRequest.toObject = function toObject(message, options) {
                if (!options) options = {};
                var object = {};
                if (options.defaults) object.hash = "";
                if (message.hash != null && message.hasOwnProperty("hash"))
                    object.hash = message.hash;
                return object;
            };

            /**
             * Converts this GetTxRequest to JSON.
             * @function toJSON
             * @memberof cosmos.tx.v1beta1.GetTxRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetTxRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return GetTxRequest;
        })();

        v1beta1.GetTxResponse = (function () {
            /**
             * Properties of a GetTxResponse.
             * @memberof cosmos.tx.v1beta1
             * @interface IGetTxResponse
             * @property {cosmos.tx.v1beta1.ITx|null} [tx] GetTxResponse tx
             * @property {cosmos.base.abci.v1beta1.ITxResponse|null} [tx_response] GetTxResponse tx_response
             */

            /**
             * Constructs a new GetTxResponse.
             * @memberof cosmos.tx.v1beta1
             * @classdesc Represents a GetTxResponse.
             * @implements IGetTxResponse
             * @constructor
             * @param {cosmos.tx.v1beta1.IGetTxResponse=} [properties] Properties to set
             */
            function GetTxResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GetTxResponse tx.
             * @member {cosmos.tx.v1beta1.ITx|null|undefined} tx
             * @memberof cosmos.tx.v1beta1.GetTxResponse
             * @instance
             */
            GetTxResponse.prototype.tx = null;

            /**
             * GetTxResponse tx_response.
             * @member {cosmos.base.abci.v1beta1.ITxResponse|null|undefined} tx_response
             * @memberof cosmos.tx.v1beta1.GetTxResponse
             * @instance
             */
            GetTxResponse.prototype.tx_response = null;

            /**
             * Encodes the specified GetTxResponse message. Does not implicitly {@link cosmos.tx.v1beta1.GetTxResponse.verify|verify} messages.
             * @function encode
             * @memberof cosmos.tx.v1beta1.GetTxResponse
             * @static
             * @param {cosmos.tx.v1beta1.IGetTxResponse} message GetTxResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetTxResponse.encode = function encode(message, writer) {
                if (!writer) writer = $Writer.create();
                if (message.tx != null && Object.hasOwnProperty.call(message, "tx"))
                    cosmos.tx.v1beta1.Tx.encode(
                        message.tx,
                        writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
                    ).ldelim();
                if (
                    message.tx_response != null &&
                    Object.hasOwnProperty.call(message, "tx_response")
                )
                    cosmos.base.abci.v1beta1.TxResponse.encode(
                        message.tx_response,
                        writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
                    ).ldelim();
                return writer;
            };

            /**
             * Encodes the specified GetTxResponse message, length delimited. Does not implicitly {@link cosmos.tx.v1beta1.GetTxResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cosmos.tx.v1beta1.GetTxResponse
             * @static
             * @param {cosmos.tx.v1beta1.IGetTxResponse} message GetTxResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetTxResponse.encodeDelimited = function encodeDelimited(
                message,
                writer
            ) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GetTxResponse message from the specified reader or buffer.
             * @function decode
             * @memberof cosmos.tx.v1beta1.GetTxResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cosmos.tx.v1beta1.GetTxResponse} GetTxResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetTxResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new cosmos.tx.v1beta1.GetTxResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.tx = cosmos.tx.v1beta1.Tx.decode(
                                reader,
                                reader.uint32()
                            );
                            break;
                        case 2:
                            message.tx_response =
                                cosmos.base.abci.v1beta1.TxResponse.decode(
                                    reader,
                                    reader.uint32()
                                );
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };

            /**
             * Decodes a GetTxResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cosmos.tx.v1beta1.GetTxResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cosmos.tx.v1beta1.GetTxResponse} GetTxResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetTxResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader)) reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GetTxResponse message.
             * @function verify
             * @memberof cosmos.tx.v1beta1.GetTxResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GetTxResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.tx != null && message.hasOwnProperty("tx")) {
                    var error = cosmos.tx.v1beta1.Tx.verify(message.tx);
                    if (error) return "tx." + error;
                }
                if (
                    message.tx_response != null &&
                    message.hasOwnProperty("tx_response")
                ) {
                    var error = cosmos.base.abci.v1beta1.TxResponse.verify(
                        message.tx_response
                    );
                    if (error) return "tx_response." + error;
                }
                return null;
            };

            /**
             * Creates a GetTxResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cosmos.tx.v1beta1.GetTxResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cosmos.tx.v1beta1.GetTxResponse} GetTxResponse
             */
            GetTxResponse.fromObject = function fromObject(object) {
                if (object instanceof cosmos.tx.v1beta1.GetTxResponse)
                    return object;
                var message = new cosmos.tx.v1beta1.GetTxResponse();
                if (object.tx != null) {
                    if (typeof object.tx !== "object")
                        throw TypeError(
                            ".cosmos.tx.v1beta1.GetTxResponse.tx: object expected"
                        );
                    message.tx = cosmos.tx.v1beta1.Tx.fromObject(object.tx);
                }
                if (object.tx_response != null) {
                    if (typeof object.tx_response !== "object")
                        throw TypeError(
                            ".cosmos.tx.v1beta1.GetTxResponse.tx_response: object expected"
                        );
                    message.tx_response =
                        cosmos.base.abci.v1beta1.TxResponse.fromObject(
                            object.tx_response
                        );
                }
                return message;
            };

            /**
             * Creates a plain object from a GetTxResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cosmos.tx.v1beta1.GetTxResponse
             * @static
             * @param {cosmos.tx.v1beta1.GetTxResponse} message GetTxResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetTxResponse.toObject = function toObject(message, options) {
                if (!options) options = {};
                var object = {};
                if (options.defaults) {
                    object.tx = null;
                    object.tx_response = null;
                }
                if (message.tx != null && message.hasOwnProperty("tx"))
                    object.tx = cosmos.tx.v1beta1.Tx.toObject(message.tx, options);
                if (
                    message.tx_response != null &&
                    message.hasOwnProperty("tx_response")
                )
                    object.tx_response =
                        cosmos.base.abci.v1beta1.TxResponse.toObject(
                            message.tx_response,
                            options
                        );
                return object;
            };

            /**
             * Converts this GetTxResponse to JSON.
             * @function toJSON
             * @memberof cosmos.tx.v1beta1.GetTxResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetTxResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return GetTxResponse;
        })();

        return v1beta1;
    })();

    return tx;
})();

exports.cosmos = cosmos;