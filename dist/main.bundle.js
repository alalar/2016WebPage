webpackJsonp([1,4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = matchingPasswords;
// FORM GROUP VALIDATORS
function matchingPasswords() {
    return function (group) {
        var passwordControl = group.controls['password'];
        var confirmPasswordControl = group.controls['confirmPassword'];
        var password = passwordControl.value; // to get value in input tag
        var confirmPassword = confirmPasswordControl.value; // to get value in input tag
        if (password != confirmPassword) {
            confirmPasswordControl.setErrors({ MatchPassword: true });
        }
        else {
            confirmPasswordControl.setErrors(null);
            return null;
        }
    };
}
//# sourceMappingURL=password.validator.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_user__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_password_validator__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_async_unique_field_validator__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_users_localstorage__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_form_table_communication_service__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { Router, ActivatedRoute, Params } from '@angular/router';







var UserFormComponent = (function () {
    function UserFormComponent(userService, fb, 
        //private route: ActivatedRoute, private router: Router,
        userFormTableService) {
        var _this = this;
        this.userService = userService;
        this.fb = fb;
        this.userFormTableService = userFormTableService;
        this.errors = [];
        this.submitting = false;
        this.onSubmitted = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        this.user = new __WEBPACK_IMPORTED_MODULE_3__shared_user__["a" /* User */]();
        userFormTableService.editingItemInList$.subscribe(function (userId) {
            _this.user = null;
            _this.userService.getUser(userId).subscribe(function (user) {
                if (userId != null && !isNaN(userId)) {
                    _this.user = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__shared_users_localstorage__["c" /* readFromLocalStorageUser */])(userId);
                }
                if (_this.user == null) {
                    _this.user = new __WEBPACK_IMPORTED_MODULE_3__shared_user__["a" /* User */]();
                }
                _this.revert();
            });
        });
    }
    UserFormComponent.prototype.createForm = function () {
        this.userForm = this.fb.group({
            userId: [null],
            name: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].minLength(5), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].maxLength(90)])],
            username: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].minLength(5), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].maxLength(25)])],
            address: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].maxLength(80)])],
            city: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].maxLength(50)])],
            phone: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].pattern('^\\d{9}$')])],
            email: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].email])],
            password: [null],
            confirmPassword: [null]
        }, {
            validator: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__shared_password_validator__["a" /* matchingPasswords */])() // your validation method
        });
    };
    UserFormComponent.prototype.addNewUser = function () {
        this.user = new __WEBPACK_IMPORTED_MODULE_3__shared_user__["a" /* User */]();
        this.revert();
    };
    UserFormComponent.prototype.revert = function () {
        this.userForm.reset(this.user);
        this.userForm.controls['email'].setAsyncValidators(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__shared_async_unique_field_validator__["a" /* AsyncUniqueFieldValidator */])(this.user.userId, this.userService, "email"));
        this.userForm.controls['email'].updateValueAndValidity();
        this.userForm.controls['username'].setAsyncValidators(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__shared_async_unique_field_validator__["a" /* AsyncUniqueFieldValidator */])(this.user.userId, this.userService, "username"));
        this.userForm.controls['username'].updateValueAndValidity();
        if (this.userForm.controls['password']) {
            if (this.user == null || this.user.userId == null) {
                this.userForm.controls['password'].setValidators(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].pattern('^((?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,})$')]));
            }
            else {
                this.userForm.controls['password'].setValidators(null);
            }
            this.userForm.controls['password'].updateValueAndValidity();
        }
    };
    UserFormComponent.prototype.ngOnInit = function () {
        this.createForm();
        this.revert();
    };
    UserFormComponent.prototype.onSubmit = function () {
        var _this = this;
        this.errors = [];
        this.submitting = true;
        if (this.userForm.valid) {
            this.userService.save(this.userForm.value).subscribe(function (user) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__shared_users_localstorage__["d" /* saveLocalStorageUser */])(user);
                _this.submitting = false;
                _this.userFormTableService.updatedItem();
                _this.addNewUser();
            }, function (error) { _this.errors.push(error), _this.submitting = false; });
        }
    };
    return UserFormComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Output */])(),
    __metadata("design:type", Object)
], UserFormComponent.prototype, "onSubmitted", void 0);
UserFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'user-form',
        template: __webpack_require__(162)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_8__user_form_table_communication_service__["a" /* UserFormTableService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__user_form_table_communication_service__["a" /* UserFormTableService */]) === "function" && _c || Object])
], UserFormComponent);

var _a, _b, _c;
//# sourceMappingURL=user-form.component.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserMainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UserMainComponent = (function () {
    function UserMainComponent() {
    }
    return UserMainComponent;
}());
UserMainComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        template: "\n            <div class=\"row\">\n                <div class=\"col-sm-5\">\n                    <user-form></user-form>\n                </div>\n                <div class=\"col-sm-7\">\n                    <user-table></user-table>\n                </div>\n            <div>\n            "
    })
], UserMainComponent);

