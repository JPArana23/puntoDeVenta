import React, { Children } from 'react'
import LinearGradient from "react-native-linear-gradient";
import { myColors } from "../styles/myColors";
import { mySts } from "../styles/mySts";



const MyContainer = ({children}) => {
  return (
        
        <LinearGradient 
        colors={[myColors.dark, myColors.blue]}
        style={mySts.container}
        >
        {children}
        </LinearGradient>
  )
}

export default MyContainer


