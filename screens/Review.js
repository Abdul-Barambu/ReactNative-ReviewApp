import { View, Text, Image } from 'react-native'
import React from 'react'
import { globalStyle, images } from '../styles/GlobalStyle'
import { useRoute } from '@react-navigation/native'
import Card from './card/Card'

const Review = () => {

  const route = useRoute();

  const title = route.params.title
  const body = route.params.body
  const rating = route.params.rating

  return (
    <View style={globalStyle.container}>
      <Card>
        <View>
          <Text style={globalStyle.reviewTitle}>Title: <Text style={globalStyle.reviewBody}>{title}</Text></Text>
          <Text style={globalStyle.reviewTitle}>Body: <Text style={globalStyle.reviewBody}>{body}</Text></Text>
          <View style={globalStyle.reviewRating}>
            <Text style={globalStyle.reviewTitle}>Rating:
            <Image source={(images.ratings[rating])} />
            </Text>
          </View>
        </View>
      </Card>
    </View>
  )
}

export default Review