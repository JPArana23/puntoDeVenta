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
import MyDatePicker from './MyDatePicker'
import DateTimePicker from '@react-native-community/datetimepicker'


const Producto = ({productos, setProductos, modProducto}) => {

    const [codigo,setCodigo]=useState('')
    const [descripcion,setDescripcion]=useState('')
    const [pVenta,setPVenta]=useState('')
    const [pCosto,setPCosto]=useState('')
    const [existencia,setExistencia]=useState('')
    const [fechaV, setFechaV] = useState<Date | undefined>(undefined)

    const [showDatePicker, setShowDatePicker] = useState(false);

    const onDateChange= (event: any, fechaV: Date | undefined)=> {
      setShowDatePicker(false);
      if(fechaV){
        setFechaV(fechaV)
      }
    };

    const guardarProductos=()=>{
      const datosProducto=[codigo,descripcion,pCosto,pVenta,existencia,fechaV];
        
       if(datosProducto.includes(''))
        {
            Alert.alert(
                'Precaucion',
                'Todos los campos son requeridos',
                [{text:'Aceptar'}]
            );
            return
        }

        const nuevoProducto={
          codigo,
          descripcion,
          pCosto,
          pVenta,
          existencia,
          fechaVencimiento: fechaV?.toISOString().slice(0,10)||'',
    
          /*en react native cuando la variable y el atributo se llaman igual, basta con poner uno solo*/
        }

        setProductos([...productos, nuevoProducto]);
        console.log(productos)

        Alert.alert('Aviso',
        'Producto ingresado',
        [{text:'Aceptar'}])
        modProducto(false);
        
        setCodigo('')
        setDescripcion('')
        setFechaV(undefined)
        setPCosto('')
        setPVenta('')
        setExistencia('')

      }
       

        const showAlert = () => {
          Alert.alert('Aviso', 'Esta a punto de salir de esta ventana', [
            { text: 'Aceptar', onPress: ()=>  modProducto(false)} ,
            { text: 'Cancelar', onPress: () => console.log('Botón Cancelar presionado') },
          ]);
        };
  return (
    
    <MyContainer>
  
    <SafeAreaView >
    <Text style={mySts.title}>Nuevo Producto
    <Pressable
     onPress={showAlert}
      >
      <Text style={mySts.btnClose}>X</Text>
    </Pressable>
    </Text>
    <ScrollView>
      <Text style={mySts.prr2}>Codigo:</Text>
      <TextInput
       placeholder='Ej:  1234'  
       placeholderTextColor="gray"  
       style={mySts.Inpt}
       value={codigo}
       onChangeText={setCodigo}
       ></TextInput>
      <Text style={mySts.prr2}>Descripcion:</Text>
      <TextInput
       placeholder='Ej: producto...'  
       placeholderTextColor="gray"  
       style={mySts.Inpt}
       value={descripcion}
       onChangeText={setDescripcion}
       ></TextInput>
      <Text style={mySts.prr2}>Precio Costo:</Text>
      <TextInput
       placeholder='Ej: Q15.0'  
       placeholderTextColor="gray"  
       style={mySts.Inpt}
       value={pCosto}
       onChangeText={setPCosto}
       ></TextInput>
      <Text style={mySts.prr2}>Precio Venta:</Text>
      <TextInput
       placeholder='Ej: Q15.00'  
       placeholderTextColor="gray"  
       style={mySts.Inpt}
       value={pVenta}
       onChangeText={setPVenta}
       ></TextInput>
      <Text style={mySts.prr2}>existencia:</Text>
      <TextInput
       placeholder='Ej:  12'  
       placeholderTextColor="gray"  
       style={mySts.Inpt}
       keyboardType='numeric'
       value={existencia}
       onChangeText={setExistencia}
      ></TextInput>
        <Text style={mySts.prr2}>Fecha de vencimiento:</Text>
        <TouchableOpacity style={mySts.Inpt} onPress={()=>setShowDatePicker(true)}>
          <Text style={mySts.prr2}>{fechaV ? fechaV.toISOString().slice(0,10):'Seleccionar fecha'}</Text>
        </TouchableOpacity>
        {showDatePicker && (
            <DateTimePicker
              value={fechaV || new Date()}
              mode='date'
              is24Hour={true}
              display='default'
              onChange={onDateChange}
            />
          )}

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

export default Producto