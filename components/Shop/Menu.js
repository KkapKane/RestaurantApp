import { StyleSheet, Text, View, TouchableOpacity, ScrollView, ActivityIndicator, Image } from 'react-native';
import Card from './Card';

export default function Menu({ setPage, loading, foods, drinks, category, setCategory }) {

    const list = () => {

        if (category == 'all') {
            const all = [...foods, ...drinks];
            return (
                all.map(i => {
                    return (
                        <Card i={i} key={i._id} />
                    );
                })
            )
        }

        if (category == 'food') {
            return (
                <View>
                    <TouchableOpacity onPress={() => setCategory('appetizers')}>
                        <Text>Appetizers</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setCategory('entrees')}>
                        <Text>Entrees</Text>
                    </TouchableOpacity>
                </View>
            )
        }

        if (category == 'appetizers') {
            return (
                filterFood('appetizer').map(i => {
                    return (
                        <Card i={i} key={i._id} />
                    );
                })
            )
        }

        if (category == 'entrees') {
            return (
                filterFood('entree').map(i => {
                    return (
                        <Card i={i} key={i._id} />
                    );
                })
            )
        }
    }

    const filterFood = (cat) => {
        let filterResult = foods.filter((food) => food.type == cat);
        return filterResult;
    } 

    return (
        <ScrollView style={styles.menuContainer}>
            {!loading ? (
                foods !== undefined ? (
                    /* insert menu maps */
                    <View>{list()}</View>
                ) : (
                    <ActivityIndicator size='large' />
                )
            ) : (
                <ActivityIndicator size='large' />
            )}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    menuContainer: {
        width: '100%',
        marginBottom: 60,
        marginTop: 10,
    },
});
