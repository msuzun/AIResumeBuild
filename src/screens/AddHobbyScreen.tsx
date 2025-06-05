import { StyleSheet, Text, View, StatusBar, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native';
import Animated, { FadeIn } from 'react-native-reanimated';
import { useAppContext } from '../context/AppContext';



const AddHobbyScreen = () => {
  const [hobby, setHobby] = useState("");
  const navigation = useNavigation();
  const {addHobbies} = useAppContext();
  const handleSave = () => {
    if(hobby.trim()){
      addHobbies({hobby});
      navigation.goBack();
    }
    else{
      alert("Please fill all fields");
    }
  }
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} backgroundColor={"#007AFF"} />
      <Animated.View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={[{ paddingTop: 20 }, styles.headerTitle]}>Add Hobby/Interest</Text>
        <TouchableOpacity onPress={handleSave}>
          <Ionicons style={{ paddingTop: 20 }} name="checkmark" size={24} color="#fff" />
        </TouchableOpacity>
      </Animated.View>
      <Animated.View style={styles.formContainer} entering={FadeIn.duration(500).delay(200)}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Hobby/Interest *</Text>
          <TextInput style={styles.input} value={hobby} onChangeText={setHobby} placeholder="e.g, Enter Hobby/Interest" placeholderTextColor={"#999"} />
        </View>
        
      </Animated.View>
    </View>
  )
}

export default AddHobbyScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 20,
    paddingTop: StatusBar.currentHeight || 40,
    backgroundColor: '#007AFF',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  },
  formContainer:{
    flex:1,
    padding:20,
  },
  inputGroup:{
    marginBottom:20,
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