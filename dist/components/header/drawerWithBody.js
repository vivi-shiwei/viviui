"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _core = require("@chakra-ui/core");

const DrawerWithBody = (_ref) => {
  let {
    title,
    icon,
    onClose,
    isOpen,
    href,
    children
  } = _ref,
      props = (0, _objectWithoutProperties2.default)(_ref, ["title", "icon", "onClose", "isOpen", "href", "children"]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_core.Drawer, {
    placement: "left",
    onClose: onClose,
    isOpen: isOpen
  }, /*#__PURE__*/_react.default.createElement(_core.DrawerOverlay, null), /*#__PURE__*/_react.default.createElement(_core.DrawerContent, null, /*#__PURE__*/_react.default.createElement(_core.DrawerCloseButton, null), /*#__PURE__*/_react.default.createElement(_core.DrawerHeader, {
    borderBottomWidth: "1px"
  }, "\u9078\u9805"), /*#__PURE__*/_react.default.createElement(_core.DrawerBody, {
    fontSize: {
      sm: 'xs',
      md: 'sm'
    }
  }, children))));
};

var _default = /*#__PURE__*/(0, _react.memo)(DrawerWithBody);

exports.default = _default;