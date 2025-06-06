import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "../screens/ProfileScreen";
import PersonalDetailsScreen from "../screens/PersonalDetailsScreen";
import ObjectiveScreen from "../screens/ObjectiveScreen";
import ExperienceScreen from "../screens/ExperienceScreen";
import QualificationScreen from "../screens/QualificationScreen";
import OrganisationsScreen from "../screens/OrganisationsScreen";
import ProjectsScreen from "../screens/ProjectsScreen";
import CertificatesScreen from "../screens/CertificatesScreen";
import AwardsScholarshipsScreen from "../screens/AwardsScholarshipsScreen";
import SkillsScreen from "../screens/SkillsScreen";
import LanguagesScreen from "../screens/LanguagesScreen";
import HobbiesInterestsScreen from "../screens/HobbiesInterestsScreen";
import AddExperienceScreen from "../screens/AddExperienceScreen";
import AddHobbyScreen from "../screens/AddHobbyScreen";
import AddOrganizationScreen from "../screens/AddOrganizationScreen";
import AddCertificateScreen from "../screens/AddCertificateScreen";
import AddLanguageScreen from "../screens/AddLanguageScreen";
import AddSkillScreen from "../screens/AddSkillScreen";
import AddQualificationScreen from "../screens/AddQualificationScreen";
import AddAwardScholarship from "../screens/AddAwardScholarship";
import AddProjectScreen from "../screens/AddProjectScreen";
const Stack = createNativeStackNavigator();

const ProfileStackNavigator = ({ setIsAuthenticated }: { setIsAuthenticated: (auth: boolean) => void }) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Profile" options={{ headerShown: false }}>
                {() => <ProfileScreen setIsAuthenticated={setIsAuthenticated} />}
            </Stack.Screen>
            <Stack.Screen name="PersonalDetails" component={PersonalDetailsScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Objective" component={ObjectiveScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Experience" component={ExperienceScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Qualifications" component={QualificationScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Organizations" component={OrganisationsScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Projects" component={ProjectsScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Certificates" component={CertificatesScreen} options={{ headerShown: false }} />
            <Stack.Screen name="AwardsScholarships" component={AwardsScholarshipsScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Skills" component={SkillsScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Languages" component={LanguagesScreen} options={{ headerShown: false }} />
            <Stack.Screen name="HobbiesInterests" component={HobbiesInterestsScreen} options={{ headerShown: false }} />
            <Stack.Screen name="AddExperience" component={AddExperienceScreen} options={{ headerShown: false }} />
            <Stack.Screen name="AddHobby" component={AddHobbyScreen} options={{ headerShown: false }} />
            <Stack.Screen name="AddOrganization" component={AddOrganizationScreen} options={{ headerShown: false }} />
            <Stack.Screen name="AddCertificate" component={AddCertificateScreen} options={{ headerShown: false }} />
            <Stack.Screen name="AddLanguage" component={AddLanguageScreen} options={{ headerShown: false }} />
            <Stack.Screen name="AddSkill" component={AddSkillScreen} options={{ headerShown: false }} />
            <Stack.Screen name="AddQualification" component={AddQualificationScreen} options={{ headerShown: false }} />
            <Stack.Screen name="AddAward" component={AddAwardScholarship} options={{ headerShown: false }} />
            <Stack.Screen name="AddProject" component={AddProjectScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default ProfileStackNavigator;