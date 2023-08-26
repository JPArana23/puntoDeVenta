/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useContext, useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,

} from 'react-native';
import { myColors } from './src/styles/myColors';
import { mySts } from './src/styles/mySts';
import MyContainer from './src/components/MyContainer';
import MyMenu from './src/components/MyMenu';
import { ModalContext } from './src/context/ModalContext';
import Producto from './src/components/Producto'
import Listado from './src/components/Listado';
import Clientes from './src/components/Clientes';
import ListadoClientes from './src/components/ListadoClientes';
import Proveedores from './src/components/Proveedores';
import {Picker} from '@react-native-picker/picker';
import Venta from './src/components/Venta';

function App(): JSX.Element {
  const [estado, setEstado]= useState('')
  const [callProducto, setCallProducto]=useState(false);
  const [productos, setProductos] = useState([]);
  const [clientes, setClientes] = useState([]);
  const [proveedores, setProveedores]= useState([]);
  const [ventas, setVentas]= useState([]);

  const [callListado, setCallListado]=useState(false);
  const [callCliente, setCallCliente] = useState(false)
  const [callLstCliente, setLstCallCliente] = useState(false)
  const [callProveedor, setCallProveedor] = useState(false)
  const [callVenta, setCallVenta] = useState(false)

  const [selectedLanguage, setSelectedLanguage] = useState();

  function modCliente(estado){
    setCallCliente(estado);
  }
  function modListadoCliente(estado){
    setLstCallCliente(estado);
  }
  function modProducto(estado){
    setCallProducto(estado);
  }
  function modListado(estado){
    setCallListado(estado);
  }
  function modProveedor(estado){
    setCallProveedor(estado);
  }
  function modVenta(estado){
    setCallVenta(estado);
  }
  return (
    <ModalContext.Provider value={estado}>
      <MyContainer>
        <SafeAreaView >  

        <Text style={mySts.title}>CodeVerse</Text>
        <MyMenu
        modProducto={modProducto}
        modListado={modListado}
        modCliente={modCliente}
        modListadoCliente={modListadoCliente}
        modProveedor={modProveedor}
        modVenta={modVenta}
        >
          
        </MyMenu>
        <Modal
          animationType='slide'
          visible={callProducto}
         >
         <Producto
          modProducto={modProducto}
          productos={productos}//Enviando el Json
          setProductos={setProductos}//La funcion Json
         ></Producto>
        </Modal>
        <Modal
        animationType='slide'
        visible={callListado}
        >
          <Listado
           productos={productos}
            modListado={modListado}
          >
          </Listado>
        </Modal>

        <Modal
        animationType='slide'
        visible={callCliente}
        >
          <Clientes
            clientes={clientes}
            modCliente={modCliente}
            setClientes={setClientes}
          >
          </Clientes>
        </Modal>

        <Modal
        animationType='slide'
        visible={callLstCliente}
        >
          <ListadoClientes
            clientes={clientes}
            modListadoCliente={modListadoCliente}
            setClientes={setClientes}
          >
          </ListadoClientes>
        </Modal>

        <Modal
        animationType='slide'
        visible={callProveedor}
        >
          <Proveedores
            proveedores={proveedores}
            setProveedores={setProveedores}
            modProveedor={modProveedor}
          >
          </Proveedores>
        </Modal>

        <Modal
        animationType='slide'
        visible={callVenta}
        >
          <Venta
           productos={productos}
            ventas={ventas}
            setVentas={setVentas}
            modVenta={modVenta}
          >
          </Venta>
        </Modal>
  


        </SafeAreaView>
      </MyContainer>
   </ModalContext.Provider>

    
    

  );
}

const styles = StyleSheet.create({
  back:{
    fontSize:50,
    color:myColors.light
  

}

});

export default App;
