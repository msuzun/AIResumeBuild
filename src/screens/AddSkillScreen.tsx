import { StyleSheet, Text, View,StatusBar,TouchableOpacity,TextInput } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { useAppContext } from '../context/AppContext';
import { useRoute } from '@react-navigation/native';
import Ionicons from "@expo/vector-icons/Ionicons";
import Animated, { FadeIn } from 'react-native-reanimated';
const AddSkillScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {addSkill} = useAppContext();

  const [skillName, setSkillName] = useState("");
  const [proficiency, setProficiency] = useState("");

  const handleSave = () => {
    if(skillName.trim() && proficiency.trim()){
      addSkill({skillName, proficiency});
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
        <Text style={[{ paddingTop: 20 }, styles.headerTitle]}>Add skills</Text>
        <TouchableOpacity onPress={handleSave}>
          <Ionicons style={{ paddingTop: 20 }} name="checkmark" size={24} color="#fff" />
        </TouchableOpacity>
      </Animated.View>
      <Animated.View style={styles.formContainer} entering={FadeIn.duration(500).delay(200)}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Skill Name</Text>
          <TextInput style={styles.input} value={skillName} onChangeText={setSkillName} placeholder="e.g, Enter Skill Name" placeholderTextColor={"#999"}/>
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Proficiency Level</Text>
          <TextInput style={styles.input} value={proficiency} onChangeText={setProficiency} placeholder="e.g, Enter Proficiency Level" placeholderTextColor={"#999"}/>
        </View>
      </Animated.View>
    </View>
  )
}

export default AddSkillScreen

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