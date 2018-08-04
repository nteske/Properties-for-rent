(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/admin-properties/admin-properties.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/admin/admin-properties/admin-properties.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    table-layout:fixed;\r\n}\r\n\r\ntable td{\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}\r\n"

/***/ }),

/***/ "./src/app/admin/admin-properties/admin-properties.component.html":
/*!************************************************************************!*\
  !*** ./src/app/admin/admin-properties/admin-properties.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table\" style=\"margin-top:20px; table-layout:fixed; max-width:100%\">\n  <thead class=\"thead-dark\">\n    <tr>\n      <th scope=\"col\">#</th>\n      <th scope=\"col\">Title</th>\n      <th scope=\"col\">Deposit</th>\n      <th scope=\"col\">Area</th>\n      <th scope=\"col\">View</th>\n      <th scope=\"col\">Delete</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let prop of properties; index as i;\">\n      <th scope=\"row\">{{i+1}}</th>\n      <td>{{prop.title}}</td>\n      <td>{{prop.deposit}}</td>\n      <td>{{prop.area}}</td>\n      <td><button type=\"button\" (click)=\"showProperty(prop)\" class=\"btn btn-success\">View</button></td>\n      <td><button type=\"button\" (click)=\"deleteProp(prop)\" class=\"btn btn-danger\">Delete</button></td>\n    </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ "./src/app/admin/admin-properties/admin-properties.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/admin/admin-properties/admin-properties.component.ts ***!
  \**********************************************************************/
/*! exports provided: AdminPropertiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPropertiesComponent", function() { return AdminPropertiesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/admin.service */ "./src/app/services/admin.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//putanje

//servisi

var AdminPropertiesComponent = /** @class */ (function () {
    function AdminPropertiesComponent(adSr, router) {
        this.adSr = adSr;
        this.router = router;
    }
    AdminPropertiesComponent.prototype.ngOnInit = function () {
        var _this = this;
        //ucitavmao niz apartmana
        this.adSr.getPropeties().subscribe(function (data) {
            _this.properties = data.obj;
        });
    };
    //putanja prema apartmanu
    AdminPropertiesComponent.prototype.showProperty = function (prop) { this.router.navigate(['/properties/view', prop._id]); };
    //brisanje apartmana
    AdminPropertiesComponent.prototype.deleteProp = function (prop) {
        //brisanje sa sarvera
        this.adSr.deleteProp(prop).subscribe();
        //brisanje iz niza za prikaz
        var index = this.properties.indexOf(prop);
        if (index > -1) {
            this.properties.splice(index, 1);
        }
    };
    AdminPropertiesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-properties',
            template: __webpack_require__(/*! ./admin-properties.component.html */ "./src/app/admin/admin-properties/admin-properties.component.html"),
            styles: [__webpack_require__(/*! ./admin-properties.component.css */ "./src/app/admin/admin-properties/admin-properties.component.css")]
        }),
        __metadata("design:paramtypes", [_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AdminPropertiesComponent);
    return AdminPropertiesComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/admin/admin-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _panel_panel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./panel/panel.component */ "./src/app/admin/panel/panel.component.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//moduli


//komponente

//servisi

var routes = [
    { path: 'panel', component: _panel_panel_component__WEBPACK_IMPORTED_MODULE_2__["PanelComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]] }
];
var AdminRoutingModule = /** @class */ (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());



/***/ }),

/***/ "./src/app/admin/admin-users/admin-users.component.css":
/*!*************************************************************!*\
  !*** ./src/app/admin/admin-users/admin-users.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    table-layout:fixed;\r\n}\r\n\r\ntable td{\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}\r\n"

/***/ }),

/***/ "./src/app/admin/admin-users/admin-users.component.html":
/*!**************************************************************!*\
  !*** ./src/app/admin/admin-users/admin-users.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table\" style=\"margin-top:20px;\">\n  <thead class=\"thead-dark\">\n    <tr>\n      <th scope=\"col\">#</th>\n      <th scope=\"col\">First</th>\n      <th scope=\"col\">Last</th>\n      <th scope=\"col\">Username</th>\n      <th scope=\"col\" *ngIf=\"status==2\">Head</th>\n      <th scope=\"col\" *ngIf=\"status==2\">Admin</th>\n      <th scope=\"col\">View</th>\n      <th scope=\"col\">Ban</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let user of users; index as i;\">\n      <th scope=\"row\">{{i+1}}</th>\n      <td>{{user.firstName}}</td>\n      <td>{{user.lastName}}</td>\n      <td>{{user.userName}}</td>\n      <td *ngIf=\"status==2\"><button type=\"button\" (click)=\"setAdmin(user,2)\" [class.btn-success]=\"user.admin==2\" [class.btn-danger]=\"user.admin!=2\" class=\"btn btn-danger\">Head</button></td>\n      <td *ngIf=\"status==2\"><button type=\"button\" (click)=\"setAdmin(user,1)\" [class.btn-success]=\"user.admin==1\" [class.btn-danger]=\"user.admin!=1\" class=\"btn\">Admin</button></td>\n      <td><button type=\"button\" (click)=\"showProfile(user.userName)\" class=\"btn btn-success\">View</button></td>\n      <td *ngIf=\"user.banned==true\"><button type=\"button\" (click)=\"banUser(user)\" class=\"btn btn-success\">Unban</button></td>\n      <td *ngIf=\"user.banned==false\"><button type=\"button\" (click)=\"banUser(user)\" class=\"btn btn-danger\">Ban</button></td>\n    </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ "./src/app/admin/admin-users/admin-users.component.ts":
/*!************************************************************!*\
  !*** ./src/app/admin/admin-users/admin-users.component.ts ***!
  \************************************************************/
/*! exports provided: AdminUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminUsersComponent", function() { return AdminUsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/admin.service */ "./src/app/services/admin.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//putanje

//servisi

var AdminUsersComponent = /** @class */ (function () {
    function AdminUsersComponent(adSr, router) {
        this.adSr = adSr;
        this.router = router;
    }
    AdminUsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        //uzimamo niz korisnika sa servera i status
        this.adSr.getUsers().subscribe(function (data) {
            _this.users = data.obj;
            _this.status = data.status;
        });
    };
    //banovanje korisnika
    AdminUsersComponent.prototype.banUser = function (user) {
        //promena statusa bana
        if (user.banned == true)
            user.banned = false;
        else
            user.banned = true;
        this.adSr.setBan(user).subscribe();
    };
    //dodela admina
    AdminUsersComponent.prototype.setAdmin = function (user, num) {
        //ako vec ima admina da mu se oduzme
        if (user.admin == num)
            user.admin = 0;
        else
            user.admin = num;
        this.adSr.setData(user).subscribe();
    };
    //putanja prema korisnickom profilu
    AdminUsersComponent.prototype.showProfile = function (username) { this.router.navigate(['/users/profile', username]); };
    AdminUsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-users',
            template: __webpack_require__(/*! ./admin-users.component.html */ "./src/app/admin/admin-users/admin-users.component.html"),
            styles: [__webpack_require__(/*! ./admin-users.component.css */ "./src/app/admin/admin-users/admin-users.component.css")]
        }),
        __metadata("design:paramtypes", [_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AdminUsersComponent);
    return AdminUsersComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-routing.module */ "./src/app/admin/admin-routing.module.ts");
/* harmony import */ var _panel_panel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./panel/panel.component */ "./src/app/admin/panel/panel.component.ts");
/* harmony import */ var _admin_users_admin_users_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-users/admin-users.component */ "./src/app/admin/admin-users/admin-users.component.ts");
/* harmony import */ var _admin_properties_admin_properties_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin-properties/admin-properties.component */ "./src/app/admin/admin-properties/admin-properties.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//modeli



//komponenete



var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _admin_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdminRoutingModule"]
            ],
            declarations: [_panel_panel_component__WEBPACK_IMPORTED_MODULE_3__["PanelComponent"], _admin_users_admin_users_component__WEBPACK_IMPORTED_MODULE_4__["AdminUsersComponent"], _admin_properties_admin_properties_component__WEBPACK_IMPORTED_MODULE_5__["AdminPropertiesComponent"]]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/admin/panel/panel.component.css":
/*!*************************************************!*\
  !*** ./src/app/admin/panel/panel.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".move{\r\n    margin-left:10px;\r\n    margin-right:10px;\r\n}\r\n.container{\r\n    margin-top:20px;\r\n    margin-left:auto;\r\n    margin-right: auto;\r\n    max-width: 900px;\r\n}"

/***/ }),

/***/ "./src/app/admin/panel/panel.component.html":
/*!**************************************************!*\
  !*** ./src/app/admin/panel/panel.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"text-align:center;\">\n<h2 style=\"margin-bottom:10px;\">Welcome to admin panel!</h2>\n  <button class=\"btn btn-outline-primary btn-lg move\" (click)=\"setChoise(1)\"><i class=\"fa fa-user\"></i>  Users</button>\n<button class=\"btn btn-outline-secondary btn-lg move \" (click)=\"setChoise(2)\"><i class=\"fa fa-home\"></i>  Properties</button>\n<app-admin-users *ngIf=\"chouse==1\"></app-admin-users>\n<app-admin-properties *ngIf=\"chouse==2\"></app-admin-properties>\n</div>"

/***/ }),

/***/ "./src/app/admin/panel/panel.component.ts":
/*!************************************************!*\
  !*** ./src/app/admin/panel/panel.component.ts ***!
  \************************************************/
/*! exports provided: PanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelComponent", function() { return PanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PanelComponent = /** @class */ (function () {
    function PanelComponent() {
        this.chouse = 1; //pocinje od korisnika
    }
    PanelComponent.prototype.ngOnInit = function () {
    };
    //kada odabere izmedju korisnika i apartmana
    PanelComponent.prototype.setChoise = function (num) {
        this.chouse = num;
    };
    PanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-panel',
            template: __webpack_require__(/*! ./panel.component.html */ "./src/app/admin/panel/panel.component.html"),
            styles: [__webpack_require__(/*! ./panel.component.css */ "./src/app/admin/panel/panel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PanelComponent);
    return PanelComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_pages_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/pages.module */ "./src/app/pages/pages.module.ts");
/* harmony import */ var _users_users_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users/users.module */ "./src/app/users/users.module.ts");
/* harmony import */ var _properties_properties_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./properties/properties.module */ "./src/app/properties/properties.module.ts");
/* harmony import */ var _admin_admin_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin/admin.module */ "./src/app/admin/admin.module.ts");
/* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/not-found/not-found.component */ "./src/app/pages/not-found/not-found.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', loadChildren: function () { return _pages_pages_module__WEBPACK_IMPORTED_MODULE_2__["PagesModule"]; } },
    { path: 'admin', loadChildren: function () { return _admin_admin_module__WEBPACK_IMPORTED_MODULE_5__["AdminModule"]; } },
    { path: 'users', loadChildren: function () { return _users_users_module__WEBPACK_IMPORTED_MODULE_3__["UsersModule"]; } },
    { path: 'properties', loadChildren: function () { return _properties_properties_module__WEBPACK_IMPORTED_MODULE_4__["PropertiesModule"]; } },
    { path: 'not-found', component: _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundComponent"] },
    { path: '**', redirectTo: 'not-found' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: "\n  <app-header></app-header>\n  <router-outlet></router-outlet>\n  <app-footer class=\"mt-auto\"></app-footer>\n  <app-error></app-error>\n  ",
            styles: ['']
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _pages_pages_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/pages.module */ "./src/app/pages/pages.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/header/header.component */ "./src/app/pages/header/header.component.ts");
/* harmony import */ var _pages_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/footer/footer.component */ "./src/app/pages/footer/footer.component.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _pages_error_error_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/error/error.component */ "./src/app/pages/error/error.component.ts");
/* harmony import */ var _services_error_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/error.service */ "./src/app/services/error.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//moduli










//komponente





//servisi

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _pages_header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
                _pages_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
                _pages_error_error_component__WEBPACK_IMPORTED_MODULE_14__["ErrorComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"].forRoot(),
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _pages_pages_module__WEBPACK_IMPORTED_MODULE_9__["PagesModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_6__["AngularFontAwesomeModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"].forRoot()
            ],
            providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_13__["UserService"], _services_error_service__WEBPACK_IMPORTED_MODULE_15__["ErrorService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/model/error.model.ts":
/*!**************************************!*\
  !*** ./src/app/model/error.model.ts ***!
  \**************************************/
/*! exports provided: Error */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error", function() { return Error; });
var Error = /** @class */ (function () {
    function Error(title, message) {
        this.title = title;
        this.message = message;
    }
    return Error;
}());



/***/ }),

/***/ "./src/app/model/property.model.ts":
/*!*****************************************!*\
  !*** ./src/app/model/property.model.ts ***!
  \*****************************************/
/*! exports provided: Property */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Property", function() { return Property; });
var Property = /** @class */ (function () {
    function Property(
    //basic info
    title, deposit, rooms, area, street, 
    //icons
    internet, cableTV, bBed, sBed, conditioner, fridge, stove, washer, bathub, microwave, landline, fireplace, 
    //owner
    user, 
    //images
    image1, image2, image3, image4, 
    //date 
    date) {
        this.title = title;
        this.deposit = deposit;
        this.rooms = rooms;
        this.area = area;
        this.street = street;
        this.internet = internet;
        this.cableTV = cableTV;
        this.bBed = bBed;
        this.sBed = sBed;
        this.conditioner = conditioner;
        this.fridge = fridge;
        this.stove = stove;
        this.washer = washer;
        this.bathub = bathub;
        this.microwave = microwave;
        this.landline = landline;
        this.fireplace = fireplace;
        this.user = user;
        this.image1 = image1;
        this.image2 = image2;
        this.image3 = image3;
        this.image4 = image4;
        this.date = date;
    }
    return Property;
}());



/***/ }),

/***/ "./src/app/model/user.model.ts":
/*!*************************************!*\
  !*** ./src/app/model/user.model.ts ***!
  \*************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(email, password, firstName, lastName, userName, phone, street, street2, avatar, admin, banned) {
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.userName = userName;
        this.phone = phone;
        this.street = street;
        this.street2 = street2;
        this.avatar = avatar;
        this.admin = admin;
        this.banned = banned;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/pages/error/error.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/error/error.component.ts ***!
  \************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_error_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/error.service */ "./src/app/services/error.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//putanje

//servisi


var ErrorComponent = /** @class */ (function () {
    function ErrorComponent(router, errorService, toastr) {
        this.router = router;
        this.errorService = errorService;
        this.toastr = toastr;
    }
    ErrorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.errorService.errorOccurred
            .subscribe(function (error) {
            /************Rukovanje pristiglim greskama************/
            var msg = error.message;
            var status = parseInt(error.title);
            if (status == 0)
                msg = "Failed to connect to server";
            if (status == 401) {
                _this.router.navigate(['/users/login']);
                msg = "Please login first!";
            }
            if (status == 403 || status == 500)
                _this.router.navigate(['/']);
            if (status == 422 && msg == "Property not found")
                _this.router.navigate(['/not-found']);
            _this.toastr.error(msg, "Error", {
                closeButton: true,
                positionClass: 'toast-bottom-right'
            });
        });
    };
    ErrorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error',
            template: "",
            styles: []
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_error_service__WEBPACK_IMPORTED_MODULE_2__["ErrorService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/pages/footer/footer.component.css":
/*!***************************************************!*\
  !*** ./src/app/pages/footer/footer.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nfooter{\r\n    background-color: #191a1c;\r\n    bottom: 0%;\r\n     text-align: center;\r\n     color: #CCC;\r\n }\r\n \r\n footer p {\r\n     padding: 10.5px;\r\n     margin: 0px;\r\n     line-height: 100%;\r\n }"

/***/ }),

