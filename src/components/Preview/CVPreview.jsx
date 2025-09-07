import PersonalInfoPreview from "./PersonalInfo/PersonalInfoPreview";
import ExperiencePreview from "./Experience/ExperiencePreview";
import EducationPreview from "./Education/EducationPreview";
import SkillPreview from "./Skill/SkillPreview";
import { colorThemes, fontOptions, fontSizeOptions } from "../../utils/configOptions";

function CVPreview({ cvData }) {
    const currentTheme = colorThemes.find(theme => theme.id === cvData?.config?.colorTheme) || colorThemes[0];
    const currentFontFamily = fontOptions.find(font => font.id === cvData?.config?.fontFamily) || fontOptions[0];
    const currentFontSize = fontSizeOptions.find(size => size.id === cvData?.config?.fontSize) || fontSizeOptions[1];

    const themeStyles = {
        '--preview-primary': currentTheme.primary,
        '--preview-accent': currentTheme.accent,
        '--preview-font-family': currentFontFamily.fontFamily,
        '--root-font-size': currentFontSize.size,
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