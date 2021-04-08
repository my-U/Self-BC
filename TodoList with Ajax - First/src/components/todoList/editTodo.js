import { apiEditTodo } from '../../api/api.js';
import { getCurrentUser } from '../../util/localStorage.js';
import { loadTodo } from './loadTodo.js';

export const editTodo = ({target}) => {
    if(!target.classList.contains('label')) { 
        return; 
    }
    
    const todoItem = target.closest('li');
    const editInput = todoItem.querySelector('.edit');

    if(!todoItem.classList.contains('editing')) {
        todoItem.classList.toggle('editing');
        editInput.focus();
    }
    
    const currentUser = getCurrentUser();
    const currentTarget = todoItem.id;

    editInput.addEventListener('keyup', async (e) => {
        if(e.key === 'Enter') {
            todoItem.classList.toggle('editing');
            const currentContent = editInput.value;
            target.textContent = currentContent;

            await apiEditTodo(currentUser, currentTarget, currentContent);
            loadTodo(currentUser);
        }
        else if(e.key === 'Escape') {
            todoItem.classList.toggle('editing');
            loadTodo(currentUser);
        }
    });
}