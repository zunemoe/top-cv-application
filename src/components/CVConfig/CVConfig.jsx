import CVConfigColor from "./CVConfigColor";
import CVConfigFontSize from "./CVConfigFontSize";
import CVConfigFontStyle from "./CVConfigFontStyle";

function CVConfig( { cvDataHook } ) {
    return (
        <div className="cv-config">
            <CVConfigColor cvDataHook={cvDataHook} />
            <CVConfigFontStyle cvDataHook={cvDataHook} />
            <CVConfigFontSize cvDataHook={cvDataHook} />            
        </div>
    );
};

export default CVConfig;