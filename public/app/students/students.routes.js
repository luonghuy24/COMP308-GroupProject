System.register(['./students.component', './list/list.component', './view/view.component', './listcourses/listcourses.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var students_component_1, list_component_1, view_component_1, listcourses_component_1;
    var StudentsRoutes;
    return {
        setters:[
            function (students_component_1_1) {
                students_component_1 = students_component_1_1;
            },
            function (list_component_1_1) {
                list_component_1 = list_component_1_1;
            },
            function (view_component_1_1) {
                view_component_1 = view_component_1_1;
            },
            function (listcourses_component_1_1) {
                listcourses_component_1 = listcourses_component_1_1;
            }],
        execute: function() {
            exports_1("StudentsRoutes", StudentsRoutes = [{
                    path: 'students',
                    component: students_component_1.StudentsComponent,
                    children: [
                        { path: '', component: list_component_1.ListComponent },
                        { path: ':articleId', component: view_component_1.ViewComponent },
                        { path: ':studentId/courses', component: listcourses_component_1.ListCoursesComponent }
                    ],
                }]);
        }
    }
});
//# sourceMappingURL=students.routes.js.map