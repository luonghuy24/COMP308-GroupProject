const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const EmergencySchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    title: String,
    message: String,
    type: String,
    creator: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});
mongoose.model('Emergency', EmergencySchema);
