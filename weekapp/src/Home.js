import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, View, Text, StyleSheet } from 'react-native';


const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20 }}>
        Welcome to Home Screen!
      </Text>
      <Button
        title="Go to List"
        onPress={() => navigation.navigate("List")}
      />
      <Button
        title='Go to Detail'
        onPress={() => navigation.navigate('Detail')}
      />
      <Button
        title='Go to Record'
        onPress={() => navigation.navigate('Record')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  }
});

export default Home;
