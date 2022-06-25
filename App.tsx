import React from 'react';
import { NativeBaseProvider } from 'native-base';
import HomeStack from './components/organisms/HomeStack';
import { Store } from './Store';

export default function App() {
  return (
    <Store>
      <NativeBaseProvider>
        <HomeStack />
      </NativeBaseProvider>
    </Store>
  );
}
