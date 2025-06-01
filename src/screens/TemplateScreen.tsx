import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const TemplateScreen = () => {
    const navigation = useNavigation();
    const templates = [
        { id: "1", name: "Professional", color: "white", layout: "two-column" },
        { id: "2", name: "Modern", color: "#E5E7EB", layout: "single-column" },
        { id: "3", name: "Creative", color: "#FEE2E2", layout: "two-column" },
        { id: "4", name: "Classic", color: "#E0F2FE", layout: "single-column" },
        { id: "5", name: "Elegant", color: "#ECFDF5", layout: "two-column" },
        { id: "6", name: "Minimalist", color: "#FEF3C7", layout: "single-column" },
    ]
    const renderTemplate = ({ item }: { item: any }) => (
        <View style={[styles.templateContainer, { backgroundColor: item.color }]}>
            <View style={styles.template}>
                <View style={styles.header}>
                    <Image style={styles.avatar} source={{ uri: "https://pbs.twimg.com/profile_images/1906088503642820608/7fyYTD1i_400x400.jpg" }} />
                </View>
                <View style={styles.headerTextContainer}>
                    <Text style={styles.name}>Muhammed Şevki Uzun</Text>
                    <Text style={styles.title}>Software Engineer</Text>
                    <Text style={styles.description}> I’m currently learning Javascript,React,React Native, .NET CORE</Text>
                </View>
            </View>
            <View style={styles.columnsContainer}>
                <View style={styles.leftColumn}>
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Profile</Text>
                        <Text style={styles.description}>I have been working in the backend developer role for 4 years.</Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Experience</Text>
                        <Text style={styles.date}>2022 - Present</Text>
                        <Text style={styles.subtitle}>Junior Backend Developer</Text>
                       
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Education</Text>
                        <Text style={styles.date}>2016 - 2022</Text>
                        <Text style={styles.subtitle}>Computer Science</Text>
                        <Text style={styles.subtext}>Atatürk University,Erzurum</Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Certifications</Text>
                        <Text style={styles.subtitle}>Bilge Adam Akademi - Frontend Development</Text>
                        <Text style={styles.subtext}>Devops Bootcamp - LABA</Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Projects</Text>
                        <Text style={styles.date}>2022 - 2023</Text>
                        <Text style={styles.subtitle}>New Web Application for a Banking System</Text>
                        <Text style={styles.subtext}>Junior Backend Developer</Text>
                        <Text style={styles.description}>I took part in the new web application project that will work in the banking system.</Text>
                    </View>
                </View>
                <View style={styles.rightColumn}>
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Skills</Text>
                        <Text style={styles.skill}>Javascript</Text>
                        <Text style={styles.skill}>React</Text>
                        <Text style={styles.skill}>React Native</Text>
                        <Text style={styles.skill}>.NET CORE</Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Languages</Text>
                        <Text style={styles.skill}>English</Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Awards</Text>
                        <Text style={styles.subtitle}>Best Backend Developer</Text>
                        <Text style={styles.subtext}>Best Backend Developer</Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Hobbies</Text>
                        <Text style={styles.skill}>Photography</Text>
                        <Text style={styles.skill}>Sketching</Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>References</Text>
                        <Text style={styles.subtitle}>John Doe</Text>
                        <Text style={styles.subtext}>Director of Company</Text>
                        <Text style={styles.subtext}>john.doe@example.com</Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Contact</Text>
                        <Text style={styles.contactText}>john.doe@example.com</Text>
                        <Text style={styles.contactText}>+123 456 7890</Text>
                    </View>
                </View>
            </View>
        </View>
    )
    return (
        <FlatList data={templates} renderItem={renderTemplate} keyExtractor={item => item.id} contentContainerStyle={styles.list} />
    )
}

export default TemplateScreen

const styles = StyleSheet.create({
    list: {
        padding: 20
    },
    templateContainer: {
        borderRadius: 10,
        marginBottom: 20,
        overflow: "hidden",
    },
    template: {
        padding: 15,

    },
    header: {
        alignItems: "center",
        marginBottom: 20,
        paddingBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd"
    },
    headerTextContainer: {
        alignItems: "center",

    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 10,
        borderWidth: 2,
        borderColor: "#007AFF"
    },
    name: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#000",
        textAlign: "center"
    },
    title: {
        fontSize: 16,
        color: "#666",
        textAlign: "center",
        marginBottom: 5
    },
    about: {
        fontSize: 14,
        color: "#333",
        textAlign: "center",
        lineHeight: 20
    },
    columnsContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    leftColumn: {
        flex: 1,
        paddingRight: 15,
        minWidth:150
    },
    rightColumn: {
        flex: 1,
        paddingRight: 10,
        minWidth:150
    },
    section: {
        marginBottom: 20,

    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#000",
        marginBottom: 8,
        borderBottomWidth: 1,
        borderBottomColor: "#007AFF",
        paddingBottom: 2
    },
    description:{
        fontSize: 14,
        color: "#333",
        lineHeight: 20
    },
    date:{
        fontSize: 12,
        color: "#666",
        marginBottom:2,
    },
    subtitle:{
        fontSize: 14,
        fontWeight: "600",
        color: "#000",
        marginBottom: 5
    },
    subtext:{
        fontSize: 12,
        color: "#666",
        marginBottom:2,
    },
    contactText:{
        fontSize: 14,
        color: "#333",
        marginBottom:2,
    },
    skill:{
        fontSize: 14,
        color: "#333",
        marginBottom:4,
    }
})