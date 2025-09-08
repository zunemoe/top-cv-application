import { useState } from 'react'
import usePDFDownload from '../../../hooks/usePDFDownload';
import Icon from '@mdi/react';
import { mdiDownloadBox, mdiEraser, mdiTextBoxPlusOutline } from '@mdi/js';

function Toolbox({ cvDataHook }) {
    const { cvData, loadDummyData, clearAllData } = cvDataHook;
    const { downloadPDF } = usePDFDownload();
    const [isDownloading, setIsDownloading] = useState(false);

    const handleDownload = async () => {
        setIsDownloading(true);

        try {
            const cvElement = document.querySelector('.cv-preview');

            if (!cvElement) throw new Error('CV preview element not found');

            const fullName = cvData?.personalInfo?.fullName || 'CV';
            const fileName = fullName.replace(/\s+/g, '_') + '_CV';

            await downloadPDF(cvElement, fileName);
        } catch (error) {
            console.error('Error downloading PDF:', error);
        } finally {
            setIsDownloading(false);
        }
    }

    const handleClearCV = () => {
        clearAllData();
    }

    const handleGenerateDummyCV = () => {
        loadDummyData();
    }

    return (
        <section className="section toolbox">
            <div className="toolbox-container">
                <button
                className="btn add-dummy-data"
                onClick={handleGenerateDummyCV}
                title="Add Dummy Data"
                >
                    <Icon path={mdiTextBoxPlusOutline} size={1} />
                </button>
                <button
                className="btn clear-cv"
                onClick={handleClearCV}
                title="Clear CV"
                >
                    <Icon path={mdiEraser} size={1} />
                </button>
                <button
                className={`btn download-pdf ${isDownloading ? 'disable' : ''}`}
                onClick={handleDownload}
                title="Download CV as PDF"
                >
                    <Icon path={mdiDownloadBox} size={1} />
                </button>
            </div>
        </section>
    );
}

export default Toolbox;