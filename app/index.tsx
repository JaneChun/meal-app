import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import MealsOverviewScreen from '../screens/MealsOverviewScreen';
import { StatusBar } from 'expo-status-bar';

const Stack = createNativeStackNavigator();

export default function Index() {
	return (
		<>
			<StatusBar style='dark' />
			<Stack.Navigator>
				<Stack.Screen name='Meals Categories' component={CategoriesScreen} />
				<Stack.Screen name='Meals Overview' component={MealsOverviewScreen} />
			</Stack.Navigator>
		</>
	);
}
