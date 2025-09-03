import { useState } from 'react'

function PersonalInfo() {
    const [personalData, setPersonalData] = useState({
        fullName: '',
        email: '',
        mobile: '',
        address: '',
        linkedIn: ''
    });

    const handleInputChange = (e) => {
        const { key, value } = e.target;
        setPersonalData(prev => ({
            ...prev,
            [key]: value
        }));
    }

    return (
        <section className="section personal-info">
            <div className="section-header">
                <h2>Personal Info</h2>
            </div>
            <form className="form personal-info">
                <div className="form-row">
                    <label htmlFor="fullName">Full Name</label>
                    <input
                        type="text"
                        id="fullName"
                        key="fullName"
                        value={personalData.fullName}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                    />
                </div>
                <div className="form-row">
                    <label htmlFor="email">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        key="email"
                        value={personalData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                    />
                </div>
                <div className="form-row">
                    <label htmlFor="mobile">Mobile</label>
                    <input
                        type="tel"
                        id="mobile"
                        key="mobile"
                        value={personalData.mobile}
                        onChange={handleInputChange}
                        placeholder="+1 234 567 8900"
                    />
                </div>
                <div className="form-row">
                    <label htmlFor="address">Address</label>
                    <input
                        type="text"
                        id="address"
                        key="address"
                        value={personalData.address}
                        onChange={handleInputChange}
                        placeholder="123 Main St, City, Country, Postcode"
                    />
                </div>
                <div className="form-row">
                    <label htmlFor="linkedIn">LinkedIn</label>
                    <input
                        type="text"
                        id="linkedIn"
                        key="linkedIn"
                        value={personalData.linkedIn}
                        onChange={handleInputChange}
                        placeholder="https://www.linkedin.com/in/yourprofile"
                    />
                </div>
            </form>
        </section>
    );
}

export default PersonalInfo
