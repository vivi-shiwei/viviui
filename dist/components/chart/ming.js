"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _bar = require("@nivo/bar");

var _core = require("@chakra-ui/core");

const BarMing = ({
  data
}) => {
  return /*#__PURE__*/_react.default.createElement(_core.Box, {
    h: "100vh",
    w: "100%",
    background: "white",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    transition: "0.3s",
    className: "chart",
    mt: 10,
    _hover: {
      boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)'
    }
  }, /*#__PURE__*/_react.default.createElement(_bar.ResponsiveBar, {
    data: data,
    keys: ['hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut'],
    indexBy: "country",
    margin: {
      top: 50,
      right: 130,
      bottom: 50,
      left: 60
    },
    padding: 0.3,
    colors: {
      scheme: 'nivo'
    },
    defs: [{
      id: 'dots',
      type: 'patternDots',
      background: 'inherit',
      color: '#38bcb2',
      size: 4,
      padding: 1,
      stagger: true
    }, {
      id: 'lines',
      type: 'patternLines',
      background: 'inherit',
      color: '#eed312',
      rotation: -45,
      lineWidth: 6,
      spacing: 10
    }],
    fill: [{
      match: {
        id: 'fries'
      },
      id: 'dots'
    }, {
      match: {
        id: 'sandwich'
      },
      id: 'lines'
    }],
    borderColor: {
      from: 'color',
      modifiers: [['darker', 1.6]]
    },
    axisTop: null,
    axisRight: null,
    axisBottom: {
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'country',
      legendPosition: 'middle',
      legendOffset: 32
    },
    axisLeft: {
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'food',
      legendPosition: 'middle',
      legendOffset: -40
    },
    labelSkipWidth: 12,
    labelSkipHeight: 12,
    labelTextColor: {
      from: 'color',
      modifiers: [['darker', 1.6]]
    },
    legends: [{
      dataFrom: 'keys',
      anchor: 'bottom-right',
      direction: 'column',
      justify: false,
      translateX: 120,
      translateY: 0,
      itemsSpacing: 2,
      itemWidth: 100,
      itemHeight: 20,
      itemDirection: 'left-to-right',
      itemOpacity: 0.85,
      symbolSize: 20,
      effects: [{
        on: 'hover',
        style: {
          itemOpacity: 1
        }
      }]
    }],
    animate: true,
    motionStiffness: 90,
    motionDamping: 15
  }));
};

var _default = BarMing;
exports.default = _default;