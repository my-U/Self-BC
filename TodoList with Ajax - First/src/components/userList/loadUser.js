import { getUser } from '../../api/api.js';

const userButtonTemplate = ({name, _id}) => {
    return `<button class="ripple" id="${_id}">${name}</button>`;
};

const createDeleteButtonTemplate = () => {
    return `<button class="ripple user-create-button">유저 생성 +</button>
            <button class="ripple user-delete-button">유저 삭제 -</button>`
}

export const loadUsers = async () => {
    const users = await getUser();

    const $userList = document.querySelector("#user-list");
    const userButton = users.map((user) => userButtonTemplate(user));
    
    $userList.innerHTML = userButton.join('') + createDeleteButtonTemplate();
}