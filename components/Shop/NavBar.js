import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Shop({ setPage, category, setCategory }) {

    return (
        <View style={styles.navBar}>
            <TouchableOpacity
                style={styles.navBtn}
                onPress={() => setPage("home")} >
                <Ionicons name='home-outline' size={30} />
                <Text>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.navBtn}
                onPress={() => setCategory('all')} >
                <MaterialIcons name='menu-book' size={30} color={category == 'all' ? '#119DA4' : null} />
                <Text style={category == 'all' ? { color: '#119DA4' } : null}>Browse All</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.navBtn}
                onPress={() => setCategory('food')} >
                <Entypo name='bowl' size={30} color={category == 'food' ? '#119DA4' : null} />
                <Text style={category == 'food' ? { color: '#119DA4' } : null}>Food</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.navBtn}>
                <MaterialCommunityIcons name='tea-outline' size={30} />
                <Text>Drinks</Text>
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
        width: '100%',
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        bottom: 0,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
    },
    navBtn: {
        alignItems: 'center',
        justifyContent: 'center'
    },
});
