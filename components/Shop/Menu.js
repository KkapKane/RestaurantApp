import { StyleSheet, Text, View, TouchableOpacity, ScrollView, ActivityIndicator, Image } from 'react-native';
import Card from './Card';
import appIcon from '../../assets/icons8-tapas-100.png';
import entIcon from '../../assets/icons8-noodles-100.png';

export default function Menu({ loading, foods, drinks, category, setCategory, setPage, setCurrent }) {

    const display = () => {
        if (category == 'all') {
            const all = [...foods, ...drinks];
            return (
                all.map(i => {
                    return (
                        <Card
                            i={i}
                            key={i._id}
                            setCurrent={setCurrent}
                            setPage={setPage}
                        />
                    );
                })
            )
        }

        if (category == 'food') {
            return (
                <View style={{ height: '100%' }}>
                    <TouchableOpacity
                        style={[styles.category, { borderTopColor: '#d1d1d1', borderTopWidth: 1, marginTop: '5%' }]}
                        onPress={() => setCategory('appetizers')}>
                        <Image source={appIcon} />
                        <Text style={styles.categoryText}>Appetizers</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.category}
                        onPress={() => setCategory('entrees')}>
                        <Image source={entIcon} />
                        <Text style={styles.categoryText}>Entrees</Text>
                    </TouchableOpacity>
                </View>
            )
        }

        if (category == 'appetizers') {
            return (
                filterFood('appetizer').map(i => {
                    return (
                        <Card
                            i={i}
                            key={i._id}
                            setCurrent={setCurrent}
                            setPage={setPage}
                        />
                    );
                })
            )
        }

        if (category == 'entrees') {
            return (
                filterFood('entree').map(i => {
                    return (
                        <Card
                            i={i}
                            key={i._id}
                            setCurrent={setCurrent}
                            setPage={setPage}
                        />
                    );
                })
            )
        }

        if (category == 'drinks') {
            return (
                drinks.map(i => {
                    return (
                        <Card
                            i={i}
                            key={i._id}
                            setCurrent={setCurrent}
                            setPage={setPage}
                        />
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
            {!loading ?
                foods !== undefined ?
                    drinks !== undefined ?
                        /* insert menu maps */
                        <View style={{ height: '100%' }}>{display()}</View>
                        :
                        <ActivityIndicator size='large' />
                    :
                    <ActivityIndicator size='large' />
                :
                <ActivityIndicator size='large' />
            }
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    menuContainer: {
        width: '100%',
        marginBottom: 60,
        marginTop: 10,
        backgroundColor: '#d1d1d1',
    },
    category: {
        height: 200,
        margin: 10,
        paddingHorizontal: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.75)',
        borderRadius: 10,
    },
    categoryText: {
        fontSize: 24,
        fontWeight: 'bold',
        letterSpacing: 2,
        color: '#13505B',
    }
});
