import { View, StyleSheet, Text, ScrollView } from "react-native";
import axios from "axios";
import { useState, useEffect } from "react";
import Transaction from "./Transaction";

export default function RecentOrders({ loading, transactions }) {
  const reversedTrans = transactions.reverse();
  return (
    <View style={styles.recent}>
      <Text style={{ fontSize: 20, padding: 12 }}>Recent Orders</Text>
      <ScrollView style={styles.recentContainer}>
        {reversedTrans.map((transaction, index) => {
          return <Transaction key={index} transaction={transaction} />;
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  recent: {
    position: "absolute",
    marginTop: 480,
    width: "100%",
  },
  recentContainer: {
    height: '100%',
    width: "100%",
  },
});
