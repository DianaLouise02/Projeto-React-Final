import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native';
import Header from './src/Components/Header';
import MainNavigator from './MainNavigator';

export default function App() {
  return (

    <>
      <Header />
      <MainNavigator />
    </>


  );
}


