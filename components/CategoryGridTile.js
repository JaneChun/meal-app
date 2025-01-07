import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';

export default function CategoryGridTile({ title, color }) {
	return (
		<View style={[styles.grid, { backgroundColor: color }]}>
			<Pressable
				style={({ pressed }) => [
					styles.button,
					pressed ? styles.buttonPressed : '',
				]}
				android_ripple={{ color: 'rgba(255,255,255,0.5)' }}
			>
				<View style={styles.innerContainer}>
					<Text style={styles.innerText}>{title}</Text>
				</View>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	grid: {
		flex: 1,
		margin: 16,
		height: 150,
		borderRadius: 8,
		elevation: 4,
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 6 },
		shadowRadius: 4,
		shadowOpacity: 0.15,
	},
	button: {
		flex: 1,
	},
	buttonPressed: {
		backgroundColor:
			Platform.OS === 'android' ? '' : 'rgba(255, 255, 255, 0.3)',
	},
	innerContainer: {
		flex: 1,
		padding: 16,
		justifyContent: 'center',
		alignItems: 'center',
	},
	innerText: {
		textAlign: 'center',
		fontSize: 18,
	},
});
