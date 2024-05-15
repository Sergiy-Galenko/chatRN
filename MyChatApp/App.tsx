import React from 'react';
import { StyleSheet, View } from 'react-native';
import WelcomeScreen from './src/pages/WelcomeScreen';

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <WelcomeScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  }
});

export default App;
