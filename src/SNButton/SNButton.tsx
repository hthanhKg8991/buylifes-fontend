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
import { SNText } from '../SNText';
import { SNTextStyle } from '../themes/SNTextStyle';
import { SNButtonStyle } from '../themes/SNButtonStyle';
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
export const SNButton: RneFunctionComponent<ButtonProps> = ({
  title = '',
  children = title,
  titleStyle = SNTextStyle.Text_Small_06,
  onPress = () => {},
  disabled = false,
  disabledStyle = SNButtonStyle.Button_Disable_Style,
}) => {
  titleStyle = disabled ? SNTextStyle.Text_Title_02 : SNTextStyle.Text_Title_03;
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
            ...SNButtonStyle.Button_Style,
            justifyContent: 'center',
            alignItems: 'center',
            height: scale(60),
            paddingHorizontal: scale(10),
          },
          disabled && disabledStyle,
        ])}
      >
        <SNText textStyle={[titleStyle]}>{children}</SNText>
      </TouchableOpacity>
    </View>
  );
};
