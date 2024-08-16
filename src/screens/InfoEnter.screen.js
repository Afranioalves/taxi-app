import { useState, useContext } from "react";
import { View, Text, Pressable, TextInput } from "react-native"
import { styles } from "../styles/info-enter.style"
import { Entypo, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import * as NavigationBar from 'expo-navigation-bar';
import { Context } from "../context/";

const InfoEnter = ({navigation}) =>{

    const {navigate} = navigation

    const {actions} = useContext(Context);

    NavigationBar.setBackgroundColorAsync("#fff");

    const [isFocused, setIsFocused] = useState(false);
    const [isFocusedPassword, setIsFocusedPassword] = useState(false);
    const [name, setName] = useState('');
    const [isShow, setIsShow] = useState(true);
    const [password, setPassword] = useState('');
    const handleFocus = () => name.trim().length != 0 ? setIsFocused(true) : setIsFocused(false);
    const handleBlur = () => setIsFocused(false);

    const handleFocusPassword = () => password.trim().length != 0 ? setIsFocusedPassword(true) : setIsFocusedPassword(false);
    const handleBlurPassword = () => setIsFocused(false);

    const handleSetShow = () => isShow ? setIsShow(false) : setIsShow(true)

    const handleRecord = () =>{
        actions.setInfo(name)
        navigate('GetLocation')
    }

   
      
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Credêncial</Text>
            <Text style={styles.description}>Dados</Text>
            <Text style={styles.info}>
                Estamos finalizando, introduza seu nome e uma password forte
            </Text>
            <View style={styles.containerInput}>
                
                <View style={styles.inputField}>
                    <Entypo name="emoji-happy" size={18} color="#BCBCBC" />
                    <Text style={styles.bar}>|</Text>
                    <TextInput 
                        placeholder="Seu nome" 
                        style={[styles.input, name.trim().length > 0 && styles.focusedTextInput]}
                        placeholderTextColor="#BCBCBC"
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        value={name}
                        onChangeText={setName}
                        
                    />
                    
                </View>

                <View style={styles.inputField}>
                    <Pressable style={styles.buttonChangeView} onPress={()=>handleSetShow()}>
                        {
                            isShow ?
                            <MaterialCommunityIcons name="eye-off-outline" size={20} color="#BCBCBC" /> :
                            <MaterialCommunityIcons name="eye-outline" size={20} color="#BCBCBC" /> 

                        }
                    </Pressable>
                    
                    <AntDesign name="Safety" size={18} color="#BCBCBC" />
                    <Text style={styles.bar}>|</Text>
                    <TextInput 
                        placeholder="Password" 
                        style={[styles.input, password.trim().length > 0 && styles.focusedTextInput]}
                        placeholderTextColor="#BCBCBC"
                        onFocus={handleFocusPassword}
                        onBlur={handleBlurPassword}
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={isShow}
                        
                    />
                    
                </View>
            </View>

            
            <Pressable style={styles.buttonSend} onPress={()=>handleRecord()}>
                <Text style={styles.textSend} >REGISTRAR</Text>
            </Pressable>
        </View>
    )
}

export default InfoEnter