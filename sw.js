if(!self.define){let s,e={};const i=(i,l)=>(i=new URL(i+".js",l).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(l,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let u={};const a=s=>i(s,n),o={module:{uri:n},exports:u,require:a};e[n]=Promise.all(l.map((s=>o[s]||a(s)))).then((s=>(r(...s),u)))}}define(["./workbox-c1760cce"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"404.html",revision:"d95150021d370aba800d3beb3b8e944a"},{url:"assets/AboutUsView.a363dfd5.js",revision:null},{url:"assets/Article.70a17500.css",revision:null},{url:"assets/Article.cb4ed1f5.js",revision:null},{url:"assets/AutoFlipChessboardView.2bfbc943.js",revision:null},{url:"assets/BingoBoardView.723c60bd.js",revision:null},{url:"assets/BingoBoardView.876d6740.css",revision:null},{url:"assets/BingoMasterView.ddecd4d1.js",revision:null},{url:"assets/BingoMasterView.e5f59fc3.css",revision:null},{url:"assets/BlogArticleListView.c307db4e.js",revision:null},{url:"assets/CalculatingWeekdays.0e38cf02.js",revision:null},{url:"assets/ChessVersusAI.fac623f6.js",revision:null},{url:"assets/ChessVersusBadAIView.bc75a03e.js",revision:null},{url:"assets/ChessVersusCaptureAIView.357fd5ac.js",revision:null},{url:"assets/ChessVersusNoCaptureAIView.cb04ce4f.js",revision:null},{url:"assets/ChessVersusRandomView.fd4f586c.js",revision:null},{url:"assets/ChessVersusStockfish.5d7726c8.js",revision:null},{url:"assets/ColorRemoverView.6dd41954.js",revision:null},{url:"assets/ConnectFourView.bef207e8.js",revision:null},{url:"assets/ConnectFourView.c3d6cf17.css",revision:null},{url:"assets/cookie.648245ab.js",revision:null},{url:"assets/DivisibilityRules.4be6fec7.js",revision:null},{url:"assets/Does0Equal1.d6c82627.js",revision:null},{url:"assets/EnglishIsWeirdView.360cc8ee.css",revision:null},{url:"assets/EnglishIsWeirdView.5e491efa.js",revision:null},{url:"assets/FakeGradient2View.4d438802.js",revision:null},{url:"assets/FakeGradientView.a50909b2.js",revision:null},{url:"assets/Forcing1089.b62ad2f0.js",revision:null},{url:"assets/FractalPresetsView.5e3f42b4.js",revision:null},{url:"assets/FractalView.f2585b5c.js",revision:null},{url:"assets/FrameOverlayView.0e91aabc.css",revision:null},{url:"assets/FrameOverlayView.e2108728.js",revision:null},{url:"assets/FullscreenCanvas.ab3e6838.js",revision:null},{url:"assets/FullscreenDisplay.2736bd36.css",revision:null},{url:"assets/FullscreenDisplay.da71b962.js",revision:null},{url:"assets/GithubCopilotIsAmazingView.4ef35adb.js",revision:null},{url:"assets/IllegalVersusStockfish.aa5b8fd5.js",revision:null},{url:"assets/index.075875a4.js",revision:null},{url:"assets/index.a94b4896.css",revision:null},{url:"assets/InfinityIsMinusOneTwelfth.62b023b3.js",revision:null},{url:"assets/LegalMoveChessboard.33f9433e.js",revision:null},{url:"assets/LegalMoveChessboard.5236be52.css",revision:null},{url:"assets/MathemagicalTricks.0f387d32.js",revision:null},{url:"assets/MetaballView.7f019a9a.js",revision:null},{url:"assets/MultDivQuizView.9a8262d6.js",revision:null},{url:"assets/NotFoundView.381fb114.js",revision:null},{url:"assets/OvercolorView.06225642.js",revision:null},{url:"assets/Quiz.19fbb481.css",revision:null},{url:"assets/Quiz.ae0b859a.js",revision:null},{url:"assets/RainbowNoiseView.03168eb5.js",revision:null},{url:"assets/SameNumberGenerator.194a11f5.css",revision:null},{url:"assets/SameNumberGenerator.7ae7ebc0.js",revision:null},{url:"assets/SquareQuizView.894f98a0.js",revision:null},{url:"assets/StandardChessboardView.49de139f.js",revision:null},{url:"assets/stockfish.77ed8172.js",revision:null},{url:"assets/stockfish.d5755b2d.js",revision:null},{url:"assets/storymatic.baae3fab.js",revision:null},{url:"assets/storymatic.ef4fb9e9.css",revision:null},{url:"assets/StorymaticEditorView.03f567cf.js",revision:null},{url:"assets/StorymaticEditorView.f6181850.css",revision:null},{url:"assets/StorymaticJavaScriptView.844a1d76.js",revision:null},{url:"assets/StorymaticJavaScriptView.93b04b4d.css",revision:null},{url:"assets/TicTacToeView.3cb8349f.css",revision:null},{url:"assets/TicTacToeView.968307e3.js",revision:null},{url:"assets/TropeHighlighterView.0b57f035.css",revision:null},{url:"assets/TropeHighlighterView.2efd9bdd.js",revision:null},{url:"assets/VideoCallView.3e7a6383.css",revision:null},{url:"assets/VideoCallView.9d1319b0.js",revision:null},{url:"assets/WebGL2Canvas.3d40e853.css",revision:null},{url:"assets/WebGL2Canvas.67a1c433.js",revision:null},{url:"assets/WhatMakesZSnoutDifferentView.3eaa4ace.js",revision:null},{url:"index.html",revision:"a8f134f42350bdfe27e2536ca5e8288b"},{url:"/android-chrome-192x192.png",revision:"7580952188221548"},{url:"/android-chrome-512x512.png",revision:"7580952188221548"},{url:"/apple-touch-icon.png",revision:"7580952188221548"},{url:"/browserconfig.xml",revision:"7580952188221548"},{url:"/CNAME",revision:"7580952188221548"},{url:"/favicon-16x16.png",revision:"7580952188221548"},{url:"/favicon-32x32.png",revision:"7580952188221548"},{url:"/favicon.ico",revision:"7580952188221548"},{url:"/manifest.json",revision:"7580952188221548"},{url:"/mstile-150x150.png",revision:"7580952188221548"},{url:"/pwa-192x192.png",revision:"7580952188221548"},{url:"/pwa-512x512.png",revision:"7580952188221548"},{url:"/robots.txt",revision:"7580952188221548"},{url:"/safari-pinned-tab.svg",revision:"7580952188221548"},{url:"/zsnout.icns",revision:"7580952188221548"},{url:"manifest.webmanifest",revision:"162b6f9e02f9aed051cf6a04f955c3d1"},{url:"manifest.webmanifest",revision:"162b6f9e02f9aed051cf6a04f955c3d1"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("/index.html")))}));
