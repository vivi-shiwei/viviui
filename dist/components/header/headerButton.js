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

const HeaderButton = (_ref) => {
  let {
    title,
    icon,
    href,
    children
  } = _ref,
      props = (0, _objectWithoutProperties2.default)(_ref, ["title", "icon", "href", "children"]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_core.Button, (0, _extends2.default)({
    as: "a",
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
    display: {
      base: 'none',
      sm: 'none',
      md: 'flex'
    },
    variantColor: "gray",
    variant: "ghost",
    color: "gray.500"
  }, props), !!icon && /*#__PURE__*/_react.default.createElement(_core.Box, {
    m: 0,
    ml: {
      base: 0,
      md: -1
    },
    mr: {
      base: 0,
      md: 1
    }
  }, /*#__PURE__*/_react.default.createElement(_core.Box, {
    as: icon,
    size: "1.5em"
  }) || /*#__PURE__*/_react.default.createElement(_core.Icon, {
    name: icon
  })), title), children);
};

var _default = /*#__PURE__*/(0, _react.memo)(HeaderButton);

exports.default = _default;