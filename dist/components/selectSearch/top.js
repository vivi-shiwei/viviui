"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@chakra-ui/core");

var _containerPage = require("../containerPage");

var _DocsHeaderPage = require("../DocsHeaderPage");

var _md = require("react-icons/md");

var _fi = require("react-icons/fi");

// logo接受logo文字或圖片  text接受top中部佈局的盒子
const Testpages = (_ref) => {
  let {
    logoimgurl,
    logo,
    text,
    children
  } = _ref,
      props = (0, _objectWithoutProperties2.default)(_ref, ["logoimgurl", "logo", "text", "children"]);

  const Logo = props => /*#__PURE__*/_react.default.createElement(_core.Box, {
    as: "a",
    href: "#"
  }, props.icon);

  return /*#__PURE__*/_react.default.createElement(_containerPage.Container, props, /*#__PURE__*/_react.default.createElement(_DocsHeaderPage.Header, {
    bg: "#BBFFFF",
    pl: "-24px"
  }, /*#__PURE__*/_react.default.createElement(_core.Flex, {
    size: "100%",
    px: {
      base: 0,
      sm: 4,
      md: 6
    },
    align: "center",
    justify: "space-between"
  }, (!!logo || !!logoimgurl) && /*#__PURE__*/_react.default.createElement(_core.Box, {
    display: "flex",
    alignItems: "center"
  }, !!logo && /*#__PURE__*/_react.default.createElement(_core.Box, {
    fontSize: "3xl",
    fontWeight: "semibold"
  }, logo)), /*#__PURE__*/_react.default.createElement(_core.Box, {
    display: {
      md: ' flex',
      sm: 'flex',
      base: 'none'
    },
    justifyContent: "center",
    mx: "auto",
    w: "300px",
    textAlign: "center"
  }, text), /*#__PURE__*/_react.default.createElement(_core.Menu, {
    display: "none"
  }, /*#__PURE__*/_react.default.createElement(_core.MenuButton, {
    display: {
      lg: 'none',
      base: 'block'
    },
    as: _fi.FiAlignLeft,
    size: "32px",
    color: "black"
  }), /*#__PURE__*/_react.default.createElement(_core.MenuList, {
    w: "100%"
  }, /*#__PURE__*/_react.default.createElement(_core.MenuItem, null, "Download"), /*#__PURE__*/_react.default.createElement(_core.MenuItem, null, "Create a Copy"), /*#__PURE__*/_react.default.createElement(_core.MenuItem, null, "Mark as Draft"), /*#__PURE__*/_react.default.createElement(_core.MenuItem, null, "Delete"), /*#__PURE__*/_react.default.createElement(_core.MenuItem, {
    as: "a",
    href: "#"
  }, "Attend a Workshop")))), children));
};

var _default = Testpages;
exports.default = _default;