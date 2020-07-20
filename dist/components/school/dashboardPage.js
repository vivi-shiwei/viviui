"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Card = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@chakra-ui/core");

var _containerPage = require("../containerPage");

const Card = (_ref) => {
  let {
    left,
    right,
    title,
    plate,
    noDivider = false,
    moreButton,
    children
  } = _ref,
      props = (0, _objectWithoutProperties2.default)(_ref, ["left", "right", "title", "plate", "noDivider", "moreButton", "children"]);
  return /*#__PURE__*/_react.default.createElement(_containerPage.Container, (0, _extends2.default)({}, props, {
    pd: 4,
    maxWidth: "960px"
  }), (!!title || !!left || !!right) && /*#__PURE__*/_react.default.createElement(_core.Box, {
    position: "relative",
    mx: "auto",
    px: 2
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
  }, left), !noDivider && /*#__PURE__*/_react.default.createElement(_core.Box, {
    borderBottom: "1px solid #aaa6a6",
    w: "100%",
    position: "absolute",
    zIndex: "0"
  }), !!title && /*#__PURE__*/_react.default.createElement(_core.Heading, {
    fontSize: {
      base: '2xl',
      sm: '3xl',
      md: '4xl'
    },
    position: "relative",
    textAlign: "center",
    bg: "white"
  }, title), !!right && /*#__PURE__*/_react.default.createElement(_core.Box, {
    bg: "white",
    zIndex: "1",
    position: "absolute",
    top: "50%",
    right: " 0",
    transform: " translate(0, -50%)"
  }, right))), !!plate && /*#__PURE__*/_react.default.createElement(_core.Box, {
    as: "section",
    textAlign: "center",
    mt: 3
  }, plate), moreButton, children);
};

exports.Card = Card;

const Dashboard = (_ref2) => {
  let {
    isAdmin,
    backurl,
    left,
    right,
    children,
    dashboards
  } = _ref2,
      props = (0, _objectWithoutProperties2.default)(_ref2, ["isAdmin", "backurl", "left", "right", "children", "dashboards"]);
  return /*#__PURE__*/_react.default.createElement(_core.Box, (0, _extends2.default)({
    as: "main"
  }, props), /*#__PURE__*/_react.default.createElement(_containerPage.Container, null, !!isAdmin && /*#__PURE__*/_react.default.createElement(_core.Box, {
    d: {
      base: 'none',
      sm: 'none',
      md: 'flex'
    },
    justifyContent: "flex-end"
  }, isAdmin), (!!dashboards || !!left || !!right) && /*#__PURE__*/_react.default.createElement(_core.Box, {
    display: "flex",
    justifyContent: "center",
    m: "auto"
  }, left, dashboards, right), children, !!isAdmin && /*#__PURE__*/_react.default.createElement(_core.Box, {
    d: {
      base: 'flex',
      sm: 'flex',
      md: 'none'
    },
    justifyContent: "center"
  }, isAdmin)));
};

var _default = Dashboard;
exports.default = _default;