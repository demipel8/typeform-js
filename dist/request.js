'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.set = set;

exports.default = function (options) {

	if (!token) throw new Error('Token must be set, use this module\'s set method');

	var opts = Object.assign({}, options, {
		json: true,
		headers: { 'X-API-TOKEN': token }
	});

	opts.uri = setUri(options.uri);

	return new Promise(function (resolve, reject) {
		request(opts, function callback(err, response, body) {

			var isSuccessful = response.statusCode > 199 && response.statusCode < 300;

			if (!isSuccessful) {
				reject({
					code: response.statusCode,
					message: response.statusMessage
				});

				return;
			}

			resolve(body);
		});
	});

	function setUri(endPoint) {
		return '' + api + endPoint;
	}
};

/**
 * @author Alvaro Martinez de Miguel (Demi) [demipel8@gmail.com]
 */
var request = require("client-request");
var api = 'https://api.typeform.io/latest/';

var token = '';

function set(sessionToken) {

	token = sessionToken;
}