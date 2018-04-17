var dateFormat = require('dateformat');
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
    },
    motivation: String
});

RecordSchema.virtual('createdAt').get(function () {
    return dateFormat(this.created, "dddd, mmmm dS, yyyy");
});

RecordSchema.set('toJSON', {
    getters: true,
    virtuals: true
});

mongoose.model('Record', RecordSchema);
