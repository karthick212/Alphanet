(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{gFlc:function l(n,u,e){"use strict";e.r(u);var i=e("8Y7J");var t=function l(){};var a=e("pMnS"),o=e("SVse"),s=e("iInd"),d=e("z6cu");var r=function(){function l(l,n,u){this.router=l,this.api=n,this.route=u,this.temp_var=!1}var n=l.prototype;n.ngOnInit=function l(){var n=this;this.route.params.subscribe(function(l){l.id&&(n.loadAllRoutedetails(l.id),n.loadEditRoute(l.id))})};n.loadAllRoutedetails=function l(n){var u=this;this.api.geteditbus(n).subscribe(function(l){Object.keys(l.data).length?(console.log("test "+JSON.stringify(l.data)),JSON.parse(JSON.stringify(l.data)),u.RouteLists=l.data,u.temp_var=!0):u.temp_var=!1},function(l){return Object(d.a)(l)})};n.loadEditRoute=function l(n){var u=this;this.api.getallidbustime(n).subscribe(function(l){if(Object.keys(l.data).length){var n=JSON.parse(JSON.stringify(l.data));u.Routes=n,u.Name=n[0].BusNo}},function(l){return Object(d.a)(l)})};return l}();var c=e("H+bZ"),f=i["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function p(l){return i["\u0275vid"](0,[(l()(),i["\u0275eld"](0,0,null,null,19,"div",[["class","col-lg-12 col-sm-12 col-xs-12"],["style","margin-bottom:5px;"]],null,null,null,null,null)),(l()(),i["\u0275eld"](1,0,null,null,18,"div",[["class","widget-header widget-header-small"]],null,null,null,null,null)),(l()(),i["\u0275eld"](2,0,null,null,5,"div",[["class","profile-info-row"]],null,null,null,null,null)),(l()(),i["\u0275eld"](3,0,null,null,1,"div",[["class","profile-info-name"]],null,null,null,null,null)),(l()(),i["\u0275ted"](-1,null,[" Bus No "])),(l()(),i["\u0275eld"](5,0,null,null,2,"div",[["class","profile-info-value"]],null,null,null,null,null)),(l()(),i["\u0275eld"](6,0,null,null,1,"span",[["class",""]],null,null,null,null,null)),(l()(),i["\u0275ted"](7,null,["",""])),(l()(),i["\u0275eld"](8,0,null,null,5,"div",[["class","profile-info-row"]],null,null,null,null,null)),(l()(),i["\u0275eld"](9,0,null,null,1,"div",[["class","profile-info-name"]],null,null,null,null,null)),(l()(),i["\u0275ted"](-1,null,[" Register No "])),(l()(),i["\u0275eld"](11,0,null,null,2,"div",[["class","profile-info-value"]],null,null,null,null,null)),(l()(),i["\u0275eld"](12,0,null,null,1,"span",[["class",""]],null,null,null,null,null)),(l()(),i["\u0275ted"](13,null,["",""])),(l()(),i["\u0275eld"](14,0,null,null,5,"div",[["class","profile-info-row"]],null,null,null,null,null)),(l()(),i["\u0275eld"](15,0,null,null,1,"div",[["class","profile-info-name"]],null,null,null,null,null)),(l()(),i["\u0275ted"](-1,null,[" Route Name "])),(l()(),i["\u0275eld"](17,0,null,null,2,"div",[["class","profile-info-value"]],null,null,null,null,null)),(l()(),i["\u0275eld"](18,0,null,null,1,"span",[["class",""]],null,null,null,null,null)),(l()(),i["\u0275ted"](19,null,["",""]))],null,function(l,n){l(n,7,0,n.context.$implicit.BusNo),l(n,13,0,n.context.$implicit.BusRegisterNo),l(n,19,0,n.context.$implicit.RouteName)})}function v(l){return i["\u0275vid"](0,[(l()(),i["\u0275eld"](0,0,null,null,13,"div",[["class","col-lg-4"]],null,null,null,null,null)),(l()(),i["\u0275eld"](1,0,null,null,12,"div",[["class","profile-user-info-striped"]],null,null,null,null,null)),(l()(),i["\u0275eld"](2,0,null,null,5,"div",[["class","profile-info-row"]],null,null,null,null,null)),(l()(),i["\u0275eld"](3,0,null,null,1,"div",[["class","profile-info-name"]],null,null,null,null,null)),(l()(),i["\u0275ted"](-1,null,[" Departure Time "])),(l()(),i["\u0275eld"](5,0,null,null,2,"div",[["class","profile-info-value"]],null,null,null,null,null)),(l()(),i["\u0275eld"](6,0,null,null,1,"span",[["class",""],["id","about"],["style","display: inline;"]],null,null,null,null,null)),(l()(),i["\u0275ted"](7,null,["",""])),(l()(),i["\u0275eld"](8,0,null,null,5,"div",[["class","profile-info-row"]],null,null,null,null,null)),(l()(),i["\u0275eld"](9,0,null,null,1,"div",[["class","profile-info-name"]],null,null,null,null,null)),(l()(),i["\u0275ted"](-1,null,[" Arrival Time "])),(l()(),i["\u0275eld"](11,0,null,null,2,"div",[["class","profile-info-value"]],null,null,null,null,null)),(l()(),i["\u0275eld"](12,0,null,null,1,"span",[["class",""],["id","about"],["style","display: inline;"]],null,null,null,null,null)),(l()(),i["\u0275ted"](13,null,["",""]))],null,function(l,n){l(n,7,0,n.context.$implicit.Departure),l(n,13,0,n.context.$implicit.Arrival)})}function m(l){return i["\u0275vid"](0,[(l()(),i["\u0275eld"](0,0,null,null,21,"div",[["class","page-content"]],null,null,null,null,null)),(l()(),i["\u0275eld"](1,0,null,null,20,"div",[["class","widget-box ui-sortable-handle"]],null,null,null,null,null)),(l()(),i["\u0275eld"](2,0,null,null,6,"div",[["class","widget-header widget-header-small"]],null,null,null,null,null)),(l()(),i["\u0275eld"](3,0,null,null,5,"h4",[],null,null,null,null,null)),(l()(),i["\u0275eld"](4,0,null,null,0,"i",[["class","fa fa-television"]],null,null,null,null,null)),(l()(),i["\u0275ted"](-1,null,[" Bus Details of ( "])),(l()(),i["\u0275eld"](6,0,null,null,1,"span",[["class","text-danger"],["id","historyuniqid"]],null,null,null,null,null)),(l()(),i["\u0275ted"](7,null,[" "," "])),(l()(),i["\u0275ted"](-1,null,[" )"])),(l()(),i["\u0275eld"](9,0,null,null,12,"div",[["class","widget-body"],["style","padding:5px;"]],null,null,null,null,null)),(l()(),i["\u0275eld"](10,0,null,null,11,"div",[["class","row"]],null,null,null,null,null)),(l()(),i["\u0275and"](16777216,null,null,1,null,p)),i["\u0275did"](12,278528,null,0,o.NgForOf,[i.ViewContainerRef,i.TemplateRef,i.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),i["\u0275and"](16777216,null,null,1,null,v)),i["\u0275did"](14,278528,null,0,o.NgForOf,[i.ViewContainerRef,i.TemplateRef,i.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),i["\u0275eld"](15,0,null,null,6,"div",[["class","row"],["style","clear: both;"]],null,null,null,null,null)),(l()(),i["\u0275eld"](16,0,null,null,5,"div",[["class","form-actions center"]],null,null,null,null,null)),(l()(),i["\u0275eld"](17,0,null,null,3,"button",[["class","btn btn-md btn-success"],["routerLink","/managebuses"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==i["\u0275nov"](l,18).onClick()&&e),e},null,null)),i["\u0275did"](18,16384,null,0,s.l,[s.k,s.a,[8,null],i.Renderer2,i.ElementRef],{routerLink:[0,"routerLink"]},null),(l()(),i["\u0275ted"](-1,null,[" Back "])),(l()(),i["\u0275eld"](20,0,null,null,0,"i",[["class","ace-icon fa fa-exchange icon-on-right bigger-110"]],null,null,null,null,null)),(l()(),i["\u0275ted"](-1,null,[" \xa0 "]))],function(l,n){var u=n.component;l(n,12,0,u.RouteLists),l(n,14,0,u.Routes),l(n,18,0,"/managebuses")},function(l,n){l(n,7,0,n.component.Name)})}function g(l){return i["\u0275vid"](0,[(l()(),i["\u0275eld"](0,0,null,null,11,"div",[["class","main-content"]],null,null,null,null,null)),(l()(),i["\u0275eld"](1,0,null,null,10,"div",[["class","main-content-inner"]],null,null,null,null,null)),(l()(),i["\u0275eld"](2,0,null,null,7,"div",[["class","breadcrumbs ace-save-state"],["id","breadcrumbs"]],null,null,null,null,null)),(l()(),i["\u0275eld"](3,0,null,null,6,"ul",[["class","breadcrumb"]],null,null,null,null,null)),(l()(),i["\u0275eld"](4,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),i["\u0275eld"](5,0,null,null,0,"i",[["class","ace-icon fa fa-home home-icon"]],null,null,null,null,null)),(l()(),i["\u0275eld"](6,0,null,null,1,"a",[["href","#"]],null,null,null,null,null)),(l()(),i["\u0275ted"](-1,null,["Home"])),(l()(),i["\u0275eld"](8,0,null,null,1,"li",[["class","active"]],null,null,null,null,null)),(l()(),i["\u0275ted"](-1,null,["BUS DETAILS"])),(l()(),i["\u0275and"](16777216,null,null,1,null,m)),i["\u0275did"](11,16384,null,0,o.NgIf,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,11,0,n.component.temp_var)},null)}function b(l){return i["\u0275vid"](0,[(l()(),i["\u0275eld"](0,0,null,null,1,"app-viewbuses",[],null,null,null,g,f)),i["\u0275did"](1,114688,null,0,r,[s.k,c.a,s.a],null,null)],function(l,n){l(n,1,0)},null)}var h=i["\u0275ccf"]("app-viewbuses",r,b,{},{},[]);var w=function l(){};e.d(u,"ViewbusesModuleNgFactory",function(){return R});var R=i["\u0275cmf"](t,[],function(l){return i["\u0275mod"]([i["\u0275mpd"](512,i.ComponentFactoryResolver,i["\u0275CodegenComponentFactoryResolver"],[[8,[a.a,h]],[3,i.ComponentFactoryResolver],i.NgModuleRef]),i["\u0275mpd"](4608,o.NgLocalization,o.NgLocaleLocalization,[i.LOCALE_ID,[2,o["\u0275angular_packages_common_common_a"]]]),i["\u0275mpd"](1073742336,o.CommonModule,o.CommonModule,[]),i["\u0275mpd"](1073742336,s.o,s.o,[[2,s.t],[2,s.k]]),i["\u0275mpd"](1073742336,w,w,[]),i["\u0275mpd"](1073742336,t,t,[]),i["\u0275mpd"](1024,s.i,function(){return[[{path:"",component:r}]]},[])])})}}]);