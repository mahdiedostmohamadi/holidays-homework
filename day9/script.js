localStorage.setItem("name", "Bob");

console.log(localStorage.getItem("name"));
localStorage.removeItem("name");

sessionStorage.setItem("name", "John");
sessionStorage.setItem("name", "Bob");

console.log(sessionStorage.getItem("name"));
sessionStorage.removeItem("name");

document.cookie = "name=Sam; expires=" + new Date(9999, 0, 1).toUTCString();

document.cookie = "lastName=Smith; expires=" + new Date(9999, 0, 1).toUTCString();

console.log(document.cookie);
