'use strict';

class HttpStatus {

	/**
	 *
	 * @param {number} code
	 * @param {string} name
	 * @param {string} phrase
	 */
	constructor(code, name, phrase) {
		this._code = code;
		this._name = name;
		this._phrase = phrase;
	}


	get code() {
		return this._code;
	}

	get name() {
		return this._name;
	}

	get phrase() {
		return this._phrase;
	}
}

module.exports.HttpStatus = HttpStatus;

module.exports.CONTINUE = new HttpStatus(100, 'CONTINUE', 'Continue');

module.exports.SWITCHING_PROTOCOLS = new HttpStatus(101, 'SWITCHING_PROTOCOLS', 'Switching Protocols');

module.exports.PROCESSING = new HttpStatus(102, 'PROCESSING', 'Processing');

module.exports.OK = new HttpStatus(200, 'OK', 'OK');

module.exports.CREATED = new HttpStatus(201, 'CREATED', 'Created');

module.exports.ACCEPTED = new HttpStatus(202, 'ACCEPTED', 'Accepted');

module.exports.NON_AUTHORITATIVE_INFORMATION = new HttpStatus(203, 'NON_AUTHORITATIVE_INFORMATION', 'Non Authoritative Information');

module.exports.NO_CONTENT = new HttpStatus(204, 'NO_CONTENT', 'No Content');

module.exports.RESET_CONTENT = new HttpStatus(205, 'RESET_CONTENT', 'Reset Content');

module.exports.PARTIAL_CONTENT = new HttpStatus(206, 'PARTIAL_CONTENT', 'Partial Content');

module.exports.MULTI_STATUS = new HttpStatus(207, 'MULTI_STATUS', 'Multi-Status');

module.exports.MULTIPLE_CHOICES = new HttpStatus(300, 'MULTIPLE_CHOICES', 'Multiple Choices');

module.exports.MOVED_PERMANENTLY = new HttpStatus(301, 'MOVED_PERMANENTLY', 'Moved Permanently');

module.exports.MOVED_TEMPORARILY = new HttpStatus(302, 'MOVED_TEMPORARILY', 'Moved Temporarily');

module.exports.SEE_OTHER = new HttpStatus(303, 'SEE_OTHER', 'See Other');

module.exports.NOT_MODIFIED = new HttpStatus(304, 'NOT_MODIFIED', 'Not Modified');

module.exports.USE_PROXY = new HttpStatus(305, 'USE_PROXY', 'Use Proxy');

module.exports.TEMPORARY_REDIRECT = new HttpStatus(307, 'TEMPORARY_REDIRECT', 'Temporary Redirect');

module.exports.PERMANENT_REDIRECT = new HttpStatus(308, 'PERMANENT_REDIRECT', 'Permanent Redirect');

module.exports.BAD_REQUEST = new HttpStatus(400, 'BAD_REQUEST', 'Bad Request');

module.exports.UNAUTHORIZED = new HttpStatus(401, 'UNAUTHORIZED', 'Unauthorized');

module.exports.PAYMENT_REQUIRED = new HttpStatus(402, 'PAYMENT_REQUIRED', 'Payment Required');

module.exports.FORBIDDEN = new HttpStatus(403, 'FORBIDDEN', 'Forbidden');

module.exports.NOT_FOUND = new HttpStatus(404, 'NOT_FOUND', 'Not Found');

module.exports.METHOD_NOT_ALLOWED = new HttpStatus(405, 'METHOD_NOT_ALLOWED', 'Method Not Allowed');

module.exports.NOT_ACCEPTABLE = new HttpStatus(406, 'NOT_ACCEPTABLE', 'Not Acceptable');

module.exports.PROXY_AUTHENTICATION_REQUIRED = new HttpStatus(407, 'PROXY_AUTHENTICATION_REQUIRED', 'Proxy Authentication Required');

module.exports.REQUEST_TIMEOUT = new HttpStatus(408, 'REQUEST_TIMEOUT', 'Request Timeout');

module.exports.CONFLICT = new HttpStatus(409, 'CONFLICT', 'Conflict');

