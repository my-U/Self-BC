import { API } from '../../api/api.js';
import { getCurrentTeam } from "../../util/localStorage.js";

const changePriority = (priorityValue) => {
    const priority = {
        1: 'FIRST',
        2: 'SECOND',
        0: 'NONE'
    }
    
    return priority[priorityValue];
}

export const changePriorityMemberTodo = async (target) => {
    const currentTeam = getCurrentTeam();
    const currentTodo = target.closest('li').id;
    const currentMember = target.closest('li').parentElement.closest('li').id;
    const currentPriority = changePriority(target.value)

    await API.priorityMemberTodo(currentTeam, currentMember, currentTodo, currentPriority)
}