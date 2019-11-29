import PolicySection from "../../../constants/PolicySections";
import React from "react";
import ScrollUp from "../../ScrollUp";

const ThirdParty = () => {
  return (
      <section id={'third-party'}>
        <div className={'title'}>
          {PolicySection.thirdParty.title}
        </div>
        <br/>
        <div className={'content'}>
          <div className={'sub-title'}>{PolicySection.thirdParty.text[0]}</div>
          <p>{PolicySection.thirdParty.text[1]}</p>
          <div className={'sub-title'}>{PolicySection.thirdParty.text[2]}</div>
          <p>{PolicySection.thirdParty.text[3]}</p>
        </div>
        <ScrollUp/>
      </section>
  )
};

export default ThirdParty;
