import{_ as w}from"./FullscreenCanvas.65a2957d.js";import{d as x,v as g,o as D,e as $,w as s,y as C,h as f,N as c,j as m,x as _}from"./index.4015e19e.js";import"./FullscreenDisplay.1f285eff.js";const v=m("Less Detail"),L=m("More Detail"),V=x({__name:"FakeGradient2View",setup(N){let r,l,e=+g().params.detail;(!isFinite(e)||e<50)&&(e=50),e=Math.floor(e);function u(a){let o=a.getContext("2d");if(!o)return;function i(){let d=a.width/e;for(let n=0;n<e;n++){let t=n/e,k=t<=.5?t:1-t;t+=Math.random()*k,t=t<0?0:t>1?1:t,t=255*(1-t),o.fillStyle=`rgb(${t}, ${t}, ${t})`,o.fillRect(n*d,0,d,a.height)}}i(),window.addEventListener("resize",i),C(()=>window.removeEventListener("resize",i)),r=()=>{e-=50,e<50&&(e=50),_.replace(`/fake-gradient-2/${e}`),i()},l=()=>{e+=50,_.replace(`/fake-gradient-2/${e}`),i()}}function p(){r&&r()}function h(){l&&l()}return(a,o)=>(D(),$(w,{onReady:u},{nav:s(()=>[f(c,{onClick:p},{default:s(()=>[v]),_:1}),f(c,{onClick:h},{default:s(()=>[L]),_:1})]),_:1}))}});export{V as default};
