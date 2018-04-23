System.register(["@angular/core", "@angular/router", "../tips.service", "../../authentication/authentication.service"], function (exports_1, context_1) {
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
    var core_1, router_1, tips_service_1, authentication_service_1, EditComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (tips_service_1_1) {
                tips_service_1 = tips_service_1_1;
            },
            function (authentication_service_1_1) {
                authentication_service_1 = authentication_service_1_1;
            }
        ],
        execute: function () {
            EditComponent = /** @class */ (function () {
                function EditComponent(_router, _route, _articlesService, _authenticationService) {
                    this._router = _router;
                    this._route = _route;
                    this._articlesService = _articlesService;
                    this._authenticationService = _authenticationService;
                    this.article = {};
                }
                EditComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.user = this._authenticationService.user;
                    this.paramsObserver = this._route.params.subscribe(function (params) {
                        var articleId = params['articleId'];
                        _this._articlesService.read(articleId).subscribe(function (article) {
                            _this.article = article;
                        }, function (error) { return _this._router.navigate(['/tips']); });
                    });
                };
                EditComponent.prototype.ngOnDestroy = function () {
                    this.paramsObserver.unsubscribe();
                };
                EditComponent.prototype.update = function () {
                    var _this = this;
                    this._articlesService.update(this.article).subscribe(function (savedArticle) { return _this._router.navigate(['/tips', savedArticle._id]); }, function (error) { return _this.errorMessage =
                        error; });
                };
                EditComponent = __decorate([
                    core_1.Component({
                        selector: 'edit',
                        templateUrl: 'app/tips/edit/edit.template.html'
                    }),
                    __metadata("design:paramtypes", [router_1.Router,
                        router_1.ActivatedRoute,
                        tips_service_1.TipsService,
                        authentication_service_1.AuthenticationService])
                ], EditComponent);
                return EditComponent;
            }());
            exports_1("EditComponent", EditComponent);
        }
    };
});
//# sourceMappingURL=edit.component.js.map