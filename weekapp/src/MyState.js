import React from 'react';
import { Text, View, StyleSheet } from 'react-native';


const Child = ({ name }) => {
    return (
        <View style={{ alignItems: 'center' }}>
            <Text>Hello { name }</Text>
        </View>
    );
};

const Parent = () => {
    return (
        <View style={StyleSheet.view1}>
            <View style={styles.view1a}><Child name='Cassandra' /></View>
            <View style={styles.view1b}><Child name='Afua' /></View>
            <View style={styles.view1c}><Child name='Ewurama' /></View>
        </View>
    );
};

const styles = StyleSheet.create({
    view1: {
        flex: 1,
        // alignItems: 'center', 
        backgroundColor: 'pink', 
        // margin: 20, 
        // padding: 20
    },
    view1a: {
        flex: 1,
        // width: 100, 
        // height: 100,
        backgroundColor: 'powderblue',
    },
    view1b: {
        flex: 2,
        // width: 200, 
        // height: 200,
        backgroundColor: 'skyblue',
    },
    view1c: { 
        flex: 3,
        // height: 300,
        backgroundColor: 'steelblue',
    },
});


export default Parent;

// import React, { useState } from 'react';
// import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';


// const MyState = () => {
//     const [password, setPassword] = useState('');
//     const [isPasswordVisible, setIsPasswordVisible] = useState(true);
//     const [toggleText, setToggleText] = useState('Show');

//     const handleToggle = () => {
//         if (isPasswordVisible) {
//             setIsPasswordVisible(false);
//             setToggleText('Hide');
//         } else {
//             setIsPasswordVisible(true);
//             setToggleText('Show');
//         }
//     };

//     return (
//         <View style={styles.container}>
//             <TextInput
//                 secureTextEntry={isPasswordVisible}
//                 style={styles.input}
//             value={password}
//             onChangeText={setPassword}
//             />
//             <TouchableOpacity onPress={handleToggle}>
//                 <Text style={{ fontSize: 20 }}>{toggleText}</Text>
//             </TouchableOpacity>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     input: {
//         width: 400, 
//         height: 50, 
//         backgroundColor: '#a7a6a9', 
//         color: 'white', 
//         fontSize: 20,
//     }
// });

// export default MyState;


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
