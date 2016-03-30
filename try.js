/**
 * @author Alvaro Martinez de Miguel (Demi) [demipel8@gmail.com]
 */
var typeform = require('./dist/entry').default('c58fa34cbc2c73c5509639d60040f004');

typeform.form(
	{
		"title": "My first typeform",
		"fields": [
			{
				"type": "short_text",
				"question": "What is your name?"
			}
		],
		"branding": false
	}
)
.then( data => console.log(data) )
.catch( err => console.log('Ouchs', err));