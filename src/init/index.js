import React from 'react';
import { render } from 'react-dom';
import { Provider } from "react-redux";
import configureStore from "../redux/store";
import App from './App';

const index = () => {
  const store = configureStore();
  const root = document.getElementById('root');

  render(
    <Provider store={store}>
      <App/>
    </Provider>,
    root
  )
};

document.addEventListener('DOMContentLoaded', index);

