if(!self.define){let s,e={};const i=(i,l)=>(i=new URL(i+".js",l).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(l,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let u={};const a=s=>i(s,n),o={module:{uri:n},exports:u,require:a};e[n]=Promise.all(l.map((s=>o[s]||a(s)))).then((s=>(r(...s),u)))}}define(["./workbox-c1760cce"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"404.html",revision:"d95150021d370aba800d3beb3b8e944a"},{url:"assets/AboutUsView.dc7f1b88.js",revision:null},{url:"assets/Article.70a17500.css",revision:null},{url:"assets/Article.983ffdff.js",revision:null},{url:"assets/AutoFlipChessboardView.576032da.js",revision:null},{url:"assets/BingoBoardView.876d6740.css",revision:null},{url:"assets/BingoBoardView.e29286ba.js",revision:null},{url:"assets/BingoMasterView.1c2677ce.js",revision:null},{url:"assets/BingoMasterView.e5f59fc3.css",revision:null},{url:"assets/BlogArticleListView.fee12f06.js",revision:null},{url:"assets/CalculatingWeekdays.4db2d049.js",revision:null},{url:"assets/ChessVersusAI.e17aadf4.js",revision:null},{url:"assets/ChessVersusBadAIView.bfd9cf4b.js",revision:null},{url:"assets/ChessVersusCaptureAIView.4225e074.js",revision:null},{url:"assets/ChessVersusNoCaptureAIView.b74b86a1.js",revision:null},{url:"assets/ChessVersusRandomView.656ef0c5.js",revision:null},{url:"assets/ChessVersusStockfish.8d3e5f66.js",revision:null},{url:"assets/ColorRemoverView.3f2eda51.js",revision:null},{url:"assets/ConnectFourView.2360cbd8.js",revision:null},{url:"assets/ConnectFourView.c3d6cf17.css",revision:null},{url:"assets/cookie.648245ab.js",revision:null},{url:"assets/DivisibilityRules.ada92e80.js",revision:null},{url:"assets/Does0Equal1.57f9ca08.js",revision:null},{url:"assets/EnglishIsWeirdView.360cc8ee.css",revision:null},{url:"assets/EnglishIsWeirdView.960d83d7.js",revision:null},{url:"assets/FakeGradient2View.c6b7387b.js",revision:null},{url:"assets/FakeGradientView.dda2da15.js",revision:null},{url:"assets/Forcing1089.9e1fe30d.js",revision:null},{url:"assets/FractalPresetsView.6ed6ad04.js",revision:null},{url:"assets/FractalView.a5e1b496.js",revision:null},{url:"assets/FrameOverlayView.0e91aabc.css",revision:null},{url:"assets/FrameOverlayView.b608c4c8.js",revision:null},{url:"assets/FullscreenCanvas.b3358cc7.js",revision:null},{url:"assets/FullscreenDisplay.1a5ef744.js",revision:null},{url:"assets/FullscreenDisplay.2736bd36.css",revision:null},{url:"assets/GithubCopilotIsAmazingView.798e2c74.js",revision:null},{url:"assets/IllegalVersusStockfish.befb6e11.js",revision:null},{url:"assets/index.82a198b5.js",revision:null},{url:"assets/index.a94b4896.css",revision:null},{url:"assets/InfinityIsMinusOneTwelfth.60374e9f.js",revision:null},{url:"assets/LegalMoveChessboard.5236be52.css",revision:null},{url:"assets/LegalMoveChessboard.6898641b.js",revision:null},{url:"assets/MathemagicalTricks.360edd7a.js",revision:null},{url:"assets/MetaballView.e2323e0b.js",revision:null},{url:"assets/MultDivQuizView.84de4057.js",revision:null},{url:"assets/NotFoundView.a3338509.js",revision:null},{url:"assets/OvercolorView.08dbd2d7.js",revision:null},{url:"assets/Quiz.19fbb481.css",revision:null},{url:"assets/Quiz.29ddeffd.js",revision:null},{url:"assets/RainbowNoiseView.0043024f.js",revision:null},{url:"assets/SameNumberGenerator.194a11f5.css",revision:null},{url:"assets/SameNumberGenerator.3e9458e1.js",revision:null},{url:"assets/SquareQuizView.b39c8fc4.js",revision:null},{url:"assets/StandardChessboardView.fb908157.js",revision:null},{url:"assets/stockfish.77ed8172.js",revision:null},{url:"assets/stockfish.d5755b2d.js",revision:null},{url:"assets/storymatic.a1edd891.js",revision:null},{url:"assets/storymatic.ef4fb9e9.css",revision:null},{url:"assets/StorymaticEditorView.42b51465.js",revision:null},{url:"assets/StorymaticEditorView.f6181850.css",revision:null},{url:"assets/StorymaticJavaScriptView.04122e0a.js",revision:null},{url:"assets/StorymaticJavaScriptView.93b04b4d.css",revision:null},{url:"assets/TicTacToeView.03932df7.js",revision:null},{url:"assets/TicTacToeView.3cb8349f.css",revision:null},{url:"assets/TropeHighlighterView.0b57f035.css",revision:null},{url:"assets/TropeHighlighterView.10818c56.js",revision:null},{url:"assets/VideoCallView.3e7a6383.css",revision:null},{url:"assets/VideoCallView.abe2a3e5.js",revision:null},{url:"assets/WebGL2Canvas.3d40e853.css",revision:null},{url:"assets/WebGL2Canvas.ee8c52e8.js",revision:null},{url:"assets/WhatMakesZSnoutDifferentView.31a10a66.js",revision:null},{url:"index.html",revision:"620da5fe62879e9c6dcaf145070b7527"},{url:"/android-chrome-192x192.png",revision:"8853761520259549"},{url:"/android-chrome-512x512.png",revision:"8853761520259549"},{url:"/apple-touch-icon.png",revision:"8853761520259549"},{url:"/browserconfig.xml",revision:"8853761520259549"},{url:"/CNAME",revision:"8853761520259549"},{url:"/favicon-16x16.png",revision:"8853761520259549"},{url:"/favicon-32x32.png",revision:"8853761520259549"},{url:"/favicon.ico",revision:"8853761520259549"},{url:"/manifest.json",revision:"8853761520259549"},{url:"/mstile-150x150.png",revision:"8853761520259549"},{url:"/pwa-192x192.png",revision:"8853761520259549"},{url:"/pwa-512x512.png",revision:"8853761520259549"},{url:"/robots.txt",revision:"8853761520259549"},{url:"/safari-pinned-tab.svg",revision:"8853761520259549"},{url:"/zsnout.icns",revision:"8853761520259549"},{url:"manifest.webmanifest",revision:"162b6f9e02f9aed051cf6a04f955c3d1"},{url:"manifest.webmanifest",revision:"162b6f9e02f9aed051cf6a04f955c3d1"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("/index.html")))}));