/***/ "./src/app/pages/footer/footer.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/footer/footer.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n    <p>&copy; All rights reserved for Nemanja Tesic 2018</p>\n  </footer>"

/***/ }),

/***/ "./src/app/pages/footer/footer.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/footer/footer.component.ts ***!
  \**************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/pages/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/pages/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/pages/header/header.component.css":
/*!***************************************************!*\
  !*** ./src/app/pages/header/header.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#avatarnav{\r\n    width:30px;\r\n    height:30px;\r\n    margin-right: 5px;\r\n}\r\n\r\n@media only screen and (max-width: 992px) {\r\n    avatarnav {\r\n        margin-top: 0%;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 992px) {\r\n    avatarnav {\r\n        margin-top: -3%;\r\n    }\r\n}\r\n\r\n.edit{\r\n    color:black !important;\r\n}\r\n\r\n.dropdown-toggle::after {\r\n    display:none;\r\n}\r\n\r\n.navbar-nav > li.dropdown:hover > a, \r\n .navbar-nav > li.dropdown:hover > a:hover,\r\n .navbar-nav > li.dropdown:hover > a:focus {\r\n    color: white;\r\n}\r\n\r\nli.dropdown:hover > .dropdown-menu {\r\n    display: block;\r\n}"

/***/ }),

/***/ "./src/app/pages/header/header.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/header/header.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" [routerLink]=\"['/']\" style=\"color:white;\">Apartments</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" (click)=\"isCollapsed = !isCollapsed\" [attr.aria-expanded]=\"!isCollapsed\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\" [ngbCollapse]=\"isCollapsed\">\n\n   <ul class=\"nav navbar-nav navbar-right ml-auto\">\n          <div *ngIf=\"!isLoggedIn();then outProfiled else inProfiled\"></div> \n          <ng-template #outProfiled>\n              <li class=\"nav-item\" role=\"presentation\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">\n          <a class=\"nav-link\" [routerLink]=\"['/users/login']\">Login</a>\n        </li>\n        <li class=\"nav-item\" role=\"presentation\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">\n            <a class=\"nav-link\" [routerLink]=\"['/users/register']\">Register</a>\n          </li>\n        </ng-template>\n        <ng-template #inProfiled>\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" style=\"padding:0px;\">\n          <img [src]='url' id=\"avatarnav\" class=\"rounded-circle\" alt=\"Avatar\">\n          {{users.name}}\n        </a>\n        <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdown\" style=\"padding:10px; margin-top:-3px;\">\n          <div class=\"dropdown-item edit\" style=\"background-color:#fefbf7;\">{{users.fullname}}</div>\n          <div class=\"dropdown-item edit\" style=\"background-color:#fefbf7;\">{{users.email}}</div>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" *ngIf=\"users.admin!=0\" [routerLink]=\"['/admin/panel']\">Admin panel</a>\n          <a class=\"dropdown-item\" style=\"cursor: pointer;\" (click)=\"goToProfile()\">Profile</a>\n          <a class=\"dropdown-item\" [routerLink]=\"['/users/property']\">Apartments</a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" style=\"cursor: pointer;\" (click)=\"logOut()\">Log out</a>\n        </div>\n      </li>\n    </ng-template>\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/pages/header/header.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/header/header.component.ts ***!
  \**************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//putanje

//servisi

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router, userSer) {
        this.router = router;
        this.userSer = userSer;
        this.isCollapsed = false; //da li je navbar spusten
        this.wait = false; //cekaj za poruku
        this.users = { name: '', fullname: '', email: '', username: '', admin: 0 };
        this.url = ''; //url avatara
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        //ako primi poruku za ponovo ucitavanje
        this.userSer.currentMessage.subscribe(function (message) {
            //kada primi poruku
            _this.message = message;
            //aktivira zastavicu
            if (_this.message == 1) {
                _this.message = 0;
                _this.wait = false;
            }
        });
    };
    HeaderComponent.prototype.isLoggedIn = function () {
        var _this = this;
        //ako je prijavljen
        if (this.userSer.isLoggedIn()) {
            //ako je zastavica podesena na ponovo ucitavanje
            if (this.wait == false) {
                this.wait = true; //zaustavi ucitavanje
                //ucitaj korisnika
                this.userSer.getSettings().subscribe(function (data) {
                    _this.users.name = data.user.name;
                    _this.users.fullname = data.user.name + ' ' + data.user.last;
                    _this.users.email = data.user.email;
                    _this.users.username = data.user.userName;
                    _this.url = _this.userSer.getAvatarURL(data.user.avatar);
                    _this.users.admin = data.user.admin;
                });
            }
            //vrati da je prijavljen
            return true;
        }
        else
            return false;
    };
    //ocisti navbar od podataka korisnika
    HeaderComponent.prototype.clearDataOfUser = function () {
        this.users.name = '';
        this.users.fullname = '';
        this.users.email = '';
        this.users.username = '';
        this.url = this.userSer.getAvatarURL('');
    };
    //kada odabere dugme za odjavljivanje
    HeaderComponent.prototype.logOut = function () {
        this.userSer.logout();
        //saljemo ga na rutu za prijavljivanje
        this.router.navigate(['/users/login']);
        this.wait = false;
        this.clearDataOfUser();
    };
    //ruta za prikaz svog profila
    HeaderComponent.prototype.goToProfile = function () { this.router.navigate(['/users/profile/', this.users.username]); };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/pages/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/pages/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/pages/homepage/homepage.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/homepage/homepage.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media only screen and (max-width: 924px) {\r\n    .container {\r\n        text-align:center;\r\n    }\r\n}\r\n@media only screen and (min-width: 924px) {\r\n    .container {\r\n        text-align:left;\r\n    }\r\n}\r\n.product-device {\r\n  position: absolute;\r\n  right: 0%;\r\n  bottom: 0%;\r\n  width: 500px;\r\n  height: 500px;\r\n  border-radius: 21px;\r\n}\r\n.money{\r\n    position: absolute;\r\n    right: 2%;\r\n    top: 2%;\r\n    font-size: 105%;\r\n}\r\n.boja{\r\n    color:black;\r\n}\r\n.boja2{\r\n    color:#007bff;\r\n}\r\n.inpRound{\r\n    width:280px;\r\n    margin: 0 auto 5px;\r\n    padding-left:17px;\r\n    border-radius: 21px;\r\n}\r\n.product-device::before {\r\n  position: absolute;\r\n  top: 10%;\r\n  right: 10px;\r\n  bottom: 10%;\r\n  left: 10px;\r\n  border-radius: 5px;\r\n}\r\n.card:hover{\r\n    cursor:pointer;\r\n}\r\n"

/***/ }),

/***/ "./src/app/pages/homepage/homepage.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/homepage/homepage.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"position-relative overflow-hidden p-3 p-md-5 text-center\" style=\"background-color:#2d3236; color:white;\">\n  <img class=\"product-device box-shadow d-none d-md-block\" src=\"../../../assets/images/background.png\">\n  <div class=\"col-md-5 p-lg-5 mx-auto my-5\">\n    <h1 class=\"display-4 font-weight-normal\">Rent Apartment</h1>\n    <p class=\"lead font-weight-normal\">Looking for an apartment or house for rent? We've got plenty of places to call home.</p>\n    <input type=\"text\" (change)=\"goSearch($event)\" class=\"form-control inpRound\"  placeholder=\"search\">\n\n  </div>\n</div>\n<div class=\"container\" style=\"margin-top:20px; min-height:800px; margin-bottom:10px; max-width:1000px;\"> \n  <div class=\"form-group ml-auto\" style=\"width:180px;\">\n    <select class=\"form-control\" (change)=\"sorting($event)\" id=\"sel1\">\n      <option>Date - newest</option>\n      <option>Date - oldest</option>\n      <option>Price - low to high</option>\n      <option>Price - high to low</option>\n    </select>\n  </div>\n\n<div class=\"card\" *ngFor=\"let prop of toShow\" (click)=\"goForProp(prop)\" style=\"width: 18rem; margin:0 5px 5px; display:inline-block;\">\n    <img class=\"card-img-top\" [src]=\"getImage(prop)\" style=\"width:100%; height:200px;\" alt=\"Card image cap\">\n    <span class=\"badge badge-success money\">{{prop.deposit}}€</span>\n    <div class=\"card-body\" style=\"padding-bottom:5px; padding-top:10px;\"> \n      <h5 class=\"card-title\"  style=\"text-align:center;\">{{prop.title}}</h5>\n      <p class=\"card-text\" style=\"text-align:right;\">{{prop.date|date:'d.M.yyyy'}}</p>\n    </div>\n  </div>\n\n\n</div>\n\n      <ul *ngIf=\"isThereAList()\" class=\"pagination justify-content-center\">\n          <li class=\"page-item\">\n            <a class=\"page-link\" style=\"color:#007bff;\"(click)=\"OneLeft()\" aria-label=\"Previous\">\n              <span aria-hidden=\"true\">&laquo;</span>\n              <span class=\"sr-only\">Previous</span>\n            </a>\n          </li>\n          <li class=\"page-item\" *ngFor=\"let num of number\"\n          [class.boja]=\"isActive(num)\" [class.boja2]=\"!isActive(num)\" ><a class=\"page-link\" (click)=\"sliceon(num)\" \n           >{{num}}</a></li>\n          <li class=\"page-item\">\n            <a class=\"page-link\" style=\"color:#007bff;\"  (click)=\"OneRight()\" aria-label=\"Next\">\n              <span aria-hidden=\"true\">&raquo;</span>\n              <span class=\"sr-only\">Next</span>\n            </a>\n          </li>\n        </ul>\n"

/***/ }),

/***/ "./src/app/pages/homepage/homepage.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/homepage/homepage.component.ts ***!
  \******************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_property_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/property.service */ "./src/app/services/property.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//putanje

//servisi

var HomepageComponent = /** @class */ (function () {
    function HomepageComponent(propSer, router) {
        this.propSer = propSer;
        this.router = router;
        this.number = []; //broj podskupova
        this.onNum = 0; //na kom je broju
        this.sort = 1; //koji je sort
    }
    //pretraga apartmana
    HomepageComponent.prototype.goSearch = function (data) {
        var _this = this;
        this.properties.length = 0;
        //uzimamo sve apartmane s slicnim naslovom
        this.propSer.getAllProperties({ params: { title: data.target.value.toString() } }).subscribe(function (data) {
            //upisujemo ih u niz
            _this.properties = data.obj;
            //sortiramo
            _this.sortList();
            _this.createList();
        });
    };
    //delimo skup na sledecih devet
    HomepageComponent.prototype.sliceon = function (num) {
        this.onNum = num;
        var prop = this.properties;
        this.toShow = prop.slice(9 * (num - 1), (9 * num));
    };
    //da li ima dovoljo apartmana za podelu na skupove
    HomepageComponent.prototype.isThereAList = function () { return this.number.length != 0; };
    //promena boje za broj skupa
    HomepageComponent.prototype.isActive = function (num) { return this.onNum == num; };
    HomepageComponent.prototype.OneLeft = function () { if (this.onNum == 1)
        return;
    else
        this.sliceon(this.onNum - 1); };
    HomepageComponent.prototype.OneRight = function () { if (this.onNum == this.biggest)
        return;
    else
        this.sliceon(this.onNum + 1); };
    HomepageComponent.prototype.createList = function () {
        //delimo listu na po 9 apartmana za prikaz
        if (this.properties.length > 9) {
            var prop = this.properties;
            this.toShow = prop.slice(0, 9);
            this.biggest = Math.ceil(this.properties.length / 9);
            this.onNum = 1;
            this.number.length = 0;
            for (var i = 1; i <= this.biggest; i++)
                this.number.push(i);
        }
        else {
            this.onNum = 0;
            this.toShow = this.properties;
            this.number.length = 0;
        }
    };
    HomepageComponent.prototype.ngOnInit = function () {
        var _this = this;
        //ucitavamo listu apartmana
        this.propSer.getAllProperties({ params: {} }).subscribe(function (data) {
            _this.properties = data.obj;
            //sortiramo listu
            _this.sortList();
            _this.createList();
        });
    };
    //putanja ka apartmanu
    HomepageComponent.prototype.goForProp = function (prop) { this.router.navigate(['/properties/view', prop._id]); };
    //koji je sort korisnik odabrao
    HomepageComponent.prototype.sorting = function (data) {
        if (data.target.value == "Date - newest")
            this.sort = 1;
        else if (data.target.value == "Date - oldest")
            this.sort = 2;
        else if (data.target.value == "Price - low to high")
            this.sort = 3;
        else if (data.target.value == "Price - high to low")
            this.sort = 4;
        else
            this.sort = 1;
        //sortiraj listu
        this.sortList();
        this.createList();
    };
    //sortiranje niza apartmana
    HomepageComponent.prototype.sortList = function () {
        //sirtiranje prema datumu od najnovijeg
        if (this.sort == 1)
            this.properties = this.properties.sort(function (obj1, obj2) {
                var d1 = new Date(obj1.date);
                var d2 = new Date(obj2.date);
                if (d1.getTime() > d2.getTime())
                    return -1;
                if (d1.getTime() < d2.getTime())
                    return 1;
                return 0;
            });
        //sortiranje prema datumu od najstarijeg
        if (this.sort == 2)
            this.properties = this.properties.sort(function (obj1, obj2) {
                var d1 = new Date(obj1.date);
                var d2 = new Date(obj2.date);
                if (d1.getTime() > d2.getTime())
                    return 1;
                if (d1.getTime() < d2.getTime())
                    return -1;
                return 0;
            });
        //sortiranje prema novcu od najeftinijih
        if (this.sort == 3)
            this.properties = this.properties.sort(function (obj1, obj2) {
                if (obj1.deposit > obj2.deposit)
                    return 1;
                if (obj1.deposit < obj2.deposit)
                    return -1;
                return 0;
            });
        //sortiranje prema novcu od najskupljih
        if (this.sort == 4)
            this.properties = this.properties.sort(function (obj1, obj2) {
                if (obj1.deposit > obj2.deposit)
                    return -1;
                if (obj1.deposit < obj2.deposit)
                    return 1;
                return 0;
            });
    };
    //pocetna slika apartmana
    HomepageComponent.prototype.getImage = function (prop) {
        var urlToImg;
        if (prop.image1 != "no")
            urlToImg = prop.image1;
        else if (prop.image2 != "no")
            urlToImg = prop.image2;
        else if (prop.image3 != "no")
            urlToImg = prop.image3;
        else if (prop.image4 != "no")
            urlToImg = prop.image4;
        else
            urlToImg = "no";
        //vracamo url slike
        return this.propSer.getImateUrl(urlToImg);
    };
    HomepageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__(/*! ./homepage.component.html */ "./src/app/pages/homepage/homepage.component.html"),
            styles: [__webpack_require__(/*! ./homepage.component.css */ "./src/app/pages/homepage/homepage.component.css")]
        }),
        __metadata("design:paramtypes", [_services_property_service__WEBPACK_IMPORTED_MODULE_2__["PropertyService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/pages/not-found/not-found.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/not-found/not-found.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Coda+Caption:800');\r\n@import url('https://fonts.googleapis.com/css?family=Roboto');\r\n.allOfThem {\r\n    height: 100%;\r\n    text-align: center;\r\n    width: 100%;\r\n    background-color: #fff4f3;\r\n}\r\n#firstT{\r\n    font-family: 'Coda Caption', sans-serif;\r\n    font-size: 50px;\r\n}\r\n#secondT{\r\n    font-family: 'Roboto', sans-serif;\r\n    font-size: 20px;  \r\n}\r\n"

/***/ }),

/***/ "./src/app/pages/not-found/not-found.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/not-found/not-found.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"allOfThem\">\n            <img  src=\"../assets/images/panda.png\" alt=\"panda\" style=\"margin-top:100px;\">\n\n        <div  style=\"text-align:center; \">\n    \n        <p id=\"firstT\">404</p>\n          <p id=\"secondT\">  Angry Panda has eaten the page you are looking for.</p>\n          </div>\n\n</div>"

/***/ }),

