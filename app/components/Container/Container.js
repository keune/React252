import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Alert,
  TextInput,
  TouchableHighlight,
  ScrollView,
  StatusBar,
  Keyboard
} from 'react-native';
import { connect } from 'react-redux';

import { Popup } from '../Popup';
import { HistoryPopup } from '../History';
import styles from './styles';
import { 
  changeHatCode, 
  hideHistoryPopup, 
  toggleHistoryPopup, 
  fetchImage, 
  fetchImageDone, 
  fetchImageError, 
  changeInput
} from '../../actions/primary';

const INITIAL_HATCODE = '252';

class Container extends Component {
  componentWillMount() {
    this._handleHistoryItemPress(INITIAL_HATCODE);
  }

  _fetchImg = () => {
    this.props.dispatch(fetchImage());
    Keyboard.dismiss();
    let hatCode = this.props.hatCode;
    let url = `https://ahmetkun.com/iett/?h=${hatCode}&t=${new Date().getTime()}`;
    fetch(url)
      .then(response => {
        return response.text();
      })
      .then(res => {
        let imgState = {};
        let imgUrl = 'http://3n.iett.gov.tr' + res;
        imgState.uri = imgUrl;
        Image.getSize(imgUrl, (w, h) => {
          imgState.width = w;
          imgState.height = h;
          this.refs.scrollview.scrollTo({x:0, y:0, animated: false});
          this.props.dispatch(fetchImageDone(imgState));
        });
      })
      .catch(error => {
        this.props.dispatch(fetchImageError());
        let errMsg = null;
        if(error.message.toLowerCase().indexOf('network') > -1) {
          errMsg = "Internetin yok galiba.";
        }
        Alert.alert('Erör', errMsg);
      });
  }

  _hideHistoryPopup = () => {
    this.props.dispatch(hideHistoryPopup());
  };

  _toggleHistoryPopup = () => {
    this.props.dispatch(toggleHistoryPopup());
  };
  
  _changeInput = text  => {
    this.props.dispatch(changeInput(text));
  }
  
  _handleHistoryItemPress = async hatCode => {
    this._hideHistoryPopup();
    await this.props.dispatch(changeInput(hatCode));
    await this.props.dispatch(changeHatCode(hatCode));
    this._fetchImg();
  };

  _handleGoBtnPress = async () => {
    await this.props.dispatch(changeHatCode(this.props.input));
    this._fetchImg();
  }

  render() {
    let image = null;
    if(this.props.img.uri) {
      image = (
        <Image
          source={{ uri: this.props.img.uri }}
          style={{
            width: this.props.img.width,
            height: this.props.img.height,
          }}
        />
      );
    }
    return (
      <View style={styles.container}>
        <StatusBar translucent={false} barStyle="dark-content" />
        <View style={{ flexDirection: 'row', padding: 4 }}>
          <TextInput
            placeholder="Hat No"
            value={this.props.input}
            onChangeText={text => this._changeInput(text)}
            style={styles.input}
            underlineColorAndroid="transparent"
          />
          <TouchableHighlight
            underlayColor="#ccc"
            onPress={() => {
              this._handleGoBtnPress();
            }}
            style={styles.goBtn}>
            <Text style={styles.goBtnTxt}>Git</Text>
          </TouchableHighlight>
        </View>

        <ScrollView ref="scrollview" style={{ flex: 1, marginTop: 8, paddingHorizontal: 8 }}>
          {image}
        </ScrollView>

        <View style={{ flexDirection: 'row', height: 60, backgroundColor: '#ececec' }}>
          <TouchableHighlight underlayColor="#ccc"
            style={styles.historyBtn}
            onPress={() => {
              this._toggleHistoryPopup();
            }}>
            <Text style={{color:'#333'}}>Hatlar</Text>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor="#54AC27"
            onPress={this._fetchImg}
            style={styles.refreshBtn}>
            <Text style={{ fontSize: 20, color: '#fff' }}>
              {this.props.isLoading ? 'Yükleniyor...' : 'Yenile'}
            </Text>
          </TouchableHighlight>
        </View>

        <HistoryPopup
          visible={this.props.isHistoryPopupVisible}
          onItemPress={this._handleHistoryItemPress.bind(this)}
          onTouchOutside={this._hideHistoryPopup}
        />
      </View>
    );
  }
};

const mapStateToProps = (state) => state.primary;

export default connect(mapStateToProps)(Container);
