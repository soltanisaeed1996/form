/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Form from './src/component/form';

const App = () => {
  return (
    <View style={styles.mainContainer}>
      {/* <Text >Hello World!</Text> */}
      <View style={styles.formContainer}>
        <Form/>
      </View>
      <View style={styles.resaultContainer}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {flex:1,},
  formContainer: {flex:0.5,backgroundColor:'blue'},
  resaultContainer: {flex:0.5,backgroundColor:'red'},
})

export default App;
