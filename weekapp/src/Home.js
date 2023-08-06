import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, View, Text, StyleSheet } from 'react-native';


const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20 }}>
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
