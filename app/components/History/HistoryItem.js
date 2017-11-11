import React, { Component } from 'react';
import {
  Text,
  TouchableHighlight,
} from 'react-native';

import styles from './styles';

export default ({onPress, item, underlayColor}) => {
  return (
    <TouchableHighlight underlayColor={underlayColor} onPress={() => {onPress(item)}}>
      <Text style={styles.item}>{item}</Text>
    </TouchableHighlight>
  );
};
