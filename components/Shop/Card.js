import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function Menu({ i }) {

    return (
        <TouchableOpacity style={styles.card}>
            <Image
                source={{ uri: `${i.img}` }}
                style={styles.image} />
            <View style={styles.text}>
                <Text style={styles.name}>{i.name}</Text>
                <View>
                    <Text style={styles.price}>${i.price}</Text>
                    <Text>{i.rating}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        paddingHorizontal: 25,
        paddingBottom: 15,
        marginTop: 15,
        borderBottomColor: '#d1d1d1',
        borderBottomWidth: 1,
    },
    image: {
        width: 150,
        height: 100,
    },
    text: {
        marginLeft: 20,
        flex: 1,
    },
    name: {
        fontSize: 20,

    },
    price: {
        fontSize: 15,
    }
});
