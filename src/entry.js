/**
 * @author Alvaro Martinez de Miguel (Demi) [demipel8@gmail.com]
 */
const request = require("client-request");
const api ='https://api.typeform.io/latest/';
const options = {
	uri: api,
	method: "GET",
	json: true
};

let token = '';

export default (sessionToken) => {

	token = sessionToken;

	options.headers = {
		'X-API-TOKEN': sessionToken
	};

	return {
		latest: () => request(options, function callback(err, response, body) {
			console.log(response.statusCode);
			if (body) {
				console.log(body)
			}
		})
	}
}