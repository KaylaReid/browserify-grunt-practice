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
