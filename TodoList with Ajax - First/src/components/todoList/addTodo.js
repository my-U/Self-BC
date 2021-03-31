import { apiAddTodo } from '../../api/api.js';
import { getCurrentUser } from '../../util/localStorage.js';
import { MIN_TODO_ITEM_LENGTH } from '../../constant/todo.js';
import { loadUsers } from '../userList/loadUser.js';

export const addTodo = async ({target, key}) => {
    if(key !== 'Enter'){
        return ;
    }
    
    if( target.value.trim().length < MIN_TODO_ITEM_LENGTH ) {
        return alert(`${MIN_TODO_ITEM_LENGTH}글자 이상 입력하세요.`);
    }
    
    const currentUser = getCurrentUser();

    apiAddTodo(target.value.trim(), currentUser);
    await loadUsers(currentUser); // todo를 입력했을 때 현재 유저를 유지하기 위함

    target.value = '';
}