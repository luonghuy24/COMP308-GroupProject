System.register(["@angular/core", "../users.service", "@angular/router", "../../authentication/authentication.service"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, users_service_1, router_1, authentication_service_1, ListCoursesComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (authentication_service_1_1) {
                authentication_service_1 = authentication_service_1_1;
            }
        ],
        execute: function () {
            ListCoursesComponent = /** @class */ (function () {
                function ListCoursesComponent(_articlesService, _authenticationService, _router, _route) {
                    this._articlesService = _articlesService;
                    this._authenticationService = _authenticationService;
                    this._router = _router;
                    this._route = _route;
                }
                // ngOnInit() {
                //     this._articlesService.courses().subscribe(articles => this.articles
                //         = articles);
                // }
                ListCoursesComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.user = this._authenticationService.user;
                    this.paramsObserver = this._route.params.subscribe(function (params) {
                        var studentId = params['studentId'];
                        _this._articlesService
                            .records(studentId)
                            .subscribe(function (articles) {
                            _this.articles = articles;
                            _this.allowEdit = (_this.user._id === studentId);
                            // this.allowEdit = (this.user && this.user._id === this.
                            //     article.creator._id);
                        });
                    });
                };
                ListCoursesComponent.prototype.ngOnDestroy = function () {
                    this.paramsObserver.unsubscribe();
                };
                ListCoursesComponent = __decorate([
                    core_1.Component({
                        selector: 'list',
                        templateUrl: 'app/users/listcourses/listcourses.template.html'
                    }),
                    __metadata("design:paramtypes", [typeof (_a = typeof users_service_1.UsersService !== "undefined" && users_service_1.UsersService) === "function" && _a || Object, authentication_service_1.AuthenticationService,
                        router_1.Router,
                        router_1.ActivatedRoute])
                ], ListCoursesComponent);
                return ListCoursesComponent;
                var _a;
            }());
            exports_1("ListCoursesComponent", ListCoursesComponent);
        }
    };
});
//# sourceMappingURL=listcourses.component.js.map