import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';

import {Actions} from 'react-native-router-flux';
export default class Signup extends React.Component {

    goBack(){
        Actions.pop();
    }
    render() {
        return(
           <View style={styles.container}>
               <Logo/>
               <Form type="Signup"/>
               <View style={styles.signupTextCont}>
               <Text style={styles.signupText}>Already have an account?</Text>
               <TouchableOpacity onPress={this.goBack}><Text style={styles.signupButton}>Sign in</Text></TouchableOpacity>
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
  
