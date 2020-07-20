"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Container = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@chakra-ui/core");

const Container = props => /*#__PURE__*/_react.default.createElement(_core.Box, (0, _extends2.default)({
  width: "full",
  maxWidth: "1280px",
  mx: "auto",
  px: 2
}, props));

exports.Container = Container;