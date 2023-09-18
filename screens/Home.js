import { View, Text, TouchableOpacity, Modal, Keyboard, TouchableWithoutFeedback, FlatList} from 'react-native'
import React, { useState } from 'react'
import { globalStyle } from '../styles/GlobalStyle'
import Card from './card/Card'
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import AddTask from './AddTask'

const Home = ({ navigation }) => {

    const [modal, setModal] = useState(false);
    const [reviews, setReviews] = useState([
        {
            title: "Software Engineering",
            body: "Software engineering is the principal of building software",
            rating: 5,
            key: '1'
        },
        {
            title: "Computer Engineering",
            body: "Computer engineering is the principal of building Computer hardware",
            rating: 3,
            key: '2'
        },
        {
            title: "Mechanical Engineering",
            body: "Mechanical engineering is the principal of building engines",
            rating: 1,
            key: '3'
        },
    ])

    const addTask = (review) => {
        review.key = Math.random().toString()

        setReviews((prevTask) => {
           return [review, ...prevTask]
        })

        setModal(false)
    }

    return (
        <View style={globalStyle.container}>

            <Modal visible={modal} animationType='slide'>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={globalStyle.modalView}>
                        <MaterialIcons name="cancel" size={45} color="black"
                            style={globalStyle.addIcon}
                            onPress={() => setModal(false)}
                        />
                        <AddTask addTask={addTask} />
                    </View>
                </TouchableWithoutFeedback>
            </Modal>

            <Ionicons name="md-add-circle" size={50} color="black"
                style={globalStyle.addIcon}
                onPress={() => setModal(true)}
            />

            <FlatList
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate(" ", item)}>
                        <Card>
                            <View style={globalStyle.homeFlex}>
                                <Text style={globalStyle.text}>{item.title}</Text>
                                <MaterialIcons name="delete" size={30} color="black" />
                            </View>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default Home