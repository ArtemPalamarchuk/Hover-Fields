import { takeLatest, put, call } from 'redux-saga/effects'
import { getPresets } from "../api/requests";
import { presetActionTypes as type } from "./actions";
import { presetActions } from "./actions";

function* getPresetsSaga() {
  try {
    const response = yield call(getPresets);
    if(response.status === 200){
      const presets = yield response.json();
      yield put(presetActions.setPresets(presets));
    }

  } catch (e) {
    console.error('getPresetsSaga -> err', e);
  }
}

export const presetSagas = [
  takeLatest(type.GET_PRESETS_SAGA, getPresetsSaga)
];