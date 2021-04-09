import { apiToggleTodo } from '../../api/api.js';
import { getCurrentUser } from '../../util/localStorage.js';
import { loadTodo } from './loadTodo.js';

export const toggleTodo = async (target) => {
    const currentUser = getCurrentUser();
    const currentTarget = target.closest('li').id;

    await apiToggleTodo(currentUser, currentTarget);
    loadTodo(currentUser);
}