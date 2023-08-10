import { useContext, useState } from "react";
import {View, Text, Image, Pressable} from 'react-native'
import { StatusBar } from "expo-status-bar";
import * as NavigationBar from 'expo-navigation-bar';
import { styles } from "../styles/home.style"
import MapView, { Marker, Callout } from 'react-native-maps'
import {data} from '../data'
import carIcon from '../../assets/img/car1.png'
import { Context } from "../context/";
import { Feather, Ionicons } from '@expo/vector-icons';
import Modal from "../components/modalGetDestination";
import Car1 from '../../assets/cars/taxi_1.png';
import Car2 from '../../assets/cars/taxi_2.png';
import Car3 from '../../assets/cars/taxi_3.png';

const Home = () =>{
    const [isVisible, setIsVisible] = useState(false)
    const [isDistination, setIsDestination] = useState(false)
    NavigationBar.setBackgroundColorAsync("#FACD1A");

    const { value, actions} = useContext(Context);
    const {userInfo} = value
  

    const renderMarker = ()=>{
        return  data.map((taxi, index) =>{
            return( 
            <Marker 
                 coordinate={{ latitude:+taxi.latitude, longitude:+taxi.longitude}} 
                 key={index}
                 
             >
                 <Image 
                     source={carIcon}
                     resizeMode="cover"
                     style={styles.iconCar}
                     title="car"
                     description="Car"
                 />
             </Marker>
            ) 
         })
     }
    return(
        <View style={styles.container}>
            <View style={styles.containerMap}>
                <Pressable style={styles.buttonOpenMenu}>
                    <Ionicons name="menu" size={26} color="#FACD1A" />
                </Pressable>
                <MapView 
                        onPress={(e)=>console.log(e.nativeEvent)}
                        style={styles.map}
                        initialRegion={{
                            latitude:-8.9167246,
                            longitude:13.2548055,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                       showsUserLocation={true}
                        loadingEnabled
                        zoomControlEnabled={false}
                        zoomEnabled={true}
                        loadingIndicatorColor="#FACD1A"
                        mapType="terrain"
                       
                        
                    >
                        <Marker coordinate={{ latitude:-8.9373358, longitude:13.2421182}} >
                        <Image 
                            source={carIcon}
                            resizeMode="cover"
                            style={styles.iconCar}
                            title="car"
                            description="Car"
                        />
                    </Marker>
                    {renderMarker()}      
                </MapView>
            </View>

           {!isDistination ? 
           
           <View style={styles.containerSearch}>
               <Text style={styles.username}>👋 {userInfo.name}</Text>
               <Text style={styles.title}>PARA ONDE VAMOS ?</Text>
               <Pressable style={styles.buttonGo} onPress={()=>setIsVisible(true)}>
                    <Feather name="search" size={20} color="#626262" />
                    <Text style={styles.textButton}>Escolha o destino aqui...</Text>
               </Pressable>
            </View> :
            <View style={styles.containerChoice}>
            <Text style={styles.titleChoice}>FAÇA A SUA ESCOLHA</Text>
            <Pressable style={[styles.buttonSelectCar, styles.carSelected]}>
                 <View style={styles.infoCar}>
                     <Image source={Car1} style={styles.imageCar}/>
                     <View>
                         <Text style={styles.textTitle}>Small Cool</Text>
                         <Text style={styles.textDescription}>+ Economico, c/Ac</Text>
                     </View> 
                 </View>

                 <Text style={styles.price}>2.200 kz</Text>
                 
            </Pressable>
            <Pressable style={styles.buttonSelectCar}>
                 <View style={styles.infoCar}>
                     <Image source={Car2} style={styles.imageCar}/>
                     <View>
                         <Text style={styles.textTitle}>Hight Fast</Text>
                         <Text style={styles.textDescription}>+ Rápido, c/Ac</Text>
                     </View> 
                 </View>

                 <Text style={styles.price}>4.100 kz</Text>
                 
            </Pressable>
            <Pressable style={styles.buttonSelectCar}>
                 <View style={styles.infoCar}>
                     <Image source={Car3} style={styles.imageCar}/>
                     <View>
                         <Text style={styles.textTitle}>Freeze kep</Text>
                         <Text style={styles.textDescription}>+ Conforto, c/Ac</Text>
                     </View> 
                 </View>

                 <Text style={styles.price}>3.000 kz</Text>
                 
            </Pressable>

            <Pressable style={styles.buttonConfirm}>
                 <Text style={styles.textConfirm}>CONFIRMAR</Text>
            </Pressable>
            </View>
            }

            
                <Modal isVisible={isVisible} setVisible={setIsVisible} setDestination={setIsDestination}/>
            <StatusBar style="light"/>
        </View>
    )
}

export default Home