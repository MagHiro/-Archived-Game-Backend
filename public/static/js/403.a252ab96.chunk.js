(self.webpackChunkcrossfire=self.webpackChunkcrossfire||[]).push([[403],{7794:function(e,t,a){"use strict";a.d(t,{Z:function(){return i}});a(2791);var r=a(4569),n=a.n(r),o=a(6001);function i(){var e=o.Z.getItem("token");return{http:n().create({baseURL:"http://127.0.0.1:8000/api",headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(e)}})}}},6001:function(e,t,a){"use strict";var r=a(5671),n=a(3144),o=new(a(8190).Z),i=function(){function e(){(0,r.Z)(this,e)}return(0,n.Z)(e,[{key:"getItem",value:function(e){return o.get(e)}},{key:"setItem",value:function(e,t,a){o.set(e,t,a)}},{key:"removeItem",value:function(e){o.remove(e)}}]),e}();t.Z=new i},1403:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return P}});var r=a(2791),n=a(2292),o=a(4165),i=a(5861),_=a(885),s=(a(4569),a(7022)),l=a(9140),c=a(6048),p=a.n(c),u=a(7794),d=a(184);var f=function(){var e=(0,r.useState)([]),t=(0,_.Z)(e,2),a=t[0],n=t[1],c=(0,r.useState)(0),f=(0,_.Z)(c,2),g=f[0],P=f[1],E=(0,u.Z)().http;(0,r.useEffect)((function(){b()}),[]);var b=function(){var e=(0,i.Z)((0,o.Z)().mark((function e(){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.get("/index?page=1").then((function(e){P(Math.ceil(e.data.total/e.data.per_page)),n(e.data.data)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=(0,i.Z)((0,o.Z)().mark((function e(t){var a;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.selected+1,e.next=3,E.get("/index?page=".concat(a)).then((function(e){n(e.data.data)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,d.jsxs)(s.Z,{className:"News2",children:[a.map((function(e){return(0,d.jsx)("a",{href:"news/"+e.id+e.judul,style:{textDecoration:"none"},children:(0,d.jsxs)(l.Z,{children:[(0,d.jsx)("img",{src:"https://crossfireapi.herokuapp.com/uploads/"+e.image_name}),(0,d.jsxs)("section",{children:[(0,d.jsx)("h2",{children:e.judul}),(0,d.jsx)("p",{dangerouslySetInnerHTML:{__html:e.excerpt}}),(0,d.jsx)("span",{children:(t=Date(e.created_at),t.split("T")[0])})]})]},e.id)});var t})),(0,d.jsx)(p(),{previousLabel:"Prev",nextLabel:"Next",breakLabel:"...",pageCount:g,marginPagesDisplayed:2,pageRangeDisplayed:3,onPageChange:v,containerClassName:"pagination justify-content-center",pageClassName:"page-item",pageLinkClassName:"page-link",previousClassName:"page-item",previousLinkClassName:"page-link",nextClassName:"page-item",nextLinkClassName:"page-link",breakClassName:"page-item",breakLinkClassName:"page-link",activeClassName:"active"})]})},g=a(4270);var P=function(){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(g.q,{children:(0,d.jsx)("title",{children:"CFL Indonesia - News Page"})}),(0,d.jsx)(n.Z,{}),(0,d.jsx)(f,{})]})}},2292:function(e,t,a){"use strict";a(2791);var r=a(9905),n=a(3949),o=a(184);t.Z=function(){return(0,o.jsx)(r.Parallax,{className:"News1",blur:4,bgImage:n,bgImageStyle:{opacity:".5"},strength:0,children:(0,o.jsx)("h1",{children:"News Page"})})}},9140:function(e,t,a){"use strict";a.d(t,{Z:function(){return R}});var r=a(1413),n=a(5987),o=a(1694),i=a.n(o),_=a(2791),s=a(162),l=a(6543),c=a(7472),p=a(184),u=["bsPrefix","className","variant","as"],d=_.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,_=e.variant,l=e.as,c=void 0===l?"img":l,d=(0,n.Z)(e,u),f=(0,s.vE)(a,"card-img");return(0,p.jsx)(c,(0,r.Z)({ref:t,className:i()(_?"".concat(f,"-").concat(_):f,o)},d))}));d.displayName="CardImg";var f=d,g=a(6040),P=["bsPrefix","className","as"],E=_.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,l=e.as,c=void 0===l?"div":l,u=(0,n.Z)(e,P),d=(0,s.vE)(a,"card-header"),f=(0,_.useMemo)((function(){return{cardHeaderBsPrefix:d}}),[d]);return(0,p.jsx)(g.Z.Provider,{value:f,children:(0,p.jsx)(c,(0,r.Z)((0,r.Z)({ref:t},u),{},{className:i()(o,d)}))})}));E.displayName="CardHeader";var b=E,v=["bsPrefix","className","bg","text","border","body","children","as"],m=(0,c.Z)("h5"),y=(0,c.Z)("h6"),h=(0,l.Z)("card-body"),C=(0,l.Z)("card-title",{Component:m}),L=(0,l.Z)("card-subtitle",{Component:y}),O=(0,l.Z)("card-link",{Component:"a"}),M=(0,l.Z)("card-text",{Component:"p"}),D=(0,l.Z)("card-footer"),k=(0,l.Z)("card-img-overlay"),x=_.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,_=e.bg,l=e.text,c=e.border,u=e.body,d=e.children,f=e.as,g=void 0===f?"div":f,P=(0,n.Z)(e,v),E=(0,s.vE)(a,"card");return(0,p.jsx)(g,(0,r.Z)((0,r.Z)({ref:t},P),{},{className:i()(o,E,_&&"bg-".concat(_),l&&"text-".concat(l),c&&"border-".concat(c)),children:u?(0,p.jsx)(h,{children:d}):d}))}));x.displayName="Card",x.defaultProps={body:!1};var R=Object.assign(x,{Img:f,Title:C,Subtitle:L,Body:h,Link:O,Text:M,Header:b,Footer:D,ImgOverlay:k})},7022:function(e,t,a){"use strict";var r=a(1413),n=a(5987),o=a(1694),i=a.n(o),_=a(2791),s=a(162),l=a(184),c=["bsPrefix","fluid","as","className"],p=_.forwardRef((function(e,t){var a=e.bsPrefix,o=e.fluid,_=e.as,p=void 0===_?"div":_,u=e.className,d=(0,n.Z)(e,c),f=(0,s.vE)(a,"container"),g="string"===typeof o?"-".concat(o):"-fluid";return(0,l.jsx)(p,(0,r.Z)((0,r.Z)({ref:t},d),{},{className:i()(u,o?"".concat(f).concat(g):f)}))}));p.displayName="Container",p.defaultProps={fluid:!1},t.Z=p},6048:function(module,__unused_webpack_exports,__webpack_require__){var t;t=function(__WEBPACK_EXTERNAL_MODULE__98__){return function(){var __webpack_modules__={759:function(e,t,a){"use strict";a.d(t,{Z:function(){return d}});var r,n=a(98),o=a.n(n),i=a(697),_=a.n(i);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},s.apply(this,arguments)}e=a.hmd(e),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e),"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var l=function(e){var t=e.breakLabel,a=e.breakClassName,r=e.breakLinkClassName,n=e.breakHandler,i=e.getEventListener,_=a||"break";return o().createElement("li",{className:_},o().createElement("a",s({className:r,role:"button",tabIndex:"0",onKeyPress:n},i(n)),t))};l.propTypes={breakLabel:_().oneOfType([_().string,_().node]),breakClassName:_().string,breakLinkClassName:_().string,breakHandler:_().func.isRequired,getEventListener:_().func.isRequired};var c,p,u=l,d=u;(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(c.register(l,"BreakView","/home/yoan/work/oss/react-paginate/react_components/BreakView.js"),c.register(u,"default","/home/yoan/work/oss/react-paginate/react_components/BreakView.js")),(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&p(e)},770:function(e,t,a){"use strict";a.d(t,{Z:function(){return d}});var r,n=a(98),o=a.n(n),i=a(697),_=a.n(i);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},s.apply(this,arguments)}e=a.hmd(e),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e),"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var l=function(e){var t=e.pageClassName,a=e.pageLinkClassName,r=e.page,n=e.selected,i=e.activeClassName,_=e.activeLinkClassName,l=e.getEventListener,c=e.pageSelectedHandler,p=e.href,u=e.extraAriaContext,d=e.pageLabelBuilder,f=e.rel,g=e.ariaLabel||"Page "+r+(u?" "+u:""),P=null;return n&&(P="page",g=e.ariaLabel||"Page "+r+" is your current page",t=void 0!==t?t+" "+i:i,void 0!==a?void 0!==_&&(a=a+" "+_):a=_),o().createElement("li",{className:t},o().createElement("a",s({rel:f,role:p?void 0:"button",className:a,href:p,tabIndex:n?"-1":"0","aria-label":g,"aria-current":P,onKeyPress:c},l(c)),d(r)))};l.propTypes={pageSelectedHandler:_().func.isRequired,selected:_().bool.isRequired,pageClassName:_().string,pageLinkClassName:_().string,activeClassName:_().string,activeLinkClassName:_().string,extraAriaContext:_().string,href:_().string,ariaLabel:_().string,page:_().number.isRequired,getEventListener:_().func.isRequired,pageLabelBuilder:_().func.isRequired,rel:_().string};var c,p,u=l,d=u;(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(c.register(l,"PageView","/home/yoan/work/oss/react-paginate/react_components/PageView.js"),c.register(u,"default","/home/yoan/work/oss/react-paginate/react_components/PageView.js")),(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&p(e)},214:function _(module,__webpack_exports__,__nested_webpack_require_5475__){"use strict";__nested_webpack_require_5475__.d(__webpack_exports__,{Z:function(){return PaginationBoxView}});var react__WEBPACK_IMPORTED_MODULE_0__=__nested_webpack_require_5475__(98),react__WEBPACK_IMPORTED_MODULE_0___default=__nested_webpack_require_5475__.n(react__WEBPACK_IMPORTED_MODULE_0__),prop_types__WEBPACK_IMPORTED_MODULE_1__=__nested_webpack_require_5475__(697),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__nested_webpack_require_5475__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__),_PageView__WEBPACK_IMPORTED_MODULE_2__=__nested_webpack_require_5475__(770),_BreakView__WEBPACK_IMPORTED_MODULE_3__=__nested_webpack_require_5475__(759),_utils__WEBPACK_IMPORTED_MODULE_4__=__nested_webpack_require_5475__(923),enterModule;function _typeof(e){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof(e)}function _extends(){return _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},_extends.apply(this,arguments)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,a){return t&&_defineProperties(e.prototype,t),a&&_defineProperties(e,a),e}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return _setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},_setPrototypeOf(e,t)}function _createSuper(e){var t=_isNativeReflectConstruct();return function(){var a,r=_getPrototypeOf(e);if(t){var n=_getPrototypeOf(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return _possibleConstructorReturn(this,a)}}function _possibleConstructorReturn(e,t){if(t&&("object"===_typeof(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(e)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},_getPrototypeOf(e)}function _defineProperty(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}module=__nested_webpack_require_5475__.hmd(module),enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},PaginationBoxView=function(_Component){_inherits(PaginationBoxView,_Component);var _super=_createSuper(PaginationBoxView);function PaginationBoxView(e){var t,a;return _classCallCheck(this,PaginationBoxView),_defineProperty(_assertThisInitialized(t=_super.call(this,e)),"handlePreviousPage",(function(e){var a=t.state.selected;t.handleClick(e,null,a>0?a-1:void 0,{isPrevious:!0})})),_defineProperty(_assertThisInitialized(t),"handleNextPage",(function(e){var a=t.state.selected,r=t.props.pageCount;t.handleClick(e,null,a<r-1?a+1:void 0,{isNext:!0})})),_defineProperty(_assertThisInitialized(t),"handlePageSelected",(function(e,a){if(t.state.selected===e)return t.callActiveCallback(e),void t.handleClick(a,null,void 0,{isActive:!0});t.handleClick(a,null,e)})),_defineProperty(_assertThisInitialized(t),"handlePageChange",(function(e){t.state.selected!==e&&(t.setState({selected:e}),t.callCallback(e))})),_defineProperty(_assertThisInitialized(t),"getEventListener",(function(e){return _defineProperty({},t.props.eventListener,e)})),_defineProperty(_assertThisInitialized(t),"handleClick",(function(e,a,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=n.isPrevious,i=void 0!==o&&o,_=n.isNext,s=void 0!==_&&_,l=n.isBreak,c=void 0!==l&&l,p=n.isActive,u=void 0!==p&&p;e.preventDefault?e.preventDefault():e.returnValue=!1;var d=t.state.selected,f=t.props.onClick,g=r;if(f){var P=f({index:a,selected:d,nextSelectedPage:r,event:e,isPrevious:i,isNext:s,isBreak:c,isActive:u});if(!1===P)return;Number.isInteger(P)&&(g=P)}void 0!==g&&t.handlePageChange(g)})),_defineProperty(_assertThisInitialized(t),"handleBreakClick",(function(e,a){var r=t.state.selected;t.handleClick(a,e,r<e?t.getForwardJump():t.getBackwardJump(),{isBreak:!0})})),_defineProperty(_assertThisInitialized(t),"callCallback",(function(e){void 0!==t.props.onPageChange&&"function"==typeof t.props.onPageChange&&t.props.onPageChange({selected:e})})),_defineProperty(_assertThisInitialized(t),"callActiveCallback",(function(e){void 0!==t.props.onPageActive&&"function"==typeof t.props.onPageActive&&t.props.onPageActive({selected:e})})),_defineProperty(_assertThisInitialized(t),"getElementPageRel",(function(e){var a=t.state.selected,r=t.props,n=r.nextPageRel,o=r.prevPageRel,i=r.selectedPageRel;return a-1===e?o:a===e?i:a+1===e?n:void 0})),_defineProperty(_assertThisInitialized(t),"pagination",(function(){var e=[],a=t.props,r=a.pageRangeDisplayed,n=a.pageCount,o=a.marginPagesDisplayed,i=a.breakLabel,_=a.breakClassName,s=a.breakLinkClassName,l=t.state.selected;if(n<=r)for(var c=0;c<n;c++)e.push(t.getPageElement(c));else{var p=r/2,u=r-p;l>n-r/2?p=r-(u=n-l):l<r/2&&(u=r-(p=l));var d,f,g=function(e){return t.getPageElement(e)},P=[];for(d=0;d<n;d++){var E=d+1;E<=o||E>n-o||d>=l-p&&d<=l+(0===l&&r>1?u-1:u)?P.push({type:"page",index:d,display:g(d)}):i&&P.length>0&&P[P.length-1].display!==f&&(r>0||o>0)&&(f=react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_BreakView__WEBPACK_IMPORTED_MODULE_3__.Z,{key:d,breakLabel:i,breakClassName:_,breakLinkClassName:s,breakHandler:t.handleBreakClick.bind(null,d),getEventListener:t.getEventListener}),P.push({type:"break",index:d,display:f}))}P.forEach((function(t,a){var r=t;"break"===t.type&&P[a-1]&&"page"===P[a-1].type&&P[a+1]&&"page"===P[a+1].type&&P[a+1].index-P[a-1].index<=2&&(r={type:"page",index:t.index,display:g(t.index)}),e.push(r.display)}))}return e})),void 0!==e.initialPage&&void 0!==e.forcePage&&console.warn("(react-paginate): Both initialPage (".concat(e.initialPage,") and forcePage (").concat(e.forcePage,") props are provided, which is discouraged.")+" Use exclusively forcePage prop for a controlled component.\nSee https://reactjs.org/docs/forms.html#controlled-components"),a=e.initialPage?e.initialPage:e.forcePage?e.forcePage:0,t.state={selected:a},t}return _createClass(PaginationBoxView,[{key:"componentDidMount",value:function(){var e=this.props,t=e.initialPage,a=e.disableInitialCallback,r=e.extraAriaContext,n=e.pageCount,o=e.forcePage;void 0===t||a||this.callCallback(t),r&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead."),Number.isInteger(n)||console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(n,"). Did you forget a Math.ceil()?")),void 0!==t&&t>n-1&&console.warn("(react-paginate): The initialPage prop provided is greater than the maximum page index from pageCount prop (".concat(t," > ").concat(n-1,").")),void 0!==o&&o>n-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(o," > ").concat(n-1,")."))}},{key:"componentDidUpdate",value:function(e){void 0!==this.props.forcePage&&this.props.forcePage!==e.forcePage&&(this.props.forcePage>this.props.pageCount-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(this.props.forcePage," > ").concat(this.props.pageCount-1,").")),this.setState({selected:this.props.forcePage})),Number.isInteger(e.pageCount)&&!Number.isInteger(this.props.pageCount)&&console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(this.props.pageCount,"). Did you forget a Math.ceil()?"))}},{key:"getForwardJump",value:function(){var e=this.state.selected,t=this.props,a=t.pageCount,r=e+t.pageRangeDisplayed;return r>=a?a-1:r}},{key:"getBackwardJump",value:function(){var e=this.state.selected-this.props.pageRangeDisplayed;return e<0?0:e}},{key:"getElementHref",value:function(e){var t=this.props,a=t.hrefBuilder,r=t.pageCount,n=t.hrefAllControls;if(a)return n||e>=0&&e<r?a(e+1,r,this.state.selected):void 0}},{key:"ariaLabelBuilder",value:function(e){var t=e===this.state.selected;if(this.props.ariaLabelBuilder&&e>=0&&e<this.props.pageCount){var a=this.props.ariaLabelBuilder(e+1,t);return this.props.extraAriaContext&&!t&&(a=a+" "+this.props.extraAriaContext),a}}},{key:"getPageElement",value:function(e){var t=this.state.selected,a=this.props,r=a.pageClassName,n=a.pageLinkClassName,o=a.activeClassName,i=a.activeLinkClassName,_=a.extraAriaContext,s=a.pageLabelBuilder;return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PageView__WEBPACK_IMPORTED_MODULE_2__.Z,{key:e,pageSelectedHandler:this.handlePageSelected.bind(null,e),selected:t===e,rel:this.getElementPageRel(e),pageClassName:r,pageLinkClassName:n,activeClassName:o,activeLinkClassName:i,extraAriaContext:_,href:this.getElementHref(e),ariaLabel:this.ariaLabelBuilder(e),page:e+1,pageLabelBuilder:s,getEventListener:this.getEventListener})}},{key:"render",value:function(){var e=this.props.renderOnZeroPageCount;if(0===this.props.pageCount&&void 0!==e)return e?e(this.props):e;var t=this.props,a=t.disabledClassName,r=t.disabledLinkClassName,n=t.pageCount,o=t.className,i=t.containerClassName,_=t.previousLabel,s=t.previousClassName,l=t.previousLinkClassName,c=t.previousAriaLabel,p=t.prevRel,u=t.nextLabel,d=t.nextClassName,f=t.nextLinkClassName,g=t.nextAriaLabel,P=t.nextRel,E=this.state.selected,b=0===E,v=E===n-1,m="".concat((0,_utils__WEBPACK_IMPORTED_MODULE_4__.m)(s)).concat(b?" ".concat((0,_utils__WEBPACK_IMPORTED_MODULE_4__.m)(a)):""),y="".concat((0,_utils__WEBPACK_IMPORTED_MODULE_4__.m)(d)).concat(v?" ".concat((0,_utils__WEBPACK_IMPORTED_MODULE_4__.m)(a)):""),h="".concat((0,_utils__WEBPACK_IMPORTED_MODULE_4__.m)(l)).concat(b?" ".concat((0,_utils__WEBPACK_IMPORTED_MODULE_4__.m)(r)):""),C="".concat((0,_utils__WEBPACK_IMPORTED_MODULE_4__.m)(f)).concat(v?" ".concat((0,_utils__WEBPACK_IMPORTED_MODULE_4__.m)(r)):""),L=b?"true":"false",O=v?"true":"false";return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul",{className:o||i},react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li",{className:m},react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a",_extends({className:h,href:this.getElementHref(E-1),tabIndex:b?"-1":"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":L,"aria-label":c,rel:p},this.getEventListener(this.handlePreviousPage)),_)),this.pagination(),react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li",{className:y},react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a",_extends({className:C,href:this.getElementHref(E+1),tabIndex:v?"-1":"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":O,"aria-label":g,rel:P},this.getEventListener(this.handleNextPage)),u)))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),PaginationBoxView}(react__WEBPACK_IMPORTED_MODULE_0__.Component),reactHotLoader,leaveModule;_defineProperty(PaginationBoxView,"propTypes",{pageCount:prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired,pageRangeDisplayed:prop_types__WEBPACK_IMPORTED_MODULE_1___default().number,marginPagesDisplayed:prop_types__WEBPACK_IMPORTED_MODULE_1___default().number,previousLabel:prop_types__WEBPACK_IMPORTED_MODULE_1___default().node,previousAriaLabel:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,prevPageRel:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,prevRel:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,nextLabel:prop_types__WEBPACK_IMPORTED_MODULE_1___default().node,nextAriaLabel:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,nextPageRel:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,nextRel:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,breakLabel:prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,prop_types__WEBPACK_IMPORTED_MODULE_1___default().node]),hrefBuilder:prop_types__WEBPACK_IMPORTED_MODULE_1___default().func,hrefAllControls:prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool,onPageChange:prop_types__WEBPACK_IMPORTED_MODULE_1___default().func,onPageActive:prop_types__WEBPACK_IMPORTED_MODULE_1___default().func,onClick:prop_types__WEBPACK_IMPORTED_MODULE_1___default().func,initialPage:prop_types__WEBPACK_IMPORTED_MODULE_1___default().number,forcePage:prop_types__WEBPACK_IMPORTED_MODULE_1___default().number,disableInitialCallback:prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool,containerClassName:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,className:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,pageClassName:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,pageLinkClassName:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,pageLabelBuilder:prop_types__WEBPACK_IMPORTED_MODULE_1___default().func,activeClassName:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,activeLinkClassName:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,previousClassName:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,nextClassName:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,previousLinkClassName:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,nextLinkClassName:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,disabledClassName:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,disabledLinkClassName:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,breakClassName:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,breakLinkClassName:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,extraAriaContext:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,ariaLabelBuilder:prop_types__WEBPACK_IMPORTED_MODULE_1___default().func,eventListener:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,renderOnZeroPageCount:prop_types__WEBPACK_IMPORTED_MODULE_1___default().func,selectedPageRel:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string}),_defineProperty(PaginationBoxView,"defaultProps",{pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevPageRel:"prev",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextPageRel:"next",nextRel:"next",breakLabel:"...",disabledClassName:"disabled",disableInitialCallback:!1,pageLabelBuilder:function(e){return e},eventListener:"onClick",renderOnZeroPageCount:void 0,selectedPageRel:"canonical",hrefAllControls:!1}),reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&reactHotLoader.register(PaginationBoxView,"PaginationBoxView","/home/yoan/work/oss/react-paginate/react_components/PaginationBoxView.js"),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)},351:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return s}});var r,n=a(214);e=a.hmd(e),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e),"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var o,i,_=n.Z,s=_;(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&o.register(_,"default","/home/yoan/work/oss/react-paginate/react_components/index.js"),(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&i(e)},923:function(e,t,a){"use strict";var r,n,o;function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return null!=e?e:t}a.d(t,{m:function(){return i}}),e=a.hmd(e),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e),"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature,(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&n.register(i,"classNameIfDefined","/home/yoan/work/oss/react-paginate/react_components/utils.js"),(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&o(e)},703:function(e,t,a){"use strict";var r=a(414);function n(){}function o(){}o.resetWarningCache=n,e.exports=function(){function e(e,t,a,n,o,i){if(i!==r){var _=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw _.name="Invariant Violation",_}}function t(){return e}e.isRequired=e;var a={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:n};return a.PropTypes=a,a}},697:function(e,t,a){e.exports=a(703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},98:function(e){"use strict";e.exports=__WEBPACK_EXTERNAL_MODULE__98__}},__webpack_module_cache__={};function __nested_webpack_require_32585__(e){var t=__webpack_module_cache__[e];if(void 0!==t)return t.exports;var a=__webpack_module_cache__[e]={id:e,loaded:!1,exports:{}};return __webpack_modules__[e](a,a.exports,__nested_webpack_require_32585__),a.loaded=!0,a.exports}__nested_webpack_require_32585__.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return __nested_webpack_require_32585__.d(t,{a:t}),t},__nested_webpack_require_32585__.d=function(e,t){for(var a in t)__nested_webpack_require_32585__.o(t,a)&&!__nested_webpack_require_32585__.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},__nested_webpack_require_32585__.hmd=function(e){return(e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e},__nested_webpack_require_32585__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},__nested_webpack_require_32585__.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var __webpack_exports__=__nested_webpack_require_32585__(351);return __webpack_exports__}()},module.exports=t(__webpack_require__(2791))},3949:function(e,t,a){"use strict";e.exports=a.p+"static/media/news-header.d25b25981c2fbe03fe5b.webp"}}]);
//# sourceMappingURL=403.a252ab96.chunk.js.map