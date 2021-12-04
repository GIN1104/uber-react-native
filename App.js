import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';
import { Provider } from "react-redux";
import  { store } from "./store";
import HomeScreen from "./screens/HomeScreen"


export default function App() {
  return (
<Provider store={store}>
  <SafeAreaView style={styles.droidSafeArea}> 
    <HomeScreen/>
    {/* <StatusBar style="auto"/> */}
    </SafeAreaView>
</Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
//   droidSafeArea: {
//     paddingTop: Platform.OS === 'android' ? 25 : 0,

// },
});
