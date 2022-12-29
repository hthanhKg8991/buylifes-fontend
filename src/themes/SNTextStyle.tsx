/**
 * Rebrand App
 */
import { StyleSheet } from 'react-native';
import { moderateScale, scale } from './scaling';
import Colors from './SNColorStyle';
import Fonts from './SNFontStyle';
export const SNTextStyle = StyleSheet.create({
    // Text Header
    Text_Headline_01: {
        color: Colors.Color_Text_02_100,
        fontSize: moderateScale(40),
        fontFamily: Fonts.nuntioRegular,
        letterSpacing: scale(4),
        lineHeight: scale(44)
    },
    Text_Headline_02: {
        color: Colors.Color_Text_02_100,
        fontSize: moderateScale(20),
        fontFamily: Fonts.nuntioMedium,
        letterSpacing: scale(4),
        lineHeight: scale(44)
    },
    Text_Headline_03: {
        color: Colors.Color_Text_02_100,
        fontSize: moderateScale(35),
        fontFamily: Fonts.nuntioRegular,
        letterSpacing: scale(4),
        lineHeight: scale(39)
    },
    Text_Headline_04: {
        color: Colors.Color_Text_02_100,
        fontSize: moderateScale(32),
        fontFamily: Fonts.nuntioRegular,
        letterSpacing: scale(4),
        lineHeight: scale(36)
    },

    // Text Message
    Text_Message_01: {
        color: Colors.Color_Text_02_100,
        fontSize: moderateScale(20),
        fontFamily: Fonts.nuntioBold,
        letterSpacing: scale(0),
        lineHeight: scale(24)
    },

    // Text title
    Text_Title_01: {
        color: Colors.Color_Text_02_100,
        fontSize: moderateScale(16),
        fontFamily: Fonts.nuntioBold,
        letterSpacing: scale(0),
        lineHeight: scale(20)
    },
    Text_Title_02: {
        color: Colors.Color_Text_02_100,
        fontSize: moderateScale(14),
        fontFamily: Fonts.nuntioBold,
        letterSpacing: scale(0),
        lineHeight: scale(18)
    },
    Text_Title_03: {
        color: Colors.Color_Text_01_100,
        fontSize: moderateScale(14),
        fontFamily: Fonts.nuntioBold,
        letterSpacing: scale(0),
        lineHeight: scale(18)
    },
    Text_Title_04: {
        color: Colors.Color_Text_02_100,
        fontSize: moderateScale(12),
        fontFamily: Fonts.nuntioBold,
        letterSpacing: scale(0),
        lineHeight: scale(16)
    },

    // Text body
    Text_Body_01: {
        color: Colors.Color_Text_02_100,
        fontSize: moderateScale(16),
        fontFamily: Fonts.nuntioRegular,
        letterSpacing: scale(0),
        lineHeight: scale(20)
    },
    Text_Body_02: {
        color: Colors.Color_Text_02_100,
        fontSize: moderateScale(14),
        fontFamily: Fonts.nuntioRegular,
        letterSpacing: scale(0),
        lineHeight: scale(18)
    },

    // Text Button
    Text_button_01: {
        color: Colors.Color_Text_01_100,
        fontSize: moderateScale(14),
        fontFamily: Fonts.nuntioBold,
        letterSpacing: scale(0),
        lineHeight: scale(18)
    },

    // Text Small
    Text_Small_01: {
        color: Colors.Color_Text_02_100,
        fontSize: moderateScale(12),
        fontFamily: Fonts.nuntioRegular,
        letterSpacing: scale(0),
        lineHeight: scale(16)
    },
    Text_Small_02: {
        color: Colors.Color_Text_02_100,
        fontSize: moderateScale(10),
        fontFamily: Fonts.nuntioRegular,
        letterSpacing: scale(0),
        lineHeight: scale(14)
    },
    Text_Small_03: {
        color: Colors.Color_Text_01_100,
        fontSize: moderateScale(7),
        fontFamily: Fonts.nuntioRegular,
        letterSpacing: scale(0),
        lineHeight: scale(11)
    },
    Text_Small_04: {
        color: Colors.Color_Text_03_100,
        fontSize: moderateScale(12),
        fontFamily: Fonts.nuntioRegular,
        letterSpacing: scale(0),
        lineHeight: scale(16)
    },
    Text_Small_05: {
        color: Colors.Color_Text_01_100,
        fontSize: moderateScale(12),
        fontFamily: Fonts.nuntioRegular,
        letterSpacing: scale(0),
        lineHeight: scale(16)
    },
    Text_Small_06: {
        // color: Colors.Color_Text_03_100,
        color: Colors.Color_Secondary_04_100,
        fontSize: moderateScale(10),
        fontFamily: Fonts.nuntioRegular,
        letterSpacing: scale(0),
        lineHeight: scale(14)
    },
    
    
});
