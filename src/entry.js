/**
 * @author Alvaro Martinez de Miguel (Demi) [demipel8@gmail.com]
 */

import {set as setRequest} from './request';
import Forms from './endpoints/forms';
import Base from './endpoints/base';
import Images from './endpoints/images';

export default (sessionToken) => {

	setRequest(sessionToken);

	return Object.assign(
		{},
		Forms(),
		Base(),
		Images()
	);
}