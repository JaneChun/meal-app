import MealsList from '@/components/MealsList/MealsList';
import { FavoritesContext } from '@/store/context/favorites-context';
import { useContext } from 'react';
import { MEALS } from '@/data/dummy-data';
import { StyleSheet, Text, View } from 'react-native';

export default function FavoritesScreen() {
	const favoriteMealsCtx = useContext(FavoritesContext);

	const favoriteMeals = MEALS.filter(({ id }) =>
		favoriteMealsCtx.ids.includes(id),
	);

	if (favoriteMeals.length === 0) {
		return (
			<View style={styles.rootContainer}>
				<Text style={styles.text}>You have no favorite meals yet.</Text>
			</View>
		);
	}

	return <MealsList meals={favoriteMeals} />;
}

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		color: '#86A788',
		fontSize: 16,
	},
});
