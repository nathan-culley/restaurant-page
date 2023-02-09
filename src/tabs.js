export default function addTabs() {

    // console.log("tabs.js");
    
    const tabSection = document.getElementById('tab-section');
    const homeBtn = document.createElement('button');
    const menuBtn = document.createElement('button');
    const contactBtn = document.createElement('button');

    homeBtn.setAttribute("id", "home-btn");
    menuBtn.setAttribute("id", "menu-btn");
    contactBtn.setAttribute("id", "contact-btn");

    homeBtn.textContent = "Home";
    menuBtn.textContent = "Menu";
    contactBtn.textContent = "Contact";

    console.log("tabs.js");

    tabSection.appendChild(homeBtn);
    tabSection.appendChild(menuBtn);
    tabSection.appendChild(contactBtn);

    return tabSection;

}