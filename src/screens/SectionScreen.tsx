import { StyleSheet, Text, TouchableOpacity, View, StatusBar, FlatList } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useAppContext } from '../context/AppContext';
import { FadeIn } from 'react-native-reanimated';
import Animated from 'react-native-reanimated';

type SectionScreenProps = {
    sectionName: string;
    section: string;
    iconName: keyof typeof Ionicons.glyphMap;
}
const SectionScreen: React.FC<SectionScreenProps> = ({ sectionName, section, iconName }) => {
    const navigation = useNavigation();
    const renderItem = ({item}:{item:any})=>{
        if(section === "experience"){
            return(
                <View style={styles.itemContainer}>
                    <Text style={styles.itemTitle}>{item?.jobTitle}</Text>  
                    <Text style={styles.itemSubtitle}>{item?.companyName} + {item?.location}</Text>
                    <Text style={styles.itemDetail}>{item?.duration}</Text>
                    <Text style={styles.itemDescription}>{item?.description}</Text>
                </View>
            )
        }
        else if(section === "hobbies/interests"){
            return(
                <View style={styles.itemContainer}>
                    <Text style={styles.itemTitle}>{item?.bobby}</Text>
                </View>
            )
        }
        else if(section === "skills"){
            return(
                <View style={styles.itemContainer}>
                    <Text style={styles.itemTitle}>{item?.skill}</Text>
                    <Text style={styles.itemDetail}>Proficiency: {item?.proficiency}</Text>
                </View>
            )
        }
        else if(section === "projects"){
            return(
                <View style={styles.itemContainer}>
                    <Text style={styles.itemTitle}>{item?.projectName}</Text>
                    <Text style={styles.itemSubtitle}>Role :{item?.role}</Text>
                    <Text style={styles.itemDetail}>Duration :{item?.duration}</Text>
                    <Text style={styles.itemDetail}>{item?.description}</Text>
                </View>
            )
        }
        else if(section === "qualifications"){
            return(
                <View style={styles.itemContainer}>
                    <Text style={styles.itemTitle}>{item.degree}</Text>
                    <Text style={styles.itemSubtitle}>{item.institution}</Text>
                    <Text style={styles.itemDetail}>{item.duration}</Text>
                    {item.description && <Text style={styles.itemDetail}>{item.description}</Text>}
                </View>
            )
        }
        else if(section === "languages"){
            return(
                <View style={styles.itemContainer}>
                    <Text style={styles.itemTitle}>{item?.language}</Text>
                    <Text style={styles.itemDetail}>Proficiency: {item?.proficiency}</Text>
                </View>
            )
        }
        return null;
    }
    const { state } = useAppContext();
    const getSectionData = (section: string) => {
        switch (section) {
            case "experience":
                return state.experience;
            case "hobbies/interests":
                return state.hobbies;
            case "skills":
                return state.skills;
            case "projects":
                return state.projects;
            case "qualifications":
                return state.qualifications;
            case "languages":
                return state.languages;
            default:
                return [];
        }
    }
    const data = getSectionData(section);
    const handleAddPress = () => {
        const sectionRouteMap :{[key:string]:string} = {
            projects:"AddProject",
            qualifications:"AddQualification",
            skills:"AddSkill",
            "hobbies/interests":"AddHobby",
            languages:"AddLanguage",
            organisations:"AddOrganization",
            certificates:"AddCertificate",
            experience:"AddExperience",
            awards:"AddAward"
            
        }
        const routeName = sectionRouteMap[section];
        if(routeName){
            navigation.navigate(routeName as never,{section});
        }
        else{
            console.log("No route name found for section:", section);
        }
    }
    return (
        <View style={styles.container}>
            <StatusBar barStyle={"light-content"} backgroundColor={"#007AFF"} />
            <Animated.View style={styles.header} entering={FadeIn.duration(700)}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color="white" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>{sectionName}</Text>
                <View style={{ width: 24 }}>

                </View>
            </Animated.View>
            {data.length == 0 ? (
                <Animated.View style={styles.content} entering={FadeIn.duration(700).delay(400)}>
                    <Ionicons name={iconName} size={60} color="#fff" />
                    <Text style={styles.message}>No {section} added yet...</Text>
                    <Text style={styles.subMessage}>Click on the plus button to add {section}</Text>
                    <TouchableOpacity onPress={handleAddPress} style={styles.addButton}>
                        <Ionicons name="add" size={24} color="#fff" />
                    </TouchableOpacity>
                </Animated.View>
            ) : (
                <View style={styles.listContainer}>
                    <FlatList data={data} renderItem={renderItem} keyExtractor={(item, index) => `${section}-${index}`} contentContainerStyle={styles.listContainer} />
                    <TouchableOpacity  style={styles.addButtonFloating}>
                        <Ionicons name="add" size={24} color="#fff" />
                    </TouchableOpacity>
                </View>
            )}
        </View>
    )
}

export default SectionScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
    },
    header: {
        flexDirection: "row",
        paddingVertical: 18,
        paddingHorizontal: 20,
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
    headerTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff",
        textAlign: "center",
        flex: 1,
    },
    content: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        marginTop: 20
    },
    message: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 10
    },
    subMessage: {
        fontSize: 16,
        color: "#666",
        marginBottom: 20
    },
    addButton: {
        backgroundColor: "#007AFF",
        padding: 10,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        elevation: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        marginBottom: 10
    },
    listContainer:{
        flex:1,
        padding:20
    },
    listContent:{
        paddingBottom:100
    },
    itemContainer:{
        backgroundColor:"#fff",
        padding:20,
        borderRadius:10,
        marginBottom:10,
        elevation:10,
        shadowColor:"#000",
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.1,
        shadowRadius:3.84
    },
    
    addButtonFloating:{
        position:"absolute",
        bottom:20,
        right:20,
        backgroundColor:"#007AFF",
        padding:10,
        borderRadius:30,
        elevation:10,
        shadowColor:"#000",
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.1,
        shadowRadius:3.84
    }

})