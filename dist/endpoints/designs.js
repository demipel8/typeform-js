'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _request = require('../request');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var endpoint = 'designs'; /**
                           * @author Alvaro Martinez de Miguel (Demi) [demipel8@gmail.com]
                           */

exports.default = function () {

	var options = {
		uri: '' + endpoint,
		method: 'POST'
	};

	design.get = get;

	return {
		design: design
	};

	function design(colors, font) {

		if (!colors || typeof font !== 'string') throw new Error('Required parameters missing');

		var body = {
			colors: colors,
			font: font
		};

		return (0, _request2.default)(Object.assign({}, { body: body }, options));
	}

	function get(id) {

		if (typeof id !== 'string') throw new Error('Id parameters missing or not a string');

		var options = {
			uri: endpoint + '/' + id,
			method: 'GET'
		};

		return (0, _request2.default)(options);
	}
};