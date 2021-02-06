export const presetActionTypes = {
  GET_PRESETS_SAGA: 'GET_PRESETS_SAGA',
  SET_PRESETS_SAGA: 'SET_PRESETS_SAGA',
  SET_CURRENT_MODE: 'SET_CURRENT_MODE',
  SET_HISTORY: 'SET_HISTORY',
  CLEAR_HISTORY: 'CLEAR_HISTORY',
};

export const presetActions = {
  getPresets: () => ({type: presetActionTypes.GET_PRESETS_SAGA}),
  setPresets: presets => ({type: presetActionTypes.SET_PRESETS_SAGA, payload: presets}),
  setCurrentMode: mode => ({type: presetActionTypes.SET_CURRENT_MODE, payload: mode}),
  setHistory: position => ({type: presetActionTypes.SET_HISTORY, payload: position}),
  clearHistory: () => ({type: presetActionTypes.CLEAR_HISTORY}),
};