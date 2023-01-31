import { View, ScrollView, StyleSheet, Text } from "react-native";

export default function Revenue() {
  return (
    <ScrollView
      horizontal={true}
      style={styles.revenueContainer}
      showsHorizontalScrollIndicator={false}
    >
      <View style={styles.revCard}>
        <Text>TOTAL </Text>
        <Text>REVENUE</Text>
        <Text style={{ color: "green", fontSize: 20 }}>$32,987</Text>
      </View>
      <View style={styles.revCard}>
        <Text>TOTAL </Text>
        <Text>PROFIT</Text>
        <Text style={{ color: "green", fontSize: 20 }}>$27,887</Text>
      </View>
      <View style={styles.revCard}>
        <Text>TOTAL </Text>
        <Text>ORDERS</Text>
        <Text style={{ color: "blue", fontSize: 20 }}>1,987</Text>
      </View>
      <View style={styles.revCard}>
        <Text>TOTAL </Text>
        <Text>VIEWS</Text>
        <Text style={{ color: "blue", fontSize: 20 }}>11,987</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  revenueContainer: {
    width: "100%",
    height: "15%",
    position: "absolute",
    bottom: 240,
  },
  revCard: {
    height: 80,
    width: 120,
    marginLeft: 10,
    marginRight: 10,
    alignItems: "center",
    borderColor: "lightgray",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 10,
  },
});
