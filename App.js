import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Home from './components/Home';
import Menu from './components/Menu';

export default function App() {
  return (
    <SafeAreaView style={{backgroundColor:'white'}}>
           <Home/>
    </SafeAreaView>
     
    )}

