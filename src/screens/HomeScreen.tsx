import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";
const HomeScreen = () => {
    const navigation = useNavigation();
    return (
        <LinearGradient colors={["#4B6CB7", "#182848"]} style={styles.container}>
            <View style={styles.circleTopLeft} />
            <View style={styles.circleBottomRight} />
            <View style={styles.contentContainer}>
                <View style={styles.headerContainer}>
                    <Text style={styles.title}>Build Your Perfect CV</Text>
                    <Text style={styles.subtitle}>Create a professional and modern CV in minutes</Text>
                </View>
                <View style={styles.iconContainer}>
                    <Ionicons name="document-text-outline" size={80} color="white" />
                </View>
                <TouchableOpacity style={styles.createButton} onPress={() => navigation.navigate("TemplateTab", { screen: "Template" })}>
                    <LinearGradient style={styles.buttonGradient} colors={["#007AFF", "#005BB5"]}>
                        <Ionicons name="add" size={28} color="white" style={styles.buttonIcon} />
                        <Text style={styles.buttonText}>Create With Template</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity style={styles.manualButton}>
                    <Text style={styles.manualButtonText}>Or Create Manually</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    )
}
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    circleTopLeft: {
        position: "absolute",
        top: -50,
        left: -50,
        width: 200,
        height: 200,
        borderRadius: 100,
        backgroundColor: "rgba(255,255,255,0.1)",
    },
    circleBottomRight: {
        position: "absolute",
        bottom: -30,
        right: -30,
        left: -30,
        width: 150,
        height: 150,
        borderRadius: 75,
        backgroundColor: "rgba(255,255,255,0.15)",
    },
    contentContainer: {
        alignItems: "center",
        paddingHorizontal: 20
    },
    headerContainer: {
        alignItems: "center",
        marginBottom: 30
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        marginBottom: 10,
        textShadowColor: "rgba(0,0,0,0.5)",
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 10,
    },
    subtitle: {
        fontSize: 16,
        color: "rgba(255,255,255,0.8)",
        lineHeight: 22,
        paddingHorizontal: 20,
        textAlign: "center"
    },
    iconContainer: {
        width: 140,
        height: 140,
        borderRadius: 70,
        backgroundColor: "rgba(255,255,255,0.1)",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    createButton: {
        borderRadius: 20,
        overflow: "hidden",
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,

    },
    buttonGradient: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 20,

    },
    buttonIcon: {
        marginRight: 10
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "600",
        color: "white",
        textTransform: "uppercase",

    },
    manualButton: {
        marginTop: 10,
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "rgba(255,255,255,0.2)",
        backgroundColor: "rgba(255,255,255,0.05)",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    manualButtonText: {
        fontSize: 16,
        fontWeight: "600",
        color: "rgba(255,255,255,0.8)",
        textTransform: "uppercase",
    }
});