/***/ "./src/app/pages/not-found/not-found.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/not-found/not-found.component.ts ***!
  \********************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/pages/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/pages/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/pages-routing.module.ts ***!
  \***********************************************/
/*! exports provided: PagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesRoutingModule", function() { return PagesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/pages/homepage/homepage.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_2__["HomepageComponent"] }
];
var PagesRoutingModule = /** @class */ (function () {
    function PagesRoutingModule() {
    }
    PagesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], PagesRoutingModule);
    return PagesRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/pages.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _pages_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages-routing.module */ "./src/app/pages/pages-routing.module.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/pages/homepage/homepage.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/pages/not-found/not-found.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//moduli



//komponente


var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__["HomepageComponent"], _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _pages_routing_module__WEBPACK_IMPORTED_MODULE_2__["PagesRoutingModule"],
            ]
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ "./src/app/properties/add-property/add-property.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/properties/add-property/add-property.component.ts ***!
  \*******************************************************************/
/*! exports provided: AddPropertyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPropertyComponent", function() { return AddPropertyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_property_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/property.service */ "./src/app/services/property.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//ruter

//servisi


var AddPropertyComponent = /** @class */ (function () {
    function AddPropertyComponent(propSer, router, toastr) {
        this.propSer = propSer;
        this.router = router;
        this.toastr = toastr;
    }
    AddPropertyComponent.prototype.ngOnInit = function () { };
    //kada forma posalje podatke
    AddPropertyComponent.prototype.sendData = function (data) {
        var _this = this;
        //uzimamo podatke apartmana i fajlove za upload
        var property = data.property;
        var fileToUpload = data.files;
        //saljemo podatke s fajlovima serveru
        this.propSer.addProperty(property, fileToUpload[1], fileToUpload[2], fileToUpload[3], fileToUpload[4]).subscribe(function (data) {
            //obavestavamo korisnika
            _this.toastr.success('apartment created', '', {
                closeButton: true,
                positionClass: 'toast-bottom-right'
            });
            //saljemo komponenti za prikaz apartmana informaciju da je doslo do promene
            _this.propSer.changeMessage(1);
            //saljemo korisnika na tu putanju
            _this.router.navigate(['/users/property']);
        });
    };
    AddPropertyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-property',
            //dodavanje deteta s eventom prijema podataka
            template: "\n  <app-property-form (event)=\"sendData($event)\"></app-property-form>\n  ",
            styles: ['']
        }),
        __metadata("design:paramtypes", [_services_property_service__WEBPACK_IMPORTED_MODULE_2__["PropertyService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], AddPropertyComponent);
    return AddPropertyComponent;
}());



/***/ }),

/***/ "./src/app/properties/edit-property/edit-property.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/properties/edit-property/edit-property.component.ts ***!
  \*********************************************************************/
/*! exports provided: EditPropertyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPropertyComponent", function() { return EditPropertyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_property_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/property.service */ "./src/app/services/property.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//rutovanje s parametrima

//servisi


var EditPropertyComponent = /** @class */ (function () {
    function EditPropertyComponent(propSer, router, route, toastr) {
        this.propSer = propSer;
        this.router = router;
        this.route = route;
        this.toastr = toastr;
        this.loaded = false; //da li su podaci ucitani
    }
    EditPropertyComponent.prototype.ngOnInit = function () {
        var _this = this;
        //uzimamo id apartmana iz putanje
        this.route.paramMap.subscribe(function (params) {
            _this.taken = params.get('id');
            //saljemo serveru zahtev za podatke o apartmanu
            _this.propSer.editProperty(_this.taken).subscribe(function (data) {
                //ucitavamo te podatke i javljamo da su podaci ucitani
                _this.property = data.prop;
                _this.loaded = true;
            });
        });
    };
    //kada primimo podatke od forme
    EditPropertyComponent.prototype.sendData = function (data) {
        var _this = this;
        //menjamo informacije o apartmanu
        this.property = data.property;
        //uzimamo prosledjene fajlove
        var fileToUpload = data.files;
        //saljemo serveru zahtev da promeni informacije o apartmanu
        this.propSer.saveProperty(this.taken, this.property, fileToUpload[1], fileToUpload[2], fileToUpload[3], fileToUpload[4]).subscribe(function (data) {
            //obavestavamo korisnika
            _this.toastr.success('apartment saved', '', {
                closeButton: true,
                positionClass: 'toast-bottom-right'
            });
            //saljemo komponenti za apartmane informaciju da ponovo ucita apartmane
            _this.propSer.changeMessage(1);
            //saljemo korisnika na datu putanju
            _this.router.navigate(['/users/property']);
        });
    };
    EditPropertyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-property',
            //kreiramo dete s informacijama o apartmana i eventom za prijem podataka
            template: "\n    <app-property-form *ngIf=\"loaded\" [prop]=\"property\" (event)=\"sendData($event)\"></app-property-form>\n  ",
            styles: []
        }),
        __metadata("design:paramtypes", [_services_property_service__WEBPACK_IMPORTED_MODULE_2__["PropertyService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], EditPropertyComponent);
    return EditPropertyComponent;
}());



/***/ }),

/***/ "./src/app/properties/properties-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/properties/properties-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: PropertiesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertiesRoutingModule", function() { return PropertiesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _add_property_add_property_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-property/add-property.component */ "./src/app/properties/add-property/add-property.component.ts");
/* harmony import */ var _view_property_view_property_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-property/view-property.component */ "./src/app/properties/view-property/view-property.component.ts");
/* harmony import */ var _edit_property_edit_property_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-property/edit-property.component */ "./src/app/properties/edit-property/edit-property.component.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//moduli


//komponente



//servisi

var routes = [
    { path: 'add', component: _add_property_add_property_component__WEBPACK_IMPORTED_MODULE_2__["AddPropertyComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]] },
    { path: 'view/:id', component: _view_property_view_property_component__WEBPACK_IMPORTED_MODULE_3__["ViewPropertyComponent"] },
    { path: 'edit/:id', component: _edit_property_edit_property_component__WEBPACK_IMPORTED_MODULE_4__["EditPropertyComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]] },
    { path: '**', redirectTo: '/not-found' },
];
var PropertiesRoutingModule = /** @class */ (function () {
    function PropertiesRoutingModule() {
    }
    PropertiesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], PropertiesRoutingModule);
    return PropertiesRoutingModule;
}());



/***/ }),

/***/ "./src/app/properties/properties.module.ts":
/*!*************************************************!*\
  !*** ./src/app/properties/properties.module.ts ***!
  \*************************************************/
/*! exports provided: PropertiesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertiesModule", function() { return PropertiesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var angular_star_rating__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-star-rating */ "./node_modules/angular-star-rating/esm5/angular-star-rating.js");
/* harmony import */ var _properties_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./properties-routing.module */ "./src/app/properties/properties-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _view_property_view_property_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-property/view-property.component */ "./src/app/properties/view-property/view-property.component.ts");
/* harmony import */ var _add_property_add_property_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-property/add-property.component */ "./src/app/properties/add-property/add-property.component.ts");
/* harmony import */ var _property_form_property_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./property-form/property-form.component */ "./src/app/properties/property-form/property-form.component.ts");
/* harmony import */ var _edit_property_edit_property_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit-property/edit-property.component */ "./src/app/properties/edit-property/edit-property.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
///moduli





//komponente




var PropertiesModule = /** @class */ (function () {
    function PropertiesModule() {
    }
    PropertiesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _properties_routing_module__WEBPACK_IMPORTED_MODULE_3__["PropertiesRoutingModule"],
                angular_star_rating__WEBPACK_IMPORTED_MODULE_2__["StarRatingModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            ],
            declarations: [_add_property_add_property_component__WEBPACK_IMPORTED_MODULE_6__["AddPropertyComponent"], _view_property_view_property_component__WEBPACK_IMPORTED_MODULE_5__["ViewPropertyComponent"], _property_form_property_form_component__WEBPACK_IMPORTED_MODULE_7__["PropertyFormComponent"], _edit_property_edit_property_component__WEBPACK_IMPORTED_MODULE_8__["EditPropertyComponent"]]
        })
    ], PropertiesModule);
    return PropertiesModule;
}());



/***/ }),

/***/ "./src/app/properties/property-form/property-form.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/properties/property-form/property-form.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Open+Sans');\r\n@import url('https://fonts.googleapis.com/css?family=Roboto');\r\n@media only screen and (max-width: 688px) {\r\n    table{\r\n        text-align: center;\r\n    }\r\n    .disapir{\r\n        display: none;\r\n    }\r\n}\r\n.overLine{\r\n    text-decoration: line-through;\r\n}\r\nlabel{\r\n    font-family: 'Roboto', sans-serif;\r\n    padding-top:15px;\r\n}\r\ntd{\r\n    max-width: 200px;\r\n    padding: 10px;\r\n}\r\n.container {\r\n    padding-top:20px;\r\n    max-width: 800px;\r\n  }\r\n.card{\r\n    width: 8rem;\r\n    margin-top: 10px;\r\n    margin-left: 10px;\r\n    border:1px solid #949494;\r\n  }\r\n.card-img-top{\r\n      height: 6rem;\r\n  }\r\n.card .over{\r\n    visibility: hidden;\r\n}\r\n.card:hover .over{\r\n    visibility: visible;\r\n}\r\n.card:hover{\r\n    opacity: 0.7;\r\n}\r\n.over{\r\n    position: absolute;\r\n    top: 40%;\r\n    left: 50%;\r\n    width: 40px;\r\n    height: 40px;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    -ms-transform: translate(-50%, -50%);\r\n    border: none;\r\n    cursor: pointer;\r\n}\r\n.iconEdit{\r\n    height: 40px;\r\n    width: 40px;\r\n}\r\n.toCent{\r\n    margin-left:auto;\r\n    margin-right:auto;\r\n}\r\ntable{\r\n    margin-top: 20px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n.test{\r\n    height: 100%;\r\n    padding-top: 3px;\r\n    width: 100%;\r\n    color:#767474;\r\n    font-family: 'Open Sans', sans-serif;\r\n    border-top: 1px solid #949494;\r\n    border-top-left-radius: 0%;\r\n    border-top-right-radius: 0%;\r\n}\r\n.opi{\r\n    opacity: 0.3;\r\n}\r\n.card-body{\r\n    height: 2rem;\r\n    padding: 0px;\r\n}"

/***/ }),

/***/ "./src/app/properties/property-form/property-form.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/properties/property-form/property-form.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\" >\n        <div style=\"text-align:center;\">\n            <h2>Apartments</h2>\n        </div>\n<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n\n    <div class=\"form-row justify-content-center toCent\" style=\"max-width:500px;\">\n        <div class=\"form-group col-md-6\">\n          <label for=\"inputTitle\">Title</label>\n          <input type=\"text\" class=\"form-control\" id=\"inputTitle\" placeholder=\"Enter title\" formControlName=\"title\">\n          <div *ngIf=\"form.controls['title'].errors && !form.controls['title'].pristine\" class=\"error-msg\">\n                <div [hidden]=\"!form.controls['title'].errors.required\">\n                    Valid title is required.\n                </div>\n                <div [hidden]=\"!form.controls['title'].errors.minlength\">\n                    Title is too short.\n                </div>\n            </div>  \n        </div>\n      </div>\n\n\n    <div class=\"form-row justify-content-center toCent\" style=\"max-width:500px\">\n        <div class=\"form-group col-md-6\">\n          <label for=\"inputDeposit\">Deposit</label>\n          <input type=\"number\" class=\"form-control\" id=\"inputDeposit\" placeholder=\"Enter deposit in euros\" formControlName=\"deposit\">\n          <div *ngIf=\"form.controls['deposit'].errors && !form.controls['deposit'].pristine\" class=\"error-msg\">\n                <div [hidden]=\"!form.controls['deposit'].errors.required\">\n                    Valid deposit is required.\n                </div>\n                <div [hidden]=\"!form.controls['deposit'].errors.min\">\n                    Deposit is too small (min 50).\n                </div>\n                <div [hidden]=\"!form.controls['deposit'].errors.max\">\n                        Deposit is too big (max 1000).\n                    </div>\n            </div>\n       \n        </div>\n        <div class=\"form-group col-md-6\">\n          <label for=\"inputRooms\">Rooms</label>\n          <input type=\"number\" class=\"form-control\" id=\"inputRooms\" placeholder=\"Enter number of rooms\" formControlName=\"rooms\">\n          <div *ngIf=\"form.controls['rooms'].errors && !form.controls['rooms'].pristine\" class=\"error-msg\">\n                  <div [hidden]=\"!form.controls['rooms'].errors.required\">\n                          Valid rooms number is required.\n                        </div>\n                        <div [hidden]=\"!form.controls['rooms'].errors.min\">\n                                Room number is too small(min 1)\n                        </div>\n                        <div [hidden]=\"!form.controls['rooms'].errors.max\">\n                                Room number is too big(max 10)\n                        </div>\n                </div>\n        </div>\n      </div>\n\n\n        <div class=\"form-row justify-content-center toCent\" style=\"max-width:500px\">\n                <div class=\"form-group col-md-6\">\n                  <label for=\"inputArea\">Area</label>\n                  <input type=\"number\" class=\"form-control\" id=\"inputArea\" placeholder=\"Enter area in m2\" formControlName=\"area\">\n                  <div *ngIf=\"form.controls['area'].errors && !form.controls['area'].pristine\" class=\"error-msg\">\n                                <div [hidden]=\"!form.controls['area'].errors.required\">\n                                    Valid area number is required.\n                                </div>\n                                <div [hidden]=\"!form.controls['area'].errors.min\">\n                                    Area is too small (min 10).\n                                </div>\n                                <div [hidden]=\"!form.controls['area'].errors.max\">\n                                        Area is too big (max 1000).\n                                    </div>\n                            </div>\n                </div>\n                <div class=\"form-group col-md-6\">\n                  <label for=\"inputStreet\">Street</label>\n                  <input type=\"text\" class=\"form-control\" id=\"inputStreet\" placeholder=\"Enter street name\" formControlName=\"street\">\n                  <div *ngIf=\"form.controls['street'].errors && !form.controls['street'].pristine\" class=\"error-msg\">\n                                <div [hidden]=\"!form.controls['street'].errors.required\">\n                                    Valid street is required.\n                                </div>\n                                <div [hidden]=\"!form.controls['street'].errors.minlength\">\n                                    Street name is too short.\n                                </div>\n                            </div>  \n               \n                </div>\n              </div>\n\n\n\n\n\n    <div class=\"row justify-content-center\" style=\"margin-top:20px;\">\n        <div class=\"card \">\n    <img class=\"card-img-top\" [src]='url[1]' alt=\"Card image cap\">\n    <img *ngIf=\"isAdded(1)\" (click)=\"clearImage(1)\" src=\"../../../assets/images/delete.png\" class=\"over\">\n    <div class=\"card-body\">\n     <a (click)=\"openUpload($event,1)\" class=\"test btn\">+</a>\n     <input id=\"upload\" name=\"photo\" accept=\"image/*\" (change)=\"onImageAdded($event,1)\" type=\"file\" style=\"display:none;\"/>\n    </div>\n        </div>\n\n        <div class=\"card\">\n    <img class=\"card-img-top\" [src]='url[2]' alt=\"Card image cap\">\n    <img *ngIf=\"isAdded(2)\" (click)=\"clearImage(2)\" src=\"../../../assets/images/delete.png\" class=\"over\">\n    <div class=\"card-body\">\n     <a (click)=\"openUpload($event,2)\" class=\"test btn \">+</a>\n     <input id=\"upload2\" name=\"photo\" accept=\"image/*\" (change)=\"onImageAdded($event,2)\" type=\"file\" style=\"display:none;\"/>\n    </div>\n        </div>\n\n        <div class=\"card\" >\n    <img class=\"card-img-top\" [src]='url[3]' alt=\"Card image cap\">\n    <img *ngIf=\"isAdded(3)\" (click)=\"clearImage(3)\" src=\"../../../assets/images/delete.png\" class=\"over\">\n    <div class=\"card-body\">\n     <a (click)=\"openUpload($event,3)\" class=\"test btn\">+</a>\n     <input id=\"upload3\" name=\"photo\" accept=\"image/*\" (change)=\"onImageAdded($event,3)\" type=\"file\" style=\"display:none;\"/>\n    </div>\n        </div>\n\n        <div class=\"card\" >\n        <img class=\"card-img-top\" [src]='url[4]' alt=\"Card image cap\">\n        <img *ngIf=\"isAdded(4)\" (click)=\"clearImage(4)\" src=\"../../../assets/images/delete.png\" class=\"over\">\n        <div class=\"card-body\">\n         <a (click)=\"openUpload($event,4)\" class=\"test btn\">+</a>\n         <input id=\"upload4\" name=\"photo\" accept=\"image/*\" (change)=\"onImageAdded($event,4)\" type=\"file\" style=\"display:none;\"/>\n        </div>\n        </div>\n\n\n    </div>\n    <table align='center'>\n    <tr>\n        <td (click)='changeI(1)'>\n                <img [class.opi]=\"!isActive(1)\" class=\"iconEdit\" [src]='iconURL[1]'>\n                <label class=\"disapir\" [class.overLine]=\"!isActive(1)\" >Internet</label>\n        </td>\n        <td (click)='changeI(2)'>\n                <img [class.opi]=\"!isActive(2)\" class=\"iconEdit\" [src]='iconURL[2]'>\n                <label class=\"disapir\" [class.overLine]=\"!isActive(2)\">Cable TV</label>\n        </td>\n        <td (click)='changeI(3)'>\n                <img [class.opi]=\"!isActive(3)\" class=\"iconEdit\" [src]='iconURL[3]'>\n                <label class=\"disapir\" [class.overLine]=\"!isActive(3)\">Double bed</label>\n        </td>\n        <td (click)='changeI(4)'>\n                <img [class.opi]=\"!isActive(4)\" class=\"iconEdit\" [src]='iconURL[4]'>\n                <label class=\"disapir\" [class.overLine]=\"!isActive(4)\">Single bed</label>\n        </td>\n    </tr>\n    <tr> \n        <td (click)='changeI(5)'>\n                <img [class.opi]=\"!isActive(5)\" class=\"iconEdit\" [src]='iconURL[5]'>\n                <label class=\"disapir\" [class.overLine]=\"!isActive(5)\">Air conditioning</label>\n        </td>\n        <td (click)='changeI(6)'>\n                <img [class.opi]=\"!isActive(6)\" class=\"iconEdit\" [src]='iconURL[6]'>\n                <label class=\"disapir\" [class.overLine]=\"!isActive(6)\">Fridge</label>\n        </td>\n        <td (click)='changeI(7)'>\n                <img [class.opi]=\"!isActive(7)\" class=\"iconEdit\" [src]='iconURL[7]'>\n                <label class=\"disapir\" [class.overLine]=\"!isActive(7)\">Stove</label>\n        </td>\n        <td (click)='changeI(8)'>\n                <img [class.opi]=\"!isActive(8)\" class=\"iconEdit\" [src]='iconURL[8]'>\n                <label class=\"disapir\" [class.overLine]=\"!isActive(8)\">Washing machine</label>\n        </td>\n    </tr>   \n    <tr>\n        <td (click)='changeI(9)'>\n                <img [class.opi]=\"!isActive(9)\" class=\"iconEdit\" [src]='iconURL[9]'>\n                <label class=\"disapir\" [class.overLine]=\"!isActive(9)\">Bathtub</label>\n        </td>\n        <td (click)='changeI(10)'>\n                <img [class.opi]=\"!isActive(10)\" class=\"iconEdit\" [src]='iconURL[10]'>\n                <label class=\"disapir\" [class.overLine]=\"!isActive(10)\">Microwave</label>\n        </td>\n        <td (click)='changeI(11)'>\n                <img [class.opi]=\"!isActive(11)\" class=\"iconEdit\" [src]='iconURL[11]'>\n                <label class=\"disapir\" [class.overLine]=\"!isActive(11)\">Landline</label>\n        </td>\n        <td (click)='changeI(12)'>\n                <img [class.opi]=\"!isActive(12)\" class=\"iconEdit\" [src]='iconURL[12]'>\n                <label class=\"disapir\" [class.overLine]=\"!isActive(12)\">Fireplace</label>\n                </td > \n    </tr>\n    </table>\n\n    <div class=\"row justify-content-center \">\n    <button type=\"submit\" style=\"margin:20px auto 20px;\" [disabled]=\"!form.valid\" class=\"btn btn-dark btn-lg\">Save apartment</button>\n        </div>\n</form>\n</div>\n"

