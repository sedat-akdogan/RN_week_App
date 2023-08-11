import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native';


function MyForm() {
    const [name, setName] = useState('');
    const handleSubmit = () => {
        if (name !== "") 
        Alert.alert(`The Name you entered was: ${name}`);
        setName('');
    }
    return (
        <View>
            <Text>Enter your name: </Text>
            <TextInput
                style={styles.textCar}
                type="text"
                value={name}
                onChangeText={(text) => setName(text)}
            />
            <Button 
            title="Submit"
            onPress={handleSubmit} />
        </View>
    );
}

function MissedGoal() {
    return (
        <Text>Missed!!!</Text>
    );
}

function MadeGoal() {
    return (
        <Text style={{ margin: 20 }}>Goal! Goal! Goal!</Text>
    );
}

const Car = (props) => {
    return (
        <Text style={styles.textCar}>Hello I am a {props.brand}</Text>
    );
};

function Goal(props) {
    const isGoal = props.isGoal;
    if (isGoal) {
        return <MadeGoal />
    } else {
        return <MissedGoal />
    }
}

const Functions = () => {
    const carName = "VOLVO";
    // const carInfo = { name: "Volvo", model: "CX90" };
    return (
        <View style={styles.container}>
            <Text style={styles.text}>What I have in my garage?</Text>
            <Car brand={carName} />
            <Goal isGoal={true} />
            <MyForm />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textCar: {
        backgroundColor: 'silver',
        padding: 20,
        margin: 20,
    },
    text: {
        padding: 10,
    }
});

export default Functions;