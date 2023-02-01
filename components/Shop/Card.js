import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Menu({ i, setPage }) {

    return (
        <TouchableOpacity style={styles.card} onPress={() => setPage('menuProduct')}>
            <Image
                source={{ uri: `${i.img}` }}
                style={styles.image} />
            <View style={styles.text}>
                <Text style={styles.name}>{i.name}</Text>
                <View style={styles.stars} >
                    {i.rating >= 0 && i.rating <= 0.99 ?
                        <View style={styles.stars}>
                            <FontAwesome color='#ffe234' name='star-half-o' /><FontAwesome color='#ffe234' name='star-o' /><FontAwesome color='#ffe234' name='star-o' /><FontAwesome color='#ffe234' name='star-o' /><FontAwesome color='#ffe234' name='star-o' />
                        </View> : null}
                    {i.rating >= 1 && i.rating <= 1.49 ?
                        <View style={styles.stars}>
                            <FontAwesome color='#ffe234' name='star' /><FontAwesome color='#ffe234' name='star-o' /><FontAwesome color='#ffe234' name='star-o' /><FontAwesome color='#ffe234' name='star-o' /><FontAwesome color='#ffe234' name='star-o' />
                        </View> : null}
                    {i.rating >= 1.5 && i.rating <= 1.99 ?
                        <View style={styles.stars}>
                            <FontAwesome color='#ffe234' name='star' /><FontAwesome color='#ffe234' name='star-half-o' /><FontAwesome color='#ffe234' name='star-o' /><FontAwesome color='#ffe234' name='star-o' /><FontAwesome color='#ffe234' name='star-o' />
                        </View> : null}
                    {i.rating >= 2 && i.rating <= 2.49 ?
                        <View style={styles.stars}>
                            <FontAwesome color='#ffe234' name='star' /><FontAwesome color='#ffe234' name='star' /><FontAwesome color='#ffe234' name='star-o' /><FontAwesome color='#ffe234' name='star-o' /><FontAwesome color='#ffe234' name='star-o' />
                        </View> : null}
                    {i.rating >= 2.5 && i.rating <= 2.99 ?
                        <View style={styles.stars}>
                            <FontAwesome color='#ffe234' name='star' /><FontAwesome color='#ffe234' name='star' /><FontAwesome color='#ffe234' name='star-half-o' /><FontAwesome color='#ffe234' name='star-o' /><FontAwesome color='#ffe234' name='star-o' />
                        </View> : null}
                    {i.rating >= 3 && i.rating <= 3.49 ?
                        <View style={styles.stars}>
                            <FontAwesome color='#ffe234' name='star' /><FontAwesome color='#ffe234' name='star' /><FontAwesome color='#ffe234' name='star' /><FontAwesome color='#ffe234' name='star-o' /><FontAwesome color='#ffe234' name='star-o' />
                        </View> : null}
                    {i.rating >= 3.5 && i.rating <= 3.99 ?
                        <View style={styles.stars}>
                            <FontAwesome color='#ffe234' name='star' /><FontAwesome color='#ffe234' name='star' /><FontAwesome color='#ffe234' name='star' /><FontAwesome color='#ffe234' name='star-half-o' /><FontAwesome color='#ffe234' name='star-o' />
                        </View> : null}
                    {i.rating >= 4 && i.rating <= 4.49 ?
                        <View style={styles.stars}>
                            <FontAwesome color='#ffe234' name='star' /><FontAwesome color='#ffe234' name='star' /><FontAwesome color='#ffe234' name='star' /><FontAwesome color='#ffe234' name='star' /><FontAwesome color='#ffe234' name='star-o' />
                        </View> : null}
                    {i.rating >= 4.5 && i.rating <= 4.99 ?
                        <View style={styles.stars}>
                            <FontAwesome color='#ffe234' name='star' /><FontAwesome color='#ffe234' name='star' /><FontAwesome color='#ffe234' name='star' /><FontAwesome color='#ffe234' name='star' /><FontAwesome color='#ffe234' name='star-half-o' />
                        </View> : null}
                    {i.rating == 5 ?
                        <View style={styles.stars}>
                            <FontAwesome color='#ffe234' name='star' /><FontAwesome color='#ffe234' name='star' /><FontAwesome color='#ffe234' name='star' /><FontAwesome color='#ffe234' name='star' /><FontAwesome color='#ffe234' name='star' />
                        </View> : null}
                    <Text style={{ fontWeight: 'bold' }}>{i.rating}</Text>
                </View>
                <Text style={styles.price}>${i.price}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        paddingHorizontal: 25,
        paddingBottom: 15,
        marginTop: 15,
        borderBottomColor: '#d1d1d1',
        borderBottomWidth: 1,
    },
    image: {
        width: 150,
        height: 100,
    },
    text: {
        marginLeft: 20,
        flex: 1,
        justifyContent: 'center',
    },
    name: {
        fontSize: 20,

    },
    stars: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 5,
    },
    price: {
        fontSize: 15,
    }
});
