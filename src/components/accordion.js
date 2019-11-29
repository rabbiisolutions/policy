import React from "react";
import sectionCollapseHandler from "../events/collapse";
import Icon from "./icon";
import rightIcon from "../icons/ant-design_caret-right-outlineright.svg";
import downIcon from "../icons/drop-down-arrow.svg";

const panel = (data) => {
  return (
      <div className="panel">
        {data}
      </div>
  )
};

const toggle = (title) => {
  return (
      <div className="section-toggle" onClick={e => sectionCollapseHandler(e)}>
        <Icon src={rightIcon} height={1.5} width={1.5} className="down"/>
        <Icon src={downIcon} height={1.2} width={1.2} className="up hidden"/>
        <span className="section-title">{title}</span>
      </div>);
};

const mobileAccordion = {panel: panel, toggle: toggle};

export default mobileAccordion;
