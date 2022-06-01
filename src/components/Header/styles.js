import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../theme';

export default StyleSheet.create({
  container: {
    marginTop: 8,
    paddingVertical: 8,
    width: '38%',
  },
  text: {
    fontSize: 16,
    color: COLORS.white,
    fontFamily: FONTS.bold,
  },
  separator: {
    height: 2,
    width: '88%',
    backgroundColor: COLORS.sun,
    marginTop: 8,
  },
});
