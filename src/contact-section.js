import Steak from './steak.jpg';

export default function addIntro() {
    
    const content = document.getElementById('content');
    const title = document.createElement("h1");
    const introSection = document.createElement("div");
    const introParagraph = document.createElement("p");
    const introPhoto = document.createElement("img");

    title.textContent = "Bluegrass Steakhouse";
    introParagraph.textContent = "Welcome to the premier steakhouse and fine dining experience in central Kentucky. We source only the finest beef and other ingredients to provide you with a special experience you'll never forget.";
    introPhoto.src = Steak;

    content.appendChild(title);
    content.appendChild(introSection);
    introSection.appendChild(introParagraph);
    introSection.appendChild(introPhoto);

    return content;
}