import { StyleSheet, Text, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Stars({ i }) {

    return (
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
    );
}

const styles = StyleSheet.create({
    stars: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 5,
    },
});
