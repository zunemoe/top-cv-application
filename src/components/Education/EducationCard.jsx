function EducationCard({ education, onEdit }) {
    return (
        <div 
        className="education-card"
        onClick={() => onEdit(education.id)}
        >
            
        </div>
    )
};

export default EducationCard;