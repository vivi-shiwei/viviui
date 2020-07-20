"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@chakra-ui/core");

var _containerPage = require("./containerPage");

const clsPage = (_ref) => {
  let {
    classes,
    clsImage,
    noDivider = false,
    title,
    noTitle = false,
    left,
    right,
    button,
    PostCard,
    children
  } = _ref,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["classes", "clsImage", "noDivider", "title", "noTitle", "left", "right", "button", "PostCard", "children"]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_core.Box, rest, /*#__PURE__*/_react.default.createElement(_containerPage.Container, null, /*#__PURE__*/_react.default.createElement(_core.Box, {
    as: "header",
    textAlign: "center"
  }, !!classes && /*#__PURE__*/_react.default.createElement(_core.Box, {
    d: "flex",
    alignItems: "center",
    justifyContent: "center"
  }, !!classes && /*#__PURE__*/_react.default.createElement(_core.Heading, {
    textAlign: "center",
    fontSize: {
      base: '20px',
      sm: '25px',
      md: '32px'
    },
    mx: 4
  }, classes)), clsImage, !!button && /*#__PURE__*/_react.default.createElement(_core.Box, {
    d: "flex",
    justifyContent: "center"
  }, button)))), /*#__PURE__*/_react.default.createElement(_core.Box, {
    py: 4
  }, (!!title || !!left || !!right) && /*#__PURE__*/_react.default.createElement(_core.Box, {
    position: "relative",
    mx: "auto",
    px: 2,
    mb: children ? 8 : 0
  }, /*#__PURE__*/_react.default.createElement(_core.Flex, {
    justify: "center",
    align: "center"
  }, !!left && /*#__PURE__*/_react.default.createElement(_core.Flex, {
    bg: "white",
    zIndex: "1",
    position: "absolute",
    top: "50%",
    left: " 0",
    transform: " translate(0, -50%)"
  }, left), !noTitle ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !noDivider && /*#__PURE__*/_react.default.createElement(_core.Box, {
    borderBottom: "1px solid #aaa6a6",
    w: "95%",
    position: "absolute",
    zIndex: "0"
  }), /*#__PURE__*/_react.default.createElement(_core.Heading, {
    fontSize: {
      base: '2xl',
      sm: '3xl',
      md: '4xl'
    },
    position: "relative",
    textAlign: "center",
    bg: "white"
  }, title || '貼文')) : '', !!right && /*#__PURE__*/_react.default.createElement(_core.Box, {
    bg: "white",
    zIndex: "1",
    position: "absolute",
    top: "50%",
    right: " 0",
    transform: " translate(0, -50%)"
  }, right)), children), children));
};

var _default = clsPage;
exports.default = _default;