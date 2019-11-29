import React from "react";
import ButtonLink from "./ButtonLink";
import signUpHandler from "../events/SignUp";
import texts from "../constants/texts";

const SignUpModal = (props) => {
  return (
      <div className="sign-up-modal hidden">
        <div className="close-icon" onClick={e => signUpHandler(e)}>&#10006;</div>
        <header>
          <div className="sign-up-text">{texts.signUpLong}</div>
        </header>
        <div className="user-title">Clients/Parents</div>
        <div id="client-btns">
          <ButtonLink link="https://forms.gle/y7KTkMDtYCtAywDu6" className="clients-btn" value="Get a Tutor"/>
        </div>
        <div className="user-title">Tutors</div>
        <div id="tutor-btns">
          <ButtonLink link="https://forms.gle/LerPUYib9EJ3yMxr7" className="tutors-btn" value="Non TSC Tutor"/>
          <ButtonLink link="https://forms.gle/ZU8GZrYVPWenL4r19" className="tutors-btn" value="TSC Tutor"/>
          <ButtonLink link="https://forms.gle/CmgUyZCWrnLgsqnC9" className="tutors-btn" value="Skills Tutor"/>
        </div>
        <div className="msg">If you face difficulty in registering call, text or WhatsApp on 0772 915 361</div>
      </div>
  );
};

// Exporting the component
export default SignUpModal;