/***/ }),

/***/ "./src/app/properties/property-form/property-form.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/properties/property-form/property-form.component.ts ***!
  \*********************************************************************/
/*! exports provided: PropertyFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyFormComponent", function() { return PropertyFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_property_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/property.service */ "./src/app/services/property.service.ts");
/* harmony import */ var _model_property_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/property.model */ "./src/app/model/property.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//upravljanje formama

//serivis

//modeli

var PropertyFormComponent = /** @class */ (function () {
    function PropertyFormComponent(propSer) {
        this.propSer = propSer;
        //uzimamo input za editovanje apartmana, podaci su postavljeni na null u slucaju da je upitanju
        //kreiranje novog apartmana
        this.prop = { title: null, deposit: null, rooms: null, area: null, street: null };
        //emiter da posalje podatke kada korisnik popuni formu
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        //slike koje reprezentuju prazna mesta za upload slika
        this.url = ["", "../../../assets/images/placeholder.jpg",
            "../../../assets/images/placeholder.jpg",
            "../../../assets/images/placeholder.jpg",
            "../../../assets/images/placeholder.jpg"];
        //ikonice koje reprezentuju podatke apartmana
        this.iconURL = ['', "../../../assets/icons/B-wireless-network.png",
            "../../../assets/icons/B-hdtv.png",
            "../../../assets/icons/B-bed.png",
            "../../../assets/icons/B-single-bed.png",
            "../../../assets/icons/B-air-conditioner.png",
            "../../../assets/icons/B-fridge.png",
            "../../../assets/icons/B-stove-oven.png",
            "../../../assets/icons/B-washing-machine.png",
            "../../../assets/icons/B-bathtub.png",
            "../../../assets/icons/B-microwave.png",
            "../../../assets/icons/B-landline.png",
            "../../../assets/icons/B-fireplace.png"
        ];
        //fajlovi (slike) koje ce biti uploadovane
        this.fileToUpload = [];
        //da li su slike dodate
        this.isAddedFile = [];
        //da li je ukljucio iskljucio neku od ikonica
        this.isClicked = [];
    }
    PropertyFormComponent.prototype.ngOnInit = function () {
        //kreiranje forme s podacima i validacijom
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.prop.title, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]),
            deposit: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.prop.deposit, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(50), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(1000)]),
            rooms: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.prop.rooms, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(10)]),
            area: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.prop.area, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(1000)]),
            street: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.prop.street, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]),
        });
        //aktiviranje ikonica ako je upitanju editovanje apartmana
        this.isClicked[1] = this.prop.internet;
        this.isClicked[2] = this.prop.cableTV;
        this.isClicked[3] = this.prop.bBed;
        this.isClicked[4] = this.prop.sBed;
        this.isClicked[5] = this.prop.conditioner;
        this.isClicked[6] = this.prop.fridge;
        this.isClicked[7] = this.prop.stove;
        this.isClicked[8] = this.prop.washer;
        this.isClicked[9] = this.prop.bathub;
        this.isClicked[10] = this.prop.microwave;
        this.isClicked[11] = this.prop.landline;
        this.isClicked[12] = this.prop.fireplace;
        //ako je u pitanju editovanje i apartman ima slika, prikazacemo ih
        if (this.prop.image1 != "no" && this.prop.image1 != undefined) {
            this.url[1] = this.propSer.getImateUrl(this.prop.image1);
            this.isAddedFile[1] = true;
        }
        if (this.prop.image2 != "no" && this.prop.image2 != undefined) {
            this.url[2] = this.propSer.getImateUrl(this.prop.image2);
            this.isAddedFile[2] = true;
        }
        if (this.prop.image3 != "no" && this.prop.image3 != undefined) {
            this.url[3] = this.propSer.getImateUrl(this.prop.image3);
            this.isAddedFile[3] = true;
        }
        if (this.prop.image4 != "no" && this.prop.image4 != undefined) {
            this.url[4] = this.propSer.getImateUrl(this.prop.image4);
            this.isAddedFile[4] = true;
        }
    };
    //kada korisnik submituje formu
    PropertyFormComponent.prototype.onSubmit = function () {
        //kreiramo objekat datog apartmana
        var property = new _model_property_model__WEBPACK_IMPORTED_MODULE_3__["Property"](this.form.value.title, this.form.value.deposit, this.form.value.rooms, this.form.value.area, this.form.value.street, this.isActive(1), this.isActive(2), this.isActive(3), this.isActive(4), this.isActive(5), this.isActive(6), this.isActive(7), this.isActive(8), this.isActive(9), this.isActive(10), this.isActive(11), this.isActive(12), this.prop.user, this.sendEditedImage(1), this.sendEditedImage(2), this.sendEditedImage(3), this.sendEditedImage(4));
        //dodajemo ga zajedno s fajlovima u novi
        var objToSend = { property: property, files: this.fileToUpload };
        this.form.reset;
        //prosledjujemo nazad roditeljskoj komponenti
        this.event.emit(objToSend);
    };
    //saljemo url slike ako postoji fajl
    PropertyFormComponent.prototype.sendEditedImage = function (num) {
        if (this.isAdded(num) != true)
            return "no";
        else {
            if (num == 1)
                if (!this.isThereAfile(1))
                    return this.prop.image1;
                else
                    return "no";
            if (num == 2)
                if (!this.isThereAfile(2))
                    return this.prop.image2;
                else
                    return "no";
            if (num == 3)
                if (!this.isThereAfile(3))
                    return this.prop.image3;
                else
                    return "no";
            if (num == 4)
                if (!this.isThereAfile(4))
                    return this.prop.image4;
                else
                    return "no";
        }
    };
    //proveravamo da li se nalazi fajl na datom idju
    PropertyFormComponent.prototype.isThereAfile = function (num) { if (this.fileToUpload[num] == null || this.fileToUpload[num] == undefined)
        return false;
    else
        return true; };
    //menjamo status ikonica
    PropertyFormComponent.prototype.changeI = function (num) { if (this.isActive(num))
        this.isClicked[num] = false;
    else
        this.isClicked[num] = true; };
    //ako je ikonica aktivna
    PropertyFormComponent.prototype.isActive = function (num) { return this.isClicked[num] == true; };
    //ako je slika dodata
    PropertyFormComponent.prototype.isAdded = function (num) { if (this.isAddedFile[num] == true)
        return true;
    else
        return false; };
    //ako korisnik ukoni sliku
    PropertyFormComponent.prototype.clearImage = function (num) {
        this.fileToUpload[num] = null;
        this.url[num] = '../../../assets/images/placeholder.jpg';
        this.isAddedFile[num] = false;
    };
    //kada korisnik doda slik
    PropertyFormComponent.prototype.onImageAdded = function (event, num) {
        var _this = this;
        var temp = event.target.files[0];
        //proveravamo tip fajla
        if (temp != undefined)
            if (temp.type.split('/')[0] == "image")
                if (event.target.files && event.target.files[0]) {
                    this.fileToUpload[num] = event.target.files[0];
                    this.isAddedFile[num] = true;
                    //prikazujemo fajl korisniku
                    var reader = new FileReader();
                    reader.onload = function (event) {
                        _this.url[num] = event.target.result;
                    };
                    reader.readAsDataURL(event.target.files[0]);
                }
    };
    //kada korisnik klikne na znak plus prikazujemo sakriveni fajl input
    PropertyFormComponent.prototype.openUpload = function (event, num) {
        event.preventDefault();
        var element;
        //pozivamo click event za odredjeni input
        if (num == 1)
            element = document.getElementById('upload');
        if (num == 2)
            element = document.getElementById('upload2');
        if (num == 3)
            element = document.getElementById('upload3');
        if (num == 4)
            element = document.getElementById('upload4');
        element.click();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _model_property_model__WEBPACK_IMPORTED_MODULE_3__["Property"])
    ], PropertyFormComponent.prototype, "prop", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PropertyFormComponent.prototype, "event", void 0);
    PropertyFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-property-form',
            template: __webpack_require__(/*! ./property-form.component.html */ "./src/app/properties/property-form/property-form.component.html"),
            styles: [__webpack_require__(/*! ./property-form.component.css */ "./src/app/properties/property-form/property-form.component.css")]
        }),
        __metadata("design:paramtypes", [_services_property_service__WEBPACK_IMPORTED_MODULE_2__["PropertyService"]])
    ], PropertyFormComponent);
    return PropertyFormComponent;
}());



/***/ }),

/***/ "./src/app/properties/view-property/view-property.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/properties/view-property/view-property.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');\r\n@media only screen and (max-width: 576px) {\r\n     .container{\r\n        padding-top:0px;\r\n    }\r\n    .celija{\r\n        text-align: center;\r\n    }\r\n    .rightIm{\r\n        margin-top:0px;\r\n    }\r\n    .celija{\r\n        padding: 0px;\r\n    }\r\n\r\n}\r\n@media only screen and (max-width: 765px) {\r\n    label{\r\n        display: none;\r\n    }\r\n}\r\n@media only screen and (min-width: 576px) {\r\n    .container{\r\n       padding-top:20px;\r\n   }\r\n   .bordr{\r\n    margin-left:10px\r\n   }\r\n       .rightIm{\r\n        margin-top:30px;\r\n    }\r\n    .celija{\r\n        padding: 5px;\r\n        text-align: left;\r\n    }\r\n\r\n}\r\n.opi{\r\n    opacity: 0.3;\r\n}\r\n.overLine{\r\n    text-decoration: line-through;\r\n}\r\n.left{\r\n    position: absolute;\r\n    top: 24%;\r\n    left: 7%;\r\n    width: 40px;\r\n    height: 40px;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    -ms-transform: translate(-50%, -50%);\r\n    border: none;\r\n    cursor: pointer;\r\n}\r\n.right{\r\n    position: absolute;\r\n    top: 24%;\r\n    left: 93%;\r\n    width: 40px;\r\n    height: 40px;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    -ms-transform: translate(-50%, -50%);\r\n    border: none;\r\n    cursor: pointer;\r\n}\r\n.bordr{\r\n    border:1px solid #949494;\r\n    border-radius: .25rem;\r\n}\r\n.text-center{\r\n    position:relative;\r\n}\r\n.iconEdit{\r\n    height: 40px;\r\n    width: 40px;\r\n}\r\n.celija{\r\n    max-width: 200px;\r\n    padding-top:20px;\r\n}\r\n.ikonice{\r\n    margin-bottom: 20px;\r\n}\r\n.img-thumbnail{\r\n    width: 180px;\r\n    height: 180px;\r\n}\r\n.avatar{\r\n    margin-top:12px;\r\n    margin-bottom: 5px;\r\n}"

/***/ }),

