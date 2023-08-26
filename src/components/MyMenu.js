import React from 'react'
import { useState } from 'react'
import { Pressable, Text, View } from 'react-native'
import { mySts } from '../styles/mySts'

const MyMenu = ({modProducto, modListado, modCliente, modListadoCliente, modProveedor, modVenta}) => {
  const [madarEstado, setMandarEstado] = useState(false)
  return (
    <View style={mySts.btnContainer}>  
     <View style={mySts.btnRow}>
     <Pressable
           style={mySts.btn}
           onPress={()=>modProducto(true)}
        >
     
          <Text style={mySts.txt}>Nuevo Producto</Text>
        </Pressable>
        <Pressable
          style={mySts.btn}
          onPress={()=>modListado(true)}
        >
             <Text style={mySts.txt}>Listado Producto</Text>
        </Pressable>
     </View>
     <View style={mySts.btnRow}>

     <Pressable
          style={mySts.btn}
          onPress={()=>modCliente(true)}
        >
             <Text style={mySts.txt}>Nuevo Cliente</Text>
        </Pressable>

        <Pressable
          style={mySts.btn}
          onPress={()=>modListadoCliente(true)}
        >
             <Text style={mySts.txt}>Listado Cliente</Text>
        </Pressable>  
     </View>

     <View style={mySts.btnRow}>

<Pressable
     style={mySts.btn}
     onPress={()=>modProveedor(true)}
   >
        <Text style={mySts.txt}>Nuevo Proveedor</Text>
   </Pressable>


<Pressable
     style={mySts.btn}
     onPress={()=>modVenta(true)}
   >
        <Text style={mySts.txt}>Venta</Text>
   </Pressable>
</View>
   
        

    </View>
  )
}

export default MyMenu;