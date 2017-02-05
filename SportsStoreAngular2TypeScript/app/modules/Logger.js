/// <reference path="../../typings/globals/toastr/index.d.ts" />
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
var core_1 = require("@angular/core");
var Logger = (function () {
    function Logger() {
        toastr.options = {
            "closeButton": false,
            "debug": false,
            "newestOnTop": false,
            "progressBar": false,
            "positionClass": "toast-top-right",
            "preventDuplicates": false,
            "onclick": null,
            "showDuration": 300,
            "hideDuration": 1000,
            "timeOut": 5000,
            "extendedTimeOut": 1000,
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        };
    }
    Logger.prototype.log = function (message, data, showToast) {
        this.logIt(message, data, showToast, 'info');
    };
    Logger.prototype.logError = function (message, data, showToast) {
        this.logIt(message, data, showToast, 'error');
    };
    Logger.prototype.logIt = function (message, data, showToast, toastType) {
        if (data) {
            console.log('Message: ' + message);
            console.log(data);
        }
        else {
            console.log('Message: ' + message);
        }
        if (showToast) {
            if (toastType === 'error') {
                toastr.error(message);
            }
            else {
                toastr.info(message);
            }
        }
    };
    return Logger;
}());
Logger = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], Logger);
exports.Logger = Logger;
//# sourceMappingURL=Logger.js.map