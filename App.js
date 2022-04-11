import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useEffect } from 'react';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

export default function App() {
  useEffect(() => {
    setInterval(() => {
      recordTemperature(getRandomInt(-100, 100));
    }, 1000);
  }, [])

  function recordTemperature(temp) {

  }

  function avgTempPast24Hours() {

  }

  function maxTempPast24Hours() {
    
  }

  return (
    <View style={styles.container}>
    
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
