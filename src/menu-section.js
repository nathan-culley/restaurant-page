export default function addMenu() {
    console.log("Display Menu-start");
    const content = document.getElementById('content');
    const title = document.createElement("h1");
    const list = document.createElement("ul");
    const ribeye = document.createElement("li");
    const filet = document.createElement("li");
    const sirloin = document.createElement("li");

    title.textContent = "Our Menu";
    ribeye.textContent= "Ribeye - $40";
    filet.textContent = "Filet Mignon - $60";
    sirloin.textContent = "Sirloin - $30";

    content.appendChild(title);
    content.appendChild(list);
    list.appendChild(ribeye);
    list.appendChild(filet);
    list.appendChild(sirloin);

    console.log(list);
    console.log(content);
    console.log(ribeye);
    return content;
}