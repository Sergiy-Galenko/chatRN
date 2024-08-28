import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Alert } from 'react-native';

const LoadingScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          Alert.alert('Завантаження завершено', 'Додаток завантажився');
          navigation.navigate('WelcomeScreen');
          return prev;
        }
        return prev + 1;
      });
    }, 30); // Обновление прогресса каждые 30 мс

    return () => clearInterval(interval); // Очистка интервала при размонтировании
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Завантаження MyChatApp...</Text>
      <ActivityIndicator size="large" color="#42a6f5" />
      <Text style={styles.progressText}>{progress}%</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  progressText: {
    fontSize: 16,
    marginTop: 20,
  }
});

export default LoadingScreen;