import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from "./components/sections/navBar";
import DropDown from "./components/DropDown";
import SideBar from "./components/sections/sideBar";
import SignUpModal from "./components/signUpModal";
import MobileFooter from "./components/sections/footer";
import backDropHandler from "./events/backDrop";
import texts from "./constants/texts";


function App() {
  return (
      <Router>
        <NavBar/>
        <DropDown/>
        <SideBar/>
        <SignUpModal className="sign-up modal hidden" signUpText={texts.signUp}/>
        <div className="page-mask hidden" onClick={e => backDropHandler(e)} />
        <MobileFooter/>
      </Router>
  );
}

export default App;
