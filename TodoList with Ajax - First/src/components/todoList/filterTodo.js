import { getCurrentUser } from '../../util/localStorage.js';
import { loadTodo } from './loadTodo.js';

const selectedTarget = (target) => {
    const $a = target.closest('ul').querySelectorAll('a');
    
    $a.forEach((a) => {
        a.classList.remove('selected');
    });
    target.classList.add('selected');
}

const getCurrentOption = (target) => {
    if(target.classList.contains('all')){
        return 'all';
    }
    else if(target.classList.contains('active')){
        return 'active';
    }
    else if(target.classList.contains('completed')) {
        return 'completed';
    }
}

export const filterTodo = async (target) => {
    event.preventDefault();

    const currentUser = getCurrentUser();
    const currentOption = getCurrentOption(target);

    selectedTarget(target);
    loadTodo(currentUser, currentOption);
}