(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{52:function(e,a,t){e.exports=t(73)},57:function(e,a,t){},58:function(e,a,t){},59:function(e,a,t){},71:function(e,a,t){},73:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(36),c=t.n(l),s=t(18),o=(t(57),t(58),t(48)),i=t(15),m=t(14),u=t(32),d=t(37),g=t(38),b=t(49),p=t(39),E=t(50),f=t(28),h=t(17),v=t.n(h);function y(){var e=Object(f.a)(["\n  query getAnime($id: ID){\n    anime(id: $id) {\n      id\n      attributes {\n        synopsis\n        canonicalTitle\n        startDate\n        endDate\n        ageRating\n        posterImage {\n          tiny\n        }\n        coverImage {\n          large\n        }\n        showType\n      }\n    }\n  }\n"]);return y=function(){return e},e}function N(){var e=Object(f.a)(["\n  query getAnimes($offset: Int){\n    animes(offset: $offset) {\n      id\n      attributes {\n        synopsis\n        canonicalTitle\n        startDate\n        endDate\n        ageRating\n        posterImage {\n          small\n        }\n        showType\n      }\n    }\n  }\n"]);return N=function(){return e},e}var w=v()(N()),k=v()(y()),x=t(40),I=t.n(x),T=t(41),M=t.n(T),O=function(e){return M()(e).format("MMM do YYYY")},j=(t(59),function(e){var a=e.anime,t=a.id,n=a.attributes,l=n.synopsis,c=n.canonicalTitle,o=n.startDate,i=n.endDate,m=n.ageRating,u=n.posterImage.small,d=n.showType;return r.a.createElement("div",{className:"col-md-6 col-lg-4 col-xl-3 card"},r.a.createElement("img",{src:u,alt:"".concat(c," poster."),className:"img-fluid"}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h3",{className:"card-title font-weight-bold"},c),r.a.createElement("hr",null),r.a.createElement("div",{className:"text-left card-details"},"Rated: ",r.a.createElement("span",{className:"badge badge-dark text-orange"},m),r.a.createElement("br",null),"Type: ",r.a.createElement("span",{className:"badge badge-dark text-orange"},d.toUpperCase()),r.a.createElement("br",null),"From: ",r.a.createElement("span",{className:"badge badge-success text-left"},O(o)),r.a.createElement("br",null),"To: ",r.a.createElement("span",{className:"badge badge-danger text-left"},O(i))),r.a.createElement("hr",null),r.a.createElement("p",{className:"card-text"},"".concat(function(e){var a=e.substr(0,200);return a.substr(0,Math.min(a.length,a.lastIndexOf(" ")))}(l),"...")),r.a.createElement(s.b,{to:"anime/".concat(t),className:"btn btn-maroon"},"Read Full Synopsis")))}),D=function(){return r.a.createElement("div",{className:"spinner-border text-light mx-auto overflow-hidden",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading..."))},R=function(e){return r.a.createElement(I.a,{dataLength:e.animes.length,next:e.onLoadMore,hasMore:!0,scrollThreshold:.99,loader:r.a.createElement(D,null),className:"row",style:{overflow:"hidden"},endMessage:r.a.createElement("p",null,"Done")},e.animes.map(function(e){return r.a.createElement(j,{key:e.id,anime:e})}))},A=function(e){function a(){var e,t;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(b.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(r)))).state={offset:0},t}return Object(E.a)(a,e),Object(g.a)(a,[{key:"render",value:function(){return r.a.createElement(i.b,{query:w,variables:{offset:this.state.offset}},function(e){var a=e.loading,t=e.error,n=e.data,l=e.fetchMore;return a?r.a.createElement(D,null):(t&&console.log(t),r.a.createElement(R,{animes:n.animes,entries:n.animes||[],onLoadMore:function(){return l({variables:{offset:n.animes.length},updateQuery:function(e,a){var t=a.fetchMoreResult;return t?Object.assign({},e,{animes:[].concat(Object(u.a)(e.animes),Object(u.a)(t.animes))}):e}})}}))})}}]),a}(n.Component),q=(t(71),function(e){var a=e.match.params.id;a=parseInt(a);return r.a.createElement(i.b,{query:k,variables:{id:a}},function(a){var t=a.loading,l=a.error,c=a.data;if(t)return r.a.createElement(D,null);l&&console.log(l);var s=c.anime.attributes,o=s.synopsis,i=s.canonicalTitle,m=s.startDate,u=s.endDate,d=s.ageRating,g=s.posterImage.tiny,b=s.showType,p={backgroundImage:c.anime.attributes.coverImage?"url(".concat(c.anime.attributes.coverImage.large,")"):null,backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"260px",backgroundBlendMode:"overlay",backgroundColor:"rgba(0, 0, 0, 0.8)"};return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"row mb-2"},r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:"animeCover",style:p},r.a.createElement("h1",null,i)))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4 pr-1"},r.a.createElement("div",{className:"p-2 bg-white"},r.a.createElement("img",{src:g,alt:""}),r.a.createElement("br",null),"Rating: ",r.a.createElement("span",{className:"badge badge-dark text-orange"},d),r.a.createElement("br",null),"Type: ",r.a.createElement("span",{className:"badge badge-dark text-orange"},b),r.a.createElement("br",null),"From: ",r.a.createElement("span",{className:"badge badge-success"},O(m)),r.a.createElement("br",null),"To: ",r.a.createElement("span",{className:"badge badge-danger"},O(u)),r.a.createElement("br",null),r.a.createElement("hr",null),r.a.createElement("button",{onClick:function(){e.history.goBack()},className:"btn btn-outline-danger btn-sm text-center"},"\u2190 Go Back"))),r.a.createElement("div",{className:"col-md-8 pl-0"},r.a.createElement("div",{className:"p-5 bg-white"},r.a.createElement("h2",null,"Synopsis"),r.a.createElement("p",{className:"prewrap"},o.replace(/(?:\r\n|\r|\n)/g,"\n\n"))))))})}),B=new o.a({uri:"/graphql"});var C=function(){return r.a.createElement(i.a,{client:B},r.a.createElement("nav",{className:"navbar"},r.a.createElement("span",{className:"navbar-brand mb-0 h1"},"-Kushon-",r.a.createElement("i",{className:"tagline"},"A collection of animes"))),r.a.createElement("div",{className:"App container mb-5"},r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"/anime/:id",component:q}),r.a.createElement(m.a,{exact:!0,path:"/",component:A}))),r.a.createElement("footer",{className:"text-center"},"Powered by the ",r.a.createElement("a",{href:"https://kitsu.docs.apiary.io/#"},"Kitsu API")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(s.a,null,r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[52,1,2]]]);
//# sourceMappingURL=main.53f4cea4.chunk.js.map