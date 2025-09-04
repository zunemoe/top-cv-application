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
        const { name, value } = e.target;
        setPersonalData(prev => ({
            ...prev,
            [name]: value
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
                        name="fullName"
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
                        name="email"
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
                        name="mobile"
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
                        name="address"
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
                        name="linkedIn"
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
