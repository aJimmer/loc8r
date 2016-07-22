var mongoose = require( 'mongoose');
var locatioSchema = new mongoose.Schema({ 
	name: { type: String, required: true },
	address: String,
	rating: { type: Number, "default": 0, min: 0, max: 5 },
	facilities: [String]
	coords: {type: [Number], index: '2dsphere'}
});

