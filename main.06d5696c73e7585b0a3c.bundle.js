(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{196:function(module,exports){module.exports="# rc-footer 🐾\n\n[![NPM version][npm-image]][npm-url]\n[![build status][travis-image]][travis-url]\n[![Test coverage][coveralls-image]][coveralls-url]\n[![david deps][david-image]][david-url]\n[![david devDeps][david-dev-image]][david-dev-url]\n[![npm download][download-image]][download-url]\n\n[npm-image]: http://img.shields.io/npm/v/rc-footer.svg?style=flat-square\n[npm-url]: http://npmjs.org/package/rc-footer\n[travis-image]: https://img.shields.io/travis/react-component/footer.svg?style=flat-square\n[travis-url]: https://travis-ci.org/react-component/footer\n[coveralls-image]: https://img.shields.io/coveralls/react-component/footer.svg?style=flat-square\n[coveralls-url]: https://coveralls.io/r/react-component/footer?branch=master\n[david-image]: https://david-dm.org/react-component/footer/status.svg?style=flat-square\n[david-dev-url]: https://david-dm.org/react-component/footer?type=dev\n[david-dev-image]: https://david-dm.org/react-component/footer/dev-status.svg?style=flat-square\n[david-url]: https://david-dm.org/react-component/footer\n[download-image]: https://img.shields.io/npm/dm/rc-footer.svg?style=flat-square\n[download-url]: https://npmjs.org/package/rc-footer\n\nPretty Footer react component used in [ant.design](https://ant.design).\n\n![](https://gw.alipayobjects.com/zos/antfincdn/z4ie3X8x6u/1cb23945-ec67-45a3-b521-f8da62e12255.png)\n\n## Live Demo\n\nhttps://react-component.github.io/footer/\n\n## Install\n\n[![rc-footer](https://nodei.co/npm/rc-footer.png)](https://npmjs.org/package/rc-footer)\n\n## Usage\n\n```js\nimport Footer from 'rc-footer';\nimport { render } from 'react-dom';\n\nrender(\n  <Footer\n    columns={[\n      {\n        icon: <img src=\"https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg\" />,\n        title: '语雀',\n        url: 'https://yuque.com',\n        description: '知识创作与分享工具',\n        openExternal: true,\n      },\n    ]}\n    bottom=\"Made with ❤️ by AFX\"\n  />,\n  mountNode\n);\n```\n\n## API\n\n| Property       | Type                     | Default   | Description                                              |\n| -------------- | ------------------------ | --------- | -------------------------------------------------------- |\n| prefixCls      | string                   | rc-footer |                                                          |\n| className      | string                   | ''        | additional class name of footer                          |\n| style          | React.CSSProperties      |           | style properties of footer                               |\n| columns        | [Column](#Column) Array  | []        | columns data inside footer                               |\n| bottom         | ReactNode                |           | extra bottom area beneath footer columns                 |\n\n### Column\n\n| Property       | Type                       | Default   | Description                                            |\n| -------------- | -------------------------- | --------- | ------------------------------------------------------ |\n| icon           | ReactNode                  |           | icon that before column title                          |\n| title          | ReactNode                  |           | title of column                                        |\n| items          | [Item](#Column-Item) Array | []        | items data inside each column                          |\n\n### Column Item\n\n| Property       | Type                     | Default   | Description                                              |\n| -------------- | ------------------------ | --------- | -------------------------------------------------------- |\n| icon           | ReactNode                |           | icon that before column title                            |\n| title          | ReactNode                |           | title of column                                          |\n| description    | ReactNode                |           | description of column, come after title                  |\n| url            | string                   |           | link url of item title                                   |\n| openExternal   | boolean                  | false     | link target would be `_blank` if `openExternal` is ture  |\n\n\n## Development\n\n```\nnpm install\nnpm start\n```\n\n## License\n\nrc-footer is released under the MIT license.\n"},315:function(module,exports){module.exports="import '../assets/index.less';\nimport React from 'react';\nimport Footer from '../src/index';\n\nexport default function App() {\n  return (\n    <div>\n      <Footer\n        columns={[\n          {\n            title: '相关资源',\n            items: [\n              {\n                title: 'Ant Design Pro',\n                url: 'https://pro.ant.design/',\n                openExternal: true,\n              },\n              {\n                title: 'Ant Design Mobile',\n                url: 'https://mobile.ant.design/',\n                openExternal: true,\n              },\n              {\n                title: 'Kitchen',\n                url: 'https://kitchen.alipay.com/',\n                description: 'Sketch 工具集',\n              },\n            ],\n          },\n          {\n            title: '社区',\n            items: [\n              {\n                title: 'Ant Design Pro',\n                url: 'https://pro.ant.design/',\n                openExternal: true,\n              },\n              {\n                title: 'Ant Design Mobile',\n                url: 'https://mobile.ant.design/',\n                openExternal: true,\n              },\n              {\n                title: 'Kitchen',\n                url: 'https://kitchen.alipay.com/',\n                description: 'Sketch 工具集',\n              },\n            ],\n          },\n          {\n            title: '帮助',\n            items: [\n              {\n                title: 'Ant Design Pro',\n                url: 'https://pro.ant.design/',\n                openExternal: true,\n              },\n              {\n                title: 'Ant Design Mobile',\n                url: 'https://mobile.ant.design/',\n                openExternal: true,\n              },\n              {\n                title: 'Kitchen',\n                url: 'https://kitchen.alipay.com/',\n                description: 'Sketch 工具集',\n              },\n            ],\n          },\n          {\n            icon: (\n              <img\n                src=\"https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg\"\n                alt=\"more products\"\n              />\n            ),\n            title: '更多产品',\n            items: [\n              {\n                icon: (\n                  <img\n                    src=\"https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg\"\n                    alt=\"yuque\"\n                  />\n                ),\n                title: '语雀',\n                url: 'https://yuque.com',\n                description: '知识创作与分享工具',\n                openExternal: true,\n              },\n              {\n                icon: (\n                  <img\n                    src=\"https://gw.alipayobjects.com/zos/rmsportal/uHocHZfNWZOdsRUonZNr.png\"\n                    alt=\"yuque\"\n                  />\n                ),\n                title: '云凤蝶',\n                url: 'https://yunfengdie.com',\n                description: '中台建站平台',\n                openExternal: true,\n              },\n            ],\n          },\n        ]}\n        bottom=\"Made with ❤️ by AFX\"\n      />\n    </div>\n  );\n}\n"},317:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(812);var react=__webpack_require__(1),react_default=__webpack_require__.n(react),classnames=__webpack_require__(316),classnames_default=__webpack_require__.n(classnames);var column=({prefixCls:prefixCls,icon:icon,title:title,items:items=[]})=>react_default.a.createElement("div",{className:`${prefixCls}-column`},(title||icon)&&react_default.a.createElement("h2",null,icon&&react_default.a.createElement("span",{className:`${prefixCls}-column-icon`},icon),title),items.map((item,i)=>react_default.a.createElement("div",{className:`${prefixCls}-item`,key:i},react_default.a.createElement("a",{href:item.url,target:item.openExternal?"_blank":void 0},item.icon&&react_default.a.createElement("span",{className:`${prefixCls}-item-icon`},item.icon),item.title),item.description&&react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement("span",{className:`${prefixCls}-item-separator`},"-"),react_default.a.createElement("span",{className:`${prefixCls}-item-description`},item.description)))));var src=({prefixCls:prefixCls="rc-footer",className:className,bottom:bottom,columns:columns,...restProps})=>{const footerClassName=classnames_default()(`${prefixCls}`,className);return react_default.a.createElement("footer",Object.assign({className:footerClassName},restProps),react_default.a.createElement("section",{className:`${prefixCls}-container`},columns&&columns.length>0&&react_default.a.createElement("section",{className:`${prefixCls}-columns`},columns.map(({title:title,icon:icon,items:items=[]},i)=>react_default.a.createElement(column,{key:i,prefixCls:prefixCls,title:title,icon:icon,items:items})))),bottom&&react_default.a.createElement("section",{className:`${prefixCls}-bottom`},react_default.a.createElement("div",{className:`${prefixCls}-bottom-container`},bottom)))};function App(){return react_default.a.createElement("div",null,react_default.a.createElement(src,{columns:[{title:"相关资源",items:[{title:"Ant Design Pro",url:"https://pro.ant.design/",openExternal:!0},{title:"Ant Design Mobile",url:"https://mobile.ant.design/",openExternal:!0},{title:"Kitchen",url:"https://kitchen.alipay.com/",description:"Sketch 工具集"}]},{title:"社区",items:[{title:"Ant Design Pro",url:"https://pro.ant.design/",openExternal:!0},{title:"Ant Design Mobile",url:"https://mobile.ant.design/",openExternal:!0},{title:"Kitchen",url:"https://kitchen.alipay.com/",description:"Sketch 工具集"}]},{title:"帮助",items:[{title:"Ant Design Pro",url:"https://pro.ant.design/",openExternal:!0},{title:"Ant Design Mobile",url:"https://mobile.ant.design/",openExternal:!0},{title:"Kitchen",url:"https://kitchen.alipay.com/",description:"Sketch 工具集"}]},{icon:react_default.a.createElement("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",alt:"more products"}),title:"更多产品",items:[{icon:react_default.a.createElement("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",alt:"yuque"}),title:"语雀",url:"https://yuque.com",description:"知识创作与分享工具",openExternal:!0},{icon:react_default.a.createElement("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/uHocHZfNWZOdsRUonZNr.png",alt:"yuque"}),title:"云凤蝶",url:"https://yunfengdie.com",description:"中台建站平台",openExternal:!0}]}],bottom:"Made with ❤️ by AFX"}))}__webpack_require__.d(__webpack_exports__,"a",(function(){return App})),App.__docgenInfo={description:"",methods:[],displayName:"App"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["examples/simple.js"]={name:"App",docgenInfo:App.__docgenInfo,path:"examples/simple.js"})},318:function(module,exports,__webpack_require__){__webpack_require__(319),__webpack_require__(414),module.exports=__webpack_require__(415)},342:function(module,exports){},415:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(69),_storybook_addon_notes__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(307),_storybook_addon_options__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(308),storybook_addon_source__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(309),storybook_addon_source__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(storybook_addon_source__WEBPACK_IMPORTED_MODULE_3__);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.addDecorator)(_storybook_addon_notes__WEBPACK_IMPORTED_MODULE_1__.withNotes),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.addDecorator)(storybook_addon_source__WEBPACK_IMPORTED_MODULE_3___default.a),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.addDecorator)(Object(_storybook_addon_options__WEBPACK_IMPORTED_MODULE_2__.withOptions)({name:"rc-footer",url:"https://react-component.github.io/footer",title:"rc-footer"})),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)((function(){__webpack_require__(514)}),module)}.call(this,__webpack_require__(220)(module))},514:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),react_markdown__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(310),react_markdown__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_1__),_storybook_addon_a11y__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(311),_storybook_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(69),_storybook_addon_console__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(312),_storybook_addon_viewport__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(313),_storybook_addon_info__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(314),rc_source_loader_examples_simple__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(315),rc_source_loader_examples_simple__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(rc_source_loader_examples_simple__WEBPACK_IMPORTED_MODULE_7__),_examples_simple__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(317),_README_md__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(196),_README_md__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(_README_md__WEBPACK_IMPORTED_MODULE_9__);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_3__.storiesOf)("rc-footer",module).addDecorator(_storybook_addon_a11y__WEBPACK_IMPORTED_MODULE_2__.checkA11y).addDecorator(_storybook_addon_info__WEBPACK_IMPORTED_MODULE_6__.withInfo).addDecorator((function(storyFn,context){return Object(_storybook_addon_console__WEBPACK_IMPORTED_MODULE_4__.withConsole)()(storyFn)(context)})).addDecorator(Object(_storybook_addon_viewport__WEBPACK_IMPORTED_MODULE_5__.withViewport)()).add("readMe",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"markdown-body entry-content",style:{padding:24}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_markdown__WEBPACK_IMPORTED_MODULE_1___default.a,{escapeHtml:!1,source:_README_md__WEBPACK_IMPORTED_MODULE_9___default.a}))}),{source:{code:_README_md__WEBPACK_IMPORTED_MODULE_9___default.a}}).add("simple",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_examples_simple__WEBPACK_IMPORTED_MODULE_8__.a,null)}),{source:{code:rc_source_loader_examples_simple__WEBPACK_IMPORTED_MODULE_7___default.a}})}.call(this,__webpack_require__(220)(module))},707:function(module,exports,__webpack_require__){var map={"./nestedObjectAssign":284,"./nestedObjectAssign.js":284};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=707},812:function(module,exports,__webpack_require__){var content=__webpack_require__(813);"string"==typeof content&&(content=[[module.i,content,""]]);var options={hmr:!0,transform:void 0,insertInto:void 0};__webpack_require__(815)(content,options);content.locals&&(module.exports=content.locals)},813:function(module,exports,__webpack_require__){(module.exports=__webpack_require__(814)(!1)).push([module.i,".rc-footer {\n  position: relative;\n  clear: both;\n  color: rgba(255, 255, 255, 0.4);\n  font-size: 14px;\n  line-height: 1.5;\n  background-color: #000;\n}\n.rc-footer a {\n  transition: all 0.3s;\n  color: rgba(255, 255, 255, 0.9);\n  text-decoration: none;\n}\n.rc-footer a:hover {\n  color: #40a9ff;\n}\n.rc-footer-container {\n  width: 100%;\n  max-width: 1200px;\n  padding: 80px 0;\n  margin: auto;\n}\n.rc-footer-columns {\n  display: flex;\n  justify-content: space-around;\n}\n.rc-footer-column h2 {\n  position: relative;\n  margin: 0 auto 24px;\n  font-weight: 500;\n  font-size: 16px;\n  color: #fff;\n}\n.rc-footer-column-icon {\n  margin-right: 0.5em;\n  width: 22px;\n  display: inline-block;\n  vertical-align: middle;\n  top: -1px;\n  position: relative;\n  text-align: center;\n}\n.rc-footer-column-icon > span,\n.rc-footer-column-icon > svg,\n.rc-footer-column-icon img {\n  width: 100%;\n  display: block;\n}\n.rc-footer-item {\n  margin: 12px 0;\n}\n.rc-footer-item-icon {\n  margin-right: 0.4em;\n  width: 16px;\n  display: inline-block;\n  vertical-align: middle;\n  top: -1px;\n  position: relative;\n  text-align: center;\n}\n.rc-footer-item-icon > span,\n.rc-footer-item-icon > svg,\n.rc-footer-item-icon img {\n  width: 100%;\n  display: block;\n}\n.rc-footer-item-separator {\n  margin: 0 0.3em;\n}\n.rc-footer-bottom-container {\n  border-top: 1px solid rgba(255, 255, 255, 0.25);\n  width: 100%;\n  max-width: 1200px;\n  text-align: center;\n  margin: 0 auto;\n  padding: 16px 0;\n  line-height: 32px;\n  font-size: 16px;\n}\n@media only screen and (max-width: 767.99px) {\n  .rc-footer {\n    text-align: center;\n  }\n  .rc-footer-container {\n    padding: 40px 0;\n  }\n  .rc-footer-columns {\n    display: block;\n  }\n  .rc-footer-column {\n    display: block;\n    margin-bottom: 40px;\n  }\n  .rc-footer-column:last-child {\n    margin-bottom: 0;\n  }\n}\n",""])}},[[318,1,2]]]);
//# sourceMappingURL=main.06d5696c73e7585b0a3c.bundle.js.map