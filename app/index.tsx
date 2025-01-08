// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';

import CategoriesScreen from '../screens/CategoriesScreen';
import MealsOverviewScreen from '../screens/MealsOverviewScreen';
import MealDetilScreen from '../screens/MealDetailScreen';
import { AntDesign, Entypo, Ionicons } from '@expo/vector-icons';

// const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();

export default function Index() {
	return (
		<>
			<StatusBar style='dark' />
			<BottomTab.Navigator
				screenOptions={{
					tabBarActiveTintColor: '#86A788',
				}}
			>
				<BottomTab.Screen
					name='Meals Categories'
					component={CategoriesScreen}
					options={{
						title: 'All Categories',
						headerStyle: { backgroundColor: '#86A788' },
						headerTintColor: 'white',
						headerTitleAlign: 'center',
						// headerTintColor: 'white',
						tabBarIcon: ({ color, size }) => (
							<AntDesign name='home' color={color} size={size} />
						),
					}}
				/>
				<BottomTab.Screen
					name='Meals Overview'
					component={MealsOverviewScreen}
					options={{
						headerTitleAlign: 'center',
						tabBarIcon: ({ color, size }) => (
							<Ionicons name='fast-food' color={color} size={size} />
						),
					}}
				/>
				<BottomTab.Screen
					name='Meal Detail'
					component={MealDetilScreen}
					options={{
						headerStyle: { backgroundColor: '#FFB0B0' },
						headerTitleAlign: 'center',
						headerTintColor: 'white',
						tabBarIcon: ({ color, size }) => (
							<Entypo name='list' color={color} size={size} />
						),
					}}
				/>
			</BottomTab.Navigator>

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
