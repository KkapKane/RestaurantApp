import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Modal, Pressable, TextInput, Alert } from "react-native";
import axios from "axios";

export default function CartCheckoutModal({ modalCShow, setModalCShow, cart, setCart, qty, total, setPage, setOrderCheck, setCategory }) {

    const [order, setOrder] = useState([]);

    const [input, setInput] = useState('');

    useEffect(() => {
        var array = cart.filter(item => item.quantity > 0);
        let result = array.map(function (item) {
            return {
                name: item["name"],
                price: item["price"],
                qty: item["quantity"],
                instruction: item["instructions"]
            }
        })
        setOrder(result);
    }, [cart])

    const postOrder = () => {
        axios
            .post('https://puce-beautiful-beaver.cyclic.app/restaurant/transactions', {
                customerName: input,
                totalQty: qty,
                totalPrice: total,
                order: order
            },
            )
            .then((response) => setOrderCheck(response.data))
            .catch((err) => console.error(err));
        setCart([]);
        setPage('orderConfirm');
        setCategory('orderConfirm');
    }

    const handleBtn = () => {
        if (input == '') {
            setModalCShow(!modalCShow);
            return Alert.alert('Name Required', 'Please enter your name!', [{
                text: 'OK'
            }],
                {
                    cancelable: true,
                })
        }
        else {
            postOrder();
            setModalCShow(!modalCShow);
        }
    }

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalCShow}
            onRequestClose={() => setModalCShow(!modalCShow)}>
            <View style={styles.modalContainer}>
                <View style={styles.modalView}>
                    <Text style={[styles.modalHeader, styles.modalText]}>
                        Enter your name
                    </Text>

                    <TextInput
                        style={[styles.input, styles.modalText]}
                        placeholder="Name"
                        onChangeText={text => setInput(text)}
                        value={input} />

                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <Pressable
                            onPress={() => setModalCShow(!modalCShow)}
                            style={{ marginRight: 15 }}>
                            <Text style={styles.modalBtnText}>Cancel</Text>
                        </Pressable>
                        <Pressable
                            onPress={handleBtn}>
                            <Text style={styles.modalBtnText}>OK</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        paddingTop: '50%',
        backgroundColor: 'rgba(0, 0, 0, 0.6)'
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        padding: 25,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalBtnText: {
        fontWeight: 'bold',
        color: '#13505B'
    },
    modalHeader: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    modalText: {
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#d1d1d1',
        fontSize: 16,
        paddingHorizontal: 5,
    }
});