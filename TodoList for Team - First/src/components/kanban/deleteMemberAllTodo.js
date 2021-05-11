import { API } from '../../api/api.js';
import { getCurrentTeam } from '../../util/localStorage.js';
import { loadTeamMembers } from './loadTeamMembers.js';

export const deleteMemberAllTodo = async (target) => {
    const currentTeam = getCurrentTeam();
    const currentMember = target.parentElement.parentElement.parentElement.id;
    await API.deleteMemberAllTodo(currentTeam, currentMember);
    loadTeamMembers(currentTeam);
}