import React from 'react';

import {
  TouchableOpacity,
  TouchableOpacityProps,
  TouchableNativeFeedbackProps,
  View,
  StyleProp,
  StyleSheet,
  TextStyle,
  GestureResponderEvent,
} from 'react-native';

import type { RneFunctionComponent } from '../helpers';
import { SPText } from '../SPText';
import { SPTextStyle } from '../themes/spTextStyle';
import { SPButtonStyle } from '../themes/spButtonStyle';
import { scale } from '../themes/scaling';
export interface ButtonProps
  extends TouchableOpacityProps,
    TouchableNativeFeedbackProps {
  buttonStyle?: object;
  title?: string | React.ReactElement<{}>;
  disabledTitleStyle?: object;
  titleStyle?: object;
  disabled?: boolean;
  disabledStyle?: object;
}
export const SPButton: RneFunctionComponent<ButtonProps> = ({
  title = '',
  children = title,
  titleStyle = SPTextStyle.Text_Small_06,
  onPress = () => {},
  disabled = false,
  disabledStyle = SPButtonStyle.Button_Disable_Style,
}) => {
  titleStyle = disabled ? SPTextStyle.Text_Title_02 : SPTextStyle.Text_Title_03;
  const handleOnPress = (evt: GestureResponderEvent) => {
    console.log('evt', disabled);
    if (!disabled) {
      onPress(evt);
    }
  };
  return (
    <View>
      <TouchableOpacity
        onPress={handleOnPress}
        style={StyleSheet.flatten([
          {
            ...SPButtonStyle.Button_Style,
            justifyContent: 'center',
            alignItems: 'center',
            height: scale(60),
            paddingHorizontal: scale(10),
          },
          disabled && disabledStyle,
        ])}
      >
        <SPText textStyle={[titleStyle]}>{children}</SPText>
      </TouchableOpacity>
    </View>
  );
};
