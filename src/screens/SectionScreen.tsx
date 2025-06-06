import { StyleSheet, Text, TouchableOpacity, View, StatusBar, FlatList, Modal, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { useAppContext } from '../context/AppContext';
import { FadeIn } from 'react-native-reanimated';
import Animated from 'react-native-reanimated';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/types';
import { getSkills, Skill, deleteSkill } from '../services/skillService';
import { getQualifications, Qualification, deleteQualification } from '../services/qualificationService';

type SectionScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;
type SectionScreenProps = {
    sectionName: string;
    section: string;
    iconName: keyof typeof Ionicons.glyphMap;
}
const SectionScreen: React.FC<SectionScreenProps> = ({ sectionName, section, iconName }) => {
    const navigation = useNavigation<SectionScreenNavigationProp>();
    const [skills, setSkills] = useState<Skill[]>([]);
    const [qualifications, setQualifications] = useState<Qualification[]>([]);
    const isFocused = useIsFocused();
    const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedQualification, setSelectedQualification] = useState<Qualification | null>(null);
    const [qualificationModalVisible, setQualificationModalVisible] = useState(false);
    useEffect(() => {
        
        if (section === "skills") {
            getSkills().then(setSkills);
        }
        else if (section === "qualifications") {
            getQualifications().then(setQualifications);
        }
    }, [section, isFocused]);

    const handleDeleteQualification = async () => {
        if (selectedQualification) {
            await deleteQualification(selectedQualification._id!);
            setQualifications(qualifications.filter(q => q._id !== selectedQualification._id));
            setQualificationModalVisible(false);
            setSelectedQualification(null);
        }
    };
    const renderItem = ({ item }: { item: any }) => {
    
        if (section === "experience") {
            return (
                <View style={styles.itemContainer}>
                    <Text style={styles.itemTitle}>{item?.jobTitle}</Text>
                    <Text style={styles.itemSubtitle}>{item?.companyName} • {item?.location}</Text>
                    <Text style={styles.itemDetail}>{item?.duration}</Text>
                    <Text style={styles.itemDetail}>{item?.description}</Text>
                </View>
            )
        }
        else if (section === "hobbies/interests") {
            return (
                <View style={styles.itemContainer}>
                    <Text style={styles.itemTitle}>{item?.hobby}</Text>
                </View>
            )
        }
        else if (section === "skills") {
            return (
                <View style={styles.skillCard}>
                    <View style={styles.skillLeft}>
                        <View style={styles.skillIconCircle}>
                            <Ionicons name="key-outline" size={22} color="#007AFF" />
                        </View>
                        <Text style={styles.skillName}>{item?.skillName}</Text>
                        <View style={styles.proficiencyBadge}>
                            <Text style={styles.proficiencyText}>{item?.proficiency}</Text>
                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={() => { setSelectedSkill(item); setModalVisible(true); }}
                        style={styles.deleteIconContainer}
                    >
                        <Ionicons name="trash-outline" size={20} color="#FF3B30" />
                    </TouchableOpacity>
                </View>
            )
        }
        else if (section === "projects") {
            return (
                <View style={styles.itemContainer}>
                    <Text style={styles.itemTitle}>{item?.projectName}</Text>
                    <Text style={styles.itemSubtitle}>Role :{item?.role}</Text>
                    <Text style={styles.itemDetail}>Duration :{item?.duration}</Text>
                    <Text style={styles.itemDetail}>{item?.description}</Text>
                </View>
            )
        }
        else if (section === "qualifications") {
            return (
                <View style={styles.itemContainer}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View>
                           
                            <Text style={styles.itemTitle}>{item.degree}</Text>
                            <Text style={styles.itemSubtitle}>{item.institution}</Text>
                            <Text style={styles.itemDetail}>{item.duration}</Text>
                            {item.description && <Text style={styles.itemDetail}>{item.description}</Text>}
                        </View>
                        <TouchableOpacity
                            onPress={() => { setSelectedQualification(item); setQualificationModalVisible(true); }}
                            style={styles.deleteIconContainer}
                        >
                            <Ionicons name="trash-outline" size={22} color="#FF3B30" />
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }
        else if (section === "languages") {
            return (
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
                return skills;
            case "projects":
                return state.projects;
            case "qualifications":
                return qualifications;
            case "languages":
                return state.languages;
            default:
                return [];
        }
    }
    const data = getSectionData(section);
    const handleAddPress = () => {
        const sectionRouteMap: { [key: string]: string } = {
            projects: "AddProject",
            qualifications: "AddQualification",
            skills: "AddSkill",
            "hobbies/interests": "AddHobby",
            languages: "AddLanguage",
            organisations: "AddOrganization",
            certificates: "AddCertificate",
            experience: "AddExperience",
            awards: "AddAward"

        }
        const routeName = sectionRouteMap[section];
        if (routeName) {
            navigation.navigate(routeName as any, { section } as any);
        }
        else {
            console.warn("No route name found for section:", section);
        }
    }
    const handleDelete = async () => {
        if (selectedSkill) {
            await deleteSkill(selectedSkill._id);
            setSkills(skills.filter(s => s._id !== selectedSkill._id));
            setModalVisible(false);
            setSelectedSkill(null);
        }
    };
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
                    <TouchableOpacity style={styles.addButtonFloating} onPress={handleAddPress}>
                        <Ionicons name="add" size={24} color="#fff" />
                    </TouchableOpacity>
                </View>
            )}
            <Modal
                visible={modalVisible}
                transparent
                animationType="fade"
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Delete Skill</Text>
                        <Text style={{ marginBottom: 20 }}>Are you sure you want to delete this skill?</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                            <Pressable style={styles.modalButton} onPress={() => setModalVisible(false)}>
                                <Text style={{ color: '#007AFF', fontWeight: 'bold' }}>Cancel</Text>
                            </Pressable>
                            <Pressable style={[styles.modalButton, { marginLeft: 10 }]} onPress={handleDelete}>
                                <Text style={{ color: '#FF3B30', fontWeight: 'bold' }}>Delete</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
            <Modal
                visible={qualificationModalVisible}
                transparent
                animationType="fade"
                onRequestClose={() => setQualificationModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Delete Qualification</Text>
                        <Text style={{ marginBottom: 20 }}>Are you sure you want to delete this qualification?</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                            <Pressable style={styles.modalButton} onPress={() => setQualificationModalVisible(false)}>
                                <Text style={{ color: '#007AFF', fontWeight: 'bold' }}>Cancel</Text>
                            </Pressable>
                            <Pressable style={[styles.modalButton, { marginLeft: 10 }]} onPress={handleDeleteQualification}>
                                <Text style={{ color: '#FF3B30', fontWeight: 'bold' }}>Delete</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
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
    listContainer: {
        flex: 1,
        padding: 20
    },
    listContent: {
        paddingBottom: 100
    },
    itemContainer: {
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 10,
        marginBottom: 10,
        elevation: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3.84
    },

    addButtonFloating: {
        position: "absolute",
        bottom: 20,
        right: 20,
        backgroundColor: "#007AFF",
        padding: 10,
        borderRadius: 30,
        elevation: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3.84
    },
    itemTitle: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 5
    },
    itemSubtitle: {
        fontSize: 14,
        color: "#666",
        marginBottom: 5
    },
    itemDetail: {
        fontSize: 12,
    },
    skillCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 16,
        paddingVertical: 14,
        paddingHorizontal: 18,
        marginBottom: 14,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.07,
        shadowRadius: 6,
        elevation: 2,
        justifyContent: 'space-between',
    },
    skillLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    skillIconCircle: {
        backgroundColor: '#E3F0FF',
        borderRadius: 20,
        width: 36,
        height: 36,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12,
    },
    skillName: {
        fontSize: 17,
        fontWeight: '600',
        color: '#222',
        marginRight: 10,
    },
    proficiencyBadge: {
        backgroundColor: '#E6F7FF',
        borderRadius: 8,
        paddingVertical: 4,
        paddingHorizontal: 10,
        marginLeft: 4,
    },
    proficiencyText: {
        color: '#007AFF',
        fontWeight: '600',
        fontSize: 14,
    },
    deleteIconContainer: {
        marginLeft: 10,
        padding: 6,
        borderRadius: 8,
        backgroundColor: '#FFF0F0',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.3)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 24,
        width: 300,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 5,
    },
    modalButton: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 8,
    },
})