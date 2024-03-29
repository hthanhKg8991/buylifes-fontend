import { Dimensions, } from 'react-native';
const { width, height, fontScale } = Dimensions.get('window');

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 667;

const scale = size => width / guidelineBaseWidth * size;
const verticalScale = size => height / guidelineBaseHeight * size;
const moderateScale = (size, factor = 0.5) => (size + (( scale(size) - size ) * factor))/fontScale;
const deviceWidth = width;

export { scale, verticalScale, moderateScale, height, width, deviceWidth };
