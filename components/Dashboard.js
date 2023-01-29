import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Dashboard({ openHome }) {
  return (
    <View style={styles.container}>

      <Text>Dashboard</Text>

      <TouchableOpacity onPress={openHome}>
        <Text>Home</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D7D9CE',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
