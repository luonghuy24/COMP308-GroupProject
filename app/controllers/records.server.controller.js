﻿const mongoose = require('mongoose');
const Record = mongoose.model('Record');
const Student = require('mongoose').model('Student');
//
function getErrorMessage(err) {
    if (err.errors) {
        for (let errName in err.errors) {
            if (err.errors[errName].message) return err.errors[errName].
                message;
        }
    } else {
        return 'Unknown server error';
    }
};
//
exports.create = function (req, res) {
    const course = new Record(req.body);

    course.creator = req.user;

    if(req.user.type == 'Patient') {
        course.patient = req.user
    }

    course.save((err) => {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.status(200).json(course);
        }
    });
};
//
exports.list = function (req, res) {
    Record.find().sort('-created').populate('creator', 'firstName lastName fullName').exec((err, course) => {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.status(200).json(course);
        }
    });
};
//
exports.courseByID = function (req, res, next, id) {
    Record.findById(id).populate('creator', 'firstName lastName fullName').exec((err, record) => {if (err) return next(err);
    if (!record) return next(new Error('Failed to load record '
        + id));
    req.record = record;
    next();
});
};
//
exports.read = function (req, res) {
    res.status(200).json(req.course);
};
//
exports.update = function (req, res) {
    const course = req.record;
    course.courseCode = req.body.courseCode;
    course.courseName = req.body.courseName;
    course.section    = req.body.section;
    course.semester   = req.body.semester;
    course.save((err) => {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.status(200).json(course);
        }
    });
};
//
exports.delete = function (req, res) {
    const course = req.course;
    course.remove((err) => {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.status(200).json(course);
        }
    });
};
//The hasAuthorization() middleware uses the req.article and req.user objects
//to verify that the current user is the creator of the current article
exports.hasAuthorization = function (req, res, next) {
    if (req.course.creator.id !== req.user.id) {
        return res.status(403).send({
            message: 'User is not authorized'
        });
    }
    next();
};

exports.getRecords = function(req, res){
    Record.find({creator: req.params.userId}).sort('-created').populate('creator', 'firstName lastName fullName').exec((err, courses) => {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.status(200).json(courses);
        }
    })
}