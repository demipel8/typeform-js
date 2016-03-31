/**
 * @author Alvaro Martinez de Miguel (Demi) [demipel8@gmail.com]
 */
import Images from '../../src/endpoints/images';

let url = 'http://image.url';
let id = 'anID';

describe( 'Images endpoint', () => {

	it( 'Should return and object with the required properties', () => {
		expect(Images().image).toBeDefined();
		expect(Images().image.get).toBeDefined();
	});

	it( 'image method should throw error if url is not set', () => {

		let endpoint = Images();

		expect(endpoint.image).toThrow();
	});

	it( 'image method should throw error if title is not a string', () => {

		let endpoint = Images();

		expect(() => endpoint.image({})).toThrow();
	});

	it( 'image method should return a promise', (done) => {

		let endpoint = Images();

		endpoint.image(url).catch(done)
	});

	it( 'image.get method should throw error if id is not defined', () => {

		let endpoint = Images();

		expect(() => endpoint.image.get()).toThrow();
	});

	it( 'image.get method should throw error if id is not a string', () => {

		let endpoint = Images();

		expect(() => endpoint.image.get({})).toThrow();
	});

	it( 'image.get method should return a promise', (done) => {

		let endpoint = Images();

		endpoint.image.get(id).catch(done)
	});


});