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

const Admin = (_ref) => {
  let {
    backurl,
    button = null,
    schoolname,
    dashboradname,
    tabNames,
    children,
    divider,
    title
  } = _ref,
      props = (0, _objectWithoutProperties2.default)(_ref, ["backurl", "button", "schoolname", "dashboradname", "tabNames", "children", "divider", "title"]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_core.Box, (0, _extends2.default)({
    as: "main"
  }, props), !!backurl && /*#__PURE__*/_react.default.createElement(_core.Box, {
    mx: "auto",
    h: "45px",
    w: "100%",
    d: "flex",
    alignItems: "center",
    justifyContent: "center",
    roundedTopLeft: "4px",
    roundedTopRight: "4px"
  }, backurl), title || button || tabNames || schoolname ? /*#__PURE__*/_react.default.createElement(_core.Box, {
    as: "div",
    w: {
      base: '100%',
      md: '90%'
    },
    mt: "2px",
    mx: "auto",
    bg: "white",
    minH: "100vh",
    maxWidth: "928px",
    borderRadius: "4px 4px 0 0",
    position: "relative",
    boxShadow: {
      base: '',
      sm: '',
      md: '0 -1px 10px rgba(0,0,0,0.05), 0 1px 4px rgba(0,0,0,0.1), 0 10px 30px #f3ece8'
    }
  }, /*#__PURE__*/_react.default.createElement(_core.Box, {
    pt: "1px"
  }, /*#__PURE__*/_react.default.createElement(_core.Box, {
    as: "section",
    mx: "auto",
    w: "100%",
    maxW: {
      base: '100%',
      sm: '100%',
      md: '800px'
    },
    backgroundColor: "white",
    rounded: 8,
    transition: "0.3s"
  }, (title || button || schoolname) && /*#__PURE__*/_react.default.createElement(_core.Box, {
    as: "header",
    m: "auto",
    mt: children ? 8 : 0
  }, !!title && /*#__PURE__*/_react.default.createElement(_core.Heading, {
    as: "h2",
    textAlign: "center",
    size: "lg",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  }, title), !!schoolname && /*#__PURE__*/_react.default.createElement(_core.Heading, {
    textAlign: "center",
    fontSize: {
      base: '17px',
      md: '25px'
    },
    mt: 5,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  }, schoolname, !!dashboradname && /*#__PURE__*/_react.default.createElement(_core.Box, {
    as: "span",
    display: {
      base: 'none',
      sm: 'none',
      md: 'inline-block'
    }
  }, "\uFF08", dashboradname, "\uFF09")), button), !!tabNames && /*#__PURE__*/_react.default.createElement(_core.Box, {
    overflowX: "auto"
  }, tabNames), !!divider && /*#__PURE__*/_react.default.createElement(_core.Divider, {
    my: 6,
    d: {
      base: 'none',
      md: 'flex'
    }
  }), children))) : /*#__PURE__*/_react.default.createElement(_containerPage.Container, null, /*#__PURE__*/_react.default.createElement(_core.Box, {
    mt: 4
  }, children))));
};

var _default = Admin;
exports.default = _default;