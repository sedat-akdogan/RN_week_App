import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Home';
import Detail from './Detail';
import MyList from './MyList';
// import Record from './Record';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{ title: 'Details' }}
        />
        <Stack.Screen
          name="MyList"
          component={MyList}
          options={{ title: 'MyList' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
