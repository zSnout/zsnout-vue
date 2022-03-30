import{d as V,P as F,f as b,i as I,q as D,o as m,a as g,F as k,z as P,n as C,t as N,M as W,u as h,g as S,v as O,x as U,y as R,p as K,k as z,Q as H,c as L,L as q,s as G,J,j as $,S as T,U as j,w as A,e as Q}from"./vendor.f1f2a3c5.js";import{_ as B,r as Y,D as X,N as Z}from"./index.80cd8fb8.js";import{s as ee,_ as ne}from"./storymatic.9dc8c126.js";const te=f=>(K("data-v-6f87b757"),f=f(),z(),f),oe={key:0,class:"message select"},se=["disabled","onClick"],ie=te(()=>S("span",{class:"option-cap"},null,-1)),re=["placeholder"],ae=V({props:{messages:{default:()=>F([])},placeholder:null,root:{type:Boolean}},emits:["enter","field","select"],setup(f,{emit:d}){const{messages:u,root:p}=f;let s=b("");function _(n){n.preventDefault(),s.value.trim()?(u.push({content:s.value.trim(),type:"user"}),d("field",s.value.trim()),s.value=""):d("enter")}let r=b(null);function x(){let n=p?document.documentElement:r.value;return n?n.scrollHeight-n.scrollTop-n.clientHeight<4:!1}function y(){let n=p?document.documentElement:r.value;!n||(n.scrollTop=n.scrollHeight)}function c(n,l){n.selected=l,d("select",n.name,l)}let a=b(null);return I(u,()=>{let n=u[u.length-1];if(n&&n.type=="focus"&&!n.hidden)return setTimeout(()=>{var l;if(n.type=="focus"&&(n.where=="field"&&((l=a.value)==null||l.focus()),n.where=="select")){if(!r.value)return;let i=r.value.getElementsByClassName("select"),v=i[i.length-1].children[0];v==null||v.focus()}});x()&&setTimeout(y)}),D(y),(n,l)=>(m(),g("div",{ref_key:"consoleEl",ref:r,class:C([{root:h(p)},"console"])},[(m(!0),g(k,null,P(h(u),(i,v)=>(m(),g(k,{key:v},[i.type!="focus"&&!i.hidden?(m(),g(k,{key:0},[i.type=="select"?(m(),g("div",oe,[(m(!0),g(k,null,P(i.options,(M,e)=>(m(),g("button",{key:e,class:C([{selected:i.selected==e},"option"]),disabled:!!i.selected,onClick:t=>c(i,""+e)},N(M),11,se))),128)),ie])):(m(),g("div",{key:1,class:C([i.type,"message"])},N(i.content),3))],64)):W("",!0)],64))),128)),S("form",{class:"form",onSubmit:_},[O(S("input",{ref_key:"fieldEl",ref:a,"onUpdate:modelValue":l[0]||(l[0]=i=>R(s)?s.value=i:s=i),class:"field",placeholder:f.placeholder},null,8,re),[[U,h(s)]])],32)],2))}});var le=B(ae,[["__scopeId","data-v-6f87b757"]]),ue=`let post = self.postMessage;
let isAsyncRunning = false;

// @ts-ignore
delete self.postMessage;
// @ts-ignore
delete self.caches;

/** @returns {Promise<any>} */
function onNextMessage() {
  return new Promise((resolve) => {
    self.onmessage = ({ data }) => {
      resolve(data);
    };
  });
}

/** @template T */
async function runAsync(
  /** @type {() => Promise<T>} */ fn,
  /** @type {T} */ defaultValue
) {
  if (isAsyncRunning) return defaultValue;

  isAsyncRunning = true;
  let value = await fn();
  isAsyncRunning = false;

  return value;
}

function _print(/** @type {any[]} */ ...content) {
  post({ type: "print", content });
}

async function _simplePost(
  type = "",
  /** @type {any} */ defaultValue,
  messages = [""]
) {
  return runAsync(async () => {
    _print(...messages);
    post({ type });

    return await onNextMessage();
  }, defaultValue);
}

async function $pause() {
  return runAsync(async () => {
    post({ type: "pause" });
    await onNextMessage();
  });
}

async function $input(messages = [""]) {
  return _simplePost("input", "", messages);
}

async function $inputint(messages = [""]) {
  return _simplePost("inputint", 0, messages);
}

async function $inputfloat(messages = [""]) {
  return _simplePost("inputfloat", 0, messages);
}

async function $confirm(messages = [""]) {
  return _simplePost("confirm", false, messages);
}

function $kill(messages = [""]) {
  _print(messages);
  post({ type: "kill" });
}

async function $wait([time] = [1]) {
  return runAsync(async () => {
    time = +time;
    if (!isFinite(time) || time < 0) time = 0;
    await new Promise((resolve) => setTimeout(resolve, 1000 * time));
  });
}

function $random([min, max] = [0, 1]) {
  min = +min;
  max = +max;

  if (!isFinite(min) || !isFinite(max)) return 0;
  return Math.random() * (max - min) + min;
}

function $randint([min, max] = [0, 9]) {
  min = +min;
  max = +max;

  if (!isFinite(min) || !isFinite(max)) return 0;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function* $range([min, max] = [1, NaN]) {
  min = +min;
  max = +max;

  if (!isFinite(min)) return;
  if (!isFinite(max)) [max, min] = [min, 0];

  for (let i = min; i <= max; i++) {
    yield i;
  }
}

/** @type {{ [x: string]: string }} */
let options = {};

/** @type {{ [x: string]: () => Promise<void> | void }} */
let menu = {};

async function $menu(
  messages = [""],
  /** @type {() => Promise<void> | void } */ cb = () => {}
) {
  if (isAsyncRunning) return;
  isAsyncRunning = true;

  _print(...messages);

  menu = Object.create(null);
  options = Object.create(null);
  await cb();

  post({ type: "menu", options });
  isAsyncRunning = false;
  await menu[await onNextMessage()]?.();
}

function $option(/** @type {any[]} */ [key, value = key] = [], cb = () => {}) {
  options[key] = "" + value;
  menu[key] = cb;
}

export {};
`;const ce=V({props:{code:null,autofocus:{type:Boolean}},setup(f){const d=f;let u=b("Send messages to program..."),{autofocus:p}=d,s;function _(e){s&&s(e)}let r;function x(){r&&r()}let y;function c(e,t){y&&y(e,t)}let a=F([]),n=M(d.code,!1);I(H(d,"code"),e=>n=M(e,!0));function l(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"||typeof e=="bigint"}function i(e){return e==null?"":l(e)?""+e:typeof e=="function"?`function ${e.name}()`:Array.isArray(e)?e.map(i).filter(t=>t).join(`
`):typeof e=="object"?Object.keys(e).map(t=>`${t}: ${e[t]}`).join(`
`):""}function v({data:e}){if(!(typeof e!="object"||e===null))if(e.type=="print"){let t=i(e.content);if(!t)return;for(let o of t.split(`
`))a.push({type:"info",content:o})}else if(e.type=="input"){let t=n;p&&a.push({type:"focus",where:"field"}),s=o=>{t==n&&(s=void 0,t==null||t.postMessage(o),t=void 0)}}else if(e.type=="menu"){let t=""+Math.random();a.push({name:t,type:"select",options:e.options||{}}),p&&a.push({type:"focus",where:"select"});let o=n;y=(w,E)=>{n==o&&(y=void 0,t==w&&(o==null||o.postMessage(E)),o=void 0)}}else if(e.type=="pause"){let t=n;u.value="Press enter to continue...",p&&a.push({type:"focus",where:"field"});let o=()=>{n==t&&(r=void 0,s=void 0,t==null||t.postMessage(void 0),t=void 0,u.value="Send messages to program...")};r=o,s=o}else e.type=="kill"&&(n==null||n.terminate())}function M(e,t){t&&(n==null||n.terminate()),u.value="Send messages to program...",a.map(o=>o.hidden=!0);try{let o=ue+ee(e),w=new Worker(`data:text/javascript,${o}`,{name:Math.random().toString().slice(2),type:"module"});return w.onmessage=v,w.onerror=E=>{E.preventDefault(),a.push({type:"error",content:E.message})},s=void 0,w}catch(o){a.push({type:"error",content:""+((o==null?void 0:o.message)||o||"An unknown error occurred")})}}return(e,t)=>(m(),L(le,{class:"console",messages:h(a),placeholder:h(u),onEnter:x,onField:_,onSelect:c},null,8,["messages","placeholder"]))}});const pe=Q("Run Program"),me={class:"container"},fe=V({setup(f){function d(c){try{return btoa(c.replace(/[^\x00-\xff]+/g,"")).replace(/\+/g,"_").replace(/\//g,"-").replace(/=/g,"$")}catch{return""}}function u(c){try{return atob(c.replace(/_/g,"+").replace(/-/g,"/").replace(/\$/g,"="))}catch{return""}}let p;function s(c){p=c,c.commands.addCommand({name:"run",bindKey:{win:"Ctrl-Enter",mac:"Command-Enter"},exec:_})}function _(){x.value=`#${Math.random()}
${p.getValue()}`}let r=b(u(""+(q().params.code||""))||`# After working on a project, bookmark your page to save your code.

# Surround text with quotation marks to print it.
"Welcome to my program!"



# Use @menu to create a menu the user can select from.
# Add @option blocks to create menu items.

@menu "What is your favorite ice cream flavor?"

  @option "Chocolate"
    "Well, I think that's an amazing flavor!"

  @option "Vanilla"
    "I like vanilla too!"

  @option "Brussel sprout"
    "You've got to be joking..."

  @option "Other"
    $flavor = @input "What flavor do you like?"
    "Well, I guess |$flavor| is good too.
`),x=b('"Press Ctrl-Enter or Cmd-Enter while in the editor to run your program."'),y=setInterval(()=>{Y.replace(`/storymatic/${d(r.value)}`)},5e3);return G(()=>clearInterval(y)),(c,a)=>{const n=J("GlobalEvents");return m(),g(k,null,[$(n,{onKeydown:[T(j(_,["ctrl"]),["enter"]),T(j(_,["meta"]),["enter"])]},null,8,["onKeydown"]),$(X,{"explicit-height":""},{nav:A(()=>[$(Z,{onClick:_},{default:A(()=>[pe]),_:1})]),default:A(()=>[S("div",me,[$(ne,{modelValue:h(r),"onUpdate:modelValue":a[0]||(a[0]=l=>R(r)?r.value=l:r=l),class:"editor",onInit:s},null,8,["modelValue"]),$(ce,{class:"viewer",code:h(x),autofocus:""},null,8,["code"])])]),_:1})],64)}}});var _e=B(fe,[["__scopeId","data-v-d9bc0e9a"]]);export{_e as default};
