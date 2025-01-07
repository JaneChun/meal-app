import { StyleSheet, Text, View } from 'react-native';
import { MEALS } from '../data/dummy-data';

export default function MealsOverviewScreen() {
	return (
		<View style={styles.rootContainer}>
			<Text>Meals Overview Screen</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	rootContainer: { flex: 1, padding: 16 },
});
