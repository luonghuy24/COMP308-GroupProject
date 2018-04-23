System.register(["@angular/core", "./emergency.service"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, emergency_service_1, EmergencyComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (emergency_service_1_1) {
                emergency_service_1 = emergency_service_1_1;
            }
        ],
        execute: function () {
            EmergencyComponent = /** @class */ (function () {
                function EmergencyComponent() {
                }
                EmergencyComponent = __decorate([
                    core_1.Component({
                        selector: 'articles',
                        template: '<router-outlet></router-outlet>',
                        providers: [emergency_service_1.EmergencyService]
                    })
                ], EmergencyComponent);
                return EmergencyComponent;
            }());
            exports_1("EmergencyComponent", EmergencyComponent);
        }
    };
});
//# sourceMappingURL=emergency.component.js.map