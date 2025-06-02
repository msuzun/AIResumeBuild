import { StyleSheet, Text, View,StatusBar,TouchableOpacity,TextInput } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Ionicons from "@expo/vector-icons/Ionicons";
import Animated, { FadeIn } from 'react-native-reanimated';

const PersonalDetailsScreen = () => {
    const navigation = useNavigation();
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [address,setAddress] = useState('');
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} backgroundColor={"#007AFF"} />
      <Animated.View style={styles.header} entering={FadeIn.duration(700)}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Personel Details</Text>
        <View style={{width:24}}>

        </View>
      </Animated.View>
      <Animated.View style={styles.formContainer} entering={FadeIn.duration(700).delay(400)}>
        <View style={styles.inputGroup}>
            <Text style={styles.label}>Name</Text>
            <TextInput
            style={styles.input}
            placeholder='Enter your name'
            placeholderTextColor="#999"
            value={name}
            onChangeText={setName}
            />
        </View>
        <View style={styles.inputGroup}>
            <Text style={styles.label}>Email</Text>
            <TextInput
            style={styles.input}
            placeholder='Enter your email'
            placeholderTextColor="#999"
            keyboardType='email-address'
            value={email}
            onChangeText={setEmail}
            />
        </View>
        <View style={styles.inputGroup}>
            <Text style={styles.label}>Phone</Text>
            <TextInput
            style={styles.input}
            placeholder='Enter your phone number'
            placeholderTextColor="#999"
            keyboardType='phone-pad'
            value={phone}
            onChangeText={setPhone}
            />
        </View>
        <View style={styles.inputGroup}>
            <Text style={styles.label}>Address</Text>
            <TextInput
            style={[styles.input,styles.multipleInput]}
            placeholder='Enter your address'
            placeholderTextColor="#999"
            value={address}
            onChangeText={setAddress}
            multiline={true}
            numberOfLines={3}
            />
        </View>
        <TouchableOpacity style={styles.saveButton}>
            <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  )
}

export default PersonalDetailsScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#f5f5f5",
    },
    header: {
        flexDirection:"row",
        paddingVertical:15,
        paddingHorizontal:20,
        alignItems: "center",
        paddingTop: StatusBar.currentHeight || 40,
        backgroundColor: "#007AFF",
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        elevation: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        marginBottom: 5,
      },
      headerTitle:{
        fontSize:20,
        fontWeight:"bold",
        color:"#fff",
        marginLeft:10,
      },
      formContainer:{
        flex:1,
        padding:10,
        marginTop:10,
      },
      inputGroup:{
        marginBottom:20 
      },
      label:{
        fontSize:16,
        fontWeight:"600",
        color:"#333",
        marginBottom:10,
      },
      input:{
        backgroundColor:"#fff",
        color:"#333",
        fontSize:16,
        padding:10,
        borderRadius:10,
        borderWidth:1,
        borderColor:"#ccc",
        elevation:2,
        shadowColor:"#000",
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.1,
        shadowRadius:3.84,
      },
      multipleInput:{
        height:100,
        textAlignVertical:"top",
      },
      saveButton:{
        backgroundColor:"#007AFF",
        padding:10,
        borderRadius:10,
        alignItems:"center",
        justifyContent:"center",
      },
      saveButtonText:{
        color:"#fff",
        fontSize:16,
        fontWeight:"bold",
      }
})