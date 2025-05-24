// 1. Prompt for favorite hobby and display it in an alert
let hobby = prompt("რა არის შენი ჰობი?");
alert("შენი საყვარელი ჰობი არის: " + hobby);

// 2. Ask for first and last name, concatenate and display in an alert
let firstName = prompt("შენი სახელი შეიყვანე:");
let lastName = prompt("შენი გვარი შეიყვანე:");
alert("შენი სახელი და გვარი არის: " + firstName + " " + lastName);

// 3. Prompt for a message and update a <p> element
let userMessage = prompt("შეიყვანე პარაგრაფი:");
document.querySelector("p").textContent = userMessage;

// 4. Prompt for favorite emoji and display it in an alert with a thank you message
let favoriteEmoji = prompt("რა არის შენი საყვარელი ემოჯი?");
alert("მადლობა!შენი საყვარელი ემოჯი არის: " + favoriteEmoji);

// 5. Prompt for a word and set it as the page’s title
let pageTitle = prompt("შეიყვანე გვერდის სათაური:");
document.title = pageTitle;
