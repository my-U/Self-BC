import { dltUser } from '../../api/api.js';
import { loadUsers } from  './loadUser.js';

export const deleteUser = async () => {
    const confirm = window.confirm("해당 유저를 삭제하시겠습니까?");

    if(confirm) {
        const selectedUser = document.querySelector('.active');
        await dltUser(selectedUser.id);
    }
    loadUsers();
}
