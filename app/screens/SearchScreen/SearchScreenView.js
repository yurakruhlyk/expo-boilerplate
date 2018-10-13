import React from 'react';
import { WebView } from 'react-native';
import s from './styles';

const SearchScreenViewView = () => (
  <WebView style={s.container} source={{ uri: 'https://google.com' }} />
);

SearchScreenViewView.navigationOptions = {
  title: 'Search',
};

export default SearchScreenViewView;
