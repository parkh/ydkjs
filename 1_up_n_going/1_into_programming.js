// Output

alert('Hello');
console.log('"Hello" alerted.');



// Input

age = prompt( "Please tell me your age:" );
console.log( age );



// No difference

"I am a string";
'I am also a string';



// Converting (coercion)

var a = "42";           // "42"
var b = Number( a );    // 42

var amount = 199.98;
amount = amount / 4;              // 49.995
amount = amount.toFixed( 2 )      // 49.99   ( rounding error )
amount = "$" + String( amount );  // $49.95



// Auto-coercion

"99" == 99;    // true
"99" === 99;   // false



// Comments

var a = 42;     // 42 is the meaning of life

/* The following value is used because
   it has been shown that it answers
   every question in the universe. */
var a = 42;

var a = /* arbitrary value */ 42;

console.log( a );   // 42



// Constants

var TAX_RATE = 0.08;
// as of ES6:
const TAX_RATE = 0.08;



// Loops

while (numOfCustomers > 0) {
    console.log( "How may I help you?" );
    // help the customer...
    numOfCustomers = numOfCustomers - 1;
}

// versus:

do {
    console.log( "How may I help you?" );
    // help the customer...
    numOfCustomers = numOfCustomers - 1;
} while (numOfCustomers > 0);
// ^ this one always runs at list once

// versus:

for (var i = 0; i <= 9; i = i + 1) {
    console.log( i );
}
// 0 1 2 3 4 5 6 7 8 9



// Functions

function printAmount() {
    console.log( amount.toFixed( 2 ) );
}

var amount = 99.99;

printAmount(); // "99.99"

amount = amount * 2;

printAmount(); // "199.98"



// Scope
/* Lexical scope rules say that code in one scope
can access variables of either that scope
or any scope outside of it. */

function outer() {
    var a = 1;

    function inner() {
        var b = 2;

        // we can access both `a` and `b` here
        console.log( a + b );   // 3
    }

    inner();

    // we can only access `a` here
    console.log( a );           // 1
}

outer();