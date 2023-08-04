import React from 'react';
import type {PropsWithChildren} from 'react';
import MyStack from './src/Stack';
import {View} from 'react-native';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): JSX.Element {
  return (
    <View style={{flex: 1}}>
      <MyStack />
    </View>
  );
}

export default App;
