import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CategoriesScreen from '../screens/CategoriesScreen';
import MealsOverviewScreen from '../screens/MealsOverviewScreen';
import MealDetilScreen from '../screens/MealDetailScreen';
import { AntDesign, Entypo, Ionicons } from '@expo/vector-icons';

// const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

export default function Index() {
	return (
		<>
			<StatusBar style='dark' />
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
						headerTitleAlign: 'center',
						headerTintColor: 'white',
						drawerLabel: 'Home',
						drawerIcon: ({ color, size }) => (
							<AntDesign name='home' color={color} size={size} />
						),
					}}
				/>
				<Drawer.Screen
					name='Meals Overview'
					component={MealsOverviewScreen}
					options={{
						headerTitleAlign: 'center',
						drawerIcon: ({ color, size }) => (
							<Ionicons name='fast-food' color={color} size={size} />
						),
					}}
				/>
				<Drawer.Screen
					name='Meal Detail'
					component={MealDetilScreen}
					options={{
						headerStyle: { backgroundColor: '#FFB0B0' },
						headerTitleAlign: 'center',
						headerTintColor: 'white',
						drawerIcon: ({ color, size }) => (
							<Entypo name='list' color={color} size={size} />
						),
					}}
				/>
			</Drawer.Navigator>

			{/* <Stack.Navigator>
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
			</Stack.Navigator> */}
		</>
	);
}
