import {useCallback} from 'react';
import { View } from 'react-native';
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import Router from "./src/routes"
import {Provider} from "./src/context"

SplashScreen.preventAutoHideAsync();

const App = () =>{
  
  const [fontsLoaded] = useFonts({
    "NunitoSansBold": require("./assets/fonts/NunitoSansBold.ttf"),
    "NunitoSansSemiBold": require("./assets/fonts/NunitoSansSemiBold.ttf"),
    "NunitoSansExtraBold": require("./assets/fonts/NunitoSansExtraBold.ttf"),
    "NunitoSansRegular": require("./assets/fonts/NunitoSansRegular.ttf"),
    "NunitoSansMedium": require("./assets/fonts/NunitoSansMedium.ttf"),
    "NunitoSansBlack": require("./assets/fonts/NunitoSansBlack.ttf"),
  
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return <Provider><View onLayout={onLayoutRootView} style={{flex:1}}><Router/></View></Provider> 

  
}

export default App