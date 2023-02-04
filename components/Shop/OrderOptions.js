import { StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard } from "react-native";
import uuid from 'react-native-uuid';
import { useEffect, useState } from "react";
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function OrderOptions({ current, item, setItem, cart, setCart }) {

    const [input, setInput] = useState();
    const [qInput, setQInput] = useState("1");

    useEffect(() => {
        setItem({
            id: uuid.v4(),
            img: current.img,
            name: current.name,
            price: current.price,
            quantity: qInput,
            instructions: input,
        });
    }, [])

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
    }

    const qtyBtn = (mode) => {
        if (mode == '+') {
            let num = parseInt(qInput) + 1;
            setQInput(num.toString())
        }
        if (mode == '-') {
            let num = parseInt(qInput) - 1;
            setQInput(num.toString())
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.orderOptions}>
                {/* special instructions for product */}

                <TextInput
                    editable
                    multiline
                    numberOfLines={2}
                    style={styles.input}
                    placeholder="Special Instructions..."
                    onChangeText={text => setInput(text)}
                    value={input} />

                {/* bottom buttons */}
                <View style={styles.buttons}>
                    {/* quantity for product */}
                    <TouchableOpacity onPress={() => qtyBtn('-')} style={styles.qBtn}>
                        <Ionicons name="remove" size={20} color="white" />
                    </TouchableOpacity>

                    <TextInput
                        style={[styles.qInput, { marginRight: 5 }]}
                        keyboardType="number-pad"
                        onChangeText={text => setQInput(text.replace(/[^0-9]/g, ''))}
                        value={qInput} />

                    <TouchableOpacity onPress={() => qtyBtn('+')} style={styles.qBtn}>
                        <Ionicons name="add" size={20} color="white" />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={addCart} style={[styles.qBtn, { flex: 1, alignItems: 'center' }]}>
                        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Add to Cart</Text>
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
        paddingHorizontal: 5,
        marginTop: 5,
        fontSize: 16,
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