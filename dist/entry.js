"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
/**
 * @author Alvaro Martinez de Miguel (Demi) [demipel8@gmail.com]
 */
var request = require("client-request");
var api = 'https://api.typeform.io/latest/';
var options = {
	uri: api,
	method: "GET",
	json: true
};

var token = '';

exports.default = function (sessionToken) {

	token = sessionToken;

	options.headers = {
		'X-API-TOKEN': sessionToken
	};

	return {
		latest: function latest() {
			return request(options, function callback(err, response, body) {
				console.log(response.statusCode);
				if (body) {
					console.log(body);
				}
			});
		}
	};
};