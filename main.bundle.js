webpackJsonp([1,4],{

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(165);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomeComponent = (function () {
    function HomeComponent(afAuth, af, http) {
        var _this = this;
        this.afAuth = afAuth;
        this.af = af;
        this.http = http;
        this.userChange = function (user) {
            if (user != null) {
                console.log(user.uid + 'changed');
                _this.uid = user.uid;
                _this.currentUserEmail = user.email;
                _this.bookmarks = _this.afx.list('/bookmarks/' + _this.uid);
            }
        };
        this.showError = function (error) {
            _this.errorMessage = error.message;
        };
        this.loadId = function (id) {
            var url = 'https://hacker-news.firebaseio.com/v0/item/' + id + '.json';
            return _this.http.get(url);
        };
        this.user = this.afAuth.authState;
        this.afx = af;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.afAuth.auth.onAuthStateChanged(this.userChange);
        this.loadData();
        // every 30 seconds
        __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].interval(30000).subscribe(function () {
            console.log('schedule call');
            _this.loadData();
        });
    };
    HomeComponent.prototype.register = function () {
        //console.log('registering ' + this.email + ' and ' + this.password);
        this.afAuth.auth.createUserWithEmailAndPassword(this.email, this.password)
            .catch(this.showError);
    };
    HomeComponent.prototype.login = function () {
        this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password)
            .catch(this.showError);
    };
    HomeComponent.prototype.logout = function () {
        this.afAuth.auth.signOut();
        this.bookmarks = null;
    };
    HomeComponent.prototype.bookmark = function (item) {
        this.bookmarks.push(item);
        console.log(item);
        console.log('book marked');
    };
    HomeComponent.prototype.loadData = function () {
        var _this = this;
        var url = 'https://hacker-news.firebaseio.com/v0/newstories.json';
        this.http.get(url)
            .subscribe(function (response) {
            var ids = response.json();
            // only load last 5 items
            var obs = ids.slice(0, 5).map(_this.loadId);
            _this.news = __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].forkJoin(obs).map(function (res) { return res.map(function (r) { return r.json(); }); });
        });
    };
    HomeComponent.prototype.handleError = function (error) {
        console.error('An error occured', error);
        return Promise.reject(error.message || error);
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'home',
        template: __webpack_require__(303)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _c || Object])
], HomeComponent);

var _a, _b, _c;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 227:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 227;


/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(241);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_component__ = __webpack_require__(164);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Demo News!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(302),
        styles: [__webpack_require__(300)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_component__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ng_bootstrap_ng_bootstrap__ = __webpack_require__(236);
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











// TODO export this
var firebaseConfig = {
    apiKey: "AIzaSyCutXm-mQ53uFV61eR4EyRvTbaXVnkcWDo",
    authDomain: "nova-179a8.firebaseapp.com",
    databaseURL: "https://nova-179a8.firebaseio.com",
    projectId: "nova-179a8",
    storageBucket: "nova-179a8.appspot.com",
    messagingSenderId: "644260694827"
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__home_component__["a" /* HomeComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_7_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
            __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__["a" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__["a" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_10__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot()
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 241:
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

/***/ 300:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(104)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 302:
/***/ (function(module, exports) {

module.exports = "<!--<h1>\n  {{title}}\n</h1> -->\n\n<!--\n<nav>\n\t<a routerLink=\"/home\">Home</a>\n</nav>\n-->\n<router-outlet></router-outlet>"

/***/ }),

/***/ 303:
/***/ (function(module, exports) {

module.exports = "<h1>Demo News!</h1>\n<div class=\"jumbotron\" *ngIf=\"!(user | async)\">\n  \t<ngb-alert *ngIf=\"(errorMessage)\" type=\"warning\" (close)=\"closeAlert()\">{{ errorMessage }}</ngb-alert>\n\t<form class=\"form-horizontal\">\n  \t\t<div class=\"form-group\">\n  \t\t\t<label for=\"inputEmail\" class=\"col-sm-2 control-label\">Email</label>\n  \t\t\t<div class=\"col-sm-10\">\n    \t\t\t<input type=\"email\" name=\"email\" class=\"form-control\" id=\"inputEmail\" placeholder=\"Email\" [(ngModel)]=\"email\" />\n    \t\t</div>\n  \t\t</div>\n\n  \t\t<div class=\"form-group\">\n  \t\t\t<label for=\"inputPassword\" class=\"col-sm-2 control-label\">Password</label>\n  \t\t\t<div class=\"col-sm-10\">\n    \t\t\t<input type=\"password\" name=\"password\" class=\"form-control\" id=\"inputPassword\" placeholder=\"Password\" [(ngModel)]=\"password\">\n\t\t\t</div>\n  \t\t</div>\n  \t\t<div class=\"form-group\">\n  \t\t\t<div class=\"col-sm-offset-2 col-sm-10\">\n  \t\t\t\t<button type=\"submit\" class=\"btn btn-default\" (click)=\"login()\">Login</button>\n\t\t\t\t<button class=\"btn btn-default\" (click)=\"register()\">Register</button>\n\t\t\t</div>\n\t\t</div>\n\t</form>\n</div>\n\n<div class=\"jumbotron\" *ngIf=\"(user | async)?.uid\">\n\t<h2>You are logged in as {{ currentUserEmail }}</h2>\n\t<p>\n\t\t<button class=\"btn btn-default\" (click)=\"logout()\" >Logout</button>\n\t</p>\n</div>\n\n<div class=\"row\">\n\t<div class=\"col-md-6\">\n\t\t<legend>Latest News</legend>\n\t\t<table class=\"table table-hover\">\n\t\t\t<tbody>\n\t\t\t\t<tr *ngFor=\"let item of news | async\">\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default btn-lg\" *ngIf=\"(user | async)\" (click)=\"bookmark(item)\">\n\t\t\t\t\t  \t\t<span class=\"glyphicon glyphicon-star\" aria-hidden=\"true\"></span>\n\t\t\t\t\t  \t</button>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<a href=\"{{ item.url }}\">{{ item.title }}</a>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t</tbody>\n\t\t</table>\n\t</div>\n\n\t<div class=\"col-md-6\" *ngIf=\"(user | async)\">\n\t\t<legend>Bookmarks</legend>\n\t\t<table class=\"table table-hover\">\n\t\t\t<tbody>\n\t\t\t\t<tr *ngFor=\"let item of bookmarks | async\">\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<a href=\"{{ item.url }}\">{{ item.title }}</a>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t</tbody>\n\t\t</table>\n\t</div>\n\n\t<div class=\"col-md-6\" *ngIf=\"!(user | async)\">\n\t\t<legend>Bookmarks</legend>\n\t\t<p>Please Login or Register to See Bookmarks</p>\n\t</div>\n</div>\n\n\t<!--\n\t<button (click)=\"loadData()\">Load</button>\n\t-->\n\n"

/***/ }),

/***/ 566:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(228);


/***/ })

},[566]);
//# sourceMappingURL=main.bundle.js.map