import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";

import DashboardNav from "./DashboardNav";
import Overview from "./Overview";
import BottomNav from "./BottonNav";
import Revenue from "./Revenue";
import RecentOrders from "./RecentOrders";
import axios from "axios";
import TransactionPage from "./TransactionsPage";
import TransactionDetails from "./TransactionDetails";


export default function Dashboard() {
  const [transactions, setTransactions] = useState();
  const [loading, setLoading] = useState(false);

  /* navigate between pages in dashboard */
  const [page, setPage] = useState('main');

  /* grab current transaction for order details */
  const [currentTransaction, setCurrentTransaction] = useState([]);

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
      <DashboardNav setPage={setPage} />

      {loading == true ?
        <View style={{ height: '100%', justifyContent: 'center' }}>
          <ActivityIndicator size='large' />
        </View>
        : null}

      {loading == false && transactions ? (
        <Overview transactions={transactions} />
      ) : null}
      {page == 'main' && loading == false && transactions ? (
        <Revenue transactions={transactions} />
      ) : null}

      {page == 'main' && loading == false && transactions ? (
        <RecentOrders loading={loading} transactions={transactions} />
      ) : null}

      {page == 'transactions' ?
        <TransactionPage
          transactions={transactions}
          setPage={setPage}
          setCurrentTransaction={setCurrentTransaction} />
        : null}

      {page == 'transactionDetails' ?
        <TransactionDetails currentTransaction={currentTransaction} />
        : null}

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
