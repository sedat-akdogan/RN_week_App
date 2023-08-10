import React, { useState, useEffect } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

const Activity = () => {

    const [animating, setAnimating] = useState(true);

    useEffect(() => {
        const closeActivity = () => {
            setTimeout(() => setAnimating(false), 5000);
        };

        closeActivity();

    }, []);

    return (
        <View style={[ styles.container, styles.horizontal ]}>
            <ActivityIndicator animating={animating} size='large' color="#ff0000" />
            <ActivityIndicator size='large' color='#44ff00' />
            <ActivityIndicator size='large' color='#rtwrw' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },
});

export default Activity;
