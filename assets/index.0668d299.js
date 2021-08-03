import{_ as e,u as t}from"./useTable.7debb003.js";import{_ as o}from"./useForm.58a4232c.js";import{g as n}from"./system.c6539378.js";import{P as a}from"./index.dd145b71.js";import i from"./DeptTree.ccafa5af.js";import{u as s}from"./index.5131ce2b.js";import{_ as r,c as d,s as l}from"./AccountModal.97055118.js";import{k as c}from"./index.e7d892d4.js";import{y as m,L as p,Y as u,B as f,D as b,a0 as j,v as h,a7 as x}from"./vendor.f1bc6992.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./useWindowSizeFn.1504d534.js";import"./onMountedOrActivated.d942b7b7.js";/* empty css              */import"./useSortable.8176aead.js";/* empty css              *//* empty css              *//* empty css              */import"./index.87f5ff85.js";import"./download.37ec4673.js";import"./index.d5a1784a.js";/* empty css              *//* empty css              */import"./useContentViewHeight.d79af85c.js";import"./Tree.vue_vue&type=style&index=0&lang.ec213430.js";var g=m({name:"AccountManagement",components:{BasicTable:e,PageWrapper:a,DeptTree:i,AccountModal:r,TableAction:o},setup(){const e=c(),[o,{openModal:a}]=s(),i=p({}),[r,{reload:m,updateTableDataRecord:u}]=t({title:"账号列表",api:n,rowKey:"id",columns:d,formConfig:{labelWidth:120,schemas:l,autoSubmitOnEnter:!0},useSearchForm:!0,showTableSetting:!0,bordered:!0,handleSearchInfoFn:e=>e,actionColumn:{width:120,title:"操作",dataIndex:"action",slots:{customRender:"action"}}});return{registerTable:r,registerModal:o,handleCreate:function(){a(!0,{isUpdate:!1})},handleEdit:function(e){a(!0,{record:e,isUpdate:!0})},handleDelete:function(e){},handleSuccess:function({isUpdate:e,values:t}){if(e){u(t.id,t)}else m()},handleSelect:function(e=""){i.deptId=e,m()},handleView:function(t){e("/system/account_detail/"+t.id)},searchInfo:i}}});const S=x("新增账号");g.render=function(e,t,o,n,a,i){const s=u("DeptTree"),r=u("a-button"),d=u("TableAction"),l=u("BasicTable"),c=u("AccountModal"),m=u("PageWrapper");return f(),b(m,{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:j((()=>[h(s,{class:"w-1/4 xl:w-1/5",onSelect:e.handleSelect},null,8,["onSelect"]),h(l,{onRegister:e.registerTable,class:"w-3/4 xl:w-4/5",searchInfo:e.searchInfo},{toolbar:j((()=>[h(r,{type:"primary",onClick:e.handleCreate},{default:j((()=>[S])),_:1},8,["onClick"])])),action:j((({record:t})=>[h(d,{actions:[{icon:"clarity:info-standard-line",tooltip:"查看用户详情",onClick:e.handleView.bind(null,t)},{icon:"clarity:note-edit-line",tooltip:"编辑用户资料",onClick:e.handleEdit.bind(null,t)},{icon:"ant-design:delete-outlined",color:"error",tooltip:"删除此账号",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,t)}}]},null,8,["actions"])])),_:1},8,["onRegister","searchInfo"]),h(c,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])),_:1})};export default g;
