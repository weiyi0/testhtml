var e=Object.defineProperty,t=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,l=(t,o,a)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[o]=a,n=(e,t,o)=>new Promise(((a,l)=>{var n=e=>{try{i(o.next(e))}catch(t){l(t)}},r=e=>{try{i(o.throw(e))}catch(t){l(t)}},i=e=>e.done?a(e.value):Promise.resolve(e.value).then(n,r);i((o=o.apply(e,t)).next())}));import{g as r,h as i}from"./useForm.58a4232c.js";import{ad as s,bi as u,y as d,r as p,j as c,u as m,Y as f,B as b,D as v,a0 as h,v as w,$ as y}from"./vendor.f1bc6992.js";/* empty css              */import{_ as g}from"./index.e7d892d4.js";import{B as P,a as I}from"./index.bc4dd513.js";import{d as S}from"./system.c6539378.js";const x=[{title:"菜单名称",dataIndex:"menuName",width:200,align:"left"},{title:"图标",dataIndex:"icon",width:50,customRender:({record:e})=>s(g,{icon:e.icon})},{title:"权限标识",dataIndex:"permission",width:180},{title:"组件",dataIndex:"component"},{title:"排序",dataIndex:"orderNo",width:50},{title:"状态",dataIndex:"status",width:80,customRender:({record:e})=>{const t=0==~~e.status,o=t?"启用":"停用";return s(u,{color:t?"green":"red"},(()=>o))}},{title:"创建时间",dataIndex:"createTime",width:180}],j=e=>"1"===e,B=e=>"2"===e,R=[{field:"menuName",label:"菜单名称",component:"Input",colProps:{span:8}},{field:"status",label:"状态",component:"Select",componentProps:{options:[{label:"启用",value:"0"},{label:"停用",value:"1"}]},colProps:{span:8}}],D=[{field:"type",label:"菜单类型",component:"RadioButtonGroup",defaultValue:"0",componentProps:{options:[{label:"目录",value:"0"},{label:"菜单",value:"1"},{label:"按钮",value:"2"}]},colProps:{lg:24,md:24}},{field:"menuName",label:"菜单名称",component:"Input",required:!0},{field:"parentMenu",label:"上级菜单",component:"TreeSelect",componentProps:{replaceFields:{title:"menuName",key:"id",value:"id"},getPopupContainer:()=>document.body}},{field:"orderNo",label:"排序",component:"InputNumber",required:!0},{field:"icon",label:"图标",component:"IconPicker",required:!0,ifShow:({values:e})=>!B(e.type)},{field:"routePath",label:"路由地址",component:"Input",required:!0,ifShow:({values:e})=>!B(e.type)},{field:"component",label:"组件路径",component:"Input",ifShow:({values:e})=>j(e.type)},{field:"permission",label:"权限标识",component:"Input",ifShow:({values:e})=>!("0"===e.type)},{field:"status",label:"状态",component:"RadioButtonGroup",defaultValue:"0",componentProps:{options:[{label:"启用",value:"0"},{label:"禁用",value:"1"}]}},{field:"isExt",label:"是否外链",component:"RadioButtonGroup",defaultValue:"0",componentProps:{options:[{label:"否",value:"0"},{label:"是",value:"1"}]},ifShow:({values:e})=>!B(e.type)},{field:"keepalive",label:"是否缓存",component:"RadioButtonGroup",defaultValue:"0",componentProps:{options:[{label:"否",value:"0"},{label:"是",value:"1"}]},ifShow:({values:e})=>j(e.type)},{field:"show",label:"是否显示",component:"RadioButtonGroup",defaultValue:"0",componentProps:{options:[{label:"是",value:"0"},{label:"否",value:"1"}]},ifShow:({values:e})=>!B(e.type)}];var F=d({name:"MenuDrawer",components:{BasicDrawer:P,BasicForm:r},emits:["success","register"],setup(e,{emit:r}){const s=p(!0),[u,{resetFields:d,setFieldsValue:f,updateSchema:b,validate:v}]=i({labelWidth:100,schemas:D,showActionButtonGroup:!1,baseColProps:{lg:12,md:24}}),[h,{setDrawerProps:w,closeDrawer:y}]=I((e=>n(this,null,(function*(){d(),w({confirmLoading:!1}),s.value=!!(null==e?void 0:e.isUpdate),m(s)&&f(((e,n)=>{for(var r in n||(n={}))o.call(n,r)&&l(e,r,n[r]);if(t)for(var r of t(n))a.call(n,r)&&l(e,r,n[r]);return e})({},e.record));const n=yield S();b({field:"parentMenu",componentProps:{treeData:n}})}))));return{registerDrawer:h,registerForm:u,getTitle:c((()=>m(s)?"编辑菜单":"新增菜单")),handleSubmit:function(){return n(this,null,(function*(){try{yield v();w({confirmLoading:!0}),y(),r("success")}finally{w({confirmLoading:!1})}}))}}}});F.render=function(e,t,o,a,l,n){const r=f("BasicForm"),i=f("BasicDrawer");return b(),v(i,y(e.$attrs,{onRegister:e.registerDrawer,showFooter:"",title:e.getTitle,width:"50%",onOk:e.handleSubmit}),{default:h((()=>[w(r,{onRegister:e.registerForm},null,8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])};var O=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:F});export{O as M,F as _,x as c,R as s};
