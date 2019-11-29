import PolicySection from "../../../constants/PolicySections";
import React from "react";
import ScrollUp from "../../ScrollUp";

const InfoUse = () => {
  return (
      <section id={'info-use'}>
        <div className={'title'}>
          {PolicySection.inforUse.title}
        </div>
        <div className={'content'}>
          <p>{PolicySection.inforUse.text[0]}</p>
          <div className={'sub-title'}>A. TeeCha</div>
          <ol type="I">
            <li className={'bold'}>Teachers</li>
            <p>{PolicySection.inforUse.text[1]}</p>
            <li className={'bold'}>Clients</li>
            <p>{PolicySection.inforUse.text[2]}</p>
          </ol>
          <p>{PolicySection.inforUse.text[3]}</p>
        </div>
        <ScrollUp/>
      </section>
  )
};

export default InfoUse;
