(this["webpackJsonpmovies-app"]=this["webpackJsonpmovies-app"]||[]).push([[0],{20:function(e,t,c){e.exports={FirstMain:"firstMain_FirstMain__1XpGp",h1:"firstMain_h1__xeV5W",h3:"firstMain_h3__72eoU",Button:"firstMain_Button__pgAEO"}},45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){},67:function(e,t,c){},90:function(e,t,c){},92:function(e,t,c){},93:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),s=c(16),r=c.n(s),i=(c(45),c(31)),o=c(32),l=c(40),j=c(39),u=(c(46),function(e){return e.children}),h=c(5),d=c(100),b=(c(47),c(48),"ebe0a7b19063d864de232de72766c4ee"),m={fetchPopular:"/movie/popular?api_key=".concat(b,"&language=en-US"),fetchComedies:"/discover/movie?api_key=".concat(b,"&with_genres=28"),fetchUpcoming:"/movie/upcoming?api_key=".concat(b,"&language=en-US"),fetchFamilies:"/discover/movie?api_key=".concat(b,"&with_genres=10751"),fetchTopRated:"/movie/top_rated?api_key=".concat(b,"&language=en-US"),fetchOriginals:"/discover/tv?api_key=".concat(b,"&with_networks=213"),fetchDramas:"/discover/movie?api_key=".concat(b,"&with_genres=18"),fetchThrillers:"/discover/movie?api_key=".concat(b,"&with_genres=53"),fetchHorrors:"/discover/movie?api_key=".concat(b,"&with_genres=27"),fetchGenres:"/genre/movie/list?api_key=".concat(b,"&language=en-US"),fetchSearch:"/search/movie?api_key=".concat(b,"&query=")},f=c(9),O=c.n(f),p=c(10),v=c(33),g=c.n(v).a.create({baseURL:"https://api.themoviedb.org/3"}),x=(c(67),c.p+"static/media/firee.8862b618.png"),y=c(11),w=c(12),k=c.n(w);function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a])}return e}).apply(this,arguments)}function _(e,t){if(null==e)return{};var c,a,n=function(e,t){if(null==e)return{};var c,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)c=s[a],t.indexOf(c)>=0||(n[c]=e[c]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)c=s[a],t.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(e,c)&&(n[c]=e[c])}return n}var S=a.createElement("path",{d:"M0 220.8C0 266.416 37.765 304 83.2 304h35.647a93.148 93.148 0 0 0 7.929 22.064c-2.507 22.006 3.503 44.978 15.985 62.791C143.9 441.342 180.159 480 242.701 480H264c60.063 0 98.512-40 127.2-40h2.679c5.747 4.952 13.536 8 22.12 8h64c17.673 0 32-12.894 32-28.8V188.8c0-15.906-14.327-28.8-32-28.8h-64c-8.584 0-16.373 3.048-22.12 8H391.2c-6.964 0-14.862-6.193-30.183-23.668l-.129-.148-.131-.146c-8.856-9.937-18.116-20.841-25.851-33.253C316.202 80.537 304.514 32 259.2 32c-56.928 0-92 35.286-92 83.2 0 8.026.814 15.489 2.176 22.4H83.2C38.101 137.6 0 175.701 0 220.8zm48 0c0-18.7 16.775-35.2 35.2-35.2h158.4c0-17.325-26.4-35.2-26.4-70.4 0-26.4 20.625-35.2 44-35.2 8.794 0 20.445 32.712 34.926 56.1 9.074 14.575 19.524 27.225 30.799 39.875 16.109 18.374 33.836 36.633 59.075 39.596v176.752C341.21 396.087 309.491 432 264 432h-21.299c-40.524 0-57.124-22.197-50.601-61.325-14.612-8.001-24.151-33.979-12.925-53.625-19.365-18.225-17.787-46.381-4.95-61.05H83.2C64.225 256 48 239.775 48 220.8zM448 360c13.255 0 24 10.745 24 24s-10.745 24-24 24-24-10.745-24-24 10.745-24 24-24z"});function C(e,t){var c=e.title,n=e.titleId,s=_(e,["title","titleId"]);return a.createElement("svg",N({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",ref:t,"aria-labelledby":n},s),c?a.createElement("title",{id:n},c):null,S)}var U=a.forwardRef(C),M=(c.p,c(1));var R=function(e){var t=e.fetchUrl,c=e.fetchUrlMoviesTopRated,n=Object(a.useState)([]),s=Object(h.a)(n,2),r=s[0],i=s[1],o=Object(a.useState)([]),l=Object(h.a)(o,2),j=l[0],d=l[1],b=Object(a.useState)(!1),m=Object(h.a)(b,2),f=m[0],v=m[1],w=Object(a.useState)(""),N=Object(h.a)(w,2),_=N[0],S=N[1],C=Object(a.useState)(!1),R=Object(h.a)(C,2),T=R[0],P=R[1],E=Object(a.useState)([]),L=Object(h.a)(E,2),I=L[0],F=L[1],H=Object(a.useState)(""),B=Object(h.a)(H,2),z=B[0],D=B[1];return Object(a.useEffect)((function(){function e(){return(e=Object(p.a)(O.a.mark((function e(){var a,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.get(t);case 2:return a=e.sent,e.next=5,g.get(c);case 5:return n=e.sent,console.log("cat:",a.data.genres),console.log("popular movies",n.data.results),i(a.data.genres),d(n.data.results),e.abrupt("return",n);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t,c]),console.log("genres: ",r),Object(M.jsxs)(u,{children:[Object(M.jsxs)("div",{className:"container_hamburger",style:{display:f?"none":"block"},children:[Object(M.jsx)("img",{className:"logo",src:x}),Object(M.jsx)("h3",{children:"Categories"}),Object(M.jsx)("ul",{className:"ul-hamburger",children:r.map((function(e){return Object(M.jsx)("li",{className:"li-hamburger",children:Object(M.jsx)("a",{id:e.id,name:e.name,onClick:function(e){var t=e.target.id;D(e.target.name),console.log("movies by click",j);var c=j.filter((function(e){return e.genre_ids.includes(+t)}));console.log("filtered movies",c),F(c),v(!0)},children:e.name},e.id)})}))})]}),Object(M.jsxs)("div",{className:"body",style:{display:f?"flex":"none"},children:[Object(M.jsx)(U,{className:"point-left",onClick:function(){v(!1),P(!1),S(""),D(""),console.log("body closed")}}),Object(M.jsxs)("h1",{className:"menu-title",children:["Most Popular - ",z]}),Object(M.jsx)("div",{className:"filteredMovie",children:Object(M.jsx)("div",{className:"movie",children:I.map((function(e){return Object(M.jsx)("img",{className:"image",id:e.genre_ids,alt:e.title,src:"".concat("https://image.tmdb.org/t/p/w500").concat(e.poster_path),onClick:function(){!function(e){_?S(""):k()((null===e||void 0===e?void 0:e.title)||(null===e||void 0===e?void 0:e.name)||"").then((function(e){var t=new URLSearchParams(new URL(e).search);S(t.get("v"))})).catch((function(e){return console.log(e)}))}(e),v(!0)}},e.id)}))})}),_&&Object(M.jsx)(y.a,{videoId:_,opts:{playerVars:{autoplay:0}},className:"youtube-trailer-HAM",style:{display:T?"none":"block"}})]})]})};var T=function(){var e=Object(a.useState)(!1),t=Object(h.a)(e,2),c=t[0],n=t[1];return Object(M.jsxs)(u,{className:"root",children:[Object(M.jsx)("div",{className:"ham-menu",onClick:function(){n(!c)},children:Object(M.jsxs)("div",{clicked:!0,className:"Logo-ham",children:[Object(M.jsx)("div",{className:"ham"}),Object(M.jsx)("div",{className:"ham"}),Object(M.jsx)("div",{className:"ham"})]})}),Object(M.jsx)("div",{className:"hamburgerMenu",style:{transform:c?"translateX(0px)":"translateX(-500px)"},children:Object(M.jsx)(R,{fetchUrl:m.fetchGenres,fetchUrlMoviesTopRated:m.fetchPopular})}),Object(M.jsx)("div",{className:"body-next-HAM",style:{display:c?"block":"none"},onClick:function(){return n(!1)}})]})},P=c(97),E=c(98),L=c(99),I=(c(90),c.p+"static/media/search.ac0d491a.svg");var F=function(e){var t=e.fetchUrl,c=Object(a.useState)(!1),n=Object(h.a)(c,2),s=n[0],r=n[1],i=Object(a.useState)([]),o=Object(h.a)(i,2),l=(o[0],o[1],Object(a.useState)("")),j=Object(h.a)(l,2),d=j[0],b=j[1],m=Object(a.useState)([]),f=Object(h.a)(m,2),v=f[0],x=f[1],w=Object(a.useState)([]),N=Object(h.a)(w,2),_=N[0],S=N[1],C=Object(a.useState)(""),R=Object(h.a)(C,2),T=R[0],F=R[1],H=Object(a.useState)(!0),B=Object(h.a)(H,2),z=B[0],D=B[1];function V(){return(V=Object(p.a)(O.a.mark((function e(c){var a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),e.next=3,g.get(t+d);case 3:return a=e.sent,console.log("movie:",a.data.results),x(a.data.results),e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return console.log(_),Object(M.jsxs)(u,{children:[Object(M.jsx)("img",{className:"search",src:I,onClick:function(){r(!0)},style:{display:s?"none":"block"}}),Object(M.jsxs)(P.a,{fluid:!0,className:"search-menu ".concat(s&&"block"),children:[Object(M.jsx)(E.a,{children:Object(M.jsx)(L.a,{sm:12,className:"Colomn",children:Object(M.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[Object(M.jsx)(U,{className:"back-arrow",onClick:function(){x([]),b(""),r(!1),console.log("clicked")}}),Object(M.jsxs)("form",{id:"form",onSubmit:function(e){return V.apply(this,arguments)},children:[Object(M.jsx)("img",{className:"search-inside-menu",src:I}),Object(M.jsx)("input",{type:"text",name:"searchEl",id:"searchEl",placeholder:"Search",value:d,onChange:function(e){b(e.target.value),x([])}})]})]})})}),Object(M.jsx)("div",{className:"card-list",style:{transform:d?"translateY(0%)":"translateY(100vh)"},children:v&&v.length>0?v.filter((function(e){return e.poster_path})).map((function(e){return Object(M.jsx)(u,{className:"card-root",children:Object(M.jsx)("img",{className:"card-image",onClick:function(){!function(e){S([e.title,e.overview,e.vote_average,e.release_date])}(e),function(e){T?(F(""),D(!0)):k()((null===e||void 0===e?void 0:e.title)||e.name||"").then((function(e){var t=new URLSearchParams(new URL(e).search);F(t.get("v")),D(!1)})).catch((function(e){return console.log(e)}))}(e)},src:"https://image.tmdb.org/t/p/w500/"+e.poster_path,alt:e.title+" poster"},e.id)})})):null}),Object(M.jsxs)("div",{className:"movieTrailer-container",style:{display:z?"none":"block"},children:[T&&Object(M.jsx)(y.a,{videoId:T,opts:{playerVars:{autoplay:0}},className:"youtube-trailer"}),Object(M.jsxs)(E.a,{className:"movie-description",children:[Object(M.jsx)(L.a,{sm:4,children:Object(M.jsx)("h1",{children:_[0]})}),Object(M.jsx)(L.a,{sm:4,children:Object(M.jsx)("h3",{children:_[2]})}),Object(M.jsx)(L.a,{sm:4,children:Object(M.jsx)("h5",{children:_[3]})}),Object(M.jsx)(L.a,{sm:12,children:Object(M.jsx)("h2",{children:_[1]})})]})]})]}),Object(M.jsx)("div",{className:"body-to-close-movieTrailer",style:{display:s?"block":"none",zindex:s?2:1},onClick:function(){D(!0),console.log("clicked by fun to close Trailer")}})]})},H=function(){var e=Object(a.useState)(!1),t=Object(h.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){return window.addEventListener("scroll",(function(){window.scrollY>100?n(!0):n(!1)})),function(){window.removeEventListener("scroll","")}}),[]),Object(M.jsxs)("div",{className:"Nav ".concat(c&&"nav_black"),children:[Object(M.jsx)(T,{}),Object(M.jsx)(F,{fetchUrl:m.fetchSearch}),Object(M.jsxs)(d.a,{title:"Settings",id:"collasible-nav-dropdown",className:"dropdown",children:[Object(M.jsx)(d.a.Item,{href:"#action/3.1",children:"Any help?"}),Object(M.jsx)(d.a.Item,{href:"#action/3.2",children:"Contact us!"})]})]})},B=c(20),z=c.n(B),D=function(){var e=Object(a.useState)([]),t=Object(h.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){function e(){return(e=Object(p.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.get(m.fetchOriginals);case 2:return t=e.sent,console.log("fetchBanner:",t.data.results[Math.floor(Math.random()*t.data.results.length-1)]),n(t.data.results[Math.floor(Math.random()*t.data.results.length-1)]),e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),console.log(c),Object(M.jsx)(P.a,{className:z.a.FirstMain,style:{backgroundImage:'url("https://image.tmdb.org/t/p/original'.concat(null===c||void 0===c?void 0:c.backdrop_path,'")'),backgroundPosition:"center center no-repeat",backgroundSize:"cover"},children:Object(M.jsx)(E.a,{className:"",children:Object(M.jsxs)(L.a,{sm:12,children:[Object(M.jsx)("img",{className:"Logo",src:x}),Object(M.jsx)("h3",{className:z.a.h3,children:"Check all the Categories, Personal Lists, Tv Shows, and free Streaming"})]})})})},V=(c(92),"https://image.tmdb.org/t/p/w500");var A=function(e){var t=e.title,c=e.fetchUrl,n=e.biggerRow,s=e.className,r=Object(a.useState)([]),i=Object(h.a)(r,2),o=i[0],l=i[1],j=Object(a.useState)(""),d=Object(h.a)(j,2),b=d[0],m=d[1],f=Object(a.useState)([]),v=Object(h.a)(f,2),x=v[0],w=v[1],N=Object(a.useState)(!0),_=Object(h.a)(N,2),S=_[0],C=_[1];return Object(a.useEffect)((function(){function e(){return(e=Object(p.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.get(c);case 2:return t=e.sent,l(t.data.results),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[c]),console.log("movies",o),console.log(x),Object(M.jsxs)(u,{className:"root",children:[Object(M.jsxs)("div",{className:"row-movies",children:[Object(M.jsx)("h5",{children:t}),Object(M.jsx)("div",{className:"container_posters",children:o&&o.length>0?o.map((function(e){return Object(M.jsx)("img",{onClick:function(){!function(e){b?m(""):k()((null===e||void 0===e?void 0:e.title)||(null===e||void 0===e?void 0:e.name)||"").then((function(e){var t=new URLSearchParams(new URL(e).search);m(t.get("v"))})).catch((function(e){return console.log(e)}))}(e),function(e){w([e.title||e.name,e.overview,e.vote_average,e.release_date])}(e),C(!1)},className:"poster ".concat(n&&"bigger_row"),src:"biggerRow"===s?"".concat(V).concat(e.backdrop_path):"".concat(V).concat(e.poster_path),alt:e.name},e.id)})):console.log("error: ",o)})]}),Object(M.jsx)("div",{className:"bodyTrailer",style:{display:S?"none":"block"},onClick:function(){return C(!0)}}),Object(M.jsxs)("div",{className:"movieTrailer-container closed",style:{display:S?"none":"block"},children:[b&&Object(M.jsx)(y.a,{videoId:b,opts:{playerVars:{autoplay:0}},className:"youtube-trailer"}),Object(M.jsxs)(E.a,{className:"movie-description",children:[Object(M.jsx)(L.a,{sm:4,children:Object(M.jsx)("h1",{children:x[0]})}),Object(M.jsx)(L.a,{sm:4,children:Object(M.jsx)("h3",{children:x[2]})}),Object(M.jsx)(L.a,{sm:4,children:Object(M.jsx)("h5",{children:x[3]})}),Object(M.jsx)(L.a,{sm:12,children:Object(M.jsx)("h2",{children:x[1]})})]})]})]})},G=function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){return Object(i.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(M.jsxs)(u,{children:[Object(M.jsx)(H,{}),Object(M.jsx)(D,{}),Object(M.jsx)(A,{title:"Most Popular",fetchUrl:m.fetchPopular}),Object(M.jsx)(A,{title:"Comedies",fetchUrl:m.fetchComedies}),Object(M.jsx)(A,{title:"Upcoming Movies",fetchUrl:m.fetchUpcoming}),Object(M.jsx)(A,{title:"Family Movies",fetchUrl:m.fetchFamilies}),Object(M.jsx)(A,{title:"Top Rated",fetchUrl:m.fetchTopRated}),Object(M.jsx)(A,{title:"The Originals",fetchUrl:m.fetchOriginals,biggerRow:!0,className:"biggerRow"}),Object(M.jsx)(A,{title:"Dramatic Movies",fetchUrl:m.fetchDramas}),Object(M.jsx)(A,{title:"Thrillers",fetchUrl:m.fetchThrillers}),Object(M.jsx)(A,{title:"Horrors",fetchUrl:m.fetchHorrors})]})}}]),c}(a.Component),X=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,101)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};r.a.render(Object(M.jsx)(n.a.StrictMode,{children:Object(M.jsx)(G,{})}),document.getElementById("root")),X()}},[[93,1,2]]]);
//# sourceMappingURL=main.3f2da2a8.chunk.js.map