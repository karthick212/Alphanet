function l(l,n){for(var u=0;u<n.length;u++){var e=n[u];e.enumerable=e.enumerable||false;e.configurable=true;if("value"in e)e.writable=true;Object.defineProperty(l,e.key,e)}}function n(n,u,e){if(u)l(n.prototype,u);if(e)l(n,e);return n}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{uNra:function l(u,e,o){"use strict";o.r(e);var t=o("8Y7J");var a=function l(){};var s=o("pMnS"),r=o("SVse"),i=o("s7LF"),d=o("iInd"),c=o("z6cu");var p=function(){function l(l,n,u,e){this.formBuilder=l,this.router=n,this.api=u,this.route=e,this.submitted=!1}var u=l.prototype;u.ngOnInit=function l(){var n=this;this.api.isInArray(this.api.getPermissions(),"4")||this.router.navigate(["dashboard"]),this.route.params.subscribe(function(l){l.id&&n.loadEditStop(l.id)}),this.addstopForm=this.formBuilder.group({StopId:[""],StopType:["",i.Validators.required],StopName:["",i.Validators.required],StopLat:["",i.Validators.required],StopLong:["",i.Validators.required]})};u.onSubmit=function l(){var n=this;if(this.submitted=!0,!this.addstopForm.invalid){var u={stoptype:this.addstopForm.value.StopType,stopname:this.addstopForm.value.StopName,stoplat:this.addstopForm.value.StopLat,stoplong:this.addstopForm.value.StopLong,loginid:this.api.getLoginId()};console.log(JSON.stringify(u)),this.addstopForm.value.StopId?(u.id=this.addstopForm.value.StopId,this.api.editbusstop(u).subscribe(function(l){Object.keys(l).length?(n.submitted=!0,n.invalid=!0,n.errorMsg="Stop Updated Successfully",console.log("updated Stop success"),n.router.navigate(["managebusstops"])):(n.submitted=!1,n.invalid=!1,n.errorMsg="Stop Not Updated",console.log("updated Stop failed"))},function(l){return n.submitted=!0,n.invalid=!1,n.errorMsg=l,Object(c.a)(l)})):this.api.newbusstop(u).subscribe(function(l){Object.keys(l).length?(n.submitted=!0,n.invalid=!0,n.errorMsg="Bus stop Added Successfully",console.log("add stop success"),n.router.navigate(["managebusstops"]),n.addstopForm.reset()):(n.submitted=!1,n.invalid=!1,n.errorMsg="Stop Not Added",console.log("add stop failed"))},function(l){return n.submitted=!0,n.invalid=!1,n.errorMsg=l,Object(c.a)(l)})}};u.loadEditStop=function l(n){var u=this;this.api.geteditbusstop(n).subscribe(function(l){if(Object.keys(l.data).length){var n=JSON.parse(JSON.stringify(l.data));u.addstopForm.controls.StopId.setValue(n[0].StopId),u.addstopForm.controls.StopType.setValue(n[0].StopType),u.addstopForm.controls.StopName.setValue(n[0].StopName),u.addstopForm.controls.StopLat.setValue(n[0].StopLat),u.addstopForm.controls.StopLong.setValue(n[0].StopLong)}},function(l){return Object(c.a)(l)})};u.onReset=function l(){this.submitted=!1,this.addstopForm.reset()};n(l,[{key:"af",get:function l(){return this.addstopForm.controls}}]);return l}();var m=o("H+bZ"),g=t["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function f(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,3,"div",[["class","col-xs-12"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,2,"p",[["class","alert alert-success"]],null,null,null,null,null)),(l()(),t["\u0275eld"](2,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t["\u0275ted"](3,null,["",""]))],null,function(l,n){l(n,3,0,n.component.errorMsg)})}function v(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Type is required"]))],null,null)}function C(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,2,"div",[["class","invalid-feedback"]],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,v)),t["\u0275did"](2,16384,null,0,r.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,2,0,n.component.af.StopType.errors.required)},null)}function S(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["StopName is required"]))],null,null)}function b(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,2,"div",[["class","invalid-feedback"]],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,S)),t["\u0275did"](2,16384,null,0,r.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,2,0,n.component.af.StopName.errors.required)},null)}function _(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["STOP LATITUDE is required"]))],null,null)}function N(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,2,"div",[["class","invalid-feedback"]],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,_)),t["\u0275did"](2,16384,null,0,r.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,2,0,n.component.af.StopLat.errors.required)},null)}function h(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["STOP LONGITUDE is required"]))],null,null)}function R(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,2,"div",[["class","invalid-feedback"]],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,h)),t["\u0275did"](2,16384,null,0,r.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,2,0,n.component.af.StopLong.errors.required)},null)}function I(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,123,"div",[["class","main-content"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,122,"div",[["class","main-content-inner"]],null,null,null,null,null)),(l()(),t["\u0275eld"](2,0,null,null,7,"div",[["class","breadcrumbs ace-save-state"],["id","breadcrumbs"]],null,null,null,null,null)),(l()(),t["\u0275eld"](3,0,null,null,6,"ul",[["class","breadcrumb"]],null,null,null,null,null)),(l()(),t["\u0275eld"](4,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),t["\u0275eld"](5,0,null,null,0,"i",[["class","ace-icon fa fa-home home-icon"]],null,null,null,null,null)),(l()(),t["\u0275eld"](6,0,null,null,1,"a",[["href","#"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Home"])),(l()(),t["\u0275eld"](8,0,null,null,1,"li",[["class","active"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["ADD BUS STOPS"])),(l()(),t["\u0275eld"](10,0,null,null,113,"div",[["class","row"]],null,null,null,null,null)),(l()(),t["\u0275eld"](11,0,null,null,112,"div",[["class","col-xs-12"]],null,null,null,null,null)),(l()(),t["\u0275eld"](12,0,null,null,111,"div",[["class","widget-body"]],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,f)),t["\u0275did"](14,16384,null,0,r.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275eld"](15,0,null,null,108,"div",[["class","widget-main"]],null,null,null,null,null)),(l()(),t["\u0275eld"](16,0,null,null,107,"form",[["class","form-horizontal"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(l,n,u){var e=!0,o=l.component;return"submit"===n&&(e=!1!==t["\u0275nov"](l,18).onSubmit(u)&&e),"reset"===n&&(e=!1!==t["\u0275nov"](l,18).onReset()&&e),"ngSubmit"===n&&(e=!1!==o.onSubmit()&&e),e},null,null)),t["\u0275did"](17,16384,null,0,i["\u0275angular_packages_forms_forms_z"],[],null,null),t["\u0275did"](18,540672,null,0,i.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),t["\u0275prd"](2048,null,i.ControlContainer,null,[i.FormGroupDirective]),t["\u0275did"](20,16384,null,0,i.NgControlStatusGroup,[[4,i.ControlContainer]],null,null),(l()(),t["\u0275eld"](21,0,null,null,5,"input",[["class","form-control input-sm number"],["formControlName","StopId"],["id","StopId"],["type","hidden"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0;return"input"===n&&(e=!1!==t["\u0275nov"](l,22)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t["\u0275nov"](l,22).onTouched()&&e),"compositionstart"===n&&(e=!1!==t["\u0275nov"](l,22)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t["\u0275nov"](l,22)._compositionEnd(u.target.value)&&e),e},null,null)),t["\u0275did"](22,16384,null,0,i.DefaultValueAccessor,[t.Renderer2,t.ElementRef,[2,i.COMPOSITION_BUFFER_MODE]],null,null),t["\u0275prd"](1024,null,i.NG_VALUE_ACCESSOR,function(l){return[l]},[i.DefaultValueAccessor]),t["\u0275did"](24,671744,null,0,i.FormControlName,[[3,i.ControlContainer],[8,null],[8,null],[6,i.NG_VALUE_ACCESSOR],[2,i["\u0275angular_packages_forms_forms_q"]]],{name:[0,"name"]},null),t["\u0275prd"](2048,null,i.NgControl,null,[i.FormControlName]),t["\u0275did"](26,16384,null,0,i.NgControlStatus,[[4,i.NgControl]],null,null),(l()(),t["\u0275eld"](27,0,null,null,48,"div",[["class","row"]],null,null,null,null,null)),(l()(),t["\u0275eld"](28,0,null,null,31,"div",[["class","col-lg-4 col-md-6 col-xs-12"]],null,null,null,null,null)),(l()(),t["\u0275eld"](29,0,null,null,3,"label",[["for",""]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,[" Type "])),(l()(),t["\u0275eld"](31,0,null,null,1,"span",[["class","text-danger"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["*"])),(l()(),t["\u0275eld"](33,0,null,null,24,"select",[["class","form-control input-sm"],["formControlName","StopType"],["id","StopType"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"change"],[null,"blur"]],function(l,n,u){var e=!0;return"change"===n&&(e=!1!==t["\u0275nov"](l,37).onChange(u.target.value)&&e),"blur"===n&&(e=!1!==t["\u0275nov"](l,37).onTouched()&&e),e},null,null)),t["\u0275prd"](512,null,r["\u0275NgClassImpl"],r["\u0275NgClassR2Impl"],[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2]),t["\u0275did"](35,278528,null,0,r.NgClass,[r["\u0275NgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t["\u0275pod"](36,{"is-invalid":0}),t["\u0275did"](37,16384,null,0,i.SelectControlValueAccessor,[t.Renderer2,t.ElementRef],null,null),t["\u0275prd"](1024,null,i.NG_VALUE_ACCESSOR,function(l){return[l]},[i.SelectControlValueAccessor]),t["\u0275did"](39,671744,null,0,i.FormControlName,[[3,i.ControlContainer],[8,null],[8,null],[6,i.NG_VALUE_ACCESSOR],[2,i["\u0275angular_packages_forms_forms_q"]]],{name:[0,"name"]},null),t["\u0275prd"](2048,null,i.NgControl,null,[i.FormControlName]),t["\u0275did"](41,16384,null,0,i.NgControlStatus,[[4,i.NgControl]],null,null),(l()(),t["\u0275eld"](42,0,null,null,3,"option",[["value",""]],null,null,null,null,null)),t["\u0275did"](43,147456,null,0,i.NgSelectOption,[t.ElementRef,t.Renderer2,[2,i.SelectControlValueAccessor]],{value:[0,"value"]},null),t["\u0275did"](44,147456,null,0,i["\u0275angular_packages_forms_forms_y"],[t.ElementRef,t.Renderer2,[8,null]],{value:[0,"value"]},null),(l()(),t["\u0275ted"](-1,null,["Select Type "])),(l()(),t["\u0275eld"](46,0,null,null,3,"option",[["value","Station"]],null,null,null,null,null)),t["\u0275did"](47,147456,null,0,i.NgSelectOption,[t.ElementRef,t.Renderer2,[2,i.SelectControlValueAccessor]],{value:[0,"value"]},null),t["\u0275did"](48,147456,null,0,i["\u0275angular_packages_forms_forms_y"],[t.ElementRef,t.Renderer2,[8,null]],{value:[0,"value"]},null),(l()(),t["\u0275ted"](-1,null,["Station"])),(l()(),t["\u0275eld"](50,0,null,null,3,"option",[["value","stop"]],null,null,null,null,null)),t["\u0275did"](51,147456,null,0,i.NgSelectOption,[t.ElementRef,t.Renderer2,[2,i.SelectControlValueAccessor]],{value:[0,"value"]},null),t["\u0275did"](52,147456,null,0,i["\u0275angular_packages_forms_forms_y"],[t.ElementRef,t.Renderer2,[8,null]],{value:[0,"value"]},null),(l()(),t["\u0275ted"](-1,null,["Stop"])),(l()(),t["\u0275eld"](54,0,null,null,3,"option",[["value","both"]],null,null,null,null,null)),t["\u0275did"](55,147456,null,0,i.NgSelectOption,[t.ElementRef,t.Renderer2,[2,i.SelectControlValueAccessor]],{value:[0,"value"]},null),t["\u0275did"](56,147456,null,0,i["\u0275angular_packages_forms_forms_y"],[t.ElementRef,t.Renderer2,[8,null]],{value:[0,"value"]},null),(l()(),t["\u0275ted"](-1,null,["Both"])),(l()(),t["\u0275and"](16777216,null,null,1,null,C)),t["\u0275did"](59,16384,null,0,r.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275eld"](60,0,null,null,15,"div",[["class","col-xs-4"]],null,null,null,null,null)),(l()(),t["\u0275eld"](61,0,null,null,3,"label",[["for",""]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Stop Name "])),(l()(),t["\u0275eld"](63,0,null,null,1,"span",[["class","text-danger"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["*"])),(l()(),t["\u0275eld"](65,0,null,null,8,"input",[["class","form-control input-sm"],["formControlName","StopName"],["id","StopName"],["placeholder","Stop Name"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0;return"input"===n&&(e=!1!==t["\u0275nov"](l,69)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t["\u0275nov"](l,69).onTouched()&&e),"compositionstart"===n&&(e=!1!==t["\u0275nov"](l,69)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t["\u0275nov"](l,69)._compositionEnd(u.target.value)&&e),e},null,null)),t["\u0275prd"](512,null,r["\u0275NgClassImpl"],r["\u0275NgClassR2Impl"],[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2]),t["\u0275did"](67,278528,null,0,r.NgClass,[r["\u0275NgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t["\u0275pod"](68,{"is-invalid":0}),t["\u0275did"](69,16384,null,0,i.DefaultValueAccessor,[t.Renderer2,t.ElementRef,[2,i.COMPOSITION_BUFFER_MODE]],null,null),t["\u0275prd"](1024,null,i.NG_VALUE_ACCESSOR,function(l){return[l]},[i.DefaultValueAccessor]),t["\u0275did"](71,671744,null,0,i.FormControlName,[[3,i.ControlContainer],[8,null],[8,null],[6,i.NG_VALUE_ACCESSOR],[2,i["\u0275angular_packages_forms_forms_q"]]],{name:[0,"name"]},null),t["\u0275prd"](2048,null,i.NgControl,null,[i.FormControlName]),t["\u0275did"](73,16384,null,0,i.NgControlStatus,[[4,i.NgControl]],null,null),(l()(),t["\u0275and"](16777216,null,null,1,null,b)),t["\u0275did"](75,16384,null,0,r.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275eld"](76,0,null,null,0,"div",[["class","space space-8"]],null,null,null,null,null)),(l()(),t["\u0275eld"](77,0,null,null,32,"div",[["class","row"]],null,null,null,null,null)),(l()(),t["\u0275eld"](78,0,null,null,15,"div",[["class","col-lg-4 col-md-6 col-xs-12"]],null,null,null,null,null)),(l()(),t["\u0275eld"](79,0,null,null,3,"label",[["for",""]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["STOP LATITUDE "])),(l()(),t["\u0275eld"](81,0,null,null,1,"span",[["class","text-danger"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["*"])),(l()(),t["\u0275eld"](83,0,null,null,8,"input",[["class","form-control input-sm email"],["formControlName","StopLat"],["id","StopLat"],["placeholder","STOP LATITUDE"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0;return"input"===n&&(e=!1!==t["\u0275nov"](l,87)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t["\u0275nov"](l,87).onTouched()&&e),"compositionstart"===n&&(e=!1!==t["\u0275nov"](l,87)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t["\u0275nov"](l,87)._compositionEnd(u.target.value)&&e),e},null,null)),t["\u0275prd"](512,null,r["\u0275NgClassImpl"],r["\u0275NgClassR2Impl"],[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2]),t["\u0275did"](85,278528,null,0,r.NgClass,[r["\u0275NgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t["\u0275pod"](86,{"is-invalid":0}),t["\u0275did"](87,16384,null,0,i.DefaultValueAccessor,[t.Renderer2,t.ElementRef,[2,i.COMPOSITION_BUFFER_MODE]],null,null),t["\u0275prd"](1024,null,i.NG_VALUE_ACCESSOR,function(l){return[l]},[i.DefaultValueAccessor]),t["\u0275did"](89,671744,null,0,i.FormControlName,[[3,i.ControlContainer],[8,null],[8,null],[6,i.NG_VALUE_ACCESSOR],[2,i["\u0275angular_packages_forms_forms_q"]]],{name:[0,"name"]},null),t["\u0275prd"](2048,null,i.NgControl,null,[i.FormControlName]),t["\u0275did"](91,16384,null,0,i.NgControlStatus,[[4,i.NgControl]],null,null),(l()(),t["\u0275and"](16777216,null,null,1,null,N)),t["\u0275did"](93,16384,null,0,r.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275eld"](94,0,null,null,15,"div",[["class","col-lg-4 col-md-6 col-xs-12"]],null,null,null,null,null)),(l()(),t["\u0275eld"](95,0,null,null,3,"label",[["for",""]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["STOP LONGITUDE "])),(l()(),t["\u0275eld"](97,0,null,null,1,"span",[["class","text-danger"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["*"])),(l()(),t["\u0275eld"](99,0,null,null,8,"input",[["class","form-control input-sm email"],["formControlName","StopLong"],["id","StopLong"],["placeholder","STOP LATITUDE"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0;return"input"===n&&(e=!1!==t["\u0275nov"](l,103)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t["\u0275nov"](l,103).onTouched()&&e),"compositionstart"===n&&(e=!1!==t["\u0275nov"](l,103)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t["\u0275nov"](l,103)._compositionEnd(u.target.value)&&e),e},null,null)),t["\u0275prd"](512,null,r["\u0275NgClassImpl"],r["\u0275NgClassR2Impl"],[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2]),t["\u0275did"](101,278528,null,0,r.NgClass,[r["\u0275NgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t["\u0275pod"](102,{"is-invalid":0}),t["\u0275did"](103,16384,null,0,i.DefaultValueAccessor,[t.Renderer2,t.ElementRef,[2,i.COMPOSITION_BUFFER_MODE]],null,null),t["\u0275prd"](1024,null,i.NG_VALUE_ACCESSOR,function(l){return[l]},[i.DefaultValueAccessor]),t["\u0275did"](105,671744,null,0,i.FormControlName,[[3,i.ControlContainer],[8,null],[8,null],[6,i.NG_VALUE_ACCESSOR],[2,i["\u0275angular_packages_forms_forms_q"]]],{name:[0,"name"]},null),t["\u0275prd"](2048,null,i.NgControl,null,[i.FormControlName]),t["\u0275did"](107,16384,null,0,i.NgControlStatus,[[4,i.NgControl]],null,null),(l()(),t["\u0275and"](16777216,null,null,1,null,R)),t["\u0275did"](109,16384,null,0,r.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275eld"](110,0,null,null,13,"div",[["class","row"]],null,null,null,null,null)),(l()(),t["\u0275eld"](111,0,null,null,12,"div",[["class","form-actions center"]],null,null,null,null,null)),(l()(),t["\u0275eld"](112,0,null,null,3,"button",[["class","btn btn-md btn-success"],["routerLink","/managebusstops"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t["\u0275nov"](l,113).onClick()&&e),e},null,null)),t["\u0275did"](113,16384,null,0,d.l,[d.k,d.a,[8,null],t.Renderer2,t.ElementRef],{routerLink:[0,"routerLink"]},null),(l()(),t["\u0275ted"](-1,null,[" Back "])),(l()(),t["\u0275eld"](115,0,null,null,0,"i",[["class","ace-icon fa fa-exchange icon-on-right bigger-110"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,[" \xa0 "])),(l()(),t["\u0275eld"](117,0,null,null,2,"button",[["class","btn btn-md btn-success"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,[" Submit "])),(l()(),t["\u0275eld"](119,0,null,null,0,"i",[["class","ace-icon fa fa-arrow-right icon-on-right bigger-110"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,[" \xa0 "])),(l()(),t["\u0275eld"](121,0,null,null,2,"button",[["class","btn"],["type","reset"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.onReset()&&e),e},null,null)),(l()(),t["\u0275eld"](122,0,null,null,0,"i",[["class","ace-icon fa fa-undo bigger-110"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,[" Reset "]))],function(l,n){var u=n.component;l(n,14,0,u.invalid),l(n,18,0,u.addstopForm),l(n,24,0,"StopId");var e=l(n,36,0,u.submitted&&u.af.StopType.errors);l(n,35,0,"form-control input-sm",e),l(n,39,0,"StopType"),l(n,43,0,""),l(n,44,0,""),l(n,47,0,"Station"),l(n,48,0,"Station"),l(n,51,0,"stop"),l(n,52,0,"stop"),l(n,55,0,"both"),l(n,56,0,"both"),l(n,59,0,u.submitted&&u.af.StopType.errors);var o=l(n,68,0,u.submitted&&u.af.StopName.errors);l(n,67,0,"form-control input-sm",o),l(n,71,0,"StopName"),l(n,75,0,u.submitted&&u.af.StopName.errors);var t=l(n,86,0,u.submitted&&u.af.StopLat.errors);l(n,85,0,"form-control input-sm email",t),l(n,89,0,"StopLat"),l(n,93,0,u.submitted&&u.af.StopLat.errors);var a=l(n,102,0,u.submitted&&u.af.StopLong.errors);l(n,101,0,"form-control input-sm email",a),l(n,105,0,"StopLong"),l(n,109,0,u.submitted&&u.af.StopLong.errors),l(n,113,0,"/managebusstops")},function(l,n){l(n,16,0,t["\u0275nov"](n,20).ngClassUntouched,t["\u0275nov"](n,20).ngClassTouched,t["\u0275nov"](n,20).ngClassPristine,t["\u0275nov"](n,20).ngClassDirty,t["\u0275nov"](n,20).ngClassValid,t["\u0275nov"](n,20).ngClassInvalid,t["\u0275nov"](n,20).ngClassPending),l(n,21,0,t["\u0275nov"](n,26).ngClassUntouched,t["\u0275nov"](n,26).ngClassTouched,t["\u0275nov"](n,26).ngClassPristine,t["\u0275nov"](n,26).ngClassDirty,t["\u0275nov"](n,26).ngClassValid,t["\u0275nov"](n,26).ngClassInvalid,t["\u0275nov"](n,26).ngClassPending),l(n,33,0,t["\u0275nov"](n,41).ngClassUntouched,t["\u0275nov"](n,41).ngClassTouched,t["\u0275nov"](n,41).ngClassPristine,t["\u0275nov"](n,41).ngClassDirty,t["\u0275nov"](n,41).ngClassValid,t["\u0275nov"](n,41).ngClassInvalid,t["\u0275nov"](n,41).ngClassPending),l(n,65,0,t["\u0275nov"](n,73).ngClassUntouched,t["\u0275nov"](n,73).ngClassTouched,t["\u0275nov"](n,73).ngClassPristine,t["\u0275nov"](n,73).ngClassDirty,t["\u0275nov"](n,73).ngClassValid,t["\u0275nov"](n,73).ngClassInvalid,t["\u0275nov"](n,73).ngClassPending),l(n,83,0,t["\u0275nov"](n,91).ngClassUntouched,t["\u0275nov"](n,91).ngClassTouched,t["\u0275nov"](n,91).ngClassPristine,t["\u0275nov"](n,91).ngClassDirty,t["\u0275nov"](n,91).ngClassValid,t["\u0275nov"](n,91).ngClassInvalid,t["\u0275nov"](n,91).ngClassPending),l(n,99,0,t["\u0275nov"](n,107).ngClassUntouched,t["\u0275nov"](n,107).ngClassTouched,t["\u0275nov"](n,107).ngClassPristine,t["\u0275nov"](n,107).ngClassDirty,t["\u0275nov"](n,107).ngClassValid,t["\u0275nov"](n,107).ngClassInvalid,t["\u0275nov"](n,107).ngClassPending)})}function E(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-addbusstop",[],null,null,null,I,g)),t["\u0275did"](1,114688,null,0,p,[i.FormBuilder,d.k,m.a,d.a],null,null)],function(l,n){l(n,1,0)},null)}var y=t["\u0275ccf"]("app-addbusstop",p,E,{},{},[]);var T=function l(){};o.d(e,"AddbusstopModuleNgFactory",function(){return V});var V=t["\u0275cmf"](a,[],function(l){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[s.a,y]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,r.NgLocalization,r.NgLocaleLocalization,[t.LOCALE_ID,[2,r["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,i["\u0275angular_packages_forms_forms_o"],i["\u0275angular_packages_forms_forms_o"],[]),t["\u0275mpd"](4608,i.FormBuilder,i.FormBuilder,[]),t["\u0275mpd"](1073742336,r.CommonModule,r.CommonModule,[]),t["\u0275mpd"](1073742336,d.o,d.o,[[2,d.t],[2,d.k]]),t["\u0275mpd"](1073742336,T,T,[]),t["\u0275mpd"](1073742336,i["\u0275angular_packages_forms_forms_d"],i["\u0275angular_packages_forms_forms_d"],[]),t["\u0275mpd"](1073742336,i.FormsModule,i.FormsModule,[]),t["\u0275mpd"](1073742336,i.ReactiveFormsModule,i.ReactiveFormsModule,[]),t["\u0275mpd"](1073742336,a,a,[]),t["\u0275mpd"](1024,d.i,function(){return[[{path:"",component:p}]]},[])])})}}]);