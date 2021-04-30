import { API } from '../../api/api.js';
import { getCurrentTeam, getCurrentMember } from '../../util/localStorage.js';
import { MIN_MEMBER_TODO_LENGTH } from '../../constant/memberConstant.js';

export const addMemberList = async ({target, key}) => {
    
    if(key === 'Enter' && target.value.length >= MIN_MEMBER_TODO_LENGTH) {
        const currentTeam = getCurrentTeam();
        const currentMember = getCurrentMember();
        const newTodo = target.value;

        await API.addMemberList(currentTeam, currentMember, newTodo);
        
    } else {
        return '';
    }
}