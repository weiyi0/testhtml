var o=(o,e,t)=>new Promise(((n,r)=>{var s=o=>{try{l(t.next(o))}catch(e){r(e)}},c=o=>{try{l(t.throw(o))}catch(e){r(e)}},l=o=>o.done?n(o.value):Promise.resolve(o.value).then(s,c);l((t=t.apply(o,e)).next())}));import{f as e}from"./vendor.f1bc6992.js";import{a8 as t,a9 as n,f as r}from"./index.e7d892d4.js";const s=e({id:"app-lock",state:()=>({lockInfo:t.getLocal(n)}),getters:{getLockInfo(){return this.lockInfo}},actions:{setLockInfo(o){this.lockInfo=Object.assign({},this.lockInfo,o),t.setLocal(n,this.lockInfo,!0)},resetLockInfo(){t.removeLocal(n,!0),this.lockInfo=null},unLock(e){return o(this,null,(function*(){var t;const n=r();if((null==(t=this.lockInfo)?void 0:t.pwd)===e)return this.resetLockInfo(),!0;return yield(()=>o(this,null,(function*(){var o;try{const t=null==(o=n.getUserInfo)?void 0:o.username,r=yield n.login({username:t,password:e,goHome:!1,mode:"none"});return r&&this.resetLockInfo(),r}catch(t){return!1}})))()}))}}});export{s as u};
