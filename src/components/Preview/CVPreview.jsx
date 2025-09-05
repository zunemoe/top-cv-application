import PersonalInfoPreview from "./PersonalInfo/PersonalInfoPreview";
import ExperiencePreview from "./Experience/ExperiencePreview";
import EducationPreview from "./Education/EducationPreview";
import SkillPreview from "./Skill/SkillPreview";

function CVPreview({ cvData }) {
    return (
      <div className="cv-preview">
        <PersonalInfoPreview personalInfo={cvData?.personalInfo} />

        <div className="preview-body">
          <ExperiencePreview experiences={cvData?.experiences} />
          <EducationPreview educations={cvData?.educations} />
          <SkillPreview skills={cvData?.skills} />
        </div>
      </div>
    );
};

export default CVPreview;