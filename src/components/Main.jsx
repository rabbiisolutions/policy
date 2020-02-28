import React from "react";
import texts from "../constants/texts";
import Icon from "./basic/Icon";
import printIcon from "../assets/icons/printer.svg";
import policySection from "../constants/policy-sections";
import Mobile from "./Mobile";
import Desktop from "./Desktop";

const SideNav = () => {
  return (
      <nav id={'side-bar'}>
        <a className={'nav-elem'} href={'#personal-data'}>{policySection.subSections[0]}</a>
        <a className={'nav-elem'} href={'#info-use'}>{policySection.subSections[1]}</a>
        <a className={'nav-elem'} href={'#third-party'}>{policySection.subSections[2]}</a>
        <a className={'nav-elem'} href={'#info-protection'}>{policySection.subSections[3]}</a>
        <a className={'nav-elem'} href={'#user-rights'}>{policySection.subSections[4]}</a>
        <a className={'nav-elem'} href={'#changes'}>{policySection.subSections[5]}</a>
      </nav>
  );
};

const Main = () => {
  return (
      <main>
        <header>
          <h1 id={'heading'}>Rabbii TS Privacy Policy</h1>
          <div id={'actionable'}>
            <div id={'last-update'}>Last Updated:&nbsp;{texts.lastUpdate}</div>
            <div id={'print-link'} onClick={event => window.print() }>
              <Icon src={printIcon} width={2.5} height={2.5}/>
              <span>Print</span>
            </div>
          </div>
          <div id={'preamble'}>
            {policySection.preamble}
          </div>
          <div id={'lead'}>
            (tap section to expand and view content)
          </div>
        </header>
        <section id={'desktop'}>
          <SideNav/>
          <div id={'column'}>
            <Desktop/>
          </div>
        </section>
        <section id={'mobile'}>
          <Mobile/>
        </section>
      </main>
  );
};

export default Main;
