System.register(["./emergency.component", "./create/create.component", "./list/list.component", "./view/view.component"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var emergency_component_1, create_component_1, list_component_1, view_component_1, EmergencyRoutes;
    return {
        setters: [
            function (emergency_component_1_1) {
                emergency_component_1 = emergency_component_1_1;
            },
            function (create_component_1_1) {
                create_component_1 = create_component_1_1;
            },
            function (list_component_1_1) {
                list_component_1 = list_component_1_1;
            },
            function (view_component_1_1) {
                view_component_1 = view_component_1_1;
            }
        ],
        execute: function () {
            exports_1("EmergencyRoutes", EmergencyRoutes = [{
                    path: 'emergency',
                    component: emergency_component_1.EmergencyComponent,
                    children: [
                        { path: '', component: list_component_1.ListComponent },
                        { path: 'create', component: create_component_1.CreateComponent },
                        { path: ':articleId', component: view_component_1.ViewComponent }
                    ],
                }]);
        }
    };
});
//# sourceMappingURL=emergency.routes.js.map