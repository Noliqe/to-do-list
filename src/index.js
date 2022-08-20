import './style.css';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';
import getISOWeek from 'date-fns/getISOWeek';
import isThisISOWeek from 'date-fns/isThisISOWeek';
import parseISO from 'date-fns/parseISO'


class task {
    constructor(title, detail, date, priority) {
        this.title = title;
        this.detail = detail;
        this.date = date;
        this.priority = priority;
    }
    makeTask() {
        const taskContent = document.querySelector('.contentClass');
    
        const taskContainer = document.createElement('div');
        taskContent.appendChild(taskContainer);
        taskContainer.classList.add('taskContainer');
    
        const taskTitle = document.createElement('p');
        taskContainer.appendChild(taskTitle);
        taskTitle.textContent = this.title;
    
        const taskDetail = document.createElement('p');
        taskContainer.appendChild(taskDetail);
        taskDetail.textContent = this.detail;
    
        const taskDate = document.createElement('p');
        taskContainer.appendChild(taskDate);
        taskDate.setAttribute('id', 'taskDate');
        taskDate.textContent = this.date;
        //taskToday();

        if (this.priority === 'Low') {
            taskContainer.setAttribute('style', "border: 2px solid green");
        } else if (this.priority === 'Medium') {
            taskContainer.setAttribute('style', "border: 2px solid orange");
        } else if (this.priority === 'High') {
            taskContainer.setAttribute('style', "border: 2px solid red");
        } 
        }
}


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
        makeLocalTask();
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
        taskToday();
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
        taskWeek();
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
        addTaskBtn.addEventListener('click', () => {
            form();
         })
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

const form = () => {

    const content = document.querySelector('.sub-content');

    //form
    const form = document.createElement('form');
    content.appendChild(form);
    form.setAttribute("id", "form");
    form.classList.add('form');
    // input title
    const title = document.createElement('input');
    form.appendChild(title);
    title.setAttribute("type", "text");
    title.setAttribute("id", "title");
    title.setAttribute("placeholder", "Title: e.g. Pay bills");
    // input detail
    const detail = document.createElement('input');
    form.appendChild(detail);
    detail.setAttribute("type", "text");
    detail.setAttribute("id", "detail");
    detail.setAttribute("placeholder", "Details: e.g internet, phone, rent.");
    // input date
    const labelDate = document.createElement('p');
    form.appendChild(labelDate);
    labelDate.textContent = 'Date:'
    labelDate.classList.add('labelDate');

    const date = document.createElement('input');
    form.appendChild(date);
    date.setAttribute("type", "date");
    date.setAttribute("id", "date");
    // input priority
    const priority = document.createElement('p');
    form.appendChild(priority);
    priority.textContent = 'Priority:'
    priority.setAttribute("id", "priority");
    priority.classList.add('priority');
    priority.value = '';

    const btnLow = document.createElement('input');
    priority.appendChild(btnLow);
    btnLow.setAttribute("type", "button");
    btnLow.setAttribute("id", "btnLow");
    btnLow.value = 'Low';
    btnLow.classList.add('btnLow');
    btnLow.addEventListener('click', () => {
        btnMedium.setAttribute("style", "border: 2px solid gray");
        btnHigh.setAttribute("style", "border: 2px solid gray");
        btnLow.setAttribute("style", "border: 2px solid green");
        priority.value = 'Low';
    })
    const btnMedium = document.createElement('input');
    priority.appendChild(btnMedium);
    btnMedium.setAttribute("type", "button");
    btnMedium.setAttribute("id", "btnMedium");
    btnMedium.value = 'Medium';
    btnMedium.classList.add('btnMedium');
    btnMedium.addEventListener('click', () => {
        btnHigh.setAttribute("style", "border: 2px solid gray");
        btnLow.setAttribute("style", "border: 2px solid gray");
        btnMedium.setAttribute("style", "border: 2px solid blue");
        priority.value = 'Medium';
    })
    const btnHigh = document.createElement('input');
    priority.appendChild(btnHigh);
    btnHigh.setAttribute("type", "button");
    btnHigh.setAttribute("id", "btnHigh");
    btnHigh.value = 'High';
    btnHigh.classList.add('btnHigh');
    btnHigh.addEventListener('click', () => {
        btnLow.setAttribute("style", "border: 2px solid gray");
        btnMedium.setAttribute("style", "border: 2px solid gray");
        btnHigh.setAttribute("style", "border: 2px solid red");
        priority.value = 'High';
    })
    const submit = document.createElement('input');
    form.appendChild(submit);
    submit.setAttribute("type", "submit");
    submit.setAttribute("id", "submit");
    submit.value = 'Add task';
    submit.addEventListener('click', () => {
        event.preventDefault();
        getValueForm();
        local();
        removeForm();
    })
}

const removeForm = () => {
    const content = document.querySelector('.sub-content');
    let x = document.querySelector('#form');
    content.removeChild(x);
}

const getValueForm = () => {
    let newTask = new task(title.value, detail.value, date.value, priority.value);
    newTask.makeTask();
    console.log(newTask);
}

let localArray = JSON.parse(localStorage.getItem("task") || "[]");

const local = () => {
    let newTask = new task(title.value, detail.value, date.value, priority.value);
    localArray.push(newTask);
    localStorage.setItem('task', JSON.stringify(localArray));
}


let getArray = JSON.parse(localStorage.getItem("task"));

// loop through array length and map each item. Create new task.
const makeLocalTask = () => {
    let x = 0;
    for (let i = 0; i < getArray.length; i++) {
        x++;
        let slice = getArray.slice(i, x);
        const title = slice.map(a => a.title);
        const detail = slice.map(a => a.detail);
        const date = slice.map(a => a.date);
        const priority = slice.map(a => a.priority);
        // priority array item to string
        const stringPriority = priority.toString();
        
        let localTask = new task(title, detail, date, stringPriority);
        localTask.makeTask();
    }
}

// if task contains today's date, create task.
const taskToday = () => {
    let x = 0;
    let today = format(new Date(), "yyyy-MM-dd");
    for (let i = 0; i < getArray.length; i++) {
        x++;
        let slice = getArray.slice(i, x);
        const date = slice.map(a => a.date);
        const stringDate = date.toString();
        if (today === stringDate) {
            const title = slice.map(a => a.title);
            const detail = slice.map(a => a.detail);
            const priority = slice.map(a => a.priority);
            const stringPriority = priority.toString();
        
            let localTask = new task(title, detail, date, stringPriority);
            localTask.makeTask();
        }

    }

}

// if task contains this week date, create task.
const taskWeek = () => {
    let x = 0;
    for (let i = 0; i < getArray.length; i++) {
        x++;
        let slice = getArray.slice(i, x);
        const date = slice.map(a => a.date);
        const stringDate = date.toString();
        const result = isThisISOWeek(parseISO(stringDate));
        if (result === true) {
            const title = slice.map(a => a.title);
            const detail = slice.map(a => a.detail);
            const priority = slice.map(a => a.priority);
            const stringPriority = priority.toString();
        
            let localTask = new task(title, detail, date, stringPriority);
            localTask.makeTask();
        }

    }

}
