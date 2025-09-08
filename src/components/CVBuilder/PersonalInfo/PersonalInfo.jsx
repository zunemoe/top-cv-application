import { useState } from 'react'
import usePDFDownload from '../../../hooks/usePDFDownload'
import Icon from '@mdi/react';
import { mdiDownloadBox } from '@mdi/js';

function PersonalInfo({ cvDataHook }) {
    const { cvData, updatePersonalInfo } = cvDataHook;
    const { downloadPDF } = usePDFDownload();
    const [isDownloading, setIsDownloading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        updatePersonalInfo({
            ...cvData.personalInfo,
            [name]: value
        });
    }

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

    return (
        <section className="section personal-info">
            <div className="section-header">
                <h2>Personal Info</h2>
                <Icon 
                path={mdiDownloadBox} 
                size={1} 
                className={`btn download-pdf ${isDownloading ? 'disable' : ''}`}
                onClick={handleDownload}
                title="Download CV as PDF"
                />
            </div>
            <form className="form personal-info">
                <div className="form-row">
                    <label htmlFor="fullName">Full Name</label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={cvData.personalInfo?.fullName || ''}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                    />
                </div>
                <div className="form-row">
                    <label htmlFor="email">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={cvData.personalInfo?.email || ''}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                    />
                </div>
                <div className="form-row">
                    <label htmlFor="mobile">Mobile</label>
                    <input
                        type="tel"
                        id="mobile"
                        name="mobile"
                        value={cvData.personalInfo?.mobile || ''}
                        onChange={handleInputChange}
                        placeholder="+1 234 567 8900"
                    />
                </div>
                <div className="form-row">
                    <label htmlFor="address">Address</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={cvData.personalInfo?.address || ''}
                        onChange={handleInputChange}
                        placeholder="123 Main St, City, Country, Postcode"
                    />
                </div>
                <div className="form-row">
                    <label htmlFor="linkedIn">LinkedIn</label>
                    <input
                        type="text"
                        id="linkedIn"
                        name="linkedIn"
                        value={cvData.personalInfo?.linkedIn || ''}
                        onChange={handleInputChange}
                        placeholder="LinkedIn handle"
                    />
                </div>
            </form>
        </section>
    );
}

export default PersonalInfo
