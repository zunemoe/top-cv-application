import { useState } from 'react'
import { useScrollToForm } from '../../hooks/useScrollToForm.js'
import SkillForm from './SkillForm.jsx'
import SkillCard from './SkillCard.jsx'
import Icon from '@mdi/react'
import { mdiPlus } from '@mdi/js'

function Skill() {
    const [skills, setSkills] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const editingRef = useScrollToForm(editingId);

    const addSkill = () => {
        const newSkill = {
            id: Date.now(),
            name: '',
            isEditing: true
        }
        setSkills(prev => [newSkill, ...prev])
        setEditingId(newSkill.id)
    };

    const handleInputChange = (id, key, value) => {
      setSkills((prev) =>
        prev.map((skill) => (skill.id === id ? { ...skill, [key]: value } : skill))
      );
    };

    const saveSkill = (id) => {
      setSkills((prev) =>
        prev.map((skill) => (skill.id === id ? { ...skill, isEditing: false } : skill))
      );
      setEditingId(null);
    };

    const editSkill = (id) => {
      setSkills((prev) =>
        prev.map((skill) => (skill.id === id ? { ...skill, isEditing: true } : skill))
      );
      setEditingId(id);
    };

    const cancelEdit = (id) => {
      const skill = skills.find((skill) => skill.id === id);

        if (!skill.name) deleteSkill(id);
        else {
            setSkills((prev) =>
                prev.map((skill) =>
                    skill.id === id ? { ...skill, isEditing: false } : skill
                )
            );
            setEditingId(null);
        }
    };

    const deleteSkill = (id) => {
      setSkills((prev) => prev.filter((skill) => skill.id !== id));
      if (editingId === id) setEditingId(null);
    };

    return(
        <section className="section Skill">
            <div 
            className="section-header"
            ref={editingId !== null ? editingRef : null}
            >
                <h2>Skill</h2>
                <Icon 
                path={mdiPlus} 
                size={1} 
                title="Add Skill"                
                className={`btn add-skill ${editingId !== null ? 'disable' : ''}`}
                onClick={addSkill}
                />
            </div>
            <div className="skill-container">
                {skills.map(skill => (
                    <div 
                    key={skill.id} 
                    className={`skill-item ${skill.isEditing ? 'form' : 'card'}`}                    
                    >
                        {skill.isEditing ? (
                            <SkillForm
                            skill={skill}
                            onInputChange={handleInputChange}
                            onSave={saveSkill}
                            onCancel={cancelEdit}
                            onDelete={deleteSkill}
                            />
                        ) : (
                            <SkillCard 
                            skill={skill}
                            onEdit={editSkill}
                            />
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skill