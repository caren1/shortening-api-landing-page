(this["webpackJsonpshortening-api-landing-page"]=this["webpackJsonpshortening-api-landing-page"]||[]).push([[0],{10:function(e,t,a){e.exports={statistics:"Statistics_statistics__1sPRo",statistics__hr:"Statistics_statistics__hr__WQF2m",statistics__cards:"Statistics_statistics__cards__3ITgL"}},11:function(e,t,a){e.exports={introduction:"Introduction_introduction__3ETt6",buttonPrimary:"Introduction_buttonPrimary__3gWEt"}},12:function(e,t,a){e.exports={shortener:"Shortener_shortener__3Yu42",buttonPrimary:"Shortener_buttonPrimary__3LmGB"}},13:function(e,t,a){e.exports={statCard:"StatCard_statCard__16Eo5",icon:"StatCard_icon__slroE"}},15:function(e,t,a){e.exports={callToAction:"CallToAction_callToAction__3Xehz",buttonPrimary:"CallToAction_buttonPrimary__1BnUI"}},2:function(e,t,a){e.exports={header:"Header_header__G4Dv5",header__left:"Header_header__left__3SaY5",header__right:"Header_header__right__1d1Q2",link:"Header_link__2YjgO",buttonPrimary:"Header_buttonPrimary__3xlTo",headerMobile:"Header_headerMobile__2oB6h",headerMobileOverlay:"Header_headerMobileOverlay__16iuD",makeVisible:"Header_makeVisible__2sbzc",mobileLink:"Header_mobileLink__2MwV4",mobileLinkButtonPrimary:"Header_mobileLinkButtonPrimary__1VlPv",mobileHr:"Header_mobileHr__2yzvP"}},30:function(e,t,a){e.exports={links:"Links_links__OMZtv"}},31:function(e,t,a){e.exports=a(59)},36:function(e,t,a){},4:function(e,t,a){e.exports={footer:"Footer_footer__3r_NV",center:"Footer_center__1QVFK",right:"Footer_right__zgiDe",icon:"Footer_icon__1Y7SM"}},59:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(26),l=a.n(i),o=(a(36),a(5)),c=a(16),s=a(28),m=a.n(s),u=a(2),h=a.n(u),d=function(){var e=Object(r.useState)(!1),t=Object(o.a)(e,2),a=t[0],i=t[1];return window.matchMedia("(min-width: 700px)").addEventListener("change",(function(e){e.matches&&i(!1)})),n.a.createElement(n.a.Fragment,null,n.a.createElement(c.a,{query:"(min-width:700px)",render:function(){return n.a.createElement("div",{className:h.a.header},n.a.createElement("img",{src:"./images/logo.svg",alt:"shortly-logo"}),n.a.createElement("div",{className:h.a.header__left},n.a.createElement("a",{className:h.a.link,href:"http://",target:"_blank",rel:"noopener noreferrer"},"Features"),n.a.createElement("a",{className:h.a.link,href:"http://",target:"_blank",rel:"noopener noreferrer"},"Pricing"),n.a.createElement("a",{className:h.a.link,href:"http://",target:"_blank",rel:"noopener noreferrer"},"Resources")),n.a.createElement("div",{className:h.a.header__right},n.a.createElement("a",{className:h.a.link,href:"http://",target:"_blank",rel:"noopener noreferrer"},"Login"),n.a.createElement("a",{className:h.a.buttonPrimary,href:"http://",target:"_blank",rel:"noopener noreferrer"},"Sign Up")))}}),n.a.createElement(c.a,{query:"(max-width:700px)",render:function(){return n.a.createElement("div",{className:h.a.headerMobile},n.a.createElement("img",{src:"./images/logo.svg",alt:"shortly-logo"}),n.a.createElement(m.a,{className:"hamburger",isOpen:a,menuClicked:function(){i(!a)},width:25,height:20,strokeWidth:2,rotate:0,color:"hsl(257, 7%, 63%)",borderRadius:0,animationDuration:.5}),a?n.a.createElement("div",{className:h.a.headerMobileOverlay},n.a.createElement("a",{className:h.a.mobileLink,href:"http://",target:"_blank",rel:"noopener noreferrer"},"Features"),n.a.createElement("a",{className:h.a.mobileLink,href:"http://",target:"_blank",rel:"noopener noreferrer"},"Pricing"),n.a.createElement("a",{className:h.a.mobileLink,href:"http://",target:"_blank",rel:"noopener noreferrer"},"Resources"),n.a.createElement("hr",{className:h.a.mobileHr}),n.a.createElement("a",{className:h.a.mobileLink,href:"http://",target:"_blank",rel:"noopener noreferrer"},"Login"),n.a.createElement("a",{className:h.a.mobileLinkButtonPrimary,href:"http://",target:"_blank",rel:"noopener noreferrer"},"Sign Up")):null)}}))},_=a(11),g=a.n(_),p=function(){return n.a.createElement("div",{className:g.a.introduction},n.a.createElement("h1",null,"More than just shorter links"),n.a.createElement("h2",null,"Build your brand's recognition and get detailed insights on how your links are performing"),n.a.createElement("a",{className:g.a.buttonPrimary,href:"http://",target:"_blank",rel:"noopener noreferrer"},"Get Started"),n.a.createElement("img",{src:"./images/illustration-working.svg",alt:"illustration-working"}))},f=a(12),b=a.n(f),k=function(e){var t=e.handleShortenIt,a=e.handleInputChange,r=e.userUrl;return n.a.createElement("div",{className:b.a.shortener},n.a.createElement("form",{onSubmit:t},n.a.createElement("input",{value:r,onChange:a,type:"url",placeholder:"Shorten a link here...",required:!0}),n.a.createElement("button",{className:b.a.buttonPrimary,type:"submit"},"Shorten It!")))},E=a(6),v=a.n(E),y=a(7),N=a(13),L=a.n(N),S=function(e){var t=e.icon,a=e.title,r=e.subtitle;return n.a.createElement("div",{className:L.a.statCard},n.a.createElement("div",{className:L.a.icon},n.a.createElement("img",{src:t,alt:"card-icon"})),n.a.createElement("h2",null,a),n.a.createElement("p",null,r))},w=a(9),P=a.n(w),x=a(29),O=a.n(x),C=function(e){var t=e.sourceLink,a=e.shortLink,i=Object(r.useState)(!1),l=Object(o.a)(i,2),c=l[0],s=l[1];return n.a.createElement("div",{className:P.a.shortenedLink},n.a.createElement("p",null,t),n.a.createElement("hr",{className:P.a.shortenedLink__hr}),n.a.createElement("a",{className:P.a.shortLink,href:"http://"},a),n.a.createElement("button",{className:P.a.buttonPrimary,href:"http://",target:"_blank",rel:"noopener noreferrer",onClick:function(){return e=a,O()(e),void setTimeout((function(){s(!0),setTimeout((function(){s(!1)}),5e3)}),100);var e}},c?"Copied!":"Copy"))},j=a(10),B=a.n(j),H=a(14),M=a.n(H),T="https://rel.ink/api/links/",F=function(){var e=Object(y.a)(v.a.mark((function e(t){var a,r,n,i,l,o;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M.a.post(T,{url:t});case 3:return a=e.sent,r=a.data,n=r.hashid,i=r.url,l=r.created_at,o="".concat("https://rel.ink/").concat(n),e.abrupt("return",{inputUrl:t,hashid:n,url:i,created_at:l,targetLink:o});case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(r.useState)([]),t=Object(o.a)(e,2),a=t[0],i=t[1],l=Object(r.useState)(""),c=Object(o.a)(l,2),s=c[0],m=c[1],u=Object(r.useState)(!1),h=Object(o.a)(u,2),d=h[0],_=h[1],g=function(){var e=Object(y.a)(v.a.mark((function e(t){var r,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),_(!0),e.next=4,F(s);case 4:r=e.sent,m(""),setTimeout((function(){_(!1)}),100),r&&(_(!1),n=a.concat(r),i(n));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return n.a.createElement("div",{className:B.a.statistics},n.a.createElement(k,{handleShortenIt:g,handleInputChange:function(e){m(e.target.value)},userUrl:s,isLoading:d}),d?n.a.createElement("img",{src:"https://mir-s3-cdn-cf.behance.net/project_modules/disp/dae67631234507.564a1d230a290.gif"}):null,a.map((function(e){return n.a.createElement(C,{key:e.hashid,sourceLink:e.inputUrl,shortLink:e.targetLink})})),n.a.createElement("h1",null,"Advanced Statistics"),n.a.createElement("h2",null,"Track how your links are performing across the web with our advanced statistics dashboard"),n.a.createElement("div",{className:B.a.statistics__cards},n.a.createElement(S,{icon:"./images/icon-brand-recognition.svg",title:"Brand recognition",subtitle:"Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content"}),n.a.createElement(S,{icon:"./images/icon-detailed-records.svg",title:"Detailed Records",subtitle:"Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."}),n.a.createElement(S,{icon:"./images/icon-fully-customizable.svg",title:"Fully customizable",subtitle:"Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."})),n.a.createElement("hr",{className:B.a.statistics__hr}))},A=a(15),z=a.n(A),U=function(){return n.a.createElement("div",{className:z.a.callToAction},n.a.createElement("h1",null,"Boost your links today"),n.a.createElement("a",{className:z.a.buttonPrimary,href:"http://",target:"_blank",rel:"noopener noreferrer"},"Get Started"))},D=a(30),G=a.n(D),R=function(e){var t=e.title,a=e.links;return n.a.createElement("div",{className:G.a.links},n.a.createElement("h2",null,t),n.a.createElement("ul",null,a.map((function(e){return n.a.createElement("li",{key:e},n.a.createElement("a",{href:"http://",target:"_blank",rel:"noopener noreferrer"},e))}))))},V=a(4),Q=a.n(V),Y=function(){return n.a.createElement("div",{className:Q.a.footer},n.a.createElement("div",{className:Q.a.left},n.a.createElement("img",{className:Q.a.left__logo,src:"./images/logo.svg",alt:"footer-logo"})),n.a.createElement("div",{className:Q.a.center},n.a.createElement(R,{title:"Features",links:["Link Shortening","Branded Links","Analytics"]}),n.a.createElement(R,{title:"Resources",links:["Blog","Developers","Support"]}),n.a.createElement(R,{title:"Company",links:["About","Our Team","Careers","Contact"]})),n.a.createElement("div",{className:Q.a.right},n.a.createElement("img",{className:Q.a.icon,src:"./images/icon-facebook.svg",alt:""}),n.a.createElement("img",{className:Q.a.icon,src:"./images/icon-twitter.svg",alt:""}),n.a.createElement("img",{className:Q.a.icon,src:"./images/icon-pinterest.svg",alt:""}),n.a.createElement("img",{className:Q.a.icon,src:"./images/icon-instagram.svg",alt:""})))};var q=function(){return n.a.createElement("div",{className:"app"},n.a.createElement(d,null),n.a.createElement(p,null),n.a.createElement(I,null),n.a.createElement(U,null),n.a.createElement(Y,null))};l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(q,null)),document.getElementById("root"))},9:function(e,t,a){e.exports={shortenedLink:"ShortenedLink_shortenedLink__3KGQ8",shortLink:"ShortenedLink_shortLink__3rE2d",buttonPrimary:"ShortenedLink_buttonPrimary__1Uu7J",shortenedLink__hr:"ShortenedLink_shortenedLink__hr__1AzFM"}}},[[31,1,2]]]);
//# sourceMappingURL=main.dcf5af1d.chunk.js.map