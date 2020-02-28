import React from "react";


const MobileFooter = () => {
  return (
      <footer>
          <a href={'#heading'}>Privacy Policy</a>
          <h1 className="copyright">&copy;&nbsp;Rabbii&nbsp;Technology&nbsp;Solutions&nbsp;{new Date().getFullYear()}</h1>
      </footer>
  );
};

export default MobileFooter;
