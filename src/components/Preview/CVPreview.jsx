import PersonalInfoPreview from "./PersonalInfo/PersonalInfoPreview";
import ExperiencePreview from "./Experience/ExperiencePreview";
import EducationPreview from "./Education/EducationPreview";
import SkillPreview from "./Skill/SkillPreview";
import { colorThemes } from "../../utils/configOptions";

function CVPreview({ cvData }) {
    const currentTheme = colorThemes.find(theme => theme.id === cvData?.config?.colorTheme) || colorThemes[0];
    
    const themeStyles = {
        '--preview-primary': currentTheme.primary,
        '--preview-accent': currentTheme.accent,
    };
    
    return (
      <div 
      className="cv-preview"
      style={themeStyles}
      >
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