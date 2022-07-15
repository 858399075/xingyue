"use strict";(self.webpackChunkakara=self.webpackChunkakara||[]).push([[846],{3905:function(e,n,t){t.d(n,{Zo:function(){return i},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},i=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),f=c(t),d=o,m=f["".concat(l,".").concat(d)]||f[d]||u[d]||a;return t?r.createElement(m,s(s({ref:n},i),{},{components:t})):r.createElement(m,s({ref:n},i))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=f;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,s[1]=p;for(var c=2;c<a;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},4256:function(e,n,t){t.r(n),t.d(n,{assets:function(){return i},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return u}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),s=["components"],p={},l="PostCSS",c={unversionedId:"infra/PostCSS",id:"infra/PostCSS",title:"PostCSS",description:"postcss\u63d0\u4f9b\u4e86CSS\u4ee3\u7801\u7684\u7f16\u8bd1\u529f\u80fd\uff1bpostcss-cli\u5141\u8bb8\u6211\u4eec\u5728\u547d\u4ee4\u884c\u8fdb\u884c\u7f16\u8bd1\uff1b\u800c\u6211\u4eec\u5927\u591a\u6570\u60c5\u51b5\u662f\u5728webpack\u4e2d\u642d\u914d\u4f7f\u7528postcss\uff0c\u6b64\u65f6\u9700\u8981\u989d\u5916\u5b89\u88c5postcss-loader\u3002",source:"@site/docs/infra/PostCSS.md",sourceDirName:"infra",slug:"/infra/PostCSS",permalink:"/blog/docs/infra/PostCSS",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/infra/PostCSS.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Babel",permalink:"/blog/docs/infra/Babel"},next:{title:"Webpack",permalink:"/blog/docs/infra/Webpack"}},i={},u=[{value:"plugins",id:"plugins",level:2},{value:"autoprefixer",id:"autoprefixer",level:3},{value:"postcss-preset-env",id:"postcss-preset-env",level:3},{value:"postcss-modules",id:"postcss-modules",level:3}],f={toc:u};function d(e){var n=e.components,t=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"postcss"},"PostCSS"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"postcss"),"\u63d0\u4f9b\u4e86",(0,a.kt)("strong",{parentName:"p"},"CSS\u4ee3\u7801\u7684\u7f16\u8bd1\u529f\u80fd"),"\uff1b",(0,a.kt)("inlineCode",{parentName:"p"},"postcss-cli"),"\u5141\u8bb8\u6211\u4eec\u5728\u547d\u4ee4\u884c\u8fdb\u884c\u7f16\u8bd1\uff1b\u800c\u6211\u4eec\u5927\u591a\u6570\u60c5\u51b5\u662f\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"webpack"),"\u4e2d\u642d\u914d\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"postcss"),"\uff0c\u6b64\u65f6\u9700\u8981\u989d\u5916\u5b89\u88c5",(0,a.kt)("inlineCode",{parentName:"p"},"postcss-loader"),"\u3002"),(0,a.kt)("p",null,"\u9664\u4e86\u547d\u4ee4\u884c\u4f20\u53c2\uff0c\u6211\u4eec\u8fd8\u53ef\u4ee5\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"postcss.config.js"),"\u5199\u5165\u914d\u7f6e\u4fe1\u606f\u3002"),(0,a.kt)("p",null,"\u7c7b\u4f3c",(0,a.kt)("inlineCode",{parentName:"p"},"babel"),"\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u7f16\u8bd1\u524d\u540e\u4ee3\u7801\u683c\u5f0f\u4e00\u6837\uff0c\u6211\u4eec\u9700\u8981",(0,a.kt)("strong",{parentName:"p"},"\u4f7f\u7528\u63d2\u4ef6\u6765\u6307\u5b9a\u8f6c\u5316\u529f\u80fd"),"\u3002"),(0,a.kt)("h2",{id:"plugins"},"plugins"),(0,a.kt)("h3",{id:"autoprefixer"},"autoprefixer"),(0,a.kt)("p",null,"\u8fd9\u662f\u6700\u5e38\u89c1\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"PostCSS"),"\u63d2\u4ef6\uff0c\u80fd\u591f\u7ed9CSS\u89c4\u5219\u6dfb\u52a0\u5404\u79cd\u524d\u7f00\u4ece\u800c\u517c\u5bb9\u4e0d\u540c\u6d4f\u89c8\u5668\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"/* \u6e90\u6587\u4ef6 */\n::placeholder {\n  color: gray;\n}\n\n/* \u7f16\u8bd1\u540e\u6587\u4ef6 */\n::-moz-placeholder {\n  color: gray;\n}\n:-ms-input-placeholder {\n  color: gray;\n}\n::placeholder {\n  color: gray;\n}\n")),(0,a.kt)("p",null,"\u4f7f\u7528\u7684\u65b9\u5f0f\u4e5f\u5f88\u7b80\u5355\uff0c\u8fd9\u91cc\u4ee5",(0,a.kt)("inlineCode",{parentName:"p"},"webpack"),"\u4e2d\u4f7f\u7528\u4e3a\u4f8b\u5b50\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// webpack.config.js\nmodule.exports = {\n    module: {\n        rules: [\n            {\n                test: /\\.css$/,\n                use: ["style-loader", "css-loader", "postcss-loader"] // \u5728\u6700\u540e\u9762\u52a0\u4e0a\u4e86postcss-loader\n            }\n        ]\n    },\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// postcss.config.js\nconst autoprefixer = require('autoprefixer')\n\nmodule.exports = {\n    plugins: [\n        autoprefixer, // \u6216 autoprefixer()\n    ]\n}\n")),(0,a.kt)("h3",{id:"postcss-preset-env"},"postcss-preset-env"),(0,a.kt)("p",null,"\u8be5\u63d2\u4ef6\u901a\u8fc7\u57ab\u7247\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"poyfills"),"\uff09\u8ba9\u6211\u4eec\u80fd\u5728\u6d4f\u89c8\u5668\u4f7f\u7528\u8fd8\u6ca1\u6709\u6210\u4e3a\u89c4\u8303\u7684\u5c5e\u6027\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// postcss.config.js\nconst env = require('postcss-preset-env')\nconst autoprefixer = require('autoprefixer')\n\nmodule.exports = {\n    plugins: [\n        autoprefixer,\n        env({ stage: 0 })\n    ]\n}\n")),(0,a.kt)("h3",{id:"postcss-modules"},"postcss-modules"),(0,a.kt)("p",null,"\u8be5\u63d2\u4ef6\u80fd\u5b9e\u73b0\u7c7b\u540d\u7684\u8f6c\u5316\uff0c\u4ece\u800c\u907f\u514d\u7c7b\u540d\u7684\u91cd\u590d\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"/* \u6e90\u6587\u4ef6 */\n.name {\n  color: gray;\n}\n\n/* \u7f16\u8bd1\u540e\u6587\u4ef6 */\n.Logo__name__SVK0g {\n  color: gray;\n}\n")),(0,a.kt)("p",null,"\u7f16\u8bd1\u7684\u540c\u65f6\u4f1a\u751f\u6210\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"json"),"\u6587\u4ef6\u8bb0\u5f55\u524d\u540e\u7c7b\u540d\u7684\u5bf9\u5e94\u5173\u7cfb\uff0c\u4ee5\u65b9\u4fbf\u6211\u4eec\u5408\u7406\u5730\u5f15\u5165\u7c7b\u540d\u3002"))}d.isMDXComponent=!0}}]);