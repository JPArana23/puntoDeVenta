import { StyleSheet } from "react-native";
import { myColors } from "./myColors";
import	LinearGradient from 'react-native-linear-gradient'
import { Colors } from "react-native/Libraries/NewAppScreen";
export const mySts=StyleSheet.create({
    container:{
        flex:1,
    },
    title:{
        borderLeftWidth:1,
        borderRightWidth:1,
        borderBottomWidth: 3,
        borderLeftColor:"white",
        borderBottomColor: myColors.light,
        borderRightColor:"white",
        borderRadius:15,
        fontSize: 35,
        textAlign:"center",
        padding:15,
        color:"white",
        margin:1,
        fontStyle:"italic"
    },
    btn:{
        backgroundColor:myColors.light,
        width:135,
        height:135,
        borderRadius:15,
        flexDirection:"column",
        borderWidth: 3,
        borderColor:"white",
        alignItems:"center",
        justifyContent:"center"
    },
    txt:{
        color:"white",
        textAlign:"center",
        fontSize:25
    },
    btnContainer:{
        paddingTop:35,
     /*   borderWidth:5,
        borderColor:"red",*/
        flexDirection:"colum",
        justifyContent:"space-evenly", 
    },
    btnRow:{
      paddingTop:35,
   /*   borderWidth:5,
      borderColor:"red",*/
      flexDirection:"row",
      justifyContent:"space-evenly", 
  },

    backmodal:{
      
    },

    //**estilos de producto */
      btnClose:{
     
        position: 'absolute',
        top: -50,
        right: -80,
        backgroundColor:myColors.red,
        borderRadius: 15, // Un valor grande para hacer que el botón sea un círculo
        width: 50, // Tamaño del botón (ajusta según tus necesidades)
        height: 70, // Tamaño del botón (ajusta según tus necesidades)
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize:35
      },

      tl1:{
       
      },
      prr1:{
        color:'white',
        fontSize:18,
        fontStyle:'italic',
        textAlign:'center',
        backgroundColor:'#1B3A4B',
      },
      prr2:{
        color:'white',
        fontSize:20,
        textAlign:'left',
        marginTop:5,
        marginLeft:20,
      },
      highlight: {
        fontWeight: '700',
      },
    
      btnTxt:{
        color:'white',
        fontSize:20,
        fontWeight:'500',
        textAlign:'center',
      },
      btnSave:{
        backgroundColor:myColors.light,
        width:'80%',
        height:45,
        borderRadius:15,
        borderWidth: 3,
        borderColor:"white",
        justifyContent:"center",
        textAlign:"center",
        margin:35,
        marginBottom:100

      },
      Inpt:{
        borderWidth:2,
        borderColor:myColors.light,
        padding:10,
        borderRadius:10,
        marginBottom:15,
        color:'white',
        fontSize:20,
        margin:10,
      },
      //* estilos del DatePicker */
      centerView:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        marginTop:20
      },
      modalView:{
        margin:20,
        backgroundColor:myColors.blue,
        borderRadius:15,
        width:'90%',
        padding:35,
        alignItems:'center',
        shadowColor:myColors.light,
        shadowOffset:{
          width:0,
          height:2,
        },
        shadowOpacity:0.30,
        shadowRadius: 5,
        elevation:5,
      },
      //*estilos de la ficha*/
      backFicha:{
        backgroundColor:myColors.dark,
        marginVertical:5,
        marginHorizontal:50,
        borderRadius:20,
        padding:10,
        borderLeftColor:'white',
        borderRightColor:'white',
        borderWidth:1,
        borderBottomColor:myColors.light,
        borderBottomWidth:3 
      },
      fichaBtn:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:5
      },
      btnEditar:{
        backgroundColor:myColors.lightBlue,
        padding:10,
        borderRadius:5,
        width:75
      },
      textBtn:{
        fontSize:12,
        color:'white',
        fontWeight:'700',
        textAlign:'center'
      },
      btnEliminar:{
        backgroundColor:myColors.red,
        padding:10,
        borderRadius:5,
        width:75
      },
      textoCampo:{
        color:myColors.light,
        fontSize:18
      },

      //*Estilos del listado */
      
      botonCancelar:{
        backgroundColor:'#C23627',
        marginVertical:20,
        borderRadius:7,
        padding:5,
        marginHorizontal:20
      },
      titulo:{
        textAlign:'center',
        textTransform:'uppercase',      
        color:myColors.red,
        fontWeight:'bold',
        fontSize:18,
        marginVertical:20
      },
      texto:{
        color:'#fff',
        textAlign:'center',
        textTransform:'uppercase',
        fontSize:17,
        fontWeight:'bold'
      },
      input:{
        backgroundColor:"#fff",
        padding:10,
        fontSize:20,
        borderRadius:7,
        fontWeight:'bold',
        marginBottom:5
      },
      estiloBoton:{
        backgroundColor:'#9a6710',
        marginTop:10,
        borderRadius:7,
        padding:10
      }
})