if(!self.define){let s,e={};const i=(i,l)=>(i=new URL(i+".js",l).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(l,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let u={};const a=s=>i(s,n),o={module:{uri:n},exports:u,require:a};e[n]=Promise.all(l.map((s=>o[s]||a(s)))).then((s=>(r(...s),u)))}}define(["./workbox-c7240f55"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"404.html",revision:"d95150021d370aba800d3beb3b8e944a"},{url:"assets/AboutUsView.376c29d5.js",revision:null},{url:"assets/Article.3baaeda7.js",revision:null},{url:"assets/Article.51241e71.css",revision:null},{url:"assets/AutoFlipChessboardView.74b8d9c9.js",revision:null},{url:"assets/BingoBoardView.72ab6ff4.js",revision:null},{url:"assets/BingoBoardView.876d6740.css",revision:null},{url:"assets/BingoMasterView.92285c4c.js",revision:null},{url:"assets/BingoMasterView.e5f59fc3.css",revision:null},{url:"assets/BlogArticleListView.2e27f5b3.js",revision:null},{url:"assets/CalculatingWeekdays.864d5b84.js",revision:null},{url:"assets/ChessVersusAI.3eac54a4.js",revision:null},{url:"assets/ChessVersusBadAIView.17a14460.js",revision:null},{url:"assets/ChessVersusCaptureAIView.a1de1836.js",revision:null},{url:"assets/ChessVersusNoCaptureAIView.20753d73.js",revision:null},{url:"assets/ChessVersusRandomView.7c3e3f65.js",revision:null},{url:"assets/ChessVersusStockfish.90bf8cfe.js",revision:null},{url:"assets/ColorRemoverView.711bac01.js",revision:null},{url:"assets/cookie.648245ab.js",revision:null},{url:"assets/DivisibilityRules.ab0d0fa6.js",revision:null},{url:"assets/Does0Equal1.c2ce3034.js",revision:null},{url:"assets/EnglishIsWeirdView.360cc8ee.css",revision:null},{url:"assets/EnglishIsWeirdView.d70ac0cb.js",revision:null},{url:"assets/FakeGradient2View.d36c81e1.js",revision:null},{url:"assets/FakeGradientView.12d021e8.js",revision:null},{url:"assets/Forcing1089.4e9b293b.js",revision:null},{url:"assets/FractalPresetsView.d3583481.js",revision:null},{url:"assets/FractalView.fa4879ce.js",revision:null},{url:"assets/FrameOverlayView.0e91aabc.css",revision:null},{url:"assets/FrameOverlayView.7851129e.js",revision:null},{url:"assets/FullscreenCanvas.5cef9451.js",revision:null},{url:"assets/FullscreenDisplay.2736bd36.css",revision:null},{url:"assets/FullscreenDisplay.fb1c5fe6.js",revision:null},{url:"assets/GithubCopilotIsAmazingView.599d28a7.js",revision:null},{url:"assets/IllegalVersusStockfish.39592e62.js",revision:null},{url:"assets/index.2e82a881.js",revision:null},{url:"assets/index.da307cec.css",revision:null},{url:"assets/InfinityIsMinusOneTwelfth.12dd4d8f.js",revision:null},{url:"assets/LegalMoveChessboard.5236be52.css",revision:null},{url:"assets/LegalMoveChessboard.99325471.js",revision:null},{url:"assets/MetaballView.fc4a3bb3.js",revision:null},{url:"assets/MultDivQuizView.3310a231.js",revision:null},{url:"assets/NotFoundView.63adf0ee.js",revision:null},{url:"assets/OvercolorView.5818ad73.js",revision:null},{url:"assets/Quiz.19fbb481.css",revision:null},{url:"assets/Quiz.1c5445fc.js",revision:null},{url:"assets/RainbowNoiseView.b5bbd2dd.js",revision:null},{url:"assets/SquareQuizView.2c357f36.js",revision:null},{url:"assets/StandardChessboardView.97b56d1f.js",revision:null},{url:"assets/stockfish.0823b611.js",revision:null},{url:"assets/storymatic.b0218615.js",revision:null},{url:"assets/storymatic.f95f52e3.css",revision:null},{url:"assets/StorymaticEditorView.3788b303.js",revision:null},{url:"assets/StorymaticEditorView.f6181850.css",revision:null},{url:"assets/StorymaticJavaScriptView.93b04b4d.css",revision:null},{url:"assets/StorymaticJavaScriptView.f19d3c9f.js",revision:null},{url:"assets/TropeHighlighterView.0c59e79b.js",revision:null},{url:"assets/TropeHighlighterView.e32278b9.css",revision:null},{url:"assets/VideoCallView.3e7a6383.css",revision:null},{url:"assets/VideoCallView.710a52ac.js",revision:null},{url:"assets/WebGL2Canvas.05c5fc30.css",revision:null},{url:"assets/WebGL2Canvas.3be0c79d.js",revision:null},{url:"assets/WhatMakesZSnoutDifferentView.c538efe8.js",revision:null},{url:"index.html",revision:"8c2da3a2b6019416ccc760e9971709f2"},{url:"404.html",revision:"6955446420310698"},{url:"android-chrome-192x192.png",revision:"6955446420310698"},{url:"android-chrome-512x512.png",revision:"6955446420310698"},{url:"apple-touch-icon.png",revision:"6955446420310698"},{url:"browserconfig.xml",revision:"6955446420310698"},{url:"CNAME",revision:"6955446420310698"},{url:"favicon-16x16.png",revision:"6955446420310698"},{url:"favicon-32x32.png",revision:"6955446420310698"},{url:"favicon.ico",revision:"6955446420310698"},{url:"manifest.json",revision:"6955446420310698"},{url:"mstile-150x150.png",revision:"6955446420310698"},{url:"pwa-192x192.png",revision:"6955446420310698"},{url:"pwa-512x512.png",revision:"6955446420310698"},{url:"robots.txt",revision:"6955446420310698"},{url:"safari-pinned-tab.svg",revision:"6955446420310698"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("/index.html")))}));
