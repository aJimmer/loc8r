var mongoose = require('mongoose');
var Loc = require('Location');

var sendJsonResponse = function (res, status, content) {
	res.status(status);
	res.json({"status", "success"});
}

/*
ctrlReviews.reviewsCreate
ctrlReviews.reviewsReadOne
ctrlReviews.reviewsUpdateOne
ctrlReviews.reviewsDeleteOne
*/
module.exports.reviewsCreate = function (req, res){
	sendJsonResponse(res, 200, {"status": "success"});
}

module.exports.reviewsReadOne = function (req, res){
	sendJsonResponse(res, 200, {"status" : "success"});
}

module.exports.reviewsUpdateOne = function (req, res){
	sendJsonResponse(res, 200, {"status" : "success"});
}

module.exports.reviewsDeleteOne = function (req, res){
	sendJsonResponse(res, 200, {"status" : "success"});
}


