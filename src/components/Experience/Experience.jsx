import { useState } from 'react'
import ExperienceForm from './ExperienceForm.jsx'
import ExperienceCard from './ExperienceCard.jsx'
import Icon from '@mdi/react'
import { mdiPlus } from '@mdi/js'

function Experience() {
    const [experiences, setExperiences] = useState([]);
    const [editingId, setEditingId] = useState(null);

    const addExperience = () => {
        const newExperience = {
            id: Date.now(),
            companyName: '',
            position: '',
            location: '',
            startDate: '',
            endDate: '',
            description: '',
            isEditing: true
        }
        setExperiences(prev => [newExperience, ...prev])
        setEditingId(newExperience.id)
    };

    const handleInputChange = (id, key, value) => {
      setExperiences((prev) =>
        prev.map((exp) => (exp.id === id ? { ...exp, [key]: value } : exp))
      );
    };

    const saveExperience = (id) => {
      setExperiences((prev) =>
        prev.map((exp) => (exp.id === id ? { ...exp, isEditing: false } : exp))
      );
      setEditingId(null);
    };

    const editExperience = (id) => {
      setExperiences((prev) =>
        prev.map((exp) => (exp.id === id ? { ...exp, isEditing: true } : exp))
      );
      setEditingId(id);
    };

    const cancelEdit = (id) => {
      const experience = experiences.find((exp) => exp.id === id);

      if (!experience.companyName && !experience.position) deleteExperience(id);
      else {
        setExperiences((prev) =>
          prev.map((exp) =>
            exp.id === id ? { ...exp, isEditing: false } : exp
          )
        );
        setEditingId(null);
      }
    };

    const deleteExperience = (id) => {
      setExperiences((prev) => prev.filter((exp) => exp.id !== id));
      setEditingId(null);
    };

    return (
      <section className="section Experience">            
        <div className="section-header">
          <h2>Experience</h2>
          <Icon 
          path={mdiPlus} 
          size={1} 
          title="Add Experience"
          ariaLabel="Add Experience"
          className={`btn add-experience ${editingId !== null ? 'disable' : ''}`}
          onClick={addExperience}
          />
        </div>   
        <div className='experience-container'>
          {experiences.map(exp => (
            <div key={exp.id} className='experience-item'>
              {exp.isEditing ? (
                <ExperienceForm 
                  experience={exp} 
                  onInputChange={handleInputChange}
                  onSave={saveExperience}
                  onCancel={cancelEdit}
                  onDelete={deleteExperience}
                />
              ) : (
                <ExperienceCard experience={exp} onEdit={editExperience} />
              )}
            </div>
          ))}

          
        </div>
      </section>
    )
}

export default Experience