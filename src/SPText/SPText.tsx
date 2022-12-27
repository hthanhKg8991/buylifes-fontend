import React from 'react';

import {
    Text as NativeText,
    StyleSheet,
    TextProps as TextProperties,
  } from 'react-native';

import {  RneFunctionComponent } from '../helpers';
import {SPTextStyle} from '../themes/spTextStyle';

export interface TextProps extends TextProperties {
  textStyle?: {};
  style?: {};
}

export const SPText: RneFunctionComponent<TextProps> = ({
  style = {},
  textStyle = {},
  children = '',
}) => {
  return (
    <NativeText style={StyleSheet.flatten([textStyle, style])}>
      {children}
    </NativeText>
  );
};
