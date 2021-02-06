import { combineReducers } from 'redux';

import presetReducer from '../Main/controller/redux/reducer';
import { PRESET_REDUCER_NAMESPACE } from '../Main/controller/redux/reducer';

export const rootReducer = () => combineReducers({
  [PRESET_REDUCER_NAMESPACE]: presetReducer,
});