import { useState } from "react";
import { View, Text, Pressable, TextInput } from "react-native"
import { styles } from "../styles/info-enter.style"
import { Entypo, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import * as NavigationBar from 'expo-navigation-bar';

const SignIn = ({navigation}) =>{
    
    const {navigate} = navigation

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

   
      
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Mbora entrar !</Text>
            <Text style={styles.description}>Login</Text>
            <Text style={styles.info}>
                Mbora pedir uma carona, introduza{'\n'}a sua password para entrar
            </Text>
            <View style={styles.containerInput}>
                
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
            <Text style={styles.textForget}>Esqueci a password</Text>

            
            <Pressable style={styles.buttonSignIn} onPress={()=>navigate('Home')}>
                <Text style={styles.textSend}>ENTRAR</Text>
            </Pressable>
        </View>
    )
}

export default SignIn