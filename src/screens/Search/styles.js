import {StyleSheet} from 'react-native';
import {COLORS} from '../../theme';

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: COLORS.oxfordBlue,
    overflow: 'hidden',
  },
  searchIconContainer: {
    height: '100%',
    alignContent: 'center',
    justifyContent: 'center',
    width: '20%',
    backgroundColor: COLORS.cloudBurst,
    borderLeftWidth: 1,
    borderLeftColor: COLORS.sun,
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
  },
  icon: {alignSelf: 'center'},
  contentContainer: {
    paddingHorizontal: 16,
  },
});
