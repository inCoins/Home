(function(e){function t(t){for(var o,r,u=t[0],s=t[1],c=t[2],l=0,p=[];l<u.length;l++)r=u[l],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&p.push(a[r][0]),a[r]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);m&&m(t);while(p.length)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,r=1;r<n.length;r++){var u=n[r];0!==a[u]&&(o=!1)}o&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},r={app:0},a={app:0},i=[];function u(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-8d3f6e48":"14766caa"}[e]+".js"}function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-8d3f6e48":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({}[e]||e)+"."+{"chunk-8d3f6e48":"01ff4fb7"}[e]+".css",a=s.p+o,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var c=i[u],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===o||l===a))return t()}var p=document.getElementsByTagName("style");for(u=0;u<p.length;u++){c=p[u],l=c.getAttribute("data-href");if(l===o||l===a)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var o=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete r[e],m.parentNode.removeChild(m),n(i)},m.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(m)})).then((function(){r[e]=0})));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var i=new Promise((function(t,n){o=a[e]=[t,n]}));t.push(o[2]=i);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=u(e);var p=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(m);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",p.name="ChunkLoadError",p.type=o,p.request=r,n[1](p)}a[e]=void 0}};var m=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/Home/p/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var p=0;p<c.length;p++)t(c[p]);var m=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("9085")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("b0c0");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],i={name:"App"},u=i,s=(n("034f"),n("2877")),c=Object(s["a"])(u,r,a,!1,null,null,null),l=c.exports,p=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f"));o["default"].use(p["a"]);var m=[{path:"/",redirect:"/Home"},{path:"/Home",name:"Home",component:function(){return n.e("chunk-8d3f6e48").then(n.bind(null,"bb51"))}}],d=new p["a"]({routes:m,scrollBehavior:function(e,t,n){return console.log(e,t,n),n||{x:0,y:0}}}),f=d,g=n("a925"),h={message:{Language:"Languages",Novice:"Novice strategy",Community:"Community conventions",Real:" Real time overview",Whitepaper:"White paper",Join:"Join now",Coming:"Coming Soon",Fortime:"For a Greener Future, one Hop at a time!",Building:"Building awareness for sustainability and climate-change with HOPPY. Join us to build an enthusiastic community in giving back to the environment.",Buyon:"Buy on PancakeSwap",Exclusively:"Exclusively on Binance Smart Chain","Meme-centric":"Meme-centric",Ridingon:"Riding on the current demand for meme cryptocurrencies, Hoppy aims to further spread the importance of Green Energy for the future of blockchains.",Given:"Give HOPPY a Green Home",Games:"Games designed to promote adoption of sustainable lifestyles and awareness while having fun!",HOPPYJumpStart:"HOPPY JumpStart",Providing:"Providing assistance and fundraising support to university students or start-ups with Green initiatives.",GivesBack:"HOPPY Gives Back",Donation:"Donation to charitable organization or foundations dedicated to protecting and supporting the environment.",Tokenomics:"Tokenomics",Each:"Each HOP transactions will incur a 8% tax rate, which goes towards:",Donations:"Donations",Donated:"2% is donated to charities that support the environment.",Liquidity:"Liquidity",Would:"3% would be used to add to the Liquidity Pool.",Holders:"Holders",Redistributed:"3% is redistributed to all HOPPY holders.",Total:"Total Supply: 100,000,000,000,000 HOPs.",Roadmap:"Roadmap",Ourteam:"Our team is committed to build the strong Hoppy community and we have a team of developers working on the following.",Hoppymeme:"Hoppy meme contest on social media platforms",Followers:"5k Hoppy followers in Twitter and Telegram",Website:"Website launch",Audit:"Audit contract",Gamification:"Gamification storyline",Secure:"Secure charity partnership",Charity:"Charity donation",Hoppyfollowers:"10k Hoppy followers in Twitter and Telegram",Gamifications:"Gamification beta version",Launch:"Launch gamification",Collaborate:"Collaborate with university students or start-ups on green initiatives",Securegreen:"Secure green companies partnership",Create:"Create advertisement space to green companies",News:"In the news",Partners:"Partners",Ifyou:"If you have any queries please feel free to join our community chat. Our movement is only just getting started, we look forward to your support.",BUYHOPPY:"BUY HOPPY, SAVE THE WORLD!"}},y=h,v={message:{Language:"选择语言",Novice:"新手攻略",Community:"社区公约",Real:"实时概况",Whitepaper:"白皮书",Join:"立即加入",Coming:"即将到来",Fortime:"为了更绿色的未来，一次一跳！",Building:"通过 HOPPY 建立对可持续性和气候变化的认识。 加入我们，建立一个回馈环境的热情社区。",Buyon:"用煎饼换购",Exclusively:"仅在Binance智能链","Meme-centric":"以模因为中心",Ridingon:"借助当前对 meme 加密货币的需求，Hoppy 旨在进一步传播绿色能源对区块链未来的重要性。",Given:"给HOPPY一个绿色的家",Games:"旨在在玩乐的同时促进采用可持续生活方式和意识的游戏！",HOPPYJumpStart:"HOPPY 快速启动",Providing:"为大学生或初创企业提供绿色倡议的援助和筹款支持。",GivesBack:"HOPPY 回馈",Donation:"捐赠给致力于保护和支持环境的慈善组织或基金会。",Tokenomics:"代币经济学",Each:"每个 HOP 交易将产生 8% 的税率，用于：",Donations:"捐款",Donated:"2% 捐赠给支持环境的慈善机构",Liquidity:"流动性",Would:"3% 将用于添加到流动性池中",Holders:"持有人",Redistributed:"3% 重新分配给所有 HOPPY 持有者",Total:"总供应量：100,000,000,000,000 HOPs",Roadmap:"线路图",Ourteam:"我们的团队致力于建立强大的 Hoppy 社区，我们有一个开发人员团队致力于以下工作",Hoppymeme:"社交媒体平台上的 Hoppy meme 竞赛",Followers:"5k Hoppy粉丝在Twitter和Telegram ",Website:"网站发布",Audit:"审计合同",Gamification:"游戏化故事情节",Secure:"宽厚的伙伴关系",Charity:"慈善捐赠",Hoppyfollowers:"10k Hoppy粉丝在Twitter和Telegram ",Gamifications:"游戏化测试版",Launch:"启动游戏化",Collaborate:"与大学生或初创企业合作开展绿色倡议",Securegreen:"安全的绿色公司伙伴关系",Create:"为绿色企业创造广告空间",News:"新闻报道",Partners:"合作伙伴",Ifyou:"如果您有任何疑问，请随时加入我们的社区聊天。 我们的行动才刚刚开始，我们期待您的支持。",BUYHOPPY:"购买 HOPPY，拯救世界"}},P=v,H={message:{Language:"언어 선택",Novice:"초보 공략",Community:"지역 사회 공약",Real:"실시 간 개황",Whitepaper:"백서",Join:"즉시 가입",Coming:"얼마 남지 않았습니다",Fortime:"녹색 미래를 위해 한 번에 한 홉씩!",Building:"HOPPY를 통해 지속가능성과 기후 변화에 대한 인지도 구축. 환경에 대한 환원을 위한 열정적인 커뮤니티 구축에 동참하십시오.",Buyon:"팬케이크 스왑으로 구입",Exclusively:"바이낸스 스마트 체인 전용","Meme-centric":"메모리 중심",Ridingon:"현재 메모리 암호화폐에 대한 수요를 발판으로 블록체인의 미래를 위한 그린에너지의 중요성을 더욱 확산시키겠다는 것이다.",Given:"HOPPY에게 친환경적인 가정 제공",Games:"즐거운 시간을 보내면서 지속 가능한 라이프스타일과 인식의 도입을 촉진하기 위한 게임!",HOPPYJumpStart:"HOPPY 점프 시동",Providing:"그린 이니셔티브를 통해 대학생 또는 신생 기업에 대한 지원 및 기금 모금",GivesBack:"HOPPY 기브스",Donation:"환경 보호 및 지원에 헌신하는 자선 단체 또는 재단에 기부",Tokenomics:"토큰노믹스",Each:"각 HOP 거래에는 8%의 세율이 부과되며, 세율은 다음과 같습니다.",Donations:"기부",Donated:"2%는 환경을 지원하는 자선단체에 기부하고 있습니다.",Liquidity:"유동성",Would:"3%는 유동성 풀에 추가되는 데 사용됩니다.",Holders:"홀더",Redistributed:"3%는 모든 HOPPY 소유자에게 재배포됩니다.",Total:"총 공급량: 100,000,000,000 HOPs.",Roadmap:"로드맵",Ourteam:"저희 팀은 강력한 Hoppy 커뮤니티를 구축하기 위해 최선을 다하고 있으며 다음과 같은 작업을 수행하는 개발자 팀이 있습니다.",Hoppymeme:"소셜 미디어 플랫폼의 Hoppy Meme 공모전",Followers:"Twitter 및 Telegram의 5k Hoppy 팔로워",Website:"웹사이트 론칭",Audit:"감사계약서",Gamification:"게임화 줄거리",Secure:"자선 파트너십 확보",Charity:"자선 기부",Hoppyfollowers:"Twitter 및 Telegram의 10k Hoppy 팔로워",Gamifications:"게임화 베타 버전",Launch:"게임화 시작",Collaborate:"친환경 이니셔티브에 대해 대학생 또는 신생 기업과 협업",Securegreen:"안전한 친환경 기업 파트너십",Create:"녹색기업에 대한 광고 공간 조성",News:"뉴스에서",Partners:"파트너",Ifyou:"궁금한 점이 있으시면 언제든지 커뮤니티 채팅에 참여하십시오. 이제 막 시작한 단계이므로 많은 지원을 부탁드립니다.",BUYHOPPY:"Hoppy를 구입하고 세상을 구하십시오."}},w=H,b={en:y,cn:P,ko:w};o["default"].use(g["a"]);var O=new g["a"]({locale:localStorage.lang||"cn",messages:b}),k=O,C=n("bc1b"),S=n.n(C),T=(n("c98c"),n("0fae"),n("5c96"));o["default"].config.productionTip=!1,o["default"].component(T["Button"].name,T["Button"]),o["default"].component(T["Menu"].name,T["Menu"]),o["default"].component(T["Submenu"].name,T["Submenu"]),o["default"].component(T["MenuItem"].name,T["MenuItem"]),o["default"].component(T["Carousel"].name,T["Carousel"]),o["default"].component(T["CarouselItem"].name,T["CarouselItem"]),o["default"].component(T["MessageBox"].name,T["MessageBox"]),o["default"].component(T["Message"].name,T["Message"]),o["default"].prototype.$wow=S.a,o["default"].prototype.$confirm=T["MessageBox"].confirm,o["default"].prototype.$msg=T["Message"],new o["default"]({router:f,i18n:k,render:function(e){return e(l)}}).$mount("#app")},9085:function(e,t,n){},c98c:function(e,t,n){}});
//# sourceMappingURL=app.bbf99ccc.js.map