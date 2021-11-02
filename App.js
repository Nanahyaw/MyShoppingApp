import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    StatusBar
} from 'react-native';

import Routes from './src/Routes';
 
export default class App extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <StatusBar
                   backgroundColor="1c313a"
                   barStyle="light-content"
                />  
                <Routes/>
                <Component/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container : {
      backgroundColor: '#455a64',
      flex: 1, 
      alignItem: 'center',
      justifyContent: 'center'
  }  
});
