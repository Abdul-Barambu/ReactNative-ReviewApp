import { View, Text } from 'react-native'
import React from 'react'
import { globalStyle } from '../styles/GlobalStyle'

const About = () => {
  return (
    <View>
      <Text style={globalStyle.aboutText}>Review App is an application where you can input your day to day activities, 
        you can add and delete  tasks</Text>
    </View>
  )
}

export default About