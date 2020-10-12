import React, { useState } from 'react';
import { View, StyleSheet, Text, Switch } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import RadioGroup from 'react-native-custom-radio-group';
import PropTypes from 'prop-types';



const Form = (props) => {
    //const [isEnabled, setIsEnabled] = useState(false);
    //const [toggleCheckBox, setToggleCheckBox] = useState(false);
    const toggleSwitch = () => props.setIsEnabled(previousState => !previousState);
    const setToggleCheckBox = props.setToggleCheckBox;
    //const [radioSelect, setRadioSelect] = useState();
    const setRadioSelect = props.setRadioSelect;
    const radioGroupList = [{
        label: 'Car',
        value: 'transport_car'
    }, {
        label: 'Bike',
        value: 'transport_bike'
    }, {
        label: 'Bus',
        value: 'transport_bus'
    }]
    return (
        <View style={styles.container}>
            <Switch style={styles.switch}
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={props.isEnabled ? "#f5dd4b" : "#f4f3f4"}
                onValueChange={toggleSwitch}
                value={props.isEnabled} />
            <Text>{props.isEnabled ? 'true' : 'false'}</Text>
            <CheckBox style={styles.checkBox}
                disabled={false}
                value={props.toggleCheckBox}
                onValueChange={newValue => setToggleCheckBox(newValue)}></CheckBox>
            <Text>{props.toggleCheckBox ? 'true' : 'false'}</Text>
            <RadioGroup radioGroupList={radioGroupList}
                onChange={item => setRadioSelect(item)}
                initialValue='transport_bus'
            />
            <Text>{props.radioSelect}</Text>
            <Text>{props.name}</Text>
        </View>
    )
}
Form.propTypes = {
    name: PropTypes.string
}
Form.defaultProps={
    name:'saeed'
}
const styles = StyleSheet.create({
    container: { flex: 1, margin: 10, justifyContent: 'flex-start' },
    checkBox: { padding: 7, flex: 1 },
    switch: { alignSelf: "flex-start", padding: 7, flex: 1 },
    radioGroup: { flex: 1 }
})

export default Form;