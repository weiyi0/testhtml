import{aC as t}from"./index.e7d892d4.js";var e,a;(a=e||(e={})).UICList="/uic/getUICList",a.NewUIC="/uic/newUIC",a.GetWMCDetail="/uic/getWMCDetail";const i=()=>t.get({url:e.UICList}),s=(a,i)=>{const s={isv_application_id:a,code_count:i};return t.post({url:e.NewUIC,params:s})},r=a=>t.get({url:e.GetWMCDetail,params:{id:a}});export{r as a,i as g,s as n};
