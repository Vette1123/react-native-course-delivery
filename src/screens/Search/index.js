import React, {useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import {Header, Input} from '../../components';
import {COLORS} from '../../theme';
import styles from './styles';

export const SearchScreen = () => {
  const [value, setValue] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={{paddingHorizontal: 16}}>
        <Input
          value={value}
          onChangeText={_value => setValue(_value)}
          right={
            <View style={styles.searchIconContainer}>
              <Icon
                name="magnifying-glass"
                size={30}
                color={COLORS.sun}
                style={styles.icon}
              />
            </View>
          }
        />
        <Header text={'Search Result'} />
      </View>
    </SafeAreaView>
  );
};
