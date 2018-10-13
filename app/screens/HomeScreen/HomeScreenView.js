import React from 'react';
import { View, Text } from 'react-native';
import T from 'prop-types';
import s from './styles';

const HomeScreenView = ({ navigateToSearch }) => (
  <View style={s.container}>
    <Text style={s.text}>RN-BOILERPLATE</Text>
    <Text onPress={navigateToSearch}>Navigate to Search Page</Text>
  </View>
);

HomeScreenView.navigationOptions = {
  title: 'Home',
};

HomeScreenView.propTypes = {
  navigateToSearch: T.func,
};

export default HomeScreenView;
