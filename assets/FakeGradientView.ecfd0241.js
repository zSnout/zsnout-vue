import{_ as h}from"./FullscreenCanvas.65a2957d.js";import{d as k,v as w,o as x,e as D,w as l,y as C,h as d,N as f,j as _,x as c}from"./index.4015e19e.js";import"./FullscreenDisplay.1f285eff.js";const g=_("Less Detail"),v=_("More Detail"),R=k({__name:"FakeGradientView",setup(L){let n,r,e=+w().params.detail;(!isFinite(e)||e<50)&&(e=50),e=Math.floor(e);function m(i){let a=i.getContext("2d");if(!a)return;function t(){let s=i.width/e;for(let o=0;o<e;o++)a.fillStyle=Math.random()<o/e?"black":"white",a.fillRect(o*s,0,s,i.height)}t(),window.addEventListener("resize",t),C(()=>window.removeEventListener("resize",t)),n=()=>{e-=50,e<50&&(e=50),c.replace(`/fake-gradient/${e}`),t()},r=()=>{e+=50,c.replace(`/fake-gradient/${e}`),t()}}function u(){n&&n()}function p(){r&&r()}return(i,a)=>(x(),D(h,{onReady:m},{nav:l(()=>[d(f,{onClick:u},{default:l(()=>[g]),_:1}),d(f,{onClick:p},{default:l(()=>[v]),_:1})]),_:1}))}});export{R as default};
