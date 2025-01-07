import { StyleSheet, Text, View } from 'react-native';

export default function MealDetail({ duration, complexity, affordability }) {
	return (
		<View style={styles.details}>
			<Text style={styles.detailItem}>{duration}m</Text>
			<Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
			<Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
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
