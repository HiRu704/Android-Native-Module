//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import Android from './component/Android';
import Ios from './component/Ios';

// create a component
const App = () => {
  return (
    Platform.OS == 'android' ? 
    <Android /> 
    :
  <Ios />
  );
};

// define your styles
const styles = StyleSheet.create({
  
});

//make this component available to the app
export default App;
