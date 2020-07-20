"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@chakra-ui/core");

const NewClsModal = ({
  classesRef,
  mdalHeader,
  isOpen,
  onClose,
  schoolId,
  schoolDashboardId,
  refetch,
  children
}) => {
  return /*#__PURE__*/_react.default.createElement(_core.Modal, {
    finalFocusRef: classesRef,
    isOpen: isOpen,
    onClose: onClose
  }, /*#__PURE__*/_react.default.createElement(_core.ModalOverlay, null), /*#__PURE__*/_react.default.createElement(_core.ModalContent, {
    h: {
      base: '100%',
      sm: 'auto'
    },
    maxH: "100%",
    my: {
      base: 0,
      sm: '3.75rem'
    }
  }, /*#__PURE__*/_react.default.createElement(_core.ModalHeader, null, mdalHeader), /*#__PURE__*/_react.default.createElement(_core.ModalCloseButton, null), /*#__PURE__*/_react.default.createElement(_core.ModalBody, {
    pb: 6
  }, children)));
};

var _default = NewClsModal;
exports.default = _default;