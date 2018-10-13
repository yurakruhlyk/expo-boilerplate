import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { NavigationService } from '../services';
import screens from './screens';
import { HomeScreen, SearchScreen } from '../screens';

const RootNavigator = createStackNavigator({
  [screens.Home]: HomeScreen,
  [screens.Search]: SearchScreen,
});

const RootNavigatorContainer = () =>
  <RootNavigator ref={ref => NavigationService.init(ref)} />;

export default RootNavigatorContainer;
