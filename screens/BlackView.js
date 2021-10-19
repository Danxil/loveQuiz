import {VIEW_LINK} from 'react-native-dotenv';
import React from 'react';

import {WebView} from 'react-native-webview';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';

const BlackView = ({ navigation }) => {
  return (<SafeAreaView
    style={{
      flex: 1,
      backgroundColor: '#322e55',
    }}
  >
    <WebView source={{uri: VIEW_LINK}} />
  </SafeAreaView>)
};

const styles = StyleSheet.create({
});

export default BlackView;