/***/ "./src/app/properties/view-property/view-property.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/properties/view-property/view-property.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf='isDataLoaded' style=\"margin:0 auto 5px; max-width:1000px;\">\n  <div class=\"row\" style=\"margin-top:10px;\">\n   <!-- edit form column -->\n   <div class=\"col-md-8 col-sm-6 col-xs-12 personal-info\" style=\"max-width:800px;\">\n     <div class=\"bordr text-center\" style=\"margin-bottom:5px;\">\n      <img [src]=\"images[pos]\" style=\"margin-top:0px; width:100%; height:330px;\" class=\"images\">\n      <img src=\"../../../assets/images/left.png\" (click)=\"left()\" class=\"left\">  \n      <img src=\"../../../assets/images/right.png\" (click)=\"right()\" class=\"right\">\n      <table class=\"table text-center \" style=\"table-layout: fixed;width: 100%;\">\n        <tr >\n          <td class=\"text-center\" colspan=\"4\">{{property.title}}</td>\n        </tr>\n        <tr>\n          <td style=\"text-align:right;\">Area:</td><td>{{property.area}}m2</td>\n          <td style=\"text-align:right;\">Street:</td><td>{{property.street}}</td>\n        </tr>\n        <tr >\n            <td style=\"text-align:right;\">Deposit:</td><td>{{property.deposit}}€</td>\n            <td style=\"text-align:right;\">Rooms:</td><td>{{property.rooms}}</td>\n        </tr>\n      </table>\n\n      <table align='center' class=\"ikonice\" style=\"width: 100%;\">\n          <tr>\n              <td class=\"celija\">\n                      <img [class.opi]=\"!isActive(1)\" class=\"iconEdit\" [src]='iconURL[1]'>\n                      <label [class.overLine]=\"!isActive(1)\" >Internet</label>\n              </td>\n              <td class=\"celija\">\n                      <img [class.opi]=\"!isActive(2)\" class=\"iconEdit\" [src]='iconURL[2]'>\n                      <label [class.overLine]=\"!isActive(2)\">Cable TV</label>\n              </td>\n              <td class=\"celija\">\n                      <img [class.opi]=\"!isActive(3)\" class=\"iconEdit\" [src]='iconURL[3]'>\n                      <label [class.overLine]=\"!isActive(3)\">Double bed</label>\n              </td>\n              <td class=\"celija\">\n                      <img [class.opi]=\"!isActive(4)\" class=\"iconEdit\" [src]='iconURL[4]'>\n                      <label [class.overLine]=\"!isActive(4)\">Single bed</label>\n              </td>\n          </tr>\n          <tr> \n              <td class=\"celija\">\n                      <img [class.opi]=\"!isActive(5)\" class=\"iconEdit\" [src]='iconURL[5]'>\n                      <label [class.overLine]=\"!isActive(5)\">Air conditioning</label>\n              </td>\n              <td class=\"celija\">\n                      <img [class.opi]=\"!isActive(6)\" class=\"iconEdit\" [src]='iconURL[6]'>\n                      <label [class.overLine]=\"!isActive(6)\">Fridge</label>\n              </td>\n              <td class=\"celija\">\n                      <img [class.opi]=\"!isActive(7)\" class=\"iconEdit\" [src]='iconURL[7]'>\n                      <label [class.overLine]=\"!isActive(7)\">Stove</label>\n              </td>\n              <td class=\"celija\">\n                      <img [class.opi]=\"!isActive(8)\" class=\"iconEdit\" [src]='iconURL[8]'>\n                      <label [class.overLine]=\"!isActive(8)\">Washing machine</label>\n              </td>\n          </tr>   \n          <tr>\n              <td class=\"celija\">\n                      <img [class.opi]=\"!isActive(9)\" class=\"iconEdit\" [src]='iconURL[9]'>\n                      <label [class.overLine]=\"!isActive(9)\">Bathtub</label>\n              </td>\n              <td class=\"celija\">\n                      <img [class.opi]=\"!isActive(10)\" class=\"iconEdit\" [src]='iconURL[10]'>\n                      <label [class.overLine]=\"!isActive(10)\">Microwave</label>\n              </td>\n              <td class=\"celija\">\n                      <img [class.opi]=\"!isActive(11)\" class=\"iconEdit\" [src]='iconURL[11]'>\n                      <label [class.overLine]=\"!isActive(11)\">Landline</label>\n              </td>\n              <td class=\"celija\">\n                      <img [class.opi]=\"!isActive(12)\" class=\"iconEdit\" [src]='iconURL[12]'>\n                      <label [class.overLine]=\"!isActive(12)\">Fireplace</label>\n                      </td > \n          </tr>\n          </table>\n    </div>\n   </div>\n\n   <div class=\"col-md-4 col-sm-6 col-xs-12\">\n    <div class=\"text-center bordr rightIm\">\n            <img  [src]='url' class=\"avatar images rounded-circle img-thumbnail\" alt=\"avatar\">\n            <h6>{{property.user.firstName+' '+property.user.lastName}}</h6>\n            <star-rating (ratingChange)=\"onRatingChange($event)\" [starType]=\"'svg'\" [speed]=\"'slow'\" [size]=\"'large'\" [rating]=\"star\" [disabled]=\"!isLoggedIn()\"></star-rating>\n            <button type=\"button\" (click)='goToProfile()' class=\"btn btn-info\" style=\"margin-top:10px; margin-bottom:10px;\">View profile</button>\n          </div>\n  </div>\n </div>\n</div>"

/***/ }),

/***/ "./src/app/properties/view-property/view-property.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/properties/view-property/view-property.component.ts ***!
  \*********************************************************************/
/*! exports provided: ViewPropertyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPropertyComponent", function() { return ViewPropertyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_property_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/property.service */ "./src/app/services/property.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_rate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/rate.service */ "./src/app/services/rate.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//putanje

//servisi



var ViewPropertyComponent = /** @class */ (function () {
    function ViewPropertyComponent(router, rateSr, route, propSer, userSer) {
        this.router = router;
        this.rateSr = rateSr;
        this.route = route;
        this.propSer = propSer;
        this.userSer = userSer;
        //ikonice
        this.iconURL = ['', "../../../assets/icons/B-wireless-network.png",
            "../../../assets/icons/B-hdtv.png",
            "../../../assets/icons/B-bed.png",
            "../../../assets/icons/B-single-bed.png",
            "../../../assets/icons/B-air-conditioner.png",
            "../../../assets/icons/B-fridge.png",
            "../../../assets/icons/B-stove-oven.png",
            "../../../assets/icons/B-washing-machine.png",
            "../../../assets/icons/B-bathtub.png",
            "../../../assets/icons/B-microwave.png",
            "../../../assets/icons/B-landline.png",
            "../../../assets/icons/B-fireplace.png"
        ];
        this.isClicked = []; //da li je ikonica aktivna
        this.isDataLoaded = false; //jesu li podaci ucitani
        this.images = []; //slike apartmana
        this.pos = 0; //pozicija u galeriji
        this.activ = null; //da li su podaci smao jednom ucitani
        this.star = 0; //ucitana ocena
    }
    ViewPropertyComponent.prototype.ngOnInit = function () {
        var _this = this;
        //uzimamo id iz putanje
        this.route.paramMap.subscribe(function (params) {
            _this.taken = params.get('id');
            //podatke apartmana
            _this.propSer.viewProperty(_this.taken).subscribe(function (data) {
                //ucitavamo objekat apartmana
                _this.property = data.prop;
                _this.property.user = data.user;
                //aktiviramo ikonice
                _this.isClicked[1] = data.prop.internet,
                    _this.isClicked[2] = data.prop.cableTV,
                    _this.isClicked[3] = data.prop.bBed,
                    _this.isClicked[4] = data.prop.sBed,
                    _this.isClicked[5] = data.prop.conditioner,
                    _this.isClicked[6] = data.prop.fridge,
                    _this.isClicked[7] = data.prop.stove,
                    _this.isClicked[8] = data.prop.washer,
                    _this.isClicked[9] = data.prop.bathub,
                    _this.isClicked[10] = data.prop.microwave,
                    _this.isClicked[11] = data.prop.landline,
                    _this.isClicked[12] = data.prop.fireplace,
                    //postavljamo url za prikaz slika
                    _this.url = "/uploads/avatars/" + _this.property.user.avatar;
                if (_this.property.image1 != "no")
                    _this.images.push(_this.propSer.getImateUrl(_this.property.image1));
                if (_this.property.image2 != "no")
                    _this.images.push(_this.propSer.getImateUrl(_this.property.image2));
                if (_this.property.image3 != "no")
                    _this.images.push(_this.propSer.getImateUrl(_this.property.image3));
                if (_this.property.image4 != "no")
                    _this.images.push(_this.propSer.getImateUrl(_this.property.image4));
                if (_this.images.length == 0)
                    _this.images.push(_this.propSer.getImateUrl("no"));
                _this.isDataLoaded = true;
            });
        });
    };
    //kada korisnik dodeli ocenu
    ViewPropertyComponent.prototype.onRatingChange = function (data) { this.rateSr.postStars({ "id": this.property.user._id, "num": data.rating }).subscribe(); };
    //klik levo na galeriji
    ViewPropertyComponent.prototype.left = function () { if (this.pos == 0) {
        this.pos = this.images.length - 1;
    }
    else
        this.pos = this.pos - 1; };
    //klik desno na galeriji
    ViewPropertyComponent.prototype.right = function () { if (this.pos == this.images.length - 1) {
        this.pos = 0;
    }
    else
        this.pos = this.pos + 1; };
    //proveravamo da li je korisnik logovan da omogucimo ocenjivanje
    ViewPropertyComponent.prototype.isLoggedIn = function () {
        var _this = this;
        //ako je logovan
        if (this.userSer.isLoggedIn()) {
            //ucitavamo jednom vec dodeljenu ocenu
            if (this.activ == null && this.property.user._id != undefined) {
                this.activ = 1;
                //ucitavamo dodeljenu ocenu
                this.rateSr.getStars(this.property.user._id).subscribe(function (data) {
                    _this.watcher = data.id;
                    _this.star = data.star;
                });
            }
            //ako ne gleda sopstveni apartman (ne moze sam sebe oceniti)
            if (this.watcher != this.property.user._id)
                return true;
            else
                return false;
        }
        else
            return false;
    };
    //putanja ka vlasniku apartmana
    ViewPropertyComponent.prototype.goToProfile = function () { this.router.navigate(['/users/profile/', this.property.user.userName]); };
    //provera da li je ikonica aktivna
    ViewPropertyComponent.prototype.isActive = function (num) { return this.isClicked[num] == true; };
    ViewPropertyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-property',
            template: __webpack_require__(/*! ./view-property.component.html */ "./src/app/properties/view-property/view-property.component.html"),
            styles: [__webpack_require__(/*! ./view-property.component.css */ "./src/app/properties/view-property/view-property.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_rate_service__WEBPACK_IMPORTED_MODULE_4__["RateService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_property_service__WEBPACK_IMPORTED_MODULE_2__["PropertyService"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], ViewPropertyComponent);
    return ViewPropertyComponent;
}());



/***/ }),

/***/ "./src/app/services/admin.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/admin.service.ts ***!
  \*******************************************/
/*! exports provided: AdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminService", function() { return AdminService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_error_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/error.service */ "./src/app/services/error.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminService = /** @class */ (function () {
    function AdminService(http, errorService) {
        this.http = http;
        this.errorService = errorService;
        this.rootUrl = '/admins/';
    }
    AdminService.prototype.getUsers = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Authorization': localStorage.getItem('token') });
        return this.http.get(this.rootUrl + 'users', { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response.json();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            _this.errorService.handleError(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        }));
    };
    AdminService.prototype.setData = function (user) {
        var _this = this;
        var body = JSON.stringify(user);
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json', 'Authorization': localStorage.getItem('token') });
        return this.http.patch(this.rootUrl + 'admin', body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            _this.errorService.handleError(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        }));
    };
    AdminService.prototype.setBan = function (user) {
        var _this = this;
        var body = JSON.stringify(user);
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json', 'Authorization': localStorage.getItem('token') });
        return this.http.patch(this.rootUrl + 'ban', body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            _this.errorService.handleError(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        }));
    };
    AdminService.prototype.deleteProp = function (prop) {
        var _this = this;
        var body = JSON.stringify(prop);
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json', 'Authorization': localStorage.getItem('token') });
        return this.http.post(this.rootUrl + 'delete', body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            _this.errorService.handleError(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        }));
    };
    AdminService.prototype.getPropeties = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Authorization': localStorage.getItem('token') });
        return this.http.get(this.rootUrl + 'properties', { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response.json();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            _this.errorService.handleError(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        }));
    };
    AdminService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _services_error_service__WEBPACK_IMPORTED_MODULE_4__["ErrorService"]])
    ], AdminService);
    return AdminService;
}());



/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (!this.auth.isLoggedIn()) {
            this.router.navigateByUrl('/users/login');
            return false;
        }
        return true;
    };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/services/error.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/error.service.ts ***!
  \*******************************************/
/*! exports provided: ErrorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorService", function() { return ErrorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_error_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/error.model */ "./src/app/model/error.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ErrorService = /** @class */ (function () {
    function ErrorService() {
        this.errorOccurred = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ErrorService.prototype.handleError = function (error) {
        var errorData = new _model_error_model__WEBPACK_IMPORTED_MODULE_1__["Error"](error.status, error._body);
        this.errorOccurred.emit(errorData);
    };
    ErrorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], ErrorService);
    return ErrorService;
}());



/***/ }),

/***/ "./src/app/services/property.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/property.service.ts ***!
  \**********************************************/
/*! exports provided: PropertyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyService", function() { return PropertyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_error_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/error.service */ "./src/app/services/error.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PropertyService = /** @class */ (function () {
    function PropertyService(http, errorService) {
        this.http = http;
        this.errorService = errorService;
        this.rootUrl = '/propertie/';
        this.imageURL = '/uploads/properties/';
        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0);
        this.currentMessage = this.messageSource.asObservable();
    }
    PropertyService.prototype.changeMessage = function (data) {
        this.messageSource.next(data);
    };
    PropertyService.prototype.addProperty = function (property, file1, file2, file3, file4) {
        var _this = this;
        var body = JSON.stringify(property);
        var formData = new FormData();
        formData.append('thisProp', body);
        if (file1 != null)
            formData.append('photo', file1, file1.name);
        if (file2 != null)
            formData.append('photo', file2, file2.name);
        if (file3 != null)
            formData.append('photo', file3, file3.name);
        if (file4 != null)
            formData.append('photo', file4, file4.name);
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Authorization': localStorage.getItem('token') });
        return this.http.post(this.rootUrl + 'add', formData, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            _this.errorService.handleError(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        }));
    };
    PropertyService.prototype.saveProperty = function (id, property, file1, file2, file3, file4) {
        var _this = this;
        var body = JSON.stringify(property);
        var formData = new FormData();
        formData.append('thisProp', body);
        if (file1 != null)
            formData.append('photo', file1, file1.name);
        if (file2 != null)
            formData.append('photo', file2, file2.name);
        if (file3 != null)
            formData.append('photo', file3, file3.name);
        if (file4 != null)
            formData.append('photo', file4, file4.name);
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Authorization': localStorage.getItem('token') });
        return this.http.patch(this.rootUrl + 'edit/' + id, formData, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            _this.errorService.handleError(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        }));
    };
    PropertyService.prototype.getAllProperties = function (params) {
        var _this = this;
        return this.http.get(this.rootUrl + 'all', params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response.json();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            _this.errorService.handleError(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        }));
    };
    PropertyService.prototype.viewProperty = function (id) {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Authorization': localStorage.getItem('token') });
        return this.http.get(this.rootUrl + 'view/' + id, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response.json();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            _this.errorService.handleError(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        }));
    };
    PropertyService.prototype.deleteProperty = function (id) {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Authorization': localStorage.getItem('token') });
        return this.http.delete(this.rootUrl + 'delete/' + id, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response.json();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            _this.errorService.handleError(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        }));
    };
    PropertyService.prototype.getImateUrl = function (name) {
        return this.imageURL + name;
    };
    /*
    getImageFile(url:string)
    {
      const options = { responseType: ResponseContentType.Blob};
      return this.http.get(url,options).pipe(
        map((response: Response) => {
            return response.blob();
        }) ,catchError((error: Response) => {
          this.errorService.handleError(error);
          return throwError(error);
      })
    );
    }
    
    new File([data], this.prop.image1,{type:data.type, lastModified: Date.now()});
    */
    PropertyService.prototype.editProperty = function (id) {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Authorization': localStorage.getItem('token') });
        return this.http.get(this.rootUrl + 'edit/' + id, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response.json();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            _this.errorService.handleError(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        }));
    };
    PropertyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _services_error_service__WEBPACK_IMPORTED_MODULE_4__["ErrorService"]])
    ], PropertyService);
    return PropertyService;
}());



