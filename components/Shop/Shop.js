
import { StyleSheet, View, Keyboard } from 'react-native';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';
import Menu from './Menu';
import NavBar from './NavBar';
import Product from './Product';
import Cart from './Cart';

export default function Shop() {
  const [loading, setLoading] = useState(false);

  const [category, setCategory] = useState('all');

  const [page, setPage] = useState('main');

  const [current, setCurrent] = useState([{}]);

  const [foods, setFoods] = useState([]);

  const [drinks, setDrinks] = useState([]);

  async function fetchProducts(type) {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://puce-beautiful-beaver.cyclic.app/restaurant/menu/" + type
      );
      if (type == "foods") {
        setFoods(response.data);
      }
      if (type == "drinks") {
        setDrinks(response.data);
      }
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProducts("foods");
    fetchProducts("drinks");
  }, []);


  /* determine if keyboard is open */
  const [kb, setKb] = useState(false);

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", () => {
      setKb(true);
    })
    Keyboard.addListener("keyboardDidHide", () => {
      setKb(false);
    })
  }, [])

  /* Cart */
  const [item, setItem] = useState()
  const [cart, setCart] = useState([]);


  useEffect(() => {
    if (!cart) return;
    console.log(cart)
  }, [cart])

  return (
    <View style={styles.container}>
      <Header
        page={page}
        setPage={setPage}
      />

      {page == 'main' ?
        <Menu
          loading={loading}
          foods={foods}
          drinks={drinks}
          category={category}
          setCategory={setCategory}
          setPage={setPage}
          setCurrent={setCurrent}
        />
        : null}

      {page == 'product' ?
        <Product
          current={current}
          item={item}
          setItem={setItem}
          cart={cart}
          setCart={setCart}
          kb={kb} />
        : null}

      {page == 'cart' ?
        <Cart
          cart={cart}
          setCart={setCart}
        />
        : null}


      {/* hide navbar when keyboard is out */}
      {!kb ?
        <NavBar
          category={category}
          setCategory={setCategory}
          setPage={setPage}
          cart={cart}
        />
        : null}


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
