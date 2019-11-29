import PolicySection from "../../../constants/PolicySections";
import React from "react";

const UserRights = () => {
  return (
      <section id={'user-rights'}>
        <div className={'title'}>
          {PolicySection.rights.title}
        </div>
        <div className={'content'}>
          <p>{PolicySection.rights.text[0]}</p>
          <ol type="I">
            <li>{PolicySection.rights.text[1]}</li>
            <p>{PolicySection.rights.text[2]}</p>
            <li>{PolicySection.rights.text[3]}</li>
            <p>{PolicySection.rights.text[4]}</p>
          </ol>
          <p>{PolicySection.rights.text[5]}</p>
        </div>
      </section>
  )
};

export default UserRights;
