import { StyleSheet, Text, View, FlatList } from 'react-native';
import { MEALS, CATEGORIES } from '../data/dummy-data';
// import { useRoute } from '@react-navigation/native';
import MealItem from '../components/MealItem';
import { useLayoutEffect } from 'react';

export default function MealsOverviewScreen({ route, navigation }) {
	// const { 	params: { categoryId }	} = useRoute();
	const { categoryId } = route.params;

	const displayedMeals = MEALS.filter((meal) =>
		meal.categoryIds.includes(categoryId),
	);

	useLayoutEffect(() => {
		const { title, color } = CATEGORIES.find(({ id }) => id === categoryId);

		navigation.setOptions({ title, headerStyle: { backgroundColor: color } });
	}, [categoryId, navigation]);

	function renderMealItem({ item }) {
		const mealItemProps = {
			id: item.id,
			title: item.title,
			imageUrl: item.imageUrl,
			duration: item.duration,
			complexity: item.complexity,
			affordability: item.affordability,
		};
		return <MealItem {...mealItemProps} />;
	}

	return (
		<View style={styles.rootContainer}>
			<FlatList
				data={displayedMeals}
				keyExtractor={({ id }) => id}
				renderItem={renderMealItem}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	rootContainer: { flex: 1, padding: 16, backgroundColor: '#FFFDEC' },
});
