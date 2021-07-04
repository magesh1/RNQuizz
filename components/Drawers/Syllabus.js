import React from 'react'
import { View, Text, TouchableOpacity} from 'react-native'
import { Appbar } from "react-native-paper"
import { AntDesign } from "@expo/vector-icons"


const Header = ({ navigation }) => (
	<Appbar.Header>
		<Appbar.BackAction />
		<Appbar.Content title="Syllabus" />
	</Appbar.Header>
)

const Syllabus = () => {
    return (
        <View>
            <Header />
            <Text>Syllabus</Text>
        </View>
    )
}

export default Syllabus
