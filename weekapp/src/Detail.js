import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import 'react-native-get-random-values'
import {WebView} from 'react-native-webview';
import {v4 as uuidv4} from 'uuid';

const Detail = () => {
  const navigation = useNavigation();
  const [text, setText] = useState('');
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>This is the details page</Text>
      <View style={{ padding: 10 }}>
        <TextInput
          style={{ height: 40 }}
          placeholder='type your items'
          onChangeText={newText => setText(newText)}
          defaultValue='text'
        />
      </View>
      <TextInputExample />
      <Button
        title="Go back to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};


const TextInputExample = () => {

  const [item, setItem] = useState({
    id: uuidv4(),
    model: undefined,
    year: undefined,
    make: undefined,
    origin: undefined,
    color: undefined,
    category: undefined,
    image: undefined,
    desc: undefined,
  });

  const handleInputChange = (field, value) => {
    setItem(prevState => ({ ...prevState, [field]: value }));
  };

  return (
    <View style={styles.container}>
      <Text>Enter your text:</Text>
      <View style={styles.inputGroup}>
        <Text style={styles.inputLabel}>Model</Text>
        <TextInput
          placeholder="Model"
          style={styles.textInputBottomBordered}
          onChangeText={value => handleInputChange('model', value)}
        />
      </View>
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
