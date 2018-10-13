import { AlertService, NavigationService } from '../../services';
import { Api } from '../../api';
import screens from '../../navigation/screens';
import { initialized } from './actions';
import { authToken } from '../../utils/authToken';

const initialization = () => async dispatch => {
  try {
    const token = await authToken.get();

    if (!token) {
      throw new Error('No token exists');
    }

    // TODO: add validation token from Api
    Api.setToken(token);

    dispatch(initialized());
    NavigationService.navigate(screens.Home);
  } catch (err) {
    AlertService.showErrorAlert(err.message);
  }
};

export default {
  initialization,
};
