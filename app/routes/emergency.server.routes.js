const users = require('../../app/controllers/users.server.controller');
const emergency = require('../../app/controllers/emergency.server.controller');
//
module.exports = function (app) {
    app.route('/api/emergency')
        .get(emergency.list)
        .post(users.requiresLogin, emergency.create);
    app.route('/api/emergency/:courseId')
        .get(emergency.read)
        .put(users.requiresLogin, emergency.hasAuthorization, emergency.
            update)
        .delete(users.requiresLogin, emergency.hasAuthorization, emergency.
            delete);
    //app.param('courseId', records.courseByID);
    app.route('/api/emergency/:userId')
        .get(emergency.getEmergency)
};
