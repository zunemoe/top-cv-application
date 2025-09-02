import { useState } from 'react'

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
        setExperiences(prev => [...prev, newExperience])
        setEditingId(newExperience.id)
    };

    const handleInputChange = (id, key, value) => {
        setExperiences(prev =>
            prev.map(exp =>
                exp.id === id ? { ...exp, [key]: value } : exp
            )
        )
    };

    const saveExperience = (id) => {
        setExperiences(prev =>
            prev.map(exp =>
                exp.id === id ? { ...exp, isEditing: false } : exp
            )
        )
        setEditingId(null)
    };

    const editExperience = (id) => {
        setExperiences(prev =>
            prev.map(exp =>
                exp.id === id ? { ...exp, isEditing: true } : exp
            )
        )
        setEditingId(id)
    };

    const cancelEdit = (id) => {
        const experience = experiences.find(exp => exp.id === id);

        if (!experience.companyName && !experience.position)
            deleteExperience(id);
        else {
            setExperiences(prev =>
                prev.map(exp =>
                    exp.id === id ? { ...exp, isEditing: false } : exp
                )
            )
            setEditingId(null)
        } 
    };

    const deleteExperience = (id) => {
        setExperiences(prev => prev.filter(exp => exp.id !== id));
        setEditingId(null);
    };

    const ExperienceForm = ({ experience }) => (
        <div className='experience-form'>
            <div className="form-row">
                <div className="form-group">
                    <label htmlFor={`companyName-${experience.id}`}>Company Name</label>
                    <input
                        type="text"
                        id={`companyName-${experience.id}`}
                        value={experience.companyName}
                        onChange={(e) => handleInputChange(experience.id, 'companyName', e.target.value)}
                        placeholder="Company Name"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor={`position-${experience.id}`}>Position</label>
                    <input
                        type="text"
                        id={`position-${experience.id}`}
                        value={experience.position}
                        onChange={(e) => handleInputChange(experience.id, 'position', e.target.value)}
                        placeholder="Job Title"
                    />
                </div>
            </div>

            <div className="form-group">
                <label htmlFor={`location-${experience.id}`}>Location</label>
                <input
                    type="text"
                    id={`location-${experience.id}`}
                    value={experience.location}
                    onChange={(e) => handleInputChange(experience.id, 'location', e.target.value)}
                    placeholder="City, Country"
                />
            </div>
            <div className="form-row">
                <div className="form-group">
                    <label htmlFor={`startDate-${experience.id}`}>Start Date</label>
                    <input
                        type="month"
                        id={`startDate-${experience.id}`}
                        value={experience.startDate}
                        onChange={(e) => handleInputChange(experience.id, 'startDate', e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor={`endDate-${experience.id}`}>End Date</label>
                    <input
                        type="month"
                        id={`endDate-${experience.id}`}
                        value={experience.endDate}
                        onChange={(e) => handleInputChange(experience.id, 'endDate', e.target.value)}
                    />
                </div>
            </div>

            <div className="form-group">
                <label htmlFor={`description-${experience.id}`}>Description</label>
                <textarea
                    id={`description-${experience.id}`}
                    value={experience.description}
                    onChange={(e) => handleInputChange(experience.id, 'description', e.target.value)}
                    placeholder="Describe your role and achievements"
                />
            </div>
            <div className="form-actions">
                <button
                    type="button"
                    className='btn save'
                    onClick={() => saveExperience(experience.id)}
                >Save</button>
                <button
                    type="button"
                    className='btn cancel'
                    onClick={() => cancelEdit(experience.id)}
                >Cancel</button>
                <button
                    type="button"
                    className='btn delete'
                    onClick={() => deleteExperience(experience.id)}
                >Delete</button>
            </div>
        </div>
    );

    const ExperienceCard = ({ experience }) => (
        <div className="experience-card">
            <div className="experience-header">
                <h3>{experience.position}</h3>
                <button
                    type="button"
                    className='btn edit'
                    onClick={() => editExperience(experience.id)}
                >Edit</button>                
            </div>
            <p className="company-name">{experience.companyName}</p>
            <p className="location">{experience.location}</p>
            <p className="duration">
                {experience.startDate} - {experience.endDate || 'Present'}
            </p>
            <p className="description">{experience.description}</p>
        </div>
    );

    return (
        <section className="section Experience">
            <h2>Experience</h2>
            <div className='experience-container'>
                {experiences.map(exp => (
                    <div key={exp.id} className='experience-item'>
                        {exp.isEditing ? (
                            <ExperienceForm experience={exp} />
                        ) : (
                            <ExperienceCard experience={exp} />
                        )}
                    </div>
                ))}

                {editingId === null && (
                    <button
                        type="button"
                        className='btn add-experience'
                        onClick={addExperience}
                    >+ Add Experience</button>
                )}
            </div>
        </section>
    )
}

export default Experience