import React from 'react'
import { View, Text } from 'react-native'
import { Appbar } from "react-native-paper"

const Header = () => (
	<Appbar.Header>
		<Appbar.Content title="Share" />
	</Appbar.Header>
)

const Share = () => {
    return (
        <View>
            <Header />
            <Text>Share</Text>
        </View>
    )
}

export default Share
