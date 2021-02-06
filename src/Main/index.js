import React from 'react';
import { connect } from 'react-redux';
import MainPage from './MainPage.jsx';
import { presetActions } from './controller/redux/actions';
import { presetStore } from './controller/redux/reducer';

const mapStateToProps = state => ({
  presets: presetStore.getPresets(state),
  currentMode: presetStore.getCurrentMode(state),
});

const mapDispatchToProps = {
  getPresets: presetActions.getPresets,
  clearHistory: presetActions.clearHistory,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
