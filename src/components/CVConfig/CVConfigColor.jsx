import { colorThemes } from "../../utils/configOptions";

function CVConfigColor({ cvDataHook }) {
    const { cvData, updateColorTheme } = cvDataHook;
    const currentTheme = cvData.config?.colorTheme || 'blue';

    const ColorCircle = ({ theme, isSelected }) => (
        <div
        className={`color-circle ${isSelected ? 'selected' : ''}`}
        onClick={() => updateColorTheme(theme.id)}
        title={theme.description}
        >
            <div
            className="color-half primary"
            style={{ backgroundColor: theme.primary }}
            ></div>
            <div
            className="color-half secondary"
            style={{ backgroundColor: theme.secondary }}
            ></div>
        </div>
    );

    return (
        <section className="section config">
            <div className="section-header">
                <h2>Theme</h2>
            </div>
            <div className="section-content">
                <div className="color-theme-grid">
                    {colorThemes.map((theme) => (
                        <div
                        key={theme.id}
                        className={`color-theme-option ${currentTheme === theme.id ? 'selected' : ''}`}
                        >
                            <ColorCircle theme={theme} isSelected={currentTheme === theme.id} />
                            <div className="theme-info">
                                <span className="theme-name">{theme.name}</span>
                                <span className="theme-description">{theme.description}</span>
                            </div>
                        </div>
                        ))}
                </div>
            </div>
        </section>
    );
}

export default CVConfigColor;