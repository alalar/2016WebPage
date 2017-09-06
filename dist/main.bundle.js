webpackJsonp([1,4],{

/***/ 100:
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

/***/ 157:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <h1 class=\"text-center\">CRUD with Angular 2</h1>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n            <user-form></user-form>\r\n        </div>\r\n        <div class=\"col-sm-8\">\r\n            <user-table></user-table>\r\n        </div>\r\n    <div>\r\n</div>\r\n"

/***/ }),

/***/ 158:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user==null\" class=\"alert alert-info \">Loading user info <span class=\"glyphicon glyphicon-refresh glyphicon-refresh-animate\"></span></div>\r\n<div *ngIf=\"user!=null\" class=\"panel panel-primary\">\r\n    <div class=\"panel-heading\">\r\n        <span *ngIf=\"user!=null && user.userId!=null\">Editing User {{user.userId}}</span>\r\n        <span *ngIf=\"user==null || user.userId==null\">Adding a new User</span>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <form [formGroup]=\"userForm\" (ngSubmit)=\"onSubmit()\" novalidate >\r\n            <input type=\"hidden\" formControlName=\"userId\">\r\n            <div class=\"form-group has-feedback\" [ngClass]=\"{'has-success': userForm.controls.username.valid,'has-error':!userForm.controls.username.valid}\">\r\n                <label class=\"control-label\" for=\"username\">User Name</label>\r\n                <div class=\"input-group\">\r\n                    <span class=\"input-group-addon\">\r\n                        <span class=\"glyphicon glyphicon glyphicon-user\" ></span>\r\n                    </span>\r\n                    \r\n                    <input class=\"form-control\" formControlName=\"username\" placeholder=\"enter a user name\">\r\n                    <span class=\"glyphicon form-control-feedback\" [ngClass]=\"{'glyphicon-ok': userForm.controls.username.valid,'glyphicon-remove':!userForm.controls.username.valid}\"></span>\r\n                </div>\r\n                <div *ngIf=\"userForm.controls.username.hasError('CheckingDuplicatedItem')\" class=\"alert alert-info \">Checking if username exists <span class=\"glyphicon glyphicon-refresh glyphicon-refresh-animate\"></span></div>\r\n                <!-- The hasError method can work with the built in validators but custom validators as well -->\r\n                <div *ngIf=\"userForm.controls.username.hasError('required')\" class=\"alert alert-danger \">You must include a username.</div>\r\n                <div *ngIf=\"userForm.controls.username.hasError('minlength')\" class=\"alert alert-danger \">Your username must be at least 5 characters long.</div>\r\n                <div *ngIf=\"userForm.controls.username.hasError('maxlength')\" class=\"alert alert-danger \">Your username cannot exceed 10 characters.</div>\r\n                <div *ngIf=\"userForm.controls.username.hasError('DuplicatedItem') && userForm.controls.username.value\" class=\"alert alert-danger \">username already exists</div>\r\n            </div>            \r\n           <div class=\"form-group has-feedback\" [ngClass]=\"{'has-success': userForm.controls.name.valid,'has-error':!userForm.controls.name.valid}\">\r\n                <label class=\"control-label\" for=\"name\">Full Name</label>\r\n                <div class=\"input-group\">\r\n                    <span class=\"input-group-addon\">\r\n                        <span class=\"glyphicon glyphicon glyphicon-user\" ></span>\r\n                    </span>\r\n                    \r\n                    <input class=\"form-control\" formControlName=\"name\" placeholder=\"enter full name\">\r\n                    <span class=\"glyphicon form-control-feedback\" [ngClass]=\"{'glyphicon-ok': userForm.controls.name.valid,'glyphicon-remove':!userForm.controls.name.valid}\"></span>\r\n                </div>\r\n                <!-- The hasError method can work with the built in validators but custom validators as well -->\r\n                <div *ngIf=\"userForm.controls.name.hasError('required')\" class=\"alert alert-danger \">You must include a full name.</div>\r\n                <div *ngIf=\"userForm.controls.name.hasError('minlength')\" class=\"alert alert-danger \">Your name must be at least 5 characters long.</div>\r\n                <div *ngIf=\"userForm.controls.name.hasError('maxlength')\" class=\"alert alert-danger \">Your name cannot exceed 10 characters.</div>\r\n            </div> \r\n             <div class=\"form-group has-feedback\" [ngClass]=\"{'has-success': userForm.controls.address.valid,'has-error':!userForm.controls.address.valid }\">\r\n                <label class=\"control-label\" for=\"address\">address</label>\r\n                <div class=\"input-group\">\r\n                    <span class=\"input-group-addon\">\r\n                        <span class=\"glyphicon glyphicon glyphicon-road\" ></span>\r\n                    </span>\r\n                    <input class=\"form-control\" formControlName=\"address\" placeholder=\"enter an address\">\r\n                    <span class=\"glyphicon form-control-feedback\" [ngClass]=\"{'glyphicon-ok': userForm.controls.address.valid,'glyphicon-remove':!userForm.controls.address.valid}\"></span>\r\n                </div>\r\n                <!-- The hasError method can work with the built in validators but custom validators as well -->\r\n                <div *ngIf=\"userForm.controls.address.hasError('required')\" class=\"alert alert-danger \">You must include an address.</div>\r\n            </div> \r\n            <div class=\"form-group has-feedback\" [ngClass]=\"{'has-success': userForm.controls.city.valid,'has-error':!userForm.controls.city.valid}\">\r\n                <label class=\"control-label\" for=\"city\">city</label>\r\n                <div class=\"input-group\">\r\n                    <span class=\"input-group-addon\">\r\n                        <span class=\"glyphicon glyphicon glyphicon-map-marker\" ></span>\r\n                    </span>\r\n                    <input class=\"form-control\" formControlName=\"city\" placeholder=\"enter a city\">\r\n                    <span class=\"glyphicon form-control-feedback\" [ngClass]=\"{'glyphicon-ok': userForm.controls.city.valid,'glyphicon-remove':!userForm.controls.city.valid}\"></span>\r\n                </div>\r\n                <!-- The hasError method can work with the built in validators but custom validators as well -->\r\n                <div *ngIf=\"userForm.controls.city.hasError('required')\" class=\"alert alert-danger \">You must include a city.</div>\r\n            </div>   \r\n            <div class=\"form-group has-feedback\" [ngClass]=\"{'has-success': userForm.controls.phone.valid,'has-error':!userForm.controls.phone.valid}\">\r\n                <label class=\"control-label\" for=\"phone\">phone</label>\r\n                <div class=\"input-group\">\r\n                    <span class=\"input-group-addon\">\r\n                        <span class=\"glyphicon glyphicon glyphicon-phone\" ></span>\r\n                    </span>\r\n                    <input class=\"form-control\" formControlName=\"phone\" placeholder=\"enter a phone number\">\r\n                    <span class=\"glyphicon form-control-feedback\" [ngClass]=\"{'glyphicon-ok': userForm.controls.phone.valid,'glyphicon-remove':!userForm.controls.phone.valid}\"></span>\r\n                </div>\r\n                <!-- The hasError method can work with the built in validators but custom validators as well -->\r\n                <div *ngIf=\"userForm.controls.phone.hasError('required')\" class=\"alert alert-danger \">You must include a phone number.</div>\r\n                <div *ngIf=\"userForm.controls.phone.hasError('pattern') && userForm.controls.phone.value\" class=\"alert alert-danger \">Phone number is made of 9 digits</div>\r\n            </div>                     \r\n            <div class=\"form-group has-feedback\" [ngClass]=\"{'has-success': userForm.controls.email.valid,'has-error':!userForm.controls.email.valid}\">\r\n                <label class=\"control-label\" for=\"email\">Email</label>\r\n                <div class=\"input-group\">\r\n                    <span class=\"input-group-addon\">\r\n                        @\r\n                    </span>\r\n                    <input class=\"form-control\" formControlName=\"email\" placeholder=\"enter an email\">\r\n                    <span class=\"glyphicon form-control-feedback\" [ngClass]=\"{'glyphicon-ok': userForm.controls.email.valid,'glyphicon-remove':!userForm.controls.email.valid}\"></span>\r\n                </div>\r\n                <div *ngIf=\"userForm.controls.email.hasError('CheckingDuplicatedItem')\" class=\"alert alert-info \">Checking if email exists <span class=\"glyphicon glyphicon-refresh glyphicon-refresh-animate\"></span></div>\r\n                <!-- The hasError method can work with the built in validators but custom validators as well -->\r\n                <div *ngIf=\"userForm.controls.email.hasError('required')\" class=\"alert alert-danger \">You must include a user email.</div>\r\n                <div *ngIf=\"userForm.controls.email.hasError('email') && userForm.controls.email.value\" class=\"alert alert-danger \">Your user email is not valid</div>\r\n                <div *ngIf=\"userForm.controls.email.hasError('DuplicatedItem') && userForm.controls.email.value\" class=\"alert alert-danger \">Email already exists</div>\r\n            </div> \r\n            <div class=\"form-group has-feedback\" [ngClass]=\"{'has-success': (userForm.controls.confirmPassword.value == userForm.controls.password.value) && userForm.controls.confirmPassword.value!=null?userForm.controls.confirmPassword.value.length>0:false,'has-error':(userForm.controls.confirmPassword.value != userForm.controls.password.value) || !userForm.controls.password.valid}\">\r\n                <label class=\"control-label\" for=\"password\">Password</label>\r\n                <div class=\"input-group\">\r\n                    <span class=\"input-group-addon\">\r\n                        <span class=\"glyphicon glyphicon glyphicon-lock\" ></span>\r\n                    </span>\r\n                    <input type=\"password\" class=\"form-control\" formControlName=\"password\" placeholder=\"enter a password\">\r\n                    <span class=\"glyphicon form-control-feedback\" [ngClass]=\"{'glyphicon-ok': (userForm.controls.confirmPassword.value == userForm.controls.password.value) && userForm.controls.confirmPassword.value!=null?userForm.controls.confirmPassword.value.length>0:false,'glyphicon-remove':(userForm.controls.confirmPassword.value != userForm.controls.password.value)}\"></span>\r\n                </div>\r\n                <!-- The hasError method can work with the built in validators but custom validators as well -->\r\n                <div *ngIf=\"userForm.controls.password.hasError('required')\" class=\"alert alert-danger \">You must include a password</div>\r\n                <div *ngIf=\"userForm.controls.password.hasError('pattern')\" class=\"alert alert-danger \">Password length must be at least 8 chars, 1 Uppercase letter, 1 Lowercase letter and 1 digit</div>\r\n            </div>    \r\n             <div class=\"form-group has-feedback\" [ngClass]=\"{'has-success': (userForm.controls.confirmPassword.value == userForm.controls.password.value) && userForm.controls.confirmPassword.value!=null?userForm.controls.confirmPassword.value.length>0:false,'has-error':(userForm.controls.confirmPassword.value != userForm.controls.password.value)}\">\r\n                <label class=\"control-label\" for=\"confirmPassword\">Confirm Password</label>\r\n                <div class=\"input-group\">\r\n                    <span class=\"input-group-addon\">\r\n                        <span class=\"glyphicon glyphicon glyphicon-lock\" ></span>\r\n                    </span>\r\n                    <input type=\"password\" class=\"form-control\" formControlName=\"confirmPassword\" placeholder=\"reenter the password\">\r\n                    <span class=\"glyphicon form-control-feedback\" [ngClass]=\"{'glyphicon-ok': (userForm.controls.confirmPassword.value == userForm.controls.password.value) && userForm.controls.confirmPassword.value!=null?userForm.controls.confirmPassword.value.length>0:false,'glyphicon-remove':(userForm.controls.confirmPassword.value != userForm.controls.password.value)}\"></span>\r\n                </div>\r\n                <!-- The hasError method can work with the built in validators but custom validators as well -->\r\n                <div *ngIf=\"userForm.controls.confirmPassword.hasError('MatchPassword')\" class=\"alert alert-danger \">Passwords must be identical</div>\r\n            </div> \r\n            <div *ngFor=\"let e of errors\" class=\"alert alert-danger \">\r\n                {{e}}\r\n            </div>                          \r\n            <button type=\"submit\"\r\n            [disabled]=\"!userForm.valid || userForm.pristine\" class=\"btn btn-success\">Save\r\n            <span *ngIf=\"submitting\" class=\"glyphicon glyphicon-refresh glyphicon-refresh-animate\"></span>    \r\n            </button> &nbsp;\r\n            <button type=\"reset\" (click)=\"revert()\"\r\n            [disabled]=\"userForm.pristine\" class=\"btn btn-danger\">Revert</button>\r\n            <button  *ngIf=\"user!=null && user.userId!=null\" type=\"button\" (click)=\"addNewUser();\"\r\n                class=\"pull-right btn btn-warning\">New <span class=\"glyphicon glyphicon glyphicon-user\" ></span></button>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 159:
/***/ (function(module, exports) {

module.exports = "\r\n<div  class=\"panel panel-primary\">    \r\n    <div class=\"panel-heading\">\r\n        <h3 class=\"panel-title text-center\">Users \r\n            <button class=\"btn btn-success btn-xs clickable filter pull-right\" data-toggle=\"tooltip\" title=\"Show Filter\" (click)=\"showFilterBox=!showFilterBox;\">\r\n                &nbsp;<span class=\"glyphicon glyphicon-filter\"></span>&nbsp;\r\n            </button>\r\n        </h3>\r\n    </div>\r\n    <div class=\"panel-body\" [hidden]=\"!showFilterBox\">\r\n        \r\n            <div class=\"form-group\" >\r\n                <div class=\"col-sm-11 col-xs-10\">\r\n                    <input type=\"text\" class=\"form-control\" #filterControl (keyup)=\"0\"   placeholder=\"Enter the text to search\"/>\r\n                </div>\r\n                <button type=\"button\" class=\"btn btn-primary col-sm-1 col-xs-1 text-center\"><span class=\"glyphicon glyphicon-search\"></span></button>\r\n            </div>\r\n        </div> \r\n        <div class=\"table-responsive\">         \r\n            <table class=\"table table-striped table-hover\">\r\n                <thead class=\"thead-inverse\">\r\n                    <th><button class=\"btn-block btn-link\" (click)=\"sortingByColumn('userId')\">ID\r\n                            <span class=\"glyphicon  pull-right \" \r\n                            [ngClass]=\"{'glyphicon-sort greyText': sortedByFieldName!='userId', 'glyphicon-sort-by-attributes': sortedByFieldName=='userId' && ascendingOrder, 'glyphicon-sort-by-attributes-alt': sortedByFieldName=='userId' && !ascendingOrder}\"></span>\r\n                        </button>\r\n                    </th>\r\n                    <th><button class=\"btn-block btn-link\" (click)=\"sortingByColumn('username')\">Name\r\n                            <span class=\"glyphicon  pull-right \" \r\n                            [ngClass]=\"{'glyphicon-sort greyText': sortedByFieldName!='username', 'glyphicon-sort-by-attributes': sortedByFieldName=='username' && ascendingOrder, 'glyphicon-sort-by-attributes-alt': sortedByFieldName=='username' && !ascendingOrder}\"></span>\r\n                        </button>\r\n                    </th>\r\n                    <th><button class=\"btn-block btn-link\" (click)=\"sortingByColumn('name')\">Full name\r\n                        <span class=\"glyphicon  pull-right \" \r\n                            [ngClass]=\"{'glyphicon-sort greyText': sortedByFieldName!='name', 'glyphicon-sort-by-attributes': sortedByFieldName=='name' && ascendingOrder, 'glyphicon-sort-by-attributes-alt': sortedByFieldName=='name' && !ascendingOrder}\"></span>\r\n                        </button>\r\n                    </th>\r\n                    <th><button class=\"btn-block btn-link\" (click)=\"sortingByColumn('address')\">Address\r\n                        <span class=\"glyphicon  pull-right \" \r\n                            [ngClass]=\"{'glyphicon-sort greyText': sortedByFieldName!='address', 'glyphicon-sort-by-attributes': sortedByFieldName=='address' && ascendingOrder, 'glyphicon-sort-by-attributes-alt': sortedByFieldName=='address' && !ascendingOrder}\"></span>\r\n                        </button>\r\n                    </th>\r\n                    <th><button class=\"btn-block btn-link\" (click)=\"sortingByColumn('city')\">City\r\n                        <span class=\"glyphicon  pull-right \" \r\n                            [ngClass]=\"{'glyphicon-sort greyText': sortedByFieldName!='city', 'glyphicon-sort-by-attributes': sortedByFieldName=='city' && ascendingOrder, 'glyphicon-sort-by-attributes-alt': sortedByFieldName=='city' && !ascendingOrder}\"></span>\r\n                        </button>\r\n                    </th>\r\n                    <th><button class=\"btn-block btn-link\" (click)=\"sortingByColumn('phone')\">Phone\r\n                        <span class=\"glyphicon  pull-right \" \r\n                            [ngClass]=\"{'glyphicon-sort greyText': sortedByFieldName!='phone', 'glyphicon-sort-by-attributes': sortedByFieldName=='phone' && ascendingOrder, 'glyphicon-sort-by-attributes-alt': sortedByFieldName=='phone' && !ascendingOrder}\"></span>\r\n                        </button>\r\n                    </th>\r\n                    <th><button class=\"btn-block btn-link\" (click)=\"sortingByColumn('email')\">Email\r\n                        <span class=\"glyphicon  pull-right \" \r\n                            [ngClass]=\"{'glyphicon-sort greyText': sortedByFieldName!='email', 'glyphicon-sort-by-attributes': sortedByFieldName=='email' && ascendingOrder, 'glyphicon-sort-by-attributes-alt': sortedByFieldName=='email' && !ascendingOrder}\"></span>\r\n                        </button>\r\n                    </th>\r\n                    <th></th>\r\n                </thead>\r\n                <tbody *ngIf=\"users==null\">\r\n                    <tr>\r\n                        <td colspan=8 class=\"alert alert-info text-center\">\r\n                            Loading users info <span class=\"glyphicon glyphicon-refresh glyphicon-refresh-animate\"></span>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n                <tbody *ngIf=\"users!=null || true\" >\r\n                    <tr *ngFor='let user of users | async | filterby : filterControl.value | sortby : sortedByFieldName : ascendingOrder'>\r\n                        <td>{{user.userId}}</td>\r\n                        <td>{{user.username}}</td>\r\n                        <td>{{user.name}}</td>\r\n                        <td>{{user.address}}</td>\r\n                        <td>{{user.city}}</td>\r\n                        <td>{{user.phone}}</td>\r\n                        <td>{{user.email}}</td>\r\n                        <td>\r\n                            <button type=\"button\" class=\"btn btn-link\" title=\"edit\" (click)=\"userFormTableService.editingItem(user.userId)\" ><span role=\"button\" aria-hidden=\"true\" class=\"glyphicon glyphicon glyphicon-pencil\" ></span></button>\r\n                            <button type=\"button\" class=\"btn btn-link\" title=\"remove\" (click)=\"showRemoveModalDlg(user)\">  <span class=\"text-danger glyphicon glyphicon glyphicon-remove\" ></span></button>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n            \r\n        </div>\r\n</div>\r\n     <app-modal>\r\n    </app-modal>\r\n    \r\n"

/***/ }),

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(84);


