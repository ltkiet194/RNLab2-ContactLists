import 'react-native-get-random-values';
import {v4} from 'uuid';
const mapContact = contact => {
    const {name, picture, phone, cell, email} = contact;
    return {
        id:v4(),
        name: name.first+ " "+name.last,
        avatar:picture.large,
        phone,
        cell,
        email,
        favorite: Math.random() > 0.5,
    };
}

const fetchContacts = async () => {
    const response = await fetch('https://randomuser.me/api/?results=20&seed=fullstackio');
    const contactData = await response.json();
    return contactData.results.map(mapContact);
}
const fetchUserContacts = async () => {
    const response = await fetch('https://randomuser.me/api/?seed=fullstackio');
    const usertData = await response.json();
    return mapContact(usertData.results[0]);
}
const fetchRandomContacts = async () => {
    const response = await fetch('https://randomuser.me/api/');
    const usertData = await response.json();
    return mapContact(usertData.results[0]);
}

export {fetchContacts,fetchUserContacts,fetchRandomContacts};