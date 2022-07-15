"use strict";(self.webpackChunkakara=self.webpackChunkakara||[]).push([[2531],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),f=c(t),m=i,d=f["".concat(s,".").concat(m)]||f[m]||p[m]||l;return t?r.createElement(d,o(o({ref:n},u),{},{components:t})):r.createElement(d,o({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,o=new Array(l);o[0]=f;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var c=2;c<l;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},6629:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return p}});var r=t(7462),i=t(3366),l=(t(7294),t(3905)),o=["components"],a={sidebarDepth:4},s="\u8bbe\u8ba1\u6a21\u5f0f",c={unversionedId:"\u8bbe\u8ba1\u6a21\u5f0f",id:"\u8bbe\u8ba1\u6a21\u5f0f",title:"\u8bbe\u8ba1\u6a21\u5f0f",description:"\u5355\u4f8b\u6a21\u5f0f",source:"@site/docs\\\u8bbe\u8ba1\u6a21\u5f0f.md",sourceDirName:".",slug:"/\u8bbe\u8ba1\u6a21\u5f0f",permalink:"/blog/docs/\u8bbe\u8ba1\u6a21\u5f0f",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\u8bbe\u8ba1\u6a21\u5f0f.md",tags:[],version:"current",frontMatter:{sidebarDepth:4},sidebar:"tutorialSidebar",previous:{title:"Docker",permalink:"/blog/docs/docker"},next:{title:"WebSocket",permalink:"/blog/docs/websocket"}},u={},p=[{value:"\u5355\u4f8b\u6a21\u5f0f",id:"\u5355\u4f8b\u6a21\u5f0f",level:3},{value:"\u53d1\u5e03-\u8ba2\u9605\u6a21\u5f0f",id:"\u53d1\u5e03-\u8ba2\u9605\u6a21\u5f0f",level:3},{value:"\u89c2\u5bdf\u8005\u6a21\u5f0f",id:"\u89c2\u5bdf\u8005\u6a21\u5f0f",level:3},{value:"MVC",id:"mvc",level:3},{value:"MVVM",id:"mvvm",level:3}],f={toc:p};function m(e){var n=e.components,t=(0,i.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u8bbe\u8ba1\u6a21\u5f0f"},"\u8bbe\u8ba1\u6a21\u5f0f"),(0,l.kt)("h3",{id:"\u5355\u4f8b\u6a21\u5f0f"},"\u5355\u4f8b\u6a21\u5f0f"),(0,l.kt)("p",null,"\u4e00\u4e2a\u7c7b\u53ea\u6709\u4e00\u4e2a\u5b9e\u4f8b"),(0,l.kt)("h3",{id:"\u53d1\u5e03-\u8ba2\u9605\u6a21\u5f0f"},"\u53d1\u5e03-\u8ba2\u9605\u6a21\u5f0f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'// Node\u4e2d\u7684EventEmitter \u5c31\u662f\u7528\u7684\u53d1\u5e03\u8ba2\u9605\u6a21\u5f0f\nclass EventEmitter {\n      constructor() {\n          this.list = {}\n      }\n\n      on(name, fn, type = 1) {\n          if (!this.list[name]) {\n              this.list[name] = []\n          }\n          this.list[name].push([fn, type])\n\n      }\n\n      once(name, fn, type = 0) {\n          this.on(name, fn, type)\n      }\n\n      emit(name, ...args) {\n          let fns = this.list[name]\n          if (!fns || fns.length === 0) return\n          fns.forEach((fn, index) => {\n              fn[0].apply(this, args)\n              if (fn[1] === 0) {\n                  fns.splice(index, 1)\n              }\n          })\n      }\n\n      remove(name, func) {\n          let fns = this.list[name]\n          if (!fns) {\n              this.list[name] = []\n          }\n          fns.forEach((fn, index) => {\n              if (fn[0] === func) {\n                  fns.splice(index, 1)\n              }\n          })\n      }\n  }\n\nlet bus = new EventEmitter()\n\nbus.on("click", (value) => {\n    console.log(value)\n})\n\nbus.emit("click", 111)\n')),(0,l.kt)("h3",{id:"\u89c2\u5bdf\u8005\u6a21\u5f0f"},"\u89c2\u5bdf\u8005\u6a21\u5f0f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"class Publisher {\n      constructor() {\n          this.list = []\n      }\n\n      addListener(listener) {\n          this.list.push(listener)\n      }\n\n      removeListener(listener) {\n          this.list.forEach((item, index) => {\n              if (listener === item) {\n                  this.list.splice(index, 1)\n              }\n          })\n      }\n\n      notify(obj) {\n          this.list.forEach((item) => {\n              item.process(obj)\n          })\n      }\n  }\n\nclass Subscriber {\n    process(obj) {\n        console.log(obj.name)\n    }\n}\n")),(0,l.kt)("h3",{id:"mvc"},"MVC"),(0,l.kt)("p",null,"MVC (Model-View-Controller) \u5206\u4e3a\u4e09\u90e8\u5206"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Model\uff08\u6570\u636e\u6a21\u578b\uff09\uff1a\u6570\u636e"),(0,l.kt)("li",{parentName:"ul"},"View\uff08\u89c6\u56fe\uff09\uff1a\u7528\u6237\u754c\u9762"),(0,l.kt)("li",{parentName:"ul"},"Controller\uff08\u63a7\u5236\u5668\uff09\uff1a\u4e1a\u52a1\u903b\u8f91")),(0,l.kt)("p",null,"\u901a\u4fe1\u8fc7\u7a0b\u5982\u4e0b\uff0c\u6240\u6709\u901a\u4fe1\u90fd\u662f\u5355\u5411\u7684\u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"View \u4f20\u9001\u6307\u4ee4\u5230 Controller"),(0,l.kt)("li",{parentName:"ol"},"Controller \u5b8c\u6210\u4e1a\u52a1\u903b\u8f91\u540e\uff0c\u8981\u6c42 Model \u6539\u53d8\u72b6\u6001"),(0,l.kt)("li",{parentName:"ol"},"Model \u5c06\u65b0\u7684\u6570\u636e\u53d1\u9001\u5230 View\uff0c\u7528\u6237\u5f97\u5230\u53cd\u9988")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://www.ruanyifeng.com/blogimg/asset/2015/bg2015020105.png",alt:"\u8fc7\u7a0b"})),(0,l.kt)("h3",{id:"mvvm"},"MVVM"),(0,l.kt)("p",null,"MVVM\uff08Model-View-ViewModel\uff09\u4e5f\u5206\u4e3a\u4e09\u90e8\u5206\uff0c\u6570\u636e\u6a21\u578b\uff0c\u89c6\u56fe\uff0c\u89c6\u56fe\u6a21\u578b\u3002"),(0,l.kt)("p",null,"\u4e0eMVC\u7684\u533a\u522b\u4e4b\u4e00\u5728\u4e8eView\u548cModel\u4e4b\u95f4\u8981\u501f\u52a9ViewModel\u8fdb\u884c\u901a\u4fe1\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://www.ruanyifeng.com/blogimg/asset/2015/bg2015020110.png",alt:"\u901a\u4fe1\u8fc7\u7a0b"})))}m.isMDXComponent=!0}}]);