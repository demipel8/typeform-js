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

	return {
		form: form
	};

	function form(body) {
		return (0, _request2.default)(Object.assign({}, { body: body }, options));
	}
}; /**
    * @author Alvaro Martinez de Miguel (Demi) [demipel8@gmail.com]
    */