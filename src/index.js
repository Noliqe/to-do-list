import './style.css';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';
import getISOWeek from 'date-fns/getISOWeek';
import isThisISOWeek from 'date-fns/isThisISOWeek';
import parseISO from 'date-fns/parseISO'

let getArray = JSON.parse(localStorage.getItem("task"));

function randomId () {
   let x = Math.random().toString(36).slice(2, 10);
    return x
}

class task {
    constructor(projectTitle, title, detail, date, priority, id) {
        this.projectTitle = projectTitle;
        this.title = title;
        this.detail = detail;
        this.date = date;
        this.priority = priority;
        this.id = id;
    }
    makeTask() {
        const taskContent = document.querySelector('.contentClass');
    
        const taskHeadcontainer = document.createElement('div');
        taskContent.appendChild(taskHeadcontainer);
        taskHeadcontainer.classList.add('taskHeadcontainer');

        const taskContainer = document.createElement('div');
        taskHeadcontainer.appendChild(taskContainer);
        taskContainer.classList.add('taskContainer');
    
        const taskTitle = document.createElement('p');
        taskContainer.appendChild(taskTitle);
        taskTitle.textContent = this.title;
        taskTitle.classList.add('taskTitle');
    
        const expandBtn = document.createElement('button');
        taskContainer.appendChild(expandBtn);
        expandBtn.classList.add('expandBtn');
        expandBtn.addEventListener('click', () => {
            if (taskDetail.style.display === "block") {
                taskDetail.style.display = "none";
                taskContainer.style.height = '25px';
                expandBtn.style.transform = "rotate(0deg)";
            } else {
                taskDetail.style.display = "block";
                taskContainer.style.height = '50px';
                expandBtn.style.transform = "rotate(90deg)";
            }
        })

        const closeBtn = document.createElement('button');
        taskContainer.appendChild(closeBtn);
        closeBtn.classList.add('closeBtn');
        closeBtn.addEventListener('click', () => {
            deleteItem(closeBtn);
            deleteLocalStorage(this);
        })

        const taskDetail = document.createElement('p');
        taskContainer.appendChild(taskDetail);
        taskDetail.textContent = this.detail;
        taskDetail.classList.add('taskDetail');
        taskDetail.setAttribute('style', 'display: none');

        
    
        const taskDate = document.createElement('p');
        taskHeadcontainer.appendChild(taskDate);
        taskDate.setAttribute('id', 'taskDate');
        taskDate.classList.add('taskDate');
        taskDate.textContent = this.date;

        if (this.priority === 'Low') {
            taskContainer.setAttribute('style', "border: 2px solid green");
        } else if (this.priority === 'Medium') {
            taskContainer.setAttribute('style', "border: 2px solid orange");
        } else if (this.priority === 'High') {
            taskContainer.setAttribute('style', "border: 2px solid red");
        } 
        }
        
}

function deleteItem(e) {
    e.parentElement.parentElement.remove();
}

