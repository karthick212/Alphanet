(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"V+1A":function(l,n,u){"use strict";u.r(n);var e=u("8Y7J");class o{}var t=u("pMnS"),s=u("s7LF"),r=u("SVse"),i=u("iInd"),a=u("z6cu");class d{constructor(l,n,u,e){this.fb=l,this.router=n,this.api=u,this.route=e,this.temp_var=!1,this.temp=!1,this.submitted=!1}get routeFormGroup(){return this.form.get("bustimings")}ngOnInit(){this.api.isInArray(this.api.getPermissions(),"5")||this.router.navigate(["dashboard"]),this.route.params.subscribe(l=>{l.id&&this.loadEditBus(l.id)}),this.form=this.fb.group({busId:[""],busno:[null,s.Validators.compose([s.Validators.required])],busregno:[null,s.Validators.compose([s.Validators.required])],routeid:[null,s.Validators.compose([s.Validators.required])],loginid:[this.api.getLoginId()],bustimings:this.fb.array([this.createRoute()])}),this.RouteList=this.form.get("bustimings"),this.loadAllRoutes()}createRoute(){return this.fb.group({departure:[null,s.Validators.compose([s.Validators.required])],arrival:[null,s.Validators.compose([s.Validators.required])]})}ERoute(l,n){return this.fb.group({departure:[l,s.Validators.compose([s.Validators.required])],arrival:[n,s.Validators.compose([s.Validators.required])]})}addRoute(){this.RouteList.push(this.createRoute())}editRoute(l,n){this.RouteList.push(this.ERoute(l,n))}removeRoute(l){this.RouteList.removeAt(l)}getRoutesFormGroup(l){return this.RouteList.controls[l]}loadAllRoutes(){this.api.getbusroutes().subscribe(l=>{Object.keys(l.data).length?(console.log(l.data),this.RouteLists=l.data,this.temp_var=!0):this.temp_var=!1},l=>Object(a.a)(l))}submit(){this.submitted=!0;var l=this.form.value;console.log("Route Details :"+JSON.stringify(l)),this.form.value.busId?(l.id=this.form.value.busId,delete l.busId,console.log("edit bus Details :"+JSON.stringify(l)),this.api.editbus(l).subscribe(l=>{Object.keys(l).length?(this.submitted=!0,this.invalid=!0,this.errorMsg="Bus Updated Successfully",console.log("updated bus success"),this.router.navigate(["managebuses"])):(this.submitted=!1,this.invalid=!1,this.errorMsg="Bus Not Updated",console.log("updated Bus failed"))},l=>(this.submitted=!0,this.invalid=!1,this.errorMsg=l,Object(a.a)(l)))):this.api.newbus(l).subscribe(l=>{Object.keys(l).length?(this.submitted=!0,this.invalid=!0,this.errorMsg="Bus Added Successfully",console.log("add bus success"),this.router.navigate(["managebuses"]),this.form.reset()):(this.submitted=!1,this.invalid=!1,this.errorMsg="Bus Not Added",console.log("add bus failed"))},l=>(this.submitted=!0,this.invalid=!1,this.errorMsg=l,Object(a.a)(l)))}loadEditBus(l){this.api.geteditbus(l).subscribe(l=>{if(Object.keys(l.data).length){let n=JSON.parse(JSON.stringify(l.data));this.form.controls.busId.setValue(n[0].BusId),this.form.controls.busno.setValue(n[0].BusNo),this.form.controls.busregno.setValue(n[0].BusRegisterNo),this.form.controls.routeid.setValue(n[0].RouteId),this.loadEditRoutedetails(n[0].BusId)}},l=>Object(a.a)(l))}loadEditRoutedetails(l){this.api.getallidbustime(l).subscribe(l=>{if(Object.keys(l.data).length){let n=JSON.stringify(l.data);console.log("Bus Time Details :"+n);let u=l.data;this.Rdetails=u,this.temp=!0,this.removeRoute(0);for(let e=0;e<Object.keys(l.data).length;e++)console.log("chk"+u[e].BusId),this.editRoute(u[e].Departure,u[e].Arrival)}else this.temp=!1},l=>Object(a.a)(l))}onReset(){this.submitted=!1,this.form.reset()}}var c=u("H+bZ"),g=e["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function m(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,3,"div",[["class","col-xs-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,2,"p",[["class","alert alert-success"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e["\u0275ted"](3,null,["",""]))],null,function(l,n){l(n,3,0,n.component.errorMsg)})}function p(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,"div",[["class","invalid-feedback"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" Bus No is required "]))],null,null)}function v(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,"div",[["class","invalid-feedback"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" Bus Registration No is required "]))],null,null)}function f(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,3,"option",[],null,null,null,null,null)),e["\u0275did"](1,147456,null,0,s.NgSelectOption,[e.ElementRef,e.Renderer2,[2,s.SelectControlValueAccessor]],{value:[0,"value"]},null),e["\u0275did"](2,147456,null,0,s["\u0275angular_packages_forms_forms_y"],[e.ElementRef,e.Renderer2,[8,null]],{value:[0,"value"]},null),(l()(),e["\u0275ted"](3,null,[""," ( "," ) "]))],function(l,n){l(n,1,0,e["\u0275inlineInterpolate"](1,"",n.context.$implicit.routeid,"")),l(n,2,0,e["\u0275inlineInterpolate"](1,"",n.context.$implicit.routeid,""))},function(l,n){l(n,3,0,n.context.$implicit.RouteName,n.context.$implicit.ServiceType)})}function C(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,"div",[["class","invalid-feedback"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" Route Name is required "]))],null,null)}function h(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,"div",[["class","invalid-feedback"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" Departure Time is required "]))],null,null)}function b(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,"div",[["class","invalid-feedback"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" Arrival Time is required "]))],null,null)}function _(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,36,"div",[["class","col-xs-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,35,"div",[["class","row"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],null,null,null,null)),e["\u0275did"](2,212992,null,0,s.FormGroupName,[[3,s.ControlContainer],[8,null],[8,null]],{name:[0,"name"]},null),e["\u0275prd"](2048,null,s.ControlContainer,null,[s.FormGroupName]),e["\u0275did"](4,16384,null,0,s.NgControlStatusGroup,[[4,s.ControlContainer]],null,null),(l()(),e["\u0275eld"](5,0,null,null,12,"div",[["class","col-xs-3"]],null,null,null,null,null)),(l()(),e["\u0275eld"](6,0,null,null,3,"label",[["for",""]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" Departure Time "])),(l()(),e["\u0275eld"](8,0,null,null,1,"span",[["class","text-danger"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["*"])),(l()(),e["\u0275eld"](10,0,null,null,5,"input",[["autocomplete","off"],["class","form-control input-sm"],["formControlName","departure"],["id","departure"],["placeholder","Departure Time"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var o=!0;return"input"===n&&(o=!1!==e["\u0275nov"](l,11)._handleInput(u.target.value)&&o),"blur"===n&&(o=!1!==e["\u0275nov"](l,11).onTouched()&&o),"compositionstart"===n&&(o=!1!==e["\u0275nov"](l,11)._compositionStart()&&o),"compositionend"===n&&(o=!1!==e["\u0275nov"](l,11)._compositionEnd(u.target.value)&&o),o},null,null)),e["\u0275did"](11,16384,null,0,s.DefaultValueAccessor,[e.Renderer2,e.ElementRef,[2,s.COMPOSITION_BUFFER_MODE]],null,null),e["\u0275prd"](1024,null,s.NG_VALUE_ACCESSOR,function(l){return[l]},[s.DefaultValueAccessor]),e["\u0275did"](13,671744,null,0,s.FormControlName,[[3,s.ControlContainer],[8,null],[8,null],[6,s.NG_VALUE_ACCESSOR],[2,s["\u0275angular_packages_forms_forms_q"]]],{name:[0,"name"]},null),e["\u0275prd"](2048,null,s.NgControl,null,[s.FormControlName]),e["\u0275did"](15,16384,null,0,s.NgControlStatus,[[4,s.NgControl]],null,null),(l()(),e["\u0275and"](16777216,null,null,1,null,h)),e["\u0275did"](17,16384,null,0,r.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275eld"](18,0,null,null,12,"div",[["class","col-xs-3"]],null,null,null,null,null)),(l()(),e["\u0275eld"](19,0,null,null,3,"label",[["for",""]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" Arrival Time "])),(l()(),e["\u0275eld"](21,0,null,null,1,"span",[["class","text-danger"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["*"])),(l()(),e["\u0275eld"](23,0,null,null,5,"input",[["autocomplete","off"],["class","form-control input-sm"],["formControlName","arrival"],["id","arrival"],["placeholder","Arrival Time"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var o=!0;return"input"===n&&(o=!1!==e["\u0275nov"](l,24)._handleInput(u.target.value)&&o),"blur"===n&&(o=!1!==e["\u0275nov"](l,24).onTouched()&&o),"compositionstart"===n&&(o=!1!==e["\u0275nov"](l,24)._compositionStart()&&o),"compositionend"===n&&(o=!1!==e["\u0275nov"](l,24)._compositionEnd(u.target.value)&&o),o},null,null)),e["\u0275did"](24,16384,null,0,s.DefaultValueAccessor,[e.Renderer2,e.ElementRef,[2,s.COMPOSITION_BUFFER_MODE]],null,null),e["\u0275prd"](1024,null,s.NG_VALUE_ACCESSOR,function(l){return[l]},[s.DefaultValueAccessor]),e["\u0275did"](26,671744,null,0,s.FormControlName,[[3,s.ControlContainer],[8,null],[8,null],[6,s.NG_VALUE_ACCESSOR],[2,s["\u0275angular_packages_forms_forms_q"]]],{name:[0,"name"]},null),e["\u0275prd"](2048,null,s.NgControl,null,[s.FormControlName]),e["\u0275did"](28,16384,null,0,s.NgControlStatus,[[4,s.NgControl]],null,null),(l()(),e["\u0275and"](16777216,null,null,1,null,b)),e["\u0275did"](30,16384,null,0,r.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275eld"](31,0,null,null,5,"div",[["class","col-xs-2"],["style","padding-top: 14px;"]],null,null,null,null,null)),(l()(),e["\u0275eld"](32,0,null,null,1,"button",[["class","btn btn-primary btn-small"],["type","button"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.addRoute()&&e),e},null,null)),(l()(),e["\u0275eld"](33,0,null,null,0,"i",[["class","icon fa fa-plus"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" \xa0\xa0 "])),(l()(),e["\u0275eld"](35,0,null,null,1,"button",[["class","btn btn-danger btn-small"],["type","button"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.removeRoute(l.context.index)&&e),e},null,null)),(l()(),e["\u0275eld"](36,0,null,null,0,"i",[["class","icon fa fa-trash-o"]],null,null,null,null,null))],function(l,n){var u=n.component;l(n,2,0,n.context.index),l(n,13,0,"departure"),l(n,17,0,u.getRoutesFormGroup(n.context.index).controls.departure.touched&&u.getRoutesFormGroup(n.context.index).controls.departure.hasError("required")),l(n,26,0,"arrival"),l(n,30,0,u.getRoutesFormGroup(n.context.index).controls.arrival.touched&&u.getRoutesFormGroup(n.context.index).controls.arrival.hasError("required"))},function(l,n){l(n,1,0,e["\u0275nov"](n,4).ngClassUntouched,e["\u0275nov"](n,4).ngClassTouched,e["\u0275nov"](n,4).ngClassPristine,e["\u0275nov"](n,4).ngClassDirty,e["\u0275nov"](n,4).ngClassValid,e["\u0275nov"](n,4).ngClassInvalid,e["\u0275nov"](n,4).ngClassPending),l(n,10,0,e["\u0275nov"](n,15).ngClassUntouched,e["\u0275nov"](n,15).ngClassTouched,e["\u0275nov"](n,15).ngClassPristine,e["\u0275nov"](n,15).ngClassDirty,e["\u0275nov"](n,15).ngClassValid,e["\u0275nov"](n,15).ngClassInvalid,e["\u0275nov"](n,15).ngClassPending),l(n,23,0,e["\u0275nov"](n,28).ngClassUntouched,e["\u0275nov"](n,28).ngClassTouched,e["\u0275nov"](n,28).ngClassPristine,e["\u0275nov"](n,28).ngClassDirty,e["\u0275nov"](n,28).ngClassValid,e["\u0275nov"](n,28).ngClassInvalid,e["\u0275nov"](n,28).ngClassPending)})}function R(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,78,"div",[["class","widget-main"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,77,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,u){var o=!0,t=l.component;return"submit"===n&&(o=!1!==e["\u0275nov"](l,3).onSubmit(u)&&o),"reset"===n&&(o=!1!==e["\u0275nov"](l,3).onReset()&&o),"submit"===n&&(o=!1!==t.submit()&&o),o},null,null)),e["\u0275did"](2,16384,null,0,s["\u0275angular_packages_forms_forms_z"],[],null,null),e["\u0275did"](3,540672,null,0,s.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},null),e["\u0275prd"](2048,null,s.ControlContainer,null,[s.FormGroupDirective]),e["\u0275did"](5,16384,null,0,s.NgControlStatusGroup,[[4,s.ControlContainer]],null,null),(l()(),e["\u0275eld"](6,0,null,null,5,"input",[["class","form-control input-sm number"],["formControlName","busId"],["id","busId"],["type","hidden"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var o=!0;return"input"===n&&(o=!1!==e["\u0275nov"](l,7)._handleInput(u.target.value)&&o),"blur"===n&&(o=!1!==e["\u0275nov"](l,7).onTouched()&&o),"compositionstart"===n&&(o=!1!==e["\u0275nov"](l,7)._compositionStart()&&o),"compositionend"===n&&(o=!1!==e["\u0275nov"](l,7)._compositionEnd(u.target.value)&&o),o},null,null)),e["\u0275did"](7,16384,null,0,s.DefaultValueAccessor,[e.Renderer2,e.ElementRef,[2,s.COMPOSITION_BUFFER_MODE]],null,null),e["\u0275prd"](1024,null,s.NG_VALUE_ACCESSOR,function(l){return[l]},[s.DefaultValueAccessor]),e["\u0275did"](9,671744,null,0,s.FormControlName,[[3,s.ControlContainer],[8,null],[8,null],[6,s.NG_VALUE_ACCESSOR],[2,s["\u0275angular_packages_forms_forms_q"]]],{name:[0,"name"]},null),e["\u0275prd"](2048,null,s.NgControl,null,[s.FormControlName]),e["\u0275did"](11,16384,null,0,s.NgControlStatus,[[4,s.NgControl]],null,null),(l()(),e["\u0275eld"](12,0,null,null,45,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](13,0,null,null,12,"div",[["class","col-xs-4"]],null,null,null,null,null)),(l()(),e["\u0275eld"](14,0,null,null,3,"label",[["for",""]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Bus No "])),(l()(),e["\u0275eld"](16,0,null,null,1,"span",[["class","text-danger"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["*"])),(l()(),e["\u0275eld"](18,0,null,null,5,"input",[["autocomplete","off"],["class","form-control input-sm"],["formControlName","busno"],["id","busno"],["placeholder","Bus No"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var o=!0;return"input"===n&&(o=!1!==e["\u0275nov"](l,19)._handleInput(u.target.value)&&o),"blur"===n&&(o=!1!==e["\u0275nov"](l,19).onTouched()&&o),"compositionstart"===n&&(o=!1!==e["\u0275nov"](l,19)._compositionStart()&&o),"compositionend"===n&&(o=!1!==e["\u0275nov"](l,19)._compositionEnd(u.target.value)&&o),o},null,null)),e["\u0275did"](19,16384,null,0,s.DefaultValueAccessor,[e.Renderer2,e.ElementRef,[2,s.COMPOSITION_BUFFER_MODE]],null,null),e["\u0275prd"](1024,null,s.NG_VALUE_ACCESSOR,function(l){return[l]},[s.DefaultValueAccessor]),e["\u0275did"](21,671744,null,0,s.FormControlName,[[3,s.ControlContainer],[8,null],[8,null],[6,s.NG_VALUE_ACCESSOR],[2,s["\u0275angular_packages_forms_forms_q"]]],{name:[0,"name"]},null),e["\u0275prd"](2048,null,s.NgControl,null,[s.FormControlName]),e["\u0275did"](23,16384,null,0,s.NgControlStatus,[[4,s.NgControl]],null,null),(l()(),e["\u0275and"](16777216,null,null,1,null,p)),e["\u0275did"](25,16384,null,0,r.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275eld"](26,0,null,null,12,"div",[["class","col-xs-4"]],null,null,null,null,null)),(l()(),e["\u0275eld"](27,0,null,null,3,"label",[["for",""]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Bus Registration No "])),(l()(),e["\u0275eld"](29,0,null,null,1,"span",[["class","text-danger"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["*"])),(l()(),e["\u0275eld"](31,0,null,null,5,"input",[["autocomplete","off"],["class","form-control input-sm"],["formControlName","busregno"],["id","busregno"],["placeholder","Registration No"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var o=!0;return"input"===n&&(o=!1!==e["\u0275nov"](l,32)._handleInput(u.target.value)&&o),"blur"===n&&(o=!1!==e["\u0275nov"](l,32).onTouched()&&o),"compositionstart"===n&&(o=!1!==e["\u0275nov"](l,32)._compositionStart()&&o),"compositionend"===n&&(o=!1!==e["\u0275nov"](l,32)._compositionEnd(u.target.value)&&o),o},null,null)),e["\u0275did"](32,16384,null,0,s.DefaultValueAccessor,[e.Renderer2,e.ElementRef,[2,s.COMPOSITION_BUFFER_MODE]],null,null),e["\u0275prd"](1024,null,s.NG_VALUE_ACCESSOR,function(l){return[l]},[s.DefaultValueAccessor]),e["\u0275did"](34,671744,null,0,s.FormControlName,[[3,s.ControlContainer],[8,null],[8,null],[6,s.NG_VALUE_ACCESSOR],[2,s["\u0275angular_packages_forms_forms_q"]]],{name:[0,"name"]},null),e["\u0275prd"](2048,null,s.NgControl,null,[s.FormControlName]),e["\u0275did"](36,16384,null,0,s.NgControlStatus,[[4,s.NgControl]],null,null),(l()(),e["\u0275and"](16777216,null,null,1,null,v)),e["\u0275did"](38,16384,null,0,r.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275eld"](39,0,null,null,18,"div",[["class","col-xs-4"]],null,null,null,null,null)),(l()(),e["\u0275eld"](40,0,null,null,3,"label",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" Route Name "])),(l()(),e["\u0275eld"](42,0,null,null,1,"span",[["class","text-danger"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["*"])),(l()(),e["\u0275eld"](44,0,null,null,11,"select",[["class","form-control"],["formControlName","routeid"],["placeholder","Route Name"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"change"],[null,"blur"]],function(l,n,u){var o=!0;return"change"===n&&(o=!1!==e["\u0275nov"](l,45).onChange(u.target.value)&&o),"blur"===n&&(o=!1!==e["\u0275nov"](l,45).onTouched()&&o),o},null,null)),e["\u0275did"](45,16384,null,0,s.SelectControlValueAccessor,[e.Renderer2,e.ElementRef],null,null),e["\u0275prd"](1024,null,s.NG_VALUE_ACCESSOR,function(l){return[l]},[s.SelectControlValueAccessor]),e["\u0275did"](47,671744,null,0,s.FormControlName,[[3,s.ControlContainer],[8,null],[8,null],[6,s.NG_VALUE_ACCESSOR],[2,s["\u0275angular_packages_forms_forms_q"]]],{name:[0,"name"]},null),e["\u0275prd"](2048,null,s.NgControl,null,[s.FormControlName]),e["\u0275did"](49,16384,null,0,s.NgControlStatus,[[4,s.NgControl]],null,null),(l()(),e["\u0275eld"](50,0,null,null,3,"option",[["value",""]],null,null,null,null,null)),e["\u0275did"](51,147456,null,0,s.NgSelectOption,[e.ElementRef,e.Renderer2,[2,s.SelectControlValueAccessor]],{value:[0,"value"]},null),e["\u0275did"](52,147456,null,0,s["\u0275angular_packages_forms_forms_y"],[e.ElementRef,e.Renderer2,[8,null]],{value:[0,"value"]},null),(l()(),e["\u0275ted"](-1,null,[" Select Route Name "])),(l()(),e["\u0275and"](16777216,null,null,1,null,f)),e["\u0275did"](55,278528,null,0,r.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,C)),e["\u0275did"](57,16384,null,0,r.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275eld"](58,0,null,null,0,"div",[["class","space space-8"]],null,null,null,null,null)),(l()(),e["\u0275eld"](59,0,null,null,5,"div",[["class","row"],["formArrayName","bustimings"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],null,null,null,null)),e["\u0275did"](60,212992,null,0,s.FormArrayName,[[3,s.ControlContainer],[8,null],[8,null]],{name:[0,"name"]},null),e["\u0275prd"](2048,null,s.ControlContainer,null,[s.FormArrayName]),e["\u0275did"](62,16384,null,0,s.NgControlStatusGroup,[[4,s.ControlContainer]],null,null),(l()(),e["\u0275and"](16777216,null,null,1,null,_)),e["\u0275did"](64,278528,null,0,r.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275eld"](65,0,null,null,13,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](66,0,null,null,12,"div",[["class","form-actions center"]],null,null,null,null,null)),(l()(),e["\u0275eld"](67,0,null,null,3,"button",[["class","btn btn-md btn-success"],["routerLink","/managebusroutes"]],null,[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==e["\u0275nov"](l,68).onClick()&&o),o},null,null)),e["\u0275did"](68,16384,null,0,i.l,[i.k,i.a,[8,null],e.Renderer2,e.ElementRef],{routerLink:[0,"routerLink"]},null),(l()(),e["\u0275ted"](-1,null,[" Back "])),(l()(),e["\u0275eld"](70,0,null,null,0,"i",[["class","ace-icon fa fa-exchange icon-on-right bigger-110"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" \xa0 "])),(l()(),e["\u0275eld"](72,0,null,null,2,"button",[["class","btn btn-md btn-success"]],[[8,"disabled",0]],null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" Submit "])),(l()(),e["\u0275eld"](74,0,null,null,0,"i",[["class","ace-icon fa fa-arrow-right icon-on-right bigger-110"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" \xa0 "])),(l()(),e["\u0275eld"](76,0,null,null,2,"button",[["class","btn"],["type","reset"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.onReset()&&e),e},null,null)),(l()(),e["\u0275eld"](77,0,null,null,0,"i",[["class","ace-icon fa fa-undo bigger-110"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" Reset "]))],function(l,n){var u=n.component;l(n,3,0,u.form),l(n,9,0,"busId"),l(n,21,0,"busno"),l(n,25,0,u.form.controls.busno.touched&&u.form.controls.busno.hasError("required")),l(n,34,0,"busregno"),l(n,38,0,u.form.controls.busregno.touched&&u.form.controls.busregno.hasError("required")),l(n,47,0,"routeid"),l(n,51,0,""),l(n,52,0,""),l(n,55,0,u.RouteLists),l(n,57,0,u.form.controls.routeid.touched&&u.form.controls.routeid.hasError("required")),l(n,60,0,"bustimings"),l(n,64,0,u.routeFormGroup.controls),l(n,68,0,"/managebusroutes")},function(l,n){var u=n.component;l(n,1,0,e["\u0275nov"](n,5).ngClassUntouched,e["\u0275nov"](n,5).ngClassTouched,e["\u0275nov"](n,5).ngClassPristine,e["\u0275nov"](n,5).ngClassDirty,e["\u0275nov"](n,5).ngClassValid,e["\u0275nov"](n,5).ngClassInvalid,e["\u0275nov"](n,5).ngClassPending),l(n,6,0,e["\u0275nov"](n,11).ngClassUntouched,e["\u0275nov"](n,11).ngClassTouched,e["\u0275nov"](n,11).ngClassPristine,e["\u0275nov"](n,11).ngClassDirty,e["\u0275nov"](n,11).ngClassValid,e["\u0275nov"](n,11).ngClassInvalid,e["\u0275nov"](n,11).ngClassPending),l(n,18,0,e["\u0275nov"](n,23).ngClassUntouched,e["\u0275nov"](n,23).ngClassTouched,e["\u0275nov"](n,23).ngClassPristine,e["\u0275nov"](n,23).ngClassDirty,e["\u0275nov"](n,23).ngClassValid,e["\u0275nov"](n,23).ngClassInvalid,e["\u0275nov"](n,23).ngClassPending),l(n,31,0,e["\u0275nov"](n,36).ngClassUntouched,e["\u0275nov"](n,36).ngClassTouched,e["\u0275nov"](n,36).ngClassPristine,e["\u0275nov"](n,36).ngClassDirty,e["\u0275nov"](n,36).ngClassValid,e["\u0275nov"](n,36).ngClassInvalid,e["\u0275nov"](n,36).ngClassPending),l(n,44,0,e["\u0275nov"](n,49).ngClassUntouched,e["\u0275nov"](n,49).ngClassTouched,e["\u0275nov"](n,49).ngClassPristine,e["\u0275nov"](n,49).ngClassDirty,e["\u0275nov"](n,49).ngClassValid,e["\u0275nov"](n,49).ngClassInvalid,e["\u0275nov"](n,49).ngClassPending),l(n,59,0,e["\u0275nov"](n,62).ngClassUntouched,e["\u0275nov"](n,62).ngClassTouched,e["\u0275nov"](n,62).ngClassPristine,e["\u0275nov"](n,62).ngClassDirty,e["\u0275nov"](n,62).ngClassValid,e["\u0275nov"](n,62).ngClassInvalid,e["\u0275nov"](n,62).ngClassPending),l(n,72,0,!u.form.valid)})}function N(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,16,"div",[["class","main-content"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,15,"div",[["class","main-content-inner"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,7,"div",[["class","breadcrumbs ace-save-state"],["id","breadcrumbs"]],null,null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,6,"ul",[["class","breadcrumb"]],null,null,null,null,null)),(l()(),e["\u0275eld"](4,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),e["\u0275eld"](5,0,null,null,0,"i",[["class","ace-icon fa fa-home home-icon"]],null,null,null,null,null)),(l()(),e["\u0275eld"](6,0,null,null,1,"a",[["href","#"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Home"])),(l()(),e["\u0275eld"](8,0,null,null,1,"li",[["class","active"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["ADD BUSES"])),(l()(),e["\u0275eld"](10,0,null,null,6,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](11,0,null,null,5,"div",[["class","col-xs-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](12,0,null,null,4,"div",[["class","widget-body"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,m)),e["\u0275did"](14,16384,null,0,r.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,R)),e["\u0275did"](16,16384,null,0,r.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,14,0,u.invalid),l(n,16,0,u.temp_var)},null)}function I(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-addbus",[],null,null,null,N,g)),e["\u0275did"](1,114688,null,0,d,[s.FormBuilder,i.k,c.a,i.a],null,null)],function(l,n){l(n,1,0)},null)}var S=e["\u0275ccf"]("app-addbus",d,I,{},{},[]);class V{}u.d(n,"AddbusModuleNgFactory",function(){return E});var E=e["\u0275cmf"](o,[],function(l){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[t.a,S]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,r.NgLocalization,r.NgLocaleLocalization,[e.LOCALE_ID,[2,r["\u0275angular_packages_common_common_a"]]]),e["\u0275mpd"](4608,s["\u0275angular_packages_forms_forms_o"],s["\u0275angular_packages_forms_forms_o"],[]),e["\u0275mpd"](4608,s.FormBuilder,s.FormBuilder,[]),e["\u0275mpd"](1073742336,r.CommonModule,r.CommonModule,[]),e["\u0275mpd"](1073742336,i.o,i.o,[[2,i.t],[2,i.k]]),e["\u0275mpd"](1073742336,V,V,[]),e["\u0275mpd"](1073742336,s["\u0275angular_packages_forms_forms_d"],s["\u0275angular_packages_forms_forms_d"],[]),e["\u0275mpd"](1073742336,s.FormsModule,s.FormsModule,[]),e["\u0275mpd"](1073742336,s.ReactiveFormsModule,s.ReactiveFormsModule,[]),e["\u0275mpd"](1073742336,o,o,[]),e["\u0275mpd"](1024,i.i,function(){return[[{path:"",component:d}]]},[])])})}}]);