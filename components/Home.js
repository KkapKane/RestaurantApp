import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import homeBg from '../assets/thoa-ngo-bHebI7X-cP8-unsplash.jpg';
import logo from '../assets/icons8-asian-hat-100.png';

export default function Home({ setPage }) {

  return (
    <ImageBackground source={homeBg} resizeMode='cover' style={styles.container}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.logoText}>Rice Paddy Hat</Text>
      </View>

      {/* Navigation */}
      <View style={styles.buttonContainer}>

        {/* Takes you to shop */}
        <TouchableOpacity style={styles.guestButton} onPress={() => setPage('shop')}>
          <Text style={styles.guest}>Login as Guest</Text>
        </TouchableOpacity>

        {/* Takes you to admin dashboard */}
        <TouchableOpacity onPress={() => setPage('dashboard')}>
          <Text style={styles.admin}>Login as Admin</Text>
        </TouchableOpacity>
      </View>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    background: homeBg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    marginBottom: '90%',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 50,
  },
  logoText: {
    color: '#040404',
    fontSize: 35,
    fontWeight: 'bold',
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
