import { apiLoadTodo } from '../../api/api.js';

const todoItemTemplate = ({todo}) => {
    return `
    <li>
        <div class="view">
            <input class="toggle" type="checkbox" />
            <label class="label">
                <select class="chip select">
                    <option value="0" selected>순위</option>
                    <option value="1">1순위</option>
                    <option value="2">2순위</option>
                </select>
                ${todo}
            </label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="${todo}" />
    </li>
    `;
};

export const loadTodo = async (userId) => {
    const todos = await apiLoadTodo(userId);
    const $todoList = document.querySelector('.todo-list');

    const todoItem = todos.map((todoList) => todoItemTemplate(todoList));
    $todoList.innerHTML += todoItem;
}