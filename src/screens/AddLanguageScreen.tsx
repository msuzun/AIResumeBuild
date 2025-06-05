import { StatusBar, StyleSheet, Text, TouchableOpacity, View,TextInput } from 'react-native'
import React, { useContext, useState } from 'react'
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native';
import { useAppContext } from '../context/AppContext';
const AddLanguageScreen = () => {
  const navigation = useNavigation();
  const [language, setLanguage] = useState("");
  const [proficiency, setProficiency] = useState("");
  const {addLanguage} = useAppContext();
  const handleSave = () => {
   if(!language || !proficiency){
    alert("Please fill all fields");
    return;
   }
  const languageData = {
    language,
    proficiency
  }
  addLanguage(languageData);
  navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} backgroundColor={"#007AFF"} />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={[{paddingTop:20},styles.headerTitle]}>Add Language</Text>
        <TouchableOpacity onPress={handleSave}>
          <Ionicons style={{paddingTop:20}} name="checkmark" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={styles.form}>
        <Text style={styles.label}>Language *</Text>
        <TextInput style={styles.input} value={language} onChangeText={setLanguage} placeholder="e.g, Enter Language" placeholderTextColor={"#999"}/>
      </View>
      <View style={styles.form}>
        <Text style={styles.label}>Proficiency *</Text>
        <TextInput style={styles.input}  value={proficiency} onChangeText={setProficiency} placeholder="e.g, Enter Proficiency" placeholderTextColor={"#999"}/>
      </View>
    </View>
  )
}

export default AddLanguageScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#f5f5f5',
  },
  header:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingVertical:15,
    paddingHorizontal:20,
    paddingTop:StatusBar.currentHeight || 40,
    backgroundColor:'#007AFF',
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20
  },
  headerTitle:{
    fontSize:18,
    fontWeight:'bold',
    color:'#fff'
  },
  form:{
    padding:20,
  },
  label:{
    fontSize:16,
    fontWeight:'600',
    color:'#333',
    marginBottom:5
  },
  input:{
    backgroundColor:'#fff',
    borderRadius:12,
    padding:15,
    fontSize:16,
    fontWeight:'500',
    color:'#333',
    marginBottom:15,
    borderWidth:1,
    borderColor:'#e0e0e0',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  }
})