import { useState } from 'react'

function Experience() {
    const [experiences, setExperiences] = useState([]);
    const [editingId, setEditingId] = useState(null);

    const addExperience = () => {
        const newExperience = {
            id: Date.now(),
            companyName: '',
            position: '',
            location: '',
            startDate: '',
            endDate: '',
            description: '',
            isEditing: true
        }
        setExperiences(prev => [...prev, newExperience])
        setEditingId(newExperience.id)
    };

    const handleInputChange = (id, key, value) => {

    };

    const saveExperience = (id) => {
    };

    const editExperience = (id) => {
    };

    const cancelEdit = (id) => {

    };

    const deleteExperience = (id) => {
    };

    const ExperienceForm = ({ experience }) => ();

    const ExperienceCard = ({ experience }) => ();

    return (
        <section className="section Experience">
            <h2>Experience</h2>
            <div className="placeholder">Experience Form</div>
        </section>
    )
}

export default Experience