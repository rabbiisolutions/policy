import React from "react";
import PolicySection from "../../constants/PolicySections";

const SideNav = () => {
  return (
    <nav id={'side-bar'}>
      <a className={'nav-elem'} href={'#personal-data'}>{PolicySection.subSections[0]}</a>
      <a className={'nav-elem'} href={'#info-use'}>{PolicySection.subSections[1]}</a>
      <a className={'nav-elem'} href={'#third-party'}>{PolicySection.subSections[2]}</a>
      <a className={'nav-elem'} href={'#info-protection'}>{PolicySection.subSections[3]}</a>
      <a className={'nav-elem'} href={'#user-rights'}>{PolicySection.subSections[4]}</a>
      <a className={'nav-elem'} href={'#changes'}>{PolicySection.subSections[5]}</a>
    </nav>
  );
};

export default SideNav;
