"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Right = exports.Center = exports.Left = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@chakra-ui/core");

var _DocsHeaderPage = require("../DocsHeaderPage");

var _containerPage = require("../containerPage");

var _fi = require("react-icons/fi");

var _io = require("react-icons/io");

var _md = require("react-icons/md");

// const Logo = (props) => (
//   <Box as='a' href='#'>
//     {props.icon}
//   </Box>
// )
const Left = ({
  logo,
  text,
  children
}) => {
  const Logo = /*#__PURE__*/_react.default.createElement(_core.Heading, {
    as: "h1",
    size: "lg",
    letterSpacing: "-.1rem"
  }, /*#__PURE__*/_react.default.createElement(_core.Box, {
    as: "span",
    d: {
      base: 'none',
      sm: 'inline'
    }
  }, "Macau School"), /*#__PURE__*/_react.default.createElement(_core.Box, {
    as: "span",
    d: {
      base: 'inline',
      sm: 'none'
    }
  }, "MS"), /*#__PURE__*/_react.default.createElement(_core.Box, {
    as: "span",
    color: "blue.500",
    d: {
      base: 'none',
      md: 'inline'
    }
  }, ' ', "\u5B78\u4E0D\u505C"));

  return /*#__PURE__*/_react.default.createElement(_core.Box, {
    display: "flex",
    alignItems: "center"
  }, !!logo && /*#__PURE__*/_react.default.createElement(_core.Heading, {
    as: "h1",
    size: "lg",
    letterSpacing: "-.1rem"
  }, /*#__PURE__*/_react.default.createElement(_core.Box, {
    as: "span",
    d: {
      base: 'none',
      sm: 'inline'
    }
  }, "Macau School"), /*#__PURE__*/_react.default.createElement(_core.Box, {
    as: "span",
    d: {
      base: 'inline',
      sm: 'none'
    }
  }, "MS"), /*#__PURE__*/_react.default.createElement(_core.Box, {
    as: "span",
    color: "blue.500",
    d: {
      base: 'none',
      md: 'inline'
    }
  }, ' ', "\u5B78\u4E0D\u505C")), !!text && /*#__PURE__*/_react.default.createElement(_core.Heading, {
    as: "h1",
    fontSize: {
      base: '20px',
      md: '24px'
    },
    letterSpacing: "-.1rem",
    my: "auto"
  }, /*#__PURE__*/_react.default.createElement(_core.Box, {
    as: "span",
    ml: "3"
  }, text)), children);
};

exports.Left = Left;

const Center = ({
  logo,
  text,
  children
}) => {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_core.ButtonGroup, null, /*#__PURE__*/_react.default.createElement(_core.Button, {
    as: "a",
    align: "center",
    variant: "link",
    fontSize: "lg",
    px: {
      base: 0,
      sm: 4
    }
  }, /*#__PURE__*/_react.default.createElement(_core.Box, {
    m: 0,
    color: "currentColor",
    ml: {
      base: 0,
      md: -1
    },
    mr: {
      base: 0,
      md: 1
    }
  }, /*#__PURE__*/_react.default.createElement(_io.IoMdPerson, {
    size: "1.5em"
  })), "\u9996\u9801"), /*#__PURE__*/_react.default.createElement(_core.Button, {
    as: "a",
    align: "center",
    variant: "link",
    fontSize: "lg",
    px: {
      base: 0,
      sm: 4
    }
  }, /*#__PURE__*/_react.default.createElement(_core.Box, {
    m: 0,
    color: "currentColor",
    ml: {
      base: 0,
      md: -1
    },
    mr: {
      base: 0,
      md: 1
    }
  }, /*#__PURE__*/_react.default.createElement(_md.MdDashboard, {
    size: "1.5em"
  })), "\u5B78\u6821\u5C08\u9801")));
};

exports.Center = Center;

const Right = ({
  logo,
  profilePhoto,
  MenuTest,
  noColormode = false,
  disclosure,
  children
}) => {
  const {
    colorMode,
    toggleColorMode
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
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_core.Flex, {
    align: "center",
    justify: "flex-end"
  }, (!!profilePhoto || !!MenuTest) && /*#__PURE__*/_react.default.createElement(_core.Stack, {
    align: "center",
    isInline: true,
    spacing: "2",
    display: {
      base: 'none',
      sm: 'none',
      md: 'block'
    }
  }, /*#__PURE__*/_react.default.createElement(_core.Menu, {
    placement: "bottom-end"
  }, /*#__PURE__*/_react.default.createElement(_core.MenuButton, {
    as: "div"
  }, /*#__PURE__*/_react.default.createElement(_core.Avatar, {
    src: profilePhoto,
    size: "sm",
    cursor: "pointer"
  })), /*#__PURE__*/_react.default.createElement(_core.MenuList, {
    w: "280px"
  }, MenuTest))), noColormode && /*#__PURE__*/_react.default.createElement(_core.IconButton, {
    "aria-label": `Switch to ${colorMode === 'light' ? 'dark' : 'light'}mode`,
    variant: "ghost",
    color: "current",
    fontSize: {
      base: '20px',
      sm: '24px',
      md: '34px'
    },
    onClick: toggleColorMode,
    icon: colorMode === 'light' ? 'moon' : 'sun',
    size: "xs"
  }), !!disclosure && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_core.Button, {
    variantColor: "none",
    onClick: onOpen,
    display: {
      sm: 'block',
      md: 'none'
    },
    size: "xs"
  }, /*#__PURE__*/_react.default.createElement(_core.Box, {
    fontSize: {
      base: '22px',
      sm: '28px'
    },
    color: colorMode === 'light' ? 'black' : 'white',
    as: _fi.FiAlignJustify
  })), /*#__PURE__*/_react.default.createElement(_core.Drawer, {
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
  }, MenuTest))))));
};

exports.Right = Right;

const Header = (_ref) => {
  let {
    left,
    right,
    text,
    logo,
    profilePhoto,
    noColormode = false,
    MenuTest,
    children,
    disclosure
  } = _ref,
      props = (0, _objectWithoutProperties2.default)(_ref, ["left", "right", "text", "logo", "profilePhoto", "noColormode", "MenuTest", "children", "disclosure"]);
  const {
    colorMode,
    toggleColorMode
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
    height: "4rem"
  }, /*#__PURE__*/_react.default.createElement(_core.Flex, {
    size: "100%",
    px: {
      base: 0,
      sm: 2,
      md: 4
    },
    align: "center",
    justify: "space-between"
  }, children)));
};

var _default = Header;
exports.default = _default;