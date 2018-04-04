const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CourseSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    courseCode: {
        type: String,
        default: '',
        trim: true,
        required: 'Title cannot be blank'
    },
    courseName: {
        type: String, default: '',
        trim: true
    },
    section: String,
    semester: String,
    creator: {
        type: Schema.ObjectId,
        ref: 'Student'
    }
});
mongoose.model('Course', CourseSchema);
