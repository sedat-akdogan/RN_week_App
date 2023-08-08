import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';


const MyState = () => {
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(true);
    const [toggleText, setToggleText] = useState('Show');

    const handleToggle = () => {
        if (isPasswordVisible) {
            setIsPasswordVisible(false);
            setToggleText('Hide');
        } else {
            setIsPasswordVisible(true);
            setToggleText('Show');
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                secureTextEntry={isPasswordVisible}
                style={styles.input}
            value={password}
            onChangeText={setPassword}
            />
            <TouchableOpacity onPress={handleToggle}>
                <Text style={{ fontSize: 20 }}>{toggleText}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: 400, 
        height: 50, 
        backgroundColor: '#a7a6a9', 
        color: 'white', 
        fontSize: 20,
    }
});

export default MyState;


// import React, { Component } from 'react';
// import { Text, View } from 'react-native';


// class MyState extends Component {
//     state = {
//         theState: 'This is a text component, created using state data. It will change'
//     }

//     updateState= () => this.setState({theState: 'The state is updated' });
//     render() {
//         return (
//             <View>
//                 <Text onPress={this.updateState}>{this.state.theState} </Text> 
//             </View>
//         );
//     }
// }

// export default MyState;