/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of__ = __webpack_require__(51);
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

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(20);
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

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__(164);
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

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(20);
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


//import {Observable} from 'rxjs/Observable';
var ModalComponent = (function () {
    function ModalComponent() {
        this.clickStream = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        //private clickStream = new Observable<boolean>();
        this.blnResult = this.clickStream.asObservable();
        //@Output() observable = this.clickStream;
        this.visible = false;
        this.visibleAnimate = true;
    }
    ModalComponent.prototype.show = function (strHeader, strBody) {
        var _this = this;
        this.modalHeader = strHeader;
        this.modalBody = strBody;
        this.visible = true;
        setTimeout(function () { return _this.visibleAnimate = true; }, 100);
    };
    ModalComponent.prototype.hide = function () {
        var _this = this;
        this.visibleAnimate = false;
        setTimeout(function () { return _this.visible = false; }, 300);
    };
    ModalComponent.prototype.doit = function () {
        //this.clickStream = new Observable((observer:any)  => observer.next(true));
        this.clickStream.next(true);
        this.hide();
    };
    ModalComponent.prototype.nodoit = function () {
        this.clickStream.next(false);
        //this.clickStream = new Observable((observer:any)  => observer.next(false));
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
        template: "\n  <div (click)=\"onContainerClicked($event)\" class=\"modal fade\" tabindex=\"-1\" [ngClass]=\"{'in': visibleAnimate}\"\n       [ngStyle]=\"{'display': visible ? 'block' : 'none', 'opacity': visibleAnimate ? 1 : 0}\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\" >\n        <div class=\"modal-header\" >\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" (click)=\"hide()\">&times;</button>\n          <h4 >{{modalHeader}}</h4>\n        </div>\n        <div class=\"modal-body\" [innerHTML]=modalBody>\n        </div>\n        <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-default\" (click)=\"nodoit()\">No</button>\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"doit()\">Yes</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  "
    })
], ModalComponent);

