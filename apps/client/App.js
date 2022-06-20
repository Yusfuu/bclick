import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { store } from './app/store';
import Navigation from './navigation';
import 'react-native-gesture-handler';
import { useEffect } from 'react';
import { SignInAnonymously } from './firebase/client';
import { getAuth, onAuthStateChanged } from 'firebase/auth';


const auth = getAuth();


import { LogBox } from 'react-native';
LogBox.ignoreLogs(['AsyncStorage has been extracted from react-native core']);
LogBox.ignoreLogs(['Setting a timer']);

export default function App() {

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Navigation />
        <StatusBar />
      </SafeAreaProvider>
    </Provider>
  );
}
