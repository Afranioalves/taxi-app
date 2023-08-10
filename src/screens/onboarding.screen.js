import { useContext, useEffect } from "react";
import { Text, View, ImageBackground, Pressable, handleExitApp } from "react-native"
import { StatusBar } from "expo-status-bar";
import background from '../../assets/img/ground.png'
import { styles } from "../styles/onboarding.style"
import * as NavigationBar from 'expo-navigation-bar';


const Onboarding = ({navigation}) =>{
    NavigationBar.setBackgroundColorAsync("#000");
    const {navigate} = navigation


    return(
        <ImageBackground
            source={background}
            style={styles.container}
        >
            <View style={styles.containerInfo}>
                <Text style={styles.taxiName}>GC TAXI</Text>
                <Text style={styles.description}>Conectamos você ao seu destino,  de forma rápida e segura.</Text>
                <Pressable style={styles.buttonStart} onPress={()=>navigate('PhoneEnter')}>
                    <Text style={styles.textButton}>COMEÇAR</Text>
                </Pressable>
            </View>

            <StatusBar style="light"/>
        </ImageBackground>
    )

}

export default Onboarding