/***/ }),

/***/ "./src/app/services/rate.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/rate.service.ts ***!
  \******************************************/
/*! exports provided: RateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RateService", function() { return RateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_error_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/error.service */ "./src/app/services/error.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RateService = /** @class */ (function () {
    function RateService(http, errorService) {
        this.http = http;
        this.errorService = errorService;
        this.rootUrl = '/ratings/';
    }
    RateService.prototype.getStars = function (id) {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Authorization': localStorage.getItem('token') });
        return this.http.get(this.rootUrl + 'stared/' + id, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response.json();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            _this.errorService.handleError(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        }));
    };
    RateService.prototype.postStars = function (star) {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json', 'Authorization': localStorage.getItem('token') });
        var body = JSON.stringify(star);
        return this.http.post(this.rootUrl + 'change', body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            _this.errorService.handleError(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        }));
    };
    RateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _services_error_service__WEBPACK_IMPORTED_MODULE_4__["ErrorService"]])
    ], RateService);
    return RateService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_error_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/error.service */ "./src/app/services/error.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserService = /** @class */ (function () {
    function UserService(http, errorService) {
        this.http = http;
        this.errorService = errorService;
        this.rootUrl = '/user/';
        this.rootImage = '/uploads/avatars/';
        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0);
        this.currentMessage = this.messageSource.asObservable();
    }
    UserService.prototype.changeMessage = function (user) {
        this.messageSource.next(user);
    };
    UserService.prototype.changePass = function (user) {
        var _this = this;
        var body = JSON.stringify(user);
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json', 'Authorization': localStorage.getItem('token') });
        return this.http.post(this.rootUrl + 'password', body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            _this.errorService.handleError(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        }));
    };
    UserService.prototype.register = function (user) {
        var _this = this;
        var body = JSON.stringify(user);
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        return this.http.post(this.rootUrl + 'register', body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            _this.errorService.handleError(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        }));
    };
    UserService.prototype.login = function (user) {
        var _this = this;
        var body = JSON.stringify(user);
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        return this.http.post(this.rootUrl + 'login', body, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            _this.errorService.handleError(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        }));
    };
    UserService.prototype.getProfile = function (userName) {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Authorization': localStorage.getItem('token') });
        return this.http.get(this.rootUrl + 'profile/' + userName, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response.json();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            _this.errorService.handleError(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        }));
    };
    UserService.prototype.getAvatarURL = function (url) {
        return this.rootImage + url;
    };
    UserService.prototype.getSettings = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'multipart/form-data', 'Authorization': localStorage.getItem('token') });
        return this.http.get(this.rootUrl + 'settings', { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response.json();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            _this.errorService.handleError(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        }));
    };
    UserService.prototype.getProperties = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'multipart/form-data', 'Authorization': localStorage.getItem('token') });
        return this.http.get(this.rootUrl + 'property', { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response.json();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            _this.errorService.handleError(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        }));
    };
    UserService.prototype.setSettings = function (user, fileToUpload) {
        var _this = this;
        var body = JSON.stringify(user);
        var formData = new FormData();
        if (fileToUpload != null)
            formData.append('avatar', fileToUpload, fileToUpload.name);
        formData.append('thisUser', body);
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Authorization': localStorage.getItem('token') });
        return this.http.post(this.rootUrl + 'settings', formData, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            _this.errorService.handleError(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        }));
    };
    UserService.prototype.logout = function () {
        localStorage.clear();
        this.changeMessage(1);
    };
    UserService.prototype.isLoggedIn = function () {
        return localStorage.getItem('token') !== null;
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _services_error_service__WEBPACK_IMPORTED_MODULE_4__["ErrorService"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/users/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/users/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#pozadina {\r\n  height: 100%;\r\n}\r\n\r\n#pozadina {\r\n  display: flex;\r\n  -ms-flex-align: center;\r\n  -ms-flex-pack: center;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding-top: 40px;\r\n  padding-bottom: 40px;\r\n}\r\n\r\n.form-signin {\r\n  width: 100%;\r\n  max-width: 330px;\r\n  padding: 15px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.form-signin .checkbox {\r\n  font-weight: 400;\r\n}\r\n\r\n.form-signin .form-control {\r\n  position: relative;\r\n  box-sizing: border-box;\r\n  height: auto;\r\n  padding: 10px;\r\n  font-size: 16px;\r\n}\r\n\r\n.form-signin .form-control:focus {\r\n  z-index: 2;\r\n}\r\n\r\n.form-signin input[type=\"email\"] {\r\n  margin-bottom: -1px;\r\n  border-bottom-right-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n}\r\n\r\n.form-signin input[type=\"password\"] {\r\n  margin-bottom: 10px;\r\n  border-top-left-radius: 0;\r\n  border-top-right-radius: 0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/users/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/users/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"pozadina\" class=\"text-center\">\n  <form class=\"form-signin\" [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n    <img class=\"mb-4\" src=\"../assets/images/house.png\" alt=\"\" width=\"128\" height=\"128\">\n    <h1 class=\"h3 mb-3 font-weight-normal\">Please sign in</h1>\n    <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\n    <input type=\"email\" id=\"inputEmail\" formControlName=\"email\" class=\"form-control\" placeholder=\"Email address\" required=\"\" autofocus=\"\">\n    <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n    <input type=\"password\" id=\"inputPassword\" formControlName=\"password\" class=\"form-control\" placeholder=\"Password\" required=\"\">\n    <button class=\"btn btn-lg btn-primary btn-block\" [disabled]=\"!form.valid\" type=\"submit\">Login</button>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/users/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/users/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _model_user_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../model/user.model */ "./src/app/model/user.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//upravjanje formama i rutovanje


//servisi


//modeli

var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, userSer, toastr) {
        this.router = router;
        this.userSer = userSer;
        this.toastr = toastr;
    }
    LoginComponent.prototype.ngOnInit = function () {
        //dodela inicijalne vrednosti i validacija
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]),
        });
    };
    //kada korisnik pritisne dugme za prijavu
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        var user = new _model_user_model__WEBPACK_IMPORTED_MODULE_5__["User"](this.form.value.email, this.form.value.password);
        //pozivamo login s datim podacima
        this.userSer.login(user)
            .subscribe(
        //kada primimo podatke
        function (data) {
            //resetujemo inpute forme
            _this.form.reset();
            //upisujemo korisniku token
            localStorage.setItem('token', data.token);
            //obavestavamo o uspesnom prijavljivanju
            _this.toastr.success('Log in successful!', '', {
                closeButton: true,
                positionClass: 'toast-bottom-right'
            });
            //saljemo ga na homepage
            _this.router.navigate(['/']);
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/users/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/users/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/users/my-property/my-property.component.css":
/*!*************************************************************!*\
  !*** ./src/app/users/my-property/my-property.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".newAdd:hover{\r\n    opacity: 0.6;\r\n}\r\n\r\n.fixSize{\r\n    height: 160px;\r\n}\r\n\r\n.card .over{\r\n    visibility: hidden;\r\n}\r\n\r\n.card:hover .over{\r\n    visibility: visible;\r\n}\r\n\r\n.card:hover{\r\n    opacity: 0.6;\r\n}\r\n\r\n.card .over2{\r\n    visibility: hidden;\r\n}\r\n\r\n.card:hover .over2{\r\n    visibility: visible;\r\n}\r\n\r\n.over{\r\n    position: absolute;\r\n    top: 40%;\r\n    left: 30%;\r\n    width: 40px;\r\n    height: 40px;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    -ms-transform: translate(-50%, -50%);\r\n    border: none;\r\n    cursor: pointer;\r\n}\r\n\r\n.delet{\r\n    position: absolute;\r\n    top: 0%;\r\n    left: 96%;\r\n    width: 34px;\r\n    height: 34px;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    -ms-transform: translate(-50%, -50%);\r\n    border: none;\r\n    cursor: pointer;\r\n}\r\n\r\n.over2{\r\n    position: absolute;\r\n    top: 40%;\r\n    left: 70%;\r\n    width: 40px;\r\n    height: 40px;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    -ms-transform: translate(-50%, -50%);\r\n    border: none;\r\n    cursor: pointer;\r\n}"

/***/ }),

/***/ "./src/app/users/my-property/my-property.component.html":
/*!**************************************************************!*\
  !*** ./src/app/users/my-property/my-property.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"max-width:900px; text-align:center;\">\n<h2>My Apartments</h2>\n\n  \n<div class=\"card\" *ngFor=\"let prop of propArray\" style=\"width: 13rem; margin:5px 7px 5px; display:inline-block;\">\n  <img class=\"card-img-top fixSize\" [src]=\"getImage(prop)\" alt=\"Card image cap\">\n  <img src=\"../../../assets/images/clear.png\" class=\"delet\" (click)=\"deleteProp(prop)\">\n  <img src=\"../../../assets/images/view.png\" class=\"over\" (click)=\"viewProp(prop)\">\n  <img src=\"../../../assets/images/edit.png\" class=\"over2\" (click)=\"editProp(prop)\">\n  <div class=\"card-body\" style=\"padding-top:5px;\">\n    <h6 class=\"card-subtitle text-truncate\">{{prop.title}}</h6>\n  </div>\n</div>\n\n\n<div class=\"card newAdd\" (click)=\"goForNew()\"  style=\"width: 13rem; border:none; display:inline-block;\">\n    <img class=\"card-img-top\" src=\"../../../assets/images/addnew.png\" alt=\"Card image cap\">\n    <div class=\"card-body\" style=\"padding-top:0px;\">\n      <h5 class=\"card-title\">create new</h5>\n    </div>\n  </div>\n\n  </div>"

/***/ }),

/***/ "./src/app/users/my-property/my-property.component.ts":
/*!************************************************************!*\
  !*** ./src/app/users/my-property/my-property.component.ts ***!
  \************************************************************/
/*! exports provided: MyPropertyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyPropertyComponent", function() { return MyPropertyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_property_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/property.service */ "./src/app/services/property.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//rutovanje

//servisi


var MyPropertyComponent = /** @class */ (function () {
    function MyPropertyComponent(propSer, router, userSer) {
        this.propSer = propSer;
        this.router = router;
        this.userSer = userSer;
        //kada se vracamo s add ili edita
        this.readData = 1;
    }
    MyPropertyComponent.prototype.ngOnInit = function () {
        var _this = this;
        //proveravamo da li je korisnik dodao ili izmenio apartman
        this.propSer.currentMessage.subscribe(function (message) {
            //ako jeste ponovo ucitavamo podatke
            if (message == 1) {
                _this.readData = 1;
                _this.getData();
            }
        });
        //ucitavamo podatke prvi put
        this.getData();
    };
    //ucitavanje podataka niza korisnikovih apartmana
    MyPropertyComponent.prototype.getData = function () {
        var _this = this;
        if (this.readData == 1) {
            this.readData = 0;
            this.userSer.getProperties().subscribe(function (data) { _this.propArray = data.obj; });
        }
    };
    //brisanje apartmana
    MyPropertyComponent.prototype.deleteProp = function (prop) {
        //brisemo ga iz baze podataka
        this.propSer.deleteProperty(prop._id).subscribe();
        //i iz niza koji je prikazan korisniku
        var index = this.propArray.indexOf(prop);
        if (index > -1) {
            this.propArray.splice(index, 1);
        }
    };
    //trazimo prvi sliku u partmanu
    MyPropertyComponent.prototype.getImage = function (prop) {
        var urlToImg;
        if (prop.image1 != "no")
            urlToImg = prop.image1;
        else if (prop.image2 != "no")
            urlToImg = prop.image2;
        else if (prop.image3 != "no")
            urlToImg = prop.image3;
        else if (prop.image4 != "no")
            urlToImg = prop.image4;
        else
            urlToImg = "no";
        //vracamo njen URL
        return this.propSer.getImateUrl(urlToImg);
    };
    //metode koje vode ka drugim putanjama
    MyPropertyComponent.prototype.viewProp = function (prop) {
        this.router.navigate(['/properties/view', prop._id]);
    };
    MyPropertyComponent.prototype.editProp = function (prop) {
        this.router.navigate(['/properties/edit', prop._id]);
    };
    MyPropertyComponent.prototype.goForNew = function () {
        this.router.navigate(['/properties/add']);
    };
    MyPropertyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-property',
            template: __webpack_require__(/*! ./my-property.component.html */ "./src/app/users/my-property/my-property.component.html"),
            styles: [__webpack_require__(/*! ./my-property.component.css */ "./src/app/users/my-property/my-property.component.css")]
        }),
        __metadata("design:paramtypes", [_services_property_service__WEBPACK_IMPORTED_MODULE_3__["PropertyService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], MyPropertyComponent);
    return MyPropertyComponent;
}());



/***/ }),

/***/ "./src/app/users/password/password.component.css":
/*!*******************************************************!*\
  !*** ./src/app/users/password/password.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  \r\n  #pozadina {\r\n    height: 100%;\r\n    display: flex;\r\n    -ms-flex-align: center;\r\n    -ms-flex-pack: center;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding-top: 40px;\r\n    padding-bottom: 40px;\r\n  }\r\n  .toLeft{\r\n    text-align: left!important;\r\n  }\r\n  .form-signin {\r\n    width: 100%;\r\n    max-width: 330px;\r\n    padding: 15px;\r\n    margin: 0 auto;\r\n  }\r\n  .form-signin .checkbox {\r\n    font-weight: 400;\r\n  }\r\n  .form-signin .form-control {\r\n    position: relative;\r\n    box-sizing: border-box;\r\n    height: auto;\r\n    padding: 10px;\r\n    font-size: 16px;\r\n  }\r\n  .form-signin .form-control:focus {\r\n    z-index: 2;\r\n  }\r\n  .form-signin input[type=\"password\"] {\r\n    margin-top: 10px;\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/users/password/password.component.html":
/*!********************************************************!*\
  !*** ./src/app/users/password/password.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"pozadina\" class=\"text-center\">\n    <form class=\"form-signin\" [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n      <h1 class=\"h3 mb-3 font-weight-normal\">Change password</h1>\n      <label for=\"inputEmail\" class=\"sr-only\">Old password</label>\n      <input type=\"password\" id=\"inputEmail\" formControlName=\"oldpassword\" class=\"form-control\" placeholder=\"Old password\" required=\"\" autofocus=\"\">\n      <div *ngIf=\"form.controls['oldpassword'].errors && !form.controls['oldpassword'].pristine\" class=\"error-msg\">\n          <div class='toLeft' [hidden]=\"!form.controls['oldpassword'].errors.required\">\n              Old password is required.\n          </div>\n          <div class='toLeft' [hidden]=\"!form.controls['oldpassword'].errors.minlength\">\n              Old password is too short.\n          </div>\n      </div>\n      <label for=\"inputPassword\" class=\"sr-only\">New password</label>\n      <input type=\"password\" id=\"inputPassword\" formControlName=\"password\" class=\"form-control\" placeholder=\"New password\" required=\"\">\n      <div *ngIf=\"form.controls['password'].errors && !form.controls['password'].pristine\" class=\"error-msg\">\n          <div class='toLeft' [hidden]=\"!form.controls['password'].errors.required\">\n              Valid password is required.\n          </div>\n          <div class='toLeft' [hidden]=\"!form.controls['password'].errors.minlength\">\n              Password is too short.\n          </div>\n      </div>\n      <label for=\"inputPassword\" class=\"sr-only\">Confirm password</label>\n      <input type=\"password\" id=\"confirmPassword\" formControlName=\"cpassword\" class=\"form-control\" placeholder=\"Confirm password\" required=\"\">\n      <div *ngIf=\"form.controls['cpassword'].errors && !form.controls['cpassword'].pristine\" class=\"error-msg\">\n          <div class='toLeft' [hidden]=\"!form.controls['cpassword'].errors.required\">\n              Confirm password is required.\n          </div>\n      </div>\n      <div class='toLeft' *ngIf=\"form.controls['password'].value!=form.controls['cpassword'].value\">\n          Passwords doesn't match.\n        </div>\n      <button class=\"btn btn-lg btn-danger btn-block\" style=\"margin-top:10px;\" [disabled]=\"!form.valid||form.controls['password'].value!=form.controls['cpassword'].value\" type=\"submit\">change</button>\n    </form>\n  \n  \n  </div>"

/***/ }),

