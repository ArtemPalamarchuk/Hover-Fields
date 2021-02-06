import { presetActionTypes } from "./actions";

export const PRESET_REDUCER_NAMESPACE = 'presets';

export const presetInitialState = {
  presets: {},
  currentMode: "",
  history: [],
};

export default (state = presetInitialState, action) => {
  switch (action.type) {

    case presetActionTypes.SET_PRESETS_SAGA:
      return {
        ...state,
        presets: action.payload
      };

    case presetActionTypes.SET_CURRENT_MODE:
      return {
        ...state,
        currentMode: action.payload
      };

    case presetActionTypes.SET_HISTORY:
      return {
        ...state,
        history: [
          ...state.history,
          action.payload,
        ]
      };

    case presetActionTypes.CLEAR_HISTORY:
      return {
        ...state,
        history: []
      };

    default:
      return state
  }
};

export const presetStore = {
  getPresets: (state) => state[PRESET_REDUCER_NAMESPACE].presets,
  getCurrentMode: (state) => state[PRESET_REDUCER_NAMESPACE].currentMode,
  getHistory: (state) => state[PRESET_REDUCER_NAMESPACE].history,
}
