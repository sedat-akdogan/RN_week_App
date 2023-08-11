import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function MissedGoal() {
    return (
    <Text>Missed!!!</Text>
    );
}

function MadeGoal() {
    return (
    <Text>Goal! Goal! Goal!</Text>
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
            <Goal isGoal={true}/>
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