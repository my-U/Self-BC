import { apiDeleteAllTodo } from '../../api/api.js';
import { getCurrentUser } from '../../util/localStorage.js';
import { loadTodo } from './loadTodo.js';

export const deleteAllTodo = async () => {
    const currentUser = getCurrentUser();
  
    await apiDeleteAllTodo(currentUser);
    loadTodo(currentUser);
};