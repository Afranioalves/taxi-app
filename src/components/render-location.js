import { Pressable, View, Text } from 'react-native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
export const RenderLocation = ({styles, localname, localtype, setLocation, closeModal, destination}) =>{

    const handlesetLocation = () =>{
        const name = localname.length > 30 ? `${localname.substr(0,30)} ...` : localname
        setLocation(name),
        destination(true)
        setTimeout(()=>{
            closeModal()
        },2000)
    }

   
    return(
        <Pressable style={styles.buttonResult} onPress={()=>handlesetLocation()}>
            <MaterialCommunityIcons name="map-marker-outline" size={28} color="#FACD1A" />
            <View>
                <Text style={styles.local}>{localname.length > 30 ? `${localname.substr(0,30)} ...` : localname }</Text>
                <Text style={styles.type}>{localtype}</Text>
            </View>
            <Pressable style={styles.buttonLove}>
                <Ionicons name="ios-heart-outline" size={24} color="grey" />
            </Pressable>  
        </Pressable>
    )
}