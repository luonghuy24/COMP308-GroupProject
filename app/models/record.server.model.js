const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const RecordSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    bodyTemperature: Number,
    pulseRate: Number,
    bloodPressure: Number,
    respiratoryRate: Number,
    creator: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    patient: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});
mongoose.model('Record', RecordSchema);
