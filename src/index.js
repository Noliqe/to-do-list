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
        contentElements.removeContent();
        contentElements.selectedInbox();
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
    btnToday.addEventListener('click', () => {
        contentElements.removeContent();
        contentElements.selectedToday();
     })
    //upcoming
    const week = document.createElement('div');
    nav.appendChild(week);
    let iconWeek = document.createElement('div');
    week.appendChild(iconWeek);
    let btnWeek = document.createElement('button');
    week.appendChild(btnWeek);
    btnWeek.setAttribute('id', 'btnUpcoming');
    btnWeek.textContent = 'This week';
    btnWeek.addEventListener('click', () => {
        contentElements.removeContent();
        contentElements.selectedWeek();
     })
}
sidebarElements();

// create content for selected elements on sidebar
const contentElements = (function () {
    let selectedInbox = () => {
        const content = document.querySelector('.sub-content');

        const contentClass = document.createElement('div');
        content.appendChild(contentClass);
        contentClass.classList.add('contentClass');

        const inboxTitle = document.createElement('h1');
        contentClass.appendChild(inboxTitle);
        inboxTitle.textContent = 'Inbox';

        const addTaskBtn = document.createElement('button');
        contentClass.appendChild(addTaskBtn);
        addTaskBtn.textContent = "+ Add Task";
    }
    let selectedToday = () => {
        const content = document.querySelector('.sub-content');

        const contentClass = document.createElement('div');
        content.appendChild(contentClass);
        contentClass.classList.add('contentClass');

        const todayTitle = document.createElement('h1');
        contentClass.appendChild(todayTitle);
        todayTitle.textContent = 'Today';
    }
    let selectedWeek = () => {
        const content = document.querySelector('.sub-content');

        const contentClass = document.createElement('div');
        content.appendChild(contentClass);
        contentClass.classList.add('contentClass');

        const weekTitle = document.createElement('h1');
        contentClass.appendChild(weekTitle);
        weekTitle.textContent = 'This week';
    }
    function removeContent () {
        let content = document.querySelector('.sub-content');
        let x = document.querySelector('.contentClass');
        if (document.querySelector('.contentClass') === null) {
            return;
        } else {
        content.removeChild(x);
        }
    }
    return {selectedInbox,
            selectedToday,
            selectedWeek,
            removeContent}
})();

