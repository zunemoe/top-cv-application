import Icon from '@mdi/react'
import { mdiDelete } from '@mdi/js'

function EducationForm({ education, onInputChange, onSave, onCancel, onDelete }) {
    return (
        <div className="form education">
            <div className="form-row">
                <label htmlFor={`schoolName-${education.id}`}>School Name</label>
                <input
                    type="text"
                    id={`schoolName-${education.id}`}
                    value={education.schoolName}
                    onChange={(e) =>
                        onInputChange(education.id, "schoolName", e.target.value)
                    }
                    placeholder="School Name"
                />
            </div>

            <div className="form-row">
                <label htmlFor={`degree-${education.id}`}>Degree</label>
                <input
                    type="text"
                    id={`degree-${education.id}`}
                    value={education.degree}
                    onChange={(e) =>
                        onInputChange(education.id, "degree", e.target.value)
                    }
                    placeholder="Degree"
                />
            </div>

            <div className="form-row">
                <label htmlFor={`fieldOfStudy-${education.id}`}>Field of Study</label>
                <input
                    type="text"
                    id={`fieldOfStudy-${education.id}`}
                    value={education.fieldOfStudy}
                    onChange={(e) =>
                        onInputChange(education.id, "fieldOfStudy", e.target.value)
                    }
                    placeholder="Field of Study"
                />
            </div>

            <div className="form-row">
                <label htmlFor={`startDate-${education.id}`}>Start Date</label>
                <input
                    type="date"
                    id={`startDate-${education.id}`}
                    value={education.startDate}
                    onChange={(e) =>
                        onInputChange(education.id, "startDate", e.target.value)
                    }
                />
            </div>

            <div className="form-row">
                <label htmlFor={`endDate-${education.id}`}>End Date</label>
                <input
                    type="date"
                    id={`endDate-${education.id}`}
                    value={education.endDate}
                    onChange={(e) =>
                        onInputChange(education.id, "endDate", e.target.value)
                    }
                />
            </div>

            <div className="form-actions">
                <Icon 
                path={mdiDelete} 
                size={1}
                className="btn delete" 
                onClick={() => onDelete(education.id)}
                />
                <button
                type="button"
                className="btn cancel"
                onClick={() => onCancel(education.id)}>Cancel</button>
                <button
                type="button"
                className="btn save"
                onClick={() => onSave(education.id)}>Save</button>                
            </div>
        </div>
    );
};

export default EducationForm;