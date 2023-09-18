import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Card = (props) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        {props.children}
      </View>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    elevation: 6,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: 'gray',
    shadowOpacity: 0.3,
    marginHorizontal: 4,
    marginVertical: 6,
    borderRadius: 15
  },
  cardContent: {
    padding: 10
  }
})