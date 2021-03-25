import { postUser } from '../../api/api.js';
import { MIN_USER_NAME_LENGTH } from '../../constant/user.js';
import { loadUsers } from './loadUser.js';

export const addUser = async () => {
    const userName = prompt("추가 할 유저 이름을 입력해주세요.");

    if( userName < MIN_USER_NAME_LENGTH){
        return alert("두 글자 이상 입력해주세요.");
    }
    await postUser(userName);
    loadUsers();
}