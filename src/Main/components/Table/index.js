import React from 'react';
import { connect } from 'react-redux';
import { presetActions } from '../../controller/redux/actions';
import Table from './Table';

const mapDispatchToProps = {
  setHistory: presetActions.setHistory,
};

export default connect(null, mapDispatchToProps)(Table)
