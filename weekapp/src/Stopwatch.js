import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


const Stopwatch = () => {
    const [startTime, setStartTime] = useState(null);
    const [now, setNow] = useState(null);
    const intervalRef = useRef(null);

    const handleStart = () => {
        setStartTime(Date.now());
        setNow(Date.now());

        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setNow(Date.now());
        }, 10);
    }

    const handleStop = () => {
        clearInterval(intervalRef.current);
    };

    let secondPassed = 0;
    if (startTime != null && now != null) {
        secondPassed = (now - startTime) / 1000;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.timeText}>Time Passed: {secondPassed.toFixed(3)}</Text>
            <TouchableOpacity style={styles.button} onPress={handleStart}>
                <Text style={styles.buttonText}>Start</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleStop}>
                <Text style={styles.buttonText}>Stop</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    timeText: {
        fontSize: 20,
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#007AFF',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
        width: '50%'
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 16,
    },
});

export default Stopwatch;