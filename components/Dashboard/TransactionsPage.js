
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import moment from 'moment';
import Entypo from 'react-native-vector-icons/Entypo';

export default function TransactionPage({ transactions, setPage, setCurrentTransaction }) {
    const reversedTrans = transactions.reverse();

    return (
        <ScrollView style={styles.container}>
            {reversedTrans.map((transaction, index) => {
                return (
                    <View key={index} style={styles.card}>
                        <View>
                           <Text style={[styles.text, { fontSize: 18, fontWeight: 'bold' }]}>{transaction.customerName}</Text> 
                           <Text style={styles.text}>{moment(transaction.orderDate).format('MM/DD/YY hh:mm A')}</Text>
                           <Text style={styles.text}>{transaction.totalQty} Items, ${transaction.totalPrice}</Text>
                        </View>
                        <TouchableOpacity style={styles.btn} 
                        onPress={() => {
                            setPage('transactionDetails')
                            setCurrentTransaction(transaction)
                            }}>
                            <Entypo name='chevron-thin-right' size={28} color='white' />
                            <Text style={styles.text}>Details</Text>
                        </TouchableOpacity>
                    </View>
                )
            })}
        </ScrollView>
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
    card: {
        backgroundColor: '#119DA4',
        marginVertical: 5,
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    btn: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 70,
        height: 70,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 35,
    },
    text: {
        color: 'white',
    }
});
