(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{gFlc:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J");class i{}var s=u("pMnS"),t=u("SVse"),a=u("iInd"),o=u("z6cu");class d{constructor(l,n,u){this.router=l,this.api=n,this.route=u,this.temp_var=!1}ngOnInit(){this.route.params.subscribe(l=>{l.id&&(this.loadAllRoutedetails(l.id),this.loadEditRoute(l.id))})}loadAllRoutedetails(l){this.api.geteditbus(l).subscribe(l=>{Object.keys(l.data).length?(console.log("test "+JSON.stringify(l.data)),JSON.parse(JSON.stringify(l.data)),this.RouteLists=l.data,this.temp_var=!0):this.temp_var=!1},l=>Object(o.a)(l))}loadEditRoute(l){this.api.getallidbustime(l).subscribe(l=>{if(Object.keys(l.data).length){let n=JSON.parse(JSON.stringify(l.data));this.Routes=n,this.Name=n[0].BusNo}},l=>Object(o.a)(l))}}var r=u("H+bZ"),c=e["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function f(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,19,"div",[["class","col-lg-12 col-sm-12 col-xs-12"],["style","margin-bottom:5px;"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,18,"div",[["class","widget-header widget-header-small"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,5,"div",[["class","profile-info-row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,1,"div",[["class","profile-info-name"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" Bus No "])),(l()(),e["\u0275eld"](5,0,null,null,2,"div",[["class","profile-info-value"]],null,null,null,null,null)),(l()(),e["\u0275eld"](6,0,null,null,1,"span",[["class",""]],null,null,null,null,null)),(l()(),e["\u0275ted"](7,null,["",""])),(l()(),e["\u0275eld"](8,0,null,null,5,"div",[["class","profile-info-row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](9,0,null,null,1,"div",[["class","profile-info-name"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" Register No "])),(l()(),e["\u0275eld"](11,0,null,null,2,"div",[["class","profile-info-value"]],null,null,null,null,null)),(l()(),e["\u0275eld"](12,0,null,null,1,"span",[["class",""]],null,null,null,null,null)),(l()(),e["\u0275ted"](13,null,["",""])),(l()(),e["\u0275eld"](14,0,null,null,5,"div",[["class","profile-info-row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](15,0,null,null,1,"div",[["class","profile-info-name"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" Route Name "])),(l()(),e["\u0275eld"](17,0,null,null,2,"div",[["class","profile-info-value"]],null,null,null,null,null)),(l()(),e["\u0275eld"](18,0,null,null,1,"span",[["class",""]],null,null,null,null,null)),(l()(),e["\u0275ted"](19,null,["",""]))],null,function(l,n){l(n,7,0,n.context.$implicit.BusNo),l(n,13,0,n.context.$implicit.BusRegisterNo),l(n,19,0,n.context.$implicit.RouteName)})}function p(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,25,"div",[["class","col-lg-4"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,24,"div",[["class","profile-user-info-striped"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,5,"div",[["class","profile-info-row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,1,"div",[["class","profile-info-name"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" Departure Time Source "])),(l()(),e["\u0275eld"](5,0,null,null,2,"div",[["class","profile-info-value"]],null,null,null,null,null)),(l()(),e["\u0275eld"](6,0,null,null,1,"span",[["class",""],["id","about"],["style","display: inline;"]],null,null,null,null,null)),(l()(),e["\u0275ted"](7,null,["",""])),(l()(),e["\u0275eld"](8,0,null,null,5,"div",[["class","profile-info-row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](9,0,null,null,1,"div",[["class","profile-info-name"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" Arrival Time Destination "])),(l()(),e["\u0275eld"](11,0,null,null,2,"div",[["class","profile-info-value"]],null,null,null,null,null)),(l()(),e["\u0275eld"](12,0,null,null,1,"span",[["class",""],["id","about"],["style","display: inline;"]],null,null,null,null,null)),(l()(),e["\u0275ted"](13,null,["",""])),(l()(),e["\u0275eld"](14,0,null,null,5,"div",[["class","profile-info-row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](15,0,null,null,1,"div",[["class","profile-info-name"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" Departure Time Destination "])),(l()(),e["\u0275eld"](17,0,null,null,2,"div",[["class","profile-info-value"]],null,null,null,null,null)),(l()(),e["\u0275eld"](18,0,null,null,1,"span",[["class",""],["id","about"],["style","display: inline;"]],null,null,null,null,null)),(l()(),e["\u0275ted"](19,null,["",""])),(l()(),e["\u0275eld"](20,0,null,null,5,"div",[["class","profile-info-row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](21,0,null,null,1,"div",[["class","profile-info-name"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" Arrival Time Source "])),(l()(),e["\u0275eld"](23,0,null,null,2,"div",[["class","profile-info-value"]],null,null,null,null,null)),(l()(),e["\u0275eld"](24,0,null,null,1,"span",[["class",""],["id","about"],["style","display: inline;"]],null,null,null,null,null)),(l()(),e["\u0275ted"](25,null,["",""]))],null,function(l,n){l(n,7,0,n.context.$implicit.Departure),l(n,13,0,n.context.$implicit.Arrival),l(n,19,0,n.context.$implicit.DepartureTo),l(n,25,0,n.context.$implicit.ArrivalTo)})}function m(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,21,"div",[["class","page-content"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,20,"div",[["class","widget-box ui-sortable-handle"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,6,"div",[["class","widget-header widget-header-small"]],null,null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,5,"h4",[],null,null,null,null,null)),(l()(),e["\u0275eld"](4,0,null,null,0,"i",[["class","fa fa-television"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" Bus Details of ( "])),(l()(),e["\u0275eld"](6,0,null,null,1,"span",[["class","text-danger"],["id","historyuniqid"]],null,null,null,null,null)),(l()(),e["\u0275ted"](7,null,[" "," "])),(l()(),e["\u0275ted"](-1,null,[" )"])),(l()(),e["\u0275eld"](9,0,null,null,12,"div",[["class","widget-body"],["style","padding:5px;"]],null,null,null,null,null)),(l()(),e["\u0275eld"](10,0,null,null,11,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,f)),e["\u0275did"](12,278528,null,0,t.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,p)),e["\u0275did"](14,278528,null,0,t.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275eld"](15,0,null,null,6,"div",[["class","row"],["style","clear: both;"]],null,null,null,null,null)),(l()(),e["\u0275eld"](16,0,null,null,5,"div",[["class","form-actions center"]],null,null,null,null,null)),(l()(),e["\u0275eld"](17,0,null,null,3,"button",[["class","btn btn-md btn-success"],["routerLink","/managebuses"]],null,[[null,"click"]],function(l,n,u){var i=!0;return"click"===n&&(i=!1!==e["\u0275nov"](l,18).onClick()&&i),i},null,null)),e["\u0275did"](18,16384,null,0,a.l,[a.k,a.a,[8,null],e.Renderer2,e.ElementRef],{routerLink:[0,"routerLink"]},null),(l()(),e["\u0275ted"](-1,null,[" Back "])),(l()(),e["\u0275eld"](20,0,null,null,0,"i",[["class","ace-icon fa fa-exchange icon-on-right bigger-110"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" \xa0 "]))],function(l,n){var u=n.component;l(n,12,0,u.RouteLists),l(n,14,0,u.Routes),l(n,18,0,"/managebuses")},function(l,n){l(n,7,0,n.component.Name)})}function v(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,11,"div",[["class","main-content"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,10,"div",[["class","main-content-inner"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,7,"div",[["class","breadcrumbs ace-save-state"],["id","breadcrumbs"]],null,null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,6,"ul",[["class","breadcrumb"]],null,null,null,null,null)),(l()(),e["\u0275eld"](4,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),e["\u0275eld"](5,0,null,null,0,"i",[["class","ace-icon fa fa-home home-icon"]],null,null,null,null,null)),(l()(),e["\u0275eld"](6,0,null,null,1,"a",[["href","#"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Home"])),(l()(),e["\u0275eld"](8,0,null,null,1,"li",[["class","active"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["BUS DETAILS"])),(l()(),e["\u0275and"](16777216,null,null,1,null,m)),e["\u0275did"](11,16384,null,0,t.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,11,0,n.component.temp_var)},null)}function g(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-viewbuses",[],null,null,null,v,c)),e["\u0275did"](1,114688,null,0,d,[a.k,r.a,a.a],null,null)],function(l,n){l(n,1,0)},null)}var b=e["\u0275ccf"]("app-viewbuses",d,g,{},{},[]);class h{}u.d(n,"ViewbusesModuleNgFactory",function(){return w});var w=e["\u0275cmf"](i,[],function(l){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[s.a,b]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,t.NgLocalization,t.NgLocaleLocalization,[e.LOCALE_ID,[2,t["\u0275angular_packages_common_common_a"]]]),e["\u0275mpd"](1073742336,t.CommonModule,t.CommonModule,[]),e["\u0275mpd"](1073742336,a.o,a.o,[[2,a.t],[2,a.k]]),e["\u0275mpd"](1073742336,h,h,[]),e["\u0275mpd"](1073742336,i,i,[]),e["\u0275mpd"](1024,a.i,function(){return[[{path:"",component:d}]]},[])])})}}]);