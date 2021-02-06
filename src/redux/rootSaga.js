import { all } from 'redux-saga/effects';
import { presetSagas } from '../Main/controller/redux/saga';

function* rootSaga() {
  yield all([
    ...presetSagas,
  ]);
}

export default rootSaga;
