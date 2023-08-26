import React,{useState, useContext, useEffect}from 'react'
import { Modal, SafeAreaView, Text, Pressable, FlatList, Alert } from 'react-native'
import { mySts } from '../styles/mySts'
import FichaCliente from './FichaCliente'
import MyContainer from './MyContainer'
import Clientes from './Clientes'
import axios from 'axios'

const ListadoClientes = ({clientes, modListadoCliente,setClientes}) => {

    const showAlert = () => {
        Alert.alert('Aviso', 'Esta a punto de salir de esta ventana', [
          { text: 'Aceptar', onPress: ()=>  modListadoCliente(false)} ,
          { text: 'Cancelar', onPress: () => console.log('Botón Cancelar presionado') },
        ]);
      };

      useEffect(()=>{
        const cargaClientes=async()=>{
          const url='http://192.168.0.20:9095/cliente/listadoClientes'
          const respuesta=await fetch(url)
      
          const resultado= await respuesta.json()
       //  const respuesta = await axios.get(url)
         //const resultado= await respuesta.data
         setClientes(resultado.data)
        }
        cargaClientes()
        console.log(clientes)
      },[modListadoCliente])
      

    return (
        <MyContainer>
      
        <SafeAreaView >
        <Text style={mySts.title}>Listado Cliente
        <Pressable
         onPress={showAlert}
          >
          <Text style={mySts.btnClose}>X</Text>
        </Pressable>
        </Text>
            <FlatList
                data={clientes}
                keyExtractor={item=>item.nit}
                renderItem={({item})=>{
                    return(
                        <FichaCliente
                            item={item}
                        ></FichaCliente>
                    )
                }}
            ></FlatList>
        </SafeAreaView>
        </MyContainer>
    )
}

export default ListadoClientes