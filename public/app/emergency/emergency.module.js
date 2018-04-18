System.register(["@angular/core", "@angular/common", "@angular/forms", "@angular/router", "./emergency.routes", "./emergency.component", "./list/list.component", "./view/view.component", "./listcourses/listcourses.component"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, common_1, forms_1, router_1, emergency_routes_1, emergency_component_1, list_component_1, view_component_1, listcourses_component_1, UsersModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (emergency_routes_1_1) {
                emergency_routes_1 = emergency_routes_1_1;
            },
            function (emergency_component_1_1) {
                emergency_component_1 = emergency_component_1_1;
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
            UsersModule = /** @class */ (function () {
                function UsersModule() {
                }
                UsersModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            common_1.CommonModule,
                            forms_1.FormsModule,
                            router_1.RouterModule.forChild(emergency_routes_1.UsersRoutes),
                        ],
                        declarations: [
                            emergency_component_1.UsersComponent,
                            list_component_1.ListComponent,
                            view_component_1.ViewComponent,
                            listcourses_component_1.ListCoursesComponent
                        ]
                    })
                ], UsersModule);
                return UsersModule;
            }());
            exports_1("UsersModule", UsersModule);
        }
    };
});
//# sourceMappingURL=emergency.module.js.map