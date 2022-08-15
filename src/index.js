import './style.css';
import createTask from './task.js';

class task {
    constructor(title, detail, date, priority) {
        this.title = title;
        this.detail = detail;
        this.date = date;
        this.priority = priority;
    }
}

let task1 = new task('jan', 'alleman', 'date', 'prio');

const add = () => {
    let buttonAdd = document.getElementById('buttonAdd');
    buttonAdd.addEventListener('click', () => {
       return createTask.popUp();
    })
}
//add();
createTask.popUp()