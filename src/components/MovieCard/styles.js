import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../theme';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.spaceCadet,
    borderRadius: 10,
    minHeight: 170,
    marginTop: 80,
    paddingVertical: 18,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  title: {
    color: COLORS.white,
    fontFamily: FONTS.bold,
    fontSize: 14,
  },
  releaseDateText: {
    fontFamily: FONTS.medium,
    marginTop: 12,
    fontSize: 12,
    color: COLORS.white,
  },
  image: {
    position: 'absolute',
    width: 130,
    height: 190,
    borderRadius: 16,
    bottom: 40,
    left: 10,
  },
  leftContainer: {
    // flex: 1 / 2,
    // marginLeft: -32,
    width: '50%',
  },
  rightContainer: {
    // flex: 1 / 2,
    width: '45%',
  },
});
