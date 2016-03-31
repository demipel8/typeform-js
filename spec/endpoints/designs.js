/**
 * @author Alvaro Martinez de Miguel (Demi) [demipel8@gmail.com]
 */
import Design from '../../src/endpoints/designs';

let colors = {
	"question": "#3D3D3D",
	"button": "#4FB0AE",
	"answer": "#4FB0AE",
	"background": "#FFFFFF"
};
let font = 'a google font';
let id = 'anID';

describe( 'Design endpoint', () => {

	it( 'Should return and object with the required properties', () => {
		expect(Design().design).toBeDefined();
		expect(Design().design.get).toBeDefined();
	});

	it( 'design method should throw error if title or fields parameters are not set', () => {

		let endpoint = Design();

		expect(endpoint.design).toThrow();
		expect(() => endpoint.design(colors)).toThrow();
		expect(() => endpoint.design(colors, font)).not.toThrow();
	});

	it( 'design method should throw error if font is not a string', () => {

		let endpoint = Design();

		expect(() => endpoint.design(colors, {})).toThrow();
	});

	it( 'design method should return a promise', (done) => {

		let endpoint = Design();

		endpoint.design(colors, font).catch(done)
	});

	it( 'design.get method should throw error if id is not defined', () => {

		let endpoint = Design();

		expect(() => endpoint.design.get()).toThrow();
	});

	it( 'design.get method should throw error if id is not a string', () => {

		let endpoint = Design();

		expect(() => endpoint.design.get({})).toThrow();
	});

	it( 'design.get method should return a promise', (done) => {

		let endpoint = Design();

		endpoint.design.get(id).catch(done)
	});


});