import { addUser } from './addUser.js';

const clickUserList = ({target}) => {
    if(!target.classList.contains('ripple')){ return; }

    if(target.classList.contains('user-create-button')){
        addUser();
    }
};

export const userList = () => {
    const $userList = document.querySelector('#user-list');

    $userList.addEventListener('click', clickUserList);
}

