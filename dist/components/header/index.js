"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _core = require("@chakra-ui/core");

var _DocsHeaderPage = require("../DocsHeaderPage");

var _containerPage = require("../containerPage");

var _ai = require("react-icons/ai");

var _headerLeft = _interopRequireDefault(require("./headerLeft"));

var _headerRight = _interopRequireDefault(require("./headerRight"));

var _headerLogo = _interopRequireDefault(require("./headerLogo"));

var _headerCenter = _interopRequireDefault(require("./headerCenter"));

var _drawerWithBody = _interopRequireDefault(require("./drawerWithBody"));

const Header = (_ref) => {
  let {
    left,
    center,
    right,
    text,
    logo,
    logoHref,
    profilePhoto,
    drawerBody,
    children,
    disclosure
  } = _ref,
      props = (0, _objectWithoutProperties2.default)(_ref, ["left", "center", "right", "text", "logo", "logoHref", "profilePhoto", "drawerBody", "children", "disclosure"]);
  const {
    colorMode
  } = (0, _core.useColorMode)();
  const bg = {
    light: 'white',
    dark: 'gray.800'
  };
  const {
    isOpen,
    onOpen,
    onClose
  } = (0, _core.useDisclosure)();
  return /*#__PURE__*/_react.default.createElement(_DocsHeaderPage.Header, (0, _extends2.default)({
    bg: bg[colorMode]
  }, props), /*#__PURE__*/_react.default.createElement(_containerPage.Container, {
    h: "100%",
    height: "4rem",
    style: props.style
  }, /*#__PURE__*/_react.default.createElement(_core.Flex, {
    size: "100%",
    px: {
      base: 0,
      sm: 2,
      md: 4
    },
    align: "center",
    w: "full",
    justify: "space-between"
  }, /*#__PURE__*/_react.default.createElement(_headerLogo.default, {
    href: logoHref
  }, logo), /*#__PURE__*/_react.default.createElement(_headerLeft.default, null, left), /*#__PURE__*/_react.default.createElement(_headerCenter.default, null, center), /*#__PURE__*/_react.default.createElement(_headerRight.default, null, right), children, !!drawerBody && /*#__PURE__*/_react.default.createElement(_core.Flex, {
    justify: "flex-end"
  }, /*#__PURE__*/_react.default.createElement(_core.Button, {
    variantColor: "none",
    onClick: onOpen,
    display: {
      sm: 'block',
      md: 'none'
    },
    size: "xs"
  }, /*#__PURE__*/_react.default.createElement(_core.Box, {
    fontSize: {
      base: '20px',
      sm: '24px'
    },
    color: colorMode === 'light' ? 'black' : 'white',
    as: _ai.AiOutlineMenu
  })), isOpen && /*#__PURE__*/_react.default.createElement(_drawerWithBody.default, {
    isOpen: isOpen,
    onClose: onClose
  }, drawerBody)))));
};

var _default = /*#__PURE__*/(0, _react.memo)(Header);

exports.default = _default;