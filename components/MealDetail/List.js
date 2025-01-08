import { StyleSheet, Text, View } from 'react-native';

export default function ListItem({ data }) {
	return data.map((dataPoint) => (
		<View key={dataPoint} style={styles.listItem}>
			<Text>{dataPoint}</Text>
		</View>
	));
}

const styles = StyleSheet.create({
	listItem: {
		borderRadius: 6,
		paddingHorizontal: 8,
		paddingVertical: 4,
		marginVertical: 4,
		marginHorizontal: 8,
		backgroundColor: '#FFE2E2',
	},
});
