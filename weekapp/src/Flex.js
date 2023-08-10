import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button, Text, FlatList } from 'react-native';

const Flex = () => {
    const [placeName, setPlaceName] = useState('');
    const [place, setPlace] = useState([]);

    const handlePlaceChange = (val) => {
        console.log(val)
        setPlaceName(val);
    }

    const handlePlace = () => {
        if (placeName.trim() !== '') {
            setPlace((prevPlace) => [...prevPlace, placeName]);
            setPlaceName('');
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                placeholder='An awesome place'
                style={StyleSheet.placeInput}
                onChangeText={handlePlaceChange}
                value={placeName}
            />
            <Button
                title='Add Place'
                onPress={handlePlace}
            />
            <FlatList
                data={place}
                renderItem={({ item }) => <Text>{item}</Text>}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 26,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
    },
    placeInput: {
        width: '70%',
    },
});

export default Flex;
