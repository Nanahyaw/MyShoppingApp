import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity
    
} from 'react-native';

export default class Logo extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <TextInput style={styles.inputBox}
                 underlineColorAndroid='rgba(0, 0, 0, 0)'
                 placeholder="Email"
                 placeholderTextColor="#ffffff"
                 selectionColor='#fff'
                 keyboardType="email-address"
                 onSubmitEditing={() => this.password.focus()}
                 />
                 <TextInput style={styles.inputBox}
                 underlineColorAndroid='rgba(0, 0, 0, 0)'
                 placeholder="Password"
                 secureTextEntry={true}
                 placeholderTextColor="#ffffff"
                 ref={(input) => this.password = input} 
                 />

                 <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonTextbuttonText}>{this.prop.type}</Text>   
                 </TouchableOpacity>
             </View>
            )
        }

}

const styles = StyleSheet.create({
    container : {
        flexGrow: 1,
        justifyContent: 'center',
        alignItem: 'center' 
    }, 
    inputBox: {
        width: 300,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        borderRadius: 25,
        paddingHorizontal: 15,
        fontSize: 14,
        color: '#ffffff',
        marginVertical: 10
    },
    button: {
        width: 150,
        backgroundColor: 'blue',
        borderRadius: 25,
        marginVertical: 10,
        textAlign: 'center',
        paddingVertical: 12
    },
    
    buttonText: {
        fontSize: 16,
        fontWeight: '400',
        color: '#ffffff' 
    }
  });