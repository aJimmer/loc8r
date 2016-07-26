var mongoose = require('mongoose');
var Loc = require('Location');

var sendJsonResponse = function (res, status, content) {
	res.status(status);
	res.json(content);
}

/*
locationsListByDistance
locationsCreate
ctrlLocations.locationsReadOne
ctrlLocations.locationsUpdateOne
ctrlLocations.locationDeleteOne
*/

module.exports.locationsCreate = function (req, res){
	sendJsonResponse(res, 200,{"status": "success"});
};

module.exports.locationsListByDistance = function (req, res){
	sendJsonResponse(res, 200, {"status": "success"});
}

module.exports.locationsReadOne= function (req, res){
	sendJsonResponse(res, 200, {"status": "success"});
}

module.exports.locationsUpdateOne = function (req, res){
	sendJsonResponse(res, 200, {"status": "success"});
}

module.exports.locationsDeleteOnce = function (req, res){
	sendJsonResponse(res, 200, {"status" : "success"});
}