const sidebarElements = () => {


const nav = document.querySelector('.nav')

const inbox = document.createElement('div');
nav.appendChild(inbox);
let iconInbox = document.createElement('div');
inbox.appendChild(iconInbox);
let btnInbox = document.createElement('button');
inbox.appendChild(btnInbox);
btnInbox.setAttribute('id', 'btnInbox');
btnInbox.textContent = 'Inbox';
btnInbox.classList.add('btnInbox');

const today = document.createElement('div');
nav.appendChild(today);
let iconToday = document.createElement('div');
today.appendChild(iconToday);
let textToday = document.createElement('p');
today.appendChild(textToday);
textToday.textContent = 'Today';

const upcoming = document.createElement('div');
nav.appendChild(upcoming);
let iconUpcoming = document.createElement('div');
upcoming.appendChild(iconUpcoming);
let textUpcoming = document.createElement('p');
upcoming.appendChild(textUpcoming);
textUpcoming.textContent = 'Upcoming';


}

export default sidebarElements();