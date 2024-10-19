const $protobuf = require("protobufjs/minimal");

var $Reader = $protobuf.Reader,
    $Writer = $protobuf.Writer,
    $util = $protobuf.util;

/**
 * Namespace google.
 * @exports google
 * @namespace
 */
var google = {};

google.protobuf = (function () {
    /**
     * Namespace protobuf.
     * @memberof google
     * @namespace
     */
    var protobuf = {};

    protobuf.Any = (function () {
        /**
         * Properties of an Any.
         * @memberof google.protobuf
         * @interface IAny
         * @property {string|null} [type_url] Any type_url
         * @property {Uint8Array|null} [value] Any value
         */

        /**
         * Constructs a new Any.
         * @memberof google.protobuf
         * @classdesc Represents an Any.
         * @implements IAny
         * @constructor
         * @param {google.protobuf.IAny=} [properties] Properties to set
         */
        function Any(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
        }

        /**
         * Any type_url.
         * @member {string} type_url
         * @memberof google.protobuf.Any
         * @instance
         */
        Any.prototype.type_url = "";

        /**
         * Any value.
         * @member {Uint8Array} value
         * @memberof google.protobuf.Any
         * @instance
         */
        Any.prototype.value = $util.newBuffer([]);

        /**
         * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
         * @function encode
         * @memberof google.protobuf.Any
         * @static
         * @param {google.protobuf.IAny} message Any message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Any.encode = function encode(message, writer) {
            if (!writer) writer = $Writer.create();
            if (
                message.type_url != null &&
                Object.hasOwnProperty.call(message, "type_url")
            )
                writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.type_url);
            if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                writer.uint32(/* id 2, wireType 2 =*/ 18).bytes(message.value);
            return writer;
        };

        /**
         * Encodes the specified Any message, length delimited. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
         * @function encodeDelimited
         * @memberof google.protobuf.Any
         * @static
         * @param {google.protobuf.IAny} message Any message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Any.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Any message from the specified reader or buffer.
         * @function decode
         * @memberof google.protobuf.Any
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {google.protobuf.Any} Any
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Any.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length,
                message = new google.protobuf.Any();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.type_url = reader.string();
                        break;
                    case 2:
                        message.value = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return message;
        };

        /**
         * Decodes an Any message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof google.protobuf.Any
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {google.protobuf.Any} Any
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Any.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader)) reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Any message.
         * @function verify
         * @memberof google.protobuf.Any
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Any.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type_url != null && message.hasOwnProperty("type_url"))
                if (!$util.isString(message.type_url))
                    return "type_url: string expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (
                    !(
                        (message.value && typeof message.value.length === "number") ||
                        $util.isString(message.value)
                    )
                )
                    return "value: buffer expected";
            return null;
        };

        /**
         * Creates an Any message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof google.protobuf.Any
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {google.protobuf.Any} Any
         */
        Any.fromObject = function fromObject(object) {
            if (object instanceof google.protobuf.Any) return object;
            var message = new google.protobuf.Any();
            if (object.type_url != null) message.type_url = String(object.type_url);
            if (object.value != null)
                if (typeof object.value === "string")
                    $util.base64.decode(
                        object.value,
                        (message.value = $util.newBuffer(
                            $util.base64.length(object.value)
                        )),
                        0
                    );
                else if (object.value.length) message.value = object.value;
            return message;
        };

        /**
         * Creates a plain object from an Any message. Also converts values to other types if specified.
         * @function toObject
         * @memberof google.protobuf.Any
         * @static
         * @param {google.protobuf.Any} message Any
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Any.toObject = function toObject(message, options) {
            if (!options) options = {};
            var object = {};
            if (options.defaults) {
                object.type_url = "";
                if (options.bytes === String) object.value = "";
                else {
                    object.value = [];
                    if (options.bytes !== Array)
                        object.value = $util.newBuffer(object.value);
                }
            }
            if (message.type_url != null && message.hasOwnProperty("type_url"))
                object.type_url = message.type_url;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value =
                    options.bytes === String
                        ? $util.base64.encode(message.value, 0, message.value.length)
                        : options.bytes === Array
                            ? Array.prototype.slice.call(message.value)
                            : message.value;
            return object;
        };

        /**
         * Converts this Any to JSON.
         * @function toJSON
         * @memberof google.protobuf.Any
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Any.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Any;
    })();

    return protobuf;
})();

exports.google = google;