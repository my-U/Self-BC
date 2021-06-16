import { API } from "../../api/api.js";
import { getCurrentTeam } from "../../util/localStorage.js";

export const toggleMemberTodo = async (target) => {
    target.closest('li').classList.toggle('completed')
    
    const currentTeam = getCurrentTeam();
    const currentMember = target.closest('li').parentElement.closest('li').id;
    const currentTodo = target.closest('li').id;
    
    await API.toggleMemberTodo(currentTeam, currentMember, currentTodo)
}