//# sourceMappingURL=user-main.component.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_users_localstorage__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_form_table_communication_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_modal_component__ = __webpack_require__(58);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersTableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Observable class extensions

// Observable operators







var UsersTableComponent = (function () {
    function UsersTableComponent(userService, 
        //private router: Router, 
        userFormTableService) {
        var _this = this;
        this.userService = userService;
        this.userFormTableService = userFormTableService;
        this.showFilterBox = true;
        this.sortedByFieldName = "userId";
        this.ascendingOrder = true;
        userFormTableService.updatedItemInList$.subscribe(function (isDone) {
            if (isDone) {
                _this.ngOnInit();
            }
        });
    }
    UsersTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.users = null;
        this.userService.getUsers().subscribe(function (users) {
            _this.users = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__shared_users_localstorage__["a" /* getLocalStorageUsers */])(users);
        });
    };
    UsersTableComponent.prototype.sortingByColumn = function (fieldName) {
        if (this.sortedByFieldName == fieldName) {
            this.ascendingOrder = !this.ascendingOrder;
        }
        else {
            this.ascendingOrder = true;
        }
        this.sortedByFieldName = fieldName;
    };
    UsersTableComponent.prototype.showRemoveModalDlg = function (userToRemove) {
        var _this = this;
        var infoTemplate = "\n            Do you want to remove user <strong> " + userToRemove.username + " </strong> ?\n             <dl class=\"row\">\n                    <dt class=\"col-1 text-right\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i></dt>\n                    <dd class=\"col-11\">" + userToRemove.name + "</dd>\n                    <dt class=\"col-1\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i></dt>\n                    <dd class=\"col-11\">" + userToRemove.address + " , " + userToRemove.city + "</dd>\n                    <dt class=\"col-1\"><i class=\"fa fa-phone\" aria-hidden=\"true\"></i></dt>\n                    <dd class=\"col-11\">" + userToRemove.phone + "</dd>\n                    <dt class=\"col-1\"><span>@</span></dt>\n                    <dd class=\"col-11\">" + userToRemove.email + "</dd>\n            </dl>";
        this.modal.show('Removing users', infoTemplate);
        this.subscription = this.modal.blnResult.subscribe(function (blnRemove) {
            if (blnRemove) {
                _this.userService.delete(userToRemove.userId).subscribe(function (user) { __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__shared_users_localstorage__["b" /* removeLocalStorageUser */])(userToRemove.userId); _this.ngOnInit(); }, function (error) { console.log(error); });
            }
            // unsubscribe is necessary such that the observable doesn't keep racking up listeners
            _this.subscription.unsubscribe();
        });
    };
    return UsersTableComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_8__shared_modal_component__["a" /* ModalComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_8__shared_modal_component__["a" /* ModalComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__shared_modal_component__["a" /* ModalComponent */]) === "function" && _a || Object)
], UsersTableComponent.prototype, "modal", void 0);
UsersTableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'user-table',
        template: __webpack_require__(163)
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__user_form_table_communication_service__["a" /* UserFormTableService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__user_form_table_communication_service__["a" /* UserFormTableService */]) === "function" && _c || Object])
], UsersTableComponent);

var _a, _b, _c;
//# sourceMappingURL=users-table.component.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 161:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <h1 class=\"text-center\">Simple CRUD app with Angular 2 and Bootstrap 4</h1>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n            <user-form></user-form>\r\n        </div>\r\n        <div class=\"col-sm-8\">\r\n            <user-table></user-table>\r\n        </div>\r\n    <div>\r\n</div>\r\n"

/***/ }),

