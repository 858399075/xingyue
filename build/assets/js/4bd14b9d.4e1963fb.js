"use strict";(self.webpackChunkakara=self.webpackChunkakara||[]).push([[6870],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return c}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),m=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=m(e.components);return a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=m(t),c=r,k=s["".concat(l,".").concat(c)]||s[c]||d[c]||o;return t?a.createElement(k,p(p({ref:n},u),{},{components:t})):a.createElement(k,p({ref:n},u))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,p=new Array(o);p[0]=s;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var m=2;m<o;m++)p[m]=t[m];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},8592:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return d}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),p=["components"],i={},l="\u6a21\u5757\u5316",m={unversionedId:"node/module",id:"node/module",title:"\u6a21\u5757\u5316",description:"IIFE",source:"@site/docs/node/module.md",sourceDirName:"node",slug:"/node/module",permalink:"/blog/docs/node/module",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/node/module.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u7248\u672c\u66f4\u65b0\u65e5\u5fd7",permalink:"/blog/docs/typescript/\u7248\u672c\u66f4\u65b0\u65e5\u5fd7.mdx"},next:{title:"NPM",permalink:"/blog/docs/node/npm"}},u={},d=[{value:"IIFE",id:"iife",level:2},{value:"AMD",id:"amd",level:2},{value:"CommonJS\u6a21\u5757",id:"commonjs\u6a21\u5757",level:2},{value:"UMD",id:"umd",level:2},{value:"ES\u6a21\u5757",id:"es\u6a21\u5757",level:2},{value:"export",id:"export",level:3},{value:"import",id:"import",level:3},{value:"import CJS",id:"import-cjs",level:3},{value:"\u5bf9\u6bd4",id:"\u5bf9\u6bd4",level:3}],s={toc:d};function c(e){var n=e.components,t=(0,r.Z)(e,p);return(0,o.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u6a21\u5757\u5316"},"\u6a21\u5757\u5316"),(0,o.kt)("h2",{id:"iife"},"IIFE"),(0,o.kt)("p",null,"\u7acb\u5373\u6267\u884c\u51fd\u6570\uff08IIFE\uff09\u662f\u4ee5\u524d\u4e3b\u6d41\u7684\u6a21\u5757\u5316\u65b9\u6848\uff0c\u6bd4\u5982 ",(0,o.kt)("inlineCode",{parentName:"p"},"Jquery"),"\u5c31\u4f7f\u7528\u8be5\u65b9\u6848\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// \u5b9a\u4e49\u6a21\u5757\n(function (window) {\n    function A() {\n        return 'aaa'\n    }\n\n    function B() {\n        return 'bbb'\n    }\n\n    window.myModule = {A, B}\n})(window)\n\n// \u4f7f\u7528\u6a21\u5757\nmyModule.A()\n")),(0,o.kt)("h2",{id:"amd"},"AMD"),(0,o.kt)("p",null,"\u5f88\u4e45\u4ee5\u524d\u7684\u4e00\u79cd\u6a21\u5757\u5316\u65b9\u6848\uff0c\u7c7b\u4f3c\u7684\u65b9\u6848\u8fd8\u6709CMD\u3002\u9700\u8981\u989d\u5916\u5b89\u88c5 ",(0,o.kt)("inlineCode",{parentName:"p"},"require.js"),"\u5e93\uff0c\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"define"),"\u5b9a\u4e49\u6a21\u5757\uff0c\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"require"),"\u52a0\u8f7d\u6a21\u5757\u3002"),(0,o.kt)("p",null,"\u73b0\u5728\u57fa\u672c\u4e0d\u7528\u3002"),(0,o.kt)("h2",{id:"commonjs\u6a21\u5757"},"CommonJS\u6a21\u5757"),(0,o.kt)("p",null,"\u548c",(0,o.kt)("inlineCode",{parentName:"p"},"ES"),"\u6a21\u5757\u662f\u76ee\u524d\u6700\u4e3b\u6d41\u7684\u4e24\u4e2a\u6a21\u5757\u5316\u65b9\u6848\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// a.js\nfunction getName() {\n    return 'Akara'\n}\nmodule.exports = getName\n\n// b.js\nconst getName = require('./a')\ngetName() // 'Akara'\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"require"),"\u53ef\u4ee5\u7b80\u5355\u770b\u4f5c\u5305\u4e86\u4e00\u5c42\u7acb\u5373\u6267\u884c\u51fd\u6570\uff0c\u8be5\u7acb\u5373\u6267\u884c\u51fd\u6570\u8fd4\u56de\u4e86\u90a3\u4e2a\u6a21\u5757\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"module.exports")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const getName = require('./a')\n// \u7b49\u4ef7\u4e8e\nconst getName = (function () {\n    function getName() {\n        return 'Akara'\n    }\n\n    module.exports = getName\n\n    // \u8fd4\u56demodule.exports\n    return module.exports\n})()\n")),(0,o.kt)("p",null,"\u6a21\u5757\u5185\u90e8\u6709 ",(0,o.kt)("inlineCode",{parentName:"p"},"module"),"\u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"exports"),"\u4e24\u4e2a\u53d8\u91cf\uff0c\u5176\u4e2d ",(0,o.kt)("inlineCode",{parentName:"p"},"module.exports"),"\u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"exports"),"\u6307\u5411\u540c\u4e00\u7247\u5185\u5b58\u3002"),(0,o.kt)("p",null,"\u53c8\u56e0\u4e3a\u6211\u4eec\u6a21\u5757\u5b9e\u9645\u8fd4\u56de\u7684\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"module.exports"),"\uff0c\u6240\u4ee5\u5982\u679c\u76f4\u63a5\u5bf9 ",(0,o.kt)("inlineCode",{parentName:"p"},"exports"),"\u53d8\u91cf\u91cd\u65b0\u8d4b\u503c\u80af\u5b9a\u662f\u9519\u8bef\u7684\u64cd\u4f5c\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"module: {\n    id: '.'\n    exports: {}\n}\n")),(0,o.kt)("h2",{id:"umd"},"UMD"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"UMD"),"\u662f\u4e0a\u8ff0\u4e09\u79cd\u6a21\u5757\u5316\u65b9\u6848 ",(0,o.kt)("inlineCode",{parentName:"p"},"IIFE"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"AMD"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"CommonJS"),"\u7684\u7ed3\u5408\uff0c\u5373\u7528\u6765\u517c\u5bb9\u591a\u5957\u6a21\u5757\u5316\u7cfb\u7edf\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"(function (root, factory) {\n    if (typeof define === 'function' && define.amd) {\n        // \u5982\u679c\u652f\u6301AMD\u6a21\u5757\u5316\n        define(['b'], factory);\n    } else if (typeof module === 'object' && module.exports) {\n        // \u5982\u679c\u652f\u6301CommonJS\u6a21\u5757\u5316\n        module.exports = factory(require('b'));\n    } else {\n        // \u5982\u679c\u4ee5\u4e0a\u4e24\u79cd\u90fd\u4e0d\u652f\u6301\uff0c\u8bbe\u7f6e\u5168\u5c40\u53d8\u91cf\u6765\u4fdd\u5b58\u6a21\u5757\u5185\u5bb9\n        root.returnExports = factory(root.b);\n    }\n}(this, function (b) {\n    // \u6a21\u5757\u7684\u4e1a\u52a1\u4ee3\u7801\u653e\u5728\u8fd9\n    return {}\n}));\n")),(0,o.kt)("h2",{id:"es\u6a21\u5757"},"ES\u6a21\u5757"),(0,o.kt)("p",null,"\u901a\u5e38\u6211\u4eec\u628a",(0,o.kt)("inlineCode",{parentName:"p"},".mjs"),"\u6587\u4ef6\u89c6\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"ES"),"\u6a21\u5757\uff0c\u6216\u8005",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),"\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"type"),"\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"module"),"\u65f6\u8be5\u9879\u76ee\u4e0b\u6240\u6709",(0,o.kt)("inlineCode",{parentName:"p"},".js"),"\u6587\u4ef6\u90fd\u89c6\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"ES"),"\u6a21\u5757\u3002ES6\u6a21\u5757\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"import"),"\u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"export"),"\u8bed\u6cd5\u6765\u5bfc\u5165\u548c\u5bfc\u51fa\u6a21\u5757\u3002"),(0,o.kt)("h3",{id:"export"},"export"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// a.js\nconst A = 'akara'\nexport default A // \u7b49\u4ef7\u4e8e export { name as default }\nexport function B() { // \u7b49\u4ef7\u4e8e export { getName as getName }\n    return name\n}\nconst C = 'akara'\nexport { C as alias }\n")),(0,o.kt)("h3",{id:"import"},"import"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// b.js\nimport A from './a.js' // \u7b49\u4ef7\u4e8e import { default as name }\nimport { B } from './a.js' // \u7b49\u4ef7\u4e8e import { getName as getName }\nimport { alias as C } from './a.js'\nconsole.log(A, B, C)\n")),(0,o.kt)("p",null,"\u9664\u4e86\u9010\u4e2a\u63a5\u53e3",(0,o.kt)("inlineCode",{parentName:"p"},"import"),"\uff0c\u6211\u4eec\u751a\u81f3\u53ef\u4ee5\u4e00\u6b21\u6027",(0,o.kt)("inlineCode",{parentName:"p"},"import"),"\u6574\u4e2a\u6a21\u5757"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// b.js\nimport * as myModule from './a.js' \nconsole.log(myModule)\n// [Module: null prototype] {\n//     B: [Function: B],\n//     alias: 'akara',\n//     default: 'akara'\n// }\n")),(0,o.kt)("h3",{id:"import-cjs"},"import CJS"),(0,o.kt)("p",null,"\u901a\u5e38\u6765\u8bf4\u6211\u4eec\u4f1a\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"CommonJS"),"\u6a21\u5757\u5f15\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"CommonJS"),"\u6a21\u5757\uff0c\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"ES"),"\u6a21\u5757\u5f15\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"ES"),"\u6a21\u5757\uff0c\u800c\u6211\u4eec\u751a\u81f3\u53ef\u4ee5\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"ES"),"\u6a21\u5757\u5f15\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"CommonJS"),"\u6a21\u5757\uff08\u5f53\u7136\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"CommonJS"),"\u662f\u65e0\u6cd5\u5f15\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"ES"),"\u6a21\u5757\u7684\uff09"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// a.js\nmodule.exports = function A() {\n    console.log('common\u6a21\u5757')\n}\n\n// b.mjs\nimport * as myModule from './a.js' // \u9ed8\u8ba4\u5bfc\u5165\u4e86a.js\u6587\u4ef6\u7684module.exports\nconsole.log(myModule)\n// [Module: null prototype] { \n//     default: [Function A] \n// }\n\nimport A from './a.js'\nconsole.log(A)\n// [Function: A]\n")),(0,o.kt)("p",null,"\u7531\u6b64\u53ef\u89c1\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"CommonJS"),"\u6a21\u5757\u53ea\u80fd\u5b9a\u4e49\u4e00\u4e2a",(0,o.kt)("inlineCode",{parentName:"p"},"default"),"\u63a5\u53e3\uff0c\u800c",(0,o.kt)("inlineCode",{parentName:"p"},"ES"),"\u6a21\u5757\u9664\u4e86",(0,o.kt)("inlineCode",{parentName:"p"},"default"),"\u63a5\u53e3\u8fd8\u53ef\u4ee5\u5b9a\u4e49\u5176\u4ed6\u81ea\u5b9a\u4e49\u63a5\u53e3\u3002\u4ece\u8fd9\u4e2a\u89d2\u5ea6\u6765\u770b",(0,o.kt)("inlineCode",{parentName:"p"},"ES"),"\u6a21\u5757\u80fd\u5f15\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"CommonJS"),"\u6a21\u5757\u662f\u6bd4\u8f83\u79d1\u5b66\u7684\uff0c\u56e0\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"ES"),"\u6a21\u5757\u80fd\u5904\u7406",(0,o.kt)("inlineCode",{parentName:"p"},"default"),"\u63a5\u53e3\uff1b\u800c",(0,o.kt)("inlineCode",{parentName:"p"},"CommonJS"),"\u6a21\u5757\u65e0\u6cd5\u5f15\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"ES"),"\u6a21\u5757\u662f\u56e0\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"CommonJS"),"\u65e0\u6cd5\u5904\u7406",(0,o.kt)("inlineCode",{parentName:"p"},"ES"),"\u6a21\u5757\u53ef\u80fd\u66b4\u9732\u7684\u975e",(0,o.kt)("inlineCode",{parentName:"p"},"default"),"\u63a5\u53e3\u3002"),(0,o.kt)("h3",{id:"\u5bf9\u6bd4"},"\u5bf9\u6bd4"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"CJS"),"\u6a21\u5757\u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"MJS"),"\u6a21\u5757\u5b58\u5728\u51e0\u5927\u533a\u522b"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"CJS"),"\u6a21\u5757\u4f1a\u88ab\u6574\u4f53\u5bfc\u5165\uff0c\u800c ",(0,o.kt)("inlineCode",{parentName:"p"},"MJS"),"\u53ef\u4ee5\u88ab\u90e8\u5206\u5bfc\u5165\u3002\u56e0\u6b64\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"MJS"),"\u53ef\u4ee5 ",(0,o.kt)("inlineCode",{parentName:"p"},"tree shaking"),"\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"import"),"\u547d\u4ee4\u4f1a\u5728",(0,o.kt)("strong",{parentName:"p"},"\u5176\u4ed6\u6240\u6709\u4ee3\u7801\u6267\u884c\u524d"),"\u5c31\u88abJavaScript\u5f15\u64ce\u9759\u6001\u5206\u6790\uff0c\u53ef\u4ee5\u8bf4\u5b83\u662f\u5728",(0,o.kt)("strong",{parentName:"p"},"\u7f16\u8bd1\u65f6\u52a0\u8f7d\u6a21\u5757"),"\u3002"),(0,o.kt)("p",{parentName:"li"},"\u6240\u4ee5\u6211\u4eec\u901a\u5e38\u53ea\u80fd\u628a ",(0,o.kt)("inlineCode",{parentName:"p"},"import"),"\u653e\u5728\u6a21\u5757\u7684\u9876\u5c42\uff0c\u5e76\u4e14\u4e0d\u80fd\u653e\u5728\u5982 ",(0,o.kt)("inlineCode",{parentName:"p"},"if"),"\u4e4b\u7c7b\u7684\u4ee3\u7801\u5757\u4e2d\u3002"),(0,o.kt)("p",{parentName:"li"},"\u5e76\u4e14\u7531\u4e8e\u8fd9\u4e2a\u7279\u6027\uff0c\u6211\u4eec\u4e0d\u80fd\u5728JS\u4ee3\u7801\u6267\u884c\u4e2d\u6839\u636e\u6761\u4ef6\u6765\u52a8\u6001\u52a0\u8f7d\u6a21\u5757\uff0c\u800c ",(0,o.kt)("inlineCode",{parentName:"p"},"require"),"\u53ef\u4ee5\u505a\u5230\u8fd9\u4e00\u70b9\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"require"),"\u662f",(0,o.kt)("strong",{parentName:"p"},"\u8fd0\u884c\u65f6\u52a0\u8f7d\u6a21\u5757"),"\u3002"),(0,o.kt)("p",{parentName:"li"},"\u597d\u5728\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"import()"),"\u6765\u5b9e\u73b0",(0,o.kt)("strong",{parentName:"p"},"\u8fd0\u884c\u65f6\u52a0\u8f7d\u6a21\u5757"),"\uff0c\u7ec4\u4ef6\u7684\u61d2\u52a0\u8f7d\u901a\u5e38\u5c31\u662f\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"import()"),"\u642d\u914d\u4ee3\u7801\u5206\u5272\u6765\u5b9e\u73b0\u7684\u3002"))))}c.isMDXComponent=!0}}]);