import { setCurrentUser } from '../../util/localStorage.js';
import { getUsers } from '../../api/api.js';
import { loadTodo } from '../todoList/loadTodo.js';

const userButtonTemplate = ({ _id, name}) => {
    return `<button class="ripple" id="${_id}">${name}</button>`;
};

const createDeleteButtonTemplate = () => {
    return `<button class="ripple user-create-button">유저 생성 +</button>
            <button class="ripple user-delete-button">유저 삭제 -</button>`
}

export const loadUsers = async (userId = '') => {
    const users = await getUsers();

    const $userList = document.querySelector("#user-list");
    const userButton = users.map((_id, name) => userButtonTemplate(_id, name));
    $userList.innerHTML = userButton.join('\n') + createDeleteButtonTemplate();

    if(!userId) {
        const firstUser = $userList.firstChild;
        firstUser.classList.add('active');

        await loadTodo(firstUser.id);
        setCurrentUser(firstUser.id);
    }
    else {
        const currentSeletedUser = document.getElementById(`${userId}`);
        currentSeletedUser.classList.add('active');

        await loadTodo(userId);
        setCurrentUser(currentSeletedUser);
    }
}