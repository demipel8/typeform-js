/**
 * @author Alvaro Martinez de Miguel (Demi) [demipel8@gmail.com]
 */

import Request from '../request';

export default () => {

	let options = {
		uri: 'forms',
		method: 'POST'
	};

	return {
		form
	};

	function form(body) {
		return Request(Object.assign({}, { body }, options));
	}
}
