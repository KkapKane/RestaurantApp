import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function BottomNav({ setPage }) {
  return (
    <View style={styles.navBar}>
      <TouchableOpacity style={styles.navBtn} onPress={() => setPage("home")}>
        <Ionicons name='home-outline' size={30} />
        <Text>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navBtn}>
        <MaterialCommunityIcons name='view-dashboard-outline' size={30} />
        <Text>Dashboard</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navBtn}>
        <SimpleLineIcons name='notebook' size={30} />
        <Text>Orders</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navBtn}>
        <MaterialIcons name='notifications-none' size={30} />
        <Text>Notifications</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navBtn}>
        <FontAwesome name='credit-card' size={30} />
        <Text>Payment</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navBar: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 0,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  navBtn: {
    alignItems: "center",
    justifyContent: "center",
  },
});
