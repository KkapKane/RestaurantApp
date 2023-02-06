import { StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard } from "react-native";
import { useEffect, useState } from "react";
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function OrderOptions({ current, item, setItem, cart, setCart, setPage }) {

    const [input, setInput] = useState();
    const [qInput, setQInput] = useState(1);

    /* changes item everytime input is changed */
    useEffect(() => {
        setItem({
            img: current.img,
            name: current.name,
            price: current.price,
            quantity: qInput,
            instructions: input,
        });
    }, [qInput, input])

    /* pushes item into cart only when add to cart button is pressed */
    const addCart = () => {
        Keyboard.dismiss();
        if (qInput >= 1) {
            if (!cart) {
                setCart([item]);
            }
            else {
                setCart([...cart, item]);
            }
            setInput(null);
            setQInput("1");
        }
        else {
            setInput(null);
            setQInput("1");
            return;
        }
        const timeout = setTimeout(() => setPage('main'), 200);
        return () => clearTimeout(timeout);
    }

    /* function to add/subtract quantity */
    const qtyBtn = (mode) => {
        if (mode == '+') {
            setQInput(qInput + 1);
        }
        if (mode == '-') {
            setQInput(qInput - 1);
        }
    }

    /* quantity cannot be a negative number */
    useEffect(() => {
        if (parseInt(qInput) < 0) {
            setQInput('0')
        }
    }, [qInput])

    return (
        <View style={styles.container}>
            <View style={styles.orderOptions}>
                {/* special instructions for product */}

                <TextInput
                    editable
                    multiline
                    numberOfLines={3}
                    style={styles.input}
                    placeholder="Special Instructions..."
                    onChangeText={text => setInput(text)}
                    value={input} />

                {/* bottom buttons */}
                <View style={styles.buttons}>
                    {/* quantity for product */}
                    {qInput > 0 ?
                        <TouchableOpacity onPress={() => qtyBtn('-')} style={styles.qBtn}>
                            <Ionicons name="remove" size={20} color="white" />
                        </TouchableOpacity>
                        :
                        <TouchableOpacity style={styles.qBtn}>
                            <Ionicons name="remove" size={20} color="white" />
                        </TouchableOpacity>
                    }

                    <Text style={[styles.qInput, { marginRight: 5 }]}>{qInput}</Text>

                    <TouchableOpacity onPress={() => qtyBtn('+')} style={styles.qBtn}>
                        <Ionicons name="add" size={20} color="white" />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={addCart} style={[styles.qBtn, { flex: 1, alignItems: 'center' }]}>
                        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Add {qInput} to Cart</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    orderOptions: {
        height: '100%',
        paddingBottom: 60,
        paddingHorizontal: 10,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    input: {
        borderWidth: 1,
        borderColor: '#d1d1d1',
        borderRadius: 10,
        padding: 5,
        marginTop: 5,
        fontSize: 16,
        textAlignVertical: 'top',
    },
    qInput: {
        width: 30,
        borderWidth: 1,
        borderColor: '#d1d1d1',
        borderRadius: 10,
        fontSize: 16,
        padding: 5,
        textAlign: 'center',
    },
    buttons: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    qBtn: {
        backgroundColor: '#13505B',
        padding: 6,
        marginRight: 5,
    }
});