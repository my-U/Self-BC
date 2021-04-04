import { apiLoadTodo, getUser } from '../../api/api.js';
import { ALL } from '../../constant/todo.js';

const priorityTemplate = (priority) => {
    const priorityClassList = {
        FIRST: 'primary',
        SECOND: 'secondary',
        NONE: ''
    };

    return `
        <select class="chip select ${priorityClassList[priority]}">
            <option value="0" ${priority === 'NONE' && 'selected'}>순위</option>
            <option value="1" ${priority === 'FIRST' && 'selected'}>1순위</option>
            <option value="2" ${priority === 'SECOND' && 'selected'}>2순위</option>
        </select>`
}

const todoItemTemplate = ({_id, isCompleted, contents, priority}) => {
    return `
    <li id="${_id}" class="${isCompleted ? 'completed' : ''}">
        <div class="view">
            <input class="toggle" type="checkbox"/>
            <label class="label">
                ${priorityTemplate(priority)}
                ${contents}
            </label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="${contents}" />
    </li>
    `;
};

const renderTitle = (name) => {
    const $userNameTitle = document.querySelector('#user-title strong');
    $userNameTitle.innerText = name;
}

const renderTodo = (todos) => { // 선택된 user의 todoList 내용들을 받아옴.
    const $todoList = document.querySelector('.todo-list');
    $todoList.innerHTML = todos.map((_id, isCompleted, contents, priority) => todoItemTemplate(_id, contents, isCompleted, priority));
}

export const loadTodo = async (userId) => {
    const user = await getUser(userId);
    const userTodo = await apiLoadTodo(userId);

    renderTitle(user.name);
    renderTodo(userTodo);
}