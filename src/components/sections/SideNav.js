import React from "react";
import PolicySection from "../../constants/PolicySections";

const SideNav = () => {
  return (
    <nav id={'side-bar'}>
      <div className={'nav-elem'}>{PolicySection.subSections[0]}</div>
      <div className={'nav-elem'}>{PolicySection.subSections[1]}</div>
      <div className={'nav-elem'}>{PolicySection.subSections[2]}</div>
      <div className={'nav-elem'}>{PolicySection.subSections[3]}</div>
      <div className={'nav-elem'}>{PolicySection.subSections[4]}</div>
      <div className={'nav-elem'}>{PolicySection.subSections[5]}</div>
    </nav>
  );
};

export default SideNav;
