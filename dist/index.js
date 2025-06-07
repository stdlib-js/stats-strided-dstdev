/** @license Apache-2.0 */

'use strict';

/**
* Compute the standard deviation of a double-precision floating-point strided array.
*
* @module @stdlib/stats-strided-dstdev
*
* @example
* var Float64Array = require( '@stdlib/array-float64' );
* var dstdev = require( '@stdlib/stats-strided-dstdev' );
*
* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
*
* var v = dstdev( x.length, 1, x, 1 );
* // returns ~2.0817
*
* @example
* var Float64Array = require( '@stdlib/array-float64' );
* var dstdev = require( '@stdlib/stats-strided-dstdev' );
*
* var x = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
*
* var v = dstdev.ndarray( 4, 1, x, 2, 1 );
* // returns 2.5
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils-try-require/dist' );
var isError = require( '@stdlib/assert-is-error/dist' );
var main = require( './main.js' );


// MAIN //

var dstdev;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	dstdev = main;
} else {
	dstdev = tmp;
}


// EXPORTS //

module.exports = dstdev;

// exports: { "ndarray": "dstdev.ndarray" }
