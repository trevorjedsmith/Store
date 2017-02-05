/// <reference path="../../typings/globals/toastr/index.d.ts" />

import { Injectable } from '@angular/core';



@Injectable()
export class Logger {

    

    constructor() {
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
        }

    }

    log(message: string, data: any, showToast: boolean) {
        this.logIt(message, data, showToast, 'info');
    }

    logError(message: string, data: any, showToast: boolean) {
        this.logIt(message, data, showToast, 'error');
    }

    logIt(message: string, data: any, showToast: boolean,toastType:string) {
        if (data) {
            console.log('Message: ' + message);
            console.log(data);
        } else {
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
    }

}



