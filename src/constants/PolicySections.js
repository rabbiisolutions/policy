import ListItem from "../components/listItems";

const preamble = 'Your privacy is important to us. This privacy statement explains the personal data' +
    ' Rabbii Technology Solutions Limited processes, how Rabbii Technology Solutions Limited ' +
    'processes it, and for what purposes.';

const  subSections = [
  'Personal Data We Collect',
  'How We Use The Information you Fill',
  'Third Party Closure',
  'Information Protection',
  'Rights of Users',
  'Changes to our Privacy Policies'
];

const personal = {
  title: subSections[0],
  text: [
      'Rabbii Technology Solutions Limited collects data from you, through our interactions with' +
      ' you and through our services for a variety of purposes described below, including to operate ' +
      'effectively and provide you with the best experiences with our services. You provide some of ' +
      'this data directly, such as when you fill out our registration forms or contact us for support.' +
      ' We get some of it by collecting data about your interactions, use, and experience with our ' +
      'products and communications.We rely on a variety of legal reasons and permissions to process ' +
      'data, including with your consent, a balancing of legitimate interests, necessity to enter ' +
      'into and perform contracts, and compliance with legal obligations, for a variety of' +
      ' purposes described below.',
      'We also may obtain data from third parties. We protect data obtained from third parties' +
      ' according to the practices described in this statement, plus any additional restrictions' +
      ' imposed by the source of the data. These third-party sources vary over time and include:',
      ListItem([{text: 'Publicly-available sources, such as open government databases.', key: 'a', className: 'bold'}]),
      'You have choices when it comes to the services you use and the data you share. When you' +
      ' are asked to provide personal data, you can decline. All our services require some' +
      ' personal data to operate and provide you with the service. If you choose not to provide ' +
      'data necessary to operate and provide you with the service, you may not be able to use that' +
      ' service. Likewise, where we need to collect personal data by law or to enter into or carry' +
      ' out a contract with you, and you do not provide the data, we will not be able to enter into' +
      ' the contract; or if this relates to an existing product you’re using, we may have to suspend' +
      ' or cancel it. We will notify you if this is the case at the time. ',
      'The data we collect can include the following:',
      ListItem([
        {text: 'Your biodata (Includes name, gender and I.D. number)', key: 'a'},
        {text: 'Your contact details (E-mail and phone number)', key: 'b'},
        {text: 'Residential area', key: 'c'},
        {text: 'Education background', key: 'd'},
        {text: 'Work experience', key: 'e'}
      ])
  ]
};

const inforUse = {
  title: subSections[1],
  text: [
      'As stated earlier the information collected is used to provide you and everyone we deal' +
      ' with, with an efficient service.',
      'The data collected from interested teachers is used in verification that you are who you say' +
      ' you are and secondly used to place you to the student that is best fit to you.\n' +
      'Best fit applies as we allocate a teacher to a student and the factors looked at are' +
      ' obtained from the fields that you update. An example is we have to place our teachers to' +
      ' students of the same gender as the teacher because we consider same gender tutoring. We' +
      ' also have to place the teacher to the student who desires to be taught the subjects the' +
      ' teacher updates they are teaching.',
      'The data obtained from our clients is used in ensuring that they are allocated teachers' +
      ' who will give the best possible service the client can get.',
      'Other details obtained are used to facilitate effective communication, secure financial' +
      ' transactions between the client and/or teacher and RABBII, improve our service when need' +
      ' be, offer recommendations to the teacher or client, analyse the company’s performance and' +
      ' if or not we are meeting our objectives.'
  ]
} ;

const thirdParty = {
  title: subSections[2],
  text: [
      'Does RABBII share your personal info?',
      'Information about our teachers and clients is an important part of our business and we are' +
      ' not in any way in the business of selling our teacher’s and client’s personal information ' +
      'to others.\n' +
      'The only way that we can share your personal information is by your consent or when we' +
      ' are required by the law to produce the information.\n',
      'What of business transfers?',
      'As we continue to grow, we might sell or buy other businesses. In such transactions,' +
      ' customer information generally is one of the transferred business assets but will remain ' +
      'subject to the promises made in any pre-existing privacy notice (unless the teacher or' +
      ' client or any other business partner consents otherwise). Also in the unlikely event that' +
      ' RABBII and all of its assets are acquired customer information will be one of the transferred assets.'
  ]
};

const inforProtection = {
  title: subSections[3],
  text: [
      'Any information shared through our website is kept strictly confidential and secure. We' +
      ' strive to follow accepted industry standards as you submit any information from your end to our end.',
      'Furthermore, only authorised persons are permitted to access your personal information.' +
      ' All authorized persons are charged to abide by the security measures set, all privacy and' +
      ' confidential agreements made and rules and guidance of the law.'
  ]
};

const rights = {
  title: subSections[4],
  text: [
      'Our Clients, teachers and any other persons that we deal with have the right to make' +
      ' amendments to their data and to review the info on them.',
    'Right to be Informed',
      'Rabbii will always endeavour to be there to answer you on any question pertaining the use' +
      ' of your personal information. In case of any query please contact us on hr@rabbii.co.ke ' +
      'with the subject QUERIES ON PERSONAL INFORMATION.',
      'Right to Rectification',
      'You have the right to have your personal information rectified if it is inaccurate or ' +
      'incomplete. Please contact us on hr@rabbii.co.ke with the subject RECTIFICATION OF PERSONAL INFORMATION.'
  ]
};

const changes = {
  title: subSections[5],
  text: [
      'We will keep our privacy policy under regular review and we shall place any updates on' +
      ' this webpage.',
      'This Privacy Policy was last updated on 29/11/19.'
  ]
};

const PolicySection = {
  preamble: preamble, subSections: subSections, changes: changes, rights: rights,
  inforProtection: inforProtection, thirdParty: thirdParty, inforUse: inforUse,
  personal: personal
};

export default PolicySection;
