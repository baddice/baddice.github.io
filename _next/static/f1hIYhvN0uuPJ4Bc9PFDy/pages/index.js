(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{403:function(e,t,a){e.exports=a(396)},57:function(e,t,a){e.exports=a(801)},800:function(e,t,a){__NEXT_REGISTER_PAGE("/",function(){return e.exports=a(820),{page:e.exports.default}})},801:function(e,t,a){"use strict";var n=a(48),r=a(16);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(a(802)),l=r(a(96)),s=r(a(23)),i=r(a(24)),c=r(a(42)),p=r(a(43)),m=r(a(44)),f=r(a(98)),d=r(a(37)),u=a(199),x=n(a(0)),h=(r(a(3)),n(a(95))),E=a(53);var g=function(e){function t(){var e,a,n,r,o,i;(0,s.default)(this,t);for(var m=arguments.length,x=new Array(m),g=0;g<m;g++)x[g]=arguments[g];return a=(0,c.default)(this,(e=(0,p.default)(t)).call.apply(e,[this].concat(x))),(0,d.default)((0,f.default)((0,f.default)(a)),"formatUrls",(n=function(e,t){return{href:e&&"object"===(0,l.default)(e)?(0,u.format)(e):e,as:t&&"object"===(0,l.default)(t)?(0,u.format)(t):t}},r=null,o=null,i=null,function(e,t){if(e===r&&t===o)return i;var a=n(e,t);return r=e,o=t,i=a,a})),(0,d.default)((0,f.default)((0,f.default)(a)),"linkClicked",function(e){var t=e.currentTarget,n=t.nodeName,r=t.target;if("A"!==n||!(r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var o=a.formatUrls(a.props.href,a.props.as),l=o.href,s=o.as;if(function(e){var t=(0,u.parse)(e,!1,!0),a=(0,u.parse)((0,E.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===a.protocol&&t.host===a.host}(l)){var i=window.location.pathname;l=(0,u.resolve)(i,l),s=s?(0,u.resolve)(i,s):l,e.preventDefault();var c=a.props.scroll;null==c&&(c=s.indexOf("#")<0);var p=a.props.replace?"replace":"push";h.default[p](l,s,{shallow:a.props.shallow}).then(function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())}).catch(function(e){a.props.onError&&a.props.onError(e)})}}}),a}return(0,m.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",value:function(){this.prefetch()}},{key:"componentDidUpdate",value:function(e){(0,o.default)(this.props.href)!==(0,o.default)(e.href)&&this.prefetch()}},{key:"prefetch",value:function(){if(this.props.prefetch&&"undefined"!=typeof window){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,a=(0,u.resolve)(e,t);h.default.prefetch(a)}}},{key:"render",value:function(){var e=this,t=this.props.children,a=this.formatUrls(this.props.href,this.props.as),n=a.href,r=a.as;"string"==typeof t&&(t=x.default.createElement("a",null,t));var o=x.Children.only(t),l={onClick:function(t){o.props&&"function"==typeof o.props.onClick&&o.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==o.type||"href"in o.props)||(l.href=r||n),l.href&&"undefined"!=typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(l.href=(0,h._rewriteUrlForNextExport)(l.href)),x.default.cloneElement(o,l)}}]),t}(x.Component);t.default=g},802:function(e,t,a){e.exports=a(803)},803:function(e,t,a){var n=a(7),r=n.JSON||(n.JSON={stringify:JSON.stringify});e.exports=function(e){return r.stringify.apply(r,arguments)}},820:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a.n(n),o=a(0),l=a.n(o),s=a(57),i=a.n(s),c=a(403),p=a.n(c),m=(a(3),function(e){return l.a.createElement(p.a,null,l.a.createElement("meta",{charSet:"UTF-8"}),l.a.createElement("title",null,e.title||""),l.a.createElement("meta",{name:"description",content:e.description||""}),l.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),l.a.createElement("link",{rel:"icon",sizes:"192x192",href:"/static/touch-icon.png"}),l.a.createElement("link",{rel:"apple-touch-icon",href:"/static/touch-icon.png"}),l.a.createElement("link",{rel:"mask-icon",href:"/static/favicon-mask.svg",color:"#49B882"}),l.a.createElement("link",{rel:"icon",href:"/static/favicon.ico"}),l.a.createElement("meta",{property:"og:url",content:e.url||""}),l.a.createElement("meta",{property:"og:title",content:e.title||""}),l.a.createElement("meta",{property:"og:description",content:e.description||""}),l.a.createElement("meta",{name:"twitter:site",content:e.url||""}),l.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),l.a.createElement("meta",{name:"twitter:image",content:e.ogImage||""}),l.a.createElement("meta",{property:"og:image",content:e.ogImage||""}),l.a.createElement("meta",{property:"og:image:width",content:"1200"}),l.a.createElement("meta",{property:"og:image:height",content:"630"}))}),f=[{href:"https://github.com/segmentio/create-next-app",label:"Github"}].map(function(e){return e.key="nav-link-".concat(e.href,"-").concat(e.label),e}),d=function(){return l.a.createElement("nav",{className:"jsx-2055897931"},l.a.createElement("ul",{className:"jsx-2055897931"},l.a.createElement("li",{className:"jsx-2055897931"},l.a.createElement(i.a,{prefetch:!0,href:"/"},l.a.createElement("a",{className:"jsx-2055897931"},"Home"))),l.a.createElement("ul",{className:"jsx-2055897931"},f.map(function(e){var t=e.key,a=e.href,n=e.label;return l.a.createElement("li",{key:t,className:"jsx-2055897931"},l.a.createElement(i.a,{href:a},l.a.createElement("a",{className:"jsx-2055897931"},n)))}))),l.a.createElement(r.a,{styleId:"2055897931",css:["body{margin:0;font-family:-apple-system,BlinkMacSystemFont,Avenir Next,Avenir, Helvetica,sans-serif;}","nav.jsx-2055897931{text-align:center;}","ul.jsx-2055897931{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}","nav.jsx-2055897931>ul.jsx-2055897931{padding:4px 16px;}","li.jsx-2055897931{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:6px 8px;}","a.jsx-2055897931{color:#067df7;-webkit-text-decoration:none;text-decoration:none;font-size:13px;}"]}))};t.default=function(){return l.a.createElement("div",{className:"jsx-243749409"},l.a.createElement(m,{title:"Home"}),l.a.createElement(d,null),l.a.createElement("div",{className:"jsx-243749409 hero"},l.a.createElement("h1",{className:"jsx-243749409 title"},"Welcome to Next!"),l.a.createElement("p",{className:"jsx-243749409 description"},"To get started, edit ",l.a.createElement("code",{className:"jsx-243749409"},"pages/index.js")," and save to reload."),l.a.createElement("div",{className:"jsx-243749409 row"},l.a.createElement(i.a,{href:"https://github.com/zeit/next.js#getting-started"},l.a.createElement("a",{className:"jsx-243749409 card"},l.a.createElement("h3",{className:"jsx-243749409"},"Getting Started →"),l.a.createElement("p",{className:"jsx-243749409"},"Learn more about Next on Github and in their examples"))),l.a.createElement(i.a,{href:"https://open.segment.com/create-next-app"},l.a.createElement("a",{className:"jsx-243749409 card"},l.a.createElement("h3",{className:"jsx-243749409"},"Examples →"),l.a.createElement("p",{className:"jsx-243749409"},"Find other example boilerplates on the"," ",l.a.createElement("code",{className:"jsx-243749409"},"create-next-app")," site"))),l.a.createElement(i.a,{href:"https://github.com/segmentio/create-next-app"},l.a.createElement("a",{className:"jsx-243749409 card"},l.a.createElement("h3",{className:"jsx-243749409"},"Create Next App →"),l.a.createElement("p",{className:"jsx-243749409"},"Was this tool helpful? Let us know how we can improve it"))))),l.a.createElement(r.a,{styleId:"243749409",css:[".hero.jsx-243749409{width:100%;color:#333;}",".title.jsx-243749409{margin:0;width:100%;padding-top:80px;line-height:1.15;font-size:48px;}",".title.jsx-243749409,.description.jsx-243749409{text-align:center;}",".row.jsx-243749409{max-width:880px;margin:80px auto 40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}",".card.jsx-243749409{padding:18px 18px 24px;width:220px;text-align:left;-webkit-text-decoration:none;text-decoration:none;color:#434343;border:1px solid #9b9b9b;}",".card.jsx-243749409:hover{border-color:#067df7;}",".card.jsx-243749409 h3.jsx-243749409{margin:0;color:#067df7;font-size:18px;}",".card.jsx-243749409 p.jsx-243749409{margin:0;padding:12px 0 0;font-size:13px;color:#333;}"]}))}}},[[800,1,0]]]);