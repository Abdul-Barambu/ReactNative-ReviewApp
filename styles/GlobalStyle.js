import { StyleSheet } from "react-native";

export const globalStyle = StyleSheet.create({

    headerTitle: {
        backgroundColor: '#0080FF',
    },
    headerStyle: {
        color: 'white',
        fontFamily: 'Philosopher-bold',
        fontSize: 25,
        marginLeft: 90
    },
    container: {
        padding: 20,
        flex: 1,
    },
    text: {
        fontSize: 20,
        fontFamily: 'Philosopher-bold',
        padding: 10
    },
    aboutText: {
        fontFamily: "Poppins-bold",
        padding: 30,
        fontSize: 20
    },
    reviewTitle: {
        fontFamily: "Poppins-bold",
        fontSize: 15
    },
    reviewBody: {
        fontSize: 15,
        fontFamily: "Philosopher-regular",
    },
    reviewRating: {
        flexDirection:'row',
        justifyContent: 'center',
        marginTop: 15,
        borderTopWidth: 1,
        borderTopColor: 'lightgray',
    },
    homeFlex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    backIcon: {
        marginLeft: 10
    },

    addIcon: {
        textAlign: 'center',
        paddingVertical: 20,
        marginTop: 20
    },

    input: {
        borderWidth: 1,
        borderColor: 'lightgray',
        borderRadius: 10,
        padding: 13,
        fontFamily: 'Philosopher-regular',
        fontSize: 20
    },

    error: {
        color: 'red',
        fontFamily: 'Philosopher-regular',
        fontSize: 16,
        textAlign: 'center',
        paddingTop: 5,
        paddingBottom: 15,
        fontWeight: 'bold'
    },

    modalView: {
        flex: 1
    }
})


export const images = {
    ratings: {
        '1': require('../assets/rating-1.png'),
        '2': require('../assets/rating-2.png'),
        '3': require('../assets/rating-3.png'),
        '4': require('../assets/rating-4.png'),
        '5': require('../assets/rating-5.png'),
    }
}