import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Home({ openShop, openDashboard }) {
  return (
    <View style={styles.container}>

      <Text style={styles.logo}>Restaurant Name</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.guestButton} onPress={openShop}>
            <Text style={styles.guest}>Login as Guest</Text>
          </TouchableOpacity>
        <TouchableOpacity onPress={openDashboard}>
          <Text style={styles.admin}>Login as Admin</Text>
        </TouchableOpacity>
      </View>
      
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
  logo: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: '50%',
    color: '#040404',
  },
  buttonContainer: {
    alignItems: 'center',
  },
  guestButton: {
    backgroundColor: '#119DA4',
    paddingHorizontal: 50,
    paddingVertical: 12,
    borderRadius: 50,
    marginBottom: '5%',
  },
  guest: {
    fontSize: 18,
    color: 'white'
  },
  admin: {
    color: '#13505B',
  }
});
