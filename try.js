/**
 * @author Alvaro Martinez de Miguel (Demi) [demipel8@gmail.com]
 */
var typeform = require('./dist/entry').default('c58fa34cbc2c73c5509639d60040f004');

typeform.form( "My first typeform", [
			{
				"type": "short_text",
				"question": "What is your name?"
			}
		],
	{ "branding": false }
)
.then( data => typeform.form.get(data.id) )
.then( data => console.log(data.title))
.catch( err => console.log('Ouchs', err));