"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.PostCard = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@chakra-ui/core");

var _containerPage = require("../containerPage");

const PostContent = ({
  content
}) => {
  return content.split('\n').map((line, i) => {
    return /*#__PURE__*/_react.default.createElement(_core.Text, {
      key: i,
      fontSize: {
        base: 'xl',
        sm: '2xl'
      }
    }, line);
  });
};

const PostCard = (_ref) => {
  let {
    left,
    right,
    noDivider = false,
    editModel,
    profilePhoto,
    creatorName,
    createTime,
    Posttitle,
    title,
    talentName,
    postPhotos,
    tagNames,
    content,
    children
  } = _ref,
      props = (0, _objectWithoutProperties2.default)(_ref, ["left", "right", "noDivider", "editModel", "profilePhoto", "creatorName", "createTime", "Posttitle", "title", "talentName", "postPhotos", "tagNames", "content", "children"]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_containerPage.Container, props, /*#__PURE__*/_react.default.createElement(_core.Box, {
    rounded: {
      base: 0,
      md: 6
    },
    mx: "auto",
    border: "1px solid #b7b7b7",
    bg: "White",
    width: {
      base: '100%',
      md: '655px'
    },
    p: 4
  }, /*#__PURE__*/_react.default.createElement(_core.Box, {
    as: "header",
    position: "relative"
  }, !!editModel && /*#__PURE__*/_react.default.createElement(_core.Box, {
    position: "absolute",
    right: "0px",
    top: "0px"
  }, editModel), (!!profilePhoto || !!creatorName || !!createTime) && /*#__PURE__*/_react.default.createElement(_core.Box, {
    d: "flex",
    justifyContent: "space-between"
  }, /*#__PURE__*/_react.default.createElement(_core.Stack, {
    isInline: true
  }, !!profilePhoto && /*#__PURE__*/_react.default.createElement(_core.Box, {
    as: "div",
    w: "50px",
    h: "50px",
    rounded: "50%",
    d: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden"
  }, /*#__PURE__*/_react.default.createElement(_core.Avatar, {
    name: "Dan Abrahmov",
    src: profilePhoto
  })), (!!creatorName || !!createTime) && /*#__PURE__*/_react.default.createElement(_core.Box, {
    as: "div",
    ml: 2,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left"
  }, !!creatorName && /*#__PURE__*/_react.default.createElement(_core.Text, {
    fontSize: "lg"
  }, creatorName), !!createTime && /*#__PURE__*/_react.default.createElement(_core.Text, {
    fontSize: "md",
    color: "gray.400"
  }, createTime)))), /*#__PURE__*/_react.default.createElement(_core.Box, {
    mx: 2,
    mt: 3
  }, !!talentName && /*#__PURE__*/_react.default.createElement(_core.Box, null, /*#__PURE__*/_react.default.createElement(_core.Tag, {
    rounded: "full",
    variant: "outline",
    variantColor: "blue",
    style: {
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/_react.default.createElement(_core.TagLabel, {
    fontSize: {
      base: 'sm',
      sm: 'lg'
    }
  }, talentName))), /*#__PURE__*/_react.default.createElement(_core.Box, {
    mt: 2
  }, /*#__PURE__*/_react.default.createElement(_core.Text, {
    fontWeight: "bold",
    textAlign: "left",
    minH: {
      base: '30px',
      sm: '50px'
    },
    wordBreak: "break-word",
    fontSize: {
      base: '2xl',
      sm: '3xl'
    }
  }, Posttitle && Posttitle !== ' ' ? Posttitle : '無標題')))), /*#__PURE__*/_react.default.createElement(_core.Box, {
    as: "article"
  }, !!content && /*#__PURE__*/_react.default.createElement(_core.Box, {
    as: "div",
    textAlign: "left",
    wordBreak: "break-word",
    p: {
      base: 3,
      sm: 5
    }
  }, /*#__PURE__*/_react.default.createElement(PostContent, {
    content: content
  })), tagNames, /*#__PURE__*/_react.default.createElement(_core.Box, {
    mt: 2
  }, postPhotos)), children)));
};

exports.PostCard = PostCard;

const tags = (_ref2) => {
  let {
    title,
    subtitle,
    children
  } = _ref2,
      props = (0, _objectWithoutProperties2.default)(_ref2, ["title", "subtitle", "children"]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_core.Box, props, !!title && /*#__PURE__*/_react.default.createElement(_containerPage.Container, {
    py: 4
  }, /*#__PURE__*/_react.default.createElement(_core.Flex, {
    justifyContent: "center"
  }, /*#__PURE__*/_react.default.createElement(_core.Heading, {
    fontSize: "1.6rem"
  }, title))), !!subtitle && /*#__PURE__*/_react.default.createElement(_containerPage.Container, {
    mb: 10
  }, /*#__PURE__*/_react.default.createElement(_core.Box, {
    d: "flex",
    justifyContent: "center"
  }, subtitle)), children));
};

var _default = tags;
exports.default = _default;