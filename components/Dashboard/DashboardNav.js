import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Fontisto from "react-native-vector-icons/Fontisto";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function DashboardNav({ setPage }) {
  return (
    <ScrollView
      style={styles.nav}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      <TouchableOpacity style={styles.button}>
        <View style={styles.ImgContainer}>
          <SimpleLineIcons name='graph' size={30} />
        </View>
        <Text>Analytics</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <View style={styles.ImgContainer}>
          <MaterialCommunityIcons name='human-greeting-variant' size={30} />
        </View>
        <Text>Customers</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => setPage('transactions')}>
        <View style={styles.ImgContainer}>
          <Fontisto name='shopping-pos-machine' size={30} />
        </View>
        <Text>Transactions</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <View style={styles.ImgContainer}>
          <FontAwesome5 name='tasks' size={30} />
        </View>
        <Text>Tasks</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <View style={styles.ImgContainer}>
          <FontAwesome5 name='tools' size={30} />
        </View>
        <Text>Tools</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  nav: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    position: "absolute",
    top: 35,
    padding: 5,
    borderColor: "lightgray",
    borderStyle: "solid",
    borderWidth: 1,
  },
  button: {
    padding: 5,
    alignItems: "center",
    marginLeft: 10,
    marginright: 10,
  },
  ImgContainer: {
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightblue",

    borderRadius: 100,
  },
});
