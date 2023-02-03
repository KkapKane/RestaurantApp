import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Header({ page, setPage }) {

    return (
        <View style={{ width: '100%' }}>
            {page == 'main' ?
                <View style={styles.headerContainer}>
                    <Text style={styles.header}>Browse Menu</Text>
                </View>
                : null}
            {page == 'product' ?
                <View style={styles.headerContainer}>
                    <TouchableOpacity onPress={() => setPage('main')}>
                        <Ionicons name='arrow-back' size={25} />
                    </TouchableOpacity>
                </View>
                : null}
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: 20,
        paddingTop: 30,
    },
    header: {
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 15,
    },
});