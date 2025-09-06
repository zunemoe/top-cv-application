import { useEffect, useState } from "react"
import { useScrollToForm } from '../../../hooks/useScrollToForm.js'
import EducationForm from "./EducationForm.jsx"
import EducationCard from "./EducationCard.jsx"
import Icon from '@mdi/react'
import { mdiPlus } from '@mdi/js'

function Education({ cvDataHook }) {
    const { cvData, addEducation, updateEducation, deleteEducation } = cvDataHook;
    const [educations, setEducations] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const editingRef = useScrollToForm(editingId);

    useEffect(() => {
        setEducations(cvData.educations || []);
    }, [cvData.educations]);

    const addEducationItem = () => {
        const newEducation = {
            id: Date.now(),
            schoolName: '',
            degree: '',
            fieldOfStudy: '',
            startDate: '',
            endDate: '',
            isEditing: true
        }        
        setEducations(prev => [newEducation, ...prev])
        setEditingId(newEducation.id)
    };

    const handleInputChange = (id, key, value) => {
        setEducations((prev) =>
            prev.map((edu) => (edu.id === id ? { ...edu, [key]: value } : edu))
        );
    };

    const saveEducation = (id) => {
        const education = educations.find((edu) => edu.id === id);
        const { isEditing, ...educationData } = education;

        const existingEducation = cvData.educations.find((edu) => edu.id === id);
        if (existingEducation) {
            updateEducation(id, educationData);
        } else {
            addEducation(educationData);
        }

        setEducations((prev) =>
            prev.map((edu) => (edu.id === id ? { ...edu, isEditing: false } : edu))
        );
        setEditingId(null);
    };

    const editEducationItem = (id) => {
        setEducations((prev) =>
            prev.map((edu) => (edu.id === id ? { ...edu, isEditing: true } : edu))
        );
        setEditingId(id);
    };

    const cancelEdit = (id) => {
        const education = educations.find((edu) => edu.id === id);

        if (!education.schoolName && !education.degree) 
            setEducations(prev => prev.filter(edu => edu.id !== id));
        else {
            const savedEducation = cvData.educations.find((edu) => edu.id === id);
            if (savedEducation) {
                setEducations((prev) =>
                    prev.map((edu) =>
                        edu.id === id ? { ...savedEducation, isEditing: false } : edu
                    )
                );
            } else {
                setEducations((prev) => prev.filter((edu) => edu.id !== id));
            }            
        }
        setEditingId(null);
    };

    const deleteEducationItem = (id) => {
        deleteEducation(id);
        setEducations((prev) => prev.filter((edu) => edu.id !== id));
        setEditingId(null);
    };

    return (
        <section className="section education">
            <div 
            className="section-header"
            ref={editingId !== null ? editingRef : null}
            >
                <h2>Education</h2>
                <Icon 
                path={mdiPlus} 
                size={1} 
                title="Add Education"
                className={`btn add-education ${editingId !== null ? 'disable' : ''}`}
                onClick={addEducationItem}
                />
            </div>
            <div className="education-container">         
                {educations.map(edu => (
                    <div 
                    key={edu.id} 
                    className={`education-item ${edu.isEditing ? 'form' : 'card'}`}                  
                    >
                        {edu.isEditing ? (
                            <EducationForm
                            education={edu}
                            onInputChange={handleInputChange}
                            onSave={saveEducation}
                            onCancel={cancelEdit}
                            onDelete={deleteEducationItem}
                            />
                        ) : (
                            <EducationCard 
                            education={edu}
                            onEdit={editEducationItem}
                            />
                        )}
                    </div>  
                ))}             
            </div>
        </section>
    )
};

export default Education;