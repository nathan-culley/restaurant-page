import addIntro from './intro-content.js';
import './style.css';


function write() {
    const content = document.getElementById('content');
    content.HTMLcontent = addIntro();
    return content;
}

write();