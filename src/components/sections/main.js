import React from "react";
import texts from "../../constants/texts";
import Icon from "../icon";
import printIcon from "../../icons/printer.svg";

const Main = () => {
  return (
      <section className={'header'}>
        <h1 id={'heading'}>Rabbii TS Privacy Policy</h1>
        <div id={'actionable'}>
          <div id={'last-update'}>Last Updated:&nbsp;{texts.lastUpdate}</div>
          <div id={'print-link'}><Icon src={printIcon} width={2.5} height={2.5}/>&nbsp;Print</div>
        </div>
        <div id={'preamble'}>

        </div>
      </section>
  );
};

export default Main;
