import { useState } from "react"
import EducationForm from "./EducationForm.jsx"
import EducationCard from "./EducationCard.jsx"
import Icon from '@mdi/react'
import { mdiPlus } from '@mdi/js'

function Education() {
    const [educations, setEducations] = useState([]);
    const [editingId, setEditingId] = useState(null);

    const addEducation = () => {
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
      setEducations((prev) =>
        prev.map((edu) => (edu.id === id ? { ...edu, isEditing: false } : edu))
      );
      setEditingId(null);
    };

    const editEducation = (id) => {
      setEducations((prev) =>
        prev.map((edu) => (edu.id === id ? { ...edu, isEditing: true } : edu))
      );
      setEditingId(id);
    };

    const cancelEdit = (id) => {
      const education = educations.find((edu) => edu.id === id);
        if (!education.schoolName && !education.degree) deleteEducation(id);
        else {
            setEducations((prev) =>
                prev.map((edu) =>
                    edu.id === id ? { ...edu, isEditing: false } : edu
                )
            );
            setEditingId(null);
        }
    };

    const deleteEducation = (id) => {
      setEducations((prev) => prev.filter((edu) => edu.id !== id));
      if (editingId === id) setEditingId(null);
    };

    return (
        <section className="section Education">
            <div className="section-header">
                <h2>Education</h2>
                <Icon 
                path={mdiPlus} 
                size={1} 
                title="Add Education"
                ariaLabel="Add Education"
                className={`btn add-education ${editingId !== null ? 'disable' : ''}`}
                onClick={addEducation}
                />
            </div>
            <div className="education-container">         
                {educations.map(edu => (
                    <div key={edu.id} className={`education-item ${edu.isEditing ? 'form' : 'card'}`}>
                        {edu.isEditing ? (
                            <EducationForm
                            education={edu}
                            onInputChange={handleInputChange}
                            onSave={saveEducation}
                            onCancel={cancelEdit}
                            onDelete={deleteEducation}
                            />
                        ) : (
                            <EducationCard 
                            education={edu}
                            onEdit={editEducation}
                            />
                        )}
                    </div>  
                ))}             
            </div>
        </section>
    )
};

export default Education