(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{gXGP:function l(n,u,e){"use strict";e.r(u);var t=e("8Y7J");var o=function l(){};var i=e("pMnS"),a=e("s7LF"),s=e("MCZq"),r=e("gF1S"),d=e("SVse"),c=e("K+Kt"),m=e("z6cu");var p=function(){function l(l,n,u,e){this.fb=l,this.router=n,this.api=u,this.route=e,this.dtOptions={},this.isMenuOpen=!1,this.temp_var=!1,this.options={displayFormat:"DD-MM-YYYY",useEmptyBarTitle:!1}}var n=l.prototype;n.ngOnInit=function l(){this.api.isInArray(this.api.getPermissions(),"12")||this.router.navigate(["dashboard"]),this.form=this.fb.group({fromdate:[""],todate:[""],busno:[""],routeid:[""],bookingid:[""]}),this.loadAllBuses(),this.loadAllRoutes()};n.loadAllRoutes=function l(){var n=this;this.api.getbusroutes().subscribe(function(l){Object.keys(l.data).length?(console.log(l.data),n.RouteLists=l.data,n.temp_var=!0):n.temp_var=!1},function(l){return Object(m.a)(l)})};n.loadAllBuses=function l(){var n=this;this.api.getreportsviewgpass("").subscribe(function(l){"failed"!=l.status&&(Object.keys(l.data).length?(console.log(l.data),n.BusLists=l.data,n.temp_var=!0,n.dtOptions={dom:"lfBrtip",select:!0,buttons:[{extend:"print",title:""},{extend:"excelHtml5",title:""}],responsive:!0}):n.temp_var=!1)},function(l){return Object(m.a)(l)})};n.submit=function l(){var n=this;var u=this.form.value;function e(l){var n=new Date(l),u=("0"+(n.getMonth()+1)).slice(-2),e=("0"+n.getDate()).slice(-2);return[n.getFullYear(),u,e].join("-")}var t=this.form.value.fromdate.replace("NaN-aN-aN",""),o=this.form.value.todate.replace("NaN-aN-aN","");t&&o&&(u.fromdate=e(this.form.value.fromdate),u.todate=e(this.form.value.todate)),u.fromdate=t,u.todate=o,console.log("general Pass booking filter :"+JSON.stringify(u)),this.api.getreportsviewgpass(u).subscribe(function(l){Object.keys(l).length?(console.log(l.data),n.BusLists=l.data,n.temp_var=!0,n.dtOptions={dom:"lfBrtip",select:!0,buttons:[{extend:"print",title:""},{extend:"excelHtml5",title:""}],responsive:!0}):console.log(l.data)},function(l){return Object(m.a)(l)})};n.toggleMenu=function l(){this.isMenuOpen=!this.isMenuOpen};return l}();var g=e("iInd"),v=e("H+bZ"),f=t["\u0275crt"]({encapsulation:0,styles:[[""]],data:{animation:[{type:7,name:"animationOption1",definitions:[{type:0,name:"start",styles:{type:6,styles:{backgroundColor:"yellow",width:"150px",height:"150px"},offset:null},options:void 0},{type:0,name:"end",styles:{type:6,styles:{backgroundColor:"green",width:"300px",height:"300px"},offset:null},options:void 0},{type:1,expr:"start => end",animation:{type:4,styles:null,timings:1500},options:null},{type:1,expr:"end => start",animation:{type:4,styles:null,timings:"800ms 0.5s ease-out"},options:null}],options:{}},{type:7,name:"animationOption2",definitions:[{type:1,expr:":enter",animation:[{type:4,styles:null,timings:300}],options:null},{type:1,expr:":leave",animation:[{type:4,styles:null,timings:0}],options:null},{type:0,name:"*",styles:{type:6,styles:{},offset:null},options:void 0}],options:{}}]}});function C(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,3,"option",[],null,null,null,null,null)),t["\u0275did"](1,147456,null,0,a.NgSelectOption,[t.ElementRef,t.Renderer2,[2,a.SelectControlValueAccessor]],{value:[0,"value"]},null),t["\u0275did"](2,147456,null,0,a["\u0275angular_packages_forms_forms_y"],[t.ElementRef,t.Renderer2,[8,null]],{value:[0,"value"]},null),(l()(),t["\u0275ted"](3,null,[""," ( "," ) "]))],function(l,n){l(n,1,0,t["\u0275inlineInterpolate"](1,"",n.context.$implicit.routeid,"")),l(n,2,0,t["\u0275inlineInterpolate"](1,"",n.context.$implicit.routeid,""))},function(l,n){l(n,3,0,n.context.$implicit.RouteName,n.context.$implicit.ServiceType)})}function h(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,62,"div",[],[[24,"@animationOption2",0]],null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,61,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,u){var e=!0,o=l.component;return"submit"===n&&(e=!1!==t["\u0275nov"](l,3).onSubmit(u)&&e),"reset"===n&&(e=!1!==t["\u0275nov"](l,3).onReset()&&e),"submit"===n&&(e=!1!==o.submit()&&e),e},null,null)),t["\u0275did"](2,16384,null,0,a["\u0275angular_packages_forms_forms_z"],[],null,null),t["\u0275did"](3,540672,null,0,a.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},null),t["\u0275prd"](2048,null,a.ControlContainer,null,[a.FormGroupDirective]),t["\u0275did"](5,16384,null,0,a.NgControlStatusGroup,[[4,a.ControlContainer]],null,null),(l()(),t["\u0275eld"](6,0,null,null,8,"div",[["class","col-xs-3"]],null,null,null,null,null)),(l()(),t["\u0275eld"](7,0,null,null,1,"label",[["for",""]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,[" FROM DATE "])),(l()(),t["\u0275eld"](9,0,null,null,5,"ng-datepicker",[["class","input-md"],["formControlName","fromdate"],["id","fromdate"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[["document","click"]],function(l,n,u){var e=!0;return"document:click"===n&&(e=!1!==t["\u0275nov"](l,10).onBlur(u)&&e),e},s.b,s.a)),t["\u0275did"](10,638976,null,0,r.NgDatepickerComponent,[t.ElementRef],{options:[0,"options"]},null),t["\u0275prd"](1024,null,a.NG_VALUE_ACCESSOR,function(l){return[l]},[r.NgDatepickerComponent]),t["\u0275did"](12,671744,null,0,a.FormControlName,[[3,a.ControlContainer],[8,null],[8,null],[6,a.NG_VALUE_ACCESSOR],[2,a["\u0275angular_packages_forms_forms_q"]]],{name:[0,"name"]},null),t["\u0275prd"](2048,null,a.NgControl,null,[a.FormControlName]),t["\u0275did"](14,16384,null,0,a.NgControlStatus,[[4,a.NgControl]],null,null),(l()(),t["\u0275eld"](15,0,null,null,8,"div",[["class","col-xs-3"]],null,null,null,null,null)),(l()(),t["\u0275eld"](16,0,null,null,1,"label",[["for",""]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,[" TO DATE "])),(l()(),t["\u0275eld"](18,0,null,null,5,"ng-datepicker",[["class","input-md"],["formControlName","todate"],["id","todate"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[["document","click"]],function(l,n,u){var e=!0;return"document:click"===n&&(e=!1!==t["\u0275nov"](l,19).onBlur(u)&&e),e},s.b,s.a)),t["\u0275did"](19,638976,null,0,r.NgDatepickerComponent,[t.ElementRef],{options:[0,"options"]},null),t["\u0275prd"](1024,null,a.NG_VALUE_ACCESSOR,function(l){return[l]},[r.NgDatepickerComponent]),t["\u0275did"](21,671744,null,0,a.FormControlName,[[3,a.ControlContainer],[8,null],[8,null],[6,a.NG_VALUE_ACCESSOR],[2,a["\u0275angular_packages_forms_forms_q"]]],{name:[0,"name"]},null),t["\u0275prd"](2048,null,a.NgControl,null,[a.FormControlName]),t["\u0275did"](23,16384,null,0,a.NgControlStatus,[[4,a.NgControl]],null,null),(l()(),t["\u0275eld"](24,0,null,null,0,"div",[["class","clearfix"]],null,null,null,null,null)),(l()(),t["\u0275eld"](25,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t["\u0275eld"](26,0,null,null,8,"div",[["class","col-xs-3"]],null,null,null,null,null)),(l()(),t["\u0275eld"](27,0,null,null,1,"label",[["for",""]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Bus No "])),(l()(),t["\u0275eld"](29,0,null,null,5,"input",[["autocomplete","off"],["class","form-control input-sm"],["formControlName","busno"],["id","busno"],["placeholder","Bus No"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0;return"input"===n&&(e=!1!==t["\u0275nov"](l,30)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t["\u0275nov"](l,30).onTouched()&&e),"compositionstart"===n&&(e=!1!==t["\u0275nov"](l,30)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t["\u0275nov"](l,30)._compositionEnd(u.target.value)&&e),e},null,null)),t["\u0275did"](30,16384,null,0,a.DefaultValueAccessor,[t.Renderer2,t.ElementRef,[2,a.COMPOSITION_BUFFER_MODE]],null,null),t["\u0275prd"](1024,null,a.NG_VALUE_ACCESSOR,function(l){return[l]},[a.DefaultValueAccessor]),t["\u0275did"](32,671744,null,0,a.FormControlName,[[3,a.ControlContainer],[8,null],[8,null],[6,a.NG_VALUE_ACCESSOR],[2,a["\u0275angular_packages_forms_forms_q"]]],{name:[0,"name"]},null),t["\u0275prd"](2048,null,a.NgControl,null,[a.FormControlName]),t["\u0275did"](34,16384,null,0,a.NgControlStatus,[[4,a.NgControl]],null,null),(l()(),t["\u0275eld"](35,0,null,null,14,"div",[["class","col-xs-3"]],null,null,null,null,null)),(l()(),t["\u0275eld"](36,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,[" Route Name "])),(l()(),t["\u0275eld"](38,0,null,null,11,"select",[["class","form-control"],["formControlName","routeid"],["placeholder","Route Name"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"change"],[null,"blur"]],function(l,n,u){var e=!0;return"change"===n&&(e=!1!==t["\u0275nov"](l,39).onChange(u.target.value)&&e),"blur"===n&&(e=!1!==t["\u0275nov"](l,39).onTouched()&&e),e},null,null)),t["\u0275did"](39,16384,null,0,a.SelectControlValueAccessor,[t.Renderer2,t.ElementRef],null,null),t["\u0275prd"](1024,null,a.NG_VALUE_ACCESSOR,function(l){return[l]},[a.SelectControlValueAccessor]),t["\u0275did"](41,671744,null,0,a.FormControlName,[[3,a.ControlContainer],[8,null],[8,null],[6,a.NG_VALUE_ACCESSOR],[2,a["\u0275angular_packages_forms_forms_q"]]],{name:[0,"name"]},null),t["\u0275prd"](2048,null,a.NgControl,null,[a.FormControlName]),t["\u0275did"](43,16384,null,0,a.NgControlStatus,[[4,a.NgControl]],null,null),(l()(),t["\u0275eld"](44,0,null,null,3,"option",[["value",""]],null,null,null,null,null)),t["\u0275did"](45,147456,null,0,a.NgSelectOption,[t.ElementRef,t.Renderer2,[2,a.SelectControlValueAccessor]],{value:[0,"value"]},null),t["\u0275did"](46,147456,null,0,a["\u0275angular_packages_forms_forms_y"],[t.ElementRef,t.Renderer2,[8,null]],{value:[0,"value"]},null),(l()(),t["\u0275ted"](-1,null,[" Select Route Name "])),(l()(),t["\u0275and"](16777216,null,null,1,null,C)),t["\u0275did"](49,278528,null,0,d.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),t["\u0275eld"](50,0,null,null,8,"div",[["class","col-xs-3"]],null,null,null,null,null)),(l()(),t["\u0275eld"](51,0,null,null,1,"label",[["for",""]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,[" Booking Id "])),(l()(),t["\u0275eld"](53,0,null,null,5,"input",[["autocomplete","off"],["class","form-control input-sm"],["formControlName","bookingid"],["id","bookingid"],["placeholder","Booking Id"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0;return"input"===n&&(e=!1!==t["\u0275nov"](l,54)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t["\u0275nov"](l,54).onTouched()&&e),"compositionstart"===n&&(e=!1!==t["\u0275nov"](l,54)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t["\u0275nov"](l,54)._compositionEnd(u.target.value)&&e),e},null,null)),t["\u0275did"](54,16384,null,0,a.DefaultValueAccessor,[t.Renderer2,t.ElementRef,[2,a.COMPOSITION_BUFFER_MODE]],null,null),t["\u0275prd"](1024,null,a.NG_VALUE_ACCESSOR,function(l){return[l]},[a.DefaultValueAccessor]),t["\u0275did"](56,671744,null,0,a.FormControlName,[[3,a.ControlContainer],[8,null],[8,null],[6,a.NG_VALUE_ACCESSOR],[2,a["\u0275angular_packages_forms_forms_q"]]],{name:[0,"name"]},null),t["\u0275prd"](2048,null,a.NgControl,null,[a.FormControlName]),t["\u0275did"](58,16384,null,0,a.NgControlStatus,[[4,a.NgControl]],null,null),(l()(),t["\u0275eld"](59,0,null,null,3,"div",[["class","col-xs-3"]],null,null,null,null,null)),(l()(),t["\u0275eld"](60,0,null,null,2,"button",[["class","btn btn-success"],["style","margin-top: 13px;"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,[" Submit "])),(l()(),t["\u0275eld"](62,0,null,null,0,"i",[["class","ace-icon fa fa-arrow-right icon-on-right bigger-110"]],null,null,null,null,null))],function(l,n){var u=n.component;l(n,3,0,u.form),l(n,10,0,u.options),l(n,12,0,"fromdate"),l(n,19,0,u.options),l(n,21,0,"todate"),l(n,32,0,"busno"),l(n,41,0,"routeid"),l(n,45,0,""),l(n,46,0,""),l(n,49,0,u.RouteLists),l(n,56,0,"bookingid")},function(l,n){l(n,0,0,n.component.isMenuOpen?"open":"close"),l(n,1,0,t["\u0275nov"](n,5).ngClassUntouched,t["\u0275nov"](n,5).ngClassTouched,t["\u0275nov"](n,5).ngClassPristine,t["\u0275nov"](n,5).ngClassDirty,t["\u0275nov"](n,5).ngClassValid,t["\u0275nov"](n,5).ngClassInvalid,t["\u0275nov"](n,5).ngClassPending),l(n,9,0,t["\u0275nov"](n,14).ngClassUntouched,t["\u0275nov"](n,14).ngClassTouched,t["\u0275nov"](n,14).ngClassPristine,t["\u0275nov"](n,14).ngClassDirty,t["\u0275nov"](n,14).ngClassValid,t["\u0275nov"](n,14).ngClassInvalid,t["\u0275nov"](n,14).ngClassPending),l(n,18,0,t["\u0275nov"](n,23).ngClassUntouched,t["\u0275nov"](n,23).ngClassTouched,t["\u0275nov"](n,23).ngClassPristine,t["\u0275nov"](n,23).ngClassDirty,t["\u0275nov"](n,23).ngClassValid,t["\u0275nov"](n,23).ngClassInvalid,t["\u0275nov"](n,23).ngClassPending),l(n,29,0,t["\u0275nov"](n,34).ngClassUntouched,t["\u0275nov"](n,34).ngClassTouched,t["\u0275nov"](n,34).ngClassPristine,t["\u0275nov"](n,34).ngClassDirty,t["\u0275nov"](n,34).ngClassValid,t["\u0275nov"](n,34).ngClassInvalid,t["\u0275nov"](n,34).ngClassPending),l(n,38,0,t["\u0275nov"](n,43).ngClassUntouched,t["\u0275nov"](n,43).ngClassTouched,t["\u0275nov"](n,43).ngClassPristine,t["\u0275nov"](n,43).ngClassDirty,t["\u0275nov"](n,43).ngClassValid,t["\u0275nov"](n,43).ngClassInvalid,t["\u0275nov"](n,43).ngClassPending),l(n,53,0,t["\u0275nov"](n,58).ngClassUntouched,t["\u0275nov"](n,58).ngClassTouched,t["\u0275nov"](n,58).ngClassPristine,t["\u0275nov"](n,58).ngClassDirty,t["\u0275nov"](n,58).ngClassValid,t["\u0275nov"](n,58).ngClassInvalid,t["\u0275nov"](n,58).ngClassPending)})}function _(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,14,"tr",[],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,1,"td",[["class","hidden-480"]],null,null,null,null,null)),(l()(),t["\u0275ted"](2,null,["",""])),(l()(),t["\u0275eld"](3,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t["\u0275ted"](4,null,["",""])),(l()(),t["\u0275eld"](5,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t["\u0275ted"](6,null,["",""])),(l()(),t["\u0275eld"](7,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t["\u0275ted"](8,null,["",""])),(l()(),t["\u0275eld"](9,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t["\u0275ted"](10,null,["",""])),(l()(),t["\u0275eld"](11,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t["\u0275ted"](12,null,["",""])),(l()(),t["\u0275eld"](13,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t["\u0275ted"](14,null,["",""]))],null,function(l,n){l(n,2,0,n.context.index+1),l(n,4,0,n.context.$implicit.BookingId),l(n,6,0,n.context.$implicit.Name),l(n,8,0,n.context.$implicit.fromLocation),l(n,10,0,n.context.$implicit.toLocation),l(n,12,0,n.context.$implicit.BookingTime),l(n,14,0,n.context.$implicit.NetTotal)})}function N(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,27,"div",[["class","row"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,26,"div",[["class","col-xs-12"]],null,null,null,null,null)),(l()(),t["\u0275eld"](2,0,null,null,1,"div",[["class","clearfix"]],null,null,null,null,null)),(l()(),t["\u0275eld"](3,0,null,null,0,"div",[["class","pull-right tableTools-container"]],null,null,null,null,null)),(l()(),t["\u0275eld"](4,0,null,null,1,"div",[["class","table-header"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,[" LIST OF GENERAL BOOKING "])),(l()(),t["\u0275eld"](6,0,null,null,21,"div",[],null,null,null,null,null)),(l()(),t["\u0275eld"](7,0,null,null,20,"table",[["class","dataTable table table-striped table-bordered table-hover display"],["datatable",""]],null,null,null,null,null)),t["\u0275did"](8,212992,null,0,c.a,[t.ElementRef],{dtOptions:[0,"dtOptions"]},null),(l()(),t["\u0275eld"](9,0,null,null,15,"thead",[],null,null,null,null,null)),(l()(),t["\u0275eld"](10,0,null,null,14,"tr",[],null,null,null,null,null)),(l()(),t["\u0275eld"](11,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["S.No"])),(l()(),t["\u0275eld"](13,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Book Id"])),(l()(),t["\u0275eld"](15,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Name"])),(l()(),t["\u0275eld"](17,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Source"])),(l()(),t["\u0275eld"](19,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Destination"])),(l()(),t["\u0275eld"](21,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Time"])),(l()(),t["\u0275eld"](23,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Net Total"])),(l()(),t["\u0275eld"](25,0,null,null,2,"tbody",[],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,_)),t["\u0275did"](27,278528,null,0,d.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var u=n.component;l(n,8,0,u.dtOptions),l(n,27,0,u.BusLists)},null)}function b(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,22,"div",[["class","main-content"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,21,"div",[["class","main-content-inner"]],null,null,null,null,null)),(l()(),t["\u0275eld"](2,0,null,null,7,"div",[["class","breadcrumbs ace-save-state"],["id","breadcrumbs"]],null,null,null,null,null)),(l()(),t["\u0275eld"](3,0,null,null,6,"ul",[["class","breadcrumb"]],null,null,null,null,null)),(l()(),t["\u0275eld"](4,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),t["\u0275eld"](5,0,null,null,0,"i",[["class","ace-icon fa fa-home home-icon"]],null,null,null,null,null)),(l()(),t["\u0275eld"](6,0,null,null,1,"a",[["href","#"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Home"])),(l()(),t["\u0275eld"](8,0,null,null,1,"li",[["class","active"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["MANAGE REPORTS"])),(l()(),t["\u0275eld"](10,0,null,null,12,"div",[["class","page-content"]],null,null,null,null,null)),(l()(),t["\u0275eld"](11,0,null,null,8,"div",[["class","row"]],null,null,null,null,null)),(l()(),t["\u0275eld"](12,0,null,null,7,"div",[["class","col-xs-12"]],null,null,null,null,null)),(l()(),t["\u0275eld"](13,0,null,null,1,"div",[["class","clearfix"]],null,null,null,null,null)),(l()(),t["\u0275eld"](14,0,null,null,0,"div",[["class","pull-right tableTools-container"]],null,null,null,null,null)),(l()(),t["\u0275eld"](15,0,null,null,1,"div",[["class","table-header"],["style","cursor: pointer;"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.toggleMenu()&&e),e},null,null)),(l()(),t["\u0275ted"](-1,null,[" FILTER "])),(l()(),t["\u0275eld"](17,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,h)),t["\u0275did"](19,16384,null,0,d.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275eld"](20,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,N)),t["\u0275did"](22,16384,null,0,d.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,19,0,u.isMenuOpen),l(n,22,0,u.temp_var)},null)}function y(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-generalbook",[],null,null,null,b,f)),t["\u0275did"](1,114688,null,0,p,[a.FormBuilder,g.k,v.a,g.a],null,null)],function(l,n){l(n,1,0)},null)}var R=t["\u0275ccf"]("app-generalbook",p,y,{},{},[]);var O=function l(){};var S=e("axVG"),k=e("q7NV");e.d(u,"GeneralbookModuleNgFactory",function(){return E});var E=t["\u0275cmf"](o,[],function(l){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[i.a,R]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,d.NgLocalization,d.NgLocaleLocalization,[t.LOCALE_ID,[2,d["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,a["\u0275angular_packages_forms_forms_o"],a["\u0275angular_packages_forms_forms_o"],[]),t["\u0275mpd"](4608,a.FormBuilder,a.FormBuilder,[]),t["\u0275mpd"](1073742336,d.CommonModule,d.CommonModule,[]),t["\u0275mpd"](1073742336,g.o,g.o,[[2,g.t],[2,g.k]]),t["\u0275mpd"](1073742336,O,O,[]),t["\u0275mpd"](1073742336,S.a,S.a,[]),t["\u0275mpd"](1073742336,a["\u0275angular_packages_forms_forms_d"],a["\u0275angular_packages_forms_forms_d"],[]),t["\u0275mpd"](1073742336,a.FormsModule,a.FormsModule,[]),t["\u0275mpd"](1073742336,a.ReactiveFormsModule,a.ReactiveFormsModule,[]),t["\u0275mpd"](1073742336,k.NgSlimScrollModule,k.NgSlimScrollModule,[]),t["\u0275mpd"](1073742336,r.NgDatepickerModule,r.NgDatepickerModule,[]),t["\u0275mpd"](1073742336,o,o,[]),t["\u0275mpd"](1024,g.i,function(){return[[{path:"",component:p}]]},[])])})}}]);