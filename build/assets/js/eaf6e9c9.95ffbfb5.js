"use strict";(self.webpackChunkakara=self.webpackChunkakara||[]).push([[6361],{3905:function(e,n,r){r.d(n,{Zo:function(){return l},kt:function(){return m}});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=t.createContext({}),u=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},l=function(e){var n=u(e.components);return t.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||o;return r?t.createElement(f,c(c({ref:n},l),{},{components:r})):t.createElement(f,c({ref:n},l))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var u=2;u<o;u++)c[u]=r[u];return t.createElement.apply(null,c)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7166:function(e,n,r){r.r(n),r.d(n,{assets:function(){return l},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return s}});var t=r(7462),a=r(3366),o=(r(7294),r(3905)),c=["components"],i={},p=void 0,u={unversionedId:"\u7b2c\u4e09\u65b9\u5e93",id:"\u7b2c\u4e09\u65b9\u5e93",title:"\u7b2c\u4e09\u65b9\u5e93",description:"Three Party Library",source:"@site/docs\\\u7b2c\u4e09\u65b9\u5e93.md",sourceDirName:".",slug:"/\u7b2c\u4e09\u65b9\u5e93",permalink:"/blog/docs/\u7b2c\u4e09\u65b9\u5e93",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\u7b2c\u4e09\u65b9\u5e93.md",tags:[],version:"current",frontMatter:{}},l={},s=[{value:"Three Party Library",id:"three-party-library",level:3},{value:"React-DnD",id:"react-dnd",level:5},{value:"Item Type",id:"item-type",level:6}],d={toc:s};function m(e){var n=e.components,r=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"three-party-library"},"Three Party Library"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u8bb0\u5f55\u4e00\u4e9b\u7279\u5b9a\u60c5\u51b5\u5f88\u6709\u7528\u7684\u7b2c\u4e09\u65b9\u5e93")),(0,o.kt)("h5",{id:"react-dnd"},"React-DnD"),(0,o.kt)("p",null,"\u63d0\u4f9b\u4e86\u62d6\u653e\u529f\u80fd\uff0c\u57fa\u4e8eReact\u548cHook"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { DndProvider } from 'react-dnd'\nimport { HTML5Backend } from 'react-dnd-html5-backend'\n\nfunction App() {\n    return (\n        <DndProvider backend={HTML5Backend}>\n            <Example />\n        </DndProvider>\n    )\n}\n")),(0,o.kt)("p",null,"\u88ab\u62d6\u653e\u5143\u7d20\uff0c\u5373",(0,o.kt)("inlineCode",{parentName:"p"},"Drag Source")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"function S() {\n    const [{ isDragging }, drag] = useDrag({\n        item: { type: 'test' },\n        collect: (monitor) => ({\n          isDragging: !!monitor.isDragging(), // \u5143\u7d20\u662f\u5426\u6b63\u5728\u88ab\u62d6\u52a8\n        }),\n      })\n    return (\n        <div ref={drag}></div>\n    )\n}\n")),(0,o.kt)("p",null,"\u653e\u7f6e\u533a\uff0c\u5373",(0,o.kt)("inlineCode",{parentName:"p"},"Drop Target")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"function T() {\n    const [{ isOver, canDrop }, drop] = useDrop({\n        accept: 'test', // \n        canDrop: () => canMoveKnight(x, y), // canDrop\u53d6\u51b3\u4e8e\u51fd\u6570\u7684\u8fd4\u56de\u503c\n        drop: () => moveKnight(x, y), // \u5f53\u5143\u7d20\u88ab\u62d6\u8fdb\u5230\u653e\u7f6e\u533a\u65f6\u8c03\u7528\u8be5\u51fd\u6570\n        collect: (monitor) => ({\n          isOver: !!monitor.isOver(), // \u5143\u7d20\u662f\u5426\u5904\u4e8e\u653e\u7f6e\u533a\u4e0a\u65b9\n          canDrop: !!monitor.canDrop(),\n        }),\n      })\n    return (\n        <div ref={drop}></div>\n    )\n}\n")),(0,o.kt)("h6",{id:"item-type"},"Item Type"),(0,o.kt)("p",null,"\u6bd4\u5982\u6709\u53ef\u62d6\u52a8\u5143\u7d20A\u548cB\uff0c\u653e\u7f6e\u533aC\u3002\u5e0c\u671b\u53ea\u6709A\u80fd\u88ab\u62d6\u653e\u5230C\u4e0a\u9762\uff0c\u53ef\u4ee5\u8fd9\u6837\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"// A\nitem: { type: 'a' }\n// B\nitem: { type: 'b' }\n// C\naccept: 'a'\n")))}m.isMDXComponent=!0}}]);