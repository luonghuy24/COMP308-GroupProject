const mongoose = require('mongoose');
//const Record = mongoose.model('Record');
const Emergency = require('mongoose').model('Emergency');
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
    const course = new Emergency(req.body);

    course.creator = req.user;

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
    Emergency.find().sort('-created').populate('creator', 'firstName lastName fullName')
                                    .populate('patient', 'firstName lastName fullName')
                                    .exec((err, course) => {
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
exports.emergencyByID = function (req, res, next, id) {
    Emergency.findById(id).populate('creator', 'firstName lastName fullName')
                        .populate('patient', 'firstName lastName fullName')
                        .exec((err, record) => {if (err) return next(err);
    if (!record) return next(new Error('Failed to load record '
        + id));
    req.record = record;
    next();
});
};
//
exports.read = function (req, res) {
    res.status(200).json(req.record);
};
//
exports.update = function (req, res) {
    const record = req.record;
    record.title = req.body.title;
    record.message = req.body.message;
    record.type = req.body.type;
    record.save((err) => {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.status(200).json(record);
        }
    });
};
//
exports.delete = function (req, res) {
    const record = req.record;
    record.remove((err) => {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.status(200).json(record);
        }
    });
};
//The hasAuthorization() middleware uses the req.article and req.user objects
//to verify that the current user is the creator of the current article
exports.hasAuthorization = function (req, res, next) {
    if (req.record.creator.id !== req.user.id) {
        return res.status(403).send({
            message: 'User is not authorized'
        });
    }
    next();
};

exports.getEmergency = function(req, res){
    Emergency.find({creator: req.params.userId}).sort('-created')
        .populate('creator', 'message type created')
        .exec((err, courses) => {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.status(200).json(courses);
        }
    })
}
exports.getRecords = function (req, res, next, id) {

    console.log(req.params);

    Emergency.find({ creator: id }).sort('-created')
        .populate('creator', 'title message type created')
        .exec((err, courses) => {
            if (err) {
                return res.status(400).send({
                    message: getErrorMessage(err)
                });
            } else {
                res.status(200).json(courses);
            }
        })
}
exports.getRecordsEmerg = function (req, res, next, id) {

    console.log(req.params);

    Emergency.findById(id).sort('-created')
        .populate('creator', 'title message type created')
        .exec((err, courses) => {
            if (err) {
                return res.status(400).send({
                    message: getErrorMessage(err)
                });
            } else {
                res.status(200).json(courses);
            }
        })
}