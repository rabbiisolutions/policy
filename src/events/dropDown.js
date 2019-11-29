import overlayActions from "./overlayActions";

const dropDownHandler = e => {
    const target = e.target.parentNode;
    overlayActions(target);
    const navItems = document.getElementsByClassName('nav-item');
    for (let i=0;i<navItems.length;i++) {
      navItems[i].classList.remove('active');
    }
    navItems[1].classList.toggle('active');
};

export default dropDownHandler;
