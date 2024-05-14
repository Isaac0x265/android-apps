    import { Button, StyleSheet, TouchableWithoutFeedback } from "react-native"
    import { Colors } from "react-native/Libraries/NewAppScreen"
    export const style = StyleSheet.create({
        div:{
            flex:1,
            backgroundColor:'#111',
            color:'#fff',
            padding :24,
            
        },
        title:{
            color:'white',
            fontSize:28,
            fontWeight:"bold",
            marginTop:12,
        },
        input:{
            color: '#fff',
            height: 65,
            width:200,
            borderWidth: 3,
            borderColor: 'red',
            borderRadius: 12,
            padding:12,
            marginTop: 24,
            marginBottom:64,
            
        },
        buttonBlue:{
            color:'#fff',
            borderWidth: 3,
            borderColor :'blue',
        },
        buttonRed:{
            color:'#fff',
            borderWidth: 3,
            borderColor :'red',
            height:40,

        },
        buttonAdd:{
            height:50,
            width:50,
            backgroundColor:'red',
            marginTop: 32,
            borderRadius : 12,
            justifyContent:"center", 
            alignItems:'center',
        },
        textButtonAdd:{
            color:"white",
            fontSize:42,
            lineHeight:50

        },
        taskStyle:{
            height: 75,
            width:335,
            borderWidth: 3,
            borderColor: 'red',
            borderRadius: 12,
            marginBottom:20,
            flexDirection:'row',
            padding:12,
            justifyContent:'center',
            alignItems:'center'
        },
        taskTextStyle:{
            color:'white',
            fontSize:16,
            flex:1,
        

        },
        buttonRemove:{
            backgroundColor:'#212121',
            height:50,
            width:50,
            borderRadius:99,
            justifyContent:'center',
            alignItems:'center',
            textAlign:'center',
            lineHeight:50,
            marginRight:24,
        },
        buttonRemoveText:{
            color:"red",
            fontSize:48,
            lineHeight:50
        },
        taskCompletedButton:{
            height:24,
            width:24,
            borderWidth:1,
            borderColor:"#fff",
            borderRadius:24,
            textAlign:'center',
            justifyContent:'center',
            alignItems:'center',
            marginRight:24,

        },
        taskStyleCompleted:{
            height: 75,
            width:335,
            borderWidth: 3,
            borderColor: 'gray',
            borderRadius: 12,
            marginBottom:20,
            flexDirection:'row',
            padding:12,
            justifyContent:'center',
            alignItems:'center'
        },
        taskCompletedText:{
            fontSize:12

        },
        btnWhenCompleted:{
            height:24,
            width:24,
            borderWidth:1,
            borderColor:"red",
            borderRadius:24,
            textAlign:'center',
            justifyContent:'center',
            alignItems:'center',
            marginRight:36,


    },
    showInnerContent:{
        height: 170,
            width:335,
            borderWidth: 3,
            borderColor: 'red',
            borderRadius: 12,
            marginBottom:20,
            flexDirection:'row',
            padding:12,
            justifyContent:'center',
            alignItems:'center',
    },
    })