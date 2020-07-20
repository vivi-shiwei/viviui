"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddIntelligence = exports.ProgramaRightButton = exports.EditIntelligence = exports.ProgramaOne = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _core = require("@chakra-ui/core");

var _containerPage = require("../containerPage");

var _adminPage = _interopRequireDefault(require("../admin/adminPage"));

var _formik = require("formik");

// Editable单个编辑
const ProgramaOne = (_ref) => {
  let {
    title,
    content,
    color,
    fontSize,
    children
  } = _ref,
      props = (0, _objectWithoutProperties2.default)(_ref, ["title", "content", "color", "fontSize", "children"]);
  const [begin, setBegin] = (0, _react.useState)(title || '');
  const [finish, setFinish] = (0, _react.useState)(title);
  return /*#__PURE__*/_react.default.createElement(_core.Box, {
    border: ""
  }, /*#__PURE__*/_react.default.createElement(_core.Editable, {
    textAlign: "left",
    defaultValue: title || ('空' || !!content ? content : '空'),
    fontSize: fontSize,
    color: color,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    p: "5px 10px",
    isPreviewFocusable: false
  }, ({
    isEditing,
    onSubmit,
    onRequestEdit,
    onChange
  }) => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_core.EditablePreview, null), /*#__PURE__*/_react.default.createElement(_core.EditableInput, {
    onChange: e => {
      setFinish(e.target.value);
    }
  }), /*#__PURE__*/_react.default.createElement(_core.IconButton, {
    variantColor: "green.600",
    variant: "outline",
    ml: 5,
    size: "xs",
    icon: "edit",
    onClick: onRequestEdit
  }))));
}; // 智能编辑


exports.ProgramaOne = ProgramaOne;

const EditIntelligence = (_ref2) => {
  let {
    talent,
    deleteColor,
    deleteButtonTop = true,
    children
  } = _ref2,
      props = (0, _objectWithoutProperties2.default)(_ref2, ["talent", "deleteColor", "deleteButtonTop", "children"]);
  const [selectValue, setSelectValue] = (0, _react.useState)(talent || '');
  const [talentName, setTalentName] = (0, _react.useState)(talent);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_core.Box, {
    mx: "auto"
  }, /*#__PURE__*/_react.default.createElement(_core.Flex, {
    alignItems: "center",
    justifyContent: "space-between"
  }, /*#__PURE__*/_react.default.createElement(_core.Grid, {
    templateColumns: "repeat(1, 1fr)",
    gap: 0,
    m: "10px",
    width: "40%"
  }, /*#__PURE__*/_react.default.createElement(_core.Editable, {
    textAlign: "left",
    fontSize: "24px",
    color: "#2f98ff",
    whiteSpace: "nowrap",
    defaultValue: talent.title,
    overflow: "hidden",
    textOverflow: "ellipsis",
    p: "5px 10px",
    isPreviewFocusable: false
  }, ({
    isEditing,
    onSubmit,
    onRequestEdit,
    onChange
  }) => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_core.EditablePreview, null), /*#__PURE__*/_react.default.createElement(_core.EditableInput, {
    onChange: e => {
      setTalentName({
        title: e.target.value
      });
      console.log(e.target.value);
    }
  }), /*#__PURE__*/_react.default.createElement(_core.IconButton, {
    variantColor: "green.600",
    variant: "outline",
    ml: 5,
    size: "xs",
    icon: "edit",
    onClick: onRequestEdit
  }))), /*#__PURE__*/_react.default.createElement(_core.Editable, {
    textAlign: "left",
    fontSize: "24px",
    defaultValue: talent.content,
    color: "#8b814c",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    p: "5px 10px",
    isPreviewFocusable: false
  }, ({
    isEditing,
    onSubmit,
    onRequestEdit,
    onChange
  }) => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_core.EditablePreview, null), /*#__PURE__*/_react.default.createElement(_core.EditableInput, {
    onChange: e => {
      setTalentName({
        content: e.target.value
      });
      console.log(e.target.value);
    }
  }), /*#__PURE__*/_react.default.createElement(_core.IconButton, {
    variantColor: "green.600",
    variant: "outline",
    ml: 5,
    size: "xs",
    icon: "edit",
    onClick: onRequestEdit
  })))), /*#__PURE__*/_react.default.createElement(_core.Grid, {
    templateColumns: "repeat(3, 1fr)",
    gap: 6,
    width: "30%"
  }, /*#__PURE__*/_react.default.createElement(_core.Box, {
    display: "flex",
    alignItems: "center"
  }, /*#__PURE__*/_react.default.createElement(_core.Icon, {
    name: "delete",
    size: "24px",
    color: "#696969",
    cursor: "pointer"
  })), /*#__PURE__*/_react.default.createElement(ProgramaRightButton, {
    visibility: talent !== selectValue && selectValue !== '' || talentName !== talent ? 'visible' : 'hidden'
  })))));
}; // 添加按钮


