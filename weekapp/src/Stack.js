import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './Home';
import List from './List';
import Detail from './Detail';
import Record from './Record';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Home'}}
        />
        <Stack.Screen 
        name="List" 
        component={List}
        options={{title: 'List'}}
        />
        <Stack.Screen 
        name="Detail" 
        component={Detail}
        options={{title: 'Detail'}}
        />
        <Stack.Screen 
        name="Record" 
        component={Record}
        options={{title: 'Record'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;