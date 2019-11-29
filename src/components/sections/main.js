import React from "react";
import texts from "../../constants/texts";
import Icon from "../icon";
import printIcon from "../../icons/printer.svg";
import PolicySection from "../../constants/PolicySections";
import Mobile from "./Mobile";
import Desktop from "./Desktop";
import SideNav from "./SideNav";

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
            {PolicySection.preamble}
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
