import InfoProtection from "./policy/InfoProtection";
import Changes from "./policy/Changes";
import ThirdParty from "./policy/ThirdParty";
import UserRights from "./policy/UsersRights";
import InfoUse from "./policy/InfoUse";
import PersonalData from "./policy/PersonalData";

const Desktop = () => {
  const sections = [];
  sections.push(
      PersonalData(), InfoUse(), ThirdParty(), InfoProtection(), UserRights(), Changes()
  );
  return ( // return the sections list
      sections.map((panel) => (panel))
  );
};

export default Desktop;