function deleteLocalStorage(e) {
    let eArray = [];
    eArray.push(e);
    let getId = eArray.map(a => a.id);
    let getStringId = getId.toString();
    let x = 0;
    let z = 0;
    getArray = JSON.parse(localStorage.getItem("task"));

    for (let i = 0; i < getArray.length; i++) {
        x++;
        let slice = getArray.slice(i, x);
        const arrayId = slice.map(a => a.id);
        const stringId = arrayId.toString();
        if (stringId === getStringId) {
            // remove array with Id from array
            const removed = getArray.splice(i, 1);
            localStorage.setItem('task', JSON.stringify(getArray));
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
    // this week
    const week = document.createElement('div');
    nav.appendChild(week);
    let iconWeek = document.createElement('div');
    week.appendChild(iconWeek);
    let btnWeek = document.createElement('button');
    week.appendChild(btnWeek);
    btnWeek.setAttribute('id', 'btnWeek');
    btnWeek.textContent = 'This week';
    btnWeek.addEventListener('click', () => {
        contentElements.removeContent();
        contentElements.selectedWeek();
        taskWeek();
     })
    // projects
    const projects = document.createElement('p');
    nav.appendChild(projects);
    projects.classList.add('projects');
    projects.setAttribute('id', 'projects');
    projects.textContent = 'Projects';

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

const form = (projectTitle) => {

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
    // make randomId
    let makeId = randomId();

    const submit = document.createElement('input');
    form.appendChild(submit);
    submit.setAttribute("type", "submit");
    submit.setAttribute("id", "submit");
    submit.value = 'Add task';
    submit.addEventListener('click', () => {
        event.preventDefault();
        getValueForm(projectTitle, makeId);
        local(projectTitle, makeId);
        removeForm();
    })
}

const removeForm = () => {
    const content = document.querySelector('.sub-content');
    let x = document.querySelector('#form');
    content.removeChild(x);
}

const getValueForm = (projectTitle, makeId) => {
    let newTask = new task(projectTitle, title.value, detail.value, date.value, priority.value, makeId);
    newTask.makeTask();
}

let localArray = JSON.parse(localStorage.getItem("task") || "[]");

const local = (projectTitle, makeId) => {
    localArray = JSON.parse(localStorage.getItem("task") || "[]");
    let newTask = new task(projectTitle, title.value, detail.value, date.value, priority.value, makeId);
    localArray.push(newTask);
    localStorage.setItem('task', JSON.stringify(localArray));
}



// loop through array length and map each item. Create new task.
const makeLocalTask = (projectTitle) => {
    let x = 0;
    getArray = JSON.parse(localStorage.getItem("task"));
    for (let i = 0; i < getArray.length; i++) {
        x++;
        let slice = getArray.slice(i, x);
        const title = slice.map(a => a.title);
        const detail = slice.map(a => a.detail);
        const date = slice.map(a => a.date);
        const priority = slice.map(a => a.priority);
        const taskId = slice.map(a => a.id);
        // priority array item to string
        const stringPriority = priority.toString();
        
        let localTask = new task(projectTitle, title, detail, date, stringPriority, taskId);
        localTask.makeTask();
    }
}

// if task contains today's date, create task.
const taskToday = () => {
    let x = 0;
    getArray = JSON.parse(localStorage.getItem("task"));
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
            const taskId = slice.map(a => a.id);
            const stringPriority = priority.toString();
        
            let localTask = new task('', title, detail, date, stringPriority, taskId);
            localTask.makeTask();
        }

    }
}

// if task contains this week date, create task.
const taskWeek = () => {
    let x = 0;
    getArray = JSON.parse(localStorage.getItem("task"));
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
            const taskId = slice.map(a => a.id);
            const stringPriority = priority.toString();
        
            let localTask = new task('', title, detail, date, stringPriority, taskId);
            localTask.makeTask();
        }

    }

}


const addProject = () => {
    const projects = document.querySelector('.projects');
    const btnProjects = document.querySelector('.btnProjects');

    projects.removeChild(btnProjects);

    //form
    const form = document.createElement('form');
    projects.appendChild(form);
    form.setAttribute("id", "projectForm");
    form.classList.add('projectForm');
    // project title
    const addProjectTitle = document.createElement('input');
    form.appendChild(addProjectTitle);
    addProjectTitle.setAttribute("type", "text");
    addProjectTitle.setAttribute("id", "addProjectTitle");
    addProjectTitle.setAttribute("placeholder", "Project title");
    // project submit
    const submit = document.createElement('input');
    form.appendChild(submit);
    submit.setAttribute("type", "submit");
    submit.setAttribute("id", "projectSubmit");
    submit.value = 'Add';
    submit.addEventListener('click', () => {
        event.preventDefault();
        getValueProjectForm();
        removeProjectForm();
    })
    // project cancel
    const cancel = document.createElement('button');
    form.appendChild(cancel);
    cancel.setAttribute("id", "projectCancel");
    cancel.textContent = 'Cancel';
    cancel.addEventListener('click', () => {
        removeProjectForm();
    })
}

