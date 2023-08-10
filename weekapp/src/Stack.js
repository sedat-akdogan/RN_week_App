import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Home';
import Detail from './Detail';
import MyList from './MyList';
import MyState from './MyState';
import MyButton from './Button';
import Flex from './Flex';
import Activity from './Activity';

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
        <Stack.Screen
          name="MyState"
          component={MyState}
          options={{ title: 'MyState' }}
        />
        <Stack.Screen
          name="MyButton"
          component={MyButton}
          options={{ title: 'MyButton' }}
        />
        <Stack.Screen
          name="Flex"
          component={Flex}
          options={{ title: 'Flex' }}
        />
        <Stack.Screen
          name="Activity"
          component={Activity}
          options={{ title: 'Activity' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
