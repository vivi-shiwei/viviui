"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@chakra-ui/core");

var _reactInfiniteScroller = _interopRequireDefault(require("react-infinite-scroller"));

const InfiniteScrollComponent = ({
  children,
  loadMore,
  hasMore
}) => /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactInfiniteScroller.default, {
  loadMore: loadMore,
  hasMore: hasMore,
  threshold: 750,
  initialLoad: false,
  loader: /*#__PURE__*/_react.default.createElement(_core.Box, {
    key: "loader",
    d: "flex",
    m: 3,
    justifyContent: "center"
  }, /*#__PURE__*/_react.default.createElement(_core.Spinner, null))
}, children), /*#__PURE__*/_react.default.createElement("style", {
  jsx: true
}, `
      div, div > div {
        width: 100%
      }
    `));

var _default = InfiniteScrollComponent;
exports.default = _default;