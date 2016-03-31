/**
 * @author Alvaro Martinez de Miguel (Demi) [demipel8@gmail.com]
 */

import Request from '../request';

export default () => {

	const options = {
		method: 'GET'
	};
	return {
		base
	};

	function base() {

		return Request(options);
	}
}
