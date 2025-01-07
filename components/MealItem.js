import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

export default function MealItem({
	title,
	imageUrl,
	duration,
	complexity,
	affordability,
}) {
	function pressHandler() {}

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
					<View style={styles.details}>
						<Text style={styles.detailItem}>{duration}m</Text>
						<Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
						<Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
					</View>
				</Pressable>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	mealItemContainer: {
		margin: 16,
		elevation: 4,
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 6 },
		shadowRadius: 4,
		shadowOpacity: 0.15,
	},
	innerContainer: {
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
	},
	details: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 8,
	},
	detailItem: {
		marginHorizontal: 6,
		fontSize: 12,
	},
});
