import { StyleSheet, View, Text, ScrollView } from 'react-native';
import moment from 'moment';

export default function TransactionDetails({ currentTransaction }) {

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 26, fontWeight: 'bold', color: '#13505B' }}>{currentTransaction.customerName}</Text>
            <Text style={{ fontSize: 20 }}>Order ID: {currentTransaction._id}</Text>
            <Text style={{ fontSize: 24 }}>{moment(currentTransaction.orderDate).format('MM/DD/YY hh:mm A')}</Text>
            <Text style={{ fontSize: 24 }}>{currentTransaction.totalQty} items, ${currentTransaction.totalPrice}</Text>
            
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 20, color: '#119DA4' }}>Order Details</Text>
            <ScrollView>
                {currentTransaction.order.map((item, index) => {
                    return (
                        <View key={index}>
                            <Text style={{ fontSize: 18 }}>{item.qty} x {item.name} @ ${item.price}</Text>
                        </View>
                    )
                })}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: "white",
        marginTop: 140,
        paddingHorizontal: 10,
    },
});
