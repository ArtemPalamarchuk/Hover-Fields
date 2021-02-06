import React from 'react';
import { connect } from 'react-redux';
import DropDownMenu from './DropDownMenu.jsx';
import { presetStore } from '../../controller/redux/reducer';
import { presetActions } from '../../controller/redux/actions';

const mapStateToProps = state => ({
  presets: presetStore.getPresets(state),
});

const mapDispatchToProps = {
  setCurrentMode: presetActions.setCurrentMode,
};

export default connect(mapStateToProps, mapDispatchToProps)(DropDownMenu)
