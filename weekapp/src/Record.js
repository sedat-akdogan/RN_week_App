import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';


const Record = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text>Welcome to Colors Section</Text>
                <Button
                    title='back Home'
                    onPress={()=> navigation.navigate('Home')}
                />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        color: 'pick',
    }
});

export default Record;