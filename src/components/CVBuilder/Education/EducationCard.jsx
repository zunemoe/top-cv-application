function EducationCard({ education, onEdit }) {
    return (
        <div 
        className="education-card"
        onClick={() => onEdit(education.id)}
        >
            <h3>{education.fieldOfStudy} ({education.degree})</h3>
            <p className="school-name">{education.schoolName}</p>
            <p className="education-dates">
                {education.startDate} - {education.endDate ? education.endDate : 'Present'}
            </p>
        </div>
    )
};

export default EducationCard;