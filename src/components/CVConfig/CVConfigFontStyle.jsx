import { fontOptions } from "../../utils/configOptions";

function CVConfigFontStyle({ cvDataHook }) {
    const { cvData, updateFontFamily } = cvDataHook;
    const currentFont = cvData.config?.fontFamily || 'inter';

    return (
        <section className="section config">
            <div className="section-header">
                <h2>Font Style</h2>
            </div>
            <div className="section-content">
                <div className="font-options-grid">
                    {fontOptions.map((font) => (
                        <div
                        key={font.id}
                        className={`font-option ${currentFont === font.id ? 'selected' : ''}`}
                        onClick={() => updateFontFamily(font.id)}
                        >
                            <div className="font-preview-container">
                                <div
                                className="font-preview-text"
                                style={{ fontFamily: font.fontFamily }}
                                >
                                    Aa
                                </div>
                                <div
                                className="font-sample"
                                style={{ fontFamily: font.fontFamily }}
                                >
                                    {font.preview}
                                </div>
                            </div>
                            <div className="font-info">
                                <span className="font-name">{font.name}</span>
                                <span className="font-description">{font.fontFamily.split(',')[0]}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default CVConfigFontStyle;