'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _request = require('../request');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {

	var options = {
		uri: 'images',
		method: 'POST'
	};

	image.get = get;

	return {
		image: image
	};

	function image(url) {

		if (typeof url !== 'string') throw new Error('Url parameter missing or not a string');

		var body = {
			url: url
		};

		return (0, _request2.default)(Object.assign({}, { body: body }, options));
	}

	function get(id) {

		if (typeof id !== 'string') throw new Error('Id parameters missing or not a string');

		var options = {
			uri: 'images/' + id,
			method: 'GET'
		};

		return (0, _request2.default)(options);
	}
}; /**
    * @author Alvaro Martinez de Miguel (Demi) [demipel8@gmail.com]
    */