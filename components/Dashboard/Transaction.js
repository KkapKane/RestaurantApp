import { View, Text, StyleSheet } from "react-native";
import moment from "moment";

export default function Transaction({ transaction }) {
  return (
    <View style={styles.transaction}>
      <Text>{transaction.customerName}</Text>
      <Text>{transaction.totalQty} Items</Text>
      <Text>{moment(transaction.orderDate).format("DD-MM-YY hh:mm A")}</Text>
      <Text>${transaction.totalPrice}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  transaction: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    height: 40,
    width: "100%",
    padding: 10,
    margin: 1,
    gap: 120,
    borderWidth: 1,
    borderColor: "black",
    borderStyle: "solid",
  },
});
