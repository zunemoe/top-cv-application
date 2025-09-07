import { useState } from "react";
import { useScrollToForm } from "../../../hooks/useScrollToForm.js";
import { useAutoFocus } from "../../../hooks/useAutoFocus.js";
import ExperienceForm from "./ExperienceForm.jsx";
import ExperienceCard from "./ExperienceCard.jsx";
import Icon from "@mdi/react";
import { mdiPlus } from "@mdi/js";
import { useEffect } from "react";

function Experience({ cvDataHook }) {
  const { cvData, addExperience, updateExperience, deleteExperience } = cvDataHook;
  const [experiences, setExperiences] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const editingRef = useScrollToForm(editingId);
  const focusRef = useAutoFocus(editingId, {
        focusSelector: 'input:first-of-type'
    });

  useEffect(() => {
    setExperiences(cvData.experiences || []);
  }, [cvData.experiences]);

  const addExperienceItem = () => {
    const newExperience = {
      id: Date.now(),
      companyName: "",
      position: "",
      location: "",
      startDate: "",
      endDate: "",
      description: "",
      isEditing: true,
    };
    setExperiences((prev) => [newExperience, ...prev]);
    setEditingId(newExperience.id);
  };

  const handleInputChange = (id, key, value) => {
    setExperiences((prev) =>
      prev.map((exp) => (exp.id === id ? { ...exp, [key]: value } : exp))
    );
  };

  const saveExperience = (id) => {
    const experience = experiences.find((exp) => exp.id === id);
    const { isEditing, ...experienceData } = experience;

    const existingExperience = cvData.experiences.find((exp) => exp.id === id);
    if (existingExperience) {
      updateExperience(id, experienceData);
    } else {
      addExperience(experienceData);
    }

    setExperiences((prev) =>
      prev.map((exp) => (exp.id === id ? { ...exp, isEditing: false } : exp))
    );
    setEditingId(null);
  };

  const editExperienceItem = (id) => {
    setExperiences((prev) =>
      prev.map((exp) => (exp.id === id ? { ...exp, isEditing: true } : exp))
    );
    setEditingId(id);
  };

  const cancelEdit = (id) => {
    const experience = experiences.find((exp) => exp.id === id);

    if (!experience.companyName && !experience.position)
      setExperiences((prev) => prev.filter((exp) => exp.id !== id));
    else {
      const savedExperience = cvData.experiences.find((exp) => exp.id === id);
      if (savedExperience) {
        setExperiences((prev) =>
          prev.map((exp) => (exp.id === id ? { ...savedExperience, isEditing: false } : exp))
        );
      } else {
        setExperiences((prev) => prev.filter((exp) => exp.id !== id));
      }            
    }
    setEditingId(null);
  };

  const deleteExperienceItem = (id) => {
    deleteExperience(id);
    setExperiences((prev) => prev.filter((exp) => exp.id !== id));
    setEditingId(null);
  };

  return (
    <section className="section experience">
      <div
        className="section-header"
        ref={editingId !== null ? editingRef : null}
      >
        <h2>Experience</h2>
        <Icon
          path={mdiPlus}
          size={1}
          title="Add Experience"
          className={`btn add-experience ${
            editingId !== null ? "disable" : ""
          }`}
          onClick={addExperienceItem}
        />
      </div>
      <div className="experience-container">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className={`experience-item ${exp.isEditing ? "form" : "card"}`}
            ref={exp.isEditing ? focusRef : null}
          >
            {exp.isEditing ? (
              <ExperienceForm
                experience={exp}
                onInputChange={handleInputChange}
                onSave={saveExperience}
                onCancel={cancelEdit}
                onDelete={deleteExperienceItem}
              />
            ) : (
              <ExperienceCard experience={exp} onEdit={editExperienceItem} />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
