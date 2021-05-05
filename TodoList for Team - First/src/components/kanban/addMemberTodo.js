import { API } from '../../api/api.js';
import { getCurrentTeam, getCurrentMember } from '../../util/localStorage.js';
import { MIN_MEMBER_TODO_LENGTH } from '../../constant/memberConstant.js';
import { loadTeamMembers } from './loadTeamMembers.js';

export const addMemberTodo = async ({target, key}) => {
    
    if(key === 'Enter' && target.value.length >= MIN_MEMBER_TODO_LENGTH) {
        const currentTeam = getCurrentTeam();
        const currentMember = getCurrentMember();
        const newTodo = target.value;

        await API.addMemberTodo(currentTeam, currentMember, newTodo);
        loadTeamMembers(currentTeam);
    } else {
        return '';
    }
}