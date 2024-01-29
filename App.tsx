import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, TouchableHighlight } from 'react-native';

import { FormProduct } from './components/form-product';
import { ListProducts } from './components/list-product';
import { Header } from './components/header';

export default function App() {
  const [showForm, setShowForm] = useState<boolean>(false);

  return (
    <SafeAreaView style={styles.container}>
    <Header onAddPress={() => setShowForm(true)}/>

    <ListProducts />
    <FormProduct
      isVisible={showForm}
      onHide={() => setShowForm(false)}
    />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
