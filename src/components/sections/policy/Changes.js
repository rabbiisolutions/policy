import PolicySection from "../../../constants/PolicySections";
import React from "react";

const Changes = () => {
  return (
      <section id={'changes'}>
        <div className={'title'}>
          {PolicySection.changes.title}
        </div>
        <div className={'content'}>
          <p>{PolicySection.changes.text[0]}</p>
          <p>{PolicySection.changes.text[1]}</p>
        </div>
      </section>
  )
};

export default Changes;
