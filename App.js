/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import axios from 'axios';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
  TextInput,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// const Section = ({children, title}): Node => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const [data, setData] = useState([]);
  const [filteredData, setfilteredData] = useState([]);
  const [search, setSearch] = useState('');
  useEffect(() => {
    getPostsData();
  }, []);

  const getPostsData = async () => {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts',
    );
    if (response.status === 200) {
      setData(response.data);
      setfilteredData(response.data);
    }
    if (response.status === 404) {
      console.log('Not Found');
    }
  };

  const ItemView = ({item}) => {
    return (
      <Text style={styles.itemStyle}>
        {item.id}
        {'. '}
        {item.title.toUpperCase()}
      </Text>
    );
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <View
        style={{
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
          paddingHorizontal: 20,
        }}>
        <TextInput
          style={styles.inputStyle}
          placeholder="Search..."
          onChangeText={text => {
            setSearch(text);
            const newData = data.filter(item => {
              const itemData = item.title.toUpperCase();
              const textData = text.toUpperCase();
              return itemData.indexOf(textData) > -1;
            });
            if (text.length === 0) {
              setfilteredData([]);
            } else {
              setfilteredData(newData);
            }
          }}
          value={search}
        />

        <FlatList
          data={filteredData}
          keyExtractor={item => item.id.toString()}
          ItemSeparatorComponent={() => (
            <View
              style={{
                height: 1,
                backgroundColor: isDarkMode ? Colors.black : Colors.white,
              }}
            />
          )}
          renderItem={ItemView}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  itemStyle: {
    padding: 10,
  },
  textInputStyle: {
    marginTop: 10,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
});

export default App;
