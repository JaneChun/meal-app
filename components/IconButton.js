import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, Pressable } from 'react-native';

export default function IconButton({ icon, color, onPress }) {
	return (
		<Pressable
			onPress={onPress}
			style={({ pressed }) => pressed && styles.buttonPressed}
		>
			<AntDesign name={icon} size={24} color={color} />
		</Pressable>
	);
}

const styles = StyleSheet.create({
	buttonPressed: {
		opacity: 0.7,
	},
});
