import { StyleSheet, View } from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import Menu from "./Menu";
import NavBar from "./NavBar";

export default function Shop() {
  const [loading, setLoading] = useState(false);

  const [foods, setFoods] = useState([]);

  const [drinks, setDrinks] = useState([]);

  const [category, setCategory] = useState("all");

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

  return (
    <View style={styles.container}>
      <Header />

      <Menu
        loading={loading}
        foods={foods}
        drinks={drinks}
        category={category}
        setCategory={setCategory}
      />

      <NavBar category={category} setCategory={setCategory} />
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
