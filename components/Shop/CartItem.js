import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function CartItem({ c, i, cart, setCart }) {

    /* function to add/subtract quantity */
    const qtyBtn = (mode) => {
        const cartCopy = cart.slice(0);
        if (mode == '+') {
            cartCopy[i].quantity = c.quantity + 1;
        }
        if (mode == '-') {
            cartCopy[i].quantity = c.quantity - 1;
        }
        setCart(cartCopy);
    }

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: `${c.img}` }}
                style={styles.image} />
            <View style={{ flexGrow: 1, marginLeft: 5 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={[styles.header, { fontSize: 16, flex: 1, flexWrap: 'wrap' }]}>{c.name}</Text>
                </View>
                <Text>Special Instructions:</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text numberOfLines={2} style={styles.instructions}>{c.instructions}</Text>
                </View>

            </View>
            <View style={styles.section}>
                <View style={{ flexDirection: 'row' }}>
                    <View>
                        <Text style={styles.header}>Price</Text>
                        <Text>${c.price}</Text>
                    </View>

                    {/* quantity */}
                    <View style={styles.section}>
                        <Text style={[styles.header, { textAlign: 'center' }]}>Qty</Text>
                        <View style={{ flexDirection: 'row', flexGrow: 1 }}>
                            {c.quantity > 0 ?
                                <TouchableOpacity onPress={() => qtyBtn('-')} style={styles.qBtn}>
                                    <Ionicons name="remove" size={14} color="white" />
                                </TouchableOpacity>
                                :
                                <TouchableOpacity style={styles.qBtn}>
                                    <Ionicons name="remove" size={14} color="white" />
                                </TouchableOpacity>
                            }

                            <Text style={[styles.qInput, { marginRight: 2 }]}>{c.quantity}</Text>

                            <TouchableOpacity onPress={() => qtyBtn('+')} style={styles.qBtn}>
                                <Ionicons name="add" size={14} color="white" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.header}>Subtotal</Text>
                    <Text>${c.price * c.quantity}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: 'row',
        padding: 8,
        marginBottom: 8,
    },
    image: {
        width: 80,
        height: 80,
    },
    section: {
        marginLeft: 5,
    },
    header: {
        fontWeight: 'bold',
    },
    instructions: {
        flex: 1,
        flexWrap: 'wrap',
    },
    qInput: {
        borderWidth: 1,
        borderColor: '#d1d1d1',
        borderRadius: 3,
        paddingHorizontal: 5,
        textAlign: 'center',
    },
    qBtn: {
        backgroundColor: '#13505B',
        padding: 3,
        marginRight: 2,
    }
});