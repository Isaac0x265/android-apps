import { View, Text, TouchableOpacity } from "react-native";
import { style } from "../styles";
import { useState } from "react";
import { useEffect } from "react";
import { ScrollView } from "react-native";

type Props = {
   name: string;
   onremove: () => void;
   oncomplete: () => void;
   ondetails: () => void;
   iscompleted: boolean;
   details:boolean

}

export const Tarefa = ({name, onremove,oncomplete,ondetails,iscompleted,details}: Props) => {
   const [taskStyle, setTaskStyle] = useState(style.taskStyle)
   const [buttonCompleted, setButtonCompleted] = useState(style.taskCompletedButton)
   useEffect(() => {
      console.log(iscompleted)
      if (iscompleted) {
          setTaskStyle(style.taskStyleCompleted);
          setButtonCompleted(style.btnWhenCompleted)
      } else {
          setTaskStyle(style.taskStyle);
          setButtonCompleted(style.taskCompletedButton);
      }
  }, [iscompleted]); // A dependência do useEffect é 'iscompleted'


  useEffect(() => {
   console.log(details)
   if (details) {
       setTaskStyle(style.showInnerContent);
      //  exemplos if details button remove style = display
      // button complete style = display none
       
   } else {
       setTaskStyle(style.taskStyle);
   }
}, [details]); // A dependência do useEffect é 'iscompleted'

   
   return(
      <View style={taskStyle}>
         <ScrollView>
         <Text style={style.taskTextStyle}>{name}</Text>
         </ScrollView>
         
         <TouchableOpacity style={buttonCompleted} onPress={oncomplete}></TouchableOpacity>
         <TouchableOpacity style={style.buttonRemove} onPress={onremove}><Text style = {style.buttonRemoveText}>-</Text></TouchableOpacity>
         <TouchableOpacity onPress={ondetails} style={{height:40, width:40,backgroundColor:'#212121'}}><Text style={{fontSize:25,lineHeight:35,textAlign:'center',color:'red'}}> ! </Text></TouchableOpacity>
      </View>

   )
}
