//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, NativeModules, DeviceEventEmitter, TextInput } from 'react-native';

const { CalenderModule } = NativeModules
// create a component
const Android = () => {

  const [number, onChangeNumber] = React.useState(null);
  const [name, onChangeName] = React.useState("");
  const [Result, setResult] = React.useState(null);

  useEffect(() => {
    DeviceEventEmitter.addListener('Success' , getaddition, false)

    return () => {
      DeviceEventEmitter.removeAllListeners
    }
  }, [])
  
  
  const getaddition = (val) => {
    console.log("vallue", val);
    setResult(val)
  }
  
  
  const handle = () => {
    let hiren = "hiren"
    let location = "Surat"
    // CalenderModule.Logging(hiren,location)
    // CalenderModule.Logging("Hiren", "Surat")
    console.log(typeof Number(number))  

    CalenderModule.Log(name)
    CalenderModule.Addition(Number(number))
    
    // console.log("CaLLED")
  }

  return (
    <View style={styles.container}>
      <View style={{}} >

     <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Enter Number"
        keyboardType="numeric"
        />
     <TextInput
        style={styles.input}
        onChangeText={onChangeName}
        value={name}
        placeholder="Enter name"

        />
        </View>
      <Text style={{fontSize: 30}} onPress={() => handle()} >Add 100</Text>
      <Text>valuei is {Result}</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0000',
  },
  input: {
    // height: 40,
alignItems: 'center',
paddingHorizontal: 100,
    margin: 12,
    borderWidth: 1,
    // padding: 10,

    textAlign: 'center'
  },
});

//make this component available to the app
export default Android;
