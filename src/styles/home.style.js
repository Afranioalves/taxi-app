import { StyleSheet, Dimensions } from "react-native";

const {height, width} = Dimensions.get('window')

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff",
        position:'relative'
    },
    containerMap:{
        height:height-160
    },
    map:{
        width,
        height:height-150,
    },
    iconCar:{
        width:70,
        height:70
    },
    containerSearch:{
        backgroundColor:'#FACD1A',
        height:200,
        paddingHorizontal:24,
        paddingVertical:24
    },
    username:{
       fontFamily:"NunitoSansBlack",
       textTransform:'uppercase',
       fontSize:22,
       marginBottom:4,
       
       
    },
    title:{
        fontFamily:"NunitoSansExtraBold",
        fontSize:18,
        color:"#fff"
    },
    buttonGo:{
        flexDirection:'row',
        backgroundColor:'#FFE064',
        height:50,
        marginTop:12,
        borderRadius:12,
        alignItems:'center',
        gap:12,
        paddingHorizontal:16
    },
    textButton:{
        fontFamily:"NunitoSansBold",
        color:"#626262"
    },
    buttonOpenMenu:{
        position:'absolute',
        width:50,
        height:50,
        backgroundColor:'#fff',
        zIndex:1,
        left:24,
        top:48,
        borderRadius:40,
        alignItems:'center',
        justifyContent:'center',
        ShadowColor: '#FACD1A',
        ShadowOffset: { width: 2, height: 12 }, 
        ShadowRadius: 12,
        elevation:12
    
    },
    containerChoice:{
        backgroundColor:'#fff',
        height:300,
        paddingVertical:24,
        borderTopLeftRadius:12,
        borderTopRightRadius:12,
        position:'absolute',
        width:'100%',
        bottom:78
    },
    buttonSelectCar:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:8,
        paddingHorizontal:24,
        paddingVertical:6
    },
    carSelected:{
        backgroundColor:"#f1f1f1",
    },
    imageCar:{
        width:50,
        height:50
    },
    infoCar:{
        flexDirection:'row',
        gap:16,
        alignItems:'center'
    },
    titleChoice:{
        fontFamily:"NunitoSansExtraBold",
        fontSize:18,
        color:"#FACD1A",
         marginBottom:16,
        paddingHorizontal:24,
    },
    textTitle:{
        fontFamily:"NunitoSansBold",
        fontSize:16
    },
    textDescription:{
        fontFamily:"NunitoSansRegular",
        fontSize:12
    }
    ,
    price:{
        fontFamily:"NunitoSansBlack",
        fontSize:18
    },
    buttonConfirm:{
        backgroundColor:"#FACD1A",
        marginHorizontal:24,
        marginTop:24,
        height:55,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:4
    },
    textConfirm:{
        fontFamily:"NunitoSansBold",
        fontSize:16
      },

})

