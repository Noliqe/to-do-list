const createPopUp = () => {

let popUp = () => {
    //const content = document.querySelector('.content');
    // popUp
    let x = document.querySelector('body');
    const popUp = document.createElement('div');
    x.appendChild(popUp);
    popUp.classList.add('popUp');
    popUp.setAttribute("id", "popUp");

    //popUp header
    const popUpHeader = document.createElement('div');
    popUp.appendChild(popUpHeader);
    popUpHeader.classList.add('popUpHeader');

    const popUpHeaderText = document.createElement('p');
    popUpHeader.appendChild(popUpHeaderText);
    popUpHeaderText.textContent = "Create a new task";

    const popUpClose = document.createElement('div');
    popUpHeader.appendChild(popUpClose);
    popUpClose.classList.add('popUpClose');
    popUpClose.addEventListener('click', () => {
        removePopUp();
    })

    //popUp sidebar
    const popUpSidebar = document.createElement('div');
    popUp.appendChild(popUpSidebar);
    popUpSidebar.classList.add('popUpSidebar');

    //popUp content
    const popUpContent = document.createElement('div');
    popUp.appendChild(popUpContent);
    popUpContent.classList.add('popUpContent');

    //form
    const form = document.createElement('form');
    popUpContent.appendChild(form);
    //form.setAttribute("action", "#");
    form.setAttribute("id", "form");
    form.classList.add('form');

    const title = document.createElement('input');
    form.appendChild(title);
    title.setAttribute("type", "text");
    title.setAttribute("id", "title");
    title.setAttribute("name", "title");
    title.setAttribute("placeholder", "Title: Pay bills");

    const details = document.createElement('input');
    form.appendChild(details);
    details.setAttribute("type", "text");
    details.setAttribute("id", "details");
    details.setAttribute("name", "details");
    details.setAttribute("placeholder", "Details: e.g internet, phone, rent.");

    const labelDate = document.createElement('label');
    form.appendChild(labelDate);
    labelDate.setAttribute("for", "date");
    labelDate.setAttribute("id", "label");
    labelDate.setAttribute("name", "label");
    labelDate.textContent = 'Due date:'

    const date = document.createElement('input');
    form.appendChild(date);
    date.setAttribute("type", "date");
    date.setAttribute("id", "date");
    date.setAttribute("name", "date");

    const priority = document.createElement('p');
    form.appendChild(priority);
    priority.textContent = 'Priority:'
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
        removePopUp();
    })

    function removePopUp() {
        x = document.querySelector('body');
        let y = document.querySelector('.popUp');
        x.removeChild(y);
    }
}

    return {popUp}
}



export default createPopUp();