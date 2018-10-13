import { Platform, Dimensions } from 'react-native';

export const isAndroid = Platform.OS === 'android';
export const isIos = Platform.OS === 'ios';

export const getDeviceInfo = () => ({
  isLandscape: Dimensions.get('window').width > Dimensions.get('window').height,
});
