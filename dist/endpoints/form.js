'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _request = require('../request');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {

	var options = {
		uri: 'forms',
		method: 'POST'
	};

	form.get = get;

	return {
		form: form
	};

	function form(title, fields) {
		var extra = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];


		var body = {
			title: title,
			fields: fields
		};

		Object.assign(body, extra);

		return (0, _request2.default)(Object.assign({}, { body: body }, options));
	}

	function get(id) {
		var options = {
			uri: 'forms/' + id,
			method: 'GET'
		};

		return (0, _request2.default)(options);
	}
}; /**
    * @author Alvaro Martinez de Miguel (Demi) [demipel8@gmail.com]
    */