(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

function createContact(name, phone, address){
    return `<h2>${name}</h2>
            <h3>${phone}</h3>
            <p>${address}</p>`;
}

module.exports = createContact;
},{}],2:[function(require,module,exports){
"use strict";
let contacts = [
    {
        name: "Kayla Reid",
        phone: "615-947-6659",
        address: "123 Old Nash, Nashville TN 37209"
    },
    {
        name: "Ricky Bruner",
        phone: "615-574-0985",
        address: "567 Old Nash, Nashville TN 37209"
    },
    {
        name: "Heather Jones",
        phone: "615-123-4567",
        address: "3942 Old Green Hill Court, Nashville TN 37215"
    },
]

localStorage.setItem("contacts", JSON.stringify(contacts));

function getContacts(){
    return JSON.parse(localStorage.getItem("contacts"));
}
 module.exports =  getContacts;
},{}],3:[function(require,module,exports){

},{}],4:[function(require,module,exports){
"use strict";
let createContact = require("./Contact");
let getContactCollection = require("./ContactCollection");

function listContacts (){
getContactCollection().forEach(contact => {
    let contactComponent = createContact(contact.name, contact.phone, contact.address)
    wrtieContactsToDom(contactComponent);
});
}

function wrtieContactsToDom(contact){
    document.querySelector("#contactList").innerHTML += contact;
}

module.exports = listContacts;

},{"./Contact":1,"./ContactCollection":2}],5:[function(require,module,exports){
"use strict";
let contactForm = require("./ContactForm");
let listContacts = require("./ContactList");

listContacts();

},{"./ContactForm":3,"./ContactList":4}]},{},[5]);
