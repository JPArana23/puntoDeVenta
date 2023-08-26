import React 
from 'react'
import MyContainer from './MyContainer'
import { SafeAreaView,Text, Pressable, Alert, ScrollView, FlatList, View } from 'react-native'
import { mySts } from '../styles/mySts'
import FichaProducto from './fichaProducto'


const Venta = ({modVenta, productos}) => {

    const showAlert = () => {
        Alert.alert('Aviso', 'Esta a punto de salir de esta ventana', [
          { text: 'Aceptar', onPress: ()=>  modVenta(false)} ,
          { text: 'Cancelar', onPress: () => console.log('Botón Cancelar presionado') },
        ]);
      };

  return (
    <MyContainer>
        <SafeAreaView>
        <Text style={mySts.title}>Punto de Venta
    <Pressable
     onPress={showAlert}
      >
      <Text style={mySts.btnClose}>X</Text>
    </Pressable>
    </Text>

   
        <FlatList
            data={productos}
            keyExtractor={item=>item.codigo}
            renderItem={({item})=>{
                return(
                    <FichaProducto
                        item={item}
                    ></FichaProducto>
                )
            }}
        ></FlatList>
   

        </SafeAreaView>
    </MyContainer>
  )
}

export default Venta