function EducationPreview({ educations }) {
    if (!educations || educations.length === 0) return null;

    return (
        <div className="preview education">
            <h3>Education</h3>
            {educations.map((edu) => (
                <div key={edu.id} className="card">
                    <div className="card-header">
                        <h4 className="title">{edu.degree} - {edu.fieldOfStudy}</h4>
                        <p className="period">{edu.startDate} - {edu.endDate || 'Present'}</p>
                    </div>
                    <p className="school">{edu.schoolName}</p>
                </div>
            ))}
        </div>
    );
};

export default EducationPreview;