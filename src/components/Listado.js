import React from 'react'
import { Modal, SafeAreaView, Text, Pressable, FlatList, Alert } from 'react-native'
import { mySts } from '../styles/mySts'
import FichaProducto from '../components/fichaProducto'
import MyContainer from './MyContainer'
import {useState} from 'react'

const Listado = ({setmtrProductos,productos,modListado}) => {
  
  const showAlert = () => {
    Alert.alert('Aviso', 'Esta a punto de salir de esta ventana', [
      { text: 'Aceptar', onPress: ()=>  modListado(false)} ,
      { text: 'Cancelar', onPress: () => console.log('Botón Cancelar presionado') },
    ]);
  };


  return (
    <MyContainer>
  
    <SafeAreaView >
    <Text style={mySts.title}>Listado Productos
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

export default Listado;