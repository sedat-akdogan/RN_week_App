import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Button } from 'react-native';

const Detail = () => {
  const navigation = useNavigation()
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to Profile Screen!</Text>
      <Button
        title="Go back to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default Detail;