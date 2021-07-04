import React from 'react'
import { View, Text } from 'react-native'
import { Appbar, Card, Button, Title, Paragraph} from "react-native-paper"




const Header = () => (
	<Appbar.Header>
		<Appbar.Content title="About" />
	</Appbar.Header>
)

const Cards = () => (
	<Card>
		<Card.Content>
			<Title>About App</Title>
			<Paragraph>
				Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
				Ipsum has been the industry's standard dummy text ever since the 1500s, when an
				unknown printer took a galley of type and scrambled it to make a type specimen
				book.
			</Paragraph>
			<Button>Cancel</Button>
			<Button>Ok</Button>
		</Card.Content>
	</Card>
)


const About = () => {
    
    return (
			<View>
				<Header /> 
                <Cards />
                
			</View>
		)
}

export default About
