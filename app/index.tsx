import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CategoriesScreen from '../screens/CategoriesScreen';
import MealsOverviewScreen from '../screens/MealsOverviewScreen';
import MealDetilScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import { AntDesign } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
	return (
		<Drawer.Navigator
			screenOptions={{
				drawerActiveBackgroundColor: '#FFE2E2',
				drawerActiveTintColor: '#86A788',
				headerStyle: { backgroundColor: '#86A788' },
				drawerStyle: { backgroundColor: '#FFFDEC' },
			}}
		>
			<Drawer.Screen
				name='Meals Categories'
				component={CategoriesScreen}
				options={{
					title: 'All Categories',
					headerTintColor: 'white',
					drawerLabel: 'Home',
					drawerIcon: ({ color, size }) => (
						<AntDesign name='home' color={color} size={size} />
					),
				}}
			/>
			<Drawer.Screen
				name='Favorites'
				component={FavoritesScreen}
				options={{
					headerTintColor: 'white',
					drawerIcon: ({ color, size }) => (
						<AntDesign name='star' color={color} size={size} />
					),
				}}
			/>
		</Drawer.Navigator>
	);
}

export default function Index() {
	return (
		<>
			<StatusBar style='dark' />

			<Stack.Navigator>
				<Stack.Screen
					name='Meals Categories'
					component={DrawerNavigator}
					options={{
						headerShown: false,
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
