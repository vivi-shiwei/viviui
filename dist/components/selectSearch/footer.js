"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GridGroup = exports.OneGrid = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@chakra-ui/core");

var _containerPage = require("../containerPage");

// logo接受logo文字或圖片  text接受top中部佈局的盒子
const OneGrid = (_ref) => {
  let {
    title,
    icon,
    content,
    children
  } = _ref,
      props = (0, _objectWithoutProperties2.default)(_ref, ["title", "icon", "content", "children"]);
  return /*#__PURE__*/_react.default.createElement(_core.Box, (0, _extends2.default)({}, props, {
    mb: "20px",
    display: {
      md: 'flex',
      sm: 'block'
    },
    justifyContent: "flex-start"
  }), /*#__PURE__*/_react.default.createElement(_core.Box, null, /*#__PURE__*/_react.default.createElement(_core.Flex, {
    rounded: "full",
    size: 12,
    bg: "#98F5FF",
    align: "center",
    justify: "center"
  }, /*#__PURE__*/_react.default.createElement(_core.Icon, {
    name: icon,
    size: "6",
    color: "red.500"
  }))), /*#__PURE__*/_react.default.createElement(_core.Box, {
    ml: {
      md: '30px',
      sm: '0'
    },
    mt: {
      md: '0',
      sm: '10px',
      base: '10px'
    }
  }, !!title && /*#__PURE__*/_react.default.createElement(_core.Heading, {
    as: "h2",
    size: "md",
    fontWeight: "semibold",
    mb: "0.5em",
    letterSpacing: "0.1em"
  }, title), !!content && /*#__PURE__*/_react.default.createElement(_core.Text, {
    letterSpacing: "2px"
  }, content)));
};

exports.OneGrid = OneGrid;

const GridGroup = (_ref2) => {
  let {
    children,
    isBottomBorder,
    gap
  } = _ref2,
      props = (0, _objectWithoutProperties2.default)(_ref2, ["children", "isBottomBorder", "gap"]);
  return (
    /*#__PURE__*/
    // 大于4个时缩小自动换行
    _react.default.createElement(_containerPage.Container, props, children.length >= 4 ? /*#__PURE__*/_react.default.createElement(_core.Grid, {
      templateColumns: {
        md: 'repeat(4, 1fr)'
      },
      gap: 20
    }, children) : /*#__PURE__*/_react.default.createElement(_core.Grid, {
      templateColumns: {
        base: 'repeat(1, 1fr)',
        sm: 'repeat(2, 1fr)',
        md: `repeat(${children.length}, 1fr)`
      },
      gap: 20
    }, children))
  );
};

exports.GridGroup = GridGroup;