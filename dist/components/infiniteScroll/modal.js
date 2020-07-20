"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _core = require("@chakra-ui/core");

var _reactInfiniteScroller = _interopRequireDefault(require("react-infinite-scroller"));

const InfiniteScrollComponent = ({
  children,
  loadMore,
  hasMore
}) => {
  const scrollParentRef = (0, _react.useRef)(null);
  return /*#__PURE__*/_react.default.createElement("div", {
    ref: scrollParentRef,
    style: {
      height: '100%',
      overflowY: 'auto'
    }
  }, /*#__PURE__*/_react.default.createElement(_reactInfiniteScroller.default, {
    initialLoad: true,
    pageStart: 0,
    loadMore: loadMore,
    hasMore: hasMore,
    useWindow: false,
    getScrollParent: () => scrollParentRef.current,
    loader: /*#__PURE__*/_react.default.createElement(_core.Box, {
      key: 0,
      d: "flex",
      m: 3,
      justifyContent: "center"
    }, /*#__PURE__*/_react.default.createElement(_core.Spinner, null))
  }, children));
};

var _default = InfiniteScrollComponent;
exports.default = _default;