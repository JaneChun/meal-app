import { useContext, useLayoutEffect } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { MEALS } from '@/data/dummy-data';
import MealDetail from '@/components/MealDetail';
import SubTitle from '@/components/MealDetail/Subtitle';
import List from '@/components/MealDetail/List';
import IconButton from '@/components/IconButton';
// import { FavoritesContext } from '@/store/context/favorites-context';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '@/store/redux/favorites';

export default function MealDetailScreen({ route, navigation }) {
	// const favoriteMealsCtx = useContext(FavoritesContext);
	const dispatch = useDispatch();
	const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);

	const mealId = route.params?.id ?? 'm1';
	const meal = MEALS.find(({ id }) => id === mealId);
	// const isMealFavorite = favoriteMealsCtx.ids.includes(mealId);
	const isMealFavorite = favoriteMealIds.includes(mealId);

	function toggleFavoriteHandler() {
		if (isMealFavorite) {
			// favoriteMealsCtx.removeFavorite(mealId);
			dispatch(removeFavorite({ id: mealId }));
		} else {
			// favoriteMealsCtx.addFavorite(mealId);
			dispatch(addFavorite({ id: mealId }));
		}
	}

	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<IconButton
					icon={isMealFavorite ? 'star' : 'staro'}
					color='white'
					onPress={toggleFavoriteHandler}
				/>
			),
		});
	}, [navigation, toggleFavoriteHandler]);

	return (
		<ScrollView contentContainerStyle={styles.outerListContainer}>
			<View style={styles.rootContainer}>
				<Image style={styles.image} source={{ uri: meal.imageUrl }} />
				<Text style={styles.title}>{meal.title}</Text>
				<MealDetail
					duration={meal.duration}
					complexity={meal.complexity}
					affordability={meal.affordability}
					style={{}}
					textStyle={{ color: 'gray' }}
				/>

				<View style={styles.innerListContainer}>
					<SubTitle>Ingredients</SubTitle>
					<List data={meal.ingredients} />

					<SubTitle>Steps</SubTitle>
					<List data={meal.steps} />
				</View>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	rootContainer: {
		backgroundColor: '#FFFDEC',
		paddingBottom: 32,
	},
	image: {
		width: '100%',
		height: 350,
	},
	title: {
		fontWeight: 'bold',
		fontSize: 24,
		margin: 8,
		textAlign: 'center',
		color: '#3C552D',
	},
	outerListContainer: {},
	innerListContainer: {
		width: '90%',
		alignSelf: 'center',
	},
});
