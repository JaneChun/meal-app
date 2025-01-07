import { StyleSheet, Text, View, FlatList } from 'react-native';
import { MEALS } from '../data/dummy-data';
// import { useRoute } from '@react-navigation/native';
import MealItem from '../components/MealItem';

export default function MealsOverviewScreen({ route }) {
	// const { 	params: { categoryId }	} = useRoute();
	const { categoryId } = route.params;

	const displayedMeals = MEALS.filter((meal) =>
		meal.categoryIds.includes(categoryId),
	);

	function renderMealItem({ item }) {
		const mealItemProps = {
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
	rootContainer: { flex: 1, padding: 16 },
});