/***/ 162:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user==null\" class=\"alert alert-info \">Loading user info <span class=\"glyphicon glyphicon-refresh glyphicon-refresh-animate\"></span></div>\r\n<div *ngIf=\"user!=null\" class=\"card border-primary\">\r\n    <div class=\"card-header text-white bg-primary \">\r\n        <span *ngIf=\"user!=null && user.userId!=null\">Editing User {{user.userId}}</span>\r\n        <span *ngIf=\"user==null || user.userId==null\">Adding a new User</span>\r\n    </div>\r\n    <div class=\"card-block\">\r\n        <div class=\"form-group p-2\">\r\n            <form [formGroup]=\"userForm\" (ngSubmit)=\"onSubmit()\" novalidate>\r\n                <input type=\"hidden\" formControlName=\"userId\">\r\n              \r\n                    <label class=\"col-form-label\" for=\"username\">User Name</label>\r\n                    <div class=\"input-group\">\r\n                        <span class=\"input-group-addon\" [ngClass]=\"{'alert-danger': !userForm.controls.username.valid,'alert-success': userForm.controls.username.valid}\">\r\n                            <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\r\n                        </span>\r\n                        <input class=\"form-control form-control-sm\" formControlName=\"username\" placeholder=\"enter a user name\" \r\n                            [ngClass]=\"{'is-invalid':!userForm.controls.username.valid,'is-valid':userForm.controls.username.valid}\">\r\n                    </div>\r\n                    <div *ngIf=\"userForm.controls.username.hasError('CheckingDuplicatedItem')\" class=\"alert alert-info \">\r\n                            <i class=\"fa fa-cog fa-spin fa-fw\"></i><span class=\"sr-only\">Checking userID</span>\r\n                            Checking if username exists \r\n                    </div>\r\n                    <!-- The hasError method can work with the built in validators but custom validators as well -->\r\n                    <div *ngIf=\"userForm.controls.username.hasError('required')\" class=\"validation-error-message\">You must include a username.</div>\r\n                    <div *ngIf=\"userForm.controls.username.hasError('minlength')\" class=\"validation-error-message\">Your username must be at least 5 characters long.</div>\r\n                    <div *ngIf=\"userForm.controls.username.hasError('maxlength')\" class=\"validation-error-message\">Your username cannot exceed 10 characters.</div>\r\n                    <div *ngIf=\"userForm.controls.username.hasError('DuplicatedItem') && userForm.controls.username.value\" class=\"validation-error-message\">username already exists</div>\r\n\r\n                    <label class=\"col-form-label\" for=\"name\">Full Name</label>\r\n                    <div class=\"input-group\">\r\n                        <span class=\"input-group-addon\" [ngClass]=\"{'alert-danger': !userForm.controls.name.valid,'alert-success': userForm.controls.name.valid}\">\r\n                            <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\r\n                        </span>\r\n                        <input class=\"form-control form-control-sm \" formControlName=\"name\" placeholder=\"enter full name\"\r\n                        [ngClass]=\"{'is-invalid':!userForm.controls.name.valid,'is-valid':userForm.controls.name.valid}\">\r\n                    </div>\r\n                    <!-- The hasError method can work with the built in validators but custom validators as well -->\r\n                    <div *ngIf=\"userForm.controls.name.hasError('required')\" class=\"validation-error-message\">You must include a full name.</div>\r\n                    <div *ngIf=\"userForm.controls.name.hasError('minlength')\" class=\"validation-error-message\">Your name must be at least 5 characters long.</div>\r\n                    <div *ngIf=\"userForm.controls.name.hasError('maxlength')\" class=\"validation-error-message\">Your name cannot exceed 10 characters.</div>\r\n\r\n                    <label class=\"col-form-label\" for=\"address\">address</label>\r\n                    <div class=\"input-group\">\r\n                        <span class=\"input-group-addon\" [ngClass]=\"{'alert-danger': !userForm.controls.address.valid,'alert-success': userForm.controls.address.valid}\">\r\n                            <i class=\"fa fa-home\" aria-hidden=\"true\"></i>\r\n                        </span>\r\n                        <input class=\"form-control form-control-sm \" formControlName=\"address\" placeholder=\"enter an address\"\r\n                        [ngClass]=\"{'is-invalid':!userForm.controls.address.valid,'is-valid':userForm.controls.address.valid}\">\r\n                    </div>\r\n                    <!-- The hasError method can work with the built in validators but custom validators as well -->\r\n                    <div *ngIf=\"userForm.controls.address.hasError('required')\" class=\"validation-error-message\">You must include an address.</div>\r\n\r\n                    <label class=\"col-form-label\" for=\"city\">city</label>\r\n                    <div class=\"input-group\">\r\n                        <span class=\"input-group-addon\" [ngClass]=\"{'alert-danger': !userForm.controls.city.valid,'alert-success': userForm.controls.city.valid}\">\r\n                            <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>\r\n                        </span>\r\n                        <input class=\"form-control form-control-sm\" formControlName=\"city\" placeholder=\"enter a city\"\r\n                        [ngClass]=\"{'is-invalid':!userForm.controls.city.valid,'is-valid':userForm.controls.city.valid}\">\r\n                    </div>\r\n                    <!-- The hasError method can work with the built in validators but custom validators as well -->\r\n                    <div *ngIf=\"userForm.controls.city.hasError('required')\" class=\"validation-error-message\">You must include a city.</div>\r\n\r\n                    <label class=\"col-form-label\" for=\"phone\">phone</label>\r\n                    <div class=\"input-group\">\r\n                        <span class=\"input-group-addon\" [ngClass]=\"{'alert-danger': !userForm.controls.phone.valid,'alert-success': userForm.controls.phone.valid}\">\r\n                            <i class=\"fa fa-phone\" aria-hidden=\"true\"></i>\r\n                        </span>\r\n                        <input class=\"form-control form-control-sm\" formControlName=\"phone\" placeholder=\"enter a phone number\"\r\n                        [ngClass]=\"{'is-invalid':!userForm.controls.phone.valid,'is-valid':userForm.controls.phone.valid}\">\r\n                    </div>\r\n                    <!-- The hasError method can work with the built in validators but custom validators as well -->\r\n                    <div *ngIf=\"userForm.controls.phone.hasError('required')\" class=\"validation-error-message\">You must include a phone number.</div>\r\n                    <div *ngIf=\"userForm.controls.phone.hasError('pattern') && userForm.controls.phone.value\" class=\"validation-error-message\">Phone number is made of 9 digits</div>\r\n\r\n                    <label class=\"col-form-label\" for=\"email\">Email</label>\r\n                    <div class=\"input-group\">\r\n                        <span class=\"input-group-addon\" [ngClass]=\"{'alert-danger': !userForm.controls.email.valid,'alert-success': userForm.controls.email.valid}\">\r\n                            @\r\n                        </span>\r\n                        <input class=\"form-control form-control-sm\" formControlName=\"email\" placeholder=\"enter an email\"\r\n                        [ngClass]=\"{'is-invalid':!userForm.controls.email.valid,'is-valid':userForm.controls.email.valid}\">\r\n                    </div>\r\n                    <div *ngIf=\"userForm.controls.email.hasError('CheckingDuplicatedItem')\" class=\"alert alert-info \">Checking if email exists <span class=\"glyphicon glyphicon-refresh glyphicon-refresh-animate\"></span></div>\r\n                    <!-- The hasError method can work with the built in validators but custom validators as well -->\r\n                    <div *ngIf=\"userForm.controls.email.hasError('required')\" class=\"validation-error-message\">You must include a user email.</div>\r\n                    <div *ngIf=\"userForm.controls.email.hasError('email') && userForm.controls.email.value\" class=\"validation-error-message\">Your user email is not valid</div>\r\n                    <div *ngIf=\"userForm.controls.email.hasError('DuplicatedItem') && userForm.controls.email.value\" class=\"validation-error-message\">Email already exists</div>\r\n\r\n                    <label class=\"col-form-label\" for=\"password\">Password</label>\r\n                    <div class=\"input-group\">\r\n                        <span class=\"input-group-addon\" [ngClass]=\"{'alert-danger': !userForm.controls.password.valid,'alert-success': userForm.controls.password.valid}\">\r\n                            <i class=\"fa fa-lock\" aria-hidden=\"true\"></i>\r\n                        </span>\r\n                        <input type=\"password\" class=\"form-control form-control-sm\" formControlName=\"password\" placeholder=\"enter a password\"\r\n                        [ngClass]=\"{'is-invalid':!userForm.controls.password.valid,'is-valid':userForm.controls.password.valid}\">\r\n                    </div>\r\n                    <!-- The hasError method can work with the built in validators but custom validators as well -->\r\n                    <div *ngIf=\"userForm.controls.password.hasError('required')\" class=\"validation-error-message\">You must include a password</div>\r\n                    <div *ngIf=\"userForm.controls.password.hasError('pattern')\" class=\"validation-error-message\">Password length must be at least 8 chars, 1 Uppercase letter, 1 Lowercase letter and 1 digit</div>\r\n\r\n                    <label class=\"col-form-label\" for=\"confirmPassword\">Confirm Password</label>\r\n                    <div class=\"input-group\">\r\n                        <span class=\"input-group-addon\" [ngClass]=\"{'alert-danger': !userForm.controls.confirmPassword.valid,'alert-success': userForm.controls.confirmPassword.valid}\">\r\n                            <i class=\"fa fa-lock\" aria-hidden=\"true\"></i>\r\n                        </span>\r\n                        <input type=\"password\" class=\"form-control form-control-sm\" formControlName=\"confirmPassword\" placeholder=\"reenter the password\"\r\n                        [ngClass]=\"{'is-invalid':!userForm.controls.confirmPassword.valid,'is-valid':userForm.controls.confirmPassword.valid}\">\r\n                    </div>\r\n                    <!-- The hasError method can work with the built in validators but custom validators as well -->\r\n                    <div *ngIf=\"userForm.controls.confirmPassword.hasError('MatchPassword')\" class=\"validation-error-message\">Passwords must be identical</div>\r\n\r\n                <div *ngFor=\"let e of errors\" class=\"validation-error-message\">\r\n                    {{e}}\r\n                </div>     \r\n                <div class=\"m-2\">\r\n                    <button type=\"submit\"\r\n                    [disabled]=\"!userForm.valid || userForm.pristine\" class=\"btn btn-success\">Save\r\n                    <span *ngIf=\"submitting\" class=\"glyphicon glyphicon-refresh glyphicon-refresh-animate\"></span>    \r\n                    </button> &nbsp;\r\n                    <button type=\"reset\" (click)=\"revert()\"\r\n                    [disabled]=\"userForm.pristine\" class=\"btn btn-danger\">Revert</button>\r\n                    <button  *ngIf=\"user!=null && user.userId!=null\" type=\"button\" (click)=\"addNewUser();\"\r\n                        class=\"pull-right btn btn-warning\">New <span class=\"glyphicon glyphicon glyphicon-user\" ></span></button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 163:
/***/ (function(module, exports) {

module.exports = "\r\n<div  class=\"card border-primary\">    \r\n    <div class=\"card-header text-white bg-primary \">\r\n        <h3 class=\"panel-title text-center\">Users \r\n            <button class=\"btn btn-success btn-xs clickable filter pull-right\" data-toggle=\"tooltip\" title=\"Show Filter\" (click)=\"showFilterBox=!showFilterBox;\">\r\n                &nbsp;<i class=\"fa fa-filter\" aria-hidden=\"true\"></i>&nbsp;\r\n            </button>\r\n        </h3>\r\n    </div>\r\n    <div class=\"card-block\" [hidden]=\"!showFilterBox\">\r\n            <div class=\"input-group col-10 m-2\">\r\n                <input type=\"text\" class=\"form-control\" #filterControl (keyup)=\"0\"   placeholder=\"Enter the text to search\"/>\r\n                <span class=\"input-group-btn\">\r\n                        <button type=\"button\" class=\"btn btn-primary text-center\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i></button>\r\n                </span>\r\n            </div>\r\n                \r\n    </div>\r\n    <div class=\"table-responsive\">         \r\n        <table class=\"table\">\r\n            <thead class=\"thead-inverse\">\r\n                <th  (click)=\"sortingByColumn('userId')\"><button class=\"btn btn-link\" >ID\r\n                        <i *ngIf=\"sortedByFieldName=='userId' && !ascendingOrder\" class=\"fa fa-sort-alpha-desc\" aria-hidden=\"true\"></i>\r\n                        <i *ngIf=\"sortedByFieldName=='userId' && ascendingOrder\" class=\"fa fa-sort-alpha-asc\" aria-hidden=\"true\"></i>\r\n                </button>\r\n                </th>\r\n                <th><button class=\"btn btn-link\" (click)=\"sortingByColumn('username')\">Name\r\n                        <i *ngIf=\"sortedByFieldName=='username' && !ascendingOrder\" class=\"fa fa-sort-alpha-desc\" aria-hidden=\"true\"></i>\r\n                        <i *ngIf=\"sortedByFieldName=='username' && ascendingOrder\" class=\"fa fa-sort-alpha-asc\" aria-hidden=\"true\"></i>\r\n                    </button>\r\n                </th>\r\n                <th><button class=\"btn btn-link\" (click)=\"sortingByColumn('name')\">Full name\r\n                        <i *ngIf=\"sortedByFieldName=='name' && !ascendingOrder\" class=\"fa fa-sort-alpha-desc\" aria-hidden=\"true\"></i>\r\n                        <i *ngIf=\"sortedByFieldName=='name' && ascendingOrder\" class=\"fa fa-sort-alpha-asc\" aria-hidden=\"true\"></i>\r\n                    </button>\r\n                </th>\r\n                <th><button class=\"btn btn-link\" (click)=\"sortingByColumn('address')\">Address\r\n                        <i *ngIf=\"sortedByFieldName=='address' && !ascendingOrder\" class=\"fa fa-sort-alpha-desc\" aria-hidden=\"true\"></i>\r\n                        <i *ngIf=\"sortedByFieldName=='address' && ascendingOrder\" class=\"fa fa-sort-alpha-asc\" aria-hidden=\"true\"></i>\r\n                    </button>\r\n                </th>\r\n                <th><button class=\"btn btn-link\" (click)=\"sortingByColumn('city')\">City\r\n                        <i *ngIf=\"sortedByFieldName=='city' && !ascendingOrder\" class=\"fa fa-sort-alpha-desc\" aria-hidden=\"true\"></i>\r\n                        <i *ngIf=\"sortedByFieldName=='city' && ascendingOrder\" class=\"fa fa-sort-alpha-asc\" aria-hidden=\"true\"></i>\r\n                    </button>\r\n                </th>\r\n                <th><button class=\"btn btn-link\" (click)=\"sortingByColumn('phone')\">Phone\r\n                        <i *ngIf=\"sortedByFieldName=='phone' && !ascendingOrder\" class=\"fa fa-sort-alpha-desc\" aria-hidden=\"true\"></i>\r\n                        <i *ngIf=\"sortedByFieldName=='phone' && ascendingOrder\" class=\"fa fa-sort-alpha-asc\" aria-hidden=\"true\"></i>\r\n                    </button>\r\n                </th>\r\n                <th><button class=\"btn btn-link\" (click)=\"sortingByColumn('email')\">Email\r\n                        <i *ngIf=\"sortedByFieldName=='email' && !ascendingOrder\" class=\"fa fa-sort-alpha-desc\" aria-hidden=\"true\"></i>\r\n                        <i *ngIf=\"sortedByFieldName=='email' && ascendingOrder\" class=\"fa fa-sort-alpha-asc\" aria-hidden=\"true\"></i>\r\n                    </button>\r\n                </th>\r\n                <th></th>\r\n            </thead>\r\n            <tbody *ngIf=\"users==null\">\r\n                <tr>\r\n                    <td colspan=8 class=\"alert alert-info text-center\">\r\n                        Loading users info <span class=\"glyphicon glyphicon-refresh glyphicon-refresh-animate\"></span>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n            <tbody *ngIf=\"users!=null || true\" >\r\n                <tr *ngFor='let user of users | async | filterby : filterControl.value | sortby : sortedByFieldName : ascendingOrder'>\r\n                    <td>{{user.userId}}</td>\r\n                    <td>{{user.username}}</td>\r\n                    <td>{{user.name}}</td>\r\n                    <td>{{user.address}}</td>\r\n                    <td>{{user.city}}</td>\r\n                    <td>{{user.phone}}</td>\r\n                    <td>{{user.email}}</td>\r\n                    <td>\r\n                        <button type=\"button\" class=\"btn btn-link\" title=\"edit\" (click)=\"userFormTableService.editingItem(user.userId)\" >\r\n                                <i class=\"fa fa-edit text-green\" aria-hidden=\"true\"></i>\r\n                        </button>\r\n                        <button type=\"button\" class=\"btn btn-link text-red\" title=\"remove\" (click)=\"showRemoveModalDlg(user)\"> \r\n                                <i class=\"fa fa-remove\" aria-hidden=\"true\"></i>\r\n                        </button>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n\r\n</div>\r\n     <app-modal>\r\n    </app-modal>\r\n    \r\n"

/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(88);


/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of__);
/* harmony export (immutable) */ __webpack_exports__["a"] = getLocalStorageUsers;
/* harmony export (immutable) */ __webpack_exports__["d"] = saveLocalStorageUser;
/* harmony export (immutable) */ __webpack_exports__["b"] = removeLocalStorageUser;
/* harmony export (immutable) */ __webpack_exports__["c"] = readFromLocalStorageUser;


function getUsersFromLocalStorage() {
    try {
        if (localStorage.getItem("users")) {
            return JSON.parse(localStorage.getItem("users"));
        }
    }
    catch (e) {
        return null;
    }
}
function setUsersToLocalStorage(users) {
    try {
        localStorage.setItem("users", JSON.stringify(users));
    }
    catch (e) {
    }
}
function getHighestId(users) {
    return Math.max.apply(Math, users.map(function (user) { return user.userId; }));
}
function getLocalStorageUsers(users) {
    var localUsers = getUsersFromLocalStorage();
    if (localUsers != null) {
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].of(localUsers);
    }
    else {
        setUsersToLocalStorage(users);
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].of(users);
    }
}
function saveLocalStorageUser(user) {
    var localUsers = getUsersFromLocalStorage();
    if (localUsers != null) {
        if (user.userId != null) {
            var userIndex = localUsers.map(function (user) { return user.userId; }).indexOf(user.userId);
            localUsers[userIndex] = user;
        }
        else {
            user.userId = getHighestId(localUsers) + 1;
            localUsers.push(user);
        }
        setUsersToLocalStorage(localUsers);
    }
}
function removeLocalStorageUser(userId) {
    var localUsers = getUsersFromLocalStorage();
    if (localUsers != null) {
        if (userId != null) {
            var userIndex = localUsers.map(function (user) { return user.userId; }).indexOf(userId);
            if (userIndex > -1) {
                localUsers.splice(userIndex, 1);
                setUsersToLocalStorage(localUsers);
            }
        }
    }
}
function readFromLocalStorageUser(userId) {
    if (localStorage.getItem("users")) {
        var currentUsers = JSON.parse(localStorage.getItem("users"));
        return currentUsers.filter(function (user) { return user.userId === userId; })[0];
    }
    return null;
}
//# sourceMappingURL=users-localstorage.js.map

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserFormTableService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var UserFormTableService = (function () {
    function UserFormTableService() {
        // Observable string sources
        this.updatedItemInList = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.editingItemInList = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        // Observable string streams
        this.updatedItemInList$ = this.updatedItemInList.asObservable();
        this.editingItemInList$ = this.editingItemInList.asObservable();
    }
    // Service message commands
    UserFormTableService.prototype.updatedItem = function () {
        this.updatedItemInList.next(true);
    };
    UserFormTableService.prototype.editingItem = function (userId) {
        this.editingItemInList.next(userId);
    };
    return UserFormTableService;
}());
UserFormTableService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], UserFormTableService);

