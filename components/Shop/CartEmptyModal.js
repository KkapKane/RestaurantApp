import { StyleSheet, Text, View, Modal, Pressable } from "react-native";

export default function CartEmptyModal({ modalEShow, setModalEShow, setCart }) {

    return (
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalEShow}
                onRequestClose={() => setModalEShow(!modalEShow)}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalView}>
                        <Text style={[styles.modalHeader, styles.modalText]}>
                            Empty Cart
                        </Text>
                        <Text style={styles.modalText}>
                            Are you sure you want to remove all items from your cart?
                        </Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                            <Pressable
                                onPress={() => setModalEShow(!modalEShow)}
                                style={{ marginRight: 15 }}>
                                <Text style={styles.modalBtnText}>Cancel</Text>
                            </Pressable>
                            <Pressable
                                onPress={() => {
                                    setCart([]);
                                    setModalEShow(!modalEShow);
                                }}>
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
        marginBottom: 15,
    },
});