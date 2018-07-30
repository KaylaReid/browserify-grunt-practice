"use strict";

function createContact(name, phone, address){
    return `<h2>${name}</h2>
            <h3>${phone}</h3>
            <p>${address}</p>`;
}

module.exports = createContact;