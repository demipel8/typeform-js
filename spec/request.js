/**
 * @author Alvaro Martinez de Miguel (Demi) [demipel8@gmail.com]
 */
import { default as Request, set as setRequest} from '../src/request';

describe( 'Request', () => {

	it( 'Request should throw an error if token is not set', () => {
		expect(Request).toThrow();
	});

	it( 'set should set the token', () => {
		expect(() => setRequest('token')).not.toThrow();
	});

	it( 'Request should return a promise', (done) => {
		Request().catch(done)
	});


});