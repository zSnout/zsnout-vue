import{_ as N,d as V,A as F,l as E,o as f,c,h as l,D as I,w as _,F as d,N as b,b as w,f as M,n as j,t as G,u as H,j as A}from"./index.4015e19e.js";const L=A("Best Move"),O=A("Reset"),R={class:"board"},S=["onClick"],p=V({__name:"TicTacToeView",setup(z){let e=[[0,0,0],[0,0,0],[0,0,0]],T=F([[0,0,0],[0,0,0],[0,0,0]]),u=!0;function a(t){return e[0][0]===t&&e[0][1]===t&&e[0][2]===t||e[1][0]===t&&e[1][1]===t&&e[1][2]===t||e[2][0]===t&&e[2][1]===t&&e[2][2]===t||e[0][0]===t&&e[1][0]===t&&e[2][0]===t||e[0][1]===t&&e[1][1]===t&&e[2][1]===t||e[0][2]===t&&e[1][2]===t&&e[2][2]===t||e[0][0]===t&&e[1][1]===t&&e[2][2]===t||e[0][2]===t&&e[1][1]===t&&e[2][0]===t}function h(){return e.every(t=>t.every(n=>n))}function x(t){if(a(t))return[1];if(a(-t))return[-1];if(h())return[0];let n=-1,o=[];for(let r=0;r<3;r++)for(let s=0;s<3;s++)if(e[r][s]===0){e[r][s]=t;let i=-x(-t)[0];e[r][s]=0,i>n&&(o=[]),n=Math.max(n,i),i==n&&o.push([r,s])}return[n,o]}function m(){for(let t=0;t<3;t++)for(let n=0;n<3;n++)T[t][n]=e[t][n]}function k(t=1){if(u)return;let[,n]=x(t);if(!n||!n.length)return;let o=n[Math.floor(Math.random()*n.length)];e[o[0]][o[1]]=t,u=!0,m()}function C(){a(1)||a(-1)||h()||!u||(u=!1,k(-1),u=!1,setTimeout(k,500))}function g(t,n){a(1)||a(-1)||h()||e[t][n]===0&&(!u||(u=!1,e[t][n]=-1,m(),setTimeout(k,500)))}function B(t,n,o){return t===-1?"X":t===1?"O":String.fromCharCode(65+3*n+o)}function K(t){if(t.ctrlKey||t.metaKey||t.altKey||t.key.length!=1)return;if(t.key=="R"||t.key=="r")return t.preventDefault(),D();if(t.key=="J"||t.key=="j")return t.preventDefault(),C();let n=t.key.charCodeAt(0);if(65<=n&&n<=74)n-=65;else if(97<=n&&n<=106)n-=97;else return;t.preventDefault();let o=n%3,r=Math.floor(n/3);g(r,o)}function D(){e=[[0,0,0],[0,0,0],[0,0,0]],u=!0,m()}return(t,n)=>{const o=E("GlobalEvents");return f(),c(d,null,[l(o,{onKeydown:K}),l(I,{"explicit-height":"",flexbox:""},{nav:_(()=>[l(b,{onClick:C},{default:_(()=>[L]),_:1}),l(b,{onClick:D},{default:_(()=>[O]),_:1})]),default:_(()=>[w("div",R,[(f(!0),c(d,null,M(H(T),(r,s)=>(f(),c(d,{key:s},[(f(!0),c(d,null,M(r,(i,v)=>(f(),c("span",{key:v,class:"outer-cell",onClick:J=>g(s,v)},[w("span",{class:j([i==-1?"x":i==1?"o":"n","cell"])},G(B(i,s,v)),3)],8,S))),128))],64))),128))])]),_:1})],64)}}});var W=N(p,[["__scopeId","data-v-a32de9e2"]]);export{W as default};
