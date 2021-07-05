import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity, Button, Platform} from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from "@react-navigation/stack"
import {createDrawerNavigator} from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/Ionicons'


import Home from './components/screen/Home';
import Books from './components/screen/Books';
import Profile from './components/screen/Profile';
import Result from './components/screen/Result';
import Syllabus from './components/Drawers/Syllabus';
import Notification from './components/Drawers/Notification';
import Share from './components/Drawers/Share';
import Rating from './components/Drawers/Rating';
import Feedback from './components/Drawers/Feedback';
import About from './components/Drawers/About';

const SyllabusStack = createStackNavigator();

const SyllabusStackScreen = () => (
	<SyllabusStack.Navigator headerMode="none">
		<SyllabusStack.Screen
			name="Syllabus"
			component={Syllabus}
			options={{
				headerRight: () => (
					<Button onPress={() => alert("This is a button!")} title="Info" color="#fff" />
				),
			}}
		/>
	</SyllabusStack.Navigator>
)


const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = createStackNavigator();
const BookStack = createStackNavigator();
const ProfileStack = createStackNavigator()
const ResultStack = createStackNavigator()


const HomeStackScreen = () => (
	
	<HomeStack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
		<HomeStack.Screen
			name="TNPSC"
			component={Home}
			options={{
				headerStyle: {
					backgroundColor: "#5a189a",
				},
				headerTintColor: "#fff",
				headerTitleStyle: {
					fontWeight: "bold",
				},
			}}
		/>
	</HomeStack.Navigator>
)

const BookStackScreen = () => (
	<BookStack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
		<BookStack.Screen
			name="Books"
			component={Books}
			options={{
				headerStyle: {
					backgroundColor: "#ff7900",
				},
				headerTintColor: "#fff",
				headerTitleStyle: {
					fontWeight: "bold",
				},
			}}
		/>
	</BookStack.Navigator>
)


const ProfileStackScreen = () => (
	<ProfileStack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
		<ProfileStack.Screen
			name="Profile"
			component={Profile}
			options={{
				headerStyle: {
					backgroundColor: "#33415c",
				},
				headerTintColor: "#fff",
				headerTitleStyle: {
					fontWeight: "bold",
				},
			}}
		/>
	</ProfileStack.Navigator>
)


const ResultStackScreen = () => (
	<ResultStack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
		<ResultStack.Screen
			name="Result"
			component={Result}
			options={{
				headerStyle: {
					backgroundColor: "#9381ff",
				},
				headerTintColor: "#fff",
				headerTitleStyle: {
					fontWeight: "bold",
				},
			}}
		/>
	</ResultStack.Navigator>
)


const Tabss = () => (
	<Tab.Navigator initialRouteName="Home" activeColor="#fff">
		<Tab.Screen
			name="Home"
			component={HomeStackScreen}
			options={{
				tabBarLabel: "Home",
				tabBarColor: "#009387",
				tabBarIcon: ({ color }) => <Icon name="ios-home" color={color} size={26} />,
			}}
		/>
		<Tab.Screen
			name="Books"
			component={BookStackScreen}
			options={{
				tabBarLabel: "Books",
				tabBarColor: "#1f65ff",
				tabBarIcon: ({ color }) => (
					<Icon name="book-outline" color={color} size={26} />
				),
			}}
		/>
		<Tab.Screen
			name="Result"
			component={ResultStackScreen}
			options={{
				tabBarLabel: "Result",
				tabBarColor: "#694fad",
				tabBarIcon: ({ color }) => <Icon name="podium-outline" color={color} size={26} />,
			}}
		/>
		<Tab.Screen
			name="Profile"
			component={ProfileStackScreen}
			options={{
				tabBarLabel: "Profile",
				tabBarColor: "#694fad",
				tabBarIcon: ({ color }) => <Icon name="person-circle-outline" color={color} size={26} />,
			}}
		/>
	</Tab.Navigator>
)

 const App = () => {


  return (
		<NavigationContainer>
			<Drawer.Navigator
				// openByDefault
				// drawerStyle={{
				// 	backgroundColor: "#fff1e6",
				// 	width: 240,
				// }}
				drawerContentOptions={{
					activeTintColor: "#2b2d42",
					itemStyle: { marginVertical: 10 },
				}}
			>
				<Drawer.Screen
					name="Home"
					component={Tabss}
					options={{
						drawerIcon: (config) => (
							<Icon
								size={23}
								color={"#7b2cbf"}
								name={Platform.OS === "android" ? "md-home" : "ios-home"}
							></Icon>
						),
					}}
				/>
				<Drawer.Screen
					name="Syllabus"
					component={SyllabusStackScreen}
					options={{
						drawerIcon: (config) => (
							<Icon
								size={23}
								color={"#7b2cbf"}
								name={Platform.OS === "android" ? "md-book" : "ios-book"}
							></Icon>
						),
					}}
				/>
				<Drawer.Screen
					name="Notification"
					component={Notification}
					options={{
						drawerIcon: (config) => (
							<Icon
								size={23}
								color={"#7b2cbf"}
								name={
									Platform.OS === "android"
										? "md-alert-circle-outline"
										: "ios-alert-circle-outline"
								}
							></Icon>
						),
					}}
				/>
				<Drawer.Screen
					name="Share"
					component={Share}
					options={{
						drawerIcon: (config) => (
							<Icon
								size={23}
								color={"#7b2cbf"}
								name={
									Platform.OS === "android"
										? "md-share-social-sharp"
										: "ios-share-social-sharp"
								}
							></Icon>
						),
					}}
				/>
				<Drawer.Screen
					name="Rating"
					component={Rating}
					options={{
						drawerIcon: (config) => (
							<Icon
								size={23}
								color={"#7b2cbf"}
								name={Platform.OS === "android" ? "md-star-sharp" : "ios-star-sharp"}
							></Icon>
						),
					}}
				/>
				<Drawer.Screen
					name="Feedback"
					component={Feedback}
					options={{
						drawerIcon: (config) => (
							<Icon
								size={23}
								color={"#7b2cbf"}
								name={
									Platform.OS === "android"
										? "md-chatbubble-ellipses"
										: "ios-chatbubble-ellipses"
								}
							></Icon>
						),
					}}
				/>
				<Drawer.Screen
					name="About"
					component={About}
					options={{
						drawerIcon: (config) => (
							<Icon
								size={23}
								color={"#7b2cbf"}
								name={Platform.OS === "android" ? "md-at-sharp" : "ios-at"}
							></Icon>
						),
					}}
				/>
			</Drawer.Navigator>
		</NavigationContainer>
	)
}




export default App;
