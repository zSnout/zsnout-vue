if(!self.define){let s,e={};const i=(i,l)=>(i=new URL(i+".js",l).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(l,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let u={};const a=s=>i(s,n),o={module:{uri:n},exports:u,require:a};e[n]=Promise.all(l.map((s=>o[s]||a(s)))).then((s=>(r(...s),u)))}}define(["./workbox-c1760cce"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"404.html",revision:"d95150021d370aba800d3beb3b8e944a"},{url:"assets/AboutUsView.4a0159a2.js",revision:null},{url:"assets/Article.3fca13c2.js",revision:null},{url:"assets/Article.bfb90365.css",revision:null},{url:"assets/AutoFlipChessboardView.9eef3c79.js",revision:null},{url:"assets/BingoBoardView.2f97d04a.js",revision:null},{url:"assets/BingoBoardView.876d6740.css",revision:null},{url:"assets/BingoMasterView.6b733422.js",revision:null},{url:"assets/BingoMasterView.e5f59fc3.css",revision:null},{url:"assets/BlogArticleListView.96671862.js",revision:null},{url:"assets/CalculatingWeekdays.db5c4a2a.js",revision:null},{url:"assets/ChessVersusAI.eace77f8.js",revision:null},{url:"assets/ChessVersusBadAIView.28e090d8.js",revision:null},{url:"assets/ChessVersusCaptureAIView.f88cb78b.js",revision:null},{url:"assets/ChessVersusNoCaptureAIView.a90263ae.js",revision:null},{url:"assets/ChessVersusRandomView.8cc96184.js",revision:null},{url:"assets/ChessVersusStockfish.b66ca46a.js",revision:null},{url:"assets/ColorRemoverView.ade224a1.js",revision:null},{url:"assets/ConnectFourView.3733c721.js",revision:null},{url:"assets/ConnectFourView.c3d6cf17.css",revision:null},{url:"assets/cookie.648245ab.js",revision:null},{url:"assets/DivisibilityRules.04b42fcf.js",revision:null},{url:"assets/Does0Equal1.ac365531.js",revision:null},{url:"assets/EnglishIsWeirdView.360cc8ee.css",revision:null},{url:"assets/EnglishIsWeirdView.3ad7e1ba.js",revision:null},{url:"assets/FakeGradient2View.310ea586.js",revision:null},{url:"assets/FakeGradientView.df618853.js",revision:null},{url:"assets/Forcing1089.7a01026d.js",revision:null},{url:"assets/FractalPresetsView.a3e2a579.js",revision:null},{url:"assets/FractalView.08758e8b.js",revision:null},{url:"assets/FrameOverlayView.0e91aabc.css",revision:null},{url:"assets/FrameOverlayView.b3c689df.js",revision:null},{url:"assets/FullscreenCanvas.70fbe97d.js",revision:null},{url:"assets/FullscreenDisplay.2736bd36.css",revision:null},{url:"assets/FullscreenDisplay.95f0cee6.js",revision:null},{url:"assets/GithubCopilotIsAmazingView.299ed1cd.js",revision:null},{url:"assets/IllegalVersusStockfish.ad7e5638.js",revision:null},{url:"assets/index.a94b4896.css",revision:null},{url:"assets/index.de38f0fa.js",revision:null},{url:"assets/InfinityIsMinusOneTwelfth.7c1c3f0c.js",revision:null},{url:"assets/LegalMoveChessboard.5236be52.css",revision:null},{url:"assets/LegalMoveChessboard.d4bc576a.js",revision:null},{url:"assets/MathemagicalTricks.217e33f9.js",revision:null},{url:"assets/MetaballView.bc5fe0d2.js",revision:null},{url:"assets/MultDivQuizView.cac66517.js",revision:null},{url:"assets/NotFoundView.f73a9073.js",revision:null},{url:"assets/OvercolorView.261dd16f.js",revision:null},{url:"assets/Quiz.04eb5d1e.js",revision:null},{url:"assets/Quiz.19fbb481.css",revision:null},{url:"assets/RainbowNoiseView.60bc5d9f.js",revision:null},{url:"assets/SameNumberGenerator.194a11f5.css",revision:null},{url:"assets/SameNumberGenerator.4a6869d0.js",revision:null},{url:"assets/SquareQuizView.edf1ae84.js",revision:null},{url:"assets/StandardChessboardView.0873f0e4.js",revision:null},{url:"assets/stockfish.77ed8172.js",revision:null},{url:"assets/stockfish.d5755b2d.js",revision:null},{url:"assets/storymatic.a0141252.js",revision:null},{url:"assets/storymatic.ef4fb9e9.css",revision:null},{url:"assets/StorymaticEditorView.da1dd410.js",revision:null},{url:"assets/StorymaticEditorView.f6181850.css",revision:null},{url:"assets/StorymaticJavaScriptView.6980d164.js",revision:null},{url:"assets/StorymaticJavaScriptView.93b04b4d.css",revision:null},{url:"assets/TicTacToeView.3cb8349f.css",revision:null},{url:"assets/TicTacToeView.613d5196.js",revision:null},{url:"assets/TropeHighlighterView.0b57f035.css",revision:null},{url:"assets/TropeHighlighterView.983e6708.js",revision:null},{url:"assets/VideoCallView.3e7a6383.css",revision:null},{url:"assets/VideoCallView.9e1f3f11.js",revision:null},{url:"assets/WebGL2Canvas.3d40e853.css",revision:null},{url:"assets/WebGL2Canvas.f483dda5.js",revision:null},{url:"assets/WhatMakesZSnoutDifferentView.9c94d18b.js",revision:null},{url:"index.html",revision:"e85a620b500c39bb92c91ad5c4c93876"},{url:"/android-chrome-192x192.png",revision:"5764356374717909"},{url:"/android-chrome-512x512.png",revision:"5764356374717909"},{url:"/apple-touch-icon.png",revision:"5764356374717909"},{url:"/browserconfig.xml",revision:"5764356374717909"},{url:"/CNAME",revision:"5764356374717909"},{url:"/favicon-16x16.png",revision:"5764356374717909"},{url:"/favicon-32x32.png",revision:"5764356374717909"},{url:"/favicon.ico",revision:"5764356374717909"},{url:"/manifest.json",revision:"5764356374717909"},{url:"/mstile-150x150.png",revision:"5764356374717909"},{url:"/pwa-192x192.png",revision:"5764356374717909"},{url:"/pwa-512x512.png",revision:"5764356374717909"},{url:"/robots.txt",revision:"5764356374717909"},{url:"/safari-pinned-tab.svg",revision:"5764356374717909"},{url:"/zsnout.icns",revision:"5764356374717909"},{url:"manifest.webmanifest",revision:"162b6f9e02f9aed051cf6a04f955c3d1"},{url:"manifest.webmanifest",revision:"162b6f9e02f9aed051cf6a04f955c3d1"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("/index.html")))}));
