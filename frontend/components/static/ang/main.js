"use strict";
(self["webpackChunkcomponents"] = self["webpackChunkcomponents"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _data_editor_data_editor_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data-editor/data-editor.component */ 7866);
/* harmony import */ var _room_view_room_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./room-view/room-view.component */ 6727);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





class AppComponent {
    ngAfterViewInit() {
        var _a;
        (_a = this.dataEditorComponent.ngModelChangeListener) === null || _a === void 0 ? void 0 : _a.subscribe((localUser) => {
            this.roomViewComponent.localUser = this.dataEditorComponent.localUser;
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_data_editor_data_editor_component__WEBPACK_IMPORTED_MODULE_0__.DataEditorComponent, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_room_view_room_view_component__WEBPACK_IMPORTED_MODULE_1__.RoomViewComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.dataEditorComponent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.roomViewComponent = _t.first);
    } }, decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-data-editor")(1, "app-room-view");
    } }, directives: [_data_editor_data_editor_component__WEBPACK_IMPORTED_MODULE_0__.DataEditorComponent, _room_view_room_view_component__WEBPACK_IMPORTED_MODULE_1__.RoomViewComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _room_view_room_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./room-view/room-view.component */ 6727);
/* harmony import */ var _data_editor_data_editor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data-editor/data-editor.component */ 7866);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);








class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _room_view_room_view_component__WEBPACK_IMPORTED_MODULE_2__.RoomViewComponent,
        _data_editor_data_editor_component__WEBPACK_IMPORTED_MODULE_3__.DataEditorComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule], exports: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _room_view_room_view_component__WEBPACK_IMPORTED_MODULE_2__.RoomViewComponent,
        _data_editor_data_editor_component__WEBPACK_IMPORTED_MODULE_3__.DataEditorComponent] }); })();


/***/ }),

/***/ 7866:
/*!******************************************************!*\
  !*** ./src/app/data-editor/data-editor.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataEditorComponent": () => (/* binding */ DataEditorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 587);



class DataEditorComponent {
    constructor() {
        this.localUser = {};
        this.ngModelChangeListener = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() {
    }
    onNgModelChange() {
        this.ngModelChangeListener.emit(this.localUser);
    }
}
DataEditorComponent.ɵfac = function DataEditorComponent_Factory(t) { return new (t || DataEditorComponent)(); };
DataEditorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DataEditorComponent, selectors: [["app-data-editor"]], outputs: { ngModelChangeListener: "ngModelChangeListener" }, decls: 5, vars: 2, consts: [["for", "direction"], ["type", "range", "min", "-180", "max", "180", "id", "direction", 3, "ngModel", "ngModelChange"]], template: function DataEditorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Direction: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DataEditorComponent_Template_input_ngModelChange_2_listener($event) { return ctx.localUser.direction = $event; })("ngModelChange", function DataEditorComponent_Template_input_ngModelChange_2_listener() { return ctx.onNgModelChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "output");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.localUser.direction);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", ctx.localUser == null ? null : ctx.localUser.direction, ")");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.RangeValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXRhLWVkaXRvci5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 5876:
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpService": () => (/* binding */ HttpService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);


class HttpService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
}
HttpService.ɵfac = function HttpService_Factory(t) { return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
HttpService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpService, factory: HttpService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9566:
/*!************************************************!*\
  !*** ./src/app/room-view/room-data.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoomDataService": () => (/* binding */ RoomDataService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../http.service */ 5876);


class RoomDataService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    getInitialData() {
        return this.httpService.httpClient.get('/api/get-initial-room-data', { responseType: 'json' });
    }
}
RoomDataService.ɵfac = function RoomDataService_Factory(t) { return new (t || RoomDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_http_service__WEBPACK_IMPORTED_MODULE_0__.HttpService)); };
RoomDataService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RoomDataService, factory: RoomDataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6727:
/*!**************************************************!*\
  !*** ./src/app/room-view/room-view.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoomViewComponent": () => (/* binding */ RoomViewComponent)
/* harmony export */ });
/* harmony import */ var _transform_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transform-data */ 9538);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _room_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./room-data.service */ 9566);
/* harmony import */ var _user_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../user-data.service */ 1601);
/* harmony import */ var _window_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../window.service */ 6984);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);






