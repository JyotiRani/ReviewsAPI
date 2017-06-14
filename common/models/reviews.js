'use strict';

module.exports = function(Reviews) {
	
Reviews.validatesNumericalityOf('rating', {int: true});
Reviews.validatesLengthOf('remarks', { max: 500, message: { max: 'Remarks should not be more than 500 characters.' } });	

};
