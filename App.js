import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import { store } from './store'
import { Provider } from 'react-redux'
import HomeScreen from './screens/HomeScreen';
import BusinessScreen from './screens/BusinessScreen';
import BasketScreen from './screens/BasketScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Business" component={BusinessScreen} />
          <Stack.Screen name="Basket" component={BasketScreen} options={{ presentation: 'modal', headerShown: false }}/>
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
