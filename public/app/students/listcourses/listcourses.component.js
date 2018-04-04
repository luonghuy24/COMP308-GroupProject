System.register(['@angular/core', '../students.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, students_service_1;
    var ListCoursesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (students_service_1_1) {
                students_service_1 = students_service_1_1;
            }],
        execute: function() {
            ListCoursesComponent = (function () {
                function ListCoursesComponent(_articlesService) {
                    this._articlesService = _articlesService;
                }
                ListCoursesComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._articlesService.list().subscribe(function (articles) { return _this.articles
                        = articles; });
                };
                ListCoursesComponent = __decorate([
                    core_1.Component({
                        selector: 'list',
                        templateUrl: 'app/students/list/listcourses.template.html'
                    }), 
                    __metadata('design:paramtypes', [students_service_1.StudentsService])
                ], ListCoursesComponent);
                return ListCoursesComponent;
            }());
            exports_1("ListCoursesComponent", ListCoursesComponent);
        }
    }
});
//# sourceMappingURL=listcourses.component.js.map