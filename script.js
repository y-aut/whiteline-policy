const user = ["help", "whiteline", "app"].join(".");
const domain = ["gmail", "com"].join(".");

const email = `${user}@${domain}`;

const emailElement = document.getElementById("email");
emailElement.innerHTML = `<a href="mailto:${email}">${email}</a>`;
