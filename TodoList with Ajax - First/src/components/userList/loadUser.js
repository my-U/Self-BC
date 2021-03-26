import { getUser } from '../../api/api.js';

const userButtonTemplate = ({name, _id}) => {
    return `<button class="ripple" id="${_id}">${name}</button>`;
};

const createDeleteButtonTemplate = () => {
    return `<button class="ripple user-create-button">유저 생성 +</button>
            <button class="ripple user-delete-button">유저 삭제 -</button>`
}

export const loadUsers = async (userId = '') => {
    const users = await getUser();

    const $userList = document.querySelector("#user-list");
    const userButton = users.map((name, _id) => userButtonTemplate(name, _id));
    
    $userList.innerHTML = userButton.join('') + createDeleteButtonTemplate();

    if(!userId) {
        const firstUser = $userList.firstChild;
        firstUser.classList.add('active');
    }
    else {
        const currentSeletedUser = document.querySelector(`#${userId}`);
        currentSeletedUser.classList.add('active');
    }
}