'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _request = require('../request');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {

	var options = {
		method: 'GET'
	};
	return {
		base: base
	};

	function base() {

		return (0, _request2.default)(options);
	}
}; /**
    * @author Alvaro Martinez de Miguel (Demi) [demipel8@gmail.com]
    */