/***/ "./src/app/users/password/password.component.ts":
/*!******************************************************!*\
  !*** ./src/app/users/password/password.component.ts ***!
  \******************************************************/
/*! exports provided: PasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordComponent", function() { return PasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//upravljanje formom i rutiranje


//servisi


var PasswordComponent = /** @class */ (function () {
    function PasswordComponent(router, userSer, toastr) {
        this.router = router;
        this.userSer = userSer;
        this.toastr = toastr;
    }
    PasswordComponent.prototype.ngOnInit = function () {
        //inicijalizovanje null vrednosti za inpute i validaicja
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            oldpassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]),
            cpassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]),
        });
    };
    //kada korisnik pritisne submit
    PasswordComponent.prototype.onSubmit = function () {
        var _this = this;
        //uzimamo staru i novu sifru
        var data = {
            old: this.form.value.oldpassword,
            new: this.form.value.password,
        };
        //prosledjujemo ih serveru
        this.userSer.changePass(data).subscribe(function (data) {
            //kada on odgovori obavestavamo korisnila
            _this.toastr.success("Password changed!", '', {
                closeButton: true,
                positionClass: 'toast-bottom-right'
            });
            //i zahtevamo da se ponovo prijavi
            _this.userSer.logout();
            _this.router.navigate(['/users/login']);
        });
    };
    PasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-password',
            template: __webpack_require__(/*! ./password.component.html */ "./src/app/users/password/password.component.html"),
            styles: [__webpack_require__(/*! ./password.component.css */ "./src/app/users/password/password.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], PasswordComponent);
    return PasswordComponent;
}());



/***/ }),

/***/ "./src/app/users/profile/profile.component.css":
/*!*****************************************************!*\
  !*** ./src/app/users/profile/profile.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');\r\n@media only screen and (max-width: 576px) {\r\n     .container{\r\n        padding-top:0px;\r\n    }\r\n}\r\n@media only screen and (min-width: 576px) {\r\n    .container{\r\n       padding-top:60px;\r\n   }\r\n}\r\ntable tr td{\r\n    color:#382434;\r\n    font-family: 'Source Sans Pro', sans-serif;\r\n}\r\n.table-hover>tbody>tr.no-hover:hover {\r\n    background-color: #ffffff;\r\n}\r\n.text-center{\r\n    position:relative;\r\n}\r\n.img-thumbnail{\r\n    width: 260px;\r\n    height: 260px;\r\n}\r\n.avatar{\r\n    margin-top:12px;\r\n    margin-bottom: 15px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/users/profile/profile.component.html":
/*!******************************************************!*\
  !*** ./src/app/users/profile/profile.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"isDataLoaded\" style=\"margin:0 auto 5px; max-width:900px;\">\n   <div class=\"row\" style=\"margin-top:40px;\">\n    <!-- left column -->\n    <div class=\"col-md-4 col-sm-6 col-xs-12\">\n      <div class=\"text-center\">\n              <img  [src]=\"url\" class=\"avatar images rounded-circle img-thumbnail\" alt=\"avatar\">\n              <star-rating [starType]=\"'svg'\" [speed]=\"'slow'\" [size]=\"'large'\" [rating]=\"star\" [disabled]=\"true\"></star-rating>\n      </div>\n    </div>\n    <!-- edit form column -->\n    <div class=\"col-md-8 col-sm-6 col-xs-12 personal-info\">\n      <table class=\"table table-user-information table-hover\">\n        <tbody>\n          <tr>\n            <td>First name:</td>\n            <td>{{users.firstName}}</td>\n          </tr>\n          <tr>\n            <td>Last name:</td>\n            <td>{{users.lastName}}</td>\n          </tr>\n          <tr>\n            <td>Username:</td>\n            <td>{{users.userName}}</td>\n          </tr>\n          <tr>\n            <td>Email:</td>\n            <td>{{users.email}}</td>\n          </tr>\n          <tr>\n            <td>Phone:</td>\n            <td>{{users.phone}}</td>\n          </tr>\n          <tr>\n            <td>Address:</td>\n            <td>{{users.street}}</td>\n          </tr>\n          <tr>\n            <td>Address2:</td>\n            <td>{{users.street2}}</td>\n          </tr>\n          <tr class=\"no-hover\"> \n            <td></td>\n            <td><button *ngIf=\"itIsMe()\" type=\"button\" (click)=\"settings()\" class=\"btn btn-success\">Edit your profile</button></td>\n          </tr>\n        </tbody>\n      </table>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/users/profile/profile.component.ts":
/*!****************************************************!*\
  !*** ./src/app/users/profile/profile.component.ts ***!
  \****************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//obrada rute i parametara

//korisnicki servis

var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(router, route, userSer) {
        this.router = router;
        this.route = route;
        this.userSer = userSer;
        this.star = 0; //rating zvezdica
        this.me = null; //da li je to njegov profil
        this.isDataLoaded = false; //da li su podaci ucitani
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        //uzimamo parametar url adresa
        this.route.paramMap.subscribe(function (params) {
            _this.taken = params.get('username');
            //podatke korisnikovog profila
            _this.userSer.getProfile(_this.taken).subscribe(function (data) {
                //ukoliko ima ocen u dolelicemo je
                if (data.star != null)
                    _this.star = data.star;
                //ucitavamo licne podatke
                _this.users = data.user;
                //da li je u pitanju korisnik ciji je profil
                _this.me = data.me;
                //uzimamo celu url adresu slike
                _this.url = _this.userSer.getAvatarURL(_this.users.avatar);
                //ako nema druge adrese ispisacemo none
                if (_this.users.street2 == null)
                    _this.users.street2 = 'none';
                _this.isDataLoaded = true;
            });
        });
    };
    //u slucaju da je u pitanju isti korisnik prikazujemo dugme za editovanje profila
    ProfileComponent.prototype.itIsMe = function () { return this.users.userName == this.me; };
    //to dugme vodi na putanju za editovanje profila
    ProfileComponent.prototype.settings = function () { this.router.navigate(['/users/settings']); };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/users/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/users/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/users/register/register.component.css":
/*!*******************************************************!*\
  !*** ./src/app/users/register/register.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* latin-ext */\r\n@font-face {\r\n  font-family: 'Fjalla One';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Fjalla One'), local('FjallaOne-Regular'), url(https://fonts.gstatic.com/s/fjallaone/v5/Yq6R-LCAWCX3-6Ky7FAFrO96kigt.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Fjalla One';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Fjalla One'), local('FjallaOne-Regular'), url(https://fonts.gstatic.com/s/fjallaone/v5/Yq6R-LCAWCX3-6Ky7FAFrOF6kg.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* cyrillic-ext */\r\n@font-face {\r\n  font-family: 'Roboto Condensed';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Roboto Condensed'), local('RobotoCondensed-Regular'), url(https://fonts.gstatic.com/s/robotocondensed/v16/ieVl2ZhZI2eCN5jzbjEETS9weq8-19-7DRs5.woff2) format('woff2');\r\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\r\n}\r\n/* cyrillic */\r\n@font-face {\r\n  font-family: 'Roboto Condensed';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Roboto Condensed'), local('RobotoCondensed-Regular'), url(https://fonts.gstatic.com/s/robotocondensed/v16/ieVl2ZhZI2eCN5jzbjEETS9weq8-19a7DRs5.woff2) format('woff2');\r\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\r\n}\r\n/* greek-ext */\r\n@font-face {\r\n  font-family: 'Roboto Condensed';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Roboto Condensed'), local('RobotoCondensed-Regular'), url(https://fonts.gstatic.com/s/robotocondensed/v16/ieVl2ZhZI2eCN5jzbjEETS9weq8-1967DRs5.woff2) format('woff2');\r\n  unicode-range: U+1F00-1FFF;\r\n}\r\n/* greek */\r\n@font-face {\r\n  font-family: 'Roboto Condensed';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Roboto Condensed'), local('RobotoCondensed-Regular'), url(https://fonts.gstatic.com/s/robotocondensed/v16/ieVl2ZhZI2eCN5jzbjEETS9weq8-19G7DRs5.woff2) format('woff2');\r\n  unicode-range: U+0370-03FF;\r\n}\r\n/* vietnamese */\r\n@font-face {\r\n  font-family: 'Roboto Condensed';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Roboto Condensed'), local('RobotoCondensed-Regular'), url(https://fonts.gstatic.com/s/robotocondensed/v16/ieVl2ZhZI2eCN5jzbjEETS9weq8-1927DRs5.woff2) format('woff2');\r\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Roboto Condensed';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Roboto Condensed'), local('RobotoCondensed-Regular'), url(https://fonts.gstatic.com/s/robotocondensed/v16/ieVl2ZhZI2eCN5jzbjEETS9weq8-19y7DRs5.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Roboto Condensed';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Roboto Condensed'), local('RobotoCondensed-Regular'), url(https://fonts.gstatic.com/s/robotocondensed/v16/ieVl2ZhZI2eCN5jzbjEETS9weq8-19K7DQ.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n@media only screen and (max-width: 768px) {\r\n    #idemo {\r\n        display: none;\r\n    }\r\n}\r\n.container {\r\n    max-width: 900px;\r\n    margin-top: 20px;\r\n  }\r\np{\r\n    font-family: 'Roboto Condensed', sans-serif;\r\n  }\r\nlabel{\r\n    font-family: 'Fjalla One', sans-serif;\r\n  }\r\n.border-top { border-top: 1px solid #e5e5e5; }\r\n.border-bottom { border-bottom: 1px solid #e5e5e5; }\r\n.border-top-gray { border-top-color: #adb5bd; }\r\n.box-shadow { box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05); }\r\n.lh-condensed { line-height: 1.25; }\r\n  "

/***/ }),

/***/ "./src/app/users/register/register.component.html":
/*!********************************************************!*\
  !*** ./src/app/users/register/register.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<div class=\"row\">\n    <div id=\"idemo\" class=\"col-md-6 mb-3\" style=\"text-align:center; max-width:350px;\">\n        <img class=\"mb-4\" src=\"../assets/images/house.png\" alt=\"\" width=\"128\" height=\"128\">\n        <p>In consideration of Your access to and use of the Service, You agree to provide true, accurate,\n           current and complete information about yourself \n          and notify us of any changes to previously submitted registration data.\n          If You provide any information that is false, incomplete or otherwise inaccurate, or we have\n          a reasonable basis to suspect that such inaccurate information has been provided, we have the \n          right to deny, suspend, or terminate Your account and refuse any and all current or future use \n          of the Service (or any portion thereof).</p>\n    </div>\n        <form class=\"needs-validation col-md-6 mb-3\" [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n            <h4 class=\"mb-3\">Registration form</h4>\n          <div class=\"row\">\n            <div class=\"col-md-6 mb-3\">\n              <label for=\"firstName\">First name</label>\n              <input type=\"text\" class=\"form-control\" id=\"firstName\" formControlName=\"firstName\">\n                  <div *ngIf=\"form.controls['firstName'].errors && !form.controls['firstName'].pristine\" class=\"error-msg\">\n                      <div [hidden]=\"!form.controls['firstName'].errors.required\">\n                          Valid first name is required.\n                      </div>\n                      <div [hidden]=\"!form.controls['firstName'].errors.minlength\">\n                          Fist name is too short.\n                      </div>\n                  </div>\n            </div>\n            <div class=\"col-md-6 mb-3\">\n              <label for=\"lastName\">Last name</label>\n              <input type=\"text\" class=\"form-control\" id=\"lastName\" formControlName=\"lastName\">\n              <div *ngIf=\"form.controls['lastName'].errors && !form.controls['lastName'].pristine\" class=\"error-msg\">\n                <div [hidden]=\"!form.controls['lastName'].errors.required\">\n                    Valid last name is required.\n                </div>\n                <div [hidden]=\"!form.controls['lastName'].errors.minlength\">\n                    Last name is too short.\n                </div>\n            </div>\n            </div>\n          </div>\n\n          <div class=\"mb-3\">\n            <label for=\"username\">Username</label>\n            <div class=\"input-group\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\">@</span>\n              </div>\n              <input type=\"text\" class=\"form-control\" id=\"userName\" placeholder=\"Username\" formControlName=\"userName\">\n            </div>\n            <div *ngIf=\"form.controls['userName'].errors && !form.controls['userName'].pristine\" class=\"error-msg\">\n              <div [hidden]=\"!form.controls['userName'].errors.required\">\n                  Valid username is required.\n              </div>\n              <div [hidden]=\"!form.controls['userName'].errors.minlength\">\n                  Username is too short.\n              </div>\n          </div>\n          </div>\n\n          <div class=\"mb-3\">\n              <label for=\"email\">Password</label>\n              <input type=\"password\" class=\"form-control\" id=\"passw\" formControlName=\"password\">\n              <div *ngIf=\"form.controls['password'].errors && !form.controls['password'].pristine\" class=\"error-msg\">\n                <div [hidden]=\"!form.controls['password'].errors.required\">\n                    Valid password is required.\n                </div>\n                <div [hidden]=\"!form.controls['password'].errors.minlength\">\n                    Password is too short.\n                </div>\n            </div>\n            </div>\n            <div class=\"mb-3\">\n                <label for=\"email\">Confirm password</label>\n                <input type=\"password\" class=\"form-control\" id=\"cpassw\" formControlName=\"cpassword\">\n                <div *ngIf=\"form.controls['cpassword'].errors && !form.controls['cpassword'].pristine\" class=\"error-msg\">\n                  <div [hidden]=\"!form.controls['cpassword'].errors.required\">\n                      Please confirm password.\n                  </div>\n              </div>\n              <div *ngIf=\"form.controls['password'].value!=form.controls['cpassword'].value\">\n                Passwords doesn't match.\n              </div>\n              </div>\n          <div class=\"mb-3\">\n            <label for=\"email\">Email</label>\n            <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"you@example.com\" formControlName=\"email\">\n            <div *ngIf=\"form.controls['email'].errors && !form.controls['email'].pristine\" class=\"error-msg\">\n              <div [hidden]=\"!form.controls['email'].errors.required\">\n                  Valid email is required.\n              </div>\n              <div [hidden]=\"!form.controls['email'].errors.email\">\n                Valid email is required.\n            </div>\n          </div>\n          </div>\n\n          <div class=\"mb-3\">\n            <label for=\"tel\">Phone number</label>\n            <input type=\"tel\" class=\"form-control\" id=\"tel\" placeholder=\"+381655555555\" formControlName=\"phone\">\n            <div *ngIf=\"form.controls['phone'].errors && !form.controls['phone'].pristine\" class=\"error-msg\">\n              <div [hidden]=\"!form.controls['phone'].errors.required\">\n                  Valid phone number is required.\n              </div>\n              <div [hidden]=\"!form.controls['phone'].errors.minlength\">\n                  Phone number is too short.\n              </div>\n          </div>\n          </div>\n\n          <div class=\"mb-3\">\n            <label for=\"address\">Address</label>\n            <input type=\"text\" class=\"form-control\" id=\"address\" placeholder=\"Bulevar oslobodjenja\" formControlName=\"street\" required=\"\">\n            <div *ngIf=\"form.controls['street'].errors && !form.controls['street'].pristine\" class=\"error-msg\">\n              <div [hidden]=\"!form.controls['street'].errors.required\">\n                  Valid address is required.\n              </div>\n              <div [hidden]=\"!form.controls['street'].errors.minlength\">\n                  Address is too short.\n              </div>\n          </div>\n          </div>\n\n          <div class=\"mb-3\">\n            <label for=\"address2\">Address 2 <span class=\"text-muted\">(Optional)</span></label>\n            <input type=\"text\" class=\"form-control\" id=\"address2\" placeholder=\"Apartment or suite\" formControlName=\"street2\">\n          </div>\n\n          <hr class=\"mb-4\">\n          <button class=\"btn btn-primary btn-lg btn-block\" type=\"submit\" [disabled]=\"!form.valid||form.controls['password'].value!=form.controls['cpassword'].value\">Register</button>\n        </form>\n        </div>\n</div>"

/***/ }),

