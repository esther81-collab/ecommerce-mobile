import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text variant="headlineLarge">Ecommerce Store</Text>
        <Text variant="bodyMedium">Welcome!</Text>
      </View>
      <Button mode="contained" style={styles.button}>
        Shop Now
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5' },
  header: { padding: 16, backgroundColor: '#007AFF' },
  button: { margin: 16 }
});

export default HomeScreen;