var mongoose = require('mongoose');
var Loc = mongoose.model('Location');

var sendJsonResponse = function (res, status, content) {
	res.status(status);
	res.json(content);
}

/*
ctrlReviews.reviewsCreate
ctrlReviews.reviewsReadOne
ctrlReviews.reviewsUpdateOne
ctrlReviews.reviewsDeleteOne
*/
module.exports.reviewsCreate = function (req, res){
	sendJsonResponse(res, 200, {"status": "success"});
};

module.exports.reviewsReadOne = function (req, res){
	if (req.params &&  req.params.locationid &&  req.params.reviewid){
		console.log('Should be 5796837ed89af4dc6478db4a: ' + req.params.reviewid);
		Loc
		.findById(req.params.locationid)
		.select('name reviews')
		.exec(
			function(err, location) {
				var response, review;
				if(!location){
					sendJsonResponse(res, 404, {
						"message" : "locationid not found"
					});
				return;
				} else if (err) {
					sendJsonResponse(res, 404, err);
					return;
				}
				if (location.reviews && location.reviews.length > 0) {
					console.log('location.reviews: ' + location.reviews);
					console.log('location.reviews.length: ' + location.reviews.length);
					console.log(req.params.reviewid);
					review = location.reviews.id(req.params.reviewid);

					console.log('Should be review: ' + review);
					if(!review) {
						sendJsonResponse(res, 404, {
							"message" : "Reviewid not found"
						});
					} else {
						response = {
							location : {	
								name  : location.name,
								id : req.params.locationid,
							}, 
							review : review
						};
						sendJsonResponse(res, 200, response);
					}	
				} else {
					sendJsonResponse(res, 404, {
						"message" : "No reviews found"
					});
				}
			}
		);
	} else {
		sendJsonResponse(res, 404, {
			"message" : "Not found, locationid and reviewid are both required"
		});
	}
};

module.exports.reviewsUpdateOne = function (req, res){
	sendJsonResponse(res, 200, {"status" : "success"});
};

module.exports.reviewsDeleteOne = function (req, res){
	sendJsonResponse(res, 200, {"status" : "success"});
};


