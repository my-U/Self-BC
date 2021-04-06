import { apiChangePriority } from '../../api/api.js';
import { getCurrentUser } from '../../util/localStorage.js';
import { loadTodo } from './loadTodo.js';

const selectedPriority = (value) => {
    const priorityContent = {
        0: 'NONE',
        1: 'FIRST',
        2: 'SECOND'
    };
    return priorityContent[value]; 
}

export const changePriority = async ({ target }) => {
    if (!target.classList.contains('chip')) {
        return;
    }

    const currentUser = getCurrentUser();
    const currentTarget = target.closest('li').id;
    const currentPriority = selectedPriority(target.value);
    console.log(currentTarget);

    await apiChangePriority(currentUser, currentTarget, currentPriority);
    loadTodo(currentUser);
}