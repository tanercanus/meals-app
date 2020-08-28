import React from 'react';
import { View, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';//useSelector is a hook 

import HeaderButton from '../components/HeaderButton';
import MealList from '../components/MealList';
import DefaultText from '../components/DefaultText';


const FavoritesScreen = props => {

    const favMeal = useSelector(state => state.meals.favoriteMeals);

    if ( favMeal.length === 0 || !favMeal ) {
        return (
            <View style={styles.content}>
                <DefaultText>No favorite meals Found. Start adding some!</DefaultText>
            </View>
        );
    }

    return (
        <MealList listData={favMeal} navigation={props.navigation} />
    );
};

FavoritesScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Your Favorites',
        headerLeft: () => {
            return (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item title="Menu" iconName='ios-menu' onPress={() => {
                        navData.navigation.toggleDrawer();
                    }} />
                </HeaderButtons>
            );
        }

    }

};

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default FavoritesScreen;
