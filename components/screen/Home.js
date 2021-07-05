import React from 'react'
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native'
import { Entypo } from "@expo/vector-icons"
import { StatusBar } from "expo-status-bar"



const Home = ({navigation}) => {
    return (
			<View>
				<StatusBar style="light" />
				<Text>TNPSC</Text>
				{/* <Button title="toggledrawer" onPress={() => navigation.toggleDrawer()}/> */}
				<TouchableOpacity onPress={() => navigation.toggleDrawer()}>
					<Entypo name="menu" size={24} color="black" style={styles.Icon} />
				</TouchableOpacity>
				<Button title="Books" onPress={() => navigation.navigate("Books")} />
			</View>
		)
}


const styles = StyleSheet.create({
	Icon: {
		alignSelf: 'flex-end',
	}
})

export default Home
