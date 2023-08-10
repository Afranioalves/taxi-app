import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        position:'relative'
    },
    containerInfo:{
        position:'absolute',
        width:'100%',
        bottom:56,
        paddingHorizontal:24
    },
    taxiName:{
        fontFamily:"NunitoSansBlack",
        fontSize:32,
        color:'#FACD1A',
        marginBottom:8
    },
    description:{
        fontFamily:"NunitoSansBold",
        fontSize:20,
        marginBottom:24,
        color:"#f1f1f1",
        lineHeight:32
    },
    buttonStart:{
        backgroundColor:'#FACD1A',
        width:'100%',
        height:50,
        borderRadius:4,
        alignSelf:'center',
        marginTop:32,
        alignItems:'center',
        justifyContent:'center'
    },
    textButton:{
        fontFamily:"NunitoSansBold",
        fontSize:16
    }

})

