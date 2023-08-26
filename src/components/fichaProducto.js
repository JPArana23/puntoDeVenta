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
import Producto from '../components/Producto';

const FichaProducto = ({item,producto,setMostrar}) => {

    const {codigo,descripcion,pCosto,pVenta,existencia,fechaVencimiento}=item;
    const editarProducto=(codEditar)=>{
      const buscarProducto=producto.filter(aux=>aux.codigo===codEditar)
      console.log(buscarProducto[0])
    }
    const eliminarProducto=(codEliminar)=>{
      console.log('producto por Eliminar ')
      
    }
  return (
    <View style={mySts.backFicha}>
        <View>
          <Text style={mySts.textoCampo}><Text style={mySts.titulo}>Codigo: </Text>{item.codigo}</Text>
          <Text style={mySts.textoCampo}><Text style={mySts.titulo}>Descripcion: </Text> {item.descripcion}</Text>
          <Text style={mySts.textoCampo}><Text style={mySts.titulo}>Precio Costo: </Text> {item.pCosto}</Text>
          <Text style={mySts.textoCampo}><Text style={mySts.titulo}>Precio Venta: </Text> {item.pVenta}</Text>
          <Text style={mySts.textoCampo}><Text style={mySts.titulo}>Existencia: </Text> {item.existencia}</Text>
          <Text style={mySts.textoCampo}><Text style={mySts.titulo}>Fecha Vencimiento: </Text> {item.fechaVencimiento}</Text>
        </View>
        <View style={mySts.fichaBtn}>
          <Pressable
            style={mySts.btnEditar}
            onPress={()=>{
              editarProducto(codigo)
              setMostrar(true)
            }}
          >
            <Text style={mySts.textBtn}>Editar</Text>
          </Pressable>
          <Pressable
            style={mySts.btnEliminar}
            onPress={()=>{eliminarProducto(codigo)
              setMostrar(true)
            }}
          
          >
            <Text style={mySts.textBtn}>Eliminar</Text>
          </Pressable>
        </View>
    </View>
  )
}
export default FichaProducto;