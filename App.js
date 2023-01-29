import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Home from './components/Home';
import Shop from './components/Shop';
import Dashboard from './components/Dashboard';

export default function App() {

  const [home, setHome] = useState(true);
  const [shop, setShop] = useState(false);
  const [dashboard, setDashboard] = useState(false);

  const openHome = () => {
    setHome(true);
    setShop(false);
    setDashboard(false);
  }

  const openShop = () => {
    setHome(false);
    setShop(true);
    setDashboard(false);
  }

  const openDashboard = () => {
    setHome(false);
    setShop(false);
    setDashboard(true);
  }

  return (
    <View style={styles.container}>
      {home ?
        <Home openShop={openShop}
          openDashboard={openDashboard} />
        : null}
      {shop ? <Shop openHome={openHome} /> : null}
      {dashboard ? <Dashboard openHome={openHome} /> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D7D9CE',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
