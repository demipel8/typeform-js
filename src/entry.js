/**
 * @author Alvaro Martinez de Miguel (Demi) [demipel8@gmail.com]
 */

import {set as setRequest} from './request';
import Form from './endpoints/form';

export default (sessionToken) => {

	setRequest(sessionToken);

	return Object.assign(Form(), {});
}