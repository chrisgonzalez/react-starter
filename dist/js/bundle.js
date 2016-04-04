/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(159);

	var _dots = __webpack_require__(160);

	var _dots2 = _interopRequireDefault(_dots);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(166);

	var App = function (_Component) {
	    _inherits(App, _Component);

	    function App() {
	        _classCallCheck(this, App);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(App).apply(this, arguments));
	    }

	    _createClass(App, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'visualization' },
	                _react2.default.createElement(_dots2.default, this.props)
	            );
	        }
	    }]);

	    return App;
	}(_react.Component);

	var elem = document.querySelector('#visualization');

	var visualization = _react2.default.createElement(App, { data: [10, 5, 20, 43, 52, 62, 6, 86, 53, 74, 64], elem: elem });

	(0, _reactDom.render)(visualization, elem);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(3);

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule React
	 */

	'use strict';

	var ReactDOM = __webpack_require__(4);
	var ReactDOMServer = __webpack_require__(149);
	var ReactIsomorphic = __webpack_require__(153);

	var assign = __webpack_require__(40);
	var deprecated = __webpack_require__(158);

	// `version` will be added here by ReactIsomorphic.
	var React = {};

	assign(React, ReactIsomorphic);

	assign(React, {
	  // ReactDOM
	  findDOMNode: deprecated('findDOMNode', 'ReactDOM', 'react-dom', ReactDOM, ReactDOM.findDOMNode),
	  render: deprecated('render', 'ReactDOM', 'react-dom', ReactDOM, ReactDOM.render),
	  unmountComponentAtNode: deprecated('unmountComponentAtNode', 'ReactDOM', 'react-dom', ReactDOM, ReactDOM.unmountComponentAtNode),

	  // ReactDOMServer
	  renderToString: deprecated('renderToString', 'ReactDOMServer', 'react-dom/server', ReactDOMServer, ReactDOMServer.renderToString),
	  renderToStaticMarkup: deprecated('renderToStaticMarkup', 'ReactDOMServer', 'react-dom/server', ReactDOMServer, ReactDOMServer.renderToStaticMarkup)
	});

	React.__SECRET_DOM_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactDOM;
	React.__SECRET_DOM_SERVER_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactDOMServer;

	module.exports = React;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOM
	 */

	/* globals __REACT_DEVTOOLS_GLOBAL_HOOK__*/

	'use strict';

	var ReactCurrentOwner = __webpack_require__(6);
	var ReactDOMTextComponent = __webpack_require__(7);
	var ReactDefaultInjection = __webpack_require__(72);
	var ReactInstanceHandles = __webpack_require__(46);
	var ReactMount = __webpack_require__(29);
	var ReactPerf = __webpack_require__(19);
	var ReactReconciler = __webpack_require__(51);
	var ReactUpdates = __webpack_require__(55);
	var ReactVersion = __webpack_require__(147);

	var findDOMNode = __webpack_require__(92);
	var renderSubtreeIntoContainer = __webpack_require__(148);
	var warning = __webpack_require__(26);

	ReactDefaultInjection.inject();

	var render = ReactPerf.measure('React', 'render', ReactMount.render);

	var React = {
	  findDOMNode: findDOMNode,
	  render: render,
	  unmountComponentAtNode: ReactMount.unmountComponentAtNode,
	  version: ReactVersion,

	  /* eslint-disable camelcase */
	  unstable_batchedUpdates: ReactUpdates.batchedUpdates,
	  unstable_renderSubtreeIntoContainer: renderSubtreeIntoContainer
	};

	// Inject the runtime into a devtools global hook regardless of browser.
	// Allows for debugging when the hook is injected on the page.
	/* eslint-enable camelcase */
	if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.inject === 'function') {
	  __REACT_DEVTOOLS_GLOBAL_HOOK__.inject({
	    CurrentOwner: ReactCurrentOwner,
	    InstanceHandles: ReactInstanceHandles,
	    Mount: ReactMount,
	    Reconciler: ReactReconciler,
	    TextComponent: ReactDOMTextComponent
	  });
	}

	if (process.env.NODE_ENV !== 'production') {
	  var ExecutionEnvironment = __webpack_require__(10);
	  if (ExecutionEnvironment.canUseDOM && window.top === window.self) {

	    // First check if devtools is not installed
	    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined') {
	      // If we're in Chrome or Firefox, provide a download link if not installed.
	      if (navigator.userAgent.indexOf('Chrome') > -1 && navigator.userAgent.indexOf('Edge') === -1 || navigator.userAgent.indexOf('Firefox') > -1) {
	        console.debug('Download the React DevTools for a better development experience: ' + 'https://fb.me/react-devtools');
	      }
	    }

	    // If we're in IE8, check to see if we are in compatibility mode and provide
	    // information on preventing compatibility mode
	    var ieCompatibilityMode = document.documentMode && document.documentMode < 8;

	    process.env.NODE_ENV !== 'production' ? warning(!ieCompatibilityMode, 'Internet Explorer is running in compatibility mode; please add the ' + 'following tag to your HTML to prevent this from happening: ' + '<meta http-equiv="X-UA-Compatible" content="IE=edge" />') : undefined;

	    var expectedFeatures = [
	    // shims
	    Array.isArray, Array.prototype.every, Array.prototype.forEach, Array.prototype.indexOf, Array.prototype.map, Date.now, Function.prototype.bind, Object.keys, String.prototype.split, String.prototype.trim,

	    // shams
	    Object.create, Object.freeze];

	    for (var i = 0; i < expectedFeatures.length; i++) {
	      if (!expectedFeatures[i]) {
	        console.error('One or more ES5 shim/shams expected by React are not available: ' + 'https://fb.me/react-warning-polyfills');
	        break;
	      }
	    }
	  }
	}

	module.exports = React;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	// shim for using process in browser

	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while (len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () {
	    return '/';
	};
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function () {
	    return 0;
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactCurrentOwner
	 */

	'use strict';

	/**
	 * Keeps track of the current owner.
	 *
	 * The current owner is the component who should own any components that are
	 * currently being constructed.
	 */

	var ReactCurrentOwner = {

	  /**
	   * @internal
	   * @type {ReactComponent}
	   */
	  current: null

	};

	module.exports = ReactCurrentOwner;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMTextComponent
	 * @typechecks static-only
	 */

	'use strict';

	var DOMChildrenOperations = __webpack_require__(8);
	var DOMPropertyOperations = __webpack_require__(23);
	var ReactComponentBrowserEnvironment = __webpack_require__(27);
	var ReactMount = __webpack_require__(29);

	var assign = __webpack_require__(40);
	var escapeTextContentForBrowser = __webpack_require__(22);
	var setTextContent = __webpack_require__(21);
	var validateDOMNesting = __webpack_require__(71);

	/**
	 * Text nodes violate a couple assumptions that React makes about components:
	 *
	 *  - When mounting text into the DOM, adjacent text nodes are merged.
	 *  - Text nodes cannot be assigned a React root ID.
	 *
	 * This component is used to wrap strings in elements so that they can undergo
	 * the same reconciliation that is applied to elements.
	 *
	 * TODO: Investigate representing React components in the DOM with text nodes.
	 *
	 * @class ReactDOMTextComponent
	 * @extends ReactComponent
	 * @internal
	 */
	var ReactDOMTextComponent = function ReactDOMTextComponent(props) {
	  // This constructor and its argument is currently used by mocks.
	};

	assign(ReactDOMTextComponent.prototype, {

	  /**
	   * @param {ReactText} text
	   * @internal
	   */
	  construct: function construct(text) {
	    // TODO: This is really a ReactText (ReactNode), not a ReactElement
	    this._currentElement = text;
	    this._stringText = '' + text;

	    // Properties
	    this._rootNodeID = null;
	    this._mountIndex = 0;
	  },

	  /**
	   * Creates the markup for this text node. This node is not intended to have
	   * any features besides containing text content.
	   *
	   * @param {string} rootID DOM ID of the root node.
	   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
	   * @return {string} Markup for this text node.
	   * @internal
	   */
	  mountComponent: function mountComponent(rootID, transaction, context) {
	    if (process.env.NODE_ENV !== 'production') {
	      if (context[validateDOMNesting.ancestorInfoContextKey]) {
	        validateDOMNesting('span', null, context[validateDOMNesting.ancestorInfoContextKey]);
	      }
	    }

	    this._rootNodeID = rootID;
	    if (transaction.useCreateElement) {
	      var ownerDocument = context[ReactMount.ownerDocumentContextKey];
	      var el = ownerDocument.createElement('span');
	      DOMPropertyOperations.setAttributeForID(el, rootID);
	      // Populate node cache
	      ReactMount.getID(el);
	      setTextContent(el, this._stringText);
	      return el;
	    } else {
	      var escapedText = escapeTextContentForBrowser(this._stringText);

	      if (transaction.renderToStaticMarkup) {
	        // Normally we'd wrap this in a `span` for the reasons stated above, but
	        // since this is a situation where React won't take over (static pages),
	        // we can simply return the text as it is.
	        return escapedText;
	      }

	      return '<span ' + DOMPropertyOperations.createMarkupForID(rootID) + '>' + escapedText + '</span>';
	    }
	  },

	  /**
	   * Updates this component by updating the text content.
	   *
	   * @param {ReactText} nextText The next text content
	   * @param {ReactReconcileTransaction} transaction
	   * @internal
	   */
	  receiveComponent: function receiveComponent(nextText, transaction) {
	    if (nextText !== this._currentElement) {
	      this._currentElement = nextText;
	      var nextStringText = '' + nextText;
	      if (nextStringText !== this._stringText) {
	        // TODO: Save this as pending props and use performUpdateIfNecessary
	        // and/or updateComponent to do the actual update for consistency with
	        // other component types?
	        this._stringText = nextStringText;
	        var node = ReactMount.getNode(this._rootNodeID);
	        DOMChildrenOperations.updateTextContent(node, nextStringText);
	      }
	    }
	  },

	  unmountComponent: function unmountComponent() {
	    ReactComponentBrowserEnvironment.unmountIDFromEnvironment(this._rootNodeID);
	  }

	});

	module.exports = ReactDOMTextComponent;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule DOMChildrenOperations
	 * @typechecks static-only
	 */

	'use strict';

	var Danger = __webpack_require__(9);
	var ReactMultiChildUpdateTypes = __webpack_require__(17);
	var ReactPerf = __webpack_require__(19);

	var setInnerHTML = __webpack_require__(20);
	var setTextContent = __webpack_require__(21);
	var invariant = __webpack_require__(14);

	/**
	 * Inserts `childNode` as a child of `parentNode` at the `index`.
	 *
	 * @param {DOMElement} parentNode Parent node in which to insert.
	 * @param {DOMElement} childNode Child node to insert.
	 * @param {number} index Index at which to insert the child.
	 * @internal
	 */
	function insertChildAt(parentNode, childNode, index) {
	  // By exploiting arrays returning `undefined` for an undefined index, we can
	  // rely exclusively on `insertBefore(node, null)` instead of also using
	  // `appendChild(node)`. However, using `undefined` is not allowed by all
	  // browsers so we must replace it with `null`.

	  // fix render order error in safari
	  // IE8 will throw error when index out of list size.
	  var beforeChild = index >= parentNode.childNodes.length ? null : parentNode.childNodes.item(index);

	  parentNode.insertBefore(childNode, beforeChild);
	}

	/**
	 * Operations for updating with DOM children.
	 */
	var DOMChildrenOperations = {

	  dangerouslyReplaceNodeWithMarkup: Danger.dangerouslyReplaceNodeWithMarkup,

	  updateTextContent: setTextContent,

	  /**
	   * Updates a component's children by processing a series of updates. The
	   * update configurations are each expected to have a `parentNode` property.
	   *
	   * @param {array<object>} updates List of update configurations.
	   * @param {array<string>} markupList List of markup strings.
	   * @internal
	   */
	  processUpdates: function processUpdates(updates, markupList) {
	    var update;
	    // Mapping from parent IDs to initial child orderings.
	    var initialChildren = null;
	    // List of children that will be moved or removed.
	    var updatedChildren = null;

	    for (var i = 0; i < updates.length; i++) {
	      update = updates[i];
	      if (update.type === ReactMultiChildUpdateTypes.MOVE_EXISTING || update.type === ReactMultiChildUpdateTypes.REMOVE_NODE) {
	        var updatedIndex = update.fromIndex;
	        var updatedChild = update.parentNode.childNodes[updatedIndex];
	        var parentID = update.parentID;

	        !updatedChild ? process.env.NODE_ENV !== 'production' ? invariant(false, 'processUpdates(): Unable to find child %s of element. This ' + 'probably means the DOM was unexpectedly mutated (e.g., by the ' + 'browser), usually due to forgetting a <tbody> when using tables, ' + 'nesting tags like <form>, <p>, or <a>, or using non-SVG elements ' + 'in an <svg> parent. Try inspecting the child nodes of the element ' + 'with React ID `%s`.', updatedIndex, parentID) : invariant(false) : undefined;

	        initialChildren = initialChildren || {};
	        initialChildren[parentID] = initialChildren[parentID] || [];
	        initialChildren[parentID][updatedIndex] = updatedChild;

	        updatedChildren = updatedChildren || [];
	        updatedChildren.push(updatedChild);
	      }
	    }

	    var renderedMarkup;
	    // markupList is either a list of markup or just a list of elements
	    if (markupList.length && typeof markupList[0] === 'string') {
	      renderedMarkup = Danger.dangerouslyRenderMarkup(markupList);
	    } else {
	      renderedMarkup = markupList;
	    }

	    // Remove updated children first so that `toIndex` is consistent.
	    if (updatedChildren) {
	      for (var j = 0; j < updatedChildren.length; j++) {
	        updatedChildren[j].parentNode.removeChild(updatedChildren[j]);
	      }
	    }

	    for (var k = 0; k < updates.length; k++) {
	      update = updates[k];
	      switch (update.type) {
	        case ReactMultiChildUpdateTypes.INSERT_MARKUP:
	          insertChildAt(update.parentNode, renderedMarkup[update.markupIndex], update.toIndex);
	          break;
	        case ReactMultiChildUpdateTypes.MOVE_EXISTING:
	          insertChildAt(update.parentNode, initialChildren[update.parentID][update.fromIndex], update.toIndex);
	          break;
	        case ReactMultiChildUpdateTypes.SET_MARKUP:
	          setInnerHTML(update.parentNode, update.content);
	          break;
	        case ReactMultiChildUpdateTypes.TEXT_CONTENT:
	          setTextContent(update.parentNode, update.content);
	          break;
	        case ReactMultiChildUpdateTypes.REMOVE_NODE:
	          // Already removed by the for-loop above.
	          break;
	      }
	    }
	  }

	};

	ReactPerf.measureMethods(DOMChildrenOperations, 'DOMChildrenOperations', {
	  updateTextContent: 'updateTextContent'
	});

	module.exports = DOMChildrenOperations;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule Danger
	 * @typechecks static-only
	 */

	'use strict';

	var ExecutionEnvironment = __webpack_require__(10);

	var createNodesFromMarkup = __webpack_require__(11);
	var emptyFunction = __webpack_require__(16);
	var getMarkupWrap = __webpack_require__(15);
	var invariant = __webpack_require__(14);

	var OPEN_TAG_NAME_EXP = /^(<[^ \/>]+)/;
	var RESULT_INDEX_ATTR = 'data-danger-index';

	/**
	 * Extracts the `nodeName` from a string of markup.
	 *
	 * NOTE: Extracting the `nodeName` does not require a regular expression match
	 * because we make assumptions about React-generated markup (i.e. there are no
	 * spaces surrounding the opening tag and there is at least one attribute).
	 *
	 * @param {string} markup String of markup.
	 * @return {string} Node name of the supplied markup.
	 * @see http://jsperf.com/extract-nodename
	 */
	function getNodeName(markup) {
	  return markup.substring(1, markup.indexOf(' '));
	}

	var Danger = {

	  /**
	   * Renders markup into an array of nodes. The markup is expected to render
	   * into a list of root nodes. Also, the length of `resultList` and
	   * `markupList` should be the same.
	   *
	   * @param {array<string>} markupList List of markup strings to render.
	   * @return {array<DOMElement>} List of rendered nodes.
	   * @internal
	   */
	  dangerouslyRenderMarkup: function dangerouslyRenderMarkup(markupList) {
	    !ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? invariant(false, 'dangerouslyRenderMarkup(...): Cannot render markup in a worker ' + 'thread. Make sure `window` and `document` are available globally ' + 'before requiring React when unit testing or use ' + 'ReactDOMServer.renderToString for server rendering.') : invariant(false) : undefined;
	    var nodeName;
	    var markupByNodeName = {};
	    // Group markup by `nodeName` if a wrap is necessary, else by '*'.
	    for (var i = 0; i < markupList.length; i++) {
	      !markupList[i] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'dangerouslyRenderMarkup(...): Missing markup.') : invariant(false) : undefined;
	      nodeName = getNodeName(markupList[i]);
	      nodeName = getMarkupWrap(nodeName) ? nodeName : '*';
	      markupByNodeName[nodeName] = markupByNodeName[nodeName] || [];
	      markupByNodeName[nodeName][i] = markupList[i];
	    }
	    var resultList = [];
	    var resultListAssignmentCount = 0;
	    for (nodeName in markupByNodeName) {
	      if (!markupByNodeName.hasOwnProperty(nodeName)) {
	        continue;
	      }
	      var markupListByNodeName = markupByNodeName[nodeName];

	      // This for-in loop skips the holes of the sparse array. The order of
	      // iteration should follow the order of assignment, which happens to match
	      // numerical index order, but we don't rely on that.
	      var resultIndex;
	      for (resultIndex in markupListByNodeName) {
	        if (markupListByNodeName.hasOwnProperty(resultIndex)) {
	          var markup = markupListByNodeName[resultIndex];

	          // Push the requested markup with an additional RESULT_INDEX_ATTR
	          // attribute.  If the markup does not start with a < character, it
	          // will be discarded below (with an appropriate console.error).
	          markupListByNodeName[resultIndex] = markup.replace(OPEN_TAG_NAME_EXP,
	          // This index will be parsed back out below.
	          '$1 ' + RESULT_INDEX_ATTR + '="' + resultIndex + '" ');
	        }
	      }

	      // Render each group of markup with similar wrapping `nodeName`.
	      var renderNodes = createNodesFromMarkup(markupListByNodeName.join(''), emptyFunction // Do nothing special with <script> tags.
	      );

	      for (var j = 0; j < renderNodes.length; ++j) {
	        var renderNode = renderNodes[j];
	        if (renderNode.hasAttribute && renderNode.hasAttribute(RESULT_INDEX_ATTR)) {

	          resultIndex = +renderNode.getAttribute(RESULT_INDEX_ATTR);
	          renderNode.removeAttribute(RESULT_INDEX_ATTR);

	          !!resultList.hasOwnProperty(resultIndex) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Danger: Assigning to an already-occupied result index.') : invariant(false) : undefined;

	          resultList[resultIndex] = renderNode;

	          // This should match resultList.length and markupList.length when
	          // we're done.
	          resultListAssignmentCount += 1;
	        } else if (process.env.NODE_ENV !== 'production') {
	          console.error('Danger: Discarding unexpected node:', renderNode);
	        }
	      }
	    }

	    // Although resultList was populated out of order, it should now be a dense
	    // array.
	    !(resultListAssignmentCount === resultList.length) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Danger: Did not assign to every index of resultList.') : invariant(false) : undefined;

	    !(resultList.length === markupList.length) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Danger: Expected markup to render %s nodes, but rendered %s.', markupList.length, resultList.length) : invariant(false) : undefined;

	    return resultList;
	  },

	  /**
	   * Replaces a node with a string of markup at its current position within its
	   * parent. The markup must render into a single root node.
	   *
	   * @param {DOMElement} oldChild Child node to replace.
	   * @param {string} markup Markup to render in place of the child node.
	   * @internal
	   */
	  dangerouslyReplaceNodeWithMarkup: function dangerouslyReplaceNodeWithMarkup(oldChild, markup) {
	    !ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? invariant(false, 'dangerouslyReplaceNodeWithMarkup(...): Cannot render markup in a ' + 'worker thread. Make sure `window` and `document` are available ' + 'globally before requiring React when unit testing or use ' + 'ReactDOMServer.renderToString() for server rendering.') : invariant(false) : undefined;
	    !markup ? process.env.NODE_ENV !== 'production' ? invariant(false, 'dangerouslyReplaceNodeWithMarkup(...): Missing markup.') : invariant(false) : undefined;
	    !(oldChild.tagName.toLowerCase() !== 'html') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'dangerouslyReplaceNodeWithMarkup(...): Cannot replace markup of the ' + '<html> node. This is because browser quirks make this unreliable ' + 'and/or slow. If you want to render to the root you must use ' + 'server rendering. See ReactDOMServer.renderToString().') : invariant(false) : undefined;

	    var newChild;
	    if (typeof markup === 'string') {
	      newChild = createNodesFromMarkup(markup, emptyFunction)[0];
	    } else {
	      newChild = markup;
	    }
	    oldChild.parentNode.replaceChild(newChild, oldChild);
	  }

	};

	module.exports = Danger;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 10 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ExecutionEnvironment
	 */

	'use strict';

	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

	/**
	 * Simple, lightweight module assisting with the detection and context of
	 * Worker. Helps avoid circular dependencies and allows code to reason about
	 * whether or not they are in a Worker, even if they never include the main
	 * `ReactWorker` dependency.
	 */
	var ExecutionEnvironment = {

	  canUseDOM: canUseDOM,

	  canUseWorkers: typeof Worker !== 'undefined',

	  canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),

	  canUseViewport: canUseDOM && !!window.screen,

	  isInWorker: !canUseDOM // For now, this is true - might change in the future.

	};

	module.exports = ExecutionEnvironment;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule createNodesFromMarkup
	 * @typechecks
	 */

	/*eslint-disable fb-www/unsafe-html*/

	'use strict';

	var ExecutionEnvironment = __webpack_require__(10);

	var createArrayFromMixed = __webpack_require__(12);
	var getMarkupWrap = __webpack_require__(15);
	var invariant = __webpack_require__(14);

	/**
	 * Dummy container used to render all markup.
	 */
	var dummyNode = ExecutionEnvironment.canUseDOM ? document.createElement('div') : null;

	/**
	 * Pattern used by `getNodeName`.
	 */
	var nodeNamePattern = /^\s*<(\w+)/;

	/**
	 * Extracts the `nodeName` of the first element in a string of markup.
	 *
	 * @param {string} markup String of markup.
	 * @return {?string} Node name of the supplied markup.
	 */
	function getNodeName(markup) {
	  var nodeNameMatch = markup.match(nodeNamePattern);
	  return nodeNameMatch && nodeNameMatch[1].toLowerCase();
	}

	/**
	 * Creates an array containing the nodes rendered from the supplied markup. The
	 * optionally supplied `handleScript` function will be invoked once for each
	 * <script> element that is rendered. If no `handleScript` function is supplied,
	 * an exception is thrown if any <script> elements are rendered.
	 *
	 * @param {string} markup A string of valid HTML markup.
	 * @param {?function} handleScript Invoked once for each rendered <script>.
	 * @return {array<DOMElement|DOMTextNode>} An array of rendered nodes.
	 */
	function createNodesFromMarkup(markup, handleScript) {
	  var node = dummyNode;
	  !!!dummyNode ? process.env.NODE_ENV !== 'production' ? invariant(false, 'createNodesFromMarkup dummy not initialized') : invariant(false) : undefined;
	  var nodeName = getNodeName(markup);

	  var wrap = nodeName && getMarkupWrap(nodeName);
	  if (wrap) {
	    node.innerHTML = wrap[1] + markup + wrap[2];

	    var wrapDepth = wrap[0];
	    while (wrapDepth--) {
	      node = node.lastChild;
	    }
	  } else {
	    node.innerHTML = markup;
	  }

	  var scripts = node.getElementsByTagName('script');
	  if (scripts.length) {
	    !handleScript ? process.env.NODE_ENV !== 'production' ? invariant(false, 'createNodesFromMarkup(...): Unexpected <script> element rendered.') : invariant(false) : undefined;
	    createArrayFromMixed(scripts).forEach(handleScript);
	  }

	  var nodes = createArrayFromMixed(node.childNodes);
	  while (node.lastChild) {
	    node.removeChild(node.lastChild);
	  }
	  return nodes;
	}

	module.exports = createNodesFromMarkup;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule createArrayFromMixed
	 * @typechecks
	 */

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var toArray = __webpack_require__(13);

	/**
	 * Perform a heuristic test to determine if an object is "array-like".
	 *
	 *   A monk asked Joshu, a Zen master, "Has a dog Buddha nature?"
	 *   Joshu replied: "Mu."
	 *
	 * This function determines if its argument has "array nature": it returns
	 * true if the argument is an actual array, an `arguments' object, or an
	 * HTMLCollection (e.g. node.childNodes or node.getElementsByTagName()).
	 *
	 * It will return false for other array-like objects like Filelist.
	 *
	 * @param {*} obj
	 * @return {boolean}
	 */
	function hasArrayNature(obj) {
	  return(
	    // not null/false
	    !!obj && (
	    // arrays are objects, NodeLists are functions in Safari
	    (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) == 'object' || typeof obj == 'function') &&
	    // quacks like an array
	    'length' in obj &&
	    // not window
	    !('setInterval' in obj) &&
	    // no DOM node should be considered an array-like
	    // a 'select' element has 'length' and 'item' properties on IE8
	    typeof obj.nodeType != 'number' && (
	    // a real array
	    Array.isArray(obj) ||
	    // arguments
	    'callee' in obj ||
	    // HTMLCollection/NodeList
	    'item' in obj)
	  );
	}

	/**
	 * Ensure that the argument is an array by wrapping it in an array if it is not.
	 * Creates a copy of the argument if it is already an array.
	 *
	 * This is mostly useful idiomatically:
	 *
	 *   var createArrayFromMixed = require('createArrayFromMixed');
	 *
	 *   function takesOneOrMoreThings(things) {
	 *     things = createArrayFromMixed(things);
	 *     ...
	 *   }
	 *
	 * This allows you to treat `things' as an array, but accept scalars in the API.
	 *
	 * If you need to convert an array-like object, like `arguments`, into an array
	 * use toArray instead.
	 *
	 * @param {*} obj
	 * @return {array}
	 */
	function createArrayFromMixed(obj) {
	  if (!hasArrayNature(obj)) {
	    return [obj];
	  } else if (Array.isArray(obj)) {
	    return obj.slice();
	  } else {
	    return toArray(obj);
	  }
	}

	module.exports = createArrayFromMixed;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule toArray
	 * @typechecks
	 */

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var invariant = __webpack_require__(14);

	/**
	 * Convert array-like objects to arrays.
	 *
	 * This API assumes the caller knows the contents of the data type. For less
	 * well defined inputs use createArrayFromMixed.
	 *
	 * @param {object|function|filelist} obj
	 * @return {array}
	 */
	function toArray(obj) {
	  var length = obj.length;

	  // Some browse builtin objects can report typeof 'function' (e.g. NodeList in
	  // old versions of Safari).
	  !(!Array.isArray(obj) && ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' || typeof obj === 'function')) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'toArray: Array-like object expected') : invariant(false) : undefined;

	  !(typeof length === 'number') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'toArray: Object needs a length property') : invariant(false) : undefined;

	  !(length === 0 || length - 1 in obj) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'toArray: Object should have keys for indices') : invariant(false) : undefined;

	  // Old IE doesn't give collections access to hasOwnProperty. Assume inputs
	  // without method will throw during the slice call and skip straight to the
	  // fallback.
	  if (obj.hasOwnProperty) {
	    try {
	      return Array.prototype.slice.call(obj);
	    } catch (e) {
	      // IE < 9 does not support Array#slice on collections objects
	    }
	  }

	  // Fall back to copying key by key. This assumes all keys have a value,
	  // so will not preserve sparsely populated inputs.
	  var ret = Array(length);
	  for (var ii = 0; ii < length; ii++) {
	    ret[ii] = obj[ii];
	  }
	  return ret;
	}

	module.exports = toArray;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule invariant
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	function invariant(condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}

	module.exports = invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getMarkupWrap
	 */

	/*eslint-disable fb-www/unsafe-html */

	'use strict';

	var ExecutionEnvironment = __webpack_require__(10);

	var invariant = __webpack_require__(14);

	/**
	 * Dummy container used to detect which wraps are necessary.
	 */
	var dummyNode = ExecutionEnvironment.canUseDOM ? document.createElement('div') : null;

	/**
	 * Some browsers cannot use `innerHTML` to render certain elements standalone,
	 * so we wrap them, render the wrapped nodes, then extract the desired node.
	 *
	 * In IE8, certain elements cannot render alone, so wrap all elements ('*').
	 */

	var shouldWrap = {};

	var selectWrap = [1, '<select multiple="true">', '</select>'];
	var tableWrap = [1, '<table>', '</table>'];
	var trWrap = [3, '<table><tbody><tr>', '</tr></tbody></table>'];

	var svgWrap = [1, '<svg xmlns="http://www.w3.org/2000/svg">', '</svg>'];

	var markupWrap = {
	  '*': [1, '?<div>', '</div>'],

	  'area': [1, '<map>', '</map>'],
	  'col': [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>'],
	  'legend': [1, '<fieldset>', '</fieldset>'],
	  'param': [1, '<object>', '</object>'],
	  'tr': [2, '<table><tbody>', '</tbody></table>'],

	  'optgroup': selectWrap,
	  'option': selectWrap,

	  'caption': tableWrap,
	  'colgroup': tableWrap,
	  'tbody': tableWrap,
	  'tfoot': tableWrap,
	  'thead': tableWrap,

	  'td': trWrap,
	  'th': trWrap
	};

	// Initialize the SVG elements since we know they'll always need to be wrapped
	// consistently. If they are created inside a <div> they will be initialized in
	// the wrong namespace (and will not display).
	var svgElements = ['circle', 'clipPath', 'defs', 'ellipse', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'text', 'tspan'];
	svgElements.forEach(function (nodeName) {
	  markupWrap[nodeName] = svgWrap;
	  shouldWrap[nodeName] = true;
	});

	/**
	 * Gets the markup wrap configuration for the supplied `nodeName`.
	 *
	 * NOTE: This lazily detects which wraps are necessary for the current browser.
	 *
	 * @param {string} nodeName Lowercase `nodeName`.
	 * @return {?array} Markup wrap configuration, if applicable.
	 */
	function getMarkupWrap(nodeName) {
	  !!!dummyNode ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Markup wrapping node not initialized') : invariant(false) : undefined;
	  if (!markupWrap.hasOwnProperty(nodeName)) {
	    nodeName = '*';
	  }
	  if (!shouldWrap.hasOwnProperty(nodeName)) {
	    if (nodeName === '*') {
	      dummyNode.innerHTML = '<link />';
	    } else {
	      dummyNode.innerHTML = '<' + nodeName + '></' + nodeName + '>';
	    }
	    shouldWrap[nodeName] = !dummyNode.firstChild;
	  }
	  return shouldWrap[nodeName] ? markupWrap[nodeName] : null;
	}

	module.exports = getMarkupWrap;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 16 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule emptyFunction
	 */

	"use strict";

	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}

	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	function emptyFunction() {}

	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};

	module.exports = emptyFunction;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactMultiChildUpdateTypes
	 */

	'use strict';

	var keyMirror = __webpack_require__(18);

	/**
	 * When a component's children are updated, a series of update configuration
	 * objects are created in order to batch and serialize the required changes.
	 *
	 * Enumerates all the possible types of update configurations.
	 *
	 * @internal
	 */
	var ReactMultiChildUpdateTypes = keyMirror({
	  INSERT_MARKUP: null,
	  MOVE_EXISTING: null,
	  REMOVE_NODE: null,
	  SET_MARKUP: null,
	  TEXT_CONTENT: null
	});

	module.exports = ReactMultiChildUpdateTypes;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule keyMirror
	 * @typechecks static-only
	 */

	'use strict';

	var invariant = __webpack_require__(14);

	/**
	 * Constructs an enumeration with keys equal to their value.
	 *
	 * For example:
	 *
	 *   var COLORS = keyMirror({blue: null, red: null});
	 *   var myColor = COLORS.blue;
	 *   var isColorValid = !!COLORS[myColor];
	 *
	 * The last line could not be performed if the values of the generated enum were
	 * not equal to their keys.
	 *
	 *   Input:  {key1: val1, key2: val2}
	 *   Output: {key1: key1, key2: key2}
	 *
	 * @param {object} obj
	 * @return {object}
	 */
	var keyMirror = function keyMirror(obj) {
	  var ret = {};
	  var key;
	  !(obj instanceof Object && !Array.isArray(obj)) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'keyMirror(...): Argument must be an object.') : invariant(false) : undefined;
	  for (key in obj) {
	    if (!obj.hasOwnProperty(key)) {
	      continue;
	    }
	    ret[key] = key;
	  }
	  return ret;
	};

	module.exports = keyMirror;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactPerf
	 * @typechecks static-only
	 */

	'use strict';

	/**
	 * ReactPerf is a general AOP system designed to measure performance. This
	 * module only has the hooks: see ReactDefaultPerf for the analysis tool.
	 */

	var ReactPerf = {
	  /**
	   * Boolean to enable/disable measurement. Set to false by default to prevent
	   * accidental logging and perf loss.
	   */
	  enableMeasure: false,

	  /**
	   * Holds onto the measure function in use. By default, don't measure
	   * anything, but we'll override this if we inject a measure function.
	   */
	  storedMeasure: _noMeasure,

	  /**
	   * @param {object} object
	   * @param {string} objectName
	   * @param {object<string>} methodNames
	   */
	  measureMethods: function measureMethods(object, objectName, methodNames) {
	    if (process.env.NODE_ENV !== 'production') {
	      for (var key in methodNames) {
	        if (!methodNames.hasOwnProperty(key)) {
	          continue;
	        }
	        object[key] = ReactPerf.measure(objectName, methodNames[key], object[key]);
	      }
	    }
	  },

	  /**
	   * Use this to wrap methods you want to measure. Zero overhead in production.
	   *
	   * @param {string} objName
	   * @param {string} fnName
	   * @param {function} func
	   * @return {function}
	   */
	  measure: function measure(objName, fnName, func) {
	    if (process.env.NODE_ENV !== 'production') {
	      var measuredFunc = null;
	      var wrapper = function wrapper() {
	        if (ReactPerf.enableMeasure) {
	          if (!measuredFunc) {
	            measuredFunc = ReactPerf.storedMeasure(objName, fnName, func);
	          }
	          return measuredFunc.apply(this, arguments);
	        }
	        return func.apply(this, arguments);
	      };
	      wrapper.displayName = objName + '_' + fnName;
	      return wrapper;
	    }
	    return func;
	  },

	  injection: {
	    /**
	     * @param {function} measure
	     */
	    injectMeasure: function injectMeasure(measure) {
	      ReactPerf.storedMeasure = measure;
	    }
	  }
	};

	/**
	 * Simply passes through the measured function, without measuring it.
	 *
	 * @param {string} objName
	 * @param {string} fnName
	 * @param {function} func
	 * @return {function}
	 */
	function _noMeasure(objName, fnName, func) {
	  return func;
	}

	module.exports = ReactPerf;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule setInnerHTML
	 */

	/* globals MSApp */

	'use strict';

	var ExecutionEnvironment = __webpack_require__(10);

	var WHITESPACE_TEST = /^[ \r\n\t\f]/;
	var NONVISIBLE_TEST = /<(!--|link|noscript|meta|script|style)[ \r\n\t\f\/>]/;

	/**
	 * Set the innerHTML property of a node, ensuring that whitespace is preserved
	 * even in IE8.
	 *
	 * @param {DOMElement} node
	 * @param {string} html
	 * @internal
	 */
	var setInnerHTML = function setInnerHTML(node, html) {
	  node.innerHTML = html;
	};

	// Win8 apps: Allow all html to be inserted
	if (typeof MSApp !== 'undefined' && MSApp.execUnsafeLocalFunction) {
	  setInnerHTML = function setInnerHTML(node, html) {
	    MSApp.execUnsafeLocalFunction(function () {
	      node.innerHTML = html;
	    });
	  };
	}

	if (ExecutionEnvironment.canUseDOM) {
	  // IE8: When updating a just created node with innerHTML only leading
	  // whitespace is removed. When updating an existing node with innerHTML
	  // whitespace in root TextNodes is also collapsed.
	  // @see quirksmode.org/bugreports/archives/2004/11/innerhtml_and_t.html

	  // Feature detection; only IE8 is known to behave improperly like this.
	  var testElement = document.createElement('div');
	  testElement.innerHTML = ' ';
	  if (testElement.innerHTML === '') {
	    setInnerHTML = function setInnerHTML(node, html) {
	      // Magic theory: IE8 supposedly differentiates between added and updated
	      // nodes when processing innerHTML, innerHTML on updated nodes suffers
	      // from worse whitespace behavior. Re-adding a node like this triggers
	      // the initial and more favorable whitespace behavior.
	      // TODO: What to do on a detached node?
	      if (node.parentNode) {
	        node.parentNode.replaceChild(node, node);
	      }

	      // We also implement a workaround for non-visible tags disappearing into
	      // thin air on IE8, this only happens if there is no visible text
	      // in-front of the non-visible tags. Piggyback on the whitespace fix
	      // and simply check if any non-visible tags appear in the source.
	      if (WHITESPACE_TEST.test(html) || html[0] === '<' && NONVISIBLE_TEST.test(html)) {
	        // Recover leading whitespace by temporarily prepending any character.
	        // \uFEFF has the potential advantage of being zero-width/invisible.
	        // UglifyJS drops U+FEFF chars when parsing, so use String.fromCharCode
	        // in hopes that this is preserved even if "\uFEFF" is transformed to
	        // the actual Unicode character (by Babel, for example).
	        // https://github.com/mishoo/UglifyJS2/blob/v2.4.20/lib/parse.js#L216
	        node.innerHTML = String.fromCharCode(0xFEFF) + html;

	        // deleteData leaves an empty `TextNode` which offsets the index of all
	        // children. Definitely want to avoid this.
	        var textNode = node.firstChild;
	        if (textNode.data.length === 1) {
	          node.removeChild(textNode);
	        } else {
	          textNode.deleteData(0, 1);
	        }
	      } else {
	        node.innerHTML = html;
	      }
	    };
	  }
	}

	module.exports = setInnerHTML;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule setTextContent
	 */

	'use strict';

	var ExecutionEnvironment = __webpack_require__(10);
	var escapeTextContentForBrowser = __webpack_require__(22);
	var setInnerHTML = __webpack_require__(20);

	/**
	 * Set the textContent property of a node, ensuring that whitespace is preserved
	 * even in IE8. innerText is a poor substitute for textContent and, among many
	 * issues, inserts <br> instead of the literal newline chars. innerHTML behaves
	 * as it should.
	 *
	 * @param {DOMElement} node
	 * @param {string} text
	 * @internal
	 */
	var setTextContent = function setTextContent(node, text) {
	  node.textContent = text;
	};

	if (ExecutionEnvironment.canUseDOM) {
	  if (!('textContent' in document.documentElement)) {
	    setTextContent = function setTextContent(node, text) {
	      setInnerHTML(node, escapeTextContentForBrowser(text));
	    };
	  }
	}

	module.exports = setTextContent;

/***/ },
/* 22 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule escapeTextContentForBrowser
	 */

	'use strict';

	var ESCAPE_LOOKUP = {
	  '&': '&amp;',
	  '>': '&gt;',
	  '<': '&lt;',
	  '"': '&quot;',
	  '\'': '&#x27;'
	};

	var ESCAPE_REGEX = /[&><"']/g;

	function escaper(match) {
	  return ESCAPE_LOOKUP[match];
	}

	/**
	 * Escapes text to prevent scripting attacks.
	 *
	 * @param {*} text Text value to escape.
	 * @return {string} An escaped string.
	 */
	function escapeTextContentForBrowser(text) {
	  return ('' + text).replace(ESCAPE_REGEX, escaper);
	}

	module.exports = escapeTextContentForBrowser;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule DOMPropertyOperations
	 * @typechecks static-only
	 */

	'use strict';

	var DOMProperty = __webpack_require__(24);
	var ReactPerf = __webpack_require__(19);

	var quoteAttributeValueForBrowser = __webpack_require__(25);
	var warning = __webpack_require__(26);

	// Simplified subset
	var VALID_ATTRIBUTE_NAME_REGEX = /^[a-zA-Z_][\w\.\-]*$/;
	var illegalAttributeNameCache = {};
	var validatedAttributeNameCache = {};

	function isAttributeNameSafe(attributeName) {
	  if (validatedAttributeNameCache.hasOwnProperty(attributeName)) {
	    return true;
	  }
	  if (illegalAttributeNameCache.hasOwnProperty(attributeName)) {
	    return false;
	  }
	  if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)) {
	    validatedAttributeNameCache[attributeName] = true;
	    return true;
	  }
	  illegalAttributeNameCache[attributeName] = true;
	  process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid attribute name: `%s`', attributeName) : undefined;
	  return false;
	}

	function shouldIgnoreValue(propertyInfo, value) {
	  return value == null || propertyInfo.hasBooleanValue && !value || propertyInfo.hasNumericValue && isNaN(value) || propertyInfo.hasPositiveNumericValue && value < 1 || propertyInfo.hasOverloadedBooleanValue && value === false;
	}

	if (process.env.NODE_ENV !== 'production') {
	  var reactProps = {
	    children: true,
	    dangerouslySetInnerHTML: true,
	    key: true,
	    ref: true
	  };
	  var warnedProperties = {};

	  var warnUnknownProperty = function warnUnknownProperty(name) {
	    if (reactProps.hasOwnProperty(name) && reactProps[name] || warnedProperties.hasOwnProperty(name) && warnedProperties[name]) {
	      return;
	    }

	    warnedProperties[name] = true;
	    var lowerCasedName = name.toLowerCase();

	    // data-* attributes should be lowercase; suggest the lowercase version
	    var standardName = DOMProperty.isCustomAttribute(lowerCasedName) ? lowerCasedName : DOMProperty.getPossibleStandardName.hasOwnProperty(lowerCasedName) ? DOMProperty.getPossibleStandardName[lowerCasedName] : null;

	    // For now, only warn when we have a suggested correction. This prevents
	    // logging too much when using transferPropsTo.
	    process.env.NODE_ENV !== 'production' ? warning(standardName == null, 'Unknown DOM property %s. Did you mean %s?', name, standardName) : undefined;
	  };
	}

	/**
	 * Operations for dealing with DOM properties.
	 */
	var DOMPropertyOperations = {

	  /**
	   * Creates markup for the ID property.
	   *
	   * @param {string} id Unescaped ID.
	   * @return {string} Markup string.
	   */
	  createMarkupForID: function createMarkupForID(id) {
	    return DOMProperty.ID_ATTRIBUTE_NAME + '=' + quoteAttributeValueForBrowser(id);
	  },

	  setAttributeForID: function setAttributeForID(node, id) {
	    node.setAttribute(DOMProperty.ID_ATTRIBUTE_NAME, id);
	  },

	  /**
	   * Creates markup for a property.
	   *
	   * @param {string} name
	   * @param {*} value
	   * @return {?string} Markup string, or null if the property was invalid.
	   */
	  createMarkupForProperty: function createMarkupForProperty(name, value) {
	    var propertyInfo = DOMProperty.properties.hasOwnProperty(name) ? DOMProperty.properties[name] : null;
	    if (propertyInfo) {
	      if (shouldIgnoreValue(propertyInfo, value)) {
	        return '';
	      }
	      var attributeName = propertyInfo.attributeName;
	      if (propertyInfo.hasBooleanValue || propertyInfo.hasOverloadedBooleanValue && value === true) {
	        return attributeName + '=""';
	      }
	      return attributeName + '=' + quoteAttributeValueForBrowser(value);
	    } else if (DOMProperty.isCustomAttribute(name)) {
	      if (value == null) {
	        return '';
	      }
	      return name + '=' + quoteAttributeValueForBrowser(value);
	    } else if (process.env.NODE_ENV !== 'production') {
	      warnUnknownProperty(name);
	    }
	    return null;
	  },

	  /**
	   * Creates markup for a custom property.
	   *
	   * @param {string} name
	   * @param {*} value
	   * @return {string} Markup string, or empty string if the property was invalid.
	   */
	  createMarkupForCustomAttribute: function createMarkupForCustomAttribute(name, value) {
	    if (!isAttributeNameSafe(name) || value == null) {
	      return '';
	    }
	    return name + '=' + quoteAttributeValueForBrowser(value);
	  },

	  /**
	   * Sets the value for a property on a node.
	   *
	   * @param {DOMElement} node
	   * @param {string} name
	   * @param {*} value
	   */
	  setValueForProperty: function setValueForProperty(node, name, value) {
	    var propertyInfo = DOMProperty.properties.hasOwnProperty(name) ? DOMProperty.properties[name] : null;
	    if (propertyInfo) {
	      var mutationMethod = propertyInfo.mutationMethod;
	      if (mutationMethod) {
	        mutationMethod(node, value);
	      } else if (shouldIgnoreValue(propertyInfo, value)) {
	        this.deleteValueForProperty(node, name);
	      } else if (propertyInfo.mustUseAttribute) {
	        var attributeName = propertyInfo.attributeName;
	        var namespace = propertyInfo.attributeNamespace;
	        // `setAttribute` with objects becomes only `[object]` in IE8/9,
	        // ('' + value) makes it output the correct toString()-value.
	        if (namespace) {
	          node.setAttributeNS(namespace, attributeName, '' + value);
	        } else if (propertyInfo.hasBooleanValue || propertyInfo.hasOverloadedBooleanValue && value === true) {
	          node.setAttribute(attributeName, '');
	        } else {
	          node.setAttribute(attributeName, '' + value);
	        }
	      } else {
	        var propName = propertyInfo.propertyName;
	        // Must explicitly cast values for HAS_SIDE_EFFECTS-properties to the
	        // property type before comparing; only `value` does and is string.
	        if (!propertyInfo.hasSideEffects || '' + node[propName] !== '' + value) {
	          // Contrary to `setAttribute`, object properties are properly
	          // `toString`ed by IE8/9.
	          node[propName] = value;
	        }
	      }
	    } else if (DOMProperty.isCustomAttribute(name)) {
	      DOMPropertyOperations.setValueForAttribute(node, name, value);
	    } else if (process.env.NODE_ENV !== 'production') {
	      warnUnknownProperty(name);
	    }
	  },

	  setValueForAttribute: function setValueForAttribute(node, name, value) {
	    if (!isAttributeNameSafe(name)) {
	      return;
	    }
	    if (value == null) {
	      node.removeAttribute(name);
	    } else {
	      node.setAttribute(name, '' + value);
	    }
	  },

	  /**
	   * Deletes the value for a property on a node.
	   *
	   * @param {DOMElement} node
	   * @param {string} name
	   */
	  deleteValueForProperty: function deleteValueForProperty(node, name) {
	    var propertyInfo = DOMProperty.properties.hasOwnProperty(name) ? DOMProperty.properties[name] : null;
	    if (propertyInfo) {
	      var mutationMethod = propertyInfo.mutationMethod;
	      if (mutationMethod) {
	        mutationMethod(node, undefined);
	      } else if (propertyInfo.mustUseAttribute) {
	        node.removeAttribute(propertyInfo.attributeName);
	      } else {
	        var propName = propertyInfo.propertyName;
	        var defaultValue = DOMProperty.getDefaultValueForProperty(node.nodeName, propName);
	        if (!propertyInfo.hasSideEffects || '' + node[propName] !== defaultValue) {
	          node[propName] = defaultValue;
	        }
	      }
	    } else if (DOMProperty.isCustomAttribute(name)) {
	      node.removeAttribute(name);
	    } else if (process.env.NODE_ENV !== 'production') {
	      warnUnknownProperty(name);
	    }
	  }

	};

	ReactPerf.measureMethods(DOMPropertyOperations, 'DOMPropertyOperations', {
	  setValueForProperty: 'setValueForProperty',
	  setValueForAttribute: 'setValueForAttribute',
	  deleteValueForProperty: 'deleteValueForProperty'
	});

	module.exports = DOMPropertyOperations;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule DOMProperty
	 * @typechecks static-only
	 */

	'use strict';

	var invariant = __webpack_require__(14);

	function checkMask(value, bitmask) {
	  return (value & bitmask) === bitmask;
	}

	var DOMPropertyInjection = {
	  /**
	   * Mapping from normalized, camelcased property names to a configuration that
	   * specifies how the associated DOM property should be accessed or rendered.
	   */
	  MUST_USE_ATTRIBUTE: 0x1,
	  MUST_USE_PROPERTY: 0x2,
	  HAS_SIDE_EFFECTS: 0x4,
	  HAS_BOOLEAN_VALUE: 0x8,
	  HAS_NUMERIC_VALUE: 0x10,
	  HAS_POSITIVE_NUMERIC_VALUE: 0x20 | 0x10,
	  HAS_OVERLOADED_BOOLEAN_VALUE: 0x40,

	  /**
	   * Inject some specialized knowledge about the DOM. This takes a config object
	   * with the following properties:
	   *
	   * isCustomAttribute: function that given an attribute name will return true
	   * if it can be inserted into the DOM verbatim. Useful for data-* or aria-*
	   * attributes where it's impossible to enumerate all of the possible
	   * attribute names,
	   *
	   * Properties: object mapping DOM property name to one of the
	   * DOMPropertyInjection constants or null. If your attribute isn't in here,
	   * it won't get written to the DOM.
	   *
	   * DOMAttributeNames: object mapping React attribute name to the DOM
	   * attribute name. Attribute names not specified use the **lowercase**
	   * normalized name.
	   *
	   * DOMAttributeNamespaces: object mapping React attribute name to the DOM
	   * attribute namespace URL. (Attribute names not specified use no namespace.)
	   *
	   * DOMPropertyNames: similar to DOMAttributeNames but for DOM properties.
	   * Property names not specified use the normalized name.
	   *
	   * DOMMutationMethods: Properties that require special mutation methods. If
	   * `value` is undefined, the mutation method should unset the property.
	   *
	   * @param {object} domPropertyConfig the config as described above.
	   */
	  injectDOMPropertyConfig: function injectDOMPropertyConfig(domPropertyConfig) {
	    var Injection = DOMPropertyInjection;
	    var Properties = domPropertyConfig.Properties || {};
	    var DOMAttributeNamespaces = domPropertyConfig.DOMAttributeNamespaces || {};
	    var DOMAttributeNames = domPropertyConfig.DOMAttributeNames || {};
	    var DOMPropertyNames = domPropertyConfig.DOMPropertyNames || {};
	    var DOMMutationMethods = domPropertyConfig.DOMMutationMethods || {};

	    if (domPropertyConfig.isCustomAttribute) {
	      DOMProperty._isCustomAttributeFunctions.push(domPropertyConfig.isCustomAttribute);
	    }

	    for (var propName in Properties) {
	      !!DOMProperty.properties.hasOwnProperty(propName) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'injectDOMPropertyConfig(...): You\'re trying to inject DOM property ' + '\'%s\' which has already been injected. You may be accidentally ' + 'injecting the same DOM property config twice, or you may be ' + 'injecting two configs that have conflicting property names.', propName) : invariant(false) : undefined;

	      var lowerCased = propName.toLowerCase();
	      var propConfig = Properties[propName];

	      var propertyInfo = {
	        attributeName: lowerCased,
	        attributeNamespace: null,
	        propertyName: propName,
	        mutationMethod: null,

	        mustUseAttribute: checkMask(propConfig, Injection.MUST_USE_ATTRIBUTE),
	        mustUseProperty: checkMask(propConfig, Injection.MUST_USE_PROPERTY),
	        hasSideEffects: checkMask(propConfig, Injection.HAS_SIDE_EFFECTS),
	        hasBooleanValue: checkMask(propConfig, Injection.HAS_BOOLEAN_VALUE),
	        hasNumericValue: checkMask(propConfig, Injection.HAS_NUMERIC_VALUE),
	        hasPositiveNumericValue: checkMask(propConfig, Injection.HAS_POSITIVE_NUMERIC_VALUE),
	        hasOverloadedBooleanValue: checkMask(propConfig, Injection.HAS_OVERLOADED_BOOLEAN_VALUE)
	      };

	      !(!propertyInfo.mustUseAttribute || !propertyInfo.mustUseProperty) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'DOMProperty: Cannot require using both attribute and property: %s', propName) : invariant(false) : undefined;
	      !(propertyInfo.mustUseProperty || !propertyInfo.hasSideEffects) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'DOMProperty: Properties that have side effects must use property: %s', propName) : invariant(false) : undefined;
	      !(propertyInfo.hasBooleanValue + propertyInfo.hasNumericValue + propertyInfo.hasOverloadedBooleanValue <= 1) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'DOMProperty: Value can be one of boolean, overloaded boolean, or ' + 'numeric value, but not a combination: %s', propName) : invariant(false) : undefined;

	      if (process.env.NODE_ENV !== 'production') {
	        DOMProperty.getPossibleStandardName[lowerCased] = propName;
	      }

	      if (DOMAttributeNames.hasOwnProperty(propName)) {
	        var attributeName = DOMAttributeNames[propName];
	        propertyInfo.attributeName = attributeName;
	        if (process.env.NODE_ENV !== 'production') {
	          DOMProperty.getPossibleStandardName[attributeName] = propName;
	        }
	      }

	      if (DOMAttributeNamespaces.hasOwnProperty(propName)) {
	        propertyInfo.attributeNamespace = DOMAttributeNamespaces[propName];
	      }

	      if (DOMPropertyNames.hasOwnProperty(propName)) {
	        propertyInfo.propertyName = DOMPropertyNames[propName];
	      }

	      if (DOMMutationMethods.hasOwnProperty(propName)) {
	        propertyInfo.mutationMethod = DOMMutationMethods[propName];
	      }

	      DOMProperty.properties[propName] = propertyInfo;
	    }
	  }
	};
	var defaultValueCache = {};

	/**
	 * DOMProperty exports lookup objects that can be used like functions:
	 *
	 *   > DOMProperty.isValid['id']
	 *   true
	 *   > DOMProperty.isValid['foobar']
	 *   undefined
	 *
	 * Although this may be confusing, it performs better in general.
	 *
	 * @see http://jsperf.com/key-exists
	 * @see http://jsperf.com/key-missing
	 */
	var DOMProperty = {

	  ID_ATTRIBUTE_NAME: 'data-reactid',

	  /**
	   * Map from property "standard name" to an object with info about how to set
	   * the property in the DOM. Each object contains:
	   *
	   * attributeName:
	   *   Used when rendering markup or with `*Attribute()`.
	   * attributeNamespace
	   * propertyName:
	   *   Used on DOM node instances. (This includes properties that mutate due to
	   *   external factors.)
	   * mutationMethod:
	   *   If non-null, used instead of the property or `setAttribute()` after
	   *   initial render.
	   * mustUseAttribute:
	   *   Whether the property must be accessed and mutated using `*Attribute()`.
	   *   (This includes anything that fails `<propName> in <element>`.)
	   * mustUseProperty:
	   *   Whether the property must be accessed and mutated as an object property.
	   * hasSideEffects:
	   *   Whether or not setting a value causes side effects such as triggering
	   *   resources to be loaded or text selection changes. If true, we read from
	   *   the DOM before updating to ensure that the value is only set if it has
	   *   changed.
	   * hasBooleanValue:
	   *   Whether the property should be removed when set to a falsey value.
	   * hasNumericValue:
	   *   Whether the property must be numeric or parse as a numeric and should be
	   *   removed when set to a falsey value.
	   * hasPositiveNumericValue:
	   *   Whether the property must be positive numeric or parse as a positive
	   *   numeric and should be removed when set to a falsey value.
	   * hasOverloadedBooleanValue:
	   *   Whether the property can be used as a flag as well as with a value.
	   *   Removed when strictly equal to false; present without a value when
	   *   strictly equal to true; present with a value otherwise.
	   */
	  properties: {},

	  /**
	   * Mapping from lowercase property names to the properly cased version, used
	   * to warn in the case of missing properties. Available only in __DEV__.
	   * @type {Object}
	   */
	  getPossibleStandardName: process.env.NODE_ENV !== 'production' ? {} : null,

	  /**
	   * All of the isCustomAttribute() functions that have been injected.
	   */
	  _isCustomAttributeFunctions: [],

	  /**
	   * Checks whether a property name is a custom attribute.
	   * @method
	   */
	  isCustomAttribute: function isCustomAttribute(attributeName) {
	    for (var i = 0; i < DOMProperty._isCustomAttributeFunctions.length; i++) {
	      var isCustomAttributeFn = DOMProperty._isCustomAttributeFunctions[i];
	      if (isCustomAttributeFn(attributeName)) {
	        return true;
	      }
	    }
	    return false;
	  },

	  /**
	   * Returns the default property value for a DOM property (i.e., not an
	   * attribute). Most default values are '' or false, but not all. Worse yet,
	   * some (in particular, `type`) vary depending on the type of element.
	   *
	   * TODO: Is it better to grab all the possible properties when creating an
	   * element to avoid having to create the same element twice?
	   */
	  getDefaultValueForProperty: function getDefaultValueForProperty(nodeName, prop) {
	    var nodeDefaults = defaultValueCache[nodeName];
	    var testElement;
	    if (!nodeDefaults) {
	      defaultValueCache[nodeName] = nodeDefaults = {};
	    }
	    if (!(prop in nodeDefaults)) {
	      testElement = document.createElement(nodeName);
	      nodeDefaults[prop] = testElement[prop];
	    }
	    return nodeDefaults[prop];
	  },

	  injection: DOMPropertyInjection
	};

	module.exports = DOMProperty;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule quoteAttributeValueForBrowser
	 */

	'use strict';

	var escapeTextContentForBrowser = __webpack_require__(22);

	/**
	 * Escapes attribute value to prevent scripting attacks.
	 *
	 * @param {*} value Value to escape.
	 * @return {string} An escaped string.
	 */
	function quoteAttributeValueForBrowser(value) {
	  return '"' + escapeTextContentForBrowser(value) + '"';
	}

	module.exports = quoteAttributeValueForBrowser;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule warning
	 */

	'use strict';

	var emptyFunction = __webpack_require__(16);

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = emptyFunction;

	if (process.env.NODE_ENV !== 'production') {
	  warning = function warning(condition, format) {
	    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	      args[_key - 2] = arguments[_key];
	    }

	    if (format === undefined) {
	      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	    }

	    if (format.indexOf('Failed Composite propType: ') === 0) {
	      return; // Ignore CompositeComponent proptype check.
	    }

	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' + format.replace(/%s/g, function () {
	        return args[argIndex++];
	      });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // --- Welcome to debugging React ---
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch (x) {}
	    }
	  };
	}

	module.exports = warning;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactComponentBrowserEnvironment
	 */

	'use strict';

	var ReactDOMIDOperations = __webpack_require__(28);
	var ReactMount = __webpack_require__(29);

	/**
	 * Abstracts away all functionality of the reconciler that requires knowledge of
	 * the browser context. TODO: These callers should be refactored to avoid the
	 * need for this injection.
	 */
	var ReactComponentBrowserEnvironment = {

	  processChildrenUpdates: ReactDOMIDOperations.dangerouslyProcessChildrenUpdates,

	  replaceNodeWithMarkupByID: ReactDOMIDOperations.dangerouslyReplaceNodeWithMarkupByID,

	  /**
	   * If a particular environment requires that some resources be cleaned up,
	   * specify this in the injected Mixin. In the DOM, we would likely want to
	   * purge any cached node ID lookups.
	   *
	   * @private
	   */
	  unmountIDFromEnvironment: function unmountIDFromEnvironment(rootNodeID) {
	    ReactMount.purgeID(rootNodeID);
	  }

	};

	module.exports = ReactComponentBrowserEnvironment;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMIDOperations
	 * @typechecks static-only
	 */

	'use strict';

	var DOMChildrenOperations = __webpack_require__(8);
	var DOMPropertyOperations = __webpack_require__(23);
	var ReactMount = __webpack_require__(29);
	var ReactPerf = __webpack_require__(19);

	var invariant = __webpack_require__(14);

	/**
	 * Errors for properties that should not be updated with `updatePropertyByID()`.
	 *
	 * @type {object}
	 * @private
	 */
	var INVALID_PROPERTY_ERRORS = {
	  dangerouslySetInnerHTML: '`dangerouslySetInnerHTML` must be set using `updateInnerHTMLByID()`.',
	  style: '`style` must be set using `updateStylesByID()`.'
	};

	/**
	 * Operations used to process updates to DOM nodes.
	 */
	var ReactDOMIDOperations = {

	  /**
	   * Updates a DOM node with new property values. This should only be used to
	   * update DOM properties in `DOMProperty`.
	   *
	   * @param {string} id ID of the node to update.
	   * @param {string} name A valid property name, see `DOMProperty`.
	   * @param {*} value New value of the property.
	   * @internal
	   */
	  updatePropertyByID: function updatePropertyByID(id, name, value) {
	    var node = ReactMount.getNode(id);
	    !!INVALID_PROPERTY_ERRORS.hasOwnProperty(name) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'updatePropertyByID(...): %s', INVALID_PROPERTY_ERRORS[name]) : invariant(false) : undefined;

	    // If we're updating to null or undefined, we should remove the property
	    // from the DOM node instead of inadvertantly setting to a string. This
	    // brings us in line with the same behavior we have on initial render.
	    if (value != null) {
	      DOMPropertyOperations.setValueForProperty(node, name, value);
	    } else {
	      DOMPropertyOperations.deleteValueForProperty(node, name);
	    }
	  },

	  /**
	   * Replaces a DOM node that exists in the document with markup.
	   *
	   * @param {string} id ID of child to be replaced.
	   * @param {string} markup Dangerous markup to inject in place of child.
	   * @internal
	   * @see {Danger.dangerouslyReplaceNodeWithMarkup}
	   */
	  dangerouslyReplaceNodeWithMarkupByID: function dangerouslyReplaceNodeWithMarkupByID(id, markup) {
	    var node = ReactMount.getNode(id);
	    DOMChildrenOperations.dangerouslyReplaceNodeWithMarkup(node, markup);
	  },

	  /**
	   * Updates a component's children by processing a series of updates.
	   *
	   * @param {array<object>} updates List of update configurations.
	   * @param {array<string>} markup List of markup strings.
	   * @internal
	   */
	  dangerouslyProcessChildrenUpdates: function dangerouslyProcessChildrenUpdates(updates, markup) {
	    for (var i = 0; i < updates.length; i++) {
	      updates[i].parentNode = ReactMount.getNode(updates[i].parentID);
	    }
	    DOMChildrenOperations.processUpdates(updates, markup);
	  }
	};

	ReactPerf.measureMethods(ReactDOMIDOperations, 'ReactDOMIDOperations', {
	  dangerouslyReplaceNodeWithMarkupByID: 'dangerouslyReplaceNodeWithMarkupByID',
	  dangerouslyProcessChildrenUpdates: 'dangerouslyProcessChildrenUpdates'
	});

	module.exports = ReactDOMIDOperations;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactMount
	 */

	'use strict';

	var DOMProperty = __webpack_require__(24);
	var ReactBrowserEventEmitter = __webpack_require__(30);
	var ReactCurrentOwner = __webpack_require__(6);
	var ReactDOMFeatureFlags = __webpack_require__(42);
	var ReactElement = __webpack_require__(43);
	var ReactEmptyComponentRegistry = __webpack_require__(45);
	var ReactInstanceHandles = __webpack_require__(46);
	var ReactInstanceMap = __webpack_require__(48);
	var ReactMarkupChecksum = __webpack_require__(49);
	var ReactPerf = __webpack_require__(19);
	var ReactReconciler = __webpack_require__(51);
	var ReactUpdateQueue = __webpack_require__(54);
	var ReactUpdates = __webpack_require__(55);

	var assign = __webpack_require__(40);
	var emptyObject = __webpack_require__(59);
	var containsNode = __webpack_require__(60);
	var instantiateReactComponent = __webpack_require__(63);
	var invariant = __webpack_require__(14);
	var setInnerHTML = __webpack_require__(20);
	var shouldUpdateReactComponent = __webpack_require__(68);
	var validateDOMNesting = __webpack_require__(71);
	var warning = __webpack_require__(26);

	var ATTR_NAME = DOMProperty.ID_ATTRIBUTE_NAME;
	var nodeCache = {};

	var ELEMENT_NODE_TYPE = 1;
	var DOC_NODE_TYPE = 9;
	var DOCUMENT_FRAGMENT_NODE_TYPE = 11;

	var ownerDocumentContextKey = '__ReactMount_ownerDocument$' + Math.random().toString(36).slice(2);

	/** Mapping from reactRootID to React component instance. */
	var instancesByReactRootID = {};

	/** Mapping from reactRootID to `container` nodes. */
	var containersByReactRootID = {};

	if (process.env.NODE_ENV !== 'production') {
	  /** __DEV__-only mapping from reactRootID to root elements. */
	  var rootElementsByReactRootID = {};
	}

	// Used to store breadth-first search state in findComponentRoot.
	var findComponentRootReusableArray = [];

	/**
	 * Finds the index of the first character
	 * that's not common between the two given strings.
	 *
	 * @return {number} the index of the character where the strings diverge
	 */
	function firstDifferenceIndex(string1, string2) {
	  var minLen = Math.min(string1.length, string2.length);
	  for (var i = 0; i < minLen; i++) {
	    if (string1.charAt(i) !== string2.charAt(i)) {
	      return i;
	    }
	  }
	  return string1.length === string2.length ? -1 : minLen;
	}

	/**
	 * @param {DOMElement|DOMDocument} container DOM element that may contain
	 * a React component
	 * @return {?*} DOM element that may have the reactRoot ID, or null.
	 */
	function getReactRootElementInContainer(container) {
	  if (!container) {
	    return null;
	  }

	  if (container.nodeType === DOC_NODE_TYPE) {
	    return container.documentElement;
	  } else {
	    return container.firstChild;
	  }
	}

	/**
	 * @param {DOMElement} container DOM element that may contain a React component.
	 * @return {?string} A "reactRoot" ID, if a React component is rendered.
	 */
	function getReactRootID(container) {
	  var rootElement = getReactRootElementInContainer(container);
	  return rootElement && ReactMount.getID(rootElement);
	}

	/**
	 * Accessing node[ATTR_NAME] or calling getAttribute(ATTR_NAME) on a form
	 * element can return its control whose name or ID equals ATTR_NAME. All
	 * DOM nodes support `getAttributeNode` but this can also get called on
	 * other objects so just return '' if we're given something other than a
	 * DOM node (such as window).
	 *
	 * @param {?DOMElement|DOMWindow|DOMDocument|DOMTextNode} node DOM node.
	 * @return {string} ID of the supplied `domNode`.
	 */
	function getID(node) {
	  var id = internalGetID(node);
	  if (id) {
	    if (nodeCache.hasOwnProperty(id)) {
	      var cached = nodeCache[id];
	      if (cached !== node) {
	        !!isValid(cached, id) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactMount: Two valid but unequal nodes with the same `%s`: %s', ATTR_NAME, id) : invariant(false) : undefined;

	        nodeCache[id] = node;
	      }
	    } else {
	      nodeCache[id] = node;
	    }
	  }

	  return id;
	}

	function internalGetID(node) {
	  // If node is something like a window, document, or text node, none of
	  // which support attributes or a .getAttribute method, gracefully return
	  // the empty string, as if the attribute were missing.
	  return node && node.getAttribute && node.getAttribute(ATTR_NAME) || '';
	}

	/**
	 * Sets the React-specific ID of the given node.
	 *
	 * @param {DOMElement} node The DOM node whose ID will be set.
	 * @param {string} id The value of the ID attribute.
	 */
	function setID(node, id) {
	  var oldID = internalGetID(node);
	  if (oldID !== id) {
	    delete nodeCache[oldID];
	  }
	  node.setAttribute(ATTR_NAME, id);
	  nodeCache[id] = node;
	}

	/**
	 * Finds the node with the supplied React-generated DOM ID.
	 *
	 * @param {string} id A React-generated DOM ID.
	 * @return {DOMElement} DOM node with the suppled `id`.
	 * @internal
	 */
	function getNode(id) {
	  if (!nodeCache.hasOwnProperty(id) || !isValid(nodeCache[id], id)) {
	    nodeCache[id] = ReactMount.findReactNodeByID(id);
	  }
	  return nodeCache[id];
	}

	/**
	 * Finds the node with the supplied public React instance.
	 *
	 * @param {*} instance A public React instance.
	 * @return {?DOMElement} DOM node with the suppled `id`.
	 * @internal
	 */
	function getNodeFromInstance(instance) {
	  var id = ReactInstanceMap.get(instance)._rootNodeID;
	  if (ReactEmptyComponentRegistry.isNullComponentID(id)) {
	    return null;
	  }
	  if (!nodeCache.hasOwnProperty(id) || !isValid(nodeCache[id], id)) {
	    nodeCache[id] = ReactMount.findReactNodeByID(id);
	  }
	  return nodeCache[id];
	}

	/**
	 * A node is "valid" if it is contained by a currently mounted container.
	 *
	 * This means that the node does not have to be contained by a document in
	 * order to be considered valid.
	 *
	 * @param {?DOMElement} node The candidate DOM node.
	 * @param {string} id The expected ID of the node.
	 * @return {boolean} Whether the node is contained by a mounted container.
	 */
	function isValid(node, id) {
	  if (node) {
	    !(internalGetID(node) === id) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactMount: Unexpected modification of `%s`', ATTR_NAME) : invariant(false) : undefined;

	    var container = ReactMount.findReactContainerForID(id);
	    if (container && containsNode(container, node)) {
	      return true;
	    }
	  }

	  return false;
	}

	/**
	 * Causes the cache to forget about one React-specific ID.
	 *
	 * @param {string} id The ID to forget.
	 */
	function purgeID(id) {
	  delete nodeCache[id];
	}

	var deepestNodeSoFar = null;
	function findDeepestCachedAncestorImpl(ancestorID) {
	  var ancestor = nodeCache[ancestorID];
	  if (ancestor && isValid(ancestor, ancestorID)) {
	    deepestNodeSoFar = ancestor;
	  } else {
	    // This node isn't populated in the cache, so presumably none of its
	    // descendants are. Break out of the loop.
	    return false;
	  }
	}

	/**
	 * Return the deepest cached node whose ID is a prefix of `targetID`.
	 */
	function findDeepestCachedAncestor(targetID) {
	  deepestNodeSoFar = null;
	  ReactInstanceHandles.traverseAncestors(targetID, findDeepestCachedAncestorImpl);

	  var foundNode = deepestNodeSoFar;
	  deepestNodeSoFar = null;
	  return foundNode;
	}

	/**
	 * Mounts this component and inserts it into the DOM.
	 *
	 * @param {ReactComponent} componentInstance The instance to mount.
	 * @param {string} rootID DOM ID of the root node.
	 * @param {DOMElement} container DOM element to mount into.
	 * @param {ReactReconcileTransaction} transaction
	 * @param {boolean} shouldReuseMarkup If true, do not insert markup
	 */
	function mountComponentIntoNode(componentInstance, rootID, container, transaction, shouldReuseMarkup, context) {
	  if (ReactDOMFeatureFlags.useCreateElement) {
	    context = assign({}, context);
	    if (container.nodeType === DOC_NODE_TYPE) {
	      context[ownerDocumentContextKey] = container;
	    } else {
	      context[ownerDocumentContextKey] = container.ownerDocument;
	    }
	  }
	  if (process.env.NODE_ENV !== 'production') {
	    if (context === emptyObject) {
	      context = {};
	    }
	    var tag = container.nodeName.toLowerCase();
	    context[validateDOMNesting.ancestorInfoContextKey] = validateDOMNesting.updatedAncestorInfo(null, tag, null);
	  }
	  var markup = ReactReconciler.mountComponent(componentInstance, rootID, transaction, context);
	  componentInstance._renderedComponent._topLevelWrapper = componentInstance;
	  ReactMount._mountImageIntoNode(markup, container, shouldReuseMarkup, transaction);
	}

	/**
	 * Batched mount.
	 *
	 * @param {ReactComponent} componentInstance The instance to mount.
	 * @param {string} rootID DOM ID of the root node.
	 * @param {DOMElement} container DOM element to mount into.
	 * @param {boolean} shouldReuseMarkup If true, do not insert markup
	 */
	function batchedMountComponentIntoNode(componentInstance, rootID, container, shouldReuseMarkup, context) {
	  var transaction = ReactUpdates.ReactReconcileTransaction.getPooled(
	  /* forceHTML */shouldReuseMarkup);
	  transaction.perform(mountComponentIntoNode, null, componentInstance, rootID, container, transaction, shouldReuseMarkup, context);
	  ReactUpdates.ReactReconcileTransaction.release(transaction);
	}

	/**
	 * Unmounts a component and removes it from the DOM.
	 *
	 * @param {ReactComponent} instance React component instance.
	 * @param {DOMElement} container DOM element to unmount from.
	 * @final
	 * @internal
	 * @see {ReactMount.unmountComponentAtNode}
	 */
	function unmountComponentFromNode(instance, container) {
	  ReactReconciler.unmountComponent(instance);

	  if (container.nodeType === DOC_NODE_TYPE) {
	    container = container.documentElement;
	  }

	  // http://jsperf.com/emptying-a-node
	  while (container.lastChild) {
	    container.removeChild(container.lastChild);
	  }
	}

	/**
	 * True if the supplied DOM node has a direct React-rendered child that is
	 * not a React root element. Useful for warning in `render`,
	 * `unmountComponentAtNode`, etc.
	 *
	 * @param {?DOMElement} node The candidate DOM node.
	 * @return {boolean} True if the DOM element contains a direct child that was
	 * rendered by React but is not a root element.
	 * @internal
	 */
	function hasNonRootReactChild(node) {
	  var reactRootID = getReactRootID(node);
	  return reactRootID ? reactRootID !== ReactInstanceHandles.getReactRootIDFromNodeID(reactRootID) : false;
	}

	/**
	 * Returns the first (deepest) ancestor of a node which is rendered by this copy
	 * of React.
	 */
	function findFirstReactDOMImpl(node) {
	  // This node might be from another React instance, so we make sure not to
	  // examine the node cache here
	  for (; node && node.parentNode !== node; node = node.parentNode) {
	    if (node.nodeType !== 1) {
	      // Not a DOMElement, therefore not a React component
	      continue;
	    }
	    var nodeID = internalGetID(node);
	    if (!nodeID) {
	      continue;
	    }
	    var reactRootID = ReactInstanceHandles.getReactRootIDFromNodeID(nodeID);

	    // If containersByReactRootID contains the container we find by crawling up
	    // the tree, we know that this instance of React rendered the node.
	    // nb. isValid's strategy (with containsNode) does not work because render
	    // trees may be nested and we don't want a false positive in that case.
	    var current = node;
	    var lastID;
	    do {
	      lastID = internalGetID(current);
	      current = current.parentNode;
	      if (current == null) {
	        // The passed-in node has been detached from the container it was
	        // originally rendered into.
	        return null;
	      }
	    } while (lastID !== reactRootID);

	    if (current === containersByReactRootID[reactRootID]) {
	      return node;
	    }
	  }
	  return null;
	}

	/**
	 * Temporary (?) hack so that we can store all top-level pending updates on
	 * composites instead of having to worry about different types of components
	 * here.
	 */
	var TopLevelWrapper = function TopLevelWrapper() {};
	TopLevelWrapper.prototype.isReactComponent = {};
	if (process.env.NODE_ENV !== 'production') {
	  TopLevelWrapper.displayName = 'TopLevelWrapper';
	}
	TopLevelWrapper.prototype.render = function () {
	  // this.props is actually a ReactElement
	  return this.props;
	};

	/**
	 * Mounting is the process of initializing a React component by creating its
	 * representative DOM elements and inserting them into a supplied `container`.
	 * Any prior content inside `container` is destroyed in the process.
	 *
	 *   ReactMount.render(
	 *     component,
	 *     document.getElementById('container')
	 *   );
	 *
	 *   <div id="container">                   <-- Supplied `container`.
	 *     <div data-reactid=".3">              <-- Rendered reactRoot of React
	 *       // ...                                 component.
	 *     </div>
	 *   </div>
	 *
	 * Inside of `container`, the first element rendered is the "reactRoot".
	 */
	var ReactMount = {

	  TopLevelWrapper: TopLevelWrapper,

	  /** Exposed for debugging purposes **/
	  _instancesByReactRootID: instancesByReactRootID,

	  /**
	   * This is a hook provided to support rendering React components while
	   * ensuring that the apparent scroll position of its `container` does not
	   * change.
	   *
	   * @param {DOMElement} container The `container` being rendered into.
	   * @param {function} renderCallback This must be called once to do the render.
	   */
	  scrollMonitor: function scrollMonitor(container, renderCallback) {
	    renderCallback();
	  },

	  /**
	   * Take a component that's already mounted into the DOM and replace its props
	   * @param {ReactComponent} prevComponent component instance already in the DOM
	   * @param {ReactElement} nextElement component instance to render
	   * @param {DOMElement} container container to render into
	   * @param {?function} callback function triggered on completion
	   */
	  _updateRootComponent: function _updateRootComponent(prevComponent, nextElement, container, callback) {
	    ReactMount.scrollMonitor(container, function () {
	      ReactUpdateQueue.enqueueElementInternal(prevComponent, nextElement);
	      if (callback) {
	        ReactUpdateQueue.enqueueCallbackInternal(prevComponent, callback);
	      }
	    });

	    if (process.env.NODE_ENV !== 'production') {
	      // Record the root element in case it later gets transplanted.
	      rootElementsByReactRootID[getReactRootID(container)] = getReactRootElementInContainer(container);
	    }

	    return prevComponent;
	  },

	  /**
	   * Register a component into the instance map and starts scroll value
	   * monitoring
	   * @param {ReactComponent} nextComponent component instance to render
	   * @param {DOMElement} container container to render into
	   * @return {string} reactRoot ID prefix
	   */
	  _registerComponent: function _registerComponent(nextComponent, container) {
	    !(container && (container.nodeType === ELEMENT_NODE_TYPE || container.nodeType === DOC_NODE_TYPE || container.nodeType === DOCUMENT_FRAGMENT_NODE_TYPE)) ? process.env.NODE_ENV !== 'production' ? invariant(false, '_registerComponent(...): Target container is not a DOM element.') : invariant(false) : undefined;

	    ReactBrowserEventEmitter.ensureScrollValueMonitoring();

	    var reactRootID = ReactMount.registerContainer(container);
	    instancesByReactRootID[reactRootID] = nextComponent;
	    return reactRootID;
	  },

	  /**
	   * Render a new component into the DOM.
	   * @param {ReactElement} nextElement element to render
	   * @param {DOMElement} container container to render into
	   * @param {boolean} shouldReuseMarkup if we should skip the markup insertion
	   * @return {ReactComponent} nextComponent
	   */
	  _renderNewRootComponent: function _renderNewRootComponent(nextElement, container, shouldReuseMarkup, context) {
	    // Various parts of our code (such as ReactCompositeComponent's
	    // _renderValidatedComponent) assume that calls to render aren't nested;
	    // verify that that's the case.
	    process.env.NODE_ENV !== 'production' ? warning(ReactCurrentOwner.current == null, '_renderNewRootComponent(): Render methods should be a pure function ' + 'of props and state; triggering nested component updates from ' + 'render is not allowed. If necessary, trigger nested updates in ' + 'componentDidUpdate. Check the render method of %s.', ReactCurrentOwner.current && ReactCurrentOwner.current.getName() || 'ReactCompositeComponent') : undefined;

	    var componentInstance = instantiateReactComponent(nextElement, null);
	    var reactRootID = ReactMount._registerComponent(componentInstance, container);

	    // The initial render is synchronous but any updates that happen during
	    // rendering, in componentWillMount or componentDidMount, will be batched
	    // according to the current batching strategy.

	    ReactUpdates.batchedUpdates(batchedMountComponentIntoNode, componentInstance, reactRootID, container, shouldReuseMarkup, context);

	    if (process.env.NODE_ENV !== 'production') {
	      // Record the root element in case it later gets transplanted.
	      rootElementsByReactRootID[reactRootID] = getReactRootElementInContainer(container);
	    }

	    return componentInstance;
	  },

	  /**
	   * Renders a React component into the DOM in the supplied `container`.
	   *
	   * If the React component was previously rendered into `container`, this will
	   * perform an update on it and only mutate the DOM as necessary to reflect the
	   * latest React component.
	   *
	   * @param {ReactComponent} parentComponent The conceptual parent of this render tree.
	   * @param {ReactElement} nextElement Component element to render.
	   * @param {DOMElement} container DOM element to render into.
	   * @param {?function} callback function triggered on completion
	   * @return {ReactComponent} Component instance rendered in `container`.
	   */
	  renderSubtreeIntoContainer: function renderSubtreeIntoContainer(parentComponent, nextElement, container, callback) {
	    !(parentComponent != null && parentComponent._reactInternalInstance != null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'parentComponent must be a valid React Component') : invariant(false) : undefined;
	    return ReactMount._renderSubtreeIntoContainer(parentComponent, nextElement, container, callback);
	  },

	  _renderSubtreeIntoContainer: function _renderSubtreeIntoContainer(parentComponent, nextElement, container, callback) {
	    !ReactElement.isValidElement(nextElement) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactDOM.render(): Invalid component element.%s', typeof nextElement === 'string' ? ' Instead of passing an element string, make sure to instantiate ' + 'it by passing it to React.createElement.' : typeof nextElement === 'function' ? ' Instead of passing a component class, make sure to instantiate ' + 'it by passing it to React.createElement.' :
	    // Check if it quacks like an element
	    nextElement != null && nextElement.props !== undefined ? ' This may be caused by unintentionally loading two independent ' + 'copies of React.' : '') : invariant(false) : undefined;

	    process.env.NODE_ENV !== 'production' ? warning(!container || !container.tagName || container.tagName.toUpperCase() !== 'BODY', 'render(): Rendering components directly into document.body is ' + 'discouraged, since its children are often manipulated by third-party ' + 'scripts and browser extensions. This may lead to subtle ' + 'reconciliation issues. Try rendering into a container element created ' + 'for your app.') : undefined;

	    var nextWrappedElement = new ReactElement(TopLevelWrapper, null, null, null, null, null, nextElement);

	    var prevComponent = instancesByReactRootID[getReactRootID(container)];

	    if (prevComponent) {
	      var prevWrappedElement = prevComponent._currentElement;
	      var prevElement = prevWrappedElement.props;
	      if (shouldUpdateReactComponent(prevElement, nextElement)) {
	        var publicInst = prevComponent._renderedComponent.getPublicInstance();
	        var updatedCallback = callback && function () {
	          callback.call(publicInst);
	        };
	        ReactMount._updateRootComponent(prevComponent, nextWrappedElement, container, updatedCallback);
	        return publicInst;
	      } else {
	        ReactMount.unmountComponentAtNode(container);
	      }
	    }

	    var reactRootElement = getReactRootElementInContainer(container);
	    var containerHasReactMarkup = reactRootElement && !!internalGetID(reactRootElement);
	    var containerHasNonRootReactChild = hasNonRootReactChild(container);

	    if (process.env.NODE_ENV !== 'production') {
	      process.env.NODE_ENV !== 'production' ? warning(!containerHasNonRootReactChild, 'render(...): Replacing React-rendered children with a new root ' + 'component. If you intended to update the children of this node, ' + 'you should instead have the existing children update their state ' + 'and render the new components instead of calling ReactDOM.render.') : undefined;

	      if (!containerHasReactMarkup || reactRootElement.nextSibling) {
	        var rootElementSibling = reactRootElement;
	        while (rootElementSibling) {
	          if (internalGetID(rootElementSibling)) {
	            process.env.NODE_ENV !== 'production' ? warning(false, 'render(): Target node has markup rendered by React, but there ' + 'are unrelated nodes as well. This is most commonly caused by ' + 'white-space inserted around server-rendered markup.') : undefined;
	            break;
	          }
	          rootElementSibling = rootElementSibling.nextSibling;
	        }
	      }
	    }

	    var shouldReuseMarkup = containerHasReactMarkup && !prevComponent && !containerHasNonRootReactChild;
	    var component = ReactMount._renderNewRootComponent(nextWrappedElement, container, shouldReuseMarkup, parentComponent != null ? parentComponent._reactInternalInstance._processChildContext(parentComponent._reactInternalInstance._context) : emptyObject)._renderedComponent.getPublicInstance();
	    if (callback) {
	      callback.call(component);
	    }
	    return component;
	  },

	  /**
	   * Renders a React component into the DOM in the supplied `container`.
	   *
	   * If the React component was previously rendered into `container`, this will
	   * perform an update on it and only mutate the DOM as necessary to reflect the
	   * latest React component.
	   *
	   * @param {ReactElement} nextElement Component element to render.
	   * @param {DOMElement} container DOM element to render into.
	   * @param {?function} callback function triggered on completion
	   * @return {ReactComponent} Component instance rendered in `container`.
	   */
	  render: function render(nextElement, container, callback) {
	    return ReactMount._renderSubtreeIntoContainer(null, nextElement, container, callback);
	  },

	  /**
	   * Registers a container node into which React components will be rendered.
	   * This also creates the "reactRoot" ID that will be assigned to the element
	   * rendered within.
	   *
	   * @param {DOMElement} container DOM element to register as a container.
	   * @return {string} The "reactRoot" ID of elements rendered within.
	   */
	  registerContainer: function registerContainer(container) {
	    var reactRootID = getReactRootID(container);
	    if (reactRootID) {
	      // If one exists, make sure it is a valid "reactRoot" ID.
	      reactRootID = ReactInstanceHandles.getReactRootIDFromNodeID(reactRootID);
	    }
	    if (!reactRootID) {
	      // No valid "reactRoot" ID found, create one.
	      reactRootID = ReactInstanceHandles.createReactRootID();
	    }
	    containersByReactRootID[reactRootID] = container;
	    return reactRootID;
	  },

	  /**
	   * Unmounts and destroys the React component rendered in the `container`.
	   *
	   * @param {DOMElement} container DOM element containing a React component.
	   * @return {boolean} True if a component was found in and unmounted from
	   *                   `container`
	   */
	  unmountComponentAtNode: function unmountComponentAtNode(container) {
	    // Various parts of our code (such as ReactCompositeComponent's
	    // _renderValidatedComponent) assume that calls to render aren't nested;
	    // verify that that's the case. (Strictly speaking, unmounting won't cause a
	    // render but we still don't expect to be in a render call here.)
	    process.env.NODE_ENV !== 'production' ? warning(ReactCurrentOwner.current == null, 'unmountComponentAtNode(): Render methods should be a pure function ' + 'of props and state; triggering nested component updates from render ' + 'is not allowed. If necessary, trigger nested updates in ' + 'componentDidUpdate. Check the render method of %s.', ReactCurrentOwner.current && ReactCurrentOwner.current.getName() || 'ReactCompositeComponent') : undefined;

	    !(container && (container.nodeType === ELEMENT_NODE_TYPE || container.nodeType === DOC_NODE_TYPE || container.nodeType === DOCUMENT_FRAGMENT_NODE_TYPE)) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'unmountComponentAtNode(...): Target container is not a DOM element.') : invariant(false) : undefined;

	    var reactRootID = getReactRootID(container);
	    var component = instancesByReactRootID[reactRootID];
	    if (!component) {
	      // Check if the node being unmounted was rendered by React, but isn't a
	      // root node.
	      var containerHasNonRootReactChild = hasNonRootReactChild(container);

	      // Check if the container itself is a React root node.
	      var containerID = internalGetID(container);
	      var isContainerReactRoot = containerID && containerID === ReactInstanceHandles.getReactRootIDFromNodeID(containerID);

	      if (process.env.NODE_ENV !== 'production') {
	        process.env.NODE_ENV !== 'production' ? warning(!containerHasNonRootReactChild, 'unmountComponentAtNode(): The node you\'re attempting to unmount ' + 'was rendered by React and is not a top-level container. %s', isContainerReactRoot ? 'You may have accidentally passed in a React root node instead ' + 'of its container.' : 'Instead, have the parent component update its state and ' + 'rerender in order to remove this component.') : undefined;
	      }

	      return false;
	    }
	    ReactUpdates.batchedUpdates(unmountComponentFromNode, component, container);
	    delete instancesByReactRootID[reactRootID];
	    delete containersByReactRootID[reactRootID];
	    if (process.env.NODE_ENV !== 'production') {
	      delete rootElementsByReactRootID[reactRootID];
	    }
	    return true;
	  },

	  /**
	   * Finds the container DOM element that contains React component to which the
	   * supplied DOM `id` belongs.
	   *
	   * @param {string} id The ID of an element rendered by a React component.
	   * @return {?DOMElement} DOM element that contains the `id`.
	   */
	  findReactContainerForID: function findReactContainerForID(id) {
	    var reactRootID = ReactInstanceHandles.getReactRootIDFromNodeID(id);
	    var container = containersByReactRootID[reactRootID];

	    if (process.env.NODE_ENV !== 'production') {
	      var rootElement = rootElementsByReactRootID[reactRootID];
	      if (rootElement && rootElement.parentNode !== container) {
	        process.env.NODE_ENV !== 'production' ? warning(
	        // Call internalGetID here because getID calls isValid which calls
	        // findReactContainerForID (this function).
	        internalGetID(rootElement) === reactRootID, 'ReactMount: Root element ID differed from reactRootID.') : undefined;
	        var containerChild = container.firstChild;
	        if (containerChild && reactRootID === internalGetID(containerChild)) {
	          // If the container has a new child with the same ID as the old
	          // root element, then rootElementsByReactRootID[reactRootID] is
	          // just stale and needs to be updated. The case that deserves a
	          // warning is when the container is empty.
	          rootElementsByReactRootID[reactRootID] = containerChild;
	        } else {
	          process.env.NODE_ENV !== 'production' ? warning(false, 'ReactMount: Root element has been removed from its original ' + 'container. New container: %s', rootElement.parentNode) : undefined;
	        }
	      }
	    }

	    return container;
	  },

	  /**
	   * Finds an element rendered by React with the supplied ID.
	   *
	   * @param {string} id ID of a DOM node in the React component.
	   * @return {DOMElement} Root DOM node of the React component.
	   */
	  findReactNodeByID: function findReactNodeByID(id) {
	    var reactRoot = ReactMount.findReactContainerForID(id);
	    return ReactMount.findComponentRoot(reactRoot, id);
	  },

	  /**
	   * Traverses up the ancestors of the supplied node to find a node that is a
	   * DOM representation of a React component rendered by this copy of React.
	   *
	   * @param {*} node
	   * @return {?DOMEventTarget}
	   * @internal
	   */
	  getFirstReactDOM: function getFirstReactDOM(node) {
	    return findFirstReactDOMImpl(node);
	  },

	  /**
	   * Finds a node with the supplied `targetID` inside of the supplied
	   * `ancestorNode`.  Exploits the ID naming scheme to perform the search
	   * quickly.
	   *
	   * @param {DOMEventTarget} ancestorNode Search from this root.
	   * @pararm {string} targetID ID of the DOM representation of the component.
	   * @return {DOMEventTarget} DOM node with the supplied `targetID`.
	   * @internal
	   */
	  findComponentRoot: function findComponentRoot(ancestorNode, targetID) {
	    var firstChildren = findComponentRootReusableArray;
	    var childIndex = 0;

	    var deepestAncestor = findDeepestCachedAncestor(targetID) || ancestorNode;

	    if (process.env.NODE_ENV !== 'production') {
	      // This will throw on the next line; give an early warning
	      process.env.NODE_ENV !== 'production' ? warning(deepestAncestor != null, 'React can\'t find the root component node for data-reactid value ' + '`%s`. If you\'re seeing this message, it probably means that ' + 'you\'ve loaded two copies of React on the page. At this time, only ' + 'a single copy of React can be loaded at a time.', targetID) : undefined;
	    }

	    firstChildren[0] = deepestAncestor.firstChild;
	    firstChildren.length = 1;

	    while (childIndex < firstChildren.length) {
	      var child = firstChildren[childIndex++];
	      var targetChild;

	      while (child) {
	        var childID = ReactMount.getID(child);
	        if (childID) {
	          // Even if we find the node we're looking for, we finish looping
	          // through its siblings to ensure they're cached so that we don't have
	          // to revisit this node again. Otherwise, we make n^2 calls to getID
	          // when visiting the many children of a single node in order.

	          if (targetID === childID) {
	            targetChild = child;
	          } else if (ReactInstanceHandles.isAncestorIDOf(childID, targetID)) {
	            // If we find a child whose ID is an ancestor of the given ID,
	            // then we can be sure that we only want to search the subtree
	            // rooted at this child, so we can throw out the rest of the
	            // search state.
	            firstChildren.length = childIndex = 0;
	            firstChildren.push(child.firstChild);
	          }
	        } else {
	          // If this child had no ID, then there's a chance that it was
	          // injected automatically by the browser, as when a `<table>`
	          // element sprouts an extra `<tbody>` child as a side effect of
	          // `.innerHTML` parsing. Optimistically continue down this
	          // branch, but not before examining the other siblings.
	          firstChildren.push(child.firstChild);
	        }

	        child = child.nextSibling;
	      }

	      if (targetChild) {
	        // Emptying firstChildren/findComponentRootReusableArray is
	        // not necessary for correctness, but it helps the GC reclaim
	        // any nodes that were left at the end of the search.
	        firstChildren.length = 0;

	        return targetChild;
	      }
	    }

	    firstChildren.length = 0;

	     true ? process.env.NODE_ENV !== 'production' ? invariant(false, 'findComponentRoot(..., %s): Unable to find element. This probably ' + 'means the DOM was unexpectedly mutated (e.g., by the browser), ' + 'usually due to forgetting a <tbody> when using tables, nesting tags ' + 'like <form>, <p>, or <a>, or using non-SVG elements in an <svg> ' + 'parent. ' + 'Try inspecting the child nodes of the element with React ID `%s`.', targetID, ReactMount.getID(ancestorNode)) : invariant(false) : undefined;
	  },

	  _mountImageIntoNode: function _mountImageIntoNode(markup, container, shouldReuseMarkup, transaction) {
	    !(container && (container.nodeType === ELEMENT_NODE_TYPE || container.nodeType === DOC_NODE_TYPE || container.nodeType === DOCUMENT_FRAGMENT_NODE_TYPE)) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'mountComponentIntoNode(...): Target container is not valid.') : invariant(false) : undefined;

	    if (shouldReuseMarkup) {
	      var rootElement = getReactRootElementInContainer(container);
	      if (ReactMarkupChecksum.canReuseMarkup(markup, rootElement)) {
	        return;
	      } else {
	        var checksum = rootElement.getAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME);
	        rootElement.removeAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME);

	        var rootMarkup = rootElement.outerHTML;
	        rootElement.setAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME, checksum);

	        var normalizedMarkup = markup;
	        if (process.env.NODE_ENV !== 'production') {
	          // because rootMarkup is retrieved from the DOM, various normalizations
	          // will have occurred which will not be present in `markup`. Here,
	          // insert markup into a <div> or <iframe> depending on the container
	          // type to perform the same normalizations before comparing.
	          var normalizer;
	          if (container.nodeType === ELEMENT_NODE_TYPE) {
	            normalizer = document.createElement('div');
	            normalizer.innerHTML = markup;
	            normalizedMarkup = normalizer.innerHTML;
	          } else {
	            normalizer = document.createElement('iframe');
	            document.body.appendChild(normalizer);
	            normalizer.contentDocument.write(markup);
	            normalizedMarkup = normalizer.contentDocument.documentElement.outerHTML;
	            document.body.removeChild(normalizer);
	          }
	        }

	        var diffIndex = firstDifferenceIndex(normalizedMarkup, rootMarkup);
	        var difference = ' (client) ' + normalizedMarkup.substring(diffIndex - 20, diffIndex + 20) + '\n (server) ' + rootMarkup.substring(diffIndex - 20, diffIndex + 20);

	        !(container.nodeType !== DOC_NODE_TYPE) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'You\'re trying to render a component to the document using ' + 'server rendering but the checksum was invalid. This usually ' + 'means you rendered a different component type or props on ' + 'the client from the one on the server, or your render() ' + 'methods are impure. React cannot handle this case due to ' + 'cross-browser quirks by rendering at the document root. You ' + 'should look for environment dependent code in your components ' + 'and ensure the props are the same client and server side:\n%s', difference) : invariant(false) : undefined;

	        if (process.env.NODE_ENV !== 'production') {
	          process.env.NODE_ENV !== 'production' ? warning(false, 'React attempted to reuse markup in a container but the ' + 'checksum was invalid. This generally means that you are ' + 'using server rendering and the markup generated on the ' + 'server was not what the client was expecting. React injected ' + 'new markup to compensate which works but you have lost many ' + 'of the benefits of server rendering. Instead, figure out ' + 'why the markup being generated is different on the client ' + 'or server:\n%s', difference) : undefined;
	        }
	      }
	    }

	    !(container.nodeType !== DOC_NODE_TYPE) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'You\'re trying to render a component to the document but ' + 'you didn\'t use server rendering. We can\'t do this ' + 'without using server rendering due to cross-browser quirks. ' + 'See ReactDOMServer.renderToString() for server rendering.') : invariant(false) : undefined;

	    if (transaction.useCreateElement) {
	      while (container.lastChild) {
	        container.removeChild(container.lastChild);
	      }
	      container.appendChild(markup);
	    } else {
	      setInnerHTML(container, markup);
	    }
	  },

	  ownerDocumentContextKey: ownerDocumentContextKey,

	  /**
	   * React ID utilities.
	   */

	  getReactRootID: getReactRootID,

	  getID: getID,

	  setID: setID,

	  getNode: getNode,

	  getNodeFromInstance: getNodeFromInstance,

	  isValid: isValid,

	  purgeID: purgeID
	};

	ReactPerf.measureMethods(ReactMount, 'ReactMount', {
	  _renderNewRootComponent: '_renderNewRootComponent',
	  _mountImageIntoNode: '_mountImageIntoNode'
	});

	module.exports = ReactMount;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactBrowserEventEmitter
	 * @typechecks static-only
	 */

	'use strict';

	var EventConstants = __webpack_require__(31);
	var EventPluginHub = __webpack_require__(32);
	var EventPluginRegistry = __webpack_require__(33);
	var ReactEventEmitterMixin = __webpack_require__(38);
	var ReactPerf = __webpack_require__(19);
	var ViewportMetrics = __webpack_require__(39);

	var assign = __webpack_require__(40);
	var isEventSupported = __webpack_require__(41);

	/**
	 * Summary of `ReactBrowserEventEmitter` event handling:
	 *
	 *  - Top-level delegation is used to trap most native browser events. This
	 *    may only occur in the main thread and is the responsibility of
	 *    ReactEventListener, which is injected and can therefore support pluggable
	 *    event sources. This is the only work that occurs in the main thread.
	 *
	 *  - We normalize and de-duplicate events to account for browser quirks. This
	 *    may be done in the worker thread.
	 *
	 *  - Forward these native events (with the associated top-level type used to
	 *    trap it) to `EventPluginHub`, which in turn will ask plugins if they want
	 *    to extract any synthetic events.
	 *
	 *  - The `EventPluginHub` will then process each event by annotating them with
	 *    "dispatches", a sequence of listeners and IDs that care about that event.
	 *
	 *  - The `EventPluginHub` then dispatches the events.
	 *
	 * Overview of React and the event system:
	 *
	 * +------------+    .
	 * |    DOM     |    .
	 * +------------+    .
	 *       |           .
	 *       v           .
	 * +------------+    .
	 * | ReactEvent |    .
	 * |  Listener  |    .
	 * +------------+    .                         +-----------+
	 *       |           .               +--------+|SimpleEvent|
	 *       |           .               |         |Plugin     |
	 * +-----|------+    .               v         +-----------+
	 * |     |      |    .    +--------------+                    +------------+
	 * |     +-----------.--->|EventPluginHub|                    |    Event   |
	 * |            |    .    |              |     +-----------+  | Propagators|
	 * | ReactEvent |    .    |              |     |TapEvent   |  |------------|
	 * |  Emitter   |    .    |              |<---+|Plugin     |  |other plugin|
	 * |            |    .    |              |     +-----------+  |  utilities |
	 * |     +-----------.--->|              |                    +------------+
	 * |     |      |    .    +--------------+
	 * +-----|------+    .                ^        +-----------+
	 *       |           .                |        |Enter/Leave|
	 *       +           .                +-------+|Plugin     |
	 * +-------------+   .                         +-----------+
	 * | application |   .
	 * |-------------|   .
	 * |             |   .
	 * |             |   .
	 * +-------------+   .
	 *                   .
	 *    React Core     .  General Purpose Event Plugin System
	 */

	var alreadyListeningTo = {};
	var isMonitoringScrollValue = false;
	var reactTopListenersCounter = 0;

	// For events like 'submit' which don't consistently bubble (which we trap at a
	// lower node than `document`), binding at `document` would cause duplicate
	// events so we don't include them here
	var topEventMapping = {
	  topAbort: 'abort',
	  topBlur: 'blur',
	  topCanPlay: 'canplay',
	  topCanPlayThrough: 'canplaythrough',
	  topChange: 'change',
	  topClick: 'click',
	  topCompositionEnd: 'compositionend',
	  topCompositionStart: 'compositionstart',
	  topCompositionUpdate: 'compositionupdate',
	  topContextMenu: 'contextmenu',
	  topCopy: 'copy',
	  topCut: 'cut',
	  topDoubleClick: 'dblclick',
	  topDrag: 'drag',
	  topDragEnd: 'dragend',
	  topDragEnter: 'dragenter',
	  topDragExit: 'dragexit',
	  topDragLeave: 'dragleave',
	  topDragOver: 'dragover',
	  topDragStart: 'dragstart',
	  topDrop: 'drop',
	  topDurationChange: 'durationchange',
	  topEmptied: 'emptied',
	  topEncrypted: 'encrypted',
	  topEnded: 'ended',
	  topError: 'error',
	  topFocus: 'focus',
	  topInput: 'input',
	  topKeyDown: 'keydown',
	  topKeyPress: 'keypress',
	  topKeyUp: 'keyup',
	  topLoadedData: 'loadeddata',
	  topLoadedMetadata: 'loadedmetadata',
	  topLoadStart: 'loadstart',
	  topMouseDown: 'mousedown',
	  topMouseMove: 'mousemove',
	  topMouseOut: 'mouseout',
	  topMouseOver: 'mouseover',
	  topMouseUp: 'mouseup',
	  topPaste: 'paste',
	  topPause: 'pause',
	  topPlay: 'play',
	  topPlaying: 'playing',
	  topProgress: 'progress',
	  topRateChange: 'ratechange',
	  topScroll: 'scroll',
	  topSeeked: 'seeked',
	  topSeeking: 'seeking',
	  topSelectionChange: 'selectionchange',
	  topStalled: 'stalled',
	  topSuspend: 'suspend',
	  topTextInput: 'textInput',
	  topTimeUpdate: 'timeupdate',
	  topTouchCancel: 'touchcancel',
	  topTouchEnd: 'touchend',
	  topTouchMove: 'touchmove',
	  topTouchStart: 'touchstart',
	  topVolumeChange: 'volumechange',
	  topWaiting: 'waiting',
	  topWheel: 'wheel'
	};

	/**
	 * To ensure no conflicts with other potential React instances on the page
	 */
	var topListenersIDKey = '_reactListenersID' + String(Math.random()).slice(2);

	function getListeningForDocument(mountAt) {
	  // In IE8, `mountAt` is a host object and doesn't have `hasOwnProperty`
	  // directly.
	  if (!Object.prototype.hasOwnProperty.call(mountAt, topListenersIDKey)) {
	    mountAt[topListenersIDKey] = reactTopListenersCounter++;
	    alreadyListeningTo[mountAt[topListenersIDKey]] = {};
	  }
	  return alreadyListeningTo[mountAt[topListenersIDKey]];
	}

	/**
	 * `ReactBrowserEventEmitter` is used to attach top-level event listeners. For
	 * example:
	 *
	 *   ReactBrowserEventEmitter.putListener('myID', 'onClick', myFunction);
	 *
	 * This would allocate a "registration" of `('onClick', myFunction)` on 'myID'.
	 *
	 * @internal
	 */
	var ReactBrowserEventEmitter = assign({}, ReactEventEmitterMixin, {

	  /**
	   * Injectable event backend
	   */
	  ReactEventListener: null,

	  injection: {
	    /**
	     * @param {object} ReactEventListener
	     */
	    injectReactEventListener: function injectReactEventListener(ReactEventListener) {
	      ReactEventListener.setHandleTopLevel(ReactBrowserEventEmitter.handleTopLevel);
	      ReactBrowserEventEmitter.ReactEventListener = ReactEventListener;
	    }
	  },

	  /**
	   * Sets whether or not any created callbacks should be enabled.
	   *
	   * @param {boolean} enabled True if callbacks should be enabled.
	   */
	  setEnabled: function setEnabled(enabled) {
	    if (ReactBrowserEventEmitter.ReactEventListener) {
	      ReactBrowserEventEmitter.ReactEventListener.setEnabled(enabled);
	    }
	  },

	  /**
	   * @return {boolean} True if callbacks are enabled.
	   */
	  isEnabled: function isEnabled() {
	    return !!(ReactBrowserEventEmitter.ReactEventListener && ReactBrowserEventEmitter.ReactEventListener.isEnabled());
	  },

	  /**
	   * We listen for bubbled touch events on the document object.
	   *
	   * Firefox v8.01 (and possibly others) exhibited strange behavior when
	   * mounting `onmousemove` events at some node that was not the document
	   * element. The symptoms were that if your mouse is not moving over something
	   * contained within that mount point (for example on the background) the
	   * top-level listeners for `onmousemove` won't be called. However, if you
	   * register the `mousemove` on the document object, then it will of course
	   * catch all `mousemove`s. This along with iOS quirks, justifies restricting
	   * top-level listeners to the document object only, at least for these
	   * movement types of events and possibly all events.
	   *
	   * @see http://www.quirksmode.org/blog/archives/2010/09/click_event_del.html
	   *
	   * Also, `keyup`/`keypress`/`keydown` do not bubble to the window on IE, but
	   * they bubble to document.
	   *
	   * @param {string} registrationName Name of listener (e.g. `onClick`).
	   * @param {object} contentDocumentHandle Document which owns the container
	   */
	  listenTo: function listenTo(registrationName, contentDocumentHandle) {
	    var mountAt = contentDocumentHandle;
	    var isListening = getListeningForDocument(mountAt);
	    var dependencies = EventPluginRegistry.registrationNameDependencies[registrationName];

	    var topLevelTypes = EventConstants.topLevelTypes;
	    for (var i = 0; i < dependencies.length; i++) {
	      var dependency = dependencies[i];
	      if (!(isListening.hasOwnProperty(dependency) && isListening[dependency])) {
	        if (dependency === topLevelTypes.topWheel) {
	          if (isEventSupported('wheel')) {
	            ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topWheel, 'wheel', mountAt);
	          } else if (isEventSupported('mousewheel')) {
	            ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topWheel, 'mousewheel', mountAt);
	          } else {
	            // Firefox needs to capture a different mouse scroll event.
	            // @see http://www.quirksmode.org/dom/events/tests/scroll.html
	            ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topWheel, 'DOMMouseScroll', mountAt);
	          }
	        } else if (dependency === topLevelTypes.topScroll) {

	          if (isEventSupported('scroll', true)) {
	            ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(topLevelTypes.topScroll, 'scroll', mountAt);
	          } else {
	            ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topScroll, 'scroll', ReactBrowserEventEmitter.ReactEventListener.WINDOW_HANDLE);
	          }
	        } else if (dependency === topLevelTypes.topFocus || dependency === topLevelTypes.topBlur) {

	          if (isEventSupported('focus', true)) {
	            ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(topLevelTypes.topFocus, 'focus', mountAt);
	            ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(topLevelTypes.topBlur, 'blur', mountAt);
	          } else if (isEventSupported('focusin')) {
	            // IE has `focusin` and `focusout` events which bubble.
	            // @see http://www.quirksmode.org/blog/archives/2008/04/delegating_the.html
	            ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topFocus, 'focusin', mountAt);
	            ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topBlur, 'focusout', mountAt);
	          }

	          // to make sure blur and focus event listeners are only attached once
	          isListening[topLevelTypes.topBlur] = true;
	          isListening[topLevelTypes.topFocus] = true;
	        } else if (topEventMapping.hasOwnProperty(dependency)) {
	          ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(dependency, topEventMapping[dependency], mountAt);
	        }

	        isListening[dependency] = true;
	      }
	    }
	  },

	  trapBubbledEvent: function trapBubbledEvent(topLevelType, handlerBaseName, handle) {
	    return ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelType, handlerBaseName, handle);
	  },

	  trapCapturedEvent: function trapCapturedEvent(topLevelType, handlerBaseName, handle) {
	    return ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(topLevelType, handlerBaseName, handle);
	  },

	  /**
	   * Listens to window scroll and resize events. We cache scroll values so that
	   * application code can access them without triggering reflows.
	   *
	   * NOTE: Scroll events do not bubble.
	   *
	   * @see http://www.quirksmode.org/dom/events/scroll.html
	   */
	  ensureScrollValueMonitoring: function ensureScrollValueMonitoring() {
	    if (!isMonitoringScrollValue) {
	      var refresh = ViewportMetrics.refreshScrollValues;
	      ReactBrowserEventEmitter.ReactEventListener.monitorScrollValue(refresh);
	      isMonitoringScrollValue = true;
	    }
	  },

	  eventNameDispatchConfigs: EventPluginHub.eventNameDispatchConfigs,

	  registrationNameModules: EventPluginHub.registrationNameModules,

	  putListener: EventPluginHub.putListener,

	  getListener: EventPluginHub.getListener,

	  deleteListener: EventPluginHub.deleteListener,

	  deleteAllListeners: EventPluginHub.deleteAllListeners

	});

	ReactPerf.measureMethods(ReactBrowserEventEmitter, 'ReactBrowserEventEmitter', {
	  putListener: 'putListener',
	  deleteListener: 'deleteListener'
	});

	module.exports = ReactBrowserEventEmitter;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule EventConstants
	 */

	'use strict';

	var keyMirror = __webpack_require__(18);

	var PropagationPhases = keyMirror({ bubbled: null, captured: null });

	/**
	 * Types of raw signals from the browser caught at the top level.
	 */
	var topLevelTypes = keyMirror({
	  topAbort: null,
	  topBlur: null,
	  topCanPlay: null,
	  topCanPlayThrough: null,
	  topChange: null,
	  topClick: null,
	  topCompositionEnd: null,
	  topCompositionStart: null,
	  topCompositionUpdate: null,
	  topContextMenu: null,
	  topCopy: null,
	  topCut: null,
	  topDoubleClick: null,
	  topDrag: null,
	  topDragEnd: null,
	  topDragEnter: null,
	  topDragExit: null,
	  topDragLeave: null,
	  topDragOver: null,
	  topDragStart: null,
	  topDrop: null,
	  topDurationChange: null,
	  topEmptied: null,
	  topEncrypted: null,
	  topEnded: null,
	  topError: null,
	  topFocus: null,
	  topInput: null,
	  topKeyDown: null,
	  topKeyPress: null,
	  topKeyUp: null,
	  topLoad: null,
	  topLoadedData: null,
	  topLoadedMetadata: null,
	  topLoadStart: null,
	  topMouseDown: null,
	  topMouseMove: null,
	  topMouseOut: null,
	  topMouseOver: null,
	  topMouseUp: null,
	  topPaste: null,
	  topPause: null,
	  topPlay: null,
	  topPlaying: null,
	  topProgress: null,
	  topRateChange: null,
	  topReset: null,
	  topScroll: null,
	  topSeeked: null,
	  topSeeking: null,
	  topSelectionChange: null,
	  topStalled: null,
	  topSubmit: null,
	  topSuspend: null,
	  topTextInput: null,
	  topTimeUpdate: null,
	  topTouchCancel: null,
	  topTouchEnd: null,
	  topTouchMove: null,
	  topTouchStart: null,
	  topVolumeChange: null,
	  topWaiting: null,
	  topWheel: null
	});

	var EventConstants = {
	  topLevelTypes: topLevelTypes,
	  PropagationPhases: PropagationPhases
	};

	module.exports = EventConstants;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule EventPluginHub
	 */

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var EventPluginRegistry = __webpack_require__(33);
	var EventPluginUtils = __webpack_require__(34);
	var ReactErrorUtils = __webpack_require__(35);

	var accumulateInto = __webpack_require__(36);
	var forEachAccumulated = __webpack_require__(37);
	var invariant = __webpack_require__(14);
	var warning = __webpack_require__(26);

	/**
	 * Internal store for event listeners
	 */
	var listenerBank = {};

	/**
	 * Internal queue of events that have accumulated their dispatches and are
	 * waiting to have their dispatches executed.
	 */
	var eventQueue = null;

	/**
	 * Dispatches an event and releases it back into the pool, unless persistent.
	 *
	 * @param {?object} event Synthetic event to be dispatched.
	 * @param {boolean} simulated If the event is simulated (changes exn behavior)
	 * @private
	 */
	var executeDispatchesAndRelease = function executeDispatchesAndRelease(event, simulated) {
	  if (event) {
	    EventPluginUtils.executeDispatchesInOrder(event, simulated);

	    if (!event.isPersistent()) {
	      event.constructor.release(event);
	    }
	  }
	};
	var executeDispatchesAndReleaseSimulated = function executeDispatchesAndReleaseSimulated(e) {
	  return executeDispatchesAndRelease(e, true);
	};
	var executeDispatchesAndReleaseTopLevel = function executeDispatchesAndReleaseTopLevel(e) {
	  return executeDispatchesAndRelease(e, false);
	};

	/**
	 * - `InstanceHandle`: [required] Module that performs logical traversals of DOM
	 *   hierarchy given ids of the logical DOM elements involved.
	 */
	var InstanceHandle = null;

	function validateInstanceHandle() {
	  var valid = InstanceHandle && InstanceHandle.traverseTwoPhase && InstanceHandle.traverseEnterLeave;
	  process.env.NODE_ENV !== 'production' ? warning(valid, 'InstanceHandle not injected before use!') : undefined;
	}

	/**
	 * This is a unified interface for event plugins to be installed and configured.
	 *
	 * Event plugins can implement the following properties:
	 *
	 *   `extractEvents` {function(string, DOMEventTarget, string, object): *}
	 *     Required. When a top-level event is fired, this method is expected to
	 *     extract synthetic events that will in turn be queued and dispatched.
	 *
	 *   `eventTypes` {object}
	 *     Optional, plugins that fire events must publish a mapping of registration
	 *     names that are used to register listeners. Values of this mapping must
	 *     be objects that contain `registrationName` or `phasedRegistrationNames`.
	 *
	 *   `executeDispatch` {function(object, function, string)}
	 *     Optional, allows plugins to override how an event gets dispatched. By
	 *     default, the listener is simply invoked.
	 *
	 * Each plugin that is injected into `EventsPluginHub` is immediately operable.
	 *
	 * @public
	 */
	var EventPluginHub = {

	  /**
	   * Methods for injecting dependencies.
	   */
	  injection: {

	    /**
	     * @param {object} InjectedMount
	     * @public
	     */
	    injectMount: EventPluginUtils.injection.injectMount,

	    /**
	     * @param {object} InjectedInstanceHandle
	     * @public
	     */
	    injectInstanceHandle: function injectInstanceHandle(InjectedInstanceHandle) {
	      InstanceHandle = InjectedInstanceHandle;
	      if (process.env.NODE_ENV !== 'production') {
	        validateInstanceHandle();
	      }
	    },

	    getInstanceHandle: function getInstanceHandle() {
	      if (process.env.NODE_ENV !== 'production') {
	        validateInstanceHandle();
	      }
	      return InstanceHandle;
	    },

	    /**
	     * @param {array} InjectedEventPluginOrder
	     * @public
	     */
	    injectEventPluginOrder: EventPluginRegistry.injectEventPluginOrder,

	    /**
	     * @param {object} injectedNamesToPlugins Map from names to plugin modules.
	     */
	    injectEventPluginsByName: EventPluginRegistry.injectEventPluginsByName

	  },

	  eventNameDispatchConfigs: EventPluginRegistry.eventNameDispatchConfigs,

	  registrationNameModules: EventPluginRegistry.registrationNameModules,

	  /**
	   * Stores `listener` at `listenerBank[registrationName][id]`. Is idempotent.
	   *
	   * @param {string} id ID of the DOM element.
	   * @param {string} registrationName Name of listener (e.g. `onClick`).
	   * @param {?function} listener The callback to store.
	   */
	  putListener: function putListener(id, registrationName, listener) {
	    !(typeof listener === 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected %s listener to be a function, instead got type %s', registrationName, typeof listener === 'undefined' ? 'undefined' : _typeof(listener)) : invariant(false) : undefined;

	    var bankForRegistrationName = listenerBank[registrationName] || (listenerBank[registrationName] = {});
	    bankForRegistrationName[id] = listener;

	    var PluginModule = EventPluginRegistry.registrationNameModules[registrationName];
	    if (PluginModule && PluginModule.didPutListener) {
	      PluginModule.didPutListener(id, registrationName, listener);
	    }
	  },

	  /**
	   * @param {string} id ID of the DOM element.
	   * @param {string} registrationName Name of listener (e.g. `onClick`).
	   * @return {?function} The stored callback.
	   */
	  getListener: function getListener(id, registrationName) {
	    var bankForRegistrationName = listenerBank[registrationName];
	    return bankForRegistrationName && bankForRegistrationName[id];
	  },

	  /**
	   * Deletes a listener from the registration bank.
	   *
	   * @param {string} id ID of the DOM element.
	   * @param {string} registrationName Name of listener (e.g. `onClick`).
	   */
	  deleteListener: function deleteListener(id, registrationName) {
	    var PluginModule = EventPluginRegistry.registrationNameModules[registrationName];
	    if (PluginModule && PluginModule.willDeleteListener) {
	      PluginModule.willDeleteListener(id, registrationName);
	    }

	    var bankForRegistrationName = listenerBank[registrationName];
	    // TODO: This should never be null -- when is it?
	    if (bankForRegistrationName) {
	      delete bankForRegistrationName[id];
	    }
	  },

	  /**
	   * Deletes all listeners for the DOM element with the supplied ID.
	   *
	   * @param {string} id ID of the DOM element.
	   */
	  deleteAllListeners: function deleteAllListeners(id) {
	    for (var registrationName in listenerBank) {
	      if (!listenerBank[registrationName][id]) {
	        continue;
	      }

	      var PluginModule = EventPluginRegistry.registrationNameModules[registrationName];
	      if (PluginModule && PluginModule.willDeleteListener) {
	        PluginModule.willDeleteListener(id, registrationName);
	      }

	      delete listenerBank[registrationName][id];
	    }
	  },

	  /**
	   * Allows registered plugins an opportunity to extract events from top-level
	   * native browser events.
	   *
	   * @param {string} topLevelType Record from `EventConstants`.
	   * @param {DOMEventTarget} topLevelTarget The listening component root node.
	   * @param {string} topLevelTargetID ID of `topLevelTarget`.
	   * @param {object} nativeEvent Native browser event.
	   * @return {*} An accumulation of synthetic events.
	   * @internal
	   */
	  extractEvents: function extractEvents(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget) {
	    var events;
	    var plugins = EventPluginRegistry.plugins;
	    for (var i = 0; i < plugins.length; i++) {
	      // Not every plugin in the ordering may be loaded at runtime.
	      var possiblePlugin = plugins[i];
	      if (possiblePlugin) {
	        var extractedEvents = possiblePlugin.extractEvents(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget);
	        if (extractedEvents) {
	          events = accumulateInto(events, extractedEvents);
	        }
	      }
	    }
	    return events;
	  },

	  /**
	   * Enqueues a synthetic event that should be dispatched when
	   * `processEventQueue` is invoked.
	   *
	   * @param {*} events An accumulation of synthetic events.
	   * @internal
	   */
	  enqueueEvents: function enqueueEvents(events) {
	    if (events) {
	      eventQueue = accumulateInto(eventQueue, events);
	    }
	  },

	  /**
	   * Dispatches all synthetic events on the event queue.
	   *
	   * @internal
	   */
	  processEventQueue: function processEventQueue(simulated) {
	    // Set `eventQueue` to null before processing it so that we can tell if more
	    // events get enqueued while processing.
	    var processingEventQueue = eventQueue;
	    eventQueue = null;
	    if (simulated) {
	      forEachAccumulated(processingEventQueue, executeDispatchesAndReleaseSimulated);
	    } else {
	      forEachAccumulated(processingEventQueue, executeDispatchesAndReleaseTopLevel);
	    }
	    !!eventQueue ? process.env.NODE_ENV !== 'production' ? invariant(false, 'processEventQueue(): Additional events were enqueued while processing ' + 'an event queue. Support for this has not yet been implemented.') : invariant(false) : undefined;
	    // This would be a good time to rethrow if any of the event handlers threw.
	    ReactErrorUtils.rethrowCaughtError();
	  },

	  /**
	   * These are needed for tests only. Do not use!
	   */
	  __purge: function __purge() {
	    listenerBank = {};
	  },

	  __getListenerBank: function __getListenerBank() {
	    return listenerBank;
	  }

	};

	module.exports = EventPluginHub;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule EventPluginRegistry
	 * @typechecks static-only
	 */

	'use strict';

	var invariant = __webpack_require__(14);

	/**
	 * Injectable ordering of event plugins.
	 */
	var EventPluginOrder = null;

	/**
	 * Injectable mapping from names to event plugin modules.
	 */
	var namesToPlugins = {};

	/**
	 * Recomputes the plugin list using the injected plugins and plugin ordering.
	 *
	 * @private
	 */
	function recomputePluginOrdering() {
	  if (!EventPluginOrder) {
	    // Wait until an `EventPluginOrder` is injected.
	    return;
	  }
	  for (var pluginName in namesToPlugins) {
	    var PluginModule = namesToPlugins[pluginName];
	    var pluginIndex = EventPluginOrder.indexOf(pluginName);
	    !(pluginIndex > -1) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'EventPluginRegistry: Cannot inject event plugins that do not exist in ' + 'the plugin ordering, `%s`.', pluginName) : invariant(false) : undefined;
	    if (EventPluginRegistry.plugins[pluginIndex]) {
	      continue;
	    }
	    !PluginModule.extractEvents ? process.env.NODE_ENV !== 'production' ? invariant(false, 'EventPluginRegistry: Event plugins must implement an `extractEvents` ' + 'method, but `%s` does not.', pluginName) : invariant(false) : undefined;
	    EventPluginRegistry.plugins[pluginIndex] = PluginModule;
	    var publishedEvents = PluginModule.eventTypes;
	    for (var eventName in publishedEvents) {
	      !publishEventForPlugin(publishedEvents[eventName], PluginModule, eventName) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'EventPluginRegistry: Failed to publish event `%s` for plugin `%s`.', eventName, pluginName) : invariant(false) : undefined;
	    }
	  }
	}

	/**
	 * Publishes an event so that it can be dispatched by the supplied plugin.
	 *
	 * @param {object} dispatchConfig Dispatch configuration for the event.
	 * @param {object} PluginModule Plugin publishing the event.
	 * @return {boolean} True if the event was successfully published.
	 * @private
	 */
	function publishEventForPlugin(dispatchConfig, PluginModule, eventName) {
	  !!EventPluginRegistry.eventNameDispatchConfigs.hasOwnProperty(eventName) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'EventPluginHub: More than one plugin attempted to publish the same ' + 'event name, `%s`.', eventName) : invariant(false) : undefined;
	  EventPluginRegistry.eventNameDispatchConfigs[eventName] = dispatchConfig;

	  var phasedRegistrationNames = dispatchConfig.phasedRegistrationNames;
	  if (phasedRegistrationNames) {
	    for (var phaseName in phasedRegistrationNames) {
	      if (phasedRegistrationNames.hasOwnProperty(phaseName)) {
	        var phasedRegistrationName = phasedRegistrationNames[phaseName];
	        publishRegistrationName(phasedRegistrationName, PluginModule, eventName);
	      }
	    }
	    return true;
	  } else if (dispatchConfig.registrationName) {
	    publishRegistrationName(dispatchConfig.registrationName, PluginModule, eventName);
	    return true;
	  }
	  return false;
	}

	/**
	 * Publishes a registration name that is used to identify dispatched events and
	 * can be used with `EventPluginHub.putListener` to register listeners.
	 *
	 * @param {string} registrationName Registration name to add.
	 * @param {object} PluginModule Plugin publishing the event.
	 * @private
	 */
	function publishRegistrationName(registrationName, PluginModule, eventName) {
	  !!EventPluginRegistry.registrationNameModules[registrationName] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'EventPluginHub: More than one plugin attempted to publish the same ' + 'registration name, `%s`.', registrationName) : invariant(false) : undefined;
	  EventPluginRegistry.registrationNameModules[registrationName] = PluginModule;
	  EventPluginRegistry.registrationNameDependencies[registrationName] = PluginModule.eventTypes[eventName].dependencies;
	}

	/**
	 * Registers plugins so that they can extract and dispatch events.
	 *
	 * @see {EventPluginHub}
	 */
	var EventPluginRegistry = {

	  /**
	   * Ordered list of injected plugins.
	   */
	  plugins: [],

	  /**
	   * Mapping from event name to dispatch config
	   */
	  eventNameDispatchConfigs: {},

	  /**
	   * Mapping from registration name to plugin module
	   */
	  registrationNameModules: {},

	  /**
	   * Mapping from registration name to event name
	   */
	  registrationNameDependencies: {},

	  /**
	   * Injects an ordering of plugins (by plugin name). This allows the ordering
	   * to be decoupled from injection of the actual plugins so that ordering is
	   * always deterministic regardless of packaging, on-the-fly injection, etc.
	   *
	   * @param {array} InjectedEventPluginOrder
	   * @internal
	   * @see {EventPluginHub.injection.injectEventPluginOrder}
	   */
	  injectEventPluginOrder: function injectEventPluginOrder(InjectedEventPluginOrder) {
	    !!EventPluginOrder ? process.env.NODE_ENV !== 'production' ? invariant(false, 'EventPluginRegistry: Cannot inject event plugin ordering more than ' + 'once. You are likely trying to load more than one copy of React.') : invariant(false) : undefined;
	    // Clone the ordering so it cannot be dynamically mutated.
	    EventPluginOrder = Array.prototype.slice.call(InjectedEventPluginOrder);
	    recomputePluginOrdering();
	  },

	  /**
	   * Injects plugins to be used by `EventPluginHub`. The plugin names must be
	   * in the ordering injected by `injectEventPluginOrder`.
	   *
	   * Plugins can be injected as part of page initialization or on-the-fly.
	   *
	   * @param {object} injectedNamesToPlugins Map from names to plugin modules.
	   * @internal
	   * @see {EventPluginHub.injection.injectEventPluginsByName}
	   */
	  injectEventPluginsByName: function injectEventPluginsByName(injectedNamesToPlugins) {
	    var isOrderingDirty = false;
	    for (var pluginName in injectedNamesToPlugins) {
	      if (!injectedNamesToPlugins.hasOwnProperty(pluginName)) {
	        continue;
	      }
	      var PluginModule = injectedNamesToPlugins[pluginName];
	      if (!namesToPlugins.hasOwnProperty(pluginName) || namesToPlugins[pluginName] !== PluginModule) {
	        !!namesToPlugins[pluginName] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'EventPluginRegistry: Cannot inject two different event plugins ' + 'using the same name, `%s`.', pluginName) : invariant(false) : undefined;
	        namesToPlugins[pluginName] = PluginModule;
	        isOrderingDirty = true;
	      }
	    }
	    if (isOrderingDirty) {
	      recomputePluginOrdering();
	    }
	  },

	  /**
	   * Looks up the plugin for the supplied event.
	   *
	   * @param {object} event A synthetic event.
	   * @return {?object} The plugin that created the supplied event.
	   * @internal
	   */
	  getPluginModuleForEvent: function getPluginModuleForEvent(event) {
	    var dispatchConfig = event.dispatchConfig;
	    if (dispatchConfig.registrationName) {
	      return EventPluginRegistry.registrationNameModules[dispatchConfig.registrationName] || null;
	    }
	    for (var phase in dispatchConfig.phasedRegistrationNames) {
	      if (!dispatchConfig.phasedRegistrationNames.hasOwnProperty(phase)) {
	        continue;
	      }
	      var PluginModule = EventPluginRegistry.registrationNameModules[dispatchConfig.phasedRegistrationNames[phase]];
	      if (PluginModule) {
	        return PluginModule;
	      }
	    }
	    return null;
	  },

	  /**
	   * Exposed for unit testing.
	   * @private
	   */
	  _resetEventPlugins: function _resetEventPlugins() {
	    EventPluginOrder = null;
	    for (var pluginName in namesToPlugins) {
	      if (namesToPlugins.hasOwnProperty(pluginName)) {
	        delete namesToPlugins[pluginName];
	      }
	    }
	    EventPluginRegistry.plugins.length = 0;

	    var eventNameDispatchConfigs = EventPluginRegistry.eventNameDispatchConfigs;
	    for (var eventName in eventNameDispatchConfigs) {
	      if (eventNameDispatchConfigs.hasOwnProperty(eventName)) {
	        delete eventNameDispatchConfigs[eventName];
	      }
	    }

	    var registrationNameModules = EventPluginRegistry.registrationNameModules;
	    for (var registrationName in registrationNameModules) {
	      if (registrationNameModules.hasOwnProperty(registrationName)) {
	        delete registrationNameModules[registrationName];
	      }
	    }
	  }

	};

	module.exports = EventPluginRegistry;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule EventPluginUtils
	 */

	'use strict';

	var EventConstants = __webpack_require__(31);
	var ReactErrorUtils = __webpack_require__(35);

	var invariant = __webpack_require__(14);
	var warning = __webpack_require__(26);

	/**
	 * Injected dependencies:
	 */

	/**
	 * - `Mount`: [required] Module that can convert between React dom IDs and
	 *   actual node references.
	 */
	var injection = {
	  Mount: null,
	  injectMount: function injectMount(InjectedMount) {
	    injection.Mount = InjectedMount;
	    if (process.env.NODE_ENV !== 'production') {
	      process.env.NODE_ENV !== 'production' ? warning(InjectedMount && InjectedMount.getNode && InjectedMount.getID, 'EventPluginUtils.injection.injectMount(...): Injected Mount ' + 'module is missing getNode or getID.') : undefined;
	    }
	  }
	};

	var topLevelTypes = EventConstants.topLevelTypes;

	function isEndish(topLevelType) {
	  return topLevelType === topLevelTypes.topMouseUp || topLevelType === topLevelTypes.topTouchEnd || topLevelType === topLevelTypes.topTouchCancel;
	}

	function isMoveish(topLevelType) {
	  return topLevelType === topLevelTypes.topMouseMove || topLevelType === topLevelTypes.topTouchMove;
	}
	function isStartish(topLevelType) {
	  return topLevelType === topLevelTypes.topMouseDown || topLevelType === topLevelTypes.topTouchStart;
	}

	var validateEventDispatches;
	if (process.env.NODE_ENV !== 'production') {
	  validateEventDispatches = function validateEventDispatches(event) {
	    var dispatchListeners = event._dispatchListeners;
	    var dispatchIDs = event._dispatchIDs;

	    var listenersIsArr = Array.isArray(dispatchListeners);
	    var idsIsArr = Array.isArray(dispatchIDs);
	    var IDsLen = idsIsArr ? dispatchIDs.length : dispatchIDs ? 1 : 0;
	    var listenersLen = listenersIsArr ? dispatchListeners.length : dispatchListeners ? 1 : 0;

	    process.env.NODE_ENV !== 'production' ? warning(idsIsArr === listenersIsArr && IDsLen === listenersLen, 'EventPluginUtils: Invalid `event`.') : undefined;
	  };
	}

	/**
	 * Dispatch the event to the listener.
	 * @param {SyntheticEvent} event SyntheticEvent to handle
	 * @param {boolean} simulated If the event is simulated (changes exn behavior)
	 * @param {function} listener Application-level callback
	 * @param {string} domID DOM id to pass to the callback.
	 */
	function executeDispatch(event, simulated, listener, domID) {
	  var type = event.type || 'unknown-event';
	  event.currentTarget = injection.Mount.getNode(domID);
	  if (simulated) {
	    ReactErrorUtils.invokeGuardedCallbackWithCatch(type, listener, event, domID);
	  } else {
	    ReactErrorUtils.invokeGuardedCallback(type, listener, event, domID);
	  }
	  event.currentTarget = null;
	}

	/**
	 * Standard/simple iteration through an event's collected dispatches.
	 */
	function executeDispatchesInOrder(event, simulated) {
	  var dispatchListeners = event._dispatchListeners;
	  var dispatchIDs = event._dispatchIDs;
	  if (process.env.NODE_ENV !== 'production') {
	    validateEventDispatches(event);
	  }
	  if (Array.isArray(dispatchListeners)) {
	    for (var i = 0; i < dispatchListeners.length; i++) {
	      if (event.isPropagationStopped()) {
	        break;
	      }
	      // Listeners and IDs are two parallel arrays that are always in sync.
	      executeDispatch(event, simulated, dispatchListeners[i], dispatchIDs[i]);
	    }
	  } else if (dispatchListeners) {
	    executeDispatch(event, simulated, dispatchListeners, dispatchIDs);
	  }
	  event._dispatchListeners = null;
	  event._dispatchIDs = null;
	}

	/**
	 * Standard/simple iteration through an event's collected dispatches, but stops
	 * at the first dispatch execution returning true, and returns that id.
	 *
	 * @return {?string} id of the first dispatch execution who's listener returns
	 * true, or null if no listener returned true.
	 */
	function executeDispatchesInOrderStopAtTrueImpl(event) {
	  var dispatchListeners = event._dispatchListeners;
	  var dispatchIDs = event._dispatchIDs;
	  if (process.env.NODE_ENV !== 'production') {
	    validateEventDispatches(event);
	  }
	  if (Array.isArray(dispatchListeners)) {
	    for (var i = 0; i < dispatchListeners.length; i++) {
	      if (event.isPropagationStopped()) {
	        break;
	      }
	      // Listeners and IDs are two parallel arrays that are always in sync.
	      if (dispatchListeners[i](event, dispatchIDs[i])) {
	        return dispatchIDs[i];
	      }
	    }
	  } else if (dispatchListeners) {
	    if (dispatchListeners(event, dispatchIDs)) {
	      return dispatchIDs;
	    }
	  }
	  return null;
	}

	/**
	 * @see executeDispatchesInOrderStopAtTrueImpl
	 */
	function executeDispatchesInOrderStopAtTrue(event) {
	  var ret = executeDispatchesInOrderStopAtTrueImpl(event);
	  event._dispatchIDs = null;
	  event._dispatchListeners = null;
	  return ret;
	}

	/**
	 * Execution of a "direct" dispatch - there must be at most one dispatch
	 * accumulated on the event or it is considered an error. It doesn't really make
	 * sense for an event with multiple dispatches (bubbled) to keep track of the
	 * return values at each dispatch execution, but it does tend to make sense when
	 * dealing with "direct" dispatches.
	 *
	 * @return {*} The return value of executing the single dispatch.
	 */
	function executeDirectDispatch(event) {
	  if (process.env.NODE_ENV !== 'production') {
	    validateEventDispatches(event);
	  }
	  var dispatchListener = event._dispatchListeners;
	  var dispatchID = event._dispatchIDs;
	  !!Array.isArray(dispatchListener) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'executeDirectDispatch(...): Invalid `event`.') : invariant(false) : undefined;
	  var res = dispatchListener ? dispatchListener(event, dispatchID) : null;
	  event._dispatchListeners = null;
	  event._dispatchIDs = null;
	  return res;
	}

	/**
	 * @param {SyntheticEvent} event
	 * @return {boolean} True iff number of dispatches accumulated is greater than 0.
	 */
	function hasDispatches(event) {
	  return !!event._dispatchListeners;
	}

	/**
	 * General utilities that are useful in creating custom Event Plugins.
	 */
	var EventPluginUtils = {
	  isEndish: isEndish,
	  isMoveish: isMoveish,
	  isStartish: isStartish,

	  executeDirectDispatch: executeDirectDispatch,
	  executeDispatchesInOrder: executeDispatchesInOrder,
	  executeDispatchesInOrderStopAtTrue: executeDispatchesInOrderStopAtTrue,
	  hasDispatches: hasDispatches,

	  getNode: function getNode(id) {
	    return injection.Mount.getNode(id);
	  },
	  getID: function getID(node) {
	    return injection.Mount.getID(node);
	  },

	  injection: injection
	};

	module.exports = EventPluginUtils;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactErrorUtils
	 * @typechecks
	 */

	'use strict';

	var caughtError = null;

	/**
	 * Call a function while guarding against errors that happens within it.
	 *
	 * @param {?String} name of the guard to use for logging or debugging
	 * @param {Function} func The function to invoke
	 * @param {*} a First argument
	 * @param {*} b Second argument
	 */
	function invokeGuardedCallback(name, func, a, b) {
	  try {
	    return func(a, b);
	  } catch (x) {
	    if (caughtError === null) {
	      caughtError = x;
	    }
	    return undefined;
	  }
	}

	var ReactErrorUtils = {
	  invokeGuardedCallback: invokeGuardedCallback,

	  /**
	   * Invoked by ReactTestUtils.Simulate so that any errors thrown by the event
	   * handler are sure to be rethrown by rethrowCaughtError.
	   */
	  invokeGuardedCallbackWithCatch: invokeGuardedCallback,

	  /**
	   * During execution of guarded functions we will capture the first error which
	   * we will rethrow to be handled by the top level error handler.
	   */
	  rethrowCaughtError: function rethrowCaughtError() {
	    if (caughtError) {
	      var error = caughtError;
	      caughtError = null;
	      throw error;
	    }
	  }
	};

	if (process.env.NODE_ENV !== 'production') {
	  /**
	   * To help development we can get better devtools integration by simulating a
	   * real browser event.
	   */
	  if (typeof window !== 'undefined' && typeof window.dispatchEvent === 'function' && typeof document !== 'undefined' && typeof document.createEvent === 'function') {
	    var fakeNode = document.createElement('react');
	    ReactErrorUtils.invokeGuardedCallback = function (name, func, a, b) {
	      var boundFunc = func.bind(null, a, b);
	      var evtType = 'react-' + name;
	      fakeNode.addEventListener(evtType, boundFunc, false);
	      var evt = document.createEvent('Event');
	      evt.initEvent(evtType, false, false);
	      fakeNode.dispatchEvent(evt);
	      fakeNode.removeEventListener(evtType, boundFunc, false);
	    };
	  }
	}

	module.exports = ReactErrorUtils;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule accumulateInto
	 */

	'use strict';

	var invariant = __webpack_require__(14);

	/**
	 *
	 * Accumulates items that must not be null or undefined into the first one. This
	 * is used to conserve memory by avoiding array allocations, and thus sacrifices
	 * API cleanness. Since `current` can be null before being passed in and not
	 * null after this function, make sure to assign it back to `current`:
	 *
	 * `a = accumulateInto(a, b);`
	 *
	 * This API should be sparingly used. Try `accumulate` for something cleaner.
	 *
	 * @return {*|array<*>} An accumulation of items.
	 */

	function accumulateInto(current, next) {
	  !(next != null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'accumulateInto(...): Accumulated items must not be null or undefined.') : invariant(false) : undefined;
	  if (current == null) {
	    return next;
	  }

	  // Both are not empty. Warning: Never call x.concat(y) when you are not
	  // certain that x is an Array (x could be a string with concat method).
	  var currentIsArray = Array.isArray(current);
	  var nextIsArray = Array.isArray(next);

	  if (currentIsArray && nextIsArray) {
	    current.push.apply(current, next);
	    return current;
	  }

	  if (currentIsArray) {
	    current.push(next);
	    return current;
	  }

	  if (nextIsArray) {
	    // A bit too dangerous to mutate `next`.
	    return [current].concat(next);
	  }

	  return [current, next];
	}

	module.exports = accumulateInto;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 37 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule forEachAccumulated
	 */

	'use strict';

	/**
	 * @param {array} arr an "accumulation" of items which is either an Array or
	 * a single item. Useful when paired with the `accumulate` module. This is a
	 * simple utility that allows us to reason about a collection of items, but
	 * handling the case when there is exactly one item (and we do not need to
	 * allocate an array).
	 */

	var forEachAccumulated = function forEachAccumulated(arr, cb, scope) {
	  if (Array.isArray(arr)) {
	    arr.forEach(cb, scope);
	  } else if (arr) {
	    cb.call(scope, arr);
	  }
	};

	module.exports = forEachAccumulated;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactEventEmitterMixin
	 */

	'use strict';

	var EventPluginHub = __webpack_require__(32);

	function runEventQueueInBatch(events) {
	  EventPluginHub.enqueueEvents(events);
	  EventPluginHub.processEventQueue(false);
	}

	var ReactEventEmitterMixin = {

	  /**
	   * Streams a fired top-level event to `EventPluginHub` where plugins have the
	   * opportunity to create `ReactEvent`s to be dispatched.
	   *
	   * @param {string} topLevelType Record from `EventConstants`.
	   * @param {object} topLevelTarget The listening component root node.
	   * @param {string} topLevelTargetID ID of `topLevelTarget`.
	   * @param {object} nativeEvent Native environment event.
	   */
	  handleTopLevel: function handleTopLevel(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget) {
	    var events = EventPluginHub.extractEvents(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget);
	    runEventQueueInBatch(events);
	  }
	};

	module.exports = ReactEventEmitterMixin;

/***/ },
/* 39 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ViewportMetrics
	 */

	'use strict';

	var ViewportMetrics = {

	  currentScrollLeft: 0,

	  currentScrollTop: 0,

	  refreshScrollValues: function refreshScrollValues(scrollPosition) {
	    ViewportMetrics.currentScrollLeft = scrollPosition.x;
	    ViewportMetrics.currentScrollTop = scrollPosition.y;
	  }

	};

	module.exports = ViewportMetrics;

/***/ },
/* 40 */
/***/ function(module, exports) {

	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule Object.assign
	 */

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.assign

	'use strict';

	function assign(target, sources) {
	  if (target == null) {
	    throw new TypeError('Object.assign target cannot be null or undefined');
	  }

	  var to = Object(target);
	  var hasOwnProperty = Object.prototype.hasOwnProperty;

	  for (var nextIndex = 1; nextIndex < arguments.length; nextIndex++) {
	    var nextSource = arguments[nextIndex];
	    if (nextSource == null) {
	      continue;
	    }

	    var from = Object(nextSource);

	    // We don't currently support accessors nor proxies. Therefore this
	    // copy cannot throw. If we ever supported this then we must handle
	    // exceptions and side-effects. We don't support symbols so they won't
	    // be transferred.

	    for (var key in from) {
	      if (hasOwnProperty.call(from, key)) {
	        to[key] = from[key];
	      }
	    }
	  }

	  return to;
	}

	module.exports = assign;

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule isEventSupported
	 */

	'use strict';

	var ExecutionEnvironment = __webpack_require__(10);

	var useHasFeature;
	if (ExecutionEnvironment.canUseDOM) {
	  useHasFeature = document.implementation && document.implementation.hasFeature &&
	  // always returns true in newer browsers as per the standard.
	  // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
	  document.implementation.hasFeature('', '') !== true;
	}

	/**
	 * Checks if an event is supported in the current execution environment.
	 *
	 * NOTE: This will not work correctly for non-generic events such as `change`,
	 * `reset`, `load`, `error`, and `select`.
	 *
	 * Borrows from Modernizr.
	 *
	 * @param {string} eventNameSuffix Event name, e.g. "click".
	 * @param {?boolean} capture Check if the capture phase is supported.
	 * @return {boolean} True if the event is supported.
	 * @internal
	 * @license Modernizr 3.0.0pre (Custom Build) | MIT
	 */
	function isEventSupported(eventNameSuffix, capture) {
	  if (!ExecutionEnvironment.canUseDOM || capture && !('addEventListener' in document)) {
	    return false;
	  }

	  var eventName = 'on' + eventNameSuffix;
	  var isSupported = eventName in document;

	  if (!isSupported) {
	    var element = document.createElement('div');
	    element.setAttribute(eventName, 'return;');
	    isSupported = typeof element[eventName] === 'function';
	  }

	  if (!isSupported && useHasFeature && eventNameSuffix === 'wheel') {
	    // This is the only way to test support for the `wheel` event in IE9+.
	    isSupported = document.implementation.hasFeature('Events.wheel', '3.0');
	  }

	  return isSupported;
	}

	module.exports = isEventSupported;

/***/ },
/* 42 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMFeatureFlags
	 */

	'use strict';

	var ReactDOMFeatureFlags = {
	  useCreateElement: false
	};

	module.exports = ReactDOMFeatureFlags;

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactElement
	 */

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var ReactCurrentOwner = __webpack_require__(6);

	var assign = __webpack_require__(40);
	var canDefineProperty = __webpack_require__(44);

	// The Symbol used to tag the ReactElement type. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 0xeac7;

	var RESERVED_PROPS = {
	  key: true,
	  ref: true,
	  __self: true,
	  __source: true
	};

	/**
	 * Base constructor for all React elements. This is only used to make this
	 * work with a dynamic instanceof check. Nothing should live on this prototype.
	 *
	 * @param {*} type
	 * @param {*} key
	 * @param {string|object} ref
	 * @param {*} self A *temporary* helper to detect places where `this` is
	 * different from the `owner` when React.createElement is called, so that we
	 * can warn. We want to get rid of owner and replace string `ref`s with arrow
	 * functions, and as long as `this` and owner are the same, there will be no
	 * change in behavior.
	 * @param {*} source An annotation object (added by a transpiler or otherwise)
	 * indicating filename, line number, and/or other information.
	 * @param {*} owner
	 * @param {*} props
	 * @internal
	 */
	var ReactElement = function ReactElement(type, key, ref, self, source, owner, props) {
	  var element = {
	    // This tag allow us to uniquely identify this as a React Element
	    $$typeof: REACT_ELEMENT_TYPE,

	    // Built-in properties that belong on the element
	    type: type,
	    key: key,
	    ref: ref,
	    props: props,

	    // Record the component responsible for creating this element.
	    _owner: owner
	  };

	  if (process.env.NODE_ENV !== 'production') {
	    // The validation flag is currently mutative. We put it on
	    // an external backing store so that we can freeze the whole object.
	    // This can be replaced with a WeakMap once they are implemented in
	    // commonly used development environments.
	    element._store = {};

	    // To make comparing ReactElements easier for testing purposes, we make
	    // the validation flag non-enumerable (where possible, which should
	    // include every environment we run tests in), so the test framework
	    // ignores it.
	    if (canDefineProperty) {
	      Object.defineProperty(element._store, 'validated', {
	        configurable: false,
	        enumerable: false,
	        writable: true,
	        value: false
	      });
	      // self and source are DEV only properties.
	      Object.defineProperty(element, '_self', {
	        configurable: false,
	        enumerable: false,
	        writable: false,
	        value: self
	      });
	      // Two elements created in two different places should be considered
	      // equal for testing purposes and therefore we hide it from enumeration.
	      Object.defineProperty(element, '_source', {
	        configurable: false,
	        enumerable: false,
	        writable: false,
	        value: source
	      });
	    } else {
	      element._store.validated = false;
	      element._self = self;
	      element._source = source;
	    }
	    Object.freeze(element.props);
	    Object.freeze(element);
	  }

	  return element;
	};

	ReactElement.createElement = function (type, config, children) {
	  var propName;

	  // Reserved names are extracted
	  var props = {};

	  var key = null;
	  var ref = null;
	  var self = null;
	  var source = null;

	  if (config != null) {
	    ref = config.ref === undefined ? null : config.ref;
	    key = config.key === undefined ? null : '' + config.key;
	    self = config.__self === undefined ? null : config.__self;
	    source = config.__source === undefined ? null : config.__source;
	    // Remaining properties are added to a new props object
	    for (propName in config) {
	      if (config.hasOwnProperty(propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        props[propName] = config[propName];
	      }
	    }
	  }

	  // Children can be more than one argument, and those are transferred onto
	  // the newly allocated props object.
	  var childrenLength = arguments.length - 2;
	  if (childrenLength === 1) {
	    props.children = children;
	  } else if (childrenLength > 1) {
	    var childArray = Array(childrenLength);
	    for (var i = 0; i < childrenLength; i++) {
	      childArray[i] = arguments[i + 2];
	    }
	    props.children = childArray;
	  }

	  // Resolve default props
	  if (type && type.defaultProps) {
	    var defaultProps = type.defaultProps;
	    for (propName in defaultProps) {
	      if (typeof props[propName] === 'undefined') {
	        props[propName] = defaultProps[propName];
	      }
	    }
	  }

	  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
	};

	ReactElement.createFactory = function (type) {
	  var factory = ReactElement.createElement.bind(null, type);
	  // Expose the type on the factory and the prototype so that it can be
	  // easily accessed on elements. E.g. `<Foo />.type === Foo`.
	  // This should not be named `constructor` since this may not be the function
	  // that created the element, and it may not even be a constructor.
	  // Legacy hook TODO: Warn if this is accessed
	  factory.type = type;
	  return factory;
	};

	ReactElement.cloneAndReplaceKey = function (oldElement, newKey) {
	  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);

	  return newElement;
	};

	ReactElement.cloneAndReplaceProps = function (oldElement, newProps) {
	  var newElement = ReactElement(oldElement.type, oldElement.key, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, newProps);

	  if (process.env.NODE_ENV !== 'production') {
	    // If the key on the original is valid, then the clone is valid
	    newElement._store.validated = oldElement._store.validated;
	  }

	  return newElement;
	};

	ReactElement.cloneElement = function (element, config, children) {
	  var propName;

	  // Original props are copied
	  var props = assign({}, element.props);

	  // Reserved names are extracted
	  var key = element.key;
	  var ref = element.ref;
	  // Self is preserved since the owner is preserved.
	  var self = element._self;
	  // Source is preserved since cloneElement is unlikely to be targeted by a
	  // transpiler, and the original source is probably a better indicator of the
	  // true owner.
	  var source = element._source;

	  // Owner will be preserved, unless ref is overridden
	  var owner = element._owner;

	  if (config != null) {
	    if (config.ref !== undefined) {
	      // Silently steal the ref from the parent.
	      ref = config.ref;
	      owner = ReactCurrentOwner.current;
	    }
	    if (config.key !== undefined) {
	      key = '' + config.key;
	    }
	    // Remaining properties override existing props
	    for (propName in config) {
	      if (config.hasOwnProperty(propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        props[propName] = config[propName];
	      }
	    }
	  }

	  // Children can be more than one argument, and those are transferred onto
	  // the newly allocated props object.
	  var childrenLength = arguments.length - 2;
	  if (childrenLength === 1) {
	    props.children = children;
	  } else if (childrenLength > 1) {
	    var childArray = Array(childrenLength);
	    for (var i = 0; i < childrenLength; i++) {
	      childArray[i] = arguments[i + 2];
	    }
	    props.children = childArray;
	  }

	  return ReactElement(element.type, key, ref, self, source, owner, props);
	};

	/**
	 * @param {?object} object
	 * @return {boolean} True if `object` is a valid component.
	 * @final
	 */
	ReactElement.isValidElement = function (object) {
	  return (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	};

	module.exports = ReactElement;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule canDefineProperty
	 */

	'use strict';

	var canDefineProperty = false;
	if (process.env.NODE_ENV !== 'production') {
	  try {
	    Object.defineProperty({}, 'x', { get: function get() {} });
	    canDefineProperty = true;
	  } catch (x) {
	    // IE will fail on defineProperty
	  }
	}

	module.exports = canDefineProperty;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 45 */
/***/ function(module, exports) {

	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactEmptyComponentRegistry
	 */

	'use strict';

	// This registry keeps track of the React IDs of the components that rendered to
	// `null` (in reality a placeholder such as `noscript`)

	var nullComponentIDsRegistry = {};

	/**
	 * @param {string} id Component's `_rootNodeID`.
	 * @return {boolean} True if the component is rendered to null.
	 */
	function isNullComponentID(id) {
	  return !!nullComponentIDsRegistry[id];
	}

	/**
	 * Mark the component as having rendered to null.
	 * @param {string} id Component's `_rootNodeID`.
	 */
	function registerNullComponentID(id) {
	  nullComponentIDsRegistry[id] = true;
	}

	/**
	 * Unmark the component as having rendered to null: it renders to something now.
	 * @param {string} id Component's `_rootNodeID`.
	 */
	function deregisterNullComponentID(id) {
	  delete nullComponentIDsRegistry[id];
	}

	var ReactEmptyComponentRegistry = {
	  isNullComponentID: isNullComponentID,
	  registerNullComponentID: registerNullComponentID,
	  deregisterNullComponentID: deregisterNullComponentID
	};

	module.exports = ReactEmptyComponentRegistry;

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactInstanceHandles
	 * @typechecks static-only
	 */

	'use strict';

	var ReactRootIndex = __webpack_require__(47);

	var invariant = __webpack_require__(14);

	var SEPARATOR = '.';
	var SEPARATOR_LENGTH = SEPARATOR.length;

	/**
	 * Maximum depth of traversals before we consider the possibility of a bad ID.
	 */
	var MAX_TREE_DEPTH = 10000;

	/**
	 * Creates a DOM ID prefix to use when mounting React components.
	 *
	 * @param {number} index A unique integer
	 * @return {string} React root ID.
	 * @internal
	 */
	function getReactRootIDString(index) {
	  return SEPARATOR + index.toString(36);
	}

	/**
	 * Checks if a character in the supplied ID is a separator or the end.
	 *
	 * @param {string} id A React DOM ID.
	 * @param {number} index Index of the character to check.
	 * @return {boolean} True if the character is a separator or end of the ID.
	 * @private
	 */
	function isBoundary(id, index) {
	  return id.charAt(index) === SEPARATOR || index === id.length;
	}

	/**
	 * Checks if the supplied string is a valid React DOM ID.
	 *
	 * @param {string} id A React DOM ID, maybe.
	 * @return {boolean} True if the string is a valid React DOM ID.
	 * @private
	 */
	function isValidID(id) {
	  return id === '' || id.charAt(0) === SEPARATOR && id.charAt(id.length - 1) !== SEPARATOR;
	}

	/**
	 * Checks if the first ID is an ancestor of or equal to the second ID.
	 *
	 * @param {string} ancestorID
	 * @param {string} descendantID
	 * @return {boolean} True if `ancestorID` is an ancestor of `descendantID`.
	 * @internal
	 */
	function isAncestorIDOf(ancestorID, descendantID) {
	  return descendantID.indexOf(ancestorID) === 0 && isBoundary(descendantID, ancestorID.length);
	}

	/**
	 * Gets the parent ID of the supplied React DOM ID, `id`.
	 *
	 * @param {string} id ID of a component.
	 * @return {string} ID of the parent, or an empty string.
	 * @private
	 */
	function getParentID(id) {
	  return id ? id.substr(0, id.lastIndexOf(SEPARATOR)) : '';
	}

	/**
	 * Gets the next DOM ID on the tree path from the supplied `ancestorID` to the
	 * supplied `destinationID`. If they are equal, the ID is returned.
	 *
	 * @param {string} ancestorID ID of an ancestor node of `destinationID`.
	 * @param {string} destinationID ID of the destination node.
	 * @return {string} Next ID on the path from `ancestorID` to `destinationID`.
	 * @private
	 */
	function getNextDescendantID(ancestorID, destinationID) {
	  !(isValidID(ancestorID) && isValidID(destinationID)) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'getNextDescendantID(%s, %s): Received an invalid React DOM ID.', ancestorID, destinationID) : invariant(false) : undefined;
	  !isAncestorIDOf(ancestorID, destinationID) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'getNextDescendantID(...): React has made an invalid assumption about ' + 'the DOM hierarchy. Expected `%s` to be an ancestor of `%s`.', ancestorID, destinationID) : invariant(false) : undefined;
	  if (ancestorID === destinationID) {
	    return ancestorID;
	  }
	  // Skip over the ancestor and the immediate separator. Traverse until we hit
	  // another separator or we reach the end of `destinationID`.
	  var start = ancestorID.length + SEPARATOR_LENGTH;
	  var i;
	  for (i = start; i < destinationID.length; i++) {
	    if (isBoundary(destinationID, i)) {
	      break;
	    }
	  }
	  return destinationID.substr(0, i);
	}

	/**
	 * Gets the nearest common ancestor ID of two IDs.
	 *
	 * Using this ID scheme, the nearest common ancestor ID is the longest common
	 * prefix of the two IDs that immediately preceded a "marker" in both strings.
	 *
	 * @param {string} oneID
	 * @param {string} twoID
	 * @return {string} Nearest common ancestor ID, or the empty string if none.
	 * @private
	 */
	function getFirstCommonAncestorID(oneID, twoID) {
	  var minLength = Math.min(oneID.length, twoID.length);
	  if (minLength === 0) {
	    return '';
	  }
	  var lastCommonMarkerIndex = 0;
	  // Use `<=` to traverse until the "EOL" of the shorter string.
	  for (var i = 0; i <= minLength; i++) {
	    if (isBoundary(oneID, i) && isBoundary(twoID, i)) {
	      lastCommonMarkerIndex = i;
	    } else if (oneID.charAt(i) !== twoID.charAt(i)) {
	      break;
	    }
	  }
	  var longestCommonID = oneID.substr(0, lastCommonMarkerIndex);
	  !isValidID(longestCommonID) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'getFirstCommonAncestorID(%s, %s): Expected a valid React DOM ID: %s', oneID, twoID, longestCommonID) : invariant(false) : undefined;
	  return longestCommonID;
	}

	/**
	 * Traverses the parent path between two IDs (either up or down). The IDs must
	 * not be the same, and there must exist a parent path between them. If the
	 * callback returns `false`, traversal is stopped.
	 *
	 * @param {?string} start ID at which to start traversal.
	 * @param {?string} stop ID at which to end traversal.
	 * @param {function} cb Callback to invoke each ID with.
	 * @param {*} arg Argument to invoke the callback with.
	 * @param {?boolean} skipFirst Whether or not to skip the first node.
	 * @param {?boolean} skipLast Whether or not to skip the last node.
	 * @private
	 */
	function traverseParentPath(start, stop, cb, arg, skipFirst, skipLast) {
	  start = start || '';
	  stop = stop || '';
	  !(start !== stop) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'traverseParentPath(...): Cannot traverse from and to the same ID, `%s`.', start) : invariant(false) : undefined;
	  var traverseUp = isAncestorIDOf(stop, start);
	  !(traverseUp || isAncestorIDOf(start, stop)) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'traverseParentPath(%s, %s, ...): Cannot traverse from two IDs that do ' + 'not have a parent path.', start, stop) : invariant(false) : undefined;
	  // Traverse from `start` to `stop` one depth at a time.
	  var depth = 0;
	  var traverse = traverseUp ? getParentID : getNextDescendantID;
	  for (var id = start;; /* until break */id = traverse(id, stop)) {
	    var ret;
	    if ((!skipFirst || id !== start) && (!skipLast || id !== stop)) {
	      ret = cb(id, traverseUp, arg);
	    }
	    if (ret === false || id === stop) {
	      // Only break //after// visiting `stop`.
	      break;
	    }
	    !(depth++ < MAX_TREE_DEPTH) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'traverseParentPath(%s, %s, ...): Detected an infinite loop while ' + 'traversing the React DOM ID tree. This may be due to malformed IDs: %s', start, stop, id) : invariant(false) : undefined;
	  }
	}

	/**
	 * Manages the IDs assigned to DOM representations of React components. This
	 * uses a specific scheme in order to traverse the DOM efficiently (e.g. in
	 * order to simulate events).
	 *
	 * @internal
	 */
	var ReactInstanceHandles = {

	  /**
	   * Constructs a React root ID
	   * @return {string} A React root ID.
	   */
	  createReactRootID: function createReactRootID() {
	    return getReactRootIDString(ReactRootIndex.createReactRootIndex());
	  },

	  /**
	   * Constructs a React ID by joining a root ID with a name.
	   *
	   * @param {string} rootID Root ID of a parent component.
	   * @param {string} name A component's name (as flattened children).
	   * @return {string} A React ID.
	   * @internal
	   */
	  createReactID: function createReactID(rootID, name) {
	    return rootID + name;
	  },

	  /**
	   * Gets the DOM ID of the React component that is the root of the tree that
	   * contains the React component with the supplied DOM ID.
	   *
	   * @param {string} id DOM ID of a React component.
	   * @return {?string} DOM ID of the React component that is the root.
	   * @internal
	   */
	  getReactRootIDFromNodeID: function getReactRootIDFromNodeID(id) {
	    if (id && id.charAt(0) === SEPARATOR && id.length > 1) {
	      var index = id.indexOf(SEPARATOR, 1);
	      return index > -1 ? id.substr(0, index) : id;
	    }
	    return null;
	  },

	  /**
	   * Traverses the ID hierarchy and invokes the supplied `cb` on any IDs that
	   * should would receive a `mouseEnter` or `mouseLeave` event.
	   *
	   * NOTE: Does not invoke the callback on the nearest common ancestor because
	   * nothing "entered" or "left" that element.
	   *
	   * @param {string} leaveID ID being left.
	   * @param {string} enterID ID being entered.
	   * @param {function} cb Callback to invoke on each entered/left ID.
	   * @param {*} upArg Argument to invoke the callback with on left IDs.
	   * @param {*} downArg Argument to invoke the callback with on entered IDs.
	   * @internal
	   */
	  traverseEnterLeave: function traverseEnterLeave(leaveID, enterID, cb, upArg, downArg) {
	    var ancestorID = getFirstCommonAncestorID(leaveID, enterID);
	    if (ancestorID !== leaveID) {
	      traverseParentPath(leaveID, ancestorID, cb, upArg, false, true);
	    }
	    if (ancestorID !== enterID) {
	      traverseParentPath(ancestorID, enterID, cb, downArg, true, false);
	    }
	  },

	  /**
	   * Simulates the traversal of a two-phase, capture/bubble event dispatch.
	   *
	   * NOTE: This traversal happens on IDs without touching the DOM.
	   *
	   * @param {string} targetID ID of the target node.
	   * @param {function} cb Callback to invoke.
	   * @param {*} arg Argument to invoke the callback with.
	   * @internal
	   */
	  traverseTwoPhase: function traverseTwoPhase(targetID, cb, arg) {
	    if (targetID) {
	      traverseParentPath('', targetID, cb, arg, true, false);
	      traverseParentPath(targetID, '', cb, arg, false, true);
	    }
	  },

	  /**
	   * Same as `traverseTwoPhase` but skips the `targetID`.
	   */
	  traverseTwoPhaseSkipTarget: function traverseTwoPhaseSkipTarget(targetID, cb, arg) {
	    if (targetID) {
	      traverseParentPath('', targetID, cb, arg, true, true);
	      traverseParentPath(targetID, '', cb, arg, true, true);
	    }
	  },

	  /**
	   * Traverse a node ID, calling the supplied `cb` for each ancestor ID. For
	   * example, passing `.0.$row-0.1` would result in `cb` getting called
	   * with `.0`, `.0.$row-0`, and `.0.$row-0.1`.
	   *
	   * NOTE: This traversal happens on IDs without touching the DOM.
	   *
	   * @param {string} targetID ID of the target node.
	   * @param {function} cb Callback to invoke.
	   * @param {*} arg Argument to invoke the callback with.
	   * @internal
	   */
	  traverseAncestors: function traverseAncestors(targetID, cb, arg) {
	    traverseParentPath('', targetID, cb, arg, true, false);
	  },

	  getFirstCommonAncestorID: getFirstCommonAncestorID,

	  /**
	   * Exposed for unit testing.
	   * @private
	   */
	  _getNextDescendantID: getNextDescendantID,

	  isAncestorIDOf: isAncestorIDOf,

	  SEPARATOR: SEPARATOR

	};

	module.exports = ReactInstanceHandles;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 47 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactRootIndex
	 * @typechecks
	 */

	'use strict';

	var ReactRootIndexInjection = {
	  /**
	   * @param {function} _createReactRootIndex
	   */
	  injectCreateReactRootIndex: function injectCreateReactRootIndex(_createReactRootIndex) {
	    ReactRootIndex.createReactRootIndex = _createReactRootIndex;
	  }
	};

	var ReactRootIndex = {
	  createReactRootIndex: null,
	  injection: ReactRootIndexInjection
	};

	module.exports = ReactRootIndex;

/***/ },
/* 48 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactInstanceMap
	 */

	'use strict';

	/**
	 * `ReactInstanceMap` maintains a mapping from a public facing stateful
	 * instance (key) and the internal representation (value). This allows public
	 * methods to accept the user facing instance as an argument and map them back
	 * to internal methods.
	 */

	// TODO: Replace this with ES6: var ReactInstanceMap = new Map();

	var ReactInstanceMap = {

	  /**
	   * This API should be called `delete` but we'd have to make sure to always
	   * transform these to strings for IE support. When this transform is fully
	   * supported we can rename it.
	   */
	  remove: function remove(key) {
	    key._reactInternalInstance = undefined;
	  },

	  get: function get(key) {
	    return key._reactInternalInstance;
	  },

	  has: function has(key) {
	    return key._reactInternalInstance !== undefined;
	  },

	  set: function set(key, value) {
	    key._reactInternalInstance = value;
	  }

	};

	module.exports = ReactInstanceMap;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactMarkupChecksum
	 */

	'use strict';

	var adler32 = __webpack_require__(50);

	var TAG_END = /\/?>/;

	var ReactMarkupChecksum = {
	  CHECKSUM_ATTR_NAME: 'data-react-checksum',

	  /**
	   * @param {string} markup Markup string
	   * @return {string} Markup string with checksum attribute attached
	   */
	  addChecksumToMarkup: function addChecksumToMarkup(markup) {
	    var checksum = adler32(markup);

	    // Add checksum (handle both parent tags and self-closing tags)
	    return markup.replace(TAG_END, ' ' + ReactMarkupChecksum.CHECKSUM_ATTR_NAME + '="' + checksum + '"$&');
	  },

	  /**
	   * @param {string} markup to use
	   * @param {DOMElement} element root React element
	   * @returns {boolean} whether or not the markup is the same
	   */
	  canReuseMarkup: function canReuseMarkup(markup, element) {
	    var existingChecksum = element.getAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME);
	    existingChecksum = existingChecksum && parseInt(existingChecksum, 10);
	    var markupChecksum = adler32(markup);
	    return markupChecksum === existingChecksum;
	  }
	};

	module.exports = ReactMarkupChecksum;

/***/ },
/* 50 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule adler32
	 */

	'use strict';

	var MOD = 65521;

	// adler32 is not cryptographically strong, and is only used to sanity check that
	// markup generated on the server matches the markup generated on the client.
	// This implementation (a modified version of the SheetJS version) has been optimized
	// for our use case, at the expense of conforming to the adler32 specification
	// for non-ascii inputs.
	function adler32(data) {
	  var a = 1;
	  var b = 0;
	  var i = 0;
	  var l = data.length;
	  var m = l & ~0x3;
	  while (i < m) {
	    for (; i < Math.min(i + 4096, m); i += 4) {
	      b += (a += data.charCodeAt(i)) + (a += data.charCodeAt(i + 1)) + (a += data.charCodeAt(i + 2)) + (a += data.charCodeAt(i + 3));
	    }
	    a %= MOD;
	    b %= MOD;
	  }
	  for (; i < l; i++) {
	    b += a += data.charCodeAt(i);
	  }
	  a %= MOD;
	  b %= MOD;
	  return a | b << 16;
	}

	module.exports = adler32;

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactReconciler
	 */

	'use strict';

	var ReactRef = __webpack_require__(52);

	/**
	 * Helper to call ReactRef.attachRefs with this composite component, split out
	 * to avoid allocations in the transaction mount-ready queue.
	 */
	function attachRefs() {
	  ReactRef.attachRefs(this, this._currentElement);
	}

	var ReactReconciler = {

	  /**
	   * Initializes the component, renders markup, and registers event listeners.
	   *
	   * @param {ReactComponent} internalInstance
	   * @param {string} rootID DOM ID of the root node.
	   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
	   * @return {?string} Rendered markup to be inserted into the DOM.
	   * @final
	   * @internal
	   */
	  mountComponent: function mountComponent(internalInstance, rootID, transaction, context) {
	    var markup = internalInstance.mountComponent(rootID, transaction, context);
	    if (internalInstance._currentElement && internalInstance._currentElement.ref != null) {
	      transaction.getReactMountReady().enqueue(attachRefs, internalInstance);
	    }
	    return markup;
	  },

	  /**
	   * Releases any resources allocated by `mountComponent`.
	   *
	   * @final
	   * @internal
	   */
	  unmountComponent: function unmountComponent(internalInstance) {
	    ReactRef.detachRefs(internalInstance, internalInstance._currentElement);
	    internalInstance.unmountComponent();
	  },

	  /**
	   * Update a component using a new element.
	   *
	   * @param {ReactComponent} internalInstance
	   * @param {ReactElement} nextElement
	   * @param {ReactReconcileTransaction} transaction
	   * @param {object} context
	   * @internal
	   */
	  receiveComponent: function receiveComponent(internalInstance, nextElement, transaction, context) {
	    var prevElement = internalInstance._currentElement;

	    if (nextElement === prevElement && context === internalInstance._context) {
	      // Since elements are immutable after the owner is rendered,
	      // we can do a cheap identity compare here to determine if this is a
	      // superfluous reconcile. It's possible for state to be mutable but such
	      // change should trigger an update of the owner which would recreate
	      // the element. We explicitly check for the existence of an owner since
	      // it's possible for an element created outside a composite to be
	      // deeply mutated and reused.

	      // TODO: Bailing out early is just a perf optimization right?
	      // TODO: Removing the return statement should affect correctness?
	      return;
	    }

	    var refsChanged = ReactRef.shouldUpdateRefs(prevElement, nextElement);

	    if (refsChanged) {
	      ReactRef.detachRefs(internalInstance, prevElement);
	    }

	    internalInstance.receiveComponent(nextElement, transaction, context);

	    if (refsChanged && internalInstance._currentElement && internalInstance._currentElement.ref != null) {
	      transaction.getReactMountReady().enqueue(attachRefs, internalInstance);
	    }
	  },

	  /**
	   * Flush any dirty changes in a component.
	   *
	   * @param {ReactComponent} internalInstance
	   * @param {ReactReconcileTransaction} transaction
	   * @internal
	   */
	  performUpdateIfNecessary: function performUpdateIfNecessary(internalInstance, transaction) {
	    internalInstance.performUpdateIfNecessary(transaction);
	  }

	};

	module.exports = ReactReconciler;

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactRef
	 */

	'use strict';

	var ReactOwner = __webpack_require__(53);

	var ReactRef = {};

	function attachRef(ref, component, owner) {
	  if (typeof ref === 'function') {
	    ref(component.getPublicInstance());
	  } else {
	    // Legacy ref
	    ReactOwner.addComponentAsRefTo(component, ref, owner);
	  }
	}

	function detachRef(ref, component, owner) {
	  if (typeof ref === 'function') {
	    ref(null);
	  } else {
	    // Legacy ref
	    ReactOwner.removeComponentAsRefFrom(component, ref, owner);
	  }
	}

	ReactRef.attachRefs = function (instance, element) {
	  if (element === null || element === false) {
	    return;
	  }
	  var ref = element.ref;
	  if (ref != null) {
	    attachRef(ref, instance, element._owner);
	  }
	};

	ReactRef.shouldUpdateRefs = function (prevElement, nextElement) {
	  // If either the owner or a `ref` has changed, make sure the newest owner
	  // has stored a reference to `this`, and the previous owner (if different)
	  // has forgotten the reference to `this`. We use the element instead
	  // of the public this.props because the post processing cannot determine
	  // a ref. The ref conceptually lives on the element.

	  // TODO: Should this even be possible? The owner cannot change because
	  // it's forbidden by shouldUpdateReactComponent. The ref can change
	  // if you swap the keys of but not the refs. Reconsider where this check
	  // is made. It probably belongs where the key checking and
	  // instantiateReactComponent is done.

	  var prevEmpty = prevElement === null || prevElement === false;
	  var nextEmpty = nextElement === null || nextElement === false;

	  return(
	    // This has a few false positives w/r/t empty components.
	    prevEmpty || nextEmpty || nextElement._owner !== prevElement._owner || nextElement.ref !== prevElement.ref
	  );
	};

	ReactRef.detachRefs = function (instance, element) {
	  if (element === null || element === false) {
	    return;
	  }
	  var ref = element.ref;
	  if (ref != null) {
	    detachRef(ref, instance, element._owner);
	  }
	};

	module.exports = ReactRef;

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactOwner
	 */

	'use strict';

	var invariant = __webpack_require__(14);

	/**
	 * ReactOwners are capable of storing references to owned components.
	 *
	 * All components are capable of //being// referenced by owner components, but
	 * only ReactOwner components are capable of //referencing// owned components.
	 * The named reference is known as a "ref".
	 *
	 * Refs are available when mounted and updated during reconciliation.
	 *
	 *   var MyComponent = React.createClass({
	 *     render: function() {
	 *       return (
	 *         <div onClick={this.handleClick}>
	 *           <CustomComponent ref="custom" />
	 *         </div>
	 *       );
	 *     },
	 *     handleClick: function() {
	 *       this.refs.custom.handleClick();
	 *     },
	 *     componentDidMount: function() {
	 *       this.refs.custom.initialize();
	 *     }
	 *   });
	 *
	 * Refs should rarely be used. When refs are used, they should only be done to
	 * control data that is not handled by React's data flow.
	 *
	 * @class ReactOwner
	 */
	var ReactOwner = {

	  /**
	   * @param {?object} object
	   * @return {boolean} True if `object` is a valid owner.
	   * @final
	   */
	  isValidOwner: function isValidOwner(object) {
	    return !!(object && typeof object.attachRef === 'function' && typeof object.detachRef === 'function');
	  },

	  /**
	   * Adds a component by ref to an owner component.
	   *
	   * @param {ReactComponent} component Component to reference.
	   * @param {string} ref Name by which to refer to the component.
	   * @param {ReactOwner} owner Component on which to record the ref.
	   * @final
	   * @internal
	   */
	  addComponentAsRefTo: function addComponentAsRefTo(component, ref, owner) {
	    !ReactOwner.isValidOwner(owner) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'addComponentAsRefTo(...): Only a ReactOwner can have refs. You might ' + 'be adding a ref to a component that was not created inside a component\'s ' + '`render` method, or you have multiple copies of React loaded ' + '(details: https://fb.me/react-refs-must-have-owner).') : invariant(false) : undefined;
	    owner.attachRef(ref, component);
	  },

	  /**
	   * Removes a component by ref from an owner component.
	   *
	   * @param {ReactComponent} component Component to dereference.
	   * @param {string} ref Name of the ref to remove.
	   * @param {ReactOwner} owner Component on which the ref is recorded.
	   * @final
	   * @internal
	   */
	  removeComponentAsRefFrom: function removeComponentAsRefFrom(component, ref, owner) {
	    !ReactOwner.isValidOwner(owner) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'removeComponentAsRefFrom(...): Only a ReactOwner can have refs. You might ' + 'be removing a ref to a component that was not created inside a component\'s ' + '`render` method, or you have multiple copies of React loaded ' + '(details: https://fb.me/react-refs-must-have-owner).') : invariant(false) : undefined;
	    // Check that `component` is still the current ref because we do not want to
	    // detach the ref if another component stole it.
	    if (owner.getPublicInstance().refs[ref] === component.getPublicInstance()) {
	      owner.detachRef(ref);
	    }
	  }

	};

	module.exports = ReactOwner;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactUpdateQueue
	 */

	'use strict';

	var ReactCurrentOwner = __webpack_require__(6);
	var ReactElement = __webpack_require__(43);
	var ReactInstanceMap = __webpack_require__(48);
	var ReactUpdates = __webpack_require__(55);

	var assign = __webpack_require__(40);
	var invariant = __webpack_require__(14);
	var warning = __webpack_require__(26);

	function enqueueUpdate(internalInstance) {
	  ReactUpdates.enqueueUpdate(internalInstance);
	}

	function getInternalInstanceReadyForUpdate(publicInstance, callerName) {
	  var internalInstance = ReactInstanceMap.get(publicInstance);
	  if (!internalInstance) {
	    if (process.env.NODE_ENV !== 'production') {
	      // Only warn when we have a callerName. Otherwise we should be silent.
	      // We're probably calling from enqueueCallback. We don't want to warn
	      // there because we already warned for the corresponding lifecycle method.
	      process.env.NODE_ENV !== 'production' ? warning(!callerName, '%s(...): Can only update a mounted or mounting component. ' + 'This usually means you called %s() on an unmounted component. ' + 'This is a no-op. Please check the code for the %s component.', callerName, callerName, publicInstance.constructor.displayName) : undefined;
	    }
	    return null;
	  }

	  if (process.env.NODE_ENV !== 'production') {
	    process.env.NODE_ENV !== 'production' ? warning(ReactCurrentOwner.current == null, '%s(...): Cannot update during an existing state transition ' + '(such as within `render`). Render methods should be a pure function ' + 'of props and state.', callerName) : undefined;
	  }

	  return internalInstance;
	}

	/**
	 * ReactUpdateQueue allows for state updates to be scheduled into a later
	 * reconciliation step.
	 */
	var ReactUpdateQueue = {

	  /**
	   * Checks whether or not this composite component is mounted.
	   * @param {ReactClass} publicInstance The instance we want to test.
	   * @return {boolean} True if mounted, false otherwise.
	   * @protected
	   * @final
	   */
	  isMounted: function isMounted(publicInstance) {
	    if (process.env.NODE_ENV !== 'production') {
	      var owner = ReactCurrentOwner.current;
	      if (owner !== null) {
	        process.env.NODE_ENV !== 'production' ? warning(owner._warnedAboutRefsInRender, '%s is accessing isMounted inside its render() function. ' + 'render() should be a pure function of props and state. It should ' + 'never access something that requires stale data from the previous ' + 'render, such as refs. Move this logic to componentDidMount and ' + 'componentDidUpdate instead.', owner.getName() || 'A component') : undefined;
	        owner._warnedAboutRefsInRender = true;
	      }
	    }
	    var internalInstance = ReactInstanceMap.get(publicInstance);
	    if (internalInstance) {
	      // During componentWillMount and render this will still be null but after
	      // that will always render to something. At least for now. So we can use
	      // this hack.
	      return !!internalInstance._renderedComponent;
	    } else {
	      return false;
	    }
	  },

	  /**
	   * Enqueue a callback that will be executed after all the pending updates
	   * have processed.
	   *
	   * @param {ReactClass} publicInstance The instance to use as `this` context.
	   * @param {?function} callback Called after state is updated.
	   * @internal
	   */
	  enqueueCallback: function enqueueCallback(publicInstance, callback) {
	    !(typeof callback === 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'enqueueCallback(...): You called `setProps`, `replaceProps`, ' + '`setState`, `replaceState`, or `forceUpdate` with a callback that ' + 'isn\'t callable.') : invariant(false) : undefined;
	    var internalInstance = getInternalInstanceReadyForUpdate(publicInstance);

	    // Previously we would throw an error if we didn't have an internal
	    // instance. Since we want to make it a no-op instead, we mirror the same
	    // behavior we have in other enqueue* methods.
	    // We also need to ignore callbacks in componentWillMount. See
	    // enqueueUpdates.
	    if (!internalInstance) {
	      return null;
	    }

	    if (internalInstance._pendingCallbacks) {
	      internalInstance._pendingCallbacks.push(callback);
	    } else {
	      internalInstance._pendingCallbacks = [callback];
	    }
	    // TODO: The callback here is ignored when setState is called from
	    // componentWillMount. Either fix it or disallow doing so completely in
	    // favor of getInitialState. Alternatively, we can disallow
	    // componentWillMount during server-side rendering.
	    enqueueUpdate(internalInstance);
	  },

	  enqueueCallbackInternal: function enqueueCallbackInternal(internalInstance, callback) {
	    !(typeof callback === 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'enqueueCallback(...): You called `setProps`, `replaceProps`, ' + '`setState`, `replaceState`, or `forceUpdate` with a callback that ' + 'isn\'t callable.') : invariant(false) : undefined;
	    if (internalInstance._pendingCallbacks) {
	      internalInstance._pendingCallbacks.push(callback);
	    } else {
	      internalInstance._pendingCallbacks = [callback];
	    }
	    enqueueUpdate(internalInstance);
	  },

	  /**
	   * Forces an update. This should only be invoked when it is known with
	   * certainty that we are **not** in a DOM transaction.
	   *
	   * You may want to call this when you know that some deeper aspect of the
	   * component's state has changed but `setState` was not called.
	   *
	   * This will not invoke `shouldComponentUpdate`, but it will invoke
	   * `componentWillUpdate` and `componentDidUpdate`.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @internal
	   */
	  enqueueForceUpdate: function enqueueForceUpdate(publicInstance) {
	    var internalInstance = getInternalInstanceReadyForUpdate(publicInstance, 'forceUpdate');

	    if (!internalInstance) {
	      return;
	    }

	    internalInstance._pendingForceUpdate = true;

	    enqueueUpdate(internalInstance);
	  },

	  /**
	   * Replaces all of the state. Always use this or `setState` to mutate state.
	   * You should treat `this.state` as immutable.
	   *
	   * There is no guarantee that `this.state` will be immediately updated, so
	   * accessing `this.state` after calling this method may return the old value.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} completeState Next state.
	   * @internal
	   */
	  enqueueReplaceState: function enqueueReplaceState(publicInstance, completeState) {
	    var internalInstance = getInternalInstanceReadyForUpdate(publicInstance, 'replaceState');

	    if (!internalInstance) {
	      return;
	    }

	    internalInstance._pendingStateQueue = [completeState];
	    internalInstance._pendingReplaceState = true;

	    enqueueUpdate(internalInstance);
	  },

	  /**
	   * Sets a subset of the state. This only exists because _pendingState is
	   * internal. This provides a merging strategy that is not available to deep
	   * properties which is confusing. TODO: Expose pendingState or don't use it
	   * during the merge.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} partialState Next partial state to be merged with state.
	   * @internal
	   */
	  enqueueSetState: function enqueueSetState(publicInstance, partialState) {
	    var internalInstance = getInternalInstanceReadyForUpdate(publicInstance, 'setState');

	    if (!internalInstance) {
	      return;
	    }

	    var queue = internalInstance._pendingStateQueue || (internalInstance._pendingStateQueue = []);
	    queue.push(partialState);

	    enqueueUpdate(internalInstance);
	  },

	  /**
	   * Sets a subset of the props.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} partialProps Subset of the next props.
	   * @internal
	   */
	  enqueueSetProps: function enqueueSetProps(publicInstance, partialProps) {
	    var internalInstance = getInternalInstanceReadyForUpdate(publicInstance, 'setProps');
	    if (!internalInstance) {
	      return;
	    }
	    ReactUpdateQueue.enqueueSetPropsInternal(internalInstance, partialProps);
	  },

	  enqueueSetPropsInternal: function enqueueSetPropsInternal(internalInstance, partialProps) {
	    var topLevelWrapper = internalInstance._topLevelWrapper;
	    !topLevelWrapper ? process.env.NODE_ENV !== 'production' ? invariant(false, 'setProps(...): You called `setProps` on a ' + 'component with a parent. This is an anti-pattern since props will ' + 'get reactively updated when rendered. Instead, change the owner\'s ' + '`render` method to pass the correct value as props to the component ' + 'where it is created.') : invariant(false) : undefined;

	    // Merge with the pending element if it exists, otherwise with existing
	    // element props.
	    var wrapElement = topLevelWrapper._pendingElement || topLevelWrapper._currentElement;
	    var element = wrapElement.props;
	    var props = assign({}, element.props, partialProps);
	    topLevelWrapper._pendingElement = ReactElement.cloneAndReplaceProps(wrapElement, ReactElement.cloneAndReplaceProps(element, props));

	    enqueueUpdate(topLevelWrapper);
	  },

	  /**
	   * Replaces all of the props.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} props New props.
	   * @internal
	   */
	  enqueueReplaceProps: function enqueueReplaceProps(publicInstance, props) {
	    var internalInstance = getInternalInstanceReadyForUpdate(publicInstance, 'replaceProps');
	    if (!internalInstance) {
	      return;
	    }
	    ReactUpdateQueue.enqueueReplacePropsInternal(internalInstance, props);
	  },

	  enqueueReplacePropsInternal: function enqueueReplacePropsInternal(internalInstance, props) {
	    var topLevelWrapper = internalInstance._topLevelWrapper;
	    !topLevelWrapper ? process.env.NODE_ENV !== 'production' ? invariant(false, 'replaceProps(...): You called `replaceProps` on a ' + 'component with a parent. This is an anti-pattern since props will ' + 'get reactively updated when rendered. Instead, change the owner\'s ' + '`render` method to pass the correct value as props to the component ' + 'where it is created.') : invariant(false) : undefined;

	    // Merge with the pending element if it exists, otherwise with existing
	    // element props.
	    var wrapElement = topLevelWrapper._pendingElement || topLevelWrapper._currentElement;
	    var element = wrapElement.props;
	    topLevelWrapper._pendingElement = ReactElement.cloneAndReplaceProps(wrapElement, ReactElement.cloneAndReplaceProps(element, props));

	    enqueueUpdate(topLevelWrapper);
	  },

	  enqueueElementInternal: function enqueueElementInternal(internalInstance, newElement) {
	    internalInstance._pendingElement = newElement;
	    enqueueUpdate(internalInstance);
	  }

	};

	module.exports = ReactUpdateQueue;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactUpdates
	 */

	'use strict';

	var CallbackQueue = __webpack_require__(56);
	var PooledClass = __webpack_require__(57);
	var ReactPerf = __webpack_require__(19);
	var ReactReconciler = __webpack_require__(51);
	var Transaction = __webpack_require__(58);

	var assign = __webpack_require__(40);
	var invariant = __webpack_require__(14);

	var dirtyComponents = [];
	var asapCallbackQueue = CallbackQueue.getPooled();
	var asapEnqueued = false;

	var batchingStrategy = null;

	function ensureInjected() {
	  !(ReactUpdates.ReactReconcileTransaction && batchingStrategy) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactUpdates: must inject a reconcile transaction class and batching ' + 'strategy') : invariant(false) : undefined;
	}

	var NESTED_UPDATES = {
	  initialize: function initialize() {
	    this.dirtyComponentsLength = dirtyComponents.length;
	  },
	  close: function close() {
	    if (this.dirtyComponentsLength !== dirtyComponents.length) {
	      // Additional updates were enqueued by componentDidUpdate handlers or
	      // similar; before our own UPDATE_QUEUEING wrapper closes, we want to run
	      // these new updates so that if A's componentDidUpdate calls setState on
	      // B, B will update before the callback A's updater provided when calling
	      // setState.
	      dirtyComponents.splice(0, this.dirtyComponentsLength);
	      flushBatchedUpdates();
	    } else {
	      dirtyComponents.length = 0;
	    }
	  }
	};

	var UPDATE_QUEUEING = {
	  initialize: function initialize() {
	    this.callbackQueue.reset();
	  },
	  close: function close() {
	    this.callbackQueue.notifyAll();
	  }
	};

	var TRANSACTION_WRAPPERS = [NESTED_UPDATES, UPDATE_QUEUEING];

	function ReactUpdatesFlushTransaction() {
	  this.reinitializeTransaction();
	  this.dirtyComponentsLength = null;
	  this.callbackQueue = CallbackQueue.getPooled();
	  this.reconcileTransaction = ReactUpdates.ReactReconcileTransaction.getPooled( /* forceHTML */false);
	}

	assign(ReactUpdatesFlushTransaction.prototype, Transaction.Mixin, {
	  getTransactionWrappers: function getTransactionWrappers() {
	    return TRANSACTION_WRAPPERS;
	  },

	  destructor: function destructor() {
	    this.dirtyComponentsLength = null;
	    CallbackQueue.release(this.callbackQueue);
	    this.callbackQueue = null;
	    ReactUpdates.ReactReconcileTransaction.release(this.reconcileTransaction);
	    this.reconcileTransaction = null;
	  },

	  perform: function perform(method, scope, a) {
	    // Essentially calls `this.reconcileTransaction.perform(method, scope, a)`
	    // with this transaction's wrappers around it.
	    return Transaction.Mixin.perform.call(this, this.reconcileTransaction.perform, this.reconcileTransaction, method, scope, a);
	  }
	});

	PooledClass.addPoolingTo(ReactUpdatesFlushTransaction);

	function batchedUpdates(callback, a, b, c, d, e) {
	  ensureInjected();
	  batchingStrategy.batchedUpdates(callback, a, b, c, d, e);
	}

	/**
	 * Array comparator for ReactComponents by mount ordering.
	 *
	 * @param {ReactComponent} c1 first component you're comparing
	 * @param {ReactComponent} c2 second component you're comparing
	 * @return {number} Return value usable by Array.prototype.sort().
	 */
	function mountOrderComparator(c1, c2) {
	  return c1._mountOrder - c2._mountOrder;
	}

	function runBatchedUpdates(transaction) {
	  var len = transaction.dirtyComponentsLength;
	  !(len === dirtyComponents.length) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected flush transaction\'s stored dirty-components length (%s) to ' + 'match dirty-components array length (%s).', len, dirtyComponents.length) : invariant(false) : undefined;

	  // Since reconciling a component higher in the owner hierarchy usually (not
	  // always -- see shouldComponentUpdate()) will reconcile children, reconcile
	  // them before their children by sorting the array.
	  dirtyComponents.sort(mountOrderComparator);

	  for (var i = 0; i < len; i++) {
	    // If a component is unmounted before pending changes apply, it will still
	    // be here, but we assume that it has cleared its _pendingCallbacks and
	    // that performUpdateIfNecessary is a noop.
	    var component = dirtyComponents[i];

	    // If performUpdateIfNecessary happens to enqueue any new updates, we
	    // shouldn't execute the callbacks until the next render happens, so
	    // stash the callbacks first
	    var callbacks = component._pendingCallbacks;
	    component._pendingCallbacks = null;

	    ReactReconciler.performUpdateIfNecessary(component, transaction.reconcileTransaction);

	    if (callbacks) {
	      for (var j = 0; j < callbacks.length; j++) {
	        transaction.callbackQueue.enqueue(callbacks[j], component.getPublicInstance());
	      }
	    }
	  }
	}

	var flushBatchedUpdates = function flushBatchedUpdates() {
	  // ReactUpdatesFlushTransaction's wrappers will clear the dirtyComponents
	  // array and perform any updates enqueued by mount-ready handlers (i.e.,
	  // componentDidUpdate) but we need to check here too in order to catch
	  // updates enqueued by setState callbacks and asap calls.
	  while (dirtyComponents.length || asapEnqueued) {
	    if (dirtyComponents.length) {
	      var transaction = ReactUpdatesFlushTransaction.getPooled();
	      transaction.perform(runBatchedUpdates, null, transaction);
	      ReactUpdatesFlushTransaction.release(transaction);
	    }

	    if (asapEnqueued) {
	      asapEnqueued = false;
	      var queue = asapCallbackQueue;
	      asapCallbackQueue = CallbackQueue.getPooled();
	      queue.notifyAll();
	      CallbackQueue.release(queue);
	    }
	  }
	};
	flushBatchedUpdates = ReactPerf.measure('ReactUpdates', 'flushBatchedUpdates', flushBatchedUpdates);

	/**
	 * Mark a component as needing a rerender, adding an optional callback to a
	 * list of functions which will be executed once the rerender occurs.
	 */
	function enqueueUpdate(component) {
	  ensureInjected();

	  // Various parts of our code (such as ReactCompositeComponent's
	  // _renderValidatedComponent) assume that calls to render aren't nested;
	  // verify that that's the case. (This is called by each top-level update
	  // function, like setProps, setState, forceUpdate, etc.; creation and
	  // destruction of top-level components is guarded in ReactMount.)

	  if (!batchingStrategy.isBatchingUpdates) {
	    batchingStrategy.batchedUpdates(enqueueUpdate, component);
	    return;
	  }

	  dirtyComponents.push(component);
	}

	/**
	 * Enqueue a callback to be run at the end of the current batching cycle. Throws
	 * if no updates are currently being performed.
	 */
	function asap(callback, context) {
	  !batchingStrategy.isBatchingUpdates ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactUpdates.asap: Can\'t enqueue an asap callback in a context where' + 'updates are not being batched.') : invariant(false) : undefined;
	  asapCallbackQueue.enqueue(callback, context);
	  asapEnqueued = true;
	}

	var ReactUpdatesInjection = {
	  injectReconcileTransaction: function injectReconcileTransaction(ReconcileTransaction) {
	    !ReconcileTransaction ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactUpdates: must provide a reconcile transaction class') : invariant(false) : undefined;
	    ReactUpdates.ReactReconcileTransaction = ReconcileTransaction;
	  },

	  injectBatchingStrategy: function injectBatchingStrategy(_batchingStrategy) {
	    !_batchingStrategy ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactUpdates: must provide a batching strategy') : invariant(false) : undefined;
	    !(typeof _batchingStrategy.batchedUpdates === 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactUpdates: must provide a batchedUpdates() function') : invariant(false) : undefined;
	    !(typeof _batchingStrategy.isBatchingUpdates === 'boolean') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactUpdates: must provide an isBatchingUpdates boolean attribute') : invariant(false) : undefined;
	    batchingStrategy = _batchingStrategy;
	  }
	};

	var ReactUpdates = {
	  /**
	   * React references `ReactReconcileTransaction` using this property in order
	   * to allow dependency injection.
	   *
	   * @internal
	   */
	  ReactReconcileTransaction: null,

	  batchedUpdates: batchedUpdates,
	  enqueueUpdate: enqueueUpdate,
	  flushBatchedUpdates: flushBatchedUpdates,
	  injection: ReactUpdatesInjection,
	  asap: asap
	};

	module.exports = ReactUpdates;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule CallbackQueue
	 */

	'use strict';

	var PooledClass = __webpack_require__(57);

	var assign = __webpack_require__(40);
	var invariant = __webpack_require__(14);

	/**
	 * A specialized pseudo-event module to help keep track of components waiting to
	 * be notified when their DOM representations are available for use.
	 *
	 * This implements `PooledClass`, so you should never need to instantiate this.
	 * Instead, use `CallbackQueue.getPooled()`.
	 *
	 * @class ReactMountReady
	 * @implements PooledClass
	 * @internal
	 */
	function CallbackQueue() {
	  this._callbacks = null;
	  this._contexts = null;
	}

	assign(CallbackQueue.prototype, {

	  /**
	   * Enqueues a callback to be invoked when `notifyAll` is invoked.
	   *
	   * @param {function} callback Invoked when `notifyAll` is invoked.
	   * @param {?object} context Context to call `callback` with.
	   * @internal
	   */
	  enqueue: function enqueue(callback, context) {
	    this._callbacks = this._callbacks || [];
	    this._contexts = this._contexts || [];
	    this._callbacks.push(callback);
	    this._contexts.push(context);
	  },

	  /**
	   * Invokes all enqueued callbacks and clears the queue. This is invoked after
	   * the DOM representation of a component has been created or updated.
	   *
	   * @internal
	   */
	  notifyAll: function notifyAll() {
	    var callbacks = this._callbacks;
	    var contexts = this._contexts;
	    if (callbacks) {
	      !(callbacks.length === contexts.length) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Mismatched list of contexts in callback queue') : invariant(false) : undefined;
	      this._callbacks = null;
	      this._contexts = null;
	      for (var i = 0; i < callbacks.length; i++) {
	        callbacks[i].call(contexts[i]);
	      }
	      callbacks.length = 0;
	      contexts.length = 0;
	    }
	  },

	  /**
	   * Resets the internal queue.
	   *
	   * @internal
	   */
	  reset: function reset() {
	    this._callbacks = null;
	    this._contexts = null;
	  },

	  /**
	   * `PooledClass` looks for this.
	   */
	  destructor: function destructor() {
	    this.reset();
	  }

	});

	PooledClass.addPoolingTo(CallbackQueue);

	module.exports = CallbackQueue;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule PooledClass
	 */

	'use strict';

	var invariant = __webpack_require__(14);

	/**
	 * Static poolers. Several custom versions for each potential number of
	 * arguments. A completely generic pooler is easy to implement, but would
	 * require accessing the `arguments` object. In each of these, `this` refers to
	 * the Class itself, not an instance. If any others are needed, simply add them
	 * here, or in their own files.
	 */
	var oneArgumentPooler = function oneArgumentPooler(copyFieldsFrom) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, copyFieldsFrom);
	    return instance;
	  } else {
	    return new Klass(copyFieldsFrom);
	  }
	};

	var twoArgumentPooler = function twoArgumentPooler(a1, a2) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2);
	    return instance;
	  } else {
	    return new Klass(a1, a2);
	  }
	};

	var threeArgumentPooler = function threeArgumentPooler(a1, a2, a3) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2, a3);
	    return instance;
	  } else {
	    return new Klass(a1, a2, a3);
	  }
	};

	var fourArgumentPooler = function fourArgumentPooler(a1, a2, a3, a4) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2, a3, a4);
	    return instance;
	  } else {
	    return new Klass(a1, a2, a3, a4);
	  }
	};

	var fiveArgumentPooler = function fiveArgumentPooler(a1, a2, a3, a4, a5) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2, a3, a4, a5);
	    return instance;
	  } else {
	    return new Klass(a1, a2, a3, a4, a5);
	  }
	};

	var standardReleaser = function standardReleaser(instance) {
	  var Klass = this;
	  !(instance instanceof Klass) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Trying to release an instance into a pool of a different type.') : invariant(false) : undefined;
	  instance.destructor();
	  if (Klass.instancePool.length < Klass.poolSize) {
	    Klass.instancePool.push(instance);
	  }
	};

	var DEFAULT_POOL_SIZE = 10;
	var DEFAULT_POOLER = oneArgumentPooler;

	/**
	 * Augments `CopyConstructor` to be a poolable class, augmenting only the class
	 * itself (statically) not adding any prototypical fields. Any CopyConstructor
	 * you give this may have a `poolSize` property, and will look for a
	 * prototypical `destructor` on instances (optional).
	 *
	 * @param {Function} CopyConstructor Constructor that can be used to reset.
	 * @param {Function} pooler Customizable pooler.
	 */
	var addPoolingTo = function addPoolingTo(CopyConstructor, pooler) {
	  var NewKlass = CopyConstructor;
	  NewKlass.instancePool = [];
	  NewKlass.getPooled = pooler || DEFAULT_POOLER;
	  if (!NewKlass.poolSize) {
	    NewKlass.poolSize = DEFAULT_POOL_SIZE;
	  }
	  NewKlass.release = standardReleaser;
	  return NewKlass;
	};

	var PooledClass = {
	  addPoolingTo: addPoolingTo,
	  oneArgumentPooler: oneArgumentPooler,
	  twoArgumentPooler: twoArgumentPooler,
	  threeArgumentPooler: threeArgumentPooler,
	  fourArgumentPooler: fourArgumentPooler,
	  fiveArgumentPooler: fiveArgumentPooler
	};

	module.exports = PooledClass;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule Transaction
	 */

	'use strict';

	var invariant = __webpack_require__(14);

	/**
	 * `Transaction` creates a black box that is able to wrap any method such that
	 * certain invariants are maintained before and after the method is invoked
	 * (Even if an exception is thrown while invoking the wrapped method). Whoever
	 * instantiates a transaction can provide enforcers of the invariants at
	 * creation time. The `Transaction` class itself will supply one additional
	 * automatic invariant for you - the invariant that any transaction instance
	 * should not be run while it is already being run. You would typically create a
	 * single instance of a `Transaction` for reuse multiple times, that potentially
	 * is used to wrap several different methods. Wrappers are extremely simple -
	 * they only require implementing two methods.
	 *
	 * <pre>
	 *                       wrappers (injected at creation time)
	 *                                      +        +
	 *                                      |        |
	 *                    +-----------------|--------|--------------+
	 *                    |                 v        |              |
	 *                    |      +---------------+   |              |
	 *                    |   +--|    wrapper1   |---|----+         |
	 *                    |   |  +---------------+   v    |         |
	 *                    |   |          +-------------+  |         |
	 *                    |   |     +----|   wrapper2  |--------+   |
	 *                    |   |     |    +-------------+  |     |   |
	 *                    |   |     |                     |     |   |
	 *                    |   v     v                     v     v   | wrapper
	 *                    | +---+ +---+   +---------+   +---+ +---+ | invariants
	 * perform(anyMethod) | |   | |   |   |         |   |   | |   | | maintained
	 * +----------------->|-|---|-|---|-->|anyMethod|---|---|-|---|-|-------->
	 *                    | |   | |   |   |         |   |   | |   | |
	 *                    | |   | |   |   |         |   |   | |   | |
	 *                    | |   | |   |   |         |   |   | |   | |
	 *                    | +---+ +---+   +---------+   +---+ +---+ |
	 *                    |  initialize                    close    |
	 *                    +-----------------------------------------+
	 * </pre>
	 *
	 * Use cases:
	 * - Preserving the input selection ranges before/after reconciliation.
	 *   Restoring selection even in the event of an unexpected error.
	 * - Deactivating events while rearranging the DOM, preventing blurs/focuses,
	 *   while guaranteeing that afterwards, the event system is reactivated.
	 * - Flushing a queue of collected DOM mutations to the main UI thread after a
	 *   reconciliation takes place in a worker thread.
	 * - Invoking any collected `componentDidUpdate` callbacks after rendering new
	 *   content.
	 * - (Future use case): Wrapping particular flushes of the `ReactWorker` queue
	 *   to preserve the `scrollTop` (an automatic scroll aware DOM).
	 * - (Future use case): Layout calculations before and after DOM updates.
	 *
	 * Transactional plugin API:
	 * - A module that has an `initialize` method that returns any precomputation.
	 * - and a `close` method that accepts the precomputation. `close` is invoked
	 *   when the wrapped process is completed, or has failed.
	 *
	 * @param {Array<TransactionalWrapper>} transactionWrapper Wrapper modules
	 * that implement `initialize` and `close`.
	 * @return {Transaction} Single transaction for reuse in thread.
	 *
	 * @class Transaction
	 */
	var Mixin = {
	  /**
	   * Sets up this instance so that it is prepared for collecting metrics. Does
	   * so such that this setup method may be used on an instance that is already
	   * initialized, in a way that does not consume additional memory upon reuse.
	   * That can be useful if you decide to make your subclass of this mixin a
	   * "PooledClass".
	   */
	  reinitializeTransaction: function reinitializeTransaction() {
	    this.transactionWrappers = this.getTransactionWrappers();
	    if (this.wrapperInitData) {
	      this.wrapperInitData.length = 0;
	    } else {
	      this.wrapperInitData = [];
	    }
	    this._isInTransaction = false;
	  },

	  _isInTransaction: false,

	  /**
	   * @abstract
	   * @return {Array<TransactionWrapper>} Array of transaction wrappers.
	   */
	  getTransactionWrappers: null,

	  isInTransaction: function isInTransaction() {
	    return !!this._isInTransaction;
	  },

	  /**
	   * Executes the function within a safety window. Use this for the top level
	   * methods that result in large amounts of computation/mutations that would
	   * need to be safety checked. The optional arguments helps prevent the need
	   * to bind in many cases.
	   *
	   * @param {function} method Member of scope to call.
	   * @param {Object} scope Scope to invoke from.
	   * @param {Object?=} a Argument to pass to the method.
	   * @param {Object?=} b Argument to pass to the method.
	   * @param {Object?=} c Argument to pass to the method.
	   * @param {Object?=} d Argument to pass to the method.
	   * @param {Object?=} e Argument to pass to the method.
	   * @param {Object?=} f Argument to pass to the method.
	   *
	   * @return {*} Return value from `method`.
	   */
	  perform: function perform(method, scope, a, b, c, d, e, f) {
	    !!this.isInTransaction() ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Transaction.perform(...): Cannot initialize a transaction when there ' + 'is already an outstanding transaction.') : invariant(false) : undefined;
	    var errorThrown;
	    var ret;
	    try {
	      this._isInTransaction = true;
	      // Catching errors makes debugging more difficult, so we start with
	      // errorThrown set to true before setting it to false after calling
	      // close -- if it's still set to true in the finally block, it means
	      // one of these calls threw.
	      errorThrown = true;
	      this.initializeAll(0);
	      ret = method.call(scope, a, b, c, d, e, f);
	      errorThrown = false;
	    } finally {
	      try {
	        if (errorThrown) {
	          // If `method` throws, prefer to show that stack trace over any thrown
	          // by invoking `closeAll`.
	          try {
	            this.closeAll(0);
	          } catch (err) {}
	        } else {
	          // Since `method` didn't throw, we don't want to silence the exception
	          // here.
	          this.closeAll(0);
	        }
	      } finally {
	        this._isInTransaction = false;
	      }
	    }
	    return ret;
	  },

	  initializeAll: function initializeAll(startIndex) {
	    var transactionWrappers = this.transactionWrappers;
	    for (var i = startIndex; i < transactionWrappers.length; i++) {
	      var wrapper = transactionWrappers[i];
	      try {
	        // Catching errors makes debugging more difficult, so we start with the
	        // OBSERVED_ERROR state before overwriting it with the real return value
	        // of initialize -- if it's still set to OBSERVED_ERROR in the finally
	        // block, it means wrapper.initialize threw.
	        this.wrapperInitData[i] = Transaction.OBSERVED_ERROR;
	        this.wrapperInitData[i] = wrapper.initialize ? wrapper.initialize.call(this) : null;
	      } finally {
	        if (this.wrapperInitData[i] === Transaction.OBSERVED_ERROR) {
	          // The initializer for wrapper i threw an error; initialize the
	          // remaining wrappers but silence any exceptions from them to ensure
	          // that the first error is the one to bubble up.
	          try {
	            this.initializeAll(i + 1);
	          } catch (err) {}
	        }
	      }
	    }
	  },

	  /**
	   * Invokes each of `this.transactionWrappers.close[i]` functions, passing into
	   * them the respective return values of `this.transactionWrappers.init[i]`
	   * (`close`rs that correspond to initializers that failed will not be
	   * invoked).
	   */
	  closeAll: function closeAll(startIndex) {
	    !this.isInTransaction() ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Transaction.closeAll(): Cannot close transaction when none are open.') : invariant(false) : undefined;
	    var transactionWrappers = this.transactionWrappers;
	    for (var i = startIndex; i < transactionWrappers.length; i++) {
	      var wrapper = transactionWrappers[i];
	      var initData = this.wrapperInitData[i];
	      var errorThrown;
	      try {
	        // Catching errors makes debugging more difficult, so we start with
	        // errorThrown set to true before setting it to false after calling
	        // close -- if it's still set to true in the finally block, it means
	        // wrapper.close threw.
	        errorThrown = true;
	        if (initData !== Transaction.OBSERVED_ERROR && wrapper.close) {
	          wrapper.close.call(this, initData);
	        }
	        errorThrown = false;
	      } finally {
	        if (errorThrown) {
	          // The closer for wrapper i threw an error; close the remaining
	          // wrappers but silence any exceptions from them to ensure that the
	          // first error is the one to bubble up.
	          try {
	            this.closeAll(i + 1);
	          } catch (e) {}
	        }
	      }
	    }
	    this.wrapperInitData.length = 0;
	  }
	};

	var Transaction = {

	  Mixin: Mixin,

	  /**
	   * Token to look for to determine if an error occurred.
	   */
	  OBSERVED_ERROR: {}

	};

	module.exports = Transaction;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule emptyObject
	 */

	'use strict';

	var emptyObject = {};

	if (process.env.NODE_ENV !== 'production') {
	  Object.freeze(emptyObject);
	}

	module.exports = emptyObject;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule containsNode
	 * @typechecks
	 */

	'use strict';

	var isTextNode = __webpack_require__(61);

	/*eslint-disable no-bitwise */

	/**
	 * Checks if a given DOM node contains or is another DOM node.
	 *
	 * @param {?DOMNode} outerNode Outer DOM node.
	 * @param {?DOMNode} innerNode Inner DOM node.
	 * @return {boolean} True if `outerNode` contains or is `innerNode`.
	 */
	function containsNode(_x, _x2) {
	  var _again = true;

	  _function: while (_again) {
	    var outerNode = _x,
	        innerNode = _x2;
	    _again = false;

	    if (!outerNode || !innerNode) {
	      return false;
	    } else if (outerNode === innerNode) {
	      return true;
	    } else if (isTextNode(outerNode)) {
	      return false;
	    } else if (isTextNode(innerNode)) {
	      _x = outerNode;
	      _x2 = innerNode.parentNode;
	      _again = true;
	      continue _function;
	    } else if (outerNode.contains) {
	      return outerNode.contains(innerNode);
	    } else if (outerNode.compareDocumentPosition) {
	      return !!(outerNode.compareDocumentPosition(innerNode) & 16);
	    } else {
	      return false;
	    }
	  }
	}

	module.exports = containsNode;

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule isTextNode
	 * @typechecks
	 */

	'use strict';

	var isNode = __webpack_require__(62);

	/**
	 * @param {*} object The object to check.
	 * @return {boolean} Whether or not the object is a DOM text node.
	 */
	function isTextNode(object) {
	  return isNode(object) && object.nodeType == 3;
	}

	module.exports = isTextNode;

/***/ },
/* 62 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule isNode
	 * @typechecks
	 */

	/**
	 * @param {*} object The object to check.
	 * @return {boolean} Whether or not the object is a DOM node.
	 */
	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	function isNode(object) {
	  return !!(object && (typeof Node === 'function' ? object instanceof Node : (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && typeof object.nodeType === 'number' && typeof object.nodeName === 'string'));
	}

	module.exports = isNode;

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule instantiateReactComponent
	 * @typechecks static-only
	 */

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var ReactCompositeComponent = __webpack_require__(64);
	var ReactEmptyComponent = __webpack_require__(69);
	var ReactNativeComponent = __webpack_require__(70);

	var assign = __webpack_require__(40);
	var invariant = __webpack_require__(14);
	var warning = __webpack_require__(26);

	// To avoid a cyclic dependency, we create the final class in this module
	var ReactCompositeComponentWrapper = function ReactCompositeComponentWrapper() {};
	assign(ReactCompositeComponentWrapper.prototype, ReactCompositeComponent.Mixin, {
	  _instantiateReactComponent: instantiateReactComponent
	});

	function getDeclarationErrorAddendum(owner) {
	  if (owner) {
	    var name = owner.getName();
	    if (name) {
	      return ' Check the render method of `' + name + '`.';
	    }
	  }
	  return '';
	}

	/**
	 * Check if the type reference is a known internal type. I.e. not a user
	 * provided composite type.
	 *
	 * @param {function} type
	 * @return {boolean} Returns true if this is a valid internal type.
	 */
	function isInternalComponentType(type) {
	  return typeof type === 'function' && typeof type.prototype !== 'undefined' && typeof type.prototype.mountComponent === 'function' && typeof type.prototype.receiveComponent === 'function';
	}

	/**
	 * Given a ReactNode, create an instance that will actually be mounted.
	 *
	 * @param {ReactNode} node
	 * @return {object} A new instance of the element's constructor.
	 * @protected
	 */
	function instantiateReactComponent(node) {
	  var instance;

	  if (node === null || node === false) {
	    instance = new ReactEmptyComponent(instantiateReactComponent);
	  } else if ((typeof node === 'undefined' ? 'undefined' : _typeof(node)) === 'object') {
	    var element = node;
	    !(element && (typeof element.type === 'function' || typeof element.type === 'string')) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Element type is invalid: expected a string (for built-in components) ' + 'or a class/function (for composite components) but got: %s.%s', element.type == null ? element.type : _typeof(element.type), getDeclarationErrorAddendum(element._owner)) : invariant(false) : undefined;

	    // Special case string values
	    if (typeof element.type === 'string') {
	      instance = ReactNativeComponent.createInternalComponent(element);
	    } else if (isInternalComponentType(element.type)) {
	      // This is temporarily available for custom components that are not string
	      // representations. I.e. ART. Once those are updated to use the string
	      // representation, we can drop this code path.
	      instance = new element.type(element);
	    } else {
	      instance = new ReactCompositeComponentWrapper();
	    }
	  } else if (typeof node === 'string' || typeof node === 'number') {
	    instance = ReactNativeComponent.createInstanceForText(node);
	  } else {
	     true ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Encountered invalid React node of type %s', typeof node === 'undefined' ? 'undefined' : _typeof(node)) : invariant(false) : undefined;
	  }

	  if (process.env.NODE_ENV !== 'production') {
	    process.env.NODE_ENV !== 'production' ? warning(typeof instance.construct === 'function' && typeof instance.mountComponent === 'function' && typeof instance.receiveComponent === 'function' && typeof instance.unmountComponent === 'function', 'Only React Components can be mounted.') : undefined;
	  }

	  // Sets up the instance. This can probably just move into the constructor now.
	  instance.construct(node);

	  // These two fields are used by the DOM and ART diffing algorithms
	  // respectively. Instead of using expandos on components, we should be
	  // storing the state needed by the diffing algorithms elsewhere.
	  instance._mountIndex = 0;
	  instance._mountImage = null;

	  if (process.env.NODE_ENV !== 'production') {
	    instance._isOwnerNecessary = false;
	    instance._warnedAboutRefsInRender = false;
	  }

	  // Internal instances should fully constructed at this point, so they should
	  // not get any new fields added to them at this point.
	  if (process.env.NODE_ENV !== 'production') {
	    if (Object.preventExtensions) {
	      Object.preventExtensions(instance);
	    }
	  }

	  return instance;
	}

	module.exports = instantiateReactComponent;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactCompositeComponent
	 */

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var ReactComponentEnvironment = __webpack_require__(65);
	var ReactCurrentOwner = __webpack_require__(6);
	var ReactElement = __webpack_require__(43);
	var ReactInstanceMap = __webpack_require__(48);
	var ReactPerf = __webpack_require__(19);
	var ReactPropTypeLocations = __webpack_require__(66);
	var ReactPropTypeLocationNames = __webpack_require__(67);
	var ReactReconciler = __webpack_require__(51);
	var ReactUpdateQueue = __webpack_require__(54);

	var assign = __webpack_require__(40);
	var emptyObject = __webpack_require__(59);
	var invariant = __webpack_require__(14);
	var shouldUpdateReactComponent = __webpack_require__(68);
	var warning = __webpack_require__(26);

	function getDeclarationErrorAddendum(component) {
	  var owner = component._currentElement._owner || null;
	  if (owner) {
	    var name = owner.getName();
	    if (name) {
	      return ' Check the render method of `' + name + '`.';
	    }
	  }
	  return '';
	}

	function StatelessComponent(Component) {}
	StatelessComponent.prototype.render = function () {
	  var Component = ReactInstanceMap.get(this)._currentElement.type;
	  return Component(this.props, this.context, this.updater);
	};

	/**
	 * ------------------ The Life-Cycle of a Composite Component ------------------
	 *
	 * - constructor: Initialization of state. The instance is now retained.
	 *   - componentWillMount
	 *   - render
	 *   - [children's constructors]
	 *     - [children's componentWillMount and render]
	 *     - [children's componentDidMount]
	 *     - componentDidMount
	 *
	 *       Update Phases:
	 *       - componentWillReceiveProps (only called if parent updated)
	 *       - shouldComponentUpdate
	 *         - componentWillUpdate
	 *           - render
	 *           - [children's constructors or receive props phases]
	 *         - componentDidUpdate
	 *
	 *     - componentWillUnmount
	 *     - [children's componentWillUnmount]
	 *   - [children destroyed]
	 * - (destroyed): The instance is now blank, released by React and ready for GC.
	 *
	 * -----------------------------------------------------------------------------
	 */

	/**
	 * An incrementing ID assigned to each component when it is mounted. This is
	 * used to enforce the order in which `ReactUpdates` updates dirty components.
	 *
	 * @private
	 */
	var nextMountID = 1;

	/**
	 * @lends {ReactCompositeComponent.prototype}
	 */
	var ReactCompositeComponentMixin = {

	  /**
	   * Base constructor for all composite component.
	   *
	   * @param {ReactElement} element
	   * @final
	   * @internal
	   */
	  construct: function construct(element) {
	    this._currentElement = element;
	    this._rootNodeID = null;
	    this._instance = null;

	    // See ReactUpdateQueue
	    this._pendingElement = null;
	    this._pendingStateQueue = null;
	    this._pendingReplaceState = false;
	    this._pendingForceUpdate = false;

	    this._renderedComponent = null;

	    this._context = null;
	    this._mountOrder = 0;
	    this._topLevelWrapper = null;

	    // See ReactUpdates and ReactUpdateQueue.
	    this._pendingCallbacks = null;
	  },

	  /**
	   * Initializes the component, renders markup, and registers event listeners.
	   *
	   * @param {string} rootID DOM ID of the root node.
	   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
	   * @return {?string} Rendered markup to be inserted into the DOM.
	   * @final
	   * @internal
	   */
	  mountComponent: function mountComponent(rootID, transaction, context) {
	    this._context = context;
	    this._mountOrder = nextMountID++;
	    this._rootNodeID = rootID;

	    var publicProps = this._processProps(this._currentElement.props);
	    var publicContext = this._processContext(context);

	    var Component = this._currentElement.type;

	    // Initialize the public class
	    var inst;
	    var renderedElement;

	    // This is a way to detect if Component is a stateless arrow function
	    // component, which is not newable. It might not be 100% reliable but is
	    // something we can do until we start detecting that Component extends
	    // React.Component. We already assume that typeof Component === 'function'.
	    var canInstantiate = 'prototype' in Component;

	    if (canInstantiate) {
	      if (process.env.NODE_ENV !== 'production') {
	        ReactCurrentOwner.current = this;
	        try {
	          inst = new Component(publicProps, publicContext, ReactUpdateQueue);
	        } finally {
	          ReactCurrentOwner.current = null;
	        }
	      } else {
	        inst = new Component(publicProps, publicContext, ReactUpdateQueue);
	      }
	    }

	    if (!canInstantiate || inst === null || inst === false || ReactElement.isValidElement(inst)) {
	      renderedElement = inst;
	      inst = new StatelessComponent(Component);
	    }

	    if (process.env.NODE_ENV !== 'production') {
	      // This will throw later in _renderValidatedComponent, but add an early
	      // warning now to help debugging
	      if (inst.render == null) {
	        process.env.NODE_ENV !== 'production' ? warning(false, '%s(...): No `render` method found on the returned component ' + 'instance: you may have forgotten to define `render`, returned ' + 'null/false from a stateless component, or tried to render an ' + 'element whose type is a function that isn\'t a React component.', Component.displayName || Component.name || 'Component') : undefined;
	      } else {
	        // We support ES6 inheriting from React.Component, the module pattern,
	        // and stateless components, but not ES6 classes that don't extend
	        process.env.NODE_ENV !== 'production' ? warning(Component.prototype && Component.prototype.isReactComponent || !canInstantiate || !(inst instanceof Component), '%s(...): React component classes must extend React.Component.', Component.displayName || Component.name || 'Component') : undefined;
	      }
	    }

	    // These should be set up in the constructor, but as a convenience for
	    // simpler class abstractions, we set them up after the fact.
	    inst.props = publicProps;
	    inst.context = publicContext;
	    inst.refs = emptyObject;
	    inst.updater = ReactUpdateQueue;

	    this._instance = inst;

	    // Store a reference from the instance back to the internal representation
	    ReactInstanceMap.set(inst, this);

	    if (process.env.NODE_ENV !== 'production') {
	      // Since plain JS classes are defined without any special initialization
	      // logic, we can not catch common errors early. Therefore, we have to
	      // catch them here, at initialization time, instead.
	      process.env.NODE_ENV !== 'production' ? warning(!inst.getInitialState || inst.getInitialState.isReactClassApproved, 'getInitialState was defined on %s, a plain JavaScript class. ' + 'This is only supported for classes created using React.createClass. ' + 'Did you mean to define a state property instead?', this.getName() || 'a component') : undefined;
	      process.env.NODE_ENV !== 'production' ? warning(!inst.getDefaultProps || inst.getDefaultProps.isReactClassApproved, 'getDefaultProps was defined on %s, a plain JavaScript class. ' + 'This is only supported for classes created using React.createClass. ' + 'Use a static property to define defaultProps instead.', this.getName() || 'a component') : undefined;
	      process.env.NODE_ENV !== 'production' ? warning(!inst.propTypes, 'propTypes was defined as an instance property on %s. Use a static ' + 'property to define propTypes instead.', this.getName() || 'a component') : undefined;
	      process.env.NODE_ENV !== 'production' ? warning(!inst.contextTypes, 'contextTypes was defined as an instance property on %s. Use a ' + 'static property to define contextTypes instead.', this.getName() || 'a component') : undefined;
	      process.env.NODE_ENV !== 'production' ? warning(typeof inst.componentShouldUpdate !== 'function', '%s has a method called ' + 'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' + 'The name is phrased as a question because the function is ' + 'expected to return a value.', this.getName() || 'A component') : undefined;
	      process.env.NODE_ENV !== 'production' ? warning(typeof inst.componentDidUnmount !== 'function', '%s has a method called ' + 'componentDidUnmount(). But there is no such lifecycle method. ' + 'Did you mean componentWillUnmount()?', this.getName() || 'A component') : undefined;
	      process.env.NODE_ENV !== 'production' ? warning(typeof inst.componentWillRecieveProps !== 'function', '%s has a method called ' + 'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?', this.getName() || 'A component') : undefined;
	    }

	    var initialState = inst.state;
	    if (initialState === undefined) {
	      inst.state = initialState = null;
	    }
	    !((typeof initialState === 'undefined' ? 'undefined' : _typeof(initialState)) === 'object' && !Array.isArray(initialState)) ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s.state: must be set to an object or null', this.getName() || 'ReactCompositeComponent') : invariant(false) : undefined;

	    this._pendingStateQueue = null;
	    this._pendingReplaceState = false;
	    this._pendingForceUpdate = false;

	    if (inst.componentWillMount) {
	      inst.componentWillMount();
	      // When mounting, calls to `setState` by `componentWillMount` will set
	      // `this._pendingStateQueue` without triggering a re-render.
	      if (this._pendingStateQueue) {
	        inst.state = this._processPendingState(inst.props, inst.context);
	      }
	    }

	    // If not a stateless component, we now render
	    if (renderedElement === undefined) {
	      renderedElement = this._renderValidatedComponent();
	    }

	    this._renderedComponent = this._instantiateReactComponent(renderedElement);

	    var markup = ReactReconciler.mountComponent(this._renderedComponent, rootID, transaction, this._processChildContext(context));
	    if (inst.componentDidMount) {
	      transaction.getReactMountReady().enqueue(inst.componentDidMount, inst);
	    }

	    return markup;
	  },

	  /**
	   * Releases any resources allocated by `mountComponent`.
	   *
	   * @final
	   * @internal
	   */
	  unmountComponent: function unmountComponent() {
	    var inst = this._instance;

	    if (inst.componentWillUnmount) {
	      inst.componentWillUnmount();
	    }

	    ReactReconciler.unmountComponent(this._renderedComponent);
	    this._renderedComponent = null;
	    this._instance = null;

	    // Reset pending fields
	    // Even if this component is scheduled for another update in ReactUpdates,
	    // it would still be ignored because these fields are reset.
	    this._pendingStateQueue = null;
	    this._pendingReplaceState = false;
	    this._pendingForceUpdate = false;
	    this._pendingCallbacks = null;
	    this._pendingElement = null;

	    // These fields do not really need to be reset since this object is no
	    // longer accessible.
	    this._context = null;
	    this._rootNodeID = null;
	    this._topLevelWrapper = null;

	    // Delete the reference from the instance to this internal representation
	    // which allow the internals to be properly cleaned up even if the user
	    // leaks a reference to the public instance.
	    ReactInstanceMap.remove(inst);

	    // Some existing components rely on inst.props even after they've been
	    // destroyed (in event handlers).
	    // TODO: inst.props = null;
	    // TODO: inst.state = null;
	    // TODO: inst.context = null;
	  },

	  /**
	   * Filters the context object to only contain keys specified in
	   * `contextTypes`
	   *
	   * @param {object} context
	   * @return {?object}
	   * @private
	   */
	  _maskContext: function _maskContext(context) {
	    var maskedContext = null;
	    var Component = this._currentElement.type;
	    var contextTypes = Component.contextTypes;
	    if (!contextTypes) {
	      return emptyObject;
	    }
	    maskedContext = {};
	    for (var contextName in contextTypes) {
	      maskedContext[contextName] = context[contextName];
	    }
	    return maskedContext;
	  },

	  /**
	   * Filters the context object to only contain keys specified in
	   * `contextTypes`, and asserts that they are valid.
	   *
	   * @param {object} context
	   * @return {?object}
	   * @private
	   */
	  _processContext: function _processContext(context) {
	    var maskedContext = this._maskContext(context);
	    if (process.env.NODE_ENV !== 'production') {
	      var Component = this._currentElement.type;
	      if (Component.contextTypes) {
	        this._checkPropTypes(Component.contextTypes, maskedContext, ReactPropTypeLocations.context);
	      }
	    }
	    return maskedContext;
	  },

	  /**
	   * @param {object} currentContext
	   * @return {object}
	   * @private
	   */
	  _processChildContext: function _processChildContext(currentContext) {
	    var Component = this._currentElement.type;
	    var inst = this._instance;
	    var childContext = inst.getChildContext && inst.getChildContext();
	    if (childContext) {
	      !(_typeof(Component.childContextTypes) === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s.getChildContext(): childContextTypes must be defined in order to ' + 'use getChildContext().', this.getName() || 'ReactCompositeComponent') : invariant(false) : undefined;
	      if (process.env.NODE_ENV !== 'production') {
	        this._checkPropTypes(Component.childContextTypes, childContext, ReactPropTypeLocations.childContext);
	      }
	      for (var name in childContext) {
	        !(name in Component.childContextTypes) ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s.getChildContext(): key "%s" is not defined in childContextTypes.', this.getName() || 'ReactCompositeComponent', name) : invariant(false) : undefined;
	      }
	      return assign({}, currentContext, childContext);
	    }
	    return currentContext;
	  },

	  /**
	   * Processes props by setting default values for unspecified props and
	   * asserting that the props are valid. Does not mutate its argument; returns
	   * a new props object with defaults merged in.
	   *
	   * @param {object} newProps
	   * @return {object}
	   * @private
	   */
	  _processProps: function _processProps(newProps) {
	    if (process.env.NODE_ENV !== 'production') {
	      var Component = this._currentElement.type;
	      if (Component.propTypes) {
	        this._checkPropTypes(Component.propTypes, newProps, ReactPropTypeLocations.prop);
	      }
	    }
	    return newProps;
	  },

	  /**
	   * Assert that the props are valid
	   *
	   * @param {object} propTypes Map of prop name to a ReactPropType
	   * @param {object} props
	   * @param {string} location e.g. "prop", "context", "child context"
	   * @private
	   */
	  _checkPropTypes: function _checkPropTypes(propTypes, props, location) {
	    // TODO: Stop validating prop types here and only use the element
	    // validation.
	    var componentName = this.getName();
	    for (var propName in propTypes) {
	      if (propTypes.hasOwnProperty(propName)) {
	        var error;
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          !(typeof propTypes[propName] === 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s: %s type `%s` is invalid; it must be a function, usually ' + 'from React.PropTypes.', componentName || 'React class', ReactPropTypeLocationNames[location], propName) : invariant(false) : undefined;
	          error = propTypes[propName](props, propName, componentName, location);
	        } catch (ex) {
	          error = ex;
	        }
	        if (error instanceof Error) {
	          // We may want to extend this logic for similar errors in
	          // top-level render calls, so I'm abstracting it away into
	          // a function to minimize refactoring in the future
	          var addendum = getDeclarationErrorAddendum(this);

	          if (location === ReactPropTypeLocations.prop) {
	            // Preface gives us something to blacklist in warning module
	            process.env.NODE_ENV !== 'production' ? warning(false, 'Failed Composite propType: %s%s', error.message, addendum) : undefined;
	          } else {
	            process.env.NODE_ENV !== 'production' ? warning(false, 'Failed Context Types: %s%s', error.message, addendum) : undefined;
	          }
	        }
	      }
	    }
	  },

	  receiveComponent: function receiveComponent(nextElement, transaction, nextContext) {
	    var prevElement = this._currentElement;
	    var prevContext = this._context;

	    this._pendingElement = null;

	    this.updateComponent(transaction, prevElement, nextElement, prevContext, nextContext);
	  },

	  /**
	   * If any of `_pendingElement`, `_pendingStateQueue`, or `_pendingForceUpdate`
	   * is set, update the component.
	   *
	   * @param {ReactReconcileTransaction} transaction
	   * @internal
	   */
	  performUpdateIfNecessary: function performUpdateIfNecessary(transaction) {
	    if (this._pendingElement != null) {
	      ReactReconciler.receiveComponent(this, this._pendingElement || this._currentElement, transaction, this._context);
	    }

	    if (this._pendingStateQueue !== null || this._pendingForceUpdate) {
	      this.updateComponent(transaction, this._currentElement, this._currentElement, this._context, this._context);
	    }
	  },

	  /**
	   * Perform an update to a mounted component. The componentWillReceiveProps and
	   * shouldComponentUpdate methods are called, then (assuming the update isn't
	   * skipped) the remaining update lifecycle methods are called and the DOM
	   * representation is updated.
	   *
	   * By default, this implements React's rendering and reconciliation algorithm.
	   * Sophisticated clients may wish to override this.
	   *
	   * @param {ReactReconcileTransaction} transaction
	   * @param {ReactElement} prevParentElement
	   * @param {ReactElement} nextParentElement
	   * @internal
	   * @overridable
	   */
	  updateComponent: function updateComponent(transaction, prevParentElement, nextParentElement, prevUnmaskedContext, nextUnmaskedContext) {
	    var inst = this._instance;

	    var nextContext = this._context === nextUnmaskedContext ? inst.context : this._processContext(nextUnmaskedContext);
	    var nextProps;

	    // Distinguish between a props update versus a simple state update
	    if (prevParentElement === nextParentElement) {
	      // Skip checking prop types again -- we don't read inst.props to avoid
	      // warning for DOM component props in this upgrade
	      nextProps = nextParentElement.props;
	    } else {
	      nextProps = this._processProps(nextParentElement.props);
	      // An update here will schedule an update but immediately set
	      // _pendingStateQueue which will ensure that any state updates gets
	      // immediately reconciled instead of waiting for the next batch.

	      if (inst.componentWillReceiveProps) {
	        inst.componentWillReceiveProps(nextProps, nextContext);
	      }
	    }

	    var nextState = this._processPendingState(nextProps, nextContext);

	    var shouldUpdate = this._pendingForceUpdate || !inst.shouldComponentUpdate || inst.shouldComponentUpdate(nextProps, nextState, nextContext);

	    if (process.env.NODE_ENV !== 'production') {
	      process.env.NODE_ENV !== 'production' ? warning(typeof shouldUpdate !== 'undefined', '%s.shouldComponentUpdate(): Returned undefined instead of a ' + 'boolean value. Make sure to return true or false.', this.getName() || 'ReactCompositeComponent') : undefined;
	    }

	    if (shouldUpdate) {
	      this._pendingForceUpdate = false;
	      // Will set `this.props`, `this.state` and `this.context`.
	      this._performComponentUpdate(nextParentElement, nextProps, nextState, nextContext, transaction, nextUnmaskedContext);
	    } else {
	      // If it's determined that a component should not update, we still want
	      // to set props and state but we shortcut the rest of the update.
	      this._currentElement = nextParentElement;
	      this._context = nextUnmaskedContext;
	      inst.props = nextProps;
	      inst.state = nextState;
	      inst.context = nextContext;
	    }
	  },

	  _processPendingState: function _processPendingState(props, context) {
	    var inst = this._instance;
	    var queue = this._pendingStateQueue;
	    var replace = this._pendingReplaceState;
	    this._pendingReplaceState = false;
	    this._pendingStateQueue = null;

	    if (!queue) {
	      return inst.state;
	    }

	    if (replace && queue.length === 1) {
	      return queue[0];
	    }

	    var nextState = assign({}, replace ? queue[0] : inst.state);
	    for (var i = replace ? 1 : 0; i < queue.length; i++) {
	      var partial = queue[i];
	      assign(nextState, typeof partial === 'function' ? partial.call(inst, nextState, props, context) : partial);
	    }

	    return nextState;
	  },

	  /**
	   * Merges new props and state, notifies delegate methods of update and
	   * performs update.
	   *
	   * @param {ReactElement} nextElement Next element
	   * @param {object} nextProps Next public object to set as properties.
	   * @param {?object} nextState Next object to set as state.
	   * @param {?object} nextContext Next public object to set as context.
	   * @param {ReactReconcileTransaction} transaction
	   * @param {?object} unmaskedContext
	   * @private
	   */
	  _performComponentUpdate: function _performComponentUpdate(nextElement, nextProps, nextState, nextContext, transaction, unmaskedContext) {
	    var inst = this._instance;

	    var hasComponentDidUpdate = Boolean(inst.componentDidUpdate);
	    var prevProps;
	    var prevState;
	    var prevContext;
	    if (hasComponentDidUpdate) {
	      prevProps = inst.props;
	      prevState = inst.state;
	      prevContext = inst.context;
	    }

	    if (inst.componentWillUpdate) {
	      inst.componentWillUpdate(nextProps, nextState, nextContext);
	    }

	    this._currentElement = nextElement;
	    this._context = unmaskedContext;
	    inst.props = nextProps;
	    inst.state = nextState;
	    inst.context = nextContext;

	    this._updateRenderedComponent(transaction, unmaskedContext);

	    if (hasComponentDidUpdate) {
	      transaction.getReactMountReady().enqueue(inst.componentDidUpdate.bind(inst, prevProps, prevState, prevContext), inst);
	    }
	  },

	  /**
	   * Call the component's `render` method and update the DOM accordingly.
	   *
	   * @param {ReactReconcileTransaction} transaction
	   * @internal
	   */
	  _updateRenderedComponent: function _updateRenderedComponent(transaction, context) {
	    var prevComponentInstance = this._renderedComponent;
	    var prevRenderedElement = prevComponentInstance._currentElement;
	    var nextRenderedElement = this._renderValidatedComponent();
	    if (shouldUpdateReactComponent(prevRenderedElement, nextRenderedElement)) {
	      ReactReconciler.receiveComponent(prevComponentInstance, nextRenderedElement, transaction, this._processChildContext(context));
	    } else {
	      // These two IDs are actually the same! But nothing should rely on that.
	      var thisID = this._rootNodeID;
	      var prevComponentID = prevComponentInstance._rootNodeID;
	      ReactReconciler.unmountComponent(prevComponentInstance);

	      this._renderedComponent = this._instantiateReactComponent(nextRenderedElement);
	      var nextMarkup = ReactReconciler.mountComponent(this._renderedComponent, thisID, transaction, this._processChildContext(context));
	      this._replaceNodeWithMarkupByID(prevComponentID, nextMarkup);
	    }
	  },

	  /**
	   * @protected
	   */
	  _replaceNodeWithMarkupByID: function _replaceNodeWithMarkupByID(prevComponentID, nextMarkup) {
	    ReactComponentEnvironment.replaceNodeWithMarkupByID(prevComponentID, nextMarkup);
	  },

	  /**
	   * @protected
	   */
	  _renderValidatedComponentWithoutOwnerOrContext: function _renderValidatedComponentWithoutOwnerOrContext() {
	    var inst = this._instance;
	    var renderedComponent = inst.render();
	    if (process.env.NODE_ENV !== 'production') {
	      // We allow auto-mocks to proceed as if they're returning null.
	      if (typeof renderedComponent === 'undefined' && inst.render._isMockFunction) {
	        // This is probably bad practice. Consider warning here and
	        // deprecating this convenience.
	        renderedComponent = null;
	      }
	    }

	    return renderedComponent;
	  },

	  /**
	   * @private
	   */
	  _renderValidatedComponent: function _renderValidatedComponent() {
	    var renderedComponent;
	    ReactCurrentOwner.current = this;
	    try {
	      renderedComponent = this._renderValidatedComponentWithoutOwnerOrContext();
	    } finally {
	      ReactCurrentOwner.current = null;
	    }
	    !(
	    // TODO: An `isValidNode` function would probably be more appropriate
	    renderedComponent === null || renderedComponent === false || ReactElement.isValidElement(renderedComponent)) ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s.render(): A valid ReactComponent must be returned. You may have ' + 'returned undefined, an array or some other invalid object.', this.getName() || 'ReactCompositeComponent') : invariant(false) : undefined;
	    return renderedComponent;
	  },

	  /**
	   * Lazily allocates the refs object and stores `component` as `ref`.
	   *
	   * @param {string} ref Reference name.
	   * @param {component} component Component to store as `ref`.
	   * @final
	   * @private
	   */
	  attachRef: function attachRef(ref, component) {
	    var inst = this.getPublicInstance();
	    !(inst != null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Stateless function components cannot have refs.') : invariant(false) : undefined;
	    var publicComponentInstance = component.getPublicInstance();
	    if (process.env.NODE_ENV !== 'production') {
	      var componentName = component && component.getName ? component.getName() : 'a component';
	      process.env.NODE_ENV !== 'production' ? warning(publicComponentInstance != null, 'Stateless function components cannot be given refs ' + '(See ref "%s" in %s created by %s). ' + 'Attempts to access this ref will fail.', ref, componentName, this.getName()) : undefined;
	    }
	    var refs = inst.refs === emptyObject ? inst.refs = {} : inst.refs;
	    refs[ref] = publicComponentInstance;
	  },

	  /**
	   * Detaches a reference name.
	   *
	   * @param {string} ref Name to dereference.
	   * @final
	   * @private
	   */
	  detachRef: function detachRef(ref) {
	    var refs = this.getPublicInstance().refs;
	    delete refs[ref];
	  },

	  /**
	   * Get a text description of the component that can be used to identify it
	   * in error messages.
	   * @return {string} The name or null.
	   * @internal
	   */
	  getName: function getName() {
	    var type = this._currentElement.type;
	    var constructor = this._instance && this._instance.constructor;
	    return type.displayName || constructor && constructor.displayName || type.name || constructor && constructor.name || null;
	  },

	  /**
	   * Get the publicly accessible representation of this component - i.e. what
	   * is exposed by refs and returned by render. Can be null for stateless
	   * components.
	   *
	   * @return {ReactComponent} the public component instance.
	   * @internal
	   */
	  getPublicInstance: function getPublicInstance() {
	    var inst = this._instance;
	    if (inst instanceof StatelessComponent) {
	      return null;
	    }
	    return inst;
	  },

	  // Stub
	  _instantiateReactComponent: null

	};

	ReactPerf.measureMethods(ReactCompositeComponentMixin, 'ReactCompositeComponent', {
	  mountComponent: 'mountComponent',
	  updateComponent: 'updateComponent',
	  _renderValidatedComponent: '_renderValidatedComponent'
	});

	var ReactCompositeComponent = {

	  Mixin: ReactCompositeComponentMixin

	};

	module.exports = ReactCompositeComponent;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactComponentEnvironment
	 */

	'use strict';

	var invariant = __webpack_require__(14);

	var injected = false;

	var ReactComponentEnvironment = {

	  /**
	   * Optionally injectable environment dependent cleanup hook. (server vs.
	   * browser etc). Example: A browser system caches DOM nodes based on component
	   * ID and must remove that cache entry when this instance is unmounted.
	   */
	  unmountIDFromEnvironment: null,

	  /**
	   * Optionally injectable hook for swapping out mount images in the middle of
	   * the tree.
	   */
	  replaceNodeWithMarkupByID: null,

	  /**
	   * Optionally injectable hook for processing a queue of child updates. Will
	   * later move into MultiChildComponents.
	   */
	  processChildrenUpdates: null,

	  injection: {
	    injectEnvironment: function injectEnvironment(environment) {
	      !!injected ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactCompositeComponent: injectEnvironment() can only be called once.') : invariant(false) : undefined;
	      ReactComponentEnvironment.unmountIDFromEnvironment = environment.unmountIDFromEnvironment;
	      ReactComponentEnvironment.replaceNodeWithMarkupByID = environment.replaceNodeWithMarkupByID;
	      ReactComponentEnvironment.processChildrenUpdates = environment.processChildrenUpdates;
	      injected = true;
	    }
	  }

	};

	module.exports = ReactComponentEnvironment;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactPropTypeLocations
	 */

	'use strict';

	var keyMirror = __webpack_require__(18);

	var ReactPropTypeLocations = keyMirror({
	  prop: null,
	  context: null,
	  childContext: null
	});

	module.exports = ReactPropTypeLocations;

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactPropTypeLocationNames
	 */

	'use strict';

	var ReactPropTypeLocationNames = {};

	if (process.env.NODE_ENV !== 'production') {
	  ReactPropTypeLocationNames = {
	    prop: 'prop',
	    context: 'context',
	    childContext: 'child context'
	  };
	}

	module.exports = ReactPropTypeLocationNames;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 68 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule shouldUpdateReactComponent
	 * @typechecks static-only
	 */

	'use strict';

	/**
	 * Given a `prevElement` and `nextElement`, determines if the existing
	 * instance should be updated as opposed to being destroyed or replaced by a new
	 * instance. Both arguments are elements. This ensures that this logic can
	 * operate on stateless trees without any backing instance.
	 *
	 * @param {?object} prevElement
	 * @param {?object} nextElement
	 * @return {boolean} True if the existing instance should be updated.
	 * @protected
	 */

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	function shouldUpdateReactComponent(prevElement, nextElement) {
	  var prevEmpty = prevElement === null || prevElement === false;
	  var nextEmpty = nextElement === null || nextElement === false;
	  if (prevEmpty || nextEmpty) {
	    return prevEmpty === nextEmpty;
	  }

	  var prevType = typeof prevElement === 'undefined' ? 'undefined' : _typeof(prevElement);
	  var nextType = typeof nextElement === 'undefined' ? 'undefined' : _typeof(nextElement);
	  if (prevType === 'string' || prevType === 'number') {
	    return nextType === 'string' || nextType === 'number';
	  } else {
	    return nextType === 'object' && prevElement.type === nextElement.type && prevElement.key === nextElement.key;
	  }
	  return false;
	}

	module.exports = shouldUpdateReactComponent;

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactEmptyComponent
	 */

	'use strict';

	var ReactElement = __webpack_require__(43);
	var ReactEmptyComponentRegistry = __webpack_require__(45);
	var ReactReconciler = __webpack_require__(51);

	var assign = __webpack_require__(40);

	var placeholderElement;

	var ReactEmptyComponentInjection = {
	  injectEmptyComponent: function injectEmptyComponent(component) {
	    placeholderElement = ReactElement.createElement(component);
	  }
	};

	function registerNullComponentID() {
	  ReactEmptyComponentRegistry.registerNullComponentID(this._rootNodeID);
	}

	var ReactEmptyComponent = function ReactEmptyComponent(instantiate) {
	  this._currentElement = null;
	  this._rootNodeID = null;
	  this._renderedComponent = instantiate(placeholderElement);
	};
	assign(ReactEmptyComponent.prototype, {
	  construct: function construct(element) {},
	  mountComponent: function mountComponent(rootID, transaction, context) {
	    transaction.getReactMountReady().enqueue(registerNullComponentID, this);
	    this._rootNodeID = rootID;
	    return ReactReconciler.mountComponent(this._renderedComponent, rootID, transaction, context);
	  },
	  receiveComponent: function receiveComponent() {},
	  unmountComponent: function unmountComponent(rootID, transaction, context) {
	    ReactReconciler.unmountComponent(this._renderedComponent);
	    ReactEmptyComponentRegistry.deregisterNullComponentID(this._rootNodeID);
	    this._rootNodeID = null;
	    this._renderedComponent = null;
	  }
	});

	ReactEmptyComponent.injection = ReactEmptyComponentInjection;

	module.exports = ReactEmptyComponent;

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactNativeComponent
	 */

	'use strict';

	var assign = __webpack_require__(40);
	var invariant = __webpack_require__(14);

	var autoGenerateWrapperClass = null;
	var genericComponentClass = null;
	// This registry keeps track of wrapper classes around native tags.
	var tagToComponentClass = {};
	var textComponentClass = null;

	var ReactNativeComponentInjection = {
	  // This accepts a class that receives the tag string. This is a catch all
	  // that can render any kind of tag.
	  injectGenericComponentClass: function injectGenericComponentClass(componentClass) {
	    genericComponentClass = componentClass;
	  },
	  // This accepts a text component class that takes the text string to be
	  // rendered as props.
	  injectTextComponentClass: function injectTextComponentClass(componentClass) {
	    textComponentClass = componentClass;
	  },
	  // This accepts a keyed object with classes as values. Each key represents a
	  // tag. That particular tag will use this class instead of the generic one.
	  injectComponentClasses: function injectComponentClasses(componentClasses) {
	    assign(tagToComponentClass, componentClasses);
	  }
	};

	/**
	 * Get a composite component wrapper class for a specific tag.
	 *
	 * @param {ReactElement} element The tag for which to get the class.
	 * @return {function} The React class constructor function.
	 */
	function getComponentClassForElement(element) {
	  if (typeof element.type === 'function') {
	    return element.type;
	  }
	  var tag = element.type;
	  var componentClass = tagToComponentClass[tag];
	  if (componentClass == null) {
	    tagToComponentClass[tag] = componentClass = autoGenerateWrapperClass(tag);
	  }
	  return componentClass;
	}

	/**
	 * Get a native internal component class for a specific tag.
	 *
	 * @param {ReactElement} element The element to create.
	 * @return {function} The internal class constructor function.
	 */
	function createInternalComponent(element) {
	  !genericComponentClass ? process.env.NODE_ENV !== 'production' ? invariant(false, 'There is no registered component for the tag %s', element.type) : invariant(false) : undefined;
	  return new genericComponentClass(element.type, element.props);
	}

	/**
	 * @param {ReactText} text
	 * @return {ReactComponent}
	 */
	function createInstanceForText(text) {
	  return new textComponentClass(text);
	}

	/**
	 * @param {ReactComponent} component
	 * @return {boolean}
	 */
	function isTextComponent(component) {
	  return component instanceof textComponentClass;
	}

	var ReactNativeComponent = {
	  getComponentClassForElement: getComponentClassForElement,
	  createInternalComponent: createInternalComponent,
	  createInstanceForText: createInstanceForText,
	  isTextComponent: isTextComponent,
	  injection: ReactNativeComponentInjection
	};

	module.exports = ReactNativeComponent;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule validateDOMNesting
	 */

	'use strict';

	var assign = __webpack_require__(40);
	var emptyFunction = __webpack_require__(16);
	var warning = __webpack_require__(26);

	var validateDOMNesting = emptyFunction;

	if (process.env.NODE_ENV !== 'production') {
	  // This validation code was written based on the HTML5 parsing spec:
	  // https://html.spec.whatwg.org/multipage/syntax.html#has-an-element-in-scope
	  //
	  // Note: this does not catch all invalid nesting, nor does it try to (as it's
	  // not clear what practical benefit doing so provides); instead, we warn only
	  // for cases where the parser will give a parse tree differing from what React
	  // intended. For example, <b><div></div></b> is invalid but we don't warn
	  // because it still parses correctly; we do warn for other cases like nested
	  // <p> tags where the beginning of the second element implicitly closes the
	  // first, causing a confusing mess.

	  // https://html.spec.whatwg.org/multipage/syntax.html#special
	  var specialTags = ['address', 'applet', 'area', 'article', 'aside', 'base', 'basefont', 'bgsound', 'blockquote', 'body', 'br', 'button', 'caption', 'center', 'col', 'colgroup', 'dd', 'details', 'dir', 'div', 'dl', 'dt', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'frame', 'frameset', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'iframe', 'img', 'input', 'isindex', 'li', 'link', 'listing', 'main', 'marquee', 'menu', 'menuitem', 'meta', 'nav', 'noembed', 'noframes', 'noscript', 'object', 'ol', 'p', 'param', 'plaintext', 'pre', 'script', 'section', 'select', 'source', 'style', 'summary', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'title', 'tr', 'track', 'ul', 'wbr', 'xmp'];

	  // https://html.spec.whatwg.org/multipage/syntax.html#has-an-element-in-scope
	  var inScopeTags = ['applet', 'caption', 'html', 'table', 'td', 'th', 'marquee', 'object', 'template',

	  // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
	  // TODO: Distinguish by namespace here -- for <title>, including it here
	  // errs on the side of fewer warnings
	  'foreignObject', 'desc', 'title'];

	  // https://html.spec.whatwg.org/multipage/syntax.html#has-an-element-in-button-scope
	  var buttonScopeTags = inScopeTags.concat(['button']);

	  // https://html.spec.whatwg.org/multipage/syntax.html#generate-implied-end-tags
	  var impliedEndTags = ['dd', 'dt', 'li', 'option', 'optgroup', 'p', 'rp', 'rt'];

	  var emptyAncestorInfo = {
	    parentTag: null,

	    formTag: null,
	    aTagInScope: null,
	    buttonTagInScope: null,
	    nobrTagInScope: null,
	    pTagInButtonScope: null,

	    listItemTagAutoclosing: null,
	    dlItemTagAutoclosing: null
	  };

	  var updatedAncestorInfo = function updatedAncestorInfo(oldInfo, tag, instance) {
	    var ancestorInfo = assign({}, oldInfo || emptyAncestorInfo);
	    var info = { tag: tag, instance: instance };

	    if (inScopeTags.indexOf(tag) !== -1) {
	      ancestorInfo.aTagInScope = null;
	      ancestorInfo.buttonTagInScope = null;
	      ancestorInfo.nobrTagInScope = null;
	    }
	    if (buttonScopeTags.indexOf(tag) !== -1) {
	      ancestorInfo.pTagInButtonScope = null;
	    }

	    // See rules for 'li', 'dd', 'dt' start tags in
	    // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inbody
	    if (specialTags.indexOf(tag) !== -1 && tag !== 'address' && tag !== 'div' && tag !== 'p') {
	      ancestorInfo.listItemTagAutoclosing = null;
	      ancestorInfo.dlItemTagAutoclosing = null;
	    }

	    ancestorInfo.parentTag = info;

	    if (tag === 'form') {
	      ancestorInfo.formTag = info;
	    }
	    if (tag === 'a') {
	      ancestorInfo.aTagInScope = info;
	    }
	    if (tag === 'button') {
	      ancestorInfo.buttonTagInScope = info;
	    }
	    if (tag === 'nobr') {
	      ancestorInfo.nobrTagInScope = info;
	    }
	    if (tag === 'p') {
	      ancestorInfo.pTagInButtonScope = info;
	    }
	    if (tag === 'li') {
	      ancestorInfo.listItemTagAutoclosing = info;
	    }
	    if (tag === 'dd' || tag === 'dt') {
	      ancestorInfo.dlItemTagAutoclosing = info;
	    }

	    return ancestorInfo;
	  };

	  /**
	   * Returns whether
	   */
	  var isTagValidWithParent = function isTagValidWithParent(tag, parentTag) {
	    // First, let's check if we're in an unusual parsing mode...
	    switch (parentTag) {
	      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inselect
	      case 'select':
	        return tag === 'option' || tag === 'optgroup' || tag === '#text';
	      case 'optgroup':
	        return tag === 'option' || tag === '#text';
	      // Strictly speaking, seeing an <option> doesn't mean we're in a <select>
	      // but
	      case 'option':
	        return tag === '#text';

	      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intd
	      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incaption
	      // No special behavior since these rules fall back to "in body" mode for
	      // all except special table nodes which cause bad parsing behavior anyway.

	      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intr
	      case 'tr':
	        return tag === 'th' || tag === 'td' || tag === 'style' || tag === 'script' || tag === 'template';

	      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intbody
	      case 'tbody':
	      case 'thead':
	      case 'tfoot':
	        return tag === 'tr' || tag === 'style' || tag === 'script' || tag === 'template';

	      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incolgroup
	      case 'colgroup':
	        return tag === 'col' || tag === 'template';

	      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intable
	      case 'table':
	        return tag === 'caption' || tag === 'colgroup' || tag === 'tbody' || tag === 'tfoot' || tag === 'thead' || tag === 'style' || tag === 'script' || tag === 'template';

	      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inhead
	      case 'head':
	        return tag === 'base' || tag === 'basefont' || tag === 'bgsound' || tag === 'link' || tag === 'meta' || tag === 'title' || tag === 'noscript' || tag === 'noframes' || tag === 'style' || tag === 'script' || tag === 'template';

	      // https://html.spec.whatwg.org/multipage/semantics.html#the-html-element
	      case 'html':
	        return tag === 'head' || tag === 'body';
	    }

	    // Probably in the "in body" parsing mode, so we outlaw only tag combos
	    // where the parsing rules cause implicit opens or closes to be added.
	    // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inbody
	    switch (tag) {
	      case 'h1':
	      case 'h2':
	      case 'h3':
	      case 'h4':
	      case 'h5':
	      case 'h6':
	        return parentTag !== 'h1' && parentTag !== 'h2' && parentTag !== 'h3' && parentTag !== 'h4' && parentTag !== 'h5' && parentTag !== 'h6';

	      case 'rp':
	      case 'rt':
	        return impliedEndTags.indexOf(parentTag) === -1;

	      case 'caption':
	      case 'col':
	      case 'colgroup':
	      case 'frame':
	      case 'head':
	      case 'tbody':
	      case 'td':
	      case 'tfoot':
	      case 'th':
	      case 'thead':
	      case 'tr':
	        // These tags are only valid with a few parents that have special child
	        // parsing rules -- if we're down here, then none of those matched and
	        // so we allow it only if we don't know what the parent is, as all other
	        // cases are invalid.
	        return parentTag == null;
	    }

	    return true;
	  };

	  /**
	   * Returns whether
	   */
	  var findInvalidAncestorForTag = function findInvalidAncestorForTag(tag, ancestorInfo) {
	    switch (tag) {
	      case 'address':
	      case 'article':
	      case 'aside':
	      case 'blockquote':
	      case 'center':
	      case 'details':
	      case 'dialog':
	      case 'dir':
	      case 'div':
	      case 'dl':
	      case 'fieldset':
	      case 'figcaption':
	      case 'figure':
	      case 'footer':
	      case 'header':
	      case 'hgroup':
	      case 'main':
	      case 'menu':
	      case 'nav':
	      case 'ol':
	      case 'p':
	      case 'section':
	      case 'summary':
	      case 'ul':

	      case 'pre':
	      case 'listing':

	      case 'table':

	      case 'hr':

	      case 'xmp':

	      case 'h1':
	      case 'h2':
	      case 'h3':
	      case 'h4':
	      case 'h5':
	      case 'h6':
	        return ancestorInfo.pTagInButtonScope;

	      case 'form':
	        return ancestorInfo.formTag || ancestorInfo.pTagInButtonScope;

	      case 'li':
	        return ancestorInfo.listItemTagAutoclosing;

	      case 'dd':
	      case 'dt':
	        return ancestorInfo.dlItemTagAutoclosing;

	      case 'button':
	        return ancestorInfo.buttonTagInScope;

	      case 'a':
	        // Spec says something about storing a list of markers, but it sounds
	        // equivalent to this check.
	        return ancestorInfo.aTagInScope;

	      case 'nobr':
	        return ancestorInfo.nobrTagInScope;
	    }

	    return null;
	  };

	  /**
	   * Given a ReactCompositeComponent instance, return a list of its recursive
	   * owners, starting at the root and ending with the instance itself.
	   */
	  var findOwnerStack = function findOwnerStack(instance) {
	    if (!instance) {
	      return [];
	    }

	    var stack = [];
	    /*eslint-disable space-after-keywords */
	    do {
	      /*eslint-enable space-after-keywords */
	      stack.push(instance);
	    } while (instance = instance._currentElement._owner);
	    stack.reverse();
	    return stack;
	  };

	  var didWarn = {};

	  validateDOMNesting = function validateDOMNesting(childTag, childInstance, ancestorInfo) {
	    ancestorInfo = ancestorInfo || emptyAncestorInfo;
	    var parentInfo = ancestorInfo.parentTag;
	    var parentTag = parentInfo && parentInfo.tag;

	    var invalidParent = isTagValidWithParent(childTag, parentTag) ? null : parentInfo;
	    var invalidAncestor = invalidParent ? null : findInvalidAncestorForTag(childTag, ancestorInfo);
	    var problematic = invalidParent || invalidAncestor;

	    if (problematic) {
	      var ancestorTag = problematic.tag;
	      var ancestorInstance = problematic.instance;

	      var childOwner = childInstance && childInstance._currentElement._owner;
	      var ancestorOwner = ancestorInstance && ancestorInstance._currentElement._owner;

	      var childOwners = findOwnerStack(childOwner);
	      var ancestorOwners = findOwnerStack(ancestorOwner);

	      var minStackLen = Math.min(childOwners.length, ancestorOwners.length);
	      var i;

	      var deepestCommon = -1;
	      for (i = 0; i < minStackLen; i++) {
	        if (childOwners[i] === ancestorOwners[i]) {
	          deepestCommon = i;
	        } else {
	          break;
	        }
	      }

	      var UNKNOWN = '(unknown)';
	      var childOwnerNames = childOwners.slice(deepestCommon + 1).map(function (inst) {
	        return inst.getName() || UNKNOWN;
	      });
	      var ancestorOwnerNames = ancestorOwners.slice(deepestCommon + 1).map(function (inst) {
	        return inst.getName() || UNKNOWN;
	      });
	      var ownerInfo = [].concat(
	      // If the parent and child instances have a common owner ancestor, start
	      // with that -- otherwise we just start with the parent's owners.
	      deepestCommon !== -1 ? childOwners[deepestCommon].getName() || UNKNOWN : [], ancestorOwnerNames, ancestorTag,
	      // If we're warning about an invalid (non-parent) ancestry, add '...'
	      invalidAncestor ? ['...'] : [], childOwnerNames, childTag).join(' > ');

	      var warnKey = !!invalidParent + '|' + childTag + '|' + ancestorTag + '|' + ownerInfo;
	      if (didWarn[warnKey]) {
	        return;
	      }
	      didWarn[warnKey] = true;

	      if (invalidParent) {
	        var info = '';
	        if (ancestorTag === 'table' && childTag === 'tr') {
	          info += ' Add a <tbody> to your code to match the DOM tree generated by ' + 'the browser.';
	        }
	        process.env.NODE_ENV !== 'production' ? warning(false, 'validateDOMNesting(...): <%s> cannot appear as a child of <%s>. ' + 'See %s.%s', childTag, ancestorTag, ownerInfo, info) : undefined;
	      } else {
	        process.env.NODE_ENV !== 'production' ? warning(false, 'validateDOMNesting(...): <%s> cannot appear as a descendant of ' + '<%s>. See %s.', childTag, ancestorTag, ownerInfo) : undefined;
	      }
	    }
	  };

	  validateDOMNesting.ancestorInfoContextKey = '__validateDOMNesting_ancestorInfo$' + Math.random().toString(36).slice(2);

	  validateDOMNesting.updatedAncestorInfo = updatedAncestorInfo;

	  // For testing
	  validateDOMNesting.isTagValidInContext = function (tag, ancestorInfo) {
	    ancestorInfo = ancestorInfo || emptyAncestorInfo;
	    var parentInfo = ancestorInfo.parentTag;
	    var parentTag = parentInfo && parentInfo.tag;
	    return isTagValidWithParent(tag, parentTag) && !findInvalidAncestorForTag(tag, ancestorInfo);
	  };
	}

	module.exports = validateDOMNesting;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDefaultInjection
	 */

	'use strict';

	var BeforeInputEventPlugin = __webpack_require__(73);
	var ChangeEventPlugin = __webpack_require__(81);
	var ClientReactRootIndex = __webpack_require__(84);
	var DefaultEventPluginOrder = __webpack_require__(85);
	var EnterLeaveEventPlugin = __webpack_require__(86);
	var ExecutionEnvironment = __webpack_require__(10);
	var HTMLDOMPropertyConfig = __webpack_require__(90);
	var ReactBrowserComponentMixin = __webpack_require__(91);
	var ReactComponentBrowserEnvironment = __webpack_require__(27);
	var ReactDefaultBatchingStrategy = __webpack_require__(93);
	var ReactDOMComponent = __webpack_require__(94);
	var ReactDOMTextComponent = __webpack_require__(7);
	var ReactEventListener = __webpack_require__(119);
	var ReactInjection = __webpack_require__(122);
	var ReactInstanceHandles = __webpack_require__(46);
	var ReactMount = __webpack_require__(29);
	var ReactReconcileTransaction = __webpack_require__(126);
	var SelectEventPlugin = __webpack_require__(131);
	var ServerReactRootIndex = __webpack_require__(132);
	var SimpleEventPlugin = __webpack_require__(133);
	var SVGDOMPropertyConfig = __webpack_require__(142);

	var alreadyInjected = false;

	function inject() {
	  if (alreadyInjected) {
	    // TODO: This is currently true because these injections are shared between
	    // the client and the server package. They should be built independently
	    // and not share any injection state. Then this problem will be solved.
	    return;
	  }
	  alreadyInjected = true;

	  ReactInjection.EventEmitter.injectReactEventListener(ReactEventListener);

	  /**
	   * Inject modules for resolving DOM hierarchy and plugin ordering.
	   */
	  ReactInjection.EventPluginHub.injectEventPluginOrder(DefaultEventPluginOrder);
	  ReactInjection.EventPluginHub.injectInstanceHandle(ReactInstanceHandles);
	  ReactInjection.EventPluginHub.injectMount(ReactMount);

	  /**
	   * Some important event plugins included by default (without having to require
	   * them).
	   */
	  ReactInjection.EventPluginHub.injectEventPluginsByName({
	    SimpleEventPlugin: SimpleEventPlugin,
	    EnterLeaveEventPlugin: EnterLeaveEventPlugin,
	    ChangeEventPlugin: ChangeEventPlugin,
	    SelectEventPlugin: SelectEventPlugin,
	    BeforeInputEventPlugin: BeforeInputEventPlugin
	  });

	  ReactInjection.NativeComponent.injectGenericComponentClass(ReactDOMComponent);

	  ReactInjection.NativeComponent.injectTextComponentClass(ReactDOMTextComponent);

	  ReactInjection.Class.injectMixin(ReactBrowserComponentMixin);

	  ReactInjection.DOMProperty.injectDOMPropertyConfig(HTMLDOMPropertyConfig);
	  ReactInjection.DOMProperty.injectDOMPropertyConfig(SVGDOMPropertyConfig);

	  ReactInjection.EmptyComponent.injectEmptyComponent('noscript');

	  ReactInjection.Updates.injectReconcileTransaction(ReactReconcileTransaction);
	  ReactInjection.Updates.injectBatchingStrategy(ReactDefaultBatchingStrategy);

	  ReactInjection.RootIndex.injectCreateReactRootIndex(ExecutionEnvironment.canUseDOM ? ClientReactRootIndex.createReactRootIndex : ServerReactRootIndex.createReactRootIndex);

	  ReactInjection.Component.injectEnvironment(ReactComponentBrowserEnvironment);

	  if (process.env.NODE_ENV !== 'production') {
	    var url = ExecutionEnvironment.canUseDOM && window.location.href || '';
	    if (/[?&]react_perf\b/.test(url)) {
	      var ReactDefaultPerf = __webpack_require__(143);
	      ReactDefaultPerf.start();
	    }
	  }
	}

	module.exports = {
	  inject: inject
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015 Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule BeforeInputEventPlugin
	 * @typechecks static-only
	 */

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var EventConstants = __webpack_require__(31);
	var EventPropagators = __webpack_require__(74);
	var ExecutionEnvironment = __webpack_require__(10);
	var FallbackCompositionState = __webpack_require__(75);
	var SyntheticCompositionEvent = __webpack_require__(77);
	var SyntheticInputEvent = __webpack_require__(79);

	var keyOf = __webpack_require__(80);

	var END_KEYCODES = [9, 13, 27, 32]; // Tab, Return, Esc, Space
	var START_KEYCODE = 229;

	var canUseCompositionEvent = ExecutionEnvironment.canUseDOM && 'CompositionEvent' in window;

	var documentMode = null;
	if (ExecutionEnvironment.canUseDOM && 'documentMode' in document) {
	  documentMode = document.documentMode;
	}

	// Webkit offers a very useful `textInput` event that can be used to
	// directly represent `beforeInput`. The IE `textinput` event is not as
	// useful, so we don't use it.
	var canUseTextInputEvent = ExecutionEnvironment.canUseDOM && 'TextEvent' in window && !documentMode && !isPresto();

	// In IE9+, we have access to composition events, but the data supplied
	// by the native compositionend event may be incorrect. Japanese ideographic
	// spaces, for instance (\u3000) are not recorded correctly.
	var useFallbackCompositionData = ExecutionEnvironment.canUseDOM && (!canUseCompositionEvent || documentMode && documentMode > 8 && documentMode <= 11);

	/**
	 * Opera <= 12 includes TextEvent in window, but does not fire
	 * text input events. Rely on keypress instead.
	 */
	function isPresto() {
	  var opera = window.opera;
	  return (typeof opera === 'undefined' ? 'undefined' : _typeof(opera)) === 'object' && typeof opera.version === 'function' && parseInt(opera.version(), 10) <= 12;
	}

	var SPACEBAR_CODE = 32;
	var SPACEBAR_CHAR = String.fromCharCode(SPACEBAR_CODE);

	var topLevelTypes = EventConstants.topLevelTypes;

	// Events and their corresponding property names.
	var eventTypes = {
	  beforeInput: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onBeforeInput: null }),
	      captured: keyOf({ onBeforeInputCapture: null })
	    },
	    dependencies: [topLevelTypes.topCompositionEnd, topLevelTypes.topKeyPress, topLevelTypes.topTextInput, topLevelTypes.topPaste]
	  },
	  compositionEnd: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onCompositionEnd: null }),
	      captured: keyOf({ onCompositionEndCapture: null })
	    },
	    dependencies: [topLevelTypes.topBlur, topLevelTypes.topCompositionEnd, topLevelTypes.topKeyDown, topLevelTypes.topKeyPress, topLevelTypes.topKeyUp, topLevelTypes.topMouseDown]
	  },
	  compositionStart: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onCompositionStart: null }),
	      captured: keyOf({ onCompositionStartCapture: null })
	    },
	    dependencies: [topLevelTypes.topBlur, topLevelTypes.topCompositionStart, topLevelTypes.topKeyDown, topLevelTypes.topKeyPress, topLevelTypes.topKeyUp, topLevelTypes.topMouseDown]
	  },
	  compositionUpdate: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onCompositionUpdate: null }),
	      captured: keyOf({ onCompositionUpdateCapture: null })
	    },
	    dependencies: [topLevelTypes.topBlur, topLevelTypes.topCompositionUpdate, topLevelTypes.topKeyDown, topLevelTypes.topKeyPress, topLevelTypes.topKeyUp, topLevelTypes.topMouseDown]
	  }
	};

	// Track whether we've ever handled a keypress on the space key.
	var hasSpaceKeypress = false;

	/**
	 * Return whether a native keypress event is assumed to be a command.
	 * This is required because Firefox fires `keypress` events for key commands
	 * (cut, copy, select-all, etc.) even though no character is inserted.
	 */
	function isKeypressCommand(nativeEvent) {
	  return (nativeEvent.ctrlKey || nativeEvent.altKey || nativeEvent.metaKey) &&
	  // ctrlKey && altKey is equivalent to AltGr, and is not a command.
	  !(nativeEvent.ctrlKey && nativeEvent.altKey);
	}

	/**
	 * Translate native top level events into event types.
	 *
	 * @param {string} topLevelType
	 * @return {object}
	 */
	function getCompositionEventType(topLevelType) {
	  switch (topLevelType) {
	    case topLevelTypes.topCompositionStart:
	      return eventTypes.compositionStart;
	    case topLevelTypes.topCompositionEnd:
	      return eventTypes.compositionEnd;
	    case topLevelTypes.topCompositionUpdate:
	      return eventTypes.compositionUpdate;
	  }
	}

	/**
	 * Does our fallback best-guess model think this event signifies that
	 * composition has begun?
	 *
	 * @param {string} topLevelType
	 * @param {object} nativeEvent
	 * @return {boolean}
	 */
	function isFallbackCompositionStart(topLevelType, nativeEvent) {
	  return topLevelType === topLevelTypes.topKeyDown && nativeEvent.keyCode === START_KEYCODE;
	}

	/**
	 * Does our fallback mode think that this event is the end of composition?
	 *
	 * @param {string} topLevelType
	 * @param {object} nativeEvent
	 * @return {boolean}
	 */
	function isFallbackCompositionEnd(topLevelType, nativeEvent) {
	  switch (topLevelType) {
	    case topLevelTypes.topKeyUp:
	      // Command keys insert or clear IME input.
	      return END_KEYCODES.indexOf(nativeEvent.keyCode) !== -1;
	    case topLevelTypes.topKeyDown:
	      // Expect IME keyCode on each keydown. If we get any other
	      // code we must have exited earlier.
	      return nativeEvent.keyCode !== START_KEYCODE;
	    case topLevelTypes.topKeyPress:
	    case topLevelTypes.topMouseDown:
	    case topLevelTypes.topBlur:
	      // Events are not possible without cancelling IME.
	      return true;
	    default:
	      return false;
	  }
	}

	/**
	 * Google Input Tools provides composition data via a CustomEvent,
	 * with the `data` property populated in the `detail` object. If this
	 * is available on the event object, use it. If not, this is a plain
	 * composition event and we have nothing special to extract.
	 *
	 * @param {object} nativeEvent
	 * @return {?string}
	 */
	function getDataFromCustomEvent(nativeEvent) {
	  var detail = nativeEvent.detail;
	  if ((typeof detail === 'undefined' ? 'undefined' : _typeof(detail)) === 'object' && 'data' in detail) {
	    return detail.data;
	  }
	  return null;
	}

	// Track the current IME composition fallback object, if any.
	var currentComposition = null;

	/**
	 * @param {string} topLevelType Record from `EventConstants`.
	 * @param {DOMEventTarget} topLevelTarget The listening component root node.
	 * @param {string} topLevelTargetID ID of `topLevelTarget`.
	 * @param {object} nativeEvent Native browser event.
	 * @return {?object} A SyntheticCompositionEvent.
	 */
	function extractCompositionEvent(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget) {
	  var eventType;
	  var fallbackData;

	  if (canUseCompositionEvent) {
	    eventType = getCompositionEventType(topLevelType);
	  } else if (!currentComposition) {
	    if (isFallbackCompositionStart(topLevelType, nativeEvent)) {
	      eventType = eventTypes.compositionStart;
	    }
	  } else if (isFallbackCompositionEnd(topLevelType, nativeEvent)) {
	    eventType = eventTypes.compositionEnd;
	  }

	  if (!eventType) {
	    return null;
	  }

	  if (useFallbackCompositionData) {
	    // The current composition is stored statically and must not be
	    // overwritten while composition continues.
	    if (!currentComposition && eventType === eventTypes.compositionStart) {
	      currentComposition = FallbackCompositionState.getPooled(topLevelTarget);
	    } else if (eventType === eventTypes.compositionEnd) {
	      if (currentComposition) {
	        fallbackData = currentComposition.getData();
	      }
	    }
	  }

	  var event = SyntheticCompositionEvent.getPooled(eventType, topLevelTargetID, nativeEvent, nativeEventTarget);

	  if (fallbackData) {
	    // Inject data generated from fallback path into the synthetic event.
	    // This matches the property of native CompositionEventInterface.
	    event.data = fallbackData;
	  } else {
	    var customData = getDataFromCustomEvent(nativeEvent);
	    if (customData !== null) {
	      event.data = customData;
	    }
	  }

	  EventPropagators.accumulateTwoPhaseDispatches(event);
	  return event;
	}

	/**
	 * @param {string} topLevelType Record from `EventConstants`.
	 * @param {object} nativeEvent Native browser event.
	 * @return {?string} The string corresponding to this `beforeInput` event.
	 */
	function getNativeBeforeInputChars(topLevelType, nativeEvent) {
	  switch (topLevelType) {
	    case topLevelTypes.topCompositionEnd:
	      return getDataFromCustomEvent(nativeEvent);
	    case topLevelTypes.topKeyPress:
	      /**
	       * If native `textInput` events are available, our goal is to make
	       * use of them. However, there is a special case: the spacebar key.
	       * In Webkit, preventing default on a spacebar `textInput` event
	       * cancels character insertion, but it *also* causes the browser
	       * to fall back to its default spacebar behavior of scrolling the
	       * page.
	       *
	       * Tracking at:
	       * https://code.google.com/p/chromium/issues/detail?id=355103
	       *
	       * To avoid this issue, use the keypress event as if no `textInput`
	       * event is available.
	       */
	      var which = nativeEvent.which;
	      if (which !== SPACEBAR_CODE) {
	        return null;
	      }

	      hasSpaceKeypress = true;
	      return SPACEBAR_CHAR;

	    case topLevelTypes.topTextInput:
	      // Record the characters to be added to the DOM.
	      var chars = nativeEvent.data;

	      // If it's a spacebar character, assume that we have already handled
	      // it at the keypress level and bail immediately. Android Chrome
	      // doesn't give us keycodes, so we need to blacklist it.
	      if (chars === SPACEBAR_CHAR && hasSpaceKeypress) {
	        return null;
	      }

	      return chars;

	    default:
	      // For other native event types, do nothing.
	      return null;
	  }
	}

	/**
	 * For browsers that do not provide the `textInput` event, extract the
	 * appropriate string to use for SyntheticInputEvent.
	 *
	 * @param {string} topLevelType Record from `EventConstants`.
	 * @param {object} nativeEvent Native browser event.
	 * @return {?string} The fallback string for this `beforeInput` event.
	 */
	function getFallbackBeforeInputChars(topLevelType, nativeEvent) {
	  // If we are currently composing (IME) and using a fallback to do so,
	  // try to extract the composed characters from the fallback object.
	  if (currentComposition) {
	    if (topLevelType === topLevelTypes.topCompositionEnd || isFallbackCompositionEnd(topLevelType, nativeEvent)) {
	      var chars = currentComposition.getData();
	      FallbackCompositionState.release(currentComposition);
	      currentComposition = null;
	      return chars;
	    }
	    return null;
	  }

	  switch (topLevelType) {
	    case topLevelTypes.topPaste:
	      // If a paste event occurs after a keypress, throw out the input
	      // chars. Paste events should not lead to BeforeInput events.
	      return null;
	    case topLevelTypes.topKeyPress:
	      /**
	       * As of v27, Firefox may fire keypress events even when no character
	       * will be inserted. A few possibilities:
	       *
	       * - `which` is `0`. Arrow keys, Esc key, etc.
	       *
	       * - `which` is the pressed key code, but no char is available.
	       *   Ex: 'AltGr + d` in Polish. There is no modified character for
	       *   this key combination and no character is inserted into the
	       *   document, but FF fires the keypress for char code `100` anyway.
	       *   No `input` event will occur.
	       *
	       * - `which` is the pressed key code, but a command combination is
	       *   being used. Ex: `Cmd+C`. No character is inserted, and no
	       *   `input` event will occur.
	       */
	      if (nativeEvent.which && !isKeypressCommand(nativeEvent)) {
	        return String.fromCharCode(nativeEvent.which);
	      }
	      return null;
	    case topLevelTypes.topCompositionEnd:
	      return useFallbackCompositionData ? null : nativeEvent.data;
	    default:
	      return null;
	  }
	}

	/**
	 * Extract a SyntheticInputEvent for `beforeInput`, based on either native
	 * `textInput` or fallback behavior.
	 *
	 * @param {string} topLevelType Record from `EventConstants`.
	 * @param {DOMEventTarget} topLevelTarget The listening component root node.
	 * @param {string} topLevelTargetID ID of `topLevelTarget`.
	 * @param {object} nativeEvent Native browser event.
	 * @return {?object} A SyntheticInputEvent.
	 */
	function extractBeforeInputEvent(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget) {
	  var chars;

	  if (canUseTextInputEvent) {
	    chars = getNativeBeforeInputChars(topLevelType, nativeEvent);
	  } else {
	    chars = getFallbackBeforeInputChars(topLevelType, nativeEvent);
	  }

	  // If no characters are being inserted, no BeforeInput event should
	  // be fired.
	  if (!chars) {
	    return null;
	  }

	  var event = SyntheticInputEvent.getPooled(eventTypes.beforeInput, topLevelTargetID, nativeEvent, nativeEventTarget);

	  event.data = chars;
	  EventPropagators.accumulateTwoPhaseDispatches(event);
	  return event;
	}

	/**
	 * Create an `onBeforeInput` event to match
	 * http://www.w3.org/TR/2013/WD-DOM-Level-3-Events-20131105/#events-inputevents.
	 *
	 * This event plugin is based on the native `textInput` event
	 * available in Chrome, Safari, Opera, and IE. This event fires after
	 * `onKeyPress` and `onCompositionEnd`, but before `onInput`.
	 *
	 * `beforeInput` is spec'd but not implemented in any browsers, and
	 * the `input` event does not provide any useful information about what has
	 * actually been added, contrary to the spec. Thus, `textInput` is the best
	 * available event to identify the characters that have actually been inserted
	 * into the target node.
	 *
	 * This plugin is also responsible for emitting `composition` events, thus
	 * allowing us to share composition fallback code for both `beforeInput` and
	 * `composition` event types.
	 */
	var BeforeInputEventPlugin = {

	  eventTypes: eventTypes,

	  /**
	   * @param {string} topLevelType Record from `EventConstants`.
	   * @param {DOMEventTarget} topLevelTarget The listening component root node.
	   * @param {string} topLevelTargetID ID of `topLevelTarget`.
	   * @param {object} nativeEvent Native browser event.
	   * @return {*} An accumulation of synthetic events.
	   * @see {EventPluginHub.extractEvents}
	   */
	  extractEvents: function extractEvents(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget) {
	    return [extractCompositionEvent(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget), extractBeforeInputEvent(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget)];
	  }
	};

	module.exports = BeforeInputEventPlugin;

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule EventPropagators
	 */

	'use strict';

	var EventConstants = __webpack_require__(31);
	var EventPluginHub = __webpack_require__(32);

	var warning = __webpack_require__(26);

	var accumulateInto = __webpack_require__(36);
	var forEachAccumulated = __webpack_require__(37);

	var PropagationPhases = EventConstants.PropagationPhases;
	var getListener = EventPluginHub.getListener;

	/**
	 * Some event types have a notion of different registration names for different
	 * "phases" of propagation. This finds listeners by a given phase.
	 */
	function listenerAtPhase(id, event, propagationPhase) {
	  var registrationName = event.dispatchConfig.phasedRegistrationNames[propagationPhase];
	  return getListener(id, registrationName);
	}

	/**
	 * Tags a `SyntheticEvent` with dispatched listeners. Creating this function
	 * here, allows us to not have to bind or create functions for each event.
	 * Mutating the event's members allows us to not have to create a wrapping
	 * "dispatch" object that pairs the event with the listener.
	 */
	function accumulateDirectionalDispatches(domID, upwards, event) {
	  if (process.env.NODE_ENV !== 'production') {
	    process.env.NODE_ENV !== 'production' ? warning(domID, 'Dispatching id must not be null') : undefined;
	  }
	  var phase = upwards ? PropagationPhases.bubbled : PropagationPhases.captured;
	  var listener = listenerAtPhase(domID, event, phase);
	  if (listener) {
	    event._dispatchListeners = accumulateInto(event._dispatchListeners, listener);
	    event._dispatchIDs = accumulateInto(event._dispatchIDs, domID);
	  }
	}

	/**
	 * Collect dispatches (must be entirely collected before dispatching - see unit
	 * tests). Lazily allocate the array to conserve memory.  We must loop through
	 * each event and perform the traversal for each one. We cannot perform a
	 * single traversal for the entire collection of events because each event may
	 * have a different target.
	 */
	function accumulateTwoPhaseDispatchesSingle(event) {
	  if (event && event.dispatchConfig.phasedRegistrationNames) {
	    EventPluginHub.injection.getInstanceHandle().traverseTwoPhase(event.dispatchMarker, accumulateDirectionalDispatches, event);
	  }
	}

	/**
	 * Same as `accumulateTwoPhaseDispatchesSingle`, but skips over the targetID.
	 */
	function accumulateTwoPhaseDispatchesSingleSkipTarget(event) {
	  if (event && event.dispatchConfig.phasedRegistrationNames) {
	    EventPluginHub.injection.getInstanceHandle().traverseTwoPhaseSkipTarget(event.dispatchMarker, accumulateDirectionalDispatches, event);
	  }
	}

	/**
	 * Accumulates without regard to direction, does not look for phased
	 * registration names. Same as `accumulateDirectDispatchesSingle` but without
	 * requiring that the `dispatchMarker` be the same as the dispatched ID.
	 */
	function accumulateDispatches(id, ignoredDirection, event) {
	  if (event && event.dispatchConfig.registrationName) {
	    var registrationName = event.dispatchConfig.registrationName;
	    var listener = getListener(id, registrationName);
	    if (listener) {
	      event._dispatchListeners = accumulateInto(event._dispatchListeners, listener);
	      event._dispatchIDs = accumulateInto(event._dispatchIDs, id);
	    }
	  }
	}

	/**
	 * Accumulates dispatches on an `SyntheticEvent`, but only for the
	 * `dispatchMarker`.
	 * @param {SyntheticEvent} event
	 */
	function accumulateDirectDispatchesSingle(event) {
	  if (event && event.dispatchConfig.registrationName) {
	    accumulateDispatches(event.dispatchMarker, null, event);
	  }
	}

	function accumulateTwoPhaseDispatches(events) {
	  forEachAccumulated(events, accumulateTwoPhaseDispatchesSingle);
	}

	function accumulateTwoPhaseDispatchesSkipTarget(events) {
	  forEachAccumulated(events, accumulateTwoPhaseDispatchesSingleSkipTarget);
	}

	function accumulateEnterLeaveDispatches(leave, enter, fromID, toID) {
	  EventPluginHub.injection.getInstanceHandle().traverseEnterLeave(fromID, toID, accumulateDispatches, leave, enter);
	}

	function accumulateDirectDispatches(events) {
	  forEachAccumulated(events, accumulateDirectDispatchesSingle);
	}

	/**
	 * A small set of propagation patterns, each of which will accept a small amount
	 * of information, and generate a set of "dispatch ready event objects" - which
	 * are sets of events that have already been annotated with a set of dispatched
	 * listener functions/ids. The API is designed this way to discourage these
	 * propagation strategies from actually executing the dispatches, since we
	 * always want to collect the entire set of dispatches before executing event a
	 * single one.
	 *
	 * @constructor EventPropagators
	 */
	var EventPropagators = {
	  accumulateTwoPhaseDispatches: accumulateTwoPhaseDispatches,
	  accumulateTwoPhaseDispatchesSkipTarget: accumulateTwoPhaseDispatchesSkipTarget,
	  accumulateDirectDispatches: accumulateDirectDispatches,
	  accumulateEnterLeaveDispatches: accumulateEnterLeaveDispatches
	};

	module.exports = EventPropagators;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule FallbackCompositionState
	 * @typechecks static-only
	 */

	'use strict';

	var PooledClass = __webpack_require__(57);

	var assign = __webpack_require__(40);
	var getTextContentAccessor = __webpack_require__(76);

	/**
	 * This helper class stores information about text content of a target node,
	 * allowing comparison of content before and after a given event.
	 *
	 * Identify the node where selection currently begins, then observe
	 * both its text content and its current position in the DOM. Since the
	 * browser may natively replace the target node during composition, we can
	 * use its position to find its replacement.
	 *
	 * @param {DOMEventTarget} root
	 */
	function FallbackCompositionState(root) {
	  this._root = root;
	  this._startText = this.getText();
	  this._fallbackText = null;
	}

	assign(FallbackCompositionState.prototype, {
	  destructor: function destructor() {
	    this._root = null;
	    this._startText = null;
	    this._fallbackText = null;
	  },

	  /**
	   * Get current text of input.
	   *
	   * @return {string}
	   */
	  getText: function getText() {
	    if ('value' in this._root) {
	      return this._root.value;
	    }
	    return this._root[getTextContentAccessor()];
	  },

	  /**
	   * Determine the differing substring between the initially stored
	   * text content and the current content.
	   *
	   * @return {string}
	   */
	  getData: function getData() {
	    if (this._fallbackText) {
	      return this._fallbackText;
	    }

	    var start;
	    var startValue = this._startText;
	    var startLength = startValue.length;
	    var end;
	    var endValue = this.getText();
	    var endLength = endValue.length;

	    for (start = 0; start < startLength; start++) {
	      if (startValue[start] !== endValue[start]) {
	        break;
	      }
	    }

	    var minEnd = startLength - start;
	    for (end = 1; end <= minEnd; end++) {
	      if (startValue[startLength - end] !== endValue[endLength - end]) {
	        break;
	      }
	    }

	    var sliceTail = end > 1 ? 1 - end : undefined;
	    this._fallbackText = endValue.slice(start, sliceTail);
	    return this._fallbackText;
	  }
	});

	PooledClass.addPoolingTo(FallbackCompositionState);

	module.exports = FallbackCompositionState;

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getTextContentAccessor
	 */

	'use strict';

	var ExecutionEnvironment = __webpack_require__(10);

	var contentKey = null;

	/**
	 * Gets the key used to access text content on a DOM node.
	 *
	 * @return {?string} Key used to access text content.
	 * @internal
	 */
	function getTextContentAccessor() {
	  if (!contentKey && ExecutionEnvironment.canUseDOM) {
	    // Prefer textContent to innerText because many browsers support both but
	    // SVG <text> elements don't support innerText even when <div> does.
	    contentKey = 'textContent' in document.documentElement ? 'textContent' : 'innerText';
	  }
	  return contentKey;
	}

	module.exports = getTextContentAccessor;

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticCompositionEvent
	 * @typechecks static-only
	 */

	'use strict';

	var SyntheticEvent = __webpack_require__(78);

	/**
	 * @interface Event
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/#events-compositionevents
	 */
	var CompositionEventInterface = {
	  data: null
	};

	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
	function SyntheticCompositionEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
	  SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	}

	SyntheticEvent.augmentClass(SyntheticCompositionEvent, CompositionEventInterface);

	module.exports = SyntheticCompositionEvent;

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticEvent
	 * @typechecks static-only
	 */

	'use strict';

	var PooledClass = __webpack_require__(57);

	var assign = __webpack_require__(40);
	var emptyFunction = __webpack_require__(16);
	var warning = __webpack_require__(26);

	/**
	 * @interface Event
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/
	 */
	var EventInterface = {
	  type: null,
	  target: null,
	  // currentTarget is set when dispatching; no use in copying it here
	  currentTarget: emptyFunction.thatReturnsNull,
	  eventPhase: null,
	  bubbles: null,
	  cancelable: null,
	  timeStamp: function timeStamp(event) {
	    return event.timeStamp || Date.now();
	  },
	  defaultPrevented: null,
	  isTrusted: null
	};

	/**
	 * Synthetic events are dispatched by event plugins, typically in response to a
	 * top-level event delegation handler.
	 *
	 * These systems should generally use pooling to reduce the frequency of garbage
	 * collection. The system should check `isPersistent` to determine whether the
	 * event should be released into the pool after being dispatched. Users that
	 * need a persisted event should invoke `persist`.
	 *
	 * Synthetic events (and subclasses) implement the DOM Level 3 Events API by
	 * normalizing browser quirks. Subclasses do not necessarily have to implement a
	 * DOM interface; custom application-specific events can also subclass this.
	 *
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 */
	function SyntheticEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
	  this.dispatchConfig = dispatchConfig;
	  this.dispatchMarker = dispatchMarker;
	  this.nativeEvent = nativeEvent;

	  var Interface = this.constructor.Interface;
	  for (var propName in Interface) {
	    if (!Interface.hasOwnProperty(propName)) {
	      continue;
	    }
	    var normalize = Interface[propName];
	    if (normalize) {
	      this[propName] = normalize(nativeEvent);
	    } else {
	      if (propName === 'target') {
	        this.target = nativeEventTarget;
	      } else {
	        this[propName] = nativeEvent[propName];
	      }
	    }
	  }

	  var defaultPrevented = nativeEvent.defaultPrevented != null ? nativeEvent.defaultPrevented : nativeEvent.returnValue === false;
	  if (defaultPrevented) {
	    this.isDefaultPrevented = emptyFunction.thatReturnsTrue;
	  } else {
	    this.isDefaultPrevented = emptyFunction.thatReturnsFalse;
	  }
	  this.isPropagationStopped = emptyFunction.thatReturnsFalse;
	}

	assign(SyntheticEvent.prototype, {

	  preventDefault: function preventDefault() {
	    this.defaultPrevented = true;
	    var event = this.nativeEvent;
	    if (process.env.NODE_ENV !== 'production') {
	      process.env.NODE_ENV !== 'production' ? warning(event, 'This synthetic event is reused for performance reasons. If you\'re ' + 'seeing this, you\'re calling `preventDefault` on a ' + 'released/nullified synthetic event. This is a no-op. See ' + 'https://fb.me/react-event-pooling for more information.') : undefined;
	    }
	    if (!event) {
	      return;
	    }

	    if (event.preventDefault) {
	      event.preventDefault();
	    } else {
	      event.returnValue = false;
	    }
	    this.isDefaultPrevented = emptyFunction.thatReturnsTrue;
	  },

	  stopPropagation: function stopPropagation() {
	    var event = this.nativeEvent;
	    if (process.env.NODE_ENV !== 'production') {
	      process.env.NODE_ENV !== 'production' ? warning(event, 'This synthetic event is reused for performance reasons. If you\'re ' + 'seeing this, you\'re calling `stopPropagation` on a ' + 'released/nullified synthetic event. This is a no-op. See ' + 'https://fb.me/react-event-pooling for more information.') : undefined;
	    }
	    if (!event) {
	      return;
	    }

	    if (event.stopPropagation) {
	      event.stopPropagation();
	    } else {
	      event.cancelBubble = true;
	    }
	    this.isPropagationStopped = emptyFunction.thatReturnsTrue;
	  },

	  /**
	   * We release all dispatched `SyntheticEvent`s after each event loop, adding
	   * them back into the pool. This allows a way to hold onto a reference that
	   * won't be added back into the pool.
	   */
	  persist: function persist() {
	    this.isPersistent = emptyFunction.thatReturnsTrue;
	  },

	  /**
	   * Checks if this event should be released back into the pool.
	   *
	   * @return {boolean} True if this should not be released, false otherwise.
	   */
	  isPersistent: emptyFunction.thatReturnsFalse,

	  /**
	   * `PooledClass` looks for `destructor` on each instance it releases.
	   */
	  destructor: function destructor() {
	    var Interface = this.constructor.Interface;
	    for (var propName in Interface) {
	      this[propName] = null;
	    }
	    this.dispatchConfig = null;
	    this.dispatchMarker = null;
	    this.nativeEvent = null;
	  }

	});

	SyntheticEvent.Interface = EventInterface;

	/**
	 * Helper to reduce boilerplate when creating subclasses.
	 *
	 * @param {function} Class
	 * @param {?object} Interface
	 */
	SyntheticEvent.augmentClass = function (Class, Interface) {
	  var Super = this;

	  var prototype = Object.create(Super.prototype);
	  assign(prototype, Class.prototype);
	  Class.prototype = prototype;
	  Class.prototype.constructor = Class;

	  Class.Interface = assign({}, Super.Interface, Interface);
	  Class.augmentClass = Super.augmentClass;

	  PooledClass.addPoolingTo(Class, PooledClass.fourArgumentPooler);
	};

	PooledClass.addPoolingTo(SyntheticEvent, PooledClass.fourArgumentPooler);

	module.exports = SyntheticEvent;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticInputEvent
	 * @typechecks static-only
	 */

	'use strict';

	var SyntheticEvent = __webpack_require__(78);

	/**
	 * @interface Event
	 * @see http://www.w3.org/TR/2013/WD-DOM-Level-3-Events-20131105
	 *      /#events-inputevents
	 */
	var InputEventInterface = {
	  data: null
	};

	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
	function SyntheticInputEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
	  SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	}

	SyntheticEvent.augmentClass(SyntheticInputEvent, InputEventInterface);

	module.exports = SyntheticInputEvent;

/***/ },
/* 80 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule keyOf
	 */

	/**
	 * Allows extraction of a minified key. Let's the build system minify keys
	 * without losing the ability to dynamically use key strings as values
	 * themselves. Pass in an object with a single key/val pair and it will return
	 * you the string key of that single record. Suppose you want to grab the
	 * value for a key 'className' inside of an object. Key/val minification may
	 * have aliased that key to be 'xa12'. keyOf({className: null}) will return
	 * 'xa12' in that case. Resolve keys you want to use once at startup time, then
	 * reuse those resolutions.
	 */
	"use strict";

	var keyOf = function keyOf(oneKeyObj) {
	  var key;
	  for (key in oneKeyObj) {
	    if (!oneKeyObj.hasOwnProperty(key)) {
	      continue;
	    }
	    return key;
	  }
	  return null;
	};

	module.exports = keyOf;

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ChangeEventPlugin
	 */

	'use strict';

	var EventConstants = __webpack_require__(31);
	var EventPluginHub = __webpack_require__(32);
	var EventPropagators = __webpack_require__(74);
	var ExecutionEnvironment = __webpack_require__(10);
	var ReactUpdates = __webpack_require__(55);
	var SyntheticEvent = __webpack_require__(78);

	var getEventTarget = __webpack_require__(82);
	var isEventSupported = __webpack_require__(41);
	var isTextInputElement = __webpack_require__(83);
	var keyOf = __webpack_require__(80);

	var topLevelTypes = EventConstants.topLevelTypes;

	var eventTypes = {
	  change: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onChange: null }),
	      captured: keyOf({ onChangeCapture: null })
	    },
	    dependencies: [topLevelTypes.topBlur, topLevelTypes.topChange, topLevelTypes.topClick, topLevelTypes.topFocus, topLevelTypes.topInput, topLevelTypes.topKeyDown, topLevelTypes.topKeyUp, topLevelTypes.topSelectionChange]
	  }
	};

	/**
	 * For IE shims
	 */
	var activeElement = null;
	var activeElementID = null;
	var activeElementValue = null;
	var activeElementValueProp = null;

	/**
	 * SECTION: handle `change` event
	 */
	function shouldUseChangeEvent(elem) {
	  var nodeName = elem.nodeName && elem.nodeName.toLowerCase();
	  return nodeName === 'select' || nodeName === 'input' && elem.type === 'file';
	}

	var doesChangeEventBubble = false;
	if (ExecutionEnvironment.canUseDOM) {
	  // See `handleChange` comment below
	  doesChangeEventBubble = isEventSupported('change') && (!('documentMode' in document) || document.documentMode > 8);
	}

	function manualDispatchChangeEvent(nativeEvent) {
	  var event = SyntheticEvent.getPooled(eventTypes.change, activeElementID, nativeEvent, getEventTarget(nativeEvent));
	  EventPropagators.accumulateTwoPhaseDispatches(event);

	  // If change and propertychange bubbled, we'd just bind to it like all the
	  // other events and have it go through ReactBrowserEventEmitter. Since it
	  // doesn't, we manually listen for the events and so we have to enqueue and
	  // process the abstract event manually.
	  //
	  // Batching is necessary here in order to ensure that all event handlers run
	  // before the next rerender (including event handlers attached to ancestor
	  // elements instead of directly on the input). Without this, controlled
	  // components don't work properly in conjunction with event bubbling because
	  // the component is rerendered and the value reverted before all the event
	  // handlers can run. See https://github.com/facebook/react/issues/708.
	  ReactUpdates.batchedUpdates(runEventInBatch, event);
	}

	function runEventInBatch(event) {
	  EventPluginHub.enqueueEvents(event);
	  EventPluginHub.processEventQueue(false);
	}

	function startWatchingForChangeEventIE8(target, targetID) {
	  activeElement = target;
	  activeElementID = targetID;
	  activeElement.attachEvent('onchange', manualDispatchChangeEvent);
	}

	function stopWatchingForChangeEventIE8() {
	  if (!activeElement) {
	    return;
	  }
	  activeElement.detachEvent('onchange', manualDispatchChangeEvent);
	  activeElement = null;
	  activeElementID = null;
	}

	function getTargetIDForChangeEvent(topLevelType, topLevelTarget, topLevelTargetID) {
	  if (topLevelType === topLevelTypes.topChange) {
	    return topLevelTargetID;
	  }
	}
	function handleEventsForChangeEventIE8(topLevelType, topLevelTarget, topLevelTargetID) {
	  if (topLevelType === topLevelTypes.topFocus) {
	    // stopWatching() should be a noop here but we call it just in case we
	    // missed a blur event somehow.
	    stopWatchingForChangeEventIE8();
	    startWatchingForChangeEventIE8(topLevelTarget, topLevelTargetID);
	  } else if (topLevelType === topLevelTypes.topBlur) {
	    stopWatchingForChangeEventIE8();
	  }
	}

	/**
	 * SECTION: handle `input` event
	 */
	var isInputEventSupported = false;
	if (ExecutionEnvironment.canUseDOM) {
	  // IE9 claims to support the input event but fails to trigger it when
	  // deleting text, so we ignore its input events
	  isInputEventSupported = isEventSupported('input') && (!('documentMode' in document) || document.documentMode > 9);
	}

	/**
	 * (For old IE.) Replacement getter/setter for the `value` property that gets
	 * set on the active element.
	 */
	var newValueProp = {
	  get: function get() {
	    return activeElementValueProp.get.call(this);
	  },
	  set: function set(val) {
	    // Cast to a string so we can do equality checks.
	    activeElementValue = '' + val;
	    activeElementValueProp.set.call(this, val);
	  }
	};

	/**
	 * (For old IE.) Starts tracking propertychange events on the passed-in element
	 * and override the value property so that we can distinguish user events from
	 * value changes in JS.
	 */
	function startWatchingForValueChange(target, targetID) {
	  activeElement = target;
	  activeElementID = targetID;
	  activeElementValue = target.value;
	  activeElementValueProp = Object.getOwnPropertyDescriptor(target.constructor.prototype, 'value');

	  // Not guarded in a canDefineProperty check: IE8 supports defineProperty only
	  // on DOM elements
	  Object.defineProperty(activeElement, 'value', newValueProp);
	  activeElement.attachEvent('onpropertychange', handlePropertyChange);
	}

	/**
	 * (For old IE.) Removes the event listeners from the currently-tracked element,
	 * if any exists.
	 */
	function stopWatchingForValueChange() {
	  if (!activeElement) {
	    return;
	  }

	  // delete restores the original property definition
	  delete activeElement.value;
	  activeElement.detachEvent('onpropertychange', handlePropertyChange);

	  activeElement = null;
	  activeElementID = null;
	  activeElementValue = null;
	  activeElementValueProp = null;
	}

	/**
	 * (For old IE.) Handles a propertychange event, sending a `change` event if
	 * the value of the active element has changed.
	 */
	function handlePropertyChange(nativeEvent) {
	  if (nativeEvent.propertyName !== 'value') {
	    return;
	  }
	  var value = nativeEvent.srcElement.value;
	  if (value === activeElementValue) {
	    return;
	  }
	  activeElementValue = value;

	  manualDispatchChangeEvent(nativeEvent);
	}

	/**
	 * If a `change` event should be fired, returns the target's ID.
	 */
	function getTargetIDForInputEvent(topLevelType, topLevelTarget, topLevelTargetID) {
	  if (topLevelType === topLevelTypes.topInput) {
	    // In modern browsers (i.e., not IE8 or IE9), the input event is exactly
	    // what we want so fall through here and trigger an abstract event
	    return topLevelTargetID;
	  }
	}

	// For IE8 and IE9.
	function handleEventsForInputEventIE(topLevelType, topLevelTarget, topLevelTargetID) {
	  if (topLevelType === topLevelTypes.topFocus) {
	    // In IE8, we can capture almost all .value changes by adding a
	    // propertychange handler and looking for events with propertyName
	    // equal to 'value'
	    // In IE9, propertychange fires for most input events but is buggy and
	    // doesn't fire when text is deleted, but conveniently, selectionchange
	    // appears to fire in all of the remaining cases so we catch those and
	    // forward the event if the value has changed
	    // In either case, we don't want to call the event handler if the value
	    // is changed from JS so we redefine a setter for `.value` that updates
	    // our activeElementValue variable, allowing us to ignore those changes
	    //
	    // stopWatching() should be a noop here but we call it just in case we
	    // missed a blur event somehow.
	    stopWatchingForValueChange();
	    startWatchingForValueChange(topLevelTarget, topLevelTargetID);
	  } else if (topLevelType === topLevelTypes.topBlur) {
	    stopWatchingForValueChange();
	  }
	}

	// For IE8 and IE9.
	function getTargetIDForInputEventIE(topLevelType, topLevelTarget, topLevelTargetID) {
	  if (topLevelType === topLevelTypes.topSelectionChange || topLevelType === topLevelTypes.topKeyUp || topLevelType === topLevelTypes.topKeyDown) {
	    // On the selectionchange event, the target is just document which isn't
	    // helpful for us so just check activeElement instead.
	    //
	    // 99% of the time, keydown and keyup aren't necessary. IE8 fails to fire
	    // propertychange on the first input event after setting `value` from a
	    // script and fires only keydown, keypress, keyup. Catching keyup usually
	    // gets it and catching keydown lets us fire an event for the first
	    // keystroke if user does a key repeat (it'll be a little delayed: right
	    // before the second keystroke). Other input methods (e.g., paste) seem to
	    // fire selectionchange normally.
	    if (activeElement && activeElement.value !== activeElementValue) {
	      activeElementValue = activeElement.value;
	      return activeElementID;
	    }
	  }
	}

	/**
	 * SECTION: handle `click` event
	 */
	function shouldUseClickEvent(elem) {
	  // Use the `click` event to detect changes to checkbox and radio inputs.
	  // This approach works across all browsers, whereas `change` does not fire
	  // until `blur` in IE8.
	  return elem.nodeName && elem.nodeName.toLowerCase() === 'input' && (elem.type === 'checkbox' || elem.type === 'radio');
	}

	function getTargetIDForClickEvent(topLevelType, topLevelTarget, topLevelTargetID) {
	  if (topLevelType === topLevelTypes.topClick) {
	    return topLevelTargetID;
	  }
	}

	/**
	 * This plugin creates an `onChange` event that normalizes change events
	 * across form elements. This event fires at a time when it's possible to
	 * change the element's value without seeing a flicker.
	 *
	 * Supported elements are:
	 * - input (see `isTextInputElement`)
	 * - textarea
	 * - select
	 */
	var ChangeEventPlugin = {

	  eventTypes: eventTypes,

	  /**
	   * @param {string} topLevelType Record from `EventConstants`.
	   * @param {DOMEventTarget} topLevelTarget The listening component root node.
	   * @param {string} topLevelTargetID ID of `topLevelTarget`.
	   * @param {object} nativeEvent Native browser event.
	   * @return {*} An accumulation of synthetic events.
	   * @see {EventPluginHub.extractEvents}
	   */
	  extractEvents: function extractEvents(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget) {

	    var getTargetIDFunc, handleEventFunc;
	    if (shouldUseChangeEvent(topLevelTarget)) {
	      if (doesChangeEventBubble) {
	        getTargetIDFunc = getTargetIDForChangeEvent;
	      } else {
	        handleEventFunc = handleEventsForChangeEventIE8;
	      }
	    } else if (isTextInputElement(topLevelTarget)) {
	      if (isInputEventSupported) {
	        getTargetIDFunc = getTargetIDForInputEvent;
	      } else {
	        getTargetIDFunc = getTargetIDForInputEventIE;
	        handleEventFunc = handleEventsForInputEventIE;
	      }
	    } else if (shouldUseClickEvent(topLevelTarget)) {
	      getTargetIDFunc = getTargetIDForClickEvent;
	    }

	    if (getTargetIDFunc) {
	      var targetID = getTargetIDFunc(topLevelType, topLevelTarget, topLevelTargetID);
	      if (targetID) {
	        var event = SyntheticEvent.getPooled(eventTypes.change, targetID, nativeEvent, nativeEventTarget);
	        event.type = 'change';
	        EventPropagators.accumulateTwoPhaseDispatches(event);
	        return event;
	      }
	    }

	    if (handleEventFunc) {
	      handleEventFunc(topLevelType, topLevelTarget, topLevelTargetID);
	    }
	  }

	};

	module.exports = ChangeEventPlugin;

/***/ },
/* 82 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getEventTarget
	 * @typechecks static-only
	 */

	'use strict';

	/**
	 * Gets the target node from a native browser event by accounting for
	 * inconsistencies in browser DOM APIs.
	 *
	 * @param {object} nativeEvent Native browser event.
	 * @return {DOMEventTarget} Target node.
	 */

	function getEventTarget(nativeEvent) {
	  var target = nativeEvent.target || nativeEvent.srcElement || window;
	  // Safari may fire events on text nodes (Node.TEXT_NODE is 3).
	  // @see http://www.quirksmode.org/js/events_properties.html
	  return target.nodeType === 3 ? target.parentNode : target;
	}

	module.exports = getEventTarget;

/***/ },
/* 83 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule isTextInputElement
	 */

	'use strict';

	/**
	 * @see http://www.whatwg.org/specs/web-apps/current-work/multipage/the-input-element.html#input-type-attr-summary
	 */

	var supportedInputTypes = {
	  'color': true,
	  'date': true,
	  'datetime': true,
	  'datetime-local': true,
	  'email': true,
	  'month': true,
	  'number': true,
	  'password': true,
	  'range': true,
	  'search': true,
	  'tel': true,
	  'text': true,
	  'time': true,
	  'url': true,
	  'week': true
	};

	function isTextInputElement(elem) {
	  var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
	  return nodeName && (nodeName === 'input' && supportedInputTypes[elem.type] || nodeName === 'textarea');
	}

	module.exports = isTextInputElement;

/***/ },
/* 84 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ClientReactRootIndex
	 * @typechecks
	 */

	'use strict';

	var nextReactRootIndex = 0;

	var ClientReactRootIndex = {
	  createReactRootIndex: function createReactRootIndex() {
	    return nextReactRootIndex++;
	  }
	};

	module.exports = ClientReactRootIndex;

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule DefaultEventPluginOrder
	 */

	'use strict';

	var keyOf = __webpack_require__(80);

	/**
	 * Module that is injectable into `EventPluginHub`, that specifies a
	 * deterministic ordering of `EventPlugin`s. A convenient way to reason about
	 * plugins, without having to package every one of them. This is better than
	 * having plugins be ordered in the same order that they are injected because
	 * that ordering would be influenced by the packaging order.
	 * `ResponderEventPlugin` must occur before `SimpleEventPlugin` so that
	 * preventing default on events is convenient in `SimpleEventPlugin` handlers.
	 */
	var DefaultEventPluginOrder = [keyOf({ ResponderEventPlugin: null }), keyOf({ SimpleEventPlugin: null }), keyOf({ TapEventPlugin: null }), keyOf({ EnterLeaveEventPlugin: null }), keyOf({ ChangeEventPlugin: null }), keyOf({ SelectEventPlugin: null }), keyOf({ BeforeInputEventPlugin: null })];

	module.exports = DefaultEventPluginOrder;

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule EnterLeaveEventPlugin
	 * @typechecks static-only
	 */

	'use strict';

	var EventConstants = __webpack_require__(31);
	var EventPropagators = __webpack_require__(74);
	var SyntheticMouseEvent = __webpack_require__(87);

	var ReactMount = __webpack_require__(29);
	var keyOf = __webpack_require__(80);

	var topLevelTypes = EventConstants.topLevelTypes;
	var getFirstReactDOM = ReactMount.getFirstReactDOM;

	var eventTypes = {
	  mouseEnter: {
	    registrationName: keyOf({ onMouseEnter: null }),
	    dependencies: [topLevelTypes.topMouseOut, topLevelTypes.topMouseOver]
	  },
	  mouseLeave: {
	    registrationName: keyOf({ onMouseLeave: null }),
	    dependencies: [topLevelTypes.topMouseOut, topLevelTypes.topMouseOver]
	  }
	};

	var extractedEvents = [null, null];

	var EnterLeaveEventPlugin = {

	  eventTypes: eventTypes,

	  /**
	   * For almost every interaction we care about, there will be both a top-level
	   * `mouseover` and `mouseout` event that occurs. Only use `mouseout` so that
	   * we do not extract duplicate events. However, moving the mouse into the
	   * browser from outside will not fire a `mouseout` event. In this case, we use
	   * the `mouseover` top-level event.
	   *
	   * @param {string} topLevelType Record from `EventConstants`.
	   * @param {DOMEventTarget} topLevelTarget The listening component root node.
	   * @param {string} topLevelTargetID ID of `topLevelTarget`.
	   * @param {object} nativeEvent Native browser event.
	   * @return {*} An accumulation of synthetic events.
	   * @see {EventPluginHub.extractEvents}
	   */
	  extractEvents: function extractEvents(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget) {
	    if (topLevelType === topLevelTypes.topMouseOver && (nativeEvent.relatedTarget || nativeEvent.fromElement)) {
	      return null;
	    }
	    if (topLevelType !== topLevelTypes.topMouseOut && topLevelType !== topLevelTypes.topMouseOver) {
	      // Must not be a mouse in or mouse out - ignoring.
	      return null;
	    }

	    var win;
	    if (topLevelTarget.window === topLevelTarget) {
	      // `topLevelTarget` is probably a window object.
	      win = topLevelTarget;
	    } else {
	      // TODO: Figure out why `ownerDocument` is sometimes undefined in IE8.
	      var doc = topLevelTarget.ownerDocument;
	      if (doc) {
	        win = doc.defaultView || doc.parentWindow;
	      } else {
	        win = window;
	      }
	    }

	    var from;
	    var to;
	    var fromID = '';
	    var toID = '';
	    if (topLevelType === topLevelTypes.topMouseOut) {
	      from = topLevelTarget;
	      fromID = topLevelTargetID;
	      to = getFirstReactDOM(nativeEvent.relatedTarget || nativeEvent.toElement);
	      if (to) {
	        toID = ReactMount.getID(to);
	      } else {
	        to = win;
	      }
	      to = to || win;
	    } else {
	      from = win;
	      to = topLevelTarget;
	      toID = topLevelTargetID;
	    }

	    if (from === to) {
	      // Nothing pertains to our managed components.
	      return null;
	    }

	    var leave = SyntheticMouseEvent.getPooled(eventTypes.mouseLeave, fromID, nativeEvent, nativeEventTarget);
	    leave.type = 'mouseleave';
	    leave.target = from;
	    leave.relatedTarget = to;

	    var enter = SyntheticMouseEvent.getPooled(eventTypes.mouseEnter, toID, nativeEvent, nativeEventTarget);
	    enter.type = 'mouseenter';
	    enter.target = to;
	    enter.relatedTarget = from;

	    EventPropagators.accumulateEnterLeaveDispatches(leave, enter, fromID, toID);

	    extractedEvents[0] = leave;
	    extractedEvents[1] = enter;

	    return extractedEvents;
	  }

	};

	module.exports = EnterLeaveEventPlugin;

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticMouseEvent
	 * @typechecks static-only
	 */

	'use strict';

	var SyntheticUIEvent = __webpack_require__(88);
	var ViewportMetrics = __webpack_require__(39);

	var getEventModifierState = __webpack_require__(89);

	/**
	 * @interface MouseEvent
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/
	 */
	var MouseEventInterface = {
	  screenX: null,
	  screenY: null,
	  clientX: null,
	  clientY: null,
	  ctrlKey: null,
	  shiftKey: null,
	  altKey: null,
	  metaKey: null,
	  getModifierState: getEventModifierState,
	  button: function button(event) {
	    // Webkit, Firefox, IE9+
	    // which:  1 2 3
	    // button: 0 1 2 (standard)
	    var button = event.button;
	    if ('which' in event) {
	      return button;
	    }
	    // IE<9
	    // which:  undefined
	    // button: 0 0 0
	    // button: 1 4 2 (onmouseup)
	    return button === 2 ? 2 : button === 4 ? 1 : 0;
	  },
	  buttons: null,
	  relatedTarget: function relatedTarget(event) {
	    return event.relatedTarget || (event.fromElement === event.srcElement ? event.toElement : event.fromElement);
	  },
	  // "Proprietary" Interface.
	  pageX: function pageX(event) {
	    return 'pageX' in event ? event.pageX : event.clientX + ViewportMetrics.currentScrollLeft;
	  },
	  pageY: function pageY(event) {
	    return 'pageY' in event ? event.pageY : event.clientY + ViewportMetrics.currentScrollTop;
	  }
	};

	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
	function SyntheticMouseEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
	  SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	}

	SyntheticUIEvent.augmentClass(SyntheticMouseEvent, MouseEventInterface);

	module.exports = SyntheticMouseEvent;

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticUIEvent
	 * @typechecks static-only
	 */

	'use strict';

	var SyntheticEvent = __webpack_require__(78);

	var getEventTarget = __webpack_require__(82);

	/**
	 * @interface UIEvent
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/
	 */
	var UIEventInterface = {
	  view: function view(event) {
	    if (event.view) {
	      return event.view;
	    }

	    var target = getEventTarget(event);
	    if (target != null && target.window === target) {
	      // target is a window object
	      return target;
	    }

	    var doc = target.ownerDocument;
	    // TODO: Figure out why `ownerDocument` is sometimes undefined in IE8.
	    if (doc) {
	      return doc.defaultView || doc.parentWindow;
	    } else {
	      return window;
	    }
	  },
	  detail: function detail(event) {
	    return event.detail || 0;
	  }
	};

	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticEvent}
	 */
	function SyntheticUIEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
	  SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	}

	SyntheticEvent.augmentClass(SyntheticUIEvent, UIEventInterface);

	module.exports = SyntheticUIEvent;

/***/ },
/* 89 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getEventModifierState
	 * @typechecks static-only
	 */

	'use strict';

	/**
	 * Translation from modifier key to the associated property in the event.
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/#keys-Modifiers
	 */

	var modifierKeyToProp = {
	  'Alt': 'altKey',
	  'Control': 'ctrlKey',
	  'Meta': 'metaKey',
	  'Shift': 'shiftKey'
	};

	// IE8 does not implement getModifierState so we simply map it to the only
	// modifier keys exposed by the event itself, does not support Lock-keys.
	// Currently, all major browsers except Chrome seems to support Lock-keys.
	function modifierStateGetter(keyArg) {
	  var syntheticEvent = this;
	  var nativeEvent = syntheticEvent.nativeEvent;
	  if (nativeEvent.getModifierState) {
	    return nativeEvent.getModifierState(keyArg);
	  }
	  var keyProp = modifierKeyToProp[keyArg];
	  return keyProp ? !!nativeEvent[keyProp] : false;
	}

	function getEventModifierState(nativeEvent) {
	  return modifierStateGetter;
	}

	module.exports = getEventModifierState;

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule HTMLDOMPropertyConfig
	 */

	'use strict';

	var DOMProperty = __webpack_require__(24);
	var ExecutionEnvironment = __webpack_require__(10);

	var MUST_USE_ATTRIBUTE = DOMProperty.injection.MUST_USE_ATTRIBUTE;
	var MUST_USE_PROPERTY = DOMProperty.injection.MUST_USE_PROPERTY;
	var HAS_BOOLEAN_VALUE = DOMProperty.injection.HAS_BOOLEAN_VALUE;
	var HAS_SIDE_EFFECTS = DOMProperty.injection.HAS_SIDE_EFFECTS;
	var HAS_NUMERIC_VALUE = DOMProperty.injection.HAS_NUMERIC_VALUE;
	var HAS_POSITIVE_NUMERIC_VALUE = DOMProperty.injection.HAS_POSITIVE_NUMERIC_VALUE;
	var HAS_OVERLOADED_BOOLEAN_VALUE = DOMProperty.injection.HAS_OVERLOADED_BOOLEAN_VALUE;

	var hasSVG;
	if (ExecutionEnvironment.canUseDOM) {
	  var implementation = document.implementation;
	  hasSVG = implementation && implementation.hasFeature && implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#BasicStructure', '1.1');
	}

	var HTMLDOMPropertyConfig = {
	  isCustomAttribute: RegExp.prototype.test.bind(/^(data|aria)-[a-z_][a-z\d_.\-]*$/),
	  Properties: {
	    /**
	     * Standard Properties
	     */
	    accept: null,
	    acceptCharset: null,
	    accessKey: null,
	    action: null,
	    allowFullScreen: MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,
	    allowTransparency: MUST_USE_ATTRIBUTE,
	    alt: null,
	    async: HAS_BOOLEAN_VALUE,
	    autoComplete: null,
	    // autoFocus is polyfilled/normalized by AutoFocusUtils
	    // autoFocus: HAS_BOOLEAN_VALUE,
	    autoPlay: HAS_BOOLEAN_VALUE,
	    capture: MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,
	    cellPadding: null,
	    cellSpacing: null,
	    charSet: MUST_USE_ATTRIBUTE,
	    challenge: MUST_USE_ATTRIBUTE,
	    checked: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
	    classID: MUST_USE_ATTRIBUTE,
	    // To set className on SVG elements, it's necessary to use .setAttribute;
	    // this works on HTML elements too in all browsers except IE8. Conveniently,
	    // IE8 doesn't support SVG and so we can simply use the attribute in
	    // browsers that support SVG and the property in browsers that don't,
	    // regardless of whether the element is HTML or SVG.
	    className: hasSVG ? MUST_USE_ATTRIBUTE : MUST_USE_PROPERTY,
	    cols: MUST_USE_ATTRIBUTE | HAS_POSITIVE_NUMERIC_VALUE,
	    colSpan: null,
	    content: null,
	    contentEditable: null,
	    contextMenu: MUST_USE_ATTRIBUTE,
	    controls: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
	    coords: null,
	    crossOrigin: null,
	    data: null, // For `<object />` acts as `src`.
	    dateTime: MUST_USE_ATTRIBUTE,
	    'default': HAS_BOOLEAN_VALUE,
	    defer: HAS_BOOLEAN_VALUE,
	    dir: null,
	    disabled: MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,
	    download: HAS_OVERLOADED_BOOLEAN_VALUE,
	    draggable: null,
	    encType: null,
	    form: MUST_USE_ATTRIBUTE,
	    formAction: MUST_USE_ATTRIBUTE,
	    formEncType: MUST_USE_ATTRIBUTE,
	    formMethod: MUST_USE_ATTRIBUTE,
	    formNoValidate: HAS_BOOLEAN_VALUE,
	    formTarget: MUST_USE_ATTRIBUTE,
	    frameBorder: MUST_USE_ATTRIBUTE,
	    headers: null,
	    height: MUST_USE_ATTRIBUTE,
	    hidden: MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,
	    high: null,
	    href: null,
	    hrefLang: null,
	    htmlFor: null,
	    httpEquiv: null,
	    icon: null,
	    id: MUST_USE_PROPERTY,
	    inputMode: MUST_USE_ATTRIBUTE,
	    integrity: null,
	    is: MUST_USE_ATTRIBUTE,
	    keyParams: MUST_USE_ATTRIBUTE,
	    keyType: MUST_USE_ATTRIBUTE,
	    kind: null,
	    label: null,
	    lang: null,
	    list: MUST_USE_ATTRIBUTE,
	    loop: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
	    low: null,
	    manifest: MUST_USE_ATTRIBUTE,
	    marginHeight: null,
	    marginWidth: null,
	    max: null,
	    maxLength: MUST_USE_ATTRIBUTE,
	    media: MUST_USE_ATTRIBUTE,
	    mediaGroup: null,
	    method: null,
	    min: null,
	    minLength: MUST_USE_ATTRIBUTE,
	    multiple: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
	    muted: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
	    name: null,
	    nonce: MUST_USE_ATTRIBUTE,
	    noValidate: HAS_BOOLEAN_VALUE,
	    open: HAS_BOOLEAN_VALUE,
	    optimum: null,
	    pattern: null,
	    placeholder: null,
	    poster: null,
	    preload: null,
	    radioGroup: null,
	    readOnly: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
	    rel: null,
	    required: HAS_BOOLEAN_VALUE,
	    reversed: HAS_BOOLEAN_VALUE,
	    role: MUST_USE_ATTRIBUTE,
	    rows: MUST_USE_ATTRIBUTE | HAS_POSITIVE_NUMERIC_VALUE,
	    rowSpan: null,
	    sandbox: null,
	    scope: null,
	    scoped: HAS_BOOLEAN_VALUE,
	    scrolling: null,
	    seamless: MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,
	    selected: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
	    shape: null,
	    size: MUST_USE_ATTRIBUTE | HAS_POSITIVE_NUMERIC_VALUE,
	    sizes: MUST_USE_ATTRIBUTE,
	    span: HAS_POSITIVE_NUMERIC_VALUE,
	    spellCheck: null,
	    src: null,
	    srcDoc: MUST_USE_PROPERTY,
	    srcLang: null,
	    srcSet: MUST_USE_ATTRIBUTE,
	    start: HAS_NUMERIC_VALUE,
	    step: null,
	    style: null,
	    summary: null,
	    tabIndex: null,
	    target: null,
	    title: null,
	    type: null,
	    useMap: null,
	    value: MUST_USE_PROPERTY | HAS_SIDE_EFFECTS,
	    width: MUST_USE_ATTRIBUTE,
	    wmode: MUST_USE_ATTRIBUTE,
	    wrap: null,

	    /**
	     * RDFa Properties
	     */
	    about: MUST_USE_ATTRIBUTE,
	    datatype: MUST_USE_ATTRIBUTE,
	    inlist: MUST_USE_ATTRIBUTE,
	    prefix: MUST_USE_ATTRIBUTE,
	    // property is also supported for OpenGraph in meta tags.
	    property: MUST_USE_ATTRIBUTE,
	    resource: MUST_USE_ATTRIBUTE,
	    'typeof': MUST_USE_ATTRIBUTE,
	    vocab: MUST_USE_ATTRIBUTE,

	    /**
	     * Non-standard Properties
	     */
	    // autoCapitalize and autoCorrect are supported in Mobile Safari for
	    // keyboard hints.
	    autoCapitalize: MUST_USE_ATTRIBUTE,
	    autoCorrect: MUST_USE_ATTRIBUTE,
	    // autoSave allows WebKit/Blink to persist values of input fields on page reloads
	    autoSave: null,
	    // color is for Safari mask-icon link
	    color: null,
	    // itemProp, itemScope, itemType are for
	    // Microdata support. See http://schema.org/docs/gs.html
	    itemProp: MUST_USE_ATTRIBUTE,
	    itemScope: MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,
	    itemType: MUST_USE_ATTRIBUTE,
	    // itemID and itemRef are for Microdata support as well but
	    // only specified in the the WHATWG spec document. See
	    // https://html.spec.whatwg.org/multipage/microdata.html#microdata-dom-api
	    itemID: MUST_USE_ATTRIBUTE,
	    itemRef: MUST_USE_ATTRIBUTE,
	    // results show looking glass icon and recent searches on input
	    // search fields in WebKit/Blink
	    results: null,
	    // IE-only attribute that specifies security restrictions on an iframe
	    // as an alternative to the sandbox attribute on IE<10
	    security: MUST_USE_ATTRIBUTE,
	    // IE-only attribute that controls focus behavior
	    unselectable: MUST_USE_ATTRIBUTE
	  },
	  DOMAttributeNames: {
	    acceptCharset: 'accept-charset',
	    className: 'class',
	    htmlFor: 'for',
	    httpEquiv: 'http-equiv'
	  },
	  DOMPropertyNames: {
	    autoComplete: 'autocomplete',
	    autoFocus: 'autofocus',
	    autoPlay: 'autoplay',
	    autoSave: 'autosave',
	    // `encoding` is equivalent to `enctype`, IE8 lacks an `enctype` setter.
	    // http://www.w3.org/TR/html5/forms.html#dom-fs-encoding
	    encType: 'encoding',
	    hrefLang: 'hreflang',
	    radioGroup: 'radiogroup',
	    spellCheck: 'spellcheck',
	    srcDoc: 'srcdoc',
	    srcSet: 'srcset'
	  }
	};

	module.exports = HTMLDOMPropertyConfig;

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactBrowserComponentMixin
	 */

	'use strict';

	var ReactInstanceMap = __webpack_require__(48);

	var findDOMNode = __webpack_require__(92);
	var warning = __webpack_require__(26);

	var didWarnKey = '_getDOMNodeDidWarn';

	var ReactBrowserComponentMixin = {
	  /**
	   * Returns the DOM node rendered by this component.
	   *
	   * @return {DOMElement} The root node of this component.
	   * @final
	   * @protected
	   */
	  getDOMNode: function getDOMNode() {
	    process.env.NODE_ENV !== 'production' ? warning(this.constructor[didWarnKey], '%s.getDOMNode(...) is deprecated. Please use ' + 'ReactDOM.findDOMNode(instance) instead.', ReactInstanceMap.get(this).getName() || this.tagName || 'Unknown') : undefined;
	    this.constructor[didWarnKey] = true;
	    return findDOMNode(this);
	  }
	};

	module.exports = ReactBrowserComponentMixin;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule findDOMNode
	 * @typechecks static-only
	 */

	'use strict';

	var ReactCurrentOwner = __webpack_require__(6);
	var ReactInstanceMap = __webpack_require__(48);
	var ReactMount = __webpack_require__(29);

	var invariant = __webpack_require__(14);
	var warning = __webpack_require__(26);

	/**
	 * Returns the DOM node rendered by this element.
	 *
	 * @param {ReactComponent|DOMElement} componentOrElement
	 * @return {?DOMElement} The root node of this element.
	 */
	function findDOMNode(componentOrElement) {
	  if (process.env.NODE_ENV !== 'production') {
	    var owner = ReactCurrentOwner.current;
	    if (owner !== null) {
	      process.env.NODE_ENV !== 'production' ? warning(owner._warnedAboutRefsInRender, '%s is accessing getDOMNode or findDOMNode inside its render(). ' + 'render() should be a pure function of props and state. It should ' + 'never access something that requires stale data from the previous ' + 'render, such as refs. Move this logic to componentDidMount and ' + 'componentDidUpdate instead.', owner.getName() || 'A component') : undefined;
	      owner._warnedAboutRefsInRender = true;
	    }
	  }
	  if (componentOrElement == null) {
	    return null;
	  }
	  if (componentOrElement.nodeType === 1) {
	    return componentOrElement;
	  }
	  if (ReactInstanceMap.has(componentOrElement)) {
	    return ReactMount.getNodeFromInstance(componentOrElement);
	  }
	  !(componentOrElement.render == null || typeof componentOrElement.render !== 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'findDOMNode was called on an unmounted component.') : invariant(false) : undefined;
	   true ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Element appears to be neither ReactComponent nor DOMNode (keys: %s)', Object.keys(componentOrElement)) : invariant(false) : undefined;
	}

	module.exports = findDOMNode;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDefaultBatchingStrategy
	 */

	'use strict';

	var ReactUpdates = __webpack_require__(55);
	var Transaction = __webpack_require__(58);

	var assign = __webpack_require__(40);
	var emptyFunction = __webpack_require__(16);

	var RESET_BATCHED_UPDATES = {
	  initialize: emptyFunction,
	  close: function close() {
	    ReactDefaultBatchingStrategy.isBatchingUpdates = false;
	  }
	};

	var FLUSH_BATCHED_UPDATES = {
	  initialize: emptyFunction,
	  close: ReactUpdates.flushBatchedUpdates.bind(ReactUpdates)
	};

	var TRANSACTION_WRAPPERS = [FLUSH_BATCHED_UPDATES, RESET_BATCHED_UPDATES];

	function ReactDefaultBatchingStrategyTransaction() {
	  this.reinitializeTransaction();
	}

	assign(ReactDefaultBatchingStrategyTransaction.prototype, Transaction.Mixin, {
	  getTransactionWrappers: function getTransactionWrappers() {
	    return TRANSACTION_WRAPPERS;
	  }
	});

	var transaction = new ReactDefaultBatchingStrategyTransaction();

	var ReactDefaultBatchingStrategy = {
	  isBatchingUpdates: false,

	  /**
	   * Call the provided function in a context within which calls to `setState`
	   * and friends are batched such that components aren't updated unnecessarily.
	   */
	  batchedUpdates: function batchedUpdates(callback, a, b, c, d, e) {
	    var alreadyBatchingUpdates = ReactDefaultBatchingStrategy.isBatchingUpdates;

	    ReactDefaultBatchingStrategy.isBatchingUpdates = true;

	    // The code is written this way to avoid extra allocations
	    if (alreadyBatchingUpdates) {
	      callback(a, b, c, d, e);
	    } else {
	      transaction.perform(callback, null, a, b, c, d, e);
	    }
	  }
	};

	module.exports = ReactDefaultBatchingStrategy;

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMComponent
	 * @typechecks static-only
	 */

	/* global hasOwnProperty:true */

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var AutoFocusUtils = __webpack_require__(95);
	var CSSPropertyOperations = __webpack_require__(97);
	var DOMProperty = __webpack_require__(24);
	var DOMPropertyOperations = __webpack_require__(23);
	var EventConstants = __webpack_require__(31);
	var ReactBrowserEventEmitter = __webpack_require__(30);
	var ReactComponentBrowserEnvironment = __webpack_require__(27);
	var ReactDOMButton = __webpack_require__(105);
	var ReactDOMInput = __webpack_require__(106);
	var ReactDOMOption = __webpack_require__(110);
	var ReactDOMSelect = __webpack_require__(113);
	var ReactDOMTextarea = __webpack_require__(114);
	var ReactMount = __webpack_require__(29);
	var ReactMultiChild = __webpack_require__(115);
	var ReactPerf = __webpack_require__(19);
	var ReactUpdateQueue = __webpack_require__(54);

	var assign = __webpack_require__(40);
	var canDefineProperty = __webpack_require__(44);
	var escapeTextContentForBrowser = __webpack_require__(22);
	var invariant = __webpack_require__(14);
	var isEventSupported = __webpack_require__(41);
	var keyOf = __webpack_require__(80);
	var setInnerHTML = __webpack_require__(20);
	var setTextContent = __webpack_require__(21);
	var shallowEqual = __webpack_require__(118);
	var validateDOMNesting = __webpack_require__(71);
	var warning = __webpack_require__(26);

	var deleteListener = ReactBrowserEventEmitter.deleteListener;
	var listenTo = ReactBrowserEventEmitter.listenTo;
	var registrationNameModules = ReactBrowserEventEmitter.registrationNameModules;

	// For quickly matching children type, to test if can be treated as content.
	var CONTENT_TYPES = { 'string': true, 'number': true };

	var CHILDREN = keyOf({ children: null });
	var STYLE = keyOf({ style: null });
	var HTML = keyOf({ __html: null });

	var ELEMENT_NODE_TYPE = 1;

	function getDeclarationErrorAddendum(internalInstance) {
	  if (internalInstance) {
	    var owner = internalInstance._currentElement._owner || null;
	    if (owner) {
	      var name = owner.getName();
	      if (name) {
	        return ' This DOM node was rendered by `' + name + '`.';
	      }
	    }
	  }
	  return '';
	}

	var legacyPropsDescriptor;
	if (process.env.NODE_ENV !== 'production') {
	  legacyPropsDescriptor = {
	    props: {
	      enumerable: false,
	      get: function get() {
	        var component = this._reactInternalComponent;
	        process.env.NODE_ENV !== 'production' ? warning(false, 'ReactDOMComponent: Do not access .props of a DOM node; instead, ' + 'recreate the props as `render` did originally or read the DOM ' + 'properties/attributes directly from this node (e.g., ' + 'this.refs.box.className).%s', getDeclarationErrorAddendum(component)) : undefined;
	        return component._currentElement.props;
	      }
	    }
	  };
	}

	function legacyGetDOMNode() {
	  if (process.env.NODE_ENV !== 'production') {
	    var component = this._reactInternalComponent;
	    process.env.NODE_ENV !== 'production' ? warning(false, 'ReactDOMComponent: Do not access .getDOMNode() of a DOM node; ' + 'instead, use the node directly.%s', getDeclarationErrorAddendum(component)) : undefined;
	  }
	  return this;
	}

	function legacyIsMounted() {
	  var component = this._reactInternalComponent;
	  if (process.env.NODE_ENV !== 'production') {
	    process.env.NODE_ENV !== 'production' ? warning(false, 'ReactDOMComponent: Do not access .isMounted() of a DOM node.%s', getDeclarationErrorAddendum(component)) : undefined;
	  }
	  return !!component;
	}

	function legacySetStateEtc() {
	  if (process.env.NODE_ENV !== 'production') {
	    var component = this._reactInternalComponent;
	    process.env.NODE_ENV !== 'production' ? warning(false, 'ReactDOMComponent: Do not access .setState(), .replaceState(), or ' + '.forceUpdate() of a DOM node. This is a no-op.%s', getDeclarationErrorAddendum(component)) : undefined;
	  }
	}

	function legacySetProps(partialProps, callback) {
	  var component = this._reactInternalComponent;
	  if (process.env.NODE_ENV !== 'production') {
	    process.env.NODE_ENV !== 'production' ? warning(false, 'ReactDOMComponent: Do not access .setProps() of a DOM node. ' + 'Instead, call ReactDOM.render again at the top level.%s', getDeclarationErrorAddendum(component)) : undefined;
	  }
	  if (!component) {
	    return;
	  }
	  ReactUpdateQueue.enqueueSetPropsInternal(component, partialProps);
	  if (callback) {
	    ReactUpdateQueue.enqueueCallbackInternal(component, callback);
	  }
	}

	function legacyReplaceProps(partialProps, callback) {
	  var component = this._reactInternalComponent;
	  if (process.env.NODE_ENV !== 'production') {
	    process.env.NODE_ENV !== 'production' ? warning(false, 'ReactDOMComponent: Do not access .replaceProps() of a DOM node. ' + 'Instead, call ReactDOM.render again at the top level.%s', getDeclarationErrorAddendum(component)) : undefined;
	  }
	  if (!component) {
	    return;
	  }
	  ReactUpdateQueue.enqueueReplacePropsInternal(component, partialProps);
	  if (callback) {
	    ReactUpdateQueue.enqueueCallbackInternal(component, callback);
	  }
	}

	function friendlyStringify(obj) {
	  if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object') {
	    if (Array.isArray(obj)) {
	      return '[' + obj.map(friendlyStringify).join(', ') + ']';
	    } else {
	      var pairs = [];
	      for (var key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key)) {
	          var keyEscaped = /^[a-z$_][\w$_]*$/i.test(key) ? key : JSON.stringify(key);
	          pairs.push(keyEscaped + ': ' + friendlyStringify(obj[key]));
	        }
	      }
	      return '{' + pairs.join(', ') + '}';
	    }
	  } else if (typeof obj === 'string') {
	    return JSON.stringify(obj);
	  } else if (typeof obj === 'function') {
	    return '[function object]';
	  }
	  // Differs from JSON.stringify in that undefined becauses undefined and that
	  // inf and nan don't become null
	  return String(obj);
	}

	var styleMutationWarning = {};

	function checkAndWarnForMutatedStyle(style1, style2, component) {
	  if (style1 == null || style2 == null) {
	    return;
	  }
	  if (shallowEqual(style1, style2)) {
	    return;
	  }

	  var componentName = component._tag;
	  var owner = component._currentElement._owner;
	  var ownerName;
	  if (owner) {
	    ownerName = owner.getName();
	  }

	  var hash = ownerName + '|' + componentName;

	  if (styleMutationWarning.hasOwnProperty(hash)) {
	    return;
	  }

	  styleMutationWarning[hash] = true;

	  process.env.NODE_ENV !== 'production' ? warning(false, '`%s` was passed a style object that has previously been mutated. ' + 'Mutating `style` is deprecated. Consider cloning it beforehand. Check ' + 'the `render` %s. Previous style: %s. Mutated style: %s.', componentName, owner ? 'of `' + ownerName + '`' : 'using <' + componentName + '>', friendlyStringify(style1), friendlyStringify(style2)) : undefined;
	}

	/**
	 * @param {object} component
	 * @param {?object} props
	 */
	function assertValidProps(component, props) {
	  if (!props) {
	    return;
	  }
	  // Note the use of `==` which checks for null or undefined.
	  if (process.env.NODE_ENV !== 'production') {
	    if (voidElementTags[component._tag]) {
	      process.env.NODE_ENV !== 'production' ? warning(props.children == null && props.dangerouslySetInnerHTML == null, '%s is a void element tag and must not have `children` or ' + 'use `props.dangerouslySetInnerHTML`.%s', component._tag, component._currentElement._owner ? ' Check the render method of ' + component._currentElement._owner.getName() + '.' : '') : undefined;
	    }
	  }
	  if (props.dangerouslySetInnerHTML != null) {
	    !(props.children == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Can only set one of `children` or `props.dangerouslySetInnerHTML`.') : invariant(false) : undefined;
	    !(_typeof(props.dangerouslySetInnerHTML) === 'object' && HTML in props.dangerouslySetInnerHTML) ? process.env.NODE_ENV !== 'production' ? invariant(false, '`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. ' + 'Please visit https://fb.me/react-invariant-dangerously-set-inner-html ' + 'for more information.') : invariant(false) : undefined;
	  }
	  if (process.env.NODE_ENV !== 'production') {
	    process.env.NODE_ENV !== 'production' ? warning(props.innerHTML == null, 'Directly setting property `innerHTML` is not permitted. ' + 'For more information, lookup documentation on `dangerouslySetInnerHTML`.') : undefined;
	    process.env.NODE_ENV !== 'production' ? warning(!props.contentEditable || props.children == null, 'A component is `contentEditable` and contains `children` managed by ' + 'React. It is now your responsibility to guarantee that none of ' + 'those nodes are unexpectedly modified or duplicated. This is ' + 'probably not intentional.') : undefined;
	  }
	  !(props.style == null || _typeof(props.style) === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'The `style` prop expects a mapping from style properties to values, ' + 'not a string. For example, style={{marginRight: spacing + \'em\'}} when ' + 'using JSX.%s', getDeclarationErrorAddendum(component)) : invariant(false) : undefined;
	}

	function enqueuePutListener(id, registrationName, listener, transaction) {
	  if (process.env.NODE_ENV !== 'production') {
	    // IE8 has no API for event capturing and the `onScroll` event doesn't
	    // bubble.
	    process.env.NODE_ENV !== 'production' ? warning(registrationName !== 'onScroll' || isEventSupported('scroll', true), 'This browser doesn\'t support the `onScroll` event') : undefined;
	  }
	  var container = ReactMount.findReactContainerForID(id);
	  if (container) {
	    var doc = container.nodeType === ELEMENT_NODE_TYPE ? container.ownerDocument : container;
	    listenTo(registrationName, doc);
	  }
	  transaction.getReactMountReady().enqueue(putListener, {
	    id: id,
	    registrationName: registrationName,
	    listener: listener
	  });
	}

	function putListener() {
	  var listenerToPut = this;
	  ReactBrowserEventEmitter.putListener(listenerToPut.id, listenerToPut.registrationName, listenerToPut.listener);
	}

	// There are so many media events, it makes sense to just
	// maintain a list rather than create a `trapBubbledEvent` for each
	var mediaEvents = {
	  topAbort: 'abort',
	  topCanPlay: 'canplay',
	  topCanPlayThrough: 'canplaythrough',
	  topDurationChange: 'durationchange',
	  topEmptied: 'emptied',
	  topEncrypted: 'encrypted',
	  topEnded: 'ended',
	  topError: 'error',
	  topLoadedData: 'loadeddata',
	  topLoadedMetadata: 'loadedmetadata',
	  topLoadStart: 'loadstart',
	  topPause: 'pause',
	  topPlay: 'play',
	  topPlaying: 'playing',
	  topProgress: 'progress',
	  topRateChange: 'ratechange',
	  topSeeked: 'seeked',
	  topSeeking: 'seeking',
	  topStalled: 'stalled',
	  topSuspend: 'suspend',
	  topTimeUpdate: 'timeupdate',
	  topVolumeChange: 'volumechange',
	  topWaiting: 'waiting'
	};

	function trapBubbledEventsLocal() {
	  var inst = this;
	  // If a component renders to null or if another component fatals and causes
	  // the state of the tree to be corrupted, `node` here can be null.
	  !inst._rootNodeID ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Must be mounted to trap events') : invariant(false) : undefined;
	  var node = ReactMount.getNode(inst._rootNodeID);
	  !node ? process.env.NODE_ENV !== 'production' ? invariant(false, 'trapBubbledEvent(...): Requires node to be rendered.') : invariant(false) : undefined;

	  switch (inst._tag) {
	    case 'iframe':
	      inst._wrapperState.listeners = [ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes.topLoad, 'load', node)];
	      break;
	    case 'video':
	    case 'audio':

	      inst._wrapperState.listeners = [];
	      // create listener for each media event
	      for (var event in mediaEvents) {
	        if (mediaEvents.hasOwnProperty(event)) {
	          inst._wrapperState.listeners.push(ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes[event], mediaEvents[event], node));
	        }
	      }

	      break;
	    case 'img':
	      inst._wrapperState.listeners = [ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes.topError, 'error', node), ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes.topLoad, 'load', node)];
	      break;
	    case 'form':
	      inst._wrapperState.listeners = [ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes.topReset, 'reset', node), ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes.topSubmit, 'submit', node)];
	      break;
	  }
	}

	function mountReadyInputWrapper() {
	  ReactDOMInput.mountReadyWrapper(this);
	}

	function postUpdateSelectWrapper() {
	  ReactDOMSelect.postUpdateWrapper(this);
	}

	// For HTML, certain tags should omit their close tag. We keep a whitelist for
	// those special cased tags.

	var omittedCloseTags = {
	  'area': true,
	  'base': true,
	  'br': true,
	  'col': true,
	  'embed': true,
	  'hr': true,
	  'img': true,
	  'input': true,
	  'keygen': true,
	  'link': true,
	  'meta': true,
	  'param': true,
	  'source': true,
	  'track': true,
	  'wbr': true
	};

	// NOTE: menuitem's close tag should be omitted, but that causes problems.
	var newlineEatingTags = {
	  'listing': true,
	  'pre': true,
	  'textarea': true
	};

	// For HTML, certain tags cannot have children. This has the same purpose as
	// `omittedCloseTags` except that `menuitem` should still have its closing tag.

	var voidElementTags = assign({
	  'menuitem': true
	}, omittedCloseTags);

	// We accept any tag to be rendered but since this gets injected into arbitrary
	// HTML, we want to make sure that it's a safe tag.
	// http://www.w3.org/TR/REC-xml/#NT-Name

	var VALID_TAG_REGEX = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/; // Simplified subset
	var validatedTagCache = {};
	var hasOwnProperty = {}.hasOwnProperty;

	function validateDangerousTag(tag) {
	  if (!hasOwnProperty.call(validatedTagCache, tag)) {
	    !VALID_TAG_REGEX.test(tag) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Invalid tag: %s', tag) : invariant(false) : undefined;
	    validatedTagCache[tag] = true;
	  }
	}

	function processChildContextDev(context, inst) {
	  // Pass down our tag name to child components for validation purposes
	  context = assign({}, context);
	  var info = context[validateDOMNesting.ancestorInfoContextKey];
	  context[validateDOMNesting.ancestorInfoContextKey] = validateDOMNesting.updatedAncestorInfo(info, inst._tag, inst);
	  return context;
	}

	function isCustomComponent(tagName, props) {
	  return tagName.indexOf('-') >= 0 || props.is != null;
	}

	/**
	 * Creates a new React class that is idempotent and capable of containing other
	 * React components. It accepts event listeners and DOM properties that are
	 * valid according to `DOMProperty`.
	 *
	 *  - Event listeners: `onClick`, `onMouseDown`, etc.
	 *  - DOM properties: `className`, `name`, `title`, etc.
	 *
	 * The `style` property functions differently from the DOM API. It accepts an
	 * object mapping of style properties to values.
	 *
	 * @constructor ReactDOMComponent
	 * @extends ReactMultiChild
	 */
	function ReactDOMComponent(tag) {
	  validateDangerousTag(tag);
	  this._tag = tag.toLowerCase();
	  this._renderedChildren = null;
	  this._previousStyle = null;
	  this._previousStyleCopy = null;
	  this._rootNodeID = null;
	  this._wrapperState = null;
	  this._topLevelWrapper = null;
	  this._nodeWithLegacyProperties = null;
	  if (process.env.NODE_ENV !== 'production') {
	    this._unprocessedContextDev = null;
	    this._processedContextDev = null;
	  }
	}

	ReactDOMComponent.displayName = 'ReactDOMComponent';

	ReactDOMComponent.Mixin = {

	  construct: function construct(element) {
	    this._currentElement = element;
	  },

	  /**
	   * Generates root tag markup then recurses. This method has side effects and
	   * is not idempotent.
	   *
	   * @internal
	   * @param {string} rootID The root DOM ID for this node.
	   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
	   * @param {object} context
	   * @return {string} The computed markup.
	   */
	  mountComponent: function mountComponent(rootID, transaction, context) {
	    this._rootNodeID = rootID;

	    var props = this._currentElement.props;

	    switch (this._tag) {
	      case 'iframe':
	      case 'img':
	      case 'form':
	      case 'video':
	      case 'audio':
	        this._wrapperState = {
	          listeners: null
	        };
	        transaction.getReactMountReady().enqueue(trapBubbledEventsLocal, this);
	        break;
	      case 'button':
	        props = ReactDOMButton.getNativeProps(this, props, context);
	        break;
	      case 'input':
	        ReactDOMInput.mountWrapper(this, props, context);
	        props = ReactDOMInput.getNativeProps(this, props, context);
	        break;
	      case 'option':
	        ReactDOMOption.mountWrapper(this, props, context);
	        props = ReactDOMOption.getNativeProps(this, props, context);
	        break;
	      case 'select':
	        ReactDOMSelect.mountWrapper(this, props, context);
	        props = ReactDOMSelect.getNativeProps(this, props, context);
	        context = ReactDOMSelect.processChildContext(this, props, context);
	        break;
	      case 'textarea':
	        ReactDOMTextarea.mountWrapper(this, props, context);
	        props = ReactDOMTextarea.getNativeProps(this, props, context);
	        break;
	    }

	    assertValidProps(this, props);
	    if (process.env.NODE_ENV !== 'production') {
	      if (context[validateDOMNesting.ancestorInfoContextKey]) {
	        validateDOMNesting(this._tag, this, context[validateDOMNesting.ancestorInfoContextKey]);
	      }
	    }

	    if (process.env.NODE_ENV !== 'production') {
	      this._unprocessedContextDev = context;
	      this._processedContextDev = processChildContextDev(context, this);
	      context = this._processedContextDev;
	    }

	    var mountImage;
	    if (transaction.useCreateElement) {
	      var ownerDocument = context[ReactMount.ownerDocumentContextKey];
	      var el = ownerDocument.createElement(this._currentElement.type);
	      DOMPropertyOperations.setAttributeForID(el, this._rootNodeID);
	      // Populate node cache
	      ReactMount.getID(el);
	      this._updateDOMProperties({}, props, transaction, el);
	      this._createInitialChildren(transaction, props, context, el);
	      mountImage = el;
	    } else {
	      var tagOpen = this._createOpenTagMarkupAndPutListeners(transaction, props);
	      var tagContent = this._createContentMarkup(transaction, props, context);
	      if (!tagContent && omittedCloseTags[this._tag]) {
	        mountImage = tagOpen + '/>';
	      } else {
	        mountImage = tagOpen + '>' + tagContent + '</' + this._currentElement.type + '>';
	      }
	    }

	    switch (this._tag) {
	      case 'input':
	        transaction.getReactMountReady().enqueue(mountReadyInputWrapper, this);
	      // falls through
	      case 'button':
	      case 'select':
	      case 'textarea':
	        if (props.autoFocus) {
	          transaction.getReactMountReady().enqueue(AutoFocusUtils.focusDOMComponent, this);
	        }
	        break;
	    }

	    return mountImage;
	  },

	  /**
	   * Creates markup for the open tag and all attributes.
	   *
	   * This method has side effects because events get registered.
	   *
	   * Iterating over object properties is faster than iterating over arrays.
	   * @see http://jsperf.com/obj-vs-arr-iteration
	   *
	   * @private
	   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
	   * @param {object} props
	   * @return {string} Markup of opening tag.
	   */
	  _createOpenTagMarkupAndPutListeners: function _createOpenTagMarkupAndPutListeners(transaction, props) {
	    var ret = '<' + this._currentElement.type;

	    for (var propKey in props) {
	      if (!props.hasOwnProperty(propKey)) {
	        continue;
	      }
	      var propValue = props[propKey];
	      if (propValue == null) {
	        continue;
	      }
	      if (registrationNameModules.hasOwnProperty(propKey)) {
	        if (propValue) {
	          enqueuePutListener(this._rootNodeID, propKey, propValue, transaction);
	        }
	      } else {
	        if (propKey === STYLE) {
	          if (propValue) {
	            if (process.env.NODE_ENV !== 'production') {
	              // See `_updateDOMProperties`. style block
	              this._previousStyle = propValue;
	            }
	            propValue = this._previousStyleCopy = assign({}, props.style);
	          }
	          propValue = CSSPropertyOperations.createMarkupForStyles(propValue);
	        }
	        var markup = null;
	        if (this._tag != null && isCustomComponent(this._tag, props)) {
	          if (propKey !== CHILDREN) {
	            markup = DOMPropertyOperations.createMarkupForCustomAttribute(propKey, propValue);
	          }
	        } else {
	          markup = DOMPropertyOperations.createMarkupForProperty(propKey, propValue);
	        }
	        if (markup) {
	          ret += ' ' + markup;
	        }
	      }
	    }

	    // For static pages, no need to put React ID and checksum. Saves lots of
	    // bytes.
	    if (transaction.renderToStaticMarkup) {
	      return ret;
	    }

	    var markupForID = DOMPropertyOperations.createMarkupForID(this._rootNodeID);
	    return ret + ' ' + markupForID;
	  },

	  /**
	   * Creates markup for the content between the tags.
	   *
	   * @private
	   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
	   * @param {object} props
	   * @param {object} context
	   * @return {string} Content markup.
	   */
	  _createContentMarkup: function _createContentMarkup(transaction, props, context) {
	    var ret = '';

	    // Intentional use of != to avoid catching zero/false.
	    var innerHTML = props.dangerouslySetInnerHTML;
	    if (innerHTML != null) {
	      if (innerHTML.__html != null) {
	        ret = innerHTML.__html;
	      }
	    } else {
	      var contentToUse = CONTENT_TYPES[_typeof(props.children)] ? props.children : null;
	      var childrenToUse = contentToUse != null ? null : props.children;
	      if (contentToUse != null) {
	        // TODO: Validate that text is allowed as a child of this node
	        ret = escapeTextContentForBrowser(contentToUse);
	      } else if (childrenToUse != null) {
	        var mountImages = this.mountChildren(childrenToUse, transaction, context);
	        ret = mountImages.join('');
	      }
	    }
	    if (newlineEatingTags[this._tag] && ret.charAt(0) === '\n') {
	      // text/html ignores the first character in these tags if it's a newline
	      // Prefer to break application/xml over text/html (for now) by adding
	      // a newline specifically to get eaten by the parser. (Alternately for
	      // textareas, replacing "^\n" with "\r\n" doesn't get eaten, and the first
	      // \r is normalized out by HTMLTextAreaElement#value.)
	      // See: <http://www.w3.org/TR/html-polyglot/#newlines-in-textarea-and-pre>
	      // See: <http://www.w3.org/TR/html5/syntax.html#element-restrictions>
	      // See: <http://www.w3.org/TR/html5/syntax.html#newlines>
	      // See: Parsing of "textarea" "listing" and "pre" elements
	      //  from <http://www.w3.org/TR/html5/syntax.html#parsing-main-inbody>
	      return '\n' + ret;
	    } else {
	      return ret;
	    }
	  },

	  _createInitialChildren: function _createInitialChildren(transaction, props, context, el) {
	    // Intentional use of != to avoid catching zero/false.
	    var innerHTML = props.dangerouslySetInnerHTML;
	    if (innerHTML != null) {
	      if (innerHTML.__html != null) {
	        setInnerHTML(el, innerHTML.__html);
	      }
	    } else {
	      var contentToUse = CONTENT_TYPES[_typeof(props.children)] ? props.children : null;
	      var childrenToUse = contentToUse != null ? null : props.children;
	      if (contentToUse != null) {
	        // TODO: Validate that text is allowed as a child of this node
	        setTextContent(el, contentToUse);
	      } else if (childrenToUse != null) {
	        var mountImages = this.mountChildren(childrenToUse, transaction, context);
	        for (var i = 0; i < mountImages.length; i++) {
	          el.appendChild(mountImages[i]);
	        }
	      }
	    }
	  },

	  /**
	   * Receives a next element and updates the component.
	   *
	   * @internal
	   * @param {ReactElement} nextElement
	   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
	   * @param {object} context
	   */
	  receiveComponent: function receiveComponent(nextElement, transaction, context) {
	    var prevElement = this._currentElement;
	    this._currentElement = nextElement;
	    this.updateComponent(transaction, prevElement, nextElement, context);
	  },

	  /**
	   * Updates a native DOM component after it has already been allocated and
	   * attached to the DOM. Reconciles the root DOM node, then recurses.
	   *
	   * @param {ReactReconcileTransaction} transaction
	   * @param {ReactElement} prevElement
	   * @param {ReactElement} nextElement
	   * @internal
	   * @overridable
	   */
	  updateComponent: function updateComponent(transaction, prevElement, nextElement, context) {
	    var lastProps = prevElement.props;
	    var nextProps = this._currentElement.props;

	    switch (this._tag) {
	      case 'button':
	        lastProps = ReactDOMButton.getNativeProps(this, lastProps);
	        nextProps = ReactDOMButton.getNativeProps(this, nextProps);
	        break;
	      case 'input':
	        ReactDOMInput.updateWrapper(this);
	        lastProps = ReactDOMInput.getNativeProps(this, lastProps);
	        nextProps = ReactDOMInput.getNativeProps(this, nextProps);
	        break;
	      case 'option':
	        lastProps = ReactDOMOption.getNativeProps(this, lastProps);
	        nextProps = ReactDOMOption.getNativeProps(this, nextProps);
	        break;
	      case 'select':
	        lastProps = ReactDOMSelect.getNativeProps(this, lastProps);
	        nextProps = ReactDOMSelect.getNativeProps(this, nextProps);
	        break;
	      case 'textarea':
	        ReactDOMTextarea.updateWrapper(this);
	        lastProps = ReactDOMTextarea.getNativeProps(this, lastProps);
	        nextProps = ReactDOMTextarea.getNativeProps(this, nextProps);
	        break;
	    }

	    if (process.env.NODE_ENV !== 'production') {
	      // If the context is reference-equal to the old one, pass down the same
	      // processed object so the update bailout in ReactReconciler behaves
	      // correctly (and identically in dev and prod). See #5005.
	      if (this._unprocessedContextDev !== context) {
	        this._unprocessedContextDev = context;
	        this._processedContextDev = processChildContextDev(context, this);
	      }
	      context = this._processedContextDev;
	    }

	    assertValidProps(this, nextProps);
	    this._updateDOMProperties(lastProps, nextProps, transaction, null);
	    this._updateDOMChildren(lastProps, nextProps, transaction, context);

	    if (!canDefineProperty && this._nodeWithLegacyProperties) {
	      this._nodeWithLegacyProperties.props = nextProps;
	    }

	    if (this._tag === 'select') {
	      // <select> value update needs to occur after <option> children
	      // reconciliation
	      transaction.getReactMountReady().enqueue(postUpdateSelectWrapper, this);
	    }
	  },

	  /**
	   * Reconciles the properties by detecting differences in property values and
	   * updating the DOM as necessary. This function is probably the single most
	   * critical path for performance optimization.
	   *
	   * TODO: Benchmark whether checking for changed values in memory actually
	   *       improves performance (especially statically positioned elements).
	   * TODO: Benchmark the effects of putting this at the top since 99% of props
	   *       do not change for a given reconciliation.
	   * TODO: Benchmark areas that can be improved with caching.
	   *
	   * @private
	   * @param {object} lastProps
	   * @param {object} nextProps
	   * @param {ReactReconcileTransaction} transaction
	   * @param {?DOMElement} node
	   */
	  _updateDOMProperties: function _updateDOMProperties(lastProps, nextProps, transaction, node) {
	    var propKey;
	    var styleName;
	    var styleUpdates;
	    for (propKey in lastProps) {
	      if (nextProps.hasOwnProperty(propKey) || !lastProps.hasOwnProperty(propKey)) {
	        continue;
	      }
	      if (propKey === STYLE) {
	        var lastStyle = this._previousStyleCopy;
	        for (styleName in lastStyle) {
	          if (lastStyle.hasOwnProperty(styleName)) {
	            styleUpdates = styleUpdates || {};
	            styleUpdates[styleName] = '';
	          }
	        }
	        this._previousStyleCopy = null;
	      } else if (registrationNameModules.hasOwnProperty(propKey)) {
	        if (lastProps[propKey]) {
	          // Only call deleteListener if there was a listener previously or
	          // else willDeleteListener gets called when there wasn't actually a
	          // listener (e.g., onClick={null})
	          deleteListener(this._rootNodeID, propKey);
	        }
	      } else if (DOMProperty.properties[propKey] || DOMProperty.isCustomAttribute(propKey)) {
	        if (!node) {
	          node = ReactMount.getNode(this._rootNodeID);
	        }
	        DOMPropertyOperations.deleteValueForProperty(node, propKey);
	      }
	    }
	    for (propKey in nextProps) {
	      var nextProp = nextProps[propKey];
	      var lastProp = propKey === STYLE ? this._previousStyleCopy : lastProps[propKey];
	      if (!nextProps.hasOwnProperty(propKey) || nextProp === lastProp) {
	        continue;
	      }
	      if (propKey === STYLE) {
	        if (nextProp) {
	          if (process.env.NODE_ENV !== 'production') {
	            checkAndWarnForMutatedStyle(this._previousStyleCopy, this._previousStyle, this);
	            this._previousStyle = nextProp;
	          }
	          nextProp = this._previousStyleCopy = assign({}, nextProp);
	        } else {
	          this._previousStyleCopy = null;
	        }
	        if (lastProp) {
	          // Unset styles on `lastProp` but not on `nextProp`.
	          for (styleName in lastProp) {
	            if (lastProp.hasOwnProperty(styleName) && (!nextProp || !nextProp.hasOwnProperty(styleName))) {
	              styleUpdates = styleUpdates || {};
	              styleUpdates[styleName] = '';
	            }
	          }
	          // Update styles that changed since `lastProp`.
	          for (styleName in nextProp) {
	            if (nextProp.hasOwnProperty(styleName) && lastProp[styleName] !== nextProp[styleName]) {
	              styleUpdates = styleUpdates || {};
	              styleUpdates[styleName] = nextProp[styleName];
	            }
	          }
	        } else {
	          // Relies on `updateStylesByID` not mutating `styleUpdates`.
	          styleUpdates = nextProp;
	        }
	      } else if (registrationNameModules.hasOwnProperty(propKey)) {
	        if (nextProp) {
	          enqueuePutListener(this._rootNodeID, propKey, nextProp, transaction);
	        } else if (lastProp) {
	          deleteListener(this._rootNodeID, propKey);
	        }
	      } else if (isCustomComponent(this._tag, nextProps)) {
	        if (!node) {
	          node = ReactMount.getNode(this._rootNodeID);
	        }
	        if (propKey === CHILDREN) {
	          nextProp = null;
	        }
	        DOMPropertyOperations.setValueForAttribute(node, propKey, nextProp);
	      } else if (DOMProperty.properties[propKey] || DOMProperty.isCustomAttribute(propKey)) {
	        if (!node) {
	          node = ReactMount.getNode(this._rootNodeID);
	        }
	        // If we're updating to null or undefined, we should remove the property
	        // from the DOM node instead of inadvertantly setting to a string. This
	        // brings us in line with the same behavior we have on initial render.
	        if (nextProp != null) {
	          DOMPropertyOperations.setValueForProperty(node, propKey, nextProp);
	        } else {
	          DOMPropertyOperations.deleteValueForProperty(node, propKey);
	        }
	      }
	    }
	    if (styleUpdates) {
	      if (!node) {
	        node = ReactMount.getNode(this._rootNodeID);
	      }
	      CSSPropertyOperations.setValueForStyles(node, styleUpdates);
	    }
	  },

	  /**
	   * Reconciles the children with the various properties that affect the
	   * children content.
	   *
	   * @param {object} lastProps
	   * @param {object} nextProps
	   * @param {ReactReconcileTransaction} transaction
	   * @param {object} context
	   */
	  _updateDOMChildren: function _updateDOMChildren(lastProps, nextProps, transaction, context) {
	    var lastContent = CONTENT_TYPES[_typeof(lastProps.children)] ? lastProps.children : null;
	    var nextContent = CONTENT_TYPES[_typeof(nextProps.children)] ? nextProps.children : null;

	    var lastHtml = lastProps.dangerouslySetInnerHTML && lastProps.dangerouslySetInnerHTML.__html;
	    var nextHtml = nextProps.dangerouslySetInnerHTML && nextProps.dangerouslySetInnerHTML.__html;

	    // Note the use of `!=` which checks for null or undefined.
	    var lastChildren = lastContent != null ? null : lastProps.children;
	    var nextChildren = nextContent != null ? null : nextProps.children;

	    // If we're switching from children to content/html or vice versa, remove
	    // the old content
	    var lastHasContentOrHtml = lastContent != null || lastHtml != null;
	    var nextHasContentOrHtml = nextContent != null || nextHtml != null;
	    if (lastChildren != null && nextChildren == null) {
	      this.updateChildren(null, transaction, context);
	    } else if (lastHasContentOrHtml && !nextHasContentOrHtml) {
	      this.updateTextContent('');
	    }

	    if (nextContent != null) {
	      if (lastContent !== nextContent) {
	        this.updateTextContent('' + nextContent);
	      }
	    } else if (nextHtml != null) {
	      if (lastHtml !== nextHtml) {
	        this.updateMarkup('' + nextHtml);
	      }
	    } else if (nextChildren != null) {
	      this.updateChildren(nextChildren, transaction, context);
	    }
	  },

	  /**
	   * Destroys all event registrations for this instance. Does not remove from
	   * the DOM. That must be done by the parent.
	   *
	   * @internal
	   */
	  unmountComponent: function unmountComponent() {
	    switch (this._tag) {
	      case 'iframe':
	      case 'img':
	      case 'form':
	      case 'video':
	      case 'audio':
	        var listeners = this._wrapperState.listeners;
	        if (listeners) {
	          for (var i = 0; i < listeners.length; i++) {
	            listeners[i].remove();
	          }
	        }
	        break;
	      case 'input':
	        ReactDOMInput.unmountWrapper(this);
	        break;
	      case 'html':
	      case 'head':
	      case 'body':
	        /**
	         * Components like <html> <head> and <body> can't be removed or added
	         * easily in a cross-browser way, however it's valuable to be able to
	         * take advantage of React's reconciliation for styling and <title>
	         * management. So we just document it and throw in dangerous cases.
	         */
	         true ? process.env.NODE_ENV !== 'production' ? invariant(false, '<%s> tried to unmount. Because of cross-browser quirks it is ' + 'impossible to unmount some top-level components (eg <html>, ' + '<head>, and <body>) reliably and efficiently. To fix this, have a ' + 'single top-level component that never unmounts render these ' + 'elements.', this._tag) : invariant(false) : undefined;
	        break;
	    }

	    this.unmountChildren();
	    ReactBrowserEventEmitter.deleteAllListeners(this._rootNodeID);
	    ReactComponentBrowserEnvironment.unmountIDFromEnvironment(this._rootNodeID);
	    this._rootNodeID = null;
	    this._wrapperState = null;
	    if (this._nodeWithLegacyProperties) {
	      var node = this._nodeWithLegacyProperties;
	      node._reactInternalComponent = null;
	      this._nodeWithLegacyProperties = null;
	    }
	  },

	  getPublicInstance: function getPublicInstance() {
	    if (!this._nodeWithLegacyProperties) {
	      var node = ReactMount.getNode(this._rootNodeID);

	      node._reactInternalComponent = this;
	      node.getDOMNode = legacyGetDOMNode;
	      node.isMounted = legacyIsMounted;
	      node.setState = legacySetStateEtc;
	      node.replaceState = legacySetStateEtc;
	      node.forceUpdate = legacySetStateEtc;
	      node.setProps = legacySetProps;
	      node.replaceProps = legacyReplaceProps;

	      if (process.env.NODE_ENV !== 'production') {
	        if (canDefineProperty) {
	          Object.defineProperties(node, legacyPropsDescriptor);
	        } else {
	          // updateComponent will update this property on subsequent renders
	          node.props = this._currentElement.props;
	        }
	      } else {
	        // updateComponent will update this property on subsequent renders
	        node.props = this._currentElement.props;
	      }

	      this._nodeWithLegacyProperties = node;
	    }
	    return this._nodeWithLegacyProperties;
	  }

	};

	ReactPerf.measureMethods(ReactDOMComponent, 'ReactDOMComponent', {
	  mountComponent: 'mountComponent',
	  updateComponent: 'updateComponent'
	});

	assign(ReactDOMComponent.prototype, ReactDOMComponent.Mixin, ReactMultiChild.Mixin);

	module.exports = ReactDOMComponent;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule AutoFocusUtils
	 * @typechecks static-only
	 */

	'use strict';

	var ReactMount = __webpack_require__(29);

	var findDOMNode = __webpack_require__(92);
	var focusNode = __webpack_require__(96);

	var Mixin = {
	  componentDidMount: function componentDidMount() {
	    if (this.props.autoFocus) {
	      focusNode(findDOMNode(this));
	    }
	  }
	};

	var AutoFocusUtils = {
	  Mixin: Mixin,

	  focusDOMComponent: function focusDOMComponent() {
	    focusNode(ReactMount.getNode(this._rootNodeID));
	  }
	};

	module.exports = AutoFocusUtils;

/***/ },
/* 96 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule focusNode
	 */

	'use strict';

	/**
	 * @param {DOMElement} node input/textarea to focus
	 */

	function focusNode(node) {
	  // IE8 can throw "Can't move focus to the control because it is invisible,
	  // not enabled, or of a type that does not accept the focus." for all kinds of
	  // reasons that are too expensive and fragile to test.
	  try {
	    node.focus();
	  } catch (e) {}
	}

	module.exports = focusNode;

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule CSSPropertyOperations
	 * @typechecks static-only
	 */

	'use strict';

	var CSSProperty = __webpack_require__(98);
	var ExecutionEnvironment = __webpack_require__(10);
	var ReactPerf = __webpack_require__(19);

	var camelizeStyleName = __webpack_require__(99);
	var dangerousStyleValue = __webpack_require__(101);
	var hyphenateStyleName = __webpack_require__(102);
	var memoizeStringOnly = __webpack_require__(104);
	var warning = __webpack_require__(26);

	var processStyleName = memoizeStringOnly(function (styleName) {
	  return hyphenateStyleName(styleName);
	});

	var hasShorthandPropertyBug = false;
	var styleFloatAccessor = 'cssFloat';
	if (ExecutionEnvironment.canUseDOM) {
	  var tempStyle = document.createElement('div').style;
	  try {
	    // IE8 throws "Invalid argument." if resetting shorthand style properties.
	    tempStyle.font = '';
	  } catch (e) {
	    hasShorthandPropertyBug = true;
	  }
	  // IE8 only supports accessing cssFloat (standard) as styleFloat
	  if (document.documentElement.style.cssFloat === undefined) {
	    styleFloatAccessor = 'styleFloat';
	  }
	}

	if (process.env.NODE_ENV !== 'production') {
	  // 'msTransform' is correct, but the other prefixes should be capitalized
	  var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;

	  // style values shouldn't contain a semicolon
	  var badStyleValueWithSemicolonPattern = /;\s*$/;

	  var warnedStyleNames = {};
	  var warnedStyleValues = {};

	  var warnHyphenatedStyleName = function warnHyphenatedStyleName(name) {
	    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
	      return;
	    }

	    warnedStyleNames[name] = true;
	    process.env.NODE_ENV !== 'production' ? warning(false, 'Unsupported style property %s. Did you mean %s?', name, camelizeStyleName(name)) : undefined;
	  };

	  var warnBadVendoredStyleName = function warnBadVendoredStyleName(name) {
	    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
	      return;
	    }

	    warnedStyleNames[name] = true;
	    process.env.NODE_ENV !== 'production' ? warning(false, 'Unsupported vendor-prefixed style property %s. Did you mean %s?', name, name.charAt(0).toUpperCase() + name.slice(1)) : undefined;
	  };

	  var warnStyleValueWithSemicolon = function warnStyleValueWithSemicolon(name, value) {
	    if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
	      return;
	    }

	    warnedStyleValues[value] = true;
	    process.env.NODE_ENV !== 'production' ? warning(false, 'Style property values shouldn\'t contain a semicolon. ' + 'Try "%s: %s" instead.', name, value.replace(badStyleValueWithSemicolonPattern, '')) : undefined;
	  };

	  /**
	   * @param {string} name
	   * @param {*} value
	   */
	  var warnValidStyle = function warnValidStyle(name, value) {
	    if (name.indexOf('-') > -1) {
	      warnHyphenatedStyleName(name);
	    } else if (badVendoredStyleNamePattern.test(name)) {
	      warnBadVendoredStyleName(name);
	    } else if (badStyleValueWithSemicolonPattern.test(value)) {
	      warnStyleValueWithSemicolon(name, value);
	    }
	  };
	}

	/**
	 * Operations for dealing with CSS properties.
	 */
	var CSSPropertyOperations = {

	  /**
	   * Serializes a mapping of style properties for use as inline styles:
	   *
	   *   > createMarkupForStyles({width: '200px', height: 0})
	   *   "width:200px;height:0;"
	   *
	   * Undefined values are ignored so that declarative programming is easier.
	   * The result should be HTML-escaped before insertion into the DOM.
	   *
	   * @param {object} styles
	   * @return {?string}
	   */
	  createMarkupForStyles: function createMarkupForStyles(styles) {
	    var serialized = '';
	    for (var styleName in styles) {
	      if (!styles.hasOwnProperty(styleName)) {
	        continue;
	      }
	      var styleValue = styles[styleName];
	      if (process.env.NODE_ENV !== 'production') {
	        warnValidStyle(styleName, styleValue);
	      }
	      if (styleValue != null) {
	        serialized += processStyleName(styleName) + ':';
	        serialized += dangerousStyleValue(styleName, styleValue) + ';';
	      }
	    }
	    return serialized || null;
	  },

	  /**
	   * Sets the value for multiple styles on a node.  If a value is specified as
	   * '' (empty string), the corresponding style property will be unset.
	   *
	   * @param {DOMElement} node
	   * @param {object} styles
	   */
	  setValueForStyles: function setValueForStyles(node, styles) {
	    var style = node.style;
	    for (var styleName in styles) {
	      if (!styles.hasOwnProperty(styleName)) {
	        continue;
	      }
	      if (process.env.NODE_ENV !== 'production') {
	        warnValidStyle(styleName, styles[styleName]);
	      }
	      var styleValue = dangerousStyleValue(styleName, styles[styleName]);
	      if (styleName === 'float') {
	        styleName = styleFloatAccessor;
	      }
	      if (styleValue) {
	        style[styleName] = styleValue;
	      } else {
	        var expansion = hasShorthandPropertyBug && CSSProperty.shorthandPropertyExpansions[styleName];
	        if (expansion) {
	          // Shorthand property that IE8 won't like unsetting, so unset each
	          // component to placate it
	          for (var individualStyleName in expansion) {
	            style[individualStyleName] = '';
	          }
	        } else {
	          style[styleName] = '';
	        }
	      }
	    }
	  }

	};

	ReactPerf.measureMethods(CSSPropertyOperations, 'CSSPropertyOperations', {
	  setValueForStyles: 'setValueForStyles'
	});

	module.exports = CSSPropertyOperations;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 98 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule CSSProperty
	 */

	'use strict';

	/**
	 * CSS properties which accept numbers but are not in units of "px".
	 */

	var isUnitlessNumber = {
	  animationIterationCount: true,
	  boxFlex: true,
	  boxFlexGroup: true,
	  boxOrdinalGroup: true,
	  columnCount: true,
	  flex: true,
	  flexGrow: true,
	  flexPositive: true,
	  flexShrink: true,
	  flexNegative: true,
	  flexOrder: true,
	  fontWeight: true,
	  lineClamp: true,
	  lineHeight: true,
	  opacity: true,
	  order: true,
	  orphans: true,
	  tabSize: true,
	  widows: true,
	  zIndex: true,
	  zoom: true,

	  // SVG-related properties
	  fillOpacity: true,
	  stopOpacity: true,
	  strokeDashoffset: true,
	  strokeOpacity: true,
	  strokeWidth: true
	};

	/**
	 * @param {string} prefix vendor-specific prefix, eg: Webkit
	 * @param {string} key style name, eg: transitionDuration
	 * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
	 * WebkitTransitionDuration
	 */
	function prefixKey(prefix, key) {
	  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
	}

	/**
	 * Support style names that may come passed in prefixed by adding permutations
	 * of vendor prefixes.
	 */
	var prefixes = ['Webkit', 'ms', 'Moz', 'O'];

	// Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
	// infinite loop, because it iterates over the newly added props too.
	Object.keys(isUnitlessNumber).forEach(function (prop) {
	  prefixes.forEach(function (prefix) {
	    isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
	  });
	});

	/**
	 * Most style properties can be unset by doing .style[prop] = '' but IE8
	 * doesn't like doing that with shorthand properties so for the properties that
	 * IE8 breaks on, which are listed here, we instead unset each of the
	 * individual properties. See http://bugs.jquery.com/ticket/12385.
	 * The 4-value 'clock' properties like margin, padding, border-width seem to
	 * behave without any problems. Curiously, list-style works too without any
	 * special prodding.
	 */
	var shorthandPropertyExpansions = {
	  background: {
	    backgroundAttachment: true,
	    backgroundColor: true,
	    backgroundImage: true,
	    backgroundPositionX: true,
	    backgroundPositionY: true,
	    backgroundRepeat: true
	  },
	  backgroundPosition: {
	    backgroundPositionX: true,
	    backgroundPositionY: true
	  },
	  border: {
	    borderWidth: true,
	    borderStyle: true,
	    borderColor: true
	  },
	  borderBottom: {
	    borderBottomWidth: true,
	    borderBottomStyle: true,
	    borderBottomColor: true
	  },
	  borderLeft: {
	    borderLeftWidth: true,
	    borderLeftStyle: true,
	    borderLeftColor: true
	  },
	  borderRight: {
	    borderRightWidth: true,
	    borderRightStyle: true,
	    borderRightColor: true
	  },
	  borderTop: {
	    borderTopWidth: true,
	    borderTopStyle: true,
	    borderTopColor: true
	  },
	  font: {
	    fontStyle: true,
	    fontVariant: true,
	    fontWeight: true,
	    fontSize: true,
	    lineHeight: true,
	    fontFamily: true
	  },
	  outline: {
	    outlineWidth: true,
	    outlineStyle: true,
	    outlineColor: true
	  }
	};

	var CSSProperty = {
	  isUnitlessNumber: isUnitlessNumber,
	  shorthandPropertyExpansions: shorthandPropertyExpansions
	};

	module.exports = CSSProperty;

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule camelizeStyleName
	 * @typechecks
	 */

	'use strict';

	var camelize = __webpack_require__(100);

	var msPattern = /^-ms-/;

	/**
	 * Camelcases a hyphenated CSS property name, for example:
	 *
	 *   > camelizeStyleName('background-color')
	 *   < "backgroundColor"
	 *   > camelizeStyleName('-moz-transition')
	 *   < "MozTransition"
	 *   > camelizeStyleName('-ms-transition')
	 *   < "msTransition"
	 *
	 * As Andi Smith suggests
	 * (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
	 * is converted to lowercase `ms`.
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function camelizeStyleName(string) {
	  return camelize(string.replace(msPattern, 'ms-'));
	}

	module.exports = camelizeStyleName;

/***/ },
/* 100 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule camelize
	 * @typechecks
	 */

	"use strict";

	var _hyphenPattern = /-(.)/g;

	/**
	 * Camelcases a hyphenated string, for example:
	 *
	 *   > camelize('background-color')
	 *   < "backgroundColor"
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function camelize(string) {
	  return string.replace(_hyphenPattern, function (_, character) {
	    return character.toUpperCase();
	  });
	}

	module.exports = camelize;

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule dangerousStyleValue
	 * @typechecks static-only
	 */

	'use strict';

	var CSSProperty = __webpack_require__(98);

	var isUnitlessNumber = CSSProperty.isUnitlessNumber;

	/**
	 * Convert a value into the proper css writable value. The style name `name`
	 * should be logical (no hyphens), as specified
	 * in `CSSProperty.isUnitlessNumber`.
	 *
	 * @param {string} name CSS property name such as `topMargin`.
	 * @param {*} value CSS property value such as `10px`.
	 * @return {string} Normalized style value with dimensions applied.
	 */
	function dangerousStyleValue(name, value) {
	  // Note that we've removed escapeTextForBrowser() calls here since the
	  // whole string will be escaped when the attribute is injected into
	  // the markup. If you provide unsafe user data here they can inject
	  // arbitrary CSS which may be problematic (I couldn't repro this):
	  // https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
	  // http://www.thespanner.co.uk/2007/11/26/ultimate-xss-css-injection/
	  // This is not an XSS hole but instead a potential CSS injection issue
	  // which has lead to a greater discussion about how we're going to
	  // trust URLs moving forward. See #2115901

	  var isEmpty = value == null || typeof value === 'boolean' || value === '';
	  if (isEmpty) {
	    return '';
	  }

	  var isNonNumeric = isNaN(value);
	  if (isNonNumeric || value === 0 || isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name]) {
	    return '' + value; // cast to string
	  }

	  if (typeof value === 'string') {
	    value = value.trim();
	  }
	  return value + 'px';
	}

	module.exports = dangerousStyleValue;

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule hyphenateStyleName
	 * @typechecks
	 */

	'use strict';

	var hyphenate = __webpack_require__(103);

	var msPattern = /^ms-/;

	/**
	 * Hyphenates a camelcased CSS property name, for example:
	 *
	 *   > hyphenateStyleName('backgroundColor')
	 *   < "background-color"
	 *   > hyphenateStyleName('MozTransition')
	 *   < "-moz-transition"
	 *   > hyphenateStyleName('msTransition')
	 *   < "-ms-transition"
	 *
	 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
	 * is converted to `-ms-`.
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function hyphenateStyleName(string) {
	  return hyphenate(string).replace(msPattern, '-ms-');
	}

	module.exports = hyphenateStyleName;

/***/ },
/* 103 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule hyphenate
	 * @typechecks
	 */

	'use strict';

	var _uppercasePattern = /([A-Z])/g;

	/**
	 * Hyphenates a camelcased string, for example:
	 *
	 *   > hyphenate('backgroundColor')
	 *   < "background-color"
	 *
	 * For CSS style names, use `hyphenateStyleName` instead which works properly
	 * with all vendor prefixes, including `ms`.
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function hyphenate(string) {
	  return string.replace(_uppercasePattern, '-$1').toLowerCase();
	}

	module.exports = hyphenate;

/***/ },
/* 104 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule memoizeStringOnly
	 * @typechecks static-only
	 */

	'use strict';

	/**
	 * Memoizes the return value of a function that accepts one string argument.
	 *
	 * @param {function} callback
	 * @return {function}
	 */

	function memoizeStringOnly(callback) {
	  var cache = {};
	  return function (string) {
	    if (!cache.hasOwnProperty(string)) {
	      cache[string] = callback.call(this, string);
	    }
	    return cache[string];
	  };
	}

	module.exports = memoizeStringOnly;

/***/ },
/* 105 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMButton
	 */

	'use strict';

	var mouseListenerNames = {
	  onClick: true,
	  onDoubleClick: true,
	  onMouseDown: true,
	  onMouseMove: true,
	  onMouseUp: true,

	  onClickCapture: true,
	  onDoubleClickCapture: true,
	  onMouseDownCapture: true,
	  onMouseMoveCapture: true,
	  onMouseUpCapture: true
	};

	/**
	 * Implements a <button> native component that does not receive mouse events
	 * when `disabled` is set.
	 */
	var ReactDOMButton = {
	  getNativeProps: function getNativeProps(inst, props, context) {
	    if (!props.disabled) {
	      return props;
	    }

	    // Copy the props, except the mouse listeners
	    var nativeProps = {};
	    for (var key in props) {
	      if (props.hasOwnProperty(key) && !mouseListenerNames[key]) {
	        nativeProps[key] = props[key];
	      }
	    }

	    return nativeProps;
	  }
	};

	module.exports = ReactDOMButton;

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMInput
	 */

	'use strict';

	var ReactDOMIDOperations = __webpack_require__(28);
	var LinkedValueUtils = __webpack_require__(107);
	var ReactMount = __webpack_require__(29);
	var ReactUpdates = __webpack_require__(55);

	var assign = __webpack_require__(40);
	var invariant = __webpack_require__(14);

	var instancesByReactID = {};

	function forceUpdateIfMounted() {
	  if (this._rootNodeID) {
	    // DOM component is still mounted; update
	    ReactDOMInput.updateWrapper(this);
	  }
	}

	/**
	 * Implements an <input> native component that allows setting these optional
	 * props: `checked`, `value`, `defaultChecked`, and `defaultValue`.
	 *
	 * If `checked` or `value` are not supplied (or null/undefined), user actions
	 * that affect the checked state or value will trigger updates to the element.
	 *
	 * If they are supplied (and not null/undefined), the rendered element will not
	 * trigger updates to the element. Instead, the props must change in order for
	 * the rendered element to be updated.
	 *
	 * The rendered element will be initialized as unchecked (or `defaultChecked`)
	 * with an empty value (or `defaultValue`).
	 *
	 * @see http://www.w3.org/TR/2012/WD-html5-20121025/the-input-element.html
	 */
	var ReactDOMInput = {
	  getNativeProps: function getNativeProps(inst, props, context) {
	    var value = LinkedValueUtils.getValue(props);
	    var checked = LinkedValueUtils.getChecked(props);

	    var nativeProps = assign({}, props, {
	      defaultChecked: undefined,
	      defaultValue: undefined,
	      value: value != null ? value : inst._wrapperState.initialValue,
	      checked: checked != null ? checked : inst._wrapperState.initialChecked,
	      onChange: inst._wrapperState.onChange
	    });

	    return nativeProps;
	  },

	  mountWrapper: function mountWrapper(inst, props) {
	    if (process.env.NODE_ENV !== 'production') {
	      LinkedValueUtils.checkPropTypes('input', props, inst._currentElement._owner);
	    }

	    var defaultValue = props.defaultValue;
	    inst._wrapperState = {
	      initialChecked: props.defaultChecked || false,
	      initialValue: defaultValue != null ? defaultValue : null,
	      onChange: _handleChange.bind(inst)
	    };
	  },

	  mountReadyWrapper: function mountReadyWrapper(inst) {
	    // Can't be in mountWrapper or else server rendering leaks.
	    instancesByReactID[inst._rootNodeID] = inst;
	  },

	  unmountWrapper: function unmountWrapper(inst) {
	    delete instancesByReactID[inst._rootNodeID];
	  },

	  updateWrapper: function updateWrapper(inst) {
	    var props = inst._currentElement.props;

	    // TODO: Shouldn't this be getChecked(props)?
	    var checked = props.checked;
	    if (checked != null) {
	      ReactDOMIDOperations.updatePropertyByID(inst._rootNodeID, 'checked', checked || false);
	    }

	    var value = LinkedValueUtils.getValue(props);
	    if (value != null) {
	      // Cast `value` to a string to ensure the value is set correctly. While
	      // browsers typically do this as necessary, jsdom doesn't.
	      ReactDOMIDOperations.updatePropertyByID(inst._rootNodeID, 'value', '' + value);
	    }
	  }
	};

	function _handleChange(event) {
	  var props = this._currentElement.props;

	  var returnValue = LinkedValueUtils.executeOnChange(props, event);

	  // Here we use asap to wait until all updates have propagated, which
	  // is important when using controlled components within layers:
	  // https://github.com/facebook/react/issues/1698
	  ReactUpdates.asap(forceUpdateIfMounted, this);

	  var name = props.name;
	  if (props.type === 'radio' && name != null) {
	    var rootNode = ReactMount.getNode(this._rootNodeID);
	    var queryRoot = rootNode;

	    while (queryRoot.parentNode) {
	      queryRoot = queryRoot.parentNode;
	    }

	    // If `rootNode.form` was non-null, then we could try `form.elements`,
	    // but that sometimes behaves strangely in IE8. We could also try using
	    // `form.getElementsByName`, but that will only return direct children
	    // and won't include inputs that use the HTML5 `form=` attribute. Since
	    // the input might not even be in a form, let's just use the global
	    // `querySelectorAll` to ensure we don't miss anything.
	    var group = queryRoot.querySelectorAll('input[name=' + JSON.stringify('' + name) + '][type="radio"]');

	    for (var i = 0; i < group.length; i++) {
	      var otherNode = group[i];
	      if (otherNode === rootNode || otherNode.form !== rootNode.form) {
	        continue;
	      }
	      // This will throw if radio buttons rendered by different copies of React
	      // and the same name are rendered into the same form (same as #1939).
	      // That's probably okay; we don't support it just as we don't support
	      // mixing React with non-React.
	      var otherID = ReactMount.getID(otherNode);
	      !otherID ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactDOMInput: Mixing React and non-React radio inputs with the ' + 'same `name` is not supported.') : invariant(false) : undefined;
	      var otherInstance = instancesByReactID[otherID];
	      !otherInstance ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactDOMInput: Unknown radio button ID %s.', otherID) : invariant(false) : undefined;
	      // If this is a controlled radio button group, forcing the input that
	      // was previously checked to update will cause it to be come re-checked
	      // as appropriate.
	      ReactUpdates.asap(forceUpdateIfMounted, otherInstance);
	    }
	  }

	  return returnValue;
	}

	module.exports = ReactDOMInput;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule LinkedValueUtils
	 * @typechecks static-only
	 */

	'use strict';

	var ReactPropTypes = __webpack_require__(108);
	var ReactPropTypeLocations = __webpack_require__(66);

	var invariant = __webpack_require__(14);
	var warning = __webpack_require__(26);

	var hasReadOnlyValue = {
	  'button': true,
	  'checkbox': true,
	  'image': true,
	  'hidden': true,
	  'radio': true,
	  'reset': true,
	  'submit': true
	};

	function _assertSingleLink(inputProps) {
	  !(inputProps.checkedLink == null || inputProps.valueLink == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Cannot provide a checkedLink and a valueLink. If you want to use ' + 'checkedLink, you probably don\'t want to use valueLink and vice versa.') : invariant(false) : undefined;
	}
	function _assertValueLink(inputProps) {
	  _assertSingleLink(inputProps);
	  !(inputProps.value == null && inputProps.onChange == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Cannot provide a valueLink and a value or onChange event. If you want ' + 'to use value or onChange, you probably don\'t want to use valueLink.') : invariant(false) : undefined;
	}

	function _assertCheckedLink(inputProps) {
	  _assertSingleLink(inputProps);
	  !(inputProps.checked == null && inputProps.onChange == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Cannot provide a checkedLink and a checked property or onChange event. ' + 'If you want to use checked or onChange, you probably don\'t want to ' + 'use checkedLink') : invariant(false) : undefined;
	}

	var propTypes = {
	  value: function value(props, propName, componentName) {
	    if (!props[propName] || hasReadOnlyValue[props.type] || props.onChange || props.readOnly || props.disabled) {
	      return null;
	    }
	    return new Error('You provided a `value` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultValue`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
	  },
	  checked: function checked(props, propName, componentName) {
	    if (!props[propName] || props.onChange || props.readOnly || props.disabled) {
	      return null;
	    }
	    return new Error('You provided a `checked` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultChecked`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
	  },
	  onChange: ReactPropTypes.func
	};

	var loggedTypeFailures = {};
	function getDeclarationErrorAddendum(owner) {
	  if (owner) {
	    var name = owner.getName();
	    if (name) {
	      return ' Check the render method of `' + name + '`.';
	    }
	  }
	  return '';
	}

	/**
	 * Provide a linked `value` attribute for controlled forms. You should not use
	 * this outside of the ReactDOM controlled form components.
	 */
	var LinkedValueUtils = {
	  checkPropTypes: function checkPropTypes(tagName, props, owner) {
	    for (var propName in propTypes) {
	      if (propTypes.hasOwnProperty(propName)) {
	        var error = propTypes[propName](props, propName, tagName, ReactPropTypeLocations.prop);
	      }
	      if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	        // Only monitor this failure once because there tends to be a lot of the
	        // same error.
	        loggedTypeFailures[error.message] = true;

	        var addendum = getDeclarationErrorAddendum(owner);
	        process.env.NODE_ENV !== 'production' ? warning(false, 'Failed form propType: %s%s', error.message, addendum) : undefined;
	      }
	    }
	  },

	  /**
	   * @param {object} inputProps Props for form component
	   * @return {*} current value of the input either from value prop or link.
	   */
	  getValue: function getValue(inputProps) {
	    if (inputProps.valueLink) {
	      _assertValueLink(inputProps);
	      return inputProps.valueLink.value;
	    }
	    return inputProps.value;
	  },

	  /**
	   * @param {object} inputProps Props for form component
	   * @return {*} current checked status of the input either from checked prop
	   *             or link.
	   */
	  getChecked: function getChecked(inputProps) {
	    if (inputProps.checkedLink) {
	      _assertCheckedLink(inputProps);
	      return inputProps.checkedLink.value;
	    }
	    return inputProps.checked;
	  },

	  /**
	   * @param {object} inputProps Props for form component
	   * @param {SyntheticEvent} event change event to handle
	   */
	  executeOnChange: function executeOnChange(inputProps, event) {
	    if (inputProps.valueLink) {
	      _assertValueLink(inputProps);
	      return inputProps.valueLink.requestChange(event.target.value);
	    } else if (inputProps.checkedLink) {
	      _assertCheckedLink(inputProps);
	      return inputProps.checkedLink.requestChange(event.target.checked);
	    } else if (inputProps.onChange) {
	      return inputProps.onChange.call(undefined, event);
	    }
	  }
	};

	module.exports = LinkedValueUtils;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactPropTypes
	 */

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var ReactElement = __webpack_require__(43);
	var ReactPropTypeLocationNames = __webpack_require__(67);

	var emptyFunction = __webpack_require__(16);
	var getIteratorFn = __webpack_require__(109);

	/**
	 * Collection of methods that allow declaration and validation of props that are
	 * supplied to React components. Example usage:
	 *
	 *   var Props = require('ReactPropTypes');
	 *   var MyArticle = React.createClass({
	 *     propTypes: {
	 *       // An optional string prop named "description".
	 *       description: Props.string,
	 *
	 *       // A required enum prop named "category".
	 *       category: Props.oneOf(['News','Photos']).isRequired,
	 *
	 *       // A prop named "dialog" that requires an instance of Dialog.
	 *       dialog: Props.instanceOf(Dialog).isRequired
	 *     },
	 *     render: function() { ... }
	 *   });
	 *
	 * A more formal specification of how these methods are used:
	 *
	 *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	 *   decl := ReactPropTypes.{type}(.isRequired)?
	 *
	 * Each and every declaration produces a function with the same signature. This
	 * allows the creation of custom validation functions. For example:
	 *
	 *  var MyLink = React.createClass({
	 *    propTypes: {
	 *      // An optional string or URI prop named "href".
	 *      href: function(props, propName, componentName) {
	 *        var propValue = props[propName];
	 *        if (propValue != null && typeof propValue !== 'string' &&
	 *            !(propValue instanceof URI)) {
	 *          return new Error(
	 *            'Expected a string or an URI for ' + propName + ' in ' +
	 *            componentName
	 *          );
	 *        }
	 *      }
	 *    },
	 *    render: function() {...}
	 *  });
	 *
	 * @internal
	 */

	var ANONYMOUS = '<<anonymous>>';

	var ReactPropTypes = {
	  array: createPrimitiveTypeChecker('array'),
	  bool: createPrimitiveTypeChecker('boolean'),
	  func: createPrimitiveTypeChecker('function'),
	  number: createPrimitiveTypeChecker('number'),
	  object: createPrimitiveTypeChecker('object'),
	  string: createPrimitiveTypeChecker('string'),

	  any: createAnyTypeChecker(),
	  arrayOf: createArrayOfTypeChecker,
	  element: createElementTypeChecker(),
	  instanceOf: createInstanceTypeChecker,
	  node: createNodeChecker(),
	  objectOf: createObjectOfTypeChecker,
	  oneOf: createEnumTypeChecker,
	  oneOfType: createUnionTypeChecker,
	  shape: createShapeTypeChecker
	};

	function createChainableTypeChecker(validate) {
	  function checkType(isRequired, props, propName, componentName, location, propFullName) {
	    componentName = componentName || ANONYMOUS;
	    propFullName = propFullName || propName;
	    if (props[propName] == null) {
	      var locationName = ReactPropTypeLocationNames[location];
	      if (isRequired) {
	        return new Error('Required ' + locationName + ' `' + propFullName + '` was not specified in ' + ('`' + componentName + '`.'));
	      }
	      return null;
	    } else {
	      return validate(props, propName, componentName, location, propFullName);
	    }
	  }

	  var chainedCheckType = checkType.bind(null, false);
	  chainedCheckType.isRequired = checkType.bind(null, true);

	  return chainedCheckType;
	}

	function createPrimitiveTypeChecker(expectedType) {
	  function validate(props, propName, componentName, location, propFullName) {
	    var propValue = props[propName];
	    var propType = getPropType(propValue);
	    if (propType !== expectedType) {
	      var locationName = ReactPropTypeLocationNames[location];
	      // `propValue` being instance of, say, date/regexp, pass the 'object'
	      // check, but we can offer a more precise error message here rather than
	      // 'of type `object`'.
	      var preciseType = getPreciseType(propValue);

	      return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createAnyTypeChecker() {
	  return createChainableTypeChecker(emptyFunction.thatReturns(null));
	}

	function createArrayOfTypeChecker(typeChecker) {
	  function validate(props, propName, componentName, location, propFullName) {
	    var propValue = props[propName];
	    if (!Array.isArray(propValue)) {
	      var locationName = ReactPropTypeLocationNames[location];
	      var propType = getPropType(propValue);
	      return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	    }
	    for (var i = 0; i < propValue.length; i++) {
	      var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']');
	      if (error instanceof Error) {
	        return error;
	      }
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createElementTypeChecker() {
	  function validate(props, propName, componentName, location, propFullName) {
	    if (!ReactElement.isValidElement(props[propName])) {
	      var locationName = ReactPropTypeLocationNames[location];
	      return new Error('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a single ReactElement.'));
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createInstanceTypeChecker(expectedClass) {
	  function validate(props, propName, componentName, location, propFullName) {
	    if (!(props[propName] instanceof expectedClass)) {
	      var locationName = ReactPropTypeLocationNames[location];
	      var expectedClassName = expectedClass.name || ANONYMOUS;
	      var actualClassName = getClassName(props[propName]);
	      return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createEnumTypeChecker(expectedValues) {
	  if (!Array.isArray(expectedValues)) {
	    return createChainableTypeChecker(function () {
	      return new Error('Invalid argument supplied to oneOf, expected an instance of array.');
	    });
	  }

	  function validate(props, propName, componentName, location, propFullName) {
	    var propValue = props[propName];
	    for (var i = 0; i < expectedValues.length; i++) {
	      if (propValue === expectedValues[i]) {
	        return null;
	      }
	    }

	    var locationName = ReactPropTypeLocationNames[location];
	    var valuesString = JSON.stringify(expectedValues);
	    return new Error('Invalid ' + locationName + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	  }
	  return createChainableTypeChecker(validate);
	}

	function createObjectOfTypeChecker(typeChecker) {
	  function validate(props, propName, componentName, location, propFullName) {
	    var propValue = props[propName];
	    var propType = getPropType(propValue);
	    if (propType !== 'object') {
	      var locationName = ReactPropTypeLocationNames[location];
	      return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	    }
	    for (var key in propValue) {
	      if (propValue.hasOwnProperty(key)) {
	        var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createUnionTypeChecker(arrayOfTypeCheckers) {
	  if (!Array.isArray(arrayOfTypeCheckers)) {
	    return createChainableTypeChecker(function () {
	      return new Error('Invalid argument supplied to oneOfType, expected an instance of array.');
	    });
	  }

	  function validate(props, propName, componentName, location, propFullName) {
	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (checker(props, propName, componentName, location, propFullName) == null) {
	        return null;
	      }
	    }

	    var locationName = ReactPropTypeLocationNames[location];
	    return new Error('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	  }
	  return createChainableTypeChecker(validate);
	}

	function createNodeChecker() {
	  function validate(props, propName, componentName, location, propFullName) {
	    if (!isNode(props[propName])) {
	      var locationName = ReactPropTypeLocationNames[location];
	      return new Error('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createShapeTypeChecker(shapeTypes) {
	  function validate(props, propName, componentName, location, propFullName) {
	    var propValue = props[propName];
	    var propType = getPropType(propValue);
	    if (propType !== 'object') {
	      var locationName = ReactPropTypeLocationNames[location];
	      return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	    }
	    for (var key in shapeTypes) {
	      var checker = shapeTypes[key];
	      if (!checker) {
	        continue;
	      }
	      var error = checker(propValue, key, componentName, location, propFullName + '.' + key);
	      if (error) {
	        return error;
	      }
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function isNode(propValue) {
	  switch (typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue)) {
	    case 'number':
	    case 'string':
	    case 'undefined':
	      return true;
	    case 'boolean':
	      return !propValue;
	    case 'object':
	      if (Array.isArray(propValue)) {
	        return propValue.every(isNode);
	      }
	      if (propValue === null || ReactElement.isValidElement(propValue)) {
	        return true;
	      }

	      var iteratorFn = getIteratorFn(propValue);
	      if (iteratorFn) {
	        var iterator = iteratorFn.call(propValue);
	        var step;
	        if (iteratorFn !== propValue.entries) {
	          while (!(step = iterator.next()).done) {
	            if (!isNode(step.value)) {
	              return false;
	            }
	          }
	        } else {
	          // Iterator will provide entry [k,v] tuples rather than values.
	          while (!(step = iterator.next()).done) {
	            var entry = step.value;
	            if (entry) {
	              if (!isNode(entry[1])) {
	                return false;
	              }
	            }
	          }
	        }
	      } else {
	        return false;
	      }

	      return true;
	    default:
	      return false;
	  }
	}

	// Equivalent of `typeof` but with special handling for array and regexp.
	function getPropType(propValue) {
	  var propType = typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue);
	  if (Array.isArray(propValue)) {
	    return 'array';
	  }
	  if (propValue instanceof RegExp) {
	    // Old webkits (at least until Android 4.0) return 'function' rather than
	    // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	    // passes PropTypes.object.
	    return 'object';
	  }
	  return propType;
	}

	// This handles more types than `getPropType`. Only used for error messages.
	// See `createPrimitiveTypeChecker`.
	function getPreciseType(propValue) {
	  var propType = getPropType(propValue);
	  if (propType === 'object') {
	    if (propValue instanceof Date) {
	      return 'date';
	    } else if (propValue instanceof RegExp) {
	      return 'regexp';
	    }
	  }
	  return propType;
	}

	// Returns class name of the object, if any.
	function getClassName(propValue) {
	  if (!propValue.constructor || !propValue.constructor.name) {
	    return '<<anonymous>>';
	  }
	  return propValue.constructor.name;
	}

	module.exports = ReactPropTypes;

/***/ },
/* 109 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getIteratorFn
	 * @typechecks static-only
	 */

	'use strict';

	/* global Symbol */

	var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	/**
	 * Returns the iterator method function contained on the iterable object.
	 *
	 * Be sure to invoke the function with the iterable as context:
	 *
	 *     var iteratorFn = getIteratorFn(myIterable);
	 *     if (iteratorFn) {
	 *       var iterator = iteratorFn.call(myIterable);
	 *       ...
	 *     }
	 *
	 * @param {?object} maybeIterable
	 * @return {?function}
	 */
	function getIteratorFn(maybeIterable) {
	  var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	  if (typeof iteratorFn === 'function') {
	    return iteratorFn;
	  }
	}

	module.exports = getIteratorFn;

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMOption
	 */

	'use strict';

	var ReactChildren = __webpack_require__(111);
	var ReactDOMSelect = __webpack_require__(113);

	var assign = __webpack_require__(40);
	var warning = __webpack_require__(26);

	var valueContextKey = ReactDOMSelect.valueContextKey;

	/**
	 * Implements an <option> native component that warns when `selected` is set.
	 */
	var ReactDOMOption = {
	  mountWrapper: function mountWrapper(inst, props, context) {
	    // TODO (yungsters): Remove support for `selected` in <option>.
	    if (process.env.NODE_ENV !== 'production') {
	      process.env.NODE_ENV !== 'production' ? warning(props.selected == null, 'Use the `defaultValue` or `value` props on <select> instead of ' + 'setting `selected` on <option>.') : undefined;
	    }

	    // Look up whether this option is 'selected' via context
	    var selectValue = context[valueContextKey];

	    // If context key is null (e.g., no specified value or after initial mount)
	    // or missing (e.g., for <datalist>), we don't change props.selected
	    var selected = null;
	    if (selectValue != null) {
	      selected = false;
	      if (Array.isArray(selectValue)) {
	        // multiple
	        for (var i = 0; i < selectValue.length; i++) {
	          if ('' + selectValue[i] === '' + props.value) {
	            selected = true;
	            break;
	          }
	        }
	      } else {
	        selected = '' + selectValue === '' + props.value;
	      }
	    }

	    inst._wrapperState = { selected: selected };
	  },

	  getNativeProps: function getNativeProps(inst, props, context) {
	    var nativeProps = assign({ selected: undefined, children: undefined }, props);

	    // Read state only from initial mount because <select> updates value
	    // manually; we need the initial state only for server rendering
	    if (inst._wrapperState.selected != null) {
	      nativeProps.selected = inst._wrapperState.selected;
	    }

	    var content = '';

	    // Flatten children and warn if they aren't strings or numbers;
	    // invalid types are ignored.
	    ReactChildren.forEach(props.children, function (child) {
	      if (child == null) {
	        return;
	      }
	      if (typeof child === 'string' || typeof child === 'number') {
	        content += child;
	      } else {
	        process.env.NODE_ENV !== 'production' ? warning(false, 'Only strings and numbers are supported as <option> children.') : undefined;
	      }
	    });

	    if (content) {
	      nativeProps.children = content;
	    }

	    return nativeProps;
	  }

	};

	module.exports = ReactDOMOption;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactChildren
	 */

	'use strict';

	var PooledClass = __webpack_require__(57);
	var ReactElement = __webpack_require__(43);

	var emptyFunction = __webpack_require__(16);
	var traverseAllChildren = __webpack_require__(112);

	var twoArgumentPooler = PooledClass.twoArgumentPooler;
	var fourArgumentPooler = PooledClass.fourArgumentPooler;

	var userProvidedKeyEscapeRegex = /\/(?!\/)/g;
	function escapeUserProvidedKey(text) {
	  return ('' + text).replace(userProvidedKeyEscapeRegex, '//');
	}

	/**
	 * PooledClass representing the bookkeeping associated with performing a child
	 * traversal. Allows avoiding binding callbacks.
	 *
	 * @constructor ForEachBookKeeping
	 * @param {!function} forEachFunction Function to perform traversal with.
	 * @param {?*} forEachContext Context to perform context with.
	 */
	function ForEachBookKeeping(forEachFunction, forEachContext) {
	  this.func = forEachFunction;
	  this.context = forEachContext;
	  this.count = 0;
	}
	ForEachBookKeeping.prototype.destructor = function () {
	  this.func = null;
	  this.context = null;
	  this.count = 0;
	};
	PooledClass.addPoolingTo(ForEachBookKeeping, twoArgumentPooler);

	function forEachSingleChild(bookKeeping, child, name) {
	  var func = bookKeeping.func;
	  var context = bookKeeping.context;

	  func.call(context, child, bookKeeping.count++);
	}

	/**
	 * Iterates through children that are typically specified as `props.children`.
	 *
	 * The provided forEachFunc(child, index) will be called for each
	 * leaf child.
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} forEachFunc
	 * @param {*} forEachContext Context for forEachContext.
	 */
	function forEachChildren(children, forEachFunc, forEachContext) {
	  if (children == null) {
	    return children;
	  }
	  var traverseContext = ForEachBookKeeping.getPooled(forEachFunc, forEachContext);
	  traverseAllChildren(children, forEachSingleChild, traverseContext);
	  ForEachBookKeeping.release(traverseContext);
	}

	/**
	 * PooledClass representing the bookkeeping associated with performing a child
	 * mapping. Allows avoiding binding callbacks.
	 *
	 * @constructor MapBookKeeping
	 * @param {!*} mapResult Object containing the ordered map of results.
	 * @param {!function} mapFunction Function to perform mapping with.
	 * @param {?*} mapContext Context to perform mapping with.
	 */
	function MapBookKeeping(mapResult, keyPrefix, mapFunction, mapContext) {
	  this.result = mapResult;
	  this.keyPrefix = keyPrefix;
	  this.func = mapFunction;
	  this.context = mapContext;
	  this.count = 0;
	}
	MapBookKeeping.prototype.destructor = function () {
	  this.result = null;
	  this.keyPrefix = null;
	  this.func = null;
	  this.context = null;
	  this.count = 0;
	};
	PooledClass.addPoolingTo(MapBookKeeping, fourArgumentPooler);

	function mapSingleChildIntoContext(bookKeeping, child, childKey) {
	  var result = bookKeeping.result;
	  var keyPrefix = bookKeeping.keyPrefix;
	  var func = bookKeeping.func;
	  var context = bookKeeping.context;

	  var mappedChild = func.call(context, child, bookKeeping.count++);
	  if (Array.isArray(mappedChild)) {
	    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, emptyFunction.thatReturnsArgument);
	  } else if (mappedChild != null) {
	    if (ReactElement.isValidElement(mappedChild)) {
	      mappedChild = ReactElement.cloneAndReplaceKey(mappedChild,
	      // Keep both the (mapped) and old keys if they differ, just as
	      // traverseAllChildren used to do for objects as children
	      keyPrefix + (mappedChild !== child ? escapeUserProvidedKey(mappedChild.key || '') + '/' : '') + childKey);
	    }
	    result.push(mappedChild);
	  }
	}

	function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
	  var escapedPrefix = '';
	  if (prefix != null) {
	    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
	  }
	  var traverseContext = MapBookKeeping.getPooled(array, escapedPrefix, func, context);
	  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
	  MapBookKeeping.release(traverseContext);
	}

	/**
	 * Maps children that are typically specified as `props.children`.
	 *
	 * The provided mapFunction(child, key, index) will be called for each
	 * leaf child.
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} func The map function.
	 * @param {*} context Context for mapFunction.
	 * @return {object} Object containing the ordered map of results.
	 */
	function mapChildren(children, func, context) {
	  if (children == null) {
	    return children;
	  }
	  var result = [];
	  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
	  return result;
	}

	function forEachSingleChildDummy(traverseContext, child, name) {
	  return null;
	}

	/**
	 * Count the number of children that are typically specified as
	 * `props.children`.
	 *
	 * @param {?*} children Children tree container.
	 * @return {number} The number of children.
	 */
	function countChildren(children, context) {
	  return traverseAllChildren(children, forEachSingleChildDummy, null);
	}

	/**
	 * Flatten a children object (typically specified as `props.children`) and
	 * return an array with appropriately re-keyed children.
	 */
	function toArray(children) {
	  var result = [];
	  mapIntoWithKeyPrefixInternal(children, result, null, emptyFunction.thatReturnsArgument);
	  return result;
	}

	var ReactChildren = {
	  forEach: forEachChildren,
	  map: mapChildren,
	  mapIntoWithKeyPrefixInternal: mapIntoWithKeyPrefixInternal,
	  count: countChildren,
	  toArray: toArray
	};

	module.exports = ReactChildren;

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule traverseAllChildren
	 */

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var ReactCurrentOwner = __webpack_require__(6);
	var ReactElement = __webpack_require__(43);
	var ReactInstanceHandles = __webpack_require__(46);

	var getIteratorFn = __webpack_require__(109);
	var invariant = __webpack_require__(14);
	var warning = __webpack_require__(26);

	var SEPARATOR = ReactInstanceHandles.SEPARATOR;
	var SUBSEPARATOR = ':';

	/**
	 * TODO: Test that a single child and an array with one item have the same key
	 * pattern.
	 */

	var userProvidedKeyEscaperLookup = {
	  '=': '=0',
	  '.': '=1',
	  ':': '=2'
	};

	var userProvidedKeyEscapeRegex = /[=.:]/g;

	var didWarnAboutMaps = false;

	function userProvidedKeyEscaper(match) {
	  return userProvidedKeyEscaperLookup[match];
	}

	/**
	 * Generate a key string that identifies a component within a set.
	 *
	 * @param {*} component A component that could contain a manual key.
	 * @param {number} index Index that is used if a manual key is not provided.
	 * @return {string}
	 */
	function getComponentKey(component, index) {
	  if (component && component.key != null) {
	    // Explicit key
	    return wrapUserProvidedKey(component.key);
	  }
	  // Implicit key determined by the index in the set
	  return index.toString(36);
	}

	/**
	 * Escape a component key so that it is safe to use in a reactid.
	 *
	 * @param {*} text Component key to be escaped.
	 * @return {string} An escaped string.
	 */
	function escapeUserProvidedKey(text) {
	  return ('' + text).replace(userProvidedKeyEscapeRegex, userProvidedKeyEscaper);
	}

	/**
	 * Wrap a `key` value explicitly provided by the user to distinguish it from
	 * implicitly-generated keys generated by a component's index in its parent.
	 *
	 * @param {string} key Value of a user-provided `key` attribute
	 * @return {string}
	 */
	function wrapUserProvidedKey(key) {
	  return '$' + escapeUserProvidedKey(key);
	}

	/**
	 * @param {?*} children Children tree container.
	 * @param {!string} nameSoFar Name of the key path so far.
	 * @param {!function} callback Callback to invoke with each child found.
	 * @param {?*} traverseContext Used to pass information throughout the traversal
	 * process.
	 * @return {!number} The number of children in this subtree.
	 */
	function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
	  var type = typeof children === 'undefined' ? 'undefined' : _typeof(children);

	  if (type === 'undefined' || type === 'boolean') {
	    // All of the above are perceived as null.
	    children = null;
	  }

	  if (children === null || type === 'string' || type === 'number' || ReactElement.isValidElement(children)) {
	    callback(traverseContext, children,
	    // If it's the only child, treat the name as if it was wrapped in an array
	    // so that it's consistent if the number of children grows.
	    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
	    return 1;
	  }

	  var child;
	  var nextName;
	  var subtreeCount = 0; // Count of children found in the current subtree.
	  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

	  if (Array.isArray(children)) {
	    for (var i = 0; i < children.length; i++) {
	      child = children[i];
	      nextName = nextNamePrefix + getComponentKey(child, i);
	      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	    }
	  } else {
	    var iteratorFn = getIteratorFn(children);
	    if (iteratorFn) {
	      var iterator = iteratorFn.call(children);
	      var step;
	      if (iteratorFn !== children.entries) {
	        var ii = 0;
	        while (!(step = iterator.next()).done) {
	          child = step.value;
	          nextName = nextNamePrefix + getComponentKey(child, ii++);
	          subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	        }
	      } else {
	        if (process.env.NODE_ENV !== 'production') {
	          process.env.NODE_ENV !== 'production' ? warning(didWarnAboutMaps, 'Using Maps as children is not yet fully supported. It is an ' + 'experimental feature that might be removed. Convert it to a ' + 'sequence / iterable of keyed ReactElements instead.') : undefined;
	          didWarnAboutMaps = true;
	        }
	        // Iterator will provide entry [k,v] tuples rather than values.
	        while (!(step = iterator.next()).done) {
	          var entry = step.value;
	          if (entry) {
	            child = entry[1];
	            nextName = nextNamePrefix + wrapUserProvidedKey(entry[0]) + SUBSEPARATOR + getComponentKey(child, 0);
	            subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	          }
	        }
	      }
	    } else if (type === 'object') {
	      var addendum = '';
	      if (process.env.NODE_ENV !== 'production') {
	        addendum = ' If you meant to render a collection of children, use an array ' + 'instead or wrap the object using createFragment(object) from the ' + 'React add-ons.';
	        if (children._isReactElement) {
	          addendum = ' It looks like you\'re using an element created by a different ' + 'version of React. Make sure to use only one copy of React.';
	        }
	        if (ReactCurrentOwner.current) {
	          var name = ReactCurrentOwner.current.getName();
	          if (name) {
	            addendum += ' Check the render method of `' + name + '`.';
	          }
	        }
	      }
	      var childrenString = String(children);
	       true ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : invariant(false) : undefined;
	    }
	  }

	  return subtreeCount;
	}

	/**
	 * Traverses children that are typically specified as `props.children`, but
	 * might also be specified through attributes:
	 *
	 * - `traverseAllChildren(this.props.children, ...)`
	 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
	 *
	 * The `traverseContext` is an optional argument that is passed through the
	 * entire traversal. It can be used to store accumulations or anything else that
	 * the callback might find relevant.
	 *
	 * @param {?*} children Children tree object.
	 * @param {!function} callback To invoke upon traversing each child.
	 * @param {?*} traverseContext Context for traversal.
	 * @return {!number} The number of children in this subtree.
	 */
	function traverseAllChildren(children, callback, traverseContext) {
	  if (children == null) {
	    return 0;
	  }

	  return traverseAllChildrenImpl(children, '', callback, traverseContext);
	}

	module.exports = traverseAllChildren;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMSelect
	 */

	'use strict';

	var LinkedValueUtils = __webpack_require__(107);
	var ReactMount = __webpack_require__(29);
	var ReactUpdates = __webpack_require__(55);

	var assign = __webpack_require__(40);
	var warning = __webpack_require__(26);

	var valueContextKey = '__ReactDOMSelect_value$' + Math.random().toString(36).slice(2);

	function updateOptionsIfPendingUpdateAndMounted() {
	  if (this._rootNodeID && this._wrapperState.pendingUpdate) {
	    this._wrapperState.pendingUpdate = false;

	    var props = this._currentElement.props;
	    var value = LinkedValueUtils.getValue(props);

	    if (value != null) {
	      updateOptions(this, Boolean(props.multiple), value);
	    }
	  }
	}

	function getDeclarationErrorAddendum(owner) {
	  if (owner) {
	    var name = owner.getName();
	    if (name) {
	      return ' Check the render method of `' + name + '`.';
	    }
	  }
	  return '';
	}

	var valuePropNames = ['value', 'defaultValue'];

	/**
	 * Validation function for `value` and `defaultValue`.
	 * @private
	 */
	function checkSelectPropTypes(inst, props) {
	  var owner = inst._currentElement._owner;
	  LinkedValueUtils.checkPropTypes('select', props, owner);

	  for (var i = 0; i < valuePropNames.length; i++) {
	    var propName = valuePropNames[i];
	    if (props[propName] == null) {
	      continue;
	    }
	    if (props.multiple) {
	      process.env.NODE_ENV !== 'production' ? warning(Array.isArray(props[propName]), 'The `%s` prop supplied to <select> must be an array if ' + '`multiple` is true.%s', propName, getDeclarationErrorAddendum(owner)) : undefined;
	    } else {
	      process.env.NODE_ENV !== 'production' ? warning(!Array.isArray(props[propName]), 'The `%s` prop supplied to <select> must be a scalar ' + 'value if `multiple` is false.%s', propName, getDeclarationErrorAddendum(owner)) : undefined;
	    }
	  }
	}

	/**
	 * @param {ReactDOMComponent} inst
	 * @param {boolean} multiple
	 * @param {*} propValue A stringable (with `multiple`, a list of stringables).
	 * @private
	 */
	function updateOptions(inst, multiple, propValue) {
	  var selectedValue, i;
	  var options = ReactMount.getNode(inst._rootNodeID).options;

	  if (multiple) {
	    selectedValue = {};
	    for (i = 0; i < propValue.length; i++) {
	      selectedValue['' + propValue[i]] = true;
	    }
	    for (i = 0; i < options.length; i++) {
	      var selected = selectedValue.hasOwnProperty(options[i].value);
	      if (options[i].selected !== selected) {
	        options[i].selected = selected;
	      }
	    }
	  } else {
	    // Do not set `select.value` as exact behavior isn't consistent across all
	    // browsers for all cases.
	    selectedValue = '' + propValue;
	    for (i = 0; i < options.length; i++) {
	      if (options[i].value === selectedValue) {
	        options[i].selected = true;
	        return;
	      }
	    }
	    if (options.length) {
	      options[0].selected = true;
	    }
	  }
	}

	/**
	 * Implements a <select> native component that allows optionally setting the
	 * props `value` and `defaultValue`. If `multiple` is false, the prop must be a
	 * stringable. If `multiple` is true, the prop must be an array of stringables.
	 *
	 * If `value` is not supplied (or null/undefined), user actions that change the
	 * selected option will trigger updates to the rendered options.
	 *
	 * If it is supplied (and not null/undefined), the rendered options will not
	 * update in response to user actions. Instead, the `value` prop must change in
	 * order for the rendered options to update.
	 *
	 * If `defaultValue` is provided, any options with the supplied values will be
	 * selected.
	 */
	var ReactDOMSelect = {
	  valueContextKey: valueContextKey,

	  getNativeProps: function getNativeProps(inst, props, context) {
	    return assign({}, props, {
	      onChange: inst._wrapperState.onChange,
	      value: undefined
	    });
	  },

	  mountWrapper: function mountWrapper(inst, props) {
	    if (process.env.NODE_ENV !== 'production') {
	      checkSelectPropTypes(inst, props);
	    }

	    var value = LinkedValueUtils.getValue(props);
	    inst._wrapperState = {
	      pendingUpdate: false,
	      initialValue: value != null ? value : props.defaultValue,
	      onChange: _handleChange.bind(inst),
	      wasMultiple: Boolean(props.multiple)
	    };
	  },

	  processChildContext: function processChildContext(inst, props, context) {
	    // Pass down initial value so initial generated markup has correct
	    // `selected` attributes
	    var childContext = assign({}, context);
	    childContext[valueContextKey] = inst._wrapperState.initialValue;
	    return childContext;
	  },

	  postUpdateWrapper: function postUpdateWrapper(inst) {
	    var props = inst._currentElement.props;

	    // After the initial mount, we control selected-ness manually so don't pass
	    // the context value down
	    inst._wrapperState.initialValue = undefined;

	    var wasMultiple = inst._wrapperState.wasMultiple;
	    inst._wrapperState.wasMultiple = Boolean(props.multiple);

	    var value = LinkedValueUtils.getValue(props);
	    if (value != null) {
	      inst._wrapperState.pendingUpdate = false;
	      updateOptions(inst, Boolean(props.multiple), value);
	    } else if (wasMultiple !== Boolean(props.multiple)) {
	      // For simplicity, reapply `defaultValue` if `multiple` is toggled.
	      if (props.defaultValue != null) {
	        updateOptions(inst, Boolean(props.multiple), props.defaultValue);
	      } else {
	        // Revert the select back to its default unselected state.
	        updateOptions(inst, Boolean(props.multiple), props.multiple ? [] : '');
	      }
	    }
	  }
	};

	function _handleChange(event) {
	  var props = this._currentElement.props;
	  var returnValue = LinkedValueUtils.executeOnChange(props, event);

	  this._wrapperState.pendingUpdate = true;
	  ReactUpdates.asap(updateOptionsIfPendingUpdateAndMounted, this);
	  return returnValue;
	}

	module.exports = ReactDOMSelect;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMTextarea
	 */

	'use strict';

	var LinkedValueUtils = __webpack_require__(107);
	var ReactDOMIDOperations = __webpack_require__(28);
	var ReactUpdates = __webpack_require__(55);

	var assign = __webpack_require__(40);
	var invariant = __webpack_require__(14);
	var warning = __webpack_require__(26);

	function forceUpdateIfMounted() {
	  if (this._rootNodeID) {
	    // DOM component is still mounted; update
	    ReactDOMTextarea.updateWrapper(this);
	  }
	}

	/**
	 * Implements a <textarea> native component that allows setting `value`, and
	 * `defaultValue`. This differs from the traditional DOM API because value is
	 * usually set as PCDATA children.
	 *
	 * If `value` is not supplied (or null/undefined), user actions that affect the
	 * value will trigger updates to the element.
	 *
	 * If `value` is supplied (and not null/undefined), the rendered element will
	 * not trigger updates to the element. Instead, the `value` prop must change in
	 * order for the rendered element to be updated.
	 *
	 * The rendered element will be initialized with an empty value, the prop
	 * `defaultValue` if specified, or the children content (deprecated).
	 */
	var ReactDOMTextarea = {
	  getNativeProps: function getNativeProps(inst, props, context) {
	    !(props.dangerouslySetInnerHTML == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, '`dangerouslySetInnerHTML` does not make sense on <textarea>.') : invariant(false) : undefined;

	    // Always set children to the same thing. In IE9, the selection range will
	    // get reset if `textContent` is mutated.
	    var nativeProps = assign({}, props, {
	      defaultValue: undefined,
	      value: undefined,
	      children: inst._wrapperState.initialValue,
	      onChange: inst._wrapperState.onChange
	    });

	    return nativeProps;
	  },

	  mountWrapper: function mountWrapper(inst, props) {
	    if (process.env.NODE_ENV !== 'production') {
	      LinkedValueUtils.checkPropTypes('textarea', props, inst._currentElement._owner);
	    }

	    var defaultValue = props.defaultValue;
	    // TODO (yungsters): Remove support for children content in <textarea>.
	    var children = props.children;
	    if (children != null) {
	      if (process.env.NODE_ENV !== 'production') {
	        process.env.NODE_ENV !== 'production' ? warning(false, 'Use the `defaultValue` or `value` props instead of setting ' + 'children on <textarea>.') : undefined;
	      }
	      !(defaultValue == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'If you supply `defaultValue` on a <textarea>, do not pass children.') : invariant(false) : undefined;
	      if (Array.isArray(children)) {
	        !(children.length <= 1) ? process.env.NODE_ENV !== 'production' ? invariant(false, '<textarea> can only have at most one child.') : invariant(false) : undefined;
	        children = children[0];
	      }

	      defaultValue = '' + children;
	    }
	    if (defaultValue == null) {
	      defaultValue = '';
	    }
	    var value = LinkedValueUtils.getValue(props);

	    inst._wrapperState = {
	      // We save the initial value so that `ReactDOMComponent` doesn't update
	      // `textContent` (unnecessary since we update value).
	      // The initial value can be a boolean or object so that's why it's
	      // forced to be a string.
	      initialValue: '' + (value != null ? value : defaultValue),
	      onChange: _handleChange.bind(inst)
	    };
	  },

	  updateWrapper: function updateWrapper(inst) {
	    var props = inst._currentElement.props;
	    var value = LinkedValueUtils.getValue(props);
	    if (value != null) {
	      // Cast `value` to a string to ensure the value is set correctly. While
	      // browsers typically do this as necessary, jsdom doesn't.
	      ReactDOMIDOperations.updatePropertyByID(inst._rootNodeID, 'value', '' + value);
	    }
	  }
	};

	function _handleChange(event) {
	  var props = this._currentElement.props;
	  var returnValue = LinkedValueUtils.executeOnChange(props, event);
	  ReactUpdates.asap(forceUpdateIfMounted, this);
	  return returnValue;
	}

	module.exports = ReactDOMTextarea;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactMultiChild
	 * @typechecks static-only
	 */

	'use strict';

	var ReactComponentEnvironment = __webpack_require__(65);
	var ReactMultiChildUpdateTypes = __webpack_require__(17);

	var ReactCurrentOwner = __webpack_require__(6);
	var ReactReconciler = __webpack_require__(51);
	var ReactChildReconciler = __webpack_require__(116);

	var flattenChildren = __webpack_require__(117);

	/**
	 * Updating children of a component may trigger recursive updates. The depth is
	 * used to batch recursive updates to render markup more efficiently.
	 *
	 * @type {number}
	 * @private
	 */
	var updateDepth = 0;

	/**
	 * Queue of update configuration objects.
	 *
	 * Each object has a `type` property that is in `ReactMultiChildUpdateTypes`.
	 *
	 * @type {array<object>}
	 * @private
	 */
	var updateQueue = [];

	/**
	 * Queue of markup to be rendered.
	 *
	 * @type {array<string>}
	 * @private
	 */
	var markupQueue = [];

	/**
	 * Enqueues markup to be rendered and inserted at a supplied index.
	 *
	 * @param {string} parentID ID of the parent component.
	 * @param {string} markup Markup that renders into an element.
	 * @param {number} toIndex Destination index.
	 * @private
	 */
	function enqueueInsertMarkup(parentID, markup, toIndex) {
	  // NOTE: Null values reduce hidden classes.
	  updateQueue.push({
	    parentID: parentID,
	    parentNode: null,
	    type: ReactMultiChildUpdateTypes.INSERT_MARKUP,
	    markupIndex: markupQueue.push(markup) - 1,
	    content: null,
	    fromIndex: null,
	    toIndex: toIndex
	  });
	}

	/**
	 * Enqueues moving an existing element to another index.
	 *
	 * @param {string} parentID ID of the parent component.
	 * @param {number} fromIndex Source index of the existing element.
	 * @param {number} toIndex Destination index of the element.
	 * @private
	 */
	function enqueueMove(parentID, fromIndex, toIndex) {
	  // NOTE: Null values reduce hidden classes.
	  updateQueue.push({
	    parentID: parentID,
	    parentNode: null,
	    type: ReactMultiChildUpdateTypes.MOVE_EXISTING,
	    markupIndex: null,
	    content: null,
	    fromIndex: fromIndex,
	    toIndex: toIndex
	  });
	}

	/**
	 * Enqueues removing an element at an index.
	 *
	 * @param {string} parentID ID of the parent component.
	 * @param {number} fromIndex Index of the element to remove.
	 * @private
	 */
	function enqueueRemove(parentID, fromIndex) {
	  // NOTE: Null values reduce hidden classes.
	  updateQueue.push({
	    parentID: parentID,
	    parentNode: null,
	    type: ReactMultiChildUpdateTypes.REMOVE_NODE,
	    markupIndex: null,
	    content: null,
	    fromIndex: fromIndex,
	    toIndex: null
	  });
	}

	/**
	 * Enqueues setting the markup of a node.
	 *
	 * @param {string} parentID ID of the parent component.
	 * @param {string} markup Markup that renders into an element.
	 * @private
	 */
	function enqueueSetMarkup(parentID, markup) {
	  // NOTE: Null values reduce hidden classes.
	  updateQueue.push({
	    parentID: parentID,
	    parentNode: null,
	    type: ReactMultiChildUpdateTypes.SET_MARKUP,
	    markupIndex: null,
	    content: markup,
	    fromIndex: null,
	    toIndex: null
	  });
	}

	/**
	 * Enqueues setting the text content.
	 *
	 * @param {string} parentID ID of the parent component.
	 * @param {string} textContent Text content to set.
	 * @private
	 */
	function enqueueTextContent(parentID, textContent) {
	  // NOTE: Null values reduce hidden classes.
	  updateQueue.push({
	    parentID: parentID,
	    parentNode: null,
	    type: ReactMultiChildUpdateTypes.TEXT_CONTENT,
	    markupIndex: null,
	    content: textContent,
	    fromIndex: null,
	    toIndex: null
	  });
	}

	/**
	 * Processes any enqueued updates.
	 *
	 * @private
	 */
	function processQueue() {
	  if (updateQueue.length) {
	    ReactComponentEnvironment.processChildrenUpdates(updateQueue, markupQueue);
	    clearQueue();
	  }
	}

	/**
	 * Clears any enqueued updates.
	 *
	 * @private
	 */
	function clearQueue() {
	  updateQueue.length = 0;
	  markupQueue.length = 0;
	}

	/**
	 * ReactMultiChild are capable of reconciling multiple children.
	 *
	 * @class ReactMultiChild
	 * @internal
	 */
	var ReactMultiChild = {

	  /**
	   * Provides common functionality for components that must reconcile multiple
	   * children. This is used by `ReactDOMComponent` to mount, update, and
	   * unmount child components.
	   *
	   * @lends {ReactMultiChild.prototype}
	   */
	  Mixin: {

	    _reconcilerInstantiateChildren: function _reconcilerInstantiateChildren(nestedChildren, transaction, context) {
	      if (process.env.NODE_ENV !== 'production') {
	        if (this._currentElement) {
	          try {
	            ReactCurrentOwner.current = this._currentElement._owner;
	            return ReactChildReconciler.instantiateChildren(nestedChildren, transaction, context);
	          } finally {
	            ReactCurrentOwner.current = null;
	          }
	        }
	      }
	      return ReactChildReconciler.instantiateChildren(nestedChildren, transaction, context);
	    },

	    _reconcilerUpdateChildren: function _reconcilerUpdateChildren(prevChildren, nextNestedChildrenElements, transaction, context) {
	      var nextChildren;
	      if (process.env.NODE_ENV !== 'production') {
	        if (this._currentElement) {
	          try {
	            ReactCurrentOwner.current = this._currentElement._owner;
	            nextChildren = flattenChildren(nextNestedChildrenElements);
	          } finally {
	            ReactCurrentOwner.current = null;
	          }
	          return ReactChildReconciler.updateChildren(prevChildren, nextChildren, transaction, context);
	        }
	      }
	      nextChildren = flattenChildren(nextNestedChildrenElements);
	      return ReactChildReconciler.updateChildren(prevChildren, nextChildren, transaction, context);
	    },

	    /**
	     * Generates a "mount image" for each of the supplied children. In the case
	     * of `ReactDOMComponent`, a mount image is a string of markup.
	     *
	     * @param {?object} nestedChildren Nested child maps.
	     * @return {array} An array of mounted representations.
	     * @internal
	     */
	    mountChildren: function mountChildren(nestedChildren, transaction, context) {
	      var children = this._reconcilerInstantiateChildren(nestedChildren, transaction, context);
	      this._renderedChildren = children;
	      var mountImages = [];
	      var index = 0;
	      for (var name in children) {
	        if (children.hasOwnProperty(name)) {
	          var child = children[name];
	          // Inlined for performance, see `ReactInstanceHandles.createReactID`.
	          var rootID = this._rootNodeID + name;
	          var mountImage = ReactReconciler.mountComponent(child, rootID, transaction, context);
	          child._mountIndex = index++;
	          mountImages.push(mountImage);
	        }
	      }
	      return mountImages;
	    },

	    /**
	     * Replaces any rendered children with a text content string.
	     *
	     * @param {string} nextContent String of content.
	     * @internal
	     */
	    updateTextContent: function updateTextContent(nextContent) {
	      updateDepth++;
	      var errorThrown = true;
	      try {
	        var prevChildren = this._renderedChildren;
	        // Remove any rendered children.
	        ReactChildReconciler.unmountChildren(prevChildren);
	        // TODO: The setTextContent operation should be enough
	        for (var name in prevChildren) {
	          if (prevChildren.hasOwnProperty(name)) {
	            this._unmountChild(prevChildren[name]);
	          }
	        }
	        // Set new text content.
	        this.setTextContent(nextContent);
	        errorThrown = false;
	      } finally {
	        updateDepth--;
	        if (!updateDepth) {
	          if (errorThrown) {
	            clearQueue();
	          } else {
	            processQueue();
	          }
	        }
	      }
	    },

	    /**
	     * Replaces any rendered children with a markup string.
	     *
	     * @param {string} nextMarkup String of markup.
	     * @internal
	     */
	    updateMarkup: function updateMarkup(nextMarkup) {
	      updateDepth++;
	      var errorThrown = true;
	      try {
	        var prevChildren = this._renderedChildren;
	        // Remove any rendered children.
	        ReactChildReconciler.unmountChildren(prevChildren);
	        for (var name in prevChildren) {
	          if (prevChildren.hasOwnProperty(name)) {
	            this._unmountChildByName(prevChildren[name], name);
	          }
	        }
	        this.setMarkup(nextMarkup);
	        errorThrown = false;
	      } finally {
	        updateDepth--;
	        if (!updateDepth) {
	          if (errorThrown) {
	            clearQueue();
	          } else {
	            processQueue();
	          }
	        }
	      }
	    },

	    /**
	     * Updates the rendered children with new children.
	     *
	     * @param {?object} nextNestedChildrenElements Nested child element maps.
	     * @param {ReactReconcileTransaction} transaction
	     * @internal
	     */
	    updateChildren: function updateChildren(nextNestedChildrenElements, transaction, context) {
	      updateDepth++;
	      var errorThrown = true;
	      try {
	        this._updateChildren(nextNestedChildrenElements, transaction, context);
	        errorThrown = false;
	      } finally {
	        updateDepth--;
	        if (!updateDepth) {
	          if (errorThrown) {
	            clearQueue();
	          } else {
	            processQueue();
	          }
	        }
	      }
	    },

	    /**
	     * Improve performance by isolating this hot code path from the try/catch
	     * block in `updateChildren`.
	     *
	     * @param {?object} nextNestedChildrenElements Nested child element maps.
	     * @param {ReactReconcileTransaction} transaction
	     * @final
	     * @protected
	     */
	    _updateChildren: function _updateChildren(nextNestedChildrenElements, transaction, context) {
	      var prevChildren = this._renderedChildren;
	      var nextChildren = this._reconcilerUpdateChildren(prevChildren, nextNestedChildrenElements, transaction, context);
	      this._renderedChildren = nextChildren;
	      if (!nextChildren && !prevChildren) {
	        return;
	      }
	      var name;
	      // `nextIndex` will increment for each child in `nextChildren`, but
	      // `lastIndex` will be the last index visited in `prevChildren`.
	      var lastIndex = 0;
	      var nextIndex = 0;
	      for (name in nextChildren) {
	        if (!nextChildren.hasOwnProperty(name)) {
	          continue;
	        }
	        var prevChild = prevChildren && prevChildren[name];
	        var nextChild = nextChildren[name];
	        if (prevChild === nextChild) {
	          this.moveChild(prevChild, nextIndex, lastIndex);
	          lastIndex = Math.max(prevChild._mountIndex, lastIndex);
	          prevChild._mountIndex = nextIndex;
	        } else {
	          if (prevChild) {
	            // Update `lastIndex` before `_mountIndex` gets unset by unmounting.
	            lastIndex = Math.max(prevChild._mountIndex, lastIndex);
	            this._unmountChild(prevChild);
	          }
	          // The child must be instantiated before it's mounted.
	          this._mountChildByNameAtIndex(nextChild, name, nextIndex, transaction, context);
	        }
	        nextIndex++;
	      }
	      // Remove children that are no longer present.
	      for (name in prevChildren) {
	        if (prevChildren.hasOwnProperty(name) && !(nextChildren && nextChildren.hasOwnProperty(name))) {
	          this._unmountChild(prevChildren[name]);
	        }
	      }
	    },

	    /**
	     * Unmounts all rendered children. This should be used to clean up children
	     * when this component is unmounted.
	     *
	     * @internal
	     */
	    unmountChildren: function unmountChildren() {
	      var renderedChildren = this._renderedChildren;
	      ReactChildReconciler.unmountChildren(renderedChildren);
	      this._renderedChildren = null;
	    },

	    /**
	     * Moves a child component to the supplied index.
	     *
	     * @param {ReactComponent} child Component to move.
	     * @param {number} toIndex Destination index of the element.
	     * @param {number} lastIndex Last index visited of the siblings of `child`.
	     * @protected
	     */
	    moveChild: function moveChild(child, toIndex, lastIndex) {
	      // If the index of `child` is less than `lastIndex`, then it needs to
	      // be moved. Otherwise, we do not need to move it because a child will be
	      // inserted or moved before `child`.
	      if (child._mountIndex < lastIndex) {
	        enqueueMove(this._rootNodeID, child._mountIndex, toIndex);
	      }
	    },

	    /**
	     * Creates a child component.
	     *
	     * @param {ReactComponent} child Component to create.
	     * @param {string} mountImage Markup to insert.
	     * @protected
	     */
	    createChild: function createChild(child, mountImage) {
	      enqueueInsertMarkup(this._rootNodeID, mountImage, child._mountIndex);
	    },

	    /**
	     * Removes a child component.
	     *
	     * @param {ReactComponent} child Child to remove.
	     * @protected
	     */
	    removeChild: function removeChild(child) {
	      enqueueRemove(this._rootNodeID, child._mountIndex);
	    },

	    /**
	     * Sets this text content string.
	     *
	     * @param {string} textContent Text content to set.
	     * @protected
	     */
	    setTextContent: function setTextContent(textContent) {
	      enqueueTextContent(this._rootNodeID, textContent);
	    },

	    /**
	     * Sets this markup string.
	     *
	     * @param {string} markup Markup to set.
	     * @protected
	     */
	    setMarkup: function setMarkup(markup) {
	      enqueueSetMarkup(this._rootNodeID, markup);
	    },

	    /**
	     * Mounts a child with the supplied name.
	     *
	     * NOTE: This is part of `updateChildren` and is here for readability.
	     *
	     * @param {ReactComponent} child Component to mount.
	     * @param {string} name Name of the child.
	     * @param {number} index Index at which to insert the child.
	     * @param {ReactReconcileTransaction} transaction
	     * @private
	     */
	    _mountChildByNameAtIndex: function _mountChildByNameAtIndex(child, name, index, transaction, context) {
	      // Inlined for performance, see `ReactInstanceHandles.createReactID`.
	      var rootID = this._rootNodeID + name;
	      var mountImage = ReactReconciler.mountComponent(child, rootID, transaction, context);
	      child._mountIndex = index;
	      this.createChild(child, mountImage);
	    },

	    /**
	     * Unmounts a rendered child.
	     *
	     * NOTE: This is part of `updateChildren` and is here for readability.
	     *
	     * @param {ReactComponent} child Component to unmount.
	     * @private
	     */
	    _unmountChild: function _unmountChild(child) {
	      this.removeChild(child);
	      child._mountIndex = null;
	    }

	  }

	};

	module.exports = ReactMultiChild;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactChildReconciler
	 * @typechecks static-only
	 */

	'use strict';

	var ReactReconciler = __webpack_require__(51);

	var instantiateReactComponent = __webpack_require__(63);
	var shouldUpdateReactComponent = __webpack_require__(68);
	var traverseAllChildren = __webpack_require__(112);
	var warning = __webpack_require__(26);

	function instantiateChild(childInstances, child, name) {
	  // We found a component instance.
	  var keyUnique = childInstances[name] === undefined;
	  if (process.env.NODE_ENV !== 'production') {
	    process.env.NODE_ENV !== 'production' ? warning(keyUnique, 'flattenChildren(...): Encountered two children with the same key, ' + '`%s`. Child keys must be unique; when two children share a key, only ' + 'the first child will be used.', name) : undefined;
	  }
	  if (child != null && keyUnique) {
	    childInstances[name] = instantiateReactComponent(child, null);
	  }
	}

	/**
	 * ReactChildReconciler provides helpers for initializing or updating a set of
	 * children. Its output is suitable for passing it onto ReactMultiChild which
	 * does diffed reordering and insertion.
	 */
	var ReactChildReconciler = {
	  /**
	   * Generates a "mount image" for each of the supplied children. In the case
	   * of `ReactDOMComponent`, a mount image is a string of markup.
	   *
	   * @param {?object} nestedChildNodes Nested child maps.
	   * @return {?object} A set of child instances.
	   * @internal
	   */
	  instantiateChildren: function instantiateChildren(nestedChildNodes, transaction, context) {
	    if (nestedChildNodes == null) {
	      return null;
	    }
	    var childInstances = {};
	    traverseAllChildren(nestedChildNodes, instantiateChild, childInstances);
	    return childInstances;
	  },

	  /**
	   * Updates the rendered children and returns a new set of children.
	   *
	   * @param {?object} prevChildren Previously initialized set of children.
	   * @param {?object} nextChildren Flat child element maps.
	   * @param {ReactReconcileTransaction} transaction
	   * @param {object} context
	   * @return {?object} A new set of child instances.
	   * @internal
	   */
	  updateChildren: function updateChildren(prevChildren, nextChildren, transaction, context) {
	    // We currently don't have a way to track moves here but if we use iterators
	    // instead of for..in we can zip the iterators and check if an item has
	    // moved.
	    // TODO: If nothing has changed, return the prevChildren object so that we
	    // can quickly bailout if nothing has changed.
	    if (!nextChildren && !prevChildren) {
	      return null;
	    }
	    var name;
	    for (name in nextChildren) {
	      if (!nextChildren.hasOwnProperty(name)) {
	        continue;
	      }
	      var prevChild = prevChildren && prevChildren[name];
	      var prevElement = prevChild && prevChild._currentElement;
	      var nextElement = nextChildren[name];
	      if (prevChild != null && shouldUpdateReactComponent(prevElement, nextElement)) {
	        ReactReconciler.receiveComponent(prevChild, nextElement, transaction, context);
	        nextChildren[name] = prevChild;
	      } else {
	        if (prevChild) {
	          ReactReconciler.unmountComponent(prevChild, name);
	        }
	        // The child must be instantiated before it's mounted.
	        var nextChildInstance = instantiateReactComponent(nextElement, null);
	        nextChildren[name] = nextChildInstance;
	      }
	    }
	    // Unmount children that are no longer present.
	    for (name in prevChildren) {
	      if (prevChildren.hasOwnProperty(name) && !(nextChildren && nextChildren.hasOwnProperty(name))) {
	        ReactReconciler.unmountComponent(prevChildren[name]);
	      }
	    }
	    return nextChildren;
	  },

	  /**
	   * Unmounts all rendered children. This should be used to clean up children
	   * when this component is unmounted.
	   *
	   * @param {?object} renderedChildren Previously initialized set of children.
	   * @internal
	   */
	  unmountChildren: function unmountChildren(renderedChildren) {
	    for (var name in renderedChildren) {
	      if (renderedChildren.hasOwnProperty(name)) {
	        var renderedChild = renderedChildren[name];
	        ReactReconciler.unmountComponent(renderedChild);
	      }
	    }
	  }

	};

	module.exports = ReactChildReconciler;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule flattenChildren
	 */

	'use strict';

	var traverseAllChildren = __webpack_require__(112);
	var warning = __webpack_require__(26);

	/**
	 * @param {function} traverseContext Context passed through traversal.
	 * @param {?ReactComponent} child React child component.
	 * @param {!string} name String name of key path to child.
	 */
	function flattenSingleChildIntoContext(traverseContext, child, name) {
	  // We found a component instance.
	  var result = traverseContext;
	  var keyUnique = result[name] === undefined;
	  if (process.env.NODE_ENV !== 'production') {
	    process.env.NODE_ENV !== 'production' ? warning(keyUnique, 'flattenChildren(...): Encountered two children with the same key, ' + '`%s`. Child keys must be unique; when two children share a key, only ' + 'the first child will be used.', name) : undefined;
	  }
	  if (keyUnique && child != null) {
	    result[name] = child;
	  }
	}

	/**
	 * Flattens children that are typically specified as `props.children`. Any null
	 * children will not be included in the resulting object.
	 * @return {!object} flattened children keyed by name.
	 */
	function flattenChildren(children) {
	  if (children == null) {
	    return children;
	  }
	  var result = {};
	  traverseAllChildren(children, flattenSingleChildIntoContext, result);
	  return result;
	}

	module.exports = flattenChildren;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 118 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule shallowEqual
	 * @typechecks
	 * 
	 */

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	/**
	 * Performs equality by iterating through keys on an object and returning false
	 * when any key has values which are not strictly equal between the arguments.
	 * Returns true when the values of all keys are strictly equal.
	 */
	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }

	  if ((typeof objA === 'undefined' ? 'undefined' : _typeof(objA)) !== 'object' || objA === null || (typeof objB === 'undefined' ? 'undefined' : _typeof(objB)) !== 'object' || objB === null) {
	    return false;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) {
	    return false;
	  }

	  // Test for A's keys different from B.
	  var bHasOwnProperty = hasOwnProperty.bind(objB);
	  for (var i = 0; i < keysA.length; i++) {
	    if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	      return false;
	    }
	  }

	  return true;
	}

	module.exports = shallowEqual;

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactEventListener
	 * @typechecks static-only
	 */

	'use strict';

	var EventListener = __webpack_require__(120);
	var ExecutionEnvironment = __webpack_require__(10);
	var PooledClass = __webpack_require__(57);
	var ReactInstanceHandles = __webpack_require__(46);
	var ReactMount = __webpack_require__(29);
	var ReactUpdates = __webpack_require__(55);

	var assign = __webpack_require__(40);
	var getEventTarget = __webpack_require__(82);
	var getUnboundedScrollPosition = __webpack_require__(121);

	var DOCUMENT_FRAGMENT_NODE_TYPE = 11;

	/**
	 * Finds the parent React component of `node`.
	 *
	 * @param {*} node
	 * @return {?DOMEventTarget} Parent container, or `null` if the specified node
	 *                           is not nested.
	 */
	function findParent(node) {
	  // TODO: It may be a good idea to cache this to prevent unnecessary DOM
	  // traversal, but caching is difficult to do correctly without using a
	  // mutation observer to listen for all DOM changes.
	  var nodeID = ReactMount.getID(node);
	  var rootID = ReactInstanceHandles.getReactRootIDFromNodeID(nodeID);
	  var container = ReactMount.findReactContainerForID(rootID);
	  var parent = ReactMount.getFirstReactDOM(container);
	  return parent;
	}

	// Used to store ancestor hierarchy in top level callback
	function TopLevelCallbackBookKeeping(topLevelType, nativeEvent) {
	  this.topLevelType = topLevelType;
	  this.nativeEvent = nativeEvent;
	  this.ancestors = [];
	}
	assign(TopLevelCallbackBookKeeping.prototype, {
	  destructor: function destructor() {
	    this.topLevelType = null;
	    this.nativeEvent = null;
	    this.ancestors.length = 0;
	  }
	});
	PooledClass.addPoolingTo(TopLevelCallbackBookKeeping, PooledClass.twoArgumentPooler);

	function handleTopLevelImpl(bookKeeping) {
	  // TODO: Re-enable event.path handling
	  //
	  // if (bookKeeping.nativeEvent.path && bookKeeping.nativeEvent.path.length > 1) {
	  //   // New browsers have a path attribute on native events
	  //   handleTopLevelWithPath(bookKeeping);
	  // } else {
	  //   // Legacy browsers don't have a path attribute on native events
	  //   handleTopLevelWithoutPath(bookKeeping);
	  // }

	  void handleTopLevelWithPath; // temporarily unused
	  handleTopLevelWithoutPath(bookKeeping);
	}

	// Legacy browsers don't have a path attribute on native events
	function handleTopLevelWithoutPath(bookKeeping) {
	  var topLevelTarget = ReactMount.getFirstReactDOM(getEventTarget(bookKeeping.nativeEvent)) || window;

	  // Loop through the hierarchy, in case there's any nested components.
	  // It's important that we build the array of ancestors before calling any
	  // event handlers, because event handlers can modify the DOM, leading to
	  // inconsistencies with ReactMount's node cache. See #1105.
	  var ancestor = topLevelTarget;
	  while (ancestor) {
	    bookKeeping.ancestors.push(ancestor);
	    ancestor = findParent(ancestor);
	  }

	  for (var i = 0; i < bookKeeping.ancestors.length; i++) {
	    topLevelTarget = bookKeeping.ancestors[i];
	    var topLevelTargetID = ReactMount.getID(topLevelTarget) || '';
	    ReactEventListener._handleTopLevel(bookKeeping.topLevelType, topLevelTarget, topLevelTargetID, bookKeeping.nativeEvent, getEventTarget(bookKeeping.nativeEvent));
	  }
	}

	// New browsers have a path attribute on native events
	function handleTopLevelWithPath(bookKeeping) {
	  var path = bookKeeping.nativeEvent.path;
	  var currentNativeTarget = path[0];
	  var eventsFired = 0;
	  for (var i = 0; i < path.length; i++) {
	    var currentPathElement = path[i];
	    if (currentPathElement.nodeType === DOCUMENT_FRAGMENT_NODE_TYPE) {
	      currentNativeTarget = path[i + 1];
	    }
	    // TODO: slow
	    var reactParent = ReactMount.getFirstReactDOM(currentPathElement);
	    if (reactParent === currentPathElement) {
	      var currentPathElementID = ReactMount.getID(currentPathElement);
	      var newRootID = ReactInstanceHandles.getReactRootIDFromNodeID(currentPathElementID);
	      bookKeeping.ancestors.push(currentPathElement);

	      var topLevelTargetID = ReactMount.getID(currentPathElement) || '';
	      eventsFired++;
	      ReactEventListener._handleTopLevel(bookKeeping.topLevelType, currentPathElement, topLevelTargetID, bookKeeping.nativeEvent, currentNativeTarget);

	      // Jump to the root of this React render tree
	      while (currentPathElementID !== newRootID) {
	        i++;
	        currentPathElement = path[i];
	        currentPathElementID = ReactMount.getID(currentPathElement);
	      }
	    }
	  }
	  if (eventsFired === 0) {
	    ReactEventListener._handleTopLevel(bookKeeping.topLevelType, window, '', bookKeeping.nativeEvent, getEventTarget(bookKeeping.nativeEvent));
	  }
	}

	function scrollValueMonitor(cb) {
	  var scrollPosition = getUnboundedScrollPosition(window);
	  cb(scrollPosition);
	}

	var ReactEventListener = {
	  _enabled: true,
	  _handleTopLevel: null,

	  WINDOW_HANDLE: ExecutionEnvironment.canUseDOM ? window : null,

	  setHandleTopLevel: function setHandleTopLevel(handleTopLevel) {
	    ReactEventListener._handleTopLevel = handleTopLevel;
	  },

	  setEnabled: function setEnabled(enabled) {
	    ReactEventListener._enabled = !!enabled;
	  },

	  isEnabled: function isEnabled() {
	    return ReactEventListener._enabled;
	  },

	  /**
	   * Traps top-level events by using event bubbling.
	   *
	   * @param {string} topLevelType Record from `EventConstants`.
	   * @param {string} handlerBaseName Event name (e.g. "click").
	   * @param {object} handle Element on which to attach listener.
	   * @return {?object} An object with a remove function which will forcefully
	   *                  remove the listener.
	   * @internal
	   */
	  trapBubbledEvent: function trapBubbledEvent(topLevelType, handlerBaseName, handle) {
	    var element = handle;
	    if (!element) {
	      return null;
	    }
	    return EventListener.listen(element, handlerBaseName, ReactEventListener.dispatchEvent.bind(null, topLevelType));
	  },

	  /**
	   * Traps a top-level event by using event capturing.
	   *
	   * @param {string} topLevelType Record from `EventConstants`.
	   * @param {string} handlerBaseName Event name (e.g. "click").
	   * @param {object} handle Element on which to attach listener.
	   * @return {?object} An object with a remove function which will forcefully
	   *                  remove the listener.
	   * @internal
	   */
	  trapCapturedEvent: function trapCapturedEvent(topLevelType, handlerBaseName, handle) {
	    var element = handle;
	    if (!element) {
	      return null;
	    }
	    return EventListener.capture(element, handlerBaseName, ReactEventListener.dispatchEvent.bind(null, topLevelType));
	  },

	  monitorScrollValue: function monitorScrollValue(refresh) {
	    var callback = scrollValueMonitor.bind(null, refresh);
	    EventListener.listen(window, 'scroll', callback);
	  },

	  dispatchEvent: function dispatchEvent(topLevelType, nativeEvent) {
	    if (!ReactEventListener._enabled) {
	      return;
	    }

	    var bookKeeping = TopLevelCallbackBookKeeping.getPooled(topLevelType, nativeEvent);
	    try {
	      // Event queue being processed in the same cycle allows
	      // `preventDefault`.
	      ReactUpdates.batchedUpdates(handleTopLevelImpl, bookKeeping);
	    } finally {
	      TopLevelCallbackBookKeeping.release(bookKeeping);
	    }
	  }
	};

	module.exports = ReactEventListener;

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 *
	 * @providesModule EventListener
	 * @typechecks
	 */

	'use strict';

	var emptyFunction = __webpack_require__(16);

	/**
	 * Upstream version of event listener. Does not take into account specific
	 * nature of platform.
	 */
	var EventListener = {
	  /**
	   * Listen to DOM events during the bubble phase.
	   *
	   * @param {DOMEventTarget} target DOM element to register listener on.
	   * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
	   * @param {function} callback Callback function.
	   * @return {object} Object with a `remove` method.
	   */
	  listen: function listen(target, eventType, callback) {
	    if (target.addEventListener) {
	      target.addEventListener(eventType, callback, false);
	      return {
	        remove: function remove() {
	          target.removeEventListener(eventType, callback, false);
	        }
	      };
	    } else if (target.attachEvent) {
	      target.attachEvent('on' + eventType, callback);
	      return {
	        remove: function remove() {
	          target.detachEvent('on' + eventType, callback);
	        }
	      };
	    }
	  },

	  /**
	   * Listen to DOM events during the capture phase.
	   *
	   * @param {DOMEventTarget} target DOM element to register listener on.
	   * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
	   * @param {function} callback Callback function.
	   * @return {object} Object with a `remove` method.
	   */
	  capture: function capture(target, eventType, callback) {
	    if (target.addEventListener) {
	      target.addEventListener(eventType, callback, true);
	      return {
	        remove: function remove() {
	          target.removeEventListener(eventType, callback, true);
	        }
	      };
	    } else {
	      if (process.env.NODE_ENV !== 'production') {
	        console.error('Attempted to listen to events during the capture phase on a ' + 'browser that does not support the capture phase. Your application ' + 'will not receive some events.');
	      }
	      return {
	        remove: emptyFunction
	      };
	    }
	  },

	  registerDefault: function registerDefault() {}
	};

	module.exports = EventListener;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 121 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getUnboundedScrollPosition
	 * @typechecks
	 */

	'use strict';

	/**
	 * Gets the scroll position of the supplied element or window.
	 *
	 * The return values are unbounded, unlike `getScrollPosition`. This means they
	 * may be negative or exceed the element boundaries (which is possible using
	 * inertial scrolling).
	 *
	 * @param {DOMWindow|DOMElement} scrollable
	 * @return {object} Map with `x` and `y` keys.
	 */

	function getUnboundedScrollPosition(scrollable) {
	  if (scrollable === window) {
	    return {
	      x: window.pageXOffset || document.documentElement.scrollLeft,
	      y: window.pageYOffset || document.documentElement.scrollTop
	    };
	  }
	  return {
	    x: scrollable.scrollLeft,
	    y: scrollable.scrollTop
	  };
	}

	module.exports = getUnboundedScrollPosition;

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactInjection
	 */

	'use strict';

	var DOMProperty = __webpack_require__(24);
	var EventPluginHub = __webpack_require__(32);
	var ReactComponentEnvironment = __webpack_require__(65);
	var ReactClass = __webpack_require__(123);
	var ReactEmptyComponent = __webpack_require__(69);
	var ReactBrowserEventEmitter = __webpack_require__(30);
	var ReactNativeComponent = __webpack_require__(70);
	var ReactPerf = __webpack_require__(19);
	var ReactRootIndex = __webpack_require__(47);
	var ReactUpdates = __webpack_require__(55);

	var ReactInjection = {
	  Component: ReactComponentEnvironment.injection,
	  Class: ReactClass.injection,
	  DOMProperty: DOMProperty.injection,
	  EmptyComponent: ReactEmptyComponent.injection,
	  EventPluginHub: EventPluginHub.injection,
	  EventEmitter: ReactBrowserEventEmitter.injection,
	  NativeComponent: ReactNativeComponent.injection,
	  Perf: ReactPerf.injection,
	  RootIndex: ReactRootIndex.injection,
	  Updates: ReactUpdates.injection
	};

	module.exports = ReactInjection;

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactClass
	 */

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var ReactComponent = __webpack_require__(124);
	var ReactElement = __webpack_require__(43);
	var ReactPropTypeLocations = __webpack_require__(66);
	var ReactPropTypeLocationNames = __webpack_require__(67);
	var ReactNoopUpdateQueue = __webpack_require__(125);

	var assign = __webpack_require__(40);
	var emptyObject = __webpack_require__(59);
	var invariant = __webpack_require__(14);
	var keyMirror = __webpack_require__(18);
	var keyOf = __webpack_require__(80);
	var warning = __webpack_require__(26);

	var MIXINS_KEY = keyOf({ mixins: null });

	/**
	 * Policies that describe methods in `ReactClassInterface`.
	 */
	var SpecPolicy = keyMirror({
	  /**
	   * These methods may be defined only once by the class specification or mixin.
	   */
	  DEFINE_ONCE: null,
	  /**
	   * These methods may be defined by both the class specification and mixins.
	   * Subsequent definitions will be chained. These methods must return void.
	   */
	  DEFINE_MANY: null,
	  /**
	   * These methods are overriding the base class.
	   */
	  OVERRIDE_BASE: null,
	  /**
	   * These methods are similar to DEFINE_MANY, except we assume they return
	   * objects. We try to merge the keys of the return values of all the mixed in
	   * functions. If there is a key conflict we throw.
	   */
	  DEFINE_MANY_MERGED: null
	});

	var injectedMixins = [];

	var warnedSetProps = false;
	function warnSetProps() {
	  if (!warnedSetProps) {
	    warnedSetProps = true;
	    process.env.NODE_ENV !== 'production' ? warning(false, 'setProps(...) and replaceProps(...) are deprecated. ' + 'Instead, call render again at the top level.') : undefined;
	  }
	}

	/**
	 * Composite components are higher-level components that compose other composite
	 * or native components.
	 *
	 * To create a new type of `ReactClass`, pass a specification of
	 * your new class to `React.createClass`. The only requirement of your class
	 * specification is that you implement a `render` method.
	 *
	 *   var MyComponent = React.createClass({
	 *     render: function() {
	 *       return <div>Hello World</div>;
	 *     }
	 *   });
	 *
	 * The class specification supports a specific protocol of methods that have
	 * special meaning (e.g. `render`). See `ReactClassInterface` for
	 * more the comprehensive protocol. Any other properties and methods in the
	 * class specification will be available on the prototype.
	 *
	 * @interface ReactClassInterface
	 * @internal
	 */
	var ReactClassInterface = {

	  /**
	   * An array of Mixin objects to include when defining your component.
	   *
	   * @type {array}
	   * @optional
	   */
	  mixins: SpecPolicy.DEFINE_MANY,

	  /**
	   * An object containing properties and methods that should be defined on
	   * the component's constructor instead of its prototype (static methods).
	   *
	   * @type {object}
	   * @optional
	   */
	  statics: SpecPolicy.DEFINE_MANY,

	  /**
	   * Definition of prop types for this component.
	   *
	   * @type {object}
	   * @optional
	   */
	  propTypes: SpecPolicy.DEFINE_MANY,

	  /**
	   * Definition of context types for this component.
	   *
	   * @type {object}
	   * @optional
	   */
	  contextTypes: SpecPolicy.DEFINE_MANY,

	  /**
	   * Definition of context types this component sets for its children.
	   *
	   * @type {object}
	   * @optional
	   */
	  childContextTypes: SpecPolicy.DEFINE_MANY,

	  // ==== Definition methods ====

	  /**
	   * Invoked when the component is mounted. Values in the mapping will be set on
	   * `this.props` if that prop is not specified (i.e. using an `in` check).
	   *
	   * This method is invoked before `getInitialState` and therefore cannot rely
	   * on `this.state` or use `this.setState`.
	   *
	   * @return {object}
	   * @optional
	   */
	  getDefaultProps: SpecPolicy.DEFINE_MANY_MERGED,

	  /**
	   * Invoked once before the component is mounted. The return value will be used
	   * as the initial value of `this.state`.
	   *
	   *   getInitialState: function() {
	   *     return {
	   *       isOn: false,
	   *       fooBaz: new BazFoo()
	   *     }
	   *   }
	   *
	   * @return {object}
	   * @optional
	   */
	  getInitialState: SpecPolicy.DEFINE_MANY_MERGED,

	  /**
	   * @return {object}
	   * @optional
	   */
	  getChildContext: SpecPolicy.DEFINE_MANY_MERGED,

	  /**
	   * Uses props from `this.props` and state from `this.state` to render the
	   * structure of the component.
	   *
	   * No guarantees are made about when or how often this method is invoked, so
	   * it must not have side effects.
	   *
	   *   render: function() {
	   *     var name = this.props.name;
	   *     return <div>Hello, {name}!</div>;
	   *   }
	   *
	   * @return {ReactComponent}
	   * @nosideeffects
	   * @required
	   */
	  render: SpecPolicy.DEFINE_ONCE,

	  // ==== Delegate methods ====

	  /**
	   * Invoked when the component is initially created and about to be mounted.
	   * This may have side effects, but any external subscriptions or data created
	   * by this method must be cleaned up in `componentWillUnmount`.
	   *
	   * @optional
	   */
	  componentWillMount: SpecPolicy.DEFINE_MANY,

	  /**
	   * Invoked when the component has been mounted and has a DOM representation.
	   * However, there is no guarantee that the DOM node is in the document.
	   *
	   * Use this as an opportunity to operate on the DOM when the component has
	   * been mounted (initialized and rendered) for the first time.
	   *
	   * @param {DOMElement} rootNode DOM element representing the component.
	   * @optional
	   */
	  componentDidMount: SpecPolicy.DEFINE_MANY,

	  /**
	   * Invoked before the component receives new props.
	   *
	   * Use this as an opportunity to react to a prop transition by updating the
	   * state using `this.setState`. Current props are accessed via `this.props`.
	   *
	   *   componentWillReceiveProps: function(nextProps, nextContext) {
	   *     this.setState({
	   *       likesIncreasing: nextProps.likeCount > this.props.likeCount
	   *     });
	   *   }
	   *
	   * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
	   * transition may cause a state change, but the opposite is not true. If you
	   * need it, you are probably looking for `componentWillUpdate`.
	   *
	   * @param {object} nextProps
	   * @optional
	   */
	  componentWillReceiveProps: SpecPolicy.DEFINE_MANY,

	  /**
	   * Invoked while deciding if the component should be updated as a result of
	   * receiving new props, state and/or context.
	   *
	   * Use this as an opportunity to `return false` when you're certain that the
	   * transition to the new props/state/context will not require a component
	   * update.
	   *
	   *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
	   *     return !equal(nextProps, this.props) ||
	   *       !equal(nextState, this.state) ||
	   *       !equal(nextContext, this.context);
	   *   }
	   *
	   * @param {object} nextProps
	   * @param {?object} nextState
	   * @param {?object} nextContext
	   * @return {boolean} True if the component should update.
	   * @optional
	   */
	  shouldComponentUpdate: SpecPolicy.DEFINE_ONCE,

	  /**
	   * Invoked when the component is about to update due to a transition from
	   * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
	   * and `nextContext`.
	   *
	   * Use this as an opportunity to perform preparation before an update occurs.
	   *
	   * NOTE: You **cannot** use `this.setState()` in this method.
	   *
	   * @param {object} nextProps
	   * @param {?object} nextState
	   * @param {?object} nextContext
	   * @param {ReactReconcileTransaction} transaction
	   * @optional
	   */
	  componentWillUpdate: SpecPolicy.DEFINE_MANY,

	  /**
	   * Invoked when the component's DOM representation has been updated.
	   *
	   * Use this as an opportunity to operate on the DOM when the component has
	   * been updated.
	   *
	   * @param {object} prevProps
	   * @param {?object} prevState
	   * @param {?object} prevContext
	   * @param {DOMElement} rootNode DOM element representing the component.
	   * @optional
	   */
	  componentDidUpdate: SpecPolicy.DEFINE_MANY,

	  /**
	   * Invoked when the component is about to be removed from its parent and have
	   * its DOM representation destroyed.
	   *
	   * Use this as an opportunity to deallocate any external resources.
	   *
	   * NOTE: There is no `componentDidUnmount` since your component will have been
	   * destroyed by that point.
	   *
	   * @optional
	   */
	  componentWillUnmount: SpecPolicy.DEFINE_MANY,

	  // ==== Advanced methods ====

	  /**
	   * Updates the component's currently mounted DOM representation.
	   *
	   * By default, this implements React's rendering and reconciliation algorithm.
	   * Sophisticated clients may wish to override this.
	   *
	   * @param {ReactReconcileTransaction} transaction
	   * @internal
	   * @overridable
	   */
	  updateComponent: SpecPolicy.OVERRIDE_BASE

	};

	/**
	 * Mapping from class specification keys to special processing functions.
	 *
	 * Although these are declared like instance properties in the specification
	 * when defining classes using `React.createClass`, they are actually static
	 * and are accessible on the constructor instead of the prototype. Despite
	 * being static, they must be defined outside of the "statics" key under
	 * which all other static methods are defined.
	 */
	var RESERVED_SPEC_KEYS = {
	  displayName: function displayName(Constructor, _displayName) {
	    Constructor.displayName = _displayName;
	  },
	  mixins: function mixins(Constructor, _mixins) {
	    if (_mixins) {
	      for (var i = 0; i < _mixins.length; i++) {
	        mixSpecIntoComponent(Constructor, _mixins[i]);
	      }
	    }
	  },
	  childContextTypes: function childContextTypes(Constructor, _childContextTypes) {
	    if (process.env.NODE_ENV !== 'production') {
	      validateTypeDef(Constructor, _childContextTypes, ReactPropTypeLocations.childContext);
	    }
	    Constructor.childContextTypes = assign({}, Constructor.childContextTypes, _childContextTypes);
	  },
	  contextTypes: function contextTypes(Constructor, _contextTypes) {
	    if (process.env.NODE_ENV !== 'production') {
	      validateTypeDef(Constructor, _contextTypes, ReactPropTypeLocations.context);
	    }
	    Constructor.contextTypes = assign({}, Constructor.contextTypes, _contextTypes);
	  },
	  /**
	   * Special case getDefaultProps which should move into statics but requires
	   * automatic merging.
	   */
	  getDefaultProps: function getDefaultProps(Constructor, _getDefaultProps) {
	    if (Constructor.getDefaultProps) {
	      Constructor.getDefaultProps = createMergedResultFunction(Constructor.getDefaultProps, _getDefaultProps);
	    } else {
	      Constructor.getDefaultProps = _getDefaultProps;
	    }
	  },
	  propTypes: function propTypes(Constructor, _propTypes) {
	    if (process.env.NODE_ENV !== 'production') {
	      validateTypeDef(Constructor, _propTypes, ReactPropTypeLocations.prop);
	    }
	    Constructor.propTypes = assign({}, Constructor.propTypes, _propTypes);
	  },
	  statics: function statics(Constructor, _statics) {
	    mixStaticSpecIntoComponent(Constructor, _statics);
	  },
	  autobind: function autobind() {} };

	// noop
	function validateTypeDef(Constructor, typeDef, location) {
	  for (var propName in typeDef) {
	    if (typeDef.hasOwnProperty(propName)) {
	      // use a warning instead of an invariant so components
	      // don't show up in prod but not in __DEV__
	      process.env.NODE_ENV !== 'production' ? warning(typeof typeDef[propName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', Constructor.displayName || 'ReactClass', ReactPropTypeLocationNames[location], propName) : undefined;
	    }
	  }
	}

	function validateMethodOverride(proto, name) {
	  var specPolicy = ReactClassInterface.hasOwnProperty(name) ? ReactClassInterface[name] : null;

	  // Disallow overriding of base class methods unless explicitly allowed.
	  if (ReactClassMixin.hasOwnProperty(name)) {
	    !(specPolicy === SpecPolicy.OVERRIDE_BASE) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClassInterface: You are attempting to override ' + '`%s` from your class specification. Ensure that your method names ' + 'do not overlap with React methods.', name) : invariant(false) : undefined;
	  }

	  // Disallow defining methods more than once unless explicitly allowed.
	  if (proto.hasOwnProperty(name)) {
	    !(specPolicy === SpecPolicy.DEFINE_MANY || specPolicy === SpecPolicy.DEFINE_MANY_MERGED) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClassInterface: You are attempting to define ' + '`%s` on your component more than once. This conflict may be due ' + 'to a mixin.', name) : invariant(false) : undefined;
	  }
	}

	/**
	 * Mixin helper which handles policy validation and reserved
	 * specification keys when building React classses.
	 */
	function mixSpecIntoComponent(Constructor, spec) {
	  if (!spec) {
	    return;
	  }

	  !(typeof spec !== 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You\'re attempting to ' + 'use a component class as a mixin. Instead, just use a regular object.') : invariant(false) : undefined;
	  !!ReactElement.isValidElement(spec) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You\'re attempting to ' + 'use a component as a mixin. Instead, just use a regular object.') : invariant(false) : undefined;

	  var proto = Constructor.prototype;

	  // By handling mixins before any other properties, we ensure the same
	  // chaining order is applied to methods with DEFINE_MANY policy, whether
	  // mixins are listed before or after these methods in the spec.
	  if (spec.hasOwnProperty(MIXINS_KEY)) {
	    RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
	  }

	  for (var name in spec) {
	    if (!spec.hasOwnProperty(name)) {
	      continue;
	    }

	    if (name === MIXINS_KEY) {
	      // We have already handled mixins in a special case above.
	      continue;
	    }

	    var property = spec[name];
	    validateMethodOverride(proto, name);

	    if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
	      RESERVED_SPEC_KEYS[name](Constructor, property);
	    } else {
	      // Setup methods on prototype:
	      // The following member methods should not be automatically bound:
	      // 1. Expected ReactClass methods (in the "interface").
	      // 2. Overridden methods (that were mixed in).
	      var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
	      var isAlreadyDefined = proto.hasOwnProperty(name);
	      var isFunction = typeof property === 'function';
	      var shouldAutoBind = isFunction && !isReactClassMethod && !isAlreadyDefined && spec.autobind !== false;

	      if (shouldAutoBind) {
	        if (!proto.__reactAutoBindMap) {
	          proto.__reactAutoBindMap = {};
	        }
	        proto.__reactAutoBindMap[name] = property;
	        proto[name] = property;
	      } else {
	        if (isAlreadyDefined) {
	          var specPolicy = ReactClassInterface[name];

	          // These cases should already be caught by validateMethodOverride.
	          !(isReactClassMethod && (specPolicy === SpecPolicy.DEFINE_MANY_MERGED || specPolicy === SpecPolicy.DEFINE_MANY)) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: Unexpected spec policy %s for key %s ' + 'when mixing in component specs.', specPolicy, name) : invariant(false) : undefined;

	          // For methods which are defined more than once, call the existing
	          // methods before calling the new property, merging if appropriate.
	          if (specPolicy === SpecPolicy.DEFINE_MANY_MERGED) {
	            proto[name] = createMergedResultFunction(proto[name], property);
	          } else if (specPolicy === SpecPolicy.DEFINE_MANY) {
	            proto[name] = createChainedFunction(proto[name], property);
	          }
	        } else {
	          proto[name] = property;
	          if (process.env.NODE_ENV !== 'production') {
	            // Add verbose displayName to the function, which helps when looking
	            // at profiling tools.
	            if (typeof property === 'function' && spec.displayName) {
	              proto[name].displayName = spec.displayName + '_' + name;
	            }
	          }
	        }
	      }
	    }
	  }
	}

	function mixStaticSpecIntoComponent(Constructor, statics) {
	  if (!statics) {
	    return;
	  }
	  for (var name in statics) {
	    var property = statics[name];
	    if (!statics.hasOwnProperty(name)) {
	      continue;
	    }

	    var isReserved = name in RESERVED_SPEC_KEYS;
	    !!isReserved ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You are attempting to define a reserved ' + 'property, `%s`, that shouldn\'t be on the "statics" key. Define it ' + 'as an instance property instead; it will still be accessible on the ' + 'constructor.', name) : invariant(false) : undefined;

	    var isInherited = name in Constructor;
	    !!isInherited ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You are attempting to define ' + '`%s` on your component more than once. This conflict may be ' + 'due to a mixin.', name) : invariant(false) : undefined;
	    Constructor[name] = property;
	  }
	}

	/**
	 * Merge two objects, but throw if both contain the same key.
	 *
	 * @param {object} one The first object, which is mutated.
	 * @param {object} two The second object
	 * @return {object} one after it has been mutated to contain everything in two.
	 */
	function mergeIntoWithNoDuplicateKeys(one, two) {
	  !(one && two && (typeof one === 'undefined' ? 'undefined' : _typeof(one)) === 'object' && (typeof two === 'undefined' ? 'undefined' : _typeof(two)) === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.') : invariant(false) : undefined;

	  for (var key in two) {
	    if (two.hasOwnProperty(key)) {
	      !(one[key] === undefined) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'mergeIntoWithNoDuplicateKeys(): ' + 'Tried to merge two objects with the same key: `%s`. This conflict ' + 'may be due to a mixin; in particular, this may be caused by two ' + 'getInitialState() or getDefaultProps() methods returning objects ' + 'with clashing keys.', key) : invariant(false) : undefined;
	      one[key] = two[key];
	    }
	  }
	  return one;
	}

	/**
	 * Creates a function that invokes two functions and merges their return values.
	 *
	 * @param {function} one Function to invoke first.
	 * @param {function} two Function to invoke second.
	 * @return {function} Function that invokes the two argument functions.
	 * @private
	 */
	function createMergedResultFunction(one, two) {
	  return function mergedResult() {
	    var a = one.apply(this, arguments);
	    var b = two.apply(this, arguments);
	    if (a == null) {
	      return b;
	    } else if (b == null) {
	      return a;
	    }
	    var c = {};
	    mergeIntoWithNoDuplicateKeys(c, a);
	    mergeIntoWithNoDuplicateKeys(c, b);
	    return c;
	  };
	}

	/**
	 * Creates a function that invokes two functions and ignores their return vales.
	 *
	 * @param {function} one Function to invoke first.
	 * @param {function} two Function to invoke second.
	 * @return {function} Function that invokes the two argument functions.
	 * @private
	 */
	function createChainedFunction(one, two) {
	  return function chainedFunction() {
	    one.apply(this, arguments);
	    two.apply(this, arguments);
	  };
	}

	/**
	 * Binds a method to the component.
	 *
	 * @param {object} component Component whose method is going to be bound.
	 * @param {function} method Method to be bound.
	 * @return {function} The bound method.
	 */
	function bindAutoBindMethod(component, method) {
	  var boundMethod = method.bind(component);
	  if (process.env.NODE_ENV !== 'production') {
	    boundMethod.__reactBoundContext = component;
	    boundMethod.__reactBoundMethod = method;
	    boundMethod.__reactBoundArguments = null;
	    var componentName = component.constructor.displayName;
	    var _bind = boundMethod.bind;
	    /* eslint-disable block-scoped-var, no-undef */
	    boundMethod.bind = function (newThis) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      // User is trying to bind() an autobound method; we effectively will
	      // ignore the value of "this" that the user is trying to use, so
	      // let's warn.
	      if (newThis !== component && newThis !== null) {
	        process.env.NODE_ENV !== 'production' ? warning(false, 'bind(): React component methods may only be bound to the ' + 'component instance. See %s', componentName) : undefined;
	      } else if (!args.length) {
	        process.env.NODE_ENV !== 'production' ? warning(false, 'bind(): You are binding a component method to the component. ' + 'React does this for you automatically in a high-performance ' + 'way, so you can safely remove this call. See %s', componentName) : undefined;
	        return boundMethod;
	      }
	      var reboundMethod = _bind.apply(boundMethod, arguments);
	      reboundMethod.__reactBoundContext = component;
	      reboundMethod.__reactBoundMethod = method;
	      reboundMethod.__reactBoundArguments = args;
	      return reboundMethod;
	      /* eslint-enable */
	    };
	  }
	  return boundMethod;
	}

	/**
	 * Binds all auto-bound methods in a component.
	 *
	 * @param {object} component Component whose method is going to be bound.
	 */
	function bindAutoBindMethods(component) {
	  for (var autoBindKey in component.__reactAutoBindMap) {
	    if (component.__reactAutoBindMap.hasOwnProperty(autoBindKey)) {
	      var method = component.__reactAutoBindMap[autoBindKey];
	      component[autoBindKey] = bindAutoBindMethod(component, method);
	    }
	  }
	}

	/**
	 * Add more to the ReactClass base class. These are all legacy features and
	 * therefore not already part of the modern ReactComponent.
	 */
	var ReactClassMixin = {

	  /**
	   * TODO: This will be deprecated because state should always keep a consistent
	   * type signature and the only use case for this, is to avoid that.
	   */
	  replaceState: function replaceState(newState, callback) {
	    this.updater.enqueueReplaceState(this, newState);
	    if (callback) {
	      this.updater.enqueueCallback(this, callback);
	    }
	  },

	  /**
	   * Checks whether or not this composite component is mounted.
	   * @return {boolean} True if mounted, false otherwise.
	   * @protected
	   * @final
	   */
	  isMounted: function isMounted() {
	    return this.updater.isMounted(this);
	  },

	  /**
	   * Sets a subset of the props.
	   *
	   * @param {object} partialProps Subset of the next props.
	   * @param {?function} callback Called after props are updated.
	   * @final
	   * @public
	   * @deprecated
	   */
	  setProps: function setProps(partialProps, callback) {
	    if (process.env.NODE_ENV !== 'production') {
	      warnSetProps();
	    }
	    this.updater.enqueueSetProps(this, partialProps);
	    if (callback) {
	      this.updater.enqueueCallback(this, callback);
	    }
	  },

	  /**
	   * Replace all the props.
	   *
	   * @param {object} newProps Subset of the next props.
	   * @param {?function} callback Called after props are updated.
	   * @final
	   * @public
	   * @deprecated
	   */
	  replaceProps: function replaceProps(newProps, callback) {
	    if (process.env.NODE_ENV !== 'production') {
	      warnSetProps();
	    }
	    this.updater.enqueueReplaceProps(this, newProps);
	    if (callback) {
	      this.updater.enqueueCallback(this, callback);
	    }
	  }
	};

	var ReactClassComponent = function ReactClassComponent() {};
	assign(ReactClassComponent.prototype, ReactComponent.prototype, ReactClassMixin);

	/**
	 * Module for creating composite components.
	 *
	 * @class ReactClass
	 */
	var ReactClass = {

	  /**
	   * Creates a composite component class given a class specification.
	   *
	   * @param {object} spec Class specification (which must define `render`).
	   * @return {function} Component constructor function.
	   * @public
	   */
	  createClass: function createClass(spec) {
	    var Constructor = function Constructor(props, context, updater) {
	      // This constructor is overridden by mocks. The argument is used
	      // by mocks to assert on what gets mounted.

	      if (process.env.NODE_ENV !== 'production') {
	        process.env.NODE_ENV !== 'production' ? warning(this instanceof Constructor, 'Something is calling a React component directly. Use a factory or ' + 'JSX instead. See: https://fb.me/react-legacyfactory') : undefined;
	      }

	      // Wire up auto-binding
	      if (this.__reactAutoBindMap) {
	        bindAutoBindMethods(this);
	      }

	      this.props = props;
	      this.context = context;
	      this.refs = emptyObject;
	      this.updater = updater || ReactNoopUpdateQueue;

	      this.state = null;

	      // ReactClasses doesn't have constructors. Instead, they use the
	      // getInitialState and componentWillMount methods for initialization.

	      var initialState = this.getInitialState ? this.getInitialState() : null;
	      if (process.env.NODE_ENV !== 'production') {
	        // We allow auto-mocks to proceed as if they're returning null.
	        if (typeof initialState === 'undefined' && this.getInitialState._isMockFunction) {
	          // This is probably bad practice. Consider warning here and
	          // deprecating this convenience.
	          initialState = null;
	        }
	      }
	      !((typeof initialState === 'undefined' ? 'undefined' : _typeof(initialState)) === 'object' && !Array.isArray(initialState)) ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s.getInitialState(): must return an object or null', Constructor.displayName || 'ReactCompositeComponent') : invariant(false) : undefined;

	      this.state = initialState;
	    };
	    Constructor.prototype = new ReactClassComponent();
	    Constructor.prototype.constructor = Constructor;

	    injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));

	    mixSpecIntoComponent(Constructor, spec);

	    // Initialize the defaultProps property after all mixins have been merged.
	    if (Constructor.getDefaultProps) {
	      Constructor.defaultProps = Constructor.getDefaultProps();
	    }

	    if (process.env.NODE_ENV !== 'production') {
	      // This is a tag to indicate that the use of these method names is ok,
	      // since it's used with createClass. If it's not, then it's likely a
	      // mistake so we'll warn you to use the static property, property
	      // initializer or constructor respectively.
	      if (Constructor.getDefaultProps) {
	        Constructor.getDefaultProps.isReactClassApproved = {};
	      }
	      if (Constructor.prototype.getInitialState) {
	        Constructor.prototype.getInitialState.isReactClassApproved = {};
	      }
	    }

	    !Constructor.prototype.render ? process.env.NODE_ENV !== 'production' ? invariant(false, 'createClass(...): Class specification must implement a `render` method.') : invariant(false) : undefined;

	    if (process.env.NODE_ENV !== 'production') {
	      process.env.NODE_ENV !== 'production' ? warning(!Constructor.prototype.componentShouldUpdate, '%s has a method called ' + 'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' + 'The name is phrased as a question because the function is ' + 'expected to return a value.', spec.displayName || 'A component') : undefined;
	      process.env.NODE_ENV !== 'production' ? warning(!Constructor.prototype.componentWillRecieveProps, '%s has a method called ' + 'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?', spec.displayName || 'A component') : undefined;
	    }

	    // Reduce time spent doing lookups by setting these on the prototype.
	    for (var methodName in ReactClassInterface) {
	      if (!Constructor.prototype[methodName]) {
	        Constructor.prototype[methodName] = null;
	      }
	    }

	    return Constructor;
	  },

	  injection: {
	    injectMixin: function injectMixin(mixin) {
	      injectedMixins.push(mixin);
	    }
	  }

	};

	module.exports = ReactClass;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactComponent
	 */

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var ReactNoopUpdateQueue = __webpack_require__(125);

	var canDefineProperty = __webpack_require__(44);
	var emptyObject = __webpack_require__(59);
	var invariant = __webpack_require__(14);
	var warning = __webpack_require__(26);

	/**
	 * Base class helpers for the updating state of a component.
	 */
	function ReactComponent(props, context, updater) {
	  this.props = props;
	  this.context = context;
	  this.refs = emptyObject;
	  // We initialize the default updater but the real one gets injected by the
	  // renderer.
	  this.updater = updater || ReactNoopUpdateQueue;
	}

	ReactComponent.prototype.isReactComponent = {};

	/**
	 * Sets a subset of the state. Always use this to mutate
	 * state. You should treat `this.state` as immutable.
	 *
	 * There is no guarantee that `this.state` will be immediately updated, so
	 * accessing `this.state` after calling this method may return the old value.
	 *
	 * There is no guarantee that calls to `setState` will run synchronously,
	 * as they may eventually be batched together.  You can provide an optional
	 * callback that will be executed when the call to setState is actually
	 * completed.
	 *
	 * When a function is provided to setState, it will be called at some point in
	 * the future (not synchronously). It will be called with the up to date
	 * component arguments (state, props, context). These values can be different
	 * from this.* because your function may be called after receiveProps but before
	 * shouldComponentUpdate, and this new state, props, and context will not yet be
	 * assigned to this.
	 *
	 * @param {object|function} partialState Next partial state or function to
	 *        produce next partial state to be merged with current state.
	 * @param {?function} callback Called after state is updated.
	 * @final
	 * @protected
	 */
	ReactComponent.prototype.setState = function (partialState, callback) {
	  !((typeof partialState === 'undefined' ? 'undefined' : _typeof(partialState)) === 'object' || typeof partialState === 'function' || partialState == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'setState(...): takes an object of state variables to update or a ' + 'function which returns an object of state variables.') : invariant(false) : undefined;
	  if (process.env.NODE_ENV !== 'production') {
	    process.env.NODE_ENV !== 'production' ? warning(partialState != null, 'setState(...): You passed an undefined or null state object; ' + 'instead, use forceUpdate().') : undefined;
	  }
	  this.updater.enqueueSetState(this, partialState);
	  if (callback) {
	    this.updater.enqueueCallback(this, callback);
	  }
	};

	/**
	 * Forces an update. This should only be invoked when it is known with
	 * certainty that we are **not** in a DOM transaction.
	 *
	 * You may want to call this when you know that some deeper aspect of the
	 * component's state has changed but `setState` was not called.
	 *
	 * This will not invoke `shouldComponentUpdate`, but it will invoke
	 * `componentWillUpdate` and `componentDidUpdate`.
	 *
	 * @param {?function} callback Called after update is complete.
	 * @final
	 * @protected
	 */
	ReactComponent.prototype.forceUpdate = function (callback) {
	  this.updater.enqueueForceUpdate(this);
	  if (callback) {
	    this.updater.enqueueCallback(this, callback);
	  }
	};

	/**
	 * Deprecated APIs. These APIs used to exist on classic React classes but since
	 * we would like to deprecate them, we're not going to move them over to this
	 * modern base class. Instead, we define a getter that warns if it's accessed.
	 */
	if (process.env.NODE_ENV !== 'production') {
	  var deprecatedAPIs = {
	    getDOMNode: ['getDOMNode', 'Use ReactDOM.findDOMNode(component) instead.'],
	    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
	    replaceProps: ['replaceProps', 'Instead, call render again at the top level.'],
	    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).'],
	    setProps: ['setProps', 'Instead, call render again at the top level.']
	  };
	  var defineDeprecationWarning = function defineDeprecationWarning(methodName, info) {
	    if (canDefineProperty) {
	      Object.defineProperty(ReactComponent.prototype, methodName, {
	        get: function get() {
	          process.env.NODE_ENV !== 'production' ? warning(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]) : undefined;
	          return undefined;
	        }
	      });
	    }
	  };
	  for (var fnName in deprecatedAPIs) {
	    if (deprecatedAPIs.hasOwnProperty(fnName)) {
	      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
	    }
	  }
	}

	module.exports = ReactComponent;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactNoopUpdateQueue
	 */

	'use strict';

	var warning = __webpack_require__(26);

	function warnTDZ(publicInstance, callerName) {
	  if (process.env.NODE_ENV !== 'production') {
	    process.env.NODE_ENV !== 'production' ? warning(false, '%s(...): Can only update a mounted or mounting component. ' + 'This usually means you called %s() on an unmounted component. ' + 'This is a no-op. Please check the code for the %s component.', callerName, callerName, publicInstance.constructor && publicInstance.constructor.displayName || '') : undefined;
	  }
	}

	/**
	 * This is the abstract API for an update queue.
	 */
	var ReactNoopUpdateQueue = {

	  /**
	   * Checks whether or not this composite component is mounted.
	   * @param {ReactClass} publicInstance The instance we want to test.
	   * @return {boolean} True if mounted, false otherwise.
	   * @protected
	   * @final
	   */
	  isMounted: function isMounted(publicInstance) {
	    return false;
	  },

	  /**
	   * Enqueue a callback that will be executed after all the pending updates
	   * have processed.
	   *
	   * @param {ReactClass} publicInstance The instance to use as `this` context.
	   * @param {?function} callback Called after state is updated.
	   * @internal
	   */
	  enqueueCallback: function enqueueCallback(publicInstance, callback) {},

	  /**
	   * Forces an update. This should only be invoked when it is known with
	   * certainty that we are **not** in a DOM transaction.
	   *
	   * You may want to call this when you know that some deeper aspect of the
	   * component's state has changed but `setState` was not called.
	   *
	   * This will not invoke `shouldComponentUpdate`, but it will invoke
	   * `componentWillUpdate` and `componentDidUpdate`.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @internal
	   */
	  enqueueForceUpdate: function enqueueForceUpdate(publicInstance) {
	    warnTDZ(publicInstance, 'forceUpdate');
	  },

	  /**
	   * Replaces all of the state. Always use this or `setState` to mutate state.
	   * You should treat `this.state` as immutable.
	   *
	   * There is no guarantee that `this.state` will be immediately updated, so
	   * accessing `this.state` after calling this method may return the old value.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} completeState Next state.
	   * @internal
	   */
	  enqueueReplaceState: function enqueueReplaceState(publicInstance, completeState) {
	    warnTDZ(publicInstance, 'replaceState');
	  },

	  /**
	   * Sets a subset of the state. This only exists because _pendingState is
	   * internal. This provides a merging strategy that is not available to deep
	   * properties which is confusing. TODO: Expose pendingState or don't use it
	   * during the merge.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} partialState Next partial state to be merged with state.
	   * @internal
	   */
	  enqueueSetState: function enqueueSetState(publicInstance, partialState) {
	    warnTDZ(publicInstance, 'setState');
	  },

	  /**
	   * Sets a subset of the props.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} partialProps Subset of the next props.
	   * @internal
	   */
	  enqueueSetProps: function enqueueSetProps(publicInstance, partialProps) {
	    warnTDZ(publicInstance, 'setProps');
	  },

	  /**
	   * Replaces all of the props.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} props New props.
	   * @internal
	   */
	  enqueueReplaceProps: function enqueueReplaceProps(publicInstance, props) {
	    warnTDZ(publicInstance, 'replaceProps');
	  }

	};

	module.exports = ReactNoopUpdateQueue;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactReconcileTransaction
	 * @typechecks static-only
	 */

	'use strict';

	var CallbackQueue = __webpack_require__(56);
	var PooledClass = __webpack_require__(57);
	var ReactBrowserEventEmitter = __webpack_require__(30);
	var ReactDOMFeatureFlags = __webpack_require__(42);
	var ReactInputSelection = __webpack_require__(127);
	var Transaction = __webpack_require__(58);

	var assign = __webpack_require__(40);

	/**
	 * Ensures that, when possible, the selection range (currently selected text
	 * input) is not disturbed by performing the transaction.
	 */
	var SELECTION_RESTORATION = {
	  /**
	   * @return {Selection} Selection information.
	   */
	  initialize: ReactInputSelection.getSelectionInformation,
	  /**
	   * @param {Selection} sel Selection information returned from `initialize`.
	   */
	  close: ReactInputSelection.restoreSelection
	};

	/**
	 * Suppresses events (blur/focus) that could be inadvertently dispatched due to
	 * high level DOM manipulations (like temporarily removing a text input from the
	 * DOM).
	 */
	var EVENT_SUPPRESSION = {
	  /**
	   * @return {boolean} The enabled status of `ReactBrowserEventEmitter` before
	   * the reconciliation.
	   */
	  initialize: function initialize() {
	    var currentlyEnabled = ReactBrowserEventEmitter.isEnabled();
	    ReactBrowserEventEmitter.setEnabled(false);
	    return currentlyEnabled;
	  },

	  /**
	   * @param {boolean} previouslyEnabled Enabled status of
	   *   `ReactBrowserEventEmitter` before the reconciliation occurred. `close`
	   *   restores the previous value.
	   */
	  close: function close(previouslyEnabled) {
	    ReactBrowserEventEmitter.setEnabled(previouslyEnabled);
	  }
	};

	/**
	 * Provides a queue for collecting `componentDidMount` and
	 * `componentDidUpdate` callbacks during the the transaction.
	 */
	var ON_DOM_READY_QUEUEING = {
	  /**
	   * Initializes the internal `onDOMReady` queue.
	   */
	  initialize: function initialize() {
	    this.reactMountReady.reset();
	  },

	  /**
	   * After DOM is flushed, invoke all registered `onDOMReady` callbacks.
	   */
	  close: function close() {
	    this.reactMountReady.notifyAll();
	  }
	};

	/**
	 * Executed within the scope of the `Transaction` instance. Consider these as
	 * being member methods, but with an implied ordering while being isolated from
	 * each other.
	 */
	var TRANSACTION_WRAPPERS = [SELECTION_RESTORATION, EVENT_SUPPRESSION, ON_DOM_READY_QUEUEING];

	/**
	 * Currently:
	 * - The order that these are listed in the transaction is critical:
	 * - Suppresses events.
	 * - Restores selection range.
	 *
	 * Future:
	 * - Restore document/overflow scroll positions that were unintentionally
	 *   modified via DOM insertions above the top viewport boundary.
	 * - Implement/integrate with customized constraint based layout system and keep
	 *   track of which dimensions must be remeasured.
	 *
	 * @class ReactReconcileTransaction
	 */
	function ReactReconcileTransaction(forceHTML) {
	  this.reinitializeTransaction();
	  // Only server-side rendering really needs this option (see
	  // `ReactServerRendering`), but server-side uses
	  // `ReactServerRenderingTransaction` instead. This option is here so that it's
	  // accessible and defaults to false when `ReactDOMComponent` and
	  // `ReactTextComponent` checks it in `mountComponent`.`
	  this.renderToStaticMarkup = false;
	  this.reactMountReady = CallbackQueue.getPooled(null);
	  this.useCreateElement = !forceHTML && ReactDOMFeatureFlags.useCreateElement;
	}

	var Mixin = {
	  /**
	   * @see Transaction
	   * @abstract
	   * @final
	   * @return {array<object>} List of operation wrap procedures.
	   *   TODO: convert to array<TransactionWrapper>
	   */
	  getTransactionWrappers: function getTransactionWrappers() {
	    return TRANSACTION_WRAPPERS;
	  },

	  /**
	   * @return {object} The queue to collect `onDOMReady` callbacks with.
	   */
	  getReactMountReady: function getReactMountReady() {
	    return this.reactMountReady;
	  },

	  /**
	   * `PooledClass` looks for this, and will invoke this before allowing this
	   * instance to be reused.
	   */
	  destructor: function destructor() {
	    CallbackQueue.release(this.reactMountReady);
	    this.reactMountReady = null;
	  }
	};

	assign(ReactReconcileTransaction.prototype, Transaction.Mixin, Mixin);

	PooledClass.addPoolingTo(ReactReconcileTransaction);

	module.exports = ReactReconcileTransaction;

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactInputSelection
	 */

	'use strict';

	var ReactDOMSelection = __webpack_require__(128);

	var containsNode = __webpack_require__(60);
	var focusNode = __webpack_require__(96);
	var getActiveElement = __webpack_require__(130);

	function isInDocument(node) {
	  return containsNode(document.documentElement, node);
	}

	/**
	 * @ReactInputSelection: React input selection module. Based on Selection.js,
	 * but modified to be suitable for react and has a couple of bug fixes (doesn't
	 * assume buttons have range selections allowed).
	 * Input selection module for React.
	 */
	var ReactInputSelection = {

	  hasSelectionCapabilities: function hasSelectionCapabilities(elem) {
	    var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
	    return nodeName && (nodeName === 'input' && elem.type === 'text' || nodeName === 'textarea' || elem.contentEditable === 'true');
	  },

	  getSelectionInformation: function getSelectionInformation() {
	    var focusedElem = getActiveElement();
	    return {
	      focusedElem: focusedElem,
	      selectionRange: ReactInputSelection.hasSelectionCapabilities(focusedElem) ? ReactInputSelection.getSelection(focusedElem) : null
	    };
	  },

	  /**
	   * @restoreSelection: If any selection information was potentially lost,
	   * restore it. This is useful when performing operations that could remove dom
	   * nodes and place them back in, resulting in focus being lost.
	   */
	  restoreSelection: function restoreSelection(priorSelectionInformation) {
	    var curFocusedElem = getActiveElement();
	    var priorFocusedElem = priorSelectionInformation.focusedElem;
	    var priorSelectionRange = priorSelectionInformation.selectionRange;
	    if (curFocusedElem !== priorFocusedElem && isInDocument(priorFocusedElem)) {
	      if (ReactInputSelection.hasSelectionCapabilities(priorFocusedElem)) {
	        ReactInputSelection.setSelection(priorFocusedElem, priorSelectionRange);
	      }
	      focusNode(priorFocusedElem);
	    }
	  },

	  /**
	   * @getSelection: Gets the selection bounds of a focused textarea, input or
	   * contentEditable node.
	   * -@input: Look up selection bounds of this input
	   * -@return {start: selectionStart, end: selectionEnd}
	   */
	  getSelection: function getSelection(input) {
	    var selection;

	    if ('selectionStart' in input) {
	      // Modern browser with input or textarea.
	      selection = {
	        start: input.selectionStart,
	        end: input.selectionEnd
	      };
	    } else if (document.selection && input.nodeName && input.nodeName.toLowerCase() === 'input') {
	      // IE8 input.
	      var range = document.selection.createRange();
	      // There can only be one selection per document in IE, so it must
	      // be in our element.
	      if (range.parentElement() === input) {
	        selection = {
	          start: -range.moveStart('character', -input.value.length),
	          end: -range.moveEnd('character', -input.value.length)
	        };
	      }
	    } else {
	      // Content editable or old IE textarea.
	      selection = ReactDOMSelection.getOffsets(input);
	    }

	    return selection || { start: 0, end: 0 };
	  },

	  /**
	   * @setSelection: Sets the selection bounds of a textarea or input and focuses
	   * the input.
	   * -@input     Set selection bounds of this input or textarea
	   * -@offsets   Object of same form that is returned from get*
	   */
	  setSelection: function setSelection(input, offsets) {
	    var start = offsets.start;
	    var end = offsets.end;
	    if (typeof end === 'undefined') {
	      end = start;
	    }

	    if ('selectionStart' in input) {
	      input.selectionStart = start;
	      input.selectionEnd = Math.min(end, input.value.length);
	    } else if (document.selection && input.nodeName && input.nodeName.toLowerCase() === 'input') {
	      var range = input.createTextRange();
	      range.collapse(true);
	      range.moveStart('character', start);
	      range.moveEnd('character', end - start);
	      range.select();
	    } else {
	      ReactDOMSelection.setOffsets(input, offsets);
	    }
	  }
	};

	module.exports = ReactInputSelection;

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMSelection
	 */

	'use strict';

	var ExecutionEnvironment = __webpack_require__(10);

	var getNodeForCharacterOffset = __webpack_require__(129);
	var getTextContentAccessor = __webpack_require__(76);

	/**
	 * While `isCollapsed` is available on the Selection object and `collapsed`
	 * is available on the Range object, IE11 sometimes gets them wrong.
	 * If the anchor/focus nodes and offsets are the same, the range is collapsed.
	 */
	function isCollapsed(anchorNode, anchorOffset, focusNode, focusOffset) {
	  return anchorNode === focusNode && anchorOffset === focusOffset;
	}

	/**
	 * Get the appropriate anchor and focus node/offset pairs for IE.
	 *
	 * The catch here is that IE's selection API doesn't provide information
	 * about whether the selection is forward or backward, so we have to
	 * behave as though it's always forward.
	 *
	 * IE text differs from modern selection in that it behaves as though
	 * block elements end with a new line. This means character offsets will
	 * differ between the two APIs.
	 *
	 * @param {DOMElement} node
	 * @return {object}
	 */
	function getIEOffsets(node) {
	  var selection = document.selection;
	  var selectedRange = selection.createRange();
	  var selectedLength = selectedRange.text.length;

	  // Duplicate selection so we can move range without breaking user selection.
	  var fromStart = selectedRange.duplicate();
	  fromStart.moveToElementText(node);
	  fromStart.setEndPoint('EndToStart', selectedRange);

	  var startOffset = fromStart.text.length;
	  var endOffset = startOffset + selectedLength;

	  return {
	    start: startOffset,
	    end: endOffset
	  };
	}

	/**
	 * @param {DOMElement} node
	 * @return {?object}
	 */
	function getModernOffsets(node) {
	  var selection = window.getSelection && window.getSelection();

	  if (!selection || selection.rangeCount === 0) {
	    return null;
	  }

	  var anchorNode = selection.anchorNode;
	  var anchorOffset = selection.anchorOffset;
	  var focusNode = selection.focusNode;
	  var focusOffset = selection.focusOffset;

	  var currentRange = selection.getRangeAt(0);

	  // In Firefox, range.startContainer and range.endContainer can be "anonymous
	  // divs", e.g. the up/down buttons on an <input type="number">. Anonymous
	  // divs do not seem to expose properties, triggering a "Permission denied
	  // error" if any of its properties are accessed. The only seemingly possible
	  // way to avoid erroring is to access a property that typically works for
	  // non-anonymous divs and catch any error that may otherwise arise. See
	  // https://bugzilla.mozilla.org/show_bug.cgi?id=208427
	  try {
	    /* eslint-disable no-unused-expressions */
	    currentRange.startContainer.nodeType;
	    currentRange.endContainer.nodeType;
	    /* eslint-enable no-unused-expressions */
	  } catch (e) {
	    return null;
	  }

	  // If the node and offset values are the same, the selection is collapsed.
	  // `Selection.isCollapsed` is available natively, but IE sometimes gets
	  // this value wrong.
	  var isSelectionCollapsed = isCollapsed(selection.anchorNode, selection.anchorOffset, selection.focusNode, selection.focusOffset);

	  var rangeLength = isSelectionCollapsed ? 0 : currentRange.toString().length;

	  var tempRange = currentRange.cloneRange();
	  tempRange.selectNodeContents(node);
	  tempRange.setEnd(currentRange.startContainer, currentRange.startOffset);

	  var isTempRangeCollapsed = isCollapsed(tempRange.startContainer, tempRange.startOffset, tempRange.endContainer, tempRange.endOffset);

	  var start = isTempRangeCollapsed ? 0 : tempRange.toString().length;
	  var end = start + rangeLength;

	  // Detect whether the selection is backward.
	  var detectionRange = document.createRange();
	  detectionRange.setStart(anchorNode, anchorOffset);
	  detectionRange.setEnd(focusNode, focusOffset);
	  var isBackward = detectionRange.collapsed;

	  return {
	    start: isBackward ? end : start,
	    end: isBackward ? start : end
	  };
	}

	/**
	 * @param {DOMElement|DOMTextNode} node
	 * @param {object} offsets
	 */
	function setIEOffsets(node, offsets) {
	  var range = document.selection.createRange().duplicate();
	  var start, end;

	  if (typeof offsets.end === 'undefined') {
	    start = offsets.start;
	    end = start;
	  } else if (offsets.start > offsets.end) {
	    start = offsets.end;
	    end = offsets.start;
	  } else {
	    start = offsets.start;
	    end = offsets.end;
	  }

	  range.moveToElementText(node);
	  range.moveStart('character', start);
	  range.setEndPoint('EndToStart', range);
	  range.moveEnd('character', end - start);
	  range.select();
	}

	/**
	 * In modern non-IE browsers, we can support both forward and backward
	 * selections.
	 *
	 * Note: IE10+ supports the Selection object, but it does not support
	 * the `extend` method, which means that even in modern IE, it's not possible
	 * to programatically create a backward selection. Thus, for all IE
	 * versions, we use the old IE API to create our selections.
	 *
	 * @param {DOMElement|DOMTextNode} node
	 * @param {object} offsets
	 */
	function setModernOffsets(node, offsets) {
	  if (!window.getSelection) {
	    return;
	  }

	  var selection = window.getSelection();
	  var length = node[getTextContentAccessor()].length;
	  var start = Math.min(offsets.start, length);
	  var end = typeof offsets.end === 'undefined' ? start : Math.min(offsets.end, length);

	  // IE 11 uses modern selection, but doesn't support the extend method.
	  // Flip backward selections, so we can set with a single range.
	  if (!selection.extend && start > end) {
	    var temp = end;
	    end = start;
	    start = temp;
	  }

	  var startMarker = getNodeForCharacterOffset(node, start);
	  var endMarker = getNodeForCharacterOffset(node, end);

	  if (startMarker && endMarker) {
	    var range = document.createRange();
	    range.setStart(startMarker.node, startMarker.offset);
	    selection.removeAllRanges();

	    if (start > end) {
	      selection.addRange(range);
	      selection.extend(endMarker.node, endMarker.offset);
	    } else {
	      range.setEnd(endMarker.node, endMarker.offset);
	      selection.addRange(range);
	    }
	  }
	}

	var useIEOffsets = ExecutionEnvironment.canUseDOM && 'selection' in document && !('getSelection' in window);

	var ReactDOMSelection = {
	  /**
	   * @param {DOMElement} node
	   */
	  getOffsets: useIEOffsets ? getIEOffsets : getModernOffsets,

	  /**
	   * @param {DOMElement|DOMTextNode} node
	   * @param {object} offsets
	   */
	  setOffsets: useIEOffsets ? setIEOffsets : setModernOffsets
	};

	module.exports = ReactDOMSelection;

/***/ },
/* 129 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getNodeForCharacterOffset
	 */

	'use strict';

	/**
	 * Given any node return the first leaf node without children.
	 *
	 * @param {DOMElement|DOMTextNode} node
	 * @return {DOMElement|DOMTextNode}
	 */

	function getLeafNode(node) {
	  while (node && node.firstChild) {
	    node = node.firstChild;
	  }
	  return node;
	}

	/**
	 * Get the next sibling within a container. This will walk up the
	 * DOM if a node's siblings have been exhausted.
	 *
	 * @param {DOMElement|DOMTextNode} node
	 * @return {?DOMElement|DOMTextNode}
	 */
	function getSiblingNode(node) {
	  while (node) {
	    if (node.nextSibling) {
	      return node.nextSibling;
	    }
	    node = node.parentNode;
	  }
	}

	/**
	 * Get object describing the nodes which contain characters at offset.
	 *
	 * @param {DOMElement|DOMTextNode} root
	 * @param {number} offset
	 * @return {?object}
	 */
	function getNodeForCharacterOffset(root, offset) {
	  var node = getLeafNode(root);
	  var nodeStart = 0;
	  var nodeEnd = 0;

	  while (node) {
	    if (node.nodeType === 3) {
	      nodeEnd = nodeStart + node.textContent.length;

	      if (nodeStart <= offset && nodeEnd >= offset) {
	        return {
	          node: node,
	          offset: offset - nodeStart
	        };
	      }

	      nodeStart = nodeEnd;
	    }

	    node = getLeafNode(getSiblingNode(node));
	  }
	}

	module.exports = getNodeForCharacterOffset;

/***/ },
/* 130 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getActiveElement
	 * @typechecks
	 */

	/* eslint-disable fb-www/typeof-undefined */

	/**
	 * Same as document.activeElement but wraps in a try-catch block. In IE it is
	 * not safe to call document.activeElement if there is nothing focused.
	 *
	 * The activeElement will be null only if the document or document body is not
	 * yet defined.
	 */
	'use strict';

	function getActiveElement() /*?DOMElement*/{
	  if (typeof document === 'undefined') {
	    return null;
	  }
	  try {
	    return document.activeElement || document.body;
	  } catch (e) {
	    return document.body;
	  }
	}

	module.exports = getActiveElement;

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SelectEventPlugin
	 */

	'use strict';

	var EventConstants = __webpack_require__(31);
	var EventPropagators = __webpack_require__(74);
	var ExecutionEnvironment = __webpack_require__(10);
	var ReactInputSelection = __webpack_require__(127);
	var SyntheticEvent = __webpack_require__(78);

	var getActiveElement = __webpack_require__(130);
	var isTextInputElement = __webpack_require__(83);
	var keyOf = __webpack_require__(80);
	var shallowEqual = __webpack_require__(118);

	var topLevelTypes = EventConstants.topLevelTypes;

	var skipSelectionChangeEvent = ExecutionEnvironment.canUseDOM && 'documentMode' in document && document.documentMode <= 11;

	var eventTypes = {
	  select: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onSelect: null }),
	      captured: keyOf({ onSelectCapture: null })
	    },
	    dependencies: [topLevelTypes.topBlur, topLevelTypes.topContextMenu, topLevelTypes.topFocus, topLevelTypes.topKeyDown, topLevelTypes.topMouseDown, topLevelTypes.topMouseUp, topLevelTypes.topSelectionChange]
	  }
	};

	var activeElement = null;
	var activeElementID = null;
	var lastSelection = null;
	var mouseDown = false;

	// Track whether a listener exists for this plugin. If none exist, we do
	// not extract events.
	var hasListener = false;
	var ON_SELECT_KEY = keyOf({ onSelect: null });

	/**
	 * Get an object which is a unique representation of the current selection.
	 *
	 * The return value will not be consistent across nodes or browsers, but
	 * two identical selections on the same node will return identical objects.
	 *
	 * @param {DOMElement} node
	 * @return {object}
	 */
	function getSelection(node) {
	  if ('selectionStart' in node && ReactInputSelection.hasSelectionCapabilities(node)) {
	    return {
	      start: node.selectionStart,
	      end: node.selectionEnd
	    };
	  } else if (window.getSelection) {
	    var selection = window.getSelection();
	    return {
	      anchorNode: selection.anchorNode,
	      anchorOffset: selection.anchorOffset,
	      focusNode: selection.focusNode,
	      focusOffset: selection.focusOffset
	    };
	  } else if (document.selection) {
	    var range = document.selection.createRange();
	    return {
	      parentElement: range.parentElement(),
	      text: range.text,
	      top: range.boundingTop,
	      left: range.boundingLeft
	    };
	  }
	}

	/**
	 * Poll selection to see whether it's changed.
	 *
	 * @param {object} nativeEvent
	 * @return {?SyntheticEvent}
	 */
	function constructSelectEvent(nativeEvent, nativeEventTarget) {
	  // Ensure we have the right element, and that the user is not dragging a
	  // selection (this matches native `select` event behavior). In HTML5, select
	  // fires only on input and textarea thus if there's no focused element we
	  // won't dispatch.
	  if (mouseDown || activeElement == null || activeElement !== getActiveElement()) {
	    return null;
	  }

	  // Only fire when selection has actually changed.
	  var currentSelection = getSelection(activeElement);
	  if (!lastSelection || !shallowEqual(lastSelection, currentSelection)) {
	    lastSelection = currentSelection;

	    var syntheticEvent = SyntheticEvent.getPooled(eventTypes.select, activeElementID, nativeEvent, nativeEventTarget);

	    syntheticEvent.type = 'select';
	    syntheticEvent.target = activeElement;

	    EventPropagators.accumulateTwoPhaseDispatches(syntheticEvent);

	    return syntheticEvent;
	  }

	  return null;
	}

	/**
	 * This plugin creates an `onSelect` event that normalizes select events
	 * across form elements.
	 *
	 * Supported elements are:
	 * - input (see `isTextInputElement`)
	 * - textarea
	 * - contentEditable
	 *
	 * This differs from native browser implementations in the following ways:
	 * - Fires on contentEditable fields as well as inputs.
	 * - Fires for collapsed selection.
	 * - Fires after user input.
	 */
	var SelectEventPlugin = {

	  eventTypes: eventTypes,

	  /**
	   * @param {string} topLevelType Record from `EventConstants`.
	   * @param {DOMEventTarget} topLevelTarget The listening component root node.
	   * @param {string} topLevelTargetID ID of `topLevelTarget`.
	   * @param {object} nativeEvent Native browser event.
	   * @return {*} An accumulation of synthetic events.
	   * @see {EventPluginHub.extractEvents}
	   */
	  extractEvents: function extractEvents(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget) {
	    if (!hasListener) {
	      return null;
	    }

	    switch (topLevelType) {
	      // Track the input node that has focus.
	      case topLevelTypes.topFocus:
	        if (isTextInputElement(topLevelTarget) || topLevelTarget.contentEditable === 'true') {
	          activeElement = topLevelTarget;
	          activeElementID = topLevelTargetID;
	          lastSelection = null;
	        }
	        break;
	      case topLevelTypes.topBlur:
	        activeElement = null;
	        activeElementID = null;
	        lastSelection = null;
	        break;

	      // Don't fire the event while the user is dragging. This matches the
	      // semantics of the native select event.
	      case topLevelTypes.topMouseDown:
	        mouseDown = true;
	        break;
	      case topLevelTypes.topContextMenu:
	      case topLevelTypes.topMouseUp:
	        mouseDown = false;
	        return constructSelectEvent(nativeEvent, nativeEventTarget);

	      // Chrome and IE fire non-standard event when selection is changed (and
	      // sometimes when it hasn't). IE's event fires out of order with respect
	      // to key and input events on deletion, so we discard it.
	      //
	      // Firefox doesn't support selectionchange, so check selection status
	      // after each key entry. The selection changes after keydown and before
	      // keyup, but we check on keydown as well in the case of holding down a
	      // key, when multiple keydown events are fired but only one keyup is.
	      // This is also our approach for IE handling, for the reason above.
	      case topLevelTypes.topSelectionChange:
	        if (skipSelectionChangeEvent) {
	          break;
	        }
	      // falls through
	      case topLevelTypes.topKeyDown:
	      case topLevelTypes.topKeyUp:
	        return constructSelectEvent(nativeEvent, nativeEventTarget);
	    }

	    return null;
	  },

	  didPutListener: function didPutListener(id, registrationName, listener) {
	    if (registrationName === ON_SELECT_KEY) {
	      hasListener = true;
	    }
	  }
	};

	module.exports = SelectEventPlugin;

/***/ },
/* 132 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ServerReactRootIndex
	 * @typechecks
	 */

	'use strict';

	/**
	 * Size of the reactRoot ID space. We generate random numbers for React root
	 * IDs and if there's a collision the events and DOM update system will
	 * get confused. In the future we need a way to generate GUIDs but for
	 * now this will work on a smaller scale.
	 */

	var GLOBAL_MOUNT_POINT_MAX = Math.pow(2, 53);

	var ServerReactRootIndex = {
	  createReactRootIndex: function createReactRootIndex() {
	    return Math.ceil(Math.random() * GLOBAL_MOUNT_POINT_MAX);
	  }
	};

	module.exports = ServerReactRootIndex;

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SimpleEventPlugin
	 */

	'use strict';

	var EventConstants = __webpack_require__(31);
	var EventListener = __webpack_require__(120);
	var EventPropagators = __webpack_require__(74);
	var ReactMount = __webpack_require__(29);
	var SyntheticClipboardEvent = __webpack_require__(134);
	var SyntheticEvent = __webpack_require__(78);
	var SyntheticFocusEvent = __webpack_require__(135);
	var SyntheticKeyboardEvent = __webpack_require__(136);
	var SyntheticMouseEvent = __webpack_require__(87);
	var SyntheticDragEvent = __webpack_require__(139);
	var SyntheticTouchEvent = __webpack_require__(140);
	var SyntheticUIEvent = __webpack_require__(88);
	var SyntheticWheelEvent = __webpack_require__(141);

	var emptyFunction = __webpack_require__(16);
	var getEventCharCode = __webpack_require__(137);
	var invariant = __webpack_require__(14);
	var keyOf = __webpack_require__(80);

	var topLevelTypes = EventConstants.topLevelTypes;

	var eventTypes = {
	  abort: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onAbort: true }),
	      captured: keyOf({ onAbortCapture: true })
	    }
	  },
	  blur: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onBlur: true }),
	      captured: keyOf({ onBlurCapture: true })
	    }
	  },
	  canPlay: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onCanPlay: true }),
	      captured: keyOf({ onCanPlayCapture: true })
	    }
	  },
	  canPlayThrough: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onCanPlayThrough: true }),
	      captured: keyOf({ onCanPlayThroughCapture: true })
	    }
	  },
	  click: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onClick: true }),
	      captured: keyOf({ onClickCapture: true })
	    }
	  },
	  contextMenu: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onContextMenu: true }),
	      captured: keyOf({ onContextMenuCapture: true })
	    }
	  },
	  copy: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onCopy: true }),
	      captured: keyOf({ onCopyCapture: true })
	    }
	  },
	  cut: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onCut: true }),
	      captured: keyOf({ onCutCapture: true })
	    }
	  },
	  doubleClick: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onDoubleClick: true }),
	      captured: keyOf({ onDoubleClickCapture: true })
	    }
	  },
	  drag: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onDrag: true }),
	      captured: keyOf({ onDragCapture: true })
	    }
	  },
	  dragEnd: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onDragEnd: true }),
	      captured: keyOf({ onDragEndCapture: true })
	    }
	  },
	  dragEnter: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onDragEnter: true }),
	      captured: keyOf({ onDragEnterCapture: true })
	    }
	  },
	  dragExit: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onDragExit: true }),
	      captured: keyOf({ onDragExitCapture: true })
	    }
	  },
	  dragLeave: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onDragLeave: true }),
	      captured: keyOf({ onDragLeaveCapture: true })
	    }
	  },
	  dragOver: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onDragOver: true }),
	      captured: keyOf({ onDragOverCapture: true })
	    }
	  },
	  dragStart: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onDragStart: true }),
	      captured: keyOf({ onDragStartCapture: true })
	    }
	  },
	  drop: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onDrop: true }),
	      captured: keyOf({ onDropCapture: true })
	    }
	  },
	  durationChange: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onDurationChange: true }),
	      captured: keyOf({ onDurationChangeCapture: true })
	    }
	  },
	  emptied: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onEmptied: true }),
	      captured: keyOf({ onEmptiedCapture: true })
	    }
	  },
	  encrypted: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onEncrypted: true }),
	      captured: keyOf({ onEncryptedCapture: true })
	    }
	  },
	  ended: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onEnded: true }),
	      captured: keyOf({ onEndedCapture: true })
	    }
	  },
	  error: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onError: true }),
	      captured: keyOf({ onErrorCapture: true })
	    }
	  },
	  focus: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onFocus: true }),
	      captured: keyOf({ onFocusCapture: true })
	    }
	  },
	  input: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onInput: true }),
	      captured: keyOf({ onInputCapture: true })
	    }
	  },
	  keyDown: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onKeyDown: true }),
	      captured: keyOf({ onKeyDownCapture: true })
	    }
	  },
	  keyPress: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onKeyPress: true }),
	      captured: keyOf({ onKeyPressCapture: true })
	    }
	  },
	  keyUp: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onKeyUp: true }),
	      captured: keyOf({ onKeyUpCapture: true })
	    }
	  },
	  load: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onLoad: true }),
	      captured: keyOf({ onLoadCapture: true })
	    }
	  },
	  loadedData: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onLoadedData: true }),
	      captured: keyOf({ onLoadedDataCapture: true })
	    }
	  },
	  loadedMetadata: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onLoadedMetadata: true }),
	      captured: keyOf({ onLoadedMetadataCapture: true })
	    }
	  },
	  loadStart: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onLoadStart: true }),
	      captured: keyOf({ onLoadStartCapture: true })
	    }
	  },
	  // Note: We do not allow listening to mouseOver events. Instead, use the
	  // onMouseEnter/onMouseLeave created by `EnterLeaveEventPlugin`.
	  mouseDown: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onMouseDown: true }),
	      captured: keyOf({ onMouseDownCapture: true })
	    }
	  },
	  mouseMove: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onMouseMove: true }),
	      captured: keyOf({ onMouseMoveCapture: true })
	    }
	  },
	  mouseOut: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onMouseOut: true }),
	      captured: keyOf({ onMouseOutCapture: true })
	    }
	  },
	  mouseOver: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onMouseOver: true }),
	      captured: keyOf({ onMouseOverCapture: true })
	    }
	  },
	  mouseUp: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onMouseUp: true }),
	      captured: keyOf({ onMouseUpCapture: true })
	    }
	  },
	  paste: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onPaste: true }),
	      captured: keyOf({ onPasteCapture: true })
	    }
	  },
	  pause: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onPause: true }),
	      captured: keyOf({ onPauseCapture: true })
	    }
	  },
	  play: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onPlay: true }),
	      captured: keyOf({ onPlayCapture: true })
	    }
	  },
	  playing: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onPlaying: true }),
	      captured: keyOf({ onPlayingCapture: true })
	    }
	  },
	  progress: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onProgress: true }),
	      captured: keyOf({ onProgressCapture: true })
	    }
	  },
	  rateChange: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onRateChange: true }),
	      captured: keyOf({ onRateChangeCapture: true })
	    }
	  },
	  reset: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onReset: true }),
	      captured: keyOf({ onResetCapture: true })
	    }
	  },
	  scroll: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onScroll: true }),
	      captured: keyOf({ onScrollCapture: true })
	    }
	  },
	  seeked: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onSeeked: true }),
	      captured: keyOf({ onSeekedCapture: true })
	    }
	  },
	  seeking: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onSeeking: true }),
	      captured: keyOf({ onSeekingCapture: true })
	    }
	  },
	  stalled: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onStalled: true }),
	      captured: keyOf({ onStalledCapture: true })
	    }
	  },
	  submit: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onSubmit: true }),
	      captured: keyOf({ onSubmitCapture: true })
	    }
	  },
	  suspend: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onSuspend: true }),
	      captured: keyOf({ onSuspendCapture: true })
	    }
	  },
	  timeUpdate: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onTimeUpdate: true }),
	      captured: keyOf({ onTimeUpdateCapture: true })
	    }
	  },
	  touchCancel: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onTouchCancel: true }),
	      captured: keyOf({ onTouchCancelCapture: true })
	    }
	  },
	  touchEnd: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onTouchEnd: true }),
	      captured: keyOf({ onTouchEndCapture: true })
	    }
	  },
	  touchMove: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onTouchMove: true }),
	      captured: keyOf({ onTouchMoveCapture: true })
	    }
	  },
	  touchStart: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onTouchStart: true }),
	      captured: keyOf({ onTouchStartCapture: true })
	    }
	  },
	  volumeChange: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onVolumeChange: true }),
	      captured: keyOf({ onVolumeChangeCapture: true })
	    }
	  },
	  waiting: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onWaiting: true }),
	      captured: keyOf({ onWaitingCapture: true })
	    }
	  },
	  wheel: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onWheel: true }),
	      captured: keyOf({ onWheelCapture: true })
	    }
	  }
	};

	var topLevelEventsToDispatchConfig = {
	  topAbort: eventTypes.abort,
	  topBlur: eventTypes.blur,
	  topCanPlay: eventTypes.canPlay,
	  topCanPlayThrough: eventTypes.canPlayThrough,
	  topClick: eventTypes.click,
	  topContextMenu: eventTypes.contextMenu,
	  topCopy: eventTypes.copy,
	  topCut: eventTypes.cut,
	  topDoubleClick: eventTypes.doubleClick,
	  topDrag: eventTypes.drag,
	  topDragEnd: eventTypes.dragEnd,
	  topDragEnter: eventTypes.dragEnter,
	  topDragExit: eventTypes.dragExit,
	  topDragLeave: eventTypes.dragLeave,
	  topDragOver: eventTypes.dragOver,
	  topDragStart: eventTypes.dragStart,
	  topDrop: eventTypes.drop,
	  topDurationChange: eventTypes.durationChange,
	  topEmptied: eventTypes.emptied,
	  topEncrypted: eventTypes.encrypted,
	  topEnded: eventTypes.ended,
	  topError: eventTypes.error,
	  topFocus: eventTypes.focus,
	  topInput: eventTypes.input,
	  topKeyDown: eventTypes.keyDown,
	  topKeyPress: eventTypes.keyPress,
	  topKeyUp: eventTypes.keyUp,
	  topLoad: eventTypes.load,
	  topLoadedData: eventTypes.loadedData,
	  topLoadedMetadata: eventTypes.loadedMetadata,
	  topLoadStart: eventTypes.loadStart,
	  topMouseDown: eventTypes.mouseDown,
	  topMouseMove: eventTypes.mouseMove,
	  topMouseOut: eventTypes.mouseOut,
	  topMouseOver: eventTypes.mouseOver,
	  topMouseUp: eventTypes.mouseUp,
	  topPaste: eventTypes.paste,
	  topPause: eventTypes.pause,
	  topPlay: eventTypes.play,
	  topPlaying: eventTypes.playing,
	  topProgress: eventTypes.progress,
	  topRateChange: eventTypes.rateChange,
	  topReset: eventTypes.reset,
	  topScroll: eventTypes.scroll,
	  topSeeked: eventTypes.seeked,
	  topSeeking: eventTypes.seeking,
	  topStalled: eventTypes.stalled,
	  topSubmit: eventTypes.submit,
	  topSuspend: eventTypes.suspend,
	  topTimeUpdate: eventTypes.timeUpdate,
	  topTouchCancel: eventTypes.touchCancel,
	  topTouchEnd: eventTypes.touchEnd,
	  topTouchMove: eventTypes.touchMove,
	  topTouchStart: eventTypes.touchStart,
	  topVolumeChange: eventTypes.volumeChange,
	  topWaiting: eventTypes.waiting,
	  topWheel: eventTypes.wheel
	};

	for (var type in topLevelEventsToDispatchConfig) {
	  topLevelEventsToDispatchConfig[type].dependencies = [type];
	}

	var ON_CLICK_KEY = keyOf({ onClick: null });
	var onClickListeners = {};

	var SimpleEventPlugin = {

	  eventTypes: eventTypes,

	  /**
	   * @param {string} topLevelType Record from `EventConstants`.
	   * @param {DOMEventTarget} topLevelTarget The listening component root node.
	   * @param {string} topLevelTargetID ID of `topLevelTarget`.
	   * @param {object} nativeEvent Native browser event.
	   * @return {*} An accumulation of synthetic events.
	   * @see {EventPluginHub.extractEvents}
	   */
	  extractEvents: function extractEvents(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget) {
	    var dispatchConfig = topLevelEventsToDispatchConfig[topLevelType];
	    if (!dispatchConfig) {
	      return null;
	    }
	    var EventConstructor;
	    switch (topLevelType) {
	      case topLevelTypes.topAbort:
	      case topLevelTypes.topCanPlay:
	      case topLevelTypes.topCanPlayThrough:
	      case topLevelTypes.topDurationChange:
	      case topLevelTypes.topEmptied:
	      case topLevelTypes.topEncrypted:
	      case topLevelTypes.topEnded:
	      case topLevelTypes.topError:
	      case topLevelTypes.topInput:
	      case topLevelTypes.topLoad:
	      case topLevelTypes.topLoadedData:
	      case topLevelTypes.topLoadedMetadata:
	      case topLevelTypes.topLoadStart:
	      case topLevelTypes.topPause:
	      case topLevelTypes.topPlay:
	      case topLevelTypes.topPlaying:
	      case topLevelTypes.topProgress:
	      case topLevelTypes.topRateChange:
	      case topLevelTypes.topReset:
	      case topLevelTypes.topSeeked:
	      case topLevelTypes.topSeeking:
	      case topLevelTypes.topStalled:
	      case topLevelTypes.topSubmit:
	      case topLevelTypes.topSuspend:
	      case topLevelTypes.topTimeUpdate:
	      case topLevelTypes.topVolumeChange:
	      case topLevelTypes.topWaiting:
	        // HTML Events
	        // @see http://www.w3.org/TR/html5/index.html#events-0
	        EventConstructor = SyntheticEvent;
	        break;
	      case topLevelTypes.topKeyPress:
	        // FireFox creates a keypress event for function keys too. This removes
	        // the unwanted keypress events. Enter is however both printable and
	        // non-printable. One would expect Tab to be as well (but it isn't).
	        if (getEventCharCode(nativeEvent) === 0) {
	          return null;
	        }
	      /* falls through */
	      case topLevelTypes.topKeyDown:
	      case topLevelTypes.topKeyUp:
	        EventConstructor = SyntheticKeyboardEvent;
	        break;
	      case topLevelTypes.topBlur:
	      case topLevelTypes.topFocus:
	        EventConstructor = SyntheticFocusEvent;
	        break;
	      case topLevelTypes.topClick:
	        // Firefox creates a click event on right mouse clicks. This removes the
	        // unwanted click events.
	        if (nativeEvent.button === 2) {
	          return null;
	        }
	      /* falls through */
	      case topLevelTypes.topContextMenu:
	      case topLevelTypes.topDoubleClick:
	      case topLevelTypes.topMouseDown:
	      case topLevelTypes.topMouseMove:
	      case topLevelTypes.topMouseOut:
	      case topLevelTypes.topMouseOver:
	      case topLevelTypes.topMouseUp:
	        EventConstructor = SyntheticMouseEvent;
	        break;
	      case topLevelTypes.topDrag:
	      case topLevelTypes.topDragEnd:
	      case topLevelTypes.topDragEnter:
	      case topLevelTypes.topDragExit:
	      case topLevelTypes.topDragLeave:
	      case topLevelTypes.topDragOver:
	      case topLevelTypes.topDragStart:
	      case topLevelTypes.topDrop:
	        EventConstructor = SyntheticDragEvent;
	        break;
	      case topLevelTypes.topTouchCancel:
	      case topLevelTypes.topTouchEnd:
	      case topLevelTypes.topTouchMove:
	      case topLevelTypes.topTouchStart:
	        EventConstructor = SyntheticTouchEvent;
	        break;
	      case topLevelTypes.topScroll:
	        EventConstructor = SyntheticUIEvent;
	        break;
	      case topLevelTypes.topWheel:
	        EventConstructor = SyntheticWheelEvent;
	        break;
	      case topLevelTypes.topCopy:
	      case topLevelTypes.topCut:
	      case topLevelTypes.topPaste:
	        EventConstructor = SyntheticClipboardEvent;
	        break;
	    }
	    !EventConstructor ? process.env.NODE_ENV !== 'production' ? invariant(false, 'SimpleEventPlugin: Unhandled event type, `%s`.', topLevelType) : invariant(false) : undefined;
	    var event = EventConstructor.getPooled(dispatchConfig, topLevelTargetID, nativeEvent, nativeEventTarget);
	    EventPropagators.accumulateTwoPhaseDispatches(event);
	    return event;
	  },

	  didPutListener: function didPutListener(id, registrationName, listener) {
	    // Mobile Safari does not fire properly bubble click events on
	    // non-interactive elements, which means delegated click listeners do not
	    // fire. The workaround for this bug involves attaching an empty click
	    // listener on the target node.
	    if (registrationName === ON_CLICK_KEY) {
	      var node = ReactMount.getNode(id);
	      if (!onClickListeners[id]) {
	        onClickListeners[id] = EventListener.listen(node, 'click', emptyFunction);
	      }
	    }
	  },

	  willDeleteListener: function willDeleteListener(id, registrationName) {
	    if (registrationName === ON_CLICK_KEY) {
	      onClickListeners[id].remove();
	      delete onClickListeners[id];
	    }
	  }

	};

	module.exports = SimpleEventPlugin;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticClipboardEvent
	 * @typechecks static-only
	 */

	'use strict';

	var SyntheticEvent = __webpack_require__(78);

	/**
	 * @interface Event
	 * @see http://www.w3.org/TR/clipboard-apis/
	 */
	var ClipboardEventInterface = {
	  clipboardData: function clipboardData(event) {
	    return 'clipboardData' in event ? event.clipboardData : window.clipboardData;
	  }
	};

	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
	function SyntheticClipboardEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
	  SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	}

	SyntheticEvent.augmentClass(SyntheticClipboardEvent, ClipboardEventInterface);

	module.exports = SyntheticClipboardEvent;

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticFocusEvent
	 * @typechecks static-only
	 */

	'use strict';

	var SyntheticUIEvent = __webpack_require__(88);

	/**
	 * @interface FocusEvent
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/
	 */
	var FocusEventInterface = {
	  relatedTarget: null
	};

	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
	function SyntheticFocusEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
	  SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	}

	SyntheticUIEvent.augmentClass(SyntheticFocusEvent, FocusEventInterface);

	module.exports = SyntheticFocusEvent;

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticKeyboardEvent
	 * @typechecks static-only
	 */

	'use strict';

	var SyntheticUIEvent = __webpack_require__(88);

	var getEventCharCode = __webpack_require__(137);
	var getEventKey = __webpack_require__(138);
	var getEventModifierState = __webpack_require__(89);

	/**
	 * @interface KeyboardEvent
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/
	 */
	var KeyboardEventInterface = {
	  key: getEventKey,
	  location: null,
	  ctrlKey: null,
	  shiftKey: null,
	  altKey: null,
	  metaKey: null,
	  repeat: null,
	  locale: null,
	  getModifierState: getEventModifierState,
	  // Legacy Interface
	  charCode: function charCode(event) {
	    // `charCode` is the result of a KeyPress event and represents the value of
	    // the actual printable character.

	    // KeyPress is deprecated, but its replacement is not yet final and not
	    // implemented in any major browser. Only KeyPress has charCode.
	    if (event.type === 'keypress') {
	      return getEventCharCode(event);
	    }
	    return 0;
	  },
	  keyCode: function keyCode(event) {
	    // `keyCode` is the result of a KeyDown/Up event and represents the value of
	    // physical keyboard key.

	    // The actual meaning of the value depends on the users' keyboard layout
	    // which cannot be detected. Assuming that it is a US keyboard layout
	    // provides a surprisingly accurate mapping for US and European users.
	    // Due to this, it is left to the user to implement at this time.
	    if (event.type === 'keydown' || event.type === 'keyup') {
	      return event.keyCode;
	    }
	    return 0;
	  },
	  which: function which(event) {
	    // `which` is an alias for either `keyCode` or `charCode` depending on the
	    // type of the event.
	    if (event.type === 'keypress') {
	      return getEventCharCode(event);
	    }
	    if (event.type === 'keydown' || event.type === 'keyup') {
	      return event.keyCode;
	    }
	    return 0;
	  }
	};

	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
	function SyntheticKeyboardEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
	  SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	}

	SyntheticUIEvent.augmentClass(SyntheticKeyboardEvent, KeyboardEventInterface);

	module.exports = SyntheticKeyboardEvent;

/***/ },
/* 137 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getEventCharCode
	 * @typechecks static-only
	 */

	'use strict';

	/**
	 * `charCode` represents the actual "character code" and is safe to use with
	 * `String.fromCharCode`. As such, only keys that correspond to printable
	 * characters produce a valid `charCode`, the only exception to this is Enter.
	 * The Tab-key is considered non-printable and does not have a `charCode`,
	 * presumably because it does not produce a tab-character in browsers.
	 *
	 * @param {object} nativeEvent Native browser event.
	 * @return {number} Normalized `charCode` property.
	 */

	function getEventCharCode(nativeEvent) {
	  var charCode;
	  var keyCode = nativeEvent.keyCode;

	  if ('charCode' in nativeEvent) {
	    charCode = nativeEvent.charCode;

	    // FF does not set `charCode` for the Enter-key, check against `keyCode`.
	    if (charCode === 0 && keyCode === 13) {
	      charCode = 13;
	    }
	  } else {
	    // IE8 does not implement `charCode`, but `keyCode` has the correct value.
	    charCode = keyCode;
	  }

	  // Some non-printable keys are reported in `charCode`/`keyCode`, discard them.
	  // Must not discard the (non-)printable Enter-key.
	  if (charCode >= 32 || charCode === 13) {
	    return charCode;
	  }

	  return 0;
	}

	module.exports = getEventCharCode;

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getEventKey
	 * @typechecks static-only
	 */

	'use strict';

	var getEventCharCode = __webpack_require__(137);

	/**
	 * Normalization of deprecated HTML5 `key` values
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent#Key_names
	 */
	var normalizeKey = {
	  'Esc': 'Escape',
	  'Spacebar': ' ',
	  'Left': 'ArrowLeft',
	  'Up': 'ArrowUp',
	  'Right': 'ArrowRight',
	  'Down': 'ArrowDown',
	  'Del': 'Delete',
	  'Win': 'OS',
	  'Menu': 'ContextMenu',
	  'Apps': 'ContextMenu',
	  'Scroll': 'ScrollLock',
	  'MozPrintableKey': 'Unidentified'
	};

	/**
	 * Translation from legacy `keyCode` to HTML5 `key`
	 * Only special keys supported, all others depend on keyboard layout or browser
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent#Key_names
	 */
	var translateToKey = {
	  8: 'Backspace',
	  9: 'Tab',
	  12: 'Clear',
	  13: 'Enter',
	  16: 'Shift',
	  17: 'Control',
	  18: 'Alt',
	  19: 'Pause',
	  20: 'CapsLock',
	  27: 'Escape',
	  32: ' ',
	  33: 'PageUp',
	  34: 'PageDown',
	  35: 'End',
	  36: 'Home',
	  37: 'ArrowLeft',
	  38: 'ArrowUp',
	  39: 'ArrowRight',
	  40: 'ArrowDown',
	  45: 'Insert',
	  46: 'Delete',
	  112: 'F1', 113: 'F2', 114: 'F3', 115: 'F4', 116: 'F5', 117: 'F6',
	  118: 'F7', 119: 'F8', 120: 'F9', 121: 'F10', 122: 'F11', 123: 'F12',
	  144: 'NumLock',
	  145: 'ScrollLock',
	  224: 'Meta'
	};

	/**
	 * @param {object} nativeEvent Native browser event.
	 * @return {string} Normalized `key` property.
	 */
	function getEventKey(nativeEvent) {
	  if (nativeEvent.key) {
	    // Normalize inconsistent values reported by browsers due to
	    // implementations of a working draft specification.

	    // FireFox implements `key` but returns `MozPrintableKey` for all
	    // printable characters (normalized to `Unidentified`), ignore it.
	    var key = normalizeKey[nativeEvent.key] || nativeEvent.key;
	    if (key !== 'Unidentified') {
	      return key;
	    }
	  }

	  // Browser does not implement `key`, polyfill as much of it as we can.
	  if (nativeEvent.type === 'keypress') {
	    var charCode = getEventCharCode(nativeEvent);

	    // The enter-key is technically both printable and non-printable and can
	    // thus be captured by `keypress`, no other non-printable key should.
	    return charCode === 13 ? 'Enter' : String.fromCharCode(charCode);
	  }
	  if (nativeEvent.type === 'keydown' || nativeEvent.type === 'keyup') {
	    // While user keyboard layout determines the actual meaning of each
	    // `keyCode` value, almost all function keys have a universal value.
	    return translateToKey[nativeEvent.keyCode] || 'Unidentified';
	  }
	  return '';
	}

	module.exports = getEventKey;

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticDragEvent
	 * @typechecks static-only
	 */

	'use strict';

	var SyntheticMouseEvent = __webpack_require__(87);

	/**
	 * @interface DragEvent
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/
	 */
	var DragEventInterface = {
	  dataTransfer: null
	};

	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
	function SyntheticDragEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
	  SyntheticMouseEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	}

	SyntheticMouseEvent.augmentClass(SyntheticDragEvent, DragEventInterface);

	module.exports = SyntheticDragEvent;

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticTouchEvent
	 * @typechecks static-only
	 */

	'use strict';

	var SyntheticUIEvent = __webpack_require__(88);

	var getEventModifierState = __webpack_require__(89);

	/**
	 * @interface TouchEvent
	 * @see http://www.w3.org/TR/touch-events/
	 */
	var TouchEventInterface = {
	  touches: null,
	  targetTouches: null,
	  changedTouches: null,
	  altKey: null,
	  metaKey: null,
	  ctrlKey: null,
	  shiftKey: null,
	  getModifierState: getEventModifierState
	};

	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
	function SyntheticTouchEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
	  SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	}

	SyntheticUIEvent.augmentClass(SyntheticTouchEvent, TouchEventInterface);

	module.exports = SyntheticTouchEvent;

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticWheelEvent
	 * @typechecks static-only
	 */

	'use strict';

	var SyntheticMouseEvent = __webpack_require__(87);

	/**
	 * @interface WheelEvent
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/
	 */
	var WheelEventInterface = {
	  deltaX: function deltaX(event) {
	    return 'deltaX' in event ? event.deltaX :
	    // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
	    'wheelDeltaX' in event ? -event.wheelDeltaX : 0;
	  },
	  deltaY: function deltaY(event) {
	    return 'deltaY' in event ? event.deltaY :
	    // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
	    'wheelDeltaY' in event ? -event.wheelDeltaY :
	    // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
	    'wheelDelta' in event ? -event.wheelDelta : 0;
	  },
	  deltaZ: null,

	  // Browsers without "deltaMode" is reporting in raw wheel delta where one
	  // notch on the scroll is always +/- 120, roughly equivalent to pixels.
	  // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
	  // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
	  deltaMode: null
	};

	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticMouseEvent}
	 */
	function SyntheticWheelEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
	  SyntheticMouseEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	}

	SyntheticMouseEvent.augmentClass(SyntheticWheelEvent, WheelEventInterface);

	module.exports = SyntheticWheelEvent;

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SVGDOMPropertyConfig
	 */

	'use strict';

	var DOMProperty = __webpack_require__(24);

	var MUST_USE_ATTRIBUTE = DOMProperty.injection.MUST_USE_ATTRIBUTE;

	var NS = {
	  xlink: 'http://www.w3.org/1999/xlink',
	  xml: 'http://www.w3.org/XML/1998/namespace'
	};

	var SVGDOMPropertyConfig = {
	  Properties: {
	    clipPath: MUST_USE_ATTRIBUTE,
	    cx: MUST_USE_ATTRIBUTE,
	    cy: MUST_USE_ATTRIBUTE,
	    d: MUST_USE_ATTRIBUTE,
	    dx: MUST_USE_ATTRIBUTE,
	    dy: MUST_USE_ATTRIBUTE,
	    fill: MUST_USE_ATTRIBUTE,
	    fillOpacity: MUST_USE_ATTRIBUTE,
	    fontFamily: MUST_USE_ATTRIBUTE,
	    fontSize: MUST_USE_ATTRIBUTE,
	    fx: MUST_USE_ATTRIBUTE,
	    fy: MUST_USE_ATTRIBUTE,
	    gradientTransform: MUST_USE_ATTRIBUTE,
	    gradientUnits: MUST_USE_ATTRIBUTE,
	    markerEnd: MUST_USE_ATTRIBUTE,
	    markerMid: MUST_USE_ATTRIBUTE,
	    markerStart: MUST_USE_ATTRIBUTE,
	    offset: MUST_USE_ATTRIBUTE,
	    opacity: MUST_USE_ATTRIBUTE,
	    patternContentUnits: MUST_USE_ATTRIBUTE,
	    patternUnits: MUST_USE_ATTRIBUTE,
	    points: MUST_USE_ATTRIBUTE,
	    preserveAspectRatio: MUST_USE_ATTRIBUTE,
	    r: MUST_USE_ATTRIBUTE,
	    rx: MUST_USE_ATTRIBUTE,
	    ry: MUST_USE_ATTRIBUTE,
	    spreadMethod: MUST_USE_ATTRIBUTE,
	    stopColor: MUST_USE_ATTRIBUTE,
	    stopOpacity: MUST_USE_ATTRIBUTE,
	    stroke: MUST_USE_ATTRIBUTE,
	    strokeDasharray: MUST_USE_ATTRIBUTE,
	    strokeLinecap: MUST_USE_ATTRIBUTE,
	    strokeOpacity: MUST_USE_ATTRIBUTE,
	    strokeWidth: MUST_USE_ATTRIBUTE,
	    textAnchor: MUST_USE_ATTRIBUTE,
	    transform: MUST_USE_ATTRIBUTE,
	    version: MUST_USE_ATTRIBUTE,
	    viewBox: MUST_USE_ATTRIBUTE,
	    x1: MUST_USE_ATTRIBUTE,
	    x2: MUST_USE_ATTRIBUTE,
	    x: MUST_USE_ATTRIBUTE,
	    xlinkActuate: MUST_USE_ATTRIBUTE,
	    xlinkArcrole: MUST_USE_ATTRIBUTE,
	    xlinkHref: MUST_USE_ATTRIBUTE,
	    xlinkRole: MUST_USE_ATTRIBUTE,
	    xlinkShow: MUST_USE_ATTRIBUTE,
	    xlinkTitle: MUST_USE_ATTRIBUTE,
	    xlinkType: MUST_USE_ATTRIBUTE,
	    xmlBase: MUST_USE_ATTRIBUTE,
	    xmlLang: MUST_USE_ATTRIBUTE,
	    xmlSpace: MUST_USE_ATTRIBUTE,
	    y1: MUST_USE_ATTRIBUTE,
	    y2: MUST_USE_ATTRIBUTE,
	    y: MUST_USE_ATTRIBUTE
	  },
	  DOMAttributeNamespaces: {
	    xlinkActuate: NS.xlink,
	    xlinkArcrole: NS.xlink,
	    xlinkHref: NS.xlink,
	    xlinkRole: NS.xlink,
	    xlinkShow: NS.xlink,
	    xlinkTitle: NS.xlink,
	    xlinkType: NS.xlink,
	    xmlBase: NS.xml,
	    xmlLang: NS.xml,
	    xmlSpace: NS.xml
	  },
	  DOMAttributeNames: {
	    clipPath: 'clip-path',
	    fillOpacity: 'fill-opacity',
	    fontFamily: 'font-family',
	    fontSize: 'font-size',
	    gradientTransform: 'gradientTransform',
	    gradientUnits: 'gradientUnits',
	    markerEnd: 'marker-end',
	    markerMid: 'marker-mid',
	    markerStart: 'marker-start',
	    patternContentUnits: 'patternContentUnits',
	    patternUnits: 'patternUnits',
	    preserveAspectRatio: 'preserveAspectRatio',
	    spreadMethod: 'spreadMethod',
	    stopColor: 'stop-color',
	    stopOpacity: 'stop-opacity',
	    strokeDasharray: 'stroke-dasharray',
	    strokeLinecap: 'stroke-linecap',
	    strokeOpacity: 'stroke-opacity',
	    strokeWidth: 'stroke-width',
	    textAnchor: 'text-anchor',
	    viewBox: 'viewBox',
	    xlinkActuate: 'xlink:actuate',
	    xlinkArcrole: 'xlink:arcrole',
	    xlinkHref: 'xlink:href',
	    xlinkRole: 'xlink:role',
	    xlinkShow: 'xlink:show',
	    xlinkTitle: 'xlink:title',
	    xlinkType: 'xlink:type',
	    xmlBase: 'xml:base',
	    xmlLang: 'xml:lang',
	    xmlSpace: 'xml:space'
	  }
	};

	module.exports = SVGDOMPropertyConfig;

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDefaultPerf
	 * @typechecks static-only
	 */

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var DOMProperty = __webpack_require__(24);
	var ReactDefaultPerfAnalysis = __webpack_require__(144);
	var ReactMount = __webpack_require__(29);
	var ReactPerf = __webpack_require__(19);

	var performanceNow = __webpack_require__(145);

	function roundFloat(val) {
	  return Math.floor(val * 100) / 100;
	}

	function addValue(obj, key, val) {
	  obj[key] = (obj[key] || 0) + val;
	}

	var ReactDefaultPerf = {
	  _allMeasurements: [], // last item in the list is the current one
	  _mountStack: [0],
	  _injected: false,

	  start: function start() {
	    if (!ReactDefaultPerf._injected) {
	      ReactPerf.injection.injectMeasure(ReactDefaultPerf.measure);
	    }

	    ReactDefaultPerf._allMeasurements.length = 0;
	    ReactPerf.enableMeasure = true;
	  },

	  stop: function stop() {
	    ReactPerf.enableMeasure = false;
	  },

	  getLastMeasurements: function getLastMeasurements() {
	    return ReactDefaultPerf._allMeasurements;
	  },

	  printExclusive: function printExclusive(measurements) {
	    measurements = measurements || ReactDefaultPerf._allMeasurements;
	    var summary = ReactDefaultPerfAnalysis.getExclusiveSummary(measurements);
	    console.table(summary.map(function (item) {
	      return {
	        'Component class name': item.componentName,
	        'Total inclusive time (ms)': roundFloat(item.inclusive),
	        'Exclusive mount time (ms)': roundFloat(item.exclusive),
	        'Exclusive render time (ms)': roundFloat(item.render),
	        'Mount time per instance (ms)': roundFloat(item.exclusive / item.count),
	        'Render time per instance (ms)': roundFloat(item.render / item.count),
	        'Instances': item.count
	      };
	    }));
	    // TODO: ReactDefaultPerfAnalysis.getTotalTime() does not return the correct
	    // number.
	  },

	  printInclusive: function printInclusive(measurements) {
	    measurements = measurements || ReactDefaultPerf._allMeasurements;
	    var summary = ReactDefaultPerfAnalysis.getInclusiveSummary(measurements);
	    console.table(summary.map(function (item) {
	      return {
	        'Owner > component': item.componentName,
	        'Inclusive time (ms)': roundFloat(item.time),
	        'Instances': item.count
	      };
	    }));
	    console.log('Total time:', ReactDefaultPerfAnalysis.getTotalTime(measurements).toFixed(2) + ' ms');
	  },

	  getMeasurementsSummaryMap: function getMeasurementsSummaryMap(measurements) {
	    var summary = ReactDefaultPerfAnalysis.getInclusiveSummary(measurements, true);
	    return summary.map(function (item) {
	      return {
	        'Owner > component': item.componentName,
	        'Wasted time (ms)': item.time,
	        'Instances': item.count
	      };
	    });
	  },

	  printWasted: function printWasted(measurements) {
	    measurements = measurements || ReactDefaultPerf._allMeasurements;
	    console.table(ReactDefaultPerf.getMeasurementsSummaryMap(measurements));
	    console.log('Total time:', ReactDefaultPerfAnalysis.getTotalTime(measurements).toFixed(2) + ' ms');
	  },

	  printDOM: function printDOM(measurements) {
	    measurements = measurements || ReactDefaultPerf._allMeasurements;
	    var summary = ReactDefaultPerfAnalysis.getDOMSummary(measurements);
	    console.table(summary.map(function (item) {
	      var result = {};
	      result[DOMProperty.ID_ATTRIBUTE_NAME] = item.id;
	      result.type = item.type;
	      result.args = JSON.stringify(item.args);
	      return result;
	    }));
	    console.log('Total time:', ReactDefaultPerfAnalysis.getTotalTime(measurements).toFixed(2) + ' ms');
	  },

	  _recordWrite: function _recordWrite(id, fnName, totalTime, args) {
	    // TODO: totalTime isn't that useful since it doesn't count paints/reflows
	    var writes = ReactDefaultPerf._allMeasurements[ReactDefaultPerf._allMeasurements.length - 1].writes;
	    writes[id] = writes[id] || [];
	    writes[id].push({
	      type: fnName,
	      time: totalTime,
	      args: args
	    });
	  },

	  measure: function measure(moduleName, fnName, func) {
	    return function () {
	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      var totalTime;
	      var rv;
	      var start;

	      if (fnName === '_renderNewRootComponent' || fnName === 'flushBatchedUpdates') {
	        // A "measurement" is a set of metrics recorded for each flush. We want
	        // to group the metrics for a given flush together so we can look at the
	        // components that rendered and the DOM operations that actually
	        // happened to determine the amount of "wasted work" performed.
	        ReactDefaultPerf._allMeasurements.push({
	          exclusive: {},
	          inclusive: {},
	          render: {},
	          counts: {},
	          writes: {},
	          displayNames: {},
	          totalTime: 0,
	          created: {}
	        });
	        start = performanceNow();
	        rv = func.apply(this, args);
	        ReactDefaultPerf._allMeasurements[ReactDefaultPerf._allMeasurements.length - 1].totalTime = performanceNow() - start;
	        return rv;
	      } else if (fnName === '_mountImageIntoNode' || moduleName === 'ReactBrowserEventEmitter' || moduleName === 'ReactDOMIDOperations' || moduleName === 'CSSPropertyOperations' || moduleName === 'DOMChildrenOperations' || moduleName === 'DOMPropertyOperations') {
	        start = performanceNow();
	        rv = func.apply(this, args);
	        totalTime = performanceNow() - start;

	        if (fnName === '_mountImageIntoNode') {
	          var mountID = ReactMount.getID(args[1]);
	          ReactDefaultPerf._recordWrite(mountID, fnName, totalTime, args[0]);
	        } else if (fnName === 'dangerouslyProcessChildrenUpdates') {
	          // special format
	          args[0].forEach(function (update) {
	            var writeArgs = {};
	            if (update.fromIndex !== null) {
	              writeArgs.fromIndex = update.fromIndex;
	            }
	            if (update.toIndex !== null) {
	              writeArgs.toIndex = update.toIndex;
	            }
	            if (update.textContent !== null) {
	              writeArgs.textContent = update.textContent;
	            }
	            if (update.markupIndex !== null) {
	              writeArgs.markup = args[1][update.markupIndex];
	            }
	            ReactDefaultPerf._recordWrite(update.parentID, update.type, totalTime, writeArgs);
	          });
	        } else {
	          // basic format
	          var id = args[0];
	          if ((typeof id === 'undefined' ? 'undefined' : _typeof(id)) === 'object') {
	            id = ReactMount.getID(args[0]);
	          }
	          ReactDefaultPerf._recordWrite(id, fnName, totalTime, Array.prototype.slice.call(args, 1));
	        }
	        return rv;
	      } else if (moduleName === 'ReactCompositeComponent' && (fnName === 'mountComponent' || fnName === 'updateComponent' || // TODO: receiveComponent()?
	      fnName === '_renderValidatedComponent')) {

	        if (this._currentElement.type === ReactMount.TopLevelWrapper) {
	          return func.apply(this, args);
	        }

	        var rootNodeID = fnName === 'mountComponent' ? args[0] : this._rootNodeID;
	        var isRender = fnName === '_renderValidatedComponent';
	        var isMount = fnName === 'mountComponent';

	        var mountStack = ReactDefaultPerf._mountStack;
	        var entry = ReactDefaultPerf._allMeasurements[ReactDefaultPerf._allMeasurements.length - 1];

	        if (isRender) {
	          addValue(entry.counts, rootNodeID, 1);
	        } else if (isMount) {
	          entry.created[rootNodeID] = true;
	          mountStack.push(0);
	        }

	        start = performanceNow();
	        rv = func.apply(this, args);
	        totalTime = performanceNow() - start;

	        if (isRender) {
	          addValue(entry.render, rootNodeID, totalTime);
	        } else if (isMount) {
	          var subMountTime = mountStack.pop();
	          mountStack[mountStack.length - 1] += totalTime;
	          addValue(entry.exclusive, rootNodeID, totalTime - subMountTime);
	          addValue(entry.inclusive, rootNodeID, totalTime);
	        } else {
	          addValue(entry.inclusive, rootNodeID, totalTime);
	        }

	        entry.displayNames[rootNodeID] = {
	          current: this.getName(),
	          owner: this._currentElement._owner ? this._currentElement._owner.getName() : '<root>'
	        };

	        return rv;
	      } else {
	        return func.apply(this, args);
	      }
	    };
	  }
	};

	module.exports = ReactDefaultPerf;

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDefaultPerfAnalysis
	 */

	'use strict';

	var assign = __webpack_require__(40);

	// Don't try to save users less than 1.2ms (a number I made up)
	var DONT_CARE_THRESHOLD = 1.2;
	var DOM_OPERATION_TYPES = {
	  '_mountImageIntoNode': 'set innerHTML',
	  INSERT_MARKUP: 'set innerHTML',
	  MOVE_EXISTING: 'move',
	  REMOVE_NODE: 'remove',
	  SET_MARKUP: 'set innerHTML',
	  TEXT_CONTENT: 'set textContent',
	  'setValueForProperty': 'update attribute',
	  'setValueForAttribute': 'update attribute',
	  'deleteValueForProperty': 'remove attribute',
	  'setValueForStyles': 'update styles',
	  'replaceNodeWithMarkup': 'replace',
	  'updateTextContent': 'set textContent'
	};

	function getTotalTime(measurements) {
	  // TODO: return number of DOM ops? could be misleading.
	  // TODO: measure dropped frames after reconcile?
	  // TODO: log total time of each reconcile and the top-level component
	  // class that triggered it.
	  var totalTime = 0;
	  for (var i = 0; i < measurements.length; i++) {
	    var measurement = measurements[i];
	    totalTime += measurement.totalTime;
	  }
	  return totalTime;
	}

	function getDOMSummary(measurements) {
	  var items = [];
	  measurements.forEach(function (measurement) {
	    Object.keys(measurement.writes).forEach(function (id) {
	      measurement.writes[id].forEach(function (write) {
	        items.push({
	          id: id,
	          type: DOM_OPERATION_TYPES[write.type] || write.type,
	          args: write.args
	        });
	      });
	    });
	  });
	  return items;
	}

	function getExclusiveSummary(measurements) {
	  var candidates = {};
	  var displayName;

	  for (var i = 0; i < measurements.length; i++) {
	    var measurement = measurements[i];
	    var allIDs = assign({}, measurement.exclusive, measurement.inclusive);

	    for (var id in allIDs) {
	      displayName = measurement.displayNames[id].current;

	      candidates[displayName] = candidates[displayName] || {
	        componentName: displayName,
	        inclusive: 0,
	        exclusive: 0,
	        render: 0,
	        count: 0
	      };
	      if (measurement.render[id]) {
	        candidates[displayName].render += measurement.render[id];
	      }
	      if (measurement.exclusive[id]) {
	        candidates[displayName].exclusive += measurement.exclusive[id];
	      }
	      if (measurement.inclusive[id]) {
	        candidates[displayName].inclusive += measurement.inclusive[id];
	      }
	      if (measurement.counts[id]) {
	        candidates[displayName].count += measurement.counts[id];
	      }
	    }
	  }

	  // Now make a sorted array with the results.
	  var arr = [];
	  for (displayName in candidates) {
	    if (candidates[displayName].exclusive >= DONT_CARE_THRESHOLD) {
	      arr.push(candidates[displayName]);
	    }
	  }

	  arr.sort(function (a, b) {
	    return b.exclusive - a.exclusive;
	  });

	  return arr;
	}

	function getInclusiveSummary(measurements, onlyClean) {
	  var candidates = {};
	  var inclusiveKey;

	  for (var i = 0; i < measurements.length; i++) {
	    var measurement = measurements[i];
	    var allIDs = assign({}, measurement.exclusive, measurement.inclusive);
	    var cleanComponents;

	    if (onlyClean) {
	      cleanComponents = getUnchangedComponents(measurement);
	    }

	    for (var id in allIDs) {
	      if (onlyClean && !cleanComponents[id]) {
	        continue;
	      }

	      var displayName = measurement.displayNames[id];

	      // Inclusive time is not useful for many components without knowing where
	      // they are instantiated. So we aggregate inclusive time with both the
	      // owner and current displayName as the key.
	      inclusiveKey = displayName.owner + ' > ' + displayName.current;

	      candidates[inclusiveKey] = candidates[inclusiveKey] || {
	        componentName: inclusiveKey,
	        time: 0,
	        count: 0
	      };

	      if (measurement.inclusive[id]) {
	        candidates[inclusiveKey].time += measurement.inclusive[id];
	      }
	      if (measurement.counts[id]) {
	        candidates[inclusiveKey].count += measurement.counts[id];
	      }
	    }
	  }

	  // Now make a sorted array with the results.
	  var arr = [];
	  for (inclusiveKey in candidates) {
	    if (candidates[inclusiveKey].time >= DONT_CARE_THRESHOLD) {
	      arr.push(candidates[inclusiveKey]);
	    }
	  }

	  arr.sort(function (a, b) {
	    return b.time - a.time;
	  });

	  return arr;
	}

	function getUnchangedComponents(measurement) {
	  // For a given reconcile, look at which components did not actually
	  // render anything to the DOM and return a mapping of their ID to
	  // the amount of time it took to render the entire subtree.
	  var cleanComponents = {};
	  var dirtyLeafIDs = Object.keys(measurement.writes);
	  var allIDs = assign({}, measurement.exclusive, measurement.inclusive);

	  for (var id in allIDs) {
	    var isDirty = false;
	    // For each component that rendered, see if a component that triggered
	    // a DOM op is in its subtree.
	    for (var i = 0; i < dirtyLeafIDs.length; i++) {
	      if (dirtyLeafIDs[i].indexOf(id) === 0) {
	        isDirty = true;
	        break;
	      }
	    }
	    // check if component newly created
	    if (measurement.created[id]) {
	      isDirty = true;
	    }
	    if (!isDirty && measurement.counts[id] > 0) {
	      cleanComponents[id] = true;
	    }
	  }
	  return cleanComponents;
	}

	var ReactDefaultPerfAnalysis = {
	  getExclusiveSummary: getExclusiveSummary,
	  getInclusiveSummary: getInclusiveSummary,
	  getDOMSummary: getDOMSummary,
	  getTotalTime: getTotalTime
	};

	module.exports = ReactDefaultPerfAnalysis;

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule performanceNow
	 * @typechecks
	 */

	'use strict';

	var performance = __webpack_require__(146);

	var performanceNow;

	/**
	 * Detect if we can use `window.performance.now()` and gracefully fallback to
	 * `Date.now()` if it doesn't exist. We need to support Firefox < 15 for now
	 * because of Facebook's testing infrastructure.
	 */
	if (performance.now) {
	  performanceNow = function performanceNow() {
	    return performance.now();
	  };
	} else {
	  performanceNow = function performanceNow() {
	    return Date.now();
	  };
	}

	module.exports = performanceNow;

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule performance
	 * @typechecks
	 */

	'use strict';

	var ExecutionEnvironment = __webpack_require__(10);

	var performance;

	if (ExecutionEnvironment.canUseDOM) {
	  performance = window.performance || window.msPerformance || window.webkitPerformance;
	}

	module.exports = performance || {};

/***/ },
/* 147 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactVersion
	 */

	'use strict';

	module.exports = '0.14.8';

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	* @providesModule renderSubtreeIntoContainer
	*/

	'use strict';

	var ReactMount = __webpack_require__(29);

	module.exports = ReactMount.renderSubtreeIntoContainer;

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMServer
	 */

	'use strict';

	var ReactDefaultInjection = __webpack_require__(72);
	var ReactServerRendering = __webpack_require__(150);
	var ReactVersion = __webpack_require__(147);

	ReactDefaultInjection.inject();

	var ReactDOMServer = {
	  renderToString: ReactServerRendering.renderToString,
	  renderToStaticMarkup: ReactServerRendering.renderToStaticMarkup,
	  version: ReactVersion
	};

	module.exports = ReactDOMServer;

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks static-only
	 * @providesModule ReactServerRendering
	 */
	'use strict';

	var ReactDefaultBatchingStrategy = __webpack_require__(93);
	var ReactElement = __webpack_require__(43);
	var ReactInstanceHandles = __webpack_require__(46);
	var ReactMarkupChecksum = __webpack_require__(49);
	var ReactServerBatchingStrategy = __webpack_require__(151);
	var ReactServerRenderingTransaction = __webpack_require__(152);
	var ReactUpdates = __webpack_require__(55);

	var emptyObject = __webpack_require__(59);
	var instantiateReactComponent = __webpack_require__(63);
	var invariant = __webpack_require__(14);

	/**
	 * @param {ReactElement} element
	 * @return {string} the HTML markup
	 */
	function renderToString(element) {
	  !ReactElement.isValidElement(element) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'renderToString(): You must pass a valid ReactElement.') : invariant(false) : undefined;

	  var transaction;
	  try {
	    ReactUpdates.injection.injectBatchingStrategy(ReactServerBatchingStrategy);

	    var id = ReactInstanceHandles.createReactRootID();
	    transaction = ReactServerRenderingTransaction.getPooled(false);

	    return transaction.perform(function () {
	      var componentInstance = instantiateReactComponent(element, null);
	      var markup = componentInstance.mountComponent(id, transaction, emptyObject);
	      return ReactMarkupChecksum.addChecksumToMarkup(markup);
	    }, null);
	  } finally {
	    ReactServerRenderingTransaction.release(transaction);
	    // Revert to the DOM batching strategy since these two renderers
	    // currently share these stateful modules.
	    ReactUpdates.injection.injectBatchingStrategy(ReactDefaultBatchingStrategy);
	  }
	}

	/**
	 * @param {ReactElement} element
	 * @return {string} the HTML markup, without the extra React ID and checksum
	 * (for generating static pages)
	 */
	function renderToStaticMarkup(element) {
	  !ReactElement.isValidElement(element) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'renderToStaticMarkup(): You must pass a valid ReactElement.') : invariant(false) : undefined;

	  var transaction;
	  try {
	    ReactUpdates.injection.injectBatchingStrategy(ReactServerBatchingStrategy);

	    var id = ReactInstanceHandles.createReactRootID();
	    transaction = ReactServerRenderingTransaction.getPooled(true);

	    return transaction.perform(function () {
	      var componentInstance = instantiateReactComponent(element, null);
	      return componentInstance.mountComponent(id, transaction, emptyObject);
	    }, null);
	  } finally {
	    ReactServerRenderingTransaction.release(transaction);
	    // Revert to the DOM batching strategy since these two renderers
	    // currently share these stateful modules.
	    ReactUpdates.injection.injectBatchingStrategy(ReactDefaultBatchingStrategy);
	  }
	}

	module.exports = {
	  renderToString: renderToString,
	  renderToStaticMarkup: renderToStaticMarkup
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 151 */
/***/ function(module, exports) {

	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactServerBatchingStrategy
	 * @typechecks
	 */

	'use strict';

	var ReactServerBatchingStrategy = {
	  isBatchingUpdates: false,
	  batchedUpdates: function batchedUpdates(callback) {
	    // Don't do anything here. During the server rendering we don't want to
	    // schedule any updates. We will simply ignore them.
	  }
	};

	module.exports = ReactServerBatchingStrategy;

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactServerRenderingTransaction
	 * @typechecks
	 */

	'use strict';

	var PooledClass = __webpack_require__(57);
	var CallbackQueue = __webpack_require__(56);
	var Transaction = __webpack_require__(58);

	var assign = __webpack_require__(40);
	var emptyFunction = __webpack_require__(16);

	/**
	 * Provides a `CallbackQueue` queue for collecting `onDOMReady` callbacks
	 * during the performing of the transaction.
	 */
	var ON_DOM_READY_QUEUEING = {
	  /**
	   * Initializes the internal `onDOMReady` queue.
	   */
	  initialize: function initialize() {
	    this.reactMountReady.reset();
	  },

	  close: emptyFunction
	};

	/**
	 * Executed within the scope of the `Transaction` instance. Consider these as
	 * being member methods, but with an implied ordering while being isolated from
	 * each other.
	 */
	var TRANSACTION_WRAPPERS = [ON_DOM_READY_QUEUEING];

	/**
	 * @class ReactServerRenderingTransaction
	 * @param {boolean} renderToStaticMarkup
	 */
	function ReactServerRenderingTransaction(renderToStaticMarkup) {
	  this.reinitializeTransaction();
	  this.renderToStaticMarkup = renderToStaticMarkup;
	  this.reactMountReady = CallbackQueue.getPooled(null);
	  this.useCreateElement = false;
	}

	var Mixin = {
	  /**
	   * @see Transaction
	   * @abstract
	   * @final
	   * @return {array} Empty list of operation wrap procedures.
	   */
	  getTransactionWrappers: function getTransactionWrappers() {
	    return TRANSACTION_WRAPPERS;
	  },

	  /**
	   * @return {object} The queue to collect `onDOMReady` callbacks with.
	   */
	  getReactMountReady: function getReactMountReady() {
	    return this.reactMountReady;
	  },

	  /**
	   * `PooledClass` looks for this, and will invoke this before allowing this
	   * instance to be reused.
	   */
	  destructor: function destructor() {
	    CallbackQueue.release(this.reactMountReady);
	    this.reactMountReady = null;
	  }
	};

	assign(ReactServerRenderingTransaction.prototype, Transaction.Mixin, Mixin);

	PooledClass.addPoolingTo(ReactServerRenderingTransaction);

	module.exports = ReactServerRenderingTransaction;

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactIsomorphic
	 */

	'use strict';

	var ReactChildren = __webpack_require__(111);
	var ReactComponent = __webpack_require__(124);
	var ReactClass = __webpack_require__(123);
	var ReactDOMFactories = __webpack_require__(154);
	var ReactElement = __webpack_require__(43);
	var ReactElementValidator = __webpack_require__(155);
	var ReactPropTypes = __webpack_require__(108);
	var ReactVersion = __webpack_require__(147);

	var assign = __webpack_require__(40);
	var onlyChild = __webpack_require__(157);

	var createElement = ReactElement.createElement;
	var createFactory = ReactElement.createFactory;
	var cloneElement = ReactElement.cloneElement;

	if (process.env.NODE_ENV !== 'production') {
	  createElement = ReactElementValidator.createElement;
	  createFactory = ReactElementValidator.createFactory;
	  cloneElement = ReactElementValidator.cloneElement;
	}

	var React = {

	  // Modern

	  Children: {
	    map: ReactChildren.map,
	    forEach: ReactChildren.forEach,
	    count: ReactChildren.count,
	    toArray: ReactChildren.toArray,
	    only: onlyChild
	  },

	  Component: ReactComponent,

	  createElement: createElement,
	  cloneElement: cloneElement,
	  isValidElement: ReactElement.isValidElement,

	  // Classic

	  PropTypes: ReactPropTypes,
	  createClass: ReactClass.createClass,
	  createFactory: createFactory,
	  createMixin: function createMixin(mixin) {
	    // Currently a noop. Will be used to validate and trace mixins.
	    return mixin;
	  },

	  // This looks DOM specific but these are actually isomorphic helpers
	  // since they are just generating DOM strings.
	  DOM: ReactDOMFactories,

	  version: ReactVersion,

	  // Hook for JSX spread, don't use this for anything else.
	  __spread: assign
	};

	module.exports = React;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMFactories
	 * @typechecks static-only
	 */

	'use strict';

	var ReactElement = __webpack_require__(43);
	var ReactElementValidator = __webpack_require__(155);

	var mapObject = __webpack_require__(156);

	/**
	 * Create a factory that creates HTML tag elements.
	 *
	 * @param {string} tag Tag name (e.g. `div`).
	 * @private
	 */
	function createDOMFactory(tag) {
	  if (process.env.NODE_ENV !== 'production') {
	    return ReactElementValidator.createFactory(tag);
	  }
	  return ReactElement.createFactory(tag);
	}

	/**
	 * Creates a mapping from supported HTML tags to `ReactDOMComponent` classes.
	 * This is also accessible via `React.DOM`.
	 *
	 * @public
	 */
	var ReactDOMFactories = mapObject({
	  a: 'a',
	  abbr: 'abbr',
	  address: 'address',
	  area: 'area',
	  article: 'article',
	  aside: 'aside',
	  audio: 'audio',
	  b: 'b',
	  base: 'base',
	  bdi: 'bdi',
	  bdo: 'bdo',
	  big: 'big',
	  blockquote: 'blockquote',
	  body: 'body',
	  br: 'br',
	  button: 'button',
	  canvas: 'canvas',
	  caption: 'caption',
	  cite: 'cite',
	  code: 'code',
	  col: 'col',
	  colgroup: 'colgroup',
	  data: 'data',
	  datalist: 'datalist',
	  dd: 'dd',
	  del: 'del',
	  details: 'details',
	  dfn: 'dfn',
	  dialog: 'dialog',
	  div: 'div',
	  dl: 'dl',
	  dt: 'dt',
	  em: 'em',
	  embed: 'embed',
	  fieldset: 'fieldset',
	  figcaption: 'figcaption',
	  figure: 'figure',
	  footer: 'footer',
	  form: 'form',
	  h1: 'h1',
	  h2: 'h2',
	  h3: 'h3',
	  h4: 'h4',
	  h5: 'h5',
	  h6: 'h6',
	  head: 'head',
	  header: 'header',
	  hgroup: 'hgroup',
	  hr: 'hr',
	  html: 'html',
	  i: 'i',
	  iframe: 'iframe',
	  img: 'img',
	  input: 'input',
	  ins: 'ins',
	  kbd: 'kbd',
	  keygen: 'keygen',
	  label: 'label',
	  legend: 'legend',
	  li: 'li',
	  link: 'link',
	  main: 'main',
	  map: 'map',
	  mark: 'mark',
	  menu: 'menu',
	  menuitem: 'menuitem',
	  meta: 'meta',
	  meter: 'meter',
	  nav: 'nav',
	  noscript: 'noscript',
	  object: 'object',
	  ol: 'ol',
	  optgroup: 'optgroup',
	  option: 'option',
	  output: 'output',
	  p: 'p',
	  param: 'param',
	  picture: 'picture',
	  pre: 'pre',
	  progress: 'progress',
	  q: 'q',
	  rp: 'rp',
	  rt: 'rt',
	  ruby: 'ruby',
	  s: 's',
	  samp: 'samp',
	  script: 'script',
	  section: 'section',
	  select: 'select',
	  small: 'small',
	  source: 'source',
	  span: 'span',
	  strong: 'strong',
	  style: 'style',
	  sub: 'sub',
	  summary: 'summary',
	  sup: 'sup',
	  table: 'table',
	  tbody: 'tbody',
	  td: 'td',
	  textarea: 'textarea',
	  tfoot: 'tfoot',
	  th: 'th',
	  thead: 'thead',
	  time: 'time',
	  title: 'title',
	  tr: 'tr',
	  track: 'track',
	  u: 'u',
	  ul: 'ul',
	  'var': 'var',
	  video: 'video',
	  wbr: 'wbr',

	  // SVG
	  circle: 'circle',
	  clipPath: 'clipPath',
	  defs: 'defs',
	  ellipse: 'ellipse',
	  g: 'g',
	  image: 'image',
	  line: 'line',
	  linearGradient: 'linearGradient',
	  mask: 'mask',
	  path: 'path',
	  pattern: 'pattern',
	  polygon: 'polygon',
	  polyline: 'polyline',
	  radialGradient: 'radialGradient',
	  rect: 'rect',
	  stop: 'stop',
	  svg: 'svg',
	  text: 'text',
	  tspan: 'tspan'

	}, createDOMFactory);

	module.exports = ReactDOMFactories;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactElementValidator
	 */

	/**
	 * ReactElementValidator provides a wrapper around a element factory
	 * which validates the props passed to the element. This is intended to be
	 * used only in DEV and could be replaced by a static type checker for languages
	 * that support it.
	 */

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var ReactElement = __webpack_require__(43);
	var ReactPropTypeLocations = __webpack_require__(66);
	var ReactPropTypeLocationNames = __webpack_require__(67);
	var ReactCurrentOwner = __webpack_require__(6);

	var canDefineProperty = __webpack_require__(44);
	var getIteratorFn = __webpack_require__(109);
	var invariant = __webpack_require__(14);
	var warning = __webpack_require__(26);

	function getDeclarationErrorAddendum() {
	  if (ReactCurrentOwner.current) {
	    var name = ReactCurrentOwner.current.getName();
	    if (name) {
	      return ' Check the render method of `' + name + '`.';
	    }
	  }
	  return '';
	}

	/**
	 * Warn if there's no key explicitly set on dynamic arrays of children or
	 * object keys are not valid. This allows us to keep track of children between
	 * updates.
	 */
	var ownerHasKeyUseWarning = {};

	var loggedTypeFailures = {};

	/**
	 * Warn if the element doesn't have an explicit key assigned to it.
	 * This element is in an array. The array could grow and shrink or be
	 * reordered. All children that haven't already been validated are required to
	 * have a "key" property assigned to it.
	 *
	 * @internal
	 * @param {ReactElement} element Element that requires a key.
	 * @param {*} parentType element's parent's type.
	 */
	function validateExplicitKey(element, parentType) {
	  if (!element._store || element._store.validated || element.key != null) {
	    return;
	  }
	  element._store.validated = true;

	  var addenda = getAddendaForKeyUse('uniqueKey', element, parentType);
	  if (addenda === null) {
	    // we already showed the warning
	    return;
	  }
	  process.env.NODE_ENV !== 'production' ? warning(false, 'Each child in an array or iterator should have a unique "key" prop.' + '%s%s%s', addenda.parentOrOwner || '', addenda.childOwner || '', addenda.url || '') : undefined;
	}

	/**
	 * Shared warning and monitoring code for the key warnings.
	 *
	 * @internal
	 * @param {string} messageType A key used for de-duping warnings.
	 * @param {ReactElement} element Component that requires a key.
	 * @param {*} parentType element's parent's type.
	 * @returns {?object} A set of addenda to use in the warning message, or null
	 * if the warning has already been shown before (and shouldn't be shown again).
	 */
	function getAddendaForKeyUse(messageType, element, parentType) {
	  var addendum = getDeclarationErrorAddendum();
	  if (!addendum) {
	    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
	    if (parentName) {
	      addendum = ' Check the top-level render call using <' + parentName + '>.';
	    }
	  }

	  var memoizer = ownerHasKeyUseWarning[messageType] || (ownerHasKeyUseWarning[messageType] = {});
	  if (memoizer[addendum]) {
	    return null;
	  }
	  memoizer[addendum] = true;

	  var addenda = {
	    parentOrOwner: addendum,
	    url: ' See https://fb.me/react-warning-keys for more information.',
	    childOwner: null
	  };

	  // Usually the current owner is the offender, but if it accepts children as a
	  // property, it may be the creator of the child that's responsible for
	  // assigning it a key.
	  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
	    // Give the component that originally created this child.
	    addenda.childOwner = ' It was passed a child from ' + element._owner.getName() + '.';
	  }

	  return addenda;
	}

	/**
	 * Ensure that every element either is passed in a static location, in an
	 * array with an explicit keys property defined, or in an object literal
	 * with valid key property.
	 *
	 * @internal
	 * @param {ReactNode} node Statically passed child of any type.
	 * @param {*} parentType node's parent's type.
	 */
	function validateChildKeys(node, parentType) {
	  if ((typeof node === 'undefined' ? 'undefined' : _typeof(node)) !== 'object') {
	    return;
	  }
	  if (Array.isArray(node)) {
	    for (var i = 0; i < node.length; i++) {
	      var child = node[i];
	      if (ReactElement.isValidElement(child)) {
	        validateExplicitKey(child, parentType);
	      }
	    }
	  } else if (ReactElement.isValidElement(node)) {
	    // This element was passed in a valid location.
	    if (node._store) {
	      node._store.validated = true;
	    }
	  } else if (node) {
	    var iteratorFn = getIteratorFn(node);
	    // Entry iterators provide implicit keys.
	    if (iteratorFn) {
	      if (iteratorFn !== node.entries) {
	        var iterator = iteratorFn.call(node);
	        var step;
	        while (!(step = iterator.next()).done) {
	          if (ReactElement.isValidElement(step.value)) {
	            validateExplicitKey(step.value, parentType);
	          }
	        }
	      }
	    }
	  }
	}

	/**
	 * Assert that the props are valid
	 *
	 * @param {string} componentName Name of the component for error messages.
	 * @param {object} propTypes Map of prop name to a ReactPropType
	 * @param {object} props
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @private
	 */
	function checkPropTypes(componentName, propTypes, props, location) {
	  for (var propName in propTypes) {
	    if (propTypes.hasOwnProperty(propName)) {
	      var error;
	      // Prop type validation may throw. In case they do, we don't want to
	      // fail the render phase where it didn't fail before. So we log it.
	      // After these have been cleaned up, we'll let them throw.
	      try {
	        // This is intentionally an invariant that gets caught. It's the same
	        // behavior as without this statement except with a better message.
	        !(typeof propTypes[propName] === 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', componentName || 'React class', ReactPropTypeLocationNames[location], propName) : invariant(false) : undefined;
	        error = propTypes[propName](props, propName, componentName, location);
	      } catch (ex) {
	        error = ex;
	      }
	      process.env.NODE_ENV !== 'production' ? warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', ReactPropTypeLocationNames[location], propName, typeof error === 'undefined' ? 'undefined' : _typeof(error)) : undefined;
	      if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	        // Only monitor this failure once because there tends to be a lot of the
	        // same error.
	        loggedTypeFailures[error.message] = true;

	        var addendum = getDeclarationErrorAddendum();
	        process.env.NODE_ENV !== 'production' ? warning(false, 'Failed propType: %s%s', error.message, addendum) : undefined;
	      }
	    }
	  }
	}

	/**
	 * Given an element, validate that its props follow the propTypes definition,
	 * provided by the type.
	 *
	 * @param {ReactElement} element
	 */
	function validatePropTypes(element) {
	  var componentClass = element.type;
	  if (typeof componentClass !== 'function') {
	    return;
	  }
	  var name = componentClass.displayName || componentClass.name;
	  if (componentClass.propTypes) {
	    checkPropTypes(name, componentClass.propTypes, element.props, ReactPropTypeLocations.prop);
	  }
	  if (typeof componentClass.getDefaultProps === 'function') {
	    process.env.NODE_ENV !== 'production' ? warning(componentClass.getDefaultProps.isReactClassApproved, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.') : undefined;
	  }
	}

	var ReactElementValidator = {

	  createElement: function createElement(type, props, children) {
	    var validType = typeof type === 'string' || typeof type === 'function';
	    // We warn in this case but don't throw. We expect the element creation to
	    // succeed and there will likely be errors in render.
	    process.env.NODE_ENV !== 'production' ? warning(validType, 'React.createElement: type should not be null, undefined, boolean, or ' + 'number. It should be a string (for DOM elements) or a ReactClass ' + '(for composite components).%s', getDeclarationErrorAddendum()) : undefined;

	    var element = ReactElement.createElement.apply(this, arguments);

	    // The result can be nullish if a mock or a custom function is used.
	    // TODO: Drop this when these are no longer allowed as the type argument.
	    if (element == null) {
	      return element;
	    }

	    // Skip key warning if the type isn't valid since our key validation logic
	    // doesn't expect a non-string/function type and can throw confusing errors.
	    // We don't want exception behavior to differ between dev and prod.
	    // (Rendering will throw with a helpful message and as soon as the type is
	    // fixed, the key warnings will appear.)
	    if (validType) {
	      for (var i = 2; i < arguments.length; i++) {
	        validateChildKeys(arguments[i], type);
	      }
	    }

	    validatePropTypes(element);

	    return element;
	  },

	  createFactory: function createFactory(type) {
	    var validatedFactory = ReactElementValidator.createElement.bind(null, type);
	    // Legacy hook TODO: Warn if this is accessed
	    validatedFactory.type = type;

	    if (process.env.NODE_ENV !== 'production') {
	      if (canDefineProperty) {
	        Object.defineProperty(validatedFactory, 'type', {
	          enumerable: false,
	          get: function get() {
	            process.env.NODE_ENV !== 'production' ? warning(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.') : undefined;
	            Object.defineProperty(this, 'type', {
	              value: type
	            });
	            return type;
	          }
	        });
	      }
	    }

	    return validatedFactory;
	  },

	  cloneElement: function cloneElement(element, props, children) {
	    var newElement = ReactElement.cloneElement.apply(this, arguments);
	    for (var i = 2; i < arguments.length; i++) {
	      validateChildKeys(arguments[i], newElement.type);
	    }
	    validatePropTypes(newElement);
	    return newElement;
	  }

	};

	module.exports = ReactElementValidator;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 156 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule mapObject
	 */

	'use strict';

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	/**
	 * Executes the provided `callback` once for each enumerable own property in the
	 * object and constructs a new object from the results. The `callback` is
	 * invoked with three arguments:
	 *
	 *  - the property value
	 *  - the property name
	 *  - the object being traversed
	 *
	 * Properties that are added after the call to `mapObject` will not be visited
	 * by `callback`. If the values of existing properties are changed, the value
	 * passed to `callback` will be the value at the time `mapObject` visits them.
	 * Properties that are deleted before being visited are not visited.
	 *
	 * @grep function objectMap()
	 * @grep function objMap()
	 *
	 * @param {?object} object
	 * @param {function} callback
	 * @param {*} context
	 * @return {?object}
	 */
	function mapObject(object, callback, context) {
	  if (!object) {
	    return null;
	  }
	  var result = {};
	  for (var name in object) {
	    if (hasOwnProperty.call(object, name)) {
	      result[name] = callback.call(context, object[name], name, object);
	    }
	  }
	  return result;
	}

	module.exports = mapObject;

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule onlyChild
	 */
	'use strict';

	var ReactElement = __webpack_require__(43);

	var invariant = __webpack_require__(14);

	/**
	 * Returns the first child in a collection of children and verifies that there
	 * is only one child in the collection. The current implementation of this
	 * function assumes that a single child gets passed without a wrapper, but the
	 * purpose of this helper function is to abstract away the particular structure
	 * of children.
	 *
	 * @param {?object} children Child collection structure.
	 * @return {ReactComponent} The first and only `ReactComponent` contained in the
	 * structure.
	 */
	function onlyChild(children) {
	  !ReactElement.isValidElement(children) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'onlyChild must be passed a children with exactly one child.') : invariant(false) : undefined;
	  return children;
	}

	module.exports = onlyChild;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule deprecated
	 */

	'use strict';

	var assign = __webpack_require__(40);
	var warning = __webpack_require__(26);

	/**
	 * This will log a single deprecation notice per function and forward the call
	 * on to the new API.
	 *
	 * @param {string} fnName The name of the function
	 * @param {string} newModule The module that fn will exist in
	 * @param {string} newPackage The module that fn will exist in
	 * @param {*} ctx The context this forwarded call should run in
	 * @param {function} fn The function to forward on to
	 * @return {function} The function that will warn once and then call fn
	 */
	function deprecated(fnName, newModule, newPackage, ctx, fn) {
	  var warned = false;
	  if (process.env.NODE_ENV !== 'production') {
	    var newFn = function newFn() {
	      process.env.NODE_ENV !== 'production' ? warning(warned,
	      // Require examples in this string must be split to prevent React's
	      // build tools from mistaking them for real requires.
	      // Otherwise the build tools will attempt to build a '%s' module.
	      'React.%s is deprecated. Please use %s.%s from require' + '(\'%s\') ' + 'instead.', fnName, newModule, fnName, newPackage) : undefined;
	      warned = true;
	      return fn.apply(ctx, arguments);
	    };
	    // We need to make sure all properties of the original fn are copied over.
	    // In particular, this is needed to support PropTypes
	    return assign(newFn, fn);
	  }

	  return fn;
	}

	module.exports = deprecated;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(4);

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _d = __webpack_require__(161);

	var _d2 = _interopRequireDefault(_d);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(162);

	var Dots = function (_Component) {
	    _inherits(Dots, _Component);

	    function Dots(props) {
	        _classCallCheck(this, Dots);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Dots).call(this, props));

	        _this.renderDots = _this.renderDots.bind(_this);
	        return _this;
	    }

	    _createClass(Dots, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            window.addEventListener('resize', this.renderDots);
	            this.renderDots();
	        }
	    }, {
	        key: 'renderDots',
	        value: function renderDots() {
	            var elemHeight = parseInt(window.getComputedStyle(this.props.elem).height);
	            var elemWidth = parseInt(window.getComputedStyle(this.props.elem).width);

	            var dots = _d2.default.select(this.props.elem).select('.dots').selectAll('.dot').data(this.props.data);

	            dots.enter().append('div').attr('class', 'dot');

	            dots.each(function (d) {
	                _d2.default.select(this).html(function (d) {
	                    return d;
	                });
	            });

	            dots.exit().remove('.dot');
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            this.renderDots();

	            return _react2.default.createElement('div', { className: 'dots' });
	        }
	    }]);

	    return Dots;
	}(_react.Component);

	exports.default = Dots;


	Dots.propTypes = {
	    data: _react.PropTypes.array,
	    elem: _react.PropTypes.object
	};

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;};!function(){var d3={version:"3.5.16"};var d3_arraySlice=[].slice,d3_array=function d3_array(list){return d3_arraySlice.call(list);};var d3_document=this.document;function d3_documentElement(node){return node&&(node.ownerDocument||node.document||node).documentElement;}function d3_window(node){return node&&(node.ownerDocument&&node.ownerDocument.defaultView||node.document&&node||node.defaultView);}if(d3_document){try{d3_array(d3_document.documentElement.childNodes)[0].nodeType;}catch(e){d3_array=function d3_array(list){var i=list.length,array=new Array(i);while(i--){array[i]=list[i];}return array;};}}if(!Date.now)Date.now=function(){return +new Date();};if(d3_document){try{d3_document.createElement("DIV").style.setProperty("opacity",0,"");}catch(error){var d3_element_prototype=this.Element.prototype,d3_element_setAttribute=d3_element_prototype.setAttribute,d3_element_setAttributeNS=d3_element_prototype.setAttributeNS,d3_style_prototype=this.CSSStyleDeclaration.prototype,d3_style_setProperty=d3_style_prototype.setProperty;d3_element_prototype.setAttribute=function(name,value){d3_element_setAttribute.call(this,name,value+"");};d3_element_prototype.setAttributeNS=function(space,local,value){d3_element_setAttributeNS.call(this,space,local,value+"");};d3_style_prototype.setProperty=function(name,value,priority){d3_style_setProperty.call(this,name,value+"",priority);};}}d3.ascending=d3_ascending;function d3_ascending(a,b){return a<b?-1:a>b?1:a>=b?0:NaN;}d3.descending=function(a,b){return b<a?-1:b>a?1:b>=a?0:NaN;};d3.min=function(array,f){var i=-1,n=array.length,a,b;if(arguments.length===1){while(++i<n){if((b=array[i])!=null&&b>=b){a=b;break;}}while(++i<n){if((b=array[i])!=null&&a>b)a=b;}}else {while(++i<n){if((b=f.call(array,array[i],i))!=null&&b>=b){a=b;break;}}while(++i<n){if((b=f.call(array,array[i],i))!=null&&a>b)a=b;}}return a;};d3.max=function(array,f){var i=-1,n=array.length,a,b;if(arguments.length===1){while(++i<n){if((b=array[i])!=null&&b>=b){a=b;break;}}while(++i<n){if((b=array[i])!=null&&b>a)a=b;}}else {while(++i<n){if((b=f.call(array,array[i],i))!=null&&b>=b){a=b;break;}}while(++i<n){if((b=f.call(array,array[i],i))!=null&&b>a)a=b;}}return a;};d3.extent=function(array,f){var i=-1,n=array.length,a,b,c;if(arguments.length===1){while(++i<n){if((b=array[i])!=null&&b>=b){a=c=b;break;}}while(++i<n){if((b=array[i])!=null){if(a>b)a=b;if(c<b)c=b;}}}else {while(++i<n){if((b=f.call(array,array[i],i))!=null&&b>=b){a=c=b;break;}}while(++i<n){if((b=f.call(array,array[i],i))!=null){if(a>b)a=b;if(c<b)c=b;}}}return [a,c];};function d3_number(x){return x===null?NaN:+x;}function d3_numeric(x){return !isNaN(x);}d3.sum=function(array,f){var s=0,n=array.length,a,i=-1;if(arguments.length===1){while(++i<n){if(d3_numeric(a=+array[i]))s+=a;}}else {while(++i<n){if(d3_numeric(a=+f.call(array,array[i],i)))s+=a;}}return s;};d3.mean=function(array,f){var s=0,n=array.length,a,i=-1,j=n;if(arguments.length===1){while(++i<n){if(d3_numeric(a=d3_number(array[i])))s+=a;else --j;}}else {while(++i<n){if(d3_numeric(a=d3_number(f.call(array,array[i],i))))s+=a;else --j;}}if(j)return s/j;};d3.quantile=function(values,p){var H=(values.length-1)*p+1,h=Math.floor(H),v=+values[h-1],e=H-h;return e?v+e*(values[h]-v):v;};d3.median=function(array,f){var numbers=[],n=array.length,a,i=-1;if(arguments.length===1){while(++i<n){if(d3_numeric(a=d3_number(array[i])))numbers.push(a);}}else {while(++i<n){if(d3_numeric(a=d3_number(f.call(array,array[i],i))))numbers.push(a);}}if(numbers.length)return d3.quantile(numbers.sort(d3_ascending),.5);};d3.variance=function(array,f){var n=array.length,m=0,a,d,s=0,i=-1,j=0;if(arguments.length===1){while(++i<n){if(d3_numeric(a=d3_number(array[i]))){d=a-m;m+=d/++j;s+=d*(a-m);}}}else {while(++i<n){if(d3_numeric(a=d3_number(f.call(array,array[i],i)))){d=a-m;m+=d/++j;s+=d*(a-m);}}}if(j>1)return s/(j-1);};d3.deviation=function(){var v=d3.variance.apply(this,arguments);return v?Math.sqrt(v):v;};function d3_bisector(compare){return {left:function left(a,x,lo,hi){if(arguments.length<3)lo=0;if(arguments.length<4)hi=a.length;while(lo<hi){var mid=lo+hi>>>1;if(compare(a[mid],x)<0)lo=mid+1;else hi=mid;}return lo;},right:function right(a,x,lo,hi){if(arguments.length<3)lo=0;if(arguments.length<4)hi=a.length;while(lo<hi){var mid=lo+hi>>>1;if(compare(a[mid],x)>0)hi=mid;else lo=mid+1;}return lo;}};}var d3_bisect=d3_bisector(d3_ascending);d3.bisectLeft=d3_bisect.left;d3.bisect=d3.bisectRight=d3_bisect.right;d3.bisector=function(f){return d3_bisector(f.length===1?function(d,x){return d3_ascending(f(d),x);}:f);};d3.shuffle=function(array,i0,i1){if((m=arguments.length)<3){i1=array.length;if(m<2)i0=0;}var m=i1-i0,t,i;while(m){i=Math.random()*m--|0;t=array[m+i0],array[m+i0]=array[i+i0],array[i+i0]=t;}return array;};d3.permute=function(array,indexes){var i=indexes.length,permutes=new Array(i);while(i--){permutes[i]=array[indexes[i]];}return permutes;};d3.pairs=function(array){var i=0,n=array.length-1,p0,p1=array[0],pairs=new Array(n<0?0:n);while(i<n){pairs[i]=[p0=p1,p1=array[++i]];}return pairs;};d3.transpose=function(matrix){if(!(n=matrix.length))return [];for(var i=-1,m=d3.min(matrix,d3_transposeLength),transpose=new Array(m);++i<m;){for(var j=-1,n,row=transpose[i]=new Array(n);++j<n;){row[j]=matrix[j][i];}}return transpose;};function d3_transposeLength(d){return d.length;}d3.zip=function(){return d3.transpose(arguments);};d3.keys=function(map){var keys=[];for(var key in map){keys.push(key);}return keys;};d3.values=function(map){var values=[];for(var key in map){values.push(map[key]);}return values;};d3.entries=function(map){var entries=[];for(var key in map){entries.push({key:key,value:map[key]});}return entries;};d3.merge=function(arrays){var n=arrays.length,m,i=-1,j=0,merged,array;while(++i<n){j+=arrays[i].length;}merged=new Array(j);while(--n>=0){array=arrays[n];m=array.length;while(--m>=0){merged[--j]=array[m];}}return merged;};var abs=Math.abs;d3.range=function(start,stop,step){if(arguments.length<3){step=1;if(arguments.length<2){stop=start;start=0;}}if((stop-start)/step===Infinity)throw new Error("infinite range");var range=[],k=d3_range_integerScale(abs(step)),i=-1,j;start*=k,stop*=k,step*=k;if(step<0)while((j=start+step*++i)>stop){range.push(j/k);}else while((j=start+step*++i)<stop){range.push(j/k);}return range;};function d3_range_integerScale(x){var k=1;while(x*k%1){k*=10;}return k;}function d3_class(ctor,properties){for(var key in properties){Object.defineProperty(ctor.prototype,key,{value:properties[key],enumerable:false});}}d3.map=function(object,f){var map=new d3_Map();if(object instanceof d3_Map){object.forEach(function(key,value){map.set(key,value);});}else if(Array.isArray(object)){var i=-1,n=object.length,o;if(arguments.length===1)while(++i<n){map.set(i,object[i]);}else while(++i<n){map.set(f.call(object,o=object[i],i),o);}}else {for(var key in object){map.set(key,object[key]);}}return map;};function d3_Map(){this._=Object.create(null);}var d3_map_proto="__proto__",d3_map_zero="\x00";d3_class(d3_Map,{has:d3_map_has,get:function get(key){return this._[d3_map_escape(key)];},set:function set(key,value){return this._[d3_map_escape(key)]=value;},remove:d3_map_remove,keys:d3_map_keys,values:function values(){var values=[];for(var key in this._){values.push(this._[key]);}return values;},entries:function entries(){var entries=[];for(var key in this._){entries.push({key:d3_map_unescape(key),value:this._[key]});}return entries;},size:d3_map_size,empty:d3_map_empty,forEach:function forEach(f){for(var key in this._){f.call(this,d3_map_unescape(key),this._[key]);}}});function d3_map_escape(key){return (key+="")===d3_map_proto||key[0]===d3_map_zero?d3_map_zero+key:key;}function d3_map_unescape(key){return (key+="")[0]===d3_map_zero?key.slice(1):key;}function d3_map_has(key){return d3_map_escape(key) in this._;}function d3_map_remove(key){return (key=d3_map_escape(key)) in this._&&delete this._[key];}function d3_map_keys(){var keys=[];for(var key in this._){keys.push(d3_map_unescape(key));}return keys;}function d3_map_size(){var size=0;for(var key in this._){++size;}return size;}function d3_map_empty(){for(var key in this._){return false;}return true;}d3.nest=function(){var nest={},keys=[],sortKeys=[],sortValues,rollup;function map(mapType,array,depth){if(depth>=keys.length)return rollup?rollup.call(nest,array):sortValues?array.sort(sortValues):array;var i=-1,n=array.length,key=keys[depth++],keyValue,object,setter,valuesByKey=new d3_Map(),values;while(++i<n){if(values=valuesByKey.get(keyValue=key(object=array[i]))){values.push(object);}else {valuesByKey.set(keyValue,[object]);}}if(mapType){object=mapType();setter=function setter(keyValue,values){object.set(keyValue,map(mapType,values,depth));};}else {object={};setter=function setter(keyValue,values){object[keyValue]=map(mapType,values,depth);};}valuesByKey.forEach(setter);return object;}function entries(map,depth){if(depth>=keys.length)return map;var array=[],sortKey=sortKeys[depth++];map.forEach(function(key,keyMap){array.push({key:key,values:entries(keyMap,depth)});});return sortKey?array.sort(function(a,b){return sortKey(a.key,b.key);}):array;}nest.map=function(array,mapType){return map(mapType,array,0);};nest.entries=function(array){return entries(map(d3.map,array,0),0);};nest.key=function(d){keys.push(d);return nest;};nest.sortKeys=function(order){sortKeys[keys.length-1]=order;return nest;};nest.sortValues=function(order){sortValues=order;return nest;};nest.rollup=function(f){rollup=f;return nest;};return nest;};d3.set=function(array){var set=new d3_Set();if(array)for(var i=0,n=array.length;i<n;++i){set.add(array[i]);}return set;};function d3_Set(){this._=Object.create(null);}d3_class(d3_Set,{has:d3_map_has,add:function add(key){this._[d3_map_escape(key+="")]=true;return key;},remove:d3_map_remove,values:d3_map_keys,size:d3_map_size,empty:d3_map_empty,forEach:function forEach(f){for(var key in this._){f.call(this,d3_map_unescape(key));}}});d3.behavior={};function d3_identity(d){return d;}d3.rebind=function(target,source){var i=1,n=arguments.length,method;while(++i<n){target[method=arguments[i]]=d3_rebind(target,source,source[method]);}return target;};function d3_rebind(target,source,method){return function(){var value=method.apply(source,arguments);return value===source?target:value;};}function d3_vendorSymbol(object,name){if(name in object)return name;name=name.charAt(0).toUpperCase()+name.slice(1);for(var i=0,n=d3_vendorPrefixes.length;i<n;++i){var prefixName=d3_vendorPrefixes[i]+name;if(prefixName in object)return prefixName;}}var d3_vendorPrefixes=["webkit","ms","moz","Moz","o","O"];function d3_noop(){}d3.dispatch=function(){var dispatch=new d3_dispatch(),i=-1,n=arguments.length;while(++i<n){dispatch[arguments[i]]=d3_dispatch_event(dispatch);}return dispatch;};function d3_dispatch(){}d3_dispatch.prototype.on=function(type,listener){var i=type.indexOf("."),name="";if(i>=0){name=type.slice(i+1);type=type.slice(0,i);}if(type)return arguments.length<2?this[type].on(name):this[type].on(name,listener);if(arguments.length===2){if(listener==null)for(type in this){if(this.hasOwnProperty(type))this[type].on(name,null);}return this;}};function d3_dispatch_event(dispatch){var listeners=[],listenerByName=new d3_Map();function event(){var z=listeners,i=-1,n=z.length,l;while(++i<n){if(l=z[i].on)l.apply(this,arguments);}return dispatch;}event.on=function(name,listener){var l=listenerByName.get(name),i;if(arguments.length<2)return l&&l.on;if(l){l.on=null;listeners=listeners.slice(0,i=listeners.indexOf(l)).concat(listeners.slice(i+1));listenerByName.remove(name);}if(listener)listeners.push(listenerByName.set(name,{on:listener}));return dispatch;};return event;}d3.event=null;function d3_eventPreventDefault(){d3.event.preventDefault();}function d3_eventSource(){var e=d3.event,s;while(s=e.sourceEvent){e=s;}return e;}function d3_eventDispatch(target){var dispatch=new d3_dispatch(),i=0,n=arguments.length;while(++i<n){dispatch[arguments[i]]=d3_dispatch_event(dispatch);}dispatch.of=function(thiz,argumentz){return function(e1){try{var e0=e1.sourceEvent=d3.event;e1.target=target;d3.event=e1;dispatch[e1.type].apply(thiz,argumentz);}finally {d3.event=e0;}};};return dispatch;}d3.requote=function(s){return s.replace(d3_requote_re,"\\$&");};var d3_requote_re=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;var d3_subclass={}.__proto__?function(object,prototype){object.__proto__=prototype;}:function(object,prototype){for(var property in prototype){object[property]=prototype[property];}};function d3_selection(groups){d3_subclass(groups,d3_selectionPrototype);return groups;}var d3_select=function d3_select(s,n){return n.querySelector(s);},d3_selectAll=function d3_selectAll(s,n){return n.querySelectorAll(s);},_d3_selectMatches=function d3_selectMatches(n,s){var d3_selectMatcher=n.matches||n[d3_vendorSymbol(n,"matchesSelector")];_d3_selectMatches=function d3_selectMatches(n,s){return d3_selectMatcher.call(n,s);};return _d3_selectMatches(n,s);};if(typeof Sizzle==="function"){d3_select=function d3_select(s,n){return Sizzle(s,n)[0]||null;};d3_selectAll=Sizzle;_d3_selectMatches=Sizzle.matchesSelector;}d3.selection=function(){return d3.select(d3_document.documentElement);};var d3_selectionPrototype=d3.selection.prototype=[];d3_selectionPrototype.select=function(selector){var subgroups=[],subgroup,subnode,group,node;selector=d3_selection_selector(selector);for(var j=-1,m=this.length;++j<m;){subgroups.push(subgroup=[]);subgroup.parentNode=(group=this[j]).parentNode;for(var i=-1,n=group.length;++i<n;){if(node=group[i]){subgroup.push(subnode=selector.call(node,node.__data__,i,j));if(subnode&&"__data__" in node)subnode.__data__=node.__data__;}else {subgroup.push(null);}}}return d3_selection(subgroups);};function d3_selection_selector(selector){return typeof selector==="function"?selector:function(){return d3_select(selector,this);};}d3_selectionPrototype.selectAll=function(selector){var subgroups=[],subgroup,node;selector=d3_selection_selectorAll(selector);for(var j=-1,m=this.length;++j<m;){for(var group=this[j],i=-1,n=group.length;++i<n;){if(node=group[i]){subgroups.push(subgroup=d3_array(selector.call(node,node.__data__,i,j)));subgroup.parentNode=node;}}}return d3_selection(subgroups);};function d3_selection_selectorAll(selector){return typeof selector==="function"?selector:function(){return d3_selectAll(selector,this);};}var d3_nsXhtml="http://www.w3.org/1999/xhtml";var d3_nsPrefix={svg:"http://www.w3.org/2000/svg",xhtml:d3_nsXhtml,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};d3.ns={prefix:d3_nsPrefix,qualify:function qualify(name){var i=name.indexOf(":"),prefix=name;if(i>=0&&(prefix=name.slice(0,i))!=="xmlns")name=name.slice(i+1);return d3_nsPrefix.hasOwnProperty(prefix)?{space:d3_nsPrefix[prefix],local:name}:name;}};d3_selectionPrototype.attr=function(name,value){if(arguments.length<2){if(typeof name==="string"){var node=this.node();name=d3.ns.qualify(name);return name.local?node.getAttributeNS(name.space,name.local):node.getAttribute(name);}for(value in name){this.each(d3_selection_attr(value,name[value]));}return this;}return this.each(d3_selection_attr(name,value));};function d3_selection_attr(name,value){name=d3.ns.qualify(name);function attrNull(){this.removeAttribute(name);}function attrNullNS(){this.removeAttributeNS(name.space,name.local);}function attrConstant(){this.setAttribute(name,value);}function attrConstantNS(){this.setAttributeNS(name.space,name.local,value);}function attrFunction(){var x=value.apply(this,arguments);if(x==null)this.removeAttribute(name);else this.setAttribute(name,x);}function attrFunctionNS(){var x=value.apply(this,arguments);if(x==null)this.removeAttributeNS(name.space,name.local);else this.setAttributeNS(name.space,name.local,x);}return value==null?name.local?attrNullNS:attrNull:typeof value==="function"?name.local?attrFunctionNS:attrFunction:name.local?attrConstantNS:attrConstant;}function d3_collapse(s){return s.trim().replace(/\s+/g," ");}d3_selectionPrototype.classed=function(name,value){if(arguments.length<2){if(typeof name==="string"){var node=this.node(),n=(name=d3_selection_classes(name)).length,i=-1;if(value=node.classList){while(++i<n){if(!value.contains(name[i]))return false;}}else {value=node.getAttribute("class");while(++i<n){if(!d3_selection_classedRe(name[i]).test(value))return false;}}return true;}for(value in name){this.each(d3_selection_classed(value,name[value]));}return this;}return this.each(d3_selection_classed(name,value));};function d3_selection_classedRe(name){return new RegExp("(?:^|\\s+)"+d3.requote(name)+"(?:\\s+|$)","g");}function d3_selection_classes(name){return (name+"").trim().split(/^|\s+/);}function d3_selection_classed(name,value){name=d3_selection_classes(name).map(d3_selection_classedName);var n=name.length;function classedConstant(){var i=-1;while(++i<n){name[i](this,value);}}function classedFunction(){var i=-1,x=value.apply(this,arguments);while(++i<n){name[i](this,x);}}return typeof value==="function"?classedFunction:classedConstant;}function d3_selection_classedName(name){var re=d3_selection_classedRe(name);return function(node,value){if(c=node.classList)return value?c.add(name):c.remove(name);var c=node.getAttribute("class")||"";if(value){re.lastIndex=0;if(!re.test(c))node.setAttribute("class",d3_collapse(c+" "+name));}else {node.setAttribute("class",d3_collapse(c.replace(re," ")));}};}d3_selectionPrototype.style=function(name,value,priority){var n=arguments.length;if(n<3){if(typeof name!=="string"){if(n<2)value="";for(priority in name){this.each(d3_selection_style(priority,name[priority],value));}return this;}if(n<2){var node=this.node();return d3_window(node).getComputedStyle(node,null).getPropertyValue(name);}priority="";}return this.each(d3_selection_style(name,value,priority));};function d3_selection_style(name,value,priority){function styleNull(){this.style.removeProperty(name);}function styleConstant(){this.style.setProperty(name,value,priority);}function styleFunction(){var x=value.apply(this,arguments);if(x==null)this.style.removeProperty(name);else this.style.setProperty(name,x,priority);}return value==null?styleNull:typeof value==="function"?styleFunction:styleConstant;}d3_selectionPrototype.property=function(name,value){if(arguments.length<2){if(typeof name==="string")return this.node()[name];for(value in name){this.each(d3_selection_property(value,name[value]));}return this;}return this.each(d3_selection_property(name,value));};function d3_selection_property(name,value){function propertyNull(){delete this[name];}function propertyConstant(){this[name]=value;}function propertyFunction(){var x=value.apply(this,arguments);if(x==null)delete this[name];else this[name]=x;}return value==null?propertyNull:typeof value==="function"?propertyFunction:propertyConstant;}d3_selectionPrototype.text=function(value){return arguments.length?this.each(typeof value==="function"?function(){var v=value.apply(this,arguments);this.textContent=v==null?"":v;}:value==null?function(){this.textContent="";}:function(){this.textContent=value;}):this.node().textContent;};d3_selectionPrototype.html=function(value){return arguments.length?this.each(typeof value==="function"?function(){var v=value.apply(this,arguments);this.innerHTML=v==null?"":v;}:value==null?function(){this.innerHTML="";}:function(){this.innerHTML=value;}):this.node().innerHTML;};d3_selectionPrototype.append=function(name){name=d3_selection_creator(name);return this.select(function(){return this.appendChild(name.apply(this,arguments));});};function d3_selection_creator(name){function create(){var document=this.ownerDocument,namespace=this.namespaceURI;return namespace===d3_nsXhtml&&document.documentElement.namespaceURI===d3_nsXhtml?document.createElement(name):document.createElementNS(namespace,name);}function createNS(){return this.ownerDocument.createElementNS(name.space,name.local);}return typeof name==="function"?name:(name=d3.ns.qualify(name)).local?createNS:create;}d3_selectionPrototype.insert=function(name,before){name=d3_selection_creator(name);before=d3_selection_selector(before);return this.select(function(){return this.insertBefore(name.apply(this,arguments),before.apply(this,arguments)||null);});};d3_selectionPrototype.remove=function(){return this.each(d3_selectionRemove);};function d3_selectionRemove(){var parent=this.parentNode;if(parent)parent.removeChild(this);}d3_selectionPrototype.data=function(value,key){var i=-1,n=this.length,group,node;if(!arguments.length){value=new Array(n=(group=this[0]).length);while(++i<n){if(node=group[i]){value[i]=node.__data__;}}return value;}function bind(group,groupData){var i,n=group.length,m=groupData.length,n0=Math.min(n,m),updateNodes=new Array(m),enterNodes=new Array(m),exitNodes=new Array(n),node,nodeData;if(key){var nodeByKeyValue=new d3_Map(),keyValues=new Array(n),keyValue;for(i=-1;++i<n;){if(node=group[i]){if(nodeByKeyValue.has(keyValue=key.call(node,node.__data__,i))){exitNodes[i]=node;}else {nodeByKeyValue.set(keyValue,node);}keyValues[i]=keyValue;}}for(i=-1;++i<m;){if(!(node=nodeByKeyValue.get(keyValue=key.call(groupData,nodeData=groupData[i],i)))){enterNodes[i]=d3_selection_dataNode(nodeData);}else if(node!==true){updateNodes[i]=node;node.__data__=nodeData;}nodeByKeyValue.set(keyValue,true);}for(i=-1;++i<n;){if(i in keyValues&&nodeByKeyValue.get(keyValues[i])!==true){exitNodes[i]=group[i];}}}else {for(i=-1;++i<n0;){node=group[i];nodeData=groupData[i];if(node){node.__data__=nodeData;updateNodes[i]=node;}else {enterNodes[i]=d3_selection_dataNode(nodeData);}}for(;i<m;++i){enterNodes[i]=d3_selection_dataNode(groupData[i]);}for(;i<n;++i){exitNodes[i]=group[i];}}enterNodes.update=updateNodes;enterNodes.parentNode=updateNodes.parentNode=exitNodes.parentNode=group.parentNode;enter.push(enterNodes);update.push(updateNodes);exit.push(exitNodes);}var enter=d3_selection_enter([]),update=d3_selection([]),exit=d3_selection([]);if(typeof value==="function"){while(++i<n){bind(group=this[i],value.call(group,group.parentNode.__data__,i));}}else {while(++i<n){bind(group=this[i],value);}}update.enter=function(){return enter;};update.exit=function(){return exit;};return update;};function d3_selection_dataNode(data){return {__data__:data};}d3_selectionPrototype.datum=function(value){return arguments.length?this.property("__data__",value):this.property("__data__");};d3_selectionPrototype.filter=function(filter){var subgroups=[],subgroup,group,node;if(typeof filter!=="function")filter=d3_selection_filter(filter);for(var j=0,m=this.length;j<m;j++){subgroups.push(subgroup=[]);subgroup.parentNode=(group=this[j]).parentNode;for(var i=0,n=group.length;i<n;i++){if((node=group[i])&&filter.call(node,node.__data__,i,j)){subgroup.push(node);}}}return d3_selection(subgroups);};function d3_selection_filter(selector){return function(){return _d3_selectMatches(this,selector);};}d3_selectionPrototype.order=function(){for(var j=-1,m=this.length;++j<m;){for(var group=this[j],i=group.length-1,next=group[i],node;--i>=0;){if(node=group[i]){if(next&&next!==node.nextSibling)next.parentNode.insertBefore(node,next);next=node;}}}return this;};d3_selectionPrototype.sort=function(comparator){comparator=d3_selection_sortComparator.apply(this,arguments);for(var j=-1,m=this.length;++j<m;){this[j].sort(comparator);}return this.order();};function d3_selection_sortComparator(comparator){if(!arguments.length)comparator=d3_ascending;return function(a,b){return a&&b?comparator(a.__data__,b.__data__):!a-!b;};}d3_selectionPrototype.each=function(callback){return d3_selection_each(this,function(node,i,j){callback.call(node,node.__data__,i,j);});};function d3_selection_each(groups,callback){for(var j=0,m=groups.length;j<m;j++){for(var group=groups[j],i=0,n=group.length,node;i<n;i++){if(node=group[i])callback(node,i,j);}}return groups;}d3_selectionPrototype.call=function(callback){var args=d3_array(arguments);callback.apply(args[0]=this,args);return this;};d3_selectionPrototype.empty=function(){return !this.node();};d3_selectionPrototype.node=function(){for(var j=0,m=this.length;j<m;j++){for(var group=this[j],i=0,n=group.length;i<n;i++){var node=group[i];if(node)return node;}}return null;};d3_selectionPrototype.size=function(){var n=0;d3_selection_each(this,function(){++n;});return n;};function d3_selection_enter(selection){d3_subclass(selection,d3_selection_enterPrototype);return selection;}var d3_selection_enterPrototype=[];d3.selection.enter=d3_selection_enter;d3.selection.enter.prototype=d3_selection_enterPrototype;d3_selection_enterPrototype.append=d3_selectionPrototype.append;d3_selection_enterPrototype.empty=d3_selectionPrototype.empty;d3_selection_enterPrototype.node=d3_selectionPrototype.node;d3_selection_enterPrototype.call=d3_selectionPrototype.call;d3_selection_enterPrototype.size=d3_selectionPrototype.size;d3_selection_enterPrototype.select=function(selector){var subgroups=[],subgroup,subnode,upgroup,group,node;for(var j=-1,m=this.length;++j<m;){upgroup=(group=this[j]).update;subgroups.push(subgroup=[]);subgroup.parentNode=group.parentNode;for(var i=-1,n=group.length;++i<n;){if(node=group[i]){subgroup.push(upgroup[i]=subnode=selector.call(group.parentNode,node.__data__,i,j));subnode.__data__=node.__data__;}else {subgroup.push(null);}}}return d3_selection(subgroups);};d3_selection_enterPrototype.insert=function(name,before){if(arguments.length<2)before=d3_selection_enterInsertBefore(this);return d3_selectionPrototype.insert.call(this,name,before);};function d3_selection_enterInsertBefore(enter){var i0,j0;return function(d,i,j){var group=enter[j].update,n=group.length,node;if(j!=j0)j0=j,i0=0;if(i>=i0)i0=i+1;while(!(node=group[i0])&&++i0<n){}return node;};}d3.select=function(node){var group;if(typeof node==="string"){group=[d3_select(node,d3_document)];group.parentNode=d3_document.documentElement;}else {group=[node];group.parentNode=d3_documentElement(node);}return d3_selection([group]);};d3.selectAll=function(nodes){var group;if(typeof nodes==="string"){group=d3_array(d3_selectAll(nodes,d3_document));group.parentNode=d3_document.documentElement;}else {group=d3_array(nodes);group.parentNode=null;}return d3_selection([group]);};d3_selectionPrototype.on=function(type,listener,capture){var n=arguments.length;if(n<3){if(typeof type!=="string"){if(n<2)listener=false;for(capture in type){this.each(d3_selection_on(capture,type[capture],listener));}return this;}if(n<2)return (n=this.node()["__on"+type])&&n._;capture=false;}return this.each(d3_selection_on(type,listener,capture));};function d3_selection_on(type,listener,capture){var name="__on"+type,i=type.indexOf("."),wrap=d3_selection_onListener;if(i>0)type=type.slice(0,i);var filter=d3_selection_onFilters.get(type);if(filter)type=filter,wrap=d3_selection_onFilter;function onRemove(){var l=this[name];if(l){this.removeEventListener(type,l,l.$);delete this[name];}}function onAdd(){var l=wrap(listener,d3_array(arguments));onRemove.call(this);this.addEventListener(type,this[name]=l,l.$=capture);l._=listener;}function removeAll(){var re=new RegExp("^__on([^.]+)"+d3.requote(type)+"$"),match;for(var name in this){if(match=name.match(re)){var l=this[name];this.removeEventListener(match[1],l,l.$);delete this[name];}}}return i?listener?onAdd:onRemove:listener?d3_noop:removeAll;}var d3_selection_onFilters=d3.map({mouseenter:"mouseover",mouseleave:"mouseout"});if(d3_document){d3_selection_onFilters.forEach(function(k){if("on"+k in d3_document)d3_selection_onFilters.remove(k);});}function d3_selection_onListener(listener,argumentz){return function(e){var o=d3.event;d3.event=e;argumentz[0]=this.__data__;try{listener.apply(this,argumentz);}finally {d3.event=o;}};}function d3_selection_onFilter(listener,argumentz){var l=d3_selection_onListener(listener,argumentz);return function(e){var target=this,related=e.relatedTarget;if(!related||related!==target&&!(related.compareDocumentPosition(target)&8)){l.call(target,e);}};}var d3_event_dragSelect,d3_event_dragId=0;function d3_event_dragSuppress(node){var name=".dragsuppress-"+ ++d3_event_dragId,click="click"+name,w=d3.select(d3_window(node)).on("touchmove"+name,d3_eventPreventDefault).on("dragstart"+name,d3_eventPreventDefault).on("selectstart"+name,d3_eventPreventDefault);if(d3_event_dragSelect==null){d3_event_dragSelect="onselectstart" in node?false:d3_vendorSymbol(node.style,"userSelect");}if(d3_event_dragSelect){var style=d3_documentElement(node).style,select=style[d3_event_dragSelect];style[d3_event_dragSelect]="none";}return function(suppressClick){w.on(name,null);if(d3_event_dragSelect)style[d3_event_dragSelect]=select;if(suppressClick){var off=function off(){w.on(click,null);};w.on(click,function(){d3_eventPreventDefault();off();},true);setTimeout(off,0);}};}d3.mouse=function(container){return d3_mousePoint(container,d3_eventSource());};var d3_mouse_bug44083=this.navigator&&/WebKit/.test(this.navigator.userAgent)?-1:0;function d3_mousePoint(container,e){if(e.changedTouches)e=e.changedTouches[0];var svg=container.ownerSVGElement||container;if(svg.createSVGPoint){var point=svg.createSVGPoint();if(d3_mouse_bug44083<0){var window=d3_window(container);if(window.scrollX||window.scrollY){svg=d3.select("body").append("svg").style({position:"absolute",top:0,left:0,margin:0,padding:0,border:"none"},"important");var ctm=svg[0][0].getScreenCTM();d3_mouse_bug44083=!(ctm.f||ctm.e);svg.remove();}}if(d3_mouse_bug44083)point.x=e.pageX,point.y=e.pageY;else point.x=e.clientX,point.y=e.clientY;point=point.matrixTransform(container.getScreenCTM().inverse());return [point.x,point.y];}var rect=container.getBoundingClientRect();return [e.clientX-rect.left-container.clientLeft,e.clientY-rect.top-container.clientTop];}d3.touch=function(container,touches,identifier){if(arguments.length<3)identifier=touches,touches=d3_eventSource().changedTouches;if(touches)for(var i=0,n=touches.length,touch;i<n;++i){if((touch=touches[i]).identifier===identifier){return d3_mousePoint(container,touch);}}};d3.behavior.drag=function(){var event=d3_eventDispatch(drag,"drag","dragstart","dragend"),origin=null,mousedown=dragstart(d3_noop,d3.mouse,d3_window,"mousemove","mouseup"),touchstart=dragstart(d3_behavior_dragTouchId,d3.touch,d3_identity,"touchmove","touchend");function drag(){this.on("mousedown.drag",mousedown).on("touchstart.drag",touchstart);}function dragstart(id,position,subject,move,end){return function(){var that=this,target=d3.event.target.correspondingElement||d3.event.target,parent=that.parentNode,dispatch=event.of(that,arguments),dragged=0,dragId=id(),dragName=".drag"+(dragId==null?"":"-"+dragId),dragOffset,dragSubject=d3.select(subject(target)).on(move+dragName,moved).on(end+dragName,ended),dragRestore=d3_event_dragSuppress(target),position0=position(parent,dragId);if(origin){dragOffset=origin.apply(that,arguments);dragOffset=[dragOffset.x-position0[0],dragOffset.y-position0[1]];}else {dragOffset=[0,0];}dispatch({type:"dragstart"});function moved(){var position1=position(parent,dragId),dx,dy;if(!position1)return;dx=position1[0]-position0[0];dy=position1[1]-position0[1];dragged|=dx|dy;position0=position1;dispatch({type:"drag",x:position1[0]+dragOffset[0],y:position1[1]+dragOffset[1],dx:dx,dy:dy});}function ended(){if(!position(parent,dragId))return;dragSubject.on(move+dragName,null).on(end+dragName,null);dragRestore(dragged);dispatch({type:"dragend"});}};}drag.origin=function(x){if(!arguments.length)return origin;origin=x;return drag;};return d3.rebind(drag,event,"on");};function d3_behavior_dragTouchId(){return d3.event.changedTouches[0].identifier;}d3.touches=function(container,touches){if(arguments.length<2)touches=d3_eventSource().touches;return touches?d3_array(touches).map(function(touch){var point=d3_mousePoint(container,touch);point.identifier=touch.identifier;return point;}):[];};var ε=1e-6,ε2=ε*ε,π=Math.PI,τ=2*π,τε=τ-ε,halfπ=π/2,d3_radians=π/180,d3_degrees=180/π;function d3_sgn(x){return x>0?1:x<0?-1:0;}function d3_cross2d(a,b,c){return (b[0]-a[0])*(c[1]-a[1])-(b[1]-a[1])*(c[0]-a[0]);}function d3_acos(x){return x>1?0:x<-1?π:Math.acos(x);}function d3_asin(x){return x>1?halfπ:x<-1?-halfπ:Math.asin(x);}function d3_sinh(x){return ((x=Math.exp(x))-1/x)/2;}function d3_cosh(x){return ((x=Math.exp(x))+1/x)/2;}function d3_tanh(x){return ((x=Math.exp(2*x))-1)/(x+1);}function d3_haversin(x){return (x=Math.sin(x/2))*x;}var ρ=Math.SQRT2,ρ2=2,ρ4=4;d3.interpolateZoom=function(p0,p1){var ux0=p0[0],uy0=p0[1],w0=p0[2],ux1=p1[0],uy1=p1[1],w1=p1[2],dx=ux1-ux0,dy=uy1-uy0,d2=dx*dx+dy*dy,i,S;if(d2<ε2){S=Math.log(w1/w0)/ρ;i=function i(t){return [ux0+t*dx,uy0+t*dy,w0*Math.exp(ρ*t*S)];};}else {var d1=Math.sqrt(d2),b0=(w1*w1-w0*w0+ρ4*d2)/(2*w0*ρ2*d1),b1=(w1*w1-w0*w0-ρ4*d2)/(2*w1*ρ2*d1),r0=Math.log(Math.sqrt(b0*b0+1)-b0),r1=Math.log(Math.sqrt(b1*b1+1)-b1);S=(r1-r0)/ρ;i=function i(t){var s=t*S,coshr0=d3_cosh(r0),u=w0/(ρ2*d1)*(coshr0*d3_tanh(ρ*s+r0)-d3_sinh(r0));return [ux0+u*dx,uy0+u*dy,w0*coshr0/d3_cosh(ρ*s+r0)];};}i.duration=S*1e3;return i;};d3.behavior.zoom=function(){var view={x:0,y:0,k:1},translate0,center0,center,size=[960,500],scaleExtent=d3_behavior_zoomInfinity,duration=250,zooming=0,mousedown="mousedown.zoom",mousemove="mousemove.zoom",mouseup="mouseup.zoom",mousewheelTimer,touchstart="touchstart.zoom",touchtime,event=d3_eventDispatch(zoom,"zoomstart","zoom","zoomend"),x0,x1,y0,y1;if(!d3_behavior_zoomWheel){d3_behavior_zoomWheel="onwheel" in d3_document?(d3_behavior_zoomDelta=function d3_behavior_zoomDelta(){return -d3.event.deltaY*(d3.event.deltaMode?120:1);},"wheel"):"onmousewheel" in d3_document?(d3_behavior_zoomDelta=function d3_behavior_zoomDelta(){return d3.event.wheelDelta;},"mousewheel"):(d3_behavior_zoomDelta=function d3_behavior_zoomDelta(){return -d3.event.detail;},"MozMousePixelScroll");}function zoom(g){g.on(mousedown,mousedowned).on(d3_behavior_zoomWheel+".zoom",mousewheeled).on("dblclick.zoom",dblclicked).on(touchstart,touchstarted);}zoom.event=function(g){g.each(function(){var dispatch=event.of(this,arguments),view1=view;if(d3_transitionInheritId){d3.select(this).transition().each("start.zoom",function(){view=this.__chart__||{x:0,y:0,k:1};zoomstarted(dispatch);}).tween("zoom:zoom",function(){var dx=size[0],dy=size[1],cx=center0?center0[0]:dx/2,cy=center0?center0[1]:dy/2,i=d3.interpolateZoom([(cx-view.x)/view.k,(cy-view.y)/view.k,dx/view.k],[(cx-view1.x)/view1.k,(cy-view1.y)/view1.k,dx/view1.k]);return function(t){var l=i(t),k=dx/l[2];this.__chart__=view={x:cx-l[0]*k,y:cy-l[1]*k,k:k};zoomed(dispatch);};}).each("interrupt.zoom",function(){zoomended(dispatch);}).each("end.zoom",function(){zoomended(dispatch);});}else {this.__chart__=view;zoomstarted(dispatch);zoomed(dispatch);zoomended(dispatch);}});};zoom.translate=function(_){if(!arguments.length)return [view.x,view.y];view={x:+_[0],y:+_[1],k:view.k};rescale();return zoom;};zoom.scale=function(_){if(!arguments.length)return view.k;view={x:view.x,y:view.y,k:null};scaleTo(+_);rescale();return zoom;};zoom.scaleExtent=function(_){if(!arguments.length)return scaleExtent;scaleExtent=_==null?d3_behavior_zoomInfinity:[+_[0],+_[1]];return zoom;};zoom.center=function(_){if(!arguments.length)return center;center=_&&[+_[0],+_[1]];return zoom;};zoom.size=function(_){if(!arguments.length)return size;size=_&&[+_[0],+_[1]];return zoom;};zoom.duration=function(_){if(!arguments.length)return duration;duration=+_;return zoom;};zoom.x=function(z){if(!arguments.length)return x1;x1=z;x0=z.copy();view={x:0,y:0,k:1};return zoom;};zoom.y=function(z){if(!arguments.length)return y1;y1=z;y0=z.copy();view={x:0,y:0,k:1};return zoom;};function location(p){return [(p[0]-view.x)/view.k,(p[1]-view.y)/view.k];}function point(l){return [l[0]*view.k+view.x,l[1]*view.k+view.y];}function scaleTo(s){view.k=Math.max(scaleExtent[0],Math.min(scaleExtent[1],s));}function translateTo(p,l){l=point(l);view.x+=p[0]-l[0];view.y+=p[1]-l[1];}function zoomTo(that,p,l,k){that.__chart__={x:view.x,y:view.y,k:view.k};scaleTo(Math.pow(2,k));translateTo(center0=p,l);that=d3.select(that);if(duration>0)that=that.transition().duration(duration);that.call(zoom.event);}function rescale(){if(x1)x1.domain(x0.range().map(function(x){return (x-view.x)/view.k;}).map(x0.invert));if(y1)y1.domain(y0.range().map(function(y){return (y-view.y)/view.k;}).map(y0.invert));}function zoomstarted(dispatch){if(! zooming++)dispatch({type:"zoomstart"});}function zoomed(dispatch){rescale();dispatch({type:"zoom",scale:view.k,translate:[view.x,view.y]});}function zoomended(dispatch){if(! --zooming)dispatch({type:"zoomend"}),center0=null;}function mousedowned(){var that=this,dispatch=event.of(that,arguments),dragged=0,subject=d3.select(d3_window(that)).on(mousemove,moved).on(mouseup,ended),location0=location(d3.mouse(that)),dragRestore=d3_event_dragSuppress(that);d3_selection_interrupt.call(that);zoomstarted(dispatch);function moved(){dragged=1;translateTo(d3.mouse(that),location0);zoomed(dispatch);}function ended(){subject.on(mousemove,null).on(mouseup,null);dragRestore(dragged);zoomended(dispatch);}}function touchstarted(){var that=this,dispatch=event.of(that,arguments),locations0={},distance0=0,scale0,zoomName=".zoom-"+d3.event.changedTouches[0].identifier,touchmove="touchmove"+zoomName,touchend="touchend"+zoomName,targets=[],subject=d3.select(that),dragRestore=d3_event_dragSuppress(that);started();zoomstarted(dispatch);subject.on(mousedown,null).on(touchstart,started);function relocate(){var touches=d3.touches(that);scale0=view.k;touches.forEach(function(t){if(t.identifier in locations0)locations0[t.identifier]=location(t);});return touches;}function started(){var target=d3.event.target;d3.select(target).on(touchmove,moved).on(touchend,ended);targets.push(target);var changed=d3.event.changedTouches;for(var i=0,n=changed.length;i<n;++i){locations0[changed[i].identifier]=null;}var touches=relocate(),now=Date.now();if(touches.length===1){if(now-touchtime<500){var p=touches[0];zoomTo(that,p,locations0[p.identifier],Math.floor(Math.log(view.k)/Math.LN2)+1);d3_eventPreventDefault();}touchtime=now;}else if(touches.length>1){var p=touches[0],q=touches[1],dx=p[0]-q[0],dy=p[1]-q[1];distance0=dx*dx+dy*dy;}}function moved(){var touches=d3.touches(that),p0,l0,p1,l1;d3_selection_interrupt.call(that);for(var i=0,n=touches.length;i<n;++i,l1=null){p1=touches[i];if(l1=locations0[p1.identifier]){if(l0)break;p0=p1,l0=l1;}}if(l1){var distance1=(distance1=p1[0]-p0[0])*distance1+(distance1=p1[1]-p0[1])*distance1,scale1=distance0&&Math.sqrt(distance1/distance0);p0=[(p0[0]+p1[0])/2,(p0[1]+p1[1])/2];l0=[(l0[0]+l1[0])/2,(l0[1]+l1[1])/2];scaleTo(scale1*scale0);}touchtime=null;translateTo(p0,l0);zoomed(dispatch);}function ended(){if(d3.event.touches.length){var changed=d3.event.changedTouches;for(var i=0,n=changed.length;i<n;++i){delete locations0[changed[i].identifier];}for(var identifier in locations0){return void relocate();}}d3.selectAll(targets).on(zoomName,null);subject.on(mousedown,mousedowned).on(touchstart,touchstarted);dragRestore();zoomended(dispatch);}}function mousewheeled(){var dispatch=event.of(this,arguments);if(mousewheelTimer)clearTimeout(mousewheelTimer);else d3_selection_interrupt.call(this),translate0=location(center0=center||d3.mouse(this)),zoomstarted(dispatch);mousewheelTimer=setTimeout(function(){mousewheelTimer=null;zoomended(dispatch);},50);d3_eventPreventDefault();scaleTo(Math.pow(2,d3_behavior_zoomDelta()*.002)*view.k);translateTo(center0,translate0);zoomed(dispatch);}function dblclicked(){var p=d3.mouse(this),k=Math.log(view.k)/Math.LN2;zoomTo(this,p,location(p),d3.event.shiftKey?Math.ceil(k)-1:Math.floor(k)+1);}return d3.rebind(zoom,event,"on");};var d3_behavior_zoomInfinity=[0,Infinity],d3_behavior_zoomDelta,d3_behavior_zoomWheel;d3.color=d3_color;function d3_color(){}d3_color.prototype.toString=function(){return this.rgb()+"";};d3.hsl=d3_hsl;function d3_hsl(h,s,l){return this instanceof d3_hsl?void (this.h=+h,this.s=+s,this.l=+l):arguments.length<2?h instanceof d3_hsl?new d3_hsl(h.h,h.s,h.l):d3_rgb_parse(""+h,d3_rgb_hsl,d3_hsl):new d3_hsl(h,s,l);}var d3_hslPrototype=d3_hsl.prototype=new d3_color();d3_hslPrototype.brighter=function(k){k=Math.pow(.7,arguments.length?k:1);return new d3_hsl(this.h,this.s,this.l/k);};d3_hslPrototype.darker=function(k){k=Math.pow(.7,arguments.length?k:1);return new d3_hsl(this.h,this.s,k*this.l);};d3_hslPrototype.rgb=function(){return d3_hsl_rgb(this.h,this.s,this.l);};function d3_hsl_rgb(h,s,l){var m1,m2;h=isNaN(h)?0:(h%=360)<0?h+360:h;s=isNaN(s)?0:s<0?0:s>1?1:s;l=l<0?0:l>1?1:l;m2=l<=.5?l*(1+s):l+s-l*s;m1=2*l-m2;function v(h){if(h>360)h-=360;else if(h<0)h+=360;if(h<60)return m1+(m2-m1)*h/60;if(h<180)return m2;if(h<240)return m1+(m2-m1)*(240-h)/60;return m1;}function vv(h){return Math.round(v(h)*255);}return new d3_rgb(vv(h+120),vv(h),vv(h-120));}d3.hcl=d3_hcl;function d3_hcl(h,c,l){return this instanceof d3_hcl?void (this.h=+h,this.c=+c,this.l=+l):arguments.length<2?h instanceof d3_hcl?new d3_hcl(h.h,h.c,h.l):h instanceof d3_lab?d3_lab_hcl(h.l,h.a,h.b):d3_lab_hcl((h=d3_rgb_lab((h=d3.rgb(h)).r,h.g,h.b)).l,h.a,h.b):new d3_hcl(h,c,l);}var d3_hclPrototype=d3_hcl.prototype=new d3_color();d3_hclPrototype.brighter=function(k){return new d3_hcl(this.h,this.c,Math.min(100,this.l+d3_lab_K*(arguments.length?k:1)));};d3_hclPrototype.darker=function(k){return new d3_hcl(this.h,this.c,Math.max(0,this.l-d3_lab_K*(arguments.length?k:1)));};d3_hclPrototype.rgb=function(){return d3_hcl_lab(this.h,this.c,this.l).rgb();};function d3_hcl_lab(h,c,l){if(isNaN(h))h=0;if(isNaN(c))c=0;return new d3_lab(l,Math.cos(h*=d3_radians)*c,Math.sin(h)*c);}d3.lab=d3_lab;function d3_lab(l,a,b){return this instanceof d3_lab?void (this.l=+l,this.a=+a,this.b=+b):arguments.length<2?l instanceof d3_lab?new d3_lab(l.l,l.a,l.b):l instanceof d3_hcl?d3_hcl_lab(l.h,l.c,l.l):d3_rgb_lab((l=d3_rgb(l)).r,l.g,l.b):new d3_lab(l,a,b);}var d3_lab_K=18;var d3_lab_X=.95047,d3_lab_Y=1,d3_lab_Z=1.08883;var d3_labPrototype=d3_lab.prototype=new d3_color();d3_labPrototype.brighter=function(k){return new d3_lab(Math.min(100,this.l+d3_lab_K*(arguments.length?k:1)),this.a,this.b);};d3_labPrototype.darker=function(k){return new d3_lab(Math.max(0,this.l-d3_lab_K*(arguments.length?k:1)),this.a,this.b);};d3_labPrototype.rgb=function(){return d3_lab_rgb(this.l,this.a,this.b);};function d3_lab_rgb(l,a,b){var y=(l+16)/116,x=y+a/500,z=y-b/200;x=d3_lab_xyz(x)*d3_lab_X;y=d3_lab_xyz(y)*d3_lab_Y;z=d3_lab_xyz(z)*d3_lab_Z;return new d3_rgb(d3_xyz_rgb(3.2404542*x-1.5371385*y-.4985314*z),d3_xyz_rgb(-.969266*x+1.8760108*y+.041556*z),d3_xyz_rgb(.0556434*x-.2040259*y+1.0572252*z));}function d3_lab_hcl(l,a,b){return l>0?new d3_hcl(Math.atan2(b,a)*d3_degrees,Math.sqrt(a*a+b*b),l):new d3_hcl(NaN,NaN,l);}function d3_lab_xyz(x){return x>.206893034?x*x*x:(x-4/29)/7.787037;}function d3_xyz_lab(x){return x>.008856?Math.pow(x,1/3):7.787037*x+4/29;}function d3_xyz_rgb(r){return Math.round(255*(r<=.00304?12.92*r:1.055*Math.pow(r,1/2.4)-.055));}d3.rgb=d3_rgb;function d3_rgb(r,g,b){return this instanceof d3_rgb?void (this.r=~ ~r,this.g=~ ~g,this.b=~ ~b):arguments.length<2?r instanceof d3_rgb?new d3_rgb(r.r,r.g,r.b):d3_rgb_parse(""+r,d3_rgb,d3_hsl_rgb):new d3_rgb(r,g,b);}function d3_rgbNumber(value){return new d3_rgb(value>>16,value>>8&255,value&255);}function d3_rgbString(value){return d3_rgbNumber(value)+"";}var d3_rgbPrototype=d3_rgb.prototype=new d3_color();d3_rgbPrototype.brighter=function(k){k=Math.pow(.7,arguments.length?k:1);var r=this.r,g=this.g,b=this.b,i=30;if(!r&&!g&&!b)return new d3_rgb(i,i,i);if(r&&r<i)r=i;if(g&&g<i)g=i;if(b&&b<i)b=i;return new d3_rgb(Math.min(255,r/k),Math.min(255,g/k),Math.min(255,b/k));};d3_rgbPrototype.darker=function(k){k=Math.pow(.7,arguments.length?k:1);return new d3_rgb(k*this.r,k*this.g,k*this.b);};d3_rgbPrototype.hsl=function(){return d3_rgb_hsl(this.r,this.g,this.b);};d3_rgbPrototype.toString=function(){return "#"+d3_rgb_hex(this.r)+d3_rgb_hex(this.g)+d3_rgb_hex(this.b);};function d3_rgb_hex(v){return v<16?"0"+Math.max(0,v).toString(16):Math.min(255,v).toString(16);}function d3_rgb_parse(format,rgb,hsl){var r=0,g=0,b=0,m1,m2,color;m1=/([a-z]+)\((.*)\)/.exec(format=format.toLowerCase());if(m1){m2=m1[2].split(",");switch(m1[1]){case "hsl":{return hsl(parseFloat(m2[0]),parseFloat(m2[1])/100,parseFloat(m2[2])/100);}case "rgb":{return rgb(d3_rgb_parseNumber(m2[0]),d3_rgb_parseNumber(m2[1]),d3_rgb_parseNumber(m2[2]));}}}if(color=d3_rgb_names.get(format)){return rgb(color.r,color.g,color.b);}if(format!=null&&format.charAt(0)==="#"&&!isNaN(color=parseInt(format.slice(1),16))){if(format.length===4){r=(color&3840)>>4;r=r>>4|r;g=color&240;g=g>>4|g;b=color&15;b=b<<4|b;}else if(format.length===7){r=(color&16711680)>>16;g=(color&65280)>>8;b=color&255;}}return rgb(r,g,b);}function d3_rgb_hsl(r,g,b){var min=Math.min(r/=255,g/=255,b/=255),max=Math.max(r,g,b),d=max-min,h,s,l=(max+min)/2;if(d){s=l<.5?d/(max+min):d/(2-max-min);if(r==max)h=(g-b)/d+(g<b?6:0);else if(g==max)h=(b-r)/d+2;else h=(r-g)/d+4;h*=60;}else {h=NaN;s=l>0&&l<1?0:h;}return new d3_hsl(h,s,l);}function d3_rgb_lab(r,g,b){r=d3_rgb_xyz(r);g=d3_rgb_xyz(g);b=d3_rgb_xyz(b);var x=d3_xyz_lab((.4124564*r+.3575761*g+.1804375*b)/d3_lab_X),y=d3_xyz_lab((.2126729*r+.7151522*g+.072175*b)/d3_lab_Y),z=d3_xyz_lab((.0193339*r+.119192*g+.9503041*b)/d3_lab_Z);return d3_lab(116*y-16,500*(x-y),200*(y-z));}function d3_rgb_xyz(r){return (r/=255)<=.04045?r/12.92:Math.pow((r+.055)/1.055,2.4);}function d3_rgb_parseNumber(c){var f=parseFloat(c);return c.charAt(c.length-1)==="%"?Math.round(f*2.55):f;}var d3_rgb_names=d3.map({aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074});d3_rgb_names.forEach(function(key,value){d3_rgb_names.set(key,d3_rgbNumber(value));});function d3_functor(v){return typeof v==="function"?v:function(){return v;};}d3.functor=d3_functor;d3.xhr=d3_xhrType(d3_identity);function d3_xhrType(response){return function(url,mimeType,callback){if(arguments.length===2&&typeof mimeType==="function")callback=mimeType,mimeType=null;return d3_xhr(url,mimeType,response,callback);};}function d3_xhr(url,mimeType,response,callback){var xhr={},dispatch=d3.dispatch("beforesend","progress","load","error"),headers={},request=new XMLHttpRequest(),responseType=null;if(this.XDomainRequest&&!("withCredentials" in request)&&/^(http(s)?:)?\/\//.test(url))request=new XDomainRequest();"onload" in request?request.onload=request.onerror=respond:request.onreadystatechange=function(){request.readyState>3&&respond();};function respond(){var status=request.status,result;if(!status&&d3_xhrHasResponse(request)||status>=200&&status<300||status===304){try{result=response.call(xhr,request);}catch(e){dispatch.error.call(xhr,e);return;}dispatch.load.call(xhr,result);}else {dispatch.error.call(xhr,request);}}request.onprogress=function(event){var o=d3.event;d3.event=event;try{dispatch.progress.call(xhr,request);}finally {d3.event=o;}};xhr.header=function(name,value){name=(name+"").toLowerCase();if(arguments.length<2)return headers[name];if(value==null)delete headers[name];else headers[name]=value+"";return xhr;};xhr.mimeType=function(value){if(!arguments.length)return mimeType;mimeType=value==null?null:value+"";return xhr;};xhr.responseType=function(value){if(!arguments.length)return responseType;responseType=value;return xhr;};xhr.response=function(value){response=value;return xhr;};["get","post"].forEach(function(method){xhr[method]=function(){return xhr.send.apply(xhr,[method].concat(d3_array(arguments)));};});xhr.send=function(method,data,callback){if(arguments.length===2&&typeof data==="function")callback=data,data=null;request.open(method,url,true);if(mimeType!=null&&!("accept" in headers))headers["accept"]=mimeType+",*/*";if(request.setRequestHeader)for(var name in headers){request.setRequestHeader(name,headers[name]);}if(mimeType!=null&&request.overrideMimeType)request.overrideMimeType(mimeType);if(responseType!=null)request.responseType=responseType;if(callback!=null)xhr.on("error",callback).on("load",function(request){callback(null,request);});dispatch.beforesend.call(xhr,request);request.send(data==null?null:data);return xhr;};xhr.abort=function(){request.abort();return xhr;};d3.rebind(xhr,dispatch,"on");return callback==null?xhr:xhr.get(d3_xhr_fixCallback(callback));}function d3_xhr_fixCallback(callback){return callback.length===1?function(error,request){callback(error==null?request:null);}:callback;}function d3_xhrHasResponse(request){var type=request.responseType;return type&&type!=="text"?request.response:request.responseText;}d3.dsv=function(delimiter,mimeType){var reFormat=new RegExp('["'+delimiter+"\n]"),delimiterCode=delimiter.charCodeAt(0);function dsv(url,row,callback){if(arguments.length<3)callback=row,row=null;var xhr=d3_xhr(url,mimeType,row==null?response:typedResponse(row),callback);xhr.row=function(_){return arguments.length?xhr.response((row=_)==null?response:typedResponse(_)):row;};return xhr;}function response(request){return dsv.parse(request.responseText);}function typedResponse(f){return function(request){return dsv.parse(request.responseText,f);};}dsv.parse=function(text,f){var o;return dsv.parseRows(text,function(row,i){if(o)return o(row,i-1);var a=new Function("d","return {"+row.map(function(name,i){return JSON.stringify(name)+": d["+i+"]";}).join(",")+"}");o=f?function(row,i){return f(a(row),i);}:a;});};dsv.parseRows=function(text,f){var EOL={},EOF={},rows=[],N=text.length,I=0,n=0,t,eol;function token(){if(I>=N)return EOF;if(eol)return eol=false,EOL;var j=I;if(text.charCodeAt(j)===34){var i=j;while(i++<N){if(text.charCodeAt(i)===34){if(text.charCodeAt(i+1)!==34)break;++i;}}I=i+2;var c=text.charCodeAt(i+1);if(c===13){eol=true;if(text.charCodeAt(i+2)===10)++I;}else if(c===10){eol=true;}return text.slice(j+1,i).replace(/""/g,'"');}while(I<N){var c=text.charCodeAt(I++),k=1;if(c===10)eol=true;else if(c===13){eol=true;if(text.charCodeAt(I)===10)++I,++k;}else if(c!==delimiterCode)continue;return text.slice(j,I-k);}return text.slice(j);}while((t=token())!==EOF){var a=[];while(t!==EOL&&t!==EOF){a.push(t);t=token();}if(f&&(a=f(a,n++))==null)continue;rows.push(a);}return rows;};dsv.format=function(rows){if(Array.isArray(rows[0]))return dsv.formatRows(rows);var fieldSet=new d3_Set(),fields=[];rows.forEach(function(row){for(var field in row){if(!fieldSet.has(field)){fields.push(fieldSet.add(field));}}});return [fields.map(formatValue).join(delimiter)].concat(rows.map(function(row){return fields.map(function(field){return formatValue(row[field]);}).join(delimiter);})).join("\n");};dsv.formatRows=function(rows){return rows.map(formatRow).join("\n");};function formatRow(row){return row.map(formatValue).join(delimiter);}function formatValue(text){return reFormat.test(text)?'"'+text.replace(/\"/g,'""')+'"':text;}return dsv;};d3.csv=d3.dsv(",","text/csv");d3.tsv=d3.dsv("	","text/tab-separated-values");var d3_timer_queueHead,d3_timer_queueTail,d3_timer_interval,d3_timer_timeout,d3_timer_frame=this[d3_vendorSymbol(this,"requestAnimationFrame")]||function(callback){setTimeout(callback,17);};d3.timer=function(){d3_timer.apply(this,arguments);};function d3_timer(callback,delay,then){var n=arguments.length;if(n<2)delay=0;if(n<3)then=Date.now();var time=then+delay,timer={c:callback,t:time,n:null};if(d3_timer_queueTail)d3_timer_queueTail.n=timer;else d3_timer_queueHead=timer;d3_timer_queueTail=timer;if(!d3_timer_interval){d3_timer_timeout=clearTimeout(d3_timer_timeout);d3_timer_interval=1;d3_timer_frame(d3_timer_step);}return timer;}function d3_timer_step(){var now=d3_timer_mark(),delay=d3_timer_sweep()-now;if(delay>24){if(isFinite(delay)){clearTimeout(d3_timer_timeout);d3_timer_timeout=setTimeout(d3_timer_step,delay);}d3_timer_interval=0;}else {d3_timer_interval=1;d3_timer_frame(d3_timer_step);}}d3.timer.flush=function(){d3_timer_mark();d3_timer_sweep();};function d3_timer_mark(){var now=Date.now(),timer=d3_timer_queueHead;while(timer){if(now>=timer.t&&timer.c(now-timer.t))timer.c=null;timer=timer.n;}return now;}function d3_timer_sweep(){var t0,t1=d3_timer_queueHead,time=Infinity;while(t1){if(t1.c){if(t1.t<time)time=t1.t;t1=(t0=t1).n;}else {t1=t0?t0.n=t1.n:d3_timer_queueHead=t1.n;}}d3_timer_queueTail=t0;return time;}function d3_format_precision(x,p){return p-(x?Math.ceil(Math.log(x)/Math.LN10):1);}d3.round=function(x,n){return n?Math.round(x*(n=Math.pow(10,n)))/n:Math.round(x);};var d3_formatPrefixes=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"].map(d3_formatPrefix);d3.formatPrefix=function(value,precision){var i=0;if(value=+value){if(value<0)value*=-1;if(precision)value=d3.round(value,d3_format_precision(value,precision));i=1+Math.floor(1e-12+Math.log(value)/Math.LN10);i=Math.max(-24,Math.min(24,Math.floor((i-1)/3)*3));}return d3_formatPrefixes[8+i/3];};function d3_formatPrefix(d,i){var k=Math.pow(10,abs(8-i)*3);return {scale:i>8?function(d){return d/k;}:function(d){return d*k;},symbol:d};}function d3_locale_numberFormat(locale){var locale_decimal=locale.decimal,locale_thousands=locale.thousands,locale_grouping=locale.grouping,locale_currency=locale.currency,formatGroup=locale_grouping&&locale_thousands?function(value,width){var i=value.length,t=[],j=0,g=locale_grouping[0],length=0;while(i>0&&g>0){if(length+g+1>width)g=Math.max(1,width-length);t.push(value.substring(i-=g,i+g));if((length+=g+1)>width)break;g=locale_grouping[j=(j+1)%locale_grouping.length];}return t.reverse().join(locale_thousands);}:d3_identity;return function(specifier){var match=d3_format_re.exec(specifier),fill=match[1]||" ",align=match[2]||">",sign=match[3]||"-",symbol=match[4]||"",zfill=match[5],width=+match[6],comma=match[7],precision=match[8],type=match[9],scale=1,prefix="",suffix="",integer=false,exponent=true;if(precision)precision=+precision.substring(1);if(zfill||fill==="0"&&align==="="){zfill=fill="0";align="=";}switch(type){case "n":comma=true;type="g";break;case "%":scale=100;suffix="%";type="f";break;case "p":scale=100;suffix="%";type="r";break;case "b":case "o":case "x":case "X":if(symbol==="#")prefix="0"+type.toLowerCase();case "c":exponent=false;case "d":integer=true;precision=0;break;case "s":scale=-1;type="r";break;}if(symbol==="$")prefix=locale_currency[0],suffix=locale_currency[1];if(type=="r"&&!precision)type="g";if(precision!=null){if(type=="g")precision=Math.max(1,Math.min(21,precision));else if(type=="e"||type=="f")precision=Math.max(0,Math.min(20,precision));}type=d3_format_types.get(type)||d3_format_typeDefault;var zcomma=zfill&&comma;return function(value){var fullSuffix=suffix;if(integer&&value%1)return "";var negative=value<0||value===0&&1/value<0?(value=-value,"-"):sign==="-"?"":sign;if(scale<0){var unit=d3.formatPrefix(value,precision);value=unit.scale(value);fullSuffix=unit.symbol+suffix;}else {value*=scale;}value=type(value,precision);var i=value.lastIndexOf("."),before,after;if(i<0){var j=exponent?value.lastIndexOf("e"):-1;if(j<0)before=value,after="";else before=value.substring(0,j),after=value.substring(j);}else {before=value.substring(0,i);after=locale_decimal+value.substring(i+1);}if(!zfill&&comma)before=formatGroup(before,Infinity);var length=prefix.length+before.length+after.length+(zcomma?0:negative.length),padding=length<width?new Array(length=width-length+1).join(fill):"";if(zcomma)before=formatGroup(padding+before,padding.length?width-after.length:Infinity);negative+=prefix;value=before+after;return (align==="<"?negative+value+padding:align===">"?padding+negative+value:align==="^"?padding.substring(0,length>>=1)+negative+value+padding.substring(length):negative+(zcomma?value:padding+value))+fullSuffix;};};}var d3_format_re=/(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i;var d3_format_types=d3.map({b:function b(x){return x.toString(2);},c:function c(x){return String.fromCharCode(x);},o:function o(x){return x.toString(8);},x:function x(_x){return _x.toString(16);},X:function X(x){return x.toString(16).toUpperCase();},g:function g(x,p){return x.toPrecision(p);},e:function e(x,p){return x.toExponential(p);},f:function f(x,p){return x.toFixed(p);},r:function r(x,p){return (x=d3.round(x,d3_format_precision(x,p))).toFixed(Math.max(0,Math.min(20,d3_format_precision(x*(1+1e-15),p))));}});function d3_format_typeDefault(x){return x+"";}var d3_time=d3.time={},d3_date=Date;function d3_date_utc(){this._=new Date(arguments.length>1?Date.UTC.apply(this,arguments):arguments[0]);}d3_date_utc.prototype={getDate:function getDate(){return this._.getUTCDate();},getDay:function getDay(){return this._.getUTCDay();},getFullYear:function getFullYear(){return this._.getUTCFullYear();},getHours:function getHours(){return this._.getUTCHours();},getMilliseconds:function getMilliseconds(){return this._.getUTCMilliseconds();},getMinutes:function getMinutes(){return this._.getUTCMinutes();},getMonth:function getMonth(){return this._.getUTCMonth();},getSeconds:function getSeconds(){return this._.getUTCSeconds();},getTime:function getTime(){return this._.getTime();},getTimezoneOffset:function getTimezoneOffset(){return 0;},valueOf:function valueOf(){return this._.valueOf();},setDate:function setDate(){d3_time_prototype.setUTCDate.apply(this._,arguments);},setDay:function setDay(){d3_time_prototype.setUTCDay.apply(this._,arguments);},setFullYear:function setFullYear(){d3_time_prototype.setUTCFullYear.apply(this._,arguments);},setHours:function setHours(){d3_time_prototype.setUTCHours.apply(this._,arguments);},setMilliseconds:function setMilliseconds(){d3_time_prototype.setUTCMilliseconds.apply(this._,arguments);},setMinutes:function setMinutes(){d3_time_prototype.setUTCMinutes.apply(this._,arguments);},setMonth:function setMonth(){d3_time_prototype.setUTCMonth.apply(this._,arguments);},setSeconds:function setSeconds(){d3_time_prototype.setUTCSeconds.apply(this._,arguments);},setTime:function setTime(){d3_time_prototype.setTime.apply(this._,arguments);}};var d3_time_prototype=Date.prototype;function d3_time_interval(local,step,number){function round(date){var d0=local(date),d1=offset(d0,1);return date-d0<d1-date?d0:d1;}function ceil(date){step(date=local(new d3_date(date-1)),1);return date;}function offset(date,k){step(date=new d3_date(+date),k);return date;}function range(t0,t1,dt){var time=ceil(t0),times=[];if(dt>1){while(time<t1){if(!(number(time)%dt))times.push(new Date(+time));step(time,1);}}else {while(time<t1){times.push(new Date(+time)),step(time,1);}}return times;}function range_utc(t0,t1,dt){try{d3_date=d3_date_utc;var utc=new d3_date_utc();utc._=t0;return range(utc,t1,dt);}finally {d3_date=Date;}}local.floor=local;local.round=round;local.ceil=ceil;local.offset=offset;local.range=range;var utc=local.utc=d3_time_interval_utc(local);utc.floor=utc;utc.round=d3_time_interval_utc(round);utc.ceil=d3_time_interval_utc(ceil);utc.offset=d3_time_interval_utc(offset);utc.range=range_utc;return local;}function d3_time_interval_utc(method){return function(date,k){try{d3_date=d3_date_utc;var utc=new d3_date_utc();utc._=date;return method(utc,k)._;}finally {d3_date=Date;}};}d3_time.year=d3_time_interval(function(date){date=d3_time.day(date);date.setMonth(0,1);return date;},function(date,offset){date.setFullYear(date.getFullYear()+offset);},function(date){return date.getFullYear();});d3_time.years=d3_time.year.range;d3_time.years.utc=d3_time.year.utc.range;d3_time.day=d3_time_interval(function(date){var day=new d3_date(2e3,0);day.setFullYear(date.getFullYear(),date.getMonth(),date.getDate());return day;},function(date,offset){date.setDate(date.getDate()+offset);},function(date){return date.getDate()-1;});d3_time.days=d3_time.day.range;d3_time.days.utc=d3_time.day.utc.range;d3_time.dayOfYear=function(date){var year=d3_time.year(date);return Math.floor((date-year-(date.getTimezoneOffset()-year.getTimezoneOffset())*6e4)/864e5);};["sunday","monday","tuesday","wednesday","thursday","friday","saturday"].forEach(function(day,i){i=7-i;var interval=d3_time[day]=d3_time_interval(function(date){(date=d3_time.day(date)).setDate(date.getDate()-(date.getDay()+i)%7);return date;},function(date,offset){date.setDate(date.getDate()+Math.floor(offset)*7);},function(date){var day=d3_time.year(date).getDay();return Math.floor((d3_time.dayOfYear(date)+(day+i)%7)/7)-(day!==i);});d3_time[day+"s"]=interval.range;d3_time[day+"s"].utc=interval.utc.range;d3_time[day+"OfYear"]=function(date){var day=d3_time.year(date).getDay();return Math.floor((d3_time.dayOfYear(date)+(day+i)%7)/7);};});d3_time.week=d3_time.sunday;d3_time.weeks=d3_time.sunday.range;d3_time.weeks.utc=d3_time.sunday.utc.range;d3_time.weekOfYear=d3_time.sundayOfYear;function d3_locale_timeFormat(locale){var locale_dateTime=locale.dateTime,locale_date=locale.date,locale_time=locale.time,locale_periods=locale.periods,locale_days=locale.days,locale_shortDays=locale.shortDays,locale_months=locale.months,locale_shortMonths=locale.shortMonths;function d3_time_format(template){var n=template.length;function format(date){var string=[],i=-1,j=0,c,p,f;while(++i<n){if(template.charCodeAt(i)===37){string.push(template.slice(j,i));if((p=d3_time_formatPads[c=template.charAt(++i)])!=null)c=template.charAt(++i);if(f=d3_time_formats[c])c=f(date,p==null?c==="e"?" ":"0":p);string.push(c);j=i+1;}}string.push(template.slice(j,i));return string.join("");}format.parse=function(string){var d={y:1900,m:0,d:1,H:0,M:0,S:0,L:0,Z:null},i=d3_time_parse(d,template,string,0);if(i!=string.length)return null;if("p" in d)d.H=d.H%12+d.p*12;var localZ=d.Z!=null&&d3_date!==d3_date_utc,date=new (localZ?d3_date_utc:d3_date)();if("j" in d)date.setFullYear(d.y,0,d.j);else if("W" in d||"U" in d){if(!("w" in d))d.w="W" in d?1:0;date.setFullYear(d.y,0,1);date.setFullYear(d.y,0,"W" in d?(d.w+6)%7+d.W*7-(date.getDay()+5)%7:d.w+d.U*7-(date.getDay()+6)%7);}else date.setFullYear(d.y,d.m,d.d);date.setHours(d.H+(d.Z/100|0),d.M+d.Z%100,d.S,d.L);return localZ?date._:date;};format.toString=function(){return template;};return format;}function d3_time_parse(date,template,string,j){var c,p,t,i=0,n=template.length,m=string.length;while(i<n){if(j>=m)return -1;c=template.charCodeAt(i++);if(c===37){t=template.charAt(i++);p=d3_time_parsers[t in d3_time_formatPads?template.charAt(i++):t];if(!p||(j=p(date,string,j))<0)return -1;}else if(c!=string.charCodeAt(j++)){return -1;}}return j;}d3_time_format.utc=function(template){var local=d3_time_format(template);function format(date){try{d3_date=d3_date_utc;var utc=new d3_date();utc._=date;return local(utc);}finally {d3_date=Date;}}format.parse=function(string){try{d3_date=d3_date_utc;var date=local.parse(string);return date&&date._;}finally {d3_date=Date;}};format.toString=local.toString;return format;};d3_time_format.multi=d3_time_format.utc.multi=d3_time_formatMulti;var d3_time_periodLookup=d3.map(),d3_time_dayRe=d3_time_formatRe(locale_days),d3_time_dayLookup=d3_time_formatLookup(locale_days),d3_time_dayAbbrevRe=d3_time_formatRe(locale_shortDays),d3_time_dayAbbrevLookup=d3_time_formatLookup(locale_shortDays),d3_time_monthRe=d3_time_formatRe(locale_months),d3_time_monthLookup=d3_time_formatLookup(locale_months),d3_time_monthAbbrevRe=d3_time_formatRe(locale_shortMonths),d3_time_monthAbbrevLookup=d3_time_formatLookup(locale_shortMonths);locale_periods.forEach(function(p,i){d3_time_periodLookup.set(p.toLowerCase(),i);});var d3_time_formats={a:function a(d){return locale_shortDays[d.getDay()];},A:function A(d){return locale_days[d.getDay()];},b:function b(d){return locale_shortMonths[d.getMonth()];},B:function B(d){return locale_months[d.getMonth()];},c:d3_time_format(locale_dateTime),d:function d(_d,p){return d3_time_formatPad(_d.getDate(),p,2);},e:function e(d,p){return d3_time_formatPad(d.getDate(),p,2);},H:function H(d,p){return d3_time_formatPad(d.getHours(),p,2);},I:function I(d,p){return d3_time_formatPad(d.getHours()%12||12,p,2);},j:function j(d,p){return d3_time_formatPad(1+d3_time.dayOfYear(d),p,3);},L:function L(d,p){return d3_time_formatPad(d.getMilliseconds(),p,3);},m:function m(d,p){return d3_time_formatPad(d.getMonth()+1,p,2);},M:function M(d,p){return d3_time_formatPad(d.getMinutes(),p,2);},p:function p(d){return locale_periods[+(d.getHours()>=12)];},S:function S(d,p){return d3_time_formatPad(d.getSeconds(),p,2);},U:function U(d,p){return d3_time_formatPad(d3_time.sundayOfYear(d),p,2);},w:function w(d){return d.getDay();},W:function W(d,p){return d3_time_formatPad(d3_time.mondayOfYear(d),p,2);},x:d3_time_format(locale_date),X:d3_time_format(locale_time),y:function y(d,p){return d3_time_formatPad(d.getFullYear()%100,p,2);},Y:function Y(d,p){return d3_time_formatPad(d.getFullYear()%1e4,p,4);},Z:d3_time_zone,"%":function _(){return "%";}};var d3_time_parsers={a:d3_time_parseWeekdayAbbrev,A:d3_time_parseWeekday,b:d3_time_parseMonthAbbrev,B:d3_time_parseMonth,c:d3_time_parseLocaleFull,d:d3_time_parseDay,e:d3_time_parseDay,H:d3_time_parseHour24,I:d3_time_parseHour24,j:d3_time_parseDayOfYear,L:d3_time_parseMilliseconds,m:d3_time_parseMonthNumber,M:d3_time_parseMinutes,p:d3_time_parseAmPm,S:d3_time_parseSeconds,U:d3_time_parseWeekNumberSunday,w:d3_time_parseWeekdayNumber,W:d3_time_parseWeekNumberMonday,x:d3_time_parseLocaleDate,X:d3_time_parseLocaleTime,y:d3_time_parseYear,Y:d3_time_parseFullYear,Z:d3_time_parseZone,"%":d3_time_parseLiteralPercent};function d3_time_parseWeekdayAbbrev(date,string,i){d3_time_dayAbbrevRe.lastIndex=0;var n=d3_time_dayAbbrevRe.exec(string.slice(i));return n?(date.w=d3_time_dayAbbrevLookup.get(n[0].toLowerCase()),i+n[0].length):-1;}function d3_time_parseWeekday(date,string,i){d3_time_dayRe.lastIndex=0;var n=d3_time_dayRe.exec(string.slice(i));return n?(date.w=d3_time_dayLookup.get(n[0].toLowerCase()),i+n[0].length):-1;}function d3_time_parseMonthAbbrev(date,string,i){d3_time_monthAbbrevRe.lastIndex=0;var n=d3_time_monthAbbrevRe.exec(string.slice(i));return n?(date.m=d3_time_monthAbbrevLookup.get(n[0].toLowerCase()),i+n[0].length):-1;}function d3_time_parseMonth(date,string,i){d3_time_monthRe.lastIndex=0;var n=d3_time_monthRe.exec(string.slice(i));return n?(date.m=d3_time_monthLookup.get(n[0].toLowerCase()),i+n[0].length):-1;}function d3_time_parseLocaleFull(date,string,i){return d3_time_parse(date,d3_time_formats.c.toString(),string,i);}function d3_time_parseLocaleDate(date,string,i){return d3_time_parse(date,d3_time_formats.x.toString(),string,i);}function d3_time_parseLocaleTime(date,string,i){return d3_time_parse(date,d3_time_formats.X.toString(),string,i);}function d3_time_parseAmPm(date,string,i){var n=d3_time_periodLookup.get(string.slice(i,i+=2).toLowerCase());return n==null?-1:(date.p=n,i);}return d3_time_format;}var d3_time_formatPads={"-":"",_:" ","0":"0"},d3_time_numberRe=/^\s*\d+/,d3_time_percentRe=/^%/;function d3_time_formatPad(value,fill,width){var sign=value<0?"-":"",string=(sign?-value:value)+"",length=string.length;return sign+(length<width?new Array(width-length+1).join(fill)+string:string);}function d3_time_formatRe(names){return new RegExp("^(?:"+names.map(d3.requote).join("|")+")","i");}function d3_time_formatLookup(names){var map=new d3_Map(),i=-1,n=names.length;while(++i<n){map.set(names[i].toLowerCase(),i);}return map;}function d3_time_parseWeekdayNumber(date,string,i){d3_time_numberRe.lastIndex=0;var n=d3_time_numberRe.exec(string.slice(i,i+1));return n?(date.w=+n[0],i+n[0].length):-1;}function d3_time_parseWeekNumberSunday(date,string,i){d3_time_numberRe.lastIndex=0;var n=d3_time_numberRe.exec(string.slice(i));return n?(date.U=+n[0],i+n[0].length):-1;}function d3_time_parseWeekNumberMonday(date,string,i){d3_time_numberRe.lastIndex=0;var n=d3_time_numberRe.exec(string.slice(i));return n?(date.W=+n[0],i+n[0].length):-1;}function d3_time_parseFullYear(date,string,i){d3_time_numberRe.lastIndex=0;var n=d3_time_numberRe.exec(string.slice(i,i+4));return n?(date.y=+n[0],i+n[0].length):-1;}function d3_time_parseYear(date,string,i){d3_time_numberRe.lastIndex=0;var n=d3_time_numberRe.exec(string.slice(i,i+2));return n?(date.y=d3_time_expandYear(+n[0]),i+n[0].length):-1;}function d3_time_parseZone(date,string,i){return (/^[+-]\d{4}$/.test(string=string.slice(i,i+5))?(date.Z=-string,i+5):-1);}function d3_time_expandYear(d){return d+(d>68?1900:2e3);}function d3_time_parseMonthNumber(date,string,i){d3_time_numberRe.lastIndex=0;var n=d3_time_numberRe.exec(string.slice(i,i+2));return n?(date.m=n[0]-1,i+n[0].length):-1;}function d3_time_parseDay(date,string,i){d3_time_numberRe.lastIndex=0;var n=d3_time_numberRe.exec(string.slice(i,i+2));return n?(date.d=+n[0],i+n[0].length):-1;}function d3_time_parseDayOfYear(date,string,i){d3_time_numberRe.lastIndex=0;var n=d3_time_numberRe.exec(string.slice(i,i+3));return n?(date.j=+n[0],i+n[0].length):-1;}function d3_time_parseHour24(date,string,i){d3_time_numberRe.lastIndex=0;var n=d3_time_numberRe.exec(string.slice(i,i+2));return n?(date.H=+n[0],i+n[0].length):-1;}function d3_time_parseMinutes(date,string,i){d3_time_numberRe.lastIndex=0;var n=d3_time_numberRe.exec(string.slice(i,i+2));return n?(date.M=+n[0],i+n[0].length):-1;}function d3_time_parseSeconds(date,string,i){d3_time_numberRe.lastIndex=0;var n=d3_time_numberRe.exec(string.slice(i,i+2));return n?(date.S=+n[0],i+n[0].length):-1;}function d3_time_parseMilliseconds(date,string,i){d3_time_numberRe.lastIndex=0;var n=d3_time_numberRe.exec(string.slice(i,i+3));return n?(date.L=+n[0],i+n[0].length):-1;}function d3_time_zone(d){var z=d.getTimezoneOffset(),zs=z>0?"-":"+",zh=abs(z)/60|0,zm=abs(z)%60;return zs+d3_time_formatPad(zh,"0",2)+d3_time_formatPad(zm,"0",2);}function d3_time_parseLiteralPercent(date,string,i){d3_time_percentRe.lastIndex=0;var n=d3_time_percentRe.exec(string.slice(i,i+1));return n?i+n[0].length:-1;}function d3_time_formatMulti(formats){var n=formats.length,i=-1;while(++i<n){formats[i][0]=this(formats[i][0]);}return function(date){var i=0,f=formats[i];while(!f[1](date)){f=formats[++i];}return f[0](date);};}d3.locale=function(locale){return {numberFormat:d3_locale_numberFormat(locale),timeFormat:d3_locale_timeFormat(locale)};};var d3_locale_enUS=d3.locale({decimal:".",thousands:",",grouping:[3],currency:["$",""],dateTime:"%a %b %e %X %Y",date:"%m/%d/%Y",time:"%H:%M:%S",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});d3.format=d3_locale_enUS.numberFormat;d3.geo={};function d3_adder(){}d3_adder.prototype={s:0,t:0,add:function add(y){d3_adderSum(y,this.t,d3_adderTemp);d3_adderSum(d3_adderTemp.s,this.s,this);if(this.s)this.t+=d3_adderTemp.t;else this.s=d3_adderTemp.t;},reset:function reset(){this.s=this.t=0;},valueOf:function valueOf(){return this.s;}};var d3_adderTemp=new d3_adder();function d3_adderSum(a,b,o){var x=o.s=a+b,bv=x-a,av=x-bv;o.t=a-av+(b-bv);}d3.geo.stream=function(object,listener){if(object&&d3_geo_streamObjectType.hasOwnProperty(object.type)){d3_geo_streamObjectType[object.type](object,listener);}else {d3_geo_streamGeometry(object,listener);}};function d3_geo_streamGeometry(geometry,listener){if(geometry&&d3_geo_streamGeometryType.hasOwnProperty(geometry.type)){d3_geo_streamGeometryType[geometry.type](geometry,listener);}}var d3_geo_streamObjectType={Feature:function Feature(feature,listener){d3_geo_streamGeometry(feature.geometry,listener);},FeatureCollection:function FeatureCollection(object,listener){var features=object.features,i=-1,n=features.length;while(++i<n){d3_geo_streamGeometry(features[i].geometry,listener);}}};var d3_geo_streamGeometryType={Sphere:function Sphere(object,listener){listener.sphere();},Point:function Point(object,listener){object=object.coordinates;listener.point(object[0],object[1],object[2]);},MultiPoint:function MultiPoint(object,listener){var coordinates=object.coordinates,i=-1,n=coordinates.length;while(++i<n){object=coordinates[i],listener.point(object[0],object[1],object[2]);}},LineString:function LineString(object,listener){d3_geo_streamLine(object.coordinates,listener,0);},MultiLineString:function MultiLineString(object,listener){var coordinates=object.coordinates,i=-1,n=coordinates.length;while(++i<n){d3_geo_streamLine(coordinates[i],listener,0);}},Polygon:function Polygon(object,listener){d3_geo_streamPolygon(object.coordinates,listener);},MultiPolygon:function MultiPolygon(object,listener){var coordinates=object.coordinates,i=-1,n=coordinates.length;while(++i<n){d3_geo_streamPolygon(coordinates[i],listener);}},GeometryCollection:function GeometryCollection(object,listener){var geometries=object.geometries,i=-1,n=geometries.length;while(++i<n){d3_geo_streamGeometry(geometries[i],listener);}}};function d3_geo_streamLine(coordinates,listener,closed){var i=-1,n=coordinates.length-closed,coordinate;listener.lineStart();while(++i<n){coordinate=coordinates[i],listener.point(coordinate[0],coordinate[1],coordinate[2]);}listener.lineEnd();}function d3_geo_streamPolygon(coordinates,listener){var i=-1,n=coordinates.length;listener.polygonStart();while(++i<n){d3_geo_streamLine(coordinates[i],listener,1);}listener.polygonEnd();}d3.geo.area=function(object){d3_geo_areaSum=0;d3.geo.stream(object,d3_geo_area);return d3_geo_areaSum;};var d3_geo_areaSum,d3_geo_areaRingSum=new d3_adder();var d3_geo_area={sphere:function sphere(){d3_geo_areaSum+=4*π;},point:d3_noop,lineStart:d3_noop,lineEnd:d3_noop,polygonStart:function polygonStart(){d3_geo_areaRingSum.reset();d3_geo_area.lineStart=d3_geo_areaRingStart;},polygonEnd:function polygonEnd(){var area=2*d3_geo_areaRingSum;d3_geo_areaSum+=area<0?4*π+area:area;d3_geo_area.lineStart=d3_geo_area.lineEnd=d3_geo_area.point=d3_noop;}};function d3_geo_areaRingStart(){var λ00,φ00,λ0,cosφ0,sinφ0;d3_geo_area.point=function(λ,φ){d3_geo_area.point=nextPoint;λ0=(λ00=λ)*d3_radians,cosφ0=Math.cos(φ=(φ00=φ)*d3_radians/2+π/4),sinφ0=Math.sin(φ);};function nextPoint(λ,φ){λ*=d3_radians;φ=φ*d3_radians/2+π/4;var dλ=λ-λ0,sdλ=dλ>=0?1:-1,adλ=sdλ*dλ,cosφ=Math.cos(φ),sinφ=Math.sin(φ),k=sinφ0*sinφ,u=cosφ0*cosφ+k*Math.cos(adλ),v=k*sdλ*Math.sin(adλ);d3_geo_areaRingSum.add(Math.atan2(v,u));λ0=λ,cosφ0=cosφ,sinφ0=sinφ;}d3_geo_area.lineEnd=function(){nextPoint(λ00,φ00);};}function d3_geo_cartesian(spherical){var λ=spherical[0],φ=spherical[1],cosφ=Math.cos(φ);return [cosφ*Math.cos(λ),cosφ*Math.sin(λ),Math.sin(φ)];}function d3_geo_cartesianDot(a,b){return a[0]*b[0]+a[1]*b[1]+a[2]*b[2];}function d3_geo_cartesianCross(a,b){return [a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]];}function d3_geo_cartesianAdd(a,b){a[0]+=b[0];a[1]+=b[1];a[2]+=b[2];}function d3_geo_cartesianScale(vector,k){return [vector[0]*k,vector[1]*k,vector[2]*k];}function d3_geo_cartesianNormalize(d){var l=Math.sqrt(d[0]*d[0]+d[1]*d[1]+d[2]*d[2]);d[0]/=l;d[1]/=l;d[2]/=l;}function d3_geo_spherical(cartesian){return [Math.atan2(cartesian[1],cartesian[0]),d3_asin(cartesian[2])];}function d3_geo_sphericalEqual(a,b){return abs(a[0]-b[0])<ε&&abs(a[1]-b[1])<ε;}d3.geo.bounds=function(){var λ0,φ0,λ1,φ1,λ_,λ__,φ__,p0,dλSum,ranges,range;var bound={point:point,lineStart:lineStart,lineEnd:lineEnd,polygonStart:function polygonStart(){bound.point=ringPoint;bound.lineStart=ringStart;bound.lineEnd=ringEnd;dλSum=0;d3_geo_area.polygonStart();},polygonEnd:function polygonEnd(){d3_geo_area.polygonEnd();bound.point=point;bound.lineStart=lineStart;bound.lineEnd=lineEnd;if(d3_geo_areaRingSum<0)λ0=-(λ1=180),φ0=-(φ1=90);else if(dλSum>ε)φ1=90;else if(dλSum<-ε)φ0=-90;range[0]=λ0,range[1]=λ1;}};function point(λ,φ){ranges.push(range=[λ0=λ,λ1=λ]);if(φ<φ0)φ0=φ;if(φ>φ1)φ1=φ;}function linePoint(λ,φ){var p=d3_geo_cartesian([λ*d3_radians,φ*d3_radians]);if(p0){var normal=d3_geo_cartesianCross(p0,p),equatorial=[normal[1],-normal[0],0],inflection=d3_geo_cartesianCross(equatorial,normal);d3_geo_cartesianNormalize(inflection);inflection=d3_geo_spherical(inflection);var dλ=λ-λ_,s=dλ>0?1:-1,λi=inflection[0]*d3_degrees*s,antimeridian=abs(dλ)>180;if(antimeridian^(s*λ_<λi&&λi<s*λ)){var φi=inflection[1]*d3_degrees;if(φi>φ1)φ1=φi;}else if(λi=(λi+360)%360-180,antimeridian^(s*λ_<λi&&λi<s*λ)){var φi=-inflection[1]*d3_degrees;if(φi<φ0)φ0=φi;}else {if(φ<φ0)φ0=φ;if(φ>φ1)φ1=φ;}if(antimeridian){if(λ<λ_){if(angle(λ0,λ)>angle(λ0,λ1))λ1=λ;}else {if(angle(λ,λ1)>angle(λ0,λ1))λ0=λ;}}else {if(λ1>=λ0){if(λ<λ0)λ0=λ;if(λ>λ1)λ1=λ;}else {if(λ>λ_){if(angle(λ0,λ)>angle(λ0,λ1))λ1=λ;}else {if(angle(λ,λ1)>angle(λ0,λ1))λ0=λ;}}}}else {point(λ,φ);}p0=p,λ_=λ;}function lineStart(){bound.point=linePoint;}function lineEnd(){range[0]=λ0,range[1]=λ1;bound.point=point;p0=null;}function ringPoint(λ,φ){if(p0){var dλ=λ-λ_;dλSum+=abs(dλ)>180?dλ+(dλ>0?360:-360):dλ;}else λ__=λ,φ__=φ;d3_geo_area.point(λ,φ);linePoint(λ,φ);}function ringStart(){d3_geo_area.lineStart();}function ringEnd(){ringPoint(λ__,φ__);d3_geo_area.lineEnd();if(abs(dλSum)>ε)λ0=-(λ1=180);range[0]=λ0,range[1]=λ1;p0=null;}function angle(λ0,λ1){return (λ1-=λ0)<0?λ1+360:λ1;}function compareRanges(a,b){return a[0]-b[0];}function withinRange(x,range){return range[0]<=range[1]?range[0]<=x&&x<=range[1]:x<range[0]||range[1]<x;}return function(feature){φ1=λ1=-(λ0=φ0=Infinity);ranges=[];d3.geo.stream(feature,bound);var n=ranges.length;if(n){ranges.sort(compareRanges);for(var i=1,a=ranges[0],b,merged=[a];i<n;++i){b=ranges[i];if(withinRange(b[0],a)||withinRange(b[1],a)){if(angle(a[0],b[1])>angle(a[0],a[1]))a[1]=b[1];if(angle(b[0],a[1])>angle(a[0],a[1]))a[0]=b[0];}else {merged.push(a=b);}}var best=-Infinity,dλ;for(var n=merged.length-1,i=0,a=merged[n],b;i<=n;a=b,++i){b=merged[i];if((dλ=angle(a[1],b[0]))>best)best=dλ,λ0=b[0],λ1=a[1];}}ranges=range=null;return λ0===Infinity||φ0===Infinity?[[NaN,NaN],[NaN,NaN]]:[[λ0,φ0],[λ1,φ1]];};}();d3.geo.centroid=function(object){d3_geo_centroidW0=d3_geo_centroidW1=d3_geo_centroidX0=d3_geo_centroidY0=d3_geo_centroidZ0=d3_geo_centroidX1=d3_geo_centroidY1=d3_geo_centroidZ1=d3_geo_centroidX2=d3_geo_centroidY2=d3_geo_centroidZ2=0;d3.geo.stream(object,d3_geo_centroid);var x=d3_geo_centroidX2,y=d3_geo_centroidY2,z=d3_geo_centroidZ2,m=x*x+y*y+z*z;if(m<ε2){x=d3_geo_centroidX1,y=d3_geo_centroidY1,z=d3_geo_centroidZ1;if(d3_geo_centroidW1<ε)x=d3_geo_centroidX0,y=d3_geo_centroidY0,z=d3_geo_centroidZ0;m=x*x+y*y+z*z;if(m<ε2)return [NaN,NaN];}return [Math.atan2(y,x)*d3_degrees,d3_asin(z/Math.sqrt(m))*d3_degrees];};var d3_geo_centroidW0,d3_geo_centroidW1,d3_geo_centroidX0,d3_geo_centroidY0,d3_geo_centroidZ0,d3_geo_centroidX1,d3_geo_centroidY1,d3_geo_centroidZ1,d3_geo_centroidX2,d3_geo_centroidY2,d3_geo_centroidZ2;var d3_geo_centroid={sphere:d3_noop,point:d3_geo_centroidPoint,lineStart:d3_geo_centroidLineStart,lineEnd:d3_geo_centroidLineEnd,polygonStart:function polygonStart(){d3_geo_centroid.lineStart=d3_geo_centroidRingStart;},polygonEnd:function polygonEnd(){d3_geo_centroid.lineStart=d3_geo_centroidLineStart;}};function d3_geo_centroidPoint(λ,φ){λ*=d3_radians;var cosφ=Math.cos(φ*=d3_radians);d3_geo_centroidPointXYZ(cosφ*Math.cos(λ),cosφ*Math.sin(λ),Math.sin(φ));}function d3_geo_centroidPointXYZ(x,y,z){++d3_geo_centroidW0;d3_geo_centroidX0+=(x-d3_geo_centroidX0)/d3_geo_centroidW0;d3_geo_centroidY0+=(y-d3_geo_centroidY0)/d3_geo_centroidW0;d3_geo_centroidZ0+=(z-d3_geo_centroidZ0)/d3_geo_centroidW0;}function d3_geo_centroidLineStart(){var x0,y0,z0;d3_geo_centroid.point=function(λ,φ){λ*=d3_radians;var cosφ=Math.cos(φ*=d3_radians);x0=cosφ*Math.cos(λ);y0=cosφ*Math.sin(λ);z0=Math.sin(φ);d3_geo_centroid.point=nextPoint;d3_geo_centroidPointXYZ(x0,y0,z0);};function nextPoint(λ,φ){λ*=d3_radians;var cosφ=Math.cos(φ*=d3_radians),x=cosφ*Math.cos(λ),y=cosφ*Math.sin(λ),z=Math.sin(φ),w=Math.atan2(Math.sqrt((w=y0*z-z0*y)*w+(w=z0*x-x0*z)*w+(w=x0*y-y0*x)*w),x0*x+y0*y+z0*z);d3_geo_centroidW1+=w;d3_geo_centroidX1+=w*(x0+(x0=x));d3_geo_centroidY1+=w*(y0+(y0=y));d3_geo_centroidZ1+=w*(z0+(z0=z));d3_geo_centroidPointXYZ(x0,y0,z0);}}function d3_geo_centroidLineEnd(){d3_geo_centroid.point=d3_geo_centroidPoint;}function d3_geo_centroidRingStart(){var λ00,φ00,x0,y0,z0;d3_geo_centroid.point=function(λ,φ){λ00=λ,φ00=φ;d3_geo_centroid.point=nextPoint;λ*=d3_radians;var cosφ=Math.cos(φ*=d3_radians);x0=cosφ*Math.cos(λ);y0=cosφ*Math.sin(λ);z0=Math.sin(φ);d3_geo_centroidPointXYZ(x0,y0,z0);};d3_geo_centroid.lineEnd=function(){nextPoint(λ00,φ00);d3_geo_centroid.lineEnd=d3_geo_centroidLineEnd;d3_geo_centroid.point=d3_geo_centroidPoint;};function nextPoint(λ,φ){λ*=d3_radians;var cosφ=Math.cos(φ*=d3_radians),x=cosφ*Math.cos(λ),y=cosφ*Math.sin(λ),z=Math.sin(φ),cx=y0*z-z0*y,cy=z0*x-x0*z,cz=x0*y-y0*x,m=Math.sqrt(cx*cx+cy*cy+cz*cz),u=x0*x+y0*y+z0*z,v=m&&-d3_acos(u)/m,w=Math.atan2(m,u);d3_geo_centroidX2+=v*cx;d3_geo_centroidY2+=v*cy;d3_geo_centroidZ2+=v*cz;d3_geo_centroidW1+=w;d3_geo_centroidX1+=w*(x0+(x0=x));d3_geo_centroidY1+=w*(y0+(y0=y));d3_geo_centroidZ1+=w*(z0+(z0=z));d3_geo_centroidPointXYZ(x0,y0,z0);}}function d3_geo_compose(a,b){function compose(x,y){return x=a(x,y),b(x[0],x[1]);}if(a.invert&&b.invert)compose.invert=function(x,y){return x=b.invert(x,y),x&&a.invert(x[0],x[1]);};return compose;}function d3_true(){return true;}function d3_geo_clipPolygon(segments,compare,clipStartInside,interpolate,listener){var subject=[],clip=[];segments.forEach(function(segment){if((n=segment.length-1)<=0)return;var n,p0=segment[0],p1=segment[n];if(d3_geo_sphericalEqual(p0,p1)){listener.lineStart();for(var i=0;i<n;++i){listener.point((p0=segment[i])[0],p0[1]);}listener.lineEnd();return;}var a=new d3_geo_clipPolygonIntersection(p0,segment,null,true),b=new d3_geo_clipPolygonIntersection(p0,null,a,false);a.o=b;subject.push(a);clip.push(b);a=new d3_geo_clipPolygonIntersection(p1,segment,null,false);b=new d3_geo_clipPolygonIntersection(p1,null,a,true);a.o=b;subject.push(a);clip.push(b);});clip.sort(compare);d3_geo_clipPolygonLinkCircular(subject);d3_geo_clipPolygonLinkCircular(clip);if(!subject.length)return;for(var i=0,entry=clipStartInside,n=clip.length;i<n;++i){clip[i].e=entry=!entry;}var start=subject[0],points,point;while(1){var current=start,isSubject=true;while(current.v){if((current=current.n)===start)return;}points=current.z;listener.lineStart();do {current.v=current.o.v=true;if(current.e){if(isSubject){for(var i=0,n=points.length;i<n;++i){listener.point((point=points[i])[0],point[1]);}}else {interpolate(current.x,current.n.x,1,listener);}current=current.n;}else {if(isSubject){points=current.p.z;for(var i=points.length-1;i>=0;--i){listener.point((point=points[i])[0],point[1]);}}else {interpolate(current.x,current.p.x,-1,listener);}current=current.p;}current=current.o;points=current.z;isSubject=!isSubject;}while(!current.v);listener.lineEnd();}}function d3_geo_clipPolygonLinkCircular(array){if(!(n=array.length))return;var n,i=0,a=array[0],b;while(++i<n){a.n=b=array[i];b.p=a;a=b;}a.n=b=array[0];b.p=a;}function d3_geo_clipPolygonIntersection(point,points,other,entry){this.x=point;this.z=points;this.o=other;this.e=entry;this.v=false;this.n=this.p=null;}function d3_geo_clip(pointVisible,clipLine,interpolate,clipStart){return function(rotate,listener){var line=clipLine(listener),rotatedClipStart=rotate.invert(clipStart[0],clipStart[1]);var clip={point:point,lineStart:lineStart,lineEnd:lineEnd,polygonStart:function polygonStart(){clip.point=pointRing;clip.lineStart=ringStart;clip.lineEnd=ringEnd;segments=[];polygon=[];},polygonEnd:function polygonEnd(){clip.point=point;clip.lineStart=lineStart;clip.lineEnd=lineEnd;segments=d3.merge(segments);var clipStartInside=d3_geo_pointInPolygon(rotatedClipStart,polygon);if(segments.length){if(!polygonStarted)listener.polygonStart(),polygonStarted=true;d3_geo_clipPolygon(segments,d3_geo_clipSort,clipStartInside,interpolate,listener);}else if(clipStartInside){if(!polygonStarted)listener.polygonStart(),polygonStarted=true;listener.lineStart();interpolate(null,null,1,listener);listener.lineEnd();}if(polygonStarted)listener.polygonEnd(),polygonStarted=false;segments=polygon=null;},sphere:function sphere(){listener.polygonStart();listener.lineStart();interpolate(null,null,1,listener);listener.lineEnd();listener.polygonEnd();}};function point(λ,φ){var point=rotate(λ,φ);if(pointVisible(λ=point[0],φ=point[1]))listener.point(λ,φ);}function pointLine(λ,φ){var point=rotate(λ,φ);line.point(point[0],point[1]);}function lineStart(){clip.point=pointLine;line.lineStart();}function lineEnd(){clip.point=point;line.lineEnd();}var segments;var buffer=d3_geo_clipBufferListener(),ringListener=clipLine(buffer),polygonStarted=false,polygon,ring;function pointRing(λ,φ){ring.push([λ,φ]);var point=rotate(λ,φ);ringListener.point(point[0],point[1]);}function ringStart(){ringListener.lineStart();ring=[];}function ringEnd(){pointRing(ring[0][0],ring[0][1]);ringListener.lineEnd();var clean=ringListener.clean(),ringSegments=buffer.buffer(),segment,n=ringSegments.length;ring.pop();polygon.push(ring);ring=null;if(!n)return;if(clean&1){segment=ringSegments[0];var n=segment.length-1,i=-1,point;if(n>0){if(!polygonStarted)listener.polygonStart(),polygonStarted=true;listener.lineStart();while(++i<n){listener.point((point=segment[i])[0],point[1]);}listener.lineEnd();}return;}if(n>1&&clean&2)ringSegments.push(ringSegments.pop().concat(ringSegments.shift()));segments.push(ringSegments.filter(d3_geo_clipSegmentLength1));}return clip;};}function d3_geo_clipSegmentLength1(segment){return segment.length>1;}function d3_geo_clipBufferListener(){var lines=[],line;return {lineStart:function lineStart(){lines.push(line=[]);},point:function point(λ,φ){line.push([λ,φ]);},lineEnd:d3_noop,buffer:function buffer(){var buffer=lines;lines=[];line=null;return buffer;},rejoin:function rejoin(){if(lines.length>1)lines.push(lines.pop().concat(lines.shift()));}};}function d3_geo_clipSort(a,b){return ((a=a.x)[0]<0?a[1]-halfπ-ε:halfπ-a[1])-((b=b.x)[0]<0?b[1]-halfπ-ε:halfπ-b[1]);}var d3_geo_clipAntimeridian=d3_geo_clip(d3_true,d3_geo_clipAntimeridianLine,d3_geo_clipAntimeridianInterpolate,[-π,-π/2]);function d3_geo_clipAntimeridianLine(listener){var λ0=NaN,φ0=NaN,sλ0=NaN,_clean;return {lineStart:function lineStart(){listener.lineStart();_clean=1;},point:function point(λ1,φ1){var sλ1=λ1>0?π:-π,dλ=abs(λ1-λ0);if(abs(dλ-π)<ε){listener.point(λ0,φ0=(φ0+φ1)/2>0?halfπ:-halfπ);listener.point(sλ0,φ0);listener.lineEnd();listener.lineStart();listener.point(sλ1,φ0);listener.point(λ1,φ0);_clean=0;}else if(sλ0!==sλ1&&dλ>=π){if(abs(λ0-sλ0)<ε)λ0-=sλ0*ε;if(abs(λ1-sλ1)<ε)λ1-=sλ1*ε;φ0=d3_geo_clipAntimeridianIntersect(λ0,φ0,λ1,φ1);listener.point(sλ0,φ0);listener.lineEnd();listener.lineStart();listener.point(sλ1,φ0);_clean=0;}listener.point(λ0=λ1,φ0=φ1);sλ0=sλ1;},lineEnd:function lineEnd(){listener.lineEnd();λ0=φ0=NaN;},clean:function clean(){return 2-_clean;}};}function d3_geo_clipAntimeridianIntersect(λ0,φ0,λ1,φ1){var cosφ0,cosφ1,sinλ0_λ1=Math.sin(λ0-λ1);return abs(sinλ0_λ1)>ε?Math.atan((Math.sin(φ0)*(cosφ1=Math.cos(φ1))*Math.sin(λ1)-Math.sin(φ1)*(cosφ0=Math.cos(φ0))*Math.sin(λ0))/(cosφ0*cosφ1*sinλ0_λ1)):(φ0+φ1)/2;}function d3_geo_clipAntimeridianInterpolate(from,to,direction,listener){var φ;if(from==null){φ=direction*halfπ;listener.point(-π,φ);listener.point(0,φ);listener.point(π,φ);listener.point(π,0);listener.point(π,-φ);listener.point(0,-φ);listener.point(-π,-φ);listener.point(-π,0);listener.point(-π,φ);}else if(abs(from[0]-to[0])>ε){var s=from[0]<to[0]?π:-π;φ=direction*s/2;listener.point(-s,φ);listener.point(0,φ);listener.point(s,φ);}else {listener.point(to[0],to[1]);}}function d3_geo_pointInPolygon(point,polygon){var meridian=point[0],parallel=point[1],meridianNormal=[Math.sin(meridian),-Math.cos(meridian),0],polarAngle=0,winding=0;d3_geo_areaRingSum.reset();for(var i=0,n=polygon.length;i<n;++i){var ring=polygon[i],m=ring.length;if(!m)continue;var point0=ring[0],λ0=point0[0],φ0=point0[1]/2+π/4,sinφ0=Math.sin(φ0),cosφ0=Math.cos(φ0),j=1;while(true){if(j===m)j=0;point=ring[j];var λ=point[0],φ=point[1]/2+π/4,sinφ=Math.sin(φ),cosφ=Math.cos(φ),dλ=λ-λ0,sdλ=dλ>=0?1:-1,adλ=sdλ*dλ,antimeridian=adλ>π,k=sinφ0*sinφ;d3_geo_areaRingSum.add(Math.atan2(k*sdλ*Math.sin(adλ),cosφ0*cosφ+k*Math.cos(adλ)));polarAngle+=antimeridian?dλ+sdλ*τ:dλ;if(antimeridian^λ0>=meridian^λ>=meridian){var arc=d3_geo_cartesianCross(d3_geo_cartesian(point0),d3_geo_cartesian(point));d3_geo_cartesianNormalize(arc);var intersection=d3_geo_cartesianCross(meridianNormal,arc);d3_geo_cartesianNormalize(intersection);var φarc=(antimeridian^dλ>=0?-1:1)*d3_asin(intersection[2]);if(parallel>φarc||parallel===φarc&&(arc[0]||arc[1])){winding+=antimeridian^dλ>=0?1:-1;}}if(! j++)break;λ0=λ,sinφ0=sinφ,cosφ0=cosφ,point0=point;}}return (polarAngle<-ε||polarAngle<ε&&d3_geo_areaRingSum<0)^winding&1;}function d3_geo_clipCircle(radius){var cr=Math.cos(radius),smallRadius=cr>0,notHemisphere=abs(cr)>ε,interpolate=d3_geo_circleInterpolate(radius,6*d3_radians);return d3_geo_clip(visible,clipLine,interpolate,smallRadius?[0,-radius]:[-π,radius-π]);function visible(λ,φ){return Math.cos(λ)*Math.cos(φ)>cr;}function clipLine(listener){var point0,c0,v0,v00,_clean2;return {lineStart:function lineStart(){v00=v0=false;_clean2=1;},point:function point(λ,φ){var point1=[λ,φ],point2,v=visible(λ,φ),c=smallRadius?v?0:code(λ,φ):v?code(λ+(λ<0?π:-π),φ):0;if(!point0&&(v00=v0=v))listener.lineStart();if(v!==v0){point2=intersect(point0,point1);if(d3_geo_sphericalEqual(point0,point2)||d3_geo_sphericalEqual(point1,point2)){point1[0]+=ε;point1[1]+=ε;v=visible(point1[0],point1[1]);}}if(v!==v0){_clean2=0;if(v){listener.lineStart();point2=intersect(point1,point0);listener.point(point2[0],point2[1]);}else {point2=intersect(point0,point1);listener.point(point2[0],point2[1]);listener.lineEnd();}point0=point2;}else if(notHemisphere&&point0&&smallRadius^v){var t;if(!(c&c0)&&(t=intersect(point1,point0,true))){_clean2=0;if(smallRadius){listener.lineStart();listener.point(t[0][0],t[0][1]);listener.point(t[1][0],t[1][1]);listener.lineEnd();}else {listener.point(t[1][0],t[1][1]);listener.lineEnd();listener.lineStart();listener.point(t[0][0],t[0][1]);}}}if(v&&(!point0||!d3_geo_sphericalEqual(point0,point1))){listener.point(point1[0],point1[1]);}point0=point1,v0=v,c0=c;},lineEnd:function lineEnd(){if(v0)listener.lineEnd();point0=null;},clean:function clean(){return _clean2|(v00&&v0)<<1;}};}function intersect(a,b,two){var pa=d3_geo_cartesian(a),pb=d3_geo_cartesian(b);var n1=[1,0,0],n2=d3_geo_cartesianCross(pa,pb),n2n2=d3_geo_cartesianDot(n2,n2),n1n2=n2[0],determinant=n2n2-n1n2*n1n2;if(!determinant)return !two&&a;var c1=cr*n2n2/determinant,c2=-cr*n1n2/determinant,n1xn2=d3_geo_cartesianCross(n1,n2),A=d3_geo_cartesianScale(n1,c1),B=d3_geo_cartesianScale(n2,c2);d3_geo_cartesianAdd(A,B);var u=n1xn2,w=d3_geo_cartesianDot(A,u),uu=d3_geo_cartesianDot(u,u),t2=w*w-uu*(d3_geo_cartesianDot(A,A)-1);if(t2<0)return;var t=Math.sqrt(t2),q=d3_geo_cartesianScale(u,(-w-t)/uu);d3_geo_cartesianAdd(q,A);q=d3_geo_spherical(q);if(!two)return q;var λ0=a[0],λ1=b[0],φ0=a[1],φ1=b[1],z;if(λ1<λ0)z=λ0,λ0=λ1,λ1=z;var δλ=λ1-λ0,polar=abs(δλ-π)<ε,meridian=polar||δλ<ε;if(!polar&&φ1<φ0)z=φ0,φ0=φ1,φ1=z;if(meridian?polar?φ0+φ1>0^q[1]<(abs(q[0]-λ0)<ε?φ0:φ1):φ0<=q[1]&&q[1]<=φ1:δλ>π^(λ0<=q[0]&&q[0]<=λ1)){var q1=d3_geo_cartesianScale(u,(-w+t)/uu);d3_geo_cartesianAdd(q1,A);return [q,d3_geo_spherical(q1)];}}function code(λ,φ){var r=smallRadius?radius:π-radius,code=0;if(λ<-r)code|=1;else if(λ>r)code|=2;if(φ<-r)code|=4;else if(φ>r)code|=8;return code;}}function d3_geom_clipLine(x0,y0,x1,y1){return function(line){var a=line.a,b=line.b,ax=a.x,ay=a.y,bx=b.x,by=b.y,t0=0,t1=1,dx=bx-ax,dy=by-ay,r;r=x0-ax;if(!dx&&r>0)return;r/=dx;if(dx<0){if(r<t0)return;if(r<t1)t1=r;}else if(dx>0){if(r>t1)return;if(r>t0)t0=r;}r=x1-ax;if(!dx&&r<0)return;r/=dx;if(dx<0){if(r>t1)return;if(r>t0)t0=r;}else if(dx>0){if(r<t0)return;if(r<t1)t1=r;}r=y0-ay;if(!dy&&r>0)return;r/=dy;if(dy<0){if(r<t0)return;if(r<t1)t1=r;}else if(dy>0){if(r>t1)return;if(r>t0)t0=r;}r=y1-ay;if(!dy&&r<0)return;r/=dy;if(dy<0){if(r>t1)return;if(r>t0)t0=r;}else if(dy>0){if(r<t0)return;if(r<t1)t1=r;}if(t0>0)line.a={x:ax+t0*dx,y:ay+t0*dy};if(t1<1)line.b={x:ax+t1*dx,y:ay+t1*dy};return line;};}var d3_geo_clipExtentMAX=1e9;d3.geo.clipExtent=function(){var x0,y0,x1,y1,_stream,clip,clipExtent={stream:function stream(output){if(_stream)_stream.valid=false;_stream=clip(output);_stream.valid=true;return _stream;},extent:function extent(_){if(!arguments.length)return [[x0,y0],[x1,y1]];clip=d3_geo_clipExtent(x0=+_[0][0],y0=+_[0][1],x1=+_[1][0],y1=+_[1][1]);if(_stream)_stream.valid=false,_stream=null;return clipExtent;}};return clipExtent.extent([[0,0],[960,500]]);};function d3_geo_clipExtent(x0,y0,x1,y1){return function(listener){var listener_=listener,bufferListener=d3_geo_clipBufferListener(),clipLine=d3_geom_clipLine(x0,y0,x1,y1),segments,polygon,ring;var clip={point:point,lineStart:lineStart,lineEnd:lineEnd,polygonStart:function polygonStart(){listener=bufferListener;segments=[];polygon=[];clean=true;},polygonEnd:function polygonEnd(){listener=listener_;segments=d3.merge(segments);var clipStartInside=insidePolygon([x0,y1]),inside=clean&&clipStartInside,visible=segments.length;if(inside||visible){listener.polygonStart();if(inside){listener.lineStart();interpolate(null,null,1,listener);listener.lineEnd();}if(visible){d3_geo_clipPolygon(segments,compare,clipStartInside,interpolate,listener);}listener.polygonEnd();}segments=polygon=ring=null;}};function insidePolygon(p){var wn=0,n=polygon.length,y=p[1];for(var i=0;i<n;++i){for(var j=1,v=polygon[i],m=v.length,a=v[0],b;j<m;++j){b=v[j];if(a[1]<=y){if(b[1]>y&&d3_cross2d(a,b,p)>0)++wn;}else {if(b[1]<=y&&d3_cross2d(a,b,p)<0)--wn;}a=b;}}return wn!==0;}function interpolate(from,to,direction,listener){var a=0,a1=0;if(from==null||(a=corner(from,direction))!==(a1=corner(to,direction))||comparePoints(from,to)<0^direction>0){do {listener.point(a===0||a===3?x0:x1,a>1?y1:y0);}while((a=(a+direction+4)%4)!==a1);}else {listener.point(to[0],to[1]);}}function pointVisible(x,y){return x0<=x&&x<=x1&&y0<=y&&y<=y1;}function point(x,y){if(pointVisible(x,y))listener.point(x,y);}var x__,y__,v__,x_,y_,v_,first,clean;function lineStart(){clip.point=linePoint;if(polygon)polygon.push(ring=[]);first=true;v_=false;x_=y_=NaN;}function lineEnd(){if(segments){linePoint(x__,y__);if(v__&&v_)bufferListener.rejoin();segments.push(bufferListener.buffer());}clip.point=point;if(v_)listener.lineEnd();}function linePoint(x,y){x=Math.max(-d3_geo_clipExtentMAX,Math.min(d3_geo_clipExtentMAX,x));y=Math.max(-d3_geo_clipExtentMAX,Math.min(d3_geo_clipExtentMAX,y));var v=pointVisible(x,y);if(polygon)ring.push([x,y]);if(first){x__=x,y__=y,v__=v;first=false;if(v){listener.lineStart();listener.point(x,y);}}else {if(v&&v_)listener.point(x,y);else {var l={a:{x:x_,y:y_},b:{x:x,y:y}};if(clipLine(l)){if(!v_){listener.lineStart();listener.point(l.a.x,l.a.y);}listener.point(l.b.x,l.b.y);if(!v)listener.lineEnd();clean=false;}else if(v){listener.lineStart();listener.point(x,y);clean=false;}}}x_=x,y_=y,v_=v;}return clip;};function corner(p,direction){return abs(p[0]-x0)<ε?direction>0?0:3:abs(p[0]-x1)<ε?direction>0?2:1:abs(p[1]-y0)<ε?direction>0?1:0:direction>0?3:2;}function compare(a,b){return comparePoints(a.x,b.x);}function comparePoints(a,b){var ca=corner(a,1),cb=corner(b,1);return ca!==cb?ca-cb:ca===0?b[1]-a[1]:ca===1?a[0]-b[0]:ca===2?a[1]-b[1]:b[0]-a[0];}}function d3_geo_conic(projectAt){var φ0=0,φ1=π/3,m=d3_geo_projectionMutator(projectAt),p=m(φ0,φ1);p.parallels=function(_){if(!arguments.length)return [φ0/π*180,φ1/π*180];return m(φ0=_[0]*π/180,φ1=_[1]*π/180);};return p;}function d3_geo_conicEqualArea(φ0,φ1){var sinφ0=Math.sin(φ0),n=(sinφ0+Math.sin(φ1))/2,C=1+sinφ0*(2*n-sinφ0),ρ0=Math.sqrt(C)/n;function forward(λ,φ){var ρ=Math.sqrt(C-2*n*Math.sin(φ))/n;return [ρ*Math.sin(λ*=n),ρ0-ρ*Math.cos(λ)];}forward.invert=function(x,y){var ρ0_y=ρ0-y;return [Math.atan2(x,ρ0_y)/n,d3_asin((C-(x*x+ρ0_y*ρ0_y)*n*n)/(2*n))];};return forward;}(d3.geo.conicEqualArea=function(){return d3_geo_conic(d3_geo_conicEqualArea);}).raw=d3_geo_conicEqualArea;d3.geo.albers=function(){return d3.geo.conicEqualArea().rotate([96,0]).center([-.6,38.7]).parallels([29.5,45.5]).scale(1070);};d3.geo.albersUsa=function(){var lower48=d3.geo.albers();var alaska=d3.geo.conicEqualArea().rotate([154,0]).center([-2,58.5]).parallels([55,65]);var hawaii=d3.geo.conicEqualArea().rotate([157,0]).center([-3,19.9]).parallels([8,18]);var _point,pointStream={point:function point(x,y){_point=[x,y];}},lower48Point,alaskaPoint,hawaiiPoint;function albersUsa(coordinates){var x=coordinates[0],y=coordinates[1];_point=null;(lower48Point(x,y),_point)||(alaskaPoint(x,y),_point)||hawaiiPoint(x,y);return _point;}albersUsa.invert=function(coordinates){var k=lower48.scale(),t=lower48.translate(),x=(coordinates[0]-t[0])/k,y=(coordinates[1]-t[1])/k;return (y>=.12&&y<.234&&x>=-.425&&x<-.214?alaska:y>=.166&&y<.234&&x>=-.214&&x<-.115?hawaii:lower48).invert(coordinates);};albersUsa.stream=function(stream){var lower48Stream=lower48.stream(stream),alaskaStream=alaska.stream(stream),hawaiiStream=hawaii.stream(stream);return {point:function point(x,y){lower48Stream.point(x,y);alaskaStream.point(x,y);hawaiiStream.point(x,y);},sphere:function sphere(){lower48Stream.sphere();alaskaStream.sphere();hawaiiStream.sphere();},lineStart:function lineStart(){lower48Stream.lineStart();alaskaStream.lineStart();hawaiiStream.lineStart();},lineEnd:function lineEnd(){lower48Stream.lineEnd();alaskaStream.lineEnd();hawaiiStream.lineEnd();},polygonStart:function polygonStart(){lower48Stream.polygonStart();alaskaStream.polygonStart();hawaiiStream.polygonStart();},polygonEnd:function polygonEnd(){lower48Stream.polygonEnd();alaskaStream.polygonEnd();hawaiiStream.polygonEnd();}};};albersUsa.precision=function(_){if(!arguments.length)return lower48.precision();lower48.precision(_);alaska.precision(_);hawaii.precision(_);return albersUsa;};albersUsa.scale=function(_){if(!arguments.length)return lower48.scale();lower48.scale(_);alaska.scale(_*.35);hawaii.scale(_);return albersUsa.translate(lower48.translate());};albersUsa.translate=function(_){if(!arguments.length)return lower48.translate();var k=lower48.scale(),x=+_[0],y=+_[1];lower48Point=lower48.translate(_).clipExtent([[x-.455*k,y-.238*k],[x+.455*k,y+.238*k]]).stream(pointStream).point;alaskaPoint=alaska.translate([x-.307*k,y+.201*k]).clipExtent([[x-.425*k+ε,y+.12*k+ε],[x-.214*k-ε,y+.234*k-ε]]).stream(pointStream).point;hawaiiPoint=hawaii.translate([x-.205*k,y+.212*k]).clipExtent([[x-.214*k+ε,y+.166*k+ε],[x-.115*k-ε,y+.234*k-ε]]).stream(pointStream).point;return albersUsa;};return albersUsa.scale(1070);};var d3_geo_pathAreaSum,d3_geo_pathAreaPolygon,d3_geo_pathArea={point:d3_noop,lineStart:d3_noop,lineEnd:d3_noop,polygonStart:function polygonStart(){d3_geo_pathAreaPolygon=0;d3_geo_pathArea.lineStart=d3_geo_pathAreaRingStart;},polygonEnd:function polygonEnd(){d3_geo_pathArea.lineStart=d3_geo_pathArea.lineEnd=d3_geo_pathArea.point=d3_noop;d3_geo_pathAreaSum+=abs(d3_geo_pathAreaPolygon/2);}};function d3_geo_pathAreaRingStart(){var x00,y00,x0,y0;d3_geo_pathArea.point=function(x,y){d3_geo_pathArea.point=nextPoint;x00=x0=x,y00=y0=y;};function nextPoint(x,y){d3_geo_pathAreaPolygon+=y0*x-x0*y;x0=x,y0=y;}d3_geo_pathArea.lineEnd=function(){nextPoint(x00,y00);};}var d3_geo_pathBoundsX0,d3_geo_pathBoundsY0,d3_geo_pathBoundsX1,d3_geo_pathBoundsY1;var d3_geo_pathBounds={point:d3_geo_pathBoundsPoint,lineStart:d3_noop,lineEnd:d3_noop,polygonStart:d3_noop,polygonEnd:d3_noop};function d3_geo_pathBoundsPoint(x,y){if(x<d3_geo_pathBoundsX0)d3_geo_pathBoundsX0=x;if(x>d3_geo_pathBoundsX1)d3_geo_pathBoundsX1=x;if(y<d3_geo_pathBoundsY0)d3_geo_pathBoundsY0=y;if(y>d3_geo_pathBoundsY1)d3_geo_pathBoundsY1=y;}function d3_geo_pathBuffer(){var pointCircle=d3_geo_pathBufferCircle(4.5),buffer=[];var stream={point:point,lineStart:function lineStart(){stream.point=pointLineStart;},lineEnd:lineEnd,polygonStart:function polygonStart(){stream.lineEnd=lineEndPolygon;},polygonEnd:function polygonEnd(){stream.lineEnd=lineEnd;stream.point=point;},pointRadius:function pointRadius(_){pointCircle=d3_geo_pathBufferCircle(_);return stream;},result:function result(){if(buffer.length){var result=buffer.join("");buffer=[];return result;}}};function point(x,y){buffer.push("M",x,",",y,pointCircle);}function pointLineStart(x,y){buffer.push("M",x,",",y);stream.point=pointLine;}function pointLine(x,y){buffer.push("L",x,",",y);}function lineEnd(){stream.point=point;}function lineEndPolygon(){buffer.push("Z");}return stream;}function d3_geo_pathBufferCircle(radius){return "m0,"+radius+"a"+radius+","+radius+" 0 1,1 0,"+-2*radius+"a"+radius+","+radius+" 0 1,1 0,"+2*radius+"z";}var d3_geo_pathCentroid={point:d3_geo_pathCentroidPoint,lineStart:d3_geo_pathCentroidLineStart,lineEnd:d3_geo_pathCentroidLineEnd,polygonStart:function polygonStart(){d3_geo_pathCentroid.lineStart=d3_geo_pathCentroidRingStart;},polygonEnd:function polygonEnd(){d3_geo_pathCentroid.point=d3_geo_pathCentroidPoint;d3_geo_pathCentroid.lineStart=d3_geo_pathCentroidLineStart;d3_geo_pathCentroid.lineEnd=d3_geo_pathCentroidLineEnd;}};function d3_geo_pathCentroidPoint(x,y){d3_geo_centroidX0+=x;d3_geo_centroidY0+=y;++d3_geo_centroidZ0;}function d3_geo_pathCentroidLineStart(){var x0,y0;d3_geo_pathCentroid.point=function(x,y){d3_geo_pathCentroid.point=nextPoint;d3_geo_pathCentroidPoint(x0=x,y0=y);};function nextPoint(x,y){var dx=x-x0,dy=y-y0,z=Math.sqrt(dx*dx+dy*dy);d3_geo_centroidX1+=z*(x0+x)/2;d3_geo_centroidY1+=z*(y0+y)/2;d3_geo_centroidZ1+=z;d3_geo_pathCentroidPoint(x0=x,y0=y);}}function d3_geo_pathCentroidLineEnd(){d3_geo_pathCentroid.point=d3_geo_pathCentroidPoint;}function d3_geo_pathCentroidRingStart(){var x00,y00,x0,y0;d3_geo_pathCentroid.point=function(x,y){d3_geo_pathCentroid.point=nextPoint;d3_geo_pathCentroidPoint(x00=x0=x,y00=y0=y);};function nextPoint(x,y){var dx=x-x0,dy=y-y0,z=Math.sqrt(dx*dx+dy*dy);d3_geo_centroidX1+=z*(x0+x)/2;d3_geo_centroidY1+=z*(y0+y)/2;d3_geo_centroidZ1+=z;z=y0*x-x0*y;d3_geo_centroidX2+=z*(x0+x);d3_geo_centroidY2+=z*(y0+y);d3_geo_centroidZ2+=z*3;d3_geo_pathCentroidPoint(x0=x,y0=y);}d3_geo_pathCentroid.lineEnd=function(){nextPoint(x00,y00);};}function d3_geo_pathContext(context){var _pointRadius=4.5;var stream={point:point,lineStart:function lineStart(){stream.point=pointLineStart;},lineEnd:lineEnd,polygonStart:function polygonStart(){stream.lineEnd=lineEndPolygon;},polygonEnd:function polygonEnd(){stream.lineEnd=lineEnd;stream.point=point;},pointRadius:function pointRadius(_){_pointRadius=_;return stream;},result:d3_noop};function point(x,y){context.moveTo(x+_pointRadius,y);context.arc(x,y,_pointRadius,0,τ);}function pointLineStart(x,y){context.moveTo(x,y);stream.point=pointLine;}function pointLine(x,y){context.lineTo(x,y);}function lineEnd(){stream.point=point;}function lineEndPolygon(){context.closePath();}return stream;}function d3_geo_resample(project){var δ2=.5,cosMinDistance=Math.cos(30*d3_radians),maxDepth=16;function resample(stream){return (maxDepth?resampleRecursive:resampleNone)(stream);}function resampleNone(stream){return d3_geo_transformPoint(stream,function(x,y){x=project(x,y);stream.point(x[0],x[1]);});}function resampleRecursive(stream){var λ00,φ00,x00,y00,a00,b00,c00,λ0,x0,y0,a0,b0,c0;var resample={point:point,lineStart:lineStart,lineEnd:lineEnd,polygonStart:function polygonStart(){stream.polygonStart();resample.lineStart=ringStart;},polygonEnd:function polygonEnd(){stream.polygonEnd();resample.lineStart=lineStart;}};function point(x,y){x=project(x,y);stream.point(x[0],x[1]);}function lineStart(){x0=NaN;resample.point=linePoint;stream.lineStart();}function linePoint(λ,φ){var c=d3_geo_cartesian([λ,φ]),p=project(λ,φ);resampleLineTo(x0,y0,λ0,a0,b0,c0,x0=p[0],y0=p[1],λ0=λ,a0=c[0],b0=c[1],c0=c[2],maxDepth,stream);stream.point(x0,y0);}function lineEnd(){resample.point=point;stream.lineEnd();}function ringStart(){lineStart();resample.point=ringPoint;resample.lineEnd=ringEnd;}function ringPoint(λ,φ){linePoint(λ00=λ,φ00=φ),x00=x0,y00=y0,a00=a0,b00=b0,c00=c0;resample.point=linePoint;}function ringEnd(){resampleLineTo(x0,y0,λ0,a0,b0,c0,x00,y00,λ00,a00,b00,c00,maxDepth,stream);resample.lineEnd=lineEnd;lineEnd();}return resample;}function resampleLineTo(x0,y0,λ0,a0,b0,c0,x1,y1,λ1,a1,b1,c1,depth,stream){var dx=x1-x0,dy=y1-y0,d2=dx*dx+dy*dy;if(d2>4*δ2&&depth--){var a=a0+a1,b=b0+b1,c=c0+c1,m=Math.sqrt(a*a+b*b+c*c),φ2=Math.asin(c/=m),λ2=abs(abs(c)-1)<ε||abs(λ0-λ1)<ε?(λ0+λ1)/2:Math.atan2(b,a),p=project(λ2,φ2),x2=p[0],y2=p[1],dx2=x2-x0,dy2=y2-y0,dz=dy*dx2-dx*dy2;if(dz*dz/d2>δ2||abs((dx*dx2+dy*dy2)/d2-.5)>.3||a0*a1+b0*b1+c0*c1<cosMinDistance){resampleLineTo(x0,y0,λ0,a0,b0,c0,x2,y2,λ2,a/=m,b/=m,c,depth,stream);stream.point(x2,y2);resampleLineTo(x2,y2,λ2,a,b,c,x1,y1,λ1,a1,b1,c1,depth,stream);}}}resample.precision=function(_){if(!arguments.length)return Math.sqrt(δ2);maxDepth=(δ2=_*_)>0&&16;return resample;};return resample;}d3.geo.path=function(){var pointRadius=4.5,projection,context,projectStream,contextStream,cacheStream;function path(object){if(object){if(typeof pointRadius==="function")contextStream.pointRadius(+pointRadius.apply(this,arguments));if(!cacheStream||!cacheStream.valid)cacheStream=projectStream(contextStream);d3.geo.stream(object,cacheStream);}return contextStream.result();}path.area=function(object){d3_geo_pathAreaSum=0;d3.geo.stream(object,projectStream(d3_geo_pathArea));return d3_geo_pathAreaSum;};path.centroid=function(object){d3_geo_centroidX0=d3_geo_centroidY0=d3_geo_centroidZ0=d3_geo_centroidX1=d3_geo_centroidY1=d3_geo_centroidZ1=d3_geo_centroidX2=d3_geo_centroidY2=d3_geo_centroidZ2=0;d3.geo.stream(object,projectStream(d3_geo_pathCentroid));return d3_geo_centroidZ2?[d3_geo_centroidX2/d3_geo_centroidZ2,d3_geo_centroidY2/d3_geo_centroidZ2]:d3_geo_centroidZ1?[d3_geo_centroidX1/d3_geo_centroidZ1,d3_geo_centroidY1/d3_geo_centroidZ1]:d3_geo_centroidZ0?[d3_geo_centroidX0/d3_geo_centroidZ0,d3_geo_centroidY0/d3_geo_centroidZ0]:[NaN,NaN];};path.bounds=function(object){d3_geo_pathBoundsX1=d3_geo_pathBoundsY1=-(d3_geo_pathBoundsX0=d3_geo_pathBoundsY0=Infinity);d3.geo.stream(object,projectStream(d3_geo_pathBounds));return [[d3_geo_pathBoundsX0,d3_geo_pathBoundsY0],[d3_geo_pathBoundsX1,d3_geo_pathBoundsY1]];};path.projection=function(_){if(!arguments.length)return projection;projectStream=(projection=_)?_.stream||d3_geo_pathProjectStream(_):d3_identity;return reset();};path.context=function(_){if(!arguments.length)return context;contextStream=(context=_)==null?new d3_geo_pathBuffer():new d3_geo_pathContext(_);if(typeof pointRadius!=="function")contextStream.pointRadius(pointRadius);return reset();};path.pointRadius=function(_){if(!arguments.length)return pointRadius;pointRadius=typeof _==="function"?_:(contextStream.pointRadius(+_),+_);return path;};function reset(){cacheStream=null;return path;}return path.projection(d3.geo.albersUsa()).context(null);};function d3_geo_pathProjectStream(project){var resample=d3_geo_resample(function(x,y){return project([x*d3_degrees,y*d3_degrees]);});return function(stream){return d3_geo_projectionRadians(resample(stream));};}d3.geo.transform=function(methods){return {stream:function stream(_stream2){var transform=new d3_geo_transform(_stream2);for(var k in methods){transform[k]=methods[k];}return transform;}};};function d3_geo_transform(stream){this.stream=stream;}d3_geo_transform.prototype={point:function point(x,y){this.stream.point(x,y);},sphere:function sphere(){this.stream.sphere();},lineStart:function lineStart(){this.stream.lineStart();},lineEnd:function lineEnd(){this.stream.lineEnd();},polygonStart:function polygonStart(){this.stream.polygonStart();},polygonEnd:function polygonEnd(){this.stream.polygonEnd();}};function d3_geo_transformPoint(stream,point){return {point:point,sphere:function sphere(){stream.sphere();},lineStart:function lineStart(){stream.lineStart();},lineEnd:function lineEnd(){stream.lineEnd();},polygonStart:function polygonStart(){stream.polygonStart();},polygonEnd:function polygonEnd(){stream.polygonEnd();}};}d3.geo.projection=d3_geo_projection;d3.geo.projectionMutator=d3_geo_projectionMutator;function d3_geo_projection(project){return d3_geo_projectionMutator(function(){return project;})();}function d3_geo_projectionMutator(projectAt){var project,rotate,projectRotate,projectResample=d3_geo_resample(function(x,y){x=project(x,y);return [x[0]*k+δx,δy-x[1]*k];}),k=150,x=480,y=250,λ=0,φ=0,δλ=0,δφ=0,δγ=0,δx,δy,preclip=d3_geo_clipAntimeridian,postclip=d3_identity,clipAngle=null,clipExtent=null,stream;function projection(point){point=projectRotate(point[0]*d3_radians,point[1]*d3_radians);return [point[0]*k+δx,δy-point[1]*k];}function invert(point){point=projectRotate.invert((point[0]-δx)/k,(δy-point[1])/k);return point&&[point[0]*d3_degrees,point[1]*d3_degrees];}projection.stream=function(output){if(stream)stream.valid=false;stream=d3_geo_projectionRadians(preclip(rotate,projectResample(postclip(output))));stream.valid=true;return stream;};projection.clipAngle=function(_){if(!arguments.length)return clipAngle;preclip=_==null?(clipAngle=_,d3_geo_clipAntimeridian):d3_geo_clipCircle((clipAngle=+_)*d3_radians);return invalidate();};projection.clipExtent=function(_){if(!arguments.length)return clipExtent;clipExtent=_;postclip=_?d3_geo_clipExtent(_[0][0],_[0][1],_[1][0],_[1][1]):d3_identity;return invalidate();};projection.scale=function(_){if(!arguments.length)return k;k=+_;return reset();};projection.translate=function(_){if(!arguments.length)return [x,y];x=+_[0];y=+_[1];return reset();};projection.center=function(_){if(!arguments.length)return [λ*d3_degrees,φ*d3_degrees];λ=_[0]%360*d3_radians;φ=_[1]%360*d3_radians;return reset();};projection.rotate=function(_){if(!arguments.length)return [δλ*d3_degrees,δφ*d3_degrees,δγ*d3_degrees];δλ=_[0]%360*d3_radians;δφ=_[1]%360*d3_radians;δγ=_.length>2?_[2]%360*d3_radians:0;return reset();};d3.rebind(projection,projectResample,"precision");function reset(){projectRotate=d3_geo_compose(rotate=d3_geo_rotation(δλ,δφ,δγ),project);var center=project(λ,φ);δx=x-center[0]*k;δy=y+center[1]*k;return invalidate();}function invalidate(){if(stream)stream.valid=false,stream=null;return projection;}return function(){project=projectAt.apply(this,arguments);projection.invert=project.invert&&invert;return reset();};}function d3_geo_projectionRadians(stream){return d3_geo_transformPoint(stream,function(x,y){stream.point(x*d3_radians,y*d3_radians);});}function d3_geo_equirectangular(λ,φ){return [λ,φ];}(d3.geo.equirectangular=function(){return d3_geo_projection(d3_geo_equirectangular);}).raw=d3_geo_equirectangular.invert=d3_geo_equirectangular;d3.geo.rotation=function(rotate){rotate=d3_geo_rotation(rotate[0]%360*d3_radians,rotate[1]*d3_radians,rotate.length>2?rotate[2]*d3_radians:0);function forward(coordinates){coordinates=rotate(coordinates[0]*d3_radians,coordinates[1]*d3_radians);return coordinates[0]*=d3_degrees,coordinates[1]*=d3_degrees,coordinates;}forward.invert=function(coordinates){coordinates=rotate.invert(coordinates[0]*d3_radians,coordinates[1]*d3_radians);return coordinates[0]*=d3_degrees,coordinates[1]*=d3_degrees,coordinates;};return forward;};function d3_geo_identityRotation(λ,φ){return [λ>π?λ-τ:λ<-π?λ+τ:λ,φ];}d3_geo_identityRotation.invert=d3_geo_equirectangular;function d3_geo_rotation(δλ,δφ,δγ){return δλ?δφ||δγ?d3_geo_compose(d3_geo_rotationλ(δλ),d3_geo_rotationφγ(δφ,δγ)):d3_geo_rotationλ(δλ):δφ||δγ?d3_geo_rotationφγ(δφ,δγ):d3_geo_identityRotation;}function d3_geo_forwardRotationλ(δλ){return function(λ,φ){return λ+=δλ,[λ>π?λ-τ:λ<-π?λ+τ:λ,φ];};}function d3_geo_rotationλ(δλ){var rotation=d3_geo_forwardRotationλ(δλ);rotation.invert=d3_geo_forwardRotationλ(-δλ);return rotation;}function d3_geo_rotationφγ(δφ,δγ){var cosδφ=Math.cos(δφ),sinδφ=Math.sin(δφ),cosδγ=Math.cos(δγ),sinδγ=Math.sin(δγ);function rotation(λ,φ){var cosφ=Math.cos(φ),x=Math.cos(λ)*cosφ,y=Math.sin(λ)*cosφ,z=Math.sin(φ),k=z*cosδφ+x*sinδφ;return [Math.atan2(y*cosδγ-k*sinδγ,x*cosδφ-z*sinδφ),d3_asin(k*cosδγ+y*sinδγ)];}rotation.invert=function(λ,φ){var cosφ=Math.cos(φ),x=Math.cos(λ)*cosφ,y=Math.sin(λ)*cosφ,z=Math.sin(φ),k=z*cosδγ-y*sinδγ;return [Math.atan2(y*cosδγ+z*sinδγ,x*cosδφ+k*sinδφ),d3_asin(k*cosδφ-x*sinδφ)];};return rotation;}d3.geo.circle=function(){var origin=[0,0],angle,precision=6,interpolate;function circle(){var center=typeof origin==="function"?origin.apply(this,arguments):origin,rotate=d3_geo_rotation(-center[0]*d3_radians,-center[1]*d3_radians,0).invert,ring=[];interpolate(null,null,1,{point:function point(x,y){ring.push(x=rotate(x,y));x[0]*=d3_degrees,x[1]*=d3_degrees;}});return {type:"Polygon",coordinates:[ring]};}circle.origin=function(x){if(!arguments.length)return origin;origin=x;return circle;};circle.angle=function(x){if(!arguments.length)return angle;interpolate=d3_geo_circleInterpolate((angle=+x)*d3_radians,precision*d3_radians);return circle;};circle.precision=function(_){if(!arguments.length)return precision;interpolate=d3_geo_circleInterpolate(angle*d3_radians,(precision=+_)*d3_radians);return circle;};return circle.angle(90);};function d3_geo_circleInterpolate(radius,precision){var cr=Math.cos(radius),sr=Math.sin(radius);return function(from,to,direction,listener){var step=direction*precision;if(from!=null){from=d3_geo_circleAngle(cr,from);to=d3_geo_circleAngle(cr,to);if(direction>0?from<to:from>to)from+=direction*τ;}else {from=radius+direction*τ;to=radius-.5*step;}for(var point,t=from;direction>0?t>to:t<to;t-=step){listener.point((point=d3_geo_spherical([cr,-sr*Math.cos(t),-sr*Math.sin(t)]))[0],point[1]);}};}function d3_geo_circleAngle(cr,point){var a=d3_geo_cartesian(point);a[0]-=cr;d3_geo_cartesianNormalize(a);var angle=d3_acos(-a[1]);return ((-a[2]<0?-angle:angle)+2*Math.PI-ε)%(2*Math.PI);}d3.geo.distance=function(a,b){var Δλ=(b[0]-a[0])*d3_radians,φ0=a[1]*d3_radians,φ1=b[1]*d3_radians,sinΔλ=Math.sin(Δλ),cosΔλ=Math.cos(Δλ),sinφ0=Math.sin(φ0),cosφ0=Math.cos(φ0),sinφ1=Math.sin(φ1),cosφ1=Math.cos(φ1),t;return Math.atan2(Math.sqrt((t=cosφ1*sinΔλ)*t+(t=cosφ0*sinφ1-sinφ0*cosφ1*cosΔλ)*t),sinφ0*sinφ1+cosφ0*cosφ1*cosΔλ);};d3.geo.graticule=function(){var x1,x0,X1,X0,y1,y0,Y1,Y0,dx=10,dy=dx,DX=90,DY=360,x,y,X,Y,precision=2.5;function graticule(){return {type:"MultiLineString",coordinates:lines()};}function lines(){return d3.range(Math.ceil(X0/DX)*DX,X1,DX).map(X).concat(d3.range(Math.ceil(Y0/DY)*DY,Y1,DY).map(Y)).concat(d3.range(Math.ceil(x0/dx)*dx,x1,dx).filter(function(x){return abs(x%DX)>ε;}).map(x)).concat(d3.range(Math.ceil(y0/dy)*dy,y1,dy).filter(function(y){return abs(y%DY)>ε;}).map(y));}graticule.lines=function(){return lines().map(function(coordinates){return {type:"LineString",coordinates:coordinates};});};graticule.outline=function(){return {type:"Polygon",coordinates:[X(X0).concat(Y(Y1).slice(1),X(X1).reverse().slice(1),Y(Y0).reverse().slice(1))]};};graticule.extent=function(_){if(!arguments.length)return graticule.minorExtent();return graticule.majorExtent(_).minorExtent(_);};graticule.majorExtent=function(_){if(!arguments.length)return [[X0,Y0],[X1,Y1]];X0=+_[0][0],X1=+_[1][0];Y0=+_[0][1],Y1=+_[1][1];if(X0>X1)_=X0,X0=X1,X1=_;if(Y0>Y1)_=Y0,Y0=Y1,Y1=_;return graticule.precision(precision);};graticule.minorExtent=function(_){if(!arguments.length)return [[x0,y0],[x1,y1]];x0=+_[0][0],x1=+_[1][0];y0=+_[0][1],y1=+_[1][1];if(x0>x1)_=x0,x0=x1,x1=_;if(y0>y1)_=y0,y0=y1,y1=_;return graticule.precision(precision);};graticule.step=function(_){if(!arguments.length)return graticule.minorStep();return graticule.majorStep(_).minorStep(_);};graticule.majorStep=function(_){if(!arguments.length)return [DX,DY];DX=+_[0],DY=+_[1];return graticule;};graticule.minorStep=function(_){if(!arguments.length)return [dx,dy];dx=+_[0],dy=+_[1];return graticule;};graticule.precision=function(_){if(!arguments.length)return precision;precision=+_;x=d3_geo_graticuleX(y0,y1,90);y=d3_geo_graticuleY(x0,x1,precision);X=d3_geo_graticuleX(Y0,Y1,90);Y=d3_geo_graticuleY(X0,X1,precision);return graticule;};return graticule.majorExtent([[-180,-90+ε],[180,90-ε]]).minorExtent([[-180,-80-ε],[180,80+ε]]);};function d3_geo_graticuleX(y0,y1,dy){var y=d3.range(y0,y1-ε,dy).concat(y1);return function(x){return y.map(function(y){return [x,y];});};}function d3_geo_graticuleY(x0,x1,dx){var x=d3.range(x0,x1-ε,dx).concat(x1);return function(y){return x.map(function(x){return [x,y];});};}function d3_source(d){return d.source;}function d3_target(d){return d.target;}d3.geo.greatArc=function(){var source=d3_source,source_,target=d3_target,target_;function greatArc(){return {type:"LineString",coordinates:[source_||source.apply(this,arguments),target_||target.apply(this,arguments)]};}greatArc.distance=function(){return d3.geo.distance(source_||source.apply(this,arguments),target_||target.apply(this,arguments));};greatArc.source=function(_){if(!arguments.length)return source;source=_,source_=typeof _==="function"?null:_;return greatArc;};greatArc.target=function(_){if(!arguments.length)return target;target=_,target_=typeof _==="function"?null:_;return greatArc;};greatArc.precision=function(){return arguments.length?greatArc:0;};return greatArc;};d3.geo.interpolate=function(source,target){return d3_geo_interpolate(source[0]*d3_radians,source[1]*d3_radians,target[0]*d3_radians,target[1]*d3_radians);};function d3_geo_interpolate(x0,y0,x1,y1){var cy0=Math.cos(y0),sy0=Math.sin(y0),cy1=Math.cos(y1),sy1=Math.sin(y1),kx0=cy0*Math.cos(x0),ky0=cy0*Math.sin(x0),kx1=cy1*Math.cos(x1),ky1=cy1*Math.sin(x1),d=2*Math.asin(Math.sqrt(d3_haversin(y1-y0)+cy0*cy1*d3_haversin(x1-x0))),k=1/Math.sin(d);var interpolate=d?function(t){var B=Math.sin(t*=d)*k,A=Math.sin(d-t)*k,x=A*kx0+B*kx1,y=A*ky0+B*ky1,z=A*sy0+B*sy1;return [Math.atan2(y,x)*d3_degrees,Math.atan2(z,Math.sqrt(x*x+y*y))*d3_degrees];}:function(){return [x0*d3_degrees,y0*d3_degrees];};interpolate.distance=d;return interpolate;}d3.geo.length=function(object){d3_geo_lengthSum=0;d3.geo.stream(object,d3_geo_length);return d3_geo_lengthSum;};var d3_geo_lengthSum;var d3_geo_length={sphere:d3_noop,point:d3_noop,lineStart:d3_geo_lengthLineStart,lineEnd:d3_noop,polygonStart:d3_noop,polygonEnd:d3_noop};function d3_geo_lengthLineStart(){var λ0,sinφ0,cosφ0;d3_geo_length.point=function(λ,φ){λ0=λ*d3_radians,sinφ0=Math.sin(φ*=d3_radians),cosφ0=Math.cos(φ);d3_geo_length.point=nextPoint;};d3_geo_length.lineEnd=function(){d3_geo_length.point=d3_geo_length.lineEnd=d3_noop;};function nextPoint(λ,φ){var sinφ=Math.sin(φ*=d3_radians),cosφ=Math.cos(φ),t=abs((λ*=d3_radians)-λ0),cosΔλ=Math.cos(t);d3_geo_lengthSum+=Math.atan2(Math.sqrt((t=cosφ*Math.sin(t))*t+(t=cosφ0*sinφ-sinφ0*cosφ*cosΔλ)*t),sinφ0*sinφ+cosφ0*cosφ*cosΔλ);λ0=λ,sinφ0=sinφ,cosφ0=cosφ;}}function d3_geo_azimuthal(scale,angle){function azimuthal(λ,φ){var cosλ=Math.cos(λ),cosφ=Math.cos(φ),k=scale(cosλ*cosφ);return [k*cosφ*Math.sin(λ),k*Math.sin(φ)];}azimuthal.invert=function(x,y){var ρ=Math.sqrt(x*x+y*y),c=angle(ρ),sinc=Math.sin(c),cosc=Math.cos(c);return [Math.atan2(x*sinc,ρ*cosc),Math.asin(ρ&&y*sinc/ρ)];};return azimuthal;}var d3_geo_azimuthalEqualArea=d3_geo_azimuthal(function(cosλcosφ){return Math.sqrt(2/(1+cosλcosφ));},function(ρ){return 2*Math.asin(ρ/2);});(d3.geo.azimuthalEqualArea=function(){return d3_geo_projection(d3_geo_azimuthalEqualArea);}).raw=d3_geo_azimuthalEqualArea;var d3_geo_azimuthalEquidistant=d3_geo_azimuthal(function(cosλcosφ){var c=Math.acos(cosλcosφ);return c&&c/Math.sin(c);},d3_identity);(d3.geo.azimuthalEquidistant=function(){return d3_geo_projection(d3_geo_azimuthalEquidistant);}).raw=d3_geo_azimuthalEquidistant;function d3_geo_conicConformal(φ0,φ1){var cosφ0=Math.cos(φ0),t=function t(φ){return Math.tan(π/4+φ/2);},n=φ0===φ1?Math.sin(φ0):Math.log(cosφ0/Math.cos(φ1))/Math.log(t(φ1)/t(φ0)),F=cosφ0*Math.pow(t(φ0),n)/n;if(!n)return d3_geo_mercator;function forward(λ,φ){if(F>0){if(φ<-halfπ+ε)φ=-halfπ+ε;}else {if(φ>halfπ-ε)φ=halfπ-ε;}var ρ=F/Math.pow(t(φ),n);return [ρ*Math.sin(n*λ),F-ρ*Math.cos(n*λ)];}forward.invert=function(x,y){var ρ0_y=F-y,ρ=d3_sgn(n)*Math.sqrt(x*x+ρ0_y*ρ0_y);return [Math.atan2(x,ρ0_y)/n,2*Math.atan(Math.pow(F/ρ,1/n))-halfπ];};return forward;}(d3.geo.conicConformal=function(){return d3_geo_conic(d3_geo_conicConformal);}).raw=d3_geo_conicConformal;function d3_geo_conicEquidistant(φ0,φ1){var cosφ0=Math.cos(φ0),n=φ0===φ1?Math.sin(φ0):(cosφ0-Math.cos(φ1))/(φ1-φ0),G=cosφ0/n+φ0;if(abs(n)<ε)return d3_geo_equirectangular;function forward(λ,φ){var ρ=G-φ;return [ρ*Math.sin(n*λ),G-ρ*Math.cos(n*λ)];}forward.invert=function(x,y){var ρ0_y=G-y;return [Math.atan2(x,ρ0_y)/n,G-d3_sgn(n)*Math.sqrt(x*x+ρ0_y*ρ0_y)];};return forward;}(d3.geo.conicEquidistant=function(){return d3_geo_conic(d3_geo_conicEquidistant);}).raw=d3_geo_conicEquidistant;var d3_geo_gnomonic=d3_geo_azimuthal(function(cosλcosφ){return 1/cosλcosφ;},Math.atan);(d3.geo.gnomonic=function(){return d3_geo_projection(d3_geo_gnomonic);}).raw=d3_geo_gnomonic;function d3_geo_mercator(λ,φ){return [λ,Math.log(Math.tan(π/4+φ/2))];}d3_geo_mercator.invert=function(x,y){return [x,2*Math.atan(Math.exp(y))-halfπ];};function d3_geo_mercatorProjection(project){var m=d3_geo_projection(project),scale=m.scale,translate=m.translate,clipExtent=m.clipExtent,clipAuto;m.scale=function(){var v=scale.apply(m,arguments);return v===m?clipAuto?m.clipExtent(null):m:v;};m.translate=function(){var v=translate.apply(m,arguments);return v===m?clipAuto?m.clipExtent(null):m:v;};m.clipExtent=function(_){var v=clipExtent.apply(m,arguments);if(v===m){if(clipAuto=_==null){var k=π*scale(),t=translate();clipExtent([[t[0]-k,t[1]-k],[t[0]+k,t[1]+k]]);}}else if(clipAuto){v=null;}return v;};return m.clipExtent(null);}(d3.geo.mercator=function(){return d3_geo_mercatorProjection(d3_geo_mercator);}).raw=d3_geo_mercator;var d3_geo_orthographic=d3_geo_azimuthal(function(){return 1;},Math.asin);(d3.geo.orthographic=function(){return d3_geo_projection(d3_geo_orthographic);}).raw=d3_geo_orthographic;var d3_geo_stereographic=d3_geo_azimuthal(function(cosλcosφ){return 1/(1+cosλcosφ);},function(ρ){return 2*Math.atan(ρ);});(d3.geo.stereographic=function(){return d3_geo_projection(d3_geo_stereographic);}).raw=d3_geo_stereographic;function d3_geo_transverseMercator(λ,φ){return [Math.log(Math.tan(π/4+φ/2)),-λ];}d3_geo_transverseMercator.invert=function(x,y){return [-y,2*Math.atan(Math.exp(x))-halfπ];};(d3.geo.transverseMercator=function(){var projection=d3_geo_mercatorProjection(d3_geo_transverseMercator),center=projection.center,rotate=projection.rotate;projection.center=function(_){return _?center([-_[1],_[0]]):(_=center(),[_[1],-_[0]]);};projection.rotate=function(_){return _?rotate([_[0],_[1],_.length>2?_[2]+90:90]):(_=rotate(),[_[0],_[1],_[2]-90]);};return rotate([0,0,90]);}).raw=d3_geo_transverseMercator;d3.geom={};function d3_geom_pointX(d){return d[0];}function d3_geom_pointY(d){return d[1];}d3.geom.hull=function(vertices){var x=d3_geom_pointX,y=d3_geom_pointY;if(arguments.length)return hull(vertices);function hull(data){if(data.length<3)return [];var fx=d3_functor(x),fy=d3_functor(y),i,n=data.length,points=[],flippedPoints=[];for(i=0;i<n;i++){points.push([+fx.call(this,data[i],i),+fy.call(this,data[i],i),i]);}points.sort(d3_geom_hullOrder);for(i=0;i<n;i++){flippedPoints.push([points[i][0],-points[i][1]]);}var upper=d3_geom_hullUpper(points),lower=d3_geom_hullUpper(flippedPoints);var skipLeft=lower[0]===upper[0],skipRight=lower[lower.length-1]===upper[upper.length-1],polygon=[];for(i=upper.length-1;i>=0;--i){polygon.push(data[points[upper[i]][2]]);}for(i=+skipLeft;i<lower.length-skipRight;++i){polygon.push(data[points[lower[i]][2]]);}return polygon;}hull.x=function(_){return arguments.length?(x=_,hull):x;};hull.y=function(_){return arguments.length?(y=_,hull):y;};return hull;};function d3_geom_hullUpper(points){var n=points.length,hull=[0,1],hs=2;for(var i=2;i<n;i++){while(hs>1&&d3_cross2d(points[hull[hs-2]],points[hull[hs-1]],points[i])<=0){--hs;}hull[hs++]=i;}return hull.slice(0,hs);}function d3_geom_hullOrder(a,b){return a[0]-b[0]||a[1]-b[1];}d3.geom.polygon=function(coordinates){d3_subclass(coordinates,d3_geom_polygonPrototype);return coordinates;};var d3_geom_polygonPrototype=d3.geom.polygon.prototype=[];d3_geom_polygonPrototype.area=function(){var i=-1,n=this.length,a,b=this[n-1],area=0;while(++i<n){a=b;b=this[i];area+=a[1]*b[0]-a[0]*b[1];}return area*.5;};d3_geom_polygonPrototype.centroid=function(k){var i=-1,n=this.length,x=0,y=0,a,b=this[n-1],c;if(!arguments.length)k=-1/(6*this.area());while(++i<n){a=b;b=this[i];c=a[0]*b[1]-b[0]*a[1];x+=(a[0]+b[0])*c;y+=(a[1]+b[1])*c;}return [x*k,y*k];};d3_geom_polygonPrototype.clip=function(subject){var input,closed=d3_geom_polygonClosed(subject),i=-1,n=this.length-d3_geom_polygonClosed(this),j,m,a=this[n-1],b,c,d;while(++i<n){input=subject.slice();subject.length=0;b=this[i];c=input[(m=input.length-closed)-1];j=-1;while(++j<m){d=input[j];if(d3_geom_polygonInside(d,a,b)){if(!d3_geom_polygonInside(c,a,b)){subject.push(d3_geom_polygonIntersect(c,d,a,b));}subject.push(d);}else if(d3_geom_polygonInside(c,a,b)){subject.push(d3_geom_polygonIntersect(c,d,a,b));}c=d;}if(closed)subject.push(subject[0]);a=b;}return subject;};function d3_geom_polygonInside(p,a,b){return (b[0]-a[0])*(p[1]-a[1])<(b[1]-a[1])*(p[0]-a[0]);}function d3_geom_polygonIntersect(c,d,a,b){var x1=c[0],x3=a[0],x21=d[0]-x1,x43=b[0]-x3,y1=c[1],y3=a[1],y21=d[1]-y1,y43=b[1]-y3,ua=(x43*(y1-y3)-y43*(x1-x3))/(y43*x21-x43*y21);return [x1+ua*x21,y1+ua*y21];}function d3_geom_polygonClosed(coordinates){var a=coordinates[0],b=coordinates[coordinates.length-1];return !(a[0]-b[0]||a[1]-b[1]);}var d3_geom_voronoiEdges,d3_geom_voronoiCells,d3_geom_voronoiBeaches,d3_geom_voronoiBeachPool=[],d3_geom_voronoiFirstCircle,d3_geom_voronoiCircles,d3_geom_voronoiCirclePool=[];function d3_geom_voronoiBeach(){d3_geom_voronoiRedBlackNode(this);this.edge=this.site=this.circle=null;}function d3_geom_voronoiCreateBeach(site){var beach=d3_geom_voronoiBeachPool.pop()||new d3_geom_voronoiBeach();beach.site=site;return beach;}function d3_geom_voronoiDetachBeach(beach){d3_geom_voronoiDetachCircle(beach);d3_geom_voronoiBeaches.remove(beach);d3_geom_voronoiBeachPool.push(beach);d3_geom_voronoiRedBlackNode(beach);}function d3_geom_voronoiRemoveBeach(beach){var circle=beach.circle,x=circle.x,y=circle.cy,vertex={x:x,y:y},previous=beach.P,next=beach.N,disappearing=[beach];d3_geom_voronoiDetachBeach(beach);var lArc=previous;while(lArc.circle&&abs(x-lArc.circle.x)<ε&&abs(y-lArc.circle.cy)<ε){previous=lArc.P;disappearing.unshift(lArc);d3_geom_voronoiDetachBeach(lArc);lArc=previous;}disappearing.unshift(lArc);d3_geom_voronoiDetachCircle(lArc);var rArc=next;while(rArc.circle&&abs(x-rArc.circle.x)<ε&&abs(y-rArc.circle.cy)<ε){next=rArc.N;disappearing.push(rArc);d3_geom_voronoiDetachBeach(rArc);rArc=next;}disappearing.push(rArc);d3_geom_voronoiDetachCircle(rArc);var nArcs=disappearing.length,iArc;for(iArc=1;iArc<nArcs;++iArc){rArc=disappearing[iArc];lArc=disappearing[iArc-1];d3_geom_voronoiSetEdgeEnd(rArc.edge,lArc.site,rArc.site,vertex);}lArc=disappearing[0];rArc=disappearing[nArcs-1];rArc.edge=d3_geom_voronoiCreateEdge(lArc.site,rArc.site,null,vertex);d3_geom_voronoiAttachCircle(lArc);d3_geom_voronoiAttachCircle(rArc);}function d3_geom_voronoiAddBeach(site){var x=site.x,directrix=site.y,lArc,rArc,dxl,dxr,node=d3_geom_voronoiBeaches._;while(node){dxl=d3_geom_voronoiLeftBreakPoint(node,directrix)-x;if(dxl>ε)node=node.L;else {dxr=x-d3_geom_voronoiRightBreakPoint(node,directrix);if(dxr>ε){if(!node.R){lArc=node;break;}node=node.R;}else {if(dxl>-ε){lArc=node.P;rArc=node;}else if(dxr>-ε){lArc=node;rArc=node.N;}else {lArc=rArc=node;}break;}}}var newArc=d3_geom_voronoiCreateBeach(site);d3_geom_voronoiBeaches.insert(lArc,newArc);if(!lArc&&!rArc)return;if(lArc===rArc){d3_geom_voronoiDetachCircle(lArc);rArc=d3_geom_voronoiCreateBeach(lArc.site);d3_geom_voronoiBeaches.insert(newArc,rArc);newArc.edge=rArc.edge=d3_geom_voronoiCreateEdge(lArc.site,newArc.site);d3_geom_voronoiAttachCircle(lArc);d3_geom_voronoiAttachCircle(rArc);return;}if(!rArc){newArc.edge=d3_geom_voronoiCreateEdge(lArc.site,newArc.site);return;}d3_geom_voronoiDetachCircle(lArc);d3_geom_voronoiDetachCircle(rArc);var lSite=lArc.site,ax=lSite.x,ay=lSite.y,bx=site.x-ax,by=site.y-ay,rSite=rArc.site,cx=rSite.x-ax,cy=rSite.y-ay,d=2*(bx*cy-by*cx),hb=bx*bx+by*by,hc=cx*cx+cy*cy,vertex={x:(cy*hb-by*hc)/d+ax,y:(bx*hc-cx*hb)/d+ay};d3_geom_voronoiSetEdgeEnd(rArc.edge,lSite,rSite,vertex);newArc.edge=d3_geom_voronoiCreateEdge(lSite,site,null,vertex);rArc.edge=d3_geom_voronoiCreateEdge(site,rSite,null,vertex);d3_geom_voronoiAttachCircle(lArc);d3_geom_voronoiAttachCircle(rArc);}function d3_geom_voronoiLeftBreakPoint(arc,directrix){var site=arc.site,rfocx=site.x,rfocy=site.y,pby2=rfocy-directrix;if(!pby2)return rfocx;var lArc=arc.P;if(!lArc)return -Infinity;site=lArc.site;var lfocx=site.x,lfocy=site.y,plby2=lfocy-directrix;if(!plby2)return lfocx;var hl=lfocx-rfocx,aby2=1/pby2-1/plby2,b=hl/plby2;if(aby2)return (-b+Math.sqrt(b*b-2*aby2*(hl*hl/(-2*plby2)-lfocy+plby2/2+rfocy-pby2/2)))/aby2+rfocx;return (rfocx+lfocx)/2;}function d3_geom_voronoiRightBreakPoint(arc,directrix){var rArc=arc.N;if(rArc)return d3_geom_voronoiLeftBreakPoint(rArc,directrix);var site=arc.site;return site.y===directrix?site.x:Infinity;}function d3_geom_voronoiCell(site){this.site=site;this.edges=[];}d3_geom_voronoiCell.prototype.prepare=function(){var halfEdges=this.edges,iHalfEdge=halfEdges.length,edge;while(iHalfEdge--){edge=halfEdges[iHalfEdge].edge;if(!edge.b||!edge.a)halfEdges.splice(iHalfEdge,1);}halfEdges.sort(d3_geom_voronoiHalfEdgeOrder);return halfEdges.length;};function d3_geom_voronoiCloseCells(extent){var x0=extent[0][0],x1=extent[1][0],y0=extent[0][1],y1=extent[1][1],x2,y2,x3,y3,cells=d3_geom_voronoiCells,iCell=cells.length,cell,iHalfEdge,halfEdges,nHalfEdges,start,end;while(iCell--){cell=cells[iCell];if(!cell||!cell.prepare())continue;halfEdges=cell.edges;nHalfEdges=halfEdges.length;iHalfEdge=0;while(iHalfEdge<nHalfEdges){end=halfEdges[iHalfEdge].end(),x3=end.x,y3=end.y;start=halfEdges[++iHalfEdge%nHalfEdges].start(),x2=start.x,y2=start.y;if(abs(x3-x2)>ε||abs(y3-y2)>ε){halfEdges.splice(iHalfEdge,0,new d3_geom_voronoiHalfEdge(d3_geom_voronoiCreateBorderEdge(cell.site,end,abs(x3-x0)<ε&&y1-y3>ε?{x:x0,y:abs(x2-x0)<ε?y2:y1}:abs(y3-y1)<ε&&x1-x3>ε?{x:abs(y2-y1)<ε?x2:x1,y:y1}:abs(x3-x1)<ε&&y3-y0>ε?{x:x1,y:abs(x2-x1)<ε?y2:y0}:abs(y3-y0)<ε&&x3-x0>ε?{x:abs(y2-y0)<ε?x2:x0,y:y0}:null),cell.site,null));++nHalfEdges;}}}}function d3_geom_voronoiHalfEdgeOrder(a,b){return b.angle-a.angle;}function d3_geom_voronoiCircle(){d3_geom_voronoiRedBlackNode(this);this.x=this.y=this.arc=this.site=this.cy=null;}function d3_geom_voronoiAttachCircle(arc){var lArc=arc.P,rArc=arc.N;if(!lArc||!rArc)return;var lSite=lArc.site,cSite=arc.site,rSite=rArc.site;if(lSite===rSite)return;var bx=cSite.x,by=cSite.y,ax=lSite.x-bx,ay=lSite.y-by,cx=rSite.x-bx,cy=rSite.y-by;var d=2*(ax*cy-ay*cx);if(d>=-ε2)return;var ha=ax*ax+ay*ay,hc=cx*cx+cy*cy,x=(cy*ha-ay*hc)/d,y=(ax*hc-cx*ha)/d,cy=y+by;var circle=d3_geom_voronoiCirclePool.pop()||new d3_geom_voronoiCircle();circle.arc=arc;circle.site=cSite;circle.x=x+bx;circle.y=cy+Math.sqrt(x*x+y*y);circle.cy=cy;arc.circle=circle;var before=null,node=d3_geom_voronoiCircles._;while(node){if(circle.y<node.y||circle.y===node.y&&circle.x<=node.x){if(node.L)node=node.L;else {before=node.P;break;}}else {if(node.R)node=node.R;else {before=node;break;}}}d3_geom_voronoiCircles.insert(before,circle);if(!before)d3_geom_voronoiFirstCircle=circle;}function d3_geom_voronoiDetachCircle(arc){var circle=arc.circle;if(circle){if(!circle.P)d3_geom_voronoiFirstCircle=circle.N;d3_geom_voronoiCircles.remove(circle);d3_geom_voronoiCirclePool.push(circle);d3_geom_voronoiRedBlackNode(circle);arc.circle=null;}}function d3_geom_voronoiClipEdges(extent){var edges=d3_geom_voronoiEdges,clip=d3_geom_clipLine(extent[0][0],extent[0][1],extent[1][0],extent[1][1]),i=edges.length,e;while(i--){e=edges[i];if(!d3_geom_voronoiConnectEdge(e,extent)||!clip(e)||abs(e.a.x-e.b.x)<ε&&abs(e.a.y-e.b.y)<ε){e.a=e.b=null;edges.splice(i,1);}}}function d3_geom_voronoiConnectEdge(edge,extent){var vb=edge.b;if(vb)return true;var va=edge.a,x0=extent[0][0],x1=extent[1][0],y0=extent[0][1],y1=extent[1][1],lSite=edge.l,rSite=edge.r,lx=lSite.x,ly=lSite.y,rx=rSite.x,ry=rSite.y,fx=(lx+rx)/2,fy=(ly+ry)/2,fm,fb;if(ry===ly){if(fx<x0||fx>=x1)return;if(lx>rx){if(!va)va={x:fx,y:y0};else if(va.y>=y1)return;vb={x:fx,y:y1};}else {if(!va)va={x:fx,y:y1};else if(va.y<y0)return;vb={x:fx,y:y0};}}else {fm=(lx-rx)/(ry-ly);fb=fy-fm*fx;if(fm<-1||fm>1){if(lx>rx){if(!va)va={x:(y0-fb)/fm,y:y0};else if(va.y>=y1)return;vb={x:(y1-fb)/fm,y:y1};}else {if(!va)va={x:(y1-fb)/fm,y:y1};else if(va.y<y0)return;vb={x:(y0-fb)/fm,y:y0};}}else {if(ly<ry){if(!va)va={x:x0,y:fm*x0+fb};else if(va.x>=x1)return;vb={x:x1,y:fm*x1+fb};}else {if(!va)va={x:x1,y:fm*x1+fb};else if(va.x<x0)return;vb={x:x0,y:fm*x0+fb};}}}edge.a=va;edge.b=vb;return true;}function d3_geom_voronoiEdge(lSite,rSite){this.l=lSite;this.r=rSite;this.a=this.b=null;}function d3_geom_voronoiCreateEdge(lSite,rSite,va,vb){var edge=new d3_geom_voronoiEdge(lSite,rSite);d3_geom_voronoiEdges.push(edge);if(va)d3_geom_voronoiSetEdgeEnd(edge,lSite,rSite,va);if(vb)d3_geom_voronoiSetEdgeEnd(edge,rSite,lSite,vb);d3_geom_voronoiCells[lSite.i].edges.push(new d3_geom_voronoiHalfEdge(edge,lSite,rSite));d3_geom_voronoiCells[rSite.i].edges.push(new d3_geom_voronoiHalfEdge(edge,rSite,lSite));return edge;}function d3_geom_voronoiCreateBorderEdge(lSite,va,vb){var edge=new d3_geom_voronoiEdge(lSite,null);edge.a=va;edge.b=vb;d3_geom_voronoiEdges.push(edge);return edge;}function d3_geom_voronoiSetEdgeEnd(edge,lSite,rSite,vertex){if(!edge.a&&!edge.b){edge.a=vertex;edge.l=lSite;edge.r=rSite;}else if(edge.l===rSite){edge.b=vertex;}else {edge.a=vertex;}}function d3_geom_voronoiHalfEdge(edge,lSite,rSite){var va=edge.a,vb=edge.b;this.edge=edge;this.site=lSite;this.angle=rSite?Math.atan2(rSite.y-lSite.y,rSite.x-lSite.x):edge.l===lSite?Math.atan2(vb.x-va.x,va.y-vb.y):Math.atan2(va.x-vb.x,vb.y-va.y);}d3_geom_voronoiHalfEdge.prototype={start:function start(){return this.edge.l===this.site?this.edge.a:this.edge.b;},end:function end(){return this.edge.l===this.site?this.edge.b:this.edge.a;}};function d3_geom_voronoiRedBlackTree(){this._=null;}function d3_geom_voronoiRedBlackNode(node){node.U=node.C=node.L=node.R=node.P=node.N=null;}d3_geom_voronoiRedBlackTree.prototype={insert:function insert(after,node){var parent,grandpa,uncle;if(after){node.P=after;node.N=after.N;if(after.N)after.N.P=node;after.N=node;if(after.R){after=after.R;while(after.L){after=after.L;}after.L=node;}else {after.R=node;}parent=after;}else if(this._){after=d3_geom_voronoiRedBlackFirst(this._);node.P=null;node.N=after;after.P=after.L=node;parent=after;}else {node.P=node.N=null;this._=node;parent=null;}node.L=node.R=null;node.U=parent;node.C=true;after=node;while(parent&&parent.C){grandpa=parent.U;if(parent===grandpa.L){uncle=grandpa.R;if(uncle&&uncle.C){parent.C=uncle.C=false;grandpa.C=true;after=grandpa;}else {if(after===parent.R){d3_geom_voronoiRedBlackRotateLeft(this,parent);after=parent;parent=after.U;}parent.C=false;grandpa.C=true;d3_geom_voronoiRedBlackRotateRight(this,grandpa);}}else {uncle=grandpa.L;if(uncle&&uncle.C){parent.C=uncle.C=false;grandpa.C=true;after=grandpa;}else {if(after===parent.L){d3_geom_voronoiRedBlackRotateRight(this,parent);after=parent;parent=after.U;}parent.C=false;grandpa.C=true;d3_geom_voronoiRedBlackRotateLeft(this,grandpa);}}parent=after.U;}this._.C=false;},remove:function remove(node){if(node.N)node.N.P=node.P;if(node.P)node.P.N=node.N;node.N=node.P=null;var parent=node.U,sibling,left=node.L,right=node.R,next,red;if(!left)next=right;else if(!right)next=left;else next=d3_geom_voronoiRedBlackFirst(right);if(parent){if(parent.L===node)parent.L=next;else parent.R=next;}else {this._=next;}if(left&&right){red=next.C;next.C=node.C;next.L=left;left.U=next;if(next!==right){parent=next.U;next.U=node.U;node=next.R;parent.L=node;next.R=right;right.U=next;}else {next.U=parent;parent=next;node=next.R;}}else {red=node.C;node=next;}if(node)node.U=parent;if(red)return;if(node&&node.C){node.C=false;return;}do {if(node===this._)break;if(node===parent.L){sibling=parent.R;if(sibling.C){sibling.C=false;parent.C=true;d3_geom_voronoiRedBlackRotateLeft(this,parent);sibling=parent.R;}if(sibling.L&&sibling.L.C||sibling.R&&sibling.R.C){if(!sibling.R||!sibling.R.C){sibling.L.C=false;sibling.C=true;d3_geom_voronoiRedBlackRotateRight(this,sibling);sibling=parent.R;}sibling.C=parent.C;parent.C=sibling.R.C=false;d3_geom_voronoiRedBlackRotateLeft(this,parent);node=this._;break;}}else {sibling=parent.L;if(sibling.C){sibling.C=false;parent.C=true;d3_geom_voronoiRedBlackRotateRight(this,parent);sibling=parent.L;}if(sibling.L&&sibling.L.C||sibling.R&&sibling.R.C){if(!sibling.L||!sibling.L.C){sibling.R.C=false;sibling.C=true;d3_geom_voronoiRedBlackRotateLeft(this,sibling);sibling=parent.L;}sibling.C=parent.C;parent.C=sibling.L.C=false;d3_geom_voronoiRedBlackRotateRight(this,parent);node=this._;break;}}sibling.C=true;node=parent;parent=parent.U;}while(!node.C);if(node)node.C=false;}};function d3_geom_voronoiRedBlackRotateLeft(tree,node){var p=node,q=node.R,parent=p.U;if(parent){if(parent.L===p)parent.L=q;else parent.R=q;}else {tree._=q;}q.U=parent;p.U=q;p.R=q.L;if(p.R)p.R.U=p;q.L=p;}function d3_geom_voronoiRedBlackRotateRight(tree,node){var p=node,q=node.L,parent=p.U;if(parent){if(parent.L===p)parent.L=q;else parent.R=q;}else {tree._=q;}q.U=parent;p.U=q;p.L=q.R;if(p.L)p.L.U=p;q.R=p;}function d3_geom_voronoiRedBlackFirst(node){while(node.L){node=node.L;}return node;}function d3_geom_voronoi(sites,bbox){var site=sites.sort(d3_geom_voronoiVertexOrder).pop(),x0,y0,circle;d3_geom_voronoiEdges=[];d3_geom_voronoiCells=new Array(sites.length);d3_geom_voronoiBeaches=new d3_geom_voronoiRedBlackTree();d3_geom_voronoiCircles=new d3_geom_voronoiRedBlackTree();while(true){circle=d3_geom_voronoiFirstCircle;if(site&&(!circle||site.y<circle.y||site.y===circle.y&&site.x<circle.x)){if(site.x!==x0||site.y!==y0){d3_geom_voronoiCells[site.i]=new d3_geom_voronoiCell(site);d3_geom_voronoiAddBeach(site);x0=site.x,y0=site.y;}site=sites.pop();}else if(circle){d3_geom_voronoiRemoveBeach(circle.arc);}else {break;}}if(bbox)d3_geom_voronoiClipEdges(bbox),d3_geom_voronoiCloseCells(bbox);var diagram={cells:d3_geom_voronoiCells,edges:d3_geom_voronoiEdges};d3_geom_voronoiBeaches=d3_geom_voronoiCircles=d3_geom_voronoiEdges=d3_geom_voronoiCells=null;return diagram;}function d3_geom_voronoiVertexOrder(a,b){return b.y-a.y||b.x-a.x;}d3.geom.voronoi=function(points){var x=d3_geom_pointX,y=d3_geom_pointY,fx=x,fy=y,clipExtent=d3_geom_voronoiClipExtent;if(points)return voronoi(points);function voronoi(data){var polygons=new Array(data.length),x0=clipExtent[0][0],y0=clipExtent[0][1],x1=clipExtent[1][0],y1=clipExtent[1][1];d3_geom_voronoi(sites(data),clipExtent).cells.forEach(function(cell,i){var edges=cell.edges,site=cell.site,polygon=polygons[i]=edges.length?edges.map(function(e){var s=e.start();return [s.x,s.y];}):site.x>=x0&&site.x<=x1&&site.y>=y0&&site.y<=y1?[[x0,y1],[x1,y1],[x1,y0],[x0,y0]]:[];polygon.point=data[i];});return polygons;}function sites(data){return data.map(function(d,i){return {x:Math.round(fx(d,i)/ε)*ε,y:Math.round(fy(d,i)/ε)*ε,i:i};});}voronoi.links=function(data){return d3_geom_voronoi(sites(data)).edges.filter(function(edge){return edge.l&&edge.r;}).map(function(edge){return {source:data[edge.l.i],target:data[edge.r.i]};});};voronoi.triangles=function(data){var triangles=[];d3_geom_voronoi(sites(data)).cells.forEach(function(cell,i){var site=cell.site,edges=cell.edges.sort(d3_geom_voronoiHalfEdgeOrder),j=-1,m=edges.length,e0,s0,e1=edges[m-1].edge,s1=e1.l===site?e1.r:e1.l;while(++j<m){e0=e1;s0=s1;e1=edges[j].edge;s1=e1.l===site?e1.r:e1.l;if(i<s0.i&&i<s1.i&&d3_geom_voronoiTriangleArea(site,s0,s1)<0){triangles.push([data[i],data[s0.i],data[s1.i]]);}}});return triangles;};voronoi.x=function(_){return arguments.length?(fx=d3_functor(x=_),voronoi):x;};voronoi.y=function(_){return arguments.length?(fy=d3_functor(y=_),voronoi):y;};voronoi.clipExtent=function(_){if(!arguments.length)return clipExtent===d3_geom_voronoiClipExtent?null:clipExtent;clipExtent=_==null?d3_geom_voronoiClipExtent:_;return voronoi;};voronoi.size=function(_){if(!arguments.length)return clipExtent===d3_geom_voronoiClipExtent?null:clipExtent&&clipExtent[1];return voronoi.clipExtent(_&&[[0,0],_]);};return voronoi;};var d3_geom_voronoiClipExtent=[[-1e6,-1e6],[1e6,1e6]];function d3_geom_voronoiTriangleArea(a,b,c){return (a.x-c.x)*(b.y-a.y)-(a.x-b.x)*(c.y-a.y);}d3.geom.delaunay=function(vertices){return d3.geom.voronoi().triangles(vertices);};d3.geom.quadtree=function(points,x1,y1,x2,y2){var x=d3_geom_pointX,y=d3_geom_pointY,compat;if(compat=arguments.length){x=d3_geom_quadtreeCompatX;y=d3_geom_quadtreeCompatY;if(compat===3){y2=y1;x2=x1;y1=x1=0;}return quadtree(points);}function quadtree(data){var d,fx=d3_functor(x),fy=d3_functor(y),xs,ys,i,n,x1_,y1_,x2_,y2_;if(x1!=null){x1_=x1,y1_=y1,x2_=x2,y2_=y2;}else {x2_=y2_=-(x1_=y1_=Infinity);xs=[],ys=[];n=data.length;if(compat)for(i=0;i<n;++i){d=data[i];if(d.x<x1_)x1_=d.x;if(d.y<y1_)y1_=d.y;if(d.x>x2_)x2_=d.x;if(d.y>y2_)y2_=d.y;xs.push(d.x);ys.push(d.y);}else for(i=0;i<n;++i){var x_=+fx(d=data[i],i),y_=+fy(d,i);if(x_<x1_)x1_=x_;if(y_<y1_)y1_=y_;if(x_>x2_)x2_=x_;if(y_>y2_)y2_=y_;xs.push(x_);ys.push(y_);}}var dx=x2_-x1_,dy=y2_-y1_;if(dx>dy)y2_=y1_+dx;else x2_=x1_+dy;function insert(n,d,x,y,x1,y1,x2,y2){if(isNaN(x)||isNaN(y))return;if(n.leaf){var nx=n.x,ny=n.y;if(nx!=null){if(abs(nx-x)+abs(ny-y)<.01){insertChild(n,d,x,y,x1,y1,x2,y2);}else {var nPoint=n.point;n.x=n.y=n.point=null;insertChild(n,nPoint,nx,ny,x1,y1,x2,y2);insertChild(n,d,x,y,x1,y1,x2,y2);}}else {n.x=x,n.y=y,n.point=d;}}else {insertChild(n,d,x,y,x1,y1,x2,y2);}}function insertChild(n,d,x,y,x1,y1,x2,y2){var xm=(x1+x2)*.5,ym=(y1+y2)*.5,right=x>=xm,below=y>=ym,i=below<<1|right;n.leaf=false;n=n.nodes[i]||(n.nodes[i]=d3_geom_quadtreeNode());if(right)x1=xm;else x2=xm;if(below)y1=ym;else y2=ym;insert(n,d,x,y,x1,y1,x2,y2);}var root=d3_geom_quadtreeNode();root.add=function(d){insert(root,d,+fx(d,++i),+fy(d,i),x1_,y1_,x2_,y2_);};root.visit=function(f){d3_geom_quadtreeVisit(f,root,x1_,y1_,x2_,y2_);};root.find=function(point){return d3_geom_quadtreeFind(root,point[0],point[1],x1_,y1_,x2_,y2_);};i=-1;if(x1==null){while(++i<n){insert(root,data[i],xs[i],ys[i],x1_,y1_,x2_,y2_);}--i;}else data.forEach(root.add);xs=ys=data=d=null;return root;}quadtree.x=function(_){return arguments.length?(x=_,quadtree):x;};quadtree.y=function(_){return arguments.length?(y=_,quadtree):y;};quadtree.extent=function(_){if(!arguments.length)return x1==null?null:[[x1,y1],[x2,y2]];if(_==null)x1=y1=x2=y2=null;else x1=+_[0][0],y1=+_[0][1],x2=+_[1][0],y2=+_[1][1];return quadtree;};quadtree.size=function(_){if(!arguments.length)return x1==null?null:[x2-x1,y2-y1];if(_==null)x1=y1=x2=y2=null;else x1=y1=0,x2=+_[0],y2=+_[1];return quadtree;};return quadtree;};function d3_geom_quadtreeCompatX(d){return d.x;}function d3_geom_quadtreeCompatY(d){return d.y;}function d3_geom_quadtreeNode(){return {leaf:true,nodes:[],point:null,x:null,y:null};}function d3_geom_quadtreeVisit(f,node,x1,y1,x2,y2){if(!f(node,x1,y1,x2,y2)){var sx=(x1+x2)*.5,sy=(y1+y2)*.5,children=node.nodes;if(children[0])d3_geom_quadtreeVisit(f,children[0],x1,y1,sx,sy);if(children[1])d3_geom_quadtreeVisit(f,children[1],sx,y1,x2,sy);if(children[2])d3_geom_quadtreeVisit(f,children[2],x1,sy,sx,y2);if(children[3])d3_geom_quadtreeVisit(f,children[3],sx,sy,x2,y2);}}function d3_geom_quadtreeFind(root,x,y,x0,y0,x3,y3){var minDistance2=Infinity,closestPoint;(function find(node,x1,y1,x2,y2){if(x1>x3||y1>y3||x2<x0||y2<y0)return;if(point=node.point){var point,dx=x-node.x,dy=y-node.y,distance2=dx*dx+dy*dy;if(distance2<minDistance2){var distance=Math.sqrt(minDistance2=distance2);x0=x-distance,y0=y-distance;x3=x+distance,y3=y+distance;closestPoint=point;}}var children=node.nodes,xm=(x1+x2)*.5,ym=(y1+y2)*.5,right=x>=xm,below=y>=ym;for(var i=below<<1|right,j=i+4;i<j;++i){if(node=children[i&3])switch(i&3){case 0:find(node,x1,y1,xm,ym);break;case 1:find(node,xm,y1,x2,ym);break;case 2:find(node,x1,ym,xm,y2);break;case 3:find(node,xm,ym,x2,y2);break;}}})(root,x0,y0,x3,y3);return closestPoint;}d3.interpolateRgb=d3_interpolateRgb;function d3_interpolateRgb(a,b){a=d3.rgb(a);b=d3.rgb(b);var ar=a.r,ag=a.g,ab=a.b,br=b.r-ar,bg=b.g-ag,bb=b.b-ab;return function(t){return "#"+d3_rgb_hex(Math.round(ar+br*t))+d3_rgb_hex(Math.round(ag+bg*t))+d3_rgb_hex(Math.round(ab+bb*t));};}d3.interpolateObject=d3_interpolateObject;function d3_interpolateObject(a,b){var i={},c={},k;for(k in a){if(k in b){i[k]=d3_interpolate(a[k],b[k]);}else {c[k]=a[k];}}for(k in b){if(!(k in a)){c[k]=b[k];}}return function(t){for(k in i){c[k]=i[k](t);}return c;};}d3.interpolateNumber=d3_interpolateNumber;function d3_interpolateNumber(a,b){a=+a,b=+b;return function(t){return a*(1-t)+b*t;};}d3.interpolateString=d3_interpolateString;function d3_interpolateString(a,b){var bi=d3_interpolate_numberA.lastIndex=d3_interpolate_numberB.lastIndex=0,am,bm,bs,i=-1,s=[],q=[];a=a+"",b=b+"";while((am=d3_interpolate_numberA.exec(a))&&(bm=d3_interpolate_numberB.exec(b))){if((bs=bm.index)>bi){bs=b.slice(bi,bs);if(s[i])s[i]+=bs;else s[++i]=bs;}if((am=am[0])===(bm=bm[0])){if(s[i])s[i]+=bm;else s[++i]=bm;}else {s[++i]=null;q.push({i:i,x:d3_interpolateNumber(am,bm)});}bi=d3_interpolate_numberB.lastIndex;}if(bi<b.length){bs=b.slice(bi);if(s[i])s[i]+=bs;else s[++i]=bs;}return s.length<2?q[0]?(b=q[0].x,function(t){return b(t)+"";}):function(){return b;}:(b=q.length,function(t){for(var i=0,o;i<b;++i){s[(o=q[i]).i]=o.x(t);}return s.join("");});}var d3_interpolate_numberA=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,d3_interpolate_numberB=new RegExp(d3_interpolate_numberA.source,"g");d3.interpolate=d3_interpolate;function d3_interpolate(a,b){var i=d3.interpolators.length,f;while(--i>=0&&!(f=d3.interpolators[i](a,b))){}return f;}d3.interpolators=[function(a,b){var t=typeof b==="undefined"?"undefined":_typeof(b);return (t==="string"?d3_rgb_names.has(b.toLowerCase())||/^(#|rgb\(|hsl\()/i.test(b)?d3_interpolateRgb:d3_interpolateString:b instanceof d3_color?d3_interpolateRgb:Array.isArray(b)?d3_interpolateArray:t==="object"&&isNaN(b)?d3_interpolateObject:d3_interpolateNumber)(a,b);}];d3.interpolateArray=d3_interpolateArray;function d3_interpolateArray(a,b){var x=[],c=[],na=a.length,nb=b.length,n0=Math.min(a.length,b.length),i;for(i=0;i<n0;++i){x.push(d3_interpolate(a[i],b[i]));}for(;i<na;++i){c[i]=a[i];}for(;i<nb;++i){c[i]=b[i];}return function(t){for(i=0;i<n0;++i){c[i]=x[i](t);}return c;};}var d3_ease_default=function d3_ease_default(){return d3_identity;};var d3_ease=d3.map({linear:d3_ease_default,poly:d3_ease_poly,quad:function quad(){return d3_ease_quad;},cubic:function cubic(){return d3_ease_cubic;},sin:function sin(){return d3_ease_sin;},exp:function exp(){return d3_ease_exp;},circle:function circle(){return d3_ease_circle;},elastic:d3_ease_elastic,back:d3_ease_back,bounce:function bounce(){return d3_ease_bounce;}});var d3_ease_mode=d3.map({"in":d3_identity,out:d3_ease_reverse,"in-out":d3_ease_reflect,"out-in":function outIn(f){return d3_ease_reflect(d3_ease_reverse(f));}});d3.ease=function(name){var i=name.indexOf("-"),t=i>=0?name.slice(0,i):name,m=i>=0?name.slice(i+1):"in";t=d3_ease.get(t)||d3_ease_default;m=d3_ease_mode.get(m)||d3_identity;return d3_ease_clamp(m(t.apply(null,d3_arraySlice.call(arguments,1))));};function d3_ease_clamp(f){return function(t){return t<=0?0:t>=1?1:f(t);};}function d3_ease_reverse(f){return function(t){return 1-f(1-t);};}function d3_ease_reflect(f){return function(t){return .5*(t<.5?f(2*t):2-f(2-2*t));};}function d3_ease_quad(t){return t*t;}function d3_ease_cubic(t){return t*t*t;}function d3_ease_cubicInOut(t){if(t<=0)return 0;if(t>=1)return 1;var t2=t*t,t3=t2*t;return 4*(t<.5?t3:3*(t-t2)+t3-.75);}function d3_ease_poly(e){return function(t){return Math.pow(t,e);};}function d3_ease_sin(t){return 1-Math.cos(t*halfπ);}function d3_ease_exp(t){return Math.pow(2,10*(t-1));}function d3_ease_circle(t){return 1-Math.sqrt(1-t*t);}function d3_ease_elastic(a,p){var s;if(arguments.length<2)p=.45;if(arguments.length)s=p/τ*Math.asin(1/a);else a=1,s=p/4;return function(t){return 1+a*Math.pow(2,-10*t)*Math.sin((t-s)*τ/p);};}function d3_ease_back(s){if(!s)s=1.70158;return function(t){return t*t*((s+1)*t-s);};}function d3_ease_bounce(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375;}d3.interpolateHcl=d3_interpolateHcl;function d3_interpolateHcl(a,b){a=d3.hcl(a);b=d3.hcl(b);var ah=a.h,ac=a.c,al=a.l,bh=b.h-ah,bc=b.c-ac,bl=b.l-al;if(isNaN(bc))bc=0,ac=isNaN(ac)?b.c:ac;if(isNaN(bh))bh=0,ah=isNaN(ah)?b.h:ah;else if(bh>180)bh-=360;else if(bh<-180)bh+=360;return function(t){return d3_hcl_lab(ah+bh*t,ac+bc*t,al+bl*t)+"";};}d3.interpolateHsl=d3_interpolateHsl;function d3_interpolateHsl(a,b){a=d3.hsl(a);b=d3.hsl(b);var ah=a.h,as=a.s,al=a.l,bh=b.h-ah,bs=b.s-as,bl=b.l-al;if(isNaN(bs))bs=0,as=isNaN(as)?b.s:as;if(isNaN(bh))bh=0,ah=isNaN(ah)?b.h:ah;else if(bh>180)bh-=360;else if(bh<-180)bh+=360;return function(t){return d3_hsl_rgb(ah+bh*t,as+bs*t,al+bl*t)+"";};}d3.interpolateLab=d3_interpolateLab;function d3_interpolateLab(a,b){a=d3.lab(a);b=d3.lab(b);var al=a.l,aa=a.a,ab=a.b,bl=b.l-al,ba=b.a-aa,bb=b.b-ab;return function(t){return d3_lab_rgb(al+bl*t,aa+ba*t,ab+bb*t)+"";};}d3.interpolateRound=d3_interpolateRound;function d3_interpolateRound(a,b){b-=a;return function(t){return Math.round(a+b*t);};}d3.transform=function(string){var g=d3_document.createElementNS(d3.ns.prefix.svg,"g");return (d3.transform=function(string){if(string!=null){g.setAttribute("transform",string);var t=g.transform.baseVal.consolidate();}return new d3_transform(t?t.matrix:d3_transformIdentity);})(string);};function d3_transform(m){var r0=[m.a,m.b],r1=[m.c,m.d],kx=d3_transformNormalize(r0),kz=d3_transformDot(r0,r1),ky=d3_transformNormalize(d3_transformCombine(r1,r0,-kz))||0;if(r0[0]*r1[1]<r1[0]*r0[1]){r0[0]*=-1;r0[1]*=-1;kx*=-1;kz*=-1;}this.rotate=(kx?Math.atan2(r0[1],r0[0]):Math.atan2(-r1[0],r1[1]))*d3_degrees;this.translate=[m.e,m.f];this.scale=[kx,ky];this.skew=ky?Math.atan2(kz,ky)*d3_degrees:0;}d3_transform.prototype.toString=function(){return "translate("+this.translate+")rotate("+this.rotate+")skewX("+this.skew+")scale("+this.scale+")";};function d3_transformDot(a,b){return a[0]*b[0]+a[1]*b[1];}function d3_transformNormalize(a){var k=Math.sqrt(d3_transformDot(a,a));if(k){a[0]/=k;a[1]/=k;}return k;}function d3_transformCombine(a,b,k){a[0]+=k*b[0];a[1]+=k*b[1];return a;}var d3_transformIdentity={a:1,b:0,c:0,d:1,e:0,f:0};d3.interpolateTransform=d3_interpolateTransform;function d3_interpolateTransformPop(s){return s.length?s.pop()+",":"";}function d3_interpolateTranslate(ta,tb,s,q){if(ta[0]!==tb[0]||ta[1]!==tb[1]){var i=s.push("translate(",null,",",null,")");q.push({i:i-4,x:d3_interpolateNumber(ta[0],tb[0])},{i:i-2,x:d3_interpolateNumber(ta[1],tb[1])});}else if(tb[0]||tb[1]){s.push("translate("+tb+")");}}function d3_interpolateRotate(ra,rb,s,q){if(ra!==rb){if(ra-rb>180)rb+=360;else if(rb-ra>180)ra+=360;q.push({i:s.push(d3_interpolateTransformPop(s)+"rotate(",null,")")-2,x:d3_interpolateNumber(ra,rb)});}else if(rb){s.push(d3_interpolateTransformPop(s)+"rotate("+rb+")");}}function d3_interpolateSkew(wa,wb,s,q){if(wa!==wb){q.push({i:s.push(d3_interpolateTransformPop(s)+"skewX(",null,")")-2,x:d3_interpolateNumber(wa,wb)});}else if(wb){s.push(d3_interpolateTransformPop(s)+"skewX("+wb+")");}}function d3_interpolateScale(ka,kb,s,q){if(ka[0]!==kb[0]||ka[1]!==kb[1]){var i=s.push(d3_interpolateTransformPop(s)+"scale(",null,",",null,")");q.push({i:i-4,x:d3_interpolateNumber(ka[0],kb[0])},{i:i-2,x:d3_interpolateNumber(ka[1],kb[1])});}else if(kb[0]!==1||kb[1]!==1){s.push(d3_interpolateTransformPop(s)+"scale("+kb+")");}}function d3_interpolateTransform(a,b){var s=[],q=[];a=d3.transform(a),b=d3.transform(b);d3_interpolateTranslate(a.translate,b.translate,s,q);d3_interpolateRotate(a.rotate,b.rotate,s,q);d3_interpolateSkew(a.skew,b.skew,s,q);d3_interpolateScale(a.scale,b.scale,s,q);a=b=null;return function(t){var i=-1,n=q.length,o;while(++i<n){s[(o=q[i]).i]=o.x(t);}return s.join("");};}function d3_uninterpolateNumber(a,b){b=(b-=a=+a)||1/b;return function(x){return (x-a)/b;};}function d3_uninterpolateClamp(a,b){b=(b-=a=+a)||1/b;return function(x){return Math.max(0,Math.min(1,(x-a)/b));};}d3.layout={};d3.layout.bundle=function(){return function(links){var paths=[],i=-1,n=links.length;while(++i<n){paths.push(d3_layout_bundlePath(links[i]));}return paths;};};function d3_layout_bundlePath(link){var start=link.source,end=link.target,lca=d3_layout_bundleLeastCommonAncestor(start,end),points=[start];while(start!==lca){start=start.parent;points.push(start);}var k=points.length;while(end!==lca){points.splice(k,0,end);end=end.parent;}return points;}function d3_layout_bundleAncestors(node){var ancestors=[],parent=node.parent;while(parent!=null){ancestors.push(node);node=parent;parent=parent.parent;}ancestors.push(node);return ancestors;}function d3_layout_bundleLeastCommonAncestor(a,b){if(a===b)return a;var aNodes=d3_layout_bundleAncestors(a),bNodes=d3_layout_bundleAncestors(b),aNode=aNodes.pop(),bNode=bNodes.pop(),sharedNode=null;while(aNode===bNode){sharedNode=aNode;aNode=aNodes.pop();bNode=bNodes.pop();}return sharedNode;}d3.layout.chord=function(){var chord={},chords,groups,matrix,n,padding=0,sortGroups,sortSubgroups,sortChords;function relayout(){var subgroups={},groupSums=[],groupIndex=d3.range(n),subgroupIndex=[],k,x,x0,i,j;chords=[];groups=[];k=0,i=-1;while(++i<n){x=0,j=-1;while(++j<n){x+=matrix[i][j];}groupSums.push(x);subgroupIndex.push(d3.range(n));k+=x;}if(sortGroups){groupIndex.sort(function(a,b){return sortGroups(groupSums[a],groupSums[b]);});}if(sortSubgroups){subgroupIndex.forEach(function(d,i){d.sort(function(a,b){return sortSubgroups(matrix[i][a],matrix[i][b]);});});}k=(τ-padding*n)/k;x=0,i=-1;while(++i<n){x0=x,j=-1;while(++j<n){var di=groupIndex[i],dj=subgroupIndex[di][j],v=matrix[di][dj],a0=x,a1=x+=v*k;subgroups[di+"-"+dj]={index:di,subindex:dj,startAngle:a0,endAngle:a1,value:v};}groups[di]={index:di,startAngle:x0,endAngle:x,value:groupSums[di]};x+=padding;}i=-1;while(++i<n){j=i-1;while(++j<n){var source=subgroups[i+"-"+j],target=subgroups[j+"-"+i];if(source.value||target.value){chords.push(source.value<target.value?{source:target,target:source}:{source:source,target:target});}}}if(sortChords)resort();}function resort(){chords.sort(function(a,b){return sortChords((a.source.value+a.target.value)/2,(b.source.value+b.target.value)/2);});}chord.matrix=function(x){if(!arguments.length)return matrix;n=(matrix=x)&&matrix.length;chords=groups=null;return chord;};chord.padding=function(x){if(!arguments.length)return padding;padding=x;chords=groups=null;return chord;};chord.sortGroups=function(x){if(!arguments.length)return sortGroups;sortGroups=x;chords=groups=null;return chord;};chord.sortSubgroups=function(x){if(!arguments.length)return sortSubgroups;sortSubgroups=x;chords=null;return chord;};chord.sortChords=function(x){if(!arguments.length)return sortChords;sortChords=x;if(chords)resort();return chord;};chord.chords=function(){if(!chords)relayout();return chords;};chord.groups=function(){if(!groups)relayout();return groups;};return chord;};d3.layout.force=function(){var force={},event=d3.dispatch("start","tick","end"),timer,size=[1,1],drag,alpha,friction=.9,linkDistance=d3_layout_forceLinkDistance,linkStrength=d3_layout_forceLinkStrength,charge=-30,chargeDistance2=d3_layout_forceChargeDistance2,gravity=.1,theta2=.64,nodes=[],links=[],distances,strengths,charges;function repulse(node){return function(quad,x1,_,x2){if(quad.point!==node){var dx=quad.cx-node.x,dy=quad.cy-node.y,dw=x2-x1,dn=dx*dx+dy*dy;if(dw*dw/theta2<dn){if(dn<chargeDistance2){var k=quad.charge/dn;node.px-=dx*k;node.py-=dy*k;}return true;}if(quad.point&&dn&&dn<chargeDistance2){var k=quad.pointCharge/dn;node.px-=dx*k;node.py-=dy*k;}}return !quad.charge;};}force.tick=function(){if((alpha*=.99)<.005){timer=null;event.end({type:"end",alpha:alpha=0});return true;}var n=nodes.length,m=links.length,q,i,o,s,t,l,k,x,y;for(i=0;i<m;++i){o=links[i];s=o.source;t=o.target;x=t.x-s.x;y=t.y-s.y;if(l=x*x+y*y){l=alpha*strengths[i]*((l=Math.sqrt(l))-distances[i])/l;x*=l;y*=l;t.x-=x*(k=s.weight+t.weight?s.weight/(s.weight+t.weight):.5);t.y-=y*k;s.x+=x*(k=1-k);s.y+=y*k;}}if(k=alpha*gravity){x=size[0]/2;y=size[1]/2;i=-1;if(k)while(++i<n){o=nodes[i];o.x+=(x-o.x)*k;o.y+=(y-o.y)*k;}}if(charge){d3_layout_forceAccumulate(q=d3.geom.quadtree(nodes),alpha,charges);i=-1;while(++i<n){if(!(o=nodes[i]).fixed){q.visit(repulse(o));}}}i=-1;while(++i<n){o=nodes[i];if(o.fixed){o.x=o.px;o.y=o.py;}else {o.x-=(o.px-(o.px=o.x))*friction;o.y-=(o.py-(o.py=o.y))*friction;}}event.tick({type:"tick",alpha:alpha});};force.nodes=function(x){if(!arguments.length)return nodes;nodes=x;return force;};force.links=function(x){if(!arguments.length)return links;links=x;return force;};force.size=function(x){if(!arguments.length)return size;size=x;return force;};force.linkDistance=function(x){if(!arguments.length)return linkDistance;linkDistance=typeof x==="function"?x:+x;return force;};force.distance=force.linkDistance;force.linkStrength=function(x){if(!arguments.length)return linkStrength;linkStrength=typeof x==="function"?x:+x;return force;};force.friction=function(x){if(!arguments.length)return friction;friction=+x;return force;};force.charge=function(x){if(!arguments.length)return charge;charge=typeof x==="function"?x:+x;return force;};force.chargeDistance=function(x){if(!arguments.length)return Math.sqrt(chargeDistance2);chargeDistance2=x*x;return force;};force.gravity=function(x){if(!arguments.length)return gravity;gravity=+x;return force;};force.theta=function(x){if(!arguments.length)return Math.sqrt(theta2);theta2=x*x;return force;};force.alpha=function(x){if(!arguments.length)return alpha;x=+x;if(alpha){if(x>0){alpha=x;}else {timer.c=null,timer.t=NaN,timer=null;event.end({type:"end",alpha:alpha=0});}}else if(x>0){event.start({type:"start",alpha:alpha=x});timer=d3_timer(force.tick);}return force;};force.start=function(){var i,n=nodes.length,m=links.length,w=size[0],h=size[1],neighbors,o;for(i=0;i<n;++i){(o=nodes[i]).index=i;o.weight=0;}for(i=0;i<m;++i){o=links[i];if(typeof o.source=="number")o.source=nodes[o.source];if(typeof o.target=="number")o.target=nodes[o.target];++o.source.weight;++o.target.weight;}for(i=0;i<n;++i){o=nodes[i];if(isNaN(o.x))o.x=position("x",w);if(isNaN(o.y))o.y=position("y",h);if(isNaN(o.px))o.px=o.x;if(isNaN(o.py))o.py=o.y;}distances=[];if(typeof linkDistance==="function")for(i=0;i<m;++i){distances[i]=+linkDistance.call(this,links[i],i);}else for(i=0;i<m;++i){distances[i]=linkDistance;}strengths=[];if(typeof linkStrength==="function")for(i=0;i<m;++i){strengths[i]=+linkStrength.call(this,links[i],i);}else for(i=0;i<m;++i){strengths[i]=linkStrength;}charges=[];if(typeof charge==="function")for(i=0;i<n;++i){charges[i]=+charge.call(this,nodes[i],i);}else for(i=0;i<n;++i){charges[i]=charge;}function position(dimension,size){if(!neighbors){neighbors=new Array(n);for(j=0;j<n;++j){neighbors[j]=[];}for(j=0;j<m;++j){var o=links[j];neighbors[o.source.index].push(o.target);neighbors[o.target.index].push(o.source);}}var candidates=neighbors[i],j=-1,l=candidates.length,x;while(++j<l){if(!isNaN(x=candidates[j][dimension]))return x;}return Math.random()*size;}return force.resume();};force.resume=function(){return force.alpha(.1);};force.stop=function(){return force.alpha(0);};force.drag=function(){if(!drag)drag=d3.behavior.drag().origin(d3_identity).on("dragstart.force",d3_layout_forceDragstart).on("drag.force",dragmove).on("dragend.force",d3_layout_forceDragend);if(!arguments.length)return drag;this.on("mouseover.force",d3_layout_forceMouseover).on("mouseout.force",d3_layout_forceMouseout).call(drag);};function dragmove(d){d.px=d3.event.x,d.py=d3.event.y;force.resume();}return d3.rebind(force,event,"on");};function d3_layout_forceDragstart(d){d.fixed|=2;}function d3_layout_forceDragend(d){d.fixed&=~6;}function d3_layout_forceMouseover(d){d.fixed|=4;d.px=d.x,d.py=d.y;}function d3_layout_forceMouseout(d){d.fixed&=~4;}function d3_layout_forceAccumulate(quad,alpha,charges){var cx=0,cy=0;quad.charge=0;if(!quad.leaf){var nodes=quad.nodes,n=nodes.length,i=-1,c;while(++i<n){c=nodes[i];if(c==null)continue;d3_layout_forceAccumulate(c,alpha,charges);quad.charge+=c.charge;cx+=c.charge*c.cx;cy+=c.charge*c.cy;}}if(quad.point){if(!quad.leaf){quad.point.x+=Math.random()-.5;quad.point.y+=Math.random()-.5;}var k=alpha*charges[quad.point.index];quad.charge+=quad.pointCharge=k;cx+=k*quad.point.x;cy+=k*quad.point.y;}quad.cx=cx/quad.charge;quad.cy=cy/quad.charge;}var d3_layout_forceLinkDistance=20,d3_layout_forceLinkStrength=1,d3_layout_forceChargeDistance2=Infinity;d3.layout.hierarchy=function(){var sort=d3_layout_hierarchySort,children=d3_layout_hierarchyChildren,value=d3_layout_hierarchyValue;function hierarchy(root){var stack=[root],nodes=[],node;root.depth=0;while((node=stack.pop())!=null){nodes.push(node);if((childs=children.call(hierarchy,node,node.depth))&&(n=childs.length)){var n,childs,child;while(--n>=0){stack.push(child=childs[n]);child.parent=node;child.depth=node.depth+1;}if(value)node.value=0;node.children=childs;}else {if(value)node.value=+value.call(hierarchy,node,node.depth)||0;delete node.children;}}d3_layout_hierarchyVisitAfter(root,function(node){var childs,parent;if(sort&&(childs=node.children))childs.sort(sort);if(value&&(parent=node.parent))parent.value+=node.value;});return nodes;}hierarchy.sort=function(x){if(!arguments.length)return sort;sort=x;return hierarchy;};hierarchy.children=function(x){if(!arguments.length)return children;children=x;return hierarchy;};hierarchy.value=function(x){if(!arguments.length)return value;value=x;return hierarchy;};hierarchy.revalue=function(root){if(value){d3_layout_hierarchyVisitBefore(root,function(node){if(node.children)node.value=0;});d3_layout_hierarchyVisitAfter(root,function(node){var parent;if(!node.children)node.value=+value.call(hierarchy,node,node.depth)||0;if(parent=node.parent)parent.value+=node.value;});}return root;};return hierarchy;};function d3_layout_hierarchyRebind(object,hierarchy){d3.rebind(object,hierarchy,"sort","children","value");object.nodes=object;object.links=d3_layout_hierarchyLinks;return object;}function d3_layout_hierarchyVisitBefore(node,callback){var nodes=[node];while((node=nodes.pop())!=null){callback(node);if((children=node.children)&&(n=children.length)){var n,children;while(--n>=0){nodes.push(children[n]);}}}}function d3_layout_hierarchyVisitAfter(node,callback){var nodes=[node],nodes2=[];while((node=nodes.pop())!=null){nodes2.push(node);if((children=node.children)&&(n=children.length)){var i=-1,n,children;while(++i<n){nodes.push(children[i]);}}}while((node=nodes2.pop())!=null){callback(node);}}function d3_layout_hierarchyChildren(d){return d.children;}function d3_layout_hierarchyValue(d){return d.value;}function d3_layout_hierarchySort(a,b){return b.value-a.value;}function d3_layout_hierarchyLinks(nodes){return d3.merge(nodes.map(function(parent){return (parent.children||[]).map(function(child){return {source:parent,target:child};});}));}d3.layout.partition=function(){var hierarchy=d3.layout.hierarchy(),size=[1,1];function position(node,x,dx,dy){var children=node.children;node.x=x;node.y=node.depth*dy;node.dx=dx;node.dy=dy;if(children&&(n=children.length)){var i=-1,n,c,d;dx=node.value?dx/node.value:0;while(++i<n){position(c=children[i],x,d=c.value*dx,dy);x+=d;}}}function depth(node){var children=node.children,d=0;if(children&&(n=children.length)){var i=-1,n;while(++i<n){d=Math.max(d,depth(children[i]));}}return 1+d;}function partition(d,i){var nodes=hierarchy.call(this,d,i);position(nodes[0],0,size[0],size[1]/depth(nodes[0]));return nodes;}partition.size=function(x){if(!arguments.length)return size;size=x;return partition;};return d3_layout_hierarchyRebind(partition,hierarchy);};d3.layout.pie=function(){var value=Number,sort=d3_layout_pieSortByValue,startAngle=0,endAngle=τ,padAngle=0;function pie(data){var n=data.length,values=data.map(function(d,i){return +value.call(pie,d,i);}),a=+(typeof startAngle==="function"?startAngle.apply(this,arguments):startAngle),da=(typeof endAngle==="function"?endAngle.apply(this,arguments):endAngle)-a,p=Math.min(Math.abs(da)/n,+(typeof padAngle==="function"?padAngle.apply(this,arguments):padAngle)),pa=p*(da<0?-1:1),sum=d3.sum(values),k=sum?(da-n*pa)/sum:0,index=d3.range(n),arcs=[],v;if(sort!=null)index.sort(sort===d3_layout_pieSortByValue?function(i,j){return values[j]-values[i];}:function(i,j){return sort(data[i],data[j]);});index.forEach(function(i){arcs[i]={data:data[i],value:v=values[i],startAngle:a,endAngle:a+=v*k+pa,padAngle:p};});return arcs;}pie.value=function(_){if(!arguments.length)return value;value=_;return pie;};pie.sort=function(_){if(!arguments.length)return sort;sort=_;return pie;};pie.startAngle=function(_){if(!arguments.length)return startAngle;startAngle=_;return pie;};pie.endAngle=function(_){if(!arguments.length)return endAngle;endAngle=_;return pie;};pie.padAngle=function(_){if(!arguments.length)return padAngle;padAngle=_;return pie;};return pie;};var d3_layout_pieSortByValue={};d3.layout.stack=function(){var values=d3_identity,order=d3_layout_stackOrderDefault,offset=d3_layout_stackOffsetZero,out=d3_layout_stackOut,x=d3_layout_stackX,y=d3_layout_stackY;function stack(data,index){if(!(n=data.length))return data;var series=data.map(function(d,i){return values.call(stack,d,i);});var points=series.map(function(d){return d.map(function(v,i){return [x.call(stack,v,i),y.call(stack,v,i)];});});var orders=order.call(stack,points,index);series=d3.permute(series,orders);points=d3.permute(points,orders);var offsets=offset.call(stack,points,index);var m=series[0].length,n,i,j,o;for(j=0;j<m;++j){out.call(stack,series[0][j],o=offsets[j],points[0][j][1]);for(i=1;i<n;++i){out.call(stack,series[i][j],o+=points[i-1][j][1],points[i][j][1]);}}return data;}stack.values=function(x){if(!arguments.length)return values;values=x;return stack;};stack.order=function(x){if(!arguments.length)return order;order=typeof x==="function"?x:d3_layout_stackOrders.get(x)||d3_layout_stackOrderDefault;return stack;};stack.offset=function(x){if(!arguments.length)return offset;offset=typeof x==="function"?x:d3_layout_stackOffsets.get(x)||d3_layout_stackOffsetZero;return stack;};stack.x=function(z){if(!arguments.length)return x;x=z;return stack;};stack.y=function(z){if(!arguments.length)return y;y=z;return stack;};stack.out=function(z){if(!arguments.length)return out;out=z;return stack;};return stack;};function d3_layout_stackX(d){return d.x;}function d3_layout_stackY(d){return d.y;}function d3_layout_stackOut(d,y0,y){d.y0=y0;d.y=y;}var d3_layout_stackOrders=d3.map({"inside-out":function insideOut(data){var n=data.length,i,j,max=data.map(d3_layout_stackMaxIndex),sums=data.map(d3_layout_stackReduceSum),index=d3.range(n).sort(function(a,b){return max[a]-max[b];}),top=0,bottom=0,tops=[],bottoms=[];for(i=0;i<n;++i){j=index[i];if(top<bottom){top+=sums[j];tops.push(j);}else {bottom+=sums[j];bottoms.push(j);}}return bottoms.reverse().concat(tops);},reverse:function reverse(data){return d3.range(data.length).reverse();},"default":d3_layout_stackOrderDefault});var d3_layout_stackOffsets=d3.map({silhouette:function silhouette(data){var n=data.length,m=data[0].length,sums=[],max=0,i,j,o,y0=[];for(j=0;j<m;++j){for(i=0,o=0;i<n;i++){o+=data[i][j][1];}if(o>max)max=o;sums.push(o);}for(j=0;j<m;++j){y0[j]=(max-sums[j])/2;}return y0;},wiggle:function wiggle(data){var n=data.length,x=data[0],m=x.length,i,j,k,s1,s2,s3,dx,o,o0,y0=[];y0[0]=o=o0=0;for(j=1;j<m;++j){for(i=0,s1=0;i<n;++i){s1+=data[i][j][1];}for(i=0,s2=0,dx=x[j][0]-x[j-1][0];i<n;++i){for(k=0,s3=(data[i][j][1]-data[i][j-1][1])/(2*dx);k<i;++k){s3+=(data[k][j][1]-data[k][j-1][1])/dx;}s2+=s3*data[i][j][1];}y0[j]=o-=s1?s2/s1*dx:0;if(o<o0)o0=o;}for(j=0;j<m;++j){y0[j]-=o0;}return y0;},expand:function expand(data){var n=data.length,m=data[0].length,k=1/n,i,j,o,y0=[];for(j=0;j<m;++j){for(i=0,o=0;i<n;i++){o+=data[i][j][1];}if(o)for(i=0;i<n;i++){data[i][j][1]/=o;}else for(i=0;i<n;i++){data[i][j][1]=k;}}for(j=0;j<m;++j){y0[j]=0;}return y0;},zero:d3_layout_stackOffsetZero});function d3_layout_stackOrderDefault(data){return d3.range(data.length);}function d3_layout_stackOffsetZero(data){var j=-1,m=data[0].length,y0=[];while(++j<m){y0[j]=0;}return y0;}function d3_layout_stackMaxIndex(array){var i=1,j=0,v=array[0][1],k,n=array.length;for(;i<n;++i){if((k=array[i][1])>v){j=i;v=k;}}return j;}function d3_layout_stackReduceSum(d){return d.reduce(d3_layout_stackSum,0);}function d3_layout_stackSum(p,d){return p+d[1];}d3.layout.histogram=function(){var frequency=true,valuer=Number,ranger=d3_layout_histogramRange,binner=d3_layout_histogramBinSturges;function histogram(data,i){var bins=[],values=data.map(valuer,this),range=ranger.call(this,values,i),thresholds=binner.call(this,range,values,i),bin,i=-1,n=values.length,m=thresholds.length-1,k=frequency?1:1/n,x;while(++i<m){bin=bins[i]=[];bin.dx=thresholds[i+1]-(bin.x=thresholds[i]);bin.y=0;}if(m>0){i=-1;while(++i<n){x=values[i];if(x>=range[0]&&x<=range[1]){bin=bins[d3.bisect(thresholds,x,1,m)-1];bin.y+=k;bin.push(data[i]);}}}return bins;}histogram.value=function(x){if(!arguments.length)return valuer;valuer=x;return histogram;};histogram.range=function(x){if(!arguments.length)return ranger;ranger=d3_functor(x);return histogram;};histogram.bins=function(x){if(!arguments.length)return binner;binner=typeof x==="number"?function(range){return d3_layout_histogramBinFixed(range,x);}:d3_functor(x);return histogram;};histogram.frequency=function(x){if(!arguments.length)return frequency;frequency=!!x;return histogram;};return histogram;};function d3_layout_histogramBinSturges(range,values){return d3_layout_histogramBinFixed(range,Math.ceil(Math.log(values.length)/Math.LN2+1));}function d3_layout_histogramBinFixed(range,n){var x=-1,b=+range[0],m=(range[1]-b)/n,f=[];while(++x<=n){f[x]=m*x+b;}return f;}function d3_layout_histogramRange(values){return [d3.min(values),d3.max(values)];}d3.layout.pack=function(){var hierarchy=d3.layout.hierarchy().sort(d3_layout_packSort),padding=0,size=[1,1],radius;function pack(d,i){var nodes=hierarchy.call(this,d,i),root=nodes[0],w=size[0],h=size[1],r=radius==null?Math.sqrt:typeof radius==="function"?radius:function(){return radius;};root.x=root.y=0;d3_layout_hierarchyVisitAfter(root,function(d){d.r=+r(d.value);});d3_layout_hierarchyVisitAfter(root,d3_layout_packSiblings);if(padding){var dr=padding*(radius?1:Math.max(2*root.r/w,2*root.r/h))/2;d3_layout_hierarchyVisitAfter(root,function(d){d.r+=dr;});d3_layout_hierarchyVisitAfter(root,d3_layout_packSiblings);d3_layout_hierarchyVisitAfter(root,function(d){d.r-=dr;});}d3_layout_packTransform(root,w/2,h/2,radius?1:1/Math.max(2*root.r/w,2*root.r/h));return nodes;}pack.size=function(_){if(!arguments.length)return size;size=_;return pack;};pack.radius=function(_){if(!arguments.length)return radius;radius=_==null||typeof _==="function"?_:+_;return pack;};pack.padding=function(_){if(!arguments.length)return padding;padding=+_;return pack;};return d3_layout_hierarchyRebind(pack,hierarchy);};function d3_layout_packSort(a,b){return a.value-b.value;}function d3_layout_packInsert(a,b){var c=a._pack_next;a._pack_next=b;b._pack_prev=a;b._pack_next=c;c._pack_prev=b;}function d3_layout_packSplice(a,b){a._pack_next=b;b._pack_prev=a;}function d3_layout_packIntersects(a,b){var dx=b.x-a.x,dy=b.y-a.y,dr=a.r+b.r;return .999*dr*dr>dx*dx+dy*dy;}function d3_layout_packSiblings(node){if(!(nodes=node.children)||!(n=nodes.length))return;var nodes,xMin=Infinity,xMax=-Infinity,yMin=Infinity,yMax=-Infinity,a,b,c,i,j,k,n;function bound(node){xMin=Math.min(node.x-node.r,xMin);xMax=Math.max(node.x+node.r,xMax);yMin=Math.min(node.y-node.r,yMin);yMax=Math.max(node.y+node.r,yMax);}nodes.forEach(d3_layout_packLink);a=nodes[0];a.x=-a.r;a.y=0;bound(a);if(n>1){b=nodes[1];b.x=b.r;b.y=0;bound(b);if(n>2){c=nodes[2];d3_layout_packPlace(a,b,c);bound(c);d3_layout_packInsert(a,c);a._pack_prev=c;d3_layout_packInsert(c,b);b=a._pack_next;for(i=3;i<n;i++){d3_layout_packPlace(a,b,c=nodes[i]);var isect=0,s1=1,s2=1;for(j=b._pack_next;j!==b;j=j._pack_next,s1++){if(d3_layout_packIntersects(j,c)){isect=1;break;}}if(isect==1){for(k=a._pack_prev;k!==j._pack_prev;k=k._pack_prev,s2++){if(d3_layout_packIntersects(k,c)){break;}}}if(isect){if(s1<s2||s1==s2&&b.r<a.r)d3_layout_packSplice(a,b=j);else d3_layout_packSplice(a=k,b);i--;}else {d3_layout_packInsert(a,c);b=c;bound(c);}}}}var cx=(xMin+xMax)/2,cy=(yMin+yMax)/2,cr=0;for(i=0;i<n;i++){c=nodes[i];c.x-=cx;c.y-=cy;cr=Math.max(cr,c.r+Math.sqrt(c.x*c.x+c.y*c.y));}node.r=cr;nodes.forEach(d3_layout_packUnlink);}function d3_layout_packLink(node){node._pack_next=node._pack_prev=node;}function d3_layout_packUnlink(node){delete node._pack_next;delete node._pack_prev;}function d3_layout_packTransform(node,x,y,k){var children=node.children;node.x=x+=k*node.x;node.y=y+=k*node.y;node.r*=k;if(children){var i=-1,n=children.length;while(++i<n){d3_layout_packTransform(children[i],x,y,k);}}}function d3_layout_packPlace(a,b,c){var db=a.r+c.r,dx=b.x-a.x,dy=b.y-a.y;if(db&&(dx||dy)){var da=b.r+c.r,dc=dx*dx+dy*dy;da*=da;db*=db;var x=.5+(db-da)/(2*dc),y=Math.sqrt(Math.max(0,2*da*(db+dc)-(db-=dc)*db-da*da))/(2*dc);c.x=a.x+x*dx+y*dy;c.y=a.y+x*dy-y*dx;}else {c.x=a.x+db;c.y=a.y;}}d3.layout.tree=function(){var hierarchy=d3.layout.hierarchy().sort(null).value(null),separation=d3_layout_treeSeparation,size=[1,1],nodeSize=null;function tree(d,i){var nodes=hierarchy.call(this,d,i),root0=nodes[0],root1=wrapTree(root0);d3_layout_hierarchyVisitAfter(root1,firstWalk),root1.parent.m=-root1.z;d3_layout_hierarchyVisitBefore(root1,secondWalk);if(nodeSize)d3_layout_hierarchyVisitBefore(root0,sizeNode);else {var left=root0,right=root0,bottom=root0;d3_layout_hierarchyVisitBefore(root0,function(node){if(node.x<left.x)left=node;if(node.x>right.x)right=node;if(node.depth>bottom.depth)bottom=node;});var tx=separation(left,right)/2-left.x,kx=size[0]/(right.x+separation(right,left)/2+tx),ky=size[1]/(bottom.depth||1);d3_layout_hierarchyVisitBefore(root0,function(node){node.x=(node.x+tx)*kx;node.y=node.depth*ky;});}return nodes;}function wrapTree(root0){var root1={A:null,children:[root0]},queue=[root1],node1;while((node1=queue.pop())!=null){for(var children=node1.children,child,i=0,n=children.length;i<n;++i){queue.push((children[i]=child={_:children[i],parent:node1,children:(child=children[i].children)&&child.slice()||[],A:null,a:null,z:0,m:0,c:0,s:0,t:null,i:i}).a=child);}}return root1.children[0];}function firstWalk(v){var children=v.children,siblings=v.parent.children,w=v.i?siblings[v.i-1]:null;if(children.length){d3_layout_treeShift(v);var midpoint=(children[0].z+children[children.length-1].z)/2;if(w){v.z=w.z+separation(v._,w._);v.m=v.z-midpoint;}else {v.z=midpoint;}}else if(w){v.z=w.z+separation(v._,w._);}v.parent.A=apportion(v,w,v.parent.A||siblings[0]);}function secondWalk(v){v._.x=v.z+v.parent.m;v.m+=v.parent.m;}function apportion(v,w,ancestor){if(w){var vip=v,vop=v,vim=w,vom=vip.parent.children[0],sip=vip.m,sop=vop.m,sim=vim.m,som=vom.m,shift;while(vim=d3_layout_treeRight(vim),vip=d3_layout_treeLeft(vip),vim&&vip){vom=d3_layout_treeLeft(vom);vop=d3_layout_treeRight(vop);vop.a=v;shift=vim.z+sim-vip.z-sip+separation(vim._,vip._);if(shift>0){d3_layout_treeMove(d3_layout_treeAncestor(vim,v,ancestor),v,shift);sip+=shift;sop+=shift;}sim+=vim.m;sip+=vip.m;som+=vom.m;sop+=vop.m;}if(vim&&!d3_layout_treeRight(vop)){vop.t=vim;vop.m+=sim-sop;}if(vip&&!d3_layout_treeLeft(vom)){vom.t=vip;vom.m+=sip-som;ancestor=v;}}return ancestor;}function sizeNode(node){node.x*=size[0];node.y=node.depth*size[1];}tree.separation=function(x){if(!arguments.length)return separation;separation=x;return tree;};tree.size=function(x){if(!arguments.length)return nodeSize?null:size;nodeSize=(size=x)==null?sizeNode:null;return tree;};tree.nodeSize=function(x){if(!arguments.length)return nodeSize?size:null;nodeSize=(size=x)==null?null:sizeNode;return tree;};return d3_layout_hierarchyRebind(tree,hierarchy);};function d3_layout_treeSeparation(a,b){return a.parent==b.parent?1:2;}function d3_layout_treeLeft(v){var children=v.children;return children.length?children[0]:v.t;}function d3_layout_treeRight(v){var children=v.children,n;return (n=children.length)?children[n-1]:v.t;}function d3_layout_treeMove(wm,wp,shift){var change=shift/(wp.i-wm.i);wp.c-=change;wp.s+=shift;wm.c+=change;wp.z+=shift;wp.m+=shift;}function d3_layout_treeShift(v){var shift=0,change=0,children=v.children,i=children.length,w;while(--i>=0){w=children[i];w.z+=shift;w.m+=shift;shift+=w.s+(change+=w.c);}}function d3_layout_treeAncestor(vim,v,ancestor){return vim.a.parent===v.parent?vim.a:ancestor;}d3.layout.cluster=function(){var hierarchy=d3.layout.hierarchy().sort(null).value(null),separation=d3_layout_treeSeparation,size=[1,1],nodeSize=false;function cluster(d,i){var nodes=hierarchy.call(this,d,i),root=nodes[0],previousNode,x=0;d3_layout_hierarchyVisitAfter(root,function(node){var children=node.children;if(children&&children.length){node.x=d3_layout_clusterX(children);node.y=d3_layout_clusterY(children);}else {node.x=previousNode?x+=separation(node,previousNode):0;node.y=0;previousNode=node;}});var left=d3_layout_clusterLeft(root),right=d3_layout_clusterRight(root),x0=left.x-separation(left,right)/2,x1=right.x+separation(right,left)/2;d3_layout_hierarchyVisitAfter(root,nodeSize?function(node){node.x=(node.x-root.x)*size[0];node.y=(root.y-node.y)*size[1];}:function(node){node.x=(node.x-x0)/(x1-x0)*size[0];node.y=(1-(root.y?node.y/root.y:1))*size[1];});return nodes;}cluster.separation=function(x){if(!arguments.length)return separation;separation=x;return cluster;};cluster.size=function(x){if(!arguments.length)return nodeSize?null:size;nodeSize=(size=x)==null;return cluster;};cluster.nodeSize=function(x){if(!arguments.length)return nodeSize?size:null;nodeSize=(size=x)!=null;return cluster;};return d3_layout_hierarchyRebind(cluster,hierarchy);};function d3_layout_clusterY(children){return 1+d3.max(children,function(child){return child.y;});}function d3_layout_clusterX(children){return children.reduce(function(x,child){return x+child.x;},0)/children.length;}function d3_layout_clusterLeft(node){var children=node.children;return children&&children.length?d3_layout_clusterLeft(children[0]):node;}function d3_layout_clusterRight(node){var children=node.children,n;return children&&(n=children.length)?d3_layout_clusterRight(children[n-1]):node;}d3.layout.treemap=function(){var hierarchy=d3.layout.hierarchy(),round=Math.round,size=[1,1],padding=null,pad=d3_layout_treemapPadNull,sticky=false,stickies,mode="squarify",ratio=.5*(1+Math.sqrt(5));function scale(children,k){var i=-1,n=children.length,child,area;while(++i<n){area=(child=children[i]).value*(k<0?0:k);child.area=isNaN(area)||area<=0?0:area;}}function squarify(node){var children=node.children;if(children&&children.length){var rect=pad(node),row=[],remaining=children.slice(),child,best=Infinity,score,u=mode==="slice"?rect.dx:mode==="dice"?rect.dy:mode==="slice-dice"?node.depth&1?rect.dy:rect.dx:Math.min(rect.dx,rect.dy),n;scale(remaining,rect.dx*rect.dy/node.value);row.area=0;while((n=remaining.length)>0){row.push(child=remaining[n-1]);row.area+=child.area;if(mode!=="squarify"||(score=worst(row,u))<=best){remaining.pop();best=score;}else {row.area-=row.pop().area;position(row,u,rect,false);u=Math.min(rect.dx,rect.dy);row.length=row.area=0;best=Infinity;}}if(row.length){position(row,u,rect,true);row.length=row.area=0;}children.forEach(squarify);}}function stickify(node){var children=node.children;if(children&&children.length){var rect=pad(node),remaining=children.slice(),child,row=[];scale(remaining,rect.dx*rect.dy/node.value);row.area=0;while(child=remaining.pop()){row.push(child);row.area+=child.area;if(child.z!=null){position(row,child.z?rect.dx:rect.dy,rect,!remaining.length);row.length=row.area=0;}}children.forEach(stickify);}}function worst(row,u){var s=row.area,r,rmax=0,rmin=Infinity,i=-1,n=row.length;while(++i<n){if(!(r=row[i].area))continue;if(r<rmin)rmin=r;if(r>rmax)rmax=r;}s*=s;u*=u;return s?Math.max(u*rmax*ratio/s,s/(u*rmin*ratio)):Infinity;}function position(row,u,rect,flush){var i=-1,n=row.length,x=rect.x,y=rect.y,v=u?round(row.area/u):0,o;if(u==rect.dx){if(flush||v>rect.dy)v=rect.dy;while(++i<n){o=row[i];o.x=x;o.y=y;o.dy=v;x+=o.dx=Math.min(rect.x+rect.dx-x,v?round(o.area/v):0);}o.z=true;o.dx+=rect.x+rect.dx-x;rect.y+=v;rect.dy-=v;}else {if(flush||v>rect.dx)v=rect.dx;while(++i<n){o=row[i];o.x=x;o.y=y;o.dx=v;y+=o.dy=Math.min(rect.y+rect.dy-y,v?round(o.area/v):0);}o.z=false;o.dy+=rect.y+rect.dy-y;rect.x+=v;rect.dx-=v;}}function treemap(d){var nodes=stickies||hierarchy(d),root=nodes[0];root.x=root.y=0;if(root.value)root.dx=size[0],root.dy=size[1];else root.dx=root.dy=0;if(stickies)hierarchy.revalue(root);scale([root],root.dx*root.dy/root.value);(stickies?stickify:squarify)(root);if(sticky)stickies=nodes;return nodes;}treemap.size=function(x){if(!arguments.length)return size;size=x;return treemap;};treemap.padding=function(x){if(!arguments.length)return padding;function padFunction(node){var p=x.call(treemap,node,node.depth);return p==null?d3_layout_treemapPadNull(node):d3_layout_treemapPad(node,typeof p==="number"?[p,p,p,p]:p);}function padConstant(node){return d3_layout_treemapPad(node,x);}var type;pad=(padding=x)==null?d3_layout_treemapPadNull:(type=typeof x==="undefined"?"undefined":_typeof(x))==="function"?padFunction:type==="number"?(x=[x,x,x,x],padConstant):padConstant;return treemap;};treemap.round=function(x){if(!arguments.length)return round!=Number;round=x?Math.round:Number;return treemap;};treemap.sticky=function(x){if(!arguments.length)return sticky;sticky=x;stickies=null;return treemap;};treemap.ratio=function(x){if(!arguments.length)return ratio;ratio=x;return treemap;};treemap.mode=function(x){if(!arguments.length)return mode;mode=x+"";return treemap;};return d3_layout_hierarchyRebind(treemap,hierarchy);};function d3_layout_treemapPadNull(node){return {x:node.x,y:node.y,dx:node.dx,dy:node.dy};}function d3_layout_treemapPad(node,padding){var x=node.x+padding[3],y=node.y+padding[0],dx=node.dx-padding[1]-padding[3],dy=node.dy-padding[0]-padding[2];if(dx<0){x+=dx/2;dx=0;}if(dy<0){y+=dy/2;dy=0;}return {x:x,y:y,dx:dx,dy:dy};}d3.random={normal:function normal(µ,σ){var n=arguments.length;if(n<2)σ=1;if(n<1)µ=0;return function(){var x,y,r;do {x=Math.random()*2-1;y=Math.random()*2-1;r=x*x+y*y;}while(!r||r>1);return µ+σ*x*Math.sqrt(-2*Math.log(r)/r);};},logNormal:function logNormal(){var random=d3.random.normal.apply(d3,arguments);return function(){return Math.exp(random());};},bates:function bates(m){var random=d3.random.irwinHall(m);return function(){return random()/m;};},irwinHall:function irwinHall(m){return function(){for(var s=0,j=0;j<m;j++){s+=Math.random();}return s;};}};d3.scale={};function d3_scaleExtent(domain){var start=domain[0],stop=domain[domain.length-1];return start<stop?[start,stop]:[stop,start];}function d3_scaleRange(scale){return scale.rangeExtent?scale.rangeExtent():d3_scaleExtent(scale.range());}function d3_scale_bilinear(domain,range,uninterpolate,interpolate){var u=uninterpolate(domain[0],domain[1]),i=interpolate(range[0],range[1]);return function(x){return i(u(x));};}function d3_scale_nice(domain,nice){var i0=0,i1=domain.length-1,x0=domain[i0],x1=domain[i1],dx;if(x1<x0){dx=i0,i0=i1,i1=dx;dx=x0,x0=x1,x1=dx;}domain[i0]=nice.floor(x0);domain[i1]=nice.ceil(x1);return domain;}function d3_scale_niceStep(step){return step?{floor:function floor(x){return Math.floor(x/step)*step;},ceil:function ceil(x){return Math.ceil(x/step)*step;}}:d3_scale_niceIdentity;}var d3_scale_niceIdentity={floor:d3_identity,ceil:d3_identity};function d3_scale_polylinear(domain,range,uninterpolate,interpolate){var u=[],i=[],j=0,k=Math.min(domain.length,range.length)-1;if(domain[k]<domain[0]){domain=domain.slice().reverse();range=range.slice().reverse();}while(++j<=k){u.push(uninterpolate(domain[j-1],domain[j]));i.push(interpolate(range[j-1],range[j]));}return function(x){var j=d3.bisect(domain,x,1,k)-1;return i[j](u[j](x));};}d3.scale.linear=function(){return d3_scale_linear([0,1],[0,1],d3_interpolate,false);};function d3_scale_linear(domain,range,interpolate,clamp){var output,input;function rescale(){var linear=Math.min(domain.length,range.length)>2?d3_scale_polylinear:d3_scale_bilinear,uninterpolate=clamp?d3_uninterpolateClamp:d3_uninterpolateNumber;output=linear(domain,range,uninterpolate,interpolate);input=linear(range,domain,uninterpolate,d3_interpolate);return scale;}function scale(x){return output(x);}scale.invert=function(y){return input(y);};scale.domain=function(x){if(!arguments.length)return domain;domain=x.map(Number);return rescale();};scale.range=function(x){if(!arguments.length)return range;range=x;return rescale();};scale.rangeRound=function(x){return scale.range(x).interpolate(d3_interpolateRound);};scale.clamp=function(x){if(!arguments.length)return clamp;clamp=x;return rescale();};scale.interpolate=function(x){if(!arguments.length)return interpolate;interpolate=x;return rescale();};scale.ticks=function(m){return d3_scale_linearTicks(domain,m);};scale.tickFormat=function(m,format){return d3_scale_linearTickFormat(domain,m,format);};scale.nice=function(m){d3_scale_linearNice(domain,m);return rescale();};scale.copy=function(){return d3_scale_linear(domain,range,interpolate,clamp);};return rescale();}function d3_scale_linearRebind(scale,linear){return d3.rebind(scale,linear,"range","rangeRound","interpolate","clamp");}function d3_scale_linearNice(domain,m){d3_scale_nice(domain,d3_scale_niceStep(d3_scale_linearTickRange(domain,m)[2]));d3_scale_nice(domain,d3_scale_niceStep(d3_scale_linearTickRange(domain,m)[2]));return domain;}function d3_scale_linearTickRange(domain,m){if(m==null)m=10;var extent=d3_scaleExtent(domain),span=extent[1]-extent[0],step=Math.pow(10,Math.floor(Math.log(span/m)/Math.LN10)),err=m/span*step;if(err<=.15)step*=10;else if(err<=.35)step*=5;else if(err<=.75)step*=2;extent[0]=Math.ceil(extent[0]/step)*step;extent[1]=Math.floor(extent[1]/step)*step+step*.5;extent[2]=step;return extent;}function d3_scale_linearTicks(domain,m){return d3.range.apply(d3,d3_scale_linearTickRange(domain,m));}function d3_scale_linearTickFormat(domain,m,format){var range=d3_scale_linearTickRange(domain,m);if(format){var match=d3_format_re.exec(format);match.shift();if(match[8]==="s"){var prefix=d3.formatPrefix(Math.max(abs(range[0]),abs(range[1])));if(!match[7])match[7]="."+d3_scale_linearPrecision(prefix.scale(range[2]));match[8]="f";format=d3.format(match.join(""));return function(d){return format(prefix.scale(d))+prefix.symbol;};}if(!match[7])match[7]="."+d3_scale_linearFormatPrecision(match[8],range);format=match.join("");}else {format=",."+d3_scale_linearPrecision(range[2])+"f";}return d3.format(format);}var d3_scale_linearFormatSignificant={s:1,g:1,p:1,r:1,e:1};function d3_scale_linearPrecision(value){return -Math.floor(Math.log(value)/Math.LN10+.01);}function d3_scale_linearFormatPrecision(type,range){var p=d3_scale_linearPrecision(range[2]);return type in d3_scale_linearFormatSignificant?Math.abs(p-d3_scale_linearPrecision(Math.max(abs(range[0]),abs(range[1]))))+ +(type!=="e"):p-(type==="%")*2;}d3.scale.log=function(){return d3_scale_log(d3.scale.linear().domain([0,1]),10,true,[1,10]);};function d3_scale_log(linear,base,positive,domain){function log(x){return (positive?Math.log(x<0?0:x):-Math.log(x>0?0:-x))/Math.log(base);}function pow(x){return positive?Math.pow(base,x):-Math.pow(base,-x);}function scale(x){return linear(log(x));}scale.invert=function(x){return pow(linear.invert(x));};scale.domain=function(x){if(!arguments.length)return domain;positive=x[0]>=0;linear.domain((domain=x.map(Number)).map(log));return scale;};scale.base=function(_){if(!arguments.length)return base;base=+_;linear.domain(domain.map(log));return scale;};scale.nice=function(){var niced=d3_scale_nice(domain.map(log),positive?Math:d3_scale_logNiceNegative);linear.domain(niced);domain=niced.map(pow);return scale;};scale.ticks=function(){var extent=d3_scaleExtent(domain),ticks=[],u=extent[0],v=extent[1],i=Math.floor(log(u)),j=Math.ceil(log(v)),n=base%1?2:base;if(isFinite(j-i)){if(positive){for(;i<j;i++){for(var k=1;k<n;k++){ticks.push(pow(i)*k);}}ticks.push(pow(i));}else {ticks.push(pow(i));for(;i++<j;){for(var k=n-1;k>0;k--){ticks.push(pow(i)*k);}}}for(i=0;ticks[i]<u;i++){}for(j=ticks.length;ticks[j-1]>v;j--){}ticks=ticks.slice(i,j);}return ticks;};scale.tickFormat=function(n,format){if(!arguments.length)return d3_scale_logFormat;if(arguments.length<2)format=d3_scale_logFormat;else if(typeof format!=="function")format=d3.format(format);var k=Math.max(1,base*n/scale.ticks().length);return function(d){var i=d/pow(Math.round(log(d)));if(i*base<base-.5)i*=base;return i<=k?format(d):"";};};scale.copy=function(){return d3_scale_log(linear.copy(),base,positive,domain);};return d3_scale_linearRebind(scale,linear);}var d3_scale_logFormat=d3.format(".0e"),d3_scale_logNiceNegative={floor:function floor(x){return -Math.ceil(-x);},ceil:function ceil(x){return -Math.floor(-x);}};d3.scale.pow=function(){return d3_scale_pow(d3.scale.linear(),1,[0,1]);};function d3_scale_pow(linear,exponent,domain){var powp=d3_scale_powPow(exponent),powb=d3_scale_powPow(1/exponent);function scale(x){return linear(powp(x));}scale.invert=function(x){return powb(linear.invert(x));};scale.domain=function(x){if(!arguments.length)return domain;linear.domain((domain=x.map(Number)).map(powp));return scale;};scale.ticks=function(m){return d3_scale_linearTicks(domain,m);};scale.tickFormat=function(m,format){return d3_scale_linearTickFormat(domain,m,format);};scale.nice=function(m){return scale.domain(d3_scale_linearNice(domain,m));};scale.exponent=function(x){if(!arguments.length)return exponent;powp=d3_scale_powPow(exponent=x);powb=d3_scale_powPow(1/exponent);linear.domain(domain.map(powp));return scale;};scale.copy=function(){return d3_scale_pow(linear.copy(),exponent,domain);};return d3_scale_linearRebind(scale,linear);}function d3_scale_powPow(e){return function(x){return x<0?-Math.pow(-x,e):Math.pow(x,e);};}d3.scale.sqrt=function(){return d3.scale.pow().exponent(.5);};d3.scale.ordinal=function(){return d3_scale_ordinal([],{t:"range",a:[[]]});};function d3_scale_ordinal(domain,ranger){var index,range,rangeBand;function scale(x){return range[((index.get(x)||(ranger.t==="range"?index.set(x,domain.push(x)):NaN))-1)%range.length];}function steps(start,step){return d3.range(domain.length).map(function(i){return start+step*i;});}scale.domain=function(x){if(!arguments.length)return domain;domain=[];index=new d3_Map();var i=-1,n=x.length,xi;while(++i<n){if(!index.has(xi=x[i]))index.set(xi,domain.push(xi));}return scale[ranger.t].apply(scale,ranger.a);};scale.range=function(x){if(!arguments.length)return range;range=x;rangeBand=0;ranger={t:"range",a:arguments};return scale;};scale.rangePoints=function(x,padding){if(arguments.length<2)padding=0;var start=x[0],stop=x[1],step=domain.length<2?(start=(start+stop)/2,0):(stop-start)/(domain.length-1+padding);range=steps(start+step*padding/2,step);rangeBand=0;ranger={t:"rangePoints",a:arguments};return scale;};scale.rangeRoundPoints=function(x,padding){if(arguments.length<2)padding=0;var start=x[0],stop=x[1],step=domain.length<2?(start=stop=Math.round((start+stop)/2),0):(stop-start)/(domain.length-1+padding)|0;range=steps(start+Math.round(step*padding/2+(stop-start-(domain.length-1+padding)*step)/2),step);rangeBand=0;ranger={t:"rangeRoundPoints",a:arguments};return scale;};scale.rangeBands=function(x,padding,outerPadding){if(arguments.length<2)padding=0;if(arguments.length<3)outerPadding=padding;var reverse=x[1]<x[0],start=x[reverse-0],stop=x[1-reverse],step=(stop-start)/(domain.length-padding+2*outerPadding);range=steps(start+step*outerPadding,step);if(reverse)range.reverse();rangeBand=step*(1-padding);ranger={t:"rangeBands",a:arguments};return scale;};scale.rangeRoundBands=function(x,padding,outerPadding){if(arguments.length<2)padding=0;if(arguments.length<3)outerPadding=padding;var reverse=x[1]<x[0],start=x[reverse-0],stop=x[1-reverse],step=Math.floor((stop-start)/(domain.length-padding+2*outerPadding));range=steps(start+Math.round((stop-start-(domain.length-padding)*step)/2),step);if(reverse)range.reverse();rangeBand=Math.round(step*(1-padding));ranger={t:"rangeRoundBands",a:arguments};return scale;};scale.rangeBand=function(){return rangeBand;};scale.rangeExtent=function(){return d3_scaleExtent(ranger.a[0]);};scale.copy=function(){return d3_scale_ordinal(domain,ranger);};return scale.domain(domain);}d3.scale.category10=function(){return d3.scale.ordinal().range(d3_category10);};d3.scale.category20=function(){return d3.scale.ordinal().range(d3_category20);};d3.scale.category20b=function(){return d3.scale.ordinal().range(d3_category20b);};d3.scale.category20c=function(){return d3.scale.ordinal().range(d3_category20c);};var d3_category10=[2062260,16744206,2924588,14034728,9725885,9197131,14907330,8355711,12369186,1556175].map(d3_rgbString);var d3_category20=[2062260,11454440,16744206,16759672,2924588,10018698,14034728,16750742,9725885,12955861,9197131,12885140,14907330,16234194,8355711,13092807,12369186,14408589,1556175,10410725].map(d3_rgbString);var d3_category20b=[3750777,5395619,7040719,10264286,6519097,9216594,11915115,13556636,9202993,12426809,15186514,15190932,8666169,11356490,14049643,15177372,8077683,10834324,13528509,14589654].map(d3_rgbString);var d3_category20c=[3244733,7057110,10406625,13032431,15095053,16616764,16625259,16634018,3253076,7652470,10607003,13101504,7695281,10394312,12369372,14342891,6513507,9868950,12434877,14277081].map(d3_rgbString);d3.scale.quantile=function(){return d3_scale_quantile([],[]);};function d3_scale_quantile(domain,range){var thresholds;function rescale(){var k=0,q=range.length;thresholds=[];while(++k<q){thresholds[k-1]=d3.quantile(domain,k/q);}return scale;}function scale(x){if(!isNaN(x=+x))return range[d3.bisect(thresholds,x)];}scale.domain=function(x){if(!arguments.length)return domain;domain=x.map(d3_number).filter(d3_numeric).sort(d3_ascending);return rescale();};scale.range=function(x){if(!arguments.length)return range;range=x;return rescale();};scale.quantiles=function(){return thresholds;};scale.invertExtent=function(y){y=range.indexOf(y);return y<0?[NaN,NaN]:[y>0?thresholds[y-1]:domain[0],y<thresholds.length?thresholds[y]:domain[domain.length-1]];};scale.copy=function(){return d3_scale_quantile(domain,range);};return rescale();}d3.scale.quantize=function(){return d3_scale_quantize(0,1,[0,1]);};function d3_scale_quantize(x0,x1,range){var kx,i;function scale(x){return range[Math.max(0,Math.min(i,Math.floor(kx*(x-x0))))];}function rescale(){kx=range.length/(x1-x0);i=range.length-1;return scale;}scale.domain=function(x){if(!arguments.length)return [x0,x1];x0=+x[0];x1=+x[x.length-1];return rescale();};scale.range=function(x){if(!arguments.length)return range;range=x;return rescale();};scale.invertExtent=function(y){y=range.indexOf(y);y=y<0?NaN:y/kx+x0;return [y,y+1/kx];};scale.copy=function(){return d3_scale_quantize(x0,x1,range);};return rescale();}d3.scale.threshold=function(){return d3_scale_threshold([.5],[0,1]);};function d3_scale_threshold(domain,range){function scale(x){if(x<=x)return range[d3.bisect(domain,x)];}scale.domain=function(_){if(!arguments.length)return domain;domain=_;return scale;};scale.range=function(_){if(!arguments.length)return range;range=_;return scale;};scale.invertExtent=function(y){y=range.indexOf(y);return [domain[y-1],domain[y]];};scale.copy=function(){return d3_scale_threshold(domain,range);};return scale;}d3.scale.identity=function(){return d3_scale_identity([0,1]);};function d3_scale_identity(domain){function identity(x){return +x;}identity.invert=identity;identity.domain=identity.range=function(x){if(!arguments.length)return domain;domain=x.map(identity);return identity;};identity.ticks=function(m){return d3_scale_linearTicks(domain,m);};identity.tickFormat=function(m,format){return d3_scale_linearTickFormat(domain,m,format);};identity.copy=function(){return d3_scale_identity(domain);};return identity;}d3.svg={};function d3_zero(){return 0;}d3.svg.arc=function(){var innerRadius=d3_svg_arcInnerRadius,outerRadius=d3_svg_arcOuterRadius,cornerRadius=d3_zero,padRadius=d3_svg_arcAuto,startAngle=d3_svg_arcStartAngle,endAngle=d3_svg_arcEndAngle,padAngle=d3_svg_arcPadAngle;function arc(){var r0=Math.max(0,+innerRadius.apply(this,arguments)),r1=Math.max(0,+outerRadius.apply(this,arguments)),a0=startAngle.apply(this,arguments)-halfπ,a1=endAngle.apply(this,arguments)-halfπ,da=Math.abs(a1-a0),cw=a0>a1?0:1;if(r1<r0)rc=r1,r1=r0,r0=rc;if(da>=τε)return circleSegment(r1,cw)+(r0?circleSegment(r0,1-cw):"")+"Z";var rc,cr,rp,ap,p0=0,p1=0,x0,y0,x1,y1,x2,y2,x3,y3,path=[];if(ap=(+padAngle.apply(this,arguments)||0)/2){rp=padRadius===d3_svg_arcAuto?Math.sqrt(r0*r0+r1*r1):+padRadius.apply(this,arguments);if(!cw)p1*=-1;if(r1)p1=d3_asin(rp/r1*Math.sin(ap));if(r0)p0=d3_asin(rp/r0*Math.sin(ap));}if(r1){x0=r1*Math.cos(a0+p1);y0=r1*Math.sin(a0+p1);x1=r1*Math.cos(a1-p1);y1=r1*Math.sin(a1-p1);var l1=Math.abs(a1-a0-2*p1)<=π?0:1;if(p1&&d3_svg_arcSweep(x0,y0,x1,y1)===cw^l1){var h1=(a0+a1)/2;x0=r1*Math.cos(h1);y0=r1*Math.sin(h1);x1=y1=null;}}else {x0=y0=0;}if(r0){x2=r0*Math.cos(a1-p0);y2=r0*Math.sin(a1-p0);x3=r0*Math.cos(a0+p0);y3=r0*Math.sin(a0+p0);var l0=Math.abs(a0-a1+2*p0)<=π?0:1;if(p0&&d3_svg_arcSweep(x2,y2,x3,y3)===1-cw^l0){var h0=(a0+a1)/2;x2=r0*Math.cos(h0);y2=r0*Math.sin(h0);x3=y3=null;}}else {x2=y2=0;}if(da>ε&&(rc=Math.min(Math.abs(r1-r0)/2,+cornerRadius.apply(this,arguments)))>.001){cr=r0<r1^cw?0:1;var rc1=rc,rc0=rc;if(da<π){var oc=x3==null?[x2,y2]:x1==null?[x0,y0]:d3_geom_polygonIntersect([x0,y0],[x3,y3],[x1,y1],[x2,y2]),ax=x0-oc[0],ay=y0-oc[1],bx=x1-oc[0],by=y1-oc[1],kc=1/Math.sin(Math.acos((ax*bx+ay*by)/(Math.sqrt(ax*ax+ay*ay)*Math.sqrt(bx*bx+by*by)))/2),lc=Math.sqrt(oc[0]*oc[0]+oc[1]*oc[1]);rc0=Math.min(rc,(r0-lc)/(kc-1));rc1=Math.min(rc,(r1-lc)/(kc+1));}if(x1!=null){var t30=d3_svg_arcCornerTangents(x3==null?[x2,y2]:[x3,y3],[x0,y0],r1,rc1,cw),t12=d3_svg_arcCornerTangents([x1,y1],[x2,y2],r1,rc1,cw);if(rc===rc1){path.push("M",t30[0],"A",rc1,",",rc1," 0 0,",cr," ",t30[1],"A",r1,",",r1," 0 ",1-cw^d3_svg_arcSweep(t30[1][0],t30[1][1],t12[1][0],t12[1][1]),",",cw," ",t12[1],"A",rc1,",",rc1," 0 0,",cr," ",t12[0]);}else {path.push("M",t30[0],"A",rc1,",",rc1," 0 1,",cr," ",t12[0]);}}else {path.push("M",x0,",",y0);}if(x3!=null){var t03=d3_svg_arcCornerTangents([x0,y0],[x3,y3],r0,-rc0,cw),t21=d3_svg_arcCornerTangents([x2,y2],x1==null?[x0,y0]:[x1,y1],r0,-rc0,cw);if(rc===rc0){path.push("L",t21[0],"A",rc0,",",rc0," 0 0,",cr," ",t21[1],"A",r0,",",r0," 0 ",cw^d3_svg_arcSweep(t21[1][0],t21[1][1],t03[1][0],t03[1][1]),",",1-cw," ",t03[1],"A",rc0,",",rc0," 0 0,",cr," ",t03[0]);}else {path.push("L",t21[0],"A",rc0,",",rc0," 0 0,",cr," ",t03[0]);}}else {path.push("L",x2,",",y2);}}else {path.push("M",x0,",",y0);if(x1!=null)path.push("A",r1,",",r1," 0 ",l1,",",cw," ",x1,",",y1);path.push("L",x2,",",y2);if(x3!=null)path.push("A",r0,",",r0," 0 ",l0,",",1-cw," ",x3,",",y3);}path.push("Z");return path.join("");}function circleSegment(r1,cw){return "M0,"+r1+"A"+r1+","+r1+" 0 1,"+cw+" 0,"+-r1+"A"+r1+","+r1+" 0 1,"+cw+" 0,"+r1;}arc.innerRadius=function(v){if(!arguments.length)return innerRadius;innerRadius=d3_functor(v);return arc;};arc.outerRadius=function(v){if(!arguments.length)return outerRadius;outerRadius=d3_functor(v);return arc;};arc.cornerRadius=function(v){if(!arguments.length)return cornerRadius;cornerRadius=d3_functor(v);return arc;};arc.padRadius=function(v){if(!arguments.length)return padRadius;padRadius=v==d3_svg_arcAuto?d3_svg_arcAuto:d3_functor(v);return arc;};arc.startAngle=function(v){if(!arguments.length)return startAngle;startAngle=d3_functor(v);return arc;};arc.endAngle=function(v){if(!arguments.length)return endAngle;endAngle=d3_functor(v);return arc;};arc.padAngle=function(v){if(!arguments.length)return padAngle;padAngle=d3_functor(v);return arc;};arc.centroid=function(){var r=(+innerRadius.apply(this,arguments)+ +outerRadius.apply(this,arguments))/2,a=(+startAngle.apply(this,arguments)+ +endAngle.apply(this,arguments))/2-halfπ;return [Math.cos(a)*r,Math.sin(a)*r];};return arc;};var d3_svg_arcAuto="auto";function d3_svg_arcInnerRadius(d){return d.innerRadius;}function d3_svg_arcOuterRadius(d){return d.outerRadius;}function d3_svg_arcStartAngle(d){return d.startAngle;}function d3_svg_arcEndAngle(d){return d.endAngle;}function d3_svg_arcPadAngle(d){return d&&d.padAngle;}function d3_svg_arcSweep(x0,y0,x1,y1){return (x0-x1)*y0-(y0-y1)*x0>0?0:1;}function d3_svg_arcCornerTangents(p0,p1,r1,rc,cw){var x01=p0[0]-p1[0],y01=p0[1]-p1[1],lo=(cw?rc:-rc)/Math.sqrt(x01*x01+y01*y01),ox=lo*y01,oy=-lo*x01,x1=p0[0]+ox,y1=p0[1]+oy,x2=p1[0]+ox,y2=p1[1]+oy,x3=(x1+x2)/2,y3=(y1+y2)/2,dx=x2-x1,dy=y2-y1,d2=dx*dx+dy*dy,r=r1-rc,D=x1*y2-x2*y1,d=(dy<0?-1:1)*Math.sqrt(Math.max(0,r*r*d2-D*D)),cx0=(D*dy-dx*d)/d2,cy0=(-D*dx-dy*d)/d2,cx1=(D*dy+dx*d)/d2,cy1=(-D*dx+dy*d)/d2,dx0=cx0-x3,dy0=cy0-y3,dx1=cx1-x3,dy1=cy1-y3;if(dx0*dx0+dy0*dy0>dx1*dx1+dy1*dy1)cx0=cx1,cy0=cy1;return [[cx0-ox,cy0-oy],[cx0*r1/r,cy0*r1/r]];}function d3_svg_line(projection){var x=d3_geom_pointX,y=d3_geom_pointY,defined=d3_true,interpolate=d3_svg_lineLinear,interpolateKey=interpolate.key,tension=.7;function line(data){var segments=[],points=[],i=-1,n=data.length,d,fx=d3_functor(x),fy=d3_functor(y);function segment(){segments.push("M",interpolate(projection(points),tension));}while(++i<n){if(defined.call(this,d=data[i],i)){points.push([+fx.call(this,d,i),+fy.call(this,d,i)]);}else if(points.length){segment();points=[];}}if(points.length)segment();return segments.length?segments.join(""):null;}line.x=function(_){if(!arguments.length)return x;x=_;return line;};line.y=function(_){if(!arguments.length)return y;y=_;return line;};line.defined=function(_){if(!arguments.length)return defined;defined=_;return line;};line.interpolate=function(_){if(!arguments.length)return interpolateKey;if(typeof _==="function")interpolateKey=interpolate=_;else interpolateKey=(interpolate=d3_svg_lineInterpolators.get(_)||d3_svg_lineLinear).key;return line;};line.tension=function(_){if(!arguments.length)return tension;tension=_;return line;};return line;}d3.svg.line=function(){return d3_svg_line(d3_identity);};var d3_svg_lineInterpolators=d3.map({linear:d3_svg_lineLinear,"linear-closed":d3_svg_lineLinearClosed,step:d3_svg_lineStep,"step-before":d3_svg_lineStepBefore,"step-after":d3_svg_lineStepAfter,basis:d3_svg_lineBasis,"basis-open":d3_svg_lineBasisOpen,"basis-closed":d3_svg_lineBasisClosed,bundle:d3_svg_lineBundle,cardinal:d3_svg_lineCardinal,"cardinal-open":d3_svg_lineCardinalOpen,"cardinal-closed":d3_svg_lineCardinalClosed,monotone:d3_svg_lineMonotone});d3_svg_lineInterpolators.forEach(function(key,value){value.key=key;value.closed=/-closed$/.test(key);});function d3_svg_lineLinear(points){return points.length>1?points.join("L"):points+"Z";}function d3_svg_lineLinearClosed(points){return points.join("L")+"Z";}function d3_svg_lineStep(points){var i=0,n=points.length,p=points[0],path=[p[0],",",p[1]];while(++i<n){path.push("H",(p[0]+(p=points[i])[0])/2,"V",p[1]);}if(n>1)path.push("H",p[0]);return path.join("");}function d3_svg_lineStepBefore(points){var i=0,n=points.length,p=points[0],path=[p[0],",",p[1]];while(++i<n){path.push("V",(p=points[i])[1],"H",p[0]);}return path.join("");}function d3_svg_lineStepAfter(points){var i=0,n=points.length,p=points[0],path=[p[0],",",p[1]];while(++i<n){path.push("H",(p=points[i])[0],"V",p[1]);}return path.join("");}function d3_svg_lineCardinalOpen(points,tension){return points.length<4?d3_svg_lineLinear(points):points[1]+d3_svg_lineHermite(points.slice(1,-1),d3_svg_lineCardinalTangents(points,tension));}function d3_svg_lineCardinalClosed(points,tension){return points.length<3?d3_svg_lineLinearClosed(points):points[0]+d3_svg_lineHermite((points.push(points[0]),points),d3_svg_lineCardinalTangents([points[points.length-2]].concat(points,[points[1]]),tension));}function d3_svg_lineCardinal(points,tension){return points.length<3?d3_svg_lineLinear(points):points[0]+d3_svg_lineHermite(points,d3_svg_lineCardinalTangents(points,tension));}function d3_svg_lineHermite(points,tangents){if(tangents.length<1||points.length!=tangents.length&&points.length!=tangents.length+2){return d3_svg_lineLinear(points);}var quad=points.length!=tangents.length,path="",p0=points[0],p=points[1],t0=tangents[0],t=t0,pi=1;if(quad){path+="Q"+(p[0]-t0[0]*2/3)+","+(p[1]-t0[1]*2/3)+","+p[0]+","+p[1];p0=points[1];pi=2;}if(tangents.length>1){t=tangents[1];p=points[pi];pi++;path+="C"+(p0[0]+t0[0])+","+(p0[1]+t0[1])+","+(p[0]-t[0])+","+(p[1]-t[1])+","+p[0]+","+p[1];for(var i=2;i<tangents.length;i++,pi++){p=points[pi];t=tangents[i];path+="S"+(p[0]-t[0])+","+(p[1]-t[1])+","+p[0]+","+p[1];}}if(quad){var lp=points[pi];path+="Q"+(p[0]+t[0]*2/3)+","+(p[1]+t[1]*2/3)+","+lp[0]+","+lp[1];}return path;}function d3_svg_lineCardinalTangents(points,tension){var tangents=[],a=(1-tension)/2,p0,p1=points[0],p2=points[1],i=1,n=points.length;while(++i<n){p0=p1;p1=p2;p2=points[i];tangents.push([a*(p2[0]-p0[0]),a*(p2[1]-p0[1])]);}return tangents;}function d3_svg_lineBasis(points){if(points.length<3)return d3_svg_lineLinear(points);var i=1,n=points.length,pi=points[0],x0=pi[0],y0=pi[1],px=[x0,x0,x0,(pi=points[1])[0]],py=[y0,y0,y0,pi[1]],path=[x0,",",y0,"L",d3_svg_lineDot4(d3_svg_lineBasisBezier3,px),",",d3_svg_lineDot4(d3_svg_lineBasisBezier3,py)];points.push(points[n-1]);while(++i<=n){pi=points[i];px.shift();px.push(pi[0]);py.shift();py.push(pi[1]);d3_svg_lineBasisBezier(path,px,py);}points.pop();path.push("L",pi);return path.join("");}function d3_svg_lineBasisOpen(points){if(points.length<4)return d3_svg_lineLinear(points);var path=[],i=-1,n=points.length,pi,px=[0],py=[0];while(++i<3){pi=points[i];px.push(pi[0]);py.push(pi[1]);}path.push(d3_svg_lineDot4(d3_svg_lineBasisBezier3,px)+","+d3_svg_lineDot4(d3_svg_lineBasisBezier3,py));--i;while(++i<n){pi=points[i];px.shift();px.push(pi[0]);py.shift();py.push(pi[1]);d3_svg_lineBasisBezier(path,px,py);}return path.join("");}function d3_svg_lineBasisClosed(points){var path,i=-1,n=points.length,m=n+4,pi,px=[],py=[];while(++i<4){pi=points[i%n];px.push(pi[0]);py.push(pi[1]);}path=[d3_svg_lineDot4(d3_svg_lineBasisBezier3,px),",",d3_svg_lineDot4(d3_svg_lineBasisBezier3,py)];--i;while(++i<m){pi=points[i%n];px.shift();px.push(pi[0]);py.shift();py.push(pi[1]);d3_svg_lineBasisBezier(path,px,py);}return path.join("");}function d3_svg_lineBundle(points,tension){var n=points.length-1;if(n){var x0=points[0][0],y0=points[0][1],dx=points[n][0]-x0,dy=points[n][1]-y0,i=-1,p,t;while(++i<=n){p=points[i];t=i/n;p[0]=tension*p[0]+(1-tension)*(x0+t*dx);p[1]=tension*p[1]+(1-tension)*(y0+t*dy);}}return d3_svg_lineBasis(points);}function d3_svg_lineDot4(a,b){return a[0]*b[0]+a[1]*b[1]+a[2]*b[2]+a[3]*b[3];}var d3_svg_lineBasisBezier1=[0,2/3,1/3,0],d3_svg_lineBasisBezier2=[0,1/3,2/3,0],d3_svg_lineBasisBezier3=[0,1/6,2/3,1/6];function d3_svg_lineBasisBezier(path,x,y){path.push("C",d3_svg_lineDot4(d3_svg_lineBasisBezier1,x),",",d3_svg_lineDot4(d3_svg_lineBasisBezier1,y),",",d3_svg_lineDot4(d3_svg_lineBasisBezier2,x),",",d3_svg_lineDot4(d3_svg_lineBasisBezier2,y),",",d3_svg_lineDot4(d3_svg_lineBasisBezier3,x),",",d3_svg_lineDot4(d3_svg_lineBasisBezier3,y));}function d3_svg_lineSlope(p0,p1){return (p1[1]-p0[1])/(p1[0]-p0[0]);}function d3_svg_lineFiniteDifferences(points){var i=0,j=points.length-1,m=[],p0=points[0],p1=points[1],d=m[0]=d3_svg_lineSlope(p0,p1);while(++i<j){m[i]=(d+(d=d3_svg_lineSlope(p0=p1,p1=points[i+1])))/2;}m[i]=d;return m;}function d3_svg_lineMonotoneTangents(points){var tangents=[],d,a,b,s,m=d3_svg_lineFiniteDifferences(points),i=-1,j=points.length-1;while(++i<j){d=d3_svg_lineSlope(points[i],points[i+1]);if(abs(d)<ε){m[i]=m[i+1]=0;}else {a=m[i]/d;b=m[i+1]/d;s=a*a+b*b;if(s>9){s=d*3/Math.sqrt(s);m[i]=s*a;m[i+1]=s*b;}}}i=-1;while(++i<=j){s=(points[Math.min(j,i+1)][0]-points[Math.max(0,i-1)][0])/(6*(1+m[i]*m[i]));tangents.push([s||0,m[i]*s||0]);}return tangents;}function d3_svg_lineMonotone(points){return points.length<3?d3_svg_lineLinear(points):points[0]+d3_svg_lineHermite(points,d3_svg_lineMonotoneTangents(points));}d3.svg.line.radial=function(){var line=d3_svg_line(d3_svg_lineRadial);line.radius=line.x,delete line.x;line.angle=line.y,delete line.y;return line;};function d3_svg_lineRadial(points){var point,i=-1,n=points.length,r,a;while(++i<n){point=points[i];r=point[0];a=point[1]-halfπ;point[0]=r*Math.cos(a);point[1]=r*Math.sin(a);}return points;}function d3_svg_area(projection){var x0=d3_geom_pointX,x1=d3_geom_pointX,y0=0,y1=d3_geom_pointY,defined=d3_true,interpolate=d3_svg_lineLinear,interpolateKey=interpolate.key,interpolateReverse=interpolate,L="L",tension=.7;function area(data){var segments=[],points0=[],points1=[],i=-1,n=data.length,d,fx0=d3_functor(x0),fy0=d3_functor(y0),fx1=x0===x1?function(){return x;}:d3_functor(x1),fy1=y0===y1?function(){return y;}:d3_functor(y1),x,y;function segment(){segments.push("M",interpolate(projection(points1),tension),L,interpolateReverse(projection(points0.reverse()),tension),"Z");}while(++i<n){if(defined.call(this,d=data[i],i)){points0.push([x=+fx0.call(this,d,i),y=+fy0.call(this,d,i)]);points1.push([+fx1.call(this,d,i),+fy1.call(this,d,i)]);}else if(points0.length){segment();points0=[];points1=[];}}if(points0.length)segment();return segments.length?segments.join(""):null;}area.x=function(_){if(!arguments.length)return x1;x0=x1=_;return area;};area.x0=function(_){if(!arguments.length)return x0;x0=_;return area;};area.x1=function(_){if(!arguments.length)return x1;x1=_;return area;};area.y=function(_){if(!arguments.length)return y1;y0=y1=_;return area;};area.y0=function(_){if(!arguments.length)return y0;y0=_;return area;};area.y1=function(_){if(!arguments.length)return y1;y1=_;return area;};area.defined=function(_){if(!arguments.length)return defined;defined=_;return area;};area.interpolate=function(_){if(!arguments.length)return interpolateKey;if(typeof _==="function")interpolateKey=interpolate=_;else interpolateKey=(interpolate=d3_svg_lineInterpolators.get(_)||d3_svg_lineLinear).key;interpolateReverse=interpolate.reverse||interpolate;L=interpolate.closed?"M":"L";return area;};area.tension=function(_){if(!arguments.length)return tension;tension=_;return area;};return area;}d3_svg_lineStepBefore.reverse=d3_svg_lineStepAfter;d3_svg_lineStepAfter.reverse=d3_svg_lineStepBefore;d3.svg.area=function(){return d3_svg_area(d3_identity);};d3.svg.area.radial=function(){var area=d3_svg_area(d3_svg_lineRadial);area.radius=area.x,delete area.x;area.innerRadius=area.x0,delete area.x0;area.outerRadius=area.x1,delete area.x1;area.angle=area.y,delete area.y;area.startAngle=area.y0,delete area.y0;area.endAngle=area.y1,delete area.y1;return area;};d3.svg.chord=function(){var source=d3_source,target=d3_target,radius=d3_svg_chordRadius,startAngle=d3_svg_arcStartAngle,endAngle=d3_svg_arcEndAngle;function chord(d,i){var s=subgroup(this,source,d,i),t=subgroup(this,target,d,i);return "M"+s.p0+arc(s.r,s.p1,s.a1-s.a0)+(equals(s,t)?curve(s.r,s.p1,s.r,s.p0):curve(s.r,s.p1,t.r,t.p0)+arc(t.r,t.p1,t.a1-t.a0)+curve(t.r,t.p1,s.r,s.p0))+"Z";}function subgroup(self,f,d,i){var subgroup=f.call(self,d,i),r=radius.call(self,subgroup,i),a0=startAngle.call(self,subgroup,i)-halfπ,a1=endAngle.call(self,subgroup,i)-halfπ;return {r:r,a0:a0,a1:a1,p0:[r*Math.cos(a0),r*Math.sin(a0)],p1:[r*Math.cos(a1),r*Math.sin(a1)]};}function equals(a,b){return a.a0==b.a0&&a.a1==b.a1;}function arc(r,p,a){return "A"+r+","+r+" 0 "+ +(a>π)+",1 "+p;}function curve(r0,p0,r1,p1){return "Q 0,0 "+p1;}chord.radius=function(v){if(!arguments.length)return radius;radius=d3_functor(v);return chord;};chord.source=function(v){if(!arguments.length)return source;source=d3_functor(v);return chord;};chord.target=function(v){if(!arguments.length)return target;target=d3_functor(v);return chord;};chord.startAngle=function(v){if(!arguments.length)return startAngle;startAngle=d3_functor(v);return chord;};chord.endAngle=function(v){if(!arguments.length)return endAngle;endAngle=d3_functor(v);return chord;};return chord;};function d3_svg_chordRadius(d){return d.radius;}d3.svg.diagonal=function(){var source=d3_source,target=d3_target,projection=d3_svg_diagonalProjection;function diagonal(d,i){var p0=source.call(this,d,i),p3=target.call(this,d,i),m=(p0.y+p3.y)/2,p=[p0,{x:p0.x,y:m},{x:p3.x,y:m},p3];p=p.map(projection);return "M"+p[0]+"C"+p[1]+" "+p[2]+" "+p[3];}diagonal.source=function(x){if(!arguments.length)return source;source=d3_functor(x);return diagonal;};diagonal.target=function(x){if(!arguments.length)return target;target=d3_functor(x);return diagonal;};diagonal.projection=function(x){if(!arguments.length)return projection;projection=x;return diagonal;};return diagonal;};function d3_svg_diagonalProjection(d){return [d.x,d.y];}d3.svg.diagonal.radial=function(){var diagonal=d3.svg.diagonal(),projection=d3_svg_diagonalProjection,projection_=diagonal.projection;diagonal.projection=function(x){return arguments.length?projection_(d3_svg_diagonalRadialProjection(projection=x)):projection;};return diagonal;};function d3_svg_diagonalRadialProjection(projection){return function(){var d=projection.apply(this,arguments),r=d[0],a=d[1]-halfπ;return [r*Math.cos(a),r*Math.sin(a)];};}d3.svg.symbol=function(){var type=d3_svg_symbolType,size=d3_svg_symbolSize;function symbol(d,i){return (d3_svg_symbols.get(type.call(this,d,i))||d3_svg_symbolCircle)(size.call(this,d,i));}symbol.type=function(x){if(!arguments.length)return type;type=d3_functor(x);return symbol;};symbol.size=function(x){if(!arguments.length)return size;size=d3_functor(x);return symbol;};return symbol;};function d3_svg_symbolSize(){return 64;}function d3_svg_symbolType(){return "circle";}function d3_svg_symbolCircle(size){var r=Math.sqrt(size/π);return "M0,"+r+"A"+r+","+r+" 0 1,1 0,"+-r+"A"+r+","+r+" 0 1,1 0,"+r+"Z";}var d3_svg_symbols=d3.map({circle:d3_svg_symbolCircle,cross:function cross(size){var r=Math.sqrt(size/5)/2;return "M"+-3*r+","+-r+"H"+-r+"V"+-3*r+"H"+r+"V"+-r+"H"+3*r+"V"+r+"H"+r+"V"+3*r+"H"+-r+"V"+r+"H"+-3*r+"Z";},diamond:function diamond(size){var ry=Math.sqrt(size/(2*d3_svg_symbolTan30)),rx=ry*d3_svg_symbolTan30;return "M0,"+-ry+"L"+rx+",0"+" 0,"+ry+" "+-rx+",0"+"Z";},square:function square(size){var r=Math.sqrt(size)/2;return "M"+-r+","+-r+"L"+r+","+-r+" "+r+","+r+" "+-r+","+r+"Z";},"triangle-down":function triangleDown(size){var rx=Math.sqrt(size/d3_svg_symbolSqrt3),ry=rx*d3_svg_symbolSqrt3/2;return "M0,"+ry+"L"+rx+","+-ry+" "+-rx+","+-ry+"Z";},"triangle-up":function triangleUp(size){var rx=Math.sqrt(size/d3_svg_symbolSqrt3),ry=rx*d3_svg_symbolSqrt3/2;return "M0,"+-ry+"L"+rx+","+ry+" "+-rx+","+ry+"Z";}});d3.svg.symbolTypes=d3_svg_symbols.keys();var d3_svg_symbolSqrt3=Math.sqrt(3),d3_svg_symbolTan30=Math.tan(30*d3_radians);d3_selectionPrototype.transition=function(name){var id=d3_transitionInheritId||++d3_transitionId,ns=d3_transitionNamespace(name),subgroups=[],subgroup,node,transition=d3_transitionInherit||{time:Date.now(),ease:d3_ease_cubicInOut,delay:0,duration:250};for(var j=-1,m=this.length;++j<m;){subgroups.push(subgroup=[]);for(var group=this[j],i=-1,n=group.length;++i<n;){if(node=group[i])d3_transitionNode(node,i,ns,id,transition);subgroup.push(node);}}return d3_transition(subgroups,ns,id);};d3_selectionPrototype.interrupt=function(name){return this.each(name==null?d3_selection_interrupt:d3_selection_interruptNS(d3_transitionNamespace(name)));};var d3_selection_interrupt=d3_selection_interruptNS(d3_transitionNamespace());function d3_selection_interruptNS(ns){return function(){var lock,activeId,active;if((lock=this[ns])&&(active=lock[activeId=lock.active])){active.timer.c=null;active.timer.t=NaN;if(--lock.count)delete lock[activeId];else delete this[ns];lock.active+=.5;active.event&&active.event.interrupt.call(this,this.__data__,active.index);}};}function d3_transition(groups,ns,id){d3_subclass(groups,d3_transitionPrototype);groups.namespace=ns;groups.id=id;return groups;}var d3_transitionPrototype=[],d3_transitionId=0,d3_transitionInheritId,d3_transitionInherit;d3_transitionPrototype.call=d3_selectionPrototype.call;d3_transitionPrototype.empty=d3_selectionPrototype.empty;d3_transitionPrototype.node=d3_selectionPrototype.node;d3_transitionPrototype.size=d3_selectionPrototype.size;d3.transition=function(selection,name){return selection&&selection.transition?d3_transitionInheritId?selection.transition(name):selection:d3.selection().transition(selection);};d3.transition.prototype=d3_transitionPrototype;d3_transitionPrototype.select=function(selector){var id=this.id,ns=this.namespace,subgroups=[],subgroup,subnode,node;selector=d3_selection_selector(selector);for(var j=-1,m=this.length;++j<m;){subgroups.push(subgroup=[]);for(var group=this[j],i=-1,n=group.length;++i<n;){if((node=group[i])&&(subnode=selector.call(node,node.__data__,i,j))){if("__data__" in node)subnode.__data__=node.__data__;d3_transitionNode(subnode,i,ns,id,node[ns][id]);subgroup.push(subnode);}else {subgroup.push(null);}}}return d3_transition(subgroups,ns,id);};d3_transitionPrototype.selectAll=function(selector){var id=this.id,ns=this.namespace,subgroups=[],subgroup,subnodes,node,subnode,transition;selector=d3_selection_selectorAll(selector);for(var j=-1,m=this.length;++j<m;){for(var group=this[j],i=-1,n=group.length;++i<n;){if(node=group[i]){transition=node[ns][id];subnodes=selector.call(node,node.__data__,i,j);subgroups.push(subgroup=[]);for(var k=-1,o=subnodes.length;++k<o;){if(subnode=subnodes[k])d3_transitionNode(subnode,k,ns,id,transition);subgroup.push(subnode);}}}}return d3_transition(subgroups,ns,id);};d3_transitionPrototype.filter=function(filter){var subgroups=[],subgroup,group,node;if(typeof filter!=="function")filter=d3_selection_filter(filter);for(var j=0,m=this.length;j<m;j++){subgroups.push(subgroup=[]);for(var group=this[j],i=0,n=group.length;i<n;i++){if((node=group[i])&&filter.call(node,node.__data__,i,j)){subgroup.push(node);}}}return d3_transition(subgroups,this.namespace,this.id);};d3_transitionPrototype.tween=function(name,tween){var id=this.id,ns=this.namespace;if(arguments.length<2)return this.node()[ns][id].tween.get(name);return d3_selection_each(this,tween==null?function(node){node[ns][id].tween.remove(name);}:function(node){node[ns][id].tween.set(name,tween);});};function d3_transition_tween(groups,name,value,tween){var id=groups.id,ns=groups.namespace;return d3_selection_each(groups,typeof value==="function"?function(node,i,j){node[ns][id].tween.set(name,tween(value.call(node,node.__data__,i,j)));}:(value=tween(value),function(node){node[ns][id].tween.set(name,value);}));}d3_transitionPrototype.attr=function(nameNS,value){if(arguments.length<2){for(value in nameNS){this.attr(value,nameNS[value]);}return this;}var interpolate=nameNS=="transform"?d3_interpolateTransform:d3_interpolate,name=d3.ns.qualify(nameNS);function attrNull(){this.removeAttribute(name);}function attrNullNS(){this.removeAttributeNS(name.space,name.local);}function attrTween(b){return b==null?attrNull:(b+="",function(){var a=this.getAttribute(name),i;return a!==b&&(i=interpolate(a,b),function(t){this.setAttribute(name,i(t));});});}function attrTweenNS(b){return b==null?attrNullNS:(b+="",function(){var a=this.getAttributeNS(name.space,name.local),i;return a!==b&&(i=interpolate(a,b),function(t){this.setAttributeNS(name.space,name.local,i(t));});});}return d3_transition_tween(this,"attr."+nameNS,value,name.local?attrTweenNS:attrTween);};d3_transitionPrototype.attrTween=function(nameNS,tween){var name=d3.ns.qualify(nameNS);function attrTween(d,i){var f=tween.call(this,d,i,this.getAttribute(name));return f&&function(t){this.setAttribute(name,f(t));};}function attrTweenNS(d,i){var f=tween.call(this,d,i,this.getAttributeNS(name.space,name.local));return f&&function(t){this.setAttributeNS(name.space,name.local,f(t));};}return this.tween("attr."+nameNS,name.local?attrTweenNS:attrTween);};d3_transitionPrototype.style=function(name,value,priority){var n=arguments.length;if(n<3){if(typeof name!=="string"){if(n<2)value="";for(priority in name){this.style(priority,name[priority],value);}return this;}priority="";}function styleNull(){this.style.removeProperty(name);}function styleString(b){return b==null?styleNull:(b+="",function(){var a=d3_window(this).getComputedStyle(this,null).getPropertyValue(name),i;return a!==b&&(i=d3_interpolate(a,b),function(t){this.style.setProperty(name,i(t),priority);});});}return d3_transition_tween(this,"style."+name,value,styleString);};d3_transitionPrototype.styleTween=function(name,tween,priority){if(arguments.length<3)priority="";function styleTween(d,i){var f=tween.call(this,d,i,d3_window(this).getComputedStyle(this,null).getPropertyValue(name));return f&&function(t){this.style.setProperty(name,f(t),priority);};}return this.tween("style."+name,styleTween);};d3_transitionPrototype.text=function(value){return d3_transition_tween(this,"text",value,d3_transition_text);};function d3_transition_text(b){if(b==null)b="";return function(){this.textContent=b;};}d3_transitionPrototype.remove=function(){var ns=this.namespace;return this.each("end.transition",function(){var p;if(this[ns].count<2&&(p=this.parentNode))p.removeChild(this);});};d3_transitionPrototype.ease=function(value){var id=this.id,ns=this.namespace;if(arguments.length<1)return this.node()[ns][id].ease;if(typeof value!=="function")value=d3.ease.apply(d3,arguments);return d3_selection_each(this,function(node){node[ns][id].ease=value;});};d3_transitionPrototype.delay=function(value){var id=this.id,ns=this.namespace;if(arguments.length<1)return this.node()[ns][id].delay;return d3_selection_each(this,typeof value==="function"?function(node,i,j){node[ns][id].delay=+value.call(node,node.__data__,i,j);}:(value=+value,function(node){node[ns][id].delay=value;}));};d3_transitionPrototype.duration=function(value){var id=this.id,ns=this.namespace;if(arguments.length<1)return this.node()[ns][id].duration;return d3_selection_each(this,typeof value==="function"?function(node,i,j){node[ns][id].duration=Math.max(1,value.call(node,node.__data__,i,j));}:(value=Math.max(1,value),function(node){node[ns][id].duration=value;}));};d3_transitionPrototype.each=function(type,listener){var id=this.id,ns=this.namespace;if(arguments.length<2){var inherit=d3_transitionInherit,inheritId=d3_transitionInheritId;try{d3_transitionInheritId=id;d3_selection_each(this,function(node,i,j){d3_transitionInherit=node[ns][id];type.call(node,node.__data__,i,j);});}finally {d3_transitionInherit=inherit;d3_transitionInheritId=inheritId;}}else {d3_selection_each(this,function(node){var transition=node[ns][id];(transition.event||(transition.event=d3.dispatch("start","end","interrupt"))).on(type,listener);});}return this;};d3_transitionPrototype.transition=function(){var id0=this.id,id1=++d3_transitionId,ns=this.namespace,subgroups=[],subgroup,group,node,transition;for(var j=0,m=this.length;j<m;j++){subgroups.push(subgroup=[]);for(var group=this[j],i=0,n=group.length;i<n;i++){if(node=group[i]){transition=node[ns][id0];d3_transitionNode(node,i,ns,id1,{time:transition.time,ease:transition.ease,delay:transition.delay+transition.duration,duration:transition.duration});}subgroup.push(node);}}return d3_transition(subgroups,ns,id1);};function d3_transitionNamespace(name){return name==null?"__transition__":"__transition_"+name+"__";}function d3_transitionNode(node,i,ns,id,inherit){var lock=node[ns]||(node[ns]={active:0,count:0}),transition=lock[id],time,timer,duration,ease,tweens;function schedule(elapsed){var delay=transition.delay;timer.t=delay+time;if(delay<=elapsed)return start(elapsed-delay);timer.c=start;}function start(elapsed){var activeId=lock.active,active=lock[activeId];if(active){active.timer.c=null;active.timer.t=NaN;--lock.count;delete lock[activeId];active.event&&active.event.interrupt.call(node,node.__data__,active.index);}for(var cancelId in lock){if(+cancelId<id){var cancel=lock[cancelId];cancel.timer.c=null;cancel.timer.t=NaN;--lock.count;delete lock[cancelId];}}timer.c=tick;d3_timer(function(){if(timer.c&&tick(elapsed||1)){timer.c=null;timer.t=NaN;}return 1;},0,time);lock.active=id;transition.event&&transition.event.start.call(node,node.__data__,i);tweens=[];transition.tween.forEach(function(key,value){if(value=value.call(node,node.__data__,i)){tweens.push(value);}});ease=transition.ease;duration=transition.duration;}function tick(elapsed){var t=elapsed/duration,e=ease(t),n=tweens.length;while(n>0){tweens[--n].call(node,e);}if(t>=1){transition.event&&transition.event.end.call(node,node.__data__,i);if(--lock.count)delete lock[id];else delete node[ns];return 1;}}if(!transition){time=inherit.time;timer=d3_timer(schedule,0,time);transition=lock[id]={tween:new d3_Map(),time:time,timer:timer,delay:inherit.delay,duration:inherit.duration,ease:inherit.ease,index:i};inherit=null;++lock.count;}}d3.svg.axis=function(){var scale=d3.scale.linear(),orient=d3_svg_axisDefaultOrient,innerTickSize=6,outerTickSize=6,tickPadding=3,tickArguments_=[10],tickValues=null,tickFormat_;function axis(g){g.each(function(){var g=d3.select(this);var scale0=this.__chart__||scale,scale1=this.__chart__=scale.copy();var ticks=tickValues==null?scale1.ticks?scale1.ticks.apply(scale1,tickArguments_):scale1.domain():tickValues,tickFormat=tickFormat_==null?scale1.tickFormat?scale1.tickFormat.apply(scale1,tickArguments_):d3_identity:tickFormat_,tick=g.selectAll(".tick").data(ticks,scale1),tickEnter=tick.enter().insert("g",".domain").attr("class","tick").style("opacity",ε),tickExit=d3.transition(tick.exit()).style("opacity",ε).remove(),tickUpdate=d3.transition(tick.order()).style("opacity",1),tickSpacing=Math.max(innerTickSize,0)+tickPadding,tickTransform;var range=d3_scaleRange(scale1),path=g.selectAll(".domain").data([0]),pathUpdate=(path.enter().append("path").attr("class","domain"),d3.transition(path));tickEnter.append("line");tickEnter.append("text");var lineEnter=tickEnter.select("line"),lineUpdate=tickUpdate.select("line"),text=tick.select("text").text(tickFormat),textEnter=tickEnter.select("text"),textUpdate=tickUpdate.select("text"),sign=orient==="top"||orient==="left"?-1:1,x1,x2,y1,y2;if(orient==="bottom"||orient==="top"){tickTransform=d3_svg_axisX,x1="x",y1="y",x2="x2",y2="y2";text.attr("dy",sign<0?"0em":".71em").style("text-anchor","middle");pathUpdate.attr("d","M"+range[0]+","+sign*outerTickSize+"V0H"+range[1]+"V"+sign*outerTickSize);}else {tickTransform=d3_svg_axisY,x1="y",y1="x",x2="y2",y2="x2";text.attr("dy",".32em").style("text-anchor",sign<0?"end":"start");pathUpdate.attr("d","M"+sign*outerTickSize+","+range[0]+"H0V"+range[1]+"H"+sign*outerTickSize);}lineEnter.attr(y2,sign*innerTickSize);textEnter.attr(y1,sign*tickSpacing);lineUpdate.attr(x2,0).attr(y2,sign*innerTickSize);textUpdate.attr(x1,0).attr(y1,sign*tickSpacing);if(scale1.rangeBand){var x=scale1,dx=x.rangeBand()/2;scale0=scale1=function scale1(d){return x(d)+dx;};}else if(scale0.rangeBand){scale0=scale1;}else {tickExit.call(tickTransform,scale1,scale0);}tickEnter.call(tickTransform,scale0,scale1);tickUpdate.call(tickTransform,scale1,scale1);});}axis.scale=function(x){if(!arguments.length)return scale;scale=x;return axis;};axis.orient=function(x){if(!arguments.length)return orient;orient=x in d3_svg_axisOrients?x+"":d3_svg_axisDefaultOrient;return axis;};axis.ticks=function(){if(!arguments.length)return tickArguments_;tickArguments_=d3_array(arguments);return axis;};axis.tickValues=function(x){if(!arguments.length)return tickValues;tickValues=x;return axis;};axis.tickFormat=function(x){if(!arguments.length)return tickFormat_;tickFormat_=x;return axis;};axis.tickSize=function(x){var n=arguments.length;if(!n)return innerTickSize;innerTickSize=+x;outerTickSize=+arguments[n-1];return axis;};axis.innerTickSize=function(x){if(!arguments.length)return innerTickSize;innerTickSize=+x;return axis;};axis.outerTickSize=function(x){if(!arguments.length)return outerTickSize;outerTickSize=+x;return axis;};axis.tickPadding=function(x){if(!arguments.length)return tickPadding;tickPadding=+x;return axis;};axis.tickSubdivide=function(){return arguments.length&&axis;};return axis;};var d3_svg_axisDefaultOrient="bottom",d3_svg_axisOrients={top:1,right:1,bottom:1,left:1};function d3_svg_axisX(selection,x0,x1){selection.attr("transform",function(d){var v0=x0(d);return "translate("+(isFinite(v0)?v0:x1(d))+",0)";});}function d3_svg_axisY(selection,y0,y1){selection.attr("transform",function(d){var v0=y0(d);return "translate(0,"+(isFinite(v0)?v0:y1(d))+")";});}d3.svg.brush=function(){var event=d3_eventDispatch(brush,"brushstart","brush","brushend"),x=null,y=null,xExtent=[0,0],yExtent=[0,0],xExtentDomain,yExtentDomain,xClamp=true,yClamp=true,resizes=d3_svg_brushResizes[0];function brush(g){g.each(function(){var g=d3.select(this).style("pointer-events","all").style("-webkit-tap-highlight-color","rgba(0,0,0,0)").on("mousedown.brush",brushstart).on("touchstart.brush",brushstart);var background=g.selectAll(".background").data([0]);background.enter().append("rect").attr("class","background").style("visibility","hidden").style("cursor","crosshair");g.selectAll(".extent").data([0]).enter().append("rect").attr("class","extent").style("cursor","move");var resize=g.selectAll(".resize").data(resizes,d3_identity);resize.exit().remove();resize.enter().append("g").attr("class",function(d){return "resize "+d;}).style("cursor",function(d){return d3_svg_brushCursor[d];}).append("rect").attr("x",function(d){return (/[ew]$/.test(d)?-3:null);}).attr("y",function(d){return (/^[ns]/.test(d)?-3:null);}).attr("width",6).attr("height",6).style("visibility","hidden");resize.style("display",brush.empty()?"none":null);var gUpdate=d3.transition(g),backgroundUpdate=d3.transition(background),range;if(x){range=d3_scaleRange(x);backgroundUpdate.attr("x",range[0]).attr("width",range[1]-range[0]);redrawX(gUpdate);}if(y){range=d3_scaleRange(y);backgroundUpdate.attr("y",range[0]).attr("height",range[1]-range[0]);redrawY(gUpdate);}redraw(gUpdate);});}brush.event=function(g){g.each(function(){var event_=event.of(this,arguments),extent1={x:xExtent,y:yExtent,i:xExtentDomain,j:yExtentDomain},extent0=this.__chart__||extent1;this.__chart__=extent1;if(d3_transitionInheritId){d3.select(this).transition().each("start.brush",function(){xExtentDomain=extent0.i;yExtentDomain=extent0.j;xExtent=extent0.x;yExtent=extent0.y;event_({type:"brushstart"});}).tween("brush:brush",function(){var xi=d3_interpolateArray(xExtent,extent1.x),yi=d3_interpolateArray(yExtent,extent1.y);xExtentDomain=yExtentDomain=null;return function(t){xExtent=extent1.x=xi(t);yExtent=extent1.y=yi(t);event_({type:"brush",mode:"resize"});};}).each("end.brush",function(){xExtentDomain=extent1.i;yExtentDomain=extent1.j;event_({type:"brush",mode:"resize"});event_({type:"brushend"});});}else {event_({type:"brushstart"});event_({type:"brush",mode:"resize"});event_({type:"brushend"});}});};function redraw(g){g.selectAll(".resize").attr("transform",function(d){return "translate("+xExtent[+/e$/.test(d)]+","+yExtent[+/^s/.test(d)]+")";});}function redrawX(g){g.select(".extent").attr("x",xExtent[0]);g.selectAll(".extent,.n>rect,.s>rect").attr("width",xExtent[1]-xExtent[0]);}function redrawY(g){g.select(".extent").attr("y",yExtent[0]);g.selectAll(".extent,.e>rect,.w>rect").attr("height",yExtent[1]-yExtent[0]);}function brushstart(){var target=this,eventTarget=d3.select(d3.event.target),event_=event.of(target,arguments),g=d3.select(target),resizing=eventTarget.datum(),resizingX=!/^(n|s)$/.test(resizing)&&x,resizingY=!/^(e|w)$/.test(resizing)&&y,dragging=eventTarget.classed("extent"),dragRestore=d3_event_dragSuppress(target),center,origin=d3.mouse(target),offset;var w=d3.select(d3_window(target)).on("keydown.brush",keydown).on("keyup.brush",keyup);if(d3.event.changedTouches){w.on("touchmove.brush",brushmove).on("touchend.brush",brushend);}else {w.on("mousemove.brush",brushmove).on("mouseup.brush",brushend);}g.interrupt().selectAll("*").interrupt();if(dragging){origin[0]=xExtent[0]-origin[0];origin[1]=yExtent[0]-origin[1];}else if(resizing){var ex=+/w$/.test(resizing),ey=+/^n/.test(resizing);offset=[xExtent[1-ex]-origin[0],yExtent[1-ey]-origin[1]];origin[0]=xExtent[ex];origin[1]=yExtent[ey];}else if(d3.event.altKey)center=origin.slice();g.style("pointer-events","none").selectAll(".resize").style("display",null);d3.select("body").style("cursor",eventTarget.style("cursor"));event_({type:"brushstart"});brushmove();function keydown(){if(d3.event.keyCode==32){if(!dragging){center=null;origin[0]-=xExtent[1];origin[1]-=yExtent[1];dragging=2;}d3_eventPreventDefault();}}function keyup(){if(d3.event.keyCode==32&&dragging==2){origin[0]+=xExtent[1];origin[1]+=yExtent[1];dragging=0;d3_eventPreventDefault();}}function brushmove(){var point=d3.mouse(target),moved=false;if(offset){point[0]+=offset[0];point[1]+=offset[1];}if(!dragging){if(d3.event.altKey){if(!center)center=[(xExtent[0]+xExtent[1])/2,(yExtent[0]+yExtent[1])/2];origin[0]=xExtent[+(point[0]<center[0])];origin[1]=yExtent[+(point[1]<center[1])];}else center=null;}if(resizingX&&move1(point,x,0)){redrawX(g);moved=true;}if(resizingY&&move1(point,y,1)){redrawY(g);moved=true;}if(moved){redraw(g);event_({type:"brush",mode:dragging?"move":"resize"});}}function move1(point,scale,i){var range=d3_scaleRange(scale),r0=range[0],r1=range[1],position=origin[i],extent=i?yExtent:xExtent,size=extent[1]-extent[0],min,max;if(dragging){r0-=position;r1-=size+position;}min=(i?yClamp:xClamp)?Math.max(r0,Math.min(r1,point[i])):point[i];if(dragging){max=(min+=position)+size;}else {if(center)position=Math.max(r0,Math.min(r1,2*center[i]-min));if(position<min){max=min;min=position;}else {max=position;}}if(extent[0]!=min||extent[1]!=max){if(i)yExtentDomain=null;else xExtentDomain=null;extent[0]=min;extent[1]=max;return true;}}function brushend(){brushmove();g.style("pointer-events","all").selectAll(".resize").style("display",brush.empty()?"none":null);d3.select("body").style("cursor",null);w.on("mousemove.brush",null).on("mouseup.brush",null).on("touchmove.brush",null).on("touchend.brush",null).on("keydown.brush",null).on("keyup.brush",null);dragRestore();event_({type:"brushend"});}}brush.x=function(z){if(!arguments.length)return x;x=z;resizes=d3_svg_brushResizes[!x<<1|!y];return brush;};brush.y=function(z){if(!arguments.length)return y;y=z;resizes=d3_svg_brushResizes[!x<<1|!y];return brush;};brush.clamp=function(z){if(!arguments.length)return x&&y?[xClamp,yClamp]:x?xClamp:y?yClamp:null;if(x&&y)xClamp=!!z[0],yClamp=!!z[1];else if(x)xClamp=!!z;else if(y)yClamp=!!z;return brush;};brush.extent=function(z){var x0,x1,y0,y1,t;if(!arguments.length){if(x){if(xExtentDomain){x0=xExtentDomain[0],x1=xExtentDomain[1];}else {x0=xExtent[0],x1=xExtent[1];if(x.invert)x0=x.invert(x0),x1=x.invert(x1);if(x1<x0)t=x0,x0=x1,x1=t;}}if(y){if(yExtentDomain){y0=yExtentDomain[0],y1=yExtentDomain[1];}else {y0=yExtent[0],y1=yExtent[1];if(y.invert)y0=y.invert(y0),y1=y.invert(y1);if(y1<y0)t=y0,y0=y1,y1=t;}}return x&&y?[[x0,y0],[x1,y1]]:x?[x0,x1]:y&&[y0,y1];}if(x){x0=z[0],x1=z[1];if(y)x0=x0[0],x1=x1[0];xExtentDomain=[x0,x1];if(x.invert)x0=x(x0),x1=x(x1);if(x1<x0)t=x0,x0=x1,x1=t;if(x0!=xExtent[0]||x1!=xExtent[1])xExtent=[x0,x1];}if(y){y0=z[0],y1=z[1];if(x)y0=y0[1],y1=y1[1];yExtentDomain=[y0,y1];if(y.invert)y0=y(y0),y1=y(y1);if(y1<y0)t=y0,y0=y1,y1=t;if(y0!=yExtent[0]||y1!=yExtent[1])yExtent=[y0,y1];}return brush;};brush.clear=function(){if(!brush.empty()){xExtent=[0,0],yExtent=[0,0];xExtentDomain=yExtentDomain=null;}return brush;};brush.empty=function(){return !!x&&xExtent[0]==xExtent[1]||!!y&&yExtent[0]==yExtent[1];};return d3.rebind(brush,event,"on");};var d3_svg_brushCursor={n:"ns-resize",e:"ew-resize",s:"ns-resize",w:"ew-resize",nw:"nwse-resize",ne:"nesw-resize",se:"nwse-resize",sw:"nesw-resize"};var d3_svg_brushResizes=[["n","e","s","w","nw","ne","se","sw"],["e","w"],["n","s"],[]];var d3_time_format=d3_time.format=d3_locale_enUS.timeFormat;var d3_time_formatUtc=d3_time_format.utc;var d3_time_formatIso=d3_time_formatUtc("%Y-%m-%dT%H:%M:%S.%LZ");d3_time_format.iso=Date.prototype.toISOString&&+new Date("2000-01-01T00:00:00.000Z")?d3_time_formatIsoNative:d3_time_formatIso;function d3_time_formatIsoNative(date){return date.toISOString();}d3_time_formatIsoNative.parse=function(string){var date=new Date(string);return isNaN(date)?null:date;};d3_time_formatIsoNative.toString=d3_time_formatIso.toString;d3_time.second=d3_time_interval(function(date){return new d3_date(Math.floor(date/1e3)*1e3);},function(date,offset){date.setTime(date.getTime()+Math.floor(offset)*1e3);},function(date){return date.getSeconds();});d3_time.seconds=d3_time.second.range;d3_time.seconds.utc=d3_time.second.utc.range;d3_time.minute=d3_time_interval(function(date){return new d3_date(Math.floor(date/6e4)*6e4);},function(date,offset){date.setTime(date.getTime()+Math.floor(offset)*6e4);},function(date){return date.getMinutes();});d3_time.minutes=d3_time.minute.range;d3_time.minutes.utc=d3_time.minute.utc.range;d3_time.hour=d3_time_interval(function(date){var timezone=date.getTimezoneOffset()/60;return new d3_date((Math.floor(date/36e5-timezone)+timezone)*36e5);},function(date,offset){date.setTime(date.getTime()+Math.floor(offset)*36e5);},function(date){return date.getHours();});d3_time.hours=d3_time.hour.range;d3_time.hours.utc=d3_time.hour.utc.range;d3_time.month=d3_time_interval(function(date){date=d3_time.day(date);date.setDate(1);return date;},function(date,offset){date.setMonth(date.getMonth()+offset);},function(date){return date.getMonth();});d3_time.months=d3_time.month.range;d3_time.months.utc=d3_time.month.utc.range;function d3_time_scale(linear,methods,format){function scale(x){return linear(x);}scale.invert=function(x){return d3_time_scaleDate(linear.invert(x));};scale.domain=function(x){if(!arguments.length)return linear.domain().map(d3_time_scaleDate);linear.domain(x);return scale;};function tickMethod(extent,count){var span=extent[1]-extent[0],target=span/count,i=d3.bisect(d3_time_scaleSteps,target);return i==d3_time_scaleSteps.length?[methods.year,d3_scale_linearTickRange(extent.map(function(d){return d/31536e6;}),count)[2]]:!i?[d3_time_scaleMilliseconds,d3_scale_linearTickRange(extent,count)[2]]:methods[target/d3_time_scaleSteps[i-1]<d3_time_scaleSteps[i]/target?i-1:i];}scale.nice=function(interval,skip){var domain=scale.domain(),extent=d3_scaleExtent(domain),method=interval==null?tickMethod(extent,10):typeof interval==="number"&&tickMethod(extent,interval);if(method)interval=method[0],skip=method[1];function skipped(date){return !isNaN(date)&&!interval.range(date,d3_time_scaleDate(+date+1),skip).length;}return scale.domain(d3_scale_nice(domain,skip>1?{floor:function floor(date){while(skipped(date=interval.floor(date))){date=d3_time_scaleDate(date-1);}return date;},ceil:function ceil(date){while(skipped(date=interval.ceil(date))){date=d3_time_scaleDate(+date+1);}return date;}}:interval));};scale.ticks=function(interval,skip){var extent=d3_scaleExtent(scale.domain()),method=interval==null?tickMethod(extent,10):typeof interval==="number"?tickMethod(extent,interval):!interval.range&&[{range:interval},skip];if(method)interval=method[0],skip=method[1];return interval.range(extent[0],d3_time_scaleDate(+extent[1]+1),skip<1?1:skip);};scale.tickFormat=function(){return format;};scale.copy=function(){return d3_time_scale(linear.copy(),methods,format);};return d3_scale_linearRebind(scale,linear);}function d3_time_scaleDate(t){return new Date(t);}var d3_time_scaleSteps=[1e3,5e3,15e3,3e4,6e4,3e5,9e5,18e5,36e5,108e5,216e5,432e5,864e5,1728e5,6048e5,2592e6,7776e6,31536e6];var d3_time_scaleLocalMethods=[[d3_time.second,1],[d3_time.second,5],[d3_time.second,15],[d3_time.second,30],[d3_time.minute,1],[d3_time.minute,5],[d3_time.minute,15],[d3_time.minute,30],[d3_time.hour,1],[d3_time.hour,3],[d3_time.hour,6],[d3_time.hour,12],[d3_time.day,1],[d3_time.day,2],[d3_time.week,1],[d3_time.month,1],[d3_time.month,3],[d3_time.year,1]];var d3_time_scaleLocalFormat=d3_time_format.multi([[".%L",function(d){return d.getMilliseconds();}],[":%S",function(d){return d.getSeconds();}],["%I:%M",function(d){return d.getMinutes();}],["%I %p",function(d){return d.getHours();}],["%a %d",function(d){return d.getDay()&&d.getDate()!=1;}],["%b %d",function(d){return d.getDate()!=1;}],["%B",function(d){return d.getMonth();}],["%Y",d3_true]]);var d3_time_scaleMilliseconds={range:function range(start,stop,step){return d3.range(Math.ceil(start/step)*step,+stop,step).map(d3_time_scaleDate);},floor:d3_identity,ceil:d3_identity};d3_time_scaleLocalMethods.year=d3_time.year;d3_time.scale=function(){return d3_time_scale(d3.scale.linear(),d3_time_scaleLocalMethods,d3_time_scaleLocalFormat);};var d3_time_scaleUtcMethods=d3_time_scaleLocalMethods.map(function(m){return [m[0].utc,m[1]];});var d3_time_scaleUtcFormat=d3_time_formatUtc.multi([[".%L",function(d){return d.getUTCMilliseconds();}],[":%S",function(d){return d.getUTCSeconds();}],["%I:%M",function(d){return d.getUTCMinutes();}],["%I %p",function(d){return d.getUTCHours();}],["%a %d",function(d){return d.getUTCDay()&&d.getUTCDate()!=1;}],["%b %d",function(d){return d.getUTCDate()!=1;}],["%B",function(d){return d.getUTCMonth();}],["%Y",d3_true]]);d3_time_scaleUtcMethods.year=d3_time.year.utc;d3_time.scale.utc=function(){return d3_time_scale(d3.scale.linear(),d3_time_scaleUtcMethods,d3_time_scaleUtcFormat);};d3.text=d3_xhrType(function(request){return request.responseText;});d3.json=function(url,callback){return d3_xhr(url,"application/json",d3_json,callback);};function d3_json(request){return JSON.parse(request.responseText);}d3.html=function(url,callback){return d3_xhr(url,"text/html",d3_html,callback);};function d3_html(request){var range=d3_document.createRange();range.selectNode(d3_document.body);return range.createContextualFragment(request.responseText);}d3.xml=d3_xhrType(function(request){return request.responseXML;});if(true)this.d3=d3,!(__WEBPACK_AMD_DEFINE_FACTORY__ = (d3), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if((typeof module==="undefined"?"undefined":_typeof(module))==="object"&&module.exports)module.exports=d3;else this.d3=d3;}();

/***/ },
/* 162 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);