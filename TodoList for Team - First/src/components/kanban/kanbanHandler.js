import { loadTeamMembers } from './loadTeamMembers.js';
import { getCurrentTeam } from '../../util/localStorage.js';
import { addTeamMember } from './addTeamMember.js';
import { API } from '../../api/api.js'

const multiTodoApp = ({target}) => {
    if(target.classList.contains('ripple')) { 
        addTeamMember();
    }
}

export const kanbanHandler = async () => {
    const $todoAppListContainer = document.querySelector('.todoapp-list-container');

    $todoAppListContainer.addEventListener('click', multiTodoApp);

    const currentTeam = getCurrentTeam();
    loadTeamMembers(currentTeam);
    const teams = await API.getTeams();
    console.log(currentTeam)
    console.log(teams)
}