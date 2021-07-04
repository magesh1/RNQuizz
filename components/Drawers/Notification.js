import React from 'react'
import { View, Text } from 'react-native'
import { Appbar } from "react-native-paper"

const Header = () => (
	<Appbar.Header>
		<Appbar.Content title="Notification" />
	</Appbar.Header>
)

const Notification = () => {
    return (
        <View>
            <Header />
            <Text>Notification</Text>
        </View>
    )
}

export default Notification
