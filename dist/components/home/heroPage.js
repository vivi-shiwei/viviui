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

var _containerPage = require("../containerPage");

const Hero = (_ref) => {
  let {
    title,
    subtitle,
    children,
    noBottomBorder = false,
    leftButton = null,
    rightButton = null
  } = _ref,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["title", "subtitle", "children", "noBottomBorder", "leftButton", "rightButton"]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_core.Box, (0, _extends2.default)({
    as: "section",
    pt: 40,
    pb: 24
  }, rest), /*#__PURE__*/_react.default.createElement(_containerPage.Container, null, /*#__PURE__*/_react.default.createElement(_core.Box, {
    maxW: "xl",
    mx: "auto",
    textAlign: "center"
  }, !!title && /*#__PURE__*/_react.default.createElement(_core.Heading, {
    as: "h1",
    size: "xl",
    fontWeight: "semibold"
  }, title), !!subtitle && /*#__PURE__*/_react.default.createElement(_core.Text, {
    opacity: "0.7",
    fontSize: "xl",
    mt: title ? 6 : 0
  }, subtitle), (!!children || !!leftButton || !!rightButton) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_core.Box, {
    mt: title || subtitle ? 4 : 0
  }, leftButton, rightButton), /*#__PURE__*/_react.default.createElement(_core.Box, {
    mt: title || subtitle || leftButton || rightButton ? 4 : 0
  }, children))))), !noBottomBorder && /*#__PURE__*/_react.default.createElement(_core.Divider, {
    my: 16
  }));
};

var _default = Hero;
exports.default = _default;