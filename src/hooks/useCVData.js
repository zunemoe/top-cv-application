import { useState } from 'react'

const dummyData = {
    personalInfo: {
        fullName: 'John Smith',
        email: 'john.smith@email.com',
        mobile: '+64 (12) 34-56789',
        address: 'Auckland, NZ',
        linkedIn: 'notrealjohnsmith'
    },
    experiences: [
        {
            id: 1,
            company: 'Tech Solutions Inc.',
            position: 'Senior Software Engineer',
            location: 'Auckland, NZ',
            startDate: '2021-03',
            endDate: 'Present',
            description: 'Led development of microservices architecture serving 1M+ users daily. Collaborated with cross-functional teams to deliver high-quality software solutions using React, Node.js, and AWS.'
        },
        {
            id: 2,
            company: 'StartupXYZ',
            position: 'Full Stack Developer',
            location: 'Singapore, SG',
            startDate: '2019-06',
            endDate: '2021-02',
            description: 'Built responsive web applications from scratch using modern JavaScript frameworks. Implemented RESTful APIs and database optimization strategies that improved performance by 40%.'
        }
    ],
    educations: [
        {
            id: 1,
            schoolName: 'University of Mars',
            degree: 'Bachelor',
            fieldOfStudy: 'Computer Science',
            startDate: '2015-09',
            endDate: '2019-05',           
        },
        {
            id: 2,
            schoolName: 'Bootcamp Academy',
            degree: 'Certificate',
            fieldOfStudy: 'Full Stack Web Development',
            startDate: '2019-06',
            endDate: '2019-12',
        }
    ],
    skills: [
        { id: 1, name: 'JavaScript' },
        { id: 2, name: 'React' },
        { id: 3, name: 'Node.js' },
        { id: 4, name: 'Python' },
        { id: 5, name: 'SQL' },
        { id: 7, name: 'Git' },

    ],
    config: {
        fontFamily: 'inter',
        fontSize: 'm',
        colorTheme: 'blue'
    }
};

const emptyData = {
    personalInfo: {
        fullName: '',
        email: '',
        mobile: '',
        address: '',
        linkedIn: ''
    },
    experiences: [],
    educations: [],
    skills: [],
    config: {
        fontFamily: 'inter',
        fontSize: 'm',
        colorTheme: 'blue'
    }
};

function useCVData() {
    const [cvData, setCvData] = useState(dummyData);

    const loadDummyData = () => {
        setCvData(dummyData);
    };

    const clearAllData = () => {
        setCvData(emptyData);
    };

    const updatePersonalInfo = (info) => {
        setCvData(prev => ({
            ...prev,
            personalInfo: { ...prev.personalInfo, ...info }
        }));
    }

    const addExperience = (experience) => {
        setCvData(prev => ({
            ...prev,
            experiences: [...prev.experiences, experience]
        }));
    }

    const addEducation = (education) => {
        setCvData(prev => ({
            ...prev,
            educations: [...prev.educations, education]
        }));
    }

    const addSkill = (skill) => {
        setCvData(prev => ({
            ...prev,
            skills: [...prev.skills, skill]
        }));
    }

    const updateExperience = (id, updatedExperience) => {
        setCvData(prev => ({
            ...prev,
            experiences: prev.experiences.map(exp =>
                exp.id === id ? { ...exp, ...updatedExperience } : exp
            )
        }));
    }

    const updateEducation = (id, updatedEducation) => {
        setCvData(prev => ({
            ...prev,
            educations: prev.educations.map(edu =>
                edu.id === id ? { ...edu, ...updatedEducation } : edu
            )
        }));
    }

    const updateSkill = (id, updatedSkill) => {
        setCvData(prev => ({
            ...prev,
            skills: prev.skills.map(skill =>
                skill.id === id ? { ...skill, ...updatedSkill } : skill
            )
        }));
    }

    const deleteExperience = (id) => {
        setCvData(prev => ({
            ...prev,
            experiences: prev.experiences.filter(exp => exp.id !== id)
        }));
    }

    const deleteEducation = (id) => {
        setCvData(prev => ({
            ...prev,
            educations: prev.educations.filter(edu => edu.id !== id)
        }));
    }

    const deleteSkill = (id) => {
        setCvData(prev => ({
            ...prev,
            skills: prev.skills.filter(skill => skill.id !== id)
        }));
    }

    const updateConfig = (configUpdates) => {
        setCvData(prev => ({
            ...prev,
            config: { ...prev.config, ...configUpdates }
        }));
    }

    const updateFontFamily = (fontFamily) => {
        updateConfig({ fontFamily });
    }

    const updateFontSize = (fontSize) => {
        updateConfig({ fontSize });
    }

    const updateColorTheme = (colorTheme) => {
        updateConfig({ colorTheme });
    }

    return {
        cvData,
        updatePersonalInfo,
        addExperience,
        addEducation,
        addSkill,
        updateExperience,
        updateEducation,
        updateSkill,
        deleteExperience,
        deleteEducation,
        deleteSkill,

        updateConfig,
        updateFontFamily,
        updateFontSize,
        updateColorTheme,

        loadDummyData,
        clearAllData
    };
};

export default useCVData;