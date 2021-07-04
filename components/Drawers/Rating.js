import React from 'react'
import { View, Text } from 'react-native'
import { Appbar } from "react-native-paper"

const Header = () => (
	<Appbar.Header>
		<Appbar.Content title="Rating" />
	</Appbar.Header>
)

const Rating = () => {
    return (
        <View>
            <Header />
            <Text>rating</Text>
        </View>
    )
}

export default Rating
