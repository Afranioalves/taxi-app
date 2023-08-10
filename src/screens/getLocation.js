import { useState, useContext } from "react";
import { View, Text, Pressable, TextInput } from "react-native"
import { styles } from "../styles/get-location.style"
import { Feather } from '@expo/vector-icons';
import * as NavigationBar from 'expo-navigation-bar';
import * as Location from 'expo-location';
import { Context } from "../context/";

const GetLocation = ({navigation}) =>{

    const {navigate} = navigation

    const {actions} = useContext(Context);
    const {setCoordinate} = actions

    const [isAccepted, setIsAccepted] = useState(false)

    NavigationBar.setBackgroundColorAsync("#fff");

    const getUserLocation = async () =>{
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            //handleExitApp()
            return;
        }
        let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
        const {latitude, longitude} = location.coords
        setCoordinate(latitude, longitude)
        setIsAccepted(true)
        setTimeout(() => {
            navigate('SignIn')
        }, 4000);
        //setLocation({latitude, longitude});
    }

    const handlePressYes = () =>getUserLocation() ;

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Localização</Text>
            <Text style={styles.description}>Coords</Text>
            <Text style={styles.info}>
                Ola ! precisamos saber a sua localização para teres uma experiência única
            </Text>
            <View style={styles.containerInput}>
                
                <View style={styles.inputField}>
                    <View style={styles.boxContact}>
                        <Text style={styles.emoji}>{isAccepted?'😁':'😓'}</Text>
                        <Text style={styles.bar}>|</Text>
                        <Text style={styles.text}>{isAccepted?'Obrigado !':'Aguardando...'}</Text>
                    </View>
                    
                </View>
            </View>

            <View style={styles.containerButtons}>
                <Pressable style={[styles.buttonSend,{backgroundColor:'#f1f1f1'}]}>
                    <Text style={styles.textSend}>DEPOIS</Text>
                </Pressable>
                <Pressable style={styles.buttonSend} onPress={()=>handlePressYes()}>
                    <Text style={styles.textSend}>PERMITIR</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default GetLocation