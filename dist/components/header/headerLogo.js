"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _core = require("@chakra-ui/core");

var _link = _interopRequireDefault(require("next/link"));

const HeaderLogo = (_ref) => {
  let {
    icon,
    href,
    children
  } = _ref,
      props = (0, _objectWithoutProperties2.default)(_ref, ["icon", "href", "children"]);
  return /*#__PURE__*/_react.default.createElement(_core.Flex, (0, _extends2.default)({
    justify: "flex-start",
    flex: "-1"
  }, props), /*#__PURE__*/_react.default.createElement(_link.default, {
    href: href || '/',
    passHref: true
  }, /*#__PURE__*/_react.default.createElement(_core.Box, {
    as: "a",
    d: "block"
  }, icon, children)));
};

var _default = /*#__PURE__*/(0, _react.memo)(HeaderLogo);

exports.default = _default;