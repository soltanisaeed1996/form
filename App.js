/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Form from './src/component/form';
const App = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [radioSelect, setRadioSelect] = useState('transport_bus');

  return (
    <View style={styles.mainContainer}>
      {/* <Text >Hello World!</Text> */}
      <View style={styles.formContainer}>
        <Form name='mamad'
          setIsEnabled={setIsEnabled}
          isEnabled={isEnabled}
          toggleCheckBox={toggleCheckBox}
          setToggleCheckBox={setToggleCheckBox}
          radioSelect={radioSelect}
          setRadioSelect={setRadioSelect} />
      </View>
      <View style={styles.resaultContainer}>
        <Text>switch: {isEnabled ? 'true' : 'false'}</Text>
        <Text>checkBox: {toggleCheckBox ? 'true' : 'false'}</Text>
        <Text>{radioSelect}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    direction: 'ltr',
    padding: 8,
    borderRadius: 7
  },
  formContainer: {
    flex: 0.5,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7
  },
  resaultContainer: {
    flex: 0.5,
    backgroundColor: 'gray',
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7
  },
})

export default App;
