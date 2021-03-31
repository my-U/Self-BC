import { addTodo } from './addTodo.js';

export const todoList = () => {
    const $todoInput = document.querySelector('.new-todo');

    $todoInput.addEventListener('keyup', addTodo);
}