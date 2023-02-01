import { View, StyleSheet, Text } from "react-native";

export default function RecentOrders() {
  return (
    <View style={styles.recent}>
      <Text style={{ fontSize: 20 }}>Recent Orders</Text>
      <View style={styles.recentContainer}></View>
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
