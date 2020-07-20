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

const adminList = (_ref) => {
  let {
    children,
    title
  } = _ref,
      props = (0, _objectWithoutProperties2.default)(_ref, ["children", "title"]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_core.Box, (0, _extends2.default)({
    as: "article",
    px: "5%"
  }, props), /*#__PURE__*/_react.default.createElement(_core.Heading, {
    as: "h3",
    fontSize: {
      base: '15px',
      sm: '1rem'
    },
    mt: 10,
    mb: 4
  }, title), children));
};

var _default = adminList;
exports.default = _default;