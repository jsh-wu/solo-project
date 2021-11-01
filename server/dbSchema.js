const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ScoreSchema = new Schema({
    name: {type: String, required: true},
    1: { type: Array, required: true }
});

module.exports = mongoose.model('Score', ScoreSchema);