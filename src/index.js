import addTabs from './tabs.js';
import addIntro from './intro-content.js';
import addMenu from './menu-section.js';
import addContact from './contact-section.js';
import './style.css';

function displayTabs() {
    const tabSection = document.getElementById('tab-section');
    tabSection.HTMLcontent = addTabs();
    return tabSection;
    
}

function displayHome() {
    const content = document.getElementById('content');
    content.HTMLcontent = addIntro();
    //console.log(content);
    return content;
}

function displayMenu() {
    const content = document.getElementById('content');
    content.HTMLcontent = addMenu();
    //console.log(content);
    return content;
}

function displayContact() {
    const content = document.getElementById('content');
    content.HTMLcontent = addContact();
    //console.log(content);
    return content;
}

displayTabs();
displayHome();

