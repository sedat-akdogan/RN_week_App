import React, { Component } from 'react';
import { Alert, Button, StyleSheet, View, _View } from 'react-native';

const MyButton = () => {
    const onPressButton = () => {
        Alert.alert('You clicked the Button!');
    };

    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <Button 
                    onPress={onPressButton}
                    title='Press Me!'
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button 
                    onPress={onPressButton}
                    title='Press Me!'
                    color='#009933'
                />
            </View>
            <View style={styles.multiButtonContainer}>
                <Button 
                    onPress={onPressButton}
                    title='A disabled Button'
                    disabled={true}

                />
                 <Button 
                    onPress={onPressButton}
                    title='OK'
                    color='#009933'
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    buttonContainer: {
        margin: 20,
    },
    multiButtonContainer: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});

export default MyButton;