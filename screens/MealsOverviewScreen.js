import { StyleSheet, Text, View, FlatList } from 'react-native';
import { MEALS, CATEGORIES } from '../data/dummy-data';
// import { useRoute } from '@react-navigation/native';
import MealsList from '../components/MealsList/MealsList';
import { useLayoutEffect } from 'react';

export default function MealsOverviewScreen({ route, navigation }) {
	// const { 	params: { categoryId }	} = useRoute();
	const { categoryId } = route.params ?? { categoryId: 'c1' };

	const displayedMeals = MEALS.filter((meal) =>
		meal.categoryIds.includes(categoryId),
	);

	useLayoutEffect(() => {
		const { title, color } = CATEGORIES.find(({ id }) => id === categoryId);

		navigation.setOptions({ title, headerStyle: { backgroundColor: color } });
	}, [categoryId, navigation]);

	return <MealsList meals={displayedMeals} />;
}
