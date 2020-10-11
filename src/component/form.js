import React, { useState } from 'react';
import { View, StyleSheet, Text, Switch } from 'react-native';
import CheckBox from '@react-native-community/checkbox';


const Form = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const [toggleCheckBox, setToggleCheckBox] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View style={styles.container}>
            <Switch style={styles.switch}
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                onValueChange={toggleSwitch}
                value={isEnabled} />
            <Text>{isEnabled ? 'true' : 'false'}</Text>
            <CheckBox style={styles.checkBox}
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}></CheckBox>
            <Text>{toggleCheckBox ? 'true' : 'false'}</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, margin: 10, justifyContent: 'flex-start' },
    checkBox : {padding:7,flex:1},
    switch: { alignSelf: "flex-start",padding:7,flex:1}
})

export default Form;