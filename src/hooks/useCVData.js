import { useState } from 'react'

function useCVData() {
    const [cvData, setCvData] = useState({
        personalInfo: {
            fullName: '',
            email: '',
            mobile: '',
            address: '',
            linkedIn: '',
        },
        experiences: [],
        educations: [],
        skills: [],
        config: {
            fontFamily: 'inter',
            fontSize: 'm',
            colorTheme: 'blue'
        }
    });

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
        updateColorTheme
    };
};

export default useCVData;