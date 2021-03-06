import React, { Component } from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Modal
} from 'react-native';

import styles from './styles';

export default ({animationType = 'fade', visible = false, onTouchOutside, containerStyles = {}, children, onRequestClose = () => null}) => {
  return (
    <Modal
      animationType={animationType}
      transparent={true}
      onRequestClose={onRequestClose}
      visible={visible}>

      <TouchableWithoutFeedback
        style={{ flex: 1 }}
        onPress={onTouchOutside}>
        <View style={[styles.container, containerStyles]}>
          {React.Children.only(children)}
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
