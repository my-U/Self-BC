import { apiAddTodo } from '../../api/api.js';
import { getCurrentUser } from '../../util/localStorage.js';
import { MIN_TODO_ITEM_LENGTH } from '../../constant/todo.js';
import { loadTodo } from './loadTodo.js';

export const addTodo = async ({target, key}) => {
    if(key !== 'Enter'){
        return ;
    }
    
    if( target.value.trim().length < MIN_TODO_ITEM_LENGTH ) {
        return alert(`${MIN_TODO_ITEM_LENGTH}글자 이상 입력하세요.`);
    }
    
    const currentUser = getCurrentUser();
    console.log(target.value);
    console.log(currentUser);
    await apiAddTodo(currentUser, target.value.trim());
    await loadTodo(currentUser);

    target.value = '';
}