//# sourceMappingURL=modal.component.js.map

/***/ }),

/***/ 57:
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

/***/ 83:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 83;


/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(100);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 89:
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
        template: __webpack_require__(157)
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_in_memory_web_api__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__users_in_memory_data_service__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__not_found_component__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__users_user_main_component__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__users_user_form_component__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__users_users_table_component__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__users_user_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__users_user_form_table_communication_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_filterby_pipe__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_sortby_pipe__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_modal_component__ = __webpack_require__(56);
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

/***/ 91:
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

/***/ 92:
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

/***/ 93:
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

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_user__ = __webpack_require__(57);
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

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_of__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__users_localstorage__ = __webpack_require__(32);
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

/***/ }),

/***/ 96:
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

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_user__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_password_validator__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_async_unique_field_validator__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_users_localstorage__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_form_table_communication_service__ = __webpack_require__(33);
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
        template: __webpack_require__(158)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_8__user_form_table_communication_service__["a" /* UserFormTableService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__user_form_table_communication_service__["a" /* UserFormTableService */]) === "function" && _c || Object])
], UserFormComponent);

var _a, _b, _c;
//# sourceMappingURL=user-form.component.js.map

/***/ }),

/***/ 98:
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

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_users_localstorage__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_form_table_communication_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_modal_component__ = __webpack_require__(56);
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
        this.showFilterBox = false;
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
        var infoTemplate = "\n            Do you want to remove user <strong> " + userToRemove.username + " </strong> ?\n             <dl class=\"dl-horizontal\">\n                    <dt><span class=\"glyphicon glyphicon glyphicon-user\" ></span></dt>\n                    <dd>" + userToRemove.name + "</dd>\n                    <dt><span class=\"glyphicon glyphicon glyphicon-map-marker\" ></span></dt>\n                    <dd>" + userToRemove.address + " , " + userToRemove.city + "</dd>\n                    <dt><span class=\"glyphicon glyphicon glyphicon-phone\" ></span></dt>\n                    <dd>" + userToRemove.phone + "</dd>\n                    <dt><span>@</span></dt>\n                    <dd>" + userToRemove.email + "</dd>\n            </dl>";
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
        template: __webpack_require__(159)
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__user_form_table_communication_service__["a" /* UserFormTableService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__user_form_table_communication_service__["a" /* UserFormTableService */]) === "function" && _c || Object])
], UsersTableComponent);

var _a, _b, _c;
//# sourceMappingURL=users-table.component.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.bundle.js.map