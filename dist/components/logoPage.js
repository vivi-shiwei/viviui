"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@chakra-ui/core");

var _link = _interopRequireDefault(require("next/link"));

const Logo = (_ref) => {
  let {
    text,
    icon
  } = _ref,
      props = (0, _objectWithoutProperties2.default)(_ref, ["text", "icon"]);
  return /*#__PURE__*/_react.default.createElement(_link.default, {
    href: "/",
    passHref: true
  }, /*#__PURE__*/_react.default.createElement(_core.Link, (0, _extends2.default)({
    _hover: {
      textDecor: 'none'
    },
    borderRadius: "md",
    display: "block",
    "aria-label": "Chakra UI, Back to homepage"
  }, props), /*#__PURE__*/_react.default.createElement(_core.Flex, (0, _extends2.default)({
    height: "8",
    width: "auto",
    viewBox: "0 0 998 257",
    fill: "none"
  }, props), !!icon && /*#__PURE__*/_react.default.createElement(_core.Flex, {
    rounded: "full",
    size: 10,
    bg: "teal.500",
    align: "center",
    justify: "center"
  }, /*#__PURE__*/_react.default.createElement(_core.Box, {
    as: icon,
    size: 6,
    color: "white"
  })), !!text && /*#__PURE__*/_react.default.createElement(_core.Text, {
    ml: 4,
    fontSize: 30
  }, text))));
};

var _default = Logo;
exports.default = _default;