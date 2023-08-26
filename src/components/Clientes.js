import React,{useState, useContext, useEffect}from 'react'
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
import {Picker} from '@react-native-picker/picker';
import axios from 'axios'
const Clientes = ({clientes, setClientes, modCliente}) => {
    const [nit,setNit]=useState('')
    const [nombre, setNombre]=useState('')
    const [apellido, setApellido]=useState('')
    const [telefono,setTelefono]=useState('')
    const [email,setEmail]=useState('')
   
    const[categoria, setCategoria]= useState("")

    const[criptos, setCriptos]=useState([]);

    useEffect(()=>{
      const cargaCriptos=async()=>{
        const url='https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
        //const respuesta=await fetch(url)
    
       // const resultado= await respuesta.json()
       const respuesta = await axios.get(url)
       const resultado= await respuesta.data
       setCriptos(resultado.Data)
      }
      cargaCriptos()
    },[])

    const guardarProductos=()=>{
      const datosCliente=[nit,nombre,apellido,telefono,email];
        
       if(datosCliente.includes(''))
        {
            Alert.alert(
                'Precaucion',
                'Todos los campos son requeridos',
                [{text:'Aceptar'}]
            );
            return
        }

        const nuevoCliente={
          nit,
          nombre,
          apellido,
          telefono,
          email,    
          /*en react native cuando la variable y el atributo se llaman igual, basta con poner uno solo*/
        }

        setClientes([...clientes, nuevoCliente]);
        console.log(clientes)

        Alert.alert('Aviso',
        'Cliente ingresado',
        [{text:'Aceptar'}])
        modCliente(false);
        
        setNit('')
        setNombre('')
        setApellido('')
        setTelefono('')
        setEmail('')

      }
       

        const showAlert = () => {
          Alert.alert('Aviso', 'Esta a punto de salir de esta ventana', [
            { text: 'Aceptar', onPress: ()=>  modCliente(false)} ,
            { text: 'Cancelar', onPress: () => console.log('Botón Cancelar presionado') },
          ]);
        };
  return (
    
    <MyContainer>
  
    <SafeAreaView >
    <Text style={mySts.title}>Nuevo Cliente
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

<Picker style={mySts.Inpt}
        selectedValue={categoria}
        onValueChange={(item)=>setCategoria(item)}
    >
  <Picker.Item key={0} label='--------Seleccione uno--------' value=''></Picker.Item>
    {
    criptos.map(item=>(
      <Picker.Item key={item.CoinInfo.Id}
      label={item.CoinInfo.FullName}
      value={item.CoinInfo.Name}></Picker.Item>
    ))
  }
  
 
</Picker>

      <Text style={mySts.prr2}>Nombre:</Text>
      <TextInput
       placeholder='Ej: Juan'  
       placeholderTextColor="gray"  
       style={mySts.Inpt}
       value={nombre}
       onChangeText={setNombre}
       ></TextInput>
      <Text style={mySts.prr2}>Apellido:</Text>
      <TextInput
       placeholder='Ej: Perez'  
       placeholderTextColor="gray"  
       style={mySts.Inpt}
       value={apellido}
       onChangeText={setApellido}
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

export default Clientes