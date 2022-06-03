import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  FlatList,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import {getMovieList} from '../../api/movie';
import {Header, Input, MovieCard} from '../../components';
import {COLORS} from '../../theme';
import styles from './styles';

export const SearchScreen = () => {
  const [value, setValue] = useState('');
  const [data, setData] = useState([]);
  const [filteredData, setfilteredData] = useState([]);
  const [page, setPage] = useState(1);

  const onPressSearch = async () => {
    const _data = await getMovieList({searchValue: value, currentPage: page});
    setData(_data);
    setfilteredData(_data);
  };
  const onPaginate = async () => {
    const _data = await getMovieList({searchValue: value, currentPage: page});
    setData([...data, ..._data]);
    setfilteredData([...filteredData, ..._data]);
  };
  // send request to api after 0.6 second after user stop typing
  useEffect(() => {
    const timer = setTimeout(() => {
      onPressSearch();
    }, 1000);
    return () => clearTimeout(timer);
  }, [value]);

  const renderItem = ({item}) => {
    return (
      <MovieCard
        title={item.Title}
        releaseDate={item.Year}
        imageUrl={item.Poster}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={filteredData}
        contentContainerStyle={styles.contentContainer}
        renderItem={renderItem}
        onEndReached={() => {
          setPage(page + 1);
          onPaginate();
        }}
        onEndReachedThreshold={1}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            <Input
              value={value}
              onChangeText={_value => {
                setValue(_value);
                const newData = data.filter(item => {
                  const itemData = item.Title.toUpperCase();
                  const textData = _value.toUpperCase();
                  return itemData.indexOf(textData) > -1;
                });
                if (_value.length === 0) {
                  setfilteredData([]);
                } else {
                  setfilteredData(newData);
                }
              }}
              right={
                <Pressable
                  style={styles.searchIconContainer}
                  onPress={onPressSearch}>
                  <Icon
                    name="magnifying-glass"
                    size={30}
                    color={COLORS.sun}
                    style={styles.icon}
                  />
                </Pressable>
              }
            />
            <Header text={'Search Result'} />
          </>
        }
      />
    </SafeAreaView>
  );
};
