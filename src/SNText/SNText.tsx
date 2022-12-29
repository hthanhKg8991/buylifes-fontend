import React from "react";

import {
  Text as NativeText,
  StyleSheet,
  TextProps as TextProperties,
} from "react-native";

import { RneFunctionComponent } from "../helpers";

export interface TextProps extends TextProperties {
  textStyle?: {};
  style?: {};
}

export const SNText: RneFunctionComponent<TextProps> = ({
  style = {},
  textStyle = {},
  children = "",
  ...rest
}) => {
  return (
    <NativeText style={StyleSheet.flatten([textStyle, style])} {...rest}>
      {children}
    </NativeText>
  );
};
