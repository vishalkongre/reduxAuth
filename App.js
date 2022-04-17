/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage'

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import Home from './src/Screens/Home';
import LoginScreen from './src/Screens/Login';
import { store } from './src/store';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { Init } from './src/store/actions';


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [Show, setShow] = useState(true)



  const ShowArray = () => {
    const a = [1, 2, 3]
    const b = [4, 5, 6]
    console.log(a + ',' + b);
  }
  ShowArray()
  useEffect(() => {
    setTimeout(() => {
      setShow(false)
    }, 3000);
  }, [])

  const AppStack = createNativeStackNavigator();
  const AppStackScreens = () => {
    return (
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name='Home' component={Home} />
      </AppStack.Navigator>
    )
  }

  const AuthStack = createNativeStackNavigator()
  const AuthStackScreens = () => {
    return (
      <AuthStack.Navigator screenOptions={{ headerShown: false }}>
        <AuthStack.Screen name='Login' component={LoginScreen} />
      </AuthStack.Navigator>
    )
  }

  const RootStack = createNativeStackNavigator()
  const RootStackScreens = () => {
    const token = useSelector(state => state.Reducers.authToken);

    const dispatch = useDispatch()
    const init = () => {
      dispatch(Init())
    }

    useEffect(() => {
      init()
    }, [])


    return (
      <NavigationContainer >
        {token === null ? <AuthStackScreens /> : <AppStackScreens />}
      </NavigationContainer>
    )
  }

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  if (Show) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image source={require('./src/images/reactnative.png')} style={{ width: 190, height: 200 }} />
      </View>
    )
  } else {
    return (
      <Provider store={store}>

        <RootStackScreens />

      </Provider>)
  }


};

const styles = StyleSheet.create({

});

export default App;
