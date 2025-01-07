import { StyleSheet, Text } from 'react-native';

export default function Subtitle({ children }) {
	return <Text style={styles.subTitle}>{children}</Text>;
}

const styles = StyleSheet.create({
	subTitle: {
		fontWeight: 'bold',
		fontSize: 18,
		borderBottomWidth: 3,
		borderColor: '#FFCFCF',
		marginVertical: 16,
		color: '#3C552D',
	},
});
