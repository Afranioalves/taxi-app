import { useState } from "react";
import { View, Text, Pressable, TextInput } from "react-native"
import { styles } from "../styles/phone-enter.style"
import * as NavigationBar from 'expo-navigation-bar';

const PhoneEnter = ({navigation}) =>{

    const {navigate} = navigation

    NavigationBar.setBackgroundColorAsync("#fff");
    const [isFocused, setIsFocused] = useState(false);
    const [phone, setPhone] = useState('');
    const handleFocus = () => phone.trim().length != 0 ? setIsFocused(true) : setIsFocused(false);
    const handleBlur = () => setIsFocused(false);

    const formatPhoneNumber = (text) => {
        const cleanedText = text.replace(/\D/g, '');
        const formattedNumber = cleanedText.replace(/(\d{3})(\d{3})(\d{3})/, '$1-$2-$3');
        return formattedNumber;
      };
    
      const handlePhoneNumberChange = (text) => {
        const formattedNumber = formatPhoneNumber(text);
        setPhone(formattedNumber);
      };
      
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Verificar telefone</Text>
            <Text style={styles.description}>Número</Text>
            <Text style={styles.info}>
                Pronto para começar ! {'\n'} introduza o seu número de telefone
            </Text>
            <View style={styles.containerInput}>
                
                <View style={styles.inputField}>
                    <Text style={styles.countryCode}>+244</Text>
                    <Text style={styles.bar}>|</Text>
                    <TextInput 
                        placeholder="Número" 
                        style={[styles.input, phone.trim().length > 0 && styles.focusedTextInput]}
                        placeholderTextColor="#BCBCBC"
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        value={phone}
                        onChangeText={handlePhoneNumberChange}
                        keyboardType="numeric"
                        maxLength={12} 
                    />
                </View>
            </View>

            
            <Pressable style={styles.buttonSend} onPress={()=>navigate('Verification')}>
                <Text style={styles.textSend}>ENVIAR CÓDIGO</Text>
            </Pressable>
        </View>
    )
}

export default PhoneEnter