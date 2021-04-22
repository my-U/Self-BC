import { API } from '../../api/api.js';
import { getCurrentTeam } from '../../util/localStorage.js';

const renderTeamName = (teamName) => {
    const $userTitle = document.querySelector('#user-title strong');
    $userTitle.innerText = teamName;
}

export const loadTeamMembers = async () => {
    const currentTeam = getCurrentTeam();
    const team = await API.getTeam(currentTeam);

    renderTeamName(team.name);
}
