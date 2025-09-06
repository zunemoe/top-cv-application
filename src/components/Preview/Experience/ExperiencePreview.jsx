function ExperiencePreview({ experiences }) {
    if (!experiences || experiences.length === 0) return null;

    return (
      <div className="preview experience">
        <h3>Experience</h3>
        {experiences.map((exp) => (
          <div className="card" key={exp.id}>
            <div className="card-header">
                <h4 className="company">{exp.companyName}</h4>
                <p className="period">{exp.startDate} - {exp.endDate || 'Present'}</p>
            </div>
            <p className="position">{exp.position}</p>
            <p className="location">{exp.location}</p>
            <p className="description">{exp.description}</p>
          </div>
        ))}
      </div>
    );
};

export default ExperiencePreview;