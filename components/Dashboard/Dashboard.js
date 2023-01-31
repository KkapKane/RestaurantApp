import { StyleSheet, Text, View } from "react-native";

import DashboardNav from "./DashboardNav";
import Overview from "./Overview";
import BottomNav from "./BottonNav";
import Revenue from "./Revenue";
import RecentOrders from "./RecentOrders";

export default function Dashboard({ setPage }) {
  return (
    <View style={styles.container}>
      <View>
        <Text></Text>
      </View>
      <DashboardNav />
      <Overview />
      <Revenue />
      <RecentOrders />
      <BottomNav setPage={setPage} />
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
