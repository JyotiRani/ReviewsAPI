'use strict';

module.exports = function(Reviews) {
	
Reviews.validatesNumericalityOf('rating', {int: true});
Reviews.validatesLengthOf('remarks', { max: 500, message: { max: 'Remarks should not be more than 500 characters.' } });

Reviews.observe('before save', function updateTimestamp(ctx, next) {
	  console.log('> before save triggered:', ctx.Model.modelName, ctx.instance ||
      ctx.data);

	var data = ctx.instance || ctx.data;  
	if(ctx.isNewInstance) {
		console.log('new instance setting created date');
		data.createdDate = new Date();
	}
	next();
});	

};