exports.EditIntelligence = EditIntelligence;

const ProgramaRightButton = visibility => {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_core.Button, {
    bg: "#9370DB",
    color: "white",
    _hover: "color:black",
    visibility: visibility
  }, "\u78BA\u8A8D\u4FEE\u6539"), /*#__PURE__*/_react.default.createElement(_core.Button, {
    bg: "#00B2EE",
    color: "white",
    _hover: "color:black",
    visibility: visibility
  }, "\u9084\u539F"));
}; // 智能添加


exports.ProgramaRightButton = ProgramaRightButton;

const AddIntelligence = (_ref3) => {
  let {
    submitButton,
    cancelButton
  } = _ref3,
      props = (0, _objectWithoutProperties2.default)(_ref3, ["submitButton", "cancelButton"]);
  const toast = (0, _core.useToast)();

  const validateName = value => {
    let error;

    if (!value) {
      error = '内容不能为空';
    } else if (value.length < 3) {
      error = '长度不能少于2个';
    }

    return error;
  };

  return /*#__PURE__*/_react.default.createElement(_core.PseudoBox, {
    _hover: {
      backgroundColor: '#ceedff'
    },
    cursor: "pointer",
    p: {
      base: '20px',
      sm: '20px',
      md: '10px'
    }
  }, /*#__PURE__*/_react.default.createElement(_formik.Formik, {
    initialValues: {
      name1: '',
      name2: ''
    },
    onSubmit: (values, actions) => {
      toast({
        position: 'top',
        title: 'Account created.',
        description: "We've created your account for you.",
        status: 'success',
        duration: 9000,
        isClosable: true
      });
      console.log(values.name1, values.name2);
      actions.setSubmitting(false);
    }
  }, ({
    isSubmitting
  }) => /*#__PURE__*/_react.default.createElement(_formik.Form, {
    p: "5px 0"
  }, /*#__PURE__*/_react.default.createElement(_core.Flex, {
    direction: {
      base: 'column',
      md: 'row'
    },
    alignItems: "center",
    justifyContent: {
      md: 'space-between',
      base: 'flex-start'
    }
  }, /*#__PURE__*/_react.default.createElement(_core.Grid, {
    width: {
      base: '100%',
      md: '60%'
    },
    templateColumns: "repeat(1, 1fr)",
    gap: 4
  }, /*#__PURE__*/_react.default.createElement(_formik.Field, {
    name: "name1",
    validate: validateName
  }, ({
    field,
    form: {
      errors,
      touched
    }
  }) => /*#__PURE__*/_react.default.createElement(_core.FormControl, {
    isInvalid: errors.name1 && touched.name1
  }, /*#__PURE__*/_react.default.createElement(_core.Input, (0, _extends2.default)({
    placeholder: "\u65B0\u589E\u667A\u80FD\u540D\u79F0"
  }, field)), /*#__PURE__*/_react.default.createElement(_core.FormErrorMessage, null, errors.name1))), /*#__PURE__*/_react.default.createElement(_formik.Field, {
    name: "name2",
    validate: validateName
  }, ({
    field,
    form: {
      errors,
      touched
    }
  }) => /*#__PURE__*/_react.default.createElement(_core.FormControl, {
    isInvalid: errors.name2 && touched.name2
  }, /*#__PURE__*/_react.default.createElement(_core.Input, (0, _extends2.default)({
    placeholder: "\u65B0\u589E\u667A\u80FD\u82F1\u6587\u540D\u79F0"
  }, field)), /*#__PURE__*/_react.default.createElement(_core.FormErrorMessage, null, errors.name2)))), /*#__PURE__*/_react.default.createElement(_core.Grid, {
    width: {
      base: '100%',
      md: '30%'
    },
    mt: {
      base: '20px',
      md: '0'
    },
    templateColumns: "repeat(2, 1fr)",
    gap: 8
  }, /*#__PURE__*/_react.default.createElement(_core.Button, {
    isLoading: props.isSubmitting,
    variantColor: "green",
    type: "submit"
  }, " ", submitButton || '送出资料', " "), /*#__PURE__*/_react.default.createElement(_core.Button, {
    onClick: () => {
      props.onClose();
    },
    variantColor: "green"
  }, cancelButton || '取消', " "))))));
};

exports.AddIntelligence = AddIntelligence;