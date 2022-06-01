import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../theme';

export default StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    backgroundColor: COLORS.spaceCadet,
    borderRadius: 6,
    marginTop: 16,
    paddingLeft: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputContainer: {
    height: '100%',
    color: COLORS.sun,
    fontSize: 16,
    fontFamily: FONTS.medium,
  },
});
