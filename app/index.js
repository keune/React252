import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Alert,
  StatusBar
} from 'react-native';
import { Provider } from 'react-redux';

import store from './config/store';

import { Container } from './components/Container';

export default () => (
  <Provider store={store}>
    <Container />
  </Provider>
);
