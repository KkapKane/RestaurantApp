import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";
import { useNavigate } from "react-router-native";
import { useEffect, useState } from "react";

export default function NavBar({ category, setCategory, page, setPage, cart }) {

  const navigate = useNavigate();
  function navto(location) {
    navigate(location);
  }

  const [qt, setQt] = useState(0);

  /* fetch cart quantity */
  useEffect(() => {
    if (cart) {
      setQt(
        cart.reduce((prev = 0, curr) => {
          return prev + curr.quantity;
        }, 0)
      )
    }
  }, [cart])

  const handleHomeBtn = () => {
    if (page == 'cart') {
      return Alert.alert('This will empty your cart', 'Go back to Home?', [
        {
          text: 'Cancel',
        },
        {
          text: 'OK',
          onPress: () => navto("/"),
        }
      ],
        {
          cancelable: true,
        });
    }
    else {
      navto("/")
    }
  }

  return (
    <View style={styles.navBar}>
      <TouchableOpacity style={styles.navBtn} onPress={handleHomeBtn}>
        <Ionicons
          name='home-outline'
          size={30}
        />
        <Text>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navBtn}
        onPress={() => { setCategory('orderConfirm'); setPage('orderConfirm') }}
      >
        <MaterialCommunityIcons
          name='history'
          size={30}
          color={page == "orderConfirm" ? "#119DA4" : null}
        />
        <Text style={page == "orderConfirm" ? { color: "#119DA4" } : null}>
          History
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navBtn}
        onPress={() => { setCategory("all"); setPage('main') }}
      >
        <MaterialIcons
          name='menu-book'
          size={30}
          color={category == "all" ? "#119DA4" : null}
        />
        <Text style={category == "all" ? { color: "#119DA4" } : null}>
          Browse All
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navBtn}
        onPress={() => { setCategory('food'); setPage('main') }} >
        <Entypo
          name='bowl'
          size={30}
          color={category == 'food' || category == 'appetizers' || category == 'entrees' ? '#119DA4' : null}
        />
        <Text style={category == 'food' || category == 'appetizers' || category == 'entrees' ? { color: '#119DA4' } : null}>
          Food
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navBtn}
        onPress={() => { setCategory('drinks'); setPage('main') }}>
        <MaterialCommunityIcons
          name='tea-outline'
          size={30}
          color={category == 'drinks' ? '#119DA4' : null}
        />
        <Text style={category == 'drinks' ? { color: '#119DA4' } : null}>
          Drinks
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navBtn}
        onPress={() => { setCategory('cart'); setPage('cart') }}>
        <MaterialCommunityIcons
          name='food-takeout-box-outline'
          size={30}
          color={category == 'cart' ? '#119DA4' : null}
        />
        <View style={{ flexDirection: 'row' }}>
          <Text style={category == 'cart' ? { color: '#119DA4' } : null}>
            Cart ({qt})
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navBar: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    paddingHorizontal: 5,
    backgroundColor: "#fff",
  },
  navBtn: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
