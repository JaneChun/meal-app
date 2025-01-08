import { StyleSheet } from 'react-native';
import { FlatList, View } from 'react-native';
import MealItem from './MealItem';

export default function MealsList({ meals }) {
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
				data={meals}
				keyExtractor={({ id }) => id}
				renderItem={renderMealItem}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	rootContainer: { flex: 1, padding: 16, backgroundColor: '#FFFDEC' },
});
