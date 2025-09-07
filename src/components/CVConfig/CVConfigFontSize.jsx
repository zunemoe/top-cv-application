import { fontSizeOptions } from "../../utils/configOptions";

function CVConfigFontSize({ cvDataHook }) {
    const { cvData, updateFontSize } = cvDataHook;
    const currentFontSize = cvData.config?.fontSize || 'm';

    return (
        <section className="section config">
            <div className="section-header">
                <h2>Font Size</h2>
            </div>
            <div className="section-content">
                <div className="font-size-options">
                    {fontSizeOptions.map((size) => (
                        <div
                        key={size.id}
                        className={`font-size-option ${currentFontSize === size.id ? 'selected' : ''}`}
                        onClick={() => updateFontSize(size.id)}
                        >
                            <div className="size-preview-container">
                                <div
                                className="size-preview-text"
                                style={{ fontSize: size.size }}
                                >
                                    Aa
                                </div>
                            </div>
                            <div className="size-info">
                                <span className="size-name">{size.name}</span>
                                <span className="size-value">{size.size}</span>
                                <span className="size-description">{size.description}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default CVConfigFontSize;