import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Stars from './Stars';

export default function Card({ i, setPage, setCurrent }) {

    const openProduct = () => {
        setCurrent(i);
        setPage('product');
    }

    return (
        <TouchableOpacity style={styles.card} onPress={openProduct}>
            <Image
                source={{ uri: `${i.img}` }}
                style={styles.image} />
            <View style={styles.text}>
                <Text style={styles.name}>{i.name}</Text>
                <Stars i={i} />
                <Text style={styles.price}>${i.price}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        paddingHorizontal: 25,
        paddingVertical: 15,
        marginTop: 1,
        backgroundColor: 'white',
    },
    image: {
        width: 150,
        height: 100,
    },
    text: {
        marginLeft: 20,
        flex: 1,
        justifyContent: 'center',
    },
    name: {
        fontSize: 20,

    },
    price: {
        fontSize: 15,
    }
});
