import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableHighlight,
} from 'react-native';

import { Popup } from '../Popup';
import HistoryItem from './HistoryItem';
import styles from './styles';
import hatCodes from '../../data/hatCodes';

const renderSeparator = () => {
  return (
    <View
      style={{
        flex: 1,
        height: 1,
        backgroundColor: "#ebebeb",
      }}
    />
  );
};

export default ({visible, onTouchOutside, onItemPress}) => {
  let data = hatCodes.map(hatCode => {return {key: hatCode}});
  return (
    <Popup
      visible={visible}
      onTouchOutside={onTouchOutside}
    >
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <HistoryItem underlayColor="#ccc" onPress={() => {onItemPress(item.key)}} item={item.key} />
          )}
          ItemSeparatorComponent={renderSeparator}
        />
      </View>
    </Popup>
  );
};