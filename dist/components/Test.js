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

const Testpages = (_ref) => {
  let {
    logo,
    text
  } = _ref,
      props = (0, _objectWithoutProperties2.default)(_ref, ["logo", "text"]);
  return /*#__PURE__*/_react.default.createElement(_containerPage.Container, props, /*#__PURE__*/_react.default.createElement(_core.Flex, {
    size: "100%",
    px: {
      base: 0,
      sm: 2,
      md: 4
    },
    align: "center",
    justify: "space-between"
  }, !!logo && /*#__PURE__*/_react.default.createElement(_core.Box, {
    alignItems: "center"
  }, !!logo && /*#__PURE__*/_react.default.createElement(_core.Box, null, logo)), /*#__PURE__*/_react.default.createElement(_core.Box, {
    d: "flex",
    justifyContent: "center",
    mx: "auto",
    w: "300px",
    textAlign: "center"
  }, text)));
};

var _default = Testpages;
exports.default = _default;