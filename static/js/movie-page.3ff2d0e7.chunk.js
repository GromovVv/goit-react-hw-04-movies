(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[4],{37:function(t,e,r){"use strict";r.d(e,"a",(function(){return p})),r.d(e,"e",(function(){return f})),r.d(e,"f",(function(){return h})),r.d(e,"b",(function(){return d})),r.d(e,"c",(function(){return y})),r.d(e,"d",(function(){return j}));var n=r(33),a=r.n(n),c=r(34),o=r(40),i=r.n(o),s="https://api.themoviedb.org/3",u="7e78d9d0b80a5a9938ce5aba09bf2c47",p="https://image.tmdb.org/t/p/w300";function f(){return l.apply(this,arguments)}function l(){return(l=Object(c.a)(a.a.mark((function t(){var e;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.get("".concat(s,"/trending/all/day?api_key=").concat(u));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return b.apply(this,arguments)}function b(){return(b=Object(c.a)(a.a.mark((function t(e){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.get("".concat(s,"/search/movie?api_key=").concat(u,"&query=").concat(e));case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return m.apply(this,arguments)}function m(){return(m=Object(c.a)(a.a.mark((function t(e){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.get("".concat(s,"/movie/").concat(e,"?api_key=").concat(u));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(t){return v.apply(this,arguments)}function v(){return(v=Object(c.a)(a.a.mark((function t(e){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.get("".concat(s,"/movie/").concat(e,"/credits?api_key=").concat(u));case 2:return r=t.sent,t.abrupt("return",r.data.cast);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function j(t){return O.apply(this,arguments)}function O(){return(O=Object(c.a)(a.a.mark((function t(e){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.get("".concat(s,"/movie/").concat(e,"/reviews?api_key=").concat(u));case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},41:function(t,e,r){},42:function(t,e,r){"use strict";function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}r.d(e,"a",(function(){return c}))},70:function(t,e,r){},75:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return y}));var n=r(33),a=r.n(n);function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function o(t){return function(t){if(Array.isArray(t))return c(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"===typeof t)return c(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var i=r(34),s=r(42),u=r(35),p=r(36),f=r(39),l=r(38),h=r(0),b=r(8),d=r(37),m=(r(70),r(41),r(2)),y=function(t){Object(f.a)(r,t);var e=Object(l.a)(r);function r(){var t;Object(u.a)(this,r);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={movies:[],searchQuery:""},t.handleChange=function(e){var r=e.currentTarget.value;t.setState({searchQuery:r})},t.handleSubmit=function(e){var r=t.state.searchQuery,n=t.props,a=n.location,c=n.history;e.preventDefault(),t.getMoviesByQuery(r),c.push(Object(s.a)(Object(s.a)({},a),{},{search:"query=".concat(r),state:{searchQuery:r}}))},t}return Object(p.a)(r,[{key:"componentDidMount",value:function(){var t,e=this.props.location;void 0!==(null===e||void 0===e||null===(t=e.state)||void 0===t?void 0:t.searchQuery)&&this.getMoviesByQuery(e.state.searchQuery)}},{key:"getMoviesByQuery",value:function(){var t=Object(i.a)(a.a.mark((function t(e){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(d.f)(e);case 2:if(r=t.sent,""!==e.trim()){t.next=6;break}return alert("You need to write correct query to find"),t.abrupt("return");case 6:this.setState({movies:o(r)});case 7:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state,e=t.movies,r=t.query,n=this.props.history.location;return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"movies-page-container",children:[Object(m.jsxs)("form",{className:"form",onSubmit:this.handleSubmit,children:[Object(m.jsx)("input",{className:"form-input",type:"text",value:r,onChange:this.handleChange,autoComplete:"off",autoFocus:!0,placeholder:"Search movies..."}),Object(m.jsx)("button",{className:"form-btn",type:"submit",children:"Search"})]}),Object(m.jsx)("ul",{className:"movie-list",children:e.map((function(t){var e=t.id,r=t.name,a=t.title,c=t.poster_path;return Object(m.jsx)("li",{className:"movie-item",children:Object(m.jsx)(b.b,{to:{pathname:"/movies/".concat(e),state:{from:n}},children:Object(m.jsxs)("div",{className:"movie-card",children:[Object(m.jsx)("img",{className:"movie-img",src:d.a+c,alt:a||r}),Object(m.jsx)("div",{className:"card-body",children:Object(m.jsx)("p",{className:"card-title",children:a||r})})]})})},e)}))})]})})}}]),r}(h.Component)}}]);
//# sourceMappingURL=movie-page.3ff2d0e7.chunk.js.map