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

const todoItemTemplate = (todo) => {
    return `
    <li id="${todo._id}" class="${todo.isCompleted ? 'completed' : ''}">
        <div class="view">
            <input class="toggle" type="checkbox"/>
            <label class="label">
                ${priorityTemplate(todo.priority)}
                ${todo.contents}
            </label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="${todo.contents}" />
    </li>
    `;
};

const renderTitle = (name) => {
    const $userNameTitle = document.querySelector('#user-title strong');
    $userNameTitle.innerText = name;
}

const renderTodo = (todos) => { // 선택된 user의 todoList 내용들을 받아옴.
    const $todoList = document.querySelector('.todo-list');
    $todoList.innerHTML = todos.map((todo) => todoItemTemplate(todo)).join('');
}

export const loadTodo = async (userId) => {
    const user = await getUser(userId);
    // console.log(user.todoList);
    // console.log(user.todoList[0]._id);
    const userTodo = await apiLoadTodo(userId);

    renderTitle(user.name);
    renderTodo(user.todoList);
}