import { StatusBar, StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Ionicons from "@expo/vector-icons/Ionicons";
import { getPersonalDetails, PersonalDetails } from '../services/personalDetailsService';
import { logout } from '../services/userService';

type RootStackParamList = {
  Login: undefined;
  PersonalDetailsScreen: undefined;
  Education: undefined;
  Experience: undefined;
  Skills: undefined;
  Projects: undefined;
  Certifications: undefined;
  Languages: undefined;
  Interests: undefined;
  References: undefined;
  SocialMedia: undefined;
  Notifications: undefined;
  Privacy: undefined;
  Security: undefined;
  Settings: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const ProfileScreen = ({ setIsAuthenticated }: { setIsAuthenticated: (auth: boolean) => void }) => {
  const navigation = useNavigation<NavigationProp>();
  const profileSections = [
    { id: '1', title: 'Personal Details', icon: 'person-outline', screen: 'PersonalDetails' },
    { id: '2', title: 'Objective', icon: 'flag-outline', screen: 'Objective' },
    { id: '3', title: 'Experience', icon: 'briefcase-outline', screen: 'Experience' },
    { id: '4', title: 'Qualifications', icon: 'school-outline', screen: 'Qualifications' },
    { id: '5', title: 'Organizations', icon: 'book-outline', screen: 'Organizations' },
    { id: '6', title: 'Projects', icon: 'code-working-outline', screen: 'Projects' },
    { id: '7', title: 'Certificates', icon: 'document-outline', screen: 'Certificates' },
    { id: '8', title: 'Awards/Scholarships', icon: 'trophy-outline', screen: 'AwardsScholarships' },
    { id: '9', title: 'Skills', icon: 'key-outline', screen: 'Skills' },
    { id: '10', title: 'Languages', icon: 'language-outline', screen: 'Languages' },
    { id: '11', title: 'Hobbies/Interests', icon: 'hourglass-outline', screen: 'HobbiesInterests' },
    { id: '12', title: 'References', icon: 'people-outline', screen: 'References' },
  ];
  const [personalDetails, setPersonalDetails] = useState<PersonalDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const isFocused = useIsFocused();
  useEffect(() => {
    const fetchPersonalDetails = async () => {
      try {
        setIsLoading(true);
        const details = await getPersonalDetails();
        setPersonalDetails(details);
      } catch (error) {
        console.error('Error fetching personal details:', error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchPersonalDetails();
  }, [isFocused]);
  const handleLogout = async () => {
    try {
      await logout();
      setIsAuthenticated(false);
    } catch (error) {
      console.error('Error logging out:', error);
    }
  }
  const renderSection = ({ item, index }: { item: (typeof profileSections)[0]; index: number; }) => {
    return (
      <View>
        <TouchableOpacity
          style={styles.section}
          onPress={() => navigation.navigate(item.screen as keyof RootStackParamList)}
        >
          <Ionicons name={item.icon as any} size={24} color="#007AFF" />
          <Text style={styles.sectionTitle}>{item?.title}</Text>
          <Ionicons name="chevron-forward" size={24} color="#ccc" />
        </TouchableOpacity>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} backgroundColor={"#fff"} />
      <View style={styles.header}>
        <Image source={{ uri: personalDetails?.avatar || "https://tweetdelete.net/resources/wp-content/uploads/2023/10/avatar-3814049_640.png" }} style={styles.avatar} />
        <View style={styles.headerTextContainer}>
          <Text style={styles.name}>{personalDetails?.name || "Name not found"}</Text>
          <Text style={styles.title}>{personalDetails?.title || "Title not found"}</Text>
        </View>
      </View>

      <FlatList data={profileSections} renderItem={renderSection} keyExtractor={item => item.id} contentContainerStyle={styles.list} />
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },
  header: {
    alignItems: "center",
    padding: 20,
    paddingTop: StatusBar.currentHeight || 40,
    backgroundColor: "white",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    marginBottom: 20,
  },
  headerTextContainer: {
    marginLeft: 10,
    alignItems: "center",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: "#007AFF",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 5,
  },
  title: {
    fontSize: 18,
    color: "#666",
    fontStyle: "italic",
  },
  list: {
    padding: 5,
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  sectionTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginLeft: 10,
  },
  tickIcon: {
    marginLeft: 10
  },
  logoutButton: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    marginBottom: 30,
  },
  logoutButtonText: {
    color: "#fff",
  }
})