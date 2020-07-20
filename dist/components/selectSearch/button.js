"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CenterButton = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@chakra-ui/core");

var _link = _interopRequireDefault(require("next/link"));

// 随内容撑开居中button
const CenterButton = (_ref) => {
  let {
    title,
    children
  } = _ref,
      props = (0, _objectWithoutProperties2.default)(_ref, ["title", "children"]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !!title && /*#__PURE__*/_react.default.createElement(_core.Box, {
    as: "button",
    p: "5px 10px",
    align: "center",
    fontSize: {
      base: 'xs',
      sm: 'md',
      md: 'lg'
    },
    px: {
      base: 1,
      sm: 4
    },
    rounded: "20px",
    background: "green",
    color: "white",
    fontWeight: "500"
  }, title), children);
};

exports.CenterButton = CenterButton;