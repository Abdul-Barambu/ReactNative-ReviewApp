import { createDrawerNavigator } from '@react-navigation/drawer';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import About from './screens/About';
import { NavigationContainer } from '@react-navigation/native';
import { globalStyle } from './styles/GlobalStyle';
import * as Font from 'expo-font';
import Review from './screens/Review';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';

const Drawer = createDrawerNavigator();

const getFonts = () => Font.loadAsync({
  "Poppins-black": require('./assets/font/Poppins-Black.ttf'),
  "Poppins-bold": require('./assets/font/Poppins-Bold.ttf'),
  "Poppins-extraBold": require('./assets/font/Poppins-ExtraBold.ttf'),
  "Poppins-extraLight": require('./assets/font/Poppins-ExtraLight.ttf'),
  "Poppins-meduim": require('./assets/font/Poppins-Medium.ttf'),
  "Poppins-regular": require('./assets/font/Poppins-Regular.ttf'),
  "Philosopher-regular": require('./assets/font/Philosopher-Regular.ttf'),
  "Philosopher-bold": require('./assets/font/Philosopher-Bold.ttf'),
})
export default function App() {

  const [fontLoad, setFontLoad] = useState(false)

  if (!fontLoad) {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontLoad(true)}
        onError={'error'}
      />
    )
  }

  return (
    <NavigationContainer>
      <StatusBar />
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} options={{
          headerTitleStyle: globalStyle.headerStyle,
          headerStyle: globalStyle.headerTitle,
          headerTintColor: 'white'
        }} />
        <Drawer.Screen name="About" component={About} options={{
          headerTitleStyle: globalStyle.headerStyle,
          headerStyle: globalStyle.headerTitle,
          headerTintColor: 'white'
        }} />
        <Drawer.Screen name=" " component={Review} options={({ navigation }) => ({
          title: "Review",
          headerTitleStyle: globalStyle.headerStyle,
          headerStyle: globalStyle.headerTitle,
          headerTintColor: 'white',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="ios-chevron-back" size={30} color="white" style={globalStyle.backIcon} />
            </TouchableOpacity>
          ),
          style: globalStyle.visi
        })
        } />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}