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

const formikLayout = (_ref) => {
  let {
    children
  } = _ref,
      props = (0, _objectWithoutProperties2.default)(_ref, ["children"]);
  return /*#__PURE__*/_react.default.createElement(_core.Box, (0, _extends2.default)({
    as: "article",
    px: {
      base: 8,
      sm: 8,
      md: 16
    },
    pb: 16
  }, props), children);
};

var _default = formikLayout;
exports.default = _default;