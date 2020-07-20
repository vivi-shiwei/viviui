"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GridFooter = exports.OddFeature = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@chakra-ui/core");

var _containerPage = require("../containerPage");

const OddFeature = (_ref) => {
  let {
    title,
    icon,
    subtitle,
    children
  } = _ref,
      props = (0, _objectWithoutProperties2.default)(_ref, ["title", "icon", "subtitle", "children"]);
  return /*#__PURE__*/_react.default.createElement(_core.Box, props, !!icon && /*#__PURE__*/_react.default.createElement(_core.Flex, {
    rounded: "full",
    size: 12,
    bg: "blue.500",
    align: "center",
    justify: "center"
  }, icon || /*#__PURE__*/_react.default.createElement(_core.Box, {
    size: 6,
    color: "white",
    as: icon
  })), !!title && /*#__PURE__*/_react.default.createElement(_core.Heading, {
    as: "h2",
    size: "md",
    fontWeight: "semibold",
    mt: "1em",
    mb: "0.5em"
  }, title), !!subtitle && /*#__PURE__*/_react.default.createElement(_core.Text, null, subtitle), children);
};

exports.OddFeature = OddFeature;

const GridFooter = (_ref2) => {
  let {
    children,
    noBottomBorder = false,
    gap
  } = _ref2,
      props = (0, _objectWithoutProperties2.default)(_ref2, ["children", "noBottomBorder", "gap"]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_containerPage.Container, props, children.length > 4 && /*#__PURE__*/_react.default.createElement(_core.Grid, {
    templateColumns: ['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(4, 1fr)'],
    gap: gap || 8,
    px: {
      md: 12
    }
  }, children), children.length <= 4 && /*#__PURE__*/_react.default.createElement(_core.Grid, {
    templateColumns: {
      sm: 'repeat(1, 1fr)',
      md: `repeat(${children.length}, 1fr)`
    },
    gap: gap || 8,
    px: {
      md: 12
    }
  }, children)), !noBottomBorder && /*#__PURE__*/_react.default.createElement(_core.Divider, {
    my: 16
  }));
};

exports.GridFooter = GridFooter;