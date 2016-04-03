/**
 * @author Alvaro Martinez de Miguel (Demi) [demipel8@gmail.com]
 */
import Typeform from '../src/entry';

let token = 'tokenizer';

describe( 'Typeform-js', () => {

	it( 'Request should throw an error if token parameter is not set', () => {
		expect(Typeform).toThrow();
	});

	it( 'Should have expected properties', () => {

		let typeform = Typeform(token);

		expect(typeform.base).toBeDefined();
		expect(typeform.design).toBeDefined();
		expect(typeform.design.get).toBeDefined();
		expect(typeform.form).toBeDefined();
		expect(typeform.form.get).toBeDefined();
		expect(typeform.image).toBeDefined();
		expect(typeform.image.get).toBeDefined();
		expect(typeform.url).toBeDefined();
		expect(typeform.url.get).toBeDefined();
		expect(typeform.url.set).toBeDefined();
	});

});