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
        {reversedTrans.map((transaction) => {
          return <Transaction transaction={transaction} />;
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  recent: {
    position: "absolute",
    bottom: 60,
    height: 200,
    width: "100%",
  },
  recentContainer: {
    height: 300,
    width: "100%",
  },
});
