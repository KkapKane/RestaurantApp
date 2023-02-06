import { StyleSheet, Text, ScrollView, View, TouchableOpacity } from "react-native";
import CartItem from "./CartItem";
import { useState, useEffect } from "react";
import AntDesign from 'react-native-vector-icons/AntDesign';
import CartModal from "./CartModal";

export default function Cart({ cart, setCart }) {

    const display = () => {
        return (
            cart.map((c, i) => {
                if (c.quantity > 0) {
                    return (
                        <CartItem
                            c={c}
                            key={i}
                            i={i}
                            cart={cart}
                            setCart={setCart}
                        />
                    );
                }
            })
        )
    }

    const [qty, setQty] = useState();
    /* fetch cart quantity */
    useEffect(() => {
        if (cart) {
            setQty(
                cart.reduce((prev = 0, curr) => {
                    return prev + curr.quantity;
                }, 0)
            )
        }
    }, [cart])

    const [total, setTotal] = useState();
    /* fetch cart total */
    useEffect(() => {
        if (cart) {
            setTotal(
                cart.reduce((prev = 0, curr) => {
                    return prev + (curr.quantity * curr.price);
                }, 0)
            )
        }
    }, [cart])

    let tax = Math.round((total * 0.0825) * 100) / 100;
    let gTotal = total + tax;

    /* modal for empty cart confirmation */
    const [modalShow, setModalShow] = useState(false);

    return (
        <View style={styles.container}>

            <CartModal
                modalShow={modalShow}
                setModalShow={setModalShow}
            />

            {/* cart display */}
            <ScrollView>
                {display()}

                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <TouchableOpacity style={styles.emptyBtn} onPress={() => setModalShow(true)}>
                        <Text style={{ fontWeight: '600' }}>Empty Cart</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            {/* totals */}
            <View style={styles.totals}>
                <View style={{ flexGrow: 1, alignItems: 'flex-end', marginRight: 15 }}>
                    <Text style={[styles.totalsHeader, styles.totalsText]}>Cart Summary</Text>
                    <Text style={styles.totalsText}>Items: {qty}</Text>
                    <Text style={styles.totalsText}>Subtotal: ${total}</Text>
                    <Text style={styles.totalsText}>Sales Tax (8.25%): ${tax}</Text>
                    <Text style={styles.totalsText}>Grand Total: ${gTotal}</Text>
                </View>
                <TouchableOpacity style={styles.checkout}>
                    <AntDesign name='creditcard' size={30} color='white' />
                    <Text style={styles.totalsText}>Checkout</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: "#fff",
        marginBottom: 60,
    },
    emptyBtn: {
        width: 120,
        borderWidth: 1,
        borderRadius: 30,
        borderColor: '#d1d1d1',
        paddingVertical: 8,
        marginVertical: 8,
        alignItems: 'center',
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 2,
        elevation: 4,
    },
    totals: {
        width: '100%',
        flexDirection: 'row',
        backgroundColor: '#13505B',
        paddingVertical: 5,
    },
    totalsHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    totalsText: {
        color: 'white'
    },
    checkout: {
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
        margin: 5,
    }
});