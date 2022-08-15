const createTask = () => {

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
    form.setAttribute("action", "#");
    form.classList.add('form');

    const inputForm = document.createElement('input');
    form.appendChild(inputForm);
    inputForm.setAttribute("type", "text");
    inputForm.setAttribute("id", "inputForm");
    inputForm.setAttribute("name", "inputForm");
    inputForm.setAttribute("placeholder", "Title: Pay bills");

    const textAreaForm = document.createElement('input');
    form.appendChild(textAreaForm);
    textAreaForm.setAttribute("type", "text");
    textAreaForm.setAttribute("id", "details");
    textAreaForm.setAttribute("name", "details");
    textAreaForm.setAttribute("placeholder", "Details: e.g internet, phone, rent.");

    const labelDate = document.createElement('label');
    form.appendChild(labelDate);
    labelDate.setAttribute("for", "date");
    labelDate.setAttribute("id", "label");
    labelDate.setAttribute("name", "label");
    labelDate.textContent = 'Due date:'

    const dateForm = document.createElement('input');
    form.appendChild(dateForm);
    dateForm.setAttribute("type", "date");
    dateForm.setAttribute("id", "date");
    dateForm.setAttribute("name", "date");

    const labelPriority = document.createElement('p');
    form.appendChild(labelPriority);
    labelPriority.textContent = 'Priority:'
    labelPriority.classList.add('priority');

    const btnLow = document.createElement('p');
    form.appendChild(btnLow);
    btnLow.setAttribute("id", "btnLow");
    btnLow.textContent = 'Low';
    btnLow.classList.add('btnLow');

    const btnMedium = document.createElement('p');
    form.appendChild(btnMedium);
    btnMedium.setAttribute("id", "btnMedium");
    btnMedium.textContent = 'Medium';
    btnMedium.classList.add('btnMedium');

    const btnHigh = document.createElement('p');
    form.appendChild(btnHigh);
    btnHigh.setAttribute("id", "btnHigh");
    btnHigh.textContent = 'High';
    btnHigh.classList.add('btnHigh');

    const submit = document.createElement('input');
    form.appendChild(submit);
    submit.setAttribute("type", "submit");
    submit.setAttribute("id", "submit");
    submit.value = 'Add task';

    function removePopUp() {
        x = document.querySelector('body');
        let y = document.querySelector('.popUp');
        x.removeChild(y);
    }

}
    return {popUp}
}

export default createTask();