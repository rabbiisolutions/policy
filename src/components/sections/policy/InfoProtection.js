import PolicySection from "../../../constants/PolicySections";
import React from "react";

const InfoProtection = () => {
  return (
      <section id={'info-protection'}>
        <div className={'title'}>
          {PolicySection.inforProtection.title}
        </div>
        <div className={'content'}>
          <p>{PolicySection.inforProtection.text[0]}</p>
          <p>{PolicySection.inforProtection.text[1]}</p>
        </div>
      </section>
  )
};

export default InfoProtection;
