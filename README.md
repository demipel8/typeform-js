#typeform-js

typeform client for the browser

##Installation

clone this repo

##Usage

import (*ES6*) or require the package and set your API-key for authentication.
Every method of the library returns a promise tha will be fulfilled with
typeform.io's response.

```javascript
import Typeform from 'typeform-js';

let typeform = Typeform('MY_API_SECRET');
```

##Available endpoints

###form

####Create a form

arguments:

| Command | Type | Optional | Description |
| --- | --- | --- | --- |
| Title  | string | false | form title |
| Fields | array  | false | form fields |
| Extra  | object | true | extra options |

example

```javascript
typeform.form( "My first typeform",
    [
        {
            "type": "short_text",
            "question": "What is your name?"
        }
    ],
	{ "branding": false }
);
```

####Get a form

arguments:

| Command | Type | Optional | Description |
| --- | --- | --- | --- |
| Id  | string | false | form id |

example:

```javascript
typeform.form.get( 'id' );
```