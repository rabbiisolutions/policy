import PolicySection from "../../../constants/PolicySections";
import React from "react";

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
            <li>Teachers</li>
            <p>{PolicySection.inforUse.text[1]}</p>
            <li>Clients</li>
            <p>{PolicySection.inforUse.text[2]}</p>
          </ol>
          <p>{PolicySection.inforUse.text[3]}</p>
        </div>
      </section>
  )
};

export default InfoUse;
