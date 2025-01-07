import { Image, StyleSheet, Text, View } from 'react-native';
import { MEALS } from '@/data/dummy-data';
import MealDetail from '@/components/MealDetail';

export default function MealDetailScreen({ route }) {
	const mealId = route.params.id;
	const meal = MEALS.find(({ id }) => id === mealId);

	return (
		<View>
			<Image style={styles.image} source={{ uri: meal.imageUrl }} />
			<Text style={styles.title}>{meal.title}</Text>
			<MealDetail
				duration={meal.duration}
				complexity={meal.complexity}
				affordability={meal.affordability}
			/>

			<View style={styles.infoContainer}>
				<Text style={styles.subTitle}>Ingredients</Text>
				{meal.ingredients.map((ingredient) => (
					<Text style={styles.listItem}>{ingredient}</Text>
				))}

				<Text style={styles.subTitle}>Steps</Text>
				{meal.steps.map((step) => (
					<Text style={styles.listItem}>{step}</Text>
				))}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	image: {
		width: '100%',
		height: 350,
	},
	title: {
		fontWeight: 'bold',
		fontSize: 24,
		margin: 8,
		textAlign: 'center',
	},
	infoContainer: {
		margin: 16,
	},
	subTitle: {
		fontWeight: 'bold',
		fontSize: 18,
	},
	listItem: {
		paddingVertical: 2,
	},
});
