if(!self.define){let s,e={};const i=(i,l)=>(i=new URL(i+".js",l).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(l,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let u={};const a=s=>i(s,n),o={module:{uri:n},exports:u,require:a};e[n]=Promise.all(l.map((s=>o[s]||a(s)))).then((s=>(r(...s),u)))}}define(["./workbox-c1760cce"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"404.html",revision:"d95150021d370aba800d3beb3b8e944a"},{url:"assets/AboutUsView.499e2d3a.js",revision:null},{url:"assets/Article.70a17500.css",revision:null},{url:"assets/Article.88e20fbf.js",revision:null},{url:"assets/AutoFlipChessboardView.102b16d9.js",revision:null},{url:"assets/BingoBoardView.876d6740.css",revision:null},{url:"assets/BingoBoardView.a37edd9c.js",revision:null},{url:"assets/BingoMasterView.6272d446.js",revision:null},{url:"assets/BingoMasterView.e5f59fc3.css",revision:null},{url:"assets/BlogArticleListView.51141565.js",revision:null},{url:"assets/CalculatingWeekdays.efac89c9.js",revision:null},{url:"assets/ChessVersusAI.0a01ee30.js",revision:null},{url:"assets/ChessVersusBadAIView.cd2a3587.js",revision:null},{url:"assets/ChessVersusCaptureAIView.ba63f2f7.js",revision:null},{url:"assets/ChessVersusNoCaptureAIView.f5263d73.js",revision:null},{url:"assets/ChessVersusRandomView.9d285337.js",revision:null},{url:"assets/ChessVersusStockfish.5f76900b.js",revision:null},{url:"assets/ColorRemoverView.7e79dbf0.js",revision:null},{url:"assets/ConnectFourView.4a778d2a.js",revision:null},{url:"assets/ConnectFourView.c3d6cf17.css",revision:null},{url:"assets/cookie.648245ab.js",revision:null},{url:"assets/DivisibilityRules.bf81cf33.js",revision:null},{url:"assets/Does0Equal1.ab91849b.js",revision:null},{url:"assets/EnglishIsWeirdView.360cc8ee.css",revision:null},{url:"assets/EnglishIsWeirdView.3a9a7d21.js",revision:null},{url:"assets/FakeGradient2View.d0c52876.js",revision:null},{url:"assets/FakeGradientView.a7e0130f.js",revision:null},{url:"assets/Forcing1089.0cb8e531.js",revision:null},{url:"assets/FractalPresetsView.bd297ce9.js",revision:null},{url:"assets/FractalView.1bc3abbe.js",revision:null},{url:"assets/FrameOverlayView.0e91aabc.css",revision:null},{url:"assets/FrameOverlayView.750765b5.js",revision:null},{url:"assets/FullscreenCanvas.2e562946.js",revision:null},{url:"assets/FullscreenDisplay.053ea47b.js",revision:null},{url:"assets/FullscreenDisplay.2736bd36.css",revision:null},{url:"assets/GithubCopilotIsAmazingView.8e707fe4.js",revision:null},{url:"assets/IllegalVersusStockfish.8931ec8b.js",revision:null},{url:"assets/index.762f793e.js",revision:null},{url:"assets/index.a94b4896.css",revision:null},{url:"assets/InfinityIsMinusOneTwelfth.f1c196c0.js",revision:null},{url:"assets/LegalMoveChessboard.5236be52.css",revision:null},{url:"assets/LegalMoveChessboard.a1bf4922.js",revision:null},{url:"assets/MathemagicalTricks.f58f6184.js",revision:null},{url:"assets/MetaballView.bc3e5b29.js",revision:null},{url:"assets/MultDivQuizView.86af766e.js",revision:null},{url:"assets/NotFoundView.005b5dc9.js",revision:null},{url:"assets/OvercolorView.e756f5de.js",revision:null},{url:"assets/Quiz.19fbb481.css",revision:null},{url:"assets/Quiz.596e5322.js",revision:null},{url:"assets/RainbowNoiseView.4d11bcf6.js",revision:null},{url:"assets/SameNumberGenerator.194a11f5.css",revision:null},{url:"assets/SameNumberGenerator.66c308a0.js",revision:null},{url:"assets/SquareQuizView.16dc248b.js",revision:null},{url:"assets/StandardChessboardView.67cda185.js",revision:null},{url:"assets/stockfish.77ed8172.js",revision:null},{url:"assets/stockfish.d5755b2d.js",revision:null},{url:"assets/storymatic.ef4fb9e9.css",revision:null},{url:"assets/storymatic.f672a0bb.js",revision:null},{url:"assets/StorymaticEditorView.d0867d03.js",revision:null},{url:"assets/StorymaticEditorView.f6181850.css",revision:null},{url:"assets/StorymaticJavaScriptView.85a167e5.js",revision:null},{url:"assets/StorymaticJavaScriptView.93b04b4d.css",revision:null},{url:"assets/TicTacToeView.3ba72035.js",revision:null},{url:"assets/TicTacToeView.3cb8349f.css",revision:null},{url:"assets/TropeHighlighterView.05d99404.js",revision:null},{url:"assets/TropeHighlighterView.0b57f035.css",revision:null},{url:"assets/VideoCallView.3e7a6383.css",revision:null},{url:"assets/VideoCallView.e30ec282.js",revision:null},{url:"assets/WebGL2Canvas.3d40e853.css",revision:null},{url:"assets/WebGL2Canvas.bdd2e5ac.js",revision:null},{url:"assets/WhatMakesZSnoutDifferentView.ebda3e6a.js",revision:null},{url:"index.html",revision:"70d6fff7d2282793a0cc7b5620063d18"},{url:"/android-chrome-192x192.png",revision:"737688770829146"},{url:"/android-chrome-512x512.png",revision:"737688770829146"},{url:"/apple-touch-icon.png",revision:"737688770829146"},{url:"/browserconfig.xml",revision:"737688770829146"},{url:"/CNAME",revision:"737688770829146"},{url:"/favicon-16x16.png",revision:"737688770829146"},{url:"/favicon-32x32.png",revision:"737688770829146"},{url:"/favicon.ico",revision:"737688770829146"},{url:"/manifest.json",revision:"737688770829146"},{url:"/mstile-150x150.png",revision:"737688770829146"},{url:"/pwa-192x192.png",revision:"737688770829146"},{url:"/pwa-512x512.png",revision:"737688770829146"},{url:"/robots.txt",revision:"737688770829146"},{url:"/safari-pinned-tab.svg",revision:"737688770829146"},{url:"/zsnout.icns",revision:"737688770829146"},{url:"manifest.webmanifest",revision:"162b6f9e02f9aed051cf6a04f955c3d1"},{url:"manifest.webmanifest",revision:"162b6f9e02f9aed051cf6a04f955c3d1"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("/index.html")))}));
