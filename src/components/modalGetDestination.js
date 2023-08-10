import { useState } from "react";
import {
    Modal, 
   StyleSheet, 
   View, 
   Dimensions, 
   Pressable, 
   Text, 
   TextInput, 
   ScrollView,
} from "react-native"
import { MaterialCommunityIcons, FontAwesome, MaterialIcons, Feather,  Ionicons } from '@expo/vector-icons';

import { locations } from "../data/locations";
import { RenderLocation } from "./render-location";

const {height, width} = Dimensions.get('screen')



const ModalGetDestination = ({isVisible, setVisible, setDestination}) =>{

    const [localname, setLocal] = useState("");
    const localSearch = locations.filter((local)=>local.nome.toUpperCase().includes(localname.toUpperCase()))
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => localname.trim().length != 0 ? setIsFocused(true) : setIsFocused(false);
    const handleBlur = () => setIsFocused(false);

    const renderLocation = () =>{
        return localSearch.slice(0,8).map((local, index)=>{
            return(
                <RenderLocation styles={styles} 
                    localname={local.nome} 
                    localtype={local.tipo} 
                    key={index}
                    setLocation={setLocal}
                    closeModal={()=>setVisible(false)}
                    destination={setDestination}
                />
            )
        })
    }

    const handleClose = () =>{
        setVisible(false)
        setLocal('')
    }

   return(
       <Modal
           visible={isVisible}
           animationType="slide"
           transparent={true}
           statusBarTranslucent={true}
           onRequestClose={()=>setVisible(false)}
           
       >
       <View style={[styles.modalContainer]}>

           <View style={styles.content} onPress={()=>setVisible(false)}>
               {/*<Pressable  onPressOut={()=>setVisible(false)} style={styles.buttonHandler}>
                   <View style={styles.line} />
               </Pressable>*/}

                <View style={styles.header}>
                    <Pressable onPress={()=>handleClose()}>
                        <Feather name="x" size={32} color="black" />
                    </Pressable>
                    <Text style={styles.titleHeader}>PARA ONDE VAMOS ?</Text>
                </View>
                <View style={styles.containerInput}>
                    <View style={styles.boxInput}>
                    <Pressable style={styles.buttonSetDestination} onPress={()=>handleSetShow()}>
                        <MaterialIcons name="person-pin-circle" size={24} color="#BCBCBC" />
                    </Pressable>
                        <FontAwesome name="circle" size={18} color="#1E82DE" />
                        <Text style={styles.bar}>|</Text>
                        <TextInput placeholder="Sua localização" style={styles.input}/>
                    </View>

                    <View style={styles.boxInput}>
                        <MaterialCommunityIcons name="map-marker-radius" size={24} color="#FACD1A" />
                        <Text style={styles.bar}>|</Text>
                        <TextInput 
                        placeholder="Escolha o destino..." 
                        style={[styles.input, localname.trim().length > 0 && styles.focusedTextInput]} 
                        onChangeText={setLocal}
                        value={localname}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        
                        />
                    </View>
                </View>

                <View style={styles.renderResult}>
                    {localname.length == 0 ? null :
                        <ScrollView showsVerticalScrollIndicator={false}>
                            {renderLocation()}
                        </ScrollView>
                    }
                    
                </View>

                
             
           </View>
           
       </View>
           
       </Modal>
   )
}

export default ModalGetDestination

const styles = StyleSheet.create({
   modalContainer: {
       flex: 1,
       backgroundColor: 'rgba(49, 49, 49, 0.6)',
   },
   content:{
       height,
       backgroundColor:"#fff",
       width:'100%',
       /*borderTopLeftRadius:24,
       borderTopRightRadius:24,*/
       //alignItems:'center',
        paddingVertical:48,
       paddingHorizontal:24
   },
   line:{
       width:60,
       height:4,
       backgroundColor:'#D9D9D9',
       borderRadius:4,
       alignSelf:'center'
   },
   header:{
    flexDirection:'row',
    alignItems:'center',
    gap:40
   },
   titleHeader:{
    fontFamily:"NunitoSansExtraBold",
    fontSize:16
   },
   containerInput:{
    marginTop:24
   },
   boxInput:{
        flexDirection:'row',
        gap:8,
        height:55,
        //backgroundColor:"#f1f1f1",
        borderRadius:20,
        borderColor:"#BCBCBC",
        borderWidth:1,
        alignItems:'center',
        paddingHorizontal:16,
        marginBottom:12
   },
   buttonSetDestination:{
        position:'absolute',
        right:8,
        width:40,
        height:40,
        alignItems:'center',
        justifyContent:'center'
   },
   bar:{
        color:"#BCBCBC"
    },
    input:{
        fontFamily:"NunitoSansMedium",
        fontSize:16,
        width:'80%',
    },

    renderResult:{
        marginTop:16,
        paddingBottom:24
    },
    buttonResult:{
        flexDirection:'row',
        gap:12,
        alignItems:'center',
        position:'relative',
        marginBottom:16
    },
    local:{
        fontFamily:"NunitoSansExtraBold",
        fontSize:14
    },
    type:{
        fontFamily:"NunitoSansMedium",
        fontSize:12,
        color:'grey'
    },
    buttonLove:{
        position:'absolute',
        right:0,
    },
    focusedTextInput: {
        fontFamily:"NunitoSansBold",
        fontSize: 16,
      },
    
   
})