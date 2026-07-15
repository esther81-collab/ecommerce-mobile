import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/slices/authSlice';

const ProfileScreen = () => {
  const { user } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">{user?.email || 'Guest'}</Text>
      <Button mode="contained" onPress={() => dispatch(logout())} style={styles.button}>
        Logout
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  button: { marginTop: 16 }
});

export default ProfileScreen;