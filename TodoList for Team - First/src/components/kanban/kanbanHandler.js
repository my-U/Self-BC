import { loadTeamMembers } from './loadTeamMembers.js';
import { getCurrentTeam } from '../../util/localStorage.js';
import { addTeamMember } from './addTeamMember.js';

const multiTodoApp = ({target}) => {
    if(target.classList.contains('add-user-button-container')) { 
        addTeamMember(); 
    }
}

export const kanbanHandler = () => {
    const $todoAppListContainer = document.querySelector('.todoapp-list-container');

    $todoAppListContainer.addEventListener('click', multiTodoApp);

    const currentTeam = getCurrentTeam();
    loadTeamMembers(currentTeam);
}