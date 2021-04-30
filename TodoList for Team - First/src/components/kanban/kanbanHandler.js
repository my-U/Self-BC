import { API } from '../../api/api.js'
import { loadTeamMembers } from './loadTeamMembers.js';
import { getCurrentTeam } from '../../util/localStorage.js';
import { setCurrentMember } from '../../util/localStorage.js';
import { addTeamMember } from './addTeamMember.js';
import { addMemberList } from './addMemberList.js';
import { loadMemberList } from './loadMemberList.js';

const multiTodoApp = ({ target }) => {
    if(target.classList.contains('ripple')) { 
        addTeamMember();
    }
    else if(target.classList.contains('new-todo')) {
        const currentMember = target.closest('li').id;
        setCurrentMember(currentMember);
    }
};

const addMemberTodo = (target) => {
    addMemberList(target);
};

export const kanbanHandler = async () => {
    const $todoAppListContainer = document.querySelector('.todoapp-list-container');

    $todoAppListContainer.addEventListener('click', multiTodoApp);
    $todoAppListContainer.addEventListener('keyup', addMemberTodo);

    const currentTeam = getCurrentTeam();
    loadTeamMembers(currentTeam);
};