function ExperienceCard({ experience, onEdit }) {
    return (
        <div className="experience-card" onClick={() => onEdit(experience.id)}>
            <h3>{experience.position}</h3>
            <p className="company-name">{experience.companyName}</p>        
        </div>
    )
};

export default ExperienceCard;