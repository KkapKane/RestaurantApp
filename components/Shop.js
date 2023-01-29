import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Shop({ openHome }) {
    return (
        <View style={styles.container}>

            <Text>Shop</Text>
            
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
