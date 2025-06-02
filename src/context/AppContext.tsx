import { createContext, useContext, useState } from "react";

type PersonalDetails = {
    name: string;
    email: string;
    phone: string;
    address: string;
    avatar?: string;
    title?: string;
}

type Objective = {
    text: string;
}

type Skill = {
    skillName: string;
    proficiency: string;

}
type Project = {
    projectName: string;
    description: string;
    role: string;
    duration: string;
}
type Experience = {
    jobTitle: string;
    companyName: string;
    location: string;
    duration: string;
    description: string;
    isCurrentlyWorking: string;
}
type Hobby = {
    hobby: string;
}

type Qualification = {
    degree: string;
    institution: string;
    duration: string;
    description?: string;
}

type Language = {
    language: string;
    proficiency: string;
}
type AppState = {
    personalDetails: PersonalDetails | null;
    objective: Objective | null;
    skills: Skill[];
    projects: Project[];
    experience: Experience[];
    hobbies: Hobby[];
    qualifications: Qualification[];
    languages: Language[];

}
type AppContextType = {
    state: AppState;
    updatePersonalDetails: (details: PersonalDetails) => void;
    updateObjective: (objective: Objective) => void;
    addSkill: (skill: Skill) => void;
    addProjects: (projects: Project) => void;
    addExperience: (experience: Experience) => void;
    addHobbies: (hobbies: Hobby) => void;
    addQualification: (qualification: Qualification) => void;
    addLanguage: (language: Language) => void;
}
const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [state, setState] = useState<AppState>({
        personalDetails: null,
        objective: null,
        skills: [],
        projects: [],
        experience: [],
        hobbies: [],
        qualifications: [],
        languages: [],
    });
    //save details:
    const updatePersonalDetails = (details: PersonalDetails) => {
        setState((prevState) => ({ ...prevState, personalDetails: details }));
    }
    //save objective:
    const updateObjective = (objective: Objective) => {
        setState((prevState) => ({ ...prevState, objective: objective }));
    }
    //save skills:
    const addSkill = (skill: Skill) => {
        setState((prevState) => ({ ...prevState, skills: [...prevState.skills, skill] }));
    }
    //save projects:
    const addProjects = (projects: Project) => {
        setState((prevState) => ({ ...prevState, projects: [...prevState.projects, projects] }));
    }
    //save experience:
    const addExperience = (experience: Experience) => {
        setState((prevState) => ({ ...prevState, experience: [...prevState.experience, experience] }));
    }
    //save hobbies:
    const addHobbies = (hobbies: Hobby) => {
        setState((prevState) => ({ ...prevState, hobbies: [...prevState.hobbies, hobbies] }));
    }
    //save qualifications:
    const addQualification = (qualification: Qualification) => {
        setState((prevState) => ({ ...prevState, qualifications: [...prevState.qualifications, qualification] }));
    }
    //save languages:
    const addLanguage = (language: Language) => {
        setState((prevState) => ({ ...prevState, languages: [...prevState.languages, language] }));
    }

    const contextValue: AppContextType = {
        state,
        updatePersonalDetails,
        updateObjective,
        addSkill,
        addProjects,
        addExperience,
        addHobbies,
        addQualification,
        addLanguage,

    }
    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useAppContext must be used within a AppProvider");
    }
    return context;
}
