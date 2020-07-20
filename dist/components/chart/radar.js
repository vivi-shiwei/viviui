"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _radar = require("@nivo/radar");

var _core = require("@chakra-ui/core");

const Radar = props => {
  const List = props.data.filter(x => x[props.radarkeys[0]] !== 0);
  return /*#__PURE__*/React.createElement(_core.Box, {
    h: "80vh",
    w: "100%",
    transition: "0.3s",
    my: 10,
    _hover: {
      boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)'
    }
  }, /*#__PURE__*/React.createElement(_core.Heading, {
    as: "h3",
    size: "lg",
    textAlign: "center",
    color: "#4A5568"
  }, props.title), /*#__PURE__*/React.createElement(_radar.ResponsiveRadar, {
    data: props.data,
    keys: props.radarkeys // data={data}
    // keys={['abcd']}
    ,
    indexBy: "taste",
    maxValue: List.length > 0 ? 'auto' : 1000,
    margin: {
      top: 70,
      right: 80,
      bottom: 40,
      left: 80
    },
    curve: "linearClosed",
    borderWidth: 2,
    borderColor: {
      from: 'color'
    },
    gridLevels: 5,
    gridShape: "linear",
    gridLabelOffset: 36,
    enableDots: true,
    dotSize: 10,
    dotColor: {
      theme: 'background'
    },
    dotBorderWidth: 2,
    dotBorderColor: {
      from: 'color'
    },
    enableDotLabel: true,
    dotLabel: "value",
    dotLabelYOffset: -12,
    colors: {
      scheme: 'nivo'
    },
    fillOpacity: 0.25,
    blendMode: "multiply",
    animate: true,
    motionStiffness: 90,
    motionDamping: 15,
    isInteractive: true,
    theme: {
      axis: {
        ticks: {
          text: {
            fontSize: 16 // fill: 'green'

          }
        }
      }
    },
    legends: [{
      anchor: 'top-left',
      direction: 'column',
      translateX: -50,
      translateY: -40,
      itemWidth: 80,
      itemHeight: 20,
      itemTextColor: '#999',
      symbolSize: 12,
      symbolShape: 'circle',
      effects: [{
        on: 'hover',
        style: {
          itemTextColor: '#000'
        }
      }]
    }]
  }));
};

var _default = Radar;
exports.default = _default;