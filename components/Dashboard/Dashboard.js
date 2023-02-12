import { StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";

import DashboardNav from "./DashboardNav";
import Overview from "./Overview";
import BottomNav from "./BottonNav";
import Revenue from "./Revenue";
import RecentOrders from "./RecentOrders";
import axios from "axios";


export default function Dashboard() {
  const [transactions, setTransactions] = useState();
  const [loading, setLoading] = useState(false);

  async function grabTransactions() {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://puce-beautiful-beaver.cyclic.app/restaurant/transactions"
      );
      setTransactions(response.data);
      setLoading(false);
    } catch {
      console.log("bad");
    }
  }
  useEffect(() => {
    grabTransactions();
  }, []);

  useEffect(() => {
    if (!transactions) return;
    console.log(transactions);
  }, [transactions]);

  return (
    <View style={styles.container}>
      <View>
        <Text></Text>
      </View>
      <DashboardNav />
      {loading == false && transactions ? (
        <Overview transactions={transactions} />
      ) : null}
      {loading == false && transactions ? (
        <Revenue transactions={transactions} />
      ) : null}

      {loading == false && transactions ? (
        <RecentOrders loading={loading} transactions={transactions} />
      ) : null}

      <BottomNav />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    position: "relative",
    top: 0,
  },
});
