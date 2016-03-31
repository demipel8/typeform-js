'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _request = require('./request');

var _form = require('./endpoints/form');

var _form2 = _interopRequireDefault(_form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @author Alvaro Martinez de Miguel (Demi) [demipel8@gmail.com]
 */

exports.default = function (sessionToken) {

  (0, _request.set)(sessionToken);

  return Object.assign((0, _form2.default)(), {});
};