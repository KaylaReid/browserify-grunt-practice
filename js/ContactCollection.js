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