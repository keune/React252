import {
  StyleSheet,
  Platform
} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    paddingTop: Platform.OS === 'ios' ? 20 : 0
  },
  input: {
    height: 50,
    flex: 4,
    borderWidth: 1,
    borderColor: '#ececec',
    fontSize: 20,
    paddingLeft: 4,
  },
  goBtn: {
    width: 60,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ddd',
  },
  goBtnTxt: {
    fontSize: 20,
    color: '#333',
  },
  refreshBtn: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6dc540',
  },
  historyBtn: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
