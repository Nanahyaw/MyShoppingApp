import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

import Logo from '../assets/Logo/ShopLogo.jpg';
import Form from '../components/Form';

import {Actions} from 'react-native-router-flux';
export default class Login extends React.Component {

    signup() {
       Actions.signup()
    }
    render() {
        return(
           <View style={styles.container}>
               <Logo/>
               <Login/>
               <Form type="Login"/>
                  <View style={styles.signupTextCont}>
                      <Text style={styles.signupText}>Don't have an account yet?</Text>
                  <TouchableOpacity onPress={this.signup}><Text style={styles.signupText}> Signup</Text></TouchableOpacity>
               </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        backgroundColor: '#455a64',
        flexGrow: 1, 
        alignItem: 'center',
        justifyContent: 'center'
    },
    signupCont: {
        flexGrow: 1, 
        alignItem: 'center',
        justifyContent: 'flex-end',
        color: '#ffffff',
        marginVertical: 16,
        flexDirection: 'row'
    },
    signupText: {
        color: 'rgba{255, 255, 255, 0.7}',
        fontSize: 16,
        fontWeight: '500' 
    }  
  });
  
