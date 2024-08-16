import { StyleSheet, Dimensions } from "react-native";

const {height} = Dimensions.get('window')

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff",
        paddingTop:64,
        paddingHorizontal:24,
        position:'relative'
    },
    title:{
        fontFamily:"NunitoSansBlack",
        fontSize:24
    },
    description:{
        fontFamily:"NunitoSansBold",
        marginTop:8,
        fontSize:16,
        borderBottomWidth:4,
        width:55,
        paddingBottom:6,
        borderBottomColor:'#FACD1A'
    },
    info:{
        fontSize:17,
        fontFamily:"NunitoSansMedium",
        marginTop:40,
        textAlign:'center',
        lineHeight:30,
        color:"#4B4B4B",
        marginBottom:40
    },
    inputField:{
        alignItems:'center',
        marginBottom:16,
        position:'relative',
        flexDirection:'row',
        height:60,
        borderRadius:24,
        borderColor:"#BCBCBC",
        borderWidth:1,
        width:300,
        paddingHorizontal:16,
        gap:8,
        position:'relative'
    }
    ,
    input:{ 
        fontFamily:"NunitoSansMedium",
        width:300,
        height:60,
        fontSize:14
    },
    containerInput:{
        alignItems:'center'
    },
    bar:{
        color:"#BCBCBC"
    },
    countryCode:{
        fontFamily:"NunitoSansBold",
        fontSize:14
    },
    focusedTextInput: {
        fontFamily:"NunitoSansBold",
        fontSize: 18,
      },
      buttonSend:{
       
        marginTop:(height/3)+56,
        backgroundColor:'#FACD1A',
        width:'100%',
        height:55,
        borderRadius:4,
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center'
      },
      buttonSignIn:{
       
        marginTop:(height/2)-24,
        backgroundColor:'#FACD1A',
        width:'100%',
        height:55,
        borderRadius:4,
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center'
      },
      textSend:{
        fontFamily:"NunitoSansBold",
        fontSize:16
      },
      buttonChangeView:{
        position:'absolute',
        right:12,
        width:30,
        height:30,
        aligmSelf:'flex-end',
        alignItems:'center',
        justifyContent:'center',
        zIndex:1
      },
      textForget:{
        fontFamily:"NunitoSansMedium",
        textAlign:'right',
        marginRight:24,
        fontSize:14,
        color:"#BCBCBC"

      }
    

})

