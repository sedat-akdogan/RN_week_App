import { useRef } from 'react';
import { StyleSheet, View, Text, Button, Alert } from 'react-native';


const UseRef = () => {

    let ref = useRef(0);

    function handleClick() {  
        ref.current = ref.current + 1;
    }
    console.log(ref.current);

    return (
        <View style={styles.container}>
            <Text>Counter:  {ref.current}</Text>
            <Button
                onPress={handleClick}
                title='Click me'
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
    },
    text: {
        margin: 10,
        height: 44,
    },
});

export default UseRef;