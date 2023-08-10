import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import Onboarding from '../screens/onboarding.screen';
import PhoneEnter from '../screens/phoneEnter.screen';
import Verification from '../screens/verification.screen';
import InfoEnter from '../screens/InfoEnter.screen';
import SignIn from '../screens/signIn.screen';
import Home from '../screens/home.screen';
import GetLocation from '../screens/getLocation';

const Stack = createStackNavigator()

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

export default function Router() {
  return (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName='Onboarding'
            screenOptions={{
            headerShown:false,
            gestureEnabled: false,
            gestureDirection: "horizontal",
            transitionSpec: {
              open: config,
              close: config,
            },
            
          }}  
        >
            <Stack.Screen name="Onboarding" component={Onboarding}/>
            <Stack.Screen name="PhoneEnter" component={PhoneEnter}/>
            <Stack.Screen name="Verification" component={Verification}/>
            <Stack.Screen name="InfoEnter" component={InfoEnter}/>
            <Stack.Screen name="SignIn" component={SignIn}/>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="GetLocation" component={GetLocation}/>
        </Stack.Navigator>
    </NavigationContainer>
   
  );
}

