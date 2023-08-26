import React, { useState } from 'react'
import { mySts } from '../styles/mySts'
import { Modal, TouchableOpacity, View, Text} from 'react-native'
import DatePicker from 'react-native-modern-datepicker'
import {getToday, getFormatedDate} from 'react-native-modern-datepicker'

const MyDatePicker = ( fecha) => {
    const [open, setOpen]= useState(false)// abrir y cerrar modal
    const [date, setDate]= useState(false)// variable para la fecha
    const today = new Date();
    const startDate= getFormatedDate(today.setDate(today.getDate()+1, 'dd/MM/YYYY'))

    function handleOnPress(){
        setOpen(!open);
    }
    function handleChange(fecha){
        setDate(fecha)
    }

    return (
    <View>
        <TouchableOpacity onPress={handleOnPress}>
            <Text style={mySts.Inpt}>{date}</Text>
        </TouchableOpacity>
        <Modal
        animationType='slide'
        transparent={true}
        visible={open}
        >
            <View style={mySts.centerView}>
                <View style={mySts.modalView}>
                    <DatePicker
                        mode='calendar'
                        selected={date}
                        onDateChange={handleChange}
                        minimunDate={startDate}
                    />
                 <TouchableOpacity onPress={handleOnPress}>
                    <Text style={mySts.Inpt}>Cerrar</Text>
                 </TouchableOpacity>
                </View>
            </View>

        </Modal>
    </View>
  )
}

export default MyDatePicker