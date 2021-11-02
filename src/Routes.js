import React, { Component } from 'react';
import {Router, Stack, Scene } from 'react-native-router-flux';

import Login from './pages/Login';
import Signup from './pages/Signup';

export default class Routes extends React.Components {
  render() {
      return(
          <Router>
              <Signup/>
              <Stack key="root" hideNavBar={true}>
                  <Scene key="login" component={Login} title="Login"/>
                  <Scene key="signup" component={Register} title="Register"/>
                  </Stack>
                </Router>
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