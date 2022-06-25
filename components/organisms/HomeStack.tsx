import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeNav from './HomeNav';
import UserScreen from '../../pages/UserScreen';
import MoneyScreen from '../../pages/MoneyScreen';
import AddmoneyScreen from '../../pages/AddmoneyScreen';
import SigninScreen from '../../pages/SigninScreen';
import SignupScreen from '../../pages/SignupScreen';
import SignoutScreen from '../../pages/SignoutScreen';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeNav} options={{ headerShown: false }} />
        <Stack.Screen name="MoneyScreen" component={MoneyScreen} />
        <Stack.Screen name="UserScreen" component={UserScreen} />
        <Stack.Screen name="AddmoneyScreen" component={AddmoneyScreen} />
        <Stack.Screen name="SigninScreen" component={SigninScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="SignoutScreen" component={SignoutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeStack;