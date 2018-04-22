System.register(["./records.component", "./create/create.component", "./list/list.component", "./view/view.component", "./edit/edit.component"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var records_component_1, create_component_1, list_component_1, view_component_1, edit_component_1, RecordsRoutes;
    return {
        setters: [
            function (records_component_1_1) {
                records_component_1 = records_component_1_1;
            },
            function (create_component_1_1) {
                create_component_1 = create_component_1_1;
            },
            function (list_component_1_1) {
                list_component_1 = list_component_1_1;
            },
            function (view_component_1_1) {
                view_component_1 = view_component_1_1;
            },
            function (edit_component_1_1) {
                edit_component_1 = edit_component_1_1;
            }
        ],
        execute: function () {
            exports_1("RecordsRoutes", RecordsRoutes = [{
                    path: 'records',
                    component: records_component_1.RecordsComponent,
                    children: [
                        { path: '', component: list_component_1.ListComponent },
                        { path: 'create', component: create_component_1.CreateComponent },
                        { path: ':articleId', component: view_component_1.ViewComponent },
                        { path: ':articleId/edit', component: edit_component_1.EditComponent }
                    ],
                }]);
        }
    };
});
//# sourceMappingURL=records.routes.js.map