const getValueProjectForm = () => {
    let newProject = new project(addProjectTitle.value);
    let projectName = addProjectTitle.value;
    projectArray.push(projectName);
    localStorage.setItem('project', JSON.stringify(projectArray));
    newProject.makeProject();
}

const removeProjectForm = () => {
    const projects = document.querySelector('.projects');
    const form = document.querySelector('.projectForm');
    projects.removeChild(form);
    // make new button
    const btnProjects = document.createElement('button');
    projects.appendChild(btnProjects);
    btnProjects.classList.add('btnProjects');
    btnProjects.setAttribute('id', 'btnProjects');
    btnProjects.textContent = '+ add project';
    btnProjects.addEventListener('click', () => {
        addProject();
     })
}

// if project contains projectTitle, make task.
const projectTask = (name) => {
    let x = 0;
    getArray = JSON.parse(localStorage.getItem("task"));
    for (let i = 0; i < getArray.length; i++) {
        x++;
        let slice = getArray.slice(i, x);
        const projectTitle = slice.map(a => a.projectTitle);
        const stringProjectTitle = projectTitle.toString();
        if (stringProjectTitle === name) {
            const title = slice.map(a => a.title);
            const detail = slice.map(a => a.detail);
            const date = slice.map(a => a.date);
            const priority = slice.map(a => a.priority);
            const taskId = slice.map(a => a.id);
            // priority array item to string
            const stringPriority = priority.toString();
        
            let localTask = new task(stringProjectTitle, title, detail, date, stringPriority, taskId);
            localTask.makeTask();
        }
    }
}

class project {
    constructor(title) {
        this.id = title;
        this.title = title;
    }
    makeProject() {
        const projects = document.querySelector('.projects');

        const projectContainer = document.createElement('div');
        projects.appendChild(projectContainer);
        projectContainer.classList.add('projectContainer');

        let btnProject = document.createElement('button');
        projectContainer.appendChild(btnProject);
        btnProject.setAttribute('id', this.id);
        btnProject.textContent = this.title;
        btnProject.classList.add('btnProject');
        btnProject.addEventListener('click', () => {
            contentElements.removeContent();
            this.makeContent();
            projectTask(this.title);
        })
    }
    makeContent() {
        const content = document.querySelector('.sub-content');
    
        const contentClass = document.createElement('div');
        content.appendChild(contentClass);
        contentClass.classList.add('contentClass');
    
        const projectTitle = document.createElement('h1');
        contentClass.appendChild(projectTitle);
        projectTitle.textContent = this.title;
    
        const addTaskBtn = document.createElement('button');
        contentClass.appendChild(addTaskBtn);
        addTaskBtn.textContent = "+ Add Task";
        addTaskBtn.addEventListener('click', () => {
                form(this.title);
        })
    }
}

const displayProjects = (stringProject) => {
    let newProject = new project(stringProject);
    newProject.makeProject();
}

let projectArray = JSON.parse(localStorage.getItem("project") || "[]");

const getProjects = () => {
    let x = 0;
    for (let i = 0; i < projectArray.length; i++) {
        x++;
        let slice = projectArray.slice(i, x);
        if (slice !== '') {
            const stringProject = slice.toString();
            displayProjects(stringProject);
        }
    }
}
getProjects();


const addProjectBtn = () => {

    const projects = document.querySelector('.projects')

    const btnProjects = document.createElement('button');
    projects.appendChild(btnProjects);
    btnProjects.classList.add('btnProjects');
    btnProjects.setAttribute('id', 'btnProjects');
    btnProjects.textContent = '+ add project';
    btnProjects.addEventListener('click', () => {
        addProject();
     })
}

addProjectBtn();