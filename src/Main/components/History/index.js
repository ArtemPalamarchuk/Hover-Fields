import React from 'react';
import { connect } from 'react-redux';
import History from './History';
import { presetStore } from '../../controller/redux/reducer';

const mapStateToProps = state => ({
  history: presetStore.getHistory(state)
});

export default connect(mapStateToProps, null)(History)
