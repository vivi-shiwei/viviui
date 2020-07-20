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

// logo接受logo文字或圖片  text接受top中部佈局的盒子
const Testpages = (_ref) => {
  let {
    Header1,
    HeaderContent,
    HeaderIcon,
    centerButton,
    leftButton = null,
    rightButton = null,
    children
  } = _ref,
      props = (0, _objectWithoutProperties2.default)(_ref, ["Header1", "HeaderContent", "HeaderIcon", "centerButton", "leftButton", "rightButton", "children"]);
  return /*#__PURE__*/_react.default.createElement(_core.Box, {
    as: "section"
  }, /*#__PURE__*/_react.default.createElement(_containerPage.Container, null, /*#__PURE__*/_react.default.createElement(_core.Box, {
    maxW: "xl",
    mx: "auto",
    textAlign: "center"
  }, !!Header1 && /*#__PURE__*/_react.default.createElement(_core.Heading, {
    as: "h1",
    size: "xl",
    fontWeight: "semibold"
  }, Header1), !!HeaderContent && /*#__PURE__*/_react.default.createElement(_core.Heading, {
    as: "h3",
    size: "md",
    fontWeight: "semibold",
    mt: "10"
  }, HeaderContent), !!HeaderIcon && /*#__PURE__*/_react.default.createElement(_core.Icon, {
    name: HeaderIcon,
    size: "32px",
    color: "red.500"
  }), (!!leftButton || !!rightButton) && /*#__PURE__*/_react.default.createElement(_core.Box, {
    as: "section",
    d: {
      md: 'flex',
      sm: 'flex',
      base: 'block'
    },
    mt: "10px",
    justifyContent: !!leftButton && !!rightButton ? 'space-around' : 'center',
    mx: "auto"
  }, !!rightButton && /*#__PURE__*/_react.default.createElement(_core.Button, {
    variantColor: "teal",
    size: "md",
    w: {
      md: '200px',
      base: '250px'
    },
    mt: {
      base: '10px'
    }
  }, rightButton), !!leftButton && /*#__PURE__*/_react.default.createElement(_core.Button, {
    variantColor: "teal",
    size: "md",
    w: {
      md: '200px',
      base: '250px'
    },
    mt: {
      base: '10px'
    }
  }, leftButton)), !!children && /*#__PURE__*/_react.default.createElement(_core.Box, null, children))));
};

var _default = Testpages;
exports.default = _default;