import Icon from '@mdi/react'
import { mdiDelete } from '@mdi/js'

function ExperienceForm({
  experience,
  onInputChange,
  onSave,
  onCancel,
  onDelete,
}) {
    return (
        <div className="form experience">
            <div className="form-row">
                <label htmlFor={`companyName-${experience.id}`}>Company Name</label>
                <input
                    type="text"
                    id={`companyName-${experience.id}`}
                    value={experience.companyName}
                    onChange={(e) =>
                        onInputChange(experience.id, "companyName", e.target.value)
                    }
                    placeholder="Company Name"
                />
            </div>

            <div className="form-row">
                <label htmlFor={`position-${experience.id}`}>Position</label>
                <input
                    type="text"
                    id={`position-${experience.id}`}
                    value={experience.position}
                    onChange={(e) =>
                        onInputChange(experience.id, "position", e.target.value)
                    }
                    placeholder="Job Title"
                />
            </div>

            <div className="form-row">
                <label htmlFor={`location-${experience.id}`}>Location</label>
                <input
                    type="text"
                    id={`location-${experience.id}`}
                    value={experience.location}
                    onChange={(e) =>
                    onInputChange(experience.id, "location", e.target.value)
                    }
                    placeholder="City, Country"
                />
            </div>
            <div className="form-row">
                <label htmlFor={`startDate-${experience.id}`}>Start Date</label>
                <input
                    type="date"
                    id={`startDate-${experience.id}`}
                    value={experience.startDate}
                    onChange={(e) =>
                        onInputChange(experience.id, "startDate", e.target.value)
                    }
                />
            </div>

            <div className="form-row">
                <label htmlFor={`endDate-${experience.id}`}>End Date</label>
                <input
                    type="date"
                    id={`endDate-${experience.id}`}
                    value={experience.endDate}
                    onChange={(e) =>
                        onInputChange(experience.id, "endDate", e.target.value)
                    }
                />
            </div>

            <div className="form-row">
                <label htmlFor={`description-${experience.id}`}>Description</label>
                <textarea
                    id={`description-${experience.id}`}
                    value={experience.description}
                    onChange={(e) =>
                    onInputChange(experience.id, "description", e.target.value)
                    }
                    placeholder="Describe your role and achievements"
                />
            </div>
            
            <div className="form-actions">
                <Icon 
                path={mdiDelete} 
                size={1}
                className="btn delete" 
                onClick={() => onDelete(experience.id)}
                />                
                <button
                    type="button"
                    className="btn cancel"
                    onClick={() => onCancel(experience.id)}
                >
                    Cancel
                </button>  
                <button
                    type="button"
                    className="btn save"
                    onClick={() => onSave(experience.id)}
                >
                    Save
                </button>                          
            </div>
        </div>
    );
}

export default ExperienceForm;
