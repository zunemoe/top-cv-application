import Icon from '@mdi/react'
import { mdiDelete } from '@mdi/js'

function SkillForm({
    skill,
    onInputChange,
    onSave,
    onCancel,
    onDelete,
}) {
    return (
        <div className="form skill">
            <div className="form-row">
                <label htmlFor={`skillName-${skill.id}`}>Skill Name</label>
                <input
                    type="text"
                    id={`skillName-${skill.id}`}
                    value={skill.name}
                    onChange={(e) =>
                        onInputChange(skill.id, "name", e.target.value)
                    }
                    placeholder="Skill Name"
                />
            </div>

            <div className="form-actions">
                <Icon 
                path={mdiDelete} 
                size={1}
                className="btn delete" 
                onClick={() => onDelete(skill.id)}
                />                
                <button
                    type="button"
                    className="btn cancel"
                    onClick={() => onCancel(skill.id)}
                >
                    Cancel
                </button>  
                <button
                    type="button"
                    className="btn save"
                    onClick={() => onSave(skill.id)}
                >
                    Save
                </button>
            </div>
        </div>
    )
}

export default SkillForm;