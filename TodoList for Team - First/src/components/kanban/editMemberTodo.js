import { API } from '../../api/api.js';
import { getCurrentTeam } from '../../util/localStorage.js';
import { loadMemberTodo } from './loadMemberTodo.js';
import { loadTeamMembers } from './loadTeamMembers.js';

export const editMemberTodo = async ({target}) => {
    if(!target.classList.contains('label')){
        return ;
    }
    
    const currentTeam = getCurrentTeam();
    const currentMember = target.closest('li').parentElement.closest('li').id;
    const currentTodo = target.closest('li').id;

    const $li = target.closest('li');
    const editInput = $li.querySelector('.edit');
    
    if($li.classList.contains('todo-list-item')) {
        $li.classList.add('editing');
    }

    editInput.addEventListener('keyup', async ({key}) => {
        if(key === 'Escape'){
            $li.classList.remove('editing');
            loadTeamMembers(currentTeam);
        }
        else if(key === 'Enter'){
            target.lastChild.textContent = editInput.value;
            $li.classList.remove('editing');
            await API.editMemberTodo(currentTeam, currentMember, currentTodo, editInput.value);
            loadTeamMembers(currentTeam);
        }
    });

}