//# sourceMappingURL=user-form-table-communication.service.js.map

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.usersUrl = 'api/users'; // URL to web api
    }
    UserService.prototype.getUsers1 = function () {
        return this.http.get(this.usersUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    UserService.prototype.getUser1 = function (id) {
        var url = this.usersUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    UserService.prototype.delete1 = function (userId) {
        var url = this.usersUrl + "/" + userId;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    UserService.prototype.getUsers = function () {
        return this.http.get(this.usersUrl)
            .map(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    UserService.prototype.getUser = function (id) {
        //const url = `${this.usersUrl}/${id}`;
        var url = "" + this.usersUrl;
        return this.http
            .get(url)
            .map(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    UserService.prototype.delete = function (userId) {
        //const url = `${this.usersUrl}/${userId}`;
        var url = "" + this.usersUrl;
        return this.http.post(url, { headers: this.headers })
            .map(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    UserService.prototype.save = function (user) {
        if (user.userId) {
            return this.update(user);
        }
        else {
            return this.create(user);
        }
    };
    UserService.prototype.create = function (user) {
        var url = this.usersUrl + "/" + user.userId;
        return this.http
            .post(url, JSON.stringify(user), { headers: this.headers })
            .map(function (res) {
            if (res.json())
                return res.json().data;
            else
                return user;
        })
            .catch(this.handleError);
    };
    UserService.prototype.update = function (user) {
        var url = this.usersUrl + "/" + user.userId;
        return this.http
            .post(url, JSON.stringify(user), { headers: this.headers })
            .map(function (res) {
            if (res.json())
                return res.json().data;
            else
                return user;
        })
            .catch(this.handleError);
    };
    UserService.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.log(errMsg);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(errMsg);
        //return errMsg;
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalComponent = (function () {
    function ModalComponent() {
        this.clickStream = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.blnResult = this.clickStream.asObservable();
    }
    ModalComponent.prototype.show = function (strHeader, strBody) {
        this.modalHeader = strHeader;
        this.modalBody = strBody;
        $('div.modal').modal('show');
    };
    ModalComponent.prototype.hide = function () {
        $('div.modal').modal('hide');
    };
    ModalComponent.prototype.doit = function () {
        this.clickStream.next(true);
        this.hide();
    };
    ModalComponent.prototype.nodoit = function () {
        this.clickStream.next(false);
        this.hide();
    };
    ModalComponent.prototype.onContainerClicked = function (event) {
        if (event.target.classList.contains('modal')) {
            this.hide();
        }
    };
    return ModalComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Output */])(),
    __metadata("design:type", Object)
], ModalComponent.prototype, "blnResult", void 0);
ModalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-modal',
        template: "\n  <div (click)=\"onContainerClicked($event)\" class=\"modal fade\" [ngClass]=\"{'show': visibleAnimate}\" tabindex=\"-1\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\" >\n        <div class=\"modal-header\" >\n          <h4 >{{modalHeader}}</h4>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"hide()\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\" [innerHTML]=modalBody>\n        </div>\n        <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-default\" (click)=\"nodoit()\">No</button>\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"doit()\">Yes</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  "
    })
], ModalComponent);

//# sourceMappingURL=modal.component.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(userId, username, name, address, lat, long, city, phone, email) {
        if (userId === void 0) { userId = null; }
        if (username === void 0) { username = null; }
        if (name === void 0) { name = null; }
        if (address === void 0) { address = null; }
        if (lat === void 0) { lat = null; }
        if (long === void 0) { long = null; }
        if (city === void 0) { city = null; }
        if (phone === void 0) { phone = null; }
        if (email === void 0) { email = null; }
        this.userId = userId;
        this.username = username;
        this.name = name;
        this.address = address;
        this.lat = lat;
        this.long = long;
        this.city = city;
        this.phone = phone;
        this.email = email;
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 87:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 87;


/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(104);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.name = 'Angular';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'my-app',
        template: __webpack_require__(161)
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_in_memory_web_api__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__users_in_memory_data_service__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__not_found_component__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__users_user_main_component__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__users_user_form_component__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__users_users_table_component__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__users_user_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__users_user_form_table_communication_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_filterby_pipe__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_sortby_pipe__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_modal_component__ = __webpack_require__(58);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//import { AppRoutingModule } from './app-routing.module';
//import { RouterModule, Routes } from '@angular/router';
// Imports for loading & configuring the in-memory web api












/*
const appRoutes: Routes = [
  { path: 'users', component: UserMainComponent },
  { path: 'user/:id',      component: UserMainComponent },
  { path: '',
    redirectTo: '/users',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];
*/
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4_angular_in_memory_web_api__["a" /* InMemoryWebApiModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__users_in_memory_data_service__["a" /* InMemoryDataService */], { delay: 1000 }),
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__users_user_main_component__["a" /* UserMainComponent */],
            __WEBPACK_IMPORTED_MODULE_9__users_user_form_component__["a" /* UserFormComponent */],
            __WEBPACK_IMPORTED_MODULE_10__users_users_table_component__["a" /* UsersTableComponent */],
            __WEBPACK_IMPORTED_MODULE_7__not_found_component__["a" /* PageNotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_13__shared_filterby_pipe__["a" /* FilterByPipe */],
            __WEBPACK_IMPORTED_MODULE_14__shared_sortby_pipe__["a" /* SortByPipe */],
            __WEBPACK_IMPORTED_MODULE_15__shared_modal_component__["a" /* ModalComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_11__users_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_12__users_user_form_table_communication_service__["a" /* UserFormTableService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        template: '<h2>Current selection is not valid for this application</h2>'
    })
], PageNotFoundComponent);

//# sourceMappingURL=not-found.component.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterByPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterByPipe = (function () {
    function FilterByPipe() {
    }
    FilterByPipe.prototype.transform = function (values, queryString) {
        if (values != null) {
            return values.filter(function (user) { return Object.keys(user).map(function (key) { return user[key]; }).some(function (x) { return new RegExp(queryString, 'i').test(x); }); });
        }
        else {
            return null;
        }
    };
    return FilterByPipe;
}());
FilterByPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Pipe */])({
        name: 'filterby',
        pure: true
    })
], FilterByPipe);

