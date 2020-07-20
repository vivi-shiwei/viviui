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

const HeaderRight = (_ref) => {
  let {
    logo,
    profilePhoto,
    MenuTest,
    noColormode = false,
    disclosure,
    children
  } = _ref,
      props = (0, _objectWithoutProperties2.default)(_ref, ["logo", "profilePhoto", "MenuTest", "noColormode", "disclosure", "children"]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_core.Flex, (0, _extends2.default)({
    align: "center",
    justify: "flex-end",
    mr: 0
  }, props), children));
};

var _default = /*#__PURE__*/(0, _react.memo)(HeaderRight);

exports.default = _default;