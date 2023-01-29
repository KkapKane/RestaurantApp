import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Home from './components/Home';
import Shop from './components/Shop';
import Dashboard from './components/Dashboard';

export default function App() {

  const [page, setPage] = useState('home');

  return (
    <View style={styles.container}>
      {page == 'home' ? <Home setPage={setPage} /> : null}
      {page == 'shop' ? <Shop setPage={setPage} /> : null}
      {page == 'dashboard' ? <Dashboard setPage={setPage} /> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
