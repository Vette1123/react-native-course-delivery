import React from 'react';
import {StatusBar} from 'react-native';
import {SearchScreen} from './screens';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SearchScreen />
    </>
  );
};

export default App;
