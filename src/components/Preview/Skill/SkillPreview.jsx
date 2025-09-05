function SkillPreview({ skills }) {
    if (skills && skills.length > 0) return null;

    return (
        <div className="preview skill">
            <h3>Skills</h3>
            <div className="skills-container">
                {skills.map((skill) => (
                    <span className="skill-badge" key={skill.id}>{skill.name}</span>
                ))}
            </div>
        </div>
    );
};

export default SkillPreview;