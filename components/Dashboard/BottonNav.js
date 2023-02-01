import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import { useNavigate } from "react-router-native";

export default function BottomNav() {
  const navigate = useNavigate();

  function navto(location) {
    navigate(location);
  }

  return (
    <View style={styles.navBar}>
      <TouchableOpacity style={styles.navBtn} onPress={() => navto("/")}>
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
        <Feather name='activity' size={30} />
        <Text>Activity</Text>
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
    borderColor: "lightgray",
    borderStyle: "solid",
    borderWidth: 1,
  },
  navBtn: {
    alignItems: "center",
    justifyContent: "center",
  },
});
