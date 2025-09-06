import { useState } from 'react'
import { useScrollToForm } from '../../../hooks/useScrollToForm.js'
import SkillForm from './SkillForm.jsx'
import SkillCard from './SkillCard.jsx'
import Icon from '@mdi/react'
import { mdiPlus } from '@mdi/js'
import { useEffect } from 'react'

function Skill({ cvDataHook }) {
    const { cvData, addSkill, updateSkill, deleteSkill } = cvDataHook;
    const [skills, setSkills] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const editingRef = useScrollToForm(editingId);

    useEffect(() => {
        setSkills(cvData.skills || []);
    }, [cvData.skills]);

    const addSkillItem = () => {
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
      const skill = skills.find((skill) => skill.id === id);
      const { isEditing, ...skillData } = skill;

      const existingSkill = cvData.skills.find((skill) => skill.id === id);
      if (existingSkill) {
        updateSkill(id, skillData);
      } else {
        addSkill(skillData);
      }

      setSkills((prev) =>
        prev.map((skill) => (skill.id === id ? { ...skill, isEditing: false } : skill))
      );
      setEditingId(null);
    };

    const editSkillItem = (id) => {
      setSkills((prev) =>
        prev.map((skill) => (skill.id === id ? { ...skill, isEditing: true } : skill))
      );
      setEditingId(id);
    };

    const cancelEdit = (id) => {
      const skill = skills.find((skill) => skill.id === id);

        if (!skill.name.trim()) // Check for empty/whitespace-only names
          setSkills((prev) => prev.filter((skill) => skill.id !== id));
        else {
          const savedSkil = cvData.skills.find((skill) => skill.id === id);
          if (savedSkil) {
            setSkills((prev) =>
                prev.map((skill) =>
                    skill.id === id ? { ...skill, isEditing: false } : skill
                )
            );
          } else {
            setSkills((prev) => prev.filter((skill) => skill.id !== id));
          }            
        }
        setEditingId(null);
    };

    const deleteSkillItem = (id) => {
      deleteSkill(id);
      setSkills((prev) => prev.filter((skill) => skill.id !== id));
      if (editingId === id) setEditingId(null);
    };

    return(
        <section className="section Skill">
            <div 
            className="section-header"
            ref={editingId !== null ? editingRef : null}
            >
                <h2>Skills</h2>
                <Icon 
                path={mdiPlus} 
                size={1} 
                title="Add Skill"                
                className={`btn add-skill ${editingId !== null ? 'disable' : ''}`}
                onClick={addSkillItem}
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
                            onDelete={deleteSkillItem}
                            />
                        ) : (
                            <SkillCard 
                            skill={skill}
                            onEdit={editSkillItem}
                            />
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
};

export default Skill;