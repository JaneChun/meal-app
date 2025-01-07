import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from 'expo-router';
import MealDetail from '../components/MealDetail';

export default function MealItem({
	id,
	title,
	imageUrl,
	duration,
	complexity,
	affordability,
}) {
	const navigation = useNavigation();

	function pressHandler() {
		navigation.navigate('Meal Detail', { id });
	}

	return (
		<View style={styles.mealItemContainer}>
			<View style={styles.innerContainer}>
				<Pressable
					onPress={pressHandler}
					android_ripple={{ color: '#ccc' }}
					style={({ pressed }) => [pressed ? styles.buttonPressed : null]}
				>
					<View>
						<Image style={styles.image} source={{ uri: imageUrl }} />
						<Text style={styles.title}>{title}</Text>
					</View>

					<MealDetail
						duration={duration}
						complexity={complexity}
						affordability={affordability}
					/>
				</Pressable>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	mealItemContainer: {
		margin: 16,
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 6 },
		shadowRadius: 4,
		shadowOpacity: 0.15,
	},
	innerContainer: {
		elevation: 4,
		borderRadius: 8,
		overflow: 'hidden',
		backgroundColor: 'white',
	},
	buttonPressed: {
		opacity: 0.5,
	},
	image: {
		width: '100%',
		height: 200,
	},
	title: {
		textAlign: 'center',
		fontSize: 18,
		fontWeight: 'bold',
		padding: 8,
		color: '#3C552D',
	},
});