/***/ "./src/app/users/register/register.component.ts":
/*!******************************************************!*\
  !*** ./src/app/users/register/register.component.ts ***!
  \******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _model_user_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../model/user.model */ "./src/app/model/user.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//upravjanje formama i rutovanje


//servisi

//modeli

var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, userSer) {
        this.router = router;
        this.userSer = userSer;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        //inicijalizovanje null vrednosti inputa i validancija
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]),
            userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]),
            cpassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)]),
            street: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)]),
            street2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
        });
    };
    RegisterComponent.prototype.onSubmit = function () {
        //kreiranje objekta
        var user = new _model_user_model__WEBPACK_IMPORTED_MODULE_4__["User"](this.form.value.email, this.form.value.password, this.form.value.firstName, this.form.value.lastName, this.form.value.userName.toLowerCase(), this.form.value.phone, this.form.value.street, this.form.value.street2);
        //poziv putanje za registraciju korisnika
        this.userSer.register(user).subscribe();
        //resetujemo inpute
        this.form.reset();
        //saljemo korisnika da se loguke
        this.router.navigate(['/users/login']);
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/users/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/users/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/users/settings/settings.component.css":
/*!*******************************************************!*\
  !*** ./src/app/users/settings/settings.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media only screen and (max-width: 576px) {\r\n    .container{\r\n       padding-top:0px;\r\n   }\r\n}\r\n@media only screen and (min-width: 576px) {\r\n   .container{\r\n      padding-top:30px;\r\n  }\r\n}\r\n.text-center{\r\n    position:relative;\r\n}\r\n.text-center .kamera {\r\n    position: absolute;\r\n    top: 73%;\r\n    left: 70%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    -ms-transform: translate(-50%, -50%);\r\n    border: none;\r\n    cursor: pointer;\r\n}\r\n.taster{\r\n    cursor: pointer;\r\n}\r\n.img-thumbnail{\r\n    width: 260px;\r\n    height: 260px;\r\n}\r\n.error-msg{\r\n    margin-left:15px;\r\n}\r\n.images{\r\n    margin-top:30px ;\r\n}"

/***/ }),

/***/ "./src/app/users/settings/settings.component.html":
/*!********************************************************!*\
  !*** ./src/app/users/settings/settings.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"isDataLoaded\" style=\" margin:0 auto 5px;  max-width:900px;\">\n  <form method=\"post\" enctype=\"multipart/form-data\" [formGroup]=\"form\" (ngSubmit)=\"onSubmit(picFile)\">\n  <div class=\"row\" style=\"margin-top:5px;\">\n    <!-- left column -->\n    <div class=\"col-md-4 col-sm-6 col-xs-12\">\n      <div class=\"text-center\">\n              <img [src]=\"url\" class=\"images rounded-circle img-thumbnail\" alt=\"images\">\n          <label for=\"avatar\" class=\"kamera\">\n                  <img src=\"../../../assets/images/camera.png\" class=\"taster\">\n              <input type=\"file\" accept=\"image/*\" name='avatar' (change)=\"onImageAdded($event)\" id=\"avatar\"  style=\"display:none\">\n          </label>\n          <div *ngIf=\"mistake\">\n            File type must be an \"image\".\n          </div>\n      </div>\n    </div>\n    <!-- edit form column -->\n    <div class=\"col-md-8 col-sm-6 col-xs-12 personal-info\">\n      <h3>Personal info</h3>\n        <div class=\"mb-3\">\n          <label class=\"col-md-3 control-label\">First name:</label>\n          <div class=\"col-md-8\">\n            <input class=\"form-control\" id=\"firstName\" formControlName=\"firstName\" type=\"text\">\n          </div>\n          <div *ngIf=\"form.controls['firstName'].errors && !form.controls['firstName'].pristine\" class=\"error-msg\">\n            <div [hidden]=\"!form.controls['firstName'].errors.required\">\n                Valid first name is required.\n            </div>\n            <div [hidden]=\"!form.controls['firstName'].errors.minlength\">\n                First name is too short.\n            </div>\n        </div>\n        </div>\n        <div class=\"mb-3\">\n          <label class=\"col-md-3 control-label\">Last name:</label>\n          <div class=\"col-md-8\">\n            <input class=\"form-control\" id=\"lastName\" formControlName=\"lastName\" type=\"text\">\n          </div>\n          <div *ngIf=\"form.controls['lastName'].errors && !form.controls['lastName'].pristine\" class=\"error-msg\">\n            <div [hidden]=\"!form.controls['lastName'].errors.required\">\n                Valid last name is required.\n            </div>\n            <div [hidden]=\"!form.controls['lastName'].errors.minlength\">\n                Last name is too short.\n            </div>\n        </div>\n        </div>\n        <div class=\"mb-3\">\n            <label class=\"col-md-3 control-label\">Username:</label>\n            <div class=\"col-md-8\">\n              <input class=\"form-control\" id=\"userName\" formControlName=\"userName\" type=\"text\">\n            </div>\n            <div *ngIf=\"form.controls['userName'].errors && !form.controls['userName'].pristine\" class=\"error-msg\">\n              <div [hidden]=\"!form.controls['userName'].errors.required\">\n                  Valid username is required.\n              </div>\n              <div [hidden]=\"!form.controls['userName'].errors.minlength\">\n                  Username is too short.\n              </div>\n          </div>\n          </div>\n        <div class=\"mb-3\">\n          <label class=\"col-md-3 control-label\">Email:</label>\n          <div class=\"col-md-8\">\n            <input class=\"form-control\" id=\"email\" formControlName=\"email\" type=\"email\">\n          </div>\n          <div *ngIf=\"form.controls['email'].errors && !form.controls['email'].pristine\" class=\"error-msg\">\n            <div [hidden]=\"!form.controls['email'].errors.required\">\n                Valid email is required.\n            </div>\n            <div [hidden]=\"!form.controls['email'].errors.minlength\">\n                Email is too short.\n            </div>\n        </div>\n        </div>\n        <div class=\"mb-3\">\n          <label class=\"col-md-3 control-label\">Phone:</label>\n          <div class=\"col-md-8\">\n            <input class=\"form-control\" id=\"phone\" formControlName=\"phone\" type=\"tel\">\n          </div>\n          <div *ngIf=\"form.controls['phone'].errors && !form.controls['phone'].pristine\" class=\"error-msg\">\n            <div [hidden]=\"!form.controls['phone'].errors.required\">\n                Valid phone number is required.\n            </div>\n            <div [hidden]=\"!form.controls['phone'].errors.minlength\">\n                Phone number is too short.\n            </div>\n        </div>\n        </div>\n        <div class=\"mb-3\">\n          <label class=\"col-md-3 control-label\">Address:</label>\n          <div class=\"col-md-8\">\n            <input class=\"form-control\" id=\"street\" formControlName=\"street\" type=\"text\">\n          </div>\n          <div *ngIf=\"form.controls['street'].errors && !form.controls['street'].pristine\" class=\"error-msg\">\n            <div [hidden]=\"!form.controls['street'].errors.required\">\n                Valid address is required.\n            </div>\n            <div [hidden]=\"!form.controls['street'].errors.minlength\">\n                Address is too short.\n            </div>\n        </div>\n        </div>\n        <div class=\"mb-3\">\n          <label class=\"col-md-3 control-label\">Address2:</label>\n          <div class=\"col-md-8\">\n            <input class=\"form-control\" id=\"street2\" formControlName=\"street2\" type=\"text\">\n          </div>\n        </div>\n        <div class=\"mb-3\">\n          <label class=\"col-md-3 control-label\">Password:</label>\n          <div class=\"col-md-8\">\n            <input class=\"form-control\" id=\"password\" formControlName=\"password\"  type=\"password\">\n          </div>\n          <div *ngIf=\"form.controls['password'].errors && !form.controls['password'].pristine\" class=\"error-msg\">\n            <div [hidden]=\"!form.controls['password'].errors.required\">\n                Valid password is required.\n            </div>\n            <div [hidden]=\"!form.controls['password'].errors.minlength\">\n                Password is too short.\n            </div>\n        </div>\n        </div>\n        <div class=\"row\" style=\"margin-bottom:5px;\">\n          <div class=\"col-xs-6\" style=\"margin-left:30px; margin-right:10px;\">\n            <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!form.valid\" >Save Changes</button>\n          </div>\n          <div class=\"col-xs-6\" style=\"margin:0px;\">\n            <a style=\"color:white;\" class=\"btn btn-secondary\" (click)=\"GoForPassword()\">Change password</a>\n          </div>\n        </div>\n    </div>\n  </div>\n</form>\n</div>\n"

/***/ }),

/***/ "./src/app/users/settings/settings.component.ts":
/*!******************************************************!*\
  !*** ./src/app/users/settings/settings.component.ts ***!
  \******************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _model_user_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../model/user.model */ "./src/app/model/user.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//obrada forme i rutiranje


//servisi


//modeli

var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(router, userSer, toastr) {
        this.router = router;
        this.userSer = userSer;
        this.toastr = toastr;
        this.url = ""; //url adresa slike
        this.mistake = false; //ako je korisnik uneo pogresan file format
        this.fileToUpload = null; //unet file
        this.isDataLoaded = false; //da li su podaci ucitani
    }
    SettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        //uzimamo informacije korisnika
        this.userSer.getSettings().subscribe(function (data) {
            //inicijalizujemo vrednosti inputa s tim podacima
            _this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](data.user.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]),
                lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](data.user.last, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]),
                userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](data.user.userName, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)]),
                email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](data.user.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
                phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](data.user.phone, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)]),
                street: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](data.user.street, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)]),
                street2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](data.user.street2),
                password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]),
            });
            //url adresa njegove slike
            _this.url = _this.userSer.getAvatarURL(data.user.avatar);
            _this.isDataLoaded = true;
        });
    };
    //kada korisnik dodaje novu sliku
    SettingsComponent.prototype.onImageAdded = function (event) {
        var _this = this;
        //pravimo privremenu promenjivu
        var temp = event.target.files[0];
        //proveravamo da li je odgovarajuceg formata
        if (temp != undefined)
            //ako nije
            if (temp.type.split('/')[0] != "image")
                this.mistake = true;
            else {
                this.fileToUpload = event.target.files[0];
                //prezentujemo je korisniku
                if (event.target.files && event.target.files[0]) {
                    var reader = new FileReader();
                    reader.onload = function (event) {
                        _this.url = event.target.result;
                        _this.mistake = false;
                    };
                    reader.readAsDataURL(event.target.files[0]);
                }
            }
    };
    //putanja za promenu sifre
    SettingsComponent.prototype.GoForPassword = function () { this.router.navigate(['/users/password']); };
    //potvrda menjana podataka
    SettingsComponent.prototype.onSubmit = function () {
        var _this = this;
        //uzimamo datke podatke u obliku modela Usera
        var user = new _model_user_model__WEBPACK_IMPORTED_MODULE_5__["User"](this.form.value.email, this.form.value.password, this.form.value.firstName, this.form.value.lastName, this.form.value.userName.toLowerCase(), this.form.value.phone, this.form.value.street, this.form.value.street2);
        //prosledjujemo ih serveru
        this.userSer.setSettings(user, this.fileToUpload).subscribe(function (data) {
            //obavestavamo heder da je doslo do izmene
            _this.userSer.changeMessage(1);
            //vracamo se na profilnu rutu
            _this.router.navigate(['/users/profile/' + data.user.toString()]);
        });
    };
    SettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/users/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.css */ "./src/app/users/settings/settings.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/users/users-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/users/users-routing.module.ts ***!
  \***********************************************/
/*! exports provided: UsersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersRoutingModule", function() { return UsersRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/users/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ "./src/app/users/register/register.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/users/profile/profile.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/users/settings/settings.component.ts");
/* harmony import */ var _password_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./password/password.component */ "./src/app/users/password/password.component.ts");
/* harmony import */ var _my_property_my_property_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./my-property/my-property.component */ "./src/app/users/my-property/my-property.component.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//components






//servisi

var routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
    { path: 'profile/:username', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]] },
    { path: 'settings', component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_5__["SettingsComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]] },
    { path: 'password', component: _password_password_component__WEBPACK_IMPORTED_MODULE_6__["PasswordComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]] },
    { path: 'property', component: _my_property_my_property_component__WEBPACK_IMPORTED_MODULE_7__["MyPropertyComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]] },
    { path: '**', redirectTo: '/not-found' },
];
var UsersRoutingModule = /** @class */ (function () {
    function UsersRoutingModule() {
    }
    UsersRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], UsersRoutingModule);
    return UsersRoutingModule;
}());



/***/ }),

/***/ "./src/app/users/users.module.ts":
/*!***************************************!*\
  !*** ./src/app/users/users.module.ts ***!
  \***************************************/
/*! exports provided: UsersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_star_rating__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-star-rating */ "./node_modules/angular-star-rating/esm5/angular-star-rating.js");
/* harmony import */ var _users_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./users-routing.module */ "./src/app/users/users-routing.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/users/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/register.component */ "./src/app/users/register/register.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/users/profile/profile.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/users/settings/settings.component.ts");
/* harmony import */ var _password_password_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./password/password.component */ "./src/app/users/password/password.component.ts");
/* harmony import */ var _my_property_my_property_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./my-property/my-property.component */ "./src/app/users/my-property/my-property.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//moduli





//komponente






var UsersModule = /** @class */ (function () {
    function UsersModule() {
    }
    UsersModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                angular_star_rating__WEBPACK_IMPORTED_MODULE_3__["StarRatingModule"].forRoot(),
                _users_routing_module__WEBPACK_IMPORTED_MODULE_4__["UsersRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            ],
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"], _settings_settings_component__WEBPACK_IMPORTED_MODULE_8__["SettingsComponent"], _password_password_component__WEBPACK_IMPORTED_MODULE_9__["PasswordComponent"], _my_property_my_property_component__WEBPACK_IMPORTED_MODULE_10__["MyPropertyComponent"]]
        })
    ], UsersModule);
    return UsersModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\tesic\Desktop\Server\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map