module.exports.GONE = new HttpStatus(410, 'GONE', 'Gone');

module.exports.LENGTH_REQUIRED = new HttpStatus(411, 'LENGTH_REQUIRED', 'Length Required');

module.exports.PRECONDITION_FAILED = new HttpStatus(412, 'PRECONDITION_FAILED', 'Precondition Failed');

module.exports.REQUEST_TOO_LONG = new HttpStatus(413, 'REQUEST_TOO_LONG', 'Request Entity Too Large');

module.exports.REQUEST_URI_TOO_LONG = new HttpStatus(414, 'REQUEST_URI_TOO_LONG', 'Request-URI Too Long');

module.exports.UNSUPPORTED_MEDIA_TYPE = new HttpStatus(415, 'UNSUPPORTED_MEDIA_TYPE', 'Unsupported Media Type');

module.exports.REQUESTED_RANGE_NOT_SATISFIABLE = new HttpStatus(416, 'REQUESTED_RANGE_NOT_SATISFIABLE', 'Requested Range Not Satisfiable');

module.exports.EXPECTATION_FAILED = new HttpStatus(417, 'EXPECTATION_FAILED', 'Expectation Failed');

module.exports.IM_A_TEAPOT = new HttpStatus(418, 'IM_A_TEAPOT', 'I\'m a teapot');

module.exports.INSUFFICIENT_SPACE_ON_RESOURCE = new HttpStatus(419, 'INSUFFICIENT_SPACE_ON_RESOURCE', 'Insufficient Space on Resource');

module.exports.METHOD_FAILURE = new HttpStatus(420, 'METHOD_FAILURE', 'Method Failure');

module.exports.MISDIRECTED_REQUEST = new HttpStatus(421, 'MISDIRECTED_REQUEST', 'Misdirected Request');

module.exports.UNPROCESSABLE_ENTITY = new HttpStatus(422, 'UNPROCESSABLE_ENTITY', 'Unprocessable Entity');

module.exports.LOCKED = new HttpStatus(423, 'LOCKED', 'Locked');

module.exports.FAILED_DEPENDENCY = new HttpStatus(424, 'FAILED_DEPENDENCY', 'Failed Dependency');

module.exports.PRECONDITION_REQUIRED = new HttpStatus(428, 'PRECONDITION_REQUIRED', 'Precondition Required');

module.exports.TOO_MANY_REQUESTS = new HttpStatus(429, 'TOO_MANY_REQUESTS', 'Too Many Requests');

module.exports.REQUEST_HEADER_FIELDS_TOO_LARGE = new HttpStatus(431, 'REQUEST_HEADER_FIELDS_TOO_LARGE', 'Request Header Fields Too Large');

module.exports.UNAVAILABLE_FOR_LEGAL_REASONS = new HttpStatus(451, 'UNAVAILABLE_FOR_LEGAL_REASONS', 'Unavailable For Legal Reasons');

module.exports.INTERNAL_SERVER_ERROR = new HttpStatus(500, 'INTERNAL_SERVER_ERROR', 'Internal Server Error');

module.exports.NOT_IMPLEMENTED = new HttpStatus(501, 'NOT_IMPLEMENTED', 'Not Implemented');

module.exports.BAD_GATEWAY = new HttpStatus(502, 'BAD_GATEWAY', 'Bad Gateway');

module.exports.SERVICE_UNAVAILABLE = new HttpStatus(503, 'SERVICE_UNAVAILABLE', 'Service Unavailable');

module.exports.GATEWAY_TIMEOUT = new HttpStatus(504, 'GATEWAY_TIMEOUT', 'Gateway Timeout');

module.exports.HTTP_VERSION_NOT_SUPPORTED = new HttpStatus(505, 'HTTP_VERSION_NOT_SUPPORTED', 'HTTP Version Not Supported');

module.exports.INSUFFICIENT_STORAGE = new HttpStatus(507, 'INSUFFICIENT_STORAGE', 'Insufficient Storage');

module.exports.NETWORK_AUTHENTICATION_REQUIRED = new HttpStatus(511, 'NETWORK_AUTHENTICATION_REQUIRED', 'Network Authentication Required');
