System.register(['@angular/core', '@angular/router', '../records.service', '../../authentication/authentication.service'], function(exports_1, context_1) {
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
    var core_1, router_1, records_service_1, authentication_service_1;
    var CreateComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (records_service_1_1) {
                records_service_1 = records_service_1_1;
            },
            function (authentication_service_1_1) {
                authentication_service_1 = authentication_service_1_1;
            }],
        execute: function() {
            CreateComponent = (function () {
                function CreateComponent(_router, _route, _articlesService, _authenticationService) {
                    this._router = _router;
                    this._route = _route;
                    this._articlesService = _articlesService;
                    this._authenticationService = _authenticationService;
                    this.article = {};
                    // this.user = _authenticationService.user;
                }
                CreateComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.user = this._authenticationService.user;
                    this._route.queryParams.subscribe(function (params) {
                        _this.article.patientName = params['patientName'];
                        _this.article.patient = params['patientId'];
                    });
                };
                CreateComponent.prototype.create = function () {
                    var _this = this;
                    console.log(this.article);
                    this._articlesService
                        .create(this.article)
                        .subscribe(function (createdArticle) { return _this._router.navigate(['/records',
                        createdArticle._id]); }, function (error) { return _this.errorMessage = error; });
                };
                CreateComponent = __decorate([
                    core_1.Component({
                        selector: 'create',
                        templateUrl: 'app/records/create/create.template.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, records_service_1.RecordsService, authentication_service_1.AuthenticationService])
                ], CreateComponent);
                return CreateComponent;
            }());
            exports_1("CreateComponent", CreateComponent);
        }
    }
});
//# sourceMappingURL=create.component.js.map