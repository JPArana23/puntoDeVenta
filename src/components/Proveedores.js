import React,{useState, useContext}from 'react'
import{
  Modal,
  Pressable,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Text,
  ScrollView,
  View,
  Alert,
  TouchableOpacity
} from 'react-native'
import { mySts } from '../styles/mySts'
import { ModalContext } from '../context/ModalContext'
import MyContainer from './MyContainer'

const Proveedores = ({proveedores, setProveedores, modProveedor}) => {
    const [nit,setNit]=useState('')
    const [nombre, setNombre]=useState('')
    const [telefono,setTelefono]=useState('')
    const [email,setEmail]=useState('')
   



    const guardarProductos=()=>{
      const datosProveedor=[nit,nombre,telefono,email];
        
       if(datosProveedor.includes(''))
        {
            Alert.alert(
                'Precaucion',
                'Todos los campos son requeridos',
                [{text:'Aceptar'}]
            );
            return
        }

        const nuevoProveedor={
          nit,
          nombre,
          telefono,
          email,    
          /*en react native cuando la variable y el atributo se llaman igual, basta con poner uno solo*/
        }

        setProveedores([...proveedores, nuevoProveedor]);
        console.log(nuevoProveedor)

        Alert.alert('Aviso',
        'Proveedor ingresado',
        [{text:'Aceptar'}])
        modProveedor(false);
        
        setNit('')
        setNombre('')
        setTelefono('')
        setEmail('')

      }
       

        const showAlert = () => {
          Alert.alert('Aviso', 'Esta a punto de salir de esta ventana', [
            { text: 'Aceptar', onPress: ()=>  modProveedor(false)} ,
            { text: 'Cancelar', onPress: () => console.log('Botón Cancelar presionado') },
          ]);
        };
  return (
    
    <MyContainer>
  
    <SafeAreaView >
    <Text style={mySts.title}>Nuevo Proveedor
    <Pressable
     onPress={showAlert}
      >
      <Text style={mySts.btnClose}>X</Text>
    </Pressable>
    </Text>
    <ScrollView>
      <Text style={mySts.prr2}>NIT:</Text>
      <TextInput
       placeholder='Ej:  1234-1'  
       placeholderTextColor="gray"  
       style={mySts.Inpt}
       value={nit}
       onChangeText={setNit}
       ></TextInput>
      <Text style={mySts.prr2}>Nombre:</Text>
      <TextInput
       placeholder='Ej: Juan'  
       placeholderTextColor="gray"  
       style={mySts.Inpt}
       value={nombre}
       onChangeText={setNombre}
       ></TextInput>
      <Text style={mySts.prr2}>Telefono:</Text>
      <TextInput
       placeholder='Ej: 1234-5678'  
       placeholderTextColor="gray"  
       keyboardType='numeric'
       style={mySts.Inpt}
       value={telefono}
       onChangeText={setTelefono}
       ></TextInput>
      <Text style={mySts.prr2}>E-mail:</Text>
      <TextInput
       placeholder='Ej: juan@ejemplo.com'  
       placeholderTextColor="gray"  
       style={mySts.Inpt}
       keyboardType="email-address"
       value={email}
       onChangeText={setEmail}
      ></TextInput>

      <Pressable style={mySts.btnSave}
        onPress={guardarProductos}
      >
        <Text style={mySts.btnTxt}>Guardar</Text>
      </Pressable>

    </ScrollView>
    </SafeAreaView>
    
    </MyContainer>
    )
}
export default Proveedores 