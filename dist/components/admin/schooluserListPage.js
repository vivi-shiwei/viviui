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

const SchooluserList = (_ref) => {
  let {
    deleteButton = false,
    editButton = false,
    profilePhoto,
    isTeacher,
    isAdmin,
    isDirector,
    noDivider = false,
    currentClsMember,
    isStudent,
    name,
    clsName,
    currentClsMemberNum,
    children
  } = _ref,
      props = (0, _objectWithoutProperties2.default)(_ref, ["deleteButton", "editButton", "profilePhoto", "isTeacher", "isAdmin", "isDirector", "noDivider", "currentClsMember", "isStudent", "name", "clsName", "currentClsMemberNum", "children"]);
  return /*#__PURE__*/_react.default.createElement(_core.Box, null, /*#__PURE__*/_react.default.createElement(_core.Box, (0, _extends2.default)({
    d: "flex",
    justifyContent: "space-between",
    px: {
      base: '1.25rem',
      sm: '1.25rem',
      md: '1.25rem',
      lg: 0
    }
  }, props), /*#__PURE__*/_react.default.createElement(_core.Box, {
    d: "flex"
  }, !!profilePhoto && /*#__PURE__*/_react.default.createElement(_core.Box, {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    overflow: " hidden",
    rounded: "full",
    background: "#6893d1",
    mr: 4,
    lineHeight: "40px",
    fontSize: "15px",
    fontWeight: "500",
    textAlign: "center"
  }, /*#__PURE__*/_react.default.createElement(_core.Image, {
    src: profilePhoto,
    size: "100%",
    objectFit: "cover"
  })), (!!name || !!isTeacher || !!isAdmin || !!isDirector || !!isTeacher || !!currentClsMember || !!clsName || !!currentClsMemberNum) && /*#__PURE__*/_react.default.createElement(_core.Box, {
    as: "div",
    lineHeight: "40px"
  }, /*#__PURE__*/_react.default.createElement(_core.Box, {
    as: "div",
    d: {
      base: 'block',
      sm: 'flex'
    }
  }, "\u59D3\u540D\uFF1A", name, /*#__PURE__*/_react.default.createElement(_core.Box, {
    as: "div"
  }, isTeacher ? '（老師）' : isAdmin ? '（管理員）' : isDirector ? '（學校負責人）' : isTeacher ? '（老師）' : '', isStudent ? currentClsMember ? /*#__PURE__*/_react.default.createElement(_core.Box, {
    as: "span",
    d: {
      base: 'none',
      md: 'block'
    }
  }, "\uFF08\u5B78\u751F\uFF09") : /*#__PURE__*/_react.default.createElement(_core.Box, {
    as: "span"
  }, "\uFF08\u5B78\u751F\uFF09") : '')), !isTeacher && /*#__PURE__*/_react.default.createElement(_core.Box, {
    as: "div",
    alignItems: "center"
  }, /*#__PURE__*/_react.default.createElement(_core.Box, {
    as: "div"
  }, `班級：${clsName}`), /*#__PURE__*/_react.default.createElement(_core.Box, {
    as: "div"
  }, "\u5B78\u865F\uFF1A", currentClsMemberNum), /*#__PURE__*/_react.default.createElement(_core.Box, {
    as: "div",
    d: {
      base: 'block',
      md: 'none'
    }
  }, "\uFF08\u5B78\u751F\uFF09")))), /*#__PURE__*/_react.default.createElement(_core.Box, {
    d: "flex"
  }, !editButton && /*#__PURE__*/_react.default.createElement(_core.IconButton, {
    icon: "edit",
    variantColor: "blue",
    mr: 3
  }), !deleteButton && /*#__PURE__*/_react.default.createElement(_core.IconButton, {
    variantColor: "red",
    icon: "delete"
  }))), children, !noDivider && /*#__PURE__*/_react.default.createElement(_core.Divider, {
    my: 6
  }));
};

var _default = SchooluserList;
exports.default = _default;