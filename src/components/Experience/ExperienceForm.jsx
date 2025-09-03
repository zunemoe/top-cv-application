function ExperienceForm({
  experience,
  onInputChange,
  onSave,
  onCancel,
  onDelete,
}) {
    return (
        <div className="experience-form">
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
                    type="month"
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
                    type="month"
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
                <button
                type="button"
                className="btn delete"
                onClick={() => onDelete(experience.id)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>
                    Delete
                </button>
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
