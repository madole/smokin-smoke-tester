import React, {
  StyleSheet,
  Dimensions,
  PixelRatio
} from 'react';
const {
  width,
  height,
  scale
} = Dimensions.get('window'),
  vw = width / 100,
  vh = height / 100,
  vmin = Math.min(vw, vh),
  vmax = Math.max(vw, vh);

export default StyleSheet.create({
  'body': {
    'position': 'relative',
    'color': 'white',
    'height': 100 * vh,
    'backgroundColor': '#8CB369',
    'fontFamily': 'Arial, Helvetica, Helvetica Neue'
  },
  'h2': {
    'marginTop': 0,
    'marginRight': 0,
    'marginBottom': 0,
    'marginLeft': 0,
    'fontSize': 2.25,
    'fontWeight': 'bold',
    'letterSpacing': -0.025,
    'color': '#fff'
  },
  'p': {
    'fontSize': 24
  },
  'li': {
    'listStyle': 'none'
  },
  'a': {
    'color': 'white',
    'opacity': 0.75,
    'textDecoration': 'none'
  },
  'a:hover': {
    'opacity': 1,
    'textDecoration': 'none',
    'cursor': 'pointer'
  }
});
