import { StyleSheet, ScrollView, Text, View, Image, KeyboardAvoidingView, TextInput, TouchableOpacity, Keyboard } from "react-native";
import Stars from './Stars';
import uuid from 'react-native-uuid';
import { useEffect, useState } from "react";

export default function Product({ current, item, setItem, cart, setCart }) {

    const [input, setInput] = useState();

    useEffect(() => {
        setItem({
            id: uuid.v4(),
            img: current.img,
            name: current.name,
            price: current.price,
            instructions: input,
        });
    }, [])

    const addCart = () => {
        Keyboard.dismiss();
        if (!cart) {
            setCart([item]);
        }
        else {
            setCart([...cart, item]);
        }
        setInput(null);
    }

    return (
        <View style={styles.container}>
            <ScrollView style={{ width: '100%' }}>
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

                    {/* special instructions for product */}
                    <KeyboardAvoidingView
                        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                        <TextInput
                            style={styles.input}
                            placeholder="Special Instructions..."
                            onChangeText={text => setInput(text)}
                            value={input} />
                        <TouchableOpacity onPress={addCart}>
                            <Text>Add to Cart</Text>
                        </TouchableOpacity>
                    </KeyboardAvoidingView>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: "#fff",
        alignItems: "center",
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
    input: {
        borderWidth: 1,
        borderColor: '#d1d1d1',
        borderRadius: 10,
        paddingHorizontal: 5,
        marginTop: 5,
    }
});