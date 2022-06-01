import React from 'react';
import {TextInput, View} from 'react-native';
import {COLORS} from '../../theme';
import styles from './styles';

export const Input = ({value, onChangeText, right, left}) => {
  return (
    <View style={styles.container}>
      {left && left}
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.inputContainer}
        placeholder={'Enter Movie Name ..'}
        placeholderTextColor={COLORS.sun}
      />
      {right}
    </View>
  );
};
