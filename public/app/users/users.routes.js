System.register(["./users.component", "./list/list.component", "./view/view.component", "./listcourses/listcourses.component"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var users_component_1, list_component_1, view_component_1, listcourses_component_1, UsersRoutes;
    return {
        setters: [
            function (users_component_1_1) {
                users_component_1 = users_component_1_1;
            },
            function (list_component_1_1) {
                list_component_1 = list_component_1_1;
            },
            function (view_component_1_1) {
                view_component_1 = view_component_1_1;
            },
            function (listcourses_component_1_1) {
                listcourses_component_1 = listcourses_component_1_1;
            }
        ],
        execute: function () {
            exports_1("UsersRoutes", UsersRoutes = [{
                    path: 'users',
                    component: users_component_1.UsersComponent,
                    children: [
                        { path: '', component: list_component_1.ListComponent },
                        { path: ':articleId', component: view_component_1.ViewComponent },
                        { path: ':studentId/records', component: listcourses_component_1.ListCoursesComponent }
                    ],
                }]);
        }
    };
});
//# sourceMappingURL=users.routes.js.map