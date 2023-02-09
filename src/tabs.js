export default function addTabs() {

    // console.log("tabs.js");
    
    const tabSection = document.getElementById('tab-section');
    const homeBtn = document.createElement('div');
    const menuBtn = document.createElement('div');
    const contactBtn = document.createElement('div');

    homeBtn.setAttribute("id", "home-button");
    menuBtn.setAttribute("id", "menu-button");
    contactBtn.setAttribute("id", "contact-button");

    homeBtn.textContent = "Home";
    menuBtn.textContent = "Menu";
    contactBtn.textContent = "Contact";

    console.log("tabs.js");

    tabSection.appendChild(homeBtn);
    tabSection.appendChild(menuBtn);
    tabSection.appendChild(contactBtn);

    return tabSection;

}