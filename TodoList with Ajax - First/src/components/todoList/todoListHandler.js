import { addTodo } from './addTodo.js';
import { changePriority } from './changePriority.js';
import { deleteTodo } from './deleteTodo.js';
import { editTodo } from './editTodo.js';
import { deleteAllTodo } from './deleteAllTodo.js';

export const todoList = () => {
    const $todoInput = document.querySelector('.new-todo');
    const $todoList = document.querySelector('.todo-list');
    const $countContainer = document.querySelector('.count-container');

    $todoInput.addEventListener('keyup', addTodo);
    $todoList.addEventListener('change', changePriority);
    $todoList.addEventListener('click', deleteTodo);
    $todoList.addEventListener('dblclick', editTodo);
    $countContainer.addEventListener('click', deleteAllTodo);
    
}