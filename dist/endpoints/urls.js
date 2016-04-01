'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _request = require('../request');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ENDPOINT = 'urls'; /**
                        * @author Alvaro Martinez de Miguel (Demi) [demipel8@gmail.com]
                        */

var ERROR_MESSAGE = 'Id parameters missing or not a string';

exports.default = function () {

	var options = {
		uri: '' + ENDPOINT,
		method: 'POST'
	};

	url.get = get;
	url.set = set;

	return {
		url: url
	};

	function url(form_id) {

		if (typeof form_id !== 'string') throw new Error(ERROR_MESSAGE);

		var body = {
			form_id: form_id
		};

		return (0, _request2.default)(Object.assign({}, { body: body }, options));
	}

	function get(id) {

		if (typeof id !== 'string') throw new Error(ERROR_MESSAGE);

		var options = {
			uri: ENDPOINT + '/' + id,
			method: 'GET'
		};

		return (0, _request2.default)(options);
	}

	function set(old_id, new_id) {

		if (typeof old_id !== 'string' || typeof new_id !== 'string') throw new Error('Old_id or new_id parameters missing or not sting');

		var options = {
			uri: ENDPOINT + '/' + old_id,
			method: 'POST'
		};

		var body = {
			form_id: new_id
		};

		return (0, _request2.default)(Object.assign({}, { body: body }, options));
	}
};