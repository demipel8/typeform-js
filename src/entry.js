/**
 * @author Alvaro Martinez de Miguel (Demi) [demipel8@gmail.com]
 */

import {set as setRequest} from './request';
import Forms from './endpoints/forms';
import Base from './endpoints/base';
import Images from './endpoints/images';
import Designs from './endpoints/designs';
import Urls from './endpoints/urls';

export default (sessionToken) => {

	setRequest(sessionToken);

	return Object.assign(
		{},
		Forms(),
		Base(),
		Images(),
		Designs(),
		Urls()	
	);
}