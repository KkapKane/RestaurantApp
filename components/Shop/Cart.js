import { StyleSheet, Text, ScrollView, View } from "react-native";
import CartItem from "./CartItem";
import { useState, useEffect } from "react";

export default function Cart({ cart, setCart }) {

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

    let tax = total * 0.07;
    let gTotal = total + tax;

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

    return (
        <View style={styles.container}>
            <ScrollView>
                {display()}
            </ScrollView>

            <View style={styles.totals}>
                <Text>totals</Text>
                <Text>Qty: {qty}</Text>
                <Text>Total: ${total}</Text>
                <Text>Sales Tax (7%): ${tax}</Text>
                <Text>Grand Total: ${gTotal}</Text>
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
    totals: {
        width: '100%',
        backgroundColor: 'peachpuff'
    }
});