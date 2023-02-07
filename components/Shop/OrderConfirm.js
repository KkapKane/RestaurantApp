import { StyleSheet, Text, View } from 'react-native';
import moment from "moment";
import { useEffect, useState } from 'react';

export default function OrderConfirm({ orderCheck }) {

    let tax = Math.round((orderCheck.totalPrice * 0.0825) * 100) / 100;
    let gTotal = orderCheck.totalPrice + tax;

    let prepTime = orderCheck.totalQty * 6;
    if (prepTime > 45) {
        var time = 45;
    }
    else {
        var time = prepTime;
    }

    let orderReady = moment(orderCheck.orderDate).add(time, 'minutes');

    const [timeReady, setTimeReady] = useState();

    useEffect(() => {
        setTimeReady(orderReady)
        const interval = setInterval(() => {
            setTimeReady(moment(timeReady).subtract(1, 'seconds'))
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <View style={styles.container}>
            {orderCheck._id ?
                <View style={styles.body}>

                    <Text style={styles.orderID}>Order ID: {orderCheck._id}</Text>
                    <Text style={styles.orderDetails}>Order Name: {orderCheck.customerName}</Text>
                    <Text style={styles.orderDetails}>Total Items: {orderCheck.totalQty}</Text>
                    <Text style={styles.orderDetails}>Grand Total: ${gTotal}</Text>


                    <View style={{ marginTop: 35 }}>
                        <Text style={[styles.orderDetails, { textAlign: 'center' }]}>Order Summary</Text>

                        <View style={styles.itemContainer}>
                            <Text style={styles.orderHeader}>Qty</Text>
                            <Text style={styles.orderHeader}>Item Name</Text>
                        </View>

                        {orderCheck.order ?
                            orderCheck.order.map((item, index) => {
                                return (
                                    <View key={index} style={styles.itemContainer}>
                                        <Text style={styles.qty}>{item.qty}</Text>
                                        <Text>{item.name}</Text>
                                    </View>
                                )
                            })
                            : null}
                    </View>

                    <View style={{ marginTop: 35 }}>

                        {orderReady.diff(new Date()) < 0 ?
                            <Text style={styles.orderDetails}>
                                Your order is ready
                            </Text>
                            :
                            <Text style={styles.orderDetails}>
                                Your order will be ready {moment(orderReady).fromNow()}.
                            </Text>
                        }


                    </View>
                </View>
                :
                <View style={styles.body}>
                    <Text style={styles.orderDetails}>
                        Nothing to display
                    </Text>
                </View>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: "#fff",
    },
    body: {
        marginTop: 10,
        paddingHorizontal: 10,
    },
    orderID: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'green'
    },
    orderDetails: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    itemContainer: {
        flexDirection: 'row',
    },
    orderHeader: {
        fontWeight: 'bold',
        fontSize: 16,
        marginRight: 15,
    },
    qty: {
        minWidth: 30,
        textAlign: 'center',
        marginRight: 10,
    }
});
