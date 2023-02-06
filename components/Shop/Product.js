import { StyleSheet, Text, View, Image } from "react-native";
import Stars from './Stars';
import OrderOptions from "./OrderOptions";

export default function Product({ current, item, setItem, cart, setCart, kb, setPage }) {

    return (
        <View style={styles.container}>
            {/* hide image and description when keyboard is out */}
            {!kb ?
                <View style={{ width: '100%' }}>
                    <Image
                        source={{ uri: `${current.img}` }}
                        style={styles.image}
                    />
                    <View style={{ marginHorizontal: 10 }}>
                        {/* product information */}
                        <View>
                            <Text style={styles.name}>{current.name}</Text>
                            <Text style={styles.nativeName}>{current.native_name}</Text>
                        </View>
                        <View style={styles.prContainer}>
                            <Text style={styles.price}>${current.price}</Text>
                            <Stars i={current} />
                        </View>
                        <Text style={styles.description}>{current.description}</Text>
                    </View>
                </View>
                :
                <View style={{ width: '100%' }}>
                    <View style={{ marginHorizontal: 10 }}>
                        <Text style={styles.name}>{current.name}</Text>
                        <View style={styles.prContainer}>
                            <Text style={styles.price}>${current.price}</Text>
                            <Stars i={current} />
                        </View>
                    </View>
                </View>
            }

            <OrderOptions
                current={current}
                item={item}
                setItem={setItem}
                cart={cart}
                setCart={setCart}
                setPage={setPage} />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: '100%',
        backgroundColor: "#fff",
    },
    image: {
        marginTop: 10,
        width: '100%',
        height: 240,
    },
    name: {
        marginTop: 10,
        fontSize: 22,
        fontWeight: 'bold',
    },
    nativeName: {
        marginTop: -5,
        fontSize: 16,
        fontStyle: 'italic',
    },
    prContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    price: {
        fontSize: 20,
        marginRight: 10,
    },
    description: {
        fontSize: 16,
        color: '#13505B',
    },
});