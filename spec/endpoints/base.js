/**
 * @author Alvaro Martinez de Miguel (Demi) [demipel8@gmail.com]
 */
import Base from '../../src/endpoints/base';

describe( 'base endpoint', () => {

	it( 'Should return and object with the required properties', () => {
		expect(Base().base).toBeDefined();
	});

	it( 'base method should return a promise', (done) => {

		let endpoint = Base();

		endpoint.base().catch(done)
	});

});