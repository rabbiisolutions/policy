import policySections from "./Policy";

const Desktop = () => {
  const sections = [];
  sections.push(
      policySections.PersonalData(), policySections.InfoUse(), policySections.ThirdParty(),
      policySections.InfoProtection(), policySections.UserRights(), policySections.Changes()
  );
  return ( // return the sections list
      sections.map((panel) => (panel))
  );
};

export default Desktop;
