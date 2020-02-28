import React from "react";
import Icon from "./Icon";
import up from "../../assets/icons/ant-design_arrow-up-outlineup-arrow.svg"

const ScrollUp = () => {
  return (
      <a className={'scroll-up'} href={'#preamble'}>
        <span>Top of page</span>
        <Icon src={up} height={1.5} width={1.5}/>
      </a>
  );
};

export default ScrollUp;
