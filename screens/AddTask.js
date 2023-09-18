import { View, Text, TextInput, Button } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import { globalStyle } from '../styles/GlobalStyle'
import * as yup from 'yup'

const validation = yup.object({
    title: yup.string()
        .required()
        .min(5),

    body: yup.string()
        .required()
        .min(10),

    rating: yup.string()
        .required()
        .test('is-num-1-5', 'Rating must be between 1 - 5', (value) => {
            return parseInt(value) < 6 && parseInt(value) > 0;
        })
})


const AddTask = ({ addTask }) => {
    return (
        <View style={globalStyle.container}>
            <Formik initialValues={{ title: '', body: '', rating: '' }}
                validationSchema={validation}
                onSubmit={(values) => {
                    addTask(values)
                }}>

                {(props) => (
                    <View>
                        <TextInput
                            placeholder='Task title'
                            value={props.values.title}
                            onChangeText={props.handleChange('title')}
                            onBlur={props.handleBlur('title')}
                            style={globalStyle.input}
                        />
                        <Text style={globalStyle.error}>{props.touched.title && props.errors.title}</Text>
                        <TextInput
                            multiline
                            placeholder='Task body'
                            value={props.values.body}
                            onChangeText={props.handleChange('body')}
                            onBlur={props.handleBlur('body')}
                            style={globalStyle.input}
                        />
                        <Text style={globalStyle.error}>{props.touched.body && props.errors.body}</Text>
                        <TextInput
                            placeholder='Rating (1 - 5)'
                            value={props.values.rating}
                            onChangeText={props.handleChange('rating')}
                            onBlur={props.handleBlur('rating')}
                            style={globalStyle.input}
                        />
                        <Text style={globalStyle.error}>{props.touched.rating && props.errors.rating}</Text>

                        <Button title='Submit' onPress={props.handleSubmit} />
                    </View>
                )}

            </Formik>
        </View>
    )
}

export default AddTask