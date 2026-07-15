import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { useSelector } from 'react-redux';

const CartScreen = ({ navigation }) => {
  const { items, total } = useSelector(state => state.cart);

  if (items.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text>Your cart is empty</Text>
        <Button mode="contained">Continue Shopping</Button>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>Total: ${total.toFixed(2)}</Text>
      <Button mode="contained">Checkout</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  emptyContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});

export default CartScreen;