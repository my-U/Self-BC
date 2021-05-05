import { API } from '../../api/api.js';
import { getCurrentTeam, getCurrentMember } from '../../util/localStorage.js';
import { loadTeamMembers } from './loadTeamMembers.js';

export const deleteMemberTodo = async (target) => {
    const currentTeam = getCurrentTeam();
    const currentMember = getCurrentMember();
    const deleteTodo = target.closest('li').id;
    
    await API.deleteMemberTodo(currentTeam, currentMember, deleteTodo);
    loadTeamMembers(currentTeam);
}