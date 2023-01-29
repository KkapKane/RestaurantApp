import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Dashboard({ setPage }) {
  return (
    <View style={styles.container}>

      <Text>Dashboard</Text>

      <TouchableOpacity onPress={() => setPage('home')}>
        <Text>Home</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
