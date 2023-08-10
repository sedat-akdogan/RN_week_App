import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, View, Text, StyleSheet } from 'react-native';



const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, color: 'red', marginBottom: 20 }}>
        Welcome to Home Screen!
      </Text>
      <Button
        title='Go to Details'
        onPress={() => navigation.navigate('Detail')}
      />
      <Button
        title='Go to MyList'
        onPress={() => navigation.navigate('MyList')}
      />
      <Button
        title='Go to MyState'
        onPress={() => navigation.navigate('MyState')}
      />
      <Button
        title='Go to MyButton'
        onPress={() => navigation.navigate('MyButton')}
      />
      <Button
        title='Go to Flex'
        onPress={() => navigation.navigate('Flex')}
      />
      <Button
        title='Go to Activity'
        onPress={() => navigation.navigate('Activity')}
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
