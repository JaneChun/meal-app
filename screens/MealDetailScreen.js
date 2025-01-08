import { useLayoutEffect } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { MEALS } from '@/data/dummy-data';
import MealDetail from '@/components/MealDetail';
import SubTitle from '@/components/MealDetail/Subtitle';
import List from '@/components/MealDetail/List';
import IconButton from '@/components/IconButton';

export default function MealDetailScreen({ route, navigation }) {
	const mealId = route.params.id;
	const meal = MEALS.find(({ id }) => id === mealId);

	function headerButtonHandler() {
		console.log('pressed!');
	}

	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<IconButton icon='star' color='white' onPress={headerButtonHandler} />
			),
		});
	}, [navigation, headerButtonHandler]);

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
