import { StyleSheet, View } from "react-native";
import Home from "./components/Home";
import Shop from "./components/Shop/Shop";
import Dashboard from "./components/Dashboard/Dashboard";
import { NativeRouter, Routes, Route } from "react-router-native";

export default function App() {

  return (
    <NativeRouter>
      <View style={styles.container}>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/shop' element={<Shop />} />
          <Route exact path='/dashboard' element={<Dashboard />} />
        </Routes>
      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
