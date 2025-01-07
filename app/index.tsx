import CategoriesScreen from '../screens/CategoriesScreen';
import { StatusBar } from 'expo-status-bar';

export default function Index() {
	return (
		<>
			<StatusBar style='light' />
			<CategoriesScreen />
		</>
	);
}
