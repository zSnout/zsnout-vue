if(!self.define){let s,e={};const i=(i,l)=>(i=new URL(i+".js",l).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(l,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let u={};const a=s=>i(s,n),o={module:{uri:n},exports:u,require:a};e[n]=Promise.all(l.map((s=>o[s]||a(s)))).then((s=>(r(...s),u)))}}define(["./workbox-c1760cce"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"404.html",revision:"d95150021d370aba800d3beb3b8e944a"},{url:"assets/AboutUsView.1cb47190.js",revision:null},{url:"assets/Article.749d81fd.css",revision:null},{url:"assets/Article.c32ef856.js",revision:null},{url:"assets/AutoFlipChessboardView.2f62faf5.js",revision:null},{url:"assets/BingoBoardView.612ac9d6.js",revision:null},{url:"assets/BingoBoardView.876d6740.css",revision:null},{url:"assets/BingoMasterView.892859fa.js",revision:null},{url:"assets/BingoMasterView.e5f59fc3.css",revision:null},{url:"assets/BlogArticleListView.826829db.js",revision:null},{url:"assets/CalculatingWeekdays.352c4758.js",revision:null},{url:"assets/ChessVersusAI.73c04d05.js",revision:null},{url:"assets/ChessVersusBadAIView.c4f82b93.js",revision:null},{url:"assets/ChessVersusCaptureAIView.4cb13ae7.js",revision:null},{url:"assets/ChessVersusNoCaptureAIView.e1e7ccad.js",revision:null},{url:"assets/ChessVersusRandomView.b44b239c.js",revision:null},{url:"assets/ChessVersusStockfish.1f1b1ed9.js",revision:null},{url:"assets/ColorRemoverView.dcbacb2b.js",revision:null},{url:"assets/ConnectFourView.2671e416.js",revision:null},{url:"assets/ConnectFourView.c3d6cf17.css",revision:null},{url:"assets/cookie.648245ab.js",revision:null},{url:"assets/DivisibilityRules.e7574252.js",revision:null},{url:"assets/Does0Equal1.086cf91b.js",revision:null},{url:"assets/EnglishIsWeirdView.360cc8ee.css",revision:null},{url:"assets/EnglishIsWeirdView.840fb1cb.js",revision:null},{url:"assets/FakeGradient2View.175819f5.js",revision:null},{url:"assets/FakeGradientView.2f9fddbb.js",revision:null},{url:"assets/Forcing1089.ba854752.js",revision:null},{url:"assets/FractalPresetsView.7b790c7f.js",revision:null},{url:"assets/FractalView.ddaf0215.js",revision:null},{url:"assets/FrameOverlayView.0e91aabc.css",revision:null},{url:"assets/FrameOverlayView.53658ebc.js",revision:null},{url:"assets/FullscreenCanvas.4b1eb08a.js",revision:null},{url:"assets/FullscreenDisplay.1bf3dc84.js",revision:null},{url:"assets/FullscreenDisplay.2736bd36.css",revision:null},{url:"assets/GithubCopilotIsAmazingView.38d3b8d1.js",revision:null},{url:"assets/IllegalVersusStockfish.c10b880c.js",revision:null},{url:"assets/index.26979f72.css",revision:null},{url:"assets/index.330a5295.js",revision:null},{url:"assets/InfinityIsMinusOneTwelfth.ee0d185f.js",revision:null},{url:"assets/LegalMoveChessboard.5236be52.css",revision:null},{url:"assets/LegalMoveChessboard.d7118dc2.js",revision:null},{url:"assets/MathemagicalTricks.978435ed.js",revision:null},{url:"assets/MetaballView.6c51c40c.js",revision:null},{url:"assets/MultDivQuizView.a5b0f194.js",revision:null},{url:"assets/NotFoundView.a8e9adfa.js",revision:null},{url:"assets/OvercolorView.7fa55575.js",revision:null},{url:"assets/Quiz.19fbb481.css",revision:null},{url:"assets/Quiz.af0028a5.js",revision:null},{url:"assets/RainbowNoiseView.b400d0be.js",revision:null},{url:"assets/SquareQuizView.fa48a2c0.js",revision:null},{url:"assets/StandardChessboardView.95814fb7.js",revision:null},{url:"assets/stockfish.77ed8172.js",revision:null},{url:"assets/stockfish.d5755b2d.js",revision:null},{url:"assets/storymatic.5ff33a93.js",revision:null},{url:"assets/storymatic.ef4fb9e9.css",revision:null},{url:"assets/StorymaticEditorView.51a874c4.js",revision:null},{url:"assets/StorymaticEditorView.f6181850.css",revision:null},{url:"assets/StorymaticJavaScriptView.93b04b4d.css",revision:null},{url:"assets/StorymaticJavaScriptView.b3552c33.js",revision:null},{url:"assets/TicTacToeView.3cb8349f.css",revision:null},{url:"assets/TicTacToeView.94115623.js",revision:null},{url:"assets/TropeHighlighterView.0b57f035.css",revision:null},{url:"assets/TropeHighlighterView.e53fdf67.js",revision:null},{url:"assets/VideoCallView.3e7a6383.css",revision:null},{url:"assets/VideoCallView.4640e109.js",revision:null},{url:"assets/WebGL2Canvas.3d40e853.css",revision:null},{url:"assets/WebGL2Canvas.7197faaa.js",revision:null},{url:"assets/WhatMakesZSnoutDifferentView.ef8b308a.js",revision:null},{url:"index.html",revision:"517e1f52871e5b84596950d8513ec8a4"},{url:"/android-chrome-192x192.png",revision:"11551364281888565"},{url:"/android-chrome-512x512.png",revision:"11551364281888565"},{url:"/apple-touch-icon.png",revision:"11551364281888565"},{url:"/browserconfig.xml",revision:"11551364281888565"},{url:"/CNAME",revision:"11551364281888565"},{url:"/favicon-16x16.png",revision:"11551364281888565"},{url:"/favicon-32x32.png",revision:"11551364281888565"},{url:"/favicon.ico",revision:"11551364281888565"},{url:"/manifest.json",revision:"11551364281888565"},{url:"/mstile-150x150.png",revision:"11551364281888565"},{url:"/pwa-192x192.png",revision:"11551364281888565"},{url:"/pwa-512x512.png",revision:"11551364281888565"},{url:"/robots.txt",revision:"11551364281888565"},{url:"/safari-pinned-tab.svg",revision:"11551364281888565"},{url:"/zsnout.icns",revision:"11551364281888565"},{url:"manifest.webmanifest",revision:"162b6f9e02f9aed051cf6a04f955c3d1"},{url:"manifest.webmanifest",revision:"162b6f9e02f9aed051cf6a04f955c3d1"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("/index.html")))}));
