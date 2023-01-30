import { StyleSheet, Text, View, TouchableOpacity, ScrollView, ActivityIndicator, FlatList, Image } from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Shop({ setPage }) {

    const [loading, setLoading] = useState(false);

    const [foods, setFoods] = useState([]);

    async function fetchFoods() {
        try {
            setLoading(true);
            const response = await axios.get('https://puce-beautiful-beaver.cyclic.app/restaurant/menu/foods');
            setFoods(response.data);
        }

        catch (error) {
            console.error(error);
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchFoods();
    }, []);



    const list = () => {
        return foods.map(food => {
            return (
          
                <View style={styles.foodCard}>
                    <Text style={styles.foodName}>{food.name}</Text>
                  <Image
                    source={{ uri: `${food.img}` }}
                    style={{ width: 400, height: 200 }}
                  />
                  
                  <Text style={styles.foodPrice}>${food.price}</Text>
                </View>
        
            );
        })
    }

    return (
      <View style={styles.container}>
        {/* header */}
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Browse Menu</Text>
          <EvilIcons name='search' size={30} />
        </View>

        {/* Menu Content */}
        <View style={styles.menuContainer}>
          <ScrollView>
            {!loading ? (
              foods !== undefined ? (
                /* insert menu maps */
                <View>{list()}</View>
              ) : (
                <ActivityIndicator size='large' />
              )
            ) : (
              <ActivityIndicator size='large' />
            )}
          </ScrollView>
        </View>

        {/* Bottom NavBar */}
        <View style={styles.navBar}>
          <TouchableOpacity
            style={styles.navBtn}
            onPress={() => setPage("home")}
          >
            <Ionicons name='home-outline' size={30} />
            <Text>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.navBtn}>
            <MaterialIcons name='menu-book' size={30} />
            <Text>Browse All</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.navBtn}>
            <Entypo name='bowl' size={30} />
            <Text>Food</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.navBtn}>
            <MaterialCommunityIcons name='tea-outline' size={30} />
            <Text>Drinks</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.navBtn}>
            <FontAwesome name='credit-card' size={30} />
            <Text>Payment</Text>
          </TouchableOpacity>
        </View>
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
        marginBottom: 60,
    },
    test: {
        fontSize: 30,
        backgroundColor: 'pink',
    },
    navBar: {
        width: '100%',
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        bottom: 0,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
    },
    navBtn: {
        alignItems: 'center',
        justifyContent: 'center'
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
