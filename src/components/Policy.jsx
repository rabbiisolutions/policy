import policySection from "../constants/policy-sections";
import React from "react";
import ScrollUp from "./basic/ScrollUp";

const Changes = () => {
  return (
      <section id={'changes'} key={'ps1'}>
        <div className={'title'}>
          {policySection.changes.title}
        </div>
        <div className={'content'}>
          <p>{policySection.changes.text[0]}</p>
          <p>{policySection.changes.text[1]}</p>
        </div>
        <ScrollUp/>
      </section>
  )
};

const InfoProtection = () => {
  return (
      <section id={'info-protection'} key={'ps2'}>
        <div className={'title'}>
          {policySection.inforProtection.title}
        </div>
        <div className={'content'}>
          <p>{policySection.inforProtection.text[0]}</p>
          <p>{policySection.inforProtection.text[1]}</p>
        </div>
        <ScrollUp/>
      </section>
  )
};

const InfoUse = () => {
  return (
      <section id={'info-use'} key={'ps3'}>
        <div className={'title'}>
          {policySection.inforUse.title}
        </div>
        <div className={'content'}>
          <p>{policySection.inforUse.text[0]}</p>
          <div className={'sub-title'}>A. TeeCha</div>
          <ol type="I">
            <li className={'bold'}>Teachers</li>
            <p>{policySection.inforUse.text[1]}</p>
            <li className={'bold'}>Clients</li>
            <p>{policySection.inforUse.text[2]}</p>
          </ol>
          <p>{policySection.inforUse.text[3]}</p>
        </div>
        <ScrollUp/>
      </section>
  )
};

const PersonalData = () => {
  return (
      <section id={'personal-data'} key={'ps4'}>
        <div className={'title'}>
          {policySection.personal.title}
        </div>
        <div className={'content'}>
          <p>{policySection.personal.text[0]}</p>
          <p>{policySection.personal.text[1]}</p>
          {policySection.personal.text[2]}
          <p>{policySection.personal.text[3]}</p>
          <p>{policySection.personal.text[4]}</p>
          {policySection.personal.text[5]}
        </div>
        <ScrollUp/>
      </section>
  )
};

const ThirdParty = () => {
  return (
      <section id={'third-party'} key={'ps5'}>
        <div className={'title'}>
          {policySection.thirdParty.title}
        </div>
        <br/>
        <div className={'content'}>
          <div className={'sub-title'}>{policySection.thirdParty.text[0]}</div>
          <p>{policySection.thirdParty.text[1]}</p>
          <div className={'sub-title'}>{policySection.thirdParty.text[2]}</div>
          <p>{policySection.thirdParty.text[3]}</p>
        </div>
        <ScrollUp/>
      </section>
  )
};

const UserRights = () => {
  return (
      <section id={'user-rights'} key={'ps6'}>
        <div className={'title'}>
          {policySection.rights.title}
        </div>
        <div className={'content'}>
          <p>{policySection.rights.text[0]}</p>
          <ol type="I">
            <li className={'bold'}>{policySection.rights.text[1]}</li>
            <p>{policySection.rights.text[2]}</p>
            <li className={'bold'}>{policySection.rights.text[3]}</li>
            <p>{policySection.rights.text[4]}</p>
          </ol>
          <p>{policySection.rights.text[5]}</p>
        </div>
        <ScrollUp/>
      </section>
  )
};

const policySections = {
  UserRights: UserRights, ThirdParty: ThirdParty, PersonalData: PersonalData, InfoUse: InfoUse,
  InfoProtection: InfoProtection, Changes: Changes
};

export default policySections;
