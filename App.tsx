
import {Text, View,TouchableOpacity,TextInput,FlatList,StatusBar,Alert } from 'react-native';
import { style } from './styles';
import { useEffect, useState } from 'react';
import { Tarefa } from './src/components';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function App() {
  const saveData = async (key:string, value:object) => {
    try {
      const jsonString = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonString);
      console.log('Dados salvos com sucesso!');
    } catch (e) {
      console.error('Falha ao salvar os dados no AsyncStorage', e);
    }
  };
// 
  useEffect(() => {
    loadData();
  }, []);
  
  // 
  const loadData = async () => {
    try {
      const jsonString = await AsyncStorage.getItem('task');
      const retrievedObject = jsonString != null ? JSON.parse(jsonString) : [];
      setTasks(retrievedObject);
      console.log('Dados recuperados com sucesso:', retrievedObject);
    } catch (e) {
      console.error('Falha ao carregar os dados do AsyncStorage', e);
    }
  };

  const [title,setTitle] = useState('Tarefas')
  // item teste pra não dar error
  const [showDetails, setShowDetails] = useState(true);
  const [task, setTasks] = useState([{name:'isaac',id:'@@##teste', isCompleted:false,details:false}])
  const [unique,setunique] = useState ('')
 
  
  useEffect(() => {
    saveData('task', task);
    console.log(task)
  }, [task]);


  const handlePariticpantRemove = (id:string) => {
    setTasks(task.filter(task => task.id!= id ))
    
    
  }
  useEffect(() => {
    // Código que será executado apenas uma vez quando o componente for montado.
    setTasks(task.filter(item => item.id != '@@##teste'))
  
    return () => {
      // Código de limpeza, se necessário, que será executado quando o componente for desmontado.
      console.log("Componente será desmontado");
    };
  }, []); // Array de dependências vazio
  const handleTaskComplete = (id:string) => {
    setTasks(task.map(item => {
      if (item.id == id && item.isCompleted == false){
        return {...item,isCompleted:true}
      }
      else if(item.id != id && item.isCompleted == true){
        return {...item,isCompleted:true}
      }
      else if (item.id == id && item.isCompleted == true){
        return{...item,isCompleted:false}
      }
      else{
        return item
      }
    }))
  }
  const toggle = (value:any) => {
    return !value
  }
  const toggleDetails = (id:string) => {
    setTasks(task.map(item => {
      if (item.id == id ){
        return {...item,details:toggle(item.details)}
      }
      else{
        return item
      }
    }))
   
  };

  const handleTaskAdd = () => {
    if (( task &&  task.some(task => task.name === unique))){
      Alert.alert('não', 'não é possivel adicionar duas tarefas com o mesmo nome')
      return
    }
  
      else {
        const newTask = { id: Date.now().toString(), name: unique, isCompleted: false,showDetails:false };
        setTasks([...task, newTask]);
        setunique('');
    }
    
      
  
    
  }
  return (
    <View style={style.div}>
       <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      <Text style = {style.title}>{title}</Text>

      <View style = {{flexDirection:'row', gap: 48}}>
      <TextInput
        style={style.input}
        onChangeText={(texto) => setunique(texto)}
        value={unique}
      />
      <TouchableOpacity style = {style.buttonAdd} onPress={handleTaskAdd} > 
      <Text style = {style.textButtonAdd}>+</Text>
      </TouchableOpacity>
      </View>
     
     

     
     
      <FlatList
      data={task}
      keyExtractor={item => item.id}
      renderItem={({item})=> (
        <Tarefa
        name = {item.name}
        onremove = {() => handlePariticpantRemove(item.id)}
        oncomplete={() => handleTaskComplete(item.id)}
        ondetails = {()=> toggleDetails(item.id)}
        iscompleted = {item.isCompleted}
        details = {item.details}
        />
      )}
      />
      
    </View>
  );
}

