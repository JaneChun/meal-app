import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import CategoriesScreen from '../screens/CategoriesScreen';
import MealsOverviewScreen from '../screens/MealsOverviewScreen';
import MealDetilScreen from '../screens/MealDetailScreen';

const Stack = createNativeStackNavigator();

export default function Index() {
	return (
		<>
			<StatusBar style='dark' />
			<Stack.Navigator>
				<Stack.Screen
					name='Meals Categories'
					component={CategoriesScreen}
					options={{
						title: 'All Categories',
						headerStyle: { backgroundColor: '#86A788' },
						headerTitleAlign: 'center',
						headerTintColor: 'white',
					}}
				/>
				<Stack.Screen
					name='Meals Overview'
					component={MealsOverviewScreen}
					options={({ route, navigation }) => {
						// const categoryId = route.params.categoryId;
						// return { title: categoryId, headerTitleAlign: 'center' };
						return {
							headerTitleAlign: 'center',
						};
					}}
				/>
				<Stack.Screen
					name='Meal Detail'
					component={MealDetilScreen}
					options={{
						headerStyle: { backgroundColor: '#FFB0B0' },
						headerTitleAlign: 'center',
						headerTintColor: 'white',
					}}
				/>
			</Stack.Navigator>
		</>
	);
}
