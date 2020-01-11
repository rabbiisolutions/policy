import React from "react";


const MobileFooter = () => {
  return (
      <footer>
        <div id="darken">
          <a href={'#heading'}>Privacy Policy</a>
          <h1 className="copyright">&copy;&nbsp;Rabbii&nbsp;Technology&nbsp;Solutions&nbsp;{new Date().getFullYear()}</h1>
        </div>
      </footer>
  );
};

export default MobileFooter;
