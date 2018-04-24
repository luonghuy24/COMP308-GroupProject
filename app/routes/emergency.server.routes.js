const users = require('../../app/controllers/users.server.controller');
const emergency = require('../../app/controllers/emergency.server.controller');
//
module.exports = function (app) {
    app.route('/api/emergency')
        .get(emergency.list)
        .post(users.requiresLogin, emergency.create);
    app.
        route('/api/emergency/:Id')
        .get(emergency.read)
        .put(users.requiresLogin, emergency.hasAuthorization, emergency.
            update)
        .delete(users.requiresLogin, emergency.hasAuthorization, emergency.
            delete);
    app.param('Id', emergency.getRecords);

    app.route('/api/emergency/edit/:IdEmerg')
        .get(emergency.read)
        .put(users.requiresLogin, emergency.hasAuthorization, emergency.
            update)
        .delete(users.requiresLogin, emergency.hasAuthorization, emergency.
            delete);
    app.param('IdEmerg', emergency.getRecordsEmerg);

   /* app.route('/api/emergency/edit/:IdEmerg/edit')
        .get(emergency.read)
        .put(users.requiresLogin, emergency.hasAuthorization, emergency.
            update)
        .delete(users.requiresLogin, emergency.hasAuthorization, emergency.
            delete);
    app.param('IdEmerg', emergency.getRecordsEmerg2);*/

    /*app.route('/api/emergency/edit2/:IdEmerg')
        .get(emergency.read)
        .put(users.requiresLogin, emergency.hasAuthorization, emergency.update)
        .delete(users.requiresLogin, emergency.hasAuthorization, emergency.
            delete);
    app.param('IdEmerg', emergency.getRecordsEmerg);*/
};
