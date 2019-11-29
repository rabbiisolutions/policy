import PolicySection from "../../../constants/PolicySections";
import React from "react";
import ScrollUp from "../../ScrollUp";

const UserRights = () => {
  return (
      <section id={'user-rights'}>
        <div className={'title'}>
          {PolicySection.rights.title}
        </div>
        <div className={'content'}>
          <p>{PolicySection.rights.text[0]}</p>
          <ol type="I">
            <li className={'bold'}>{PolicySection.rights.text[1]}</li>
            <p>{PolicySection.rights.text[2]}</p>
            <li className={'bold'}>{PolicySection.rights.text[3]}</li>
            <p>{PolicySection.rights.text[4]}</p>
          </ol>
          <p>{PolicySection.rights.text[5]}</p>
        </div>
        <ScrollUp/>
      </section>
  )
};

export default UserRights;
