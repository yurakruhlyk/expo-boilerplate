import { handleActions } from 'redux-actions';
import * as types from './types';
import { mergeIn } from '../../utils/stateHelpers';

const initialState = {
  initialized: false,
};

export default handleActions(
  {
    [types.INITIALIZED]: mergeIn({ initialized: true }),
  },
  initialState
);
