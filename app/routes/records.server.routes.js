const users = require('../../app/controllers/users.server.controller');
const records = require('../../app/controllers/records.server.controller');
//
module.exports = function (app) {
    app.route('/api/records')
        .get(records.list)
        .post(users.requiresLogin, records.create);
    app.route('/api/records/:courseId')
        .get(records.read)
        .put(users.requiresLogin, records.hasAuthorization, records.
            update)
        .delete(users.requiresLogin, records.hasAuthorization, records.
            delete);
    app.param('courseId', records.courseByID);
    app.route('/api/users/:userId/records')
        .get(records.getRecords)
};
