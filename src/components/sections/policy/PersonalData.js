import PolicySection from "../../../constants/PolicySections";
import React from "react";
import ScrollUp from "../../ScrollUp";

const PersonalData = () => {
  return (
      <section id={'personal-data'}>
        <div className={'title'}>
          {PolicySection.personal.title}
        </div>
        <div className={'content'}>
          <p>{PolicySection.personal.text[0]}</p>
          <p>{PolicySection.personal.text[1]}</p>
          {PolicySection.personal.text[2]}
          <p>{PolicySection.personal.text[3]}</p>
          <p>{PolicySection.personal.text[4]}</p>
          {PolicySection.personal.text[5]}
        </div>
        <ScrollUp/>
      </section>
  )
};

export default PersonalData;
