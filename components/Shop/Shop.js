import { StyleSheet, Text, View, TouchableOpacity, ScrollView, ActivityIndicator, Image } from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from './NavBar';
import Menu from './Menu';

export default function Shop({ setPage }) {

  const [loading, setLoading] = useState(false);

  const [foods, setFoods] = useState([]);

  const [drinks, setDrinks] = useState([])

  const [category, setCategory] = useState('all');

  async function fetchProducts(type) {
    try {
      setLoading(true);
      const response = await axios.get('https://puce-beautiful-beaver.cyclic.app/restaurant/menu/' + type);
      if (type == 'foods') {
        setFoods(response.data);
      }
      if (type == 'drinks') {
        setDrinks(response.data);
      }
    }

    catch (error) {
      console.error(error);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProducts('foods');
    fetchProducts('drinks');
  }, []);

  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Browse Menu</Text>
        <EvilIcons name='search' size={30} />
      </View>

      <Menu
        setPage={setPage}
        loading={loading}
        foods={foods}
        drinks={drinks}
        category={category}
        setCategory={setCategory} />

      <NavBar
        setPage={setPage}
        category={category}
        setCategory={setCategory} />
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  header: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  menuContainer: {
    width: '100%',
    marginBottom: 60,
  },
  foodCard: {
    display: 'flex',
    justifyContent: 'center'
  },
  foodName: {
    fontSize: 20,
  },
  foodPrice: {
    fontSize: 15,
    textAlign: 'right'
  }
});
