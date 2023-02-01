import { StyleSheet, Text, View } from 'react-native';

export default function Header({ page }) {

    return (
        <View style={styles.headerContainer}>
            {page == 'shop' ?
                <Text style={styles.header}>Browse Menu</Text>
                : null
            }

        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 30,
    },
    header: {
        fontSize: 25,
        fontWeight: 'bold',
    },
});
