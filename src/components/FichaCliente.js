import React from 'react'
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,  
    TextInput,  
    View,
    Alert,
    Pressable,
    Modal,
    FlatList,
    toLocaleDateString
  } from 'react-native';

import { mySts } from '../styles/mySts';
import Clientes from './Clientes';

const FichaCliente = ({clientes, setMostrar, item}) => {
    const {nit,nombres,apellidos,telefono,edad}=item;
    const editarProducto=(codEditar)=>{
      const buscarCliente=clientes.filter(aux=>aux.nit===codEditar)
      console.log(buscarCliente[0])
    }
    const eliminarProducto=(codEliminar)=>{
      console.log(item)
      
    }
    return (
        <View style={mySts.backFicha}>
            <View>
              <Text style={mySts.textoCampo}><Text style={mySts.titulo}>NIT: </Text>{nit}</Text>
              <Text style={mySts.textoCampo}><Text style={mySts.titulo}>Nombre: </Text> {nombres}</Text>
              <Text style={mySts.textoCampo}><Text style={mySts.titulo}>Apellido: </Text> {apellidos}</Text>
              <Text style={mySts.textoCampo}><Text style={mySts.titulo}>Telefono: </Text> {telefono}</Text>
              <Text style={mySts.textoCampo}><Text style={mySts.titulo}>E-mail: </Text> {edad}</Text>
            </View>
            <View style={mySts.fichaBtn}>
              <Pressable
                style={mySts.btnEditar}
                onPress={()=>{
                  editarProducto(nit)
                  setMostrar(true)
                }}
              >
                <Text style={mySts.textBtn}>Editar</Text>
              </Pressable>
              <Pressable
                style={mySts.btnEliminar}
                onPress={()=>{eliminarProducto(nit)
                 
                }}
              
              >
                <Text style={mySts.textBtn}>Eliminar</Text>
              </Pressable>
            </View>
        </View>
      )
}

export default FichaCliente