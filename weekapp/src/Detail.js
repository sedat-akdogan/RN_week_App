import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
// import {v4 as uuidv4} from 'uuid';
import uuid from 'react-native-uuid';


const Detail = () => {
  const navigation = useNavigation();
  const [myInput, setMyInput] = useState('State');

  const handleChange = (text) => {
    setMyInput(text);
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>This is the details page</Text>
      <View style={{ padding: 10 }}>
        <Text>{myInput}</Text>
        <TextInput
          style={{ height: 40 }}
          placeholder='type your items'
          onChangeText={newText => handleChange(newText)}
          
        />
      </View>

      <TextInputExample handleChange_prop={handleChange}/>
      <Button
        title="Go back to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};


const TextInputExample = ({handleChange_prop}) => {
  const [item, setItem] = useState({
    id: uuid.v4(),
    model: undefined,
    year: undefined,
    make: undefined,
    origin: undefined,
    color: undefined,
    category: undefined,
    image: undefined,
    desc: undefined,
  });

  const handleSubmit = (input) => {
    setMyInput(input);

  }

  const handleInputChange = (field, value) => {
    setItem(prevState => ({ ...prevState, [field]: value }));
  };

  return (
    <View style={styles.container}>
      <Text>Enter your text:</Text>
      <View style={styles.inputGroup}>
        <Text style={styles.inputLabel}>this is the text</Text>
        <TextInput
          placeholder="Model"
          style={styles.textInputBottomBordered}
          onChangeText={value => handleChange_prop(value)}
        />
      </View>
      <Button 
       title="Add new list items: "
       onPress={(input) => handleSubmit(input) }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 8,
    marginTop: 8,
  },
});


export default Detail;
