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

####Creates a form

arguments:

| title  | string |          |
| fields | array  |          |
| extra  | object | optional |

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

####get a form

arguments:

| id  | string |          |

example:

```javascript
typeform.form.get( 'id' );
```