import './style.css';
//import createPopUp from './task.js';

class task {
    constructor(title, detail, date, priority) {
        this.title = title;
        this.detail = detail;
        this.date = date;
        this.priority = priority;
    }
}

let task1 = new task('jan', 'alleman', 'date', 'prio');

const sidebarElements = () => {

    const nav = document.querySelector('.nav')
    // inbox
    const inbox = document.createElement('div');
    nav.appendChild(inbox);
    let iconInbox = document.createElement('div');
    inbox.appendChild(iconInbox);
    let btnInbox = document.createElement('button');
    inbox.appendChild(btnInbox);
    btnInbox.setAttribute('id', 'btnInbox');
    btnInbox.textContent = 'Inbox';
    btnInbox.classList.add('btnInbox');
    btnInbox.addEventListener('click', () => {
        return console.log('hello');
    })
    // today
    const today = document.createElement('div');
    nav.appendChild(today);
    let iconToday = document.createElement('div');
    today.appendChild(iconToday);
    let btnToday = document.createElement('button');
    today.appendChild(btnToday);
    btnToday.setAttribute('id', 'btnToday');
    btnToday.textContent = 'Today';
    //upcoming
    const upcoming = document.createElement('div');
    nav.appendChild(upcoming);
    let iconUpcoming = document.createElement('div');
    upcoming.appendChild(iconUpcoming);
    let btnUpcoming = document.createElement('button');
    upcoming.appendChild(btnUpcoming);
    btnUpcoming.setAttribute('id', 'btnUpcoming');
    btnUpcoming.textContent = 'Upcoming';
    
    
}
sidebarElements();