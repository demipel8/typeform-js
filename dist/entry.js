'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _request = require('./request');

var _forms = require('./endpoints/forms');

var _forms2 = _interopRequireDefault(_forms);

var _base = require('./endpoints/base');

var _base2 = _interopRequireDefault(_base);

var _images = require('./endpoints/images');

var _images2 = _interopRequireDefault(_images);

var _designs = require('./endpoints/designs');

var _designs2 = _interopRequireDefault(_designs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (sessionToken) {

	(0, _request.set)(sessionToken);

	return Object.assign({}, (0, _forms2.default)(), (0, _base2.default)(), (0, _images2.default)(), (0, _designs2.default)());
}; /**
    * @author Alvaro Martinez de Miguel (Demi) [demipel8@gmail.com]
    */