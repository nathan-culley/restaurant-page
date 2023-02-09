export default function addContact() {
    
    const content = document.getElementById('content');
    const title = document.createElement("h1");
    const list = document.createElement("ul");
    const phone = document.createElement("li");
    const email = document.createElement("li");
    const address = document.createElement("li");

    title.textContent = "Contact Us";
    phone.textContent = "1-800-123-4567";
    email.textContent = "contact@bluegrasssteakhouse.com";
    address.textContent = "123 Main Street, Louisville, KY 98765"

    content.appendChild(title);
    content.appendChild(list);
    list.appendChild(phone);
    list.appendChild(email);
    list.appendChild(address);

    return content;
}