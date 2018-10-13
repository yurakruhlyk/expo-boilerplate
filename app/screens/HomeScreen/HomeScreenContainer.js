import { compose, hoistStatics, withHandlers } from 'recompose';
import HomeScreenView from './HomeScreenView';
import screens from '../../navigation/screens';

const enhancer = compose(
  withHandlers({
    navigateToSearch: props => () => props.navigation.navigate(screens.Search),
  })
);

export default hoistStatics(enhancer)(HomeScreenView);