function RoomViewComponent__svg_ng_container_2__svg_pattern_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "pattern", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "image", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const userProfile_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("id", "user-", userProfile_r3.userId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("href", userProfile_r3.profile.avatar);
} }
function RoomViewComponent__svg_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, RoomViewComponent__svg_ng_container_2__svg_pattern_1_Template, 2, 2, "pattern", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.userProfiles);
} }
function RoomViewComponent__svg_circle_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "circle");
} if (rf & 2) {
    const userInRoom_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattributeInterpolate1"]("fill", "url(#user-", (tmp_0_0 = ctx_r1.getProfileById(userInRoom_r4)) == null ? null : tmp_0_0.userId, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("r", 12.5)("cx", userInRoom_r4.position.x)("cy", userInRoom_r4.position.y);
} }
class RoomViewComponent {
    constructor(roomDataService, userDataService, windowService) {
        this.roomDataService = roomDataService;
        this.userDataService = userDataService;
        this.windowService = windowService;
    }
    ngOnInit() {
        // Get initial data
        this.roomDataService.getInitialData()
            .subscribe((res) => {
            let data = res.data;
            this.untransformedData = res.data;
            let transformedData = (0,_transform_data__WEBPACK_IMPORTED_MODULE_0__.transformData)(data, 1);
            this.data = transformedData;
            this.loadProfiles();
        });
        // Update centerDimensions with the this.windowService.dimensions
        this.updateData(this.windowService.dimensions);
        this.windowService.onUpdate((dimensions) => this.updateData(dimensions));
    }
    updateData(dimensions) {
        let transformedData = (0,_transform_data__WEBPACK_IMPORTED_MODULE_0__.transformData)(this.untransformedData, 1);
        if (dimensions)
            this.centerDimensions = {
                x: dimensions.width / 2,
                y: dimensions.height / 2
            };
    }
    loadProfiles() {
        var _a;
        let ids = (_a = this.data) === null || _a === void 0 ? void 0 : _a.map((user) => user.user_id);
        this.userDataService.loadUserProfiles(ids)
            .subscribe((profiles) => {
            this.userProfiles = profiles;
        });
    }
    getProfileById(userInRoom) {
        var _a;
        let userId = userInRoom.user_id;
        return (_a = this.userProfiles) === null || _a === void 0 ? void 0 : _a.find((user) => user.userId === userId);
    }
}
RoomViewComponent.ɵfac = function RoomViewComponent_Factory(t) { return new (t || RoomViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_room_data_service__WEBPACK_IMPORTED_MODULE_1__.RoomDataService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_user_data_service__WEBPACK_IMPORTED_MODULE_2__.UserDataService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_window_service__WEBPACK_IMPORTED_MODULE_3__.WindowService)); };
RoomViewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: RoomViewComponent, selectors: [["app-room-view"]], decls: 5, vars: 5, consts: [["xmlns", "http://www.w3.org/2000/svg"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["x", "0", "y", "0", "width", "25", "height", "25", 3, "id", 4, "ngFor", "ngForOf"], ["x", "0", "y", "0", "width", "25", "height", "25", 3, "id"], ["width", "25", "height", "25"]], template: function RoomViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "svg", 0)(1, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, RoomViewComponent__svg_ng_container_2_Template, 2, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, RoomViewComponent__svg_circle_4_Template, 1, 4, "circle", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.userProfiles);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattributeInterpolate3"]("transform", "rotate(", (ctx.localUser == null ? null : ctx.localUser.direction) || 0, " ", ctx.centerDimensions == null ? null : ctx.centerDimensions.x, " ", ctx.centerDimensions == null ? null : ctx.centerDimensions.y, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.data);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf], styles: ["[_nghost-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  position: absolute;\n  left: 0;\n  top: 0;\n  z-index: -1;\n}\n[_nghost-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: inherit;\n  height: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvb20tdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBRUEsa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQU9BLFdBQUE7QUFOSjtBQUNJO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFDUiIsImZpbGUiOiJyb29tLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG5cclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcblxyXG4gICAgc3ZnIHtcclxuICAgICAgICB3aWR0aDogaW5oZXJpdDtcclxuICAgICAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICB9XHJcblxyXG4gICAgei1pbmRleDogLTE7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 9538:
/*!*********************************************!*\
  !*** ./src/app/room-view/transform-data.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "transformData": () => (/* binding */ transformData)
/* harmony export */ });
function transformData(userData, userId) {
    // Transform based on distance to user of ID userId
    let user = userData.find((userInRoom) => userInRoom.user_id === userId);
    let distances = {};
    for (const data of userData)
        distances[data.user_id] = {
            x: data.position.x - user.position.x,
            y: data.position.y - user.position.y
        };
    let transformation1 = Object
        .entries(distances)
        .map((entries) => {
        let userId = parseInt(entries[0]), distanceData = entries[1];
        let center = {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
        };
        let position = {
            x: center.x + distanceData.x,
            y: center.y + distanceData.y
        };
        return {
            position: position,
            user_id: userId
        };
    });
    return transformation1;
}


/***/ }),

/***/ 1601:
/*!**************************************!*\
  !*** ./src/app/user-data.service.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserDataService": () => (/* binding */ UserDataService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 833);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4363);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http.service */ 5876);



class UserDataService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    fetchUser(id) {
        return this.httpService.httpClient.get(`/api/user/${id}`, { responseType: 'json' });
    }
    fetchUsers(ids) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable((sub) => {
            let users = [];
            for (const id of ids) {
                this.fetchUser(id)
                    .subscribe((userData) => {
                    users.push(userData);
                });
            }
            sub.next(users);
        });
    }
    loadUserProfile(id) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable((sub) => {
            this.fetchUser(id)
                .subscribe((data) => {
                sub.next({
                    userId: data.user.id,
                    profile: data.user_profile
                });
            });
        });
    }
    loadUserProfiles(ids) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable((sub) => {
            let profiles = [];
            let observables = ids.map((id) => this.loadUserProfile(id));
            let promises = observables.map((observable) => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.firstValueFrom)(observable));
            Promise.all(promises)
                .then((profiles) => sub.next(profiles));
        });
    }
}
UserDataService.ɵfac = function UserDataService_Factory(t) { return new (t || UserDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_http_service__WEBPACK_IMPORTED_MODULE_0__.HttpService)); };
UserDataService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: UserDataService, factory: UserDataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6984:
/*!***********************************!*\
  !*** ./src/app/window.service.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WindowService": () => (/* binding */ WindowService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class WindowService {
    constructor(rendererFactory) {
        this.rendererFactory = rendererFactory;
        this.renderer = rendererFactory.createRenderer(null, null);
        this.update();
        this.renderer.listen(window, 'onresize', () => {
            this.update();
            if (this.resizeListeners)
                for (const fn of this.resizeListeners)
                    fn(this.dimensions);
        });
    }
    update() {
        this.dimensions = {
            width: window.innerWidth,
            height: window.innerHeight
        };
    }
    onUpdate(fn) {
        var _a;
        (_a = this.resizeListeners) === null || _a === void 0 ? void 0 : _a.push(fn);
    }
}
WindowService.ɵfac = function WindowService_Factory(t) { return new (t || WindowService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.RendererFactory2)); };
WindowService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WindowService, factory: WindowService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map