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

const DrawerItemButton = (_ref) => {
  let {
    title,
    icon,
    href,
    children
  } = _ref,
      props = (0, _objectWithoutProperties2.default)(_ref, ["title", "icon", "href", "children"]);
  return /*#__PURE__*/_react.default.createElement(_core.Button, (0, _extends2.default)({
    variantColor: "black",
    border: "none",
    variant: "outline",
    width: "100%",
    justifyContent: "flex-start",
    _hover: {
      ml: '2px'
    },
    _focus: {
      bg: 'teal'
    }
  }, props), !!icon && /*#__PURE__*/_react.default.createElement(_core.Box, {
    m: 0,
    mr: "8px"
  }, /*#__PURE__*/_react.default.createElement(_core.Box, {
    as: icon,
    size: "1.5em"
  }) || /*#__PURE__*/_react.default.createElement(_core.Icon, {
    name: icon
  })), children);
};

var _default = /*#__PURE__*/(0, _react.memo)(DrawerItemButton);

exports.default = _default;