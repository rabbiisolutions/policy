import React from "react";
import policySection from "../constants/policy-sections";
import mobileAccordion from "./basic/Accordion";
import policySections from "./Policy";

const name = 'sections-accordion';

const Mobile = () => {
  const collapses = [];
  collapses.push(
      <div className={name} key={'a'}>
        {mobileAccordion.toggle(policySection.subSections[0])}
        {
          policySections.PersonalData()
        }
      </div>
      ,
      <div className={name} key={'b'}>
        {mobileAccordion.toggle(policySection.subSections[1])}
        {
          policySections.InfoUse()
        }
      </div>
      ,
      <div className={name} key={'c'}>
        {mobileAccordion.toggle(policySection.subSections[2])}
        {
          policySections.ThirdParty()
        }
      </div>
      ,
      <div className={name} key={'d'}>
        {mobileAccordion.toggle(policySection.subSections[3])}
        {
          policySections.InfoProtection()
        }
      </div>
      ,
      <div className={name} key={'e'}>
        {mobileAccordion.toggle(policySection.subSections[4])}
        {
          policySections.UserRights()
        }
      </div>
      ,
      <div className={name} key={'f'}>
        {mobileAccordion.toggle(policySection.subSections[5])}
        {
          policySections.Changes()
        }
      </div>
  );

  return ( // return the sections list
      collapses.map((panel) => (panel))
  );
};

export default Mobile;
