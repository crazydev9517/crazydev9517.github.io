(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[17],{1690:function(e,a,t){"use strict";t.r(a);var r=t(36),n=t(1),i=t(479),s=t(481),o=t(886),l=t(12),c=function(e){var a=["light-success","light-danger","light-warning","light-info","light-primary","light-secondary"][Math.floor(6*Math.random())];return e.avatar.length?Object(l.jsx)(s.a,{className:"me-50",img:e.avatar,width:"32",height:"32"}):Object(l.jsx)(s.a,{color:a,className:"me-50",content:e.createdby?e.createdby.name:"No name",initials:!0})},u=[{name:"Filename",sortable:!0,sortField:"filename",minWidth:"280px",cell:function(e){return Object(l.jsx)(i.b,{to:"/apps/invoice/preview/".concat(e.filename),children:"".concat(e.filename)})}},{name:"Type",sortable:!0,sortField:"type",minWidth:"150px",cell:function(e){return Object(l.jsx)(i.b,{to:"/apps/invoice/preview/".concat(e.type),children:"".concat(e.type)})}},{name:"Params",sortable:!0,sortField:"params",minWidth:"200px",cell:function(e){return Object(l.jsx)(i.b,{to:"/apps/invoice/preview/".concat(e.params),children:"".concat(e.params)})}},{name:"Done",sortable:!0,sortField:"done",minWidth:"50px",cell:function(e){return Object(l.jsx)(i.b,{to:"/apps/invoice/preview/".concat(e.done),children:"".concat(e.done)})}},{name:"Created",sortable:!0,sortField:"created",minWidth:"150px",cell:function(e){return Object(l.jsx)(i.b,{to:"/apps/invoice/preview/".concat(e.created),children:"".concat(e.created)})}},{name:"Createdby",sortable:!0,minWidth:"260px",sortField:"createdby.name",cell:function(e){var a=e.createdby?e.createdby.name:"No name";return Object(l.jsxs)("div",{className:"d-flex justify-content-left align-items-center",children:[c(e),Object(l.jsx)("div",{className:"d-flex flex-column",children:Object(l.jsx)("h6",{className:"user-name text-truncate mb-0",children:a})})]})}},{name:"Download",sortable:!0,sortField:"download",minWidth:"140px",cell:function(e){return Object(l.jsxs)(i.b,{to:"/apps/invoice/preview/".concat(e.download),children:[Object(l.jsx)(o.a,{width:25,size:20,viewBox:"0, 0, 25, 25"}),"".concat(e.download)]})}}],p=t(492),d=t.n(p),b=t(841),g=t(864),f=t(506),m=t.n(f),v=t(480),h=t(91),j=t(162),y=t(129),x=(t(538),t(501),function(e){var a=e.handleFilter,t=e.value,r=e.handleTypeValue,n=e.typeValue;return Object(l.jsx)("div",{className:"invoice-list-table-header w-100 py-2",children:Object(l.jsx)(h.ib,{children:Object(l.jsxs)(h.B,{lg:"12",className:"actions-right d-flex align-items-center justify-content-lg-end flex-lg-nowrap flex-wrap mt-lg-0 mt-1 pe-lg-1 p-0",children:[Object(l.jsx)(h.H,{className:"faq-search-input flex-grow-1 px-2",onSubmit:function(e){return e.preventDefault()},children:Object(l.jsxs)(h.L,{className:"input-group-merge",children:[Object(l.jsx)(h.K,{id:"search-invoice",className:"",type:"text",value:t,onChange:function(e){return a(e.target.value)},placeholder:"Search by Filename or Params"}),Object(l.jsx)(h.M,{children:Object(l.jsx)(b.a,{size:14})})]})}),Object(l.jsxs)(h.K,{className:"w-auto ",type:"select",value:n,onChange:r,children:[Object(l.jsx)("option",{value:"",children:"Select Type"}),Object(l.jsx)("option",{value:"participant",children:"Participant"}),Object(l.jsx)("option",{value:"user",children:"User"}),Object(l.jsx)("option",{value:"case report",children:"Case Report"})]})]})})})});a.default=function(){var e=Object(y.b)(),a=Object(y.c)((function(e){return e.groupUser})),t=Object(n.useState)(""),i=Object(r.a)(t,2),s=i[0],o=i[1],c=Object(n.useState)("desc"),p=Object(r.a)(c,2),b=p[0],f=p[1],C=Object(n.useState)("filename"),O=Object(r.a)(C,2),N=O[0],P=O[1],k=Object(n.useState)(1),L=Object(r.a)(k,2),w=L[0],E=L[1],S=Object(n.useState)(""),R=Object(r.a)(S,2),T=R[0],D=R[1];Object(n.useEffect)((function(){e(Object(j.b)({sort:b,q:s,sortColumn:N,page:w,type:T}))}),[e,a.data.length]);return Object(l.jsxs)("div",{className:"invoice-list-wrapper",children:[Object(l.jsx)(v.a,{breadCrumbTitle:"Organization users Exports for Quickcare (24)",breadCrumbParent:"Orgnization",breadCrumbParent2:"Group",breadCrumbParent3:"Users",breadCrumbActive:"Expert"}),Object(l.jsx)(h.l,{children:Object(l.jsx)("div",{className:"invoice-list-dataTable react-dataTable",children:Object(l.jsx)(m.a,{noHeader:!0,pagination:!0,sortServer:!0,paginationServer:!0,subHeader:!0,columns:u,responsive:!0,onSort:function(a,t){f(t),P(a.sortField),e(Object(j.b)({q:s,page:w,sort:t,status:statusValue,perPage:10,sortColumn:a.sortField}))},data:function(){var e={q:s,tyep:T},t=Object.keys(e).some((function(a){return e[a].length>0}));return a.data.length>0?a.data:0===a.data.length&&t?[]:a.allData.slice(0,10)}(),sortIcon:Object(l.jsx)(g.a,{}),className:"react-dataTable",defaultSortField:"invoiceId",paginationDefaultPage:w,paginationComponent:function(){var t=Number((a.total/10).toFixed(0));return Object(l.jsx)(d.a,{nextLabel:"",breakLabel:"...",previousLabel:"",pageCount:t||1,activeClassName:"active",breakClassName:"page-item",pageClassName:"page-item",breakLinkClassName:"page-link",nextLinkClassName:"page-link",pageLinkClassName:"page-link",nextClassName:"page-item next",previousLinkClassName:"page-link",previousClassName:"page-item prev",onPageChange:function(a){return function(a){e(Object(j.b)({sort:b,q:s,sortColumn:N,type:T,page:a.selected+1})),E(a.selected+1)}(a)},forcePage:0!==w?w-1:0,containerClassName:"pagination react-paginate justify-content-end p-1"})},subHeaderComponent:Object(l.jsx)(x,{value:s,typeValue:T,rowsPerPage:10,handleFilter:function(a){o(a),e(Object(j.b)({sort:b,q:a,sortColumn:N,page:w,perPage:10,type:T}))},handleTypeValue:function(a){D(a.target.value),e(Object(j.b)({sort:b,q:s,sortColumn:N,page:w,type:a.target.value}))}})})})})]})}},480:function(e,a,t){"use strict";var r=t(479),n=t(904),i=t(91),s=t(12);a.a=function(e){var a=e.breadCrumbTitle,t=e.breadCrumbParent,o=e.breadCrumbParent2,l=e.breadCrumbParent3,c=e.breadCrumbActive;return Object(s.jsx)("div",{className:"content-header row",children:Object(s.jsx)("div",{className:"content-header-left col-md-12 col-12 mb-2",children:Object(s.jsx)("div",{className:"row breadcrumbs-top",children:Object(s.jsxs)("div",{className:"col-12",children:[a?Object(s.jsx)("h2",{className:"content-header-title float-start mb-0",children:a}):"",Object(s.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(s.jsxs)(i.g,{children:[Object(s.jsxs)(i.h,{tag:"li",children:[Object(s.jsx)(n.a,{className:"mar_l-5",size:25,viewBox:"0, 0, 30, 30"}),Object(s.jsx)(r.b,{to:"/",children:"Home"})]}),Object(s.jsx)(i.h,{tag:"li",className:"text-primary",children:t}),o?Object(s.jsx)(i.h,{tag:"li",className:"text-primary",children:o}):"",l?Object(s.jsx)(i.h,{tag:"li",className:"text-primary",children:l}):"",Object(s.jsx)(i.h,{tag:"li",active:!0,children:c})]})})]})})})})}},492:function(e,a,t){var r;e.exports=(r=t(1),function(e){var a={};function t(r){if(a[r])return a[r].exports;var n=a[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,t),n.l=!0,n.exports}return t.m=e,t.c=a,t.d=function(e,a,r){t.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,a){if(1&a&&(e=t(e)),8&a)return e;if(4&a&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)t.d(r,n,function(a){return e[a]}.bind(null,n));return r},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},t.p="",t(t.s=4)}([function(e,a,t){e.exports=t(2)()},function(e,a){e.exports=r},function(e,a,t){"use strict";var r=t(3);function n(){}function i(){}i.resetWarningCache=n,e.exports=function(){function e(e,a,t,n,i,s){if(s!==r){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function a(){return e}e.isRequired=e;var t={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:a,element:e,elementType:e,instanceOf:a,node:e,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:i,resetWarningCache:n};return t.PropTypes=t,t}},function(e,a,t){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,a,t){"use strict";t.r(a);var r=t(1),n=t.n(r),i=t(0),s=t.n(i);function o(){return(o=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var l=function(e){var a=e.pageClassName,t=e.pageLinkClassName,r=e.page,i=e.selected,s=e.activeClassName,l=e.activeLinkClassName,c=e.getEventListener,u=e.pageSelectedHandler,p=e.href,d=e.extraAriaContext,b=e.pageLabelBuilder,g=e.ariaLabel||"Page "+r+(d?" "+d:""),f=null;return i&&(f="page",g=e.ariaLabel||"Page "+r+" is your current page",a=void 0!==a?a+" "+s:s,void 0!==t?void 0!==l&&(t=t+" "+l):t=l),n.a.createElement("li",{className:a},n.a.createElement("a",o({role:"button",className:t,href:p,tabIndex:"0","aria-label":g,"aria-current":f,onKeyPress:u},c(u)),b(r)))};l.propTypes={pageSelectedHandler:s.a.func.isRequired,selected:s.a.bool.isRequired,pageClassName:s.a.string,pageLinkClassName:s.a.string,activeClassName:s.a.string,activeLinkClassName:s.a.string,extraAriaContext:s.a.string,href:s.a.string,ariaLabel:s.a.string,page:s.a.number.isRequired,getEventListener:s.a.func.isRequired,pageLabelBuilder:s.a.func.isRequired};var c=l;function u(){return(u=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var p=function(e){var a=e.breakLabel,t=e.breakClassName,r=e.breakLinkClassName,i=e.breakHandler,s=e.getEventListener,o=t||"break";return n.a.createElement("li",{className:o},n.a.createElement("a",u({className:r,role:"button",tabIndex:"0",onKeyPress:i},s(i)),a))};p.propTypes={breakLabel:s.a.oneOfType([s.a.string,s.a.node]),breakClassName:s.a.string,breakLinkClassName:s.a.string,breakHandler:s.a.func.isRequired,getEventListener:s.a.func.isRequired};var d=p;function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(){return(g=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function f(e,a){for(var t=0;t<a.length;t++){var r=a[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,a){return(m=Object.setPrototypeOf||function(e,a){return e.__proto__=a,e})(e,a)}function v(e){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=y(e);if(a){var n=y(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return h(this,t)}}function h(e,a){if(a&&("object"===b(a)||"function"==typeof a))return a;if(void 0!==a)throw new TypeError("Derived constructors may only return object or undefined");return j(e)}function j(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function x(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}var C=function(e){!function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),a&&m(e,a)}(s,e);var a,t,r,i=v(s);function s(e){var a,t;return function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,s),x(j(a=i.call(this,e)),"handlePreviousPage",(function(e){var t=a.state.selected;e.preventDefault?e.preventDefault():e.returnValue=!1,t>0&&a.handlePageSelected(t-1,e)})),x(j(a),"handleNextPage",(function(e){var t=a.state.selected,r=a.props.pageCount;e.preventDefault?e.preventDefault():e.returnValue=!1,t<r-1&&a.handlePageSelected(t+1,e)})),x(j(a),"handlePageSelected",(function(e,t){t.preventDefault?t.preventDefault():t.returnValue=!1,a.state.selected!==e?(a.setState({selected:e}),a.callCallback(e)):a.callActiveCallback(e)})),x(j(a),"getEventListener",(function(e){return x({},a.props.eventListener,e)})),x(j(a),"handleBreakClick",(function(e,t){t.preventDefault?t.preventDefault():t.returnValue=!1;var r=a.state.selected;a.handlePageSelected(r<e?a.getForwardJump():a.getBackwardJump(),t)})),x(j(a),"callCallback",(function(e){void 0!==a.props.onPageChange&&"function"==typeof a.props.onPageChange&&a.props.onPageChange({selected:e})})),x(j(a),"callActiveCallback",(function(e){void 0!==a.props.onPageActive&&"function"==typeof a.props.onPageActive&&a.props.onPageActive({selected:e})})),x(j(a),"pagination",(function(){var e=[],t=a.props,r=t.pageRangeDisplayed,i=t.pageCount,s=t.marginPagesDisplayed,o=t.breakLabel,l=t.breakClassName,c=t.breakLinkClassName,u=a.state.selected;if(i<=r)for(var p=0;p<i;p++)e.push(a.getPageElement(p));else{var b,g,f,m=r/2,v=r-m;u>i-r/2?m=r-(v=i-u):u<r/2&&(v=r-(m=u));var h=function(e){return a.getPageElement(e)};for(b=0;b<i;b++)(g=b+1)<=s||g>i-s||b>=u-m&&b<=u+v?e.push(h(b)):o&&e[e.length-1]!==f&&(f=n.a.createElement(d,{key:b,breakLabel:o,breakClassName:l,breakLinkClassName:c,breakHandler:a.handleBreakClick.bind(null,b),getEventListener:a.getEventListener}),e.push(f))}return e})),void 0!==e.initialPage&&void 0!==e.forcePage&&console.warn("(react-paginate): Both initialPage (".concat(e.initialPage,") and forcePage (").concat(e.forcePage,") props are provided, which is discouraged.")+" Use exclusively forcePage prop for a controlled component.\nSee https://reactjs.org/docs/forms.html#controlled-components"),t=e.initialPage?e.initialPage:e.forcePage?e.forcePage:0,a.state={selected:t},a}return a=s,(t=[{key:"componentDidMount",value:function(){var e=this.props,a=e.initialPage,t=e.disableInitialCallback,r=e.extraAriaContext,n=e.pageCount;void 0===a||t||this.callCallback(a),r&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead."),Number.isInteger(n)||console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(this.props.pageCount,"). Did you forget a Math.ceil()?"))}},{key:"componentDidUpdate",value:function(e){void 0!==this.props.forcePage&&this.props.forcePage!==e.forcePage&&this.setState({selected:this.props.forcePage}),Number.isInteger(e.pageCount)&&!Number.isInteger(this.props.pageCount)&&console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(this.props.pageCount,"). Did you forget a Math.ceil()?"))}},{key:"getForwardJump",value:function(){var e=this.state.selected,a=this.props,t=a.pageCount,r=e+a.pageRangeDisplayed;return r>=t?t-1:r}},{key:"getBackwardJump",value:function(){var e=this.state.selected-this.props.pageRangeDisplayed;return e<0?0:e}},{key:"hrefBuilder",value:function(e){var a=this.props,t=a.hrefBuilder,r=a.pageCount;if(t&&e!==this.state.selected&&e>=0&&e<r)return t(e+1)}},{key:"ariaLabelBuilder",value:function(e){var a=e===this.state.selected;if(this.props.ariaLabelBuilder&&e>=0&&e<this.props.pageCount){var t=this.props.ariaLabelBuilder(e+1,a);return this.props.extraAriaContext&&!a&&(t=t+" "+this.props.extraAriaContext),t}}},{key:"getPageElement",value:function(e){var a=this.state.selected,t=this.props,r=t.pageClassName,i=t.pageLinkClassName,s=t.activeClassName,o=t.activeLinkClassName,l=t.extraAriaContext,u=t.pageLabelBuilder;return n.a.createElement(c,{key:e,pageSelectedHandler:this.handlePageSelected.bind(null,e),selected:a===e,pageClassName:r,pageLinkClassName:i,activeClassName:s,activeLinkClassName:o,extraAriaContext:l,href:this.hrefBuilder(e),ariaLabel:this.ariaLabelBuilder(e),page:e+1,pageLabelBuilder:u,getEventListener:this.getEventListener})}},{key:"render",value:function(){var e=this.props.renderOnZeroPageCount;if(0===this.props.pageCount&&void 0!==e)return e?e(this.props):e;var a=this.props,t=a.disabledClassName,r=a.pageCount,i=a.className,s=a.containerClassName,o=a.previousLabel,l=a.previousClassName,c=a.previousLinkClassName,u=a.previousAriaLabel,p=a.prevRel,d=a.nextLabel,b=a.nextClassName,f=a.nextLinkClassName,m=a.nextAriaLabel,v=a.nextRel,h=this.state.selected,j=l+(0===h?" ".concat(t):""),y=b+(h===r-1?" ".concat(t):""),x=0===h?"true":"false",C=h===r-1?"true":"false";return n.a.createElement("ul",{className:i||s},n.a.createElement("li",{className:j},n.a.createElement("a",g({className:c,href:this.hrefBuilder(h-1),tabIndex:"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":x,"aria-label":u,rel:p},this.getEventListener(this.handlePreviousPage)),o)),this.pagination(),n.a.createElement("li",{className:y},n.a.createElement("a",g({className:f,href:this.hrefBuilder(h+1),tabIndex:"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":C,"aria-label":m,rel:v},this.getEventListener(this.handleNextPage)),d)))}}])&&f(a.prototype,t),r&&f(a,r),s}(r.Component);x(C,"propTypes",{pageCount:s.a.number.isRequired,pageRangeDisplayed:s.a.number.isRequired,marginPagesDisplayed:s.a.number.isRequired,previousLabel:s.a.node,previousAriaLabel:s.a.string,prevRel:s.a.string,nextLabel:s.a.node,nextAriaLabel:s.a.string,nextRel:s.a.string,breakLabel:s.a.oneOfType([s.a.string,s.a.node]),hrefBuilder:s.a.func,onPageChange:s.a.func,onPageActive:s.a.func,initialPage:s.a.number,forcePage:s.a.number,disableInitialCallback:s.a.bool,containerClassName:s.a.string,className:s.a.string,pageClassName:s.a.string,pageLinkClassName:s.a.string,pageLabelBuilder:s.a.func,activeClassName:s.a.string,activeLinkClassName:s.a.string,previousClassName:s.a.string,nextClassName:s.a.string,previousLinkClassName:s.a.string,nextLinkClassName:s.a.string,disabledClassName:s.a.string,breakClassName:s.a.string,breakLinkClassName:s.a.string,extraAriaContext:s.a.string,ariaLabelBuilder:s.a.func,eventListener:s.a.string,renderOnZeroPageCount:s.a.func}),x(C,"defaultProps",{pageCount:10,pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextRel:"next",breakLabel:"...",disabledClassName:"disabled",disableInitialCallback:!1,pageLabelBuilder:function(e){return e},eventListener:"onClick",renderOnZeroPageCount:void 0}),a.default=C}]))},501:function(e,a,t){},538:function(e,a,t){}}]);
//# sourceMappingURL=17.09aaab52.chunk.js.map