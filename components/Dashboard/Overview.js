import { StyleSheet, View, Text } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function Overview() {
  return (
    <View style={styles.overview}>
      <View style={styles.textContainer}>
        <Text style={styles.overviewText}>Overview</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={styles.dateText}>Today</Text>
          <AntDesign name='caretdown' />
        </View>
      </View>

      <View style={styles.container}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  overview: {
    height: 300,
    position: "absolute",
    width: "100%",
    top: 130,
  },
  container: {
    width: "100%",
    height: 180,
    borderColor: "lightgray",
    borderStyle: "solid",
    borderWidth: 1,
  },
  overviewText: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
  },
  dateText: {
    fontSize: 15,
    padding: 10,
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
