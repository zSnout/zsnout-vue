if(!self.define){let s,e={};const i=(i,l)=>(i=new URL(i+".js",l).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(l,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let u={};const a=s=>i(s,n),o={module:{uri:n},exports:u,require:a};e[n]=Promise.all(l.map((s=>o[s]||a(s)))).then((s=>(r(...s),u)))}}define(["./workbox-c7240f55"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"404.html",revision:"d95150021d370aba800d3beb3b8e944a"},{url:"assets/AboutUsView.2d27a665.js",revision:null},{url:"assets/Article.75d28048.js",revision:null},{url:"assets/Article.e928db87.css",revision:null},{url:"assets/AutoFlipChessboardView.04cd9365.js",revision:null},{url:"assets/BingoBoardView.876d6740.css",revision:null},{url:"assets/BingoBoardView.fd652713.js",revision:null},{url:"assets/BingoMasterView.a65808e1.js",revision:null},{url:"assets/BingoMasterView.e5f59fc3.css",revision:null},{url:"assets/BlogArticleListView.3407a302.js",revision:null},{url:"assets/CalculatingWeekdays.36fcd331.js",revision:null},{url:"assets/ChessVersusAI.0da401b3.js",revision:null},{url:"assets/ChessVersusBadAIView.e53d6723.js",revision:null},{url:"assets/ChessVersusCaptureAIView.4a741b1c.js",revision:null},{url:"assets/ChessVersusNoCaptureAIView.adee7d5f.js",revision:null},{url:"assets/ChessVersusRandomView.74786591.js",revision:null},{url:"assets/ChessVersusStockfish.ce12c5b4.js",revision:null},{url:"assets/ColorRemoverView.b4e97371.js",revision:null},{url:"assets/ConnectFourView.500fccd2.js",revision:null},{url:"assets/ConnectFourView.c3d6cf17.css",revision:null},{url:"assets/cookie.648245ab.js",revision:null},{url:"assets/DivisibilityRules.ba5a97d9.js",revision:null},{url:"assets/Does0Equal1.01c82364.js",revision:null},{url:"assets/EnglishIsWeirdView.360cc8ee.css",revision:null},{url:"assets/EnglishIsWeirdView.4db6f8bf.js",revision:null},{url:"assets/FakeGradient2View.06a1503d.js",revision:null},{url:"assets/FakeGradientView.8da0bc57.js",revision:null},{url:"assets/Forcing1089.a6105a97.js",revision:null},{url:"assets/FractalPresetsView.fa1f2be8.js",revision:null},{url:"assets/FractalView.01eb26a9.js",revision:null},{url:"assets/FrameOverlayView.0e91aabc.css",revision:null},{url:"assets/FrameOverlayView.c035cee2.js",revision:null},{url:"assets/FullscreenCanvas.50d7a7a0.js",revision:null},{url:"assets/FullscreenDisplay.2736bd36.css",revision:null},{url:"assets/FullscreenDisplay.7605d73c.js",revision:null},{url:"assets/GithubCopilotIsAmazingView.48308f69.js",revision:null},{url:"assets/IllegalVersusStockfish.4e942b7e.js",revision:null},{url:"assets/index.26979f72.css",revision:null},{url:"assets/index.284b0e86.js",revision:null},{url:"assets/InfinityIsMinusOneTwelfth.312a46dc.js",revision:null},{url:"assets/LegalMoveChessboard.5236be52.css",revision:null},{url:"assets/LegalMoveChessboard.7f23b517.js",revision:null},{url:"assets/MathemagicalTricks.d23f907e.js",revision:null},{url:"assets/MetaballView.2cd1fabb.js",revision:null},{url:"assets/MultDivQuizView.39462603.js",revision:null},{url:"assets/NotFoundView.4d1ab1c6.js",revision:null},{url:"assets/OvercolorView.b6fdebfd.js",revision:null},{url:"assets/Quiz.19fbb481.css",revision:null},{url:"assets/Quiz.e717c0e1.js",revision:null},{url:"assets/RainbowNoiseView.8a513992.js",revision:null},{url:"assets/SquareQuizView.1ca9c65d.js",revision:null},{url:"assets/StandardChessboardView.822d84eb.js",revision:null},{url:"assets/stockfish.0823b611.js",revision:null},{url:"assets/stockfish.0e8e8684.js",revision:null},{url:"assets/storymatic.df2383ea.js",revision:null},{url:"assets/storymatic.ef4fb9e9.css",revision:null},{url:"assets/StorymaticEditorView.518de607.js",revision:null},{url:"assets/StorymaticEditorView.f6181850.css",revision:null},{url:"assets/StorymaticJavaScriptView.539750e7.js",revision:null},{url:"assets/StorymaticJavaScriptView.93b04b4d.css",revision:null},{url:"assets/TicTacToeView.3cb8349f.css",revision:null},{url:"assets/TicTacToeView.4b3fdd97.js",revision:null},{url:"assets/TropeHighlighterView.0b57f035.css",revision:null},{url:"assets/TropeHighlighterView.c508d7bd.js",revision:null},{url:"assets/VideoCallView.3e7a6383.css",revision:null},{url:"assets/VideoCallView.685b30d3.js",revision:null},{url:"assets/WebGL2Canvas.05c5fc30.css",revision:null},{url:"assets/WebGL2Canvas.bcc66e73.js",revision:null},{url:"assets/WhatMakesZSnoutDifferentView.fd94317a.js",revision:null},{url:"index.html",revision:"3945e24a478b65a6f638c025125a4100"},{url:"/android-chrome-192x192.png",revision:"1938818981087016"},{url:"/android-chrome-512x512.png",revision:"1938818981087016"},{url:"/apple-touch-icon.png",revision:"1938818981087016"},{url:"/browserconfig.xml",revision:"1938818981087016"},{url:"/CNAME",revision:"1938818981087016"},{url:"/favicon-16x16.png",revision:"1938818981087016"},{url:"/favicon-32x32.png",revision:"1938818981087016"},{url:"/favicon.ico",revision:"1938818981087016"},{url:"/manifest.json",revision:"1938818981087016"},{url:"/mstile-150x150.png",revision:"1938818981087016"},{url:"/pwa-192x192.png",revision:"1938818981087016"},{url:"/pwa-512x512.png",revision:"1938818981087016"},{url:"/robots.txt",revision:"1938818981087016"},{url:"/safari-pinned-tab.svg",revision:"1938818981087016"},{url:"manifest.webmanifest",revision:"162b6f9e02f9aed051cf6a04f955c3d1"},{url:"manifest.webmanifest",revision:"162b6f9e02f9aed051cf6a04f955c3d1"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("/index.html")))}));
