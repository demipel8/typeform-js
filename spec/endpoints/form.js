/**
 * @author Alvaro Martinez de Miguel (Demi) [demipel8@gmail.com]
 */
import Form from '../../src/endpoints/form';

let title = 'title';
let id = 'anID';
let fields = [
	{
		"type": "short_text",
		"question": "What is your name?"
	}
];

describe( 'Form endpoint', () => {

	it( 'Should return and object with the required properties', () => {
		expect(Form().form).toBeDefined();
		expect(Form().form.get).toBeDefined();
	});

	it( 'form method should throw error if title or fields parameters are not set', () => {

		let endpoint = Form();

		expect(endpoint.form).toThrow();
		expect(() => endpoint.form(title)).toThrow();
		expect(() => endpoint.form(title, fields)).not.toThrow();
	});

	it( 'form method should throw error if title is not a string', () => {

		let endpoint = Form();

		expect(() => endpoint.form({}, fields)).toThrow();
	});

	it( 'form method should return a promise', (done) => {

		let endpoint = Form();

		endpoint.form(title, fields).catch(done)
	});

	it( 'form.get method should throw error if id is not defined', () => {

		let endpoint = Form();

		expect(() => endpoint.form.get()).toThrow();
	});

	it( 'form.get method should throw error if id is not a string', () => {

		let endpoint = Form();

		expect(() => endpoint.form.get({})).toThrow();
	});

	it( 'form.get method should return a promise', (done) => {

		let endpoint = Form();

		endpoint.form.get(id).catch(done)
	});


});