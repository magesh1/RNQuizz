import React from 'react'
import { View, Text } from 'react-native'
import { Appbar } from "react-native-paper"

const Header = () => (
	<Appbar.Header>
		<Appbar.Content title="Feedback" />
	</Appbar.Header>
)

const Feedback = () => {
    return (
        <View>
            <Header />
            <Text>feedback</Text>
        </View>
    )
}

export default Feedback