//# sourceMappingURL=filterby.pipe.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortByPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SortByPipe = (function () {
    function SortByPipe() {
    }
    SortByPipe.prototype.transform = function (values, fieldname, ascendingOrder) {
        if (values != null) {
            return values.sort(function (a, b) {
                var fieldAToCompare, fieldBToCompare;
                if (typeof a[fieldname] == "string") {
                    fieldAToCompare = a[fieldname].toLowerCase();
                    fieldBToCompare = b[fieldname].toLowerCase();
                }
                else {
                    fieldAToCompare = a[fieldname];
                    fieldBToCompare = b[fieldname];
                }
                if (fieldAToCompare < fieldBToCompare) {
                    return (ascendingOrder ? -1 : 1);
                }
                else if (fieldAToCompare > fieldBToCompare) {
                    return (ascendingOrder ? 1 : -1);
                }
                else {
                    return 0;
                }
            });
        }
        else {
            return null;
        }
    };
    return SortByPipe;
}());
SortByPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Pipe */])({
        name: 'sortby',
        pure: true
    })
], SortByPipe);

//# sourceMappingURL=sortby.pipe.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_user__ = __webpack_require__(59);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InMemoryDataService; });

var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var users = [
            new __WEBPACK_IMPORTED_MODULE_0__shared_user__["a" /* User */](1, "PLewis", "Peter Lewis", "Brown Street 23", 0, 0, "London", 234234234, "PLewis@hotmail.com"),
            new __WEBPACK_IMPORTED_MODULE_0__shared_user__["a" /* User */](2, "MJames", "Mary James", "Green Street 5", 0, 0, "London", 653148596, "MJames@hotmail.com"),
            new __WEBPACK_IMPORTED_MODULE_0__shared_user__["a" /* User */](3, "BJohan", "Boris Joan", "Yellow Street 51", 0, 0, "Moscow", 668524152, "BJohan@hotmail.com"),
            new __WEBPACK_IMPORTED_MODULE_0__shared_user__["a" /* User */](4, "DBirchy", "Doris Birchy", "Blue Street 5", 0, 0, "Paris", 669897452, "DBirchy@hotmail.com"),
            new __WEBPACK_IMPORTED_MODULE_0__shared_user__["a" /* User */](5, "PDechaum", "Pauline Dechaum", "Chocolate Street 5", 0, 0, "Paris", 977415263, "PDechaum@hotmail.com"),
            new __WEBPACK_IMPORTED_MODULE_0__shared_user__["a" /* User */](6, "GTomasi", "Gianna Tomasi", "Caesar Street 5", 0, 0, "Rome", 963254178, "GTomasi@hotmail.com")
        ];
        return { users: users };
    };
    return InMemoryDataService;
}());

//# sourceMappingURL=in-memory-data.service.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_of__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__users_localstorage__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsyncUniqueFieldValidator; });


var emailTimeout;
// FORM GROUP VALIDATORS
var AsyncUniqueFieldValidator = function (itemId, userobjectService, fieldname) {
    return function (control) {
        if (control.dirty) {
            control.setErrors({ CheckingDuplicatedItem: true });
            clearTimeout(emailTimeout);
            return new Promise(function (resolve) {
                emailTimeout = setTimeout(function () {
                    userobjectService.getUsers().subscribe(function (users) {
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__users_localstorage__["a" /* getLocalStorageUsers */])(users).subscribe(function (users) {
                            if (users.some(function (user) { return (user.userId != itemId && user[fieldname].toLowerCase() == control.value.toLowerCase()); })) {
                                resolve({ DuplicatedItem: true });
                            }
                            else {
                                resolve(null);
                            }
                        });
                    });
                }, 100);
            });
        }
        else {
            control.setErrors(null);
            return new Promise(null);
        }
    };
};
//# sourceMappingURL=async-unique-field.validator.js.map

/***/ })

},[217]);
//# sourceMappingURL=main.bundle.js.map