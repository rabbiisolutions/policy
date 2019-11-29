import React from "react";
import PolicySection from "../../constants/PolicySections";
import mobileAccordion from "../accordion";
import InfoProtection from "./policy/InfoProtection";
import Changes from "./policy/Changes";
import ThirdParty from "./policy/ThirdParty";
import UserRights from "./policy/UsersRights";
import InfoUse from "./policy/InfoUse";
import PersonalData from "./policy/PersonalData";

const name = 'sections-accordion';

const Mobile = () => {
  const collapses = [];
  collapses.push(
      <div className={name} key={'a'}>
        {mobileAccordion.toggle(PolicySection.subSections[0])}
        {
          PersonalData()
        }
      </div>
      ,
      <div className={name} key={'b'}>
        {mobileAccordion.toggle(PolicySection.subSections[1])}
        {
          InfoUse()
        }
      </div>
      ,
      <div className={name} key={'c'}>
        {mobileAccordion.toggle(PolicySection.subSections[2])}
        {
          ThirdParty()
        }
      </div>
      ,
      <div className={name} key={'d'}>
        {mobileAccordion.toggle(PolicySection.subSections[3])}
        {
          InfoProtection()
        }
      </div>
      ,
      <div className={name} key={'e'}>
        {mobileAccordion.toggle(PolicySection.subSections[4])}
        {
          UserRights()
        }
      </div>
      ,
      <div className={name} key={'f'}>
        {mobileAccordion.toggle(PolicySection.subSections[5])}
        {
          Changes()
        }
      </div>
  );

  return ( // return the sections list
      collapses.map((panel) => (panel))
  );
};

export default Mobile;
