function SkillCard({ skill, onEdit }) {
    return (
        <div className="skill-card" onClick={() => onEdit(skill.id)}>
            <p>{skill.name}</p>        
        </div>
    )
};

export default SkillCard;