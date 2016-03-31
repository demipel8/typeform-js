'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _request = require('./request');

var _forms = require('./endpoints/forms');

var _forms2 = _interopRequireDefault(_forms);

var _base = require('./endpoints/base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (sessionToken) {

	(0, _request.set)(sessionToken);

	return Object.assign({}, (0, _forms2.default)(), (0, _base2.default)());
}; /**
    * @author Alvaro Martinez de Miguel (Demi) [demipel8@gmail.com]
    */