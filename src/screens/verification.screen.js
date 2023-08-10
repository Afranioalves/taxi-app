import { useState } from "react";
import { View, Text, Pressable, TextInput } from "react-native"
import { styles } from "../styles/verification.style"
import { Feather } from '@expo/vector-icons';
import * as NavigationBar from 'expo-navigation-bar';

const Verification = ({navigation}) =>{

    const {navigate} = navigation

    NavigationBar.setBackgroundColorAsync("#fff");
      
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Verificação</Text>
            <Text style={styles.description}>Código</Text>
            <Text style={styles.info}>
                Código de verificação foi enviado com{'\n'} sucesso, no seguinte número
            </Text>
            <View style={styles.containerInput}>
                
                <View style={styles.inputField}>
                    <View style={styles.boxContact}>
                        <Text style={styles.countryCode}>+244</Text>
                        <Text style={styles.bar}>|</Text>
                        <Text style={styles.number}>945-784-248</Text>
                    </View>
                    
                    <Pressable style={styles.buttonEdit}>
                        <Feather name="edit-3" size={18} color="grey" />
                    </Pressable>
                </View>

                <View style={styles.inputCodes}>
                    <TextInput style={styles.input} keyboardType="numeric" maxLength={1}/>
                    <TextInput style={styles.input} keyboardType="numeric" maxLength={1}/>
                    <TextInput style={styles.input} keyboardType="numeric" maxLength={1}/>
                    <TextInput style={styles.input} keyboardType="numeric" maxLength={1}/>
                </View>
            </View>

            <View style={styles.containerButtons}>
                <Pressable style={[styles.buttonSend,{backgroundColor:'#f1f1f1'}]}>
                    <Text style={styles.textSend}>REENVIAR</Text>
                </Pressable>
                <Pressable style={styles.buttonSend} onPress={()=>navigate('InfoEnter')}>
                    <Text style={styles.textSend}>CONFIRMAR</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Verification