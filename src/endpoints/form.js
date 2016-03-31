/**
 * @author Alvaro Martinez de Miguel (Demi) [demipel8@gmail.com]
 */

import Request from '../request';

export default () => {

	const options = {
		uri: 'forms',
		method: 'POST'
	};

	form.get = get;

	return {
		form
	};

	function form(title, fields, extra = {}) {

		let body = {
			title,
			fields
		};

		Object.assign(body, extra);

		return Request(Object.assign({}, { body }, options));
	}

	function get(id) {

		let options = {
			uri: `forms/${id}`,
			method: 'GET'
		};

		return Request(